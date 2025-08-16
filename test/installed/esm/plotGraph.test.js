import { plotGraph } from 'console-plot';

console.log('=== ESM Installation Test: Basic Smoke Test ===');
plotGraph({
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
  maxHeight: 5,
  pointer: '*'
});

console.log('\n=== ESM Installation Test: MaxWidth Downsampling ===');
const largeData = Array.from({length: 20}, (_, i) => Math.sin(i * 0.3) * 5 + 10);
const largeLabels = Array.from({length: 20}, (_, i) => `D${i+1}`);
plotGraph({
  yData: largeData,
  xData: largeLabels,
  maxWidth: 5,
  maxHeight: 6,
  pointer: '●'
});

console.log('\n=== ESM Installation Tests Completed ===');