var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req, res) => {
  const date = new Date()
  let annee = date.getFullYear()

  res.json( {year:`${annee}` });
 });

module.exports = router;
