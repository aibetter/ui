import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'inline-flex items-center gap-1 border border-solid border-border',
    input: 'focus:outline-none',
  },
  variants: {
    size: {
      sm: {
        root: 'h-6 text-sm px-1.5 rounded-sm',
      },
      md: {
        root: 'h-8 text-base px-3 py-1 rounded-md',
      },
      lg: {
        root: 'h-10 text-xl px-4 rounded-lg',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed pointer-events-none opacity-75',
      },
      false: {
        root: 'cursor-pointer transition-colors pointer-events-auto',
      },
    },
  },
}
