var express = require('express');
var router = express.Router();

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
  const date = new Date()
  let annee = date.getFullYear()

  res.json( {year:`${annee}` });
 });

module.exports = router;
