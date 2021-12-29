const { body, checkSchema, validationResult } = require('express-validator');

const userCreationSchema = {
  username: {
    isLength: {
      errorMessage: 'username must have at least 5 characters.',
      options: { min: 5 },
      bail: true,
    },
  },
  email: {
    isEmail: {
      errorMessage: 'email must be valid.',
      bail: true,
    },
  },
  password: {
    isLength: {
      errorMessage: 'password must have at least 8 characters.',
      options: { min: 8 },
      bail: true,
    },
  },
  role: {
    isIn: {
      errorMessage: 'role must be admin, root or normal.',
      options: [['admin', 'root', 'normal']],
    },
  },
};

module.exports = userCreationSchema;
