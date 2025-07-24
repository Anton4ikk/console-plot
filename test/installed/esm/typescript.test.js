import { plotGraph } from 'console-plot';

console.log('=== Parameter Safety Test 1: Properly Defined Parameters ===');
plotGraph({
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});

console.log('\n=== Parameter Safety Test 2: Mixed String/Number xData ===');
plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  maxHeight: 15,
  pointer: '#',
});

console.log('\n=== Parameter Safety Test 3: All Optional Parameters ===');
plotGraph({
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  maxHeight: 20,
  maxWidth: 25,
  pointer: '@',
});

console.log('\n=== Parameter Safety Tests Completed ===');