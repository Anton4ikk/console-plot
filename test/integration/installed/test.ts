import { plotGraph, PlotGraphParams } from 'console-plot';

console.log('=== TypeScript Installed Package Test 1: Basic Usage ===');
const params1: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
};
plotGraph(params1);

console.log('\n=== TypeScript Installed Package Test 2: With All Options ===');
const params2: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  maxHeight: 15,
  maxWidth: 20,
  pointer: '@',
};
plotGraph(params2);

console.log('\n=== TypeScript Installed Package Test 3: Mixed xData Types ===');
const params3: PlotGraphParams = {
  yData: [10, 20, 30, 40, 50],
  xData: [2020, 2021, 2022, 2023, 2024],
  maxHeight: 10,
  pointer: '●',
};
plotGraph(params3);

console.log('\n=== TypeScript Type Safety Test ===');
// These should provide IntelliSense and type checking:
const validParams: PlotGraphParams = {
  yData: [1.1, 2.2, 3.3],
  xData: ['X', 'Y', 'Z'],
  maxHeight: 8, // Should be number
  maxWidth: 10,  // Should be number
  pointer: '*',  // Should be string
};

// Verify types at runtime
console.log('yData type check:', validParams.yData.every(val => typeof val === 'number'));
console.log('xData type check:', validParams.xData.every(val => typeof val === 'string' || typeof val === 'number'));
console.log('maxHeight type check:', typeof validParams.maxHeight === 'number');
console.log('pointer type check:', typeof validParams.pointer === 'string');

plotGraph(validParams);

console.log('\n=== TypeScript Installed Package Tests Completed ===');