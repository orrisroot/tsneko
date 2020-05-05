# 😹tsneko

**tsneko** is a js library which adds a neko ![neko](https://i.imgur.com/2Q9Nhj0.gif) to your website

Idea and assets stolen from [webneko.net](https://webneko.net/)

## States

- Still ![still](https://i.imgur.com/ixYXHSM.gif)
- Alert ![alert](https://i.imgur.com/2Q9Nhj0.gif)
- Run ![run](https://i.imgur.com/qRQA28H.gif)
- Itch ![itch](https://i.imgur.com/oWLmyXq.gif)
- Scratch ![scratch1](https://i.imgur.com/OsKf8R3.gif) ![scratch2](https://i.imgur.com/1afy1GF.gif)
- Yawn ![yawn](https://i.imgur.com/HStNSdN.gif)
- Sleep ![sleep](https://i.imgur.com/oFRAKC4.gif)

## 🚀Example

You can run a demo locally:

```bash
npm install
npm run example
```

Navigate to http://127.0.0.1:8080 or http://localhost:8080 to see a live demo

// TODO deploy to cdn

## 🛠️Installation and Usage

### Webpage

If you simply want to add it to your 🕸️webpage🕸️:

```html
<script src="tsneko.js"></script>
<!-- then -->
<script>
  let clean = tsneko.runWebDefault();

  // some time later
  // call clean() to remove it from the document
  clean();
</script>
```

### Node

If you want to use it in your node project:

Use the node package manager [npm](https://www.npmjs.com/)

```bash
npm install tsneko
```

#### Import:

CommonJS

```javascript
const tsneko = require('tsneko');
```

ES6 modules

```javascript
import * as tsneko from 'tsneko';
```

### Use:

```javascript
// You can also use the neko class only (without drawing it on the screen)
let neko = tsneko.defaultNeko();

neko.update(cursorX, cursorY); // to update the state

neko.state.x, neko.state.y; // to get neko position
neko.img; // to get the image

// You can actually try to embed it into an electron app
// see src/web.ts for browser implementation
```

## 📑Documentation

// TODO host documentation

The code is well documented using [typedoc](https://typedoc.org/)

To generate documentation locally:

```bash
npm run doc:gen
```

To host it locally

```bash
npm run doc:host
```

Then navigate to localhost:3228 in your web browser

## 🎉Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**!** I would be glad if some of you javascript tryhards could kindly setup webpack or npm scripts

## License

[MIT](https://choosealicense.com/licenses/mit/)

## ⚠️Warning⚠️

code stinks

although it shouldn't matter to you if you only want to use it

## 🚧Roadmap

1. <del>implement all states as in [webneko](https://webneko.net/)</del>
2. Make configuration easier
   - expose interface
3. <del>Add browser implementation</del>
4. <del>Format readme (add gifs and shit)</del>
5. <del>make api more intuitive</del>
6. Deploy to js cdn
7. Preload assets on load
8. Bundle all images
9. commonjs modules
10. publish to npm
    - setup package.json
11. <del>Add documentation</del>
    - add tests to cover code
12. Get rid of all todos
13. Populate keywords
