const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

var data = fs.readFileSync("./persons.json", "utf-8");
var dataObj = JSON.parse(data);

app.get('/', (req, res) => {
  res.send('Hello World 123!');
});

app.get('/users', (req, res) => {
  res.send(dataObj);
});

app.post('/users', (req, res) => {
  var person = req.body;
  var id = dataObj.data.length + 1;
  person.id = id;
  dataObj.data.push(person);
  res.send("User created with id: " + id);
});

app.delete('/users/:id', (req, res) => {
  res.send("DELETE BY ID");
});

app.get('/users/:id', (req, res) => {
  var id = 2;
  for (var i = 0; i < dataObj.data.length;i++){
    var person = dataObj.data[i];
    
  }
});

app.put('/users/:id', (req, res) => {
  res.send("PUT");
});