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
  {
    files: ['packages/vue/src/**/*.ts'],
    rules: {
      'react-hooks-extra/no-unnecessary-use-prefix': 'off',
    },
  },
  {
    files: ['docs/content/**/*.md'],
    rules: {
      'format/prettier': 'off',
    },
  },
)
