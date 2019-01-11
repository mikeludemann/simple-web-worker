var fname = document.querySelector('#firstName');
var sname = document.querySelector('#lastName');

var result = document.querySelector('.result');

if (window.Worker) {

    var worker = new Worker("worker.js");

    fname.onchange = function () {
        worker.postMessage([fname.value, sname.value]);
    }

    sname.onchange = function () {
        worker.postMessage([fname.value, sname.value]);
    }

    worker.onmessage = function (e) {
        result.textContent = e.data;
    }
}