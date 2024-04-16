var express = require('express');
var router = express.Router();

const app = express();
const port = 3000;
const fs = require('fs');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

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

app.get('/persons', function(req, res) {
  connection.query('SELECT * FROM persons ', function(error, results, fields) {
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
    connection.query('INSERT INTO persons (Firstname, Lastname, Profession, Age) VALUES ( ?, ?, ?, ?)',  [Firstname, Lastname, Profession, Age], (error, results) => {
      if (error) {
        console.error('Erro ao adicionar pessoa:', error);
      }
      else{
        res.send(JSON.stringify(results.insertId));
    }
    });
  });



app.delete('/persons', (req,res) => {
  var id = req.body.id
  var sql = 'DELETE FROM persons WHERE ID = ?';
  connection.query(sql, [id], (error, results) =>{
    if(error){
      console.error('Erro ao eliminar, ID não existe.', error);
    }
    else{
      res.send(JSON.stringify(results.affectedRows));
    }
  });
});


app.delete('/persons/:id', (req,res) => {
  const id = req.params.id;
  connection.query('DELETE FROM persons WHERE ID = ?', [id], (error, results) =>{
    if(error){
      console.error('Erro ao eliminar', error);
    }
    else{
      res.send(JSON.stringify(results.affectedRows));
    }
  } )
})

app.get('/persons/:id', function(req, res) {
  var id = req.params.id;
  connection.query('SELECT * FROM persons WHERE ID = ? ',[id], function(error, results, fields) {
    if (error) {
      console.error("Error fetching data: ", error);
    } else {
      console.log("Results sent!");
      res.json(results); 
    }
    
  });
});

app.get('/persons/:age/:profession', function(req, res) {
  var {profession, age} = req.params;
  connection.query('SELECT * FROM persons WHERE Age = ? OR Profession = ?',[age, profession], function(error, results, fields) {
    if (error) {
      console.error("Error fetching data: ", error);
    } else {
      console.log("Results sent!");
      res.json(results); 
    }
  });
});

app.put('/persons/:id', function(req,res){
  var details = req.body
  var id = req.params.id;
  connection.query('UPDATE persons SET (Firstname , Lastname ,  Profession  , Age ) VALUES (?,?,?,?) WHERE ID = ?' , [details.Firstname, details.Lastname,details.Age, details.Profession, id], function(error,results,fields){
    if (error) {
      console.error("Error fetching data: ", error);
  }else{
    res.send(results);
  }
})
});





module.exports = router;
