/**
 * playwright 를 사용하는 프로젝트를 위한 기본 사용자 정의 설정
 */

const playwrightPatterns = {
  files: ['**/e2e/**/*.test.{js,ts}'],
};

module.exports = {
  overrides: [
    {
      // Perf: 성능 향상을 위해 e2e 테스트 파일에 대해서만 활성화
      files: playwrightPatterns.files,
      // @see https://github.com/playwright-community/eslint-plugin-playwright
      extends: ['plugin:playwright/recommended'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
