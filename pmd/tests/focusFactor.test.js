import { describe, it, expect, vi, beforeEach } from "vitest";
import { createFocusFactor } from "../../mongo/controllers/foucsFactorController.js";
import FocusFactor from "../../mongo/models/StatModel.js";

describe("createFocusFactor", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        velocity: 30,
        workCapacity: 40,
      },
    };

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
  });

  it("should create a focus factor and return 201", async () => {
    // Spy on the instance save method
    vi.spyOn(FocusFactor.prototype, "save").mockResolvedValue({
      velocity: 30,
      workCapacity: 40,
    });

    await createFocusFactor(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      velocity: 30,
      workCapacity: 40,
    });
  });

  it("should return 500 if save fails", async () => {
    vi.spyOn(FocusFactor.prototype, "save").mockRejectedValue(
      new Error("Database error"),
    );

    await createFocusFactor(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalled();
  });
});
