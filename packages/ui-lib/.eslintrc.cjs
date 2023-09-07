// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require('@sbjang123456/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@sbjang123456/eslint-config-bases/helpers');

module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns(), '/storybook-static'],
  extends: [
    '@sbjang123456/eslint-config-bases/typescript',
    '@sbjang123456/eslint-config-bases/regexp',
    '@sbjang123456/eslint-config-bases/jest',
    '@sbjang123456/eslint-config-bases/rtl',
    '@sbjang123456/eslint-config-bases/storybook',
    '@sbjang123456/eslint-config-bases/react',
    '@sbjang123456/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};
