import * as wn from '../src/index';

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
