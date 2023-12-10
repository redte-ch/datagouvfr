module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  reporters: ['jest-silent-reporter'],
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]
  }
}
