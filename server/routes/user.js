const express = require('express')
const router = express.Router();
const Users = require('../models/Users');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    
    try{
       const salt = await bcrypt.genSalt(10);
       const hashedPwd = await bcrypt.hash(req.body.password, salt);
       const newUser = new Users({
        username: req.body.username,
        email: req.body.email,
        password: hashedPwd,
       });
       const user = await newUser.save();
       if(user) res.json(user);

    }catch(err){
        res.json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        if(!user) res.status(500).json('Invalid username or password')
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword) res.status(500).json('Invalid username or password')

        res.json(user);
    }catch(err){
        res.json(err);
    }
})


module.exports = router;