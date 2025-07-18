# Test Suite

This directory contains the comprehensive test suite for the console-plot package.

## Structure

```
test/
├── config/           # Test configuration files
│   ├── jest.config.js    # Jest configuration
│   └── tsconfig.json     # TypeScript configuration
├── unit/             # Unit tests
│   ├── plotGraph.test.js        # Core plotting functionality
│   ├── inputValidation.test.js  # Input validation tests
│   └── typescript.test.ts       # TypeScript type safety tests
├── integration/      # Integration tests
│   ├── dual-module.test.js      # ESM/CJS compatibility
│   └── installed/               # NPM package installation tests
│       ├── package.json
│       ├── test.js              # JavaScript usage test
│       └── test.ts              # TypeScript usage test
└── package.json      # Test dependencies and scripts
```

## Test Categories

### Unit Tests (`unit/`)
- **plotGraph.test.js**: Tests core plotting functionality, parameters, and output
- **inputValidation.test.js**: Tests input validation and error handling
- **typescript.test.ts**: Tests TypeScript type definitions and type safety

### Integration Tests (`integration/`)
- **dual-module.test.js**: Tests ESM/CommonJS compatibility
- **installed/**: Tests the actual npm-installed package to ensure it works in real environments

## Available Commands

```bash
# Run all tests (unit + integration)
npm test

# Run tests in watch mode
npm run test:watch

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration

# Run only installed package tests
npm run test:installed
```

## Setup

Install dependencies:
```bash
npm install
```

The integration tests will automatically install the package and run tests to ensure everything works correctly in a real npm environment.

## Configuration

- **Jest**: Configured in `config/jest.config.js`
- **TypeScript**: Configured in `config/tsconfig.json`
- **Test Framework**: Jest with TypeScript support via ts-jest