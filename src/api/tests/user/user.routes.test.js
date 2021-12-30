const request = require('supertest');

const app = require('../../../config/express');

describe('[POST] /api/users', () => {
  it('should be able to create new users', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        username: 'samlas',
        email: 'samlas@example.com',
        password: 'samlas123',
        role: 'admin',
      })
      .expect(201);

    expect(response.body).toMatchObject({
      username: 'samlas',
      email: 'samlas@example.com',
    });
  });
});
