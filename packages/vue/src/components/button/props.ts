import { z } from 'zod'

export const props = z.object({
  color: z.enum(['primary', 'secondary']).default('primary'),
  variant: z.enum(['solid', 'ghost']).default('solid'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  block: z.boolean().default(false),
  icon: z.string().optional(),
  iconReverse: z.boolean().default(false),
  loading: z.boolean().default(false),
  loadingIcon: z.string().optional(),
  to: z.url().optional(),
  target: z.enum(['_self', '_blank', '_parent', '_top']).default('_blank'),
  disabled: z.boolean().default(false),
})

export interface Props {
  color?: 'primary' | 'secondary'
  variant?: 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  icon?: string
  iconReverse?: boolean
  loading?: boolean
  loadingIcon?: string
  to?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  disabled?: boolean
}
