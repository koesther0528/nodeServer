const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/public'))
app.use((req,res,next) => {
    next()
})

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname+'/index2.html')
})

app.listen(PORT, () =>{
    console.log(`Listen : &{PORT}`)
})