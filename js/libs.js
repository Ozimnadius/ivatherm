//LIBS
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/**
 * Swiper 8.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 14, 2022
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
})(this, (function () { 'use strict';

    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */

    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend$1(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(key => {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }

    const ssrDocument = {
      body: {},

      addEventListener() {},

      removeEventListener() {},

      activeElement: {
        blur() {},

        nodeName: ''
      },

      querySelector() {
        return null;
      },

      querySelectorAll() {
        return [];
      },

      getElementById() {
        return null;
      },

      createEvent() {
        return {
          initEvent() {}

        };
      },

      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},

          setAttribute() {},

          getElementsByTagName() {
            return [];
          }

        };
      },

      createElementNS() {
        return {};
      },

      importNode() {
        return null;
      },

      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };

    function getDocument() {
      const doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }

    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState() {},

        pushState() {},

        go() {},

        back() {}

      },
      CustomEvent: function CustomEvent() {
        return this;
      },

      addEventListener() {},

      removeEventListener() {},

      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          }

        };
      },

      Image() {},

      Date() {},

      screen: {},

      setTimeout() {},

      clearTimeout() {},

      matchMedia() {
        return {};
      },

      requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }

        return setTimeout(callback, 0);
      },

      cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }

        clearTimeout(id);
      }

    };

    function getWindow() {
      const win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }

    /**
     * Dom7 4.0.4
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2022, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: January 11, 2022
     */
    /* eslint-disable no-proto */

    function makeReactive(obj) {
      const proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get() {
          return proto;
        },

        set(value) {
          proto.__proto__ = value;
        }

      });
    }

    class Dom7 extends Array {
      constructor(items) {
        if (typeof items === 'number') {
          super(items);
        } else {
          super(...(items || []));
          makeReactive(this);
        }
      }

    }

    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }

      const res = [];
      arr.forEach(el => {
        if (Array.isArray(el)) {
          res.push(...arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }

    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
      const uniqueArray = [];

      for (let i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }


    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }

      const a = [];
      const res = context.querySelectorAll(selector);

      for (let i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }

      return a;
    }

    function $(selector, context) {
      const window = getWindow();
      const document = getDocument();
      let arr = [];

      if (!context && selector instanceof Dom7) {
        return selector;
      }

      if (!selector) {
        return new Dom7(arr);
      }

      if (typeof selector === 'string') {
        const html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          const tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;

          for (let i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);

      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }

      return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype; // eslint-disable-next-line

    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.add(...classNames);
      });
      return this;
    }

    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.remove(...classNames);
      });
      return this;
    }

    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        classNames.forEach(className => {
          el.classList.toggle(className);
        });
      });
    }

    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      return arrayFilter(this, el => {
        return classNames.filter(className => el.classList.contains(className)).length > 0;
      }).length > 0;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (let i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (const attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    }

    function removeAttr(attr) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function transform(transform) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }

      return this;
    }

    function transition$1(duration) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
      }

      return this;
    }

    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          const parents = $(target).parents(); // eslint-disable-line

          for (let k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      const events = eventType.split(' ');
      let j;

      for (let i = 0; i < this.length; i += 1) {
        const el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
              listener,
              proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      const events = eventType.split(' ');

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          let handlers;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function trigger() {
      const window = getWindow();

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      const events = args[0].split(' ');
      const eventData = args[1];

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];

          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }

      return this;
    }

    function transitionEnd$1(callback) {
      const dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }

      if (callback) {
        dom.on('transitionend', fireCallBack);
      }

      return this;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        const window = getWindow();
        const document = getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function styles() {
      const window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      const window = getWindow();
      let i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (const prop in props) {
              this[i].style[prop] = props[prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    }

    function each(callback) {
      if (!callback) return this;
      this.forEach((el, index) => {
        callback.apply(el, [el, index]);
      });
      return this;
    }

    function filter(callback) {
      const result = arrayFilter(this, callback);
      return $(result);
    }

    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    }

    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      const window = getWindow();
      const document = getDocument();
      const el = this[0];
      let compareWith;
      let i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      if (selector === document) {
        return el === document;
      }

      if (selector === window) {
        return el === window;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function index() {
      let child = this[0];
      let i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    }

    function eq(index) {
      if (typeof index === 'undefined') return this;
      const length = this.length;

      if (index > length - 1) {
        return $([]);
      }

      if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }

      return $([this[index]]);
    }

    function append() {
      let newChild;
      const document = getDocument();

      for (let k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (let i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (let j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function prepend(newChild) {
      const document = getDocument();
      let i;
      let j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }

          return $([]);
        }

        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function nextAll(selector) {
      const nextEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.nextElementSibling) {
        const next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);

        el = next;
      }

      return $(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        const el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }

          return $([]);
        }

        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function prevAll(selector) {
      const prevEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.previousElementSibling) {
        const prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);

        el = prev;
      }

      return $(prevEls);
    }

    function parent(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(parents);
    }

    function parents(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode; // eslint-disable-line

        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) parents.push(parent);
          } else {
            parents.push(parent);
          }

          parent = parent.parentNode;
        }
      }

      return $(parents);
    }

    function closest(selector) {
      let closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return $([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      const foundElements = [];

      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector);

        for (let j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return $(foundElements);
    }

    function children(selector) {
      const children = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children;

        for (let j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return $(children);
    }

    function remove() {
      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    const Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition: transition$1,
      on,
      off,
      trigger,
      transitionEnd: transitionEnd$1,
      outerWidth,
      outerHeight,
      styles,
      offset,
      css,
      each,
      html,
      text,
      is,
      index,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove
    };
    Object.keys(Methods).forEach(methodName => {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });

    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(key => {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }

    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return setTimeout(callback, delay);
    }

    function now() {
      return Date.now();
    }

    function getComputedStyle$1(el) {
      const window = getWindow();
      let style;

      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }

      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }

      if (!style) {
        style = el.style;
      }

      return style;
    }

    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }

      const window = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }

      return curTransform || 0;
    }

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }

      return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
      const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      const noExtend = ['__proto__', 'constructor', 'prototype'];

      for (let i = 1; i < arguments.length; i += 1) {
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};

                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }

    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }

    function animateCSSModeScroll(_ref) {
      let {
        swiper,
        targetPosition,
        side
      } = _ref;
      const window = getWindow();
      const startPosition = -swiper.translate;
      let startTime = null;
      let time;
      const duration = swiper.params.speed;
      swiper.wrapperEl.style.scrollSnapType = 'none';
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      const dir = targetPosition > startPosition ? 'next' : 'prev';

      const isOutOfBound = (current, target) => {
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
      };

      const animate = () => {
        time = new Date().getTime();

        if (startTime === null) {
          startTime = time;
        }

        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }

        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });

        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.scrollSnapType = '';
          setTimeout(() => {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          return;
        }

        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
      };

      animate();
    }

    let support;

    function calcSupport() {
      const window = getWindow();
      const document = getDocument();
      return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
          let supportsPassive = false;

          try {
            const opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get() {
                supportsPassive = true;
              }

            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }

    function getSupport() {
      if (!support) {
        support = calcSupport();
      }

      return support;
    }

    let deviceCached;

    function calcDevice(_temp) {
      let {
        userAgent
      } = _temp === void 0 ? {} : _temp;
      const support = getSupport();
      const window = getWindow();
      const platform = window.navigator.platform;
      const ua = userAgent || window.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === 'Win32';
      let macos = platform === 'MacIntel'; // iPadOs 13 fix

      const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

      if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android


      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object


      return device;
    }

    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }

      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }

      return deviceCached;
    }

    let browser;

    function calcBrowser() {
      const window = getWindow();

      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }

    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }

      return browser;
    }

    function Resize(_ref) {
      let {
        swiper,
        on,
        emit
      } = _ref;
      const window = getWindow();
      let observer = null;
      let animationFrame = null;

      const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
      };

      const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver(entries => {
          animationFrame = window.requestAnimationFrame(() => {
            const {
              width,
              height
            } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(_ref2 => {
              let {
                contentBoxSize,
                contentRect,
                target
              } = _ref2;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              resizeHandler();
            }
          });
        });
        observer.observe(swiper.el);
      };

      const removeObserver = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }

        if (observer && observer.unobserve && swiper.el) {
          observer.unobserve(swiper.el);
          observer = null;
        }
      };

      const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
      };

      on('init', () => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
          createObserver();
          return;
        }

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
      });
      on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
      });
    }

    function Observer(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const observers = [];
      const window = getWindow();

      const attach = function (target, options) {
        if (options === void 0) {
          options = {};
        }

        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc(mutations => {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            emit('observerUpdate', mutations[0]);
            return;
          }

          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0]);
          };

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
      };

      const init = () => {
        if (!swiper.params.observer) return;

        if (swiper.params.observeParents) {
          const containerParents = swiper.$el.parents();

          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        } // Observe container


        attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      };

      const destroy = () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };

      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on('init', init);
      on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on(events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(event => {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },

      once(events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;

        function onceHandler() {
          self.off(events, onceHandler);

          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          handler.apply(self, args);
        }

        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },

      onAny(handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';

        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }

        return self;
      },

      offAny(handler) {
        const self = this;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);

        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }

        return self;
      },

      off(events, handler) {
        const self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(event => {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler, index) => {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },

      emit() {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }

        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(event => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(eventHandler => {
              eventHandler.apply(context, [event, ...data]);
            });
          }

          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(eventHandler => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }

    };

    function updateSize() {
      const swiper = this;
      let width;
      let height;
      const $el = swiper.$el;

      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      const swiper = this;

      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) {
          return property;
        } // prettier-ignore


        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }

      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }

      const params = swiper.params;
      const {
        $wrapperEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
      const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [];
      const slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      let offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      const previousSnapGridLength = swiper.snapGrid.length;
      const previousSlidesGridLength = swiper.slidesGrid.length;
      let spaceBetween = params.spaceBetween;
      let slidePosition = -offsetBefore;
      let prevSlideSize = 0;
      let index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper.virtualSize = -spaceBetween; // reset margins

      if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
      }); // reset cssMode offsets

      if (params.centeredSlides && params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
      }

      const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

      if (gridEnabled) {
        swiper.grid.initSlides(slidesLength);
      } // Calc slides


      let slideSize;
      const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
      }).length > 0;

      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        const slide = slides.eq(i);

        if (gridEnabled) {
          swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        }

        if (slide.css('display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          if (shouldResetSlideSize) {
            slides[i].style[getDirectionLabel('width')] = ``;
          }

          const slideStyles = getComputedStyle(slide[0]);
          const currentTransform = slide[0].style.transform;
          const currentWebKitTransform = slide[0].style.webkitTransform;

          if (currentTransform) {
            slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            const width = getDirectionPropertyValue(slideStyles, 'width');
            const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            const boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              const {
                clientWidth,
                offsetWidth
              } = slide[0];
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }

          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);

          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: `${swiper.virtualSize + params.spaceBetween}px`
        });
      }

      if (params.setWrapperSize) {
        $wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
        });
      }

      if (gridEnabled) {
        swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        const newSlidesGrid = [];

        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

          if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) snapGrid = [0];

      if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex) => {
          if (!params.cssMode) return true;

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        }).css({
          [key]: `${spaceBetween}px`
        });
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(snap => {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;

        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
      });

      if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
      }

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
      }

      if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

        if (slidesLength <= params.maxBackfaceHiddenSlides) {
          if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) {
          swiper.$el.removeClass(backFaceHiddenClass);
        }
      }
    }

    function updateAutoHeight(speed) {
      const swiper = this;
      const activeSlides = [];
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let newHeight = 0;
      let i;

      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }

      const getSlideByIndex = index => {
        if (isVirtual) {
          return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
        }

        return swiper.slides.eq(index)[0];
      }; // Find slides currently in view


      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(slide => {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
    }

    function updateSlidesOffset() {
      const swiper = this;
      const slides = swiper.slides;

      for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }

      const swiper = this;
      const params = swiper.params;
      const {
        slides,
        rtlTranslate: rtl,
        snapGrid
      } = swiper;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      let offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides

      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;

        if (params.cssMode && params.centeredSlides) {
          slideOffset -= slides[0].swiperSlideOffset;
        }

        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }

        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
      }

      swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
      const swiper = this;

      if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }

      const params = swiper.params;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      let {
        progress,
        isBeginning,
        isEnd
      } = swiper;
      const wasBeginning = isBeginning;
      const wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
      });
      if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
      const swiper = this;
      const {
        slides,
        params,
        $wrapperEl,
        activeIndex,
        realIndex
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
      let activeSlide;

      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        }
      }

      swiper.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
      const swiper = this;
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      const {
        slidesGrid,
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex
      } = swiper;
      let activeIndex = newActiveIndex;
      let snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }

        return;
      } // Get real index


      const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }

      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      const swiper = this;
      const params = swiper.params;
      const slide = $(e).closest(`.${params.slideClass}`)[0];
      let slideFound = false;
      let slideIndex;

      if (slide) {
        for (let i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;

        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = slideIndex;
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };

    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }

      const swiper = this;
      const {
        params,
        rtlTranslate: rtl,
        translate,
        $wrapperEl
      } = swiper;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      let currentTranslate = getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      const swiper = this;
      const {
        rtlTranslate: rtl,
        params,
        $wrapperEl,
        wrapperEl,
        progress
      } = swiper;
      let x = 0;
      let y = 0;
      const z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
      }

      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (translateBounds === void 0) {
        translateBounds = true;
      }

      const swiper = this;
      const {
        params,
        wrapperEl
      } = swiper;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      const minTranslate = swiper.minTranslate();
      const maxTranslate = swiper.maxTranslate();
      let newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        const isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: -newTranslate,
              side: isH ? 'left' : 'top'
            });
            return true;
          }

          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth'
          });
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };

    function setTransition(duration, byController) {
      const swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
      let {
        swiper,
        runCallbacks,
        direction,
        step
      } = _ref;
      const {
        activeIndex,
        previousIndex
      } = swiper;
      let dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit(`transition${step}`);

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit(`slideResetTransition${step}`);
          return;
        }

        swiper.emit(`slideChangeTransition${step}`);

        if (dir === 'next') {
          swiper.emit(`slideNextTransition${step}`);
        } else {
          swiper.emit(`slidePrevTransition${step}`);
        }
      }
    }

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        params
      } = swiper;
      if (params.cssMode) return;

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
      });
    }

    function transitionEnd(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        params
      } = swiper;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
      });
    }

    var transition = {
      setTransition,
      transitionStart,
      transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        const indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        const isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      const swiper = this;
      let slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled
      } = swiper;

      if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }

      const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      const translate = -snapGrid[snapIndex]; // Update progress

      swiper.updateProgress(translate); // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(translate * 100);
          const normalizedGrid = Math.floor(slidesGrid[i] * 100);
          const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGrid) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }

        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }

      let direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        swiper.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;

        if (speed === 0) {
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

          if (isVirtual) {
            swiper.wrapperEl.style.scrollSnapType = 'none';
            swiper._immediateVirtual = true;
          }

          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

          if (isVirtual) {
            requestAnimationFrame(() => {
              swiper.wrapperEl.style.scrollSnapType = '';
              swiper._swiperImmediateVirtual = false;
            });
          }
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: t,
              side: isH ? 'left' : 'top'
            });
            return true;
          }

          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth'
          });
        }

        return true;
      }

      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);

      if (speed === 0) {
        swiper.transitionEnd(runCallbacks, direction);
      } else if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }

      return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      let newIndex = index;

      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        animating,
        enabled,
        params
      } = swiper;
      if (!enabled) return swiper;
      let perGroup = params.slidesPerGroup;

      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
      }

      const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      if (params.rewind && swiper.isEnd) {
        return swiper.slideTo(0, speed, runCallbacks, internal);
      }

      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        params,
        animating,
        snapGrid,
        slidesGrid,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return swiper;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      const translate = rtlTranslate ? swiper.translate : -swiper.translate;

      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }

      const normalizedTranslate = normalize(translate);
      const normalizedSnapGrid = snapGrid.map(val => normalize(val));
      let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) {
            // prevSnap = snap;
            prevSnapIndex = snapIndex;
          }
        });

        if (typeof prevSnapIndex !== 'undefined') {
          prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
      }

      let prevIndex = 0;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
          prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
          prevIndex = Math.max(prevIndex, 0);
        }
      }

      if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
      }

      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (threshold === void 0) {
        threshold = 0.5;
      }

      const swiper = this;
      let index = swiper.activeIndex;
      const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];

        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      const swiper = this;
      const {
        params,
        $wrapperEl
      } = swiper;
      const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      let slideToIndex = swiper.clickedIndex;
      let realIndex;

      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            nextTick(() => {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };

    function loopCreate() {
      const swiper = this;
      const document = getDocument();
      const {
        params,
        $wrapperEl
      } = swiper; // Remove duplicated slides

      const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
      $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
      let slides = $selector.children(`.${params.slideClass}`);

      if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (let i = 0; i < blankSlidesNum; i += 1) {
            const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
            $selector.append(blankNode);
          }

          slides = $selector.children(`.${params.slideClass}`);
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;

      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      const prependSlides = [];
      const appendSlides = [];
      slides.each((el, index) => {
        const slide = $(el);

        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }

        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }

        slide.attr('data-swiper-slide-index', index);
      });

      for (let i = 0; i < appendSlides.length; i += 1) {
        $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
        $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix() {
      const swiper = this;
      swiper.emit('beforeLoopFix');
      const {
        activeIndex,
        slides,
        loopedSlides,
        allowSlidePrev,
        allowSlideNext,
        snapGrid,
        rtlTranslate: rtl
      } = swiper;
      let newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      const snapTranslate = -snapGrid[activeIndex];
      const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }

      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }

    function loopDestroy() {
      const swiper = this;
      const {
        $wrapperEl,
        params,
        slides
      } = swiper;
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };

    function setGrabCursor(moving) {
      const swiper = this;
      if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
      const swiper = this;

      if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }

      swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };

    function closestElement(selector, base) {
      if (base === void 0) {
        base = this;
      }

      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
      }

      return __closestFrom(base);
    }

    function onTouchStart(event) {
      const swiper = this;
      const document = getDocument();
      const window = getWindow();
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        enabled
      } = swiper;
      if (!enabled) return;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }

      if (!swiper.animating && params.cssMode && params.loop) {
        swiper.loopFix();
      }

      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      let $targetEl = $(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }

      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root component

      const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

      if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
        $targetEl = $(event.path[0]);
      }

      const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
      const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      const startX = touches.currentX;
      const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }

      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        let preventDefault = true;

        if ($targetEl.is(data.focusableElements)) {
          preventDefault = false;

          if ($targetEl[0].nodeName === 'SELECT') {
            data.isTouched = false;
          }
        }

        if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }

        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
          e.preventDefault();
        }
      }

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
        swiper.freeMode.onTouchStart();
      }

      swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
      const document = getDocument();
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        enabled
      } = swiper;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type !== 'touchmove') return;
      const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper.allowTouchMove) {
        if (!$(e.target).is(data.focusableElements)) {
          swiper.allowClick = false;
        }

        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      const diffX = touches.currentX - touches.startX;
      const diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

      if (typeof data.isScrolling === 'undefined') {
        let touchAngle;

        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper.allowClick = false;

      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop && !params.cssMode) {
          swiper.loopFix();
        }

        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);

        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }

        swiper.emit('sliderFirstMove', e);
      }

      swiper.emit('sliderMove', e);
      data.isMoved = true;
      let diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      let disableParentSwiper = true;
      let resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) return; // Update active index in free mode

      if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
        swiper.freeMode.onTouchMove();
      } // Update progress


      swiper.updateProgress(data.currentTranslate); // Update translate

      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        slidesGrid,
        enabled
      } = swiper;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff


      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = now();
      nextTick(() => {
        if (!swiper.destroyed) swiper.allowClick = true;
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      let currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
          currentPos
        });
        return;
      } // Find current slide


      let stopIndex = 0;
      let groupSize = swiper.slidesSizesGrid[0];

      for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      }

      let rewindFirstIndex = null;
      let rewindLastIndex = null;

      if (params.rewind) {
        if (swiper.isBeginning) {
          rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        } else if (swiper.isEnd) {
          rewindFirstIndex = 0;
        }
      } // Find current slide size


      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
        }

        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) {
            swiper.slideTo(stopIndex + increment);
          } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
            swiper.slideTo(rewindLastIndex);
          } else {
            swiper.slideTo(stopIndex);
          }
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
          }

          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      const swiper = this;
      const {
        params,
        el
      } = swiper;
      if (el && el.offsetWidth === 0) return; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks


      const {
        allowSlideNext,
        allowSlidePrev,
        snapGrid
      } = swiper; // Disable locks on resize

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize


      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick(e) {
      const swiper = this;
      if (!swiper.enabled) return;

      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();

        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      const swiper = this;
      const {
        wrapperEl,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return;
      swiper.previousTranslate = swiper.translate;

      if (swiper.isHorizontal()) {
        swiper.translate = -wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line


      if (swiper.translate === -0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }

    let dummyEventAttached = false;

    function dummyEventListener() {}

    const events = (swiper, method) => {
      const document = getDocument();
      const {
        params,
        touchEvents,
        el,
        wrapperEl,
        device,
        support
      } = swiper;
      const capture = !!params.nested;
      const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      const swiperMethod = method; // Touch Events

      if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
      } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper[swiperMethod]('observerUpdate', onResize, true);
      }
    };

    function attachEvents() {
      const swiper = this;
      const document = getDocument();
      const {
        params,
        support
      } = swiper;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);

      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }

      swiper.onClick = onClick.bind(swiper);

      if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }

      events(swiper, 'on');
    }

    function detachEvents() {
      const swiper = this;
      events(swiper, 'off');
    }

    var events$1 = {
      attachEvents,
      detachEvents
    };

    const isGridEnabled = (swiper, params) => {
      return swiper.grid && params.grid && params.grid.rows > 1;
    };

    function setBreakpoint() {
      const swiper = this;
      const {
        activeIndex,
        initialized,
        loopedSlides = 0,
        params,
        $el
      } = swiper;
      const breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

      const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      const breakpointParams = breakpointOnlyParams || swiper.originalParams;
      const wasMultiRow = isGridEnabled(swiper, params);
      const isMultiRow = isGridEnabled(swiper, breakpointParams);
      const wasEnabled = params.enabled;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);

        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
          $el.addClass(`${params.containerModifierClass}grid-column`);
        }

        swiper.emitContainerClasses();
      }

      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      extend(swiper.params, breakpointParams);
      const isEnabled = swiper.params.enabled;
      Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });

      if (wasEnabled && !isEnabled) {
        swiper.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper.enable();
      }

      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
      if (base === void 0) {
        base = 'window';
      }

      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      let breakpoint = false;
      const window = getWindow();
      const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      const points = Object.keys(breakpoints).map(point => {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          const minRatio = parseFloat(point.substr(1));
          const value = currentHeight * minRatio;
          return {
            value,
            point
          };
        }

        return {
          value: point,
          point
        };
      });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

      for (let i = 0; i < points.length; i += 1) {
        const {
          point,
          value
        } = points[i];

        if (base === 'window') {
          if (window.matchMedia(`(min-width: ${value}px)`).matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint,
      getBreakpoint
    };

    function prepareClasses(entries, prefix) {
      const resultClasses = [];
      entries.forEach(item => {
        if (typeof item === 'object') {
          Object.keys(item).forEach(classNames => {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }

    function addClasses() {
      const swiper = this;
      const {
        classNames,
        params,
        rtl,
        $el,
        device,
        support
      } = swiper; // prettier-ignore

      const suffixes = prepareClasses(['initialized', params.direction, {
        'pointer-events': !support.touch
      }, {
        'free-mode': swiper.params.freeMode && params.freeMode.enabled
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'grid': params.grid && params.grid.rows > 1
      }, {
        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }, {
        'centered': params.cssMode && params.centeredSlides
      }], params.containerModifierClass);
      classNames.push(...suffixes);
      $el.addClass([...classNames].join(' '));
      swiper.emitContainerClasses();
    }

    function removeClasses() {
      const swiper = this;
      const {
        $el,
        classNames
      } = swiper;
      $el.removeClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }

    var classes = {
      addClasses,
      removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      const window = getWindow();
      let image;

      function onReady() {
        if (callback) callback();
      }

      const isPicture = $(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages() {
      const swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');

      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }

      for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }

    var images = {
      loadImage,
      preloadImages
    };

    function checkOverflow() {
      const swiper = this;
      const {
        isLocked: wasLocked,
        params
      } = swiper;
      const {
        slidesOffsetBefore
      } = params;

      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      if (params.allowSlideNext === true) {
        swiper.allowSlideNext = !swiper.isLocked;
      }

      if (params.allowSlidePrev === true) {
        swiper.allowSlidePrev = !swiper.isLocked;
      }

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
      }

      if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
      }
    }

    var checkOverflow$1 = {
      checkOverflow
    };

    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: true,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // rewind
      rewind: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      // NS
      containerModifierClass: 'swiper-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj) {
        if (obj === void 0) {
          obj = {};
        }

        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];

        if (typeof moduleParams !== 'object' || moduleParams === null) {
          extend(allModulesParams, obj);
          return;
        }

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
          extend(allModulesParams, obj);
          return;
        }

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
        extend(allModulesParams, obj);
      };
    }

    /* eslint no-param-reassign: "off" */
    const prototypes = {
      eventsEmitter,
      update,
      translate,
      transition,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes,
      images
    };
    const extendedDefaults = {};

    class Swiper {
      constructor() {
        let el;
        let params;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          [el, params] = args;
        }

        if (!params) params = {};
        params = extend({}, params);
        if (el && !params.el) params.el = el;

        if (params.el && $(params.el).length > 1) {
          const swipers = [];
          $(params.el).each(containerEl => {
            const newParams = extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        } // Swiper Instance


        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [...swiper.__modules__];

        if (params.modules && Array.isArray(params.modules)) {
          swiper.modules.push(...params.modules);
        }

        const allModulesParams = {};
        swiper.modules.forEach(mod => {
          mod({
            swiper,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper.on.bind(swiper),
            once: swiper.once.bind(swiper),
            off: swiper.off.bind(swiper),
            emit: swiper.emit.bind(swiper)
          });
        }); // Extend defaults with modules params

        const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

        swiper.params = extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend({}, swiper.params);
        swiper.passedParams = extend({}, params); // add event listeners

        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(eventName => {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }

        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        } // Save Dom lib


        swiper.$ = $; // Extend Swiper

        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el,
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],

          // isDirection
          isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },

          isVertical() {
            return swiper.params.direction === 'vertical';
          },

          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            const desktop = ['pointerdown', 'pointermove', 'pointerup'];
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper.params.focusableElements,
            // Last click time
            lastClickTime: now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init

        if (swiper.params.init) {
          swiper.init();
        } // Return app instance


        return swiper;
      }

      enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;

        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        swiper.emit('enable');
      }

      disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;

        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }

        swiper.emit('disable');
      }

      setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter(className => {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }

      getSlideClasses(slideEl) {
        const swiper = this;
        return slideEl.className.split(' ').filter(className => {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }

      emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each(slideEl => {
          const classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }

      slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }

        if (exact === void 0) {
          exact = false;
        }

        const swiper = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper;
        let spv = 1;

        if (params.centeredSlides) {
          let slideSize = slides[activeIndex].swiperSlideSize;
          let breakLoop;

          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }

          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          }
        }

        return spv;
      }

      update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const {
          snapGrid,
          params
        } = swiper; // Breakpoints

        if (params.breakpoints) {
          swiper.setBreakpoint();
        }

        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        let translated;

        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate();

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }

        swiper.emit('update');
      }

      changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }

        const swiper = this;
        const currentDirection = swiper.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }

        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(slideEl => {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }

      mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el

        const $el = $(el || swiper.params.el);
        el = $el[0];

        if (!el) {
          return false;
        }

        el.swiper = swiper;

        const getWrapperSelector = () => {
          return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };

        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

            res.children = options => $el.children(options);

            return res;
          }

          return $el.children(getWrapperSelector());
        }; // Find Wrapper


        let $wrapperEl = getWrapper();

        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          const document = getDocument();
          const wrapper = document.createElement('div');
          $wrapperEl = $(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
            $wrapperEl.append(slideEl);
          });
        }

        Object.assign(swiper, {
          $el,
          el,
          $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      }

      init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint

        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes


        swiper.addClasses(); // Create loop

        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size


        swiper.updateSize(); // Update slides

        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor


        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide


        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        } // Attach events


        swiper.attachEvents(); // Init Flag

        swiper.initialized = true; // Emit

        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }

      destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }

        if (cleanStyles === void 0) {
          cleanStyles = true;
        }

        const swiper = this;
        const {
          params,
          $el,
          $wrapperEl,
          slides
        } = swiper;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy'); // Init Flag

        swiper.initialized = false; // Detach events

        swiper.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy'); // Detach emitter events

        Object.keys(swiper.eventsListeners).forEach(eventName => {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }

        swiper.destroyed = true;
        return null;
      }

      static extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }

      static get extendedDefaults() {
        return extendedDefaults;
      }

      static get defaults() {
        return defaults;
      }

      static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;

        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }

      static use(module) {
        if (Array.isArray(module)) {
          module.forEach(m => Swiper.installModule(m));
          return Swiper;
        }

        Swiper.installModule(module);
        return Swiper;
      }

    }

    Object.keys(prototypes).forEach(prototypeGroup => {
      Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer]);

    function Virtual(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      });
      let cssModeTimeout;
      swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
      };

      function renderSlide(slide, index) {
        const params = swiper.params.virtual;

        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }

        const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
      }

      function update(force) {
        const {
          slidesPerView,
          slidesPerGroup,
          centeredSlides
        } = swiper.params;
        const {
          addSlidesBefore,
          addSlidesAfter
        } = swiper.params.virtual;
        const {
          from: previousFrom,
          to: previousTo,
          slides,
          slidesGrid: previousSlidesGrid,
          offset: previousOffset
        } = swiper.virtual;

        if (!swiper.params.cssMode) {
          swiper.updateActiveIndex();
        }

        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;

        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = slidesPerGroup + addSlidesBefore;
        }

        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
          from,
          to,
          offset,
          slidesGrid: swiper.slidesGrid
        });

        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, `${offset}px`);
          }

          swiper.updateProgress();
          return;
        }

        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset,
            from,
            to,
            slides: function getSlides() {
              const slidesToRender = [];

              for (let i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }

              return slidesToRender;
            }()
          });

          if (swiper.params.virtual.renderExternalUpdate) {
            onRendered();
          }

          return;
        }

        const prependIndexes = [];
        const appendIndexes = [];

        if (force) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        } else {
          for (let i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          if (i >= from && i <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(i);
            } else {
              if (i > previousTo) appendIndexes.push(i);
              if (i < previousFrom) prependIndexes.push(i);
            }
          }
        }

        appendIndexes.forEach(index => {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b) => b - a).forEach(index => {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
      }

      function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }

        update(true);
      }

      function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }

          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }

        if (swiper.params.virtual.cache) {
          const cache = swiper.virtual.cache;
          const newCache = {};
          Object.keys(cache).forEach(cachedIndex => {
            const $cachedEl = cache[cachedIndex];
            const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
            }

            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }

        update(true);
        swiper.slideTo(newActiveIndex, 0);
      }

      function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;

        if (Array.isArray(slidesIndexes)) {
          for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);

            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }

            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }

          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }

        update(true);
        swiper.slideTo(activeIndex, 0);
      }

      function removeAllSlides() {
        swiper.virtual.slides = [];

        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }

        update(true);
        swiper.slideTo(0, 0);
      }

      on('beforeInit', () => {
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;

        if (!swiper.params.initialSlide) {
          update();
        }
      });
      on('setTranslate', () => {
        if (!swiper.params.virtual.enabled) return;

        if (swiper.params.cssMode && !swiper._immediateVirtual) {
          clearTimeout(cssModeTimeout);
          cssModeTimeout = setTimeout(() => {
            update();
          }, 100);
        } else {
          update();
        }
      });
      on('init update resize', () => {
        if (!swiper.params.virtual.enabled) return;

        if (swiper.params.cssMode) {
          setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
      });
      Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
      });
    }

    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      const window = getWindow();
      swiper.keyboard = {
        enabled: false
      };
      extendParams({
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      });

      function handle(event) {
        if (!swiper.enabled) return;
        const {
          rtlTranslate: rtl
        } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks

        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }

        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }

        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }

        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          let inView = false; // Check that swiper should be inside of visible area of window

          if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
            return undefined;
          }

          const $el = swiper.$el;
          const swiperWidth = $el[0].clientWidth;
          const swiperHeight = $el[0].clientHeight;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const swiperOffset = swiper.$el.offset();
          if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
          const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

          for (let i = 0; i < swiperCoord.length; i += 1) {
            const point = swiperCoord[i];

            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

              inView = true;
            }
          }

          if (!inView) return undefined;
        }

        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }

        emit('keyPress', kc);
        return undefined;
      }

      function enable() {
        if (swiper.keyboard.enabled) return;
        $(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
      }

      function disable() {
        if (!swiper.keyboard.enabled) return;
        $(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
      }

      on('init', () => {
        if (swiper.params.keyboard.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        if (swiper.keyboard.enabled) {
          disable();
        }
      });
      Object.assign(swiper.keyboard, {
        enable,
        disable
      });
    }

    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null
        }
      });
      swiper.mousewheel = {
        enabled: false
      };
      let timeout;
      let lastScrollTime = now();
      let lastEventBeforeSnap;
      const recentWheelEvents = [];

      function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY

        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy

        if ('detail' in e) {
          sY = e.detail;
        }

        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }

        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }

        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll


        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }

        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined


        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }

        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      }

      function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
      }

      function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
      }

      function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }

        if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        } // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).


        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.


        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time


        lastScrollTime = new window.Date().getTime(); // Return false as a default

        return false;
      }

      function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;

        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }

        return false;
      }

      function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;

        if (swiper.params.cssMode) {
          e.preventDefault();
        }

        let target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }

        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);

        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions

        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.

        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
          // Register the new event in a variable which stores the relevant data
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events

          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.

          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              animateSlider(newEvent);
            }
          } else {
            animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.


          if (releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = undefined;

            if (swiper.params.loop) {
              swiper.loopFix();
            }

            let position = swiper.getTranslate() + delta * params.sensitivity;
            const wasBeginning = swiper.isBeginning;
            const wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }

            if (swiper.params.freeMode.sticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(timeout);
              timeout = undefined;

              if (recentWheelEvents.length >= 15) {
                recentWheelEvents.shift(); // only store the last N events
              }

              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
              const firstEvent = recentWheelEvents[0];
              recentWheelEvents.push(newEvent);

              if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents.splice(0);
              } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                timeout = nextTick(() => {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                timeout = nextTick(() => {
                  const snapToThreshold = 0.5;
                  lastEventBeforeSnap = newEvent;
                  recentWheelEvents.splice(0);
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event


            if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }

        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      }

      function events(method) {
        let target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }

        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
      }

      function enable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener('wheel', handle);
          return true;
        }

        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
      }

      function disable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, handle);
          return true;
        }

        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
      }

      on('init', () => {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          disable();
        }

        if (swiper.params.mousewheel.enabled) enable();
      });
      on('destroy', () => {
        if (swiper.params.cssMode) {
          enable();
        }

        if (swiper.mousewheel.enabled) disable();
      });
      Object.assign(swiper.mousewheel, {
        enable,
        disable
      });
    }

    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
      const document = getDocument();

      if (swiper.params.createElements) {
        Object.keys(checkProps).forEach(key => {
          if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];

            if (!element) {
              element = document.createElement('div');
              element.className = checkProps[key];
              swiper.$el.append(element);
            }

            params[key] = element;
            originalParams[key] = element;
          }
        });
      }

      return params;
    }

    function Navigation(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      });
      swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      };

      function getEl(el) {
        let $el;

        if (el) {
          $el = $(el);

          if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
            $el = swiper.$el.find(el);
          }
        }

        return $el;
      }

      function toggleEl($el, disabled) {
        const params = swiper.params.navigation;

        if ($el && $el.length > 0) {
          $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
          if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

          if (swiper.params.watchOverflow && swiper.enabled) {
            $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }
      }

      function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
      }

      function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
      }

      function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
      }

      function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', onPrevClick);
        }

        Object.assign(swiper.navigation, {
          $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });

        if (!swiper.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass);
          if ($prevEl) $prevEl.addClass(params.lockClass);
        }
      }

      function destroy() {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }

      on('init', () => {
        init();
        update();
      });
      on('toEdge fromEdge lock unlock', () => {
        update();
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;

        if ($nextEl) {
          $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        }

        if ($prevEl) {
          $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        }
      });
      on('click', (_s, e) => {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        const targetEl = e.target;

        if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
          if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
          let isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            emit('navigationShow');
          } else {
            emit('navigationHide');
          }

          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      });
      Object.assign(swiper.navigation, {
        update,
        init,
        destroy
      });
    }

    function classesToSelector(classes) {
      if (classes === void 0) {
        classes = '';
      }

      return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const pfx = 'swiper-pagination';
      extendParams({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: number => number,
          formatFractionTotal: number => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`
        }
      });
      swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
      };
      let bulletSize;
      let dynamicBulletIndex = 0;

      function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
      }

      function setSideBullets($bulletEl, position) {
        const {
          bulletActiveClass
        } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
      }

      function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total

        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }

          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          const bullets = swiper.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;

          if (params.dynamicBullets) {
            bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }

            firstIndex = Math.max(current - dynamicBulletIndex, 0);
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

          if ($el.length > 1) {
            bullets.each(bullet => {
              const $bullet = $(bullet);
              const bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(`${params.bulletActiveClass}-main`);
                }

                if (bulletIndex === firstIndex) {
                  setSideBullets($bullet, 'prev');
                }

                if (bulletIndex === lastIndex) {
                  setSideBullets($bullet, 'next');
                }
              }
            });
          } else {
            const $bullet = bullets.eq(current);
            const bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              const $firstDisplayedBullet = bullets.eq(firstIndex);
              const $lastDisplayedBullet = bullets.eq(lastIndex);

              for (let i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
              }

              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length) {
                  for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                    bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                } else {
                  setSideBullets($firstDisplayedBullet, 'prev');
                  setSideBullets($lastDisplayedBullet, 'next');
                }
              } else {
                setSideBullets($firstDisplayedBullet, 'prev');
                setSideBullets($lastDisplayedBullet, 'next');
              }
            }
          }

          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
            const offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
          }
        }

        if (params.type === 'fraction') {
          $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          let progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }

          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          emit('paginationRender', $el[0]);
        } else {
          emit('paginationUpdate', $el[0]);
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      }

      function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';

        if (params.type === 'bullets') {
          let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }

          for (let i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }

          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          emit('paginationRender', swiper.pagination.$el[0]);
        }
      }

      function init() {
        swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
          el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = $(params.el);
        if ($el.length === 0) return;

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

          if ($el.length > 1) {
            $el = $el.filter(el => {
              if ($(el).parents('.swiper')[0] !== swiper.el) return false;
              return true;
            });
          }
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);
        $el.addClass(params.modifierClass + swiper.params.direction);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }

        Object.assign(swiper.pagination, {
          $el,
          el: $el[0]
        });

        if (!swiper.enabled) {
          $el.addClass(params.lockClass);
        }
      }

      function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(params.modifierClass + swiper.params.direction);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

        if (params.clickable) {
          $el.off('click', classesToSelector(params.bulletClass));
        }
      }

      on('init', () => {
        init();
        render();
        update();
      });
      on('activeIndexChange', () => {
        if (swiper.params.loop) {
          update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          update();
        }
      });
      on('snapIndexChange', () => {
        if (!swiper.params.loop) {
          update();
        }
      });
      on('slidesLengthChange', () => {
        if (swiper.params.loop) {
          render();
          update();
        }
      });
      on('snapGridLengthChange', () => {
        if (!swiper.params.loop) {
          render();
          update();
        }
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper.pagination;

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
        }
      });
      on('lock unlock', () => {
        update();
      });
      on('click', (_s, e) => {
        const targetEl = e.target;
        const {
          $el
        } = swiper.pagination;

        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
          if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
          const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

          if (isHidden === true) {
            emit('paginationShow');
          } else {
            emit('paginationHide');
          }

          $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      });
      Object.assign(swiper.pagination, {
        render,
        update,
        init,
        destroy
      });
    }

    function Scrollbar(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      let isTouched = false;
      let timeout = null;
      let dragTimeout = null;
      let dragStartPos;
      let dragSize;
      let trackSize;
      let divider;
      extendParams({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag'
        }
      });
      swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
      };

      function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar,
          rtlTranslate: rtl,
          progress
        } = swiper;
        const {
          $dragEl,
          $el
        } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;

        if (rtl) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }

        if (swiper.isHorizontal()) {
          $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
          $dragEl[0].style.width = `${newSize}px`;
        } else {
          $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
          $dragEl[0].style.height = `${newSize}px`;
        }

        if (params.hide) {
          clearTimeout(timeout);
          $el[0].style.opacity = 1;
          timeout = setTimeout(() => {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      }

      function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
      }

      function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar
        } = swiper;
        const {
          $dragEl,
          $el
        } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }

        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = `${dragSize}px`;
        } else {
          $dragEl[0].style.height = `${dragSize}px`;
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }

        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        }
      }

      function getPointerPosition(e) {
        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }

        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      }

      function setDragPosition(e) {
        const {
          scrollbar,
          rtlTranslate: rtl
        } = swiper;
        const {
          $el
        } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);

        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el,
          $dragEl
        } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);

        if (params.hide) {
          $el.css('opacity', 1);
        }

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }

        emit('scrollbarDragStart', e);
      }

      function onDragMove(e) {
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el,
          $dragEl
        } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
      }

      function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el
        } = scrollbar;
        if (!isTouched) return;
        isTouched = false;

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }

        if (params.hide) {
          clearTimeout(dragTimeout);
          dragTimeout = nextTick(() => {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }

        emit('scrollbarDragEnd', e);

        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      }

      function events(method) {
        const {
          scrollbar,
          touchEventsTouch,
          touchEventsDesktop,
          params,
          support
        } = swiper;
        const $el = scrollbar.$el;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

        if (!support.touch) {
          target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
          document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
          document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
          target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
          target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
          target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
      }

      function enableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('on');
      }

      function disableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('off');
      }

      function init() {
        const {
          scrollbar,
          $el: $swiperEl
        } = swiper;
        swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
          el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = $(params.el);

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

        if ($dragEl.length === 0) {
          $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
          $el.append($dragEl);
        }

        Object.assign(scrollbar, {
          $el,
          el: $el[0],
          $dragEl,
          dragEl: $dragEl[0]
        });

        if (params.draggable) {
          enableDraggable();
        }

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      }

      function destroy() {
        disableDraggable();
      }

      on('init', () => {
        init();
        updateSize();
        setTranslate();
      });
      on('update resize observerUpdate lock unlock', () => {
        updateSize();
      });
      on('setTranslate', () => {
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        setTransition(duration);
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper.scrollbar;

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      });
      on('destroy', () => {
        destroy();
      });
      Object.assign(swiper.scrollbar, {
        updateSize,
        setTranslate,
        init,
        destroy
      });
    }

    function Parallax(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        parallax: {
          enabled: false
        }
      });

      const setTransform = (el, progress) => {
        const {
          rtl
        } = swiper;
        const $el = $(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if (x.indexOf('%') >= 0) {
          x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        } else {
          x = `${x * progress * rtlFactor}px`;
        }

        if (y.indexOf('%') >= 0) {
          y = `${parseInt(y, 10) * progress}%`;
        } else {
          y = `${y * progress}px`;
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }

        if (typeof scale === 'undefined' || scale === null) {
          $el.transform(`translate3d(${x}, ${y}, 0px)`);
        } else {
          const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
      };

      const setTranslate = () => {
        const {
          $el,
          slides,
          progress,
          snapGrid
        } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
          setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex) => {
          let slideProgress = slideEl.progress;

          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }

          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
            setTransform(el, slideProgress);
          });
        });
      };

      const setTransition = function (duration) {
        if (duration === void 0) {
          duration = swiper.params.speed;
        }

        const {
          $el
        } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
          const $parallaxEl = $(parallaxEl);
          let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      };

      on('beforeInit', () => {
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      });
      on('init', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTranslate', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTransition', (_swiper, duration) => {
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
      });
    }

    function Zoom(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      });
      swiper.zoom = {
        enabled: false
      };
      let currentScale = 1;
      let isScaling = false;
      let gesturesEnabled;
      let fakeGestureTouched;
      let fakeGestureMoved;
      const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      };
      const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      };
      const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      };
      let scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get() {
          return scale;
        },

        set(value) {
          if (scale !== value) {
            const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
            const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
            emit('zoomChange', value, imageEl, slideEl);
          }

          scale = value;
        }

      });

      function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
      } // Events


      function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;

        if (!support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }

          fakeGestureTouched = true;
          gesture.scaleStart = getDistanceBetweenTouches(e);
        }

        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }

        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }

        isScaling = true;
      }

      function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;

        if (!support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }

          fakeGestureMoved = true;
          gesture.scaleMove = getDistanceBetweenTouches(e);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          if (e.type === 'gesturechange') onGestureStart(e);
          return;
        }

        if (support.gestures) {
          zoom.scale = e.scale * currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        }

        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }

        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }

        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }

      function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;

        if (!support.gestures) {
          if (!fakeGestureTouched || !fakeGestureMoved) {
            return;
          }

          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
            return;
          }

          fakeGestureTouched = false;
          fakeGestureMoved = false;
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      }

      function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      }

      function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag


        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }

          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }

        if (e.cancelable) {
          e.preventDefault();
        }

        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }

        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }

        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }

        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        } // Velocity


        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }

      function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }

        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration

        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag

        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }

      function onTransitionEnd() {
        const zoom = swiper.zoom;

        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }

          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }

          zoom.scale = 1;
          currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      }

      function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;

        if (!gesture.$slideEl) {
          if (e && e.target) {
            gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
          }

          if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
              gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            } else {
              gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
          }

          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.touchAction = 'none';
        }

        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left + window.scrollX;
          offsetY = gesture.$slideEl.offset().top + window.scrollY;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }

          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }

          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }

        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }

      function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.style.touchAction = '';
        }

        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
      } // Toggle Zoom


      function zoomToggle(e) {
        const zoom = swiper.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoomOut();
        } else {
          // Zoom In
          zoomIn(e);
        }
      }

      function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        return {
          passiveListener,
          activeListenerWithCapture
        };
      }

      function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
      }

      function toggleGestures(method) {
        const {
          passiveListener
        } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
      }

      function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
      }

      function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
      } // Attach/Detach Events


      function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image

        if (support.gestures) {
          swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }

      function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image

        if (support.gestures) {
          swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }

      on('init', () => {
        if (swiper.params.zoom.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        disable();
      });
      on('touchStart', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
      });
      on('touchEnd', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
      });
      on('doubleTap', (_s, e) => {
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          zoomToggle(e);
        }
      });
      on('transitionEnd', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          onTransitionEnd();
        }
      });
      on('slideChange', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          onTransitionEnd();
        }
      });
      Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
      });
    }

    function Lazy(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        lazy: {
          checkInView: false,
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      });
      swiper.lazy = {};
      let scrollHandlerAttached = false;
      let initialImageLoaded = false;

      function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) {
          loadInDuplicate = true;
        }

        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images.push($slideEl[0]);
        }

        if ($images.length === 0) return;
        $images.each(imageEl => {
          const $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);
          const background = $imageEl.attr('data-background');
          const src = $imageEl.attr('data-src');
          const srcset = $imageEl.attr('data-srcset');
          const sizes = $imageEl.attr('data-sizes');
          const $pictureEl = $imageEl.parent('picture');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

            if (background) {
              $imageEl.css('background-image', `url("${background}")`);
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }

              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }

              if ($pictureEl.length) {
                $pictureEl.children('source').each(sourceEl => {
                  const $source = $(sourceEl);

                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }

              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find(`.${params.preloaderClass}`).remove();

            if (swiper.params.loop && loadInDuplicate) {
              const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                loadInSlide(originalSlide.index(), false);
              } else {
                const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                loadInSlide(duplicatedSlide.index(), false);
              }
            }

            emit('lazyImageReady', $slideEl[0], $imageEl[0]);

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      }

      function load() {
        const {
          $wrapperEl,
          params: swiperParams,
          slides,
          activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;

        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
              return true;
            }
          } else if (slides[index]) return true;

          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }

          return $(slideEl).index();
        }

        if (!initialImageLoaded) initialImageLoaded = true;

        if (swiper.params.watchSlidesProgress) {
          $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
            const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
        } else {
          loadInSlide(activeIndex);
        }

        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            const amount = params.loadPrevNextAmount;
            const spv = slidesPerView;
            const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            } // Prev Slides


            for (let i = minIndex; i < activeIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            }
          } else {
            const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
            if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
            const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
            if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
          }
        }
      }

      function checkInViewOnLoad() {
        const window = getWindow();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const {
          rtlTranslate: rtl
        } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }

        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (inView) {
          load();
          $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
          scrollHandlerAttached = true;
          $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
      }

      on('beforeInit', () => {
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      });
      on('init', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('scroll', () => {
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
          load();
        }
      });
      on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('transitionStart', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
            if (swiper.params.lazy.checkInView) {
              checkInViewOnLoad();
            } else {
              load();
            }
          }
        }
      });
      on('transitionEnd', () => {
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('slideChange', () => {
        const {
          lazy,
          cssMode,
          watchSlidesProgress,
          touchReleaseOnEdges,
          resistanceRatio
        } = swiper.params;

        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
          load();
        }
      });
      Object.assign(swiper.lazy, {
        load,
        loadInSlide
      });
    }

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'

        }
      });
      swiper.controller = {
        control: undefined
      };

      function LinearSpline(x, y) {
        const binarySearch = function search() {
          let maxIndex;
          let minIndex;
          let guess;
          return (array, val) => {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;

              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();

        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        let i1;
        let i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        return this;
      } // xxx: for now i will just save one spline function to to


      function getInterpolateFunction(c) {
        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      }

      function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

          if (swiper.params.controller.by === 'slide') {
            getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }

          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }

        if (Array.isArray(controlled)) {
          for (let i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      }

      function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;

        function setControlledTransition(c) {
          c.setTransition(duration, swiper);

          if (duration !== 0) {
            c.transitionStart();

            if (c.params.autoHeight) {
              nextTick(() => {
                c.updateAutoHeight();
              });
            }

            c.$wrapperEl.transitionEnd(() => {
              if (!controlled) return;

              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }

              c.transitionEnd();
            });
          }
        }

        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }

      function removeSpline() {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      }

      on('beforeInit', () => {
        swiper.controller.control = swiper.params.controller.control;
      });
      on('update', () => {
        removeSpline();
      });
      on('resize', () => {
        removeSpline();
      });
      on('observerUpdate', () => {
        removeSpline();
      });
      on('setTranslate', (_s, translate, byController) => {
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
      });
      on('setTransition', (_s, duration, byController) => {
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
      });
      Object.assign(swiper.controller, {
        setTranslate,
        setTransition
      });
    }

    function A11y(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group'
        }
      });
      let liveRegion = null;

      function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      }

      function getRandomNumber(size) {
        if (size === void 0) {
          size = 16;
        }

        const randomChar = () => Math.round(16 * Math.random()).toString(16);

        return 'x'.repeat(size).replace(/x/g, randomChar);
      }

      function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
      }

      function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
      }

      function addElRole($el, role) {
        $el.attr('role', role);
      }

      function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
      }

      function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
      }

      function addElLabel($el, label) {
        $el.attr('aria-label', label);
      }

      function addElId($el, id) {
        $el.attr('id', id);
      }

      function addElLive($el, live) {
        $el.attr('aria-live', live);
      }

      function disableEl($el) {
        $el.attr('aria-disabled', true);
      }

      function enableEl($el) {
        $el.attr('aria-disabled', false);
      }

      function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = $(e.target);

        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }

          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }

        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }

          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }

        if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
          $targetEl[0].click();
        }
      }

      function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            disableEl($prevEl);
            makeElNotFocusable($prevEl);
          } else {
            enableEl($prevEl);
            makeElFocusable($prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            disableEl($nextEl);
            makeElNotFocusable($nextEl);
          } else {
            enableEl($nextEl);
            makeElFocusable($nextEl);
          }
        }
      }

      function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
      }

      function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
      }

      function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each(bulletEl => {
          const $bulletEl = $(bulletEl);

          if (swiper.params.pagination.clickable) {
            makeElFocusable($bulletEl);

            if (!swiper.params.pagination.renderBullet) {
              addElRole($bulletEl, 'button');
              addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
          }

          if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
            $bulletEl.attr('aria-current', 'true');
          } else {
            $bulletEl.removeAttr('aria-current');
          }
        });
      }

      const initNavEl = ($el, wrapperId, message) => {
        makeElFocusable($el);

        if ($el[0].tagName !== 'BUTTON') {
          addElRole($el, 'button');
          $el.on('keydown', onEnterOrSpaceKey);
        }

        addElLabel($el, message);
        addElControls($el, wrapperId);
      };

      const handleFocus = e => {
        const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      };

      function init() {
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container

        const $containerEl = swiper.$el;

        if (params.containerRoleDescriptionMessage) {
          addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        }

        if (params.containerMessage) {
          addElLabel($containerEl, params.containerMessage);
        } // Wrapper


        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide

        if (params.itemRoleDescriptionMessage) {
          addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
        }

        addElRole($(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
        swiper.slides.each((slideEl, index) => {
          const $slideEl = $(slideEl);
          const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation

        let $nextEl;
        let $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl && $nextEl.length) {
          initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        }

        if ($prevEl && $prevEl.length) {
          initNavEl($prevEl, wrapperId, params.prevSlideMessage);
        } // Pagination


        if (hasClickablePagination()) {
          swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
        } // Tab focus


        swiper.$el.on('focus', handleFocus, true);
      }

      function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          $nextEl.off('keydown', onEnterOrSpaceKey);
        }

        if ($prevEl) {
          $prevEl.off('keydown', onEnterOrSpaceKey);
        } // Pagination


        if (hasClickablePagination()) {
          swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
        } // Tab focus


        swiper.$el.off('focus', handleFocus, true);
      }

      on('beforeInit', () => {
        liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
      });
      on('afterInit', () => {
        if (!swiper.params.a11y.enabled) return;
        init();
      });
      on('fromEdge toEdge afterInit lock unlock', () => {
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
      });
      on('paginationUpdate', () => {
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
      });
      on('destroy', () => {
        if (!swiper.params.a11y.enabled) return;
        destroy();
      });
    }

    function History(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        history: {
          enabled: false,
          root: '',
          replaceState: false,
          key: 'slides'
        }
      });
      let initialized = false;
      let paths = {};

      const slugify = text => {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      };

      const getPathValues = urlOverride => {
        const window = getWindow();
        let location;

        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }

        const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
          key,
          value
        };
      };

      const setHistory = (key, index) => {
        const window = getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;

        if (swiper.params.url) {
          location = new URL(swiper.params.url);
        } else {
          location = window.location;
        }

        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));

        if (swiper.params.history.root.length > 0) {
          let root = swiper.params.history.root;
          if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
          value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) {
          value = `${key}/${value}`;
        }

        const currentState = window.history.state;

        if (currentState && currentState.value === value) {
          return;
        }

        if (swiper.params.history.replaceState) {
          window.history.replaceState({
            value
          }, null, value);
        } else {
          window.history.pushState({
            value
          }, null, value);
        }
      };

      const scrollToSlide = (speed, value, runCallbacks) => {
        if (value) {
          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));

            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      };

      const setHistoryPopState = () => {
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, swiper.paths.value, false);
      };

      const init = () => {
        const window = getWindow();
        if (!swiper.params.history) return;

        if (!window.history || !window.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }

        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
      };

      const destroy = () => {
        const window = getWindow();

        if (!swiper.params.history.replaceState) {
          window.removeEventListener('popstate', setHistoryPopState);
        }
      };

      on('init', () => {
        if (swiper.params.history.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.history.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
    }

    function HashNavigation(_ref) {
      let {
        swiper,
        extendParams,
        emit,
        on
      } = _ref;
      let initialized = false;
      const document = getDocument();
      const window = getWindow();
      extendParams({
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      });

      const onHashChange = () => {
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

        if (newHash !== activeSlideHash) {
          const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
          if (typeof newIndex === 'undefined') return;
          swiper.slideTo(newIndex);
        }
      };

      const setHash = () => {
        if (!initialized || !swiper.params.hashNavigation.enabled) return;

        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
          emit('hashSet');
        } else {
          const slide = swiper.slides.eq(swiper.activeIndex);
          const hash = slide.attr('data-hash') || slide.attr('data-history');
          document.location.hash = hash || '';
          emit('hashSet');
        }
      };

      const init = () => {
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');

        if (hash) {
          const speed = 0;

          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides.eq(i);
            const slideHash = slide.attr('data-hash') || slide.attr('data-history');

            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }

        if (swiper.params.hashNavigation.watchState) {
          $(window).on('hashchange', onHashChange);
        }
      };

      const destroy = () => {
        if (swiper.params.hashNavigation.watchState) {
          $(window).off('hashchange', onHashChange);
        }
      };

      on('init', () => {
        if (swiper.params.hashNavigation.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.hashNavigation.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHash();
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHash();
        }
      });
    }

    /* eslint no-underscore-dangle: "off" */
    function Autoplay(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      let timeout;
      swiper.autoplay = {
        running: false,
        paused: false
      };
      extendParams({
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }
      });

      function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;

        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }

        clearTimeout(timeout);
        timeout = nextTick(() => {
          let autoplayResult;

          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper.isBeginning) {
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              emit('autoplay');
            } else {
              stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.isEnd) {
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
            emit('autoplay');
          } else {
            stop();
          }

          if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
            run();
          }
        }, delay);
      }

      function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
      }

      function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;

        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }

        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
      }

      function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;

        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          run();
        } else {
          ['transitionend', 'webkitTransitionEnd'].forEach(event => {
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
          });
        }
      }

      function onVisibilityChange() {
        const document = getDocument();

        if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
          pause();
        }

        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
          run();
          swiper.autoplay.paused = false;
        }
      }

      function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;

        if (!swiper.autoplay.running) {
          stop();
        } else {
          run();
        }
      }

      function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          emit('autoplayPause');
          pause();
        }

        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
      }

      function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) {
          return;
        }

        swiper.autoplay.paused = false;
        emit('autoplayResume');
        run();
      }

      function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
          swiper.$el.on('mouseenter', onMouseEnter);
          swiper.$el.on('mouseleave', onMouseLeave);
        }
      }

      function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
      }

      on('init', () => {
        if (swiper.params.autoplay.enabled) {
          start();
          const document = getDocument();
          document.addEventListener('visibilitychange', onVisibilityChange);
          attachMouseEvents();
        }
      });
      on('beforeTransitionStart', (_s, speed, internal) => {
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            stop();
          }
        }
      });
      on('sliderFirstMove', () => {
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            stop();
          } else {
            pause();
          }
        }
      });
      on('touchEnd', () => {
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          run();
        }
      });
      on('destroy', () => {
        detachMouseEvents();

        if (swiper.autoplay.running) {
          stop();
        }

        const document = getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
      });
      Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
      });
    }

    function Thumb(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs'
        }
      });
      let initialized = false;
      let swiperCreated = false;
      swiper.thumbs = {
        swiper: null
      };

      function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;

        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }

        if (swiper.params.loop) {
          let currentIndex = swiper.activeIndex;

          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }

          const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }

        swiper.slideTo(slideToIndex);
      }

      function init() {
        const {
          thumbs: thumbsParams
        } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;

        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Object.assign(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Object.assign(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (isObject(thumbsParams.swiper)) {
          const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
          Object.assign(thumbsSwiperParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
          swiperCreated = true;
        }

        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
      }

      function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          let currentThumbsIndex = thumbsSwiper.activeIndex;
          let newThumbsIndex;
          let direction;

          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line

              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to


            const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
            const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

            if (typeof prevThumbsIndex === 'undefined') {
              newThumbsIndex = nextThumbsIndex;
            } else if (typeof nextThumbsIndex === 'undefined') {
              newThumbsIndex = prevThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = nextThumbsIndex;
            } else {
              newThumbsIndex = prevThumbsIndex;
            }

            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }

          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;

            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        } // Activate thumbs


        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }

        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);

        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
          }
        } else {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
          }
        }
      }

      on('beforeInit', () => {
        const {
          thumbs
        } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
      });
      on('slideChange update resize observerUpdate', () => {
        if (!swiper.thumbs.swiper) return;
        update();
      });
      on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
      });
      on('beforeDestroy', () => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;

        if (swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      });
      Object.assign(swiper.thumbs, {
        init,
        update
      });
    }

    function freeMode(_ref) {
      let {
        swiper,
        extendParams,
        emit,
        once
      } = _ref;
      extendParams({
        freeMode: {
          enabled: false,
          momentum: true,
          momentumRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: false,
          minimumVelocity: 0.02
        }
      });

      function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
          currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
      }

      function onTouchMove() {
        const {
          touchEventsData: data,
          touches
        } = swiper; // Velocity

        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      }

      function onTouchEnd(_ref2) {
        let {
          currentPos
        } = _ref2;
        const {
          params,
          $wrapperEl,
          rtlTranslate: rtl,
          snapGrid,
          touchEventsData: data
        } = swiper; // Time diff

        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;

        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }

          return;
        }

        if (params.freeMode.momentum) {
          if (data.velocities.length > 1) {
            const lastMoveEvent = data.velocities.pop();
            const velocityEvent = data.velocities.pop();
            const distance = lastMoveEvent.position - velocityEvent.position;
            const time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;

            if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }

          swiper.velocity *= params.freeMode.momentumVelocityRatio;
          data.velocities.length = 0;
          let momentumDuration = 1000 * params.freeMode.momentumRatio;
          const momentumDistance = swiper.velocity * momentumDuration;
          let newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          let doBounce = false;
          let afterBouncePosition;
          const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
          let needsLoopFix;

          if (newPosition < swiper.maxTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeMode.sticky) {
            let nextSlide;

            for (let j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            once('transitionEnd', () => {
              swiper.loopFix();
            });
          } // Fix duration


          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }

            if (params.freeMode.sticky) {
              // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeMode.momentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(() => {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            emit('_freeModeNoMomentumRelease');
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);

            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        } else if (params.freeMode) {
          emit('_freeModeNoMomentumRelease');
        }

        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
      }

      Object.assign(swiper, {
        freeMode: {
          onTouchStart,
          onTouchMove,
          onTouchEnd
        }
      });
    }

    function Grid(_ref) {
      let {
        swiper,
        extendParams
      } = _ref;
      extendParams({
        grid: {
          rows: 1,
          fill: 'column'
        }
      });
      let slidesNumberEvenToRows;
      let slidesPerRow;
      let numFullColumns;

      const initSlides = slidesLength => {
        const {
          slidesPerView
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);

        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }

        if (slidesPerView !== 'auto' && fill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        }
      };

      const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
        const {
          slidesPerGroup,
          spaceBetween
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid; // Set slides order

        let newSlideOrderIndex;
        let column;
        let row;

        if (fill === 'row' && slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (slidesPerGroup * rows));
          const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
          const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
          slide.css({
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (fill === 'column') {
          column = Math.floor(i / rows);
          row = i - column * rows;

          if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
            row += 1;

            if (row >= rows) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
      };

      const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
        const {
          spaceBetween,
          centeredSlides,
          roundLengths
        } = swiper.params;
        const {
          rows
        } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });

        if (centeredSlides) {
          snapGrid.splice(0, snapGrid.length);
          const newSlidesGrid = [];

          for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }

          snapGrid.push(...newSlidesGrid);
        }
      };

      swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
      };
    }

    function appendSlide(slides) {
      const swiper = this;
      const {
        $wrapperEl,
        params
      } = swiper;

      if (params.loop) {
        swiper.loopDestroy();
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }
    }

    function prependSlide(slides) {
      const swiper = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper;

      if (params.loop) {
        swiper.loopDestroy();
      }

      let newActiveIndex = activeIndex + 1;

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }

      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      const swiper = this;
      const {
        $wrapperEl,
        params,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
      }

      const baseLength = swiper.slides.length;

      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }

      let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      const slidesBuffer = [];

      for (let i = baseLength - 1; i >= index; i -= 1) {
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (let i = 0; i < slidesBuffer.length; i += 1) {
        $wrapperEl.append(slidesBuffer[i]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      const swiper = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
      }

      let newActiveIndex = activeIndexBuffer;
      let indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (let i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      const swiper = this;
      const slidesIndexes = [];

      for (let i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
      let {
        swiper
      } = _ref;
      Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper)
      });
    }

    function effectInit(params) {
      const {
        effect,
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams,
        perspective
      } = params;
      on('beforeInit', () => {
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

        if (perspective && perspective()) {
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }

        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
      });
      on('setTranslate', () => {
        if (swiper.params.effect !== effect) return;
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
      });
    }

    function effectTarget(effectParams, $slideEl) {
      if (effectParams.transformEl) {
        return $slideEl.find(effectParams.transformEl).css({
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden'
        });
      }

      return $slideEl;
    }

    function effectVirtualTransitionEnd(_ref) {
      let {
        swiper,
        duration,
        transformEl,
        allSlides
      } = _ref;
      const {
        slides,
        activeIndex,
        $wrapperEl
      } = swiper;

      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;

        if (allSlides) {
          $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        } else {
          $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        }

        $transitionEndTarget.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }

    function EffectFade(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        fadeEffect: {
          crossFade: false,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          slides
        } = swiper;
        const params = swiper.params.fadeEffect;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset = $slideEl[0].swiperSlideOffset;
          let tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }

          const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.css({
            opacity: slideOpacity
          }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides: true
        });
      };

      effectInit({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCube(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      });

      const setTranslate = () => {
        const {
          $el,
          $wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
          browser
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }

            $cubeShadowEl.css({
              height: `${swiperWidth}px`
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;

          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }

          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);

          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }

          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;

          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }

          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }

          $slideEl.transform(transform);

          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }

        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset = params.shadowOffset;
            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
          }
        }

        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
      };

      const setTransition = duration => {
        const {
          $el,
          slides
        } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      };

      effectInit({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        })
      });
    }

    function createShadow(params, $slideEl, side) {
      const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
      const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
      let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

      if (!$shadowEl.length) {
        $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
      }

      return $shadowEl;
    }

    function EffectFlip(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          slides,
          rtlTranslate: rtl
        } = swiper;
        const params = swiper.params.flipEffect;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;

          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }

          const offset = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
            }

            if (shadowAfter.length === 0) {
              shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }

          const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl
        });
      };

      effectInit({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCoverflow(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center

        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

          let translateZ = -translate * Math.abs(offsetMultiplier);
          let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }

          let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
            }

            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
            }

            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      };

      effectInit({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true
        })
      });
    }

    function EffectCreative(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: false,
          progressMultiplier: 1,
          perspective: true,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      });

      const getTranslateValue = value => {
        if (typeof value === 'string') return value;
        return `${value}px`;
      };

      const setTranslate = () => {
        const {
          slides,
          $wrapperEl,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.creativeEffect;
        const {
          progressMultiplier: multiplier
        } = params;
        const isCenteredSlides = swiper.params.centeredSlides;

        if (isCenteredSlides) {
          const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
          $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
          let originalProgress = progress;

          if (!isCenteredSlides) {
            originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
          }

          const offset = $slideEl[0].swiperSlideOffset;
          const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
          const r = [0, 0, 0];
          let custom = false;

          if (!swiper.isHorizontal()) {
            t[1] = t[0];
            t[0] = 0;
          }

          let data = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };

          if (progress < 0) {
            data = params.next;
            custom = true;
          } else if (progress > 0) {
            data = params.prev;
            custom = true;
          } // set translate


          t.forEach((value, index) => {
            t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
          }); // set rotates

          r.forEach((value, index) => {
            r[index] = data.rotate[index] * Math.abs(progress * multiplier);
          });
          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const translateString = t.join(', ');
          const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
          const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
          const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
          const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

          if (custom && data.shadow || !custom) {
            let $shadowEl = $slideEl.children('.swiper-slide-shadow');

            if ($shadowEl.length === 0 && data.shadow) {
              $shadowEl = createShadow(params, $slideEl);
            }

            if ($shadowEl.length) {
              const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
              $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
            }
          }

          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform).css({
            opacity: opacityString
          });

          if (data.origin) {
            $targetEl.css('transform-origin', data.origin);
          }
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides: true
        });
      };

      effectInit({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => swiper.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCards(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        cardsEffect: {
          slideShadows: true,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          slides,
          activeIndex
        } = swiper;
        const params = swiper.params.cardsEffect;
        const {
          startTranslate,
          isTouched
        } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max(slideProgress, -4), 4);
          let offset = $slideEl[0].swiperSlideOffset;

          if (swiper.params.centeredSlides && !swiper.params.cssMode) {
            swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
          }

          if (swiper.params.centeredSlides && swiper.params.cssMode) {
            offset -= slides[0].swiperSlideOffset;
          }

          let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let tY = 0;
          const tZ = -100 * Math.abs(progress);
          let scale = 1;
          let rotate = -2 * progress;
          let tXAdd = 8 - Math.abs(progress) * 0.75;
          const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
          const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

          if (isSwipeToNext || isSwipeToPrev) {
            const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
            rotate += -28 * progress * subProgress;
            scale += -0.5 * subProgress;
            tXAdd += 96 * subProgress;
            tY = `${-25 * subProgress * Math.abs(progress)}%`;
          }

          if (progress < 0) {
            // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
          } else if (progress > 0) {
            // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
          } else {
            tX = `${tX}px`;
          }

          if (!swiper.isHorizontal()) {
            const prevY = tY;
            tY = tX;
            tX = prevY;
          }

          const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
          const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;

          if (params.slideShadows) {
            // Set shadows
            let $shadowEl = $slideEl.find('.swiper-slide-shadow');

            if ($shadowEl.length === 0) {
              $shadowEl = createShadow(params, $slideEl);
            }

            if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl
        });
      };

      effectInit({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);

    return Swiper;

}));

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var a in i)("object"==typeof exports?exports:e)[a]=i[a]}}(self,(function(){return function(){"use strict";var e={8741:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=i},3976:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=i(5581))&&a.__esModule?a:{default:a};var r={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function(){},onincomplete:function(){},oncleared:function(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function(){},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[n.default.BACKSPACE,n.default.TAB,n.default["PAUSE/BREAK"],n.default.ESCAPE,n.default.PAGE_UP,n.default.PAGE_DOWN,n.default.END,n.default.HOME,n.default.LEFT,n.default.UP,n.default.RIGHT,n.default.DOWN,n.default.INSERT,n.default.DELETE,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}};t.default=r},7392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}}},253:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){if(void 0===i)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=i}},3776:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=function(e,t){var i,a;function n(e,t,n){if(e in i==!0)if(a.removeEventListener?a.removeEventListener(e,n,!1):a.detachEvent&&a.detachEvent("on"+e,n),"global"===t)for(var r in i[e])i[e][r].splice(i[e][r].indexOf(n),1);else i[e][t].splice(i[e][t].indexOf(n),1)}function r(e,a){var n,r,o=[];if(e.length>0)if(void 0===t)for(n=0,r=i[e][a].length;n<r;n++)o.push({ev:e,namespace:a&&a.length>0?a:"global",handler:i[e][a][n]});else o.push({ev:e,namespace:a&&a.length>0?a:"global",handler:t});else if(a.length>0)for(var l in i)for(var s in i[l])if(s===a)if(void 0===t)for(n=0,r=i[l][s].length;n<r;n++)o.push({ev:l,namespace:s,handler:i[l][s][n]});else o.push({ev:l,namespace:s,handler:t});return o}if(u(this[0])&&e){i=this[0].eventRegistry,a=this[0];for(var o=e.split(" "),l=0;l<o.length;l++)for(var s=o[l].split("."),c=r(s[0],s[1]),f=0,d=c.length;f<d;f++)n(c[f].ev,c[f].namespace,c[f].handler)}return this},t.on=function(e,t){function i(e,i){n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent("on"+e,t),a[e]=a[e]||{},a[e][i]=a[e][i]||[],a[e][i].push(t)}if(u(this[0]))for(var a=this[0].eventRegistry,n=this[0],r=e.split(" "),o=0;o<r.length;o++){var l=r[o].split("."),s=l[0],c=l[1]||"global";i(s,c)}return this},t.trigger=function(e){if(u(this[0]))for(var t=this[0].eventRegistry,i=this[0],a="string"==typeof e?e.split(" "):[e.type],r=0;r<a.length;r++){var l=a[r].split("."),s=l[0],c=l[1]||"global";if(void 0!==document&&"global"===c){var f,d,p={bubbles:!0,cancelable:!0,detail:arguments[1]};if(document.createEvent){try{if("input"===s)p.inputType="insertText",f=new InputEvent(s,p);else f=new CustomEvent(s,p)}catch(e){(f=document.createEvent("CustomEvent")).initCustomEvent(s,p.bubbles,p.cancelable,p.detail)}e.type&&(0,n.default)(f,e),i.dispatchEvent(f)}else(f=document.createEventObject()).eventType=s,f.detail=arguments[1],e.type&&(0,n.default)(f,e),i.fireEvent("on"+f.eventType,f)}else if(void 0!==t[s])if(arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1),"global"===c)for(var h in t[s])for(d=0;d<t[s][h].length;d++)t[s][h][d].apply(i,arguments);else for(d=0;d<t[s][c].length;d++)t[s][c][d].apply(i,arguments)}return this};var a,n=s(i(600)),r=s(i(9380)),o=s(i(4963)),l=s(i(8741));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return e instanceof Element}t.Event=a,"function"==typeof r.default.CustomEvent?t.Event=a=r.default.CustomEvent:l.default&&(t.Event=a=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i},a.prototype=r.default.Event.prototype)},600:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){var t,a,n,r,o,l,s=arguments[0]||{},u=1,c=arguments.length,f=!1;"boolean"==typeof s&&(f=s,s=arguments[u]||{},u++);"object"!==i(s)&&"function"!=typeof s&&(s={});for(;u<c;u++)if(null!=(t=arguments[u]))for(a in t)n=s[a],r=t[a],s!==r&&(f&&r&&("[object Object]"===Object.prototype.toString.call(r)||(o=Array.isArray(r)))?(o?(o=!1,l=n&&Array.isArray(n)?n:[]):l=n&&"[object Object]"===Object.prototype.toString.call(n)?n:{},s[a]=e(f,l,r)):void 0!==r&&(s[a]=r));return s}},4963:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(i(600)),n=l(i(9380)),r=l(i(253)),o=i(3776);function l(e){return e&&e.__esModule?e:{default:e}}var s=n.default.document;function u(e){return e instanceof u?e:this instanceof u?void(null!=e&&e!==n.default&&(this[0]=e.nodeName?e:void 0!==e[0]&&e[0].nodeName?e[0]:s.querySelector(e),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new u(e)}u.prototype={on:o.on,off:o.off,trigger:o.trigger},u.extend=a.default,u.data=r.default,u.Event=o.Event;var c=u;t.default=c},9845:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.ua=t.mobile=t.iphone=t.iemobile=t.ie=void 0;var a,n=(a=i(9380))&&a.__esModule?a:{default:a};var r=n.default.navigator&&n.default.navigator.userAgent||"",o=r.indexOf("MSIE ")>0||r.indexOf("Trident/")>0,l="ontouchstart"in n.default,s=/iemobile/i.test(r),u=/iphone/i.test(r)&&!s;t.iphone=u,t.iemobile=s,t.mobile=l,t.ie=o,t.ua=r},7184:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(i,"\\$1")};var i=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim")},6030:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var a,n=i(8711),r=(a=i(5581))&&a.__esModule?a:{default:a},o=i(9845),l=i(7215),s=i(7760),u=i(4713);function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){l=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(l)throw r}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}var d={keydownEvent:function(e){var t=this.inputmask,i=t.opts,a=t.dependencyLib,c=t.maskset,f=this,d=a(f),p=e.keyCode,h=n.caret.call(t,f),v=i.onKeyDown.call(this,e,n.getBuffer.call(t),h,i);if(void 0!==v)return v;if(p===r.default.BACKSPACE||p===r.default.DELETE||o.iphone&&p===r.default.BACKSPACE_SAFARI||e.ctrlKey&&p===r.default.X&&!("oncut"in f))e.preventDefault(),l.handleRemove.call(t,f,p,h),(0,s.writeBuffer)(f,n.getBuffer.call(t,!0),c.p,e,f.inputmask._valueGet()!==n.getBuffer.call(t).join(""));else if(p===r.default.END||p===r.default.PAGE_DOWN){e.preventDefault();var m=n.seekNext.call(t,n.getLastValidPosition.call(t));n.caret.call(t,f,e.shiftKey?h.begin:m,m,!0)}else p===r.default.HOME&&!e.shiftKey||p===r.default.PAGE_UP?(e.preventDefault(),n.caret.call(t,f,0,e.shiftKey?h.begin:0,!0)):i.undoOnEscape&&p===r.default.ESCAPE&&!0!==e.altKey?((0,s.checkVal)(f,!0,!1,t.undoValue.split("")),d.trigger("click")):p!==r.default.INSERT||e.shiftKey||e.ctrlKey||void 0!==t.userOptions.insertMode?!0===i.tabThrough&&p===r.default.TAB?!0===e.shiftKey?(h.end=n.seekPrevious.call(t,h.end,!0),!0===u.getTest.call(t,h.end-1).match.static&&h.end--,h.begin=n.seekPrevious.call(t,h.end,!0),h.begin>=0&&h.end>0&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):(h.begin=n.seekNext.call(t,h.begin,!0),h.end=n.seekNext.call(t,h.begin,!0),h.end<c.maskLength&&h.end--,h.begin<=c.maskLength&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):e.shiftKey||i.insertModeVisual&&!1===i.insertMode&&(p===r.default.RIGHT?setTimeout((function(){var e=n.caret.call(t,f);n.caret.call(t,f,e.begin)}),0):p===r.default.LEFT&&setTimeout((function(){var e=n.translatePosition.call(t,f.inputmask.caretPos.begin);n.translatePosition.call(t,f.inputmask.caretPos.end);t.isRTL?n.caret.call(t,f,e+(e===c.maskLength?0:1)):n.caret.call(t,f,e-(0===e?0:1))}),0)):l.isSelection.call(t,h)?i.insertMode=!i.insertMode:(i.insertMode=!i.insertMode,n.caret.call(t,f,h.begin,h.begin));t.ignorable=i.ignorables.includes(p)},keypressEvent:function(e,t,i,a,o){var u=this.inputmask||this,c=u.opts,f=u.dependencyLib,d=u.maskset,p=u.el,h=f(p),v=e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||u.ignorable))return v===r.default.ENTER&&u.undoValue!==u._valueGet(!0)&&(u.undoValue=u._valueGet(!0),setTimeout((function(){h.trigger("change")}),0)),u.skipInputEvent=!0,!0;if(v){44!==v&&46!==v||3!==e.location||""===c.radixPoint||(v=c.radixPoint.charCodeAt(0));var m,g=t?{begin:o,end:o}:n.caret.call(u,p),k=String.fromCharCode(v);k=c.substitutes[k]||k,d.writeOutBuffer=!0;var y=l.isValid.call(u,g,k,a,void 0,void 0,void 0,t);if(!1!==y&&(n.resetMaskSet.call(u,!0),m=void 0!==y.caret?y.caret:n.seekNext.call(u,y.pos.begin?y.pos.begin:y.pos),d.p=m),m=c.numericInput&&void 0===y.caret?n.seekPrevious.call(u,m):m,!1!==i&&(setTimeout((function(){c.onKeyValidation.call(p,v,y)}),0),d.writeOutBuffer&&!1!==y)){var b=n.getBuffer.call(u);(0,s.writeBuffer)(p,b,m,e,!0!==t)}if(e.preventDefault(),t)return!1!==y&&(y.forwardPosition=m),y}},keyupEvent:function(e){var t=this.inputmask;!t.isComposing||e.keyCode!==r.default.KEY_229&&e.keyCode!==r.default.ENTER||t.$el.trigger("input")},pasteEvent:function(e){var t,i=this.inputmask,a=i.opts,r=i._valueGet(!0),o=n.caret.call(i,this);i.isRTL&&(t=o.end,o.end=n.translatePosition.call(i,o.begin),o.begin=n.translatePosition.call(i,t));var l=r.substr(0,o.begin),u=r.substr(o.end,r.length);if(l==(i.isRTL?n.getBufferTemplate.call(i).slice().reverse():n.getBufferTemplate.call(i)).slice(0,o.begin).join("")&&(l=""),u==(i.isRTL?n.getBufferTemplate.call(i).slice().reverse():n.getBufferTemplate.call(i)).slice(o.end).join("")&&(u=""),window.clipboardData&&window.clipboardData.getData)r=l+window.clipboardData.getData("Text")+u;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;r=l+e.clipboardData.getData("text/plain")+u}var f=r;if(i.isRTL){f=f.split("");var d,p=c(n.getBufferTemplate.call(i));try{for(p.s();!(d=p.n()).done;){var h=d.value;f[0]===h&&f.shift()}}catch(e){p.e(e)}finally{p.f()}f=f.join("")}if("function"==typeof a.onBeforePaste){if(!1===(f=a.onBeforePaste.call(i,f,a)))return!1;f||(f=r)}(0,s.checkVal)(this,!0,!1,f.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function(e){var t=this.inputmask,i=t.opts,a=t.dependencyLib;var l=this,c=l.inputmask._valueGet(!0),f=(t.isRTL?n.getBuffer.call(t).slice().reverse():n.getBuffer.call(t)).join(""),p=n.caret.call(t,l,void 0,void 0,!0);if(f!==c){c=function(e,i,a){if(o.iemobile){var r=i.replace(n.getBuffer.call(t).join(""),"");if(1===r.length){var l=i.split("");l.splice(a.begin,0,r),i=l.join("")}}return i}(0,c,p);var h=function(e,a,r){for(var o,l,s,c=e.substr(0,r.begin).split(""),f=e.substr(r.begin).split(""),d=a.substr(0,r.begin).split(""),p=a.substr(r.begin).split(""),h=c.length>=d.length?c.length:d.length,v=f.length>=p.length?f.length:p.length,m="",g=[],k="~";c.length<h;)c.push(k);for(;d.length<h;)d.push(k);for(;f.length<v;)f.unshift(k);for(;p.length<v;)p.unshift(k);var y=c.concat(f),b=d.concat(p);for(l=0,o=y.length;l<o;l++)switch(s=u.getPlaceholder.call(t,n.translatePosition.call(t,l)),m){case"insertText":b[l-1]===y[l]&&r.begin==y.length-1&&g.push(y[l]),l=o;break;case"insertReplacementText":case"deleteContentBackward":y[l]===k?r.end++:l=o;break;default:y[l]!==b[l]&&(y[l+1]!==k&&y[l+1]!==s&&void 0!==y[l+1]||(b[l]!==s||b[l+1]!==k)&&b[l]!==k?b[l+1]===k&&b[l]===y[l+1]?(m="insertText",g.push(y[l]),r.begin--,r.end--):y[l]!==s&&y[l]!==k&&(y[l+1]===k||b[l]!==y[l]&&b[l+1]===y[l+1])?(m="insertReplacementText",g.push(y[l]),r.begin--):y[l]===k?(m="deleteContentBackward",(n.isMask.call(t,n.translatePosition.call(t,l),!0)||b[l]===i.radixPoint)&&r.end++):l=o:(m="insertText",g.push(y[l]),r.begin--,r.end--))}return{action:m,data:g,caret:r}}(c,f,p);switch((l.inputmask.shadowRoot||l.ownerDocument).activeElement!==l&&l.focus(),(0,s.writeBuffer)(l,n.getBuffer.call(t)),n.caret.call(t,l,p.begin,p.end,!0),h.action){case"insertText":case"insertReplacementText":h.data.forEach((function(e,i){var n=new a.Event("keypress");n.keyCode=e.charCodeAt(0),t.ignorable=!1,d.keypressEvent.call(l,n)})),setTimeout((function(){t.$el.trigger("keyup")}),0);break;case"deleteContentBackward":var v=new a.Event("keydown");v.keyCode=r.default.BACKSPACE,d.keydownEvent.call(l,v);break;default:(0,s.applyInputValue)(l,c)}e.preventDefault()}},compositionendEvent:function(e){var t=this.inputmask;t.isComposing=!1,t.$el.trigger("input")},setValueEvent:function(e){var t=this.inputmask,i=this,a=e&&e.detail?e.detail[0]:arguments[1];void 0===a&&(a=i.inputmask._valueGet(!0)),(0,s.applyInputValue)(i,a),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&n.caret.call(t,i,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){var t=this.inputmask,i=t.opts,a=this,r=a.inputmask._valueGet();i.showMaskOnFocus&&r!==n.getBuffer.call(t).join("")&&(0,s.writeBuffer)(a,n.getBuffer.call(t),n.seekNext.call(t,n.getLastValidPosition.call(t))),!0!==i.positionCaretOnTab||!1!==t.mouseEnter||l.isComplete.call(t,n.getBuffer.call(t))&&-1!==n.getLastValidPosition.call(t)||d.clickEvent.apply(a,[e,!0]),t.undoValue=t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){var e=this.inputmask,t=e.opts,i=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i&&(0,s.HandleNativePlaceholder)(i,e.originalPlaceholder)},clickEvent:function(e,t){var i=this.inputmask,a=this;if((a.inputmask.shadowRoot||a.ownerDocument).activeElement===a){var r=n.determineNewCaretPosition.call(i,n.caret.call(i,a),t);void 0!==r&&n.caret.call(i,a,r)}},cutEvent:function(e){var t=this.inputmask,i=t.maskset,a=this,o=n.caret.call(t,a),u=t.isRTL?n.getBuffer.call(t).slice(o.end,o.begin):n.getBuffer.call(t).slice(o.begin,o.end),c=t.isRTL?u.reverse().join(""):u.join("");window.navigator.clipboard?window.navigator.clipboard.writeText(c):window.clipboardData&&window.clipboardData.getData&&window.clipboardData.setData("Text",c),l.handleRemove.call(t,a,r.default.DELETE,o),(0,s.writeBuffer)(a,n.getBuffer.call(t),i.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){var t=this.inputmask,i=t.opts,a=(0,t.dependencyLib)(this),r=this;if(r.inputmask){(0,s.HandleNativePlaceholder)(r,t.originalPlaceholder);var o=r.inputmask._valueGet(),u=n.getBuffer.call(t).slice();""!==o&&(i.clearMaskOnLostFocus&&(-1===n.getLastValidPosition.call(t)&&o===n.getBufferTemplate.call(t).join("")?u=[]:s.clearOptionalTail.call(t,u)),!1===l.isComplete.call(t,u)&&(setTimeout((function(){a.trigger("incomplete")}),0),i.clearIncomplete&&(n.resetMaskSet.call(t),u=i.clearMaskOnLostFocus?[]:n.getBufferTemplate.call(t).slice())),(0,s.writeBuffer)(r,u,void 0,e)),t.undoValue!==t._valueGet(!0)&&(t.undoValue=t._valueGet(!0),a.trigger("change"))}},mouseenterEvent:function(){var e=this.inputmask,t=e.opts,i=this;if(e.mouseEnter=!0,(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i){var a=(e.isRTL?n.getBufferTemplate.call(e).slice().reverse():n.getBufferTemplate.call(e)).join("");e.placeholder!==a&&i.placeholder!==e.originalPlaceholder&&(e.originalPlaceholder=i.placeholder),t.showMaskOnHover&&(0,s.HandleNativePlaceholder)(i,a)}},submitEvent:function(){var e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),-1===n.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===n.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===l.isComplete.call(e,n.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout((function(){(0,s.writeBuffer)(e.el,n.getBuffer.call(e))}),0))},resetEvent:function(){var e=this.inputmask;e.refreshValue=!0,setTimeout((function(){(0,s.applyInputValue)(e.el,e._valueGet(!0))}),0)}};t.EventHandlers=d},9716:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var a=l(i(2394)),n=l(i(5581)),r=i(8711),o=i(7760);function l(e){return e&&e.__esModule?e:{default:e}}var s={on:function(e,t,i){var l=e.inputmask.dependencyLib,s=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);var s,u=this,c=u.inputmask,f=c?c.opts:void 0;if(void 0===c&&"FORM"!==this.nodeName){var d=l.data(u,"_inputmask_opts");l(u).off(),d&&new a.default(d).mask(u)}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(u.disabled||u.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===f.tabThrough&&t.keyCode===n.default.TAB))){switch(t.type){case"input":if(!0===c.skipInputEvent||t.inputType&&"insertCompositionText"===t.inputType)return c.skipInputEvent=!1,t.preventDefault();break;case"keydown":c.skipKeyPressEvent=!1,c.skipInputEvent=c.isComposing=t.keyCode===n.default.KEY_229;break;case"keyup":case"compositionend":c.isComposing&&(c.skipInputEvent=!1);break;case"keypress":if(!0===c.skipKeyPressEvent)return t.preventDefault();c.skipKeyPressEvent=!0;break;case"click":case"focus":return c.validationEvent?(c.validationEvent=!1,e.blur(),(0,o.HandleNativePlaceholder)(e,(c.isRTL?r.getBufferTemplate.call(c).slice().reverse():r.getBufferTemplate.call(c)).join("")),setTimeout((function(){e.focus()}),f.validationEventTimeOut),!1):(s=arguments,setTimeout((function(){e.inputmask&&i.apply(u,s)}),0),!1)}var p=i.apply(u,arguments);return!1===p&&(t.preventDefault(),t.stopPropagation()),p}t.preventDefault()}};["submit","reset"].includes(t)?(s=s.bind(e),null!==e.form&&l(e.form).on(t,s)):l(e).on(t,s),e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(s)},off:function(e,t){if(e.inputmask&&e.inputmask.events){var i=e.inputmask.dependencyLib,a=e.inputmask.events;for(var n in t&&((a=[])[t]=e.inputmask.events[t]),a){for(var r=a[n];r.length>0;){var o=r.pop();["submit","reset"].includes(n)?null!==e.form&&i(e.form).off(n,o):i(e).off(n,o)}delete e.inputmask.events[n]}}}};t.EventRuler=s},219:function(e,t,i){var a=d(i(2394)),n=d(i(5581)),r=d(i(7184)),o=i(8711),l=i(4713);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var a,n,r=[],o=!0,l=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(l)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function f(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return e&&e.__esModule?e:{default:e}}var p=a.default.dependencyLib,h=function(){function e(t,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mask=t,this.format=i,this.opts=a,this._date=new Date(1,0,1),this.initDateObject(t,this.opts)}var t,i,a;return t=e,(i=[{key:"date",get:function(){return void 0===this._date&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts)),this._date}},{key:"initDateObject",value:function(e,t){var i;for(P(t).lastIndex=0;i=P(t).exec(this.format);){var a=new RegExp("\\d+$").exec(i[0]),n=a?i[0][0]+"x":i[0],r=void 0;if(void 0!==e){if(a){var o=P(t).lastIndex,l=O(i.index,t);P(t).lastIndex=o,r=e.slice(0,e.indexOf(l.nextMatch[0]))}else r=e.slice(0,n.length);e=e.slice(r.length)}Object.prototype.hasOwnProperty.call(g,n)&&this.setValue(this,r,n,g[n][2],g[n][1])}}},{key:"setValue",value:function(e,t,i,a,n){if(void 0!==t&&(e[a]="ampm"===a?t:t.replace(/[^0-9]/g,"0"),e["raw"+a]=t.replace(/\s/g,"_")),void 0!==n){var r=e[a];("day"===a&&29===parseInt(r)||"month"===a&&2===parseInt(r))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e._date.setFullYear(2012,1,29)),"day"===a&&(m=!0,0===parseInt(r)&&(r=1)),"month"===a&&(m=!0),"year"===a&&(m=!0,r.length<4&&(r=_(r,4,!0))),""===r||isNaN(r)||n.call(e._date,r),"ampm"===a&&n.call(e._date,r)}}},{key:"reset",value:function(){this._date=new Date(1,0,1)}},{key:"reInit",value:function(){this._date=void 0,this.date}}])&&f(t.prototype,i),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),v=(new Date).getFullYear(),m=!1,g={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return _(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return _(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return _(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return _(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return _(Date.prototype.getHours.call(this),2)}],hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return _(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return function(){return _(Date.prototype.getHours.call(this),e)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return _(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return _(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return _(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return _(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]",y,"ampm",b,1],tt:["[ap]m",y,"ampm",b,2],T:["[AP]",y,"ampm",b,1],TT:["[AP]M",y,"ampm",b,2],Z:[".*",void 0,"Z",function(){var e=this.toString().match(/\((.+)\)/)[1];e.includes(" ")&&(e=(e=e.replace("-"," ").toUpperCase()).split(" ").map((function(e){return u(e,1)[0]})).join(""));return e}],o:[""],S:[""]},k={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function y(e){var t=this.getHours();e.toLowerCase().includes("p")?this.setHours(t+12):e.toLowerCase().includes("a")&&t>=12&&this.setHours(t-12)}function b(){var e=this.getHours();return(e=e||12)>=12?"PM":"AM"}function x(e){var t=new RegExp("\\d+$").exec(e[0]);if(t&&void 0!==t[0]){var i=g[e[0][0]+"x"].slice("");return i[0]=i[0](t[0]),i[3]=i[3](t[0]),i}if(g[e[0]])return g[e[0]]}function P(e){if(!e.tokenizer){var t=[],i=[];for(var a in g)if(/\.*x$/.test(a)){var n=a[0]+"\\d+";-1===i.indexOf(n)&&i.push(n)}else-1===t.indexOf(a[0])&&t.push(a[0]);e.tokenizer="("+(i.length>0?i.join("|")+"|":"")+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function E(e,t,i){if(!m)return!0;if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&(!isFinite(e.rawyear)||void 0===e.rawyear||""===e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){var a=O(t.pos,i);if("yyyy"===a.targetMatch[0]&&t.pos-a.targetMatchIndex==2)return t.remove=t.pos+1,t}else if("02"==e.month&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function S(e,t,i,a){var n,o,l="";for(P(i).lastIndex=0;n=P(i).exec(e);){if(void 0===t)if(o=x(n))l+="("+o[0]+")";else switch(n[0]){case"[":l+="(";break;case"]":l+=")?";break;default:l+=(0,r.default)(n[0])}else if(o=x(n))if(!0!==a&&o[3])l+=o[3].call(t.date);else o[2]?l+=t["raw"+o[2]]:l+=n[0];else l+=n[0]}return l}function _(e,t,i){for(e=String(e),t=t||2;e.length<t;)e=i?e+"0":"0"+e;return e}function w(e,t,i){return"string"==typeof e?new h(e,t,i):e&&"object"===s(e)&&Object.prototype.hasOwnProperty.call(e,"date")?e:void 0}function M(e,t){return S(t.inputFormat,{date:e},t)}function O(e,t){var i,a,n=0,r=0;for(P(t).lastIndex=0;a=P(t).exec(t.inputFormat);){var o=new RegExp("\\d+$").exec(a[0]);if((n+=r=o?parseInt(o[0]):a[0].length)>=e+1){i=a,a=P(t).exec(t.inputFormat);break}}return{targetMatchIndex:n-r,nextMatch:a,targetMatch:i}}a.default.extendAliases({datetime:{mask:function(e){return e.numericInput=!1,g.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=k[e.inputFormat]||e.inputFormat,e.displayFormat=k[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=k[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[[\]]/,""),e.regex=S(e.inputFormat,void 0,e),e.min=w(e.min,e.inputFormat,e),e.max=w(e.max,e.inputFormat,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function(e,t,i,a,n,r,o,l){if(l)return!0;if(isNaN(i)&&e[t]!==i){var s=O(t,n);if(s.nextMatch&&s.nextMatch[0]===i&&s.targetMatch[0].length>1){var u=g[s.targetMatch[0]][0];if(new RegExp(u).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,i,a,n,r,o,s){var u,c;if(o)return!0;if(!1===a&&(((u=O(t+1,n)).targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&void 0!==g[u.targetMatch[0]]||(u=O(t+2,n)).targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&void 0!==g[u.targetMatch[0]])&&(c=g[u.targetMatch[0]][0]),void 0!==c&&(void 0!==r.validPositions[t+1]&&new RegExp(c).test(i+"0")?(e[t]=i,e[t+1]="0",a={pos:t+2,caret:t}):new RegExp(c).test("0"+i)&&(e[t]="0",e[t+1]=i,a={pos:t+2})),!1===a))return a;if(a.fuzzy&&(e=a.buffer,t=a.pos),(u=O(t,n)).targetMatch&&u.targetMatch[0]&&void 0!==g[u.targetMatch[0]]){var f=g[u.targetMatch[0]];c=f[0];var d=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(!1===new RegExp(c).test(d.join(""))&&2===u.targetMatch[0].length&&r.validPositions[u.targetMatchIndex]&&r.validPositions[u.targetMatchIndex+1]&&(r.validPositions[u.targetMatchIndex+1].input="0"),"year"==f[2])for(var p=l.getMaskTemplate.call(this,!1,1,void 0,!0),h=t+1;h<e.length;h++)e[h]=p[h],delete r.validPositions[h]}var m=a,k=w(e.join(""),n.inputFormat,n);return m&&k.date.getTime()==k.date.getTime()&&(n.prefillYear&&(m=function(e,t,i){if(e.year!==e.rawyear){var a=v.toString(),n=e.rawyear.replace(/[^0-9]/g,""),r=a.slice(0,n.length),o=a.slice(n.length);if(2===n.length&&n===r){var l=new Date(v,e.month-1,e.day);e.day==l.getDate()&&(!i.max||i.max.date.getTime()>=l.getTime())&&(e.date.setFullYear(v),e.year=a,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}(k,m,n)),m=function(e,t,i,a,n){if(!t)return t;if(t&&i.min&&i.min.date.getTime()==i.min.date.getTime()){var r;for(e.reset(),P(i).lastIndex=0;r=P(i).exec(i.inputFormat);){var o;if((o=x(r))&&o[3]){for(var l=o[1],s=e[o[2]],u=i.min[o[2]],c=i.max?i.max[o[2]]:u,f=[],d=!1,p=0;p<u.length;p++)void 0!==a.validPositions[p+r.index]||d?(f[p]=s[p],d=d||s[p]>u[p]):(f[p]=u[p],"year"===o[2]&&s.length-1==p&&u!=c&&(f=(parseInt(f.join(""))+1).toString().split("")),"ampm"===o[2]&&u!=c&&i.min.date.getTime()>e.date.getTime()&&(f[p]=c[p]));l.call(e._date,f.join(""))}}t=i.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&i.max&&i.max.date.getTime()==i.max.date.getTime()&&(t=i.max.date.getTime()>=e.date.getTime()),t}(k,m=E.call(this,k,m,n),n,r)),void 0!==t&&m&&a.pos!==t?{buffer:S(n.inputFormat,k,n).split(""),refreshFromBuffer:{start:t,end:a.pos},pos:a.caret||a.pos}:m},onKeyDown:function(e,t,i,a){e.ctrlKey&&e.keyCode===n.default.RIGHT&&(this.inputmask._valueSet(M(new Date,a)),p(this).trigger("setvalue"))},onUnMask:function(e,t,i){return t?S(i.outputFormat,w(e,i.inputFormat,i),i,!0):t},casing:function(e,t,i,a){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=M(e,t)),e},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}})},3851:function(e,t,i){var a,n=(a=i(2394))&&a.__esModule?a:{default:a},r=i(8711),o=i(4713);n.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var l=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function s(e,t,i,a,n){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,l.test(e)}n.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i{1,3}.j{1,3}.k{1,3}.l{1,3}",definitions:{i:{validator:s},j:{validator:s},k:{validator:s},l:{validator:s}},onUnMask:function(e,t,i){return e},inputmode:"decimal",substitutes:{",":"."}},email:{mask:function(e){var t="*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",i=t;if(e.separator)for(var a=0;a<e.quantifier;a++)i+="[".concat(e.separator).concat(t,"]");return i},greedy:!1,casing:"lower",separator:null,quantifier:5,skipOptionalPartCharacter:"",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,i,a,n,l,s){var u=o.getMaskTemplate.call(this,!0,r.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""))}}})},207:function(e,t,i){var a=l(i(2394)),n=l(i(5581)),r=l(i(7184)),o=i(8711);function l(e){return e&&e.__esModule?e:{default:e}}var s=a.default.dependencyLib;function u(e,t){for(var i="",n=0;n<e.length;n++)a.default.prototype.definitions[e.charAt(n)]||t.definitions[e.charAt(n)]||t.optionalmarker[0]===e.charAt(n)||t.optionalmarker[1]===e.charAt(n)||t.quantifiermarker[0]===e.charAt(n)||t.quantifiermarker[1]===e.charAt(n)||t.groupmarker[0]===e.charAt(n)||t.groupmarker[1]===e.charAt(n)||t.alternatormarker===e.charAt(n)?i+="\\"+e.charAt(n):i+=e.charAt(n);return i}function c(e,t,i,a){if(e.length>0&&t>0&&(!i.digitsOptional||a)){var n=e.indexOf(i.radixPoint),r=!1;i.negationSymbol.back===e[e.length-1]&&(r=!0,e.length--),-1===n&&(e.push(i.radixPoint),n=e.length-1);for(var o=1;o<=t;o++)isFinite(e[n+o])||(e[n+o]="0")}return r&&e.push(i.negationSymbol.back),e}function f(e,t){var i=0;if("+"===e){for(i in t.validPositions);i=o.seekNext.call(this,parseInt(i))}for(var a in t.tests)if((a=parseInt(a))>=i)for(var n=0,r=t.tests[a].length;n<r;n++)if((void 0===t.validPositions[a]||"-"===e)&&t.tests[a][n].match.def===e)return a+(void 0!==t.validPositions[a]&&"-"!==e?1:0);return i}function d(e,t){var i=-1;for(var a in t.validPositions){var n=t.validPositions[a];if(n&&n.match.def===e){i=parseInt(a);break}}return i}function p(e,t,i,a,n){var r=t.buffer?t.buffer.indexOf(n.radixPoint):-1,o=(-1!==r||a&&n.jitMasking)&&new RegExp(n.definitions[9].validator).test(e);return n._radixDance&&-1!==r&&o&&null==t.validPositions[r]?{insert:{pos:r===i?r+1:r,c:n.radixPoint},pos:i}:o}a.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");var t="0",i=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e._radixDance=!1,i=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[i]&&(e.definitions[i]={},e.definitions[i].validator="["+e.radixPoint+"]",e.definitions[i].placeholder=e.radixPoint,e.definitions[i].static=!0,e.definitions[i].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);var a,n="[+]";if(n+=u(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),n+=e._mask(e)):n+="9{+}",void 0!==e.digits&&0!==e.digits){var o=e.digits.toString().split(",");isFinite(o[0])&&o[1]&&isFinite(o[1])?n+=i+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(a=n+i+t+"{0,"+e.digits+"}",e.keepStatic=!0):n+=i+t+"{"+e.digits+"}")}else e.inputmode="numeric";return n+=u(e.suffix,e),n+="[-]",a&&(n=[a+u(e.suffix,e)+"[-]",n]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(e),""!==e.radixPoint&&(e.substitutes["."==e.radixPoint?",":"."]=e.radixPoint),n},_mask:function(e){return"("+e.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"1000",m:"1000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,stripLeadingZeroes:!0,definitions:{0:{validator:p},1:{validator:p,definitionSymbol:"9"},9:{validator:"[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",definitionSymbol:"*"},"+":{validator:function(e,t,i,a,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front)}},"-":{validator:function(e,t,i,a,n){return n.allowMinus&&e===n.negationSymbol.back}}},preValidation:function(e,t,i,a,n,r,o,l){if(!1!==n.__financeInput&&i===n.radixPoint)return!1;var s=e.indexOf(n.radixPoint),u=t;if(t=function(e,t,i,a,n){return n._radixDance&&n.numericInput&&t!==n.negationSymbol.back&&e<=i&&(i>0||t==n.radixPoint)&&(void 0===a.validPositions[e-1]||a.validPositions[e-1].input!==n.negationSymbol.back)&&(e-=1),e}(t,i,s,r,n),"-"===i||i===n.negationSymbol.front){if(!0!==n.allowMinus)return!1;var c=!1,p=d("+",r),h=d("-",r);return-1!==p&&(c=[p,h]),!1!==c?{remove:c,caret:u-n.negationSymbol.back.length}:{insert:[{pos:f.call(this,"+",r),c:n.negationSymbol.front,fromIsValid:!0},{pos:f.call(this,"-",r),c:n.negationSymbol.back,fromIsValid:void 0}],caret:u+n.negationSymbol.back.length}}if(i===n.groupSeparator)return{caret:u};if(l)return!0;if(-1!==s&&!0===n._radixDance&&!1===a&&i===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||parseInt(n.digits)>0)&&s!==t)return{caret:n._radixDance&&t===s-1?s+1:s};if(!1===n.__financeInput)if(a){if(n.digitsOptional)return{rewritePosition:o.end};if(!n.digitsOptional){if(o.begin>s&&o.end<=s)return i===n.radixPoint?{insert:{pos:s+1,c:"0",fromIsValid:!0},rewritePosition:s}:{rewritePosition:s+1};if(o.begin<s)return{rewritePosition:o.begin-1}}}else if(!n.showMaskOnHover&&!n.showMaskOnFocus&&!n.digitsOptional&&n.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:s};return{rewritePosition:t}},postValidation:function(e,t,i,a,n,r,o){if(!1===a)return a;if(o)return!0;if(null!==n.min||null!==n.max){var l=n.onUnMask(e.slice().reverse().join(""),void 0,s.extend({},n,{unmaskAsNumber:!0}));if(null!==n.min&&l<n.min&&(l.toString().length>n.min.toString().length||l<0))return!1;if(null!==n.max&&l>n.max)return!!n.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:c(n.max.toString().replace(".",n.radixPoint).split(""),n.digits,n).reverse()}}return a},onUnMask:function(e,t,i){if(""===t&&!0===i.nullable)return t;var a=e.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp((0,r.default)(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(a=a.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==a.indexOf(i.radixPoint)&&(a=a.replace(r.default.call(this,i.radixPoint),".")),a=(a=a.replace(new RegExp("^"+(0,r.default)(i.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(i.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,t){var i=(t.numericInput?e.slice().reverse():e).join("");return i=(i=(i=(i=(i=i.replace(new RegExp("^"+(0,r.default)(t.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp((0,r.default)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(i=i.replace((0,r.default)(t.radixPoint),".")),isFinite(i)},onBeforeMask:function(e,t){var i=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===i||(e=e.toString().replace(".",i));var a="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,n=e.split(i),o=n[0].replace(/[^\-0-9]/g,""),l=n.length>1?n[1].replace(/[^0-9]/g,""):"",s=n.length>1;e=o+(""!==l?i+l:l);var u=0;if(""!==i&&(u=t.digitsOptional?t.digits<l.length?t.digits:l.length:t.digits,""!==l||!t.digitsOptional)){var f=Math.pow(10,u||1);e=e.replace((0,r.default)(i),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*f)/f).toFixed(u)),e=e.toString().replace(".",i)}if(0===t.digits&&-1!==e.indexOf(i)&&(e=e.substring(0,e.indexOf(i))),null!==t.min||null!==t.max){var d=e.toString().replace(i,".");null!==t.min&&d<t.min?e=t.min.toString().replace(".",i):null!==t.max&&d>t.max&&(e=t.max.toString().replace(".",i))}return a&&"-"!==e.charAt(0)&&(e="-"+e),c(e.toString().split(""),u,t,s).join("")},onBeforeWrite:function(e,t,i,a){function n(e,t){if(!1!==a.__financeInput||t){var i=e.indexOf(a.radixPoint);-1!==i&&e.splice(i,1)}if(""!==a.groupSeparator)for(;-1!==(i=e.indexOf(a.groupSeparator));)e.splice(i,1);return e}var o,l;if(a.stripLeadingZeroes&&(l=function(e,t){var i=new RegExp("(^"+(""!==t.negationSymbol.front?(0,r.default)(t.negationSymbol.front)+"?":"")+(0,r.default)(t.prefix)+")(.*)("+(0,r.default)(t.suffix)+(""!=t.negationSymbol.back?(0,r.default)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),a=i?i[2]:"",n=!1;return a&&(a=a.split(t.radixPoint.charAt(0))[0],n=new RegExp("^[0"+t.groupSeparator+"]*").exec(a)),!(!n||!(n[0].length>1||n[0].length>0&&n[0].length<a.length))&&n}(t,a)))for(var u=t.join("").lastIndexOf(l[0].split("").reverse().join(""))-(l[0]==l.input?0:1),f=l[0]==l.input?1:0,d=l[0].length-f;d>0;d--)delete this.maskset.validPositions[u+d],delete t[u+d];if(e)switch(e.type){case"blur":case"checkval":if(null!==a.min){var p=a.onUnMask(t.slice().reverse().join(""),void 0,s.extend({},a,{unmaskAsNumber:!0}));if(null!==a.min&&p<a.min)return{refreshFromBuffer:!0,buffer:c(a.min.toString().replace(".",a.radixPoint).split(""),a.digits,a).reverse()}}if(t[t.length-1]===a.negationSymbol.front){var h=new RegExp("(^"+(""!=a.negationSymbol.front?(0,r.default)(a.negationSymbol.front)+"?":"")+(0,r.default)(a.prefix)+")(.*)("+(0,r.default)(a.suffix)+(""!=a.negationSymbol.back?(0,r.default)(a.negationSymbol.back)+"?":"")+"$)").exec(n(t.slice(),!0).reverse().join(""));0==(h?h[2]:"")&&(o={refreshFromBuffer:!0,buffer:[0]})}else if(""!==a.radixPoint){t.indexOf(a.radixPoint)===a.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+a.suffix.length):(t.splice(0,1+a.suffix.length),o={refreshFromBuffer:!0,buffer:n(t)}))}if(a.enforceDigitsOnBlur){var v=(o=o||{})&&o.buffer||t.slice().reverse();o.refreshFromBuffer=!0,o.buffer=c(v,a.digits,a,!0).reverse()}}return o},onKeyDown:function(e,t,i,a){var r,o,l=s(this),u=String.fromCharCode(e.keyCode).toLowerCase();if((o=a.shortcuts&&a.shortcuts[u])&&o.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(o)),l.trigger("setvalue"),!1;if(e.ctrlKey)switch(e.keyCode){case n.default.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(a.step)),l.trigger("setvalue"),!1;case n.default.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(a.step)),l.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===n.default.DELETE||e.keyCode===n.default.BACKSPACE||e.keyCode===n.default.BACKSPACE_SAFARI)&&i.begin!==t.length){if(t[e.keyCode===n.default.DELETE?i.begin-1:i.end]===a.negationSymbol.front)return r=t.slice().reverse(),""!==a.negationSymbol.front&&r.shift(),""!==a.negationSymbol.back&&r.pop(),l.trigger("setvalue",[r.join(""),i.begin]),!1;if(!0===a._radixDance){var f=t.indexOf(a.radixPoint);if(a.digitsOptional){if(0===f)return(r=t.slice().reverse()).pop(),l.trigger("setvalue",[r.join(""),i.begin>=r.length?r.length:i.begin]),!1}else if(-1!==f&&(i.begin<f||i.end<f||e.keyCode===n.default.DELETE&&i.begin===f))return i.begin!==i.end||e.keyCode!==n.default.BACKSPACE&&e.keyCode!==n.default.BACKSPACE_SAFARI||i.begin++,(r=t.slice().reverse()).splice(r.length-i.begin,i.begin-i.end+1),r=c(r,a.digits,a).join(""),l.trigger("setvalue",[r,i.begin>=r.length?f+1:i.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},9380:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=i(8741))&&a.__esModule?a:{default:a}).default?window:{};t.default=n},7760:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=function(e,t){var i=e?e.inputmask:this;if(s.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){var a=o.getBuffer.call(i).slice(),n=e.inputmask._valueGet();if(n!==t){var r=o.getLastValidPosition.call(i);-1===r&&n===o.getBufferTemplate.call(i).join("")?a=[]:-1!==r&&f.call(i,a),p(e,a)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))},t.applyInputValue=c,t.checkVal=d,t.clearOptionalTail=f,t.unmaskedvalue=function(e){var t=e?e.inputmask:this,i=t.opts,a=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&c(e,e.inputmask._valueGet(!0))}var n=[],r=a.validPositions;for(var l in r)r[l]&&r[l].match&&(1!=r[l].match.static||Array.isArray(a.metadata)&&!0!==r[l].generatedInput)&&n.push(r[l].input);var s=0===n.length?"":(t.isRTL?n.reverse():n).join("");if("function"==typeof i.onUnMask){var u=(t.isRTL?o.getBuffer.call(t).slice().reverse():o.getBuffer.call(t)).join("");s=i.onUnMask.call(t,u,s,i)}return s},t.writeBuffer=p;var a,n=(a=i(5581))&&a.__esModule?a:{default:a},r=i(4713),o=i(8711),l=i(7215),s=i(9845),u=i(6030);function c(e,t){var i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,"function"==typeof a.onBeforeMask&&(t=a.onBeforeMask.call(i,t,a)||t),d(e,!0,!1,t=t.toString().split("")),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===o.getBufferTemplate.call(i).join("")&&-1===o.getLastValidPosition.call(i)&&e.inputmask._valueSet("")}function f(e){e.length=0;for(var t,i=r.getMaskTemplate.call(this,!0,0,!0,void 0,!0);void 0!==(t=i.shift());)e.push(t);return e}function d(e,t,i,a,n){var s=e?e.inputmask:this,c=s.maskset,f=s.opts,d=s.dependencyLib,h=a.slice(),v="",m=-1,g=void 0,k=f.skipOptionalPartCharacter;f.skipOptionalPartCharacter="",o.resetMaskSet.call(s),c.tests={},m=f.radixPoint?o.determineNewCaretPosition.call(s,{begin:0,end:0},!1,!1===f.__financeInput?"radixFocus":void 0).begin:0,c.p=m,s.caretPos={begin:m};var y=[],b=s.caretPos;if(h.forEach((function(e,t){if(void 0!==e){var a=new d.Event("_checkval");a.keyCode=e.toString().charCodeAt(0),v+=e;var n=o.getLastValidPosition.call(s,void 0,!0);!function(e,t){for(var i=r.getMaskTemplate.call(s,!0,0).slice(e,o.seekNext.call(s,e,!1,!1)).join("").replace(/'/g,""),a=i.indexOf(t);a>0&&" "===i[a-1];)a--;var n=0===a&&!o.isMask.call(s,e)&&(r.getTest.call(s,e).match.nativeDef===t.charAt(0)||!0===r.getTest.call(s,e).match.static&&r.getTest.call(s,e).match.nativeDef==="'"+t.charAt(0)||" "===r.getTest.call(s,e).match.nativeDef&&(r.getTest.call(s,e+1).match.nativeDef===t.charAt(0)||!0===r.getTest.call(s,e+1).match.static&&r.getTest.call(s,e+1).match.nativeDef==="'"+t.charAt(0)));if(!n&&a>0&&!o.isMask.call(s,e,!1,!0)){var l=o.seekNext.call(s,e);s.caretPos.begin<l&&(s.caretPos={begin:l})}return n}(m,v)?(g=u.EventHandlers.keypressEvent.call(s,a,!0,!1,i,s.caretPos.begin))&&(m=s.caretPos.begin+1,v=""):g=u.EventHandlers.keypressEvent.call(s,a,!0,!1,i,n+1),g?(void 0!==g.pos&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static&&void 0===c.validPositions[g.pos].alternation&&(y.push(g.pos),s.isRTL||(g.forwardPosition=g.pos+1)),p.call(s,void 0,o.getBuffer.call(s),g.forwardPosition,a,!1),s.caretPos={begin:g.forwardPosition,end:g.forwardPosition},b=s.caretPos):void 0===c.validPositions[t]&&h[t]===r.getPlaceholder.call(s,t)&&o.isMask.call(s,t,!0)?s.caretPos.begin++:s.caretPos=b}})),y.length>0){var x,P,E=o.seekNext.call(s,-1,void 0,!1);if(!l.isComplete.call(s,o.getBuffer.call(s))&&y.length<=E||l.isComplete.call(s,o.getBuffer.call(s))&&y.length>0&&y.length!==E&&0===y[0])for(var S=E;void 0!==(x=y.shift());){var _=new d.Event("_checkval");if((P=c.validPositions[x]).generatedInput=!0,_.keyCode=P.input.charCodeAt(0),(g=u.EventHandlers.keypressEvent.call(s,_,!0,!1,i,S))&&void 0!==g.pos&&g.pos!==x&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static)y.push(g.pos);else if(!g)break;S++}}t&&p.call(s,e,o.getBuffer.call(s),g?g.forwardPosition:s.caretPos.begin,n||new d.Event("checkval"),n&&("input"===n.type&&s.undoValue!==o.getBuffer.call(s).join("")||"paste"===n.type)),f.skipOptionalPartCharacter=k}function p(e,t,i,a,r){var s=e?e.inputmask:this,u=s.opts,c=s.dependencyLib;if(a&&"function"==typeof u.onBeforeWrite){var f=u.onBeforeWrite.call(s,a,t,i,u);if(f){if(f.refreshFromBuffer){var d=f.refreshFromBuffer;l.refreshFromBuffer.call(s,!0===d?d:d.start,d.end,f.buffer||t),t=o.getBuffer.call(s,!0)}void 0!==i&&(i=void 0!==f.caret?f.caret:i)}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===i||void 0!==a&&"blur"===a.type||o.caret.call(s,e,i,void 0,void 0,void 0!==a&&"keydown"===a.type&&(a.keyCode===n.default.DELETE||a.keyCode===n.default.BACKSPACE)),!0===r)){var p=c(e),h=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,p.trigger("input"),setTimeout((function(){h===o.getBufferTemplate.call(s).join("")?p.trigger("cleared"):!0===l.isComplete.call(s,t)&&p.trigger("complete")}),0)}}},2394:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(7149),i(3194);var a=i(157),n=m(i(4963)),r=m(i(9380)),o=i(2391),l=i(4713),s=i(8711),u=i(7215),c=i(7760),f=i(9716),d=m(i(7392)),p=m(i(3976)),h=m(i(8741));function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e){return e&&e.__esModule?e:{default:e}}var g=r.default.document,k="_inputmask_opts";function y(e,t,i){if(h.default){if(!(this instanceof y))return new y(e,t,i);this.dependencyLib=n.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==i&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=n.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},b(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0,this.isComposing=!1}}function b(e,t,i){var a=y.prototype.aliases[e];return a?(a.alias&&b(a.alias,void 0,i),n.default.extend(!0,i,a),n.default.extend(!0,i,t),!0):(null===i.mask&&(i.mask=e),!1)}y.prototype={dataAttribute:"data-inputmask",defaults:p.default,definitions:d.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){var t=this;return"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:Array.from(e)).forEach((function(e,i){var l=n.default.extend(!0,{},t.opts);if(function(e,t,i,a){function o(t,n){var o=""===a?t:a+"-"+t;null!==(n=void 0!==n?n:e.getAttribute(o))&&("string"==typeof n&&(0===t.indexOf("on")?n=r.default[n]:"false"===n?n=!1:"true"===n&&(n=!0)),i[t]=n)}if(!0===t.importDataAttributes){var l,s,u,c,f=e.getAttribute(a);if(f&&""!==f&&(f=f.replace(/'/g,'"'),s=JSON.parse("{"+f+"}")),s)for(c in u=void 0,s)if("alias"===c.toLowerCase()){u=s[c];break}for(l in o("alias",u),i.alias&&b(i.alias,i,t),t){if(s)for(c in u=void 0,s)if(c.toLowerCase()===l.toLowerCase()){u=s[c];break}o(l,u)}}n.default.extend(!0,t,i),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right");("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0);return Object.keys(i).length}(e,l,n.default.extend(!0,{},t.userOptions),t.dataAttribute)){var s=(0,o.generateMaskSet)(l,t.noMasksCache);void 0!==s&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new y(void 0,void 0,!0),e.inputmask.opts=l,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=n.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,n.default)(e),e.inputmask.maskset=s,n.default.data(e,k,t.userOptions),a.mask.call(e.inputmask))}})),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===v(e)?(n.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,s.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){n.default.data(this.el,k,null);var e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e!==s.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),f.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value")&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0}):g.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),s.getBufferTemplate.call(this).join("")},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),u.isComplete.call(this,s.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var e=l.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach((function(t){return t.mask!==e||(e=t,!1)})),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,t)}else e=this.isRTL?s.getBuffer.call(this).slice().reverse().join(""):s.getBuffer.call(this).join("");for(var i=s.getBuffer.call(this),a=s.determineLastRequiredPosition.call(this),n=i.length-1;n>a&&!s.isMask.call(this,n);n--);return i.splice(a,n+1-a),u.isComplete.call(this,i)&&e===(this.isRTL?s.getBuffer.call(this).slice().reverse().join(""):s.getBuffer.call(this).join(""))},format:function(e,t){this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache);var i=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,i);var a=this.isRTL?s.getBuffer.call(this).slice().reverse().join(""):s.getBuffer.call(this).join("");return t?{value:a,metadata:this.getmetadata()}:a},setValue:function(e){this.el&&(0,n.default)(this.el).trigger("setvalue",[e])},analyseMask:o.analyseMask},y.extendDefaults=function(e){n.default.extend(!0,y.prototype.defaults,e)},y.extendDefinitions=function(e){n.default.extend(!0,y.prototype.definitions,e)},y.extendAliases=function(e){n.default.extend(!0,y.prototype.aliases,e)},y.format=function(e,t,i){return y(t).format(e,i)},y.unmask=function(e,t){return y(t).unmaskedvalue(e)},y.isValid=function(e,t){return y(t).isValid(e)},y.remove=function(e){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask&&e.inputmask.remove()}))},y.setValue=function(e,t){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask?e.inputmask.setValue(t):(0,n.default)(e).trigger("setvalue",[t])}))},y.dependencyLib=n.default,r.default.Inputmask=y;var x=y;t.default=x},5296:function(e,t,i){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var n=h(i(9380)),r=h(i(2394)),o=h(i(8741));function l(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return c(e,arguments,p(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),d(a,e)},u(e)}function c(e,t,i){return c=f()?Reflect.construct:function(e,t,i){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a));return i&&d(n,i.prototype),n},c.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){return e&&e.__esModule?e:{default:e}}var v=n.default.document;if(o.default&&v&&v.head&&v.head.attachShadow&&n.default.customElements&&void 0===n.default.customElements.get("input-mask")){var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(c,e);var t,i,a,n,o,u=(t=c,i=f(),function(){var e,a=p(t);if(i){var n=p(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var t=(e=u.call(this)).getAttributeNames(),i=e.attachShadow({mode:"closed"}),a=v.createElement("input");for(var n in a.type="text",i.appendChild(a),t)Object.prototype.hasOwnProperty.call(t,n)&&a.setAttribute(t[n],e.getAttribute(t[n]));var o=new r.default;return o.dataAttribute="",o.mask(a),a.inputmask.shadowRoot=i,e}return a=c,n&&l(a.prototype,n),o&&l(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a}(u(HTMLElement));n.default.customElements.define("input-mask",m)}},2391:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=function(e,t,i){var a,o,l,s,u,c,f=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,d=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,p=!1,h=new n.default,v=[],m=[],g=!1;function k(e,a,n){n=void 0!==n?n:e.matches.length;var o=e.matches[n-1];if(t)0===a.indexOf("[")||p&&/\\d|\\s|\\w/i.test(a)||"."===a?e.matches.splice(n++,0,{fn:new RegExp(a,i.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a,casing:null,def:a,placeholder:void 0,nativeDef:a}):(p&&(a=a[a.length-1]),a.split("").forEach((function(t,a){o=e.matches[n-1],e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||t)?new RegExp("["+(i.staticDefinitionSymbol||t)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==t&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||t,placeholder:void 0!==i.staticDefinitionSymbol?t:void 0,nativeDef:(p?"'":"")+t})}))),p=!1;else{var l=i.definitions&&i.definitions[a]||i.usePrototypeDefinitions&&r.default.prototype.definitions[a];l&&!p?e.matches.splice(n++,0,{fn:l.validator?"string"==typeof l.validator?new RegExp(l.validator,i.casing?"i":""):new function(){this.test=l.validator}:new RegExp("."),static:l.static||!1,optionality:l.optional||!1,newBlockMarker:void 0===o||l.optional?"master":o.def!==(l.definitionSymbol||a),casing:l.casing,def:l.definitionSymbol||a,placeholder:l.placeholder,nativeDef:a,generated:l.generated}):(e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||a)?new RegExp("["+(i.staticDefinitionSymbol||a)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||a,placeholder:void 0!==i.staticDefinitionSymbol?a:void 0,nativeDef:(p?"'":"")+a}),p=!1)}}function y(){if(v.length>0){if(k(s=v[v.length-1],o),s.isAlternator){u=v.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup&&(u.matches[e].isGroup=!1);v.length>0?(s=v[v.length-1]).matches.push(u):h.matches.push(u)}}else k(h,o)}function b(e){var t=new n.default(!0);return t.openGroup=!1,t.matches=e,t}function x(){if((l=v.pop()).openGroup=!1,void 0!==l)if(v.length>0){if((s=v[v.length-1]).matches.push(l),s.isAlternator){for(var e=(u=v.pop()).matches[0].matches?u.matches[0].matches.length:1,t=0;t<u.matches.length;t++)u.matches[t].isGroup=!1,u.matches[t].alternatorGroup=!1,null===i.keepStatic&&e<(u.matches[t].matches?u.matches[t].matches.length:1)&&(i.keepStatic=!0),e=u.matches[t].matches?u.matches[t].matches.length:1;v.length>0?(s=v[v.length-1]).matches.push(u):h.matches.push(u)}}else h.matches.push(l);else y()}function P(e){var t=e.pop();return t.isQuantifier&&(t=b([e.pop(),t])),t}t&&(i.optionalmarker[0]=void 0,i.optionalmarker[1]=void 0);for(;a=t?d.exec(e):f.exec(e);){if(o=a[0],t){switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}";break;case"|":if(0===v.length){var E=b(h.matches);E.openGroup=!0,v.push(E),h.matches=[],g=!0}}if("\\d"===o)o="[0-9]"}if(p)y();else switch(o.charAt(0)){case"$":case"^":t||y();break;case i.escapeChar:p=!0,t&&y();break;case i.optionalmarker[1]:case i.groupmarker[1]:x();break;case i.optionalmarker[0]:v.push(new n.default(!1,!0));break;case i.groupmarker[0]:v.push(new n.default(!0));break;case i.quantifiermarker[0]:var S=new n.default(!1,!1,!0),_=(o=o.replace(/[{}?]/g,"")).split("|"),w=_[0].split(","),M=isNaN(w[0])?w[0]:parseInt(w[0]),O=1===w.length?M:isNaN(w[1])?w[1]:parseInt(w[1]),T=isNaN(_[1])?_[1]:parseInt(_[1]);"*"!==M&&"+"!==M||(M="*"===O?0:1),S.quantifier={min:M,max:O,jit:T};var C=v.length>0?v[v.length-1].matches:h.matches;if((a=C.pop()).isAlternator){C.push(a),C=a.matches;var A=new n.default(!0),D=C.pop();C.push(A),C=A.matches,a=D}a.isGroup||(a=b([a])),C.push(a),C.push(S);break;case i.alternatormarker:if(v.length>0){var j=(s=v[v.length-1]).matches[s.matches.length-1];c=s.openGroup&&(void 0===j.matches||!1===j.isGroup&&!1===j.isAlternator)?v.pop():P(s.matches)}else c=P(h.matches);if(c.isAlternator)v.push(c);else if(c.alternatorGroup?(u=v.pop(),c.alternatorGroup=!1):u=new n.default(!1,!1,!1,!0),u.matches.push(c),v.push(u),c.openGroup){c.openGroup=!1;var B=new n.default(!0);B.alternatorGroup=!0,v.push(B)}break;default:y()}}g&&x();for(;v.length>0;)l=v.pop(),h.matches.push(l);h.matches.length>0&&(!function e(a){a&&a.matches&&a.matches.forEach((function(n,r){var o=a.matches[r+1];(void 0===o||void 0===o.matches||!1===o.isQuantifier)&&n&&n.isGroup&&(n.isGroup=!1,t||(k(n,i.groupmarker[0],0),!0!==n.openGroup&&k(n,i.groupmarker[1]))),e(n)}))}(h),m.push(h));(i.numericInput||i.isRTL)&&function e(t){for(var a in t.matches=t.matches.reverse(),t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,a)){var n=parseInt(a);if(t.matches[a].isQuantifier&&t.matches[n+1]&&t.matches[n+1].isGroup){var r=t.matches[a];t.matches.splice(a,1),t.matches.splice(n+1,0,r)}void 0!==t.matches[a].matches?t.matches[a]=e(t.matches[a]):t.matches[a]=((o=t.matches[a])===i.optionalmarker[0]?o=i.optionalmarker[1]:o===i.optionalmarker[1]?o=i.optionalmarker[0]:o===i.groupmarker[0]?o=i.groupmarker[1]:o===i.groupmarker[1]&&(o=i.groupmarker[0]),o)}var o;return t}(m[0]);return m},t.generateMaskSet=function(e,t){var i;function n(e,i,n){var o,l,s=!1;if(null!==e&&""!==e||((s=null!==n.regex)?e=(e=n.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,e=".*")),1===e.length&&!1===n.greedy&&0!==n.repeat&&(n.placeholder=""),n.repeat>0||"*"===n.repeat||"+"===n.repeat){var u="*"===n.repeat?0:"+"===n.repeat?1:n.repeat;e=n.groupmarker[0]+e+n.groupmarker[1]+n.quantifiermarker[0]+u+","+n.repeat+n.quantifiermarker[1]}return l=s?"regex_"+n.regex:n.numericInput?e.split("").reverse().join(""):e,null!==n.keepStatic&&(l="ks_"+n.keepStatic+l),void 0===r.default.prototype.masksCache[l]||!0===t?(o={mask:e,maskToken:r.default.prototype.analyseMask(e,s,n),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:i,maskLength:void 0,jitOffset:{}},!0!==t&&(r.default.prototype.masksCache[l]=o,o=a.default.extend(!0,{},r.default.prototype.masksCache[l]))):o=a.default.extend(!0,{},r.default.prototype.masksCache[l]),o}"function"==typeof e.mask&&(e.mask=e.mask(e));if(Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);var o=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach((function(t){o.length>1&&(o+=e.alternatormarker),void 0!==t.mask&&"function"!=typeof t.mask?o+=t.mask:o+=t})),n(o+=e.groupmarker[1],e.mask,e)}e.mask=e.mask.pop()}i=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?n(e.mask.mask,e.mask,e):n(e.mask,e.mask,e);null===e.keepStatic&&(e.keepStatic=!1);return i};var a=o(i(4963)),n=o(i(9695)),r=o(i(2394));function o(e){return e&&e.__esModule?e:{default:e}}},157:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){var e=this,t=this.opts,i=this.el,a=this.dependencyLib;l.EventRuler.off(i);var f=function(t,i){"textarea"!==t.tagName.toLowerCase()&&i.ignorables.push(n.default.ENTER);var s=t.getAttribute("type"),u="input"===t.tagName.toLowerCase()&&i.supportsInputType.includes(s)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!u)if("input"===t.tagName.toLowerCase()){var c=document.createElement("input");c.setAttribute("type",s),u="text"===c.type,c=null}else u="partial";return!1!==u?function(t){var n,s;function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==r.getLastValidPosition.call(e)||!0!==i.nullable?(this.inputmask.shadowRoot||this.ownerDocument).activeElement===this&&i.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,r.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,r.getBuffer.call(e).slice())).join(""):n.call(this):"":n.call(this)}function c(e){s.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}if(!t.inputmask.__valueGet){if(!0!==i.noValuePatching){if(Object.getOwnPropertyDescriptor){var f=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;f&&f.get&&f.set?(n=f.get,s=f.set,Object.defineProperty(t,"value",{get:u,set:c,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(n=function(){return this.textContent},s=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:c,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(n=t.__lookupGetter__("value"),s=t.__lookupSetter__("value"),t.__defineGetter__("value",u),t.__defineSetter__("value",c));t.inputmask.__valueGet=n,t.inputmask.__valueSet=s}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?n.call(this.el).split("").reverse().join(""):n.call(this.el)},t.inputmask._valueSet=function(t,i){s.call(this.el,null==t?"":!0!==i&&e.isRTL?t.split("").reverse().join(""):t)},void 0===n&&(n=function(){return this.value},s=function(e){this.value=e},function(t){if(a.valHooks&&(void 0===a.valHooks[t]||!0!==a.valHooks[t].inputmaskpatch)){var n=a.valHooks[t]&&a.valHooks[t].get?a.valHooks[t].get:function(e){return e.value},l=a.valHooks[t]&&a.valHooks[t].set?a.valHooks[t].set:function(e,t){return e.value=t,e};a.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();var a=n(t);return-1!==r.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==i.nullable?a:""}return n(t)},set:function(e,t){var i=l(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),i},inputmaskpatch:!0}}}(t.type),function(t){l.EventRuler.on(t,"mouseenter",(function(){var t=this.inputmask._valueGet(!0);t!==(e.isRTL?r.getBuffer.call(e).reverse():r.getBuffer.call(e)).join("")&&(0,o.applyInputValue)(this,t)}))}(t))}}(t):t.inputmask=void 0,u}(i,t);if(!1!==f){e.originalPlaceholder=i.placeholder,e.maxLength=void 0!==i?i.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in i&&null===i.getAttribute("inputmode")&&(i.inputMode=t.inputmode,i.setAttribute("inputmode",t.inputmode)),!0===f&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(i.autocomplete),s.iphone&&(t.insertModeVisual=!1),l.EventRuler.on(i,"submit",c.EventHandlers.submitEvent),l.EventRuler.on(i,"reset",c.EventHandlers.resetEvent),l.EventRuler.on(i,"blur",c.EventHandlers.blurEvent),l.EventRuler.on(i,"focus",c.EventHandlers.focusEvent),l.EventRuler.on(i,"invalid",c.EventHandlers.invalidEvent),l.EventRuler.on(i,"click",c.EventHandlers.clickEvent),l.EventRuler.on(i,"mouseleave",c.EventHandlers.mouseleaveEvent),l.EventRuler.on(i,"mouseenter",c.EventHandlers.mouseenterEvent),l.EventRuler.on(i,"paste",c.EventHandlers.pasteEvent),l.EventRuler.on(i,"cut",c.EventHandlers.cutEvent),l.EventRuler.on(i,"complete",t.oncomplete),l.EventRuler.on(i,"incomplete",t.onincomplete),l.EventRuler.on(i,"cleared",t.oncleared),!0!==t.inputEventOnly&&(l.EventRuler.on(i,"keydown",c.EventHandlers.keydownEvent),l.EventRuler.on(i,"keypress",c.EventHandlers.keypressEvent),l.EventRuler.on(i,"keyup",c.EventHandlers.keyupEvent)),(s.mobile||t.inputEventOnly)&&i.removeAttribute("maxLength"),l.EventRuler.on(i,"input",c.EventHandlers.inputFallBackEvent),l.EventRuler.on(i,"compositionend",c.EventHandlers.compositionendEvent)),l.EventRuler.on(i,"setvalue",c.EventHandlers.setValueEvent),r.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);var d=(i.inputmask.shadowRoot||i.ownerDocument).activeElement;if(""!==i.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||d===i){(0,o.applyInputValue)(i,i.inputmask._valueGet(!0),t);var p=r.getBuffer.call(e).slice();!1===u.isComplete.call(e,p)&&t.clearIncomplete&&r.resetMaskSet.call(e),t.clearMaskOnLostFocus&&d!==i&&(-1===r.getLastValidPosition.call(e)?p=[]:o.clearOptionalTail.call(e,p)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&d===i||""!==i.inputmask._valueGet(!0))&&(0,o.writeBuffer)(i,p),d===i&&r.caret.call(e,i,r.seekNext.call(e,r.getLastValidPosition.call(e)))}}};var a,n=(a=i(5581))&&a.__esModule?a:{default:a},r=i(8711),o=i(7760),l=i(9716),s=i(9845),u=i(7215),c=i(6030)},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,a){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}},3194:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),a=i.length>>>0;if(0===a)return!1;for(var n=0|t,r=Math.max(n>=0?n:a-Math.abs(n),0);r<a;){if(i[r]===e)return!0;r++}return!1}})},7149:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===e("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype})},8711:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,i,a,n){var r,o=this,l=this.opts;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,i=e.selectionEnd):window.getSelection?(r=window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&r.commonAncestorContainer!==e||(t=r.startOffset,i=r.endOffset):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),t=0-r.duplicate().moveStart("character",-e.inputmask._valueGet().length),i=t+r.text.length),{begin:a?t:u.call(o,t),end:a?i:u.call(o,i)};if(Array.isArray(t)&&(i=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),void 0!==t.begin&&(i=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),"number"==typeof t){t=a?t:u.call(o,t),i="number"==typeof(i=a?i:u.call(o,i))?i:t;var s=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=s>e.scrollWidth?s:0,e.inputmask.caretPos={begin:t,end:i},l.insertModeVisual&&!1===l.insertMode&&t===i&&(n||i++),e===(e.inputmask.shadowRoot||e.ownerDocument).activeElement)if("setSelectionRange"in e)e.setSelectionRange(t,i);else if(window.getSelection){if(r=document.createRange(),void 0===e.firstChild||null===e.firstChild){var c=document.createTextNode("");e.appendChild(c)}r.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),r.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),r.collapse(!0);var f=window.getSelection();f.removeAllRanges(),f.addRange(r)}else e.createTextRange&&((r=e.createTextRange()).collapse(!0),r.moveEnd("character",i),r.moveStart("character",t),r.select())}},t.determineLastRequiredPosition=function(e){var t,i,r=this,l=this.maskset,s=this.dependencyLib,u=a.getMaskTemplate.call(r,!0,o.call(r),!0,!0),c=u.length,f=o.call(r),d={},p=l.validPositions[f],h=void 0!==p?p.locator.slice():void 0;for(t=f+1;t<u.length;t++)i=a.getTestTemplate.call(r,t,h,t-1),h=i.locator.slice(),d[t]=s.extend(!0,{},i);var v=p&&void 0!==p.alternation?p.locator[p.alternation]:void 0;for(t=c-1;t>f&&(((i=d[t]).match.optionality||i.match.optionalQuantifier&&i.match.newBlockMarker||v&&(v!==d[t].locator[p.alternation]&&1!=i.match.static||!0===i.match.static&&i.locator[p.alternation]&&n.checkAlternationMatch.call(r,i.locator[p.alternation].toString().split(","),v.toString().split(","))&&""!==a.getTests.call(r,t)[0].def))&&u[t]===a.getPlaceholder.call(r,t,i.match));t--)c--;return e?{l:c,def:d[c]?d[c].match:void 0}:c},t.determineNewCaretPosition=function(e,t,i){var n=this,u=this.maskset,c=this.opts;t&&(n.isRTL?e.end=e.begin:e.begin=e.end);if(e.begin===e.end){switch(i=i||c.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:r.call(n).length};break;case"ignore":e.end=e.begin=s.call(n,o.call(n));break;case"radixFocus":if(function(e){if(""!==c.radixPoint&&0!==c.digits){var t=u.validPositions;if(void 0===t[e]||t[e].input===a.getPlaceholder.call(n,e)){if(e<s.call(n,-1))return!0;var i=r.call(n).indexOf(c.radixPoint);if(-1!==i){for(var o in t)if(t[o]&&i<o&&t[o].input!==a.getPlaceholder.call(n,o))return!1;return!0}}}return!1}(e.begin)){var f=r.call(n).join("").indexOf(c.radixPoint);e.end=e.begin=c.numericInput?s.call(n,f):f;break}default:var d=e.begin,p=o.call(n,d,!0),h=s.call(n,-1!==p||l.call(n,0)?p:-1);if(d<=h)e.end=e.begin=l.call(n,d,!1,!0)?d:s.call(n,d);else{var v=u.validPositions[p],m=a.getTestTemplate.call(n,h,v?v.match.locator:void 0,v),g=a.getPlaceholder.call(n,h,m.match);if(""!==g&&r.call(n)[h]!==g&&!0!==m.match.optionalQuantifier&&!0!==m.match.newBlockMarker||!l.call(n,h,c.keepStatic,!0)&&m.match.def===g){var k=s.call(n,h);(d>=k||d===h)&&(h=k)}e.end=e.begin=h}}return e}},t.getBuffer=r,t.getBufferTemplate=function(){var e=this.maskset;void 0===e._buffer&&(e._buffer=a.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice()));return e._buffer},t.getLastValidPosition=o,t.isMask=l,t.resetMaskSet=function(e){var t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions={},t.p=0)},t.seekNext=s,t.seekPrevious=function(e,t){var i=this,n=e-1;if(e<=0)return 0;for(;n>0&&(!0===t&&(!0!==a.getTest.call(i,n).match.newBlockMarker||!l.call(i,n,void 0,!0))||!0!==t&&!l.call(i,n,void 0,!0));)n--;return n},t.translatePosition=u;var a=i(4713),n=i(7215);function r(e){var t=this.maskset;return void 0!==t.buffer&&!0!==e||(t.buffer=a.getMaskTemplate.call(this,!0,o.call(this),!0),void 0===t._buffer&&(t._buffer=t.buffer.slice())),t.buffer}function o(e,t,i){var a=this.maskset,n=-1,r=-1,o=i||a.validPositions;for(var l in void 0===e&&(e=-1),o){var s=parseInt(l);o[s]&&(t||!0!==o[s].generatedInput)&&(s<=e&&(n=s),s>=e&&(r=s))}return-1===n||n==e?r:-1==r||e-n<r-e?n:r}function l(e,t,i){var n=this,r=this.maskset,o=a.getTestTemplate.call(n,e).match;if(""===o.def&&(o=a.getTest.call(n,e).match),!0!==o.static)return o.fn;if(!0===i&&void 0!==r.validPositions[e]&&!0!==r.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(i){var l=a.getTests.call(n,e);return l.length>1+(""===l[l.length-1].match.def?1:0)}var s=a.determineTestTemplate.call(n,e,a.getTests.call(n,e)),u=a.getPlaceholder.call(n,e,s.match);return s.match.def!==u}return!1}function s(e,t,i){var n=this;void 0===i&&(i=!0);for(var r=e+1;""!==a.getTest.call(n,r).match.def&&(!0===t&&(!0!==a.getTest.call(n,r).match.newBlockMarker||!l.call(n,r,void 0,!0))||!0!==t&&!l.call(n,r,void 0,i));)r++;return r}function u(e){var t=this.opts,i=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!i||(e=Math.abs(this._valueGet().length-e)),e}},4713:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=u,t.getDecisionTaker=o,t.getMaskTemplate=function(e,t,i,a,n){var r=this,o=this.opts,c=this.maskset,f=o.greedy;n&&o.greedy&&(o.greedy=!1,r.maskset.tests={});t=t||0;var p,h,v,m,g=[],k=0;do{if(!0===e&&c.validPositions[k])v=n&&c.validPositions[k].match.optionality&&void 0===c.validPositions[k+1]&&(!0===c.validPositions[k].generatedInput||c.validPositions[k].input==o.skipOptionalPartCharacter&&k>0)?u.call(r,k,d.call(r,k,p,k-1)):c.validPositions[k],h=v.match,p=v.locator.slice(),g.push(!0===i?v.input:!1===i?h.nativeDef:l.call(r,k,h));else{v=s.call(r,k,p,k-1),h=v.match,p=v.locator.slice();var y=!0!==a&&(!1!==o.jitMasking?o.jitMasking:h.jit);(m=(m&&h.static&&h.def!==o.groupSeparator&&null===h.fn||c.validPositions[k-1]&&h.static&&h.def!==o.groupSeparator&&null===h.fn)&&c.tests[k]&&1===c.tests[k].length)||!1===y||void 0===y||"number"==typeof y&&isFinite(y)&&y>k?g.push(!1===i?h.nativeDef:l.call(r,k,h)):m=!1}k++}while(!0!==h.static||""!==h.def||t>k);""===g[g.length-1]&&g.pop();!1===i&&void 0!==c.maskLength||(c.maskLength=k-1);return o.greedy=f,g},t.getPlaceholder=l,t.getTest=c,t.getTestTemplate=s,t.getTests=d,t.isSubsetOf=f;var a,n=(a=i(2394))&&a.__esModule?a:{default:a};function r(e,t){var i=(null!=e.alternation?e.mloc[o(e)]:e.locator).join("");if(""!==i)for(;i.length<t;)i+="0";return i}function o(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),void 0!==t?t.toString():""}function l(e,t,i){var a=this.opts,n=this.maskset;if(void 0!==(t=t||c.call(this,e).match).placeholder||!0===i)return"function"==typeof t.placeholder?t.placeholder(a):t.placeholder;if(!0===t.static){if(e>-1&&void 0===n.validPositions[e]){var r,o=d.call(this,e),l=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var s=0;s<o.length;s++)if(""!==o[s].match.def&&!0!==o[s].match.optionality&&!0!==o[s].match.optionalQuantifier&&(!0===o[s].match.static||void 0===r||!1!==o[s].match.fn.test(r.match.def,n,e,!0,a))&&(l.push(o[s]),!0===o[s].match.static&&(r=o[s]),l.length>1&&/[0-9a-bA-Z]/.test(l[0].match.def)))return a.placeholder.charAt(e%a.placeholder.length)}return t.def}return a.placeholder.charAt(e%a.placeholder.length)}function s(e,t,i){return this.maskset.validPositions[e]||u.call(this,e,d.call(this,e,t?t.slice():t,i))}function u(e,t){var i=this.opts,a=function(e,t){var i=0,a=!1;t.forEach((function(e){e.match.optionality&&(0!==i&&i!==e.match.optionality&&(a=!0),(0===i||i>e.match.optionality)&&(i=e.match.optionality))})),i&&(0==e||1==t.length?i=0:a||(i=0));return i}(e,t);e=e>0?e-1:0;var n,o,l,s=r(c.call(this,e));i.greedy&&t.length>1&&""===t[t.length-1].match.def&&t.pop();for(var u=0;u<t.length;u++){var f=t[u];n=r(f,s.length);var d=Math.abs(n-s);(void 0===o||""!==n&&d<o||l&&!i.greedy&&l.match.optionality&&l.match.optionality-a>0&&"master"===l.match.newBlockMarker&&(!f.match.optionality||f.match.optionality-a<1||!f.match.newBlockMarker)||l&&!i.greedy&&l.match.optionalQuantifier&&!f.match.optionalQuantifier)&&(o=d,l=f)}return l}function c(e,t){var i=this.maskset;return i.validPositions[e]?i.validPositions[e]:(t||d.call(this,e))[0]}function f(e,t,i){function a(e){for(var t,i=[],a=-1,n=0,r=e.length;n<r;n++)if("-"===e.charAt(n))for(t=e.charCodeAt(n+1);++a<t;)i.push(String.fromCharCode(a));else a=e.charCodeAt(n),i.push(e.charAt(n));return i.join("")}return e.match.def===t.match.nativeDef||!(!(i.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&-1!==a(t.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g,"")))}function d(e,t,i){var a,r,o=this,l=this.dependencyLib,s=this.maskset,c=this.opts,d=this.el,p=s.maskToken,h=t?i:0,v=t?t.slice():[0],m=[],g=!1,k=t?t.join(""):"";function y(t,i,r,o){function l(r,o,u){function p(e,t){var i=0===t.matches.indexOf(e);return i||t.matches.every((function(a,n){return!0===a.isQuantifier?i=p(e,t.matches[n-1]):Object.prototype.hasOwnProperty.call(a,"matches")&&(i=p(e,a)),!i})),i}function v(e,t,i){var a,n;if((s.tests[e]||s.validPositions[e])&&(s.tests[e]||[s.validPositions[e]]).every((function(e,r){if(e.mloc[t])return a=e,!1;var o=void 0!==i?i:e.alternation,l=void 0!==e.locator[o]?e.locator[o].toString().indexOf(t):-1;return(void 0===n||l<n)&&-1!==l&&(a=e,n=l),!0})),a){var r=a.locator[a.alternation];return(a.mloc[t]||a.mloc[r]||a.locator).slice((void 0!==i?i:a.alternation)+1)}return void 0!==i?v(e,t):void 0}function b(e,t){var i=e.alternation,a=void 0===t||i===t.alternation&&-1===e.locator[i].toString().indexOf(t.locator[i]);if(!a&&i>t.alternation)for(var n=t.alternation;n<i;n++)if(e.locator[n]!==t.locator[n]){i=n,a=!0;break}if(a){e.mloc=e.mloc||{};var r=e.locator[i];if(void 0!==r){if("string"==typeof r&&(r=r.split(",")[0]),void 0===e.mloc[r]&&(e.mloc[r]=e.locator.slice()),void 0!==t){for(var o in t.mloc)"string"==typeof o&&(o=o.split(",")[0]),void 0===e.mloc[o]&&(e.mloc[o]=t.mloc[o]);e.locator[i]=Object.keys(e.mloc).join(",")}return!0}e.alternation=void 0}return!1}function x(e,t){if(e.locator.length!==t.locator.length)return!1;for(var i=e.alternation+1;i<e.locator.length;i++)if(e.locator[i]!==t.locator[i])return!1;return!0}if(h>e+c._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+s.mask;if(h===e&&void 0===r.matches){if(m.push({match:r,locator:o.reverse(),cd:k,mloc:{}}),!r.optionality||void 0!==u||!(c.definitions&&c.definitions[r.nativeDef]&&c.definitions[r.nativeDef].optional||n.default.prototype.definitions[r.nativeDef]&&n.default.prototype.definitions[r.nativeDef].optional))return!0;g=!0,h=e}else if(void 0!==r.matches){if(r.isGroup&&u!==r){if(r=l(t.matches[t.matches.indexOf(r)+1],o,u))return!0}else if(r.isOptional){var P=r,E=m.length;if(r=y(r,i,o,u)){if(m.forEach((function(e,t){t>=E&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)})),a=m[m.length-1].match,void 0!==u||!p(a,P))return!0;g=!0,h=e}}else if(r.isAlternator){var S,_=r,w=[],M=m.slice(),O=o.length,T=!1,C=i.length>0?i.shift():-1;if(-1===C||"string"==typeof C){var A,D=h,j=i.slice(),B=[];if("string"==typeof C)B=C.split(",");else for(A=0;A<_.matches.length;A++)B.push(A.toString());if(void 0!==s.excludes[e]){for(var R=B.slice(),L=0,I=s.excludes[e].length;L<I;L++){var F=s.excludes[e][L].toString().split(":");o.length==F[1]&&B.splice(B.indexOf(F[0]),1)}0===B.length&&(delete s.excludes[e],B=R)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(B=B.slice(0,1));for(var N=0;N<B.length;N++){A=parseInt(B[N]),m=[],i="string"==typeof C&&v(h,A,O)||j.slice();var V=_.matches[A];if(V&&l(V,[A].concat(o),u))r=!0;else if(0===N&&(T=!0),V&&V.matches&&V.matches.length>_.matches[0].matches.length)break;S=m.slice(),h=D,m=[];for(var G=0;G<S.length;G++){var H=S[G],K=!1;H.match.jit=H.match.jit||T,H.alternation=H.alternation||O,b(H);for(var U=0;U<w.length;U++){var $=w[U];if("string"!=typeof C||void 0!==H.alternation&&B.includes(H.locator[H.alternation].toString())){if(H.match.nativeDef===$.match.nativeDef){K=!0,b($,H);break}if(f(H,$,c)){b(H,$)&&(K=!0,w.splice(w.indexOf($),0,H));break}if(f($,H,c)){b($,H);break}if(Z=$,!0===(Q=H).match.static&&!0!==Z.match.static&&Z.match.fn.test(Q.match.def,s,e,!1,c,!1)){x(H,$)||void 0!==d.inputmask.userOptions.keepStatic?b(H,$)&&(K=!0,w.splice(w.indexOf($),0,H)):c.keepStatic=!0;break}}}K||w.push(H)}}m=M.concat(w),h=e,g=m.length>0,r=w.length>0,i=j.slice()}else r=l(_.matches[C]||t.matches[C],[C].concat(o),u);if(r)return!0}else if(r.isQuantifier&&u!==t.matches[t.matches.indexOf(r)-1])for(var q=r,z=i.length>0?i.shift():0;z<(isNaN(q.quantifier.max)?z+1:q.quantifier.max)&&h<=e;z++){var W=t.matches[t.matches.indexOf(q)-1];if(r=l(W,[z].concat(o),W)){if((a=m[m.length-1].match).optionalQuantifier=z>=q.quantifier.min,a.jit=(z+1)*(W.matches.indexOf(a)+1)>q.quantifier.jit,a.optionalQuantifier&&p(a,W)){g=!0,h=e;break}return a.jit&&(s.jitOffset[e]=W.matches.length-W.matches.indexOf(a)),!0}}else if(r=y(r,i,o,u))return!0}else h++;var Q,Z}for(var u=i.length>0?i.shift():0;u<t.matches.length;u++)if(!0!==t.matches[u].isQuantifier){var p=l(t.matches[u],[u].concat(r),o);if(p&&h===e)return p;if(h>e)break}}if(e>-1){if(void 0===t){for(var b,x=e-1;void 0===(b=s.validPositions[x]||s.tests[x])&&x>-1;)x--;void 0!==b&&x>-1&&(v=function(e,t){var i,a=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===c.keepStatic?0===(a=u.call(o,e,t.slice()).locator.slice()).length&&(a=t[0].locator.slice()):t.forEach((function(e){""!==e.def&&(0===a.length?(i=e.alternation,a=e.locator.slice()):e.locator[i]&&-1===a[i].toString().indexOf(e.locator[i])&&(a[i]+=","+e.locator[i]))}))),a}(x,b),k=v.join(""),h=x)}if(s.tests[e]&&s.tests[e][0].cd===k)return s.tests[e];for(var P=v.shift();P<p.length;P++){if(y(p[P],v,[P])&&h===e||h>e)break}}return(0===m.length||g)&&m.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:k}),void 0!==t&&s.tests[e]?r=l.extend(!0,[],m):(s.tests[e]=l.extend(!0,[],m),r=s.tests[e]),m.forEach((function(e){e.match.optionality=!1})),r}},7215:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.checkAlternationMatch=function(e,t,i){for(var a,n=this.opts.greedy?t:t.slice(0,1),r=!1,o=void 0!==i?i.split(","):[],l=0;l<o.length;l++)-1!==(a=e.indexOf(o[l]))&&e.splice(a,1);for(var s=0;s<e.length;s++)if(n.includes(e[s])){r=!0;break}return r},t.handleRemove=function(e,t,i,a,l){var u=this,c=this.maskset,f=this.opts;if((f.numericInput||u.isRTL)&&(t===r.default.BACKSPACE?t=r.default.DELETE:t===r.default.DELETE&&(t=r.default.BACKSPACE),u.isRTL)){var d=i.end;i.end=i.begin,i.begin=d}var p,h=o.getLastValidPosition.call(u,void 0,!0);i.end>=o.getBuffer.call(u).length&&h>=i.end&&(i.end=h+1);t===r.default.BACKSPACE?i.end-i.begin<1&&(i.begin=o.seekPrevious.call(u,i.begin)):t===r.default.DELETE&&i.begin===i.end&&(i.end=o.isMask.call(u,i.end,!0,!0)?i.end+1:o.seekNext.call(u,i.end)+1);if(!1!==(p=m.call(u,i))){if(!0!==a&&!1!==f.keepStatic||null!==f.regex&&-1!==n.getTest.call(u,i.begin).match.def.indexOf("|")){var v=s.call(u,!0);if(v){var g=void 0!==v.caret?v.caret:v.pos?o.seekNext.call(u,v.pos.begin?v.pos.begin:v.pos):o.getLastValidPosition.call(u,-1,!0);(t!==r.default.DELETE||i.begin>g)&&i.begin}}!0!==a&&(c.p=t===r.default.DELETE?i.begin+p:i.begin,c.p=o.determineNewCaretPosition.call(u,{begin:c.p,end:c.p},!1,!1===f.insertMode&&t===r.default.BACKSPACE?"none":void 0).begin)}},t.isComplete=c,t.isSelection=f,t.isValid=d,t.refreshFromBuffer=h,t.revalidateMask=m;var a,n=i(4713),r=(a=i(5581))&&a.__esModule?a:{default:a},o=i(8711),l=i(6030);function s(e,t,i,a,r,l){var u,c,f,p,h,v,m,g,k,y,b,x=this,P=this.dependencyLib,E=this.opts,S=x.maskset,_=P.extend(!0,{},S.validPositions),w=P.extend(!0,{},S.tests),M=!1,O=!1,T=void 0!==r?r:o.getLastValidPosition.call(x);if(l&&(y=l.begin,b=l.end,l.begin>l.end&&(y=l.end,b=l.begin)),-1===T&&void 0===r)u=0,c=(p=n.getTest.call(x,u)).alternation;else for(;T>=0;T--)if((f=S.validPositions[T])&&void 0!==f.alternation){if(p&&p.locator[f.alternation]!==f.locator[f.alternation])break;u=T,c=S.validPositions[u].alternation,p=f}if(void 0!==c){m=parseInt(u),S.excludes[m]=S.excludes[m]||[],!0!==e&&S.excludes[m].push((0,n.getDecisionTaker)(p)+":"+p.alternation);var C=[],A=-1;for(h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)-1===A&&e<=h&&void 0!==t&&(C.push(t),A=C.length-1),(v=S.validPositions[h])&&!0!==v.generatedInput&&(void 0===l||h<y||h>=b)&&C.push(v.input),delete S.validPositions[h];for(-1===A&&void 0!==t&&(C.push(t),A=C.length-1);void 0!==S.excludes[m]&&S.excludes[m].length<10;){for(S.tests={},o.resetMaskSet.call(x,!0),M=!0,h=0;h<C.length&&(g=M.caret||o.getLastValidPosition.call(x,void 0,!0)+1,k=C[h],M=d.call(x,g,k,!1,a,!0));h++)h===A&&(O=M),1==e&&M&&(O={caretPos:h});if(M)break;if(o.resetMaskSet.call(x),p=n.getTest.call(x,m),S.validPositions=P.extend(!0,{},_),S.tests=P.extend(!0,{},w),!S.excludes[m]){O=s.call(x,e,t,i,a,m-1,l);break}var D=(0,n.getDecisionTaker)(p);if(-1!==S.excludes[m].indexOf(D+":"+p.alternation)){O=s.call(x,e,t,i,a,m-1,l);break}for(S.excludes[m].push(D+":"+p.alternation),h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)delete S.validPositions[h]}}return O&&!1===E.keepStatic||delete S.excludes[m],O}function u(e,t,i){var a=this.opts,n=this.maskset;switch(a.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var o=n.validPositions[i-1];e=0===i||o&&o.input===String.fromCharCode(r.default.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if("function"==typeof a.casing){var l=Array.prototype.slice.call(arguments);l.push(n.validPositions),e=a.casing.apply(this,l)}}return e}function c(e){var t=this,i=this.opts,a=this.maskset;if("function"==typeof i.isComplete)return i.isComplete(e,i);if("*"!==i.repeat){var r=!1,l=o.determineLastRequiredPosition.call(t,!0),s=o.seekPrevious.call(t,l.l);if(void 0===l.def||l.def.newBlockMarker||l.def.optionality||l.def.optionalQuantifier){r=!0;for(var u=0;u<=s;u++){var c=n.getTestTemplate.call(t,u).match;if(!0!==c.static&&void 0===a.validPositions[u]&&!0!==c.optionality&&!0!==c.optionalQuantifier||!0===c.static&&e[u]!==n.getPlaceholder.call(t,u,c)){r=!1;break}}}return r}}function f(e){var t=this.opts.insertMode?0:1;return this.isRTL?e.begin-e.end>t:e.end-e.begin>t}function d(e,t,i,a,r,l,p){var g=this,k=this.dependencyLib,y=this.opts,b=g.maskset;i=!0===i;var x=e;function P(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort((function(e,t){return t.pos-e.pos})).forEach((function(e){m.call(g,{begin:e,end:e+1})})),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort((function(e,t){return e.pos-t.pos})).forEach((function(e){""!==e.c&&d.call(g,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:a)})),e.insert=void 0),e.refreshFromBuffer&&e.buffer){var t=e.refreshFromBuffer;h.call(g,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}void 0!==e.rewritePosition&&(x=e.rewritePosition,e=!0)}return e}function E(t,i,r){var l=!1;return n.getTests.call(g,t).every((function(s,c){var d=s.match;if(o.getBuffer.call(g,!0),!1!==(l=(!d.jit||void 0!==b.validPositions[o.seekPrevious.call(g,t)])&&(null!=d.fn?d.fn.test(i,b,t,r,y,f.call(g,e)):(i===d.def||i===y.skipOptionalPartCharacter)&&""!==d.def&&{c:n.getPlaceholder.call(g,t,d,!0)||d.def,pos:t}))){var p=void 0!==l.c?l.c:i,h=t;return p=p===y.skipOptionalPartCharacter&&!0===d.static?n.getPlaceholder.call(g,t,d,!0)||d.def:p,!0!==(l=P(l))&&void 0!==l.pos&&l.pos!==t&&(h=l.pos),!0!==l&&void 0===l.pos&&void 0===l.c?!1:(!1===m.call(g,e,k.extend({},s,{input:u.call(g,p,d,h)}),a,h)&&(l=!1),!1)}return!0})),l}void 0!==e.begin&&(x=g.isRTL?e.end:e.begin);var S=!0,_=k.extend(!0,{},b.validPositions);if(!1===y.keepStatic&&void 0!==b.excludes[x]&&!0!==r&&!0!==a)for(var w=x;w<(g.isRTL?e.begin:e.end);w++)void 0!==b.excludes[w]&&(b.excludes[w]=void 0,delete b.tests[w]);if("function"==typeof y.preValidation&&!0!==a&&!0!==l&&(S=P(S=y.preValidation.call(g,o.getBuffer.call(g),x,t,f.call(g,e),y,b,e,i||r))),!0===S){if(S=E(x,t,i),(!i||!0===a)&&!1===S&&!0!==l){var M=b.validPositions[x];if(!M||!0!==M.match.static||M.match.def!==t&&t!==y.skipOptionalPartCharacter){if(y.insertMode||void 0===b.validPositions[o.seekNext.call(g,x)]||e.end>x){var O=!1;if(b.jitOffset[x]&&void 0===b.validPositions[o.seekNext.call(g,x)]&&!1!==(S=d.call(g,x+b.jitOffset[x],t,!0,!0))&&(!0!==r&&(S.caret=x),O=!0),e.end>x&&(b.validPositions[x]=void 0),!O&&!o.isMask.call(g,x,y.keepStatic&&0===x))for(var T=x+1,C=o.seekNext.call(g,x,!1,0!==x);T<=C;T++)if(!1!==(S=E(T,t,i))){S=v.call(g,x,void 0!==S.pos?S.pos:T)||S,x=T;break}}}else S={caret:o.seekNext.call(g,x)}}!1!==S||!y.keepStatic||!c.call(g,o.getBuffer.call(g))&&0!==x||i||!0===r?f.call(g,e)&&b.tests[x]&&b.tests[x].length>1&&y.keepStatic&&!i&&!0!==r&&(S=s.call(g,!0)):S=s.call(g,x,t,i,a,void 0,e),!0===S&&(S={pos:x})}if("function"==typeof y.postValidation&&!0!==a&&!0!==l){var A=y.postValidation.call(g,o.getBuffer.call(g,!0),void 0!==e.begin?g.isRTL?e.end:e.begin:e,t,S,y,b,i,p);void 0!==A&&(S=!0===A?S:A)}S&&void 0===S.pos&&(S.pos=x),!1===S||!0===l?(o.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,{},_)):v.call(g,void 0,x,!0);var D=P(S);void 0!==g.maxLength&&(o.getBuffer.call(g).length>g.maxLength&&!a&&(o.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,{},_),D=!1));return D}function p(e,t,i){for(var a=this.maskset,r=!1,o=n.getTests.call(this,e),l=0;l<o.length;l++){if(o[l].match&&(o[l].match.nativeDef===t.match[i.shiftPositions?"def":"nativeDef"]&&(!i.shiftPositions||!t.match.static)||o[l].match.nativeDef===t.match.nativeDef||i.regex&&!o[l].match.static&&o[l].match.fn.test(t.input))){r=!0;break}if(o[l].match&&o[l].match.def===t.match.nativeDef){r=void 0;break}}return!1===r&&void 0!==a.jitOffset[e]&&(r=p.call(this,e+a.jitOffset[e],t,i)),r}function h(e,t,i){var a,n,r=this,s=this.maskset,u=this.opts,c=this.dependencyLib,f=u.skipOptionalPartCharacter,d=r.isRTL?i.slice().reverse():i;if(u.skipOptionalPartCharacter="",!0===e)o.resetMaskSet.call(r),s.tests={},e=0,t=i.length,n=o.determineNewCaretPosition.call(r,{begin:0,end:0},!1).begin;else{for(a=e;a<t;a++)delete s.validPositions[a];n=e}var p=new c.Event("keypress");for(a=e;a<t;a++){p.keyCode=d[a].toString().charCodeAt(0),r.ignorable=!1;var h=l.EventHandlers.keypressEvent.call(r,p,!0,!1,!1,n);!1!==h&&void 0!==h&&(n=h.forwardPosition)}u.skipOptionalPartCharacter=f}function v(e,t,i){var a=this,r=this.maskset,l=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!r.validPositions[e];e--);for(var s=e;s<t;s++){if(void 0===r.validPositions[s]&&!o.isMask.call(a,s,!1))if(0==s?n.getTest.call(a,s):r.validPositions[s-1]){var u=n.getTests.call(a,s).slice();""===u[u.length-1].match.def&&u.pop();var c,f=n.determineTestTemplate.call(a,s,u);if(f&&(!0!==f.match.jit||"master"===f.match.newBlockMarker&&(c=r.validPositions[s+1])&&!0===c.match.optionalQuantifier)&&((f=l.extend({},f,{input:n.getPlaceholder.call(a,s,f.match,!0)||f.match.def})).generatedInput=!0,m.call(a,s,f,!0),!0!==i)){var p=r.validPositions[t].input;return r.validPositions[t]=void 0,d.call(a,t,p,!0,!0)}}}}function m(e,t,i,a){var r=this,l=this.maskset,s=this.opts,u=this.dependencyLib;function c(e,t,i){var a=t[e];if(void 0!==a&&!0===a.match.static&&!0!==a.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){var n=i.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],r=i.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return n&&r}return!1}var f=0,h=void 0!==e.begin?e.begin:e,v=void 0!==e.end?e.end:e,m=!0;if(e.begin>e.end&&(h=e.end,v=e.begin),a=void 0!==a?a:h,h!==v||s.insertMode&&void 0!==l.validPositions[a]&&void 0===i||void 0===t||t.match.optionalQuantifier||t.match.optionality){var g,k=u.extend(!0,{},l.validPositions),y=o.getLastValidPosition.call(r,void 0,!0);for(l.p=h,g=y;g>=h;g--)delete l.validPositions[g],void 0===t&&delete l.tests[g+1];var b,x,P=a,E=P;for(t&&(l.validPositions[a]=u.extend(!0,{},t),E++,P++),g=t?v:v-1;g<=y;g++){if(void 0!==(b=k[g])&&!0!==b.generatedInput&&(g>=v||g>=h&&c(g,k,{begin:h,end:v}))){for(;""!==n.getTest.call(r,E).match.def;){if(!1!==(x=p.call(r,E,b,s))||"+"===b.match.def){"+"===b.match.def&&o.getBuffer.call(r,!0);var S=d.call(r,E,b.input,"+"!==b.match.def,!0);if(m=!1!==S,P=(S.pos||E)+1,!m&&x)break}else m=!1;if(m){void 0===t&&b.match.static&&g===e.begin&&f++;break}if(!m&&o.getBuffer.call(r),E>l.maskLength)break;E++}""==n.getTest.call(r,E).match.def&&(m=!1),E=P}if(!m)break}if(!m)return l.validPositions=u.extend(!0,{},k),o.resetMaskSet.call(r,!0),!1}else t&&n.getTest.call(r,a).match.cd===t.match.cd&&(l.validPositions[a]=u.extend(!0,{},t));return o.resetMaskSet.call(r,!0),f}},5581:function(e){e.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}')}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,i),r.exports}var a={};return function(){var e,t=a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(3851),i(219),i(207),i(5296);var n=((e=i(2394))&&e.__esModule?e:{default:e}).default;t.default=n}(),a}()}));
/*!
 * jQuery Validation Plugin v1.19.3
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2021 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
class OzimnadTabs {
    constructor(options={}) {

        //TODO нужно сделать multiple tabs

        const defaultOptions = {
            selector: '[data-tabs="tabs"]',
            btnSelector: '[data-tabs="btn"]',
            tabSelector: '[data-tabs="tab"]',
            activeIndex: 0
        };

        //Инициализация настроек
        Object.assign(this, defaultOptions, options);

        this.tabs = document.querySelector(this.selector);

        if (!this.tabs) {
            console.error(`Селектор ${this.selector} не найден!`);
            return;
        }

        this.btnsList = this.tabs.querySelectorAll(this.btnSelector);
        this.tabsList = this.tabs.querySelectorAll(this.tabSelector);

        if (this.btnsList.length !== this.tabsList.length){
            console.error("Количество кнопок и табов должно быть равным");
            return;
        }

        this.#init();

    }

    #init() {
        this.activate();
        this.btnsList.forEach((i) => i.addEventListener("click", this.click));
    }

    click = (e) => {
        this.deactivate();
        this.activeIndex = Array.from(this.btnsList).indexOf(e.currentTarget);
        this.activate();
    };

    deactivate() {
        this.btnsList[this.activeIndex].classList.remove("active");
        this.tabsList[this.activeIndex].classList.remove("active");
    }

    activate() {
        this.btnsList[this.activeIndex].classList.add("active");
        this.tabsList[this.activeIndex].classList.add("active");
    }
}
"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classPrivateMethodInitSpec(e,t){_checkPrivateRedeclaration(e,t),t.add(e)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var OzimnadAccordion=_createClass((function e(t){var i=this;_classCallCheck(this,e);Object.assign(this,{selector:'[data-accordion="accordion"]',selectorItem:'[data-accordion="item"]',selectorBtn:'[data-accordion="btn"]',selectorCollapse:'[data-accordion="collapse"]',selectorContent:'[data-accordion="content"]',activeIndex:0,openAll:!1},t),this.accordion=document.querySelector(this.selector),this.items=Array.from(this.accordion.querySelectorAll(this.selectorItem)).map((function(e){var t=new OzimnadAccordionItem({item:e,selectorBtn:i.selectorBtn,selectorCollapse:i.selectorCollapse,selectorContent:i.selectorContent});return i.openAll&&t.open(),t}))})),_init=new WeakSet,OzimnadAccordionItem=function(){function e(t){var i=this;_classCallCheck(this,e),_classPrivateMethodInitSpec(this,_init),_defineProperty(this,"click",(function(){i.active?i.close():i.open()})),Object.assign(this,t),this.btn=this.item.querySelector(this.selectorBtn),this.collapse=this.item.querySelector(this.selectorCollapse),this.content=this.item.querySelector(this.selectorContent),this.active=!1,_classPrivateMethodGet(this,_init,_init2).call(this)}return _createClass(e,[{key:"height",get:function(){return this.content.offsetHeight}},{key:"open",value:function(){this.active=!0,this.collapse.style.height="".concat(this.height,"px"),this.item.classList.add("active")}},{key:"close",value:function(){this.active=!1,this.collapse.style.height="0px",this.item.classList.remove("active")}}]),e}();function _init2(){this.btn.addEventListener("click",this.click)}
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.noUiSlider = {}));
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count, nesting;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;
		nesting     = search.options.nesting;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(getattr(data, fields[0], nesting), token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(getattr(data, fields[i], nesting), token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return getattr(self.items[result.id], name, options.nesting);
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @param  {Boolean} nesting Handle nesting or not
	 * @return {Object}          The resolved property value
	 */
	var getattr = function(obj, name, nesting) {
	    if (!obj || !name) return;
	    if (!nesting) return obj[name];
	    var names = name.split(".");
	    while(names.length && (obj = obj[names.shift()]));
	    return obj;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
		'b': '[b␢βΒB฿𐌁ᛒ]',
		'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
		'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
		'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
		'f': '[fƑƒḞḟ]',
		'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
		'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
		'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
		'j': '[jȷĴĵɈɉʝɟʲ]',
		'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
		'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
		'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
		'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
		'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
		'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
		'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
		's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
		't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
		'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
		'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
		'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
		'x': '[xẌẍẊẋχ]',
		'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
		'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.12.6)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
	
		var highlight = function(node) {
			var skip = 0;
			// Wrap matching part of text node with highlighting <span>, e.g.
			// Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} 
			// Recurse element node, looking for child text nodes to highlight, unless element 
			// is childless, <script>, <style>, or already highlighted: <span class="hightlight">
			else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && ( node.className !== 'highlight' || node.tagName !== 'SPAN' )) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};
	
		return $element.each(function() {
			highlight(this);
		});
	};
	
	/**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with() and pass js strict mode
	 */
	$.fn.removeHighlight = function() {
		return this.find("span.highlight").each(function() {
			this.parentNode.firstChild.nodeName;
			var parent = this.parentNode;
			parent.replaceChild(this.firstChild, this);
			parent.normalize();
		}).end();
	};
	
	
	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];
	
			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	
	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};
	
	var IS_MAC        = /Mac/.test(navigator.userAgent);
	
	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;
	
	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;
	
	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;
	
	
	var isset = function(object) {
		return typeof object !== 'undefined';
	};
	
	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};
	
	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};
	
	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};
	
	var hook = {};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};
	
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};
	
		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};
	
		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;
	
		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};
	
	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};
	
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};
	
	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};
	
	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}
	
		if (!Selectize.$testInput) {
			Selectize.$testInput = $('<span />').css({
				position: 'absolute',
				top: -99999,
				left: -99999,
				width: 'auto',
				padding: 0,
				whiteSpace: 'pre'
			}).appendTo('body');
		}
	
		Selectize.$testInput.text(str);
	
		transferStyles($parent, Selectize.$testInput, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);
	
		return Selectize.$testInput.width();
	};
	
	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;
	
		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};
	
			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;
	
			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					(keyCode >= 65 && keyCode <= 90)   || // a-z
					(keyCode >= 96 && keyCode <= 111)  || // numpad 0-9, numeric operators
					(keyCode >= 186 && keyCode <= 222) || // semicolon, equal, comma, dash, etc.
					keyCode === 32 // space
				);
	
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}
	
			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}
	
			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};
	
		$input.on('keydown keyup update blur', update);
		update();
	};
	
	var domToString = function(d) {
		var tmp = document.createElement('div');
	
		tmp.appendChild(d.cloneNode(true));
	
		return tmp.innerHTML;
	};
	
	var logError = function(message, options){
		if(!options) options = {};
		var component = "Selectize";
	
		console.error(component + ": " + message)
	
		if(options.explanation){
			// console.group is undefined in <IE11
			if(console.group) console.group();
			console.error(options.explanation);
			if(console.group) console.groupEnd();
		}
	}
	
	
	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;
	
		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
		// setup default state
		$.extend(self, {
			order            : 0,
			settings         : settings,
			$input           : $input,
			tabIndex         : $input.attr('tabindex') || '',
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),
	
			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isBlurring       : false,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},
	
			$activeOption    : null,
			$activeItems     : [],
	
			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});
	
		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
	
		// build options table
		if (self.settings.options) {
			for (i = 0, n = self.settings.options.length; i < n; i++) {
				self.registerOption(self.settings.options[i]);
			}
			delete self.settings.options;
		}
	
		// build optgroup table
		if (self.settings.optgroups) {
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
				self.registerOptionGroup(self.settings.optgroups[i]);
			}
			delete self.settings.optgroups;
		}
	
		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}
	
		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};
	
	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	MicroEvent.mixin(Selectize);
	
	if(typeof MicroPlugin !== "undefined"){
		MicroPlugin.mixin(Selectize);
	}else{
		logError("Dependency MicroPlugin is missing",
			{explanation:
				"Make sure you either: (1) are using the \"standalone\" "+
				"version of Selectize, or (2) require MicroPlugin before you "+
				"load Selectize."}
		);
	}
	
	
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	$.extend(Selectize.prototype, {
	
		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;
	
			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var classes;
			var classes_plugins;
			var inputId;
	
			inputMode         = self.settings.mode;
			classes           = $input.attr('class') || '';
	
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
			if(inputId = $input.attr('id')) {
				$control_input.attr('id', inputId + '-selectized');
				$("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
			}
	
			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}
	
			$wrapper.css({
				width: $input[0].style.width
			});
	
			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}
	
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}
	
			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}
	
			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
			if (!self.settings.splitOn && self.settings.delimiter) {
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
			}
	
			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}
	
			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}
			$control_input[0].type = $input[0].type;
	
			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;
	
			$dropdown.on('mouseenter mousedown click', '[data-disabled]>[data-selectable]', function(e) { e.stopImmediatePropagation(); });
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);
	
			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});
	
			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});
	
			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});
	
			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});
	
			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur(e.target);
					}
				}
			});
	
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});
	
			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};
	
			$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}
	
			// feature detect for the validation API
			if (SUPPORTS_VALIDITY_API) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}
	
			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;
	
			if ($input.is(':disabled')) {
				self.disable();
			}
	
			self.on('change', this.onChange);
	
			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');
	
			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}
	
		},
	
		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;
	
			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};
	
			self.settings.render = $.extend({}, templates, self.settings.render);
		},
	
		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'      : 'onInitialize',
				'change'          : 'onChange',
				'item_add'        : 'onItemAdd',
				'item_remove'     : 'onItemRemove',
				'clear'           : 'onClear',
				'option_add'      : 'onOptionAdd',
				'option_remove'   : 'onOptionRemove',
				'option_clear'    : 'onOptionClear',
				'optgroup_add'    : 'onOptionGroupAdd',
				'optgroup_remove' : 'onOptionGroupRemove',
				'optgroup_clear'  : 'onOptionGroupClear',
				'dropdown_open'   : 'onDropdownOpen',
				'dropdown_close'  : 'onDropdownClose',
				'type'            : 'onType',
				'load'            : 'onLoad',
				'focus'           : 'onFocus',
				'blur'            : 'onBlur'
			};
	
			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;
	
			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
	    // also necessary to reopen a dropdown that has been closed by
	    // closeAfterSelect
			if (!self.isFocused || !self.isOpen) {
				self.focus();
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);
	
			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},
	
		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;
	
			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
				return;
			}
	
			// If a regex or string is included, this will split the pasted
			// input and create Items for each separate value
			if (self.settings.splitOn) {
	
				// Wait for pasted text to be recognized in value
				setTimeout(function() {
					var pastedText = self.$control_input.val();
					if(!pastedText.match(self.settings.splitOn)){ return }
	
					var splitInput = $.trim(pastedText).split(self.settings.splitOn);
					for (var i = 0, n = splitInput.length; i < n; i++) {
						self.createItem(splitInput[i]);
					}
				}, 0);
			}
		},
	
		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},
	
		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;
	
			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}
	
			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					if (self.isOpen) {
						e.preventDefault();
						e.stopPropagation();
						self.close();
					}
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
	
						// Default behaviour is to jump to the next field, we only want this
						// if the current field doesn't accept any more entries
						if (!self.isFull()) {
							e.preventDefault();
						}
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}
	
			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},
	
		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;
	
			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},
	
		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadThrottle` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},
	
		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
			var wasFocused = self.isFocused;
	
			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}
	
			if (self.ignoreFocus) return;
			self.isFocused = true;
			if (self.settings.preload === 'focus') self.onSearchChange('');
	
			if (!wasFocused) self.trigger('focus');
	
			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}
	
			self.refreshState();
		},
	
		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */
		onBlur: function(e, dest) {
			var self = this;
			if (!self.isFocused) return;
			self.isFocused = false;
	
			if (self.ignoreFocus) {
				return;
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked
				self.ignoreBlur = true;
				self.onFocus(e);
				return;
			}
	
			var deactivate = function() {
				self.close();
				self.setTextboxValue('');
				self.setActiveItem(null);
				self.setActiveOption(null);
				self.setCaret(self.items.length);
				self.refreshState();
	
				// IE11 bug: element still marked as active
				dest && dest.focus && dest.focus();
	
				self.isBlurring = false;
				self.ignoreFocus = false;
				self.trigger('blur');
			};
	
			self.isBlurring = true;
			self.ignoreFocus = true;
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(null, false, deactivate);
			} else {
				deactivate();
			}
		},
	
		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},
	
		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;
	
			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}
	
			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem(null, function() {
					if (self.settings.closeAfterSelect) {
						self.close();
					}
				});
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (self.settings.closeAfterSelect) {
						self.close();
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},
	
		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;
	
			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},
	
		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
	
			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass(self.settings.loadingClass);
				}
				self.trigger('load', results);
			}]);
		},
	
		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},
	
		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},
	
		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				this.clear(silent);
				this.addItems(value, silent);
			});
		},
	
		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;
	
			if (self.settings.mode === 'single') return;
			$item = $($item);
	
			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}
	
			// modify selection
			eventName = e && e.type.toLowerCase();
	
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}
	
			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},
	
		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;
	
			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;
	
			$option = $($option);
			if (!$option.length) return;
	
			self.$activeOption = $option.addClass('active');
	
			if (scroll || !isset(scroll)) {
	
				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;
	
				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}
	
			}
		},
	
		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;
	
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},
	
		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;
	
			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},
	
		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},
	
		/**
		 * Gives the control focus.
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;
	
			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},
	
		/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */
		blur: function(dest) {
			this.$control_input[0].blur();
			this.onBlur(null, dest);
		},
	
		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},
	
		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = [{field: sort}];
			}
	
			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort,
				nesting     : settings.nesting
			};
		},
	
		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();
	
			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}
	
			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}
	
			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}
	
			return result;
		},
	
		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}
	
			// render and group available options individually
			groups = {};
			groups_order = [];
	
			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
	
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = document.createDocumentFragment();
						groups_order.push(optgroup);
					}
					groups[optgroup].appendChild(option_html);
				}
			}
	
			// sort optgroups
			if (this.settings.lockOptgroupOrder) {
				groups_order.sort(function(a, b) {
					var a_order = self.optgroups[a].$order || 0;
					var b_order = self.optgroups[b].$order || 0;
					return a_order - b_order;
				});
			}
	
			// render optgroup headers & join groups
			html = document.createDocumentFragment();
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = document.createDocumentFragment();
					html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
					html_children.appendChild(groups[optgroup]);
	
					html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: domToString(html_children),
						dom:  html_children
					})));
				} else {
					html.appendChild(groups[optgroup]);
				}
			}
	
			$dropdown_content.html(html);
	
			// highlight matching terms inline
			if (self.settings.highlight) {
				$dropdown_content.removeHighlight();
				if (results.query.length && results.tokens.length) {
					for (i = 0, n = results.tokens.length; i < n; i++) {
						highlight($dropdown_content, results.tokens[i].regex);
					}
				}
			}
	
			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}
	
			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}
	
			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},
	
		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */
		addOption: function(data) {
			var i, n, value, self = this;
	
			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}
	
			if (value = self.registerOption(data)) {
				self.userOptions[value] = true;
				self.lastQuery = null;
				self.trigger('option_add', value, data);
			}
		},
	
		/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOption: function(data) {
			var key = hash_key(data[this.settings.valueField]);
			if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
			data.$order = data.$order || ++this.order;
			this.options[key] = data;
			return key;
		},
	
		/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOptionGroup: function(data) {
			var key = hash_key(data[this.settings.optgroupValueField]);
			if (!key) return false;
	
			data.$order = data.$order || ++this.order;
			this.optgroups[key] = data;
			return key;
		},
	
		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			data[this.settings.optgroupValueField] = id;
			if (id = this.registerOptionGroup(data)) {
				this.trigger('optgroup_add', id, data);
			}
		},
	
		/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */
		removeOptionGroup: function(id) {
			if (this.optgroups.hasOwnProperty(id)) {
				delete this.optgroups[id];
				this.renderCache = {};
				this.trigger('optgroup_remove', id);
			}
		},
	
		/**
		 * Clears all existing option groups.
		 */
		clearOptionGroups: function() {
			this.optgroups = {};
			this.renderCache = {};
			this.trigger('optgroup_clear');
		},
	
		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options, order_old;
	
			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);
	
			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	
			order_old = self.options[value].$order;
	
			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			data.$order = data.$order || order_old;
			self.options[value_new] = data;
	
			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];
	
			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}
	
			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}
	
			// invalidate last query because we might have updated the sortField
			self.lastQuery = null;
	
			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},
	
		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		removeOption: function(value, silent) {
			var self = this;
			value = hash_key(value);
	
			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];
	
			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value, silent);
		},
	
		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;
	
			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			var options = self.options;
			$.each(self.options, function(key, value) {
				if(self.items.indexOf(key) == -1) {
					delete options[key];
				}
			});
			self.options = self.sifter.items = options;
			self.lastQuery = null;
			self.trigger('option_clear');
		},
	
		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},
	
		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},
	
		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);
	
			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}
	
			return $();
		},
	
		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},
	
		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItems: function(values, silent) {
			this.buffer = document.createDocumentFragment();
	
			var childNodes = this.$control[0].childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				this.buffer.appendChild(childNodes[i]);
			}
	
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i], silent);
			}
	
			var control = this.$control[0];
			control.insertBefore(this.buffer, control.firstChild);
	
			this.buffer = null;
		},
	
		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItem: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);
	
				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}
	
				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear(silent);
				if (inputMode === 'multi' && self.isFull()) return;
	
				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}
	
				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');
	
					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}
	
					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else if (!self.isPending) {
						self.positionDropdown();
					}
	
					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
	
					if (!self.isPending) {
						self.updateOriginalInput({silent: silent});
					}
				}
			});
		},
	
		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value, silent) {
			var self = this;
			var $item, i, idx;
	
			$item = (value instanceof $) ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);
	
			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}
	
				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value, silent);
				}
	
				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}
	
				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.positionDropdown();
				self.trigger('item_remove', value, $item);
			}
		},
	
		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */
		createItem: function(input, triggerDropdown) {
			var self  = this;
			var caret = self.caretPos;
			input = input || $.trim(self.$control_input.val() || '');
	
			var callback = arguments[arguments.length - 1];
			if (typeof callback !== 'function') callback = function() {};
	
			if (typeof triggerDropdown !== 'boolean') {
				triggerDropdown = true;
			}
	
			if (!self.canCreate(input)) {
				callback();
				return false;
			}
	
			self.lock();
	
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};
	
			var create = once(function(data) {
				self.unlock();
	
				if (!data || typeof data !== 'object') return callback();
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return callback();
	
				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
				callback(data);
			});
	
			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}
	
			return true;
		},
	
		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;
	
			if (this.isSetup) {
				this.addItem(this.items);
			}
	
			this.refreshState();
			this.updateOriginalInput();
		},
	
		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			this.refreshValidityState();
			this.refreshClasses();
		},
	
		/**
		 * Update the `required` attribute of both input and control input.
		 *
		 * The `required` property needs to be activated on the control input
		 * for the error to be displayed at the right place. `required` also
		 * needs to be temporarily deactivated on the input since the input is
		 * hidden and can't show errors.
		 */
		refreshValidityState: function() {
			if (!this.isRequired) return false;
	
			var invalid = !this.items.length;
	
			this.isInvalid = invalid;
			this.$control_input.prop('required', invalid);
			this.$input.prop('required', !invalid);
		},
	
		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;
	
			self.$wrapper
				.toggleClass('rtl', self.rtl);
	
			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);
	
			self.$control_input.data('grow', !isFull && !isLocked);
		},
	
		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},
	
		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function(opts) {
			var i, n, options, label, self = this;
			opts = opts || {};
	
			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					label = self.options[self.items[i]][self.settings.labelField] || '';
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}
	
			if (self.isSetup) {
				if (!opts.silent) {
					self.trigger('change', self.$input.val());
				}
			}
		},
	
		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;
	
			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},
	
		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;
	
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},
	
		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;
	
			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
	
				// Do not trigger blur while inside a blur event,
				// this fixes some weird tabbing behavior in FF and IE.
				// See #1164
				if (!self.isBlurring) {
					self.$control_input.blur(); // close keyboard on iOS
				}
			}
	
			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();
	
			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},
	
		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);
	
			this.$dropdown.css({
				width : $control[0].getBoundingClientRect().width,
				top   : offset.top,
				left  : offset.left
			});
		},
	
		/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */
		clear: function(silent) {
			var self = this;
	
			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},
	
		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			var el = $el[0];
			var target = this.buffer || this.$control[0];
	
			if (caret === 0) {
				target.insertBefore(el, target.firstChild);
			} else {
				target.insertBefore(el, target.childNodes[caret]);
			}
	
			this.setCaret(caret + 1);
		},
	
		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;
	
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);
	
			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}
	
			// determine items that will be removed
			values = [];
	
			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }
	
				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}
	
			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}
	
			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}
	
			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);
	
			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}
	
			return true;
		},
	
		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;
	
			if (direction === 0) return;
			if (self.rtl) direction *= -1;
	
			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);
	
			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;
	
				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},
	
		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;
	
			if (direction === 0) return;
	
			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},
	
		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;
	
			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}
	
			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}
	
			self.caretPos = i;
		},
	
		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},
	
		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},
	
		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.$control_input.prop('disabled', true).prop('tabindex', -1);
			self.isDisabled = true;
			self.lock();
		},
	
		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
			self.isDisabled = false;
			self.unlock();
		},
	
		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;
	
			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();
	
			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();
	
			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');
	
			if (--Selectize.count == 0 && Selectize.$testInput) {
				Selectize.$testInput.remove();
				Selectize.$testInput = undefined;
			}
	
			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);
	
			delete self.$input[0].selectize;
		},
	
		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}
	
			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}
	
			// render markup
			html = $(self.settings.render[templateName].apply(this, [data, escape_html]));
	
			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				if (!data[self.settings.disabledField]) {
					html.attr('data-selectable', '');
				}
			}
			else if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html.attr('data-group', id);
				if(data[self.settings.disabledField]) {
					html.attr('data-disabled', '');
				}
			}
			if (templateName === 'option' || templateName === 'item') {
				html.attr('data-value', value || '');
			}
	
			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html[0];
			}
	
			return html[0];
		},
	
		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},
	
		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}
	
	});
	
	
	Selectize.count = 0;
	Selectize.defaults = {
		options: [],
		optgroups: [],
	
		plugins: [],
		delimiter: ',',
		splitOn: null, // regexp or string for splitting up values from a paste command
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
		closeAfterSelect: false,
	
		scrollDuration: 60,
		loadThrottle: 300,
		loadingClass: 'loading',
	
		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		disabledField: 'disabled',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		lockOptgroupOrder: false,
	
		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',
	
		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',
	
		dropdownParent: null,
	
		copyClassesToDropdown: true,
	
		/*
		load                 : null, // function(query, callback) { ... }
		score                : null, // function(search) { ... }
		onInitialize         : null, // function() { ... }
		onChange             : null, // function(value) { ... }
		onItemAdd            : null, // function(value, $item) { ... }
		onItemRemove         : null, // function(value) { ... }
		onClear              : null, // function() { ... }
		onOptionAdd          : null, // function(value, data) { ... }
		onOptionRemove       : null, // function(value) { ... }
		onOptionClear        : null, // function() { ... }
		onOptionGroupAdd     : null, // function(id, data) { ... }
		onOptionGroupRemove  : null, // function(id) { ... }
		onOptionGroupClear   : null, // function() { ... }
		onDropdownOpen       : null, // function($dropdown) { ... }
		onDropdownClose      : null, // function($dropdown) { ... }
		onType               : null, // function(str) { ... }
		onDelete             : null, // function(values) { ... }
		*/
	
		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};
	
	
	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_disabled       = settings.disabledField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;
	
		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option;
	
			var data_raw = $input.attr(attr_data);
	
			if (!data_raw) {
				var value = $.trim($input.val() || '');
				if (!settings.allowEmptyOption && !value.length) return;
				values = value.split(settings.delimiter);
				for (i = 0, n = values.length; i < n; i++) {
					option = {};
					option[field_label] = values[i];
					option[field_value] = values[i];
					settings_element.options.push(option);
				}
				settings_element.items = values;
			} else {
				settings_element.options = JSON.parse(data_raw);
				for (i = 0, n = settings_element.options.length; i < n; i++) {
					settings_element.items.push(settings_element.options[i][field_value]);
				}
			}
		};
	
		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
			var optionsMap = {};
	
			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};
	
			var addOption = function($option, group) {
				$option = $($option);
	
				var value = hash_key($option.val());
				if (!value && !settings.allowEmptyOption) return;
	
				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (optionsMap.hasOwnProperty(value)) {
					if (group) {
						var arr = optionsMap[value][field_optgroup];
						if (!arr) {
							optionsMap[value][field_optgroup] = group;
						} else if (!$.isArray(arr)) {
							optionsMap[value][field_optgroup] = [arr, group];
						} else {
							arr.push(group);
						}
					}
					return;
				}
	
				var option             = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_disabled] = option[field_disabled] || $option.prop('disabled');
				option[field_optgroup] = option[field_optgroup] || group;
	
				optionsMap[value] = option;
				options.push(option);
	
				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};
	
			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;
	
				$optgroup = $($optgroup);
				id = $optgroup.attr('label');
	
				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					optgroup[field_disabled] = $optgroup.prop('disabled');
					settings_element.optgroups.push(optgroup);
				}
	
				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};
	
			settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};
	
		return this.each(function() {
			if (this.selectize) return;
	
			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}
	
			var settings_element = {
				'placeholder' : placeholder,
				'options'     : [],
				'optgroups'   : [],
				'items'       : []
			};
	
			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}
	
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};
	
	$.fn.selectize.defaults = Selectize.defaults;
	$.fn.selectize.support = {
		validity: SUPPORTS_VALIDITY_API
	};
	
	
	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;
	
		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();
	
		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);
	
				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();
	
	});
	
	Selectize.define('dropdown_header', function(options) {
		var self = this;
	
		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',
	
			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
						'<div class="' + data.titleRowClass + '">' +
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
						'</div>' +
					'</div>'
				);
			}
		}, options);
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();
	
	});
	
	Selectize.define('optgroup_columns', function(options) {
		var self = this;
	
		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);
	
		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;
	
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}
	
					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}
	
				return original.apply(this, arguments);
			};
		})();
	
		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;
	
			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};
	
		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;
	
			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;
	
			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}
	
			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};
	
		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}
	
	
	});
	
	Selectize.define('remove_button', function(options) {
		options = $.extend({
				label     : '&times;',
				title     : 'Remove',
				className : 'remove',
				append    : true
			}, options);
	
			var singleClose = function(thisRef, options) {
	
				options.className = 'remove-single';
	
				var self = thisRef;
				var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
				/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */
				var append = function(html_container, html_element) {
					return $('<span>').append(html_container)
						.append(html_element);
				};
	
				thisRef.setup = (function() {
					var original = self.setup;
					return function() {
						// override the item rendering method to add the button to each
						if (options.append) {
							var id = $(self.$input.context).attr('id');
							var selectizer = $('#'+id);
	
							var render_item = self.settings.render.item;
							self.settings.render.item = function(data) {
								return append(render_item.apply(thisRef, arguments), html);
							};
						}
	
						original.apply(thisRef, arguments);
	
						// add event listener
						thisRef.$control.on('click', '.' + options.className, function(e) {
							e.preventDefault();
							if (self.isLocked) return;
	
							self.clear();
						});
	
					};
				})();
			};
	
			var multiClose = function(thisRef, options) {
	
				var self = thisRef;
				var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
				/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */
				var append = function(html_container, html_element) {
					var pos = html_container.search(/(<\/[^>]+>\s*)$/);
					return html_container.substring(0, pos) + html_element + html_container.substring(pos);
				};
	
				thisRef.setup = (function() {
					var original = self.setup;
					return function() {
						// override the item rendering method to add the button to each
						if (options.append) {
							var render_item = self.settings.render.item;
							self.settings.render.item = function(data) {
								return append(render_item.apply(thisRef, arguments), html);
							};
						}
	
						original.apply(thisRef, arguments);
	
						// add event listener
						thisRef.$control.on('click', '.' + options.className, function(e) {
							e.preventDefault();
							if (self.isLocked) return;
	
							var $item = $(e.currentTarget).parent();
							self.setActiveItem($item);
							if (self.deleteSelection()) {
								self.setCaret(self.items.length);
							}
						});
	
					};
				})();
			};
	
			if (this.settings.mode === 'single') {
				singleClose(this, options);
				return;
			} else {
				multiClose(this, options);
			}
	});
	
	
	Selectize.define('restore_on_backspace', function(options) {
		var self = this;
	
		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});
	

	return Selectize;
}));