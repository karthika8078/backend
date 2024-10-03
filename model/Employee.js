
const mongoose=require('mongoose');
//creating the schema
const employeeSchema=mongoose.Schema({
    name: String,
  designation: String,
  location: String,
  salary: Number
});
const Employee=mongoose.model('employeeapp',employeeSchema);  // movie = collection name
module.exports=Employee;  // exprot the schema
