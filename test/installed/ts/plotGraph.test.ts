import { plotGraph, PlotGraphParams } from 'console-plot';

console.log('=== TS Installation Test: Basic Smoke Test ===');
const params1: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
  maxHeight: 5,
  pointer: '*'
};
plotGraph(params1);

console.log('\n=== TS Installation Test: MaxWidth Downsampling ===');
const largeData: number[] = Array.from({length: 20}, (_, i) => Math.sin(i * 0.3) * 5 + 10);
const largeLabels: string[] = Array.from({length: 20}, (_, i) => `D${i+1}`);
const params2: PlotGraphParams = {
  yData: largeData,
  xData: largeLabels,
  maxWidth: 5,
  maxHeight: 6,
  pointer: '●'
};
plotGraph(params2);

console.log('\n=== TS Installation Tests Completed ===');