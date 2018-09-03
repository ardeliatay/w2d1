var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
    var buffer = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
      callback(buffer);

    })

    response.on('end', function (data) {
      console.log("Complete.")
    })
  })
};