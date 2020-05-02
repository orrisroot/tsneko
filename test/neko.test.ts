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

test('state alert', () => {
  const n = wn.defaultNeko();
  n.update(10, 10);
  expect(n.img).toBe('alert');
  n.update(0, 0);
  expect(n.img).toBe('still');
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
`('state run target:$xy direction:$dir', ({ xy, dir }) => {
  const n = wn.defaultNeko();
  n.state.ticksBeforeItch = -1;
  n.state.ticksBeforeScratch = -1;
  n.state.ticksBeforeYawn = 1000;

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
  n.state.ticksBeforeScratch = -1;
  n.state.ticksBeforeYawn = 1000;

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

  //interrupt itch
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  expect(n.state.name).toBe('still');
  n.update(0, 0);
  expect(n.state.name).toBe('itch');
  n.update(10, 10);
});

it.each`
  dir    | img
  ${'s'} | ${'sscratch'}
  ${'w'} | ${'wscratch'}
  ${'e'} | ${'escratch'}
  ${'n'} | ${'nscratch'}
`('state scrath $dir', ({ dir, img }) => {
  const n = wn.defaultNeko();
  n.state.ticksBeforeItch = -1;
  n.state.ticksBeforeYawn = 1000;

  // change scratch config
  n.config.scratchDirection = () => {
    return dir;
  };

  // scatch after ticks
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
  expect(n.img).toBe(img + '1');
  n.update(0, 0);
  expect(n.img).toBe(img + '2');
  n.update(0, 0);
  expect(n.img).toBe(img + '1');
  n.update(0, 0);
  expect(n.img).toBe(img + '2');

  // interrupt scratch
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  n.update(0, 0);
  expect(n.state.name).toBe('still');
  n.update(0, 0);
  expect(n.img).toBe(img + '1');
  n.update(10, 10);
  expect(n.img).toBe('alert');
});

test('state yawn and sleep', () => {
  const n = wn.defaultNeko();

  for (let i = 0; i < 20; i++) {
    n.update(999, 999);
  }

  n.update(n.state.x, n.state.y);
  expect(n.state.name).toBe('still');

  n.update(n.state.x, n.state.y);
  expect(n.state.name).toBe('yawn');
  n.update(n.state.x, n.state.y);
  expect(n.state.name).toBe('yawn');

  for (let i = 0; i < 200; i++) {
    n.update(n.state.x, n.state.y);
    expect(n.state.name).toBe('sleep');
  }

  n.update(0, 0);
  expect(n.state.name).toBe('alert');

  // interrupt yawn
  for (let i = 0; i < 20; i++) {
    n.update(9999, 9999);
  }
  n.update(n.state.x, n.state.y);
  n.update(n.state.x, n.state.y);
  expect(n.state.name).toBe('yawn');
  n.update(9999, 9999);
  expect(n.state.name).toBe('alert');

  // interrupt sleep
  n.state.x = 0;
  n.state.y = 0;
  for (let i = 0; i < 20; i++) {
    n.update(9999, 9999);
  }
  n.update(n.state.x, n.state.y);
  n.update(n.state.x, n.state.y);
  expect(n.state.name).toBe('yawn');
  n.update(n.state.x, n.state.y);
  n.update(n.state.x, n.state.y);
  // sleeping here
  expect(n.state.name).toBe('sleep');
  n.update(0, 0);
  expect(n.state.name).toBe('alert');
});
