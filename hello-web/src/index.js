const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res) => {
    res.send('Hello, This web application works properly.')
})


app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})