/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 06/12/2023 - 20:24:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// cookie   can  I do the authorization and  authentification 
'use strict';
const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.setHeader("set-cookie",'server-name=server1')
    res.setHeader("content-type",'text/html')
    // console.log(res.header)

	});
app.get("/print", (req, res) => {
   console.log(res.header)
   res.end("ok \n");
	});
    



app.listen(PORT, () => console.log("Server running on port " + PORT));