var OrderModel = require('../models/orderModel.js');
const productModel = require('../models/productModel.js');

// /**
//  * orderController.js
//  *
//  * @description :: Server-side logic for managing orders.
//  */
// module.exports = {

//     /**
//      * orderController.list()
//      */
//     list: function (req, res) {
//         OrderModel.find(function (err, orders) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting order.',
//                     error: err
//                 });
//             }

//             return res.json(orders);
//         });
//     },

//     /**
//      * orderController.show()
//      */
//     show: function (req, res) {
//         var id = req.params.id;

//         OrderModel.findOne({_id: id}, function (err, order) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting order.',
//                     error: err
//                 });
//             }

//             if (!order) {
//                 return res.status(404).json({
//                     message: 'No such order'
//                 });
//             }

//             return res.json(order);
//         });
//     },

//     /**
//      * orderController.create()
//      */


//show all the items in the cart
// module.exports.show= async function(req,res){
//     const userId=req.params.user;
//     try
//     {
//     const order= await  OrderModel.findOne({user: userId});
   
//     if(!order)
//     {
//         return res.status(404).json({
//             message: 'No such order'
//         });
//     }

//     const produtsInCart=[];
//     for (const i of  order.items) {
//         let p= await productModel.findOne({_id:i.product});
//         produtsInCart.push(p );
        
//     }

// if(produtsInCart.length==0)
// return res.status(404).json({
//     message: 'No such products in your cart'
// });
//     return res.json(produtsInCart);
//  }
// catch(err){
//     return res.status(500).json({
//         message: 'Error when getting order.',
//         error: err
//     });
// }
    
// }



module.exports.create=async function(req,res){
    try{
    if(!req.body)
      return res.status(400);
      const{quantity,sum,date,user,items}=req.body
      let order = new OrderModel({
        quantity ,
        sum ,
        date ,
        user,
        items 
    });

   await order.save();
   return res.status(201).json(order);

}
catch(err)
{
    return res.status(500).json({
        message: 'Error when creating order',
        error: err
    });
}

   
}

    

    /**
     * orderController.update()
     */


    //  module.exports.update=async function(req,res){
    //     const id = req.params.id;
    //         try{
    //             const order= await OrderModel.findOne({_id: id});
    //                 if(!order)
    //                 {
    //                     return res.status(404).json({
    //                                             message: 'No such order'
    //                                         });                   
    //                                      }

    //                                      order.quantity = req.body.quantity ? req.body.quantity : order.quantity;
    //                                      			order.sum = req.body.sum ? req.body.sum : order.sum;
    //                                      			order.date = req.body.date ? req.body.date : order.date;
    //                                      			order.user = req.body.user ? req.body.user : order.user;
    //                                      			order.items = req.body.items ? req.body.items : order.items;
    //                                                 try{
    //                                                     await  order.save();
    //                                                     return res.json(order);

    //                                                 } 
    //                                                 catch(err){
    //                                                     return res.status(500).json({
    //                                                                                         message: 'Error when updating order.',
    //                                                                                         error: err
    //                                                                                     });
    //                                                 }
                                                  
                                                         
                                         
                                                 
    //         }
    //         catch(err)
    //         {
    //             return res.status(500).json({
    //                                     message: 'Error when getting order',
    //                                     error: err
    //                                 });
    //         }
        
    //     }


//     /**
//      * orderController.remove()
//      */
//     remove: function (req, res) {
//         var id = req.params.id;

//         OrderModel.findByIdAndRemove(id, function (err, order) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when deleting the order.',
//                     error: err
//                 });
//             }

//             return res.status(204).json();
//         });
//     }
// };
