import { plotGraph, PlotGraphParams } from 'console-plot';

console.log('=== plotGraph Input Validation Test 1: xData longer than yData ===');
try {
  const params: PlotGraphParams = { yData: [1, 3, 2], xData: ['A', 'B', 'C', 'D', 'E'] };
  plotGraph(params);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 2: Invalid maxHeight ===');
try {
  const params: PlotGraphParams = { yData: [1, 2, 3], xData: ['A', 'B', 'C'], maxHeight: 40.1 as any };
  plotGraph(params);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 3: Invalid pointer ===');
try {
  const params: PlotGraphParams = { yData: [1, 2, 3], xData: ['A', 'B', 'C'], pointer: 51 as any };
  plotGraph(params);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 4: Valid parameters ===');
try {
  const params: PlotGraphParams = { yData: [1, 2, 3], xData: ['A', 'B', 'C'], pointer: '*' };
  plotGraph(params);
  console.log('✓ Valid parameters worked correctly');
} catch (error) {
  console.log('ERROR: Should not have thrown an error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Tests Completed ===');