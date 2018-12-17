/**
Broadway Heading

@element broadway-heading
@demo https://diddledan.github.io/broadway-heading
*/
import {html, LitElement} from '@polymer/lit-element/lit-element.js';

class BroadwayHeadingElement extends LitElement {
	static get is() { return 'broadway-heading'; }

	render() { return html`
		<style>
			:host {
				display: block;
			}
			:host:before {
				content: "";
				display: table;
			}
			:host:after {
				clear: both;
				content: "";
				display: table;
			}
			.heading {
				color: var(--broadway-heading-color, #000);
				border-color: var(--broadway-heading-color, #000);

				width: 50%;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				position: relative;
				padding: 0.2em 0.6em;
				border-width: 1px;
				border-style: solid;
				-webkit-border-radius: 2em;
				-moz-border-radius: 2em;
				-ms-border-radius: 2em;
				-o-border-radius: 2em;
				border-radius: 2em;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
			}
			.heading:before,
			.heading:after {
				position: absolute;
				top: 50%;
				margin-top: -1px;
				width: 50%;
				border-bottom: inherit;
				content: "";
			}
			.heading:before { right: 100%; }
			.heading:after { left: 100%; }
		</style>
		<div class="heading">
			<slot></slot>
		</div>
		`;
	}
}

/**
 * A heading web component in the style of 1920's broadway signs.
 *
 * Example:
 *
 *     <style is="custom-style">
 *         broadway-heading {
 *             --broadway-heading-color: #f00;
 *         }
 *     </style>
 *     <broadway-heading class="example">
 *         <h1>Heading text</h1>
 *     </broadway-heading>
 */
customElements.define(BroadwayHeadingElement.is, BroadwayHeadingElement);

