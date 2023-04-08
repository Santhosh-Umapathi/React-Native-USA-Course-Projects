const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = new User({email, password});
        await user.save();

        const token = jwt.sign({userID: user._id},'Secret_Token');
        res.send({token});
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
});

router.post('/signin', async (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password)
    {
        return res.status(422).send({error:'Must Provide Email & Password'});
    }

    const user = await User.findOne({email});

    if(!user)
    {
        return res.status(404).send({error:'Email not found'});
    }

    try
    {
        await user.comparePassword(password);
        const token = jwt.sign({userID: user._id},'Secret_Token');
        res.send({token});

    }
    catch (err)
    {
        return res.status(422).send({error:'Email or Password invalid'});
    }

});

module.exports = router;
