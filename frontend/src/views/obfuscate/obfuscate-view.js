import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-custom-field/src/vaadin-custom-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-date-picker/src/vaadin-date-picker.js';

class ObfuscateView extends PolymerElement {

  static get template() {
    return html`
<style include="shared-styles lumo-typography">
:host {
  display: block;
  height: 100%;
  padding: 0 var(--lumo-space-l);
}
</style>

<vaadin-vertical-layout id="content_container">
    <h3>Upload file or folder</h3>
    <vaadin-horizontal-layout id="file_upload_container" theme="spacing">
        <vaadin-text-field id="fileName"></vaadin-text-field>
        <vaadin-upload></vaadin-upload>
        <vaadin-button theme="primary" id="browse">
            Browse
        </vaadin-button>
    </vaadin-horizontal-layout>
</vaadin-vertical-layout>

`;
  }

  static get is() {
    return 'obfuscate-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(ObfuscateView.is, ObfuscateView);
