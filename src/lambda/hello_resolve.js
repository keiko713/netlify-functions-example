import http from "http";

exports.handler = function(event, context, callback) {
  const domain = event.queryStringParameters.domain;
  console.log(`Checking ${domain}`);

  http.request({ method: "HEAD", host: domain },
               res => { console.log(`Server header ${res.headers.server}`)});

  callback(null, {
    statusCode: 200,
    body: `hello ${domain}`
  });
};
