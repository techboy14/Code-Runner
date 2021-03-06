const request = require('request');

module.exports = {
  submitCode: function(data, cb) {
    request({
      url: `https://run.glot.io/languages/${data.language}/latest/`,
      method: 'POST',
      json: true,
      headers: {
        'Authorization': `Token ${process.env.GLOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      json: {
        stdin: data.input,
        files: [{
          name: 'main',
          content: data.sourceCode
        }]
      }
    }, (error, response, body) => {
      cb(body);
    })
  }
}
