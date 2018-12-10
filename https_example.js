var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

console.log("I'm about to make the request!");

const request = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

request.on('error', (e) => {
  console.error(e);
});

request.end();

console.log("I've made the request!");
