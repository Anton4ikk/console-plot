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

# Install dependencies (if needed for development)
npm install

# Setup test environment
cd test/installed && npm install
```

#### Running Tests

```bash
# Run tests for specific formats:
npm run test:esm        # ESM format tests only
npm run test:cjs        # CommonJS format tests only
npm run test:ts         # TypeScript format tests only

# Or run tests for specific installed package formats:
npm run test:installed:esm  # ESM tests with installed package
npm run test:installed:cjs  # CommonJS tests with installed package
npm run test:installed:ts   # TypeScript tests with installed package
```

#### Test Structure

```
test/
├── esm/                          # ESM format tests (import syntax)
│   ├── plotGraph.test.js         # Basic functionality tests
│   ├── inputValidation.test.js   # Input validation tests
│   └── parameterSafety.test.js   # Parameter safety tests
├── cjs/                          # CommonJS format tests (require syntax)
│   ├── plotGraph.test.cjs        # Basic functionality tests
│   ├── inputValidation.test.cjs  # Input validation tests
│   └── parameterSafety.test.cjs  # Parameter safety tests
├── ts/                           # TypeScript format tests (with typing)
│   ├── plotGraph.test.ts         # Basic functionality tests
│   ├── inputValidation.test.ts   # Input validation tests
│   └── typescript.test.ts        # TypeScript type safety tests
└── installed/                    # Tests using installed npm package
    ├── esm/                      # ESM tests with installed package
    ├── cjs/                      # CommonJS tests with installed package
    └── ts/                       # TypeScript tests with installed package
```

**Test Categories:**
- **Basic functionality**: Core plotting features and options
- **Input validation**: Error handling and parameter validation
- **Parameter safety**: Type checking and parameter validation
- **Module compatibility**: ESM, CommonJS, and TypeScript support
- **Package integration**: Tests using the actual installed npm package

**Note:** Each test file uses simple function calls without test frameworks, making them easy to run directly with Node.js.
