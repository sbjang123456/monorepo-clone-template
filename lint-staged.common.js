// @ts-check

const path = require('path');
const escape = require('shell-quote').quote;

const isWin = process.platform === 'win32';

// eslint global rule
const eslintGlobalRulesForFix = [
  'react-hooks/exhaustive-deps: off',
];

/**
 * eslint를 실행하기 위한 Lint-staged command(명령어)
 * @param {{cwd: string, files: string[], fix: boolean, fixType?: ('problem'|'suggestion'|'layout'|'directive')[], cache: boolean, rules?: string[], maxWarnings?: number}} params
 */
const getEslintFixCmd = ({
  cwd,
  files,
  rules,
  fix,
  fixType,
  cache,
  maxWarnings,
}) => {
  const cliRules = [...(rules ?? []), ...eslintGlobalRulesForFix]
    .filter((rule) => rule.trim().length > 0)
    .map((r) => `"${r.trim()}"`);

  // eslint 의 fix 명령어 수행 중 수정 유형 지정
  // @see https://eslint.org/docs/user-guide/command-line-interface#--fix-type
  const cliFixType = [...(fixType ?? ['layout'])].filter(
    (type) => type.trim().length > 0
  );

  const args = [
    cache ? '--cache' : '',
    fix ? '--fix' : '',
    cliFixType.length > 0 ? `--fix-type ${cliFixType.join(',')}` : '',
    maxWarnings !== undefined ? `--max-warnings=${maxWarnings}` : '',
    cliRules.length > 0 ? `--rule ${cliRules.join('--rule ')}` : '',
    files
      // makes output cleaner by removing absolute paths from filenames
      .map((f) => `"./${path.relative(cwd, f)}"`)
      .join(' '),
  ].join(' ');
  return `eslint ${args}`;
};

/**
 *
 * prettier 파일명 특수문자 이슈 처리를 위한 파일명 escape 처리
 * nextjs dynamic routes 를 위한 파일명 처리(ex: [id].tsx...)
 *
 * @link https://github.com/okonet/lint-staged/issues/676
 *
 * @param {string[]} filenames
 * @returns {string} Return concatenated and escaped filenames
 */
const concatFilesForPrettier = (filenames) =>
  filenames
    .map((filename) => `"${isWin ? filename : escape([filename])}"`)
    .join(' ');

const concatFilesForStylelint = concatFilesForPrettier;

module.exports = {
  concatFilesForPrettier,
  concatFilesForStylelint,
  getEslintFixCmd,
};
