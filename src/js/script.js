const slider_rx = document.getElementById("rxField");
const slider_ry = document.getElementById("ryField");
const slider_rz = document.getElementById("rzField");
const slider_sx = document.getElementById("sxField");
const slider_sy = document.getElementById("syField");
const slider_sz = document.getElementById("szField");
const slider_zc = document.getElementById("zoomCamera");
const loader = document.getElementById("load");

var rx = 0;
var ry = 0;
var rz = 0;
var sx = 1;
var sy = 1;
var sz = 1;
var zc = 45;

slider_sx.value = sx;
slider_sy.value = sy;
slider_sz.value = sz;
slider_rx.value = rx;
slider_ry.value = ry;
slider_rz.value = rz;
slider_zc.value = zc;

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

slider_zc.oninput = function () {
	zc = this.value;
};

loader.onchange = function (e) {
	var file = e.target.files[0];
	if (!file) {
		console.log("FILE NOT FOUND");
	}

	var reader = new FileReader();
	reader.onload = function (event) {
		var jsonObj = JSON.parse(event.target.result);
		main(jsonObj);
	};
	reader.readAsText(file);
};
