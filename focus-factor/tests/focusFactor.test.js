import { describe, it, expect } from "vitest";

/*
Focus Factor = resolved issues / total issues
             = Completed story points / Total story points
Since implementation does not exist yet,
we write tests FIRST (TDD approach).
*/

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