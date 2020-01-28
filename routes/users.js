var express = require('express');
var router = express.Router();

var users = [
  {name:"Nikita", age: 13},
  {name:"Anton", age: 27},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/searchbyname', function(req, res, next) {
  var name = req.query.name;
  for (i=0;i<users.length;i++)
  {
    if (users[i].name===name) {
      res.send(users[i]);
      return
    }
  }
  res.send(`User Not Found`);
});

module.exports = router;
