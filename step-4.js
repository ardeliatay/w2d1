var https = require('https');

//library code (person 1)
function getHTML (options, callback) {
  https.get(requestOptions, function (response) {
    var buffer = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    })

    response.on('end', function (data) {
      callback(buffer);
    })
  })
};


////  below here is "application code" (person 2)

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step3.html'
};

getHTML(requestOptions, printHTML);

