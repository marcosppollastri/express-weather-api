const request = require("supertest");
const app = require('../../app');

describe("Test the /forecast route", () => {
  test("It should responds with 200", async () => {
    const response = await request(app)
      .get('/v1/forecast')
      .set('X-Forwarded-For', '28.198.65.19');
    expect(response.statusCode).toBe(200);
  });
  test("It should responds with 200 when city param is present", async () => {
    const city = 'cordoba';
    const response = await request(app)
      .get(`/v1/forecast/${city}`);
    expect(response.statusCode).toBe(200);
  });
  test("It should responds with 404 when city param is not found", async () => {
    const city = 'villa anizacate';
    const response = await request(app)
      .get(`/v1/forecast/${city}`);
    expect(response.statusCode).toBe(404);
  });
});