# 😹tsneko

**tsneko** is a js library which adds a neko ![neko](https://i.imgur.com/2Q9Nhj0.gif) to your website ~
A cat that chases the cursor on your screen

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

## 🛠️Installation and Usage

### Webpage

If you simply want to add it to your 🕸️webpage🕸️:

```html
<script src="https://cdn.jsdelivr.net/npm/tsneko@1.0.1/_bundle/tsneko.js"></script>
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

The code is well documented using [typedoc](https://typedoc.org/)

The documentation is hosted using github pages [here](https://ixl.gitlab.io/tsneko/globals.html)

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
