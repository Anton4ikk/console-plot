const { plotGraph } = require('console-plot');

console.log('=== CJS Installation Test: Basic Smoke Test ===');
plotGraph({
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
  maxHeight: 5,
  pointer: '*'
});

console.log('\n=== CJS Installation Test: MaxWidth Downsampling ===');
const largeData = Array.from({length: 20}, (_, i) => Math.sin(i * 0.3) * 5 + 10);
const largeLabels = Array.from({length: 20}, (_, i) => `D${i+1}`);
plotGraph({
  yData: largeData,
  xData: largeLabels,
  maxWidth: 5,
  maxHeight: 6,
  pointer: '●'
});

console.log('\n=== CJS Installation Tests Completed ===');