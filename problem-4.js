function countMultiples(numbers) {
    const multiples = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0
    };
  
    for (const number of numbers) {
      for (const factor in multiples) {
        if (number % factor === 0) {
          multiples[factor]++;
        }
      }
    }
  
    return multiples;
  }
  
  
  const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  console.log(countMultiples(numbers));                                 // node problem-4.js

  