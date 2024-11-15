var diary = require('../models/diary');
// // List of all diary
// exports.diary_list = function(req, res) {
// res.send('NOT IMPLEMENTED: diary list');
// };
 
// List of all Costumes
exports.diary_list = async function(req, res) {
    try{
    thediarys = await diary.find();
    res.send(thediarys);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
// for a specific diary.
exports.diary_detail = function(req, res) {
res.send('NOT IMPLEMENTED: diary detail: ' + req.params.id);
};
// Handle diary create on POST.
exports.diary_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: diary create POST');
};
// Handle diary delete from on DELETE.
exports.diary_delete = function(req, res) {
res.send('NOT IMPLEMENTED: diary delete DELETE ' + req.params.id);
};
// Handle diary update form on PUT.
exports.diary_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: diary update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.diary_view_all_Page = async function(req, res) {
    try{
    thediary = await diary.find();
    res.render('diary', { title: 'diary Search Results', results: thediary });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
    // Handle Costume create on POST.
exports.diary_create_post = async function(req, res) {
    console.log(req.body)
    let document = new diary();
    console.log(document,"triggering");
    document.diary_name = req.body.diary_name;
    document.author = req.body.author;
    document.year = req.body.year;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    