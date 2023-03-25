const DUMMY = {
	"vertices": [
		// TITIK PUNCAK // 0
		0, 2, 0,
	
		// BACK
		-1, 0, 0,  // {1}
		-0.8, 0, 0, // {2}
		0, 1.7, 0,    // {3}
		1, 0, 0,  // {4}
		0.8, 0, 0, // {5}
	
		// LEFT - FRONT
		1, 0, 0.15, // {6}
		0, 2, 0.15, // {7}
		  
		// BAR ATAS {8-10}
		0, 1.85, 0,
		0, 1.85, 2,
		0, 2, 2,
	
		// FRONT
		-1, 0, 2,  // {11}
		-0.8, 0, 2, // {12}
		0, 1.7, 2,  // {13}
		1, 0, 2,  // {14}
		0.8, 0, 2, // {15}
	
		// LEFT - BACK
		1, 0, 1.85, // {16}
		0, 2, 1.85, // {17}
	
		// RIGHT - FRONT
		-1, 0, 0.15, // {18}
		0, 2, 0.15, // {19} == 7
		
		// RIGHT - BACK
		-1, 0, 1.85, // {20}
		-1, 0, 2, // {21}
	
		// FLOOR 
		-0.8, 0.2, 2, //22
		0.8, 0.2, 2,  //23
	
		// FLOOR TAMBAHAN
		-0.8, -0.2, 0.15,  // {24}
		0.8, -0.2, 0.15, // {25}
		-0.8, -0.2, 1.85,  // {26}
		0.8, -0.2, 1.85, // {27}
	
		// TOP L - R
		-0.1, 1.8, 0, // {28}
		0.1, 1.8, 0, // {29}
		-0.1, 1.8, 2, // {30}
		0.1, 1.8, 2, // {31}
  
		// FLOOR DEPAN - BOTTOM
		-1, -0.2, 2,    //32
		1, -0.2, 1.85, // 33
		1, -0.2, 2, // 34
		-1, -0.2, 1.85, //35  
  
		-0.8, 0, 1.85, // {36}
		0, 1.7, 1.85,    // {37}
		0.8, 0, 1.85, // {38}
  
		// RUSUK BELAKANG - FRONT
		-1, 0, 0.15,  // 39 == 18
		-0.8, 0, 0.15, // 40
		0, 1.7, 0.15,    // 41
		1, 0, 0.15,  // 42 == 6
		0.8, 0, 0.15, // 43
  
		// FLOOR BELAKANG - BOTTOM
		-1, -0.2, 0,    //44
		1, -0.2, 0.15, // 45
		1, -0.2, 0, // 46
		-1, -0.2, 0.15, //47  
  
		// FLOOR DEPAN - UP
		-0.1, 1.8, 0.15, // {48}
		0.1, 1.8, 0.15, // {49}
		-0.1, 1.8, 1.85, // {50}
		0.1, 1.8, 1.85, // {51}
	],
	
	 "indices" : [
		// RUSUK DEPAN - FRONT(L-R)
		11, 12, 13, 
		11, 13, 10,
		14, 13, 15, 
		14, 10, 13,
  
		// RUSUK DEPAN - BACK(L - R)
		20, 17, 37,
		20, 37, 36,
		38, 37, 16,
		16, 37, 17,

		// // RUSUK DEPAN - RIGHT
		14, 16, 17,
		14, 17, 10,
		13, 37, 38,
		13, 38, 15,
  
		// // // RUSUK DEPAN - LEFT
		10, 17 , 20,
		10, 20 , 11,
		37, 13, 36,
		13, 12, 36,
		
		// // // RUSUK BELAKANG - FRONT
		7, 18, 41,
		41, 18, 40,
		41, 43, 6,
		7, 41, 6,
  
		// // // RUSUK BELAKANG - BACK
		1, 3, 2, 
		1, 0, 3,
		4, 5, 3, 
		4, 3, 0,
  
		// // // RUSUK BELAKANG - RIGHT 
		4, 7, 6,
		4, 0, 7,
		3, 5, 43, 
		41, 3, 43,
  
		// // // RUSUK BELAKANG - LEFT
		0, 1, 18,
		0, 18, 7,
		3, 41, 2,
		41, 40, 2,

   
		// // // BAR ATAS
		0, 31, 29,
		0, 10, 31,
		0, 30, 10,
		0, 28, 30,
		50, 48, 49,
		49, 51, 50,
  
		// // // FLOOR DEPAN - BOTTOM
		32, 35, 34,
		35, 33, 34,
  
		// // FLOOR DEPAN - UP
		12, 36, 38,
		12, 38, 15,
  
		// // FLOOR DEPAN - FRONT
		11, 32, 34,
		11, 34, 14,
  
		// // FLOOR DEPAN - BACK
		26, 36, 27,
		36, 38, 27,
  
		// // FLOOR BELAKANG - UP
		2, 40, 43,
		2, 43, 5,
  
		// FLOOR BELAKANG - BOTTOM
		47, 44, 45,
		44, 46, 45,
  
		// // FLOOR BELAKANG - BACK
		1, 46, 44,
		1, 4, 46,
  
		// // FLOOR BELAKANG - FRONT 
		40, 24, 25, 
		40, 25, 43, 
  
		// // FLOOR KIRI - L - R - B - U
		1, 44, 32,
		1, 32, 11,
  
		36, 40, 24,
		36, 26, 24,
  
		47, 24, 26,
		47, 26, 35,
  
		18, 20, 36,
		18, 36, 40,
  
		// // FLOOR KANAN - L - R - B - U
		43, 25, 27,
		43, 27, 38,
  
		34, 46, 14,
		46, 4, 14,
  
		27, 25, 45,
		45, 33, 27,
  
		43, 38, 16,
		43, 16, 6,
   ],
  
	"color" : [
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,  //6
	  1, 0.85, 0.1,  //7
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  
	  1, 0.1, 0.5,  //10
	  1, 0.1, 0.5,  //11
	  1, 0.1, 0.5, 
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,  //14
  
	  1, 0.1, 0.5, 
	  1, 0.1, 0.5,  //16
	  1, 0.1, 0.5,  //17
	  1, 0.85, 0.1,  //18
	  1, 0.85, 0.1,
	  
	  1, 0.1, 0.5,  //20
	  1, 0.1, 0.5,  //21 
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
  
	  1, 0.85, 0.1,  //25 = merah
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,  //27 = merah
	  1, 0.85, 0.1, //28
	  1, 0.85, 0.1, //29 
	  
	  1, 0.1, 0.5, //30
	  1, 0.1, 0.5, //31
  
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,   //36
	  1, 0.1, 0.5,
	  1, 0.1, 0.5,  //38
	  1, 0.85, 0.1,
	  
	  1, 0.85, 0.1,  //40
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  1, 0.85, 0.1,
	  1, 0.85, 0.1, //44
	  1, 0.85, 0.1, //45
	  1, 0.85, 0.1,
	  1, 0.85, 0.1, //47
	  1, 0.85, 0.1,
  
	  1, 0.85, 0.1,
	  1, 0.1, 0.5, 
	  
	  1, 0.1, 0.5
	]
  }

