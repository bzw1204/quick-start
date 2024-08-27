import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  rules: {
    'node/prefer-global/process': 'off',
    'ts/prefer-literal-enum-member': 'warn',
    // 删除未尾逗号
    'style/comma-dangle': ['error', 'never'],
    'jsonc/comma-dangle': ['error', 'never'],
    // 仅单行if允许不使用大括号
    'style/brace-style': ['error', '1tbs'],
    // 'style/template-curly-spacing': ['error', 'always'],
    'style/space-before-blocks': ['error', 'always'],
    'style/space-before-function-paren': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],
    // 允许使用 console.warn 和 console.error，但使用 console.log 警告
    'no-console': ['warn', { allow: ['warn', 'error', 'group', 'info'] }],
    'style/max-statements-per-line': 0,
    'vue/max-attributes-per-line': ['error', { singleline: 6, multiline: 1 }],
    'vue/max-len': ['error', {
      code: 320,
      template: 320,
      tabWidth: 2,
      comments: 320,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: true
    }]
  }
})
