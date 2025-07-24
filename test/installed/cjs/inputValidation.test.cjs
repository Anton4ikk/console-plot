const { plotGraph } = require('console-plot');

console.log('=== plotGraph Input Validation Test 1: xData longer than yData ===');
try {
  plotGraph({ yData: [1, 3, 2], xData: ['A', 'B', 'C', 'D', 'E'] });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 2: Invalid maxHeight ===');
try {
  plotGraph({ yData: [1, 2, 3], xData: ['A', 'B', 'C'], maxHeight: 40.1 });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 3: Invalid pointer ===');
try {
  plotGraph({ yData: [1, 2, 3], xData: ['A', 'B', 'C'], pointer: 51 });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== plotGraph Input Validation Test 4: Valid parameters ===');
try {
  plotGraph({ yData: [1, 2, 3], xData: ['A', 'B', 'C'], pointer: '*' });
  console.log('✓ Valid parameters worked correctly');
} catch (error) {
  console.log('ERROR: Should not have thrown an error:', error.message);
}

console.log('\n=== plotGraph Input Validation Tests Completed ===');