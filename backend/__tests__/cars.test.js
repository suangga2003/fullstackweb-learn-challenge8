const request = require("supertest")
const app = require("../app");
const db = require("../app/models")
const SequelizeMock = require("sequelize-mock");

const DBConnection = new SequelizeMock();

it(`should be show a list of cars`, async () => {
    const res = await request(app).get("/v1/cars");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("cars")
})

// it(`should be give a valid response when cars successfully created`, async () => {
//     const dummyData = {
//         name: "civic",
//         price: 100,
//         size: "small",
//         image: "civiv.png"
//     }
//     const carsMock = DBConnection.define("cars");
//     const createCarMock = jest.fn(() => dummyData);
//     jest.spyOn(carsMock).mockImplementation(() => createCarMock())

//     const res = await request(app).post("/v1/cars").set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJhaWhhbiIsImVtYWlsIjoia2Vwb0BnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkNVU1RPTUVSIn0sImlhdCI6MTY2NzI3NTY5N30.IIwxLXBAiAn9y_gOgoVSpHM6BXJID_AY6tiUfycw16w")
//     console.log(res);
//     expect(res.statusCode).toEqual(201);
// })