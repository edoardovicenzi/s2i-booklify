(()=>{var e={708:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var r=n(601),s=n.n(r),a=n(314),i=n.n(a),o=n(417),c=n.n(o),l=new URL(n(178),n.b),d=new URL(n(235),n.b),m=new URL(n(255),n.b),u=i()(s()),p=c()(l),h=c()(d),g=c()(m);u.push([e.id,`/* FONTS */\n\n@font-face{\nfont-family:AnticSlab;\nsrc: url(${p});\nfont-weight: normal;\n}\n\n@font-face{\nfont-family:AnticSlab;\nsrc: url(${h});\nfont-weight: normal;\n}\n\n@font-face{\nfont-family:AnticSlab;\nsrc: url(${g});\nfont-weight: normal;\n}\n\n\n\n\n/* Utility */\n:root{\n    --primary: #ed4264;\n    --secondary: #ffedbc;\n    --accent-color: #F58D8B;\n}\n*, *::before, *::after{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n.hidden{\n    display: none;\n}\n\n/* Main Styles */\nhtml {\n    height: 100%;\n}\nbody{\n    height: 100vh;\n    background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    overflow-y: scroll;\n    padding: 2rem;\n    font-family: AnticSlab;\n}\nh1{\n    text-align: center;\n    color: white;\n    text-transform: uppercase;\n}\n#page{\n    margin: 0 auto;\n    padding: 1rem;\n    width: 100%;\n    height: 100%;\n}\n/* Media Queries */\n@media screen and (min-width: 749px){\n    #page{\n       max-width: 750px;\n    }\n}\n`,""]);const y=u},45:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(601),s=n.n(r),a=n(314),i=n.n(a)()(s());i.push([e.id,".suggestion-wrapper{\n    position:absolute;\n    left:50%;\n    top: 100%;\n    display: flex;\n    justify-content: center;\n    width: 20rem;\n    margin: 10px 0 0 0;\n    padding: 1rem;\n    background-color: #fff;\n    border-radius: 2rem;\n    transform: translateX(-50%);\n    user-select: none;\n}\n\n.suggestion-list{\n    list-style: none;\n    height: 100%;\n    width: 100%;\n}\n\n.suggestion-list-item{\n    text-transform: capitalize;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 48px;\n    cursor: pointer;\n    padding: 0 1rem;\n}\n\n.suggestion-list-item:hover{\n    background-color: rgba(245, 245, 245);\n    border-radius: 2rem;\n}\n",""]);const o=i},633:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(601),s=n.n(r),a=n(314),i=n.n(a)()(s());i.push([e.id,".result-list{\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 1rem;\n    width: 100%;\n}\n.result-list-item{\n    background-color: white;\n    padding: 1rem;\n    width: 100%;\n    border-radius: 1rem;\n    user-select: none;\n    cursor: pointer;\n}\n.result-list-item-header{\n    font-size: .75rem;\n}\n\n.result-list-item-header-span-label{\n    text-transform: uppercase;\n}\n.result-list-item-header-span-content{\n\n}\n.result-list-item-header-span-content-others{\n    text-decoration: none;\n    color: black;\n    font-style: italic;\n}\n\n.result-list-item-header-span-content-others:hover{\n    text-decoration: underline;\n}\n.result-list-item-header-span-content-hidden{\n    margin: 0 1rem 0 0;\n}\n.result-list-item-header-span-content a{\n    margin: 0 .5rem 0 0;\n    text-decoration: none;\n    color: black;\n    font-style: italic;\n}\n.result-list-item-header-span-content a{\n}\n\n.result-list-item-header-span-content a:hover{\n    text-decoration: underline;\n}\n\n.result-list-item-body{\n    font-size: 1.5rem;\n}\n.result-list-item-body[data-type=desc]{\n    font-size: .9rem;\n    transition: height 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n.result-list-item-body-name{\n    \n}\n.result-list-item-body-content{\n}\n",""]);const o=i},404:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(601),s=n.n(r),a=n(314),i=n.n(a)()(s());i.push([e.id,".search-input{\n    padding: 1rem;\n    outline: none;\n    border: none;\n    width: 100%;\n    background: transparent;\n}\n",""]);const o=i},964:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(601),s=n.n(r),a=n(314),i=n.n(a)()(s());i.push([e.id,".spinner-small {\n\taspect-ratio: 1;\n\twidth: 24px;\n\tborder: 0.2em solid white;\n\tborder-bottom-color: transparent;\n\tanimation: spinSmall 700ms infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n\tborder-radius: 50%;\n}\n\n.spinner{\n}\n\n@keyframes spinSmall {\n    to {\n    transform: rotate(360deg);\n}\n}\n",""]);const o=i},594:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(601),s=n.n(r),a=n(314),i=n.n(a)()(s());i.push([e.id,".btn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 48px;\n    width: 10rem;\n    background-color: var(--accent-color);\n    border:none;\n    cursor: pointer;\n    padding: .5rem 2rem;\n    border-radius: 10rem;\n    color: white;\n    opacity: .9;\n    outline: 1px solid var(--accent-color);\n    transition: all 150ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.form-submit-button{\n\n}\n.btn:hover{\n    opacity: 1;\n}\n.btn:disabled{\n    opacity: .75;\n}\n",""]);const o=i},217:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(601),s=n.n(r),a=n(314),i=n.n(a)()(s());i.push([e.id,".form{\n    position:relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    border-radius: 10rem;\n    padding: 0 0 2rem 0;\n    gap: 1rem;\n    width: 100%;\n}\n.search-wrapper {\n    position: relative;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    border-radius: 10rem;\n    margin: 1rem 0;\n    transition: outline-width 75ms ease-in-out;\n}\n.search-wrapper:focus-within{\n    outline: 3px solid var(--secondary);\n}\n",""]);const o=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},417:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],d=a[l]||0,m="".concat(l," ").concat(d);a[l]=d+1;var u=n(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=s(p,r);r.byIndex=o,t.splice(o,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=r(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var o=n(a[i]);t[o].references--}for(var c=r(e,s),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},170:e=>{e.exports=[{name:"Architecture",category:"Arts"},{name:"Art Instruction",category:"Arts"},{name:"Art History",category:"Arts"},{name:"Dance",category:"Arts"},{name:"Design",category:"Arts"},{name:"Fashion",category:"Arts"},{name:"Film",category:"Arts"},{name:"Graphic Design",category:"Arts"},{name:"Music",category:"Arts"},{name:"Music Theory",category:"Arts"},{name:"Painting",category:"Arts"},{name:"Photography",category:"Arts"},{name:"Bears",category:"Animals"},{name:"Cats",category:"Animals"},{name:"Kittens",category:"Animals"},{name:"Dogs",category:"Animals"},{name:"Puppies",category:"Animals"},{name:"Fantasy",category:"Fiction"},{name:"Historical Fiction",category:"Fiction"},{name:"Horror",category:"Fiction"},{name:"Humor",category:"Fiction"},{name:"Literature",category:"Fiction"},{name:"Magic",category:"Fiction"},{name:"Mystery and detective stories",category:"Fiction"},{name:"Plays",category:"Fiction"},{name:"Poetry",category:"Fiction"},{name:"Romance",category:"Fiction"},{name:"Science Fiction",category:"Fiction"},{name:"Short Stories",category:"Fiction"},{name:"Thriller",category:"Fiction"},{name:"Young Adult",category:"Fiction"},{name:"Biology",category:"Sience & Mathematics"},{name:"Chemistry",category:"Sience & Mathematics"},{name:"Mathematics",category:"Sience & Mathematics"},{name:"Physics",category:"Sience & Mathematics"},{name:"Programming",category:"Sience & Mathematics"},{name:"Management",category:"Business & Finance"},{name:"Entrepreneurship",category:"Business & Finance"},{name:"Business Economics",category:"Business & Finance"},{name:"Business Success",category:"Business & Finance"},{name:"Finance",category:"Business & Finance"},{name:"Kids Books",category:"Children's"},{name:"Stories in Rhyme",category:"Children's"},{name:"Baby Books",category:"Children's"},{name:"Bedtime Books",category:"Children's"},{name:"Picture Books",category:"Children's"},{name:"Ancient Civilization",category:"History's"},{name:"Archaeology",category:"History's"},{name:"Anthropology",category:"History's"},{name:"World War II",category:"History's"},{name:"Social Life and Customs",category:"History's"},{name:"Cooking",category:"Health & Wellness"},{name:"Cookbooks",category:"Health & Wellness"},{name:"Mental Health",category:"Health & Wellness"},{name:"Exercise",category:"Health & Wellness"},{name:"Nutrition",category:"Health & Wellness"},{name:"Self-help",category:"Health & Wellness"},{name:"Autobiographies",category:"Biography"},{name:"History",category:"Biography"},{name:"Politics and Government",category:"Biography"},{name:"World War II",category:"Biography"},{name:"Women",category:"Biography"},{name:"Kings and Rulers",category:"Biography"},{name:"Composers",category:"Biography"},{name:"Artists",category:"Biography"},{name:"Anthropology",category:"Social Sciences"},{name:"Religion",category:"Social Sciences"},{name:"Political Science",category:"Social Sciences"},{name:"Psychology",category:"Social Sciences"},{name:"Brazil",category:"Places"},{name:"India",category:"Places"},{name:"Indonesia",category:"Places"},{name:"United States",category:"Places"},{name:"History",category:"Textbooks"},{name:"Mathematics",category:"Textbooks"},{name:"Geography",category:"Textbooks"},{name:"Psychology",category:"Textbooks"},{name:"Algebra",category:"Textbooks"},{name:"Education",category:"Textbooks"},{name:"Business & Economics",category:"Textbooks"},{name:"Science",category:"Textbooks"},{name:"Chemistry",category:"Textbooks"},{name:"English Language",category:"Textbooks"},{name:"Physics",category:"Textbooks"},{name:"Computer Science",category:"Textbooks"}]},255:(e,t,n)=>{"use strict";e.exports=n.p+"776b52d01b056e0ff27e.otf"},235:(e,t,n)=>{"use strict";e.exports=n.p+"b4615e9633bcfaa066ba.otf"},178:(e,t,n)=>{"use strict";e.exports=n.p+"cd2ceb197b94e58cf133.otf"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(170),t=n.n(e),r=n(72),s=n.n(r),a=n(825),i=n.n(a),o=n(659),c=n.n(o),l=n(56),d=n.n(l),m=n(540),u=n.n(m),p=n(113),h=n.n(p),g=n(404),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=u(),s()(g.A,y),g.A&&g.A.locals&&g.A.locals;var f=n(45),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),s()(f.A,b),f.A&&f.A.locals&&f.A.locals;const v=new class{constructor(e=[],t){this.setListItems(e)}createWrapperNode(){const e=document.createElement("div");return e.classList.add("suggestion-wrapper"),e}createListNode(){if(this.listItems&&this.listItems.length>0){const e=document.createElement("ul");e.classList.add("suggestion-list");for(const t of this.listItems){const n=document.createElement("li");n.innerText=t,n.classList.add("suggestion-list-item"),e.appendChild(n)}return e}}appendListNode(e){this.wrapperElement&&this.listNode&&(this.wrapperElement.innerHtml="",this.wrapperElement.appendChild(e))}setListItems(e=[]){return this.listItems=e,this.update(),this.listItems}getSuggestionElement(){return this.wrapperElement}setEventListener(e){e.nodeType?e.matches('input[type="text"]')?this.wrapperElement.addEventListener("click",(t=>{if(t.target.matches("li")){e.value=t.target.innerText;try{this.wrapperElement.parentNode.removeChild(this.wrapperElement)}catch(e){console.log(e,this.wrapperElement)}}})):console.error("Unable to attach listeners to list wrapper: setEventListener requires a type text input"):console.error("Unable to attach listeners to list wrapper: setEventListener requires DOM node"),this.wrapperElement}update(){this.wrapperElement=this.createWrapperNode(),this.listNode=this.createListNode(),this.appendListNode(this.listNode)}};function A(e){const n=e.target,r=n.parentNode;var s,a;if(s=r,a=v.getSuggestionElement(),s.contains(a)&&s.removeChild(a),n.value.length){const e=t().map((e=>e.name.toLowerCase())).filter((e=>e.includes(n.value.toLowerCase())));e.length&&(v.setListItems(e.slice(0,5)),v.setEventListener(n),r.appendChild(v.getSuggestionElement()))}}var L=n(594),E={};E.styleTagTransform=h(),E.setAttributes=d(),E.insert=c().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=u(),s()(L.A,E),L.A&&L.A.locals&&L.A.locals;var x=n(964),S={};function w(){const e=document.createElement("div");return e.classList.add("hidden","spinner","spinner-small"),e}function C(e,t={}){let n=e;if(Object.keys(t).length){n+="?";for(const[e,r]of Object.entries(t))n+=`${encodeURIComponent(e)}=${encodeURIComponent(r)}&`;n=n.slice(0,-1)}return n}async function T(e,t=""){try{const t=await fetch(e);return await t.json()}catch(e){console.error(`Error while fetching ${t?"in "+t+"()":""}:`,e.message)}}async function I(e,t={}){const n=e.trim().toUpperCase();encodeURIComponent(n);let r=`"https://openlibrary.org"/works/${n}.json`;r=C(r,t);try{return T(r,I.name)}catch(e){console.error(e.message)}}S.styleTagTransform=h(),S.setAttributes=d(),S.insert=c().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=u(),s()(x.A,S),x.A&&x.A.locals&&x.A.locals;var k=n(633),F={};F.styleTagTransform=h(),F.setAttributes=d(),F.insert=c().bind(null,"head"),F.domAPI=i(),F.insertStyleElement=u(),s()(k.A,F),k.A&&k.A.locals&&k.A.locals;class B{constructor(e){this.resultList=document.createElement("ul"),this.resultList.classList.add("result-list"),e.map((e=>{const t=this.createBookListItem(e);this.resultList.appendChild(t)})),this.resultList.addEventListener("click",(e=>{const t=e.target.closest(".result-list-item");t&&this.resultList.contains(t)&&(this.hanldeResultDescription.bind(this),this.hanldeResultDescription(t))}))}getList(){return this.resultList}getListItems(){return this.resultList.children}createBookListItem(e){const t=document.createElement("li");t.classList.add("result-list-item"),t.id=e.key.split("/").pop();const n=document.createElement("div");n.classList.add("result-list-item-header");const r=this.createItemHeaderLabel();n.appendChild(r);const s=e.authors.map((e=>{const t=document.createElement("a");return t.href="#",t.innerText=e.name,t}));this.createItemHeaderContent(s).map((e=>{n.appendChild(e)})),t.appendChild(n);const a=this.createListItemBody([{sectionName:"",sectionContent:e.title,type:"title"}]);return a.classList.add("result-list-item-body"),t.appendChild(a),t}createItemHeaderLabel(e=""){const t=document.createElement("span");return t.classList.add("result-list-item-header-span-label"),t.innerText=e.toString().trim()+" ",t}createItemHeaderContent(e=[]){const t=[],n=document.createElement("span");n.classList.add("result-list-item-header-span-content");const r=document.createElement("span");if(r.classList.add("hidden","result-list-item-header-span-content","result-list-item-header-span-content-hidden"),e.map(((e,t,s)=>{t<4?e.nodeType?n.appendChild(e):n.append(e):e.nodeType?r.appendChild(e):r.append(e)})),t.push(n),t.push(r),e.length>4){const e=this.createOthersSpan();t.push(e)}return t}createListItemBody(e=[{sectionName:"",sectionContent:"",type:""}]){const t=document.createElement("div");t.classList.add("result-list-item-body");for(const n of e){t.dataset.type=n.type;const e=document.createElement("span");e.classList.add("result-list-item-body-name"),e.innerText=n.sectionName.toString()+" ",t.appendChild(e);const r=document.createElement("span");r.classList.add("result-list-item-body-content"),r.innerHTML=n.sectionContent,t.appendChild(r)}return t}createOthersSpan(){const e=document.createElement("a");return e.classList.add("result-list-item-header-span-content-others"),e.href="#",e.innerText="and others...",e.addEventListener("click",(e=>{e.preventDefault();const t=e.target,n=t.parentElement.parentElement.querySelector(".result-list-item-header-span-content-hidden");n.matches(".hidden")?t.innerText="(show less)":t.innerText="and others...",n.classList.toggle("hidden")})),e}async hanldeResultDescription(e){const t=e.querySelector('[data-type="desc"]');if(t)t.classList.toggle("hidden");else{const t=await I(e.id),n=t.description?.value??t.description??"No description available",r=this.createListItemBody([{sectionName:"",sectionContent:n,type:"desc"}]);e.appendChild(r)}}}function M(e,t={limit:10,details:!1,offset:0}){const n=e.trim().toLowerCase().replaceAll(" ","_");let r=`"https://openlibrary.org"/subjects/${encodeURIComponent(n)}.json`;r=C(r,t);try{return T(r,M.name)}catch(e){console.error(e.message)}}var H=n(217),P={};P.styleTagTransform=h(),P.setAttributes=d(),P.insert=c().bind(null,"head"),P.domAPI=i(),P.insertStyleElement=u(),s()(H.A,P),H.A&&H.A.locals&&H.A.locals;var N=n(708),R={};R.styleTagTransform=h(),R.setAttributes=d(),R.insert=c().bind(null,"head"),R.domAPI=i(),R.insertStyleElement=u(),s()(N.A,R),N.A&&N.A.locals&&N.A.locals;const j=new class{constructor(e){this.id=e,this.createDOM()}createDOM(){return this.userFormElement=document.createElement("form"),this.userFormElement.setAttribute("id",this.id),this.userFormElement.classList.add("form"),this.userFormElement.appendChild(this.createUserSearchInput("book-subjects","book-subjects","Enter a book subject...")),this.attachEventListener(),this.userFormElement}createUserSearchInput(e,t,n){this.searchInputName=t;const r=function(e,t="",n=""){const r=document.createElement("input");return r.classList.add("search-input"),r.setAttribute("id",e),r.setAttribute("type","text"),r.setAttribute("name",t),r.setAttribute("placeholder",n),r.setAttribute("autocomplete","off"),r.addEventListener("input",A),r}(e,t,n),s=function(e=""){const t=document.createElement("button");t.setAttribute("type","submit"),t.classList.add("btn"),t.classList.add("form-submit-button");const n=document.createElement("span");n.classList.add("form-submit-button-text"),n.innerText=e,t.appendChild(n);const r=w();return t.appendChild(r),t}("SEARCH");return this.searchWrapper=document.createElement("div"),this.searchWrapper.classList.add("search-wrapper"),this.searchWrapper.appendChild(r),this.searchWrapper.appendChild(s),this.searchWrapper}createHomeResultList(e=[]){this.resultList=new B(e).getList(),this.userFormElement.appendChild(this.resultList);try{this.userFormElement.querySelector(".form-submit-button-load-more").remove()}catch(e){}finally{e.length>9&&this.userFormElement.appendChild(this.createLoadMore())}return this.resultList}createLoadMore(){return function(){const e=document.createElement("button");e.type="submit",e.classList.add("btn"),e.classList.add("form-submit-button-load-more");const t=document.createElement("span");t.classList.add("form-submit-button-text"),t.innerText="LOAD MORE",e.appendChild(t);const n=w();return e.appendChild(n),e}()}disableSubmitButton(e,t=[]){for(const n of t)e?n.setAttribute("disabled","true"):n.dataset.remainsDisabled||n.removeAttribute("disabled"),n.querySelector("span").classList.toggle("hidden"),n.querySelector(".spinner").classList.toggle("hidden")}attachEventListener(){this.userFormElement.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements[this.searchInputName].value;(t||t.toString().trim())&&(this.userSubject=t,this.handleLoadingResults(this.userSubject,e))}))}async handleLoadingResults(e,t){const n=this.userFormElement.querySelectorAll('button[type="submit"]'),r=t.submitter;if(this.disableSubmitButton(!0,n),r.matches(".form-submit-button")){const t=await M(e);try{this.userFormElement.removeChild(this.resultList)}catch(e){}this.createHomeResultList(t.works)}else if(r.matches(".form-submit-button-load-more")){const t=this.resultList.children.length,n=await M(e,{offset:t});if(n.works.length){const e=new B(n.works).getListItems();for(const t of e)this.resultList.appendChild(t)}else r.remove()}this.disableSubmitButton(!1,n)}getFormElement(){return this.userFormElement}getSearchWrapper(){return this.searchWrapper}}("form-subject"),W=document.querySelector("#page");W.appendChild(j.getFormElement()),W.addEventListener("submit",(function(e){e.target.matches("form")&&e.preventDefault()}))})()})();