const { add } = require("./calculator.js");

// test away!
it("runs the test", () => {
  // arrange - setup
  const expected = true;
  // act - run the system under test
  const actual = true;
  // assert - verify that it works
  expect(actual).toBe(expected);
});
