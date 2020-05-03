"use strict";
// append element to body
// take link for assets (assetsDir)
Object.defineProperty(exports, "__esModule", { value: true });
function run(n, assetsDir) {
    var cx = 0;
    var cy = 0;
    document.onmousemove = function (ev) {
        cx = ev.x;
        cy = ev.y;
    };
    var e = addElToDom();
    var tick = function () {
        n.update(cx, cy);
        draw(e, n, assetsDir);
    };
    var handle = setInterval(tick, 300);
    return function () {
        clearInterval(handle);
        e.remove();
    };
}
exports.run = run;
function draw(e, n, assetsDir) {
    e.style.top = n.state.y + 'px';
    e.style.left = n.state.x + 'px';
    e.src = assetsDir + '/' + n.img + '.gif';
}
// returns id
function addElToDom() {
    var e = document.createElement('img');
    e.src =
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FB8W6wUPCYAEmWjy.png%3Alarge&f=1&nofb=1';
    var s = e.style;
    s.position = 'absolute';
    s.top = '0px';
    s.left = '0px';
    var body = document.querySelector('body');
    body.appendChild(e);
    return e;
}
//# sourceMappingURL=web.js.map