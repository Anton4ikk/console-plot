import { plotGraph } from '../../index.js';

console.log('=== plotGraph Input Validation Test 1: xData longer than yData ===');
try {
  const yData = [1, 3, 2];
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 2: yData longer than xData ===');
try {
  const yData = [1, 3, 2, 5, 4, 6];
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 3: xData not an array ===');
try {
  const yData = [1, 3, 2, 5, 4, 6];
  const xData = 123.34;
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 4: yData not an array ===');
try {
  const yData = 123.34;
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 5: maxHeight not an integer ===');
try {
  const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  plotGraph({ yData, xData, maxHeight: 40.1 });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 6: pointer not a string ===');
try {
  const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  plotGraph({ yData, xData, pointer: 51 });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 7: Valid parameters ===');
try {
  const yData = [1, 2, 3, 4, 5];
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData, maxHeight: 20, maxWidth: 30, pointer: '*' });
  console.log('✓ Valid parameters worked correctly');
} catch (error) {
  console.log('ERROR: Should not have thrown an error:', error.message);
}

console.log('\n=== plotGraph Input Validation Tests Completed ===');