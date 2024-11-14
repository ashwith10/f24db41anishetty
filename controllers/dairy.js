var dairy = require('../models/dairy');
// List of all Costumes
exports.dairy_list = function(req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.dairy_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dairy detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.dairy_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: dairy create POST');
};
// Handle Costume delete from on DELETE.
exports.dairy_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dairy delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dairy_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dairy update PUT' + req.params.id);
};
