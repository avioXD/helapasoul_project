const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');
const app = express();
const dotEnv = require('dotenv');

dotEnv.config({path: path.join(__dirname,"./config.env")});
app.use(bodyParser.json());
app.use(express.json());


// connecting database: 
require("./database/connect.db");


// opening Client side: 
app.use(express.static(path.join(__dirname,"../dist/CovidProject")));
app.use(express.static("index.html",{root: "dist/CovidProject"}));

//POST METHODS: 
app.use(require("./route/methodPOST"));
//GET Methods: 
app.use(require("./route/methodGET"))



try {
    app.listen( process.env.PORT, () => {
        console.log("server connection is sucessfull! Running PORT: ",  process.env.PORT);
    })
} catch (e) {
    console.log(`Server Runtime Error:  ${e}`);
}