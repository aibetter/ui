<script setup lang="ts">
import type { Props } from './props'
import { computed } from 'vue'
import { createUI } from '../../utils/ui'
import { initUI } from './style'

defineOptions({
  name: 'UInput',
})

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Input',
  size: 'md',
  disabled: false,
})

const model = defineModel<string | number>()

const ui = computed(() => createUI(initUI, props.ui)(props))
</script>

<template>
  <div :class="ui.root()">
    <input
      v-model="model"
      :class="ui.input()"
      :placeholder="placeholder"
    >
  </div>
</template>
