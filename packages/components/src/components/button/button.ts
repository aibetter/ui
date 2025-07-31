import type { TemplateResult } from 'lit'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('u-button')
export class UButton extends LitElement {
  render(): TemplateResult {
    return html`<button>Click me</button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'u-button': UButton
  }
}
