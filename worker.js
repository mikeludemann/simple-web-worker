onmessage = function (event) {

    var result = 'Full Name: ' + event.data[0] + " " + event.data[1];
    postMessage(result);

}