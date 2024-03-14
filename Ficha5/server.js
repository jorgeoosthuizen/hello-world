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
  var id = req.params.id;
  for (var i = 0; i < dataObj.data.length; i++) {
      dataObj.data = dataObj.data.filter((person) => person.id != id);
      res.send(dataObj.data);
    }
});

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = null;
  for (var i = 0; i < dataObj.data.length; i++) {
    if (dataObj.data[i].id == id) {
      person = dataObj.data[i];
      break;
    }
  }
  if (person == null) {
    res.send("User not found.")
  }
  else {
    res.send(person);
  }

});

/*
app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var { newFirstName, newLastName, newProfession, newAge } = req.body; 
  for (let person of dataObj.data) {
    if (person.id == id) {
        person.firstName = newFirstName;
        person.lastName = newLastName;
        person.profession = newProfession;
        person.age = newAge;
    }
    else{
      res.send("User not found!")
    }
}
  res.send("Updated user :" + JSON.stringify(dataObj.data));
});
*/


app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var details = req.body; 
  var contains = false;
  details.id = id;
  for (i=0;i<dataObj.data.length;i++) {
    if (dataObj.data[i].id == id) {
      dataObj.data[i] = details;
      contains = true;
      break;
    }
}

if(contains == false){
  res.send("User not found!");
}
else{
  res.send("Updated user :" + details);
}  
});

