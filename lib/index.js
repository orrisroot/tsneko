"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// export { Neko, NekoConfig, defaultConfig, defaultNeko } from './neko';
__export(require("./neko"));
var web_1 = require("./web");
exports.runWeb = web_1.run;
exports.runWebDefault = web_1.runDefault;
//# sourceMappingURL=index.js.map