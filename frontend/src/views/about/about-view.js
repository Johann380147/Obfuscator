import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class AboutView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div>Content placeholder</div>
    `;
  }

  static get is() {
    return 'about-view';
  }
}

customElements.define(AboutView.is, AboutView);
