require('./models/User');
require('./models/Track');

const express = require('express'); //Express API
const mongoose = require('mongoose'); //Helper to connect with Mongo DB
const authRoute = require('./routes/authRoute');
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth');
const bodyParser = require('body-parser'); //Json Parser
const app = express();

app.use(bodyParser.json());
app.use(authRoute);
app.use(trackRoutes);

const mongoURI = 'mongodb+srv://admin:admin@cluster0-oxfvc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected',()=>
{
    console.log('Connected to Mongo Instance')
});

mongoose.connection.on('error',()=>
{
    console.log('Error connecting to Mongo Instance')
});

app.get('/',requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`);
});

app.listen(3000, ()=>{
    console.log('Listening to port 3000');
});

//npm run dev - script added to restart server automatic