main(DUMMY);
var tes = false;

function main(jsonObj) {
	// GATAU KALAU DI SCRIPT SLIDENRYA GA SESUAI, JADI LETAK DISINi
	slider_tx.value = tx;
	slider_ty.value = ty;
	slider_ty.value = ty;
	slider_sx.value = sx;
	slider_sy.value = sy;
	slider_sz.value = sz;
	slider_rx.value = rx;
	slider_ry.value = ry;
	slider_rz.value = rz;
	slider_yc.value = yc;
	slider_zc.value = zc;

	const canvas = document.getElementById("canvas");
	const gl = canvas.getContext("webgl");
	// Define the vertex and fragment shaders
	// SHADER -> TAR GANTI BUATAN KITA
	const vertexShaderSource = `
	attribute vec3 aVertexPosition; 
  attribute vec3 aBarycentric;
  attribute vec3 aNormal; 
  
  varying vec3 interpBary;
  varying vec3 normalInterp;
  varying vec3 vertPos;
  
	uniform mat4 uModelViewMatrix; 
	uniform mat4 uProjectionMatrix; 
  uniform mat4 uNormalMatrix; 
  
	attribute vec3 aVertexColor; 
	uniform vec4 uVertexColor;

  varying lowp vec4 vColor;

	void main(void) {
		vec4 newModelViewMatrix = uModelViewMatrix * vec4(aVertexPosition, 1.0);
    
    interpBary = aBarycentric;
		gl_Position = uProjectionMatrix * newModelViewMatrix;
    vec3 transformedNormal = vec3(uNormalMatrix * vec4(aNormal, 0.0));
    vec4 vertPos4 = uModelViewMatrix * vec4(aVertexPosition, 1.0);
    vertPos = vec3(vertPos4) / vertPos4.w;
    normalInterp = vec3(uNormalMatrix * vec4(transformedNormal, 0.0));
    
		vColor = vec4(aVertexColor, 1.0);

  }

	`;
	const fragmentShaderSource = `

	precision mediump float;
  varying vec3 normalInterp;
  varying vec3 vertPos;
  varying lowp vec4 vColor;
  
  uniform vec3 uLightPos;
  uniform vec3 uAmbientColor;
  uniform vec3 uDiffuseColor;
  uniform vec3 uSpecColor;

  uniform float uAmbientCons;
  uniform float uDiffuseCons;
  uniform float uSpecCons;
  uniform float uShineCons;

  uniform bool uShading;

	void main(void) {
    if (uShading){
      vec3 normal = normalize(normalInterp);
      vec3 lightDir = normalize(uLightPos - vertPos);
      vec3 reflectDir = reflect(-lightDir, normal);
      vec3 viewDir = normalize(-vertPos);

      float lambertian = max(dot(lightDir,normal), 0.0);
      float specular = 0.0;

      if(lambertian > 0.0) {
        float specAngle = max(dot(reflectDir, viewDir), 0.0);
        specular = pow(specAngle, uShineCons);
      }

      gl_FragColor = vec4(
        uAmbientCons * uAmbientColor + 
        uDiffuseCons * lambertian * uDiffuseColor + 
        uSpecCons * specular * uSpecColor, 1.0
      );

    }else{
      gl_FragColor = vColor;
    }
	}
	`;

	const program = initShaders(gl, vertexShaderSource, fragmentShaderSource);

	// Draw the scene
	requestAnimationFrame(render);

	function render() {
		// Clear Canvas
		gl.clearColor(0.7, 0.7, 0.7, 1.0);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		// PROJECTION
		var projectionMatrix = getProjection(projection_opt.value)

		const translateMatrix = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, -10, 1
		];
		projectionMatrix = multiply(translateMatrix, projectionMatrix)
		drawObject(gl, program, jsonObj, projectionMatrix);
		requestAnimationFrame(render);
	}
}

