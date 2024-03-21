const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

fs.openSync("./log.txt", "a+");

function log (req,res){
  var str = (req.route.path + " -- " + req.method + " -- " + new Date().toUTCString() + "\n");
  fs.appendFileSync("./log.txt", str)
}

app.get('/', (req, res) => {
  log(req,res);
  //const body = 'Hello world';
  var d = new Date();
  var body = fs.readFileSync('saudacao.html', 'utf-8');
  body = body.replace("current_date", d.toLocaleDateString());
  res.writeHead(200, {
    'Content-Lengt': Buffer.byteLength(body),
    //'Content-Type': 'text/plain'
    'Content-Type': 'text/html'
  });
  res.end(body);
});


app.get('/greet/:name', (req, res) => {
  log(req,res);
  var name = req.params.name;
  var d = new Date();
  var body = fs.readFileSync('saudacao.html', 'utf-8');
  body = body.replace("current_date", d.toLocaleDateString());
  body = body.replace("Hello", "Hello " + name + ", today is: ");
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
  });
  res.end(body);
});


app.get('/log.txt', (req,res) => {
  log(req,res);
  var str = (req.route.path + "," + req.method + "," + new Date().toUTCString());
  res.send(str);
})

app.get('/log', (req,res) => {
  log(req,res);
  var log = fs.readFileSync("log.txt" , "utf-8");
  res.send(log);
})

app.get('/log/download', (req,res) => {
  log(req,res);
  var dFicheiro = 'C:/Users/Jorge Oosthuizen/Documents/GitHub/hello-world/Ficha6/log.txt'
  res.download(dFicheiro);
})

app.get('/log/delete', (req,res) => {
  fs.unlink("C:/Users/Jorge Oosthuizen/Documents/GitHub/hello-world/Ficha6/log.txt", (err)=>{
    if (err){
      console.log("Não foi possivel eliminar!");
      res.send("Não foi possivel eliminar!");
    }
    else{
      console.log("Ficheiro eliminado!");
      res.send("Ficheiro eliminado!");
    }
  })
  
})

/*

app.get('/', (req, res) => {
  const ficheiro = 'C:/Users/Jorge Oosthuizen/Documents/GitHub/hello-world/Ficha6/saudacao.html'
  res.sendFile(ficheiro);
});
*/
