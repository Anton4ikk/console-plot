const { plotGraph } = require('../../index.cjs');

console.log('=== CJS Test: Parameter Safety - All Required Parameters ===');
const params1 = {
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params1);

console.log('\n=== CJS Test: Parameter Safety - Mixed String/Number xData ===');
const params2 = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  maxHeight: 15,
  pointer: '#',
};
plotGraph(params2);

console.log('\n=== CJS Test: Parameter Safety - All Optional Parameters ===');
const params3 = {
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  maxHeight: 20,
  maxWidth: 25,
  pointer: '@',
};
plotGraph(params3);

console.log('\n=== CJS Test: Parameter Safety - Minimal Required Parameters ===');
const params4 = {
  yData: [1, 2, 3],
  xData: ['A', 'B', 'C'],
};
plotGraph(params4);

console.log('\n=== CJS Test: Parameter Safety - Numeric xData Labels ===');
const params5 = {
  yData: [1.1, 2.2, 3.3, 4.4, 5.5],
  xData: [2020, 2021, 2022, 2023, 2024],
  maxHeight: 8,
  maxWidth: 10,
  pointer: '■',
};
plotGraph(params5);

console.log('\n=== CJS Parameter Safety Tests Completed ===');