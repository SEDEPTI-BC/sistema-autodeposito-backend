const UserRepository = require('../../repositories/userRepository');
const truncate = require('../utils/truncate');

describe('user repository', () => {
  const userRepository = new UserRepository();

  beforeEach(async () => {
    await truncate();
  });

  it('should create user', async () => {
    const userInfo = {
      username: 'jimmy',
      email: 'jim@email.com',
      password: 'jimmy123',
      role: 'admin',
    };

    const user = await userRepository.create(userInfo);

    expect(user.username).toBe('jimmy');
  });

  it('should not create user if username is already taken', async () => {
    const userInfo = {
      username: 'jimmy',
      email: 'jim@email.com',
      password: 'jimmy123',
      role: 'admin',
    };

    await userRepository.create(userInfo);

    await expect(userRepository.create(userInfo)).rejects.toThrow(
      'User already exists'
    );
  });
});
