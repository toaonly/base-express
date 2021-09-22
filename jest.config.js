module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testMatch: [
    '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
