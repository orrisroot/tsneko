"use strict";
/**
 * This module provides helper functions to use neko in the web
 *
 * Most users would want to use {@link runDefault}
 * @packageDocumentation
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Neko = __importStar(require("./index"));
/**
 * Runs neko on the document
 *
 * @param {string} assetsDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 *
 * @export
 * @returns used to remove neko from the document
 */
function runDefault(assetsDir) {
    if (assetsDir === void 0) { assetsDir = '/assets/socks'; }
    var n = Neko.defaultNeko();
    preloadImages.apply(void 0, imgs.map(function (i) { return assetsDir + '/' + i + '.gif'; }));
    return run(n, assetsDir);
}
exports.runDefault = runDefault;
/**
 * Runs neko on the document
 *
 * @export
 * @param {Neko.NekoInterface} n
 * A neko that satisfies the {@link NekoInterface}<br>
 * Most users would want to use the default implementation by supplying {@link defaultNeko}
 * @param {string} assetsDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 * @returns used to remove neko from the document
 */
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
function preloadImages() {
    var imgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        imgs[_i] = arguments[_i];
    }
    var images = [];
    for (var i = 0; i < imgs.length; i++) {
        images[i] = new Image();
        images[i].src = imgs[i];
    }
}
var imgs = [
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
//# sourceMappingURL=web.js.map