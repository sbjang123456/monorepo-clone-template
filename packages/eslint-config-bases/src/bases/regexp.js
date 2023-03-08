/**
 * regexp 를 사용하는 프로젝트를 위한 기본 사용자 정의 설정
 */

const regexpPatterns = {
  files: ['*.{js,jsx,jsx,tsx}'],
};

module.exports = {
  // @see https://github.com/ota-meshi/eslint-plugin-regexp
  extends: ['plugin:regexp/recommended'],
  overrides: [
    {
      files: regexpPatterns.files,
      extends: ['plugin:regexp/recommended'],
      rules: {
        'regexp/prefer-result-array-groups': 'off',
      },
    },
  ],
};
