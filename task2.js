const express = require('express');
const fs = require('fs');
const port = 3000
const app = express();
const bycrypt = require('bcrypt');
const { stringify } = require('querystring');

app.use(express.json())

app.post('/register', async (req, res) => {

    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send("Please Provide Username or Password");
    }
    const hashedpassword = await bycrypt.hash(password, 10);
    const userData = { username, password: hashedpassword }

    fs.writeFile('UserData.json', JSON, stringify(userData, null, 2), (err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send("User Registration Successful")
        }

    })
})

app.post('/login', (req, res) => {

    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send("Please Provide Username or Password");
    }
    fs.readFile('UserData.json', utf - 8, async (err, data) => {
        if (err) {
            return res.status(500).send("Error Reading The File")
        }
        const SavedData = JSON.parse(data) // Saved Data Of Users
        if (SavedData.username === username) {
            const isPasswordValid = await bycrypt.compare(password, SavedData.password)
            if(isPasswordValid) {
                res.status(200).send("Login Successful")
            }else{
                res.status(401).send("Invalid Password")
            }
        }else{
            res.status(401).send("user not found")
        }
    })


})


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})