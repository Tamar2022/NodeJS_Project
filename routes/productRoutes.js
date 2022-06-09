var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');

/*
 * GET
 */
router.get('/', productController.list);

// /*
//  * GET
//  */
router.get('/category/', productController.show);

// /*
//  * POST
//  */
// router.post('/', productController.create);

// /*
//  * PUT
//  */
// router.put('/:id', productController.update);

// /*
//  * DELETE
//  */
// router.delete('/:id', productController.remove);

module.exports = router;
