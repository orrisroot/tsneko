!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.tsneko=e():t.tsneko=e()}(this,(function(){return function(){"use strict";var t={607:function(t,e,s){var i=this&&this.__createBinding||(Object.create?function(t,e,s,i){void 0===i&&(i=s);var r=Object.getOwnPropertyDescriptor(e,s);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,i,r)}:function(t,e,s,i){void 0===i&&(i=s),t[i]=e[s]}),r=this&&this.__exportStar||function(t,e){for(var s in t)"default"===s||Object.prototype.hasOwnProperty.call(e,s)||i(e,t,s)};Object.defineProperty(e,"__esModule",{value:!0}),e.runWebDefault=e.runWeb=void 0,r(s(441),e);var n=s(339);Object.defineProperty(e,"runWeb",{enumerable:!0,get:function(){return n.run}}),Object.defineProperty(e,"runWebDefault",{enumerable:!0,get:function(){return n.runDefault}})},441:function(t,e){var s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,s=1,i=arguments.length;s<i;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Neko=e.defaultNeko=e.defaultConfig=void 0;var i=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};e.defaultConfig={speed:10,radius:10,ticksBeforeItch:function(){return i(7,14)},ticksBeforeScratch:function(){return i(7,14)},ticksBeforeYawn:function(){return i(20,40)},scratchDirection:function(){return{1:"s",2:"w",3:"e",4:"n"}[Math.floor(4*Math.random())+1]}},e.defaultNeko=function(){return new r(e.defaultConfig)};var r=function(){function t(t){var e=this;this.state={name:"still",x:0,y:0,ticksBeforeItch:5,ticksBeforeScratch:5,ticksBeforeYawn:10},this.update=function(t,s){"still"==e.state.name?e.updateStill(t,s):"itch"==e.state.name?e.updateItch(t,s):"alert"==e.state.name?e.updateAlert(t,s):"run"==e.state.name?e.updateRun(t,s):"scratch"==e.state.name?e.updateScratch(t,s):"yawn"==e.state.name?e.updateYawn(t,s):"sleep"==e.state.name&&e.updateSleep(t,s)},this.config=s({},t),this.state.ticksBeforeItch=t.ticksBeforeItch(),this.state.ticksBeforeScratch=t.ticksBeforeScratch(),this.state.ticksBeforeYawn=t.ticksBeforeYawn()}return Object.defineProperty(t.prototype,"img",{get:function(){return"".concat(this.state.direction?this.state.direction:"").concat(this.state.name).concat(this.state.tick?this.state.tick:"")},enumerable:!1,configurable:!0}),t.prototype.updateSleep=function(t,e){if(this.checkState("sleep"),!this.cursorClose(t,e))return this.state.name="alert",this.state.tick=null,this.state.ticksBeforeItch=this.config.ticksBeforeItch(),void(this.state.ticksBeforeScratch=this.config.ticksBeforeScratch());this.state.tick=1===this.state.tick?2:1},t.prototype.updateYawn=function(t,e){if(this.checkState("yawn"),!this.cursorClose(t,e))return this.state.name="alert",void(this.state.framesYawn=null);this.state.framesYawn-1==0&&(this.state.name="sleep",this.state.tick=1,this.state.framesYawn=null,this.state.ticksBeforeYawn=this.config.ticksBeforeYawn()),this.state.framesYawn-=1},t.prototype.updateScratch=function(t,e){return this.checkState("scratch"),this.cursorClose(t,e)?this.state.framesScratch-1==0?(this.state.name="still",this.state.tick=null,this.state.framesScratch=null,this.state.ticksBeforeScratch=this.config.ticksBeforeScratch(),void(this.state.direction=null)):(this.state.framesScratch-=1,void(this.state.tick=1===this.state.tick?2:1)):(this.state.name="alert",this.state.tick=null,this.state.framesScratch=null,this.state.ticksBeforeScratch=this.config.ticksBeforeScratch(),void(this.state.direction=null))},t.prototype.updateStill=function(t,e){return this.checkState("still"),this.cursorClose(t,e)||(this.state.name="alert",this.state.tick=null),0===this.state.ticksBeforeYawn?(this.state.name="yawn",void(this.state.framesYawn=2)):0===this.state.ticksBeforeItch?(this.state.name="itch",this.state.framesItch=4,void(this.state.tick=1)):0===this.state.ticksBeforeScratch?(this.state.name="scratch",this.state.framesScratch=4,this.state.tick=1,void(this.state.direction=this.config.scratchDirection())):(this.state.ticksBeforeItch-=1,void(this.state.ticksBeforeScratch-=1))},t.prototype.updateItch=function(t,e){return this.checkState("itch"),this.cursorClose(t,e)?this.state.framesItch-1==0?(this.state.name="still",this.state.tick=null,this.state.framesItch=null,void(this.state.ticksBeforeItch=this.config.ticksBeforeItch())):(this.state.framesItch-=1,void(this.state.tick=1===this.state.tick?2:1)):(this.state.name="alert",this.state.tick=null,this.state.framesItch=null,void(this.state.ticksBeforeItch=this.config.ticksBeforeItch()))},t.prototype.updateAlert=function(t,e){if(this.checkState("alert"),this.cursorClose(t,e))return this.state.name="still",this.state.tick=null,void(this.state.direction=null);this.state.tick=1,this.state.name="run",this.state.direction=this.chooseRunDirection(t,e),this.makeStep(t,e)},t.prototype.updateRun=function(t,e){if(this.checkState("run"),this.cursorClose(t,e))return this.state.name="still",this.state.tick=null,void(this.state.direction=null);this.state.ticksBeforeYawn=Math.max(this.state.ticksBeforeYawn-1,0),this.state.direction=this.chooseRunDirection(t,e),this.state.tick=1===this.state.tick?2:1,this.makeStep(t,e)},t.prototype.makeStep=function(t,e){var s=t-this.state.x,i=e-this.state.y,r=Math.atan2(i,s);this.state.x+=this.config.speed*Math.cos(r),this.state.y+=this.config.speed*Math.sin(r)},t.prototype.cursorClose=function(t,e){return Math.hypot(this.state.x-t,this.state.y-e)<this.config.radius},t.prototype.chooseRunDirection=function(t,e){var s=t-this.state.x,i=e-this.state.y,r=Math.hypot(s,i),n=function(t,e){return 180*Math.atan2(e,t)/Math.PI}(s,i);switch(!0){case-22.5<n&&n<=22.5:return"e";case-67.5<n&&n<=-22.5:return"ne";case-112.5<n&&n<=-67.5:return"n";case-157.5<n&&n<=-112.5:return"nw";case-180<=n&&n<=-157.5||157.5<n&&n<=180:return"w";case 112.5<n&&n<=157.5:return"sw";case 67.5<n&&n<=112.5:return"s";case 22.5<n&&n<=67.5:return"se";default:throw Error("error in finding path direction ".concat(r," ").concat(n))}},t.prototype.checkState=function(t){if(t!=this.state.name)throw Error("expected state: ".concat(t,", got: ").concat(this.state.name))},t}();e.Neko=r},339:function(t,e,s){var i=this&&this.__createBinding||(Object.create?function(t,e,s,i){void 0===i&&(i=s);var r=Object.getOwnPropertyDescriptor(e,s);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,i,r)}:function(t,e,s,i){void 0===i&&(i=s),t[i]=e[s]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)"default"!==s&&Object.prototype.hasOwnProperty.call(t,s)&&i(e,t,s);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.run=e.runDefault=void 0;var a=n(s(607));function c(t,e){var s=0,i=0,r=0,n=0,a=!1,c=function(t){a||(s=t.pageX,i=t.pageY)};document.addEventListener("mousemove",c);var o=function(){if(!a){var t=window.scrollX,e=window.scrollY;s+=t-r,r=t,i+=e-n,n=e}};window.addEventListener("scroll",o);var h=function(){var t=document.createElement("img");t.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";var e=t.style;return e.position="absolute",e.top="0px",e.left="0px",document.querySelector("body").appendChild(t),t}(),u=function(){a=!a};h.addEventListener("click",u);var f=setInterval((function(){t.update(s,i),function(t,e,s){t.style.top=e.state.y+"px",t.style.left=e.state.x+"px",t.src=s+"/"+e.img+".gif"}(h,t,e)}),300);return function(){clearInterval(f),document.removeEventListener("mousemove",c),window.removeEventListener("scroll",o),h.removeEventListener("click",u),h.remove()}}function o(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var s=[],i=0;i<t.length;i++)s[i]=new Image,s[i].src=t[i]}e.runDefault=function(t){void 0===t&&(t="/assets/socks");var e=a.defaultNeko();return o.apply(void 0,h.map((function(e){return t+"/"+e+".gif"}))),c(e,t)},e.run=c;var h=["alert","still","nrun1","nrun2","nerun1","nerun2","erun1","erun2","serun1","serun2","srun1","srun2","swrun1","swrun2","wrun1","wrun2","nwrun1","nwrun2","yawn","sleep1","sleep2","itch1","itch2","nscratch1","nscratch2","escratch1","escratch2","sscratch1","sscratch2","wscratch1","wscratch2"]}},e={};return function s(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,s),n.exports}(607)}()}));