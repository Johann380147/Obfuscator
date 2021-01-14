const div = document.createElement('div');
div.innerHTML = '<custom-style><style include="lumo-color lumo-typography"></style></custom-style>';
document.head.insertBefore(div.firstElementChild, document.head.firstChild);

function addCssBlock(block) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head.appendChild(tpl.content);
}
import $css_0 from 'Frontend/styles/views/main/main-view.css';
addCssBlock(`<dom-module id="flow_css_mod_0" theme-for="vaadin-app-layout"><template><style>${$css_0}</style></template></dom-module>`);
import $css_1 from 'Frontend/styles/views/main/main-view.css';
addCssBlock(`<custom-style><style>${$css_1}</style></custom-style>`);

import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/vaadin-custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js';
import '@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js';
import '@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js';
import 'Frontend/src/views/about/about-view.js';
import 'Frontend/src/views/obfuscate/obfuscate-view.js';
import 'Frontend/styles/shared-styles.js';
var scripts = document.getElementsByTagName('script');
var thisScript;
var elements = document.getElementsByTagName('script');
for (var i = 0; i < elements.length; i++) {
    var script = elements[i];
    if (script.getAttribute('type')=='module' && script.getAttribute('data-app-id') && !script['vaadin-bundle']) {
        thisScript = script;break;
     }
}
if (!thisScript) {
    throw new Error('Could not find the bundle script to identify the application id');
}
thisScript['vaadin-bundle'] = true;
if (!window.Vaadin.Flow.fallbacks) { window.Vaadin.Flow.fallbacks={}; }
var fallbacks = window.Vaadin.Flow.fallbacks;
fallbacks[thisScript.getAttribute('data-app-id')] = {}
fallbacks[thisScript.getAttribute('data-app-id')].loadFallback = function loadFallback(){
   return import('./generated-flow-imports-fallback.js');
}