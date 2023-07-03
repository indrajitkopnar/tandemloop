class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        if (this.b !== 0) {
          return this.a / this.b;
        } else {
          return 'Cannot divide by zero';
        }
      default:
        return 'Invalid operation';
    }
  }
}


const calculator = new Calculator(5, 3, 'add');
console.log(calculator.calculate());  // Output: 8

const calculator2 = new Calculator(10, 2, 'multiply');
console.log(calculator2.calculate());  // Output: 20

const calculator3 = new Calculator(8, 2, 'divide');
console.log(calculator3.calculate());  // Output: 4

const calculator4 = new Calculator(6, 0, 'divide');
console.log(calculator4.calculate());  // Output: Cannot divide by zero                         //node problem-1.js
