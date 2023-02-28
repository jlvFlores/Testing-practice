test('the string value is Hello', () => {
  // Arrange
  const reverseString = require("./task2.js");
  const string = 'Hello';

  // Act
  const expectedValue = 'olleH';

  // Assert
  expect(reverseString(string)).toMatch(expectedValue);
});