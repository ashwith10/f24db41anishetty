var express = require('express');
var router = express.Router();
var diary_controllers = require('../controllers/diary');
 
/* GET home page. */
router.get('/',diary_controllers.diary_view_all_Page);
 
 
router.get('/create',diary_controllers.diary_create_post);
// GET request for one diary.
router.get('/diary/:id', diary_controllers.diary_detail);
router.post('/', diary_controllers.diary_create_post);
router.put('/diary/:id', diary_controllers.diary_update_put);
module.exports = router;
 