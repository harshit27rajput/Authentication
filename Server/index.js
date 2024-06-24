const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const EmployeeModel = require("./EmployeeData")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/authorization')
  .then(console.log("MongoDB Connected...."))
  .catch((err) => console.log(err))

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
  const {email, password} = req.body
  EmployeeModel.findOne({ email })
    .then(user=> {
      if (user) {
        if (user.password === password) {
          res.json("success")
        }
        else {
          res.json("Your Password is Incorrect")
        }
      }
      else{
        res.json("NO RECORD EXIST")
      }
    })
})


app.listen(3003, () => {
  console.log("Server is running on port 3003")
})