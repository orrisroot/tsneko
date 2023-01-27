/**
 * This module provides helper functions to use neko in the web
 *
 * Most users would want to use {@link runDefault}
 * @packageDocumentation
 */

import * as Neko from './index';

/**
 * Runs neko on the document
 *
 * @param {string} imagesDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 *
 * @export
 * @returns used to remove neko from the document
 */
export function runDefault(imagesDir = '/assets/socks') {
  const n = Neko.defaultNeko();
  preloadImages(...imgs.map((i) => imagesDir + '/' + i + '.gif'));
  return run(n, imagesDir);
}

/**
 * Runs neko on the document
 *
 * @export
 * @param {Neko.NekoInterface} n
 * A neko that satisfies the {@link NekoInterface}<br>
 * Most users would want to use the default implementation by supplying {@link defaultNeko}
 * @param {string} imagesDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 * @returns used to remove neko from the document
 */
export function run(n: Neko.NekoInterface, imagesDir: string) {
  let cx = 0;
  let cy = 0;
  let csx = 0;
  let csy = 0;

  document.addEventListener('mousemove', (ev: MouseEvent) => {
    cx = ev.pageX;
    cy = ev.pageY;
  });

  window.addEventListener('scroll', () => {
    const sx =  window.scrollX;
    const sy =  window.scrollY;
    cx += sx - csx;
    csx = sx;
    cy += sy - csy;
    csy = sy;
  });

  const e = addElToDom();

  const tick = () => {
    n.update(cx, cy);
    draw(e, n, imagesDir);
  };

  const handle = setInterval(tick, 300);
  return () => {
    clearInterval(handle);
    e.remove();
  };
}

function draw(e: HTMLImageElement, n: Neko.NekoInterface, imagesDir: string) {
  e.style.top = n.state.y + 'px';
  e.style.left = n.state.x + 'px';
  e.src = imagesDir + '/' + n.img + '.gif';
}

// returns id
function addElToDom(): HTMLImageElement {
  const e = document.createElement('img');
  e.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  const s = e.style;
  s.position = 'absolute';
  s.top = '0px';
  s.left = '0px';

  const body = document.querySelector('body');
  body.appendChild(e);
  return e;
}

function preloadImages(...imgs: string[]) {
  const images = [];
  for (let i = 0; i < imgs.length; i++) {
    images[i] = new Image();
    images[i].src = imgs[i];
  }
}

const imgs = [
  'alert',
  'still',
  'nrun1',
  'nrun2',
  'nerun1',
  'nerun2',
  'erun1',
  'erun2',
  'serun1',
  'serun2',
  'srun1',
  'srun2',
  'swrun1',
  'swrun2',
  'wrun1',
  'wrun2',
  'nwrun1',
  'nwrun2',
  'yawn',
  'sleep1',
  'sleep2',
  'itch1',
  'itch2',
  'nscratch1',
  'nscratch2',
  'escratch1',
  'escratch2',
  'sscratch1',
  'sscratch2',
  'wscratch1',
  'wscratch2',
];
