const express = require('express');
const router = express.Router();
const isodate = require("isodate");
let profile = require("../models/profile")
router.get('/list', async (req, res) => {
  const queryVal = req.query;
  
  const gender       = queryVal.gender;
  const sdob         = queryVal.sdob;
  const tdob         = queryVal.tdob;
  const caste        = queryVal.caste;
  const natchathiram = queryVal.natchathiram;

  console.log("gender       "+ gender);
  console.log("sdob         "+ sdob);
  console.log("tdob         "+ tdob);
  console.log("caste        "+ caste);
  console.log("natchathira  "+ natchathiram);
  console.log(Date(sdob));


  await profile
  .find({dob:{$gte:isodate(sdob),$lt:isodate(tdob)}})
  .then((result) => {
    res.json({
      data: result,
      message: "All items successfully fetched. 3333 date",
      status: 200,
    });
  })
  .catch((err) => {
    return next(err);
  });
}); 

router.post('/add', (req, res) => {
  res.send('add comments')
}); 


module.exports = router;