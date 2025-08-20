import { z } from 'zod'

export const props = z.object({
  color: z.enum(['primary', 'secondary']).optional(),
  variant: z.enum(['solid', 'ghost']).optional(),
  size: z.enum(['sm', 'md', 'lg']).optional(),
  block: z.boolean().optional(),
  icon: z.string().optional(),
  iconReverse: z.boolean().optional(),
  loading: z.boolean().optional(),
  loadingIcon: z.string().optional(),
  to: z.url().optional(),
  target: z.enum(['_self', '_blank', '_parent', '_top']).optional(),
  disabled: z.boolean().optional(),
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
