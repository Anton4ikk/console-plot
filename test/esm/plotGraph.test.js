import { plotGraph } from '../../index.js';

console.log('=== ESM Test: Basic Functionality - Linear Sequential Data ===');
const yData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const xData1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
plotGraph({ yData: yData1, xData: xData1 });

console.log('\n=== ESM Test: Basic Functionality - Wide Value Range Scaling ===');
const yData2 = [1, 2, 3, 50, 51, 52, 53, 75, 99, 100];
const xData2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
plotGraph({ yData: yData2, xData: xData2 });

console.log('\n=== ESM Test: Basic Functionality - Float/Decimal Values ===');
const yData3 = [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7];
const xData3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
plotGraph({ yData: yData3, xData: xData3 });

console.log('\n=== ESM Test: Basic Functionality - Default MaxWidth Limit (30) ===');
const longYData = Array(60).fill().map((_, i) => i % 10);
const longXData = Array(60).fill().map((_, i) => String.fromCharCode(65 + (i % 26)));
plotGraph({ yData: longYData, xData: longXData });

console.log('\n=== ESM Test: Basic Functionality - Long Label Truncation ===');
const yData5 = [1, 2, 3, 50, 51, 52, 53, 75, 99, 100];
const xData5 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];
plotGraph({
  yData: yData5,
  xData: xData5,
  maxHeight: 20,
  pointer: '@'
});

console.log('\n=== ESM Test: Basic Functionality - Custom Pointer Character ===');
const yData6 = [1, 2, 3];
const xData6 = ['A', 'B', 'C'];
plotGraph({ yData: yData6, xData: xData6, pointer: '#' });

console.log('\n=== ESM Test: Basic Functionality - Custom MaxHeight Parameter ===');
const yData7 = [1, 2, 3, 4, 5];
const xData7 = ['A', 'B', 'C', 'D', 'E'];
plotGraph({ yData: yData7, xData: xData7, maxHeight: 10 });

console.log('\n=== ESM Test: MaxWidth Downsampling - No Downsampling Required ===');
plotGraph({
  yData: [1, 3, 2, 4],
  xData: ['A', 'B', 'C', 'D'],
  maxWidth: 10,
  maxHeight: 5,
  pointer: '*'
});

console.log('\n=== ESM Test: MaxWidth Downsampling - 20 Points to 5 Points ===');
const largeY = Array.from({length: 20}, (_, i) => Math.sin(i * 0.3) * 5 + 10);
const largeX = Array.from({length: 20}, (_, i) => `D${i+1}`);
plotGraph({
  yData: largeY,
  xData: largeX,
  maxWidth: 5,
  maxHeight: 6,
  pointer: '●'
});

console.log('\n=== ESM Test: MaxWidth Downsampling - Extreme 100 Points to 3 Points ===');
const extremeY = Array.from({length: 100}, (_, i) => Math.cos(i * 0.1) * 8 + 15);
const extremeX = Array.from({length: 100}, (_, i) => `P${i}`);
plotGraph({
  yData: extremeY,
  xData: extremeX,
  maxWidth: 3,
  maxHeight: 4,
  pointer: '#'
});

console.log('\n=== ESM plotGraph Tests Completed ===');