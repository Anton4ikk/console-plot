import { plotGraph, PlotGraphParams } from 'console-plot';

console.log('=== plotGraph Basic Functionality Test 1: Basic Graph ===');
const params1: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params1);

console.log('\n=== plotGraph Basic Functionality Test 2: Different Scaling ===');
const params2: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params2);

console.log('\n=== plotGraph Basic Functionality Test 3: Float Values ===');
const params3: PlotGraphParams = {
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params3);

console.log('\n=== plotGraph Basic Functionality Test 4: Custom Options ===');
const params4: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  maxHeight: 20,
  pointer: '@',
};
plotGraph(params4);

console.log('\n=== plotGraph Basic Functionality Tests Completed ===');