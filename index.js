const express = require('express');
const app = express();
const publicFold = 'public'
const port = 4000;
app.use(express.urlencoded({ extended: true })); // this is to handle URL encoded data
app.use(express.static(publicFold));




app.get('/', (req, res) => {
    res.send("<h1>404 oldal nem található!</h1><p><a href='./index.html'> Vissza a főoldalra!</a></p>")
});
let server = app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}/`);
});
setTimeout(() => {
    server.close()
}, 432000000)