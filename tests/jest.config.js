module.exports = {
  rootDir: "../",
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/tests/setupTests.js"],
  testPathIgnorePatterns: [
    "<rootDir>/tests/setupTests.js",
    "<rootDir>/tests/jest.config.js",
    "<rootDir>/tests/coverage"
  ],
  coverageDirectory: "<rootDir>/tests/coverage",
  collectCoverageFrom: ["**/*.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    '\\.(css)': 'identity-obj-proxy',
  },
};
