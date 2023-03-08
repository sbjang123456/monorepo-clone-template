/**
 * eslint 및 jest 의 cache 디렉토리의 경로를 가져오는 설정 스크립트
 * node_modules/.cache (@link https://github.com/avajs/find-cache-dir)
 * It's possible too.
 */
// @ts-check
'use strict';

const { resolve } = require('path');

const globalCachePath = resolve(`${__dirname}/.cache`);

/**
 * @param {string} packageName
 * @returns string
 */
function sanitize(packageName) {
  return packageName.replace('/', '.').replace(/[^a-z0-9.@_-]+/gi, '-');
}

/**
 * @param {string} packageName
 * @returns string
 */
function getEslintCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/eslint`;
}

/**
 * @param {string} packageName
 * @returns string
 */
function getJestCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/jest`;
}

module.exports = {
  getJestCachePath,
  getEslintCachePath,
};