function drawObject(gl, program, jsonObj, projectionMatrix) {
	gl.useProgram(program);

	// LOAD OBJECT
	const model = loadObject(
		gl,
		jsonObj.vertices,
		jsonObj.indices,
		jsonObj.color
		);

	var modelViewMatrix = jsonObj.modelViewMatrix? jsonObj.modelViewMatrix : m4();
	// CAMERA ANGLE
	projectionMatrix = rotationY(projectionMatrix, yc);

	// CAMERA ZOOM
	modelViewMatrix = scale(modelViewMatrix, zc, zc, zc);

	// ROTASI
	var cameraMatrix = m4();
	cameraMatrix = xRotate(cameraMatrix, rx/180 * Math.PI);
	cameraMatrix = yRotate(cameraMatrix, ry/180 * Math.PI);
	cameraMatrix = zRotate(cameraMatrix, rz/180 * Math.PI);

	var viewMatrix = inverse(cameraMatrix);
	
	// ANIMASI
	if(animation_check.checked){
		rx >= 360 ? rx = 0 : rx += 0.5
		slider_rx.value = rx;
	}

	// SCALING
	modelViewMatrix = scale(modelViewMatrix, sx, sy, sz);
	modelViewMatrix = multiply(modelViewMatrix, viewMatrix);

	// TRANSLASI
	modelViewMatrix = translate(modelViewMatrix, tx, ty, tz);
	
	// SAVE BUTTON
	save_btn.onclick = () => saveObjectfunction(jsonObj, modelViewMatrix)
	
  {
		const vertexPosition = gl.getAttribLocation(program, "aVertexPosition");
		gl.bindBuffer(gl.ARRAY_BUFFER, model.position);
		gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(vertexPosition);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.indices);

		const aVertexColor = gl.getAttribLocation(program, "aVertexColor");
		gl.bindBuffer(gl.ARRAY_BUFFER, model.color);
		gl.vertexAttribPointer(aVertexColor, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(aVertexColor);
    
    const aBarycentric = gl.getAttribLocation(program, "aBarycentric");
    gl.bindBuffer(gl.ARRAY_BUFFER, model.barycentric);
		gl.vertexAttribPointer(aBarycentric, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aBarycentric);
    
    const aNormal = gl.getAttribLocation(program, "aNormal");
		gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aNormal);
	}
    
	//

	const uProjectionMatrix = gl.getUniformLocation(program, "uProjectionMatrix");
	gl.uniformMatrix4fv(uProjectionMatrix, false, projectionMatrix);

	const uModelViewMatrix = gl.getUniformLocation(program, "uModelViewMatrix");
	gl.uniformMatrix4fv(uModelViewMatrix, false, modelViewMatrix);

  var uShading = gl.getUniformLocation(program, "uShading");
  gl.uniform1i(uShading, shading_check.checked);
  
  //Light Position
  var uLightPos = gl.getUniformLocation(program, "uLightPos");
  gl.uniform3fv(uLightPos, [lx,ly,lz])
  
  // Ambient Color
  var uAmbientColor = gl.getUniformLocation(program, "uAmbientColor");
  gl.uniform3fv(uAmbientColor, aColor);
  // Diffuse Color
  var uDiffuseColor = gl.getUniformLocation(program, "uDiffuseColor");
  gl.uniform3fv(uDiffuseColor, dColor);
  // Specular Color
  var uSpecColor = gl.getUniformLocation(program, "uSpecColor");
  gl.uniform3fv(uSpecColor, sColor);
  
  // Ambient Constant
  var uAmbientCons = gl.getUniformLocation(program, "uAmbientCons");
  gl.uniform1f(uAmbientCons, ar);
  // Diffuse Constant
  var uDiffuseCons = gl.getUniformLocation(program, "uDiffuseCons");
  gl.uniform1f(uDiffuseCons, dr);
  // Specular Constant
  var uSpecCons = gl.getUniformLocation(program, "uSpecCons");
  gl.uniform1f(uSpecCons, sr);

  // Shininess Constant
  var uShineCons = gl.getUniformLocation(program, "uShineCons");
  gl.uniform1f(uShineCons, sh);

  const uNormalMatrix = gl.getUniformLocation(program, "uNormalMatrix");
  var normalModelViewMatrix = transpose(inverse(modelViewMatrix));
  gl.uniformMatrix4fv(uNormalMatrix, false, normalModelViewMatrix);

	{
		gl.drawElements(gl.TRIANGLES, model.ilength, gl.UNSIGNED_SHORT, 0);
	}
}

