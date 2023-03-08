/**
 * jest 를 사용하는 프로젝트를 위한 기본 사용자 정의 설정
 */

const jestPatterns = {
  files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      // Perf: 성능 향상을 위해 테스트 파일에 대해서만 활성화
      files: jestPatterns.files,
      // @see https://github.com/jest-community/eslint-plugin-jest
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-duplicates': 'off',
        // 테스트 작성 규칙 완화
        'import/no-named-as-default-member': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
