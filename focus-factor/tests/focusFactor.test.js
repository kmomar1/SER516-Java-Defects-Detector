import { describe, it, expect, vi } from "vitest";
import Stat from "../models/StatModel.js";

vi.mock("../models/Stat.js");

describe("createStat controller", () => {

  it("should create a stat and return 201", async () => {

    const req = {
      body: {
        velocity: 40,
        workCapacity: 50
      }
    };

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));

    const res = {
      status
    };

    const savedStat = {
      _id: "123",
      velocity: 40,
      workCapacity: 50
    };

    Stat.mockImplementation(() => ({
      save: vi.fn().mockResolvedValue(savedStat)
    }));

    await createStat(req, res);

    expect(status).toHaveBeenCalledWith(201);
    expect(json).toHaveBeenCalledWith(savedStat);
  });

  it("should return 500 if error occurs", async () => {

    const req = {
      body: {
        velocity: 40,
        workCapacity: 50
      }
    };

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));

    const res = {
      status
    };

    Stat.mockImplementation(() => ({
      save: vi.fn().mockRejectedValue(new Error("DB Error"))
    }));

    await createStat(req, res);

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: "DB Error" });
  });

});
