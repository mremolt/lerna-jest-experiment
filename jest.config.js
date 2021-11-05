module.exports = {
  projects: ['<rootDir>/packages/*'],

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.spec.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  snapshotSerializers: ['jest-serializer-html'],
};
