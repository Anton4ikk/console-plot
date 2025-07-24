import { plotGraph } from '../../index.js';
import type { PlotGraphParams } from '../../index.d.ts';

console.log('=== plotGraph Input Validation Test 1: xData longer than yData ===');
try {
  const yData: number[] = [1, 3, 2];
  const xData: (string | number)[] = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData } as PlotGraphParams);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 2: yData longer than xData ===');
try {
  const yData: number[] = [1, 3, 2, 5, 4, 6];
  const xData: (string | number)[] = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData } as PlotGraphParams);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 3: xData not an array ===');
try {
  const yData: number[] = [1, 3, 2, 5, 4, 6];
  const xData: any = 123.34;
  plotGraph({ yData, xData } as PlotGraphParams);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 4: yData not an array ===');
try {
  const yData: any = 123.34;
  const xData: (string | number)[] = ['A', 'B', 'C', 'D', 'E'];
  plotGraph({ yData, xData } as PlotGraphParams);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 5: maxHeight not an integer ===');
try {
  const params: PlotGraphParams = {
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    maxHeight: 40.1 as any,
  };
  plotGraph(params);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 6: pointer not a string ===');
try {
  const params: PlotGraphParams = {
    yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    pointer: 51 as any,
  };
  plotGraph(params);
  console.log('ERROR: Should have thrown an error!');
} catch (error) {
  console.log('✓ Expected error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Test 7: Valid parameters ===');
try {
  const params: PlotGraphParams = {
    yData: [1, 2, 3, 4, 5],
    xData: ['A', 'B', 'C', 'D', 'E'],
    maxHeight: 20,
    maxWidth: 30,
    pointer: '*',
  };
  plotGraph(params);
  console.log('✓ Valid parameters worked correctly');
} catch (error) {
  console.log('ERROR: Should not have thrown an error:', (error as Error).message);
}

console.log('\n=== plotGraph Input Validation Tests Completed ===');