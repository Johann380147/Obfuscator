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
    <h1>Step 1:</h1>
    <vaadin-horizontal-layout id="upload_container" theme="spacing">
        <vaadin-upload id="upload" accept=".class" max-file-size="100000000">
            <span slot="drop-label" style="">Drop files or folder here</span>
        </vaadin-upload>
    </vaadin-horizontal-layout>
    <h1>Step 2:</h1>
    <vaadin-horizontal-layout id="compare_container">
        <vaadin-text-area id="before"></vaadin-text-area>
        <vaadin-text-area id="after"></vaadin-text-area>
    </vaadin-horizontal-layout>
    <h1>Step 3:</h1>
    <vaadin-horizontal-layout id="download_container">
        <vaadin-button id="download" theme="primary">
            <iron-icon icon="vaadin:download-alt" slot="prefix"></iron-icon>
            Download Files
        </vaadin-button>
    </vaadin-horizontal-layout>
    <vaadin-horizontal-layout id="footer_container">
    </vaadin-horizontal-layout>
</vaadin-vertical-layout>

<script>
  customElements.whenDefined('vaadin-upload').then(function() {
    const upload = document.querySelector('vaadin-upload');
    upload.addEventListener('file-reject', function(event) {
      window.alert(event.detail.file.name + ' error: ' + event.detail.error);
    });
  });
</script>

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
