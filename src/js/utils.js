const m4 = () =>{
    let matrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ]
    return matrix;
}

const multiply = (a, b) =>{
    let res= new Array(16).fill(0);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          res[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
        }
      }
    }
    return res;
}
  

const scale = (m, sx, sy, sz ) => {
    const scaleMatrix =[
        sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0,  1,
    ];
    var res = multiply(m, scaleMatrix)
    return res;
}