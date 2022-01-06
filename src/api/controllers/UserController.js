const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();
class UserController {
  constructor() {}

  async create(req, res, next) {
    const { name, email, password, role } = req.body;

    try {
      await userRepository.create({
        name,
        email,
        password,
        role,
      });

      res.status(201).json({ name, email });
    } catch {
      res.status(404).json({ error: 'User already exists' });
    }
  }
}

module.exports = UserController;
