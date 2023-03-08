// @ts-check

/**
 * Root 디렉토리에서의 lint-staged 는 prettier 만 기본적으로 설정
 * A good practice is to override this base configuration in each package and/or application
 * 각 packages/* 와 apps/* 에서 각 각의 설정을 재정의
 *
 * {@link https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo}
 */

const { concatFilesForPrettier } = require('./lint-staged.common.js');

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{json,md,mdx,css,html,yml,yaml,scss,ts,js,tsx,jsx,mjs}': (
    filenames
  ) => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`];
  },
};

module.exports = rules;
