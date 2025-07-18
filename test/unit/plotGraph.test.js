import { plotGraph } from 'console-plot';

describe('plotGraph - Basic Functionality', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should render basic graph', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    plotGraph({ yData, xData });

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });

  test('should handle different scaling of values', () => {
    const yData = [1, 2, 3, 50, 51, 52, 53, 75, 99, 100];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData })).not.toThrow();
  });

  test('should handle float values', () => {
    const yData = [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData })).not.toThrow();
  });

  test('should handle maxWidth limit', () => {
    const longYData = Array(60).fill().map((_, i) => i % 10);
    const longXData = Array(60).fill().map((_, i) => String.fromCharCode(65 + (i % 26)));

    expect(() => plotGraph({ yData: longYData, xData: longXData })).not.toThrow();
  });

  test('should handle different label sizes', () => {
    const yData = [1, 2, 3, 50, 51, 52, 53, 75, 99, 100];
    const xData = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

    expect(() => plotGraph({
      yData,
      xData,
      maxHeight: 20,
      pointer: '@'
    })).not.toThrow();
  });

  test('should use custom pointer character', () => {
    const yData = [1, 2, 3];
    const xData = ['A', 'B', 'C'];

    plotGraph({ yData, xData, pointer: '#' });

    const output = consoleSpy.mock.calls.map(call => call[0]).join('\n');
    expect(output).toContain('#');
  });

  test('should respect maxHeight parameter', () => {
    const yData = [1, 2, 3, 4, 5];
    const xData = ['A', 'B', 'C', 'D', 'E'];

    plotGraph({ yData, xData, maxHeight: 10 });

    expect(consoleSpy).toHaveBeenCalledTimes(12);
  });
});
