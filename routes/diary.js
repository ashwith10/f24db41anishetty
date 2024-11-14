var express = require('express');
const diary_controllers= require('../controllers/diary');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('diary', { title: 'Diaries'});
});

/* GET costumes */
router.get('/', diary_controllers.diary_view_all_Page );

router.get('/', diary_controllers.diary_list);

router.post('/create', diary_controllers.diary_create_post);

router.get('/:id', diary_controllers.diary_detail);

router.get('/:id/update', diary_controllers.diary_update_get);

router.get('/:id/delete', diary_controllers.diary_delete_get);

router.post('/:id/update', diary_controllers.diary_update_post);

router.post('/:id/delete', diary_controllers.diary_delete_post);

module.exports = router;
