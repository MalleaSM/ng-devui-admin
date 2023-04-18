module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    coverageReporters: ['html'],
    coverageDirectory: 'coverage',
    moduleNameMapper: {
      '^lodash-es$': 'lodash'
    }
  };
  