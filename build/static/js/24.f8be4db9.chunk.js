(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[24],{551:function(e,t,a){"use strict";e.exports=a(591)},552:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7),c=a(178);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var n=c(a(563)),r=c(a(556)),o=c(a(565));function c(e){return e&&e.__esModule?e:{default:e}}var l=r.default;t.default=l},556:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=l(a(3)),o=l(a(34)),c=a(564);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,g,h=function(e){function t(){return u(this,t),f(this,m(t).apply(this,arguments))}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);o.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,o=r.innerHTML;(n=(n=n.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(r,o)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(a.prototype,r),l&&s(a,l),t}(n.Component);d=h,b="contextTypes",g={extract:r.default.func},b in d?Object.defineProperty(d,b,{value:g,enumerable:!0,configurable:!0,writable:!0}):d[b]=g;var y=h;t.default=y,e.exports=t.default},563:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),o=(n=a(3))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return l(this,t),u(this,s(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),o&&i(a,o),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(m,"childContextTypes",{extract:o.default.func});var p=m;t.default=p,e.exports=t.default},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,o=e.props;"title"===r?t=e:"link"===r&&"canonical"===o.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],l=c.props.id;(l?!t.id[l]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),o.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,o=e.getAttribute(n);return o?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(o,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),o=r.concat(["id"])},565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(3)),o=c(a(556));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,b,g=function(e){function t(){return i(this,t),s(this,f(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(o.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(a.prototype,r),c&&u(a,c),t}(n.Component);p=g,d="propTypes",b={title:r.default.string},d in p?Object.defineProperty(p,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[d]=b;var h=g;t.default=h,e.exports=t.default},576:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(177),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,c=e.productCount,l=e.sortedProductCount;return r.a.createElement(n.Fragment,null,r.a.createElement(o,{getLayout:t,getFilterSortParams:a,productCount:c,sortedProductCount:l}))}},582:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(177),c=function(){return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),r.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},r.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},r.a.createElement("input",{type:"text",placeholder:"Search here..."}),r.a.createElement("button",null,r.a.createElement("i",{className:"pe-7s-search"})))))},l=function(e){var t=e.categories,a=e.getSortParams,n=e.cb;return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),r.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("category",""),Object(o.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){console.log(e._id),n(e._id),a("category",e),Object(o.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},i=function(e){var t=e.colors,a=e.getSortParams,n=e.getonecolor;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("color",""),Object(o.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){n(e._id),console.log(e._id),a("color",e),Object(o.h)(t)}},r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},u=function(e){var t=e.sizes,a=e.getSortParams,n=e.getonesize;return r.a.createElement("div",{className:"sidebar-widget mt-40"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("size",""),Object(o.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),n(e._id),a("size",e),Object(o.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},s=function(e){var t=e.tags,a=e.getSortParams,n=e.getonetag;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){n(e),a("tag",e),Object(o.h)(t)}},e))}))):"No tags found"))},f=function(e){var t=e.brands,a=e.getSortParams,n=e.getonebrand;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){n(e._id),a("brands",e),Object(o.h)(t)}},e.name))}))):"No brands found"))},m=a(40),p=a(667),d=a(666);function b(e){return"".concat(e,"\xb0C")}var g=function(e){e.tags,e.getSortParams;var t=e.priceobj,a=r.a.useState([1,90]),n=Object(m.a)(a,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},r.a.createElement(p.a,null,r.a.createElement(d.a,{getAriaLabel:function(){return"Price range"},value:o,scale:function(e){return 25*e},onChange:function(e,a){c(a),t({min:25*a[0],max:25*a[1]})},valueLabelDisplay:"auto",getAriaValueText:b}))))};t.a=function(e){var t=e.products,a=e.getSortParams,n=e.sideSpaceClass,m=e.colors,p=e.sizes,d=e.category,b=e.tags,h=e.brand,y=e.callback,v=e.tagcallback,E=e.colorcallback,O=e.sizecallback,j=e.brandcallback,w=e.pricerange;Object(o.b)(t),Object(o.c)(t),Object(o.f)(t),Object(o.d)(t);return r.a.createElement("div",{className:"sidebar-style ".concat(n||"")},r.a.createElement(c,null),r.a.createElement(g,{tags:b,getSortParams:a,priceobj:function(e){w(e),console.log(e)}}),r.a.createElement(s,{tags:b,getSortParams:a,getonetag:function(e){v(e),console.log(e)}}),r.a.createElement(i,{colors:m,getSortParams:a,getonecolor:function(e){E(e),console.log(e)}}),r.a.createElement(u,{sizes:p,getSortParams:a,getonesize:function(e){O(e),console.log(e)}}),r.a.createElement(f,{brands:h,getSortParams:a,getonebrand:function(e){j(e),console.log(e)}}),r.a.createElement(l,{categories:d,getSortParams:a,cb:function(e){y(e),console.log(e)}}))}},591:function(e,t,a){"use strict";a(134);var n=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,o={},u=null,s=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:u,ref:s,props:o,_owner:c.current}}t.jsx=u,t.jsxs=u},769:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a.n(n),o=a(78),c=a(40),l=a(0),i=a.n(l),u=a(555),s=a.n(u),f=a(580),m=a(178),p=a(43),d=a(7),b=a(177),g=a(179),h=a(552),y=a(582),v=a(576),E=a(104),O=a(58),j=a.n(O);t.default=Object(p.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,n=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),u=e.spaceBottomClass,p=e.colorClass,O=e.titlePriceClass,w=(Object(E.useToasts)().addToast,Object(l.useState)("grid two-column")),N=Object(c.a)(w,2),S=N[0],_=N[1],k=Object(l.useState)(""),P=Object(c.a)(k,2),C=P[0],x=P[1],T=Object(l.useState)(""),A=Object(c.a)(T,2),M=A[0],D=A[1],z=Object(l.useState)(""),L=Object(c.a)(z,2),F=L[0],R=L[1],I=Object(l.useState)(""),q=Object(c.a)(I,2),B=q[0],H=q[1],U=Object(l.useState)(0),W=Object(c.a)(U,2),J=W[0],$=W[1],V=Object(l.useState)(1),Y=Object(c.a)(V,2),G=Y[0],K=Y[1],Q=Object(l.useState)([]),X=Object(c.a)(Q,2),Z=(X[0],X[1]),ee=Object(l.useState)([]),te=Object(c.a)(ee,2),ae=(te[0],te[1]),ne=Object(l.useState)([]),re=Object(c.a)(ne,2),oe=re[0],ce=re[1],le=Object(l.useState)([]),ie=Object(c.a)(le,2),ue=ie[0],se=ie[1],fe=Object(l.useState)([]),me=Object(c.a)(fe,2),pe=me[0],de=me[1],be=Object(l.useState)([]),ge=Object(c.a)(be,2),he=ge[0],ye=ge[1],ve=Object(l.useState)([]),Ee=Object(c.a)(ve,2),Oe=Ee[0],je=Ee[1],we=t.pathname;Object(l.useEffect)((function(){var e=Object(b.g)(a,C,M),t=Object(b.g)(e,F,B);ae(e=t),Z(e.slice(J,J+16))}),[J,a,C,M,F,B]);var Ne=Object(l.useState)([]),Se=Object(c.a)(Ne,2),_e=Se[0],ke=Se[1],Pe=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://35.154.86.59/api/admin/getcolor");case 2:t=e.sent,a=t.data,console.log(a.data),ce(a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://35.154.86.59/api/admin/getsize");case 2:t=e.sent,a=t.data,console.log(a.data),se(a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://35.154.86.59/api/admin/allbrand");case 2:t=e.sent,a=t.data,console.log(a.data),de(a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://35.154.86.59/api/admin/getproductCategory");case 2:t=e.sent,a=t.data,console.log(a.data),ye(a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://35.154.86.59/api/admin/getuniquetag");case 2:t=e.sent,a=t.data,console.log(a.data),je(a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://35.154.86.59/api/admin/getproductbytagname/".concat(t));case 2:a=e.sent,n=a.data,console.log(n.data),ke(n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,j.a.get("http://35.154.86.59/api/admin/productbycolor/".concat(t));case 3:a=e.sent,n=a.data,console.log(n.data),ke(n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,j.a.get("http://35.154.86.59/api/admin/productbysize/".concat(t));case 3:a=e.sent,n=a.data,console.log(n.data),ke(n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,j.a.get("http://35.154.86.59/api/admin/productbybrand/".concat(t));case 3:a=e.sent,n=a.data,console.log(n.data),ke(n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a),e.next=3,j.a.post("http://35.154.86.59/api/admin/productbypricerange",{minamt:t,maxamt:a});case 3:n=e.sent,o=n.data,console.log(o.data),ke(o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.86.59/api/admin/getproduct");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,ke(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),Pe(),Ce(),Te(),Ae(),xe()}),[]),i.a.createElement(l.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("title",null,"Flone | Shop Page"),i.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),i.a.createElement(m.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(m.BreadcrumbsItem,{to:""+we},"Shop"),i.a.createElement(g.a,{headerTop:"visible"},i.a.createElement(h.a,null),i.a.createElement("div",{className:"shop-area pt-95 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3 pt-2",style:{backgroundColor:"#E5E8E8"}},i.a.createElement(y.a,{products:a,getSortParams:function(e,t){x(e),D(t)},sideSpaceClass:"mr-30",colors:oe,sizes:ue,category:he,tags:Oe,brand:pe,callback:function(e){console.log(e)},tagcallback:function(e){console.log(e),Me(e)},colorcallback:De,sizecallback:ze,brandcallback:Le,pricerange:function(e){console.log(e),Fe(e.min,e.max)}})),i.a.createElement("div",{className:"col-lg-9"},i.a.createElement(v.a,{getLayout:function(e){_(e)},getFilterSortParams:function(e,t){R(e),H(t)},productCount:_e.length,sortedProductCount:_e.length}),i.a.createElement("div",{className:"shop-bottom-area mt-35"},i.a.createElement("div",{className:"row ".concat(S||"")},i.a.createElement(l.Fragment,null,_e.map((function(e){return i.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(n||""),key:e._id},i.a.createElement("div",{className:"product-wrap-2 ".concat(u||""," ").concat(p||""," ")},i.a.createElement("div",{className:"product-img"},i.a.createElement(d.b,{to:"/product-sticky/"+e._id},i.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:"",style:{width:"200px",height:"250px"}}),i.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:"",style:{width:"200px",height:"250px"}})),i.a.createElement("div",{className:"product-action-2"})),i.a.createElement("div",{className:"product-content-2"},i.a.createElement("div",{className:"title-price-wrap-2 ".concat(O||"")},i.a.createElement("h3",null,i.a.createElement(d.b,{to:"/product/"+e._id},e.product_name)),i.a.createElement("div",{className:"price-2"},i.a.createElement(l.Fragment,null,i.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),i.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},i.a.createElement(f.a,{totalRecords:_e.length,pageLimit:16,pageNeighbours:2,setOffset:$,currentPage:G,setCurrentPage:K,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=24.f8be4db9.chunk.js.map