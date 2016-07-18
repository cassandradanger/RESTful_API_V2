var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

router.get('/getCreature', function(req, res, next) {
  console.log("route hit");
  res.sendFile(path.resolve(__dirname, '../views/data.json'))
});

router.post('/getCreature/:id', function(req, res, next) {
  console.log("post ID", req.body.id);
  console.log("post hit");
  console.log("post like", req.body.like);
  creatures.findOneAndUpdate({_id: req.body.id, like: req.body.like});

});



module.exports = router;
