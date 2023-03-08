// @ts-check

/**
 * 루트 디렉토리의 lint-staged.config.js 를 재정의
 *
 * {@link https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo}
 */


const {
  concatFilesForPrettier,
  getEslintFixCmd,
} = require('../../lint-staged.common.js');

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{js,jsx,ts,tsx,mjs,cjs}': (filenames) => {
    return getEslintFixCmd({
      cwd: __dirname,
      fix: true,
      cache: true,
      // react-hooks/exhaustive-deps 비활성화(eslint --fix 시 문제가 발생할 수 있음)
      rules: ['react-hooks/exhaustive-deps: off'],
      maxWarnings: 25,
      files: filenames,
    });
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`];
  },
};

module.exports = rules;
