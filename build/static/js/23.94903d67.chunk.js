(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[23],{551:function(e,t,r){"use strict";e.exports=r(591)},552:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(7),c=r(178);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var a=c(r(563)),n=c(r(556)),o=c(r(565));function c(e){return e&&e.__esModule?e:{default:e}}var l=n.default;t.default=l},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=l(r(3)),o=l(r(34)),c=r(564);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,y,g=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var r,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=a.default.createElement("div",{className:"react-head-temp"},t);o.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var a=Array.prototype.slice.call(r.children),n=document.head,o=n.innerHTML;(a=(a=a.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(n,r)}else if("meta"===t){var a=(0,c.getDuplicateMeta)(e);a&&(0,c.removeChild)(n,a)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(n,o)}})),(0,c.appendChild)(document.head,a)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(r.prototype,n),l&&s(r,l),t}(a.Component);p=g,b="contextTypes",y={extract:n.default.func},b in p?Object.defineProperty(p,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[b]=y;var h=g;t.default=h,e.exports=t.default},563:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=r(0),o=(a=r(3))&&a.__esModule?a:{default:a};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return l(this,t),u(this,s(t).apply(this,arguments))}var r,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(a=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&i(r.prototype,a),o&&i(r,o),t}(n.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(f,"childContextTypes",{extract:o.default.func});var d=f;t.default=d,e.exports=t.default},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,a=[],c=[];return e.forEach((function(e){var n=e.type,o=e.props;"title"===n?t=e:"link"===n&&"canonical"===o.rel?r=e:"meta"===n?a.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var r=[],a=function(a){var c=e[a],l=c.props.id;(l?!t.id[l]:0===n.filter((function(e){var r=c.props[e],a=t[e][r];return a&&!a.props.id})).length)&&(r.unshift(c),o.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)a(c);return r}(a)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return a.reduce((function(r,a){var n,o=e.getAttribute(a);return o?r.concat((n=t.querySelectorAll("[".concat(a,' = "').concat(o,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),a=0,n=t.length;a<n;a++)r.appendChild(t[a]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,a=t.length;r<a;r++)e.removeChild(t[r])};var a=["property","name","itemprop"],n=a.concat(["itemProp"]),o=n.concat(["id"])},565:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=c(r(3)),o=c(r(556));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,b,y=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return a.default.createElement(o.default,null,a.default.createElement("title",null,this.props.title))}}])&&u(r.prototype,n),c&&u(r,c),t}(a.Component);d=y,p="propTypes",b={title:n.default.string},p in d?Object.defineProperty(d,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[p]=b;var g=y;t.default=g,e.exports=t.default},576:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=(r(177),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,r=e.sortedProductCount;return n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("p",null,"Showing ",r," of ",t," result")))});t.a=function(e){var t=e.getLayout,r=e.getFilterSortParams,c=e.productCount,l=e.sortedProductCount;return n.a.createElement(a.Fragment,null,n.a.createElement(o,{getLayout:t,getFilterSortParams:r,productCount:c,sortedProductCount:l}))}},582:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(177),c=function(){return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"})))))},l=function(e){var t=e.categories,r=e.getSortParams,a=e.cb;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),n.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){r("category",""),Object(o.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){console.log(e._id),a(e._id),r("category",e),Object(o.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},i=function(e){var t=e.colors,r=e.getSortParams,a=e.getonecolor;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){r("color",""),Object(o.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){a(e._id),console.log(e._id),r("color",e),Object(o.h)(t)}},n.a.createElement("span",{className:"checkmark"}),n.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},u=function(e){var t=e.sizes,r=e.getSortParams,a=e.getonesize;return n.a.createElement("div",{className:"sidebar-widget mt-40"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){r("size",""),Object(o.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),a(e._id),r("size",e),Object(o.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},s=function(e){var t=e.tags,r=e.getSortParams,a=e.getonetag;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){a(e),r("tag",e),Object(o.h)(t)}},e))}))):"No tags found"))},m=function(e){var t=e.brands,r=e.getSortParams,a=e.getonebrand;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){a(e._id),r("brands",e),Object(o.h)(t)}},e.name))}))):"No brands found"))},f=r(40),d=r(667),p=r(666);function b(e){return"".concat(e,"\xb0C")}var y=function(e){e.tags,e.getSortParams;var t=e.priceobj,r=n.a.useState([1,90]),a=Object(f.a)(r,2),o=a[0],c=a[1];return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},n.a.createElement(d.a,null,n.a.createElement(p.a,{getAriaLabel:function(){return"Price range"},value:o,scale:function(e){return 25*e},onChange:function(e,r){c(r),t({min:25*r[0],max:25*r[1]})},valueLabelDisplay:"auto",getAriaValueText:b}))))};t.a=function(e){var t=e.products,r=e.getSortParams,a=e.sideSpaceClass,f=e.colors,d=e.sizes,p=e.category,b=e.tags,g=e.brand,h=e.callback,v=e.tagcallback,E=e.colorcallback,O=e.sizecallback,j=e.brandcallback,N=e.pricerange;Object(o.b)(t),Object(o.c)(t),Object(o.f)(t),Object(o.d)(t);return n.a.createElement("div",{className:"sidebar-style ".concat(a||"")},n.a.createElement(c,null),n.a.createElement(y,{tags:b,getSortParams:r,priceobj:function(e){N(e),console.log(e)}}),n.a.createElement(s,{tags:b,getSortParams:r,getonetag:function(e){v(e),console.log(e)}}),n.a.createElement(i,{colors:f,getSortParams:r,getonecolor:function(e){E(e),console.log(e)}}),n.a.createElement(u,{sizes:d,getSortParams:r,getonesize:function(e){O(e),console.log(e)}}),n.a.createElement(m,{brands:g,getSortParams:r,getonebrand:function(e){j(e),console.log(e)}}),n.a.createElement(l,{categories:p,getSortParams:r,cb:function(e){h(e),console.log(e)}}))}},591:function(e,t,r){"use strict";r(134);var a=r(0),n=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),t.Fragment=o("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var a,o={},u=null,s=null;for(a in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,a)&&!i.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:n,type:e,key:u,ref:s,props:o,_owner:c.current}}t.jsx=u,t.jsxs=u},770:function(e,t,r){"use strict";r.r(t);var a=r(48),n=r.n(a),o=r(78),c=r(40),l=r(0),i=r.n(l),u=r(555),s=r.n(u),m=r(580),f=r(178),d=r(43),p=r(7),b=r(177),y=r(179),g=r(552),h=(r(582),r(576),r(104));t.default=Object(d.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,r=e.products,a=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),u=e.spaceBottomClass,d=e.colorClass,v=e.titlePriceClass,E=(Object(h.useToasts)().addToast,Object(l.useState)("grid two-column")),O=Object(c.a)(E,2),j=O[0],N=(O[1],Object(l.useState)("")),_=Object(c.a)(N,2),w=_[0],S=(_[1],Object(l.useState)("")),P=Object(c.a)(S,2),C=P[0],k=(P[1],Object(l.useState)("")),x=Object(c.a)(k,2),T=x[0],A=(x[1],Object(l.useState)("")),M=Object(c.a)(A,2),D=M[0],L=(M[1],Object(l.useState)(0)),z=Object(c.a)(L,2),F=z[0],R=z[1],I=Object(l.useState)(1),B=Object(c.a)(I,2),q=B[0],H=B[1],U=Object(l.useState)([]),W=Object(c.a)(U,2),J=(W[0],W[1]),$=Object(l.useState)([]),V=Object(c.a)($,2),Y=V[0],G=V[1],K=t.pathname;Object(l.useEffect)((function(){var e=Object(b.g)(r,w,C),t=Object(b.g)(e,T,D);G(e=t),J(e.slice(F,F+16))}),[F,r,w,C,T,D]);var Q=Object(l.useState)([]),X=Object(c.a)(Q,2),Z=X[0],ee=X[1];return Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.86.59/api/admin/getproductbytagname/Men");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,ee(r.data),console.log(r.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i.a.createElement(l.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("title",null,"Flone | Shop Page"),i.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),i.a.createElement(f.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(f.BreadcrumbsItem,{to:""+K},"Shop"),i.a.createElement(y.a,{headerTop:"visible"},i.a.createElement(g.a,null),i.a.createElement("div",{className:"shop-area pt-95 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"shop-bottom-area mt-35"},i.a.createElement("div",{className:"row ".concat(j||"")},i.a.createElement(l.Fragment,null,Z.map((function(e){return i.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(a||""),key:e._id},i.a.createElement("div",{className:"product-wrap-2 ".concat(u||""," ").concat(d||""," ")},i.a.createElement("div",{className:"product-img"},i.a.createElement(p.b,{to:"/product-sticky/"+e._id},i.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:"",style:{width:"250px",height:"300px"}}),i.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:"",style:{width:"250px",height:"300px"}})),i.a.createElement("div",{className:"product-action-2"})),i.a.createElement("div",{className:"product-content-2"},i.a.createElement("div",{className:"title-price-wrap-2 ".concat(v||"")},i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/product/"+e._id},e.product_name)),i.a.createElement("div",{className:"price-2"},i.a.createElement(l.Fragment,null,i.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),i.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},i.a.createElement(m.a,{totalRecords:Y.length,pageLimit:16,pageNeighbours:2,setOffset:R,currentPage:q,setCurrentPage:H,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=23.94903d67.chunk.js.map