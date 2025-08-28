import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'cursor-pointer w-32 flex items-center gap-1 border border-solid border-border rounded-md',
    placeholder: 'text-text-muted',
    floating: 'min-w-32 bg-background rounded-md shadow-sm border border-solid border-border',
    option: 'cursor-pointer rounded-md px-2 flex items-center gap-1 transition-colors hover:bg-secondary-100',
  },
  variants: {
    size: {
      sm: {
        root: 'h-6 px-1.5 text-sm',
        floating: 'p-1.5',
      },
      md: {
        root: 'h-8 px-2 text-base',
        floating: 'p-2',
      },
      lg: {
        root: 'h-10 px-3 text-xl',
        floating: 'p-3',
      },
    },
  },
}
