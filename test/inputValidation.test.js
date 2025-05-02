import { plotGraph } from '../index.js';

console.log('\n=== Test 1: xData Longer than yData ===\n');
try {
  plotGraph({
    yData: [1, 3, 2],
    xData: ['A', 'B', 'C', 'D', 'E'],
  });
} catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 2: yData Longer than xData ===\n');
try {
  plotGraph({
    yData: [1, 3, 2, 5, 4, 6],
    xData: ['A', 'B', 'C', 'D', 'E'],
  });
} catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 3: xData is Number ===\n');
try {
  plotGraph({
    yData: [1, 3, 2, 5, 4, 6],
    xData: 123.34,
  });
} catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 4: xData is Number ===\n');
try {
  plotGraph({
    yData: [1, 3, 2, 5, 4, 6],
    xData: 123.34,
  });
} catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 5: yData is Number ===\n');
try {
  plotGraph({
    yData: 123.34,
    xData: ['A', 'B', 'C', 'D', 'E'],
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 6: maxHeight is not an Integer ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    maxHeight: 40.1,
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 7: maxHeight is greater than 50 ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    maxHeight: 51,
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 8: maxWidth is not an Integer ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    maxWidth: 40.1,
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 9: maxWidth is greater than 50 ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    maxWidth: 51,
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 10: pointer is not a string ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    pointer: 51,
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 11: pointer is shorter than 1 ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    pointer: '',
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}

console.log('\n=== Test 12: pointer is longer than 1 ===\n');
try {
  plotGraph({
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    pointer: '51',
  });
}
catch (e) {
  console.error('ERROR:', e.message);
}
