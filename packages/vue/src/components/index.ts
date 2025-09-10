import type { Component } from 'vue'
import { UButton } from './button'
import { UCheckbox } from './checkbox'
import { UIcon } from './icon'
import { UInput } from './input'
import { USelect } from './select'

export {
  UButton,
  UCheckbox,
  UIcon,
  UInput,
  USelect,
}

export const components: Record<string, Component> = {
  UButton,
  UIcon,
  UInput,
  USelect,
  UCheckbox,
}
