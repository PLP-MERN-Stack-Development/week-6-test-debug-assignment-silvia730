const request = require('supertest');
const app = require('../app');
jest.mock('../models/Bug');

describe('Bug API', () => {
  it('should return 200 on GET /api/bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
  });
});
