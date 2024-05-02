const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
const fs = require('fs');
const Sequelize = require('sequelize');


app.use(express.json());


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


const sequelize = new Sequelize('ficha9', 'root', 'Ff00ba123', { dialect: 'mysql' })

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(error => {
        console.error("Unable to connect", error)
    });


const Person = sequelize.define('person', {
    Firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

sequelize.sync({ force: false })
    .then(() => {
        console.log("Database and tables created!");
    });


/*
Person.bulkCreate([
    {Firstname:'Jorge', Lastname: 'Andrade' , Profession: 'Estudante', Age: 28},
    {Firstname:'Luis', Lastname: 'Teixeira' , Profession: 'Estudante', Age: 32},
    {Firstname:'Ricardo', Lastname: 'Rodrigues' , Profession: 'Programador', Age: 23},
    {Firstname:'Francisco', Lastname: 'Mendes' , Profession: 'Eletricista', Age: 30},
    {Firstname:'Mauricio', Lastname: 'VanDjik' , Profession: 'Futebolista', Age: 25}
]);
*/

app.get('/persons', (req, res) => {
    Person.findAll().then(people => {
        res.json(people);
    }).catch(err => {
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/persons', (req, res) => {
    var { newFirstname, newLastname, newProfession, newAge } = req.body
    Person.create({
        Firstname: newFirstname,
        Lastname: newLastname,
        Profession: newProfession,
        Age: newAge
    }).then(newPerson => {
        res.json(newPerson.id);
    }).catch(error => {
        console.error("Error creating person:", error);
        res.sendStatus(500).send("Error creating person");
    });
});

app.delete('/persons', (req, res) => {
    var deleteID = req.body.deleteID
    Person.destroy({
        where: {
            id: deleteID
        }
    })
        .then(result => {
            if (result === 0) {
                return res.status(404).json({ error: "Person not found" });
            } else {
                res.status(200).json({ message: "Person deleted successfully" });
            }
        })
        .catch(err => {
            console.error("Error deleting person:", error);
            res.status(500).json({ error: "Internal server error" });
        });
});



app.delete('/persons/person/:id', (req, res) => {
    var deleteID = req.params.id
    Person.destroy({
        where: {
            id: deleteID
        }
    })
        .then(result => {
            if (result === 0) {
                return res.status(404).json({ error: "Person not found" });
            } else {
                res.status(200).json({ message: "Person deleted successfully" });
            }
        })
        .catch(err => {
            console.error("Error deleting person:", error);
            res.status(500).json({ error: "Internal server error" });
        });
});


app.get('/persons/person', (req, res) => {
    var id = req.query.id
    Person.findByPk(id).then(user => {
        res.json(user);
    }).catch(error => {
        if (user == null) {
            res.status(404).send("User not found!")
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});


app.get("/persons/filter/", (req, res) => {
    var { age, profession } = req.body
    Person.findAll({
        where: { Age: age, Profession: profession }
    }).then(users => {
        res.json(users)
    }).catch(error => {
        res.status(500).json({ error: 'Internal Server Error' })
    })
});

app.put("/persons/update/:id", (req, res) => {
    var selectID = req.params.id;
    var values = req.body
    Person.update({
        Firstname: values.firstname,
        Lastname: values.lastname,
        Profession: values.profession,
        Age: values.age
    }, {
        where: {
            id: selectID
        }
    }).then(users =>{
        Person.findByPk(id);
        res.send(users);
    }).catch(error =>{
        res.status(500).json({error: 'Internal Server Error'});
    });
});