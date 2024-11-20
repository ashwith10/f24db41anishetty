var express = require('express');
var router = express.Router();
var diary_controllers = require('../controllers/diary');
 
/* GET home page. */
router.get('/',diary_controllers.diary_view_all_Page);

/* GET detail diary page */
router.get('/detail',diary_controllers.diary_view_one_Page);

/* GET create diary page */
router.get('/create', diary_controllers.diary_create_Page);

/* GET create update page */
router.get('/update', diary_controllers.diary_update_Page);

/* GET delete diary page */
router.get('/delete', diary_controllers.diary_delete_Page);


 
 
router.get('/create',diary_controllers.diary_create_post);
// GET request for one diary.
router.get('/diary/:id', diary_controllers.diary_detail);
router.post('/', diary_controllers.diary_create_post);
router.put('/diary/:id', diary_controllers.diary_update_put);
module.exports = router;
 