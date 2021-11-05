import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Registers the element
@customElement('package1-bar')
export class BarElement extends LitElement {
  @property()
  mood = 'great';

  render() {
    return html`Web Components are <span>${this.mood}</span>!`;
  }
}
