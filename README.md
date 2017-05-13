# preloadimg

A library for preload images

---

## install
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
