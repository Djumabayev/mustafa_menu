"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{7371:function(t,r,e){e(7294);var o=e(5797),c=e(5893);function Counter(t){var r=t.onChangeCount,e=t.count,i=t.max,n=t.className,a=t.small,d=t.isWeight;t.testid;var u=a?2:3;return(0,c.jsxs)("div",{className:"text-end one-line-text ".concat(n),style:{whiteSpace:"nowrap"},children:[e>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"d-inline-block rounded-1 bg-primary-lighter p-".concat(u),style:{lineHeight:0},"aria-label":"Reduce","data-testid":"minus_btn",onClick:function(t){t.preventDefault(),t.stopPropagation(),d?r(e-100):r(e-1)},children:(0,c.jsx)(o.WF,{})}),(0,c.jsx)("span",{className:"d-inline-block align-middle text-center",style:{width:d?44:30},children:e})]}),(0,c.jsx)("button",{className:"d-inline-block rounded-1 btn btn-primary border-0 p-".concat(u),"aria-label":"Add","data-testid":"plus_btn",style:{lineHeight:0},onClick:function(t){if(t.preventDefault(),t.stopPropagation(),d)0!==i&&e+100>i||r(e+100);else{if(0!==i&&e+1>i)return;r(e+1)}},children:(0,c.jsx)(o.v3,{})})]})}Counter.defaultProps={className:"",onChangeCount:function(){},count:0,max:0,small:!1,isWeight:!1},r.Z=Counter},9631:function(t,r,e){e.d(r,{Jt:function(){return loaderCloudflareOriginal},sx:function(){return SlideImageWrapper}});var o=e(9499);e(7294);var c=e(5675),i=e.n(c),n=e(7584),a=e(5893);function ownKeys(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(e),!0).forEach(function(r){(0,o.Z)(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var normalizeSrc=function(t){return t.startsWith("/")?t.slice(1):t},loaderCloudflare=function(t){var r=t.src,e=t.width,o=t.quality,c=["width=".concat(e,",format=webp")];o&&c.push("quality=".concat(o));var i=c.join(",");return(0,n.yG)()?"".concat(normalizeSrc(r)):"https://img.postershop.me/cdn-cgi/image/".concat(i,"/").concat(normalizeSrc(r))},loaderCloudflareOriginal=function(t){var r=t.src,e=t.width,o=t.quality;return loaderCloudflare({src:r.replace("_big.","_original."),width:e,quality:o})};function SlideImageWrapper(t){return(0,a.jsx)(i(),_objectSpread({loader:loaderCloudflareOriginal},t))}r.ZP=function(t){return(0,a.jsx)(i(),_objectSpread({loader:loaderCloudflare},t))}},4132:function(t,r,e){e.d(r,{Z:function(){return product_ProductTags}});var o=e(9499);e(7294),e(8291);var c=e(5797),i=e(1175),n=e(3967),a=e.n(n),d=e(5377),u=e(5893),tag_Tag=function(t){var r=t.label,e=t.color,o=t.icon,c=void 0===o?void 0:o,i={color:(0,d.a7)(e),backgroundColor:(0,d.a7)(e,.2)};return(0,u.jsxs)("span",{className:a()("badge rounded-pill me-2 mb-2 d-flex align-items-center"),style:i,children:[c&&(0,u.jsx)("span",{className:"me-1",children:c}),r]})};function ownKeys(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(e),!0).forEach(function(r){(0,o.Z)(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var addProductTagLabel=function(t){return _objectSpread(_objectSpread({},t),{},{label:(0,i.Z)(t.name)})},product_ProductTags=function(t){var r,e,o,n,a,d=(n=[],(r=t.product).popular&&n.push({label:(0,i.Z)("product.tag.popular"),color:"#cdaf12",icon:(0,u.jsx)(c.HF,{})}),a=(null===(e=r.tags)||void 0===e?void 0:e.map(addProductTagLabel))||[],n=n.concat(a),(null===(o=r.group_modifications)||void 0===o?void 0:o.length)>0&&n.push({label:(0,i.Z)("product.tag.addons"),color:"#2aaee4",icon:(0,u.jsx)(c.mG,{})}),n);return(0,u.jsx)("div",{className:"d-flex flex-wrap mt-2",children:d.map(function(t){return(0,u.jsx)(tag_Tag,{label:t.label,color:t.color,icon:t.icon},t.label)})})}},4002:function(t,r,e){e.d(r,{Z:function(){return l}});var o=e(7812),c=e(2777),i=e(2262),n=e(9499),a=e(6005),d=e(236),u=e(9071),s=e(5566);function ownKeys(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(e),!0).forEach(function(r){(0,n.Z)(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var l=function(){function Cart(){(0,c.Z)(this,Cart)}return(0,i.Z)(Cart,null,[{key:"getModificationTitle",value:function(t,r){if(Number.isInteger(r))return a.ZP.findWhere(t.productModifications,{modificator_id:r}).name;var e,c=a.ZP.values(t.group_modifications).map(function(t){return t.modifications=a.ZP.values(t.modifications),t}),i=(e=[]).concat.apply(e,(0,o.Z)(c.map(function(t){return t.modifications})));return r.map(function(t){return a.ZP.findWhere(i,{dish_modification_id:Number(t.m)}).name+(t.a>1?" \xd7 ".concat(t.a):"")}).join(", ")}},{key:"actualizeProducts",value:function(t){var r=this.getCart();null!=r&&r.count&&(this.removeDeletedProducts(t,r),this.calculatePrices({cart:r}),this.setCart(r))}},{key:"removeDeletedProducts",value:function(t,r){return r.products.forEach(function(e,o,c){(0,a._e)(t,{product_id:e.productId})||(r.count-=e.count,r.sum-=e.count*e.price,c.splice(o,1))}),r}}]),Cart}();(0,n.Z)(l,"getCart",function(){return d.Z.get(u.O6)}),(0,n.Z)(l,"setCart",function(t){return d.Z.set(u.O6,t)}),(0,n.Z)(l,"getProductsCount",function(t,r){if(!t||!t.products)return{};var e={};return(t.products.forEach(function(t){e[t.productId]||(e[t.productId]=0),e[t.productId]+=t.count}),r)?e[r]||0:e}),(0,n.Z)(l,"getProductIndex",function(t){var r=t.cart,e=t.productId,o=t.modification,c=t.modificator_id;return r?c?a.ZP.findIndex(r.products,{productId:e,modificator_id:c}):o?a.ZP.findIndex(r.products,function(t){var r=JSON.stringify(a.ZP.sortBy(o,"m")),c=JSON.stringify(a.ZP.sortBy(t.modification,"m"));return t.productId===e&&c===r}):a.ZP.findIndex(r.products,{productId:e}):-1}),(0,n.Z)(l,"calculatePrices",function(t){var r=t.cart,e=d.Z.get(u.YF);return r.sum=0,r.count=0,r.products.forEach(function(t){var o=a.ZP.findWhere(e,{product_id:t.productId});if(t.price=0,t.modification){var c=a.ZP.flatten(o.group_modifications.map(function(t){return t.modifications}));t.modification.forEach(function(i){var n=a.ZP.findWhere(c,{dish_modification_id:i.m});n||s.ZP.warn("calculatePrices error log",{allModifications:c,cart:r,products:e}),t.price+=o.isWeight?n.price*i.a/100:n.price*i.a})}if(t.modificator_id){var i=a.ZP.findWhere(o.productModifications,{modificator_id:t.modificator_id});t.price+=o.isWeight?i.price/100:i.price}t.price+=o.isWeight?o.price/100:o.price,t.sum=t.price*t.count,r.sum+=t.sum,r.count+=o.isWeight?t.count/100:t.count}),r}),(0,n.Z)(l,"getNextCartProductId",function(t){return t&&t.products&&0!==t.products.length?Math.max.apply(Math,(0,o.Z)(t.products.map(function(t){return t.cart_product_id})))+1:1}),(0,n.Z)(l,"addProduct",function(t){var r=t.cart,e=t.productId,o=t.modification,c=t.modificator_id,i=t.count,n=d.Z.get(u.YF),p=a.ZP.findWhere(n,{product_id:e}),f=r||{products:[]};return p&&void 0!==p.name||s.ZP.warn("addProduct error log",{product:p,productId:e,modification:o,modificator_id:c,products:n,cart:r}),f.products.push({productId:e,name:p.name,count:i,modification:o,modificator_id:c,cart_product_id:l.getNextCartProductId(f)}),f=l.calculatePrices({cart:f}),d.Z.set(u.O6,f),f}),(0,n.Z)(l,"revertAddition",function(t){var r=t.productId,e=t.modification,o=t.modificator_id;s.ZP.log("Revert add to cart",{productId:r,modification:e,modificator_id:o});var c=d.Z.get(u.O6),i=l.getProductIndex({cart:c,productId:r,modification:e,modificator_id:o});c.products.splice(i,1);var n=l.calculatePrices({cart:c});d.Z.set(u.O6,n)}),(0,n.Z)(l,"revertCartEdit",function(t){var r=t.pIndex,e=t.delta,o=d.Z.get(u.O6);if(o.products[r]){s.ZP.log("Revert cart edit",{pIndex:r,delta:e});var c=o;c.products[r].count-=e,c=l.calculatePrices({cart:o}),d.Z.set(u.O6,c)}}),(0,n.Z)(l,"changeProducts",function(t){var r=t.productId,e=t.count,o=t.modification,c=t.modificator_id,i=d.Z.get(u.O6),n=l.getProductIndex(_objectSpread({cart:i},t));if(-1===n)return l.addProduct(_objectSpread({cart:i},t));var s=a.ZP.findWhere(d.Z.get(u.YF),{product_id:r}),p=l.getProductsCount(i,r);return p>e&&(s.productModifications||s.group_modifications)&&!c&&!o&&(c=i.products[n].modificator_id,o=i.products[n].modification,e=i.products[n].count-(p-e)),i.products[n].count=e,i.products[n].count<=0&&i.products.splice(n,1),i=l.calculatePrices({cart:i}),d.Z.set(u.O6,i),i}),(0,n.Z)(l,"setNewProductId",function(t){var r=t.cartId,e=t.cartProductId,o=t.productId,c=t.modification,i=t.modificator_id,n=d.Z.get(u.O6),a=l.getProductIndex({cart:n,productId:o,modification:c,modificator_id:i});n||s.ZP.warn("setNewProductId error log",{cartId:r,cartProductId:e,productId:o,modification:c,modificator_id:i}),r&&(n.cartId=r),-1!==a&&(n.products[a].cart_product_id=e),d.Z.set(u.O6,n)}),(0,n.Z)(l,"changeDishModification",function(t){var r=t.cart_product_id,e=t.modification,o=d.Z.get(u.O6),c=a.ZP.findIndex(o.products,{cart_product_id:r});o.products[c].modification=e,o=l.calculatePrices({cart:o}),d.Z.set(u.O6,o);var i=o.products[c];o.products.splice(c,1);var n=l.getProductIndex(_objectSpread({cart:o},i));if(-1!==n){var s=o.products[n];i.count+=s.count,s.count=0,l.changeProducts(s),l.changeProducts(i)}}),(0,n.Z)(l,"getDeliveryPrice",function(t){var r=t.cart,e=t.deliveryPrice,o=t.freeDeliveryOrderAmount;return!e||-1!==o&&r.sum>=o?0:e})}}]);
//# sourceMappingURL=429-03415b46f0040816.js.map