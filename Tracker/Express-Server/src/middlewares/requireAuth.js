const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = (req,res,next) =>
{
      const {authorization} = req.headers;

      if(!authorization)
      {
          return res.status(401).send({error:'Logged In'})
      }

      const token = authorization.replace('bearer ','');
      jwt.verify(token,'Secret_Token', async (err,payload) =>{
         if(err)
         {
             return res.status(401).send({error:'Logged IN'});
         }

         const {userID} = payload;
          const user = await User.findById(userID);
          req.user = user;
        next();

      });
};
