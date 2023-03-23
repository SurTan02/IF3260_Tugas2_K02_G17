
const jsonObj = {
  "vertices": [
    0, 2, 0,
  
    -1.0, 0, 0,  
    -0.9, 0, 0, 
    0, 1.8, 0,  
    1.0, 0, 0,  
    0.9, 0, 0, 
  
    1.0, 0, 0.1, 
    0, 2, 0.1, 
      
    0, 1.8, 0,
    0, 1.8, 2,
    0, 2, 2,
  
    -1.0, 0, 2,  
    -0.9, 0, 2, 
    0, 1.8, 2,    
    1.0, 0, 2,  
    0.9, 0, 2, 
  
    1.0, 0, 2, 
    0, 2, 2, 
  
    -1.0, 0, 0.1, 
    0, 2, 0.1, 
    
    -1.0, 0, 2, 
    -1.0, 0, 2, 
  
    -0.9, 0, 2,
    0.9, 0, 2, 
  
    -0.95, 0.1, 0,  
    0.95, 0.1, 0, 
    -0.95, 0.1, 2, 
    0.95, 0.1, 2, 
  
    -0.05, 1.9, 0,
    0.05, 1.9, 0, 
    -0.05, 1.9, 2,
    0.05, 1.9, 2
  ],
  "indices":  [
    1, 2, 3, 
    1, 3, 0,
    4, 5, 3, 
    4, 3, 0,
  
    4, 6, 7,
    4, 7, 0,
  
    14, 16, 17,
    14, 17, 10,
  
    0, 9, 8,
    10, 9, 0,
    0, 29, 31,
    0, 31, 10,
    0, 10, 30,
    0, 30, 28,
  
    11, 12, 13, 
    11, 13, 10,
    14, 15, 13, 
    14, 13, 10,
  
    0, 1, 18,
    0, 18, 19,
  
    10, 17 , 20,
    10, 20 , 21,
  
    1, 22, 2,
    1, 11, 22,
  
    4, 5, 23,
    4, 23, 14,
  
    20, 11, 16,
    11, 14, 16,
  
    1, 18, 4,
    4, 18, 6,
    
    1, 4, 24,
    25, 24, 4,
    4, 14, 25,
    25, 14, 27,
    1, 24, 11,
    11, 24, 26,
    14, 26, 27,
    11, 26, 14
  ]
}

main(jsonObj)

function main(jsonObj) {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl");
  // Define the vertex and fragment shaders
  // SHADER -> TAR GANTI BUATAN KITA
  const vertexShaderSource = `
  attribute vec4 aVertexPosition;

  uniform vec4 uScale;
  uniform vec4 uVertexColor;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying lowp vec4 vColor;

  void main() {
      vec4 worldPos = uModelViewMatrix * aVertexPosition;
      gl_Position = uProjectionMatrix * worldPos;
      vColor = uVertexColor;
  }

`;
  const fragmentShaderSource = `
  varying lowp vec4 vColor;

  void main() {
      gl_FragColor = vColor;
  }
`;

  const program = initShaders(gl, vertexShaderSource, fragmentShaderSource);

  // Set up the camera -> TAR GANTI BUATAN KITA
  const camera = {
    fieldOfView: (45 * Math.PI) / 180, // in radians
    aspectRatio: canvas.clientWidth / canvas.clientHeight,
    nearClipPlane: 0.1,
    farClipPlane: 100.0,
  };

  // LOAD OBJECT
  const model = loadObject(gl, jsonObj.vertices, jsonObj.indices);
  
  const { mat4 } = glMatrix;
  // Draw the scene
  requestAnimationFrame(render);

  function render() {
    // Clear Canvas
    gl.clearColor(0.7, 0.7, 0.7, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // PROJECTION -> TAR GANTI BUATAN KITA
    const projectionMatrix = m4();
    mat4.perspective(
      projectionMatrix,
      camera.fieldOfView,
      camera.aspectRatio,
      camera.nearClipPlane,
      camera.farClipPlane
    );
    // const projectionMatrix = getProjection(45, camera.aspectRatio, 1, 100)
    mat4.translate(projectionMatrix, projectionMatrix, [0, 0, -10.0]);
    drawObject(gl, program, model, projectionMatrix);
    requestAnimationFrame(render);
  }
}

function drawObject(gl, program, model, projectionMatrix) {
  gl.useProgram(program);

  const { mat4 } = glMatrix;
  var modelViewMatrix = m4();

  // SCALING 
  modelViewMatrix = scale(modelViewMatrix, sx,sy,sz)
  // ROTASI -> TAR GANTI BUATAN KITA
  mat4.rotateX(projectionMatrix, projectionMatrix, rx);
  mat4.rotateY(projectionMatrix, projectionMatrix, ry);
  mat4.rotateZ(projectionMatrix, projectionMatrix, rz);
  // console.log(modelViewMatrix)
  {
    const vertexPosition = gl.getAttribLocation(program, "aVertexPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, model.position);
    gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexPosition);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.indices);

  // COLOR
  const uVertexColor = gl.getUniformLocation(program, "uVertexColor");
  gl.uniform4fv(uVertexColor, [0.2, 0.6, 0.9, 1.0]);

  const uProjectionMatrix = gl.getUniformLocation(program, "uProjectionMatrix");
  gl.uniformMatrix4fv(uProjectionMatrix, false, projectionMatrix);

  const uModelViewMatrix = gl.getUniformLocation(program, "uModelViewMatrix");
  gl.uniformMatrix4fv(uModelViewMatrix, false, modelViewMatrix);

  {
    gl.drawElements(gl.TRIANGLES, model.ilength, gl.UNSIGNED_SHORT, 0);
  }
}

function initShaders(gl, vertexShaderSource, fragmentShaderSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = loadShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  return program;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  return shader;
}

// Initialize object
function loadObject(gl, vertices, indices) {
  // Vertices's positions
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return {
    position: vertexBuffer,
    indices: indexBuffer,
    vlength : vertices.length,
    ilength : indices.length,
  };
}