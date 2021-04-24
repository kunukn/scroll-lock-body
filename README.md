# scroll-lock-body

[![Build Status](https://travis-ci.org/kunukn/scroll-lock-body.svg?branch=master)](https://travis-ci.org/kunukn/scroll-lock-body)
[![License](https://badgen.net/github/license/kunukn/scroll-lock-body)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/scroll-lock-body)](https://bundlephobia.com/result?p=scroll-lock-body)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/scroll-lock-body)](https://bundlephobia.com/result?p=scroll-lock-body)

# CSS required

:warning: ️You need to add style (transition) in your own stylesheet to add animation. Here is an example.

```html
<style>
  html {
    overflow-y: scroll;
  }
  html.scroll-lock-body-is-active > body {
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
  }
  body {
    overflow-y: auto; /* overflow-y: scroll -> shows double scroll */
  }
</style>
```

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install scroll-lock-body --save

# For Yarn, use the command below.
yarn add scroll-lock-body
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/scroll-lock-body"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/scroll-lock-body"></script>

<script>
  // UMD module is exposed through the "[libraryCamelCaseName]" global variable.
  console.log(scrollLockBody);
</script>
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
