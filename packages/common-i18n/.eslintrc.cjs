/**
 * packages/common-i18n eslint 커스텀(@sbjang123456/eslint-config-bases 에서 상속받음)
 */

const {
  getDefaultIgnorePatterns,
} = require('@sbjang123456/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@sbjang123456/eslint-config-bases/typescript',
    // Apply prettier and disable incompatible rules
    '@sbjang123456/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};
