function generateSeries(x) {
    let series = [];
    
    for (let i = 1; i <= x; i += 2) {
      series.push(i);
    }
    
    return series.join(', ');
  }
  
  
  console.log(generateSeries(1));  // Output: 1
  console.log(generateSeries(2));  // Output: 1
  console.log(generateSeries(3));  // Output: 1, 3, 5
  console.log(generateSeries(4));  // Output: 1, 3, 5
  console.log(generateSeries(5));  // Output: 1, 3, 5, 7, 9
  console.log(generateSeries(6));  // Output: 1, 3, 5, 7, 9             //node problem-3.js

  
 
  