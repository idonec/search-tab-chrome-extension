(function(t){function e(e){for(var a,s,o=e[0],i=e[1],l=e[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={popup:0},c=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("0a3d")},"0a3d":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Panel",{attrs:{tabs:t.tabs}})],1)},c=[],s=(n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("841c"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel is-warning"},[n("p",{staticClass:"panel-heading"},[t._v("SearchTabs (ctrl+Space)")]),n("div",{staticClass:"panel-block"},[n("p",{staticClass:"control has-icons-left"},[n("SearchBox"),t._m(0)],1)]),n("List")],1)}),o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-left"},[n("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBarValue,expression:"searchBarValue"}],staticClass:"input",attrs:{type:"text",id:"tabs_searchbox",autofocus:"",placeholder:"Search"},domProps:{value:t.searchBarValue},on:{input:[function(e){e.target.composing||(t.searchBarValue=e.target.value)},t.searchTabs],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}}}),t._m(0)])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-left"},[n("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])}],u=n("ffe7"),f=n.n(u),p={name:"SearchBox",methods:{searchTabs:function(){T.$emit("search-tabs",this.searchBarValue)},onEnter:function(){T.$emit("enter-click")}},data:function(){return{searchBarValue:""}}},h=p,d=n("2877"),b=Object(d["a"])(h,i,l,!1,null,"4eed3be0",null),v=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.tabs,(function(e){return n("div",{key:e.id,on:{mouseenter:t.mouseEnterItem,click:function(n){return t.openTab(e)}}},[n("a",{staticClass:"panel-block"},[n("img",{staticClass:"panel-icon",attrs:{src:e.favIconUrl}}),n("p",[t._v(t._s(e.title))])])])})),0===t.tabs.length?n("div",{staticClass:"no-match"},[t._v(" No Matching Tabs. ")]):t._e()],2)},g=[],_={name:"List",created:function(){var t=this;T.$on("tabs-to-list",(function(e){t.tabs=e})),T.$on("enter-click",(function(){t.tabs.length>0&&T.$emit("open-tab",t.tabs[0])}))},methods:{openTab:function(t){T.$emit("open-tab",t)},mouseEnterItem:function(t){for(var e=t.target.parentNode.children,n=0;n<e.length;n++)t.target===e[n]&&(this.selectedIndex=n)}},data:function(){return{tabs:[],selectedIndex:0}}},w=_,y=(n("7c79"),Object(d["a"])(w,m,g,!1,null,"0c74fd0a",null)),x=y.exports,O={name:"Panel",components:{SearchBox:v,List:x},methods:{tabOpen:function(){}}},k=O,$=(n("645c"),Object(d["a"])(k,s,o,!1,null,null,null)),C=$.exports,E={name:"App",components:{Panel:C},created:function(){var t=this;T.$on("search-tabs",(function(e){t.searchTabs(e)})),T.$on("open-tab",(function(e){t.tabOpen(e)})),this.searchTabs("")},methods:{searchTabs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=[];chrome.windows.getAll({populate:!0},(function(n){if(n.forEach((function(t){t.tabs.forEach((function(t){t.url=t.url.replace(RegExp("(http://|https://)(www.)?","i"),""),e.push(t)}))})),""!=t)var a={shouldSort:!0,threshold:.7,location:0,distance:200,keys:["url","title"]},r=new f.a(e,a),c=r.search(t);else c=e;T.$emit("tabs-to-list",c)}))},tabOpen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;chrome.tabs.getSelected((function(t){chrome.tabs.update(t.id,{highlighted:!1})})),chrome.windows.update(t.windowId,{focused:!0}),chrome.tabs.update(t.id,{highlighted:!0})}},data:function(){return{tabs:[]}}},j=E,S=(n("540f"),n("bccc"),n("363c"),Object(d["a"])(j,r,c,!1,null,null,null)),P=S.exports;n.d(e,"bus",(function(){return T}));var T=new a["a"];new a["a"]({el:"#app",render:function(t){return t(P)}})},"363c":function(t,e,n){"use strict";var a=n("e57c"),r=n.n(a);r.a},"5ca6":function(t,e,n){},"645c":function(t,e,n){"use strict";var a=n("a8a4"),r=n.n(a);r.a},"7c79":function(t,e,n){"use strict";var a=n("cba7"),r=n.n(a);r.a},a8a4:function(t,e,n){},bccc:function(t,e,n){"use strict";var a=n("5ca6"),r=n.n(a);r.a},cba7:function(t,e,n){},e57c:function(t,e,n){}});
//# sourceMappingURL=popup.2c6a4894.js.map