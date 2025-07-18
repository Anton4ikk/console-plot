import { plotGraph as plotGraphESM } from 'console-plot';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

describe('Dual Module Support', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should work with ESM import', () => {
    const yData = [1, 2, 3];
    const xData = ['A', 'B', 'C'];
    
    expect(() => plotGraphESM({ yData, xData })).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should work with CommonJS require', () => {
    const { plotGraph: plotGraphCJS } = require('console-plot');
    
    const yData = [1, 2, 3];
    const xData = ['A', 'B', 'C'];
    
    expect(() => plotGraphCJS({ yData, xData })).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('both import styles should produce same output', () => {
    const { plotGraph: plotGraphCJS } = require('console-plot');
    
    const yData = [1, 2, 3];
    const xData = ['A', 'B', 'C'];
    
    // Test ESM
    plotGraphESM({ yData, xData });
    const esmOutput = consoleSpy.mock.calls.map(call => call[0]).join('\n');
    
    consoleSpy.mockClear();
    
    // Test CJS
    plotGraphCJS({ yData, xData });
    const cjsOutput = consoleSpy.mock.calls.map(call => call[0]).join('\n');
    
    expect(esmOutput).toBe(cjsOutput);
  });
});