<script setup lang="ts">
import type { TVOptions } from '../../utils/ui'
import type { Props } from './props'
import { computed } from 'vue'
import { createUI } from '../../utils/ui'
import { UIcon } from '../icon'
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
  icon: '',
  iconReverse: false,
  loading: false,
  loadingIcon: 'icon-[line-md--loading-loop]',
  disabled: false,
  block: false,
  ui: () => ({}),
})

const ui = computed(() => createUI(initUI, props.ui)(props))
</script>

<template>
  <button :class="ui.root()">
    <UIcon v-if="loading" :name="loadingIcon" />
    <UIcon
      v-else-if="icon" :name="icon" :class="ui.icon()"
    />
    <slot />
  </button>
</template>
