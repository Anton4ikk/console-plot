import { plotGraph } from '../../index.js';
import type { PlotGraphParams } from '../../index.d.ts';

console.log('=== TS Test: Basic Functionality - Linear Sequential Data ===');
const params1: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params1);

console.log('\n=== TS Test: Basic Functionality - Wide Value Range Scaling ===');
const params2: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params2);

console.log('\n=== TS Test: Basic Functionality - Float/Decimal Values ===');
const params3: PlotGraphParams = {
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};
plotGraph(params3);

console.log('\n=== TS Test: Basic Functionality - Default MaxWidth Limit (30) ===');
const longYData: number[] = Array(60).fill(0).map((_, i) => i % 10);
const longXData: string[] = Array(60).fill('').map((_, i) => String.fromCharCode(65 + (i % 26)));
const params4: PlotGraphParams = {
  yData: longYData,
  xData: longXData,
};
plotGraph(params4);

console.log('\n=== TS Test: Basic Functionality - Long Label Truncation ===');
const params5: PlotGraphParams = {
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  maxHeight: 20,
  pointer: '@',
};
plotGraph(params5);

console.log('\n=== TS Test: Basic Functionality - Custom Pointer Character ===');
const params6: PlotGraphParams = {
  yData: [1, 2, 3],
  xData: ['A', 'B', 'C'],
  pointer: '#',
};
plotGraph(params6);

console.log('\n=== TS Test: Basic Functionality - Custom MaxHeight Parameter ===');
const params7: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
  maxHeight: 10,
};
plotGraph(params7);

console.log('\n=== TS Test: MaxWidth Downsampling - No Downsampling Required ===');
const maxWidthParams1: PlotGraphParams = {
  yData: [1, 3, 2, 4],
  xData: ['A', 'B', 'C', 'D'],
  maxWidth: 10,
  maxHeight: 5,
  pointer: '*'
};
plotGraph(maxWidthParams1);

console.log('\n=== TS Test: MaxWidth Downsampling - 20 Points to 5 Points ===');
const largeY: number[] = Array.from({length: 20}, (_, i) => Math.sin(i * 0.3) * 5 + 10);
const largeX: string[] = Array.from({length: 20}, (_, i) => `D${i+1}`);
const maxWidthParams2: PlotGraphParams = {
  yData: largeY,
  xData: largeX,
  maxWidth: 5,
  maxHeight: 6,
  pointer: '●'
};
plotGraph(maxWidthParams2);

console.log('\n=== TS Test: MaxWidth Downsampling - Extreme 100 Points to 3 Points ===');
const extremeY: number[] = Array.from({length: 100}, (_, i) => Math.cos(i * 0.1) * 8 + 15);
const extremeX: string[] = Array.from({length: 100}, (_, i) => `P${i}`);
const maxWidthParams3: PlotGraphParams = {
  yData: extremeY,
  xData: extremeX,
  maxWidth: 3,
  maxHeight: 4,
  pointer: '#'
};
plotGraph(maxWidthParams3);

console.log('\n=== TS plotGraph Tests Completed ===');