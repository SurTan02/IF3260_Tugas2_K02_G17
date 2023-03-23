const m4 = () => {
	let matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
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
	const scaleMatrix = [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1];
	var res = multiply(m, scaleMatrix);
	return res;
};

const rotationX = (t, n, a) => {
	var sinAngle = Math.sin(a),
		cosAngle = Math.cos(a),
		e = n[4],
		o = n[5],
		i = n[6],
		h = n[7],
		c = n[8],
		s = n[9],
		M = n[10],
		f = n[11];

	t = n;
	t[4] = e * cosAngle + c * sinAngle;
	t[5] = o * cosAngle + s * sinAngle;
	t[6] = i * cosAngle + M * sinAngle;
	t[7] = h * cosAngle + f * sinAngle;
	t[8] = c * cosAngle - e * sinAngle;
	t[9] = s * cosAngle - o * sinAngle;
	t[10] = M * cosAngle - i * sinAngle;
	t[11] = f * cosAngle - h * sinAngle;

	return t;
};
