const {
  utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

module.exports = {
  rules: {
    'scope-enum': async (ctx) => [
      2,
      'always',
      [
        ...(await getProjects(
          ctx,
          ({ name, projectType }) =>
            !name.includes('e2e') && projectType == 'application'
        )),
      ],
    ],
  },
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
};
