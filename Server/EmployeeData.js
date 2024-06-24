
const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
        
})
const EmployeeModel = mongoose.model('student',UserSchema)
module.exports= EmployeeModel