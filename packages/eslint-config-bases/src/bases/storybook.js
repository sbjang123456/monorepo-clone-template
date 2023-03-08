/**
 * storybook 을 사용하는 프로젝트를 위한 기본 사용자 정의 설정
 */

const storybookPatterns = {
  files: ['**/*.stories.{ts,tsx,mdx}'],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      // Perf: 성능 향상을 위해 storybook(stories) 파일에 대해서만 활성화
      files: storybookPatterns.files,
      extends: ['plugin:storybook/recommended'],
    },
  ],
};
