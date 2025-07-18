import { plotGraph } from 'console-plot';

describe('plotGraph - Input Validation', () => {
  test('should throw error when xData is longer than yData', () => {
    const yData = [1, 3, 2];
    const xData = ['A', 'B', 'C', 'D', 'E'];

    expect(() => plotGraph({ yData, xData })).toThrow('xData length should not be more than yData');
  });

  test('should throw error when yData is longer than xData', () => {
    const yData = [1, 3, 2, 5, 4, 6];
    const xData = ['A', 'B', 'C', 'D', 'E'];

    expect(() => plotGraph({ yData, xData })).toThrow('yData length should not be more than xData');
  });

  test('should throw error when xData is not an array', () => {
    const yData = [1, 3, 2, 5, 4, 6];
    const xData = 123.34;

    expect(() => plotGraph({ yData, xData })).toThrow('xData must be array');
  });

  test('should throw error when yData is not an array', () => {
    const yData = 123.34;
    const xData = ['A', 'B', 'C', 'D', 'E'];

    expect(() => plotGraph({ yData, xData })).toThrow('yData must be array');
  });

  test('should throw error when maxHeight is not an integer', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, maxHeight: 40.1 })).toThrow('maxHeight must be an integer not greater than 50');
  });

  test('should throw error when maxHeight is greater than 50', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, maxHeight: 51 })).toThrow('maxHeight must be an integer not greater than 50');
  });

  test('should throw error when maxWidth is not an integer', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, maxWidth: 40.1 })).toThrow('maxWidth must be an integer not greater than 50');
  });

  test('should throw error when maxWidth is greater than 50', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, maxWidth: 51 })).toThrow('maxWidth must be an integer not greater than 50');
  });

  test('should throw error when pointer is not a string', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, pointer: 51 })).toThrow('pointer must be a single character string');
  });

  test('should throw error when pointer is empty string', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, pointer: '' })).toThrow('pointer must be a single character string');
  });

  test('should throw error when pointer is longer than 1 character', () => {
    const yData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    expect(() => plotGraph({ yData, xData, pointer: '51' })).toThrow('pointer must be a single character string');
  });

  test('should accept valid parameters without throwing', () => {
    const yData = [1, 2, 3, 4, 5];
    const xData = ['A', 'B', 'C', 'D', 'E'];

    expect(() => plotGraph({ yData, xData, maxHeight: 20, maxWidth: 30, pointer: '*' })).not.toThrow();
  });
});
