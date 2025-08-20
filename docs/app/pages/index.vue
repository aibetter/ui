<script setup lang="ts">
import { UButton } from '@aibetter/ui-vue'
</script>

<template>
  <div class="p-4">
    <div class="flex flex-wrap gap-2">
      <UButton color="primary" variant="solid" size="sm" />
      <UButton color="primary" variant="solid" />
      <UButton color="primary" variant="solid" size="lg" />
    </div>
    <div class="flex flex-wrap gap-2">
      <UButton color="primary" variant="ghost" size="sm" />
      <UButton color="primary" variant="ghost" />
      <UButton color="primary" variant="ghost" size="lg" />
    </div>
  </div>
</template>
