var jwt = require("jsonwebtoken");
  require("dotenv").config();
  const supersecret = process.env.SUPER_SECRET;
  
  // this middleware will check if user is logged in

  function userShouldBeLoggedIn(req, res, next) { //next here means, go to the next level
    //get the token from the headers and remove bearer part - that is what the const line is showing 
    //sending authorisation of headers below. 1 section of header is the authorisation header
    const header = req.headers["authorization"] || "";
    const token = header.replace(/^Bearer\s/, ""); //passing bearer token and removing bearer part

    // if there is no token, send back an error
    if (!token) {
      res.status(401).send({ message: "please provide a token" });
    } else {
      //if there is a token, verify it  
      jwt.verify(token, supersecret, function (err, decoded) { //get token, pass supersecret
        //if there is an error, send back what error is 
        if (err) res.status(401).send({ message: err.message });
        else {
          //everything is awesome create a new property on the req object to store the user id 
          //that we get from the token payload
          req.user_id = decoded.user_id; //variable user_id is same in auth.js as on this page
          next(); // then calls the next layer of the request (the next method) - this is the get function in auth.js
        }
      });
    }
  }


  
  module.exports = userShouldBeLoggedIn;