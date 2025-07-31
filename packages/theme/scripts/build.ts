import type { TailwindcssColor } from '../src/utils/resolveTheme'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { isPlainObject } from 'es-toolkit'
import colors from 'tailwindcss/colors'
import { resolveThemeOptions } from '../src/utils/resolveTheme'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

const themeOptions = resolveThemeOptions()

const css = `@theme {
  ${Object.entries(themeOptions).map(([key, value]) => {
    if (isPlainObject(colors[value as TailwindcssColor])) {
      return `--color-${key}: ${colors[value as TailwindcssColor][500]};
  ${Object.entries(colors[value as TailwindcssColor]).map(([color, value]) => {
    return `--color-${key}-${color}: ${value};`
  }).join('\n')}
      `
    }

    return ''
  }).join('\n')}

  --color-background: ${colors.white};
  --color-foreground: ${colors.black};

  --color-text-primary: ${colors.black};
  --color-text-secondary: ${colors[themeOptions.secondary][900]};
  --color-text-muted: ${colors[themeOptions.muted][500]};

  --color-border: ${colors[themeOptions.secondary][200]};
  --color-border-variant: ${colors[themeOptions.muted][300]};

  --color-surface: ${colors[themeOptions.secondary][50]};
  --color-surface-variant: ${colors[themeOptions.muted][100]};
}
`

writeFileSync(resolve(__dirname, '../src/css/theme.css'), css)
