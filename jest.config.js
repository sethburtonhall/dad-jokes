module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    // for https://github.com/facebook/jest/issues/919
    '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': '<rootDir>/tests/unit/__mocks__/gifMock.js',
  },
}
