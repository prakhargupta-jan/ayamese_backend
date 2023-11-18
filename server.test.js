import "dotenv/config.js";
import request from "supertest";
import app from "./server.js";
import mongoose from "mongoose";

describe("Test the /listings route", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  test("Test get all listings", async () => {
    const response = await request(app).get("/listings");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).not.toBe(0);
  });
});

describe("Test the /shortlisted route", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });
  test("Test get all shorlisted listings", async () => {
    const response = await request(app).get("/shortlisted");
    expect(response.statusCode).toBe(200);
  });
  test("Test toggle isShortlisted", async () => {
    const oneSuchListing = (await request(app).get("/listings")).body.data[0];
    const oldIsShortlisted = oneSuchListing.isShortlisted;
    const response = await request(app).post(
      `/shortlisted/${oneSuchListing._id}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.isShortlisted).toBe(!oldIsShortlisted);
  });
});
