import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
    <h1>Step 1: Upload files</h1>
    <vaadin-horizontal-layout id="upload_container" theme="spacing">
        <vaadin-upload id="upload" accept=".class" max-file-size="100000000">
            <span slot="drop-label" style="">Drop files or folder here</span>
        </vaadin-upload>
    </vaadin-horizontal-layout>
    <h1>Step 2: Select obfuscation techniques</h1>
    <vaadin-horizontal-layout id="technique_container">
        <vaadin-vertical-layout>
            <vaadin-checkbox id="technique1">Technique 1</vaadin-checkbox>
            <vaadin-checkbox id="technique2">Technique 2</vaadin-checkbox>
            <vaadin-checkbox id="technique3">Technique 3</vaadin-checkbox>
        </vaadin-vertical-layout>
        <vaadin-vertical-layout>
            <vaadin-checkbox id="technique4">Technique 4</vaadin-checkbox>
            <vaadin-checkbox id="technique5">Technique 5</vaadin-checkbox>
            <vaadin-checkbox id="technique6">Technique 6</vaadin-checkbox>
        </vaadin-vertical-layout>
    </vaadin-horizontal-layout>
    <h1>Step 3: Review Changes</h1>
    <vaadin-horizontal-layout style="width=100%; align-content=left;">
        <vaadin-list-box>
           <vaadin-item>File 1</vaadin-item>
           <vaadin-item>File 2</vaadin-item>
           <vaadin-item>File 3</vaadin-item>
        </vaadin-list-box>
    </vaadin-horizontal-layout>
    <vaadin-horizontal-layout id="compare_container">
        <vaadin-text-area id="before"></vaadin-text-area>
        <iron-icon icon="vaadin:arrow-right"></iron-icon>
        <vaadin-text-area id="after"></vaadin-text-area>
    </vaadin-horizontal-layout>
    <h1>Step 4: Download</h1>
    <vaadin-horizontal-layout id="download_container">
        <vaadin-button id="download" theme="primary">
            <iron-icon icon="vaadin:download-alt" slot="prefix"></iron-icon>
            Download Files
        </vaadin-button>
    </vaadin-horizontal-layout>
    <vaadin-horizontal-layout id="footer_container">
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
