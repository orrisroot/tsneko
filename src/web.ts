// append element to body
// take link for assets (assetsDir)

// main
// return func to stop and clean
// internally:
//
// setInterval(()=>{n.update()})

import * as Neko from './index';

export function main(n: Neko.Neko, assetsDir: string) {
  let cx = 0;
  let cy = 0;
  document.onmousemove = (ev) => {
    console.log(ev.x, ev.y);
    cx = ev.x;
    cy = ev.y;
  };

  let e = addElToDom();

  const tick = () => {
    n.update(cx, cy);
    draw(e, n, assetsDir);
    console.log('tick');
  };

  const handle = setInterval(tick, 500);
  return () => {
    clearInterval(handle);
  };
}

function draw(e: HTMLImageElement, n: Neko.Neko, assetsDir: string) {
  e.style.top = n.state.y + 'px';
  e.style.left = n.state.x + 'px';
  e.src = assetsDir + '/' + n.img + '.gif';
}

// returns id
function addElToDom(): HTMLImageElement {
  const e = document.createElement('img');
  e.src =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FB8W6wUPCYAEmWjy.png%3Alarge&f=1&nofb=1';
  const s = e.style;
  s.position = 'absolute';
  s.top = '0px';
  s.left = '0px';

  const body = document.querySelector('body');
  body.appendChild(e);
  return e;
}
