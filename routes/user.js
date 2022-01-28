const express = require('express');
const route = express();

const userController = require('../controller/user')

route.get('/index',userController.index);
route.get('/list',userController.list);
route.post('/create',userController.create);
route.put('/update',userController.update);
route.delete('/delete/:id',userController.delete);

module.exports = userRouter;
