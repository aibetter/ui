import { ref } from 'vue'

export function useZIndex() {
  const zIndex = ref(200)
  const nextZIndex = () => {
    zIndex.value++
    return zIndex.value
  }

  const overlayZIndex = ref(2000)
  const nextOverlayZIndex = () => {
    overlayZIndex.value++
    return overlayZIndex.value
  }

  return {
    zIndex,
    nextZIndex,

    overlayZIndex,
    nextOverlayZIndex,
  }
}
