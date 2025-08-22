import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    vue: true,
    react: true,
    typescript: true,
  },
  {
    files: ['docs/**/*.vue'],
    rules: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        ignores: ['/^u-/'],
      }],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'ts/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
        disallowTypeAnnotations: false,
      }],
    },
  },
)
