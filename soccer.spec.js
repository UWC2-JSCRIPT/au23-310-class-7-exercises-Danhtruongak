describe("Test for the Soccer Game", () => {
  describe("tests for the getTotalPoints function", () => {
    it("should return a acurate total score for a string input", () => {
      const result = getTotalPoints("wwdlw");

      expect(result).toEqual(10);
    });
  });
});

// teamUtilsSpec.js

describe("Soccer game result", () => {
  describe("Testing each point result", () => {
    it("should return correct points for a win", () => {
      expect(getPointsFromResult("w")).toBe(3);
    });

    it("should return correct points for a draw", () => {
      expect(getPointsFromResult("d")).toBe(1);
    });
  });
});
