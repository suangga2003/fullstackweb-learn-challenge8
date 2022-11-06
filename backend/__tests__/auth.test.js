const request = require("supertest")
const app = require("../app");
const db = require("../app/models");

it(`should be give a valid response when successfully register!`, async () => {
    const dummyData = {
        name: "raihan",
        email: `${Math.random()}@gmail.com`,
        password: "kepokepo"
    }

    // const carsMock = DBConnection.define("User");
    const createCarMock = jest.fn(() => dummyData);
    jest.spyOn(db.User, "create").mockImplementation(() => createCarMock())

    const res = await request(app).post("/v1/auth/register").send(dummyData)
    expect(res.statusCode).toEqual(201);
})