function initShaders(gl, vertexShaderSource, fragmentShaderSource) {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
	const program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

  if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.log("Unable to init shader program");
  } 
  
	return program;
}

function loadShader(gl, type, source) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);;
  if (!success){
    var error = gl.getShaderInfoLog(shader);
    console.error("Shader compilation failed:", error);
  }

	return shader;
}

// Initialize object
function loadObject(gl, vertices, indices, color) {
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

	if (!color) {
		const temp = [];
		for (var i = 0; i < vertices.length; i++) {
			temp.push(1, 0.9, 0.1);
		}
		color = temp;
	}

	const colorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);

  var bary = []
  var normal = []
  indices.forEach(function(d,i){
    if(i%3 == 0){
      var setOfThreeIndices = indices.slice(i, i+3);
      const v1Idx = setOfThreeIndices[0];
      const v2Idx = setOfThreeIndices[1];
      const v3Idx = setOfThreeIndices[2];
      let v1 = [
        vertices[v2Idx*3 + 0] - vertices[v1Idx*3 + 0],
        vertices[v2Idx*3 + 1] - vertices[v1Idx*3 + 0],
        vertices[v2Idx*3 + 2] - vertices[v1Idx*3 + 0]
      ];
      let v2 = [
        vertices[v3Idx*3 + 0] - vertices[v1Idx*3 + 0],
        vertices[v3Idx*3 + 0] - vertices[v1Idx*3 + 0],
        vertices[v3Idx*3 + 0] - vertices[v1Idx*3 + 0]
      ];
      let n = [0, 0, 0];
      n[0] = v1[1] * v2[2] - v1[2] * v2[1];
      n[1] = v1[2] * v2[0] - v1[0] * v2[2];
      n[2] = v1[0] * v2[1] - v1[1] * v2[0];

      normal.push(n[0],n[1],n[2]);
      bary.push(1,0,0);
    } else if(i % 3 == 1){
        bary.push(0,1,0);
    } else if(i % 3 == 2){
        bary.push(0,0,1);
    }
  });
 
  const barycentricBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, barycentricBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bary), gl.STATIC_DRAW);
  
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normal), gl.STATIC_DRAW);
	
  return {
		position: vertexBuffer,
		indices: indexBuffer,
		color: colorBuffer,
    barycentric : barycentricBuffer,
    normal : normalBuffer,
		vlength: vertices.length,
		ilength: indices.length,
	};
}

function saveObjectfunction (jsonObj, modelViewMatrix) {

	var newJson = JSON.stringify({...jsonObj, "modelViewMatrix": modelViewMatrix})
	const blob = new Blob([newJson], {type: 'application/json'});
  	const url = URL.createObjectURL(blob);
  	const link = document.createElement('a');
  	link.href = url;
  	link.download = 'objects.json';
  	link.click();
  	URL.revokeObjectURL(url);
}