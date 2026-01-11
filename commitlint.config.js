module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'design',
        'style',
        'test',
        'chore',
        'init',
        'rename',
        'remove',
        'type',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-match-team-pattern': [2, 'always'],
    'body-leading-blank': [1, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { type, subject } = parsed
          if (type === null || subject === null) {
            return [
              false,
              '커밋 메시지 형식이 잘못되었습니다. (예: feat: 작업 내용 (#이슈번호))',
            ]
          }
          const issueTicketPattern = /\s\(#\d+\)$/
          if (issueTicketPattern.test(subject)) {
            return [true]
          }
          return [
            false,
            '커밋 메시지 끝에 이슈 번호를 포함해야 합니다. (예: (#이슈번호))',
          ]
        },
      },
    },
  ],
}
