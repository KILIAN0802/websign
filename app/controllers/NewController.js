const { model } = require("mongoose");
const Information = require("../models/Information");
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

// function multipleMongooseToObject(mongooseArray) {
//     return mongooseArray.map(item => item.toObject());
// }

class NewsController {
    

    // [POST]
    store(req, res, next){
        const formData = req.body;
        const info = new Information(formData);
        info.save()
            .then(() => res.redirect('/news/storedMe'))
            .catch(error => {})

    }
    // [GET] / 
    index(req, res) {
        res.render('news');
       
    }

    storedMe(req, res, next) {   
           Promise.all([ Information.find({}),Information.countDocumentsWithDeleted({deleted: true})])
           .then(([information,deletedCount]) => 
            res.render('manage', {
                deletedCount,
                information: multipleMongooseToObject(information),
            })
        )
        .catch(next);
           
    }


     //news/ trash
    trash(req, res, next){
        Information.findWithDeleted({deleted:true})
        .then(data => {
            res.render('trash', {
                information: multipleMongooseToObject(data),
            });
        })
        .catch(next); 
    }
    

    edit(req, res, next) {
        Information.findById(req.params.id)
        .then(information => res.render('edit',
            {
                information: mongooseToObject(information)
            }
        ))
        .catch(next);
       
    
    }
// [PUT]/news/:id
    update(req, res, next){
        Information.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/news/storedMe'))
        .catch(next);
    
    }
// [DELETE]/news/:id
 destroy(req, res, next){
        Information.delete({ _id: req.params.id})
        .then(() =>res.redirect('/news/storedMe'))
        .catch(next);
 }


 // [DELETE]/news/:id/force
 forceDestroy(req, res, next){
    Information.deleteOne({ _id: req.params.id})
    .then(() =>res.redirect('/news/trash'))
    .catch(next);
}
// [PATCH]/news/:id/restore

 restore(req, res, next){
    Information.restore({ _id: req.params.id})
    .then(() =>res.redirect('/news/storedMe'))
    .catch(next);
 }

 // [POST] /news/handle-form-actions
 handleFormActions(req, res, next){
    return res.json(req.body);
 }
}

//

module.exports = new NewsController();