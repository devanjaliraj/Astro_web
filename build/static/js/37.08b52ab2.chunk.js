(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[37],{552:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(7),c=a(178);t.a=function(){return l.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"breadcrumb-content text-center"},l.a.createElement(c.Breadcrumbs,{separator:l.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var n=c(a(563)),l=c(a(556)),r=c(a(565));function c(e){return e&&e.__esModule?e:{default:e}}var o=l.default;t.default=o},556:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),l=o(a(3)),r=o(a(34)),c=a(564);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,p,E,g=function(e){function t(){return s(this,t),u(this,f(t).apply(this,arguments))}var a,l,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(l=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&r.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);r.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),l=document.head,r=l.innerHTML;(n=(n=n.filter((function(e){return-1===r.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(l,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(l,n)}else if("link"===t&&"canonical"===e.rel){var r=(0,c.getDuplicateCanonical)(e);r&&(0,c.removeChild)(l,r)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&m(a.prototype,l),o&&m(a,o),t}(n.Component);b=g,p="contextTypes",E={extract:l.default.func},p in b?Object.defineProperty(b,p,{value:E,enumerable:!0,configurable:!0,writable:!0}):b[p]=E;var h=g;t.default=h,e.exports=t.default},563:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=a(0),r=(n=a(3))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return o(this,t),s(this,m(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return l.Children.only(this.props.children)}}])&&i(a.prototype,n),r&&i(a,r),t}(l.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(f,"childContextTypes",{extract:r.default.func});var d=f;t.default=d,e.exports=t.default},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var l=e.type,r=e.props;"title"===l?t=e:"link"===l&&"canonical"===r.rel?a=e:"meta"===l?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};r.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===l.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),r.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var l,r=e.getAttribute(n);return r?a.concat((l=t.querySelectorAll("[".concat(n,' = "').concat(r,'"]')),(l=Array.prototype.slice.call(l||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,l=t.length;n<l;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],l=n.concat(["itemProp"]),r=l.concat(["id"])},565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),l=c(a(3)),r=c(a(556));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,p,E=function(e){function t(){return i(this,t),m(this,u(t).apply(this,arguments))}var a,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(l=[{key:"render",value:function(){return n.default.createElement(r.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,l),c&&s(a,c),t}(n.Component);d=E,b="propTypes",p={title:l.default.string},b in d?Object.defineProperty(d,b,{value:p,enumerable:!0,configurable:!0,writable:!0}):d[b]=p;var g=E;t.default=g,e.exports=t.default},680:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{className:"prev"},l.a.createElement("i",{className:"fa fa-angle-double-left"}))),l.a.createElement("li",null,l.a.createElement("button",{className:"active"},"1")),l.a.createElement("li",null,l.a.createElement("button",null,"2")),l.a.createElement("li",null,l.a.createElement("button",{className:"next"},l.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},805:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(555),c=a.n(r),o=a(178),i=a(179),s=a(552),m=a(680),u=a(7),f=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},l.a.createElement("img",{src:"/assets/img/blog/blog-9.jpg",alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,"22 April, 2020"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"Lorem ipsum blog post")),l.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))),l.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},l.a.createElement("img",{src:"/assets/img/blog/blog-8.jpg",alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,"22 April, 2020"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"New collection of our shop")),l.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))),l.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},l.a.createElement("img",{src:"/assets/img/blog/blog-7.jpg",alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,"22 April, 2020"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"Ipsum blog post two")),l.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))),l.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},l.a.createElement("img",{src:"/assets/img/blog/blog-6.jpg",alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,"22 April, 2020"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"New shop collection")),l.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))),l.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},l.a.createElement("img",{src:"/assets/img/blog/blog-5.jpg",alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,"22 April, 2020"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"Lorem blog post four")),l.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))),l.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},l.a.createElement("img",{src:"/assets/img/blog/blog-4.jpg",alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,"22 April, 2020"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(u.b,{to:"/blog-details-standard"},"Ipsum blog post five")),l.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(u.b,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))))};t.default=function(e){var t=e.location.pathname;return l.a.createElement(n.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"Flone | Blog"),l.a.createElement("meta",{name:"description",content:"Blog of flone react minimalist eCommerce template."})),l.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),l.a.createElement(o.BreadcrumbsItem,{to:""+t},"Blog"),l.a.createElement(i.a,{headerTop:"visible"},l.a.createElement(s.a,null),l.a.createElement("div",{className:"blog-area pt-100 pb-100 blog-no-sidebar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"mr-20"},l.a.createElement("div",{className:"row"},l.a.createElement(f,null)),l.a.createElement(m.a,null))))))))}}}]);
//# sourceMappingURL=37.08b52ab2.chunk.js.map