<script lang="ts" setup>
import { UButton } from '@vue-ui'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div>
    <header class="h-14 px-4 flex items-center justify-between">
      <div>
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg src="/logo.svg" alt="AI Better UI" class="size-8" />
          <span class="text-2xl font-bold">UI</span>
        </NuxtLink>
      </div>
      <div>
        <UButton
          icon="icon-[mdi--github]"
          variant="ghost"
          @click="navigateTo('https://github.com/aibetter/ui.git', {
            external: true,
            open: {
              target: '_blank',
            },
          })"
        />
      </div>
    </header>
    <main class="flex h-[calc(100vh-3.5rem)]">
      <menu class="w-48 h-full px-4 overflow-auto">
        <ul>
          <li>
            <NuxtLink
              class="block px-3 py-1 rounded-md transition-colors hover:bg-primary-50"
              to="/components/button"
            >
              Button
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-3 py-1 rounded-md transition-colors hover:bg-primary-50"
              to="/components/icon"
            >
              Icon
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-3 py-1 rounded-md transition-colors hover:bg-primary-50"
              to="/components/input"
            >
              Input
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-3 py-1 rounded-md transition-colors hover:bg-primary-50"
              to="/components/select"
            >
              Select
            </NuxtLink>
          </li>
        </ul>
      </menu>
      <div class="flex-1 h-full overflow-auto">
        <article class=" prose h-full">
          <ContentRenderer v-if="page" :value="page" />
        </article>
      </div>
    </main>
  </div>
</template>
