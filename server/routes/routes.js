const express = require('express');
const router = express.Router();
const personModel = require('../model/model');

// fetching the records-----------------------------------

router.get('/', (req, res) =>{
    personModel.find((error, data) => {
        if(error){
            console.log("Unable to fetch data");
        }
        else {
            res.json(data);
        }

    });
});

//-------------------post the data-------------------------

router.post('/add', (req, res) =>{
let person = new personModel(req.body);
    person.save().then(person => {
        res.status(200).json(person);
    }).catch(() => {
        res.status(400).json({error:'Oops!! something went wrong'});
    })
});

//-------------update data---------------------------------

router.put('/update/:id', (req, res) => {

    personModel.findOneAndUpdate(req.body.id, req.body, (error,data)=>{
        if(error) {
            res.status(400).json({error:'not updated'})
        }
        else {
            res.status(200).json(data);
        }
    });
});

//delete data---------------------------------------------

router.delete('/delete/:id', (req, res) =>{
    personModel.findOneAndRemove(req.body.id,(error, data)=> {
        if(error) {
            res.status(400).json({error:'Unable to delete'});
        }
        else {
            res.status(200).json(data);
        }
    });

});

module.exports = router;