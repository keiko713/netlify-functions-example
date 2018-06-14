var http = require('http');

exports.handler = function(event, context, callback) {
  const domain = event.queryStringParameters.domain;
  console.log(`Checking ${domain}`);

  http.get(`http://${domain}`, (res) => { console.log(`Server header: ${res.headers.server}`) }).on('error', function(e) {
    console.log('some error')
  })

  callback(null, {
    statusCode: 200,
    body: `hello ${domain}`
  });
};
