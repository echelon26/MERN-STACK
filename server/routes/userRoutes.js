const express = require('express');
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config  = require('../config');
let userModel = require('../model/signupModel');
const userRouter = express.Router();

// userRouter.get('/', (req, res) => {
//     console.log('here');
//     let token = req.headers['x-access-token'];
//     if(!token) {
//         res.status(401).send({auth:false, message: 'No token provided'});
//     }
//     jsonWebToken.verify(token,config.secret, (error, data) => {
//         if(error) {
//             res.send(500).send({auth:false, message: 'unable to authenticate'});
//         }
//         else {
//             res.status(200).send(data);
//         }
//     });
// });

// ----------------------logout code-------------------------------------

userRouter.get('/logout',(req,res) => {
    res.status(200).send({auth:false, token: null,message:'Successfully logout'})
});
//---------------------signin code--------------------------------------------

userRouter.post('/signin',(req, res) => {
    userModel.findOne({email: req.body.email}, (error, user) => {
        if(error) 
            res.status(500).send('server');
        if(!user)  
            res.status(401).send('user not found');
        let validPassword = bcrypt.compareSync(req.body.password, user.password);
        if(!validPassword) 
            res.status(401).send('please enter valid password');
        else {
            let token = jsonWebToken.sign(
                {id: user._id},
                config.secret, {expiresIn:86400});
        
            res.status(200).send({auth:true, token:token, message:'successful'});
        }
    })
});

//----------------------signup code----------------------------------------------
userRouter.post('/signup',(req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let userData =new userModel({
        name: req.body.name,
        email: req.body.email,
        password:hashedPassword
    });
    let token = jsonWebToken.sign(
        {id: userData._id},
        config.secret, {expiresIn:86400});
        console.log(userData);;
        userData.save().then(() => {
        res.status(200).send({auth:true,token:token});
    }).catch((error) => {
        res.status(500).json({error:'not able to register user'});
    })
});

userRouter.delete('/delete/:id',(req, res) => {
    userModel.findOneAndDelete(req.params.id,(error, data) =>
    {
        if(error) {
            res.status(500).send('unable to remove');
        }
        else {
            res.status(200).json({data,dataMessage:'Removed'});
        }
    });
});

module.exports = userRouter;