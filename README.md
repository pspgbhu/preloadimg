# preloadimg

[![npm package](https://img.shields.io/npm/v/preloadimg.svg?style=flat-square)](https://www.npmjs.org/package/preloadimg)
[![NPM downloads](http://img.shields.io/npm/dm/preloadimg.svg?style=flat-square)](https://npmjs.org/package/preloadimg)

A library for preload images

---

## Install
`npm install --save preloadimg`

## Usage
Use in script tag
```html
<script src="src/preloadimg.js" charset="utf-8"></script>
<script>
  var imgs = [
    'img/image1.png',
    'img/image2.png',
    'img/image3.png',
  ];

  preloadimg(imgs, success => {
    console.log(success);
  }, fail => {
    console.log(fail)
  });
</script>
```
Use in ES6 modules or CommonJS
```js
// in ES6 modules
import preloadimg from 'preloadimg';

// in CommonJS
// var preloadimg = require('preloadimg');

preloadimg([
  'img/image1.png',
  'img/image2.png',
  'img/image3.png',
], success => {
  console.log(success);
}, fail => {
  console.log(fail)
});
```
