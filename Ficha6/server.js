const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

fs.openSync("./log.txt", "w");



app.get('/', (req, res) => {
  //const body = 'Hello world';
  var body = fs.readFileSync('saudacao.html', 'utf-8');
  body = body.replace("current_date", d.toLocaleDateString());
  res.writeHead(200, {
    'Content-Lengt': Buffer.byteLength(body),
    //'Content-Type': 'text/plain'
    'Content-Type': 'text/html'
  });
  res.end(body);
});

/*

app.get('/', (req, res) => {
  const ficheiro = 'C:/Users/Jorge Oosthuizen/Documents/GitHub/hello-world/Ficha6/saudacao.html'
  res.sendFile(ficheiro);
});
*/
