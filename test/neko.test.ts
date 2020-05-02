import * as wn from '../src/index';
import { NekoEnvironment } from '../src/environment';

test('creates default neko', () => {
  const n = wn.defaultNeko();

  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);
});

test('state still', () => {
  const n = wn.defaultNeko();

  n.update();
  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);
});

// class testEnv implements NekoEnvironment {
//   x: number = 0;
//   y: number = 0;

//   constructor() {
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         this.cursors.push({ x: i, y: j });
//         this.cursors.push({ x: 1, y: 1 });
//       }
//     }
//   }

//   private i: number = -1;
//   private cursors: { x: number; y: number }[] = [];

//   updateEnvironment() {
//     this.i++;
//     this.x = this.cursors[this.i].x;
//     this.y = this.cursors[this.i].y;
//   }
// }

// test('state run', () => {
//   const n = new wn.Neko(wn.defaultConfig, new testEnv());
//   n.state.x = 1;
//   n.state.y = 1;

//   n.next();
//   n.state.img;
//   expect(n.state.img).toBe('nwrun');
//   // expect(n.state.x).toBe(0);
//   // expect(n.state.y).toBe(0);
// });
