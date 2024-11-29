/*! For license information please see 957.93f562e7.chunk.js.LICENSE.txt */
(self.webpackChunkabhi=self.webpackChunkabhi||[]).push([[957],{957:function(e){e.exports=function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,c(i.key),i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function s(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function c(e){var t=s(e,"string");return"symbol"===typeof t?t:String(t)}var l=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;n(this,e);var a=this;if(!i||1!==i.nodeType)return new Error("Incorrect element type");a.$container=i,a.texts=r||[],a.config=t(t({},e._defaultConfig),o||{}),a.radius=a.config.radius,a.depth=2*a.radius,a.size=1.5*a.radius,a.maxSpeed=e._getMaxSpeed(a.config.maxSpeed),a.initSpeed=e._getInitSpeed(a.config.initSpeed),a.direction=a.config.direction,a.keep=a.config.keep,a.paused=!1,a._createElment(),a._init(),e.list.push({el:a.$el,container:i,instance:a})}return r(e,[{key:"_createElment",value:function(){var e=this,t=document.createElement("div");t.className=e.config.containerClass,e.config.useContainerInlineStyles&&(t.style.position="relative",t.style.width="".concat(2*e.radius,"px"),t.style.height="".concat(2*e.radius,"px")),e.items=[],e.texts.forEach((function(n,i){var r=e._createTextItem(n,i);t.appendChild(r.el),e.items.push(r)})),e.$container.appendChild(t),e.$el=t}},{key:"_createTextItem",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this,r=document.createElement("span");if(r.className=i.config.itemClass,i.config.useItemInlineStyles){r.style.willChange="transform, opacity, filter",r.style.position="absolute",r.style.top="50%",r.style.left="50%",r.style.zIndex=n+1,r.style.filter="alpha(opacity=0)",r.style.opacity=0;var o="50% 50%";r.style.WebkitTransformOrigin=o,r.style.MozTransformOrigin=o,r.style.OTransformOrigin=o,r.style.transformOrigin=o;var a="translate3d(-50%, -50%, 0) scale(1)";r.style.WebkitTransform=a,r.style.MozTransform=a,r.style.OTransform=a,r.style.transform=a}return i.config.useHTML?r.innerHTML=e:r.innerText=e,t({el:r},i._computePosition(n))}},{key:"_computePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,i=n.texts.length;t&&(e=Math.floor(Math.random()*(i+1)));var r=Math.acos((2*e+1)/i-1),o=Math.sqrt((i+1)*Math.PI)*r;return{x:n.size*Math.cos(o)*Math.sin(r)/2,y:n.size*Math.sin(o)*Math.sin(r)/2,z:n.size*Math.cos(r)/2}}},{key:"_requestInterval",value:function(e,t){var n=(function(){return window.requestAnimationFrame}||function(e,t){window.setTimeout(e,1e3/60)})(),i=(new Date).getTime(),r={};function o(){r.value=n(o),(new Date).getTime()-i>=t&&(e.call(),i=(new Date).getTime())}return r.value=n(o),r}},{key:"_init",value:function(){var t=this;t.active=!1,t.mouseX0=t.initSpeed*Math.sin(t.direction*(Math.PI/180)),t.mouseY0=-t.initSpeed*Math.cos(t.direction*(Math.PI/180)),t.mouseX=t.mouseX0,t.mouseY=t.mouseY0;var n=window.matchMedia("(hover: hover)");n&&!n.matches||(e._on(t.$el,"mouseover",(function(){t.active=!0})),e._on(t.$el,"mouseout",(function(){t.active=!1})),e._on(t.keep?window:t.$el,"mousemove",(function(e){e=e||window.event;var n=t.$el.getBoundingClientRect();t.mouseX=(e.clientX-(n.left+n.width/2))/5,t.mouseY=(e.clientY-(n.top+n.height/2))/5}))),t._next(),t.interval=t._requestInterval((function(){t._next.call(t)}),10)}},{key:"_next",value:function(){var e=this;if(!e.paused){e.keep||e.active||(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var t=-Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius*e.maxSpeed,n=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(e.config.reverseDirection&&(t=-t,n=-n),!(Math.abs(t)<=.01&&Math.abs(n)<=.01)){var i=Math.PI/180,r=[Math.sin(t*i),Math.cos(t*i),Math.sin(n*i),Math.cos(n*i)];e.items.forEach((function(t){var n=t.x,i=t.y*r[1]+t.z*-r[0],o=t.y*r[0]+t.z*r[1],a=n*r[3]+o*r[2],s=i,c=o*r[3]-n*r[2],l=2*e.depth/(2*e.depth+c);t.x=a,t.y=s,t.z=c,t.scale=l.toFixed(3);var u=l*l-.25;u=(u>1?1:u).toFixed(3);var f=t.el,m=(t.x-f.offsetWidth/2).toFixed(2),p=(t.y-f.offsetHeight/2).toFixed(2),h="translate3d(".concat(m,"px, ").concat(p,"px, 0) scale(").concat(t.scale,")");f.style.WebkitTransform=h,f.style.MozTransform=h,f.style.OTransform=h,f.style.transform=h,f.style.filter="alpha(opacity=".concat(100*u,")"),f.style.opacity=u}))}}}},{key:"update",value:function(e){var t=this;t.texts=e||[],t.texts.forEach((function(e,n){var i=t.items[n];i||(a(i=t._createTextItem(e,n),t._computePosition(n,!0)),t.$el.appendChild(i.el),t.items.push(i)),t.config.useHTML?i.el.innerHTML=e:i.el.innerText=e}));var n=t.texts.length,i=t.items.length;n<i&&t.items.splice(n,i-n).forEach((function(e){t.$el.removeChild(e.el)}))}},{key:"destroy",value:function(){var t=this;t.interval=null;var n=e.list.findIndex((function(e){return e.el===t.$el}));-1!==n&&e.list.splice(n,1),t.$container&&t.$el&&t.$container.removeChild(t.$el)}},{key:"pause",value:function(){this.paused=!0}},{key:"resume",value:function(){this.paused=!1}}],[{key:"_on",value:function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n}}]),e}();return l.list=[],l._defaultConfig={radius:100,maxSpeed:"normal",initSpeed:"normal",direction:135,keep:!0,reverseDirection:!1,useContainerInlineStyles:!0,useItemInlineStyles:!0,containerClass:"tagcloud",itemClass:"tagcloud--item",useHTML:!1},l._getMaxSpeed=function(e){return{slow:.5,normal:1,fast:2}[e]||1},l._getInitSpeed=function(e){return{slow:16,normal:32,fast:80}[e]||32},function(e,t,n){"string"===typeof e&&(e=document.querySelectorAll(e)),e.forEach||(e=[e]);var i=[];return e.forEach((function(e){e&&i.push(new l(e,t,n))})),i.length<=1?i[0]:i}}()}}]);
//# sourceMappingURL=957.93f562e7.chunk.js.map