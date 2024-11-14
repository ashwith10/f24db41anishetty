var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var diary_controller = require('../controllers/diary');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// diary ROUTES ///
// POST request for creating a diary.
router.post('/diary', diary_controller.diary_create_post);
// DELETE request to delete diary.
router.delete('/diary/:id', diary_controller.diary_delete);
// PUT request to update diary.
router.put('/diary/:id', diary_controller.diary_update_put);
// GET request for one diary.
router.get('/diary/:id', diary_controller.diary_detail);
// GET request for list of all diary items.
router.get('/diary', diary_controller.diary_list);
module.exports = router;
// // API for our resources
// exports.api = function(req, res) {
// res.write('[');
// res.write('{"resource":"diary", ');
// res.write(' "verbs":["GET","PUT", "DELETE"] ');
// res.write('}');
// res.write(']')
// res.send();
// };
