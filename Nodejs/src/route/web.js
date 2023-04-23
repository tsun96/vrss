import express from "express";
import homeController from "../controllers/homeController";
import userController from '../controllers/userController'

let router = express.Router();

let initWWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/test', homeController.getTestPage);
    router.get('/crud', homeController.getCrudPage);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/read-crud', homeController.readCRUD)
    // edit
    router.get('/edit-crud', homeController.editCRUD)
    router.post('/put-crud', homeController.putCRUD)
    // delete
    router.get('/delete-crud', homeController.deleteCRUD)

    //api
    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUser)
    router.post('/api/create-new-user', userController.handleCreateNewUsers)
    router.put('/api/edit-user', userController.handleEditUser)
    router.delete('/api/delete-user', userController.handleDeleteUser)

    return app.use("/", router);
}

module.exports = initWWebRouters;