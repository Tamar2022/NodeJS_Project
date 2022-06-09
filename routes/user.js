const express=require('express');
const router=express.Router();
const controller=require('../controllers/userController');

router.get('/',
    controller.get);


router.get('/:userName/:password',controller.getByDetails
);
router.get('/:id',controller.getOrders);

router.post('/',controller.postUser
);

router.put('/:id',controller.putUser
);


router.delete('/:id',controller.delete
);

module.exports=router;