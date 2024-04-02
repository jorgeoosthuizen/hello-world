var express = require('express');
var router = express.Router();

const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ff00ba123',
  database: 'ficha7'
});

app.get('/persons', function(req, res, next) {
  connection.query('SELECT * FROM `persons` ', function(error, results, fields) {
    if (error) {
      console.error("Error fetching data: ", error);
    } else {
      console.log("Results sent!");
      res.json(results); 
    }
    
  });
});

app.post('/persons', (req, res) => {
  const { Firstname, Lastname, Profession, Age } = req.body; 
  connection.query('SELECT COUNT(*) AS count FROM Persons', (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
    }
    const id = results[0].count + 1;
    connection.query('INSERT INTO Persons (ID, Firstname, Lastname, Profession, Age) VALUES (?, ?, ?, ?, ?)', [id, Firstname, Lastname, Profession, Age], (err, result) => {
      if (err) {
        console.error('Erro ao adicionar pessoa:', error);
      }
      res.send({ id });
    });
  });
});

app.delete('/persons/:id', (req,res) => {
  const id = req.params.id;
  connection.query('DELETE FROM `Persons` WHERE `ID` = ?', [id], (error, results) =>{
    if(error){
      console.error('Erro ao eliminar', error);
    }
    else{
      const id = results[0].count + 1;
      res.send(id);
    }
  } )
})




module.exports = router;
