import { plotGraph } from '../../index.js';

console.log('=== plotGraph Basic Functionality Test 1: Basic Graph ===');
const yData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const xData1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
plotGraph({ yData: yData1, xData: xData1 });

console.log('\n=== plotGraph Basic Functionality Test 2: Different Scaling ===');
const yData2 = [1, 2, 3, 50, 51, 52, 53, 75, 99, 100];
const xData2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
plotGraph({ yData: yData2, xData: xData2 });

console.log('\n=== plotGraph Basic Functionality Test 3: Float Values ===');
const yData3 = [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7];
const xData3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
plotGraph({ yData: yData3, xData: xData3 });

console.log('\n=== plotGraph Basic Functionality Test 4: MaxWidth Limit ===');
const longYData = Array(60).fill().map((_, i) => i % 10);
const longXData = Array(60).fill().map((_, i) => String.fromCharCode(65 + (i % 26)));
plotGraph({ yData: longYData, xData: longXData });

console.log('\n=== plotGraph Basic Functionality Test 5: Different Label Sizes ===');
const yData5 = [1, 2, 3, 50, 51, 52, 53, 75, 99, 100];
const xData5 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];
plotGraph({
  yData: yData5,
  xData: xData5,
  maxHeight: 20,
  pointer: '@'
});

console.log('\n=== plotGraph Basic Functionality Test 6: Custom Pointer Character ===');
const yData6 = [1, 2, 3];
const xData6 = ['A', 'B', 'C'];
plotGraph({ yData: yData6, xData: xData6, pointer: '#' });

console.log('\n=== plotGraph Basic Functionality Test 7: MaxHeight Parameter ===');
const yData7 = [1, 2, 3, 4, 5];
const xData7 = ['A', 'B', 'C', 'D', 'E'];
plotGraph({ yData: yData7, xData: xData7, maxHeight: 10 });

console.log('\n=== plotGraph Basic Functionality Tests Completed ===');