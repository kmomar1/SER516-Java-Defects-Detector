import { describe, it, expect } from "vitest";
import Stat from "../models/StatModel.js"

/*
Focus Factor = resolved issues / total issues
             = Completed story points / Total story points
Since implementation does not exist yet,
we write tests FIRST (TDD approach).
*/

vi.mock("../models/StatModel.js");

describe("createFocusFactor", () => {

  it("should create a focus factor and return 201", async () => {

    const req = {
      body: {
        velocity: 40,
        workCapacity: 50
      }
    };

    const json = vi.fn();
    const focusFactor = vi.fn(() => ({ json }));

    const res = {
      focusFactor
    };

    const savedFocusFactor = {
      _id: "abc123",
      velocity: 40,
      workCapacity: 50
    };

    Stat.mockImplementation(() => ({
      save: vi.fn().mockResolvedValue(savedFocusFactor)
    }));

    await createFocusFactor(req, res);

    expect(status).toHaveBeenCalledWith(201);
    expect(json).toHaveBeenCalledWith(savedFocusFactor);
  });


  it("should return 500 if save fails", async () => {

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
      save: vi.fn().mockRejectedValue(new Error("Database error"))
    }));

    await createFocusFactor(req, res);

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: "Database error" });
  });

});
