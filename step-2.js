var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step2.html'
  };

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

getAndPrintHTML()