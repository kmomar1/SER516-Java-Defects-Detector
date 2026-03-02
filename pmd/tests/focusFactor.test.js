import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../app.js";

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Focus Factor create API", () => {
  it("should return 201 and create focus factor", async () => {
    const res = await request(app).post("/focus-factor").send({
      name: "Deep Work",
      score: 85,
    });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Deep Work");
    expect(res.body.score).toBe(0.85);
  });
});
