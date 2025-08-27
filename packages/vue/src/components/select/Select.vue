<script setup lang="ts">
import type { TVOptions } from '../../utils/ui'
import type { Props } from './props'
import { flip, offset, shift, useFloating } from '@floating-ui/vue'
import { useElementBounding, useResizeObserver } from '@vueuse/core'
import { computed, ref, useTemplateRef } from 'vue'
import { useZIndex } from '../../composables/useZIndex'
import { createUI } from '../../utils/ui'
import { initUI } from './style'

defineOptions({
  name: 'USelect',
})

const props = withDefaults(defineProps<
  Props
  & {
    ui?: TVOptions
  }
>(), {
  options: () => [],
  placement: 'bottom-start',
  offset: 8,
  placeholder: 'Select',
  ui: () => ({}),
})

const ui = computed(() => createUI(initUI, props.ui)(props))

const model = defineModel<unknown>()
const isSelected = computed(() => props.options.some(option => option.value === model.value))

const referenceRef = useTemplateRef('referenceRef')
const floatingRef = useTemplateRef('floatingRef')

const { width: referenceWidth } = useElementBounding(referenceRef)
const floatingWidth = computed(() => props.floatingWidth ?? referenceWidth.value)

const { floatingStyles, update } = useFloating(referenceRef, floatingRef, {
  placement: () => props.placement,
  middleware: () => [
    offset(props.offset),
    flip(),
    shift(),
  ],
})
useResizeObserver(referenceRef, () => {
  update()
})

const { nextZIndex } = useZIndex()
const zIndex = ref(nextZIndex())

const visible = ref(false)
function open() {
  zIndex.value = nextZIndex()
  visible.value = true
  update()
}
function close() {
  visible.value = false
}
function toggle() {
  if (visible.value) {
    close()
  }
  else {
    open()
  }
}

function onClickOption(option: Required<Props>['options'][number]) {
  model.value = option.value
  close()
}
</script>

<template>
  <button ref="referenceRef" :class="ui.root()" @click="toggle">
    <template v-if="isSelected">
      {{ model }}
    </template>
    <span v-else :class="ui.placeholder()">{{ placeholder }}</span>
  </button>
  <div
    v-show="visible"
    ref="floatingRef"
    :class="ui.floating()"
    :style="{
      ...floatingStyles,
      width: `${floatingWidth}px`,
      zIndex,
    }"
  >
    <ul>
      <li
        v-for="option in options"
        :key="option.value"
        :class="ui.option()"
        @click="onClickOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
