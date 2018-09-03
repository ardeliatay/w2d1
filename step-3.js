var https = require('https');

function getAndPrintHTML (options) {
  https.get(requestOptions, function (response) {
    var buffer = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
      // console.log(data + '\n');
    })

    response.on('end', function (data) {
      console.log(buffer);
    })
  })
};

var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions)