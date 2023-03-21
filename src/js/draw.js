// Set up the WebGL context
const slider_rx = document.getElementById("rxField");
const slider_ry = document.getElementById("ryField");
const slider_rz = document.getElementById("rzField");

var rx = 0.28;
var ry = -0.33;
var rz = 0.0;

main();

slider_rx.oninput = function () {
  rx = (this.value / 180) * Math.PI;
};

slider_ry.oninput = function () {
  ry = (this.value / 180) * Math.PI;
};

slider_rz.oninput = function () {
  rz = (this.value / 180) * Math.PI;
};

function main() {
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
      vec4 newVertexPosition = uScale * aVertexPosition;
      gl_Position = uProjectionMatrix * uModelViewMatrix * newVertexPosition;
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
  const test = [
    
  ]
  // LOAD OBJECT
  // FUNGSI LOAD BELUM KELAR
  // SEMENTARA UBAH AJA VERTICES & INDICES UNTUK TES MODEL KALIAN
  const vertices = [
    -1, -1, -1,
    1, -1 , -1,
    1, 1, -1,
    -1, 1, -1,

    -1, -1, 1,
    1, -1, 1,
    1, 1, 1,
    -1, 1, 1,

    -0.8, -1, -1,
    -0.8, -0.8, -1,
    -1, -0.8, -1,
    -1, -1, -0.8,
    -0.8, -1, -0.8,
    -0.8, -0.8, -0.8,
    -1, -0.8, -0.8,

    1, -0.8, -1,
    0.8, -0.8, -1,
    0.8, -1, -1,
    1, -1, -0.8,
    1, -0.8, -0.8,
    0.8, -0.8, -0.8,
    0.8, -1, -0.8,

    0.8, 1, -1,
    0.8, 0.8, -1,
    1, 0.8, -1,
    1, 1, -0.8,
    0.8, 1, -0.8,
    0.8, 0.8, -0.8,
    1, 0.8, -0.8,

    -1, 0.8, -1,
    -0.8, 0.8, -1,
    -0.8, 1, -1,
    -1, 1, -0.8,
    -1, 0.8, -0.8,
    -0.8, 0.8, -0.8,
    -0.8, 1, -0.8,

    -0.8, -1, 1,
    -0.8, -0.8, 1,
    -1, -0.8, 1,
    -1, -1, 0.8,
    -0.8, -1, 0.8,
    -0.8, -0.8, 0.8,
    -1, -0.8, 0.8,

    1, -0.8, 1,
    0.8, -0.8, 1,
    0.8, -1, 1,
    1, -1, 0.8,
    1, -0.8, 0.8,
    0.8, -0.8, 0.8,
    0.8, -1, 0.8,

    0.8, 1, 1,
    0.8, 0.8, 1,
    1, 0.8, 1,
    1, 1, 0.8,
    0.8, 1, 0.8,
    0.8, 0.8, 0.8,
    1, 0.8, 0.8,

    -1, 0.8, 1,
    -0.8, 0.8, 1,
    -0.8, 1, 1,
    -1, 1, 0.8,
    -1, 0.8, 0.8,
    -0.8, 0.8, 0.8,
    -0.8, 1, 0.8,
  ];

  const indices = [
    0,1,15,
    0,15,10,

    11,18,1,
    11,1,0,

    14,19,18,
    14,18,11,

    10,15,19,
    10,19,14,

    39,46,47,
    39,47, 42,

    4,5,46,
    4,46,39,

    38,43,5,
    38,5,4,

    42,47,43,
    42,43,38,

    29,24,2,
    29,2,3,
    
    33,28,24,
    33,24,29,

    32,25,28,
    32,28,33,

    3,2,25,
    3,25,32,

    61,56,53,
    61,53,60,
    
    57,52,56,
    57,56,61,

    7,6,52,
    7,52,57,

    60,53,6,
    60,6,7,

    0,4,36,
    0,36,8,

    8,36,37,
    8,37,9,

    9,37,38,
    9,38,10,

    10,38,4,
    10,4,0,
    //B
    1,5,43,
    1,43,15,

    15,43,44,
    15,44,16,

    16,44,45,
    16,45,17,

    17,45,5,
    17,5,1,

    2,6,50,
    2,50,22,

    22,50,51,
    22,51,23,

    23,51,52,
    23,52,24,

    24,52,6,
    24,6,2,

    3,7,57,
    3,57,29,

    29,57,58,
    29,58,30,

    30,58,59,
    30,59,31,

    31,59,7,
    31,7,3,
    
    0,3,32,
    0,32,11,

    11,32,35,
    11,35,12,

    12,35,31,
    12,31,8,

    8,31,3,
    8,3,0,

    1,2,22,
    1,22,17,

    17,22,26,
    17,26,21,

    21,26,25,
    21,25,18,

    18,25,2,
    18,2,1,

    4,7,59,
    4,59,36,

    36,59,63,
    36,63,40,

    40,63,60,
    40,60,39,

    39,60,7,
    39,7,4,

    5,6,53,
    5,53,46,

    46,53,54,
    46,54,49,

    49,54,50,
    49,50,45,

    45,50,6,
    45,6,5,

  ];

  const model = loadObject(gl, vertices, indices);
  const { mat4 } = glMatrix;
  // Draw the scene
  requestAnimationFrame(render);

  function render() {
    // Clear Canvas
    gl.clearColor(1., 1., 1., 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // PROJECTION -> TAR GANTI BUATAN KITA
    const projectionMatrix = mat4.create();
    mat4.perspective(
      projectionMatrix,
      camera.fieldOfView,
      camera.aspectRatio,
      camera.nearClipPlane,
      camera.farClipPlane
    );
    mat4.translate(projectionMatrix, projectionMatrix, [0, 0, -10.0]);

    drawObject(gl, program, model, projectionMatrix);
    requestAnimationFrame(render);
  }
}

function drawObject(gl, program, model, projectionMatrix) {
  gl.useProgram(program);

  const { mat4 } = glMatrix;
  const modelViewMatrix = mat4.create();

  // ROTASI -> TAR GANTI BUATAN KITA
  mat4.rotateX(modelViewMatrix, modelViewMatrix, rx);
  mat4.rotateY(modelViewMatrix, modelViewMatrix, ry);
  mat4.rotateZ(modelViewMatrix, modelViewMatrix, rz);

  {
    const vertexPosition = gl.getAttribLocation(program, "aVertexPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, model.position);
    gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexPosition);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.indices);

  // SCALING -> TAR GANTI BUATAN KITA
  const uScale = gl.getUniformLocation(program, "uScale");
  gl.uniform4fv(uScale, [1.0, 1.0, 1.0, 1.0]);

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
