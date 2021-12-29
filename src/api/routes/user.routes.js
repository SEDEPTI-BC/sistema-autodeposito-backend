const { Router } = require('express');
const { checkSchema } = require('express-validator');
const UserController = require('../controllers/UserController');
const validateUserCreationRequest = require('../middlewares/validateUserCreationRequest');
const userCreationSchema = require('../utils/validations/userCreationSchema');

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/api/users',
  checkSchema(userCreationSchema),
  validateUserCreationRequest,
  userController.create
);

module.exports = userRouter;
