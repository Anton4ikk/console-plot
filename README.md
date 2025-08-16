# console-plot

[![npm version](https://img.shields.io/npm/v/console-plot.svg)](https://www.npmjs.com/package/console-plot)
[![npm downloads](https://img.shields.io/npm/dm/console-plot.svg)](https://www.npmjs.com/package/console-plot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> A lightweight library for drawing console-based graphs from X/Y data with intelligent downsampling and TypeScript support.

## 🔗 Links

- [📦 npm package](https://www.npmjs.com/package/console-plot)
- [🐙 GitHub repository](https://github.com/Anton4ikk/console-plot)
- [🐛 Issues & Feature Requests](https://github.com/Anton4ikk/console-plot/issues)

## 🚀 Features

- **Smart Data Handling**: Intelligent downsampling for large datasets
- **Multiple Formats**: ESM, CommonJS, and TypeScript support
- **Zero Dependencies**: Lightweight with no external dependencies
- **Customizable**: Adjustable height, width, and pointer characters
- **Type Safe**: Full TypeScript definitions included

## 📦 Installation

```bash
npm install console-plot
```

## 🎯 Quick Start

```javascript
import { plotGraph } from 'console-plot';

plotGraph({
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});
```

**Output:**
```
 10.70                    *
 10.38                  *
 10.06
  9.74
  9.42
  9.10
  8.78              * *
  8.46          * *
  8.13        *
  7.81
  7.49
  7.17
  6.85
  6.53
  6.21
  5.89
  5.57
  5.25
  4.93
  4.61
  4.29
  3.97
  3.64
  3.32
  3.00
  2.68      *
  2.36    *
  2.04
  1.72
  1.40  *

        A B C D E F G H I J
```

## 📊 API Reference

### `plotGraph(params)`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `yData` | `number[]` | **required** | Y-axis values (numeric data points) |
| `xData` | `(string\|number)[]` | **required** | X-axis labels |
| `maxHeight` | `number` | `30` | Maximum graph height in lines |
| `maxWidth` | `number` | `30` | Maximum graph width (smart downsampling) |
| `pointer` | `string` | `'*'` | Character used for data points |

### Smart MaxWidth Handling

When your data exceeds `maxWidth`, console-plot intelligently downsamples by:
- **Averaging Y values** within each bucket for better representation
- **Preserving data distribution** across the entire dataset
- **Maintaining visual accuracy** rather than just truncating

```javascript
// Large dataset (100 points) → Downsampled to 10 points
const largeData = Array.from({length: 100}, (_, i) => Math.sin(i * 0.1) * 10);
const labels = Array.from({length: 100}, (_, i) => `P${i}`);

plotGraph({
  yData: largeData,
  xData: labels,
  maxWidth: 10,  // Intelligently reduces 100 points to 10
  pointer: '●'
});
```

## 🔧 Usage Examples

### TypeScript Support

```typescript
import { plotGraph, PlotGraphParams } from 'console-plot';

const config: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
  maxHeight: 15,
  maxWidth: 20,
  pointer: '■',
};

plotGraph(config);
```

### CommonJS Support

```javascript
const { plotGraph } = require('console-plot');

plotGraph({
  yData: [10, 25, 30, 15, 40],
  xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  maxHeight: 12,
  pointer: '@',
});
```

### Custom Styling

```javascript
plotGraph({
  yData: [1, 50, 25, 75, 100],
  xData: ['Start', 'Low', 'Mid', 'High', 'Peak'],
  maxHeight: 20,
  maxWidth: 15,
  pointer: '█',
});
```

## 🧪 Development

### Running Tests

```bash
# Test different module formats
npm run test:esm        # ES Modules
npm run test:cjs        # CommonJS  
npm run test:ts         # TypeScript

# Test with installed package
npm run test:installed:esm
npm run test:installed:cjs  
npm run test:installed:ts
```

### Test Categories

- **Basic Functionality**: Core plotting and configuration
- **Input Validation**: Error handling and parameter checking
- **Parameter Safety**: Type validation and edge cases
- **MaxWidth Downsampling**: Smart data reduction algorithms
- **Module Compatibility**: Cross-format testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Run tests: `npm run test:esm && npm run test:cjs && npm run test:ts`
4. Commit changes: `git commit -m 'Add feature'`
5. Push to branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

MIT © [Anton Bazhenov](https://github.com/Anton4ikk)