import { plotGraph } from '../../index.js';
import type { PlotGraphParams } from '../../index.d.ts';

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

console.log('\n=== plotGraph Basic Functionality Test 4: MaxWidth Limit ===');
const longYData: number[] = Array(60).fill(0).map((_, i) => i % 10);
const longXData: string[] = Array(60).fill('').map((_, i) => String.fromCharCode(65 + (i % 26)));
const params4: PlotGraphParams = {
  yData: longYData,
  xData: longXData,
};
plotGraph(params4);

console.log('\n=== plotGraph Basic Functionality Test 5: Different Label Sizes ===');
const params5: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  maxHeight: 20,
  pointer: '@',
};
plotGraph(params5);

console.log('\n=== plotGraph Basic Functionality Test 6: Custom Pointer Character ===');
const params6: PlotGraphParams = {
  yData: [1, 2, 3],
  xData: ['A', 'B', 'C'],
  pointer: '#',
};
plotGraph(params6);

console.log('\n=== plotGraph Basic Functionality Test 7: MaxHeight Parameter ===');
const params7: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
  maxHeight: 10,
};
plotGraph(params7);

console.log('\n=== plotGraph Basic Functionality Tests Completed ===');