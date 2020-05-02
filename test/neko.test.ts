import * as wn from '../src/index';
import * as tenv from './testEnvironment';

test('creates default neko', () => {
  const n = wn.defaultNeko();

  expect(n.state.x).toBe(0);
  expect(n.state.y).toBe(0);
});

test('state still', () => {
  const n = new wn.Neko(
    wn.defaultConfig,
    new tenv.StillEnv(),
    new wn.browserDrawer(),
  );
  n.state.x = 10;
  n.state.y = 10;
  expect(n.state.img).toBe('still');

  n.update();
  expect(n.state.img).toBe('still');
  expect(n.state.x).toBe(10);
  expect(n.state.y).toBe(10);

  n.update();
  expect(n.state.img).toBe('alert');
  expect(n.state.x).toBe(10);
  expect(n.state.y).toBe(10);
});
