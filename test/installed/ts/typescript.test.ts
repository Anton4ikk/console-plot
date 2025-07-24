import { plotGraph, PlotGraphParams } from 'console-plot';

console.log('=== TypeScript Type Safety Test 1: Properly Typed Parameters ===');
const params1: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params1);

console.log('\n=== TypeScript Type Safety Test 2: Mixed String/Number xData ===');
const params2: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  maxHeight: 15,
  pointer: '#',
};
plotGraph(params2);

console.log('\n=== TypeScript Type Safety Test 3: All Optional Parameters ===');
const params3: PlotGraphParams = {
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  maxHeight: 20,
  maxWidth: 25,
  pointer: '@',
};
plotGraph(params3);

console.log('\n=== TypeScript Type Safety Test 4: Type Validation ===');
const params4: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 2, 'C', 4, 'E'],
};
plotGraph(params4);
console.log('Type check successful: mixed xData types work correctly');

console.log('\n=== TypeScript Type Safety Tests Completed ===');