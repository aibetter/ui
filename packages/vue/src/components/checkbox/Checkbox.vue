<script setup lang="ts">
import type { Props } from './props'
import { computed, useId } from 'vue'
import { createUI } from '../../utils/ui'
import { UIcon } from '../icon'
import { initUI } from './style'

defineOptions({
  name: 'UCheckbox',
})

const props = withDefaults(defineProps<Props>(), {
  icon: 'icon-[lucide--check]',
  disabled: false,
})

const ui = computed(() => createUI(initUI, props.ui)(props))

const model = defineModel<boolean>({ default: false })

const id = useId()
</script>

<template>
  <div :class="ui.root()" @click="model = !model">
    <div :id="id" :class="ui.checkbox()" :aria-checked="model">
      <UIcon v-if="model" :name="icon" :size="16" />
    </div>
    <label :for="id" :class="ui.label()">
      <slot />
    </label>
  </div>
</template>
