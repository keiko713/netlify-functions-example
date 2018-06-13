import http from "http";

export function handler(event, context, callback) {
  let domain = null;

  domain = event.queryStringParameters.domain;
  console.log(`Checking ${domain}`);

  http.request({ method: "HEAD", host: domain },
               res => { console.log(`Server header ${res.headers.server}`)});

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({domain: domain})
  });
}
