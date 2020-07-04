const express = require('express');

const app = express()

const PORT = process.env.PORT || 2000

app.get('/',(req,res)=>{
    res.send('<h1>Hello Guys</h1>')
})

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});