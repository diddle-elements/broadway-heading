import { html, css, LitElement } from 'lit-element';

/**
 * A heading web component in the style of 1920's Broadway and British-Rail Station signs.
 * @slot - Content to be placed inside the sign
 * @cssprop {color} --broadway-heading-color - Controls the color of the text and borders
 */
export class BroadwayHeading extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--broadway-heading-color, #000);
        border-color: var(--broadway-heading-color, #000);
      }
      :host:before {
        content: '';
        display: table;
      }
      :host:after {
        clear: both;
        content: '';
        display: table;
      }
      .heading {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        padding: 0.2em 0.6em;
        border-width: 0.25em;
        border-style: solid;
        border-radius: 3em;
        box-sizing: border-box;
      }
      .heading:before,
      .heading:after {
        position: absolute;
        top: 50%;
        margin-top: -1px;
        width: 50%;
        border-bottom: inherit;
        content: '';
      }
      .heading:before {
        right: 100%;
      }
      .heading:after {
        left: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="heading">
        <slot></slot>
      </div>
    `;
  }
}
