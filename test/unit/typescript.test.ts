import { plotGraph, PlotGraphParams } from 'console-plot';

describe('plotGraph - TypeScript Type Safety', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should work with properly typed parameters', () => {
    const params: PlotGraphParams = {
      yData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    };

    expect(() => plotGraph(params)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should work with mixed string/number xData', () => {
    const params: PlotGraphParams = {
      yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
      xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      maxHeight: 15,
      pointer: '#',
    };

    expect(() => plotGraph(params)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should work with all optional parameters', () => {
    const params: PlotGraphParams = {
      yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
      xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      maxHeight: 20,
      maxWidth: 25,
      pointer: '@',
    };

    expect(() => plotGraph(params)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should work with minimal required parameters', () => {
    const params: PlotGraphParams = {
      yData: [1, 2, 3],
      xData: ['A', 'B', 'C'],
    };

    expect(() => plotGraph(params)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should work with string xData labels', () => {
    const params: PlotGraphParams = {
      yData: [10, 20, 30, 40, 50],
      xData: ['January', 'February', 'March', 'April', 'May'],
      maxHeight: 10,
      pointer: '●',
    };

    expect(() => plotGraph(params)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should work with numeric xData labels', () => {
    const params: PlotGraphParams = {
      yData: [1.1, 2.2, 3.3, 4.4, 5.5],
      xData: [2020, 2021, 2022, 2023, 2024],
      maxHeight: 8,
      maxWidth: 10,
      pointer: '■',
    };

    expect(() => plotGraph(params)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should validate that yData contains only numbers', () => {
    const params: PlotGraphParams = {
      yData: [1, 2, 3, 4, 5],
      xData: ['A', 'B', 'C', 'D', 'E'],
    };

    expect(() => plotGraph(params)).not.toThrow();

    params.yData.forEach(value => {
      expect(typeof value).toBe('number');
    });
  });

  test('should validate that xData contains strings or numbers', () => {
    const params: PlotGraphParams = {
      yData: [1, 2, 3, 4, 5],
      xData: ['A', 2, 'C', 4, 'E'],
    }

    expect(() => plotGraph(params)).not.toThrow();

    params.xData.forEach(value => {
      expect(['string', 'number'].includes(typeof value)).toBe(true);
    });
  });
});
