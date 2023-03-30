const reactPatterns = {
  files: ['*.{jsx,tsx}'],
};

/**
 * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: [...reactPatterns.files],
      extends: [
        // @see https://github.com/francoismassart/eslint-plugin-tailwindcss,
        'plugin:tailwindcss/recommended',
      ],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ],
};