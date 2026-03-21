export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Match your branch naming convention
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'build', // Build system or external dependencies
        'chore', // Maintenance tasks
        'ci', // CI/CD changes
        'docs', // Documentation only
        'perf', // Performance improvement
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'revert', // Revert a previous commit
        'style', // Code style (formatting, semicolons, etc.)
        'test', // Adding or correcting tests
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
  },
}
