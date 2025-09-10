import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'inline-flex items-center gap-1 cursor-pointer text-base',
    checkbox: 'flex items-center justify-center border border-solid border-primary-300 rounded-sm size-5 aria-checked:bg-primary-500 aria-checked:text-foreground-reverse',
    label: 'text-base',
  },
  variants: {
    disabled: {
      true: {
        root: 'cursor-not-allowed pointer-events-none opacity-75',
      },
      false: {
        root: 'cursor-pointer pointer-events-auto',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
}
