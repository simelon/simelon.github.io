/*!
 * Tue, 20 Sep 2016 07:07:47 GMT
 *  * built by `li-si`
 */
webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(5);

	var $ = __webpack_require__(7);
	$(function () {
		window.duoshuoQuery = { short_name: "lisi" };
		(function () {
			var ds = document.createElement('script');
			ds.type = 'text/javascript';ds.async = true;
			ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.unstable.js';
			ds.charset = 'UTF-8';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
		})();

		var $a = $('.nav a');
		var $box = $('.content section');
		$box.height($box.eq(0).children().eq(0).height());
		$a.each(function (index, ele) {
			$(this).on('click', function () {
				$a.removeClass('active');
				$(this).addClass('active');
				$box.removeClass('active');
				$box.eq(index).addClass('active');
			});
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./reset.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* CSS Document */\n*{\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml{\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  text-size-adjust: 100%;\n  font-size: 16px;\n  font-family: sans-serif, Tahoma, Helvetica, \"Microsoft Yahei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, STHeiti;\n}\na{\n  color: #444;\n  text-decoration: none; \n}\na[href^=\"javascript\"]{-webkit-touch-callout: none;}\ni,em,b,strong{\n  font-style: normal;\n  font-weight: normal;\n}\ninput, textarea, select {\n  outline: none; \n}\ninput, button, select, textarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0px; \n}\nli {\n  list-style: none; \n}\nimg {\n  border: none; \n}\n.clearfix:after {\n  content: \"\";\n  display: block; \n}\n.clearfix {\n  *zoom: 1; \n}\n\na.a_c{\n  -webkit-transform: scale(1,1);\n  -ms-transform: scale(1,1);\n  transform: scale(1,1);\n}\na.a_c:active{\n  -webkit-transform: scale(0.95,0.95);\n  -ms-transform: scale(0.95,0.95);\n  transform: scale(0.95,0.95);\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".mt20 {\n  margin-top: 0.2rem; }\n\n.flex, .flex2 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  box-align: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n  .flex .flex-child, .flex2 .flex-child {\n    display: block;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1; }\n\n.flex2 {\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\nhtml {\n  color: #666; }\n\n.main {\n  width: 1000px;\n  margin: 0 auto; }\n\n.nav {\n  width: 180px;\n  padding: 80px 10px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 32px; }\n  .nav a {\n    color: #666; }\n    .nav a.active {\n      color: #FF1200; }\n      .nav a.active:hover {\n        text-decoration: none; }\n    .nav a:hover {\n      text-decoration: line-through;\n      -webkit-text-decoration-color: #FF1200;\n      text-decoration-color: #FF1200; }\n\n.content {\n  width: 700px; }\n  .content > section {\n    padding: 50px;\n    display: none; }\n    .content > section.active {\n      display: block; }\n  .content .about {\n    font-size: 12px;\n    line-height: 20px;\n    text-indent: 2em;\n    text-align: justify; }\n    .content .about p {\n      padding: 10px; }\n  .content .box {\n    width: 100%; }\n    .content .box > li {\n      float: left;\n      width: 150px;\n      height: 150px;\n      line-height: 150px;\n      text-align: center;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      border: 1px solid yellow; }\n      .content .box > li > a {\n        display: block;\n        width: 100%;\n        height: 100%; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	(function (a) {
		String.prototype.trim === a && (String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, "");
		}), Array.prototype.reduce === a && (Array.prototype.reduce = function (b) {
			if (this === void 0 || this === null) throw new TypeError();
			var c = Object(this),
			    d = c.length >>> 0,
			    e = 0,
			    f;
			if (typeof b != "function") throw new TypeError();
			if (d == 0 && arguments.length == 1) throw new TypeError();
			if (arguments.length >= 2) f = arguments[1];else do {
				if (e in c) {
					f = c[e++];
					break;
				}
				if (++e >= d) throw new TypeError();
			} while (!0);
			while (e < d) {
				e in c && (f = b.call(a, f, c[e], e, c)), e++;
			}return f;
		});
	})();
	var Zepto = function () {
		function E(a) {
			return a == null ? String(a) : y[z.call(a)] || "object";
		}
		function F(a) {
			return E(a) == "function";
		}
		function G(a) {
			return a != null && a == a.window;
		}
		function H(a) {
			return a != null && a.nodeType == a.DOCUMENT_NODE;
		}
		function I(a) {
			return E(a) == "object";
		}
		function J(a) {
			return I(a) && !G(a) && a.__proto__ == Object.prototype;
		}
		function K(a) {
			return a instanceof Array;
		}
		function L(a) {
			return typeof a.length == "number";
		}
		function M(a) {
			return g.call(a, function (a) {
				return a != null;
			});
		}
		function N(a) {
			return a.length > 0 ? c.fn.concat.apply([], a) : a;
		}
		function O(a) {
			return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
		}
		function P(a) {
			return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)");
		}
		function Q(a, b) {
			return typeof b == "number" && !l[O(a)] ? b + "px" : b;
		}
		function R(a) {
			var b, c;
			return i[a] || (b = h.createElement(a), h.body.appendChild(b), c = k(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), c == "none" && (c = "block"), i[a] = c), i[a];
		}
		function S(a) {
			return "children" in a ? f.call(a.children) : c.map(a.childNodes, function (a) {
				if (a.nodeType == 1) return a;
			});
		}
		function T(c, d, e) {
			for (b in d) {
				e && (J(d[b]) || K(d[b])) ? (J(d[b]) && !J(c[b]) && (c[b] = {}), K(d[b]) && !K(c[b]) && (c[b] = []), T(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b]);
			}
		}
		function U(b, d) {
			return d === a ? c(b) : c(b).filter(d);
		}
		function V(a, b, c, d) {
			return F(b) ? b.call(a, c, d) : b;
		}
		function W(a, b, c) {
			c == null ? a.removeAttribute(b) : a.setAttribute(b, c);
		}
		function X(b, c) {
			var d = b.className,
			    e = d && d.baseVal !== a;
			if (c === a) return e ? d.baseVal : d;
			e ? d.baseVal = c : b.className = c;
		}
		function Y(a) {
			var b;
			try {
				return a ? a == "true" || (a == "false" ? !1 : a == "null" ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? c.parseJSON(a) : a : b) : a;
			} catch (d) {
				return a;
			}
		}
		function Z(a, b) {
			b(a);
			for (var c in a.childNodes) {
				Z(a.childNodes[c], b);
			}
		}
		var a,
		    b,
		    c,
		    d,
		    e = [],
		    f = e.slice,
		    g = e.filter,
		    h = window.document,
		    i = {},
		    j = {},
		    k = h.defaultView.getComputedStyle,
		    l = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		    m = /^\s*<(\w+|!)[^>]*>/,
		    n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		    o = /^(?:body|html)$/i,
		    p = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		    q = ["after", "prepend", "before", "append"],
		    r = h.createElement("table"),
		    s = h.createElement("tr"),
		    t = {
			tr: h.createElement("tbody"),
			tbody: r,
			thead: r,
			tfoot: r,
			td: s,
			th: s,
			"*": h.createElement("div")
		},
		    u = /complete|loaded|interactive/,
		    v = /^\.([\w-]+)$/,
		    w = /^#([\w-]*)$/,
		    x = /^[\w-]+$/,
		    y = {},
		    z = y.toString,
		    A = {},
		    B,
		    C,
		    D = h.createElement("div");
		return A.matches = function (a, b) {
			if (!a || a.nodeType !== 1) return !1;
			var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
			if (c) return c.call(a, b);
			var d,
			    e = a.parentNode,
			    f = !e;
			return f && (e = D).appendChild(a), d = ~A.qsa(e, b).indexOf(a), f && D.removeChild(a), d;
		}, B = function B(a) {
			return a.replace(/-+(.)?/g, function (a, b) {
				return b ? b.toUpperCase() : "";
			});
		}, C = function C(a) {
			return g.call(a, function (b, c) {
				return a.indexOf(b) == c;
			});
		}, A.fragment = function (b, d, e) {
			b.replace && (b = b.replace(n, "<$1></$2>")), d === a && (d = m.test(b) && RegExp.$1), d in t || (d = "*");
			var g,
			    h,
			    i = t[d];
			return i.innerHTML = "" + b, h = c.each(f.call(i.childNodes), function () {
				i.removeChild(this);
			}), J(e) && (g = c(h), c.each(e, function (a, b) {
				p.indexOf(a) > -1 ? g[a](b) : g.attr(a, b);
			})), h;
		}, A.Z = function (a, b) {
			return a = a || [], a.__proto__ = c.fn, a.selector = b || "", a;
		}, A.isZ = function (a) {
			return a instanceof A.Z;
		}, A.init = function (b, d) {
			if (!b) return A.Z();
			if (F(b)) return c(h).ready(b);
			if (A.isZ(b)) return b;
			var e;
			if (K(b)) e = M(b);else if (I(b)) e = [J(b) ? c.extend({}, b) : b], b = null;else if (m.test(b)) e = A.fragment(b.trim(), RegExp.$1, d), b = null;else {
				if (d !== a) return c(d).find(b);
				e = A.qsa(h, b);
			}
			return A.Z(e, b);
		}, c = function c(a, b) {
			return A.init(a, b);
		}, c.extend = function (a) {
			var b,
			    c = f.call(arguments, 1);
			return typeof a == "boolean" && (b = a, a = c.shift()), c.forEach(function (c) {
				T(a, c, b);
			}), a;
		}, A.qsa = function (a, b) {
			var c;
			return H(a) && w.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : a.nodeType !== 1 && a.nodeType !== 9 ? [] : f.call(v.test(b) ? a.getElementsByClassName(RegExp.$1) : x.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b));
		}, c.contains = function (a, b) {
			return a !== b && a.contains(b);
		}, c.type = E, c.isFunction = F, c.isWindow = G, c.isArray = K, c.isPlainObject = J, c.isEmptyObject = function (a) {
			var b;
			for (b in a) {
				return !1;
			}return !0;
		}, c.inArray = function (a, b, c) {
			return e.indexOf.call(b, a, c);
		}, c.camelCase = B, c.trim = function (a) {
			return a.trim();
		}, c.uuid = 0, c.support = {}, c.expr = {}, c.map = function (a, b) {
			var c,
			    d = [],
			    e,
			    f;
			if (L(a)) for (e = 0; e < a.length; e++) {
				c = b(a[e], e), c != null && d.push(c);
			} else for (f in a) {
				c = b(a[f], f), c != null && d.push(c);
			}return N(d);
		}, c.each = function (a, b) {
			var c, d;
			if (L(a)) {
				for (c = 0; c < a.length; c++) {
					if (b.call(a[c], c, a[c]) === !1) return a;
				}
			} else for (d in a) {
				if (b.call(a[d], d, a[d]) === !1) return a;
			}return a;
		}, c.grep = function (a, b) {
			return g.call(a, b);
		}, window.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
			y["[object " + b + "]"] = b.toLowerCase();
		}), c.fn = {
			forEach: e.forEach,
			reduce: e.reduce,
			push: e.push,
			sort: e.sort,
			indexOf: e.indexOf,
			concat: e.concat,
			map: function map(a) {
				return c(c.map(this, function (b, c) {
					return a.call(b, c, b);
				}));
			},
			slice: function slice() {
				return c(f.apply(this, arguments));
			},
			ready: function ready(a) {
				return u.test(h.readyState) ? a(c) : h.addEventListener("DOMContentLoaded", function () {
					a(c);
				}, !1), this;
			},
			get: function get(b) {
				return b === a ? f.call(this) : this[b >= 0 ? b : b + this.length];
			},
			toArray: function toArray() {
				return this.get();
			},
			size: function size() {
				return this.length;
			},
			remove: function remove() {
				return this.each(function () {
					this.parentNode != null && this.parentNode.removeChild(this);
				});
			},
			each: function each(a) {
				return e.every.call(this, function (b, c) {
					return a.call(b, c, b) !== !1;
				}), this;
			},
			filter: function filter(a) {
				return F(a) ? this.not(this.not(a)) : c(g.call(this, function (b) {
					return A.matches(b, a);
				}));
			},
			add: function add(a, b) {
				return c(C(this.concat(c(a, b))));
			},
			is: function is(a) {
				return this.length > 0 && A.matches(this[0], a);
			},
			not: function not(b) {
				var d = [];
				if (F(b) && b.call !== a) this.each(function (a) {
					b.call(this, a) || d.push(this);
				});else {
					var e = typeof b == "string" ? this.filter(b) : L(b) && F(b.item) ? f.call(b) : c(b);
					this.forEach(function (a) {
						e.indexOf(a) < 0 && d.push(a);
					});
				}
				return c(d);
			},
			has: function has(a) {
				return this.filter(function () {
					return I(a) ? c.contains(this, a) : c(this).find(a).size();
				});
			},
			eq: function eq(a) {
				return a === -1 ? this.slice(a) : this.slice(a, +a + 1);
			},
			first: function first() {
				var a = this[0];
				return a && !I(a) ? a : c(a);
			},
			last: function last() {
				var a = this[this.length - 1];
				return a && !I(a) ? a : c(a);
			},
			find: function find(a) {
				var b,
				    d = this;
				return (typeof a === "undefined" ? "undefined" : _typeof(a)) == "object" ? b = c(a).filter(function () {
					var a = this;
					return e.some.call(d, function (b) {
						return c.contains(b, a);
					});
				}) : this.length == 1 ? b = c(A.qsa(this[0], a)) : b = this.map(function () {
					return A.qsa(this, a);
				}), b;
			},
			closest: function closest(a, b) {
				var d = this[0],
				    e = !1;
				(typeof a === "undefined" ? "undefined" : _typeof(a)) == "object" && (e = c(a));
				while (d && !(e ? e.indexOf(d) >= 0 : A.matches(d, a))) {
					d = d !== b && !H(d) && d.parentNode;
				}return c(d);
			},
			parents: function parents(a) {
				var b = [],
				    d = this;
				while (d.length > 0) {
					d = c.map(d, function (a) {
						if ((a = a.parentNode) && !H(a) && b.indexOf(a) < 0) return b.push(a), a;
					});
				}return U(b, a);
			},
			parent: function parent(a) {
				return U(C(this.pluck("parentNode")), a);
			},
			children: function children(a) {
				return U(this.map(function () {
					return S(this);
				}), a);
			},
			contents: function contents() {
				return this.map(function () {
					return f.call(this.childNodes);
				});
			},
			siblings: function siblings(a) {
				return U(this.map(function (a, b) {
					return g.call(S(b.parentNode), function (a) {
						return a !== b;
					});
				}), a);
			},
			empty: function empty() {
				return this.each(function () {
					this.innerHTML = "";
				});
			},
			pluck: function pluck(a) {
				return c.map(this, function (b) {
					return b[a];
				});
			},
			show: function show() {
				return this.each(function () {
					this.style.display == "none" && (this.style.display = null), k(this, "").getPropertyValue("display") == "none" && (this.style.display = R(this.nodeName));
				});
			},
			replaceWith: function replaceWith(a) {
				return this.before(a).remove();
			},
			wrap: function wrap(a) {
				var b = F(a);
				if (this[0] && !b) var d = c(a).get(0),
				    e = d.parentNode || this.length > 1;
				return this.each(function (f) {
					c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d);
				});
			},
			wrapAll: function wrapAll(a) {
				if (this[0]) {
					c(this[0]).before(a = c(a));
					var b;
					while ((b = a.children()).length) {
						a = b.first();
					}c(a).append(this);
				}
				return this;
			},
			wrapInner: function wrapInner(a) {
				var b = F(a);
				return this.each(function (d) {
					var e = c(this),
					    f = e.contents(),
					    g = b ? a.call(this, d) : a;
					f.length ? f.wrapAll(g) : e.append(g);
				});
			},
			unwrap: function unwrap() {
				return this.parent().each(function () {
					c(this).replaceWith(c(this).children());
				}), this;
			},
			clone: function clone() {
				return this.map(function () {
					return this.cloneNode(!0);
				});
			},
			hide: function hide() {
				return this.css("display", "none");
			},
			toggle: function toggle(b) {
				return this.each(function () {
					var d = c(this);
					(b === a ? d.css("display") == "none" : b) ? d.show() : d.hide();
				});
			},
			prev: function prev(a) {
				return c(this.pluck("previousElementSibling")).filter(a || "*");
			},
			next: function next(a) {
				return c(this.pluck("nextElementSibling")).filter(a || "*");
			},
			html: function html(b) {
				return b === a ? this.length > 0 ? this[0].innerHTML : null : this.each(function (a) {
					var d = this.innerHTML;
					c(this).empty().append(V(this, b, a, d));
				});
			},
			text: function text(b) {
				return b === a ? this.length > 0 ? this[0].textContent : null : this.each(function () {
					this.textContent = b;
				});
			},
			attr: function attr(c, d) {
				var e;
				return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a : c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : this.each(function (a) {
					if (this.nodeType !== 1) return;
					if (I(c)) for (b in c) {
						W(this, b, c[b]);
					} else W(this, c, V(this, d, a, this.getAttribute(c)));
				});
			},
			removeAttr: function removeAttr(a) {
				return this.each(function () {
					this.nodeType === 1 && W(this, a);
				});
			},
			prop: function prop(b, c) {
				return c === a ? this[0] && this[0][b] : this.each(function (a) {
					this[b] = V(this, c, a, this[b]);
				});
			},
			data: function data(b, c) {
				var d = this.attr("data-" + O(b), c);
				return d !== null ? Y(d) : a;
			},
			val: function val(b) {
				return b === a ? this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function (a) {
					return this.selected;
				}).pluck("value") : this[0].value) : this.each(function (a) {
					this.value = V(this, b, a, this.value);
				});
			},
			offset: function offset(a) {
				if (a) return this.each(function (b) {
					var d = c(this),
					    e = V(this, a, b, d.offset()),
					    f = d.offsetParent().offset(),
					    g = {
						top: e.top - f.top,
						left: e.left - f.left
					};
					d.css("position") == "static" && (g.position = "relative"), d.css(g);
				});
				if (this.length == 0) return null;
				var b = this[0].getBoundingClientRect();
				return {
					left: b.left + window.pageXOffset,
					top: b.top + window.pageYOffset,
					width: Math.round(b.width),
					height: Math.round(b.height)
				};
			},
			css: function css(a, c) {
				if (arguments.length < 2 && typeof a == "string") return this[0] && (this[0].style[B(a)] || k(this[0], "").getPropertyValue(a));
				var d = "";
				if (E(a) == "string") !c && c !== 0 ? this.each(function () {
					this.style.removeProperty(O(a));
				}) : d = O(a) + ":" + Q(a, c);else for (b in a) {
					!a[b] && a[b] !== 0 ? this.each(function () {
						this.style.removeProperty(O(b));
					}) : d += O(b) + ":" + Q(b, a[b]) + ";";
				}return this.each(function () {
					this.style.cssText += ";" + d;
				});
			},
			index: function index(a) {
				return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0]);
			},
			hasClass: function hasClass(a) {
				return e.some.call(this, function (a) {
					return this.test(X(a));
				}, P(a));
			},
			addClass: function addClass(a) {
				return this.each(function (b) {
					d = [];
					var e = X(this),
					    f = V(this, a, b, e);
					f.split(/\s+/g).forEach(function (a) {
						c(this).hasClass(a) || d.push(a);
					}, this), d.length && X(this, e + (e ? " " : "") + d.join(" "));
				});
			},
			removeClass: function removeClass(b) {
				return this.each(function (c) {
					if (b === a) return X(this, "");
					d = X(this), V(this, b, c, d).split(/\s+/g).forEach(function (a) {
						d = d.replace(P(a), " ");
					}), X(this, d.trim());
				});
			},
			toggleClass: function toggleClass(b, d) {
				return this.each(function (e) {
					var f = c(this),
					    g = V(this, b, e, X(this));
					g.split(/\s+/g).forEach(function (b) {
						(d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b);
					});
				});
			},
			scrollTop: function scrollTop() {
				if (!this.length) return;
				return "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY;
			},
			position: function position() {
				if (!this.length) return;
				var a = this[0],
				    b = this.offsetParent(),
				    d = this.offset(),
				    e = o.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
				return d.top -= parseFloat(c(a).css("margin-top")) || 0, d.left -= parseFloat(c(a).css("margin-left")) || 0, e.top += parseFloat(c(b[0]).css("border-top-width")) || 0, e.left += parseFloat(c(b[0]).css("border-left-width")) || 0, {
					top: d.top - e.top,
					left: d.left - e.left
				};
			},
			offsetParent: function offsetParent() {
				return this.map(function () {
					var a = this.offsetParent || h.body;
					while (a && !o.test(a.nodeName) && c(a).css("position") == "static") {
						a = a.offsetParent;
					}return a;
				});
			}
		}, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function (b) {
			c.fn[b] = function (d) {
				var e,
				    f = this[0],
				    g = b.replace(/./, function (a) {
					return a[0].toUpperCase();
				});
				return d === a ? G(f) ? f["inner" + g] : H(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[b] : this.each(function (a) {
					f = c(this), f.css(b, V(this, d, a, f[b]()));
				});
			};
		}), q.forEach(function (a, b) {
			var d = b % 2;
			c.fn[a] = function () {
				var a,
				    e = c.map(arguments, function (b) {
					return a = E(b), a == "object" || a == "array" || b == null ? b : A.fragment(b);
				}),
				    f,
				    g = this.length > 1;
				return e.length < 1 ? this : this.each(function (a, h) {
					f = d ? h : h.parentNode, h = b == 0 ? h.nextSibling : b == 1 ? h.firstChild : b == 2 ? h : null, e.forEach(function (a) {
						if (g) a = a.cloneNode(!0);else if (!f) return c(a).remove();
						Z(f.insertBefore(a, h), function (a) {
							a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && !a.src && window.eval.call(window, a.innerHTML);
						});
					});
				});
			}, c.fn[d ? a + "To" : "insert" + (b ? "Before" : "After")] = function (b) {
				return c(b)[a](this), this;
			};
		}), A.Z.prototype = c.fn, A.uniq = C, A.deserializeValue = Y, c.zepto = A, c;
	}();
	~function (a) {
		function b(a) {
			var b = this.os = {},
			    c = this.browser = {},
			    d = a.match(/WebKit\/([\d.]+)/),
			    e = a.match(/(Android)\s+([\d.]+)/),
			    f = a.match(/(iPad).*OS\s([\d_]+)/),
			    g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/),
			    h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			    i = h && a.match(/TouchPad/),
			    j = a.match(/Kindle\/([\d.]+)/),
			    k = a.match(/Silk\/([\d._]+)/),
			    l = a.match(/(BlackBerry).*Version\/([\d.]+)/),
			    m = a.match(/(BB10).*Version\/([\d.]+)/),
			    n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			    o = a.match(/PlayBook/),
			    p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
			    q = a.match(/Firefox\/([\d.]+)/);
			if (c.webkit = !!d) c.version = d[1];
			e && (b.android = !0, b.version = e[2]), g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")), f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")), h && (b.webos = !0, b.version = h[2]), i && (b.touchpad = !0), l && (b.blackberry = !0, b.version = l[2]), m && (b.bb10 = !0, b.version = m[2]), n && (b.rimtabletos = !0, b.version = n[2]), o && (c.playbook = !0), j && (b.kindle = !0, b.version = j[1]), k && (c.silk = !0, c.version = k[1]), !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0), p && (c.chrome = !0, c.version = p[1]), q && (c.firefox = !0, c.version = q[1]), b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)), b.phone = !b.tablet && !!(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/));
		}
		b.call(a, navigator.userAgent), a.__detect = b;
	}(Zepto), function (a) {
		function g(a) {
			return a._zid || (a._zid = d++);
		}
		function h(a, b, d, e) {
			b = i(b);
			if (b.ns) var f = j(b.ns);
			return (c[g(a)] || []).filter(function (a) {
				return a && (!b.e || a.e == b.e) && (!b.ns || f.test(a.ns)) && (!d || g(a.fn) === g(d)) && (!e || a.sel == e);
			});
		}
		function i(a) {
			var b = ("" + a).split(".");
			return {
				e: b[0],
				ns: b.slice(1).sort().join(" ")
			};
		}
		function j(a) {
			return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)");
		}
		function k(b, c, d) {
			a.type(b) != "string" ? a.each(b, d) : b.split(/\s/).forEach(function (a) {
				d(a, c);
			});
		}
		function l(a, b) {
			return a.del && (a.e == "focus" || a.e == "blur") || !!b;
		}
		function m(a) {
			return f[a] || a;
		}
		function n(b, d, e, h, j, n) {
			var o = g(b),
			    p = c[o] || (c[o] = []);
			k(d, e, function (c, d) {
				var e = i(c);
				e.fn = d, e.sel = h, e.e in f && (d = function d(b) {
					var c = b.relatedTarget;
					if (!c || c !== this && !a.contains(this, c)) return e.fn.apply(this, arguments);
				}), e.del = j && j(d, c);
				var g = e.del || d;
				e.proxy = function (a) {
					var c = g.apply(b, [a].concat(a.data));
					return c === !1 && (a.preventDefault(), a.stopPropagation()), c;
				}, e.i = p.length, p.push(e), b.addEventListener(m(e.e), e.proxy, l(e, n));
			});
		}
		function o(a, b, d, e, f) {
			var i = g(a);
			k(b || "", d, function (b, d) {
				h(a, b, d, e).forEach(function (b) {
					delete c[i][b.i], a.removeEventListener(m(b.e), b.proxy, l(b, f));
				});
			});
		}
		function t(b) {
			var c,
			    d = {
				originalEvent: b
			};
			for (c in b) {
				!r.test(c) && b[c] !== undefined && (d[c] = b[c]);
			}return a.each(s, function (a, c) {
				d[a] = function () {
					return this[c] = p, b[a].apply(b, arguments);
				}, d[c] = q;
			}), d;
		}
		function u(a) {
			if (!("defaultPrevented" in a)) {
				a.defaultPrevented = !1;
				var b = a.preventDefault;
				a.preventDefault = function () {
					this.defaultPrevented = !0, b.call(this);
				};
			}
		}
		var b = a.zepto.qsa,
		    c = {},
		    d = 1,
		    e = {},
		    f = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
		e.click = e.mousedown = e.mouseup = e.mousemove = "MouseEvents", a.event = {
			add: n,
			remove: o
		}, a.proxy = function (b, c) {
			if (a.isFunction(b)) {
				var d = function d() {
					return b.apply(c, arguments);
				};
				return d._zid = g(b), d;
			}
			if (typeof c == "string") return a.proxy(b[c], b);
			throw new TypeError("expected function");
		}, a.fn.bind = function (a, b) {
			return this.each(function () {
				n(this, a, b);
			});
		}, a.fn.unbind = function (a, b) {
			return this.each(function () {
				o(this, a, b);
			});
		}, a.fn.one = function (a, b) {
			return this.each(function (c, d) {
				n(this, a, b, null, function (a, b) {
					return function () {
						var c = a.apply(d, arguments);
						return o(d, b, a), c;
					};
				});
			});
		};
		var p = function p() {
			return !0;
		},
		    q = function q() {
			return !1;
		},
		    r = /^([A-Z]|layer[XY]$)/,
		    s = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
		a.fn.delegate = function (b, c, d) {
			return this.each(function (e, f) {
				n(f, c, d, b, function (c) {
					return function (d) {
						var e,
						    g = a(d.target).closest(b, f).get(0);
						if (g) return e = a.extend(t(d), {
							currentTarget: g,
							liveFired: f
						}), c.apply(g, [e].concat([].slice.call(arguments, 1)));
					};
				});
			});
		}, a.fn.undelegate = function (a, b, c) {
			return this.each(function () {
				o(this, b, c, a);
			});
		}, a.fn.live = function (b, c) {
			return a(document.body).delegate(this.selector, b, c), this;
		}, a.fn.die = function (b, c) {
			return a(document.body).undelegate(this.selector, b, c), this;
		}, a.fn.on = function (b, c, d) {
			return !c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d);
		}, a.fn.off = function (b, c, d) {
			return !c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d);
		}, a.fn.trigger = function (b, c) {
			if (typeof b == "string" || a.isPlainObject(b)) b = a.Event(b);
			return u(b), b.data = c, this.each(function () {
				"dispatchEvent" in this && this.dispatchEvent(b);
			});
		}, a.fn.triggerHandler = function (b, c) {
			var d, e;
			return this.each(function (f, g) {
				d = t(typeof b == "string" ? a.Event(b) : b), d.data = c, d.target = g, a.each(h(g, b.type || b), function (a, b) {
					e = b.proxy(d);
					if (d.isImmediatePropagationStopped()) return !1;
				});
			}), e;
		}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (b) {
			a.fn[b] = function (a) {
				return a ? this.bind(b, a) : this.trigger(b);
			};
		}), ["focus", "blur"].forEach(function (b) {
			a.fn[b] = function (a) {
				return a ? this.bind(b, a) : this.each(function () {
					try {
						this[b]();
					} catch (a) {}
				}), this;
			};
		}), a.Event = function (a, b) {
			typeof a != "string" && (b = a, a = b.type);
			var c = document.createEvent(e[a] || "Events"),
			    d = !0;
			if (b) for (var f in b) {
				f == "bubbles" ? d = !!b[f] : c[f] = b[f];
			}return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null), c.isDefaultPrevented = function () {
				return this.defaultPrevented;
			}, c;
		};
	}(Zepto), function ($) {
		function triggerAndReturn(a, b, c) {
			var d = $.Event(b);
			return $(a).trigger(d, c), !d.defaultPrevented;
		}
		function triggerGlobal(a, b, c, d) {
			if (a.global) return triggerAndReturn(b || document, c, d);
		}
		function ajaxStart(a) {
			a.global && $.active++ === 0 && triggerGlobal(a, null, "ajaxStart");
		}
		function ajaxStop(a) {
			a.global && ! --$.active && triggerGlobal(a, null, "ajaxStop");
		}
		function ajaxBeforeSend(a, b) {
			var c = b.context;
			if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1) return !1;
			triggerGlobal(b, c, "ajaxSend", [a, b]);
		}
		function ajaxSuccess(a, b, c) {
			var d = c.context,
			    e = "success";
			c.success.call(d, a, e, b), triggerGlobal(c, d, "ajaxSuccess", [b, c, a]), ajaxComplete(e, b, c);
		}
		function ajaxError(a, b, c, d) {
			var e = d.context;
			d.error.call(e, c, b, a), triggerGlobal(d, e, "ajaxError", [c, d, a]), ajaxComplete(b, c, d);
		}
		function ajaxComplete(a, b, c) {
			var d = c.context;
			c.complete.call(d, b, a), triggerGlobal(c, d, "ajaxComplete", [b, c]), ajaxStop(c);
		}
		function empty() {}
		function mimeToDataType(a) {
			return a && (a = a.split(";", 2)[0]), a && (a == htmlType ? "html" : a == jsonType ? "json" : scriptTypeRE.test(a) ? "script" : xmlTypeRE.test(a) && "xml") || "text";
		}
		function appendQuery(a, b) {
			return (a + "&" + b).replace(/[&?]{1,2}/, "?");
		}
		function serializeData(a) {
			a.processData && a.data && $.type(a.data) != "string" && (a.data = $.param(a.data, a.traditional)), a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data));
		}
		function parseArguments(a, b, c, d) {
			var e = !$.isFunction(b);
			return {
				url: a,
				data: e ? b : undefined,
				success: e ? $.isFunction(c) ? c : undefined : b,
				dataType: e ? d || c : c
			};
		}
		function serialize(a, b, c, d) {
			var e,
			    f = $.isArray(b);
			$.each(b, function (b, g) {
				e = $.type(g), d && (b = c ? d : d + "[" + (f ? "" : b) + "]"), !d && f ? a.add(g.name, g.value) : e == "array" || !c && e == "object" ? serialize(a, g, c, b) : a.add(b, g);
			});
		}
		var jsonpID = 0,
		    document = window.document,
		    key,
		    name,
		    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		    scriptTypeRE = /^(?:text|application)\/javascript/i,
		    xmlTypeRE = /^(?:text|application)\/xml/i,
		    jsonType = "application/json",
		    htmlType = "text/html",
		    blankRE = /^\s*$/;
		$.active = 0, $.ajaxJSONP = function (a) {
			if ("type" in a) {
				var b = "jsonp" + ++jsonpID,
				    c = document.createElement("script"),
				    d = function d() {
					clearTimeout(g), $(c).remove(), delete window[b];
				},
				    e = function e(c) {
					d();
					if (!c || c == "timeout") window[b] = empty;
					ajaxError(null, c || "abort", f, a);
				},
				    f = {
					abort: e
				},
				    g;
				return ajaxBeforeSend(f, a) === !1 ? (e("abort"), !1) : (window[b] = function (b) {
					d(), ajaxSuccess(b, f, a);
				}, c.onerror = function () {
					e("error");
				}, c.src = a.url.replace(/=\?/, "=" + b), $("head").append(c), a.timeout > 0 && (g = setTimeout(function () {
					e("timeout");
				}, a.timeout)), f);
			}
			return $.ajax(a);
		}, $.ajaxSettings = {
			type: "GET",
			beforeSend: empty,
			success: empty,
			error: empty,
			complete: empty,
			context: null,
			global: !0,
			xhr: function xhr() {
				return new window.XMLHttpRequest();
			},
			accepts: {
				script: "text/javascript, application/javascript",
				json: jsonType,
				xml: "application/xml, text/xml",
				html: htmlType,
				text: "text/plain"
			},
			crossDomain: !1,
			timeout: 0,
			processData: !0,
			cache: !0
		}, $.ajax = function (options) {
			var settings = $.extend({}, options || {});
			for (key in $.ajaxSettings) {
				settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
			}ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
			var dataType = settings.dataType,
			    hasPlaceholder = /=\?/.test(settings.url);
			if (dataType == "jsonp" || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")), $.ajaxJSONP(settings);
			var mime = settings.accepts[dataType],
			    baseHeaders = {},
			    protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
			    xhr = settings.xhr(),
			    abortTimeout;
			settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"), mime && (baseHeaders.Accept = mime, mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime));
			if (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
			settings.headers = $.extend(baseHeaders, settings.headers || {}), xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
					var result,
					    error = !1;
					if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
						dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")), result = xhr.responseText;
						try {
							dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : $.parseJSON(result));
						} catch (e) {
							error = e;
						}
						error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings);
					} else ajaxError(null, xhr.status ? "error" : "abort", xhr, settings);
				}
			};
			var async = "async" in settings ? settings.async : !0;
			xhr.open(settings.type, settings.url, async);
			for (name in settings.headers) {
				xhr.setRequestHeader(name, settings.headers[name]);
			}return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(), !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function () {
				xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings);
			}, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr);
		}, $.get = function (a, b, c, d) {
			return $.ajax(parseArguments.apply(null, arguments));
		}, $.post = function (a, b, c, d) {
			var e = parseArguments.apply(null, arguments);
			return e.type = "POST", $.ajax(e);
		}, $.getJSON = function (a, b, c) {
			var d = parseArguments.apply(null, arguments);
			return d.dataType = "json", $.ajax(d);
		}, $.fn.load = function (a, b, c) {
			if (!this.length) return this;
			var d = this,
			    e = a.split(/\s/),
			    f,
			    g = parseArguments(a, b, c),
			    h = g.success;
			return e.length > 1 && (g.url = e[0], f = e[1]), g.success = function (a) {
				d.html(f ? $("<div>").html(a.replace(rscript, "")).find(f) : a), h && h.apply(d, arguments);
			}, $.ajax(g), this;
		};
		var escape = encodeURIComponent;
		$.param = function (a, b) {
			var c = [];
			return c.add = function (a, b) {
				this.push(escape(a) + "=" + escape(b));
			}, serialize(c, a, b), c.join("&").replace(/%20/g, "+");
		};
	}(Zepto), function (a) {
		a.fn.serializeArray = function () {
			var b = [],
			    c;
			return a(Array.prototype.slice.call(this.get(0).elements)).each(function () {
				c = a(this);
				var d = c.attr("type");
				this.nodeName.toLowerCase() != "fieldset" && !this.disabled && d != "submit" && d != "reset" && d != "button" && (d != "radio" && d != "checkbox" || this.checked) && b.push({
					name: c.attr("name"),
					value: c.val()
				});
			}), b;
		}, a.fn.serialize = function () {
			var a = [];
			return this.serializeArray().forEach(function (b) {
				a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value));
			}), a.join("&");
		}, a.fn.submit = function (b) {
			if (b) this.bind("submit", b);else if (this.length) {
				var c = a.Event("submit");
				this.eq(0).trigger(c), c.defaultPrevented || this.get(0).submit();
			}
			return this;
		};
	}(Zepto), function (a, b) {
		function s(a) {
			return t(a.replace(/([a-z])([A-Z])/, "$1-$2"));
		}
		function t(a) {
			return a.toLowerCase();
		}
		function u(a) {
			return d ? d + a : t(a);
		}
		var c = "",
		    d,
		    e,
		    f,
		    g = {
			Webkit: "webkit",
			Moz: "",
			O: "o",
			ms: "MS"
		},
		    h = window.document,
		    i = h.createElement("div"),
		    j = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		    k,
		    l,
		    m,
		    n,
		    o,
		    p,
		    q,
		    r = {};
		a.each(g, function (a, e) {
			if (i.style[a + "TransitionProperty"] !== b) return c = "-" + t(a) + "-", d = e, !1;
		}), k = c + "transform", r[l = c + "transition-property"] = r[m = c + "transition-duration"] = r[n = c + "transition-timing-function"] = r[o = c + "animation-name"] = r[p = c + "animation-duration"] = r[q = c + "animation-timing-function"] = "", a.fx = {
			off: d === b && i.style.transitionProperty === b,
			speeds: {
				_default: 400,
				fast: 200,
				slow: 600
			},
			cssPrefix: c,
			transitionEnd: u("TransitionEnd"),
			animationEnd: u("AnimationEnd")
		}, a.fn.animate = function (b, c, d, e) {
			return a.isPlainObject(c) && (d = c.easing, e = c.complete, c = c.duration), c && (c = (typeof c == "number" ? c : a.fx.speeds[c] || a.fx.speeds._default) / 1e3), this.anim(b, c, d, e);
		}, a.fn.anim = function (c, d, e, f) {
			var g,
			    h = {},
			    i,
			    t = "",
			    u = this,
			    _v,
			    w = a.fx.transitionEnd;
			d === b && (d = .4), a.fx.off && (d = 0);
			if (typeof c == "string") h[o] = c, h[p] = d + "s", h[q] = e || "linear", w = a.fx.animationEnd;else {
				i = [];
				for (g in c) {
					j.test(g) ? t += g + "(" + c[g] + ") " : (h[g] = c[g], i.push(s(g)));
				}t && (h[k] = t, i.push(k)), d > 0 && (typeof c === "undefined" ? "undefined" : _typeof(c)) == "object" && (h[l] = i.join(", "), h[m] = d + "s", h[n] = e || "linear");
			}
			return _v = function v(b) {
				if (typeof b != "undefined") {
					if (b.target !== b.currentTarget) return;
					a(b.target).unbind(w, _v);
				}
				a(this).css(r), f && f.call(this);
			}, d > 0 && this.bind(w, _v), this.size() && this.get(0).clientLeft, this.css(h), d <= 0 && setTimeout(function () {
				u.each(function () {
					_v.call(this);
				});
			}, 0), this;
		}, i = null;
	}(Zepto);

	if ("function" === 'function' && _typeof(__webpack_require__(8)) === 'object' && __webpack_require__(8)) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return Zepto;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Zepto;
	} else {
		window.Zepto = window.$ = Zepto;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
]);