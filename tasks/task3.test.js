describe('Calculator add() method', () => {
  test('add() method takes 10 and 5 and returns 15', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(10, 5);
  
    // Act
    const expectedValue = 15;
  
    // Assert
    expect(calc.add()).toBeCloseTo(expectedValue);
  });
  test('add() method takes 3.5 and 2 and returns 5.5', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(3.5, 2);
  
    // Act
    const expectedValue = 5.5;
  
    // Assert
    expect(calc.add()).toBeCloseTo(expectedValue);
  });
  test('add() method takes 6.7 and 1.3 and returns 8', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(6.7, 1.3);
  
    // Act
    const expectedValue = 8;
  
    // Assert
    expect(calc.add()).toBeCloseTo(expectedValue);
  });
});

describe('Calculator subtract() method', () => {
  test('subtract() method takes 10 and 5 and returns 5', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(10, 5);
  
    // Act
    const expectedValue = 5;
  
    // Assert
    expect(calc.subtract()).toBeCloseTo(expectedValue);
  });
  test('subtract() method takes 3.5 and 2 and returns 1.5', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(3.5, 2);
  
    // Act
    const expectedValue = 1.5;
  
    // Assert
    expect(calc.subtract()).toBeCloseTo(expectedValue);
  });
  test('subtract() method takes 6.7 and 1.3 and returns 5.4', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(6.7, 1.3);
  
    // Act
    const expectedValue = 5.4;
  
    // Assert
    expect(calc.subtract()).toBeCloseTo(expectedValue);
  });
});

describe('Calculator divide() method', () => {
  test('divide() method takes 10 and 5 and returns 2', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(10, 5);
  
    // Act
    const expectedValue = 2;
  
    // Assert
    expect(calc.divide()).toBeCloseTo(expectedValue);
  });
  test('divide() method takes 3.5 and 2 and returns 1.75', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(3.5, 2);
  
    // Act
    const expectedValue = 1.75;
  
    // Assert
    expect(calc.divide()).toBeCloseTo(expectedValue);
  });
  test('divide() method takes 6.7 and 1.3 and returns 5.15', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(6.7, 1.3);
  
    // Act
    const expectedValue = 5.15;
  
    // Assert
    expect(calc.divide()).toBeCloseTo(expectedValue);
  });
});

describe('Calculator multiply() method', () => {
  test('multiply() method takes 10 and 5 and returns 50', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(10, 5);
  
    // Act
    const expectedValue = 50;
  
    // Assert
    expect(calc.multiply()).toBeCloseTo(expectedValue);
  });
  test('multiply() method takes 3.5 and 2 and returns 7', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(3.5, 2);
  
    // Act
    const expectedValue = 7;
  
    // Assert
    expect(calc.multiply()).toBeCloseTo(expectedValue);
  });
  test('multiply() method takes 6.7 and 1.3 and returns 8.71', () => {
    // Arrange
    const Calculator = require("./task3.js");
    const calc = new Calculator(6.7, 1.3);
  
    // Act
    const expectedValue = 8.71;
  
    // Assert
    expect(calc.multiply()).toBeCloseTo(expectedValue);
  });
});