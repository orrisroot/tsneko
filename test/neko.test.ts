import * as wn from '../src/index';

test('default neko', () => {
  const n = wn.defaultNeko();

  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);
});

test('state still', () => {
  const n = wn.defaultNeko();
  expect(n.state.name).toBe('still');
  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);

  n.update(0, 0);
  expect(n.state.name).toBe('still');
  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);

  n.update(10, 10);
  expect(n.state.name).toBe('alert');
  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);
});

it.each`
  xy                    | dir
  ${{ x: -10, y: -10 }} | ${'nwrun'}
  ${{ x: 0, y: -10 }}   | ${'nrun'}
  ${{ x: 10, y: -10 }}  | ${'nerun'}
  ${{ x: 10, y: 0 }}    | ${'erun'}
  ${{ x: 10, y: 10 }}   | ${'serun'}
  ${{ x: 0, y: 10 }}    | ${'srun'}
  ${{ x: -10, y: 10 }}  | ${'swrun'}
  ${{ x: -10, y: 0 }}   | ${'wrun'}
`(`state run target:$xy direction:$dir`, ({ xy, dir }) => {
  const n = wn.defaultNeko();
  n.state.ticksBeforeItch = 999;

  n.state.x = 0;
  n.state.y = 0;

  // still -> alert
  n.update(xy.x, xy.y);
  expect(n.state.name).toBe('alert');
  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);

  // alert -> run1
  n.update(xy.x, xy.y);
  expect(n.img).toBe(dir + '1');

  // run1 -> run2
  n.update(xy.x, xy.y);
  expect(n.img).toBe(dir + '2');

  for (let i = 0; i < 10; i++) {
    n.update(xy.x, xy.y);
  }
  expect(n.state.x).toBeCloseTo(xy.x, 0);
  expect(n.state.y).toBeCloseTo(xy.y, 0);
  expect(n.img).toBe('still');
});

test('state itch', () => {
  const n = wn.defaultNeko();

  n.update(0, 0);
  expect(n.state.name).toBe('still');
  n.update(0, 0);
  expect(n.state.name).toBe('still');
  n.update(0, 0);
  expect(n.state.name).toBe('still');
  n.update(0, 0);
  expect(n.state.name).toBe('still');
  n.update(0, 0);
  expect(n.state.name).toBe('still');

  n.update(0, 0);
  expect(n.state.name).toBe('itch');
  n.update(0, 0);
  expect(n.state.name).toBe('itch');
  n.update(0, 0);
  expect(n.state.name).toBe('itch');
  n.update(0, 0);
  expect(n.state.name).toBe('itch');

  n.update(0, 0);
  expect(n.state.name).toBe('still');
});
