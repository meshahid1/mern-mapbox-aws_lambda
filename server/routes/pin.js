const express = require('express')
const router = express.Router();
const PinLocation = require('../models/Pin');

router.post('/', async (req, res) => {
    const newPin = new PinLocation(req.body);
    try{
        const savedRec = await newPin.save();
        if(savedRec) res.json(savedRec);
    }catch(err){
        res.json(err);
    }
});

router.get('/', async (req, res) => {
    try{
        const allPins = await PinLocation.find();
        if(allPins) res.json(allPins);
    }catch(err){
        res.json(err);
    }
})


module.exports = router;