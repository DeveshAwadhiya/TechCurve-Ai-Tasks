const express = require('express');
const fs = require('fs');
const port = 3000
const app = express();

app.use(express.json())
app.get('/', (req, res) => {
    res.send("Welcome to NodeJs Application")
})

app.post('/form', (req, res) => {
    const form = req.body()
    fs.writeFile('data.json', JSON, Stringify(form, null, 2), (err) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error writing to file")
        }else{
            res.send("Form submitted successfully")
        }
    })
}
)

app.get('/data', (req, res) => {
    fs.readFile('data.json' , (err , data) =>{
        if(err){
            res.status(500).send("Error reading the data")
        }else{
            res.status(200).json(JSON.parse(data))
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})