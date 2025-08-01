import type { App } from 'vue'
import { components } from './components'

export function install(app: App): void {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}
