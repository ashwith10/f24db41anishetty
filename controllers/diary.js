var diary = require('../models/diary');
// List of all diarys
// exports.diary_list = function(req, res) {
// res.send('NOT IMPLEMENTED: diary list');
// };
exports.diary_list = async function(req, res) {
    try {
        const thediary = await diary.find();
        res.render('diary',{results: thediary});
    } catch (err) {
        res.status(500).send(`{ "error": err }`);
    }
};


// Handle diary create on POST.
exports.diary_create_post = async function(req, res) {
    let document = new diary();
    document.diary_name = req.body.diary_name;
    document.author = req.body.author;
    document.year = req.body.year;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
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

  
  exports.diary_detail = async function(req, res) {
    try {
        const diary = await diary.findById(req.params.id);
        if (!diary) {
            res.status(404).send('diary not found');
            return;
        }
        res.render('diary_detail', { diary });
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
  };
  
  exports.diary_update_get = async function(req, res) {
    try {
        const diary = await diary.findById(req.params.id);
        if (!diary) {
            res.status(404).send('diary not found');
            return;
        }
        res.render('diary_update', { diary });
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
  };
  
  exports.diary_delete_get = async function(req, res) {
    try {
        const diary = await diary.findById(req.params.id);
        if (!diary) {
            res.status(404).send('diary not found');
            return;
        }
        res.render('diary_delete', { diary });
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
  };
  
  exports.diary_update_post = async function(req, res) {
    res.send('NOT IMPLEMENTED: diary update POST ' + req.params.id);
  };
  
  exports.diary_delete_post = async function(req, res) {
    res.send('NOT IMPLEMENTED: diary delete POST ' + req.params.id);
  };