const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/redirect', (req, res) => res.redirect('/'))

app.get('/fetch-302', (req, res) => {
  const url = "http://localhost:3000/redirect";
  fetch(url, { method: 'GET', redirect: 'manual' })
    .then(response => {
      console.log(response)
      console.log(response.redirected)
      console.log(response.url)
      console.log(response.headers)
    })
    .catch(function (err) {
      console.info(err + " url: " + url);
    });
})

app.get('/cors-test', (req, res) => {
  const url = "http://localhost:9000/test";
  fetch(url, { method: 'GET', mode: 'cors', redirect: 'manual' })
    .then(response => {
      console.log(response)
      console.log(response.headers)
    })
    .catch(function (err) {
      console.info(err + " url: " + url);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))