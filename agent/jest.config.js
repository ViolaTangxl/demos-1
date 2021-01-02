module.exports = {
  setupFiles: [
    '<rootDir>/test/setup.js'
  ],
  globals: {
    'ts-jest': {
      babelConfig: false
    }
  },
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testRegex: '.+\\.spec\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    'node_modules',
    'spock',
    'test'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/file-mock.js',
    '\\.svg(\\?.*|$)': '<rootDir>/test/svg-sprite-mock.js',
    '\\.(css|less)$': '<rootDir>/test/style-mock.js',
    '^highcharts$': '<rootDir>/test/highcharts-mock.js',
    '^react\\-dom$': '<rootDir>/test/react-dom-mock.js',
    '^react\\-dom\\/lib\\/ReactDOM$': '<rootDir>/test/react-dom-mock.js',
    '^react\\-dom\\/lib\\/getVendorPrefixedEventName$': '<rootDir>/test/react-dom-getVendorPrefixedEventName-mock.js'
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageDirectory: '__coverage__',
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  coveragePathIgnorePatterns: [
    '<rootDir>/test/'
  ],
  testURL: 'https://portal.qiniu.com'
}
