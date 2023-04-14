// @ts-check
// const { pathsToModuleNameMapper } = require('ts-jest');

const tsConfigFile = './tsconfig.jest.json';
const { getJestCachePath } = require('../../cache.config');

const packageJson = require('./package.json');
// const { compilerOptions: baseTsConfig } = require('./tsconfig.json');

// // ./tsconfig.json 에서 자동적으로 tsconfig 의 경로를 가져옴
// // @link https://kulshekhar.github.io/ts-jest/docs/paths-mapping
// const getTsConfigBasePaths = () => {
//   return baseTsConfig?.paths
//     ? pathsToModuleNameMapper(baseTsConfig?.paths, {
//         prefix: '<rootDir>/',
//       })
//     : {};
// };

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  displayName: `${packageJson.name}:unit`,
  cacheDirectory: getJestCachePath(packageJson.name),
  testEnvironment: 'jsdom',
  verbose: true,
  rootDir: './src',
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: tsConfigFile,
      },
    ],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    // For @testing-library/react
    // '^@/test-utils$': '<rootDir>/../config/jest/test-utils',
    // ...getTsConfigBasePaths(),
  },
  // coverage 는 기본적으로 false 으로 설정하고, collect-coverage 를 보기 위해서는 명령어로 실행 (yarn test:unit --collect-coverage=true)
  collectCoverage: false,
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx,js,jsx}', '!**/*.test.ts'],
};

module.exports = config;
