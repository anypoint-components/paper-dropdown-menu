/**
@license
Copyright 2017 Mulesoft.
All rights reserved.
*/
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import {IronA11yKeysBehavior} from '@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';
import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';
import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';
import {IronValidatableMixin} from '@polymer/iron-validatable-behavior/iron-validatable-behavior.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/polymer/lib/elements/custom-style.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@advanced-rest-client/anypoint-styles/typography.js';
import '@advanced-rest-client/anypoint-styles/colors.js';
import './paper-dropdown-menu-icons.js';
/**
 * # Anypoint styled version of the `paper-dropdown-menu` element.
 *
 * To be used with the API Console that must be styled for the platform.
 *
 * This is a faster, lighter version of `paper-dropdown-menu`, that does not
 * use a `<paper-input>` internally. Use this element if you're concerned about
 * the performance of this element, i.e., if you plan on using many dropdowns on
 * the same page. Note that this element has a slightly different styling API
 * than `paper-dropdown-menu`.
 * `paper-dropdown-menu` is similar to a native browser select element.
 * `paper-dropdown-menu` works with selectable content. The currently selected
 * item is displayed in the control. If no item is selected, the `label` is
 * displayed instead.
 *
 * Example:
 *
 *      <paper-dropdown-menu-light label="Your favourite pastry">
 *        <paper-listbox class="dropdown-content">
 *          <paper-item>Croissant</paper-item>
 *          <paper-item>Donut</paper-item>
 *          <paper-item>Financier</paper-item>
 *          <paper-item>Madeleine</paper-item>
 *        </paper-listbox>
 *      </paper-dropdown-menu-light>
 *
 * This example renders a dropdown menu with 4 options.
 * The child element with the class `dropdown-content` is used as the dropdown
 * menu. This can be a [`paper-listbox`](paper-listbox), or any other or
 * element that acts like an [`iron-selector`](iron-selector).
 * Specifically, the menu child must fire an
 * [`iron-select`](iron-selector#event-iron-select) event when one of its
 * children is selected, and an [`iron-deselect`](iron-selector#event-iron-deselect)
 * event when a child is deselected. The selected or deselected item must
 * be passed as the event's `detail.item` property.
 * Applications can listen for the `iron-select` and `iron-deselect` events
 * to react when options are selected and deselected.
 *
 * ### Styling
 *
 * The following custom properties and mixins are also available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
 * `--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
 * `--paper-dropdown-menu-disabled-opacity` | The opacity of the dropdown when disabled  | `0.33`
 * `--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
 * `--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`
 * `--paper-dropdown-menu-color` | The color of the input/label/underline when the dropdown is unfocused | `--primary-text-color`
 * `--paper-dropdown-menu-focus-color` | The color of the label/underline when the dropdown is focused  | `--primary-color`
 * `--paper-dropdown-error-color` | The color of the label/underline when the dropdown is invalid  | `--error-color`
 * `--paper-dropdown-menu-label` | Mixin applied to the label | `{}`
 * `--paper-dropdown-menu-input` | Mixin appled to the input | `{}`
 * `--paper-dropdown-menu-border-color` | Color of the border of the dropdown when opened | `var(--anypoint-color-aluminum4)`
 * `--paper-dropdown-menu-label-opened-color` | Color of the label when opened | `rgba(0, 0, 0, 0.24)`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 * @polymerBehavior IronControlState
 * @polymerBehavior IronA11yKeysBehavior
 * @appliesMixin IronValidatableMixin
 * @memberof AnypointElements
 */
