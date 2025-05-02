import { plotGraph } from '../index.js';

console.log('\n=== Test 1: Basic Graph Rendering ===\n');
plotGraph({
  yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});

console.log('\n=== Test 2: Different scaling of values ===\n');
plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});

console.log('\n=== Test 3: Float values ===\n');
plotGraph({
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});

console.log('\n=== Test 4: Reach maxWidth ===\n');
plotGraph({
  yData: [
    1.4, 2.8, 2.4, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7, 1.4, 2.8, 2.4, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7,
    1.4, 2.8, 2.4, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7, 1.4, 2.8, 2.4, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7,
    1.4, 2.8, 2.4, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7, 1.4, 2.8, 2.4, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7,
  ],
  xData: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  ],
});

console.log('\n=== Test 5: Different labels sizes ===\n');
plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  maxHeight: 20,
  pointer: '@',
});
