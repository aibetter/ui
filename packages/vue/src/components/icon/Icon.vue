<script setup lang="ts">
import type { Props } from './props'
import { isNumber } from 'es-toolkit/compat'
import { computed } from 'vue'
import { createUI } from '../../utils/ui'
import { initUI } from './style'

defineOptions({
  name: 'UIcon',
})

const props = withDefaults(defineProps<Props>(), {
  name: '',
  size: 'md',
})

const ui = computed(() => createUI(initUI, props.ui)(props))

const customSize = computed(() => {
  if (!isNumber(props.size)) {
    return null
  }

  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
  }
})
</script>

<template>
  <i :class="[name, ui.root()]" :style="customSize" />
</template>
