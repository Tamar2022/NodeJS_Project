var CategoryModel = require('../models/CategoryModel.js');

/**
 * CategoryController.js
 *
 * @description :: Server-side logic for managing Categorys.
 */
 module.exports.list= async function(req,res){
    let categories=await CategoryModel.find();
    if(categories)
    return res.json(categories);
    return res.status(500).json({
        message: 'Error when getting Category.',
        error: err
    });
  }
// module.exports = {

//     /**
//      * CategoryController.list()
//      */
    
    
    

//     /**
//      * CategoryController.show()
//      */
//     show: function (req, res) {
//         var id = req.params.id;

//         CategoryModel.findOne({_id: id}, function (err, Category) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting Category.',
//                     error: err
//                 });
//             }

//             if (!Category) {
//                 return res.status(404).json({
//                     message: 'No such Category'
//                 });
//             }

//             return res.json(Category);
//         });
//     },

//     /**
//      * CategoryController.create()
//      */
//     create: function (req, res) {
//         var Category = new CategoryModel({
// 			id : req.body.id,
// 			name : req.body.name
//         });

//         Category.save(function (err, Category) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when creating Category',
//                     error: err
//                 });
//             }

//             return res.status(201).json(Category);
//         });
//     },

//     /**
//      * CategoryController.update()
//      */
//     update: function (req, res) {
//         var id = req.params.id;

//         CategoryModel.findOne({_id: id}, function (err, Category) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting Category',
//                     error: err
//                 });
//             }

//             if (!Category) {
//                 return res.status(404).json({
//                     message: 'No such Category'
//                 });
//             }

//             Category.id = req.body.id ? req.body.id : Category.id;
// 			Category.name = req.body.name ? req.body.name : Category.name;
			
//             Category.save(function (err, Category) {
//                 if (err) {
//                     return res.status(500).json({
//                         message: 'Error when updating Category.',
//                         error: err
//                     });
//                 }

//                 return res.json(Category);
//             });
//         });
//     },

//     /**
//      * CategoryController.remove()
//      */
//     remove: function (req, res) {
//         var id = req.params.id;

//         CategoryModel.findByIdAndRemove(id, function (err, Category) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when deleting the Category.',
//                     error: err
//                 });
//             }

//             return res.status(204).json();
//         });
//     }
// };
