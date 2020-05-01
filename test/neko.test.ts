import { defaultNeko } from '../src/index';

function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('creates default neko', () => {
  const n = defaultNeko();

  expect(n.x).toBe(0);
  expect(n.y).toBe(0);
});

test('state still', () => {
  const n = defaultNeko();

  n.next();
  expect(n.x).toBe(0);
  expect(n.y).toBe(0);
});
