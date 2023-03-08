/**
 * react-testing-library 를 사용하는 프로젝트를 위한 기본 사용자 정의 설정
 */

const rtlPatterns = {
  files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      // Perf: 성능 향상을 위해 react-testing-library 파일에 대해서만 활성화
      files: rtlPatterns.files,
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
  ],
};
