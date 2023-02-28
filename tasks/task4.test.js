test('capitalize function should return hello as Hello', () => {
  // Arrange
  const capitalize = require('./task4.js');
  const string = 'hello';

  // Act
  const expectedValue = 'Hello';

  // Assert
  expect(capitalize(string)).toMatch(expectedValue);
});

