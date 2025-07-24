import { plotGraph } from '../../index.js';
import type { PlotGraphParams } from '../../index.d.ts';

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

console.log('\n=== TypeScript Type Safety Test 4: Minimal Required Parameters ===');
const params4: PlotGraphParams = {
  yData: [1, 2, 3],
  xData: ['A', 'B', 'C'],
};
plotGraph(params4);

console.log('\n=== TypeScript Type Safety Test 5: String xData Labels ===');
const params5: PlotGraphParams = {
  yData: [10, 20, 30, 40, 50],
  xData: ['January', 'February', 'March', 'April', 'May'],
  maxHeight: 10,
  pointer: '●',
};
plotGraph(params5);

console.log('\n=== TypeScript Type Safety Test 6: Numeric xData Labels ===');
const params6: PlotGraphParams = {
  yData: [1.1, 2.2, 3.3, 4.4, 5.5],
  xData: [2020, 2021, 2022, 2023, 2024],
  maxHeight: 8,
  maxWidth: 10,
  pointer: '■',
};
plotGraph(params6);

console.log('\n=== TypeScript Type Safety Test 7: yData Type Validation ===');
const params7: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
};
plotGraph(params7);
console.log('yData type check:', params7.yData.every((val: number) => typeof val === 'number'));

console.log('\n=== TypeScript Type Safety Test 8: xData Type Validation ===');
const params8: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 2, 'C', 4, 'E'],
};
plotGraph(params8);
console.log('xData type check:', params8.xData.every((val: string | number) => ['string', 'number'].includes(typeof val)));

console.log('\n=== TypeScript Type Safety Tests Completed ===');