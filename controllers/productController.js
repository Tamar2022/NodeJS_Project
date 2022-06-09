var ProductModel = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */


module.exports.list= async function(req,res){
    let products=await ProductModel.find();
    if(products)
    return res.json(products);
    return res.status(500).json({
        message: 'Error when getting Product.',
        error: err
    });
  }



  module.exports.show= async function(req,res){
    const categoryId=req.query.category;
    try
    {
    const products= await  ProductModel.find({category: categoryId});
   
    if(products.length==0)
    {
        return res.status(404).json({
            message: 'No such product'
        });
    }
    return res.json(products);
 
}catch(err){
    return res.status(500).json({
        message: 'Error when getting product.',
        error: err
    });
}
    
}
// module.exports = {

    
    
//     /**
//      * productController.create()
//      */
//     create: function (req, res) {
//         var product = new ProductModel({
// 			name : req.body.name,
// 			price : req.body.price,
// 			imgName : req.body.imgName,
// 			description : req.body.description,
// 			category : req.body.category
//         });

//         product.save(function (err, product) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when creating product',
//                     error: err
//                 });
//             }

//             return res.status(201).json(product);
//         });
//     },

//     /**
//      * productController.update()
//      */
//     update: function (req, res) {
//         var id = req.params.id;

//         ProductModel.findOne({_id: id}, function (err, product) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting product',
//                     error: err
//                 });
//             }

//             if (!product) {
//                 return res.status(404).json({
//                     message: 'No such product'
//                 });
//             }

//             product.name = req.body.name ? req.body.name : product.name;
// 			product.price = req.body.price ? req.body.price : product.price;
// 			product.imgName = req.body.imgName ? req.body.imgName : product.imgName;
// 			product.description = req.body.description ? req.body.description : product.description;
// 			product.category = req.body.category ? req.body.category : product.category;
			
//             product.save(function (err, product) {
//                 if (err) {
//                     return res.status(500).json({
//                         message: 'Error when updating product.',
//                         error: err
//                     });
//                 }

//                 return res.json(product);
//             });
//         });
//     },

//     /**
//      * productController.remove()
//      */
//     remove: function (req, res) {
//         var id = req.params.id;

//         ProductModel.findByIdAndRemove(id, function (err, product) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when deleting the product.',
//                     error: err
//                 });
//             }

//             return res.status(204).json();
//         });
//     }
// };
