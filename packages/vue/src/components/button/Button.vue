<script setup lang="ts">
import type { TVOptions } from '../../utils/ui'
import type { Props } from './props'
import { computed } from 'vue'
import { createUI } from '../../utils/ui'
import { initUI } from './style'

defineOptions({
  name: 'UButton',
})

const props = withDefaults(defineProps<
  Props
  & {
    ui?: TVOptions
  }
>(), {
  color: 'primary',
  variant: 'solid',
  size: 'md',
  block: false,
  disabled: false,
  loading: false,
  loadingIcon: '',
  to: '',
  target: '_self',
  ui: () => ({}),
})

const ui = computed(() => createUI(initUI, props.ui)(props))
</script>

<template>
  <button :class="ui.root()">
    <slot />
  </button>
</template>
