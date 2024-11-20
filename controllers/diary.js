var diary = require('../models/diary');
// // List of all diary
// exports.diary_list = function(req, res) {
// res.send('NOT IMPLEMENTED: diary list');
// };
 
// List of all diarys
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
// exports.diary_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: diary detail: ' + req.params.id);
// };
// Handle diary create on POST.
exports.diary_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: diary create POST');
};
// Handle diary delete from on DELETE.
exports.diary_delete = function(req, res) {
res.send('NOT IMPLEMENTED: diary delete DELETE ' + req.params.id);
};
// Handle diary update form on PUT.
// exports.diary_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: diary update PUT' + req.params.id);
// };
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
 
    // Handle diary create on POST.
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
   
   
// for a specific diary.
exports.diary_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await diary.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
 
// // Handle diary update form on PUT.
// exports.diary_update_put = async function(req, res) {
// console.log(`update on id ${req.params.id} with body
// ${JSON.stringify(req.body)}`)
// try {
// let toUpdate = await diary.findById( req.params.id)
// // Do updates of properties
// if(req.body.diary_type)
// toUpdate.diary_type = req.body.diary_type;
// if(req.body.cost) toUpdate.cost = req.body.cost;
// if(req.body.size) toUpdate.size = req.body.size;
// let result = await toUpdate.save();
// console.log("Sucess " + result)
// res.send(result)
// } catch (err) {
// res.status(500)
// res.send(`{"error": ${err}: Update for id ${req.params.id}
// failed`);
// }
// };
// if(req.body.checkboxsale) toUpdate.sale = true;
// else toUpdate.sale= false;
 
// Handle diary update form on PUT.
exports.diary_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`); // Log request details
    try {
        // Find the diary by ID
        let toUpdate = await diary.findById(req.params.id);
 
        // Update the diary properties if they are provided in the request body
        if (req.body.diary_name) toUpdate.diary_name = req.body.diary_name;
        if (req.body.author) toUpdate.author= req.body.author;
        if (req.body.year) toUpdate.year = req.body.year;
        if (req.body.checkboxsale) toUpdate.sale = true;
        else toUpdate.sale = false;
 
        // Save the updated document
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result); // Send the updated document as JSON
    } catch (err) {
        res.status(500); // Internal server error status code
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
};

// Handle diary delete on DELETE.
exports.diary_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await diary.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.diary_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await diary.findById( req.query.id)
    res.render('diarydetail',
    { title: 'diary Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a diary.
// No body, no in path parameter, no query.
// Does not need to be async
exports.diary_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('diarycreate', { title: 'diary Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    // Handle building the view for updating a diary.
// query provides the id
exports.diary_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await diary.findById(req.query.id)
    res.render('diaryupdate', { title: 'diary Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.diary_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await diary.findById(req.query.id)
    res.render('diarydelete', { title: 'diary Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   
    
    
    
 
   

    
