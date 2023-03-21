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

    //Box kecil
    -0.4, -0.4, -0.4, 
    0.4, -0.4, -0.4, 
    0.4, 0.4, -0.4, 
    -0.4, 0.4, -0.4, 
    -0.4, -0.4, 0.4, 
    0.4, -0.4, 0.4, 
    0.4, 0.4, 0.4, 
    -0.4, 0.4, 0.4, 
    -0.2, -0.4, -0.4, 
    -0.2, -0.2, -0.4, 
    -0.4, -0.2, -0.4, 
    -0.4, -0.4, -0.2, 
    -0.2, -0.4, -0.2, 
    -0.2, -0.2, -0.2, 
    -0.4, -0.2, -0.2, 
    0.4, -0.2, -0.4, 
    0.2, -0.2, -0.4, 
    0.2, -0.4, -0.4, 
    0.4, -0.4, -0.2, 
    0.4, -0.2, -0.2, 
    0.2, -0.2, -0.2, 
    0.2, -0.4, -0.2, 
    0.2, 0.4, -0.4, 
    0.2, 0.2, -0.4, 
    0.4, 0.2, -0.4, 
    0.4, 0.4, -0.2, 
    0.2, 0.4, -0.2, 
    0.2, 0.2, -0.2, 
    0.4, 0.2, -0.2, 
    -0.4, 0.2, -0.4, 
    -0.2, 0.2, -0.4, 
    -0.2, 0.4, -0.4, 
    -0.4, 0.4, -0.2, 
    -0.4, 0.2, -0.2, 
    -0.2, 0.2, -0.2, 
    -0.2, 0.4, -0.2, 
    -0.2, -0.4, 0.4, 
    -0.2, -0.2, 0.4, 
    -0.4, -0.2, 0.4, 
    -0.4, -0.4, 0.2, 
    -0.2, -0.4, 0.2, 
    -0.2, -0.2, 0.2, 
    -0.4, -0.2, 0.2, 
    0.4, -0.2, 0.4, 
    0.2, -0.2, 0.4, 
    0.2, -0.4, 0.4, 
    0.4, -0.4, 0.2, 
    0.4, -0.2, 0.2, 
    0.2, -0.2, 0.2, 
    0.2, -0.4, 0.2, 
    0.2, 0.4, 0.4, 
    0.2, 0.2, 0.4, 
    0.4, 0.2, 0.4, 
    0.4, 0.4, 0.2, 
    0.2, 0.4, 0.2, 
    0.2, 0.2, 0.2, 
    0.4, 0.2, 0.2, 
    -0.4, 0.2, 0.4, 
    -0.2, 0.2, 0.4, 
    -0.2, 0.4, 0.4, 
    -0.4, 0.4, 0.2, 
    -0.4, 0.2, 0.2, 
    -0.2, 0.2, 0.2, 
    -0.2, 0.4, 0.2, 
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

    // Kotak Kecil
    64, 65, 79, 
    64, 79, 74, 
    75, 82, 65, 
    75, 65, 64, 
    78, 83, 82, 
    78, 82, 75, 
    74, 79, 83, 
    74, 83, 78, 
    103, 110, 111, 
    103, 111, 106, 
    68, 69, 110, 
    68, 110, 103, 
    102, 107, 69, 
    102, 69, 68, 
    106, 111, 107, 
    106, 107, 102, 
    93, 88, 66, 
    93, 66, 67, 
    97, 92, 88, 
    97, 88, 93, 
    96, 89, 92, 
    96, 92, 97, 
    67, 66, 89, 
    67, 89, 96, 
    125, 120, 117, 
    125, 117, 124, 
    121, 116, 120, 
    121, 120, 125, 
    71, 70, 116, 
    71, 116, 121, 
    124, 117, 70, 
    124, 70, 71, 
    64, 68, 100, 
    64, 100, 72, 
    72, 100, 101, 
    72, 101, 73, 
    73, 101, 102, 
    73, 102, 74, 
    74, 102, 68, 
    74, 68, 64, 
    65, 69, 107, 
    65, 107, 79, 
    79, 107, 108, 
    79, 108, 80, 
    80, 108, 109, 
    80, 109, 81, 
    81, 109, 69, 
    81, 69, 65, 
    66, 70, 114, 
    66, 114, 86, 
    86, 114, 115, 
    86, 115, 87, 
    87, 115, 116, 
    87, 116, 88, 
    88, 116, 70, 
    88, 70, 66, 
    67, 71, 121, 
    67, 121, 93, 
    93, 121, 122, 
    93, 122, 94, 
    94, 122, 123, 
    94, 123, 95, 
    95, 123, 71, 
    95, 71, 67, 
    64, 67, 96, 
    64, 96, 75, 
    75, 96, 99, 
    75, 99, 76, 
    76, 99, 95, 
    76, 95, 72, 
    72, 95, 67, 
    72, 67, 64, 
    65, 66, 86, 
    65, 86, 81, 
    81, 86, 90, 
    81, 90, 85, 
    85, 90, 89, 
    85, 89, 82, 
    82, 89, 66, 
    82, 66, 65, 
    68, 71, 123, 
    68, 123, 100, 
    100, 123, 127, 
    100, 127, 104, 
    104, 127, 124, 
    104, 124, 103, 
    103, 124, 71, 
    103, 71, 68, 
    69, 70, 117, 
    69, 117, 110, 
    110, 117, 118, 
    110, 118, 113, 
    113, 118, 114, 
    113, 114, 109, 
    109, 114, 70, 
    109, 70, 69, 

    // Relasi Sudut Kubus
    // A dengan I
    8,11,75,
    8,75,72,

    9,8,72,
    9,72,73,

    14,9,73,
    14,73,78,

    11,14,78,
    11,78,75,

    //B dengan J
    
    18,17,81,
    18,81,82,
    
    17,16,80,
    17,80,81,
    
    16,19,83,
    16,83,80,
    
    19,18,82,
    19,82,83,

    //C dengan K
    22,25,89,
    22,89,86,

    28,23,87,
    28,87,92,

    23,22,86,
    23,86,87,

    25,28,92,
    25,92,89,

    //D dengan L
    32,31,95,
    32,95,96,

    30,33,97,
    30,97,94,

    31,30,94,
    31,94,95,

    33,32,96,
    33,96,97,
    
    //E dengan M
    
    36,39,103,
    36,103,100,
    
    37,36,100,
    37,100,101,
    
    42,37,101,
    42,101,106,
    
    39,42,106,
    39,106,103,

    //F dengan N

    46,45,109,
    46,109,110,

    45,44,108,
    45,108,109,

    44,47,111,
    44,111,108,

    47,46,110,
    47,110,111,

    //G dengan O
    
    50,53,117,
    50,117,114,
    
    56,51,115,
    56,115,120,
    
    51,50,114,
    51,114,115,
    
    53,56,120,
    53,120,117,

    //H dengan P
    60,59,123,
    60,123,124,

    58,61,125,
    58,125,122,

    59,58,122,
    59,122,123,

    61,60,124,
    61,124,125,
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
