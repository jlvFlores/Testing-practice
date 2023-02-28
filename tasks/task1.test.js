test('the string value is Hello', () => {
  // Arrange
  const stringLength = require('./task1.js');
  const string = 'Hello';

  // Act
  const minLength = 1;
  const maxLength = 10;

  // Assert
  expect(stringLength(string)).not.toBeNull();
  expect(stringLength(string)).toBeGreaterThanOrEqual(minLength);
  expect(stringLength(string)).toBeLessThanOrEqual(maxLength);
});