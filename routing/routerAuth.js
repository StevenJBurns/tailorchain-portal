/* Create a router via Exoress */
const routerAuth = require("express").Router();

/* Import Mongo data models to use in API routes */
// const Franchise = require("../models/franchiseModel.js");
// const UserAccount = require("../models/userAccountModel.js");


routerAuth.get("/register", (req, res) => {
//   Franchise.find()
//     .then(franchises => res.json(franchises))
//     .catch(err => console.error(err));
  res.status(200).json({
    route: "register"
  })
});

routerAuth.get("/authenticate", (req, res) => {
//   UserAccount.find()
//     .then(users => res.json(users))
//     .catch(err => console.error(err));
  res.status(200).json({
    route: "authenticate"
  })
});

routerAuth.get("/authorization", (req, res) => {
//   UserAccount.find()
//     .then(users => res.json(users))
//     .catch(err => console.error(err));
  res.status(200).json({
    route: "authorization"
  });
});

routerAuth.get("/account", (req, res) => {
  //   UserAccount.find()
  //     .then(users => res.json(users))
  //     .catch(err => console.error(err));
  res.status(200).json({
    route: "account"
  });
});

module.exports = routerAuth;
