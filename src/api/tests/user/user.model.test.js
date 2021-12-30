const { DataTypes } = require('sequelize');
const connection = require('../../../db/connection');
const db = require('../../../db/database');
const user = require('../../models/user');
const truncate = require('../utils/truncate');

describe('user model', () => {
  beforeAll(async () => {
    await connection;
  });

  beforeEach(async () => {
    await truncate();
  });

  afterAll(async () => {
    await db.close();
  });

  it('should create user', async () => {
    const User = user(db, DataTypes);
    const newUser = await User.create({
      username: 'john',
      email: 'john@email.com',
      password: 'john123',
      role: 'admin',
    });

    expect(newUser.username).toBe('john');
  });
});
