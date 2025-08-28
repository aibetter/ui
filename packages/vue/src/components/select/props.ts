import type { Placement } from '@floating-ui/vue'
import { z } from 'zod'

export const props = z.object({
  options: z.array(z.looseObject({
    label: z.string(),
    value: z.unknown(),
  })),
  placement: z.enum(
    [
      'top',
      'bottom',
      'left',
      'right',
      'top-start',
      'bottom-start',
      'left-start',
      'right-start',
      'top-end',
      'bottom-end',
      'left-end',
      'right-end',
    ],
  ).default('bottom-start'),
  offset: z.number().default(8),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  floatingWidth: z.number().optional(),
  placeholder: z.string().default('Select'),
})

export interface Props {
  options?: Array<{
    label: string
    value: unknown
  }>
  placement?: Placement
  offset?: number
  size?: 'sm' | 'md' | 'lg'
  floatingWidth?: number
  placeholder?: string
}
