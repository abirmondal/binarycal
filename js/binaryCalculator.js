var res = document.getElementById('res');
function inputRes(e) {
    res.innerHTML += e.innerHTML;
}
document.getElementById('btnClr').onclick = function () {
    res.innerHTML = null;
}
document.getElementById('btnEql').onclick = function () {
    var resultVal;
    let x = res.innerHTML.match(/\d+/g);
    let y = res.innerHTML.match(/[+|\-|*|/]/);

    let a = binToDec(x[0]);
    let b = (x[1] == null) ? '0' : binToDec(x[1]);

    let sign = (y == null) ? '+' : y[0];
    resultVal = result(a, b, sign);
    resultVal = decToBin(resultVal);

    res.innerHTML = resultVal;
}

function binToDec(bin = 0) {
    return parseInt(bin, 2).toString(10);
}
function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

function result(a, b, o) {
    var res;
    a = Number(a);
    b = Number(b);
    switch (o) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
    }
    return res;
}