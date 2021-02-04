```js script
import { html } from 'lit-html';
import '../broadway-heading.js';

export default {
  title: 'BroadwayHeading',
  component: 'broadway-heading',
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
npm install broadway-heading
```

```js
import 'broadway-heading/broadway-heading.js';
```

```html
<broadway-heading>
  <h1>Hello World</h1>
</broadway-heading>
```

```js preview-story
export const Simple = () => html`
  <broadway-heading>
    <h1>Hello World</h1>
  </broadway-heading>
`;
```
