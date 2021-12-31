const { DataTypes } = require('sequelize');
const connection = require('../../db/connection');
const db = require('../../db/database');
const user = require('../models/user');
const bcrypt = require('bcrypt');

class UserRepository {
  constructor() {}
  async create({ username, email, password, role }) {
    await connection;

    const User = user(db, DataTypes);

    // verifica se já existe um usuario com o mesmo username
    const userAlreadyExists = await User.findOne({ where: { username } });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role,
      });
      return newUser;
    }
  }
}

module.exports = UserRepository;
