function generateSeries(x) {
    let series = [];
    let num = 1;
    
    for (let i = 0; i < x; i++) {
      series.push(num);
      num += 2;
    }
    
    return series.join(', ');
  }
  
  
  console.log(generateSeries(1));  // Output: 1
  console.log(generateSeries(2));  // Output: 1, 3
  console.log(generateSeries(3));  // Output: 1, 3, 5
  console.log(generateSeries(4));  // Output: 1, 3, 5, 7              //     node problem-2.js    
    
                                                            
                                                            
  