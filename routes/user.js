const express=require('express')
empRoute = express.Router()
const empModel=require('../models/Employee')
// Middleware
empRoute.use(express.json())
empRoute.use(express.urlencoded({extended:true}))
empRoute.use(express.static('public'));
function router(nav){
    empRoute.get('/', async (req, res) => {
        const emp = await empModel.find();
        res.render('index', { emp ,nav});
    });
    empRoute.get('/add', (req, res) => {
        res.render('add');
    });
    empRoute.post('/add', async (req, res) => {
        const emp=req.body
        const newemp=empModel(emp)
        await newemp.save();
        res.redirect('/');
    });
    empRoute.get('/edit/:id', async (req, res) => {
        const emp = await empModel.findById(req.params.id);
        res.render('edit', { emp });
    });
    empRoute.post('/edit/:id', async (req, res) => {
        const empUpdate=req.body
        console.log( empUpdate)
        const data= await empModel.findByIdAndUpdate(req.params.id, {
                   
                    name: req.body.name,
                    designation: req.body.designation,
                    location: req.body.location,
                    salary: req.body.salary


        });
        console.log(data)
        res.redirect('/');
    });
    empRoute.post('/delete/:id', async (req, res) => {
        await empModel.findByIdAndDelete(req.params.id);
        res.redirect('/');
    });
    return empRoute
}
    module.exports= router

