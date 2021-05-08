# scroll-lock-body

[![License](https://badgen.net/github/license/kunukn/scroll-lock-body)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/scroll-lock-body)](https://bundlephobia.com/result?p=scroll-lock-body)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/scroll-lock-body)](https://bundlephobia.com/result?p=scroll-lock-body)

## About

Minimal JS library which supports scroll lock on the body and remembers the scroll position.<br>
This version uses margin-top approach to remember the scroll-position.

## Alternate version with simpler implementation

An alternate version with same API exists where there are no required CSS<br>
https://github.com/kunukn/scroll-lock-body-2

## CSS required

:warning: ️You need to add style (transition) in your own stylesheet to add animation. Here is an example.

```html
<style>
  html {
    overflow-y: scroll;
  }
  html[data-scroll-lock-is-active] > body {
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
  }
  body {
    margin: 0;
    overflow-y: auto; /* overflow-y: scroll -> shows double scroll */
  }
</style>
```

## Demo

- <a href="https://nol5t.csb.app/" target="_blank" rel="noopener noreferrer">Codesandbox view</a>

- <a href="https://codesandbox.io/s/scroll-lock-body-demo-nol5t" target="_blank" rel="noopener noreferrer">Codesandbox edit</a>

- <a href="https://codepen.io/kunukn/full/yLgZovx" target="_blank" rel="noopener noreferrer">Codepen view</a>

- <a href="https://codepen.io/kunukn/pen/yLgZovx" target="_blank" rel="noopener noreferrer">Codepen edit</a>

- <a href="https://2esfs.csb.app" target="_blank" rel="noopener noreferrer">Vue view</a>

- <a href="https://codesandbox.io/s/vue-scroll-lock-body-demo-2esfs" target="_blank" rel="noopener noreferrer">Vue edit</a>

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install scroll-lock-body --save

# For Yarn, use the command below.
yarn add scroll-lock-body
```

### Usage

```js
import {
  enableScrollLock,
  disableScrollLock,
  isScrollLockEnabled,
} from 'scroll-lock-body';

// Run this to lock the body scroll
enableScrollLock();

// Run this to unlock the body scroll
disableScrollLock();

// Run this to get the lock state
isScrollLockEnabled(); // returns trur or false
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/scroll-lock-body"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/scroll-lock-body"></script>

<script>
  // UMD module is exposed through the "scrollLockBody" global variable.
  console.log(scrollLockBody);
</script>
```

## Explore the dist files

https://unpkg.com/scroll-lock-body/

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

:warning: ️avoid having direct children in body which has position sticky.
e.g.

```html
<style>
  body > .some-element {
    position: sticky; /* use position fixed or absolute instead */
  }
</style>
```

## License

Released under [MIT License](./LICENSE).
