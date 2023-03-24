const m4 = () => {
	let matrix = [
    1, 0, 0, 0, 
    0, 1, 0, 0, 
    0, 0, 1, 0, 
    0, 0, 0, 1
  ];
	return matrix;
};

const multiply = (a, b) => {
	let res = new Array(16).fill(0);
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			for (let k = 0; k < 4; k++) {
				res[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
			}
		}
	}
	return res;
};

const scale = (m, sx, sy, sz) => {
	const scaleMatrix = [
    sx, 0, 0, 0, 
    0, sy, 0, 0, 
    0, 0, sz, 0, 
    0, 0, 0, 1
  ];
	var res = multiply(m, scaleMatrix);
	return res;
};

const rotationX = (n, a) => {
	var cosAngle = Math.cos(a);
	var sinAngle = Math.sin(a);
	var n_4 = n[4],
		n_5 = n[5],
		n_6 = n[6],
		n_7 = n[7],
		n_8 = n[8],
		n_9 = n[9],
		n_10 = n[10],
		n_11 = n[11];

	var matrix = n;
	matrix[4] = n_4 * cosAngle + n_8 * sinAngle;
	matrix[5] = n_5 * cosAngle + n_9 * sinAngle;
	matrix[6] = n_6 * cosAngle + n_10 * sinAngle;
	matrix[7] = n_7 * cosAngle + n_11 * sinAngle;
	matrix[8] = n_8 * cosAngle - n_4 * sinAngle;
	matrix[9] = n_9 * cosAngle - n_5 * sinAngle;
	matrix[10] = n_10 * cosAngle - n_6 * sinAngle;
	matrix[11] = n_11 * cosAngle - n_7 * sinAngle;

	return matrix;
};

const rotationY = (n, a) => {
	var cosAngle = Math.cos(a);
	var sinAngle = Math.sin(a);
	var n_0 = n[0],
		n_1 = n[1],
		n_2 = n[2],
		n_3 = n[3],
		n_8 = n[8],
		n_9 = n[9],
		n_10 = n[10],
		n_11 = n[11];

	var matrix = n;
	matrix[0] = n_0 * cosAngle - n_8 * sinAngle;
	matrix[1] = n_1 * cosAngle - n_9 * sinAngle;
	matrix[2] = n_2 * cosAngle - n_10 * sinAngle;
	matrix[3] = n_3 * cosAngle - n_11 * sinAngle;
	matrix[8] = n_0 * sinAngle + n_8 * cosAngle;
	matrix[9] = n_1 * sinAngle + n_9 * cosAngle;
	matrix[10] = n_2 * sinAngle + n_10 * cosAngle;
	matrix[11] = n_3 * sinAngle + n_11 * cosAngle;

	return matrix;
};
const rotationZ = (n, a) => {
	var cosAngle = Math.cos(a);
	var sinAngle = Math.sin(a);
	var n_0 = n[0],
		n_1 = n[1],
		n_2 = n[2],
		n_3 = n[3],
		n_4 = n[4],
		n_5 = n[5],
		n_6 = n[6],
		n_7 = n[7];

	var matrix = n;
	matrix[0] = n_0 * cosAngle + n_4 * sinAngle;
	matrix[1] = n_1 * cosAngle + n_5 * sinAngle;
	matrix[2] = n_2 * cosAngle + n_6 * sinAngle;
	matrix[3] = n_3 * cosAngle + n_7 * sinAngle;
	matrix[4] = n_4 * cosAngle - n_0 * sinAngle;
	matrix[5] = n_5 * cosAngle - n_1 * sinAngle;
	matrix[6] = n_6 * cosAngle - n_2 * sinAngle;
	matrix[7] = n_7 * cosAngle - n_3 * sinAngle;

	return matrix;
};

const translate = (m, tx, ty, tz) =>{
	const translateMatrix = [
		1, 0, 0, 0, 
		0, 1, 0, 0, 
		0, 0, 1, 0, 
		tx, ty, tz, 1
	];
	var res = multiply(m, translateMatrix);
	return res;
};

const perspective = (fov, aspect, zNear, zFar) => {
	const f = Math.tan(Math.PI * 0.5 - 0.5 * fov);
	const nf = 1 / (zNear-zFar);
	const mat = [
		f/aspect, 0, 0, 0,
		0, f, 0, 0,
		0, 0, (zFar+zNear) * nf, -1,
		0, 0, 2 * zFar * zNear *nf, 0
	];
	return mat;
}

const oblique = (width, height, depth) => {
	const mat = [
		2/width, 0, 0, 0,
		0, 2/height, 0, 0, 
		0, 0, 2/depth, 0,
		0, 0, 0, 1
	]

	const tetha = 75;
	const phi = 85;
	const cot_tetha = 1 / Math.tan(tetha/180*Math.PI);
	const cot_phi = 1 / Math.tan(phi/180*Math.PI);

	const mat2 = [
		1, 0, 0, 0,
		0, 1, 0, 0,
		-cot_tetha, -cot_phi, 1, 0,
		0, 0, 0, 1
	]

	return multiply(mat, mat2);
}