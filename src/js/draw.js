// Set up the WebGL context
const slider_rx = document.getElementById("rxField");
const slider_ry = document.getElementById("ryField");
const slider_rz = document.getElementById("rzField");
const slider_sx = document.getElementById("sxField");
const slider_sy = document.getElementById("syField");
const slider_sz = document.getElementById("szField");

var rx = 0.28;
var ry = -0.33;
var rz = 0.0;
var sx = 1;
var sy = 1;
var sz = 1;

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

slider_sx.oninput = function () {
  sx = this.value;
};

slider_sy.oninput = function () {
  sy = this.value;
};

slider_sz.oninput = function () {
  sz = this.value;
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

  // LOAD OBJECT
  // FUNGSI LOAD BELUM KELAR
  // SEMENTARA UBAH AJA VERTICES & INDICES UNTUK TES MODEL KALIAN
  const vertices = [
    // Front face
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,

    // Back face
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0, -1.0, -1.0,

    // Top face
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
     1.0,  1.0,  1.0,
     1.0,  1.0, -1.0,

    // Bottom face
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,

    // Right face
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
     1.0, -1.0,  1.0,

    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0,  1.0, -1.0
];

// Define the indices for each triangle
const indices = [
    0,  1,  2,      0,  2,  3,    // Front face
    4,  5,  6,      4,  6,  7,    // Back face
    8,  9,  10,     8,  10, 11,   // Top face
    12, 13, 14,     12, 14, 15,   // Bottom face
    16, 17, 18,     16, 18, 19,   // Right face
    20, 21, 22,     20, 22, 23    // Left face
];

  const model = loadObject(gl, vertices, indices);
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
    mat4.translate(projectionMatrix, projectionMatrix, [0, 0, -10.0]);

    drawObject(gl, program, model, projectionMatrix);
    requestAnimationFrame(render);
  }
}

function drawObject(gl, program, model, projectionMatrix) {
  gl.useProgram(program);

  const { mat4 } = glMatrix;
  const modelViewMatrix = m4();

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
  // BELUM TEREALISASI
  scale(modelViewMatrix, rx,ry,rz)
  const uScale = gl.getUniformLocation(program, "uScale");
  gl.uniform4fv(uScale, [sx, sy, sz, 1.0]);


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
