import { plotGraph } from 'console-plot';

console.log('=== plotGraph Basic Functionality Test 1: Basic Graph ===');
plotGraph({
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
});

console.log('\n=== plotGraph Basic Functionality Test 2: Different Scaling ===');
plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
});

console.log('\n=== plotGraph Basic Functionality Test 3: Float Values ===');
plotGraph({
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
});

console.log('\n=== plotGraph Basic Functionality Test 4: Custom Options ===');
plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  maxHeight: 20,
  pointer: '@'
});

console.log('\n=== plotGraph Basic Functionality Tests Completed ===');