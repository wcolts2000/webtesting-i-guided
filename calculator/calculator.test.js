const calculator = require("./calculator");

// add two numbers
describe("calculator.js", () => {
  describe("add() method", () => {
    it("should return the sum of two numbers", () => {
      expect(calculator.add(2, 2)).toBe(4);
      expect(calculator.add(2, 1)).toBe(3);
      expect(calculator.add(0, 1)).toBe(1);
    });

    it("should return 0 if called with no values", () => {
      expect(calculator.add()).toBe(0);
    });

    it("should return the number passed to it if only one value is passed", () => {
      expect(calculator.add(1)).toBe(1);
    });

    // add any number of arguments separated by commas
    it("should handle any number of arguments separated by commas", () => {
      expect(calculator.add(2, 3, 9, 7)).toBe(21);
    });

    it("should handle an array of numbers", () => {
      expect(calculator.add([2, 3, 9, 7])).toBe(21);
    });

    it("toBe or not.toBe", () => {
      const person = { name: "John" };
      expect(true).not.toBe(false);
      expect({ name: "John" }).toEqual({ name: "John" });
      expect(person.name).toBe("John");
    });
  });
});
