export default {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.test.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
    '<rootDir>/src/tests/**/*.test.(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
}
