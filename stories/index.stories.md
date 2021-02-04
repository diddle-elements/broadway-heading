```js script
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../broadway-heading.js';

export default {
  title: 'BroadwayHeading',
  component: 'broadway-heading',
  decorators: [withKnobs, withWebComponentsKnobs],
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BroadwayHeading

A heading web component in the style of 1920's Broadway and British-Rail Station signs.

## Features:

- Rounded Borders
- Centered content
- Customisable color

## How to use

### Installation

```bash
yarn add broadway-heading
```

```js
import 'broadway-heading/broadway-heading.js';
```

```js preview-story
export const Simple = () => html`
  <broadway-heading>
    <h1>Hello World</h1>
  </broadway-heading>
`;
```
