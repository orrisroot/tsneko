import * as wn from '../src/index';

let testConfig: wn.NekoConfig = {
  speed: 2,
  radius: 1,
  ticksBeforeItch: () => 5,
  ticksBeforeScratch: () => 5,
  ticksBeforeYawn: () => 10,
  scratchDirection: () => {
    const directions = {
      1: 's',
      2: 'w',
      3: 'e',
      4: 'n',
    };
    const rnd = Math.floor(Math.random() * (5 - 1)) + 1;
    // @ts-ignore
    return directions[rnd];
  },
};

let n: wn.Neko;
beforeEach(() => {
  n = new wn.Neko(testConfig);
});

test('default neko', () => {
  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);
});

test('state still', () => {
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
