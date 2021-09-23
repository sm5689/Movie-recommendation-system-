const { request } = require('http');
const express = require('express');
var bodyParser=require("body-parser");
const mysql = require('mysql');
const app = express();
let cors = require("cors");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nnd09082001*",
    database: "database - db",
    port: "3306"
});

connection.connect((err) =>{
    if(err){
        throw err;
    } else{
        console.log("Connection Successful!");
    }
});


app.use(cors());
temp_database_after_watched_services = []
app.get("/", function (req,res) {
    connection.query(`Select title, rating, poster from tracker`, function (err, results, fields) {
        for(let i = 0; i<results.length; i++){
            temp_database_after_watched_services.push([results[i].title, results[i].poster, results[i].rating,])
        }
        console.log("Sending the data from the database(tracker) to the function.js file")
        res.send(temp_database_after_watched_services)
    })
    temp_database_after_watched_services = []
})

temp_database_services = []
app.get("/watchlist/get", function (req,res) {
    connection.query(`Select title, description, poster from watchlist`, function (err, results, fields) {
        for(let i = 0; i<results.length; i++){
            temp_database_services.push([results[i].title, results[i].poster, results[i].description,])
        }
        console.log("Sending the data from the database(watchlist) to the function.js file")
        res.send(temp_database_services)
    })
    temp_database_services = []
})

app.use(bodyParser.urlencoded({extended: true}))

// Process application/json
app.use(bodyParser.json());
app.use(cors());
app.post("/", function (req, res) {
    let title = req.body.title;
    let rating = parseInt(req.body.rating);
    let poster = req.body.poster;
    let id = 1;
    connection.query(`Insert into tracker (user_id, title, rating, poster) values (${id}, '${title}', ${rating}, '${poster+'g'}')`);
    res.send(`${title} added to your tracker!!`)
})

app.post("/watchlist", function (req, res) {
    let title = req.body.title;
    let description = req.body.description;
    let poster = req.body.poster;
    let id = 1
    connection.query(`Insert into watchlist (user_id, title, description, poster) values (${id}, '${title}', '${description}', '${poster}')`);
    console.log(`${title} added to your watchlist!!`)
})

app.post("/watchlist/delete/:id", function(req, res){
    let id =  req.params.id;
    let title =req.body.title;
    connection.query(`delete from watchlist where user_id = ${id} and title = '${title}';`)
    console.log(`${title} removed from your watchlist!!`)
});


const port = process.env.port || 5000;
app.listen(port);

console.log("App is listening on port " + port);

