import { describe, it, expect } from "vitest";

/*
Focus Factor = resolved issues / total issues
             = Completed story points / Total story points
Since implementation does not exist yet,
we write tests FIRST (TDD approach).
*/

vi.mock("../models/Stat.js");

describe("createStat controller", () => {

  it("should create a stat and return 201", async () => {

    const req = {
      body: {
        repository: "test-repo",
        defects: 3
      }
    };

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));

    const res = {
      status
    };

    const savedStat = {
      _id: "123",
      repository: "test-repo",
      defects: 3
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
        repository: "test-repo",
        defects: 3
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

describe("Focus Factor Metric", () => {

  it("should return 1 when all issues are resolved", () => {
    const resolved = 10;
    const total = 10;

    const focusFactor = resolved / total;

    expect(focusFactor).toBe(1);
  });

  it("should return 0 when no issues are resolved", () => {
    const resolved = 0;
    const total = 10;

    const focusFactor = resolved / total;

    expect(focusFactor).toBe(0);
  });

  it("should return correct fraction when some issues are resolved", () => {
    const resolved = 3;
    const total = 10;

    const focusFactor = resolved / total;

    expect(focusFactor).toBe(0.3);
  });

});
