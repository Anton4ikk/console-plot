const { plotGraph } = require('../../index.cjs');

console.log('=== CJS Test: Input Validation - Array Length Mismatch (xData > yData) ===');
try {
  const yData = [1, 3, 2];
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== CJS Test: Input Validation - Array Length Mismatch (yData > xData) ===');
try {
  const yData = [1, 3, 2, 5, 4, 6];
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== CJS Test: Input Validation - Invalid xData Type (Number) ===');
try {
  const yData = [1, 3, 2, 5, 4, 6];
  const xData = 123.34;
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== CJS Test: Input Validation - Invalid yData Type (Number) ===');
try {
  const yData = 123.34;
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== CJS Test: Input Validation - Invalid maxHeight Type (Float) ===');
try {
  const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  plotGraph({ yData, xData, maxHeight: 40.1 });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== CJS Test: Input Validation - Invalid Pointer Type (Number) ===');
try {
  const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  plotGraph({ yData, xData, pointer: 51 });
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', error.message);
}

console.log('\n=== CJS Test: Input Validation - Valid Parameters (All Options) ===');
try {
  const yData = [1, 2, 3, 4, 5];
  const xData = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData, maxHeight: 20, maxWidth: 30, pointer: '*' });
  console.log('✓ Valid parameters worked correctly');
} catch (error) {
  console.log('ERROR: Should not have thrown an error:', error.message);
}

console.log('\n=== CJS Input Validation Tests Completed ===');