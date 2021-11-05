module.exports = {
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  displayName: 'package1',
  coverageDirectory: 'coverage',
  snapshotSerializers: ['jest-serializer-html'],
};
