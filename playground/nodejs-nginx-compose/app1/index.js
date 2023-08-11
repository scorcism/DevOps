const express = require('express');
const app = express();
const path = require("path");
const port =  process.env.port || 5001

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render(__dirname + "/index.html", { port: port })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})