module.exports = {
  rootDir: '../',
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/tests/setupTests.js'],
  coveragePathIgnorePatterns: [
    '/src/store/',
    '/src/index.js',
    '/src/reducers/index.js'
  ],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverageFrom: ['src/**/*.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css)': 'identity-obj-proxy',
  },
};
