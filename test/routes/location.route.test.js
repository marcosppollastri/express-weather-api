const request = require("supertest");
const app = require('../../app');

describe("Test the /location route", () => {
  test("It should response with 200", async () => {
    const response = await request(app)
      .get('/v1/location')
      .set('X-Forwarded-For', '28.198.65.19');
    expect(response.statusCode).toBe(200);
  });
  test("It should response the 500 error", async () => {
    const response = await request(app)
      .get('/v1/location')
      .set('X-Forwarded-For', '127.0.0.1');
    expect(response.statusCode).toBe(500);
  });
});