var http = require('http');

exports.handler = function(event, context, callback) {
  const domain = event.queryStringParameters.domain;
  console.log(`Checking ${domain}`);

  http.request({ method: 'HEAD', host: domain }, function(res) {
    console.log(`Status: ${res.statusCode}`)
    console.log(`Server header: ${res.headers.server}`)
  }).on('error', function(e) {
    console.log('some error')
  })

  callback(null, {
    statusCode: 200,
    body: `hello ${domain}`
  });
};
