const express = require('express');
const app = express();
const PORT = 8383;


app.get('/', (req,res) => {

    console.log('yay i reach an end point', res.nethod)
    res.sendStatus(201) //respond code 200-299 means a successful 404 is not found

})

app.get('/homepage/dashboard', (req,res) => {

    console.log('this is the homepage')
    res.send('this is your homepage')
})

app.get('/dashboard', (req,res) => {

    console.log('Now were talking') //basically this is the appearance on the server side
    res.send('Hi')//this is the respond if the user are on the unique page
})




app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
