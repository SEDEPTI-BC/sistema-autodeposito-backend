const { DataTypes } = require('sequelize');
const connection = require('../../db/connection');
const db = require('../../db/database');
const user = require('../models/user');

test('should create user', async () => {
  await connection;
  const User = user(db, DataTypes);
  User.create({
    username: 'john',
    email: 'john@email.com',
    password: 'john123',
    role: 'admin',
  }).then(john => {
    console.log(john);
    expect(john.name).toBe('john');
  });
  db.close();
});
