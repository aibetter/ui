import type colors from 'tailwindcss/colors'

export type TailwindcssColor = keyof Omit<typeof colors, 'inherit' | 'current' | 'transparent' | 'black' | 'white'>

interface ThemeOptions {
  primary: TailwindcssColor
  secondary: TailwindcssColor
  accent: TailwindcssColor
  muted: TailwindcssColor

  info: TailwindcssColor
  success: TailwindcssColor
  warning: TailwindcssColor
  error: TailwindcssColor
}

const DEFAULT_THEME_OPTIONS: ThemeOptions = {
  // Theme colors
  primary: 'blue',
  secondary: 'gray',

  // Semantic colors
  accent: 'purple',
  muted: 'zinc',
  info: 'slate',
  success: 'green',
  warning: 'yellow',
  error: 'red',
}

export function resolveThemeOptions(options?: Partial<ThemeOptions>) {
  const resolvedOptions = Object.assign({}, DEFAULT_THEME_OPTIONS, options)

  return resolvedOptions
}
