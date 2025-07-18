# console-plot

[![npm version](https://img.shields.io/npm/v/console-plot.svg)](https://www.npmjs.com/package/console-plot)
[![npm downloads](https://img.shields.io/npm/dm/console-plot.svg)](https://www.npmjs.com/package/console-plot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A simple tool for drawing basic graphs in the terminal using X and Y data.

---

## Links

[npm package](https://www.npmjs.com/package/console-plot) | [GitHub](https://github.com/Anton4ikk/console-plot)

---

## Installation

```bash
npm install console-plot
```

---

## Usage Examples

### Basic Plot

```javascript
import { plotGraph } from 'console-plot';

plotGraph({
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});
```

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

### Advanced Configuration

```javascript
import { plotGraph } from 'console-plot';

plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  maxHeight: 20,
  pointer: '@',
});
```

```
100.00                                                 @      @
 94.79
 89.58
 84.37
 79.16
 73.95                                          @
 68.74
 63.53
 58.32
 53.11                            @   @    @
 47.89                      @
 42.68
 37.47
 32.26
 27.05
 21.84
 16.63
 11.42
  6.21
  1.00  @      @      @

        Ja..ry Fe..ry March April May June July August Se..er Oc..er
```

---

## TypeScript Support

This package includes TypeScript definitions for full type safety and IntelliSense support.

```typescript
import { plotGraph, PlotGraphParams } from 'console-plot';

const params: PlotGraphParams = {
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
  maxHeight: 15,
  maxWidth: 20,
  pointer: '@',
};

plotGraph(params);
```

---

## CommonJS Support

This package also supports CommonJS (require) syntax:

```javascript
const { plotGraph } = require('console-plot');

plotGraph({
  yData: [1, 2, 3, 4, 5],
  xData: ['A', 'B', 'C', 'D', 'E'],
});
```

---

## Development & Contributing

To contribute to this project or run tests locally:

#### Setup

```bash
# Clone the repository
git clone https://github.com/Anton4ikk/console-plot.git
cd console-plot

# Install dependencies
npm install

# Setup test environment
cd test && npm install
```

#### Running Tests

```bash
# Run all tests (unit + integration)
npm test
```

#### Test Structure

```
test/
├── config/           # Test configuration files
├── unit/            # Unit tests (core functionality)
├── integration/     # Integration tests (ESM/CJS, installed package)
└── README.md        # Detailed test documentation
```

**Available test types:**
- **Unit tests**: Core functionality and validation
- **Integration tests**: ESM/CommonJS compatibility and npm package tests
- **TypeScript tests**: Type safety and IntelliSense verification

**Note:** `node_modules` folders are excluded from version control. Dependencies are installed automatically when running tests.
