const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();
class UserController {
  constructor() {}

  async create(req, res, next) {
    const { username, email, password, role } = req.body;

    try {
      await userRepository.create({
        username,
        email,
        password,
        role,
      });

      res.status(201).json({ username, email });
    } catch {
      res.status(404).json({ error: 'User already exists' });
    }
  }
}

module.exports = UserController;
