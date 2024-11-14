var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dairy_controller = require('../controllers/dairy');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dairy ROUTES ///
// POST request for creating a dairy.
router.post('/dairy', dairy_controller.dairy_create_post);
// DELETE request to delete dairy.
router.delete('/dairy/:id', dairy_controller.dairy_delete);
// PUT request to update dairy.
router.put('/dairy/:id', dairy_controller.dairy_update_put);
// GET request for one dairy.
router.get('/dairy/:id', dairy_controller.dairy_detail);
// GET request for list of all dairy items.
router.get('/dairy', dairy_controller.dairy_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"dairy", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