class PaperDropdownMenuLight extends mixinBehaviors([
  IronButtonState,
  IronControlState,
  IronA11yKeysBehavior
], IronValidatableMixin(PolymerElement)) {
  static get template() {
    return html`
    <style>
    :host(:focus) {
      outline: none;
    }

    :host {
      /* Default size of an <input> */
      width: 200px;
      display: inline-block;
      position: relative;
      text-align: left;
      cursor: pointer;

      border-right: 2px solid transparent;
      border-left: 2px solid transparent;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;

      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
      @apply --anypoint-font-common-base;
      @apply --paper-dropdown-menu;

      --paper-menu-button-dropdown: {
        left: -2px !important;
        right: -2px;
        position: absolute !important;
      };

      --paper-menu-button-content: {
        border-bottom: 2px solid var(--paper-dropdown-menu-border-color, var(--anypoint-color-aluminum4));
        top: 20px !important;
        margin-top: -12px !important;
      };
    }

    :host([disabled]) {
      @apply --paper-dropdown-menu-disabled;
    }

    :host([opened]) {
      @apply --paper-dropdown-menu-opened;
    }

    :host([opened][vertical-align="bottom"]) {
      --paper-menu-button-content: {
        border-top: 2px solid var(--paper-dropdown-menu-border-color, var(--anypoint-color-aluminum4));
        border-bottom: 0px solid transparent;
        margin-top: 20px !important;
        top: -18px !important;
      };
    }

    paper-menu-button {
      cursor: pointer;
      display: block;
      padding: 0;
      @apply --paper-dropdown-menu-button;
    }

    /**
     * All of these styles below are for styling the fake-input display
     */
    .dropdown-trigger {
      box-sizing: border-box;
      width: 100%;
      @apply --layout-horizontal;
      @apply --layout-center;
      @apply --paper-dropdown-trigger;
    }

    :host([disabled]) .dropdown-trigger {
      pointer-events: none;
      opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
    }

    .fake-input {
      padding: 10px;
      color: var(--paper-dropdown-menu-color, var(--primary-text-color));
      @apply --paper-dropdown-menu-input;
    }

    paper-menu-button {
      --shadow-elevation-2dp: {
        /* This is intentionally empty */
      };
    }

    :host([disabled]) .fake-input {
      border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      @apply --paper-dropdown-disabled-input;
    }

    :host([invalid]) .fake-input {
      border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      @apply --paper-dropdown-invalid-input;
    }

    label,
    .fake-input {
      @apply --anypoint-font-body;
      @apply --anypoint-font-common-nowrap;
      @apply --layout-flex;
      display: block;
      line-height: 1.5;
      box-sizing: border-box;
      text-align: left;
      outline: none;
    }

    .fake-input:dir(rtl) {
      text-align: rigth;
    }

    label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 10px;
      box-sizing: border-box;
      color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
      @apply --paper-dropdown-menu-label;
    }

    label.default-value {
      padding: 10px;
      margin: 0;
    }

    .trigger-icon {
      @apply --anypoint-font-header5;
      margin-bottom: 0;
      margin-right: 10px;
      display: block;
      color: var(--disabled-text-color);
      @apply --paper-dropdown-menu-icon;
    }

    .trigger-icon:dir(rtl) {
      padding-right: 0px;
      padding-left: 10px;
    }

    :host([opened]) .trigger-icon {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      color: var(--paper-dropdown-menu-label-opened-color, rgba(0, 0, 0, 0.24));
    }

    .input-wrapper {
      position: relative;
      border-left: 2px var(--paper-input-container-border-color, var(--anypoint-color-aluminum4)) solid;
      border-right: 2px var(--paper-input-container-border-color, var(--anypoint-color-aluminum4)) solid;
      height: inherit;
      background-color: var(--anypoint-color-aluminum2);
      -webkit-transition: background-color .2s ease-out;
      transition: background-color .2s ease-out;
    }

    :host(:hover) .input-wrapper {
      background-color: var(--anypoint-color-aluminum1);
      border-color: var(--anypoint-color-aluminum5);
    }

    .input-wrapper ::slotted(paper-listbox) {
      padding: 0;
    }
    </style>
    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <label>[[label]]</label>
    <div class="input-wrapper">
      <paper-menu-button
        vertical-align="[[verticalAlign]]"
        horizontal-align="[[horizontalAlign]]"
        vertical-offset="32"
        dynamic-align="[[dynamicAlign]]"
        disabled="[[disabled]]"
        no-animations=""
        on-iron-select="_onIronSelect"
        on-iron-deselect="_onIronDeselect"
        opened="{{opened}}"
        close-on-activate=""
        allow-outside-scroll="[[allowOutsideScroll]]">
        <div class="dropdown-trigger" slot="dropdown-trigger">
          <template is="dom-if" if="[[_computeLabelVisible(hasContent, opened)]]">
            <label class="default-value">Select value</label>
          </template>
          <template is="dom-if" if="[[!_computeLabelVisible(hasContent, opened)]]">
            <div class="fake-input" tabindex="-1">[[value]]</div>
          </template>
          <iron-icon class="trigger-icon" icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        </div>
        <slot name="dropdown-content" slot="dropdown-content"></slot>
      </paper-menu-button>
    </div>
`;
  }

  static get is() {
    return 'paper-dropdown-menu-light';
  }
  static get properties() {
    return {
      /**
       * The derived "label" of the currently selected item. This value
       * is the `label` property on the selected item if set, or else the
       * trimmed text content of the selected item.
       */
      selectedItemLabel: {
        type: String,
        notify: true,
        readOnly: true
      },
      /**
       * The last selected item. An item is selected if the dropdown menu has
       * a child with class `dropdown-content`, and that child triggers an
       * `iron-select` event with the selected `item` in the `detail`.
       *
       * @type {?Object}
       */
      selectedItem: {
        type: Object,
        notify: true,
        readOnly: true,
        observer: '_selectedItemChanged'
      },
      /**
       * The value for this element that will be used when submitting in
       * a form. It is read only, and will always have the same value
       * as `selectedItemLabel`.
       */
      value: {
        type: String,
        notify: true,
        observer: '_valueChanged',
      },
      /**
       * The label for the dropdown.
       */
      label: {
        type: String
      },
      /**
       * The placeholder for the dropdown.
       */
      placeholder: {
        type: String
      },
      /**
       * True if the dropdown is open. Otherwise, false.
       */
      opened: {
        type: Boolean,
        notify: true,
        value: false,
        observer: '_openedChanged',
        reflectToAttribute: true
      },
      /**
       * By default, the dropdown will constrain scrolling on the page
       * to itself when opened.
       * Set to true in order to prevent scroll from being constrained
       * to the dropdown when it opens.
       */
      allowOutsideScroll: {
        type: Boolean,
        value: false
      },
      /**
       * The orientation against which to align the menu dropdown
       * horizontally relative to the dropdown trigger.
       */
      horizontalAlign: {
        type: String,
        value: 'right'
      },
      /**
       * The orientation against which to align the menu dropdown
       * vertically relative to the dropdown trigger.
       */
      verticalAlign: {
        type: String,
        value: 'top',
        reflectToAttribute: true
      },
      hasContent: {
        type: Boolean,
        value: false,
        readOnly: true
      },
      /**
       * If true, the `horizontalAlign` and `verticalAlign` properties will
       * be considered preferences instead of strict requirements when
       * positioning the dropdown and may be changed if doing so reduces
       * the area of the dropdown falling outside of `fitInto`.
       */
      dynamicAlign: Boolean,
      _renderValue: String
    };
  }

  get keyBindings() {
    return {
      'up down': 'open',
      'esc': 'close'
    };
  }
  /**
   * A reference to `paper-menu-button` element
   * @return {HTMLElement}
   */
  get menuButton() {
    if (!this.$) {
      this.$ = {};
    }
    if (!this.$.menuButton) {
      this.$.menuButton = this.shadowRoot.querySelector('paper-menu-button');
    }
    return this.$.menuButton;
  }

  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  /**
   * Ensures attributes and registers listeners.
   */
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, () => {
      this.addEventListener('click', this._clickHandler);
    });
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'combobox');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
    if (!this.hasAttribute('aria-autocomplete')) {
      this.setAttribute('aria-autocomplete', 'none');
    }
    if (!this.hasAttribute('aria-haspopup')) {
      this.setAttribute('aria-haspopup', 'true');
    }
    // NOTE(cdata): Due to timing, a preselected value in a `IronSelectable`
    // child will cause an `iron-select` event to fire while the element is
    // still in a `DocumentFragment`. This has the effect of causing
    // handlers not to fire. So, we double check this value on attached:
    const contentElement = this.contentElement;
    if (contentElement && contentElement.selectedItem) {
      this._setSelectedItem(contentElement.selectedItem);
    }
  }
  /**
   * Removes listeners
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._clickHandler);
  }

  /**
   * The content element that is contained by the dropdown menu, if any.
   */
  get contentElement() {
    const nodes = this.shadowRoot.querySelector('slot[slot="dropdown-content"]').assignedNodes();
    for (let i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  }

  _clickHandler(e) {
    if (e.composedPath()[0] === this) {
      this.open();
    }
  }

  /**
   * Show the dropdown content.
   */
  open() {
    this.menuButton.open();
  }
  /**
   * Hide the dropdown content.
   */
  close() {
    this.menuButton.close();
  }
  /**
   * A handler that is called when `iron-select` is fired.
   *
   * @param {CustomEvent} e An `iron-select` event.
   */
  _onIronSelect(e) {
    this._setSelectedItem(e.detail.item);
  }

  /**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param {CustomEvent} event An `iron-deselect` event.
   */
  _onIronDeselect() {
    this._setSelectedItem(null);
  }

  /**
   * Compute the label for the dropdown given a selected item.
   *
   * @param {Element} selectedItem A selected Element item, with an
   * optional `label` property.
   */
  _selectedItemChanged(selectedItem) {
    let value = '';
    if (!selectedItem) {
      value = '';
    } else {
      value = selectedItem.label || selectedItem.getAttribute('label') ||
        selectedItem.textContent.trim();
    }
    this.value = value;
    this._setSelectedItemLabel(value);
  }
  /**
   * Returns false if the element is required and does not have a selection,
   * and true otherwise.
   *
   * @return {boolean} true if `required` is false, or if `required` is true
   * and the element has a valid selection.
   */
  _getValidity() {
    return this.disabled || !this.required || (this.required && !!this.value);
  }

  _openedChanged() {
    const openState = this.opened ? 'true' : 'false';
    const e = this.contentElement;
    if (e) {
      e.setAttribute('aria-expanded', openState);
    }
    this.updateStyles();
  }
  _computeLabelVisible(hasContent, opened) {
    return !hasContent || opened;
  }

  _computeDefaultVisible(hasContent) {
    return !hasContent;
  }

  _valueChanged(value) {
    this._setHasContent(!!value);
  }
}
window.customElements.define(PaperDropdownMenuLight.is, PaperDropdownMenuLight);
