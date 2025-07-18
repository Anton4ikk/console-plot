export default {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
    '^.+\\.jsx?$': ['babel-jest', { presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: false }]] }]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testEnvironment: 'node',
  rootDir: '..',
  testMatch: ['<rootDir>/unit/**/*.test.{js,ts}', '<rootDir>/integration/**/*.test.{js,ts}'],
  collectCoverageFrom: [
    '../*.js',
    '!../node_modules/**'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(console-plot)/)'
  ]
};
