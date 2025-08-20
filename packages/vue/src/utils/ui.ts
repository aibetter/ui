import type { ClassValue } from 'tailwind-variants'
import { merge } from 'es-toolkit'
import { tv } from 'tailwind-variants'

// AI-DEV-NOTE: Define TVOptions type based on the actual structure used in components
// AI-DEV-NOTE: This is more reliable than extracting from Parameters<typeof tv>[0] due to complex generics
export interface TVOptions {
  base?: ClassValue
  slots?: Record<string, ClassValue>
  variants?: Record<string, Record<string, Record<string, ClassValue> | ClassValue>>
  compoundVariants?: Array<Record<string, any> & { class?: Record<string, ClassValue> | ClassValue }>
  defaultVariants?: Record<string, any>
  extend?: any
}

export function createUI<T extends object>(initUI: TVOptions, customUI: TVOptions = {}) {
  return (state: T) => tv(merge(initUI, customUI))(state)
}
