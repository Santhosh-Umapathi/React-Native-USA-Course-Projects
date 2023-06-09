const express = require('express'); //Express API
const mongoose = require('mongoose'); //Helper to connect with Mongo DB
const requireAuth = require('../middlewares/requireAuth');
const Track = mongoose.model('Track');
const router = express.Router();


router.use(requireAuth);

router.get('/tracks', async(req, res) => {

    const tracks = await Track.find({userID: req.user._id});

    res.send(tracks);
});

router.post('/tracks', async(req, res) =>{
    const {name, locations} = req.body;

    if(!name || !locations)
    {
        return res.status(422).send({error:'You must provide a Name & Location'});
    }

    try
    {
    const track = new Track({name, locations, userID: req.user._id});
    await track.save();
    res.send(track);
    }
    catch(err)
    {
        res.status(422).send({error: err.message});
    }


});

module.exports = router;