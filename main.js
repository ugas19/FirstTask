const express = require('express')
const app = express()
const port = 3000
//const morgan = require('morgan');

//app.use(morgan('dev'));
app.use(express.static('public'));
app.get('*', (req, res) => res.sendFile(__dirname + '/public/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
