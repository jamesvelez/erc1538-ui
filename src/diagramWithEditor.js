/*
@license

dhtmlxDiagram v.2.2.1 Evaluation

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

*/
if (window.dhx && (window.dhx_legacy = dhx, delete window.dhx), function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.dhx = e() : t.dhx = e()
}(window, function() {
    return function(t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(n, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return n
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "/codebase/", i(i.s = 89)
    }([function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(45);
            e.el = n.defineElement, e.sv = n.defineSvgElement, e.view = n.defineView, e.create = n.createView, e.inject = n.injectView, e.KEYED_LIST = n.KEYED_LIST;
            var o = ["a", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "hatch", "hatchpath", "image", "line", "linearGradient", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "view"];

            function r(t) {
                var i = window.ResizeObserver,
                    n = function(e) {
                        var i = e.el.offsetHeight,
                            n = e.el.offsetWidth;
                        t(n, i)
                    };
                return i ? e.el("div.dhx-resize-observer", {
                    _hooks: {
                        didInsert: function(t) {
                            new i(function() {
                                return n(t)
                            }).observe(t.el)
                        }
                    }
                }) : e.el("iframe.dhx-resize-observer", {
                    _hooks: {
                        didInsert: function(t) {
                            t.el.contentWindow.onresize = function() {
                                return n(t)
                            }, n(t)
                        }
                    }
                })
            }
            e.disableHelp = function() {
                n.DEVMODE.mutations = !1, n.DEVMODE.warnings = !1, n.DEVMODE.verbose = !1, n.DEVMODE.UNKEYED_INPUT = !1
            }, e.resizer = r, e.xmlToJson = function t(e) {
                var i = {};
                if (1 === e.nodeType) {
                    if (e.attributes.length > 0) {
                        i["@attributes"] = {};
                        for (var n = 0; n < e.attributes.length; n++) {
                            var o = e.attributes.item(n);
                            i["@attributes"][o.nodeName] = o.nodeValue
                        }
                    }
                } else 3 === e.nodeType && (i = e.nodeValue);
                if (e.hasChildNodes())
                    for (var r = 0; r < e.childNodes.length; r++) {
                        var a = e.childNodes.item(r),
                            s = a.nodeName;
                        if (void 0 === i[s]) i[s] = t(a);
                        else {
                            if (void 0 === i[s].push) {
                                var c = i[s];
                                i[s] = [], i[s].push(c)
                            }
                            i[s].push(t(a))
                        }
                    }
                return i
            }, e.jsonToVDOM = function t(i) {
                var n, r, a = Object.keys(i)[0],
                    s = i[a],
                    c = s["#text"] ? [s["#text"]] : [];
                for (var l in s)
                    if (s.hasOwnProperty(l) && "@attributes" !== l && "#text" !== l)
                        if (Array.isArray(s[l]))
                            for (var u in s[l]) s[l].hasOwnProperty(u) && c.push(t(((n = {})[l] = s[l][u], n)));
                        else c.push(t(((r = {})[l] = s[l], r)));
                return -1 !== o.indexOf(a) ? e.sv(a, s["@attributes"] ? s["@attributes"] : {}, c) : e.el(a, s["@attributes"] ? s["@attributes"] : {}, c)
            }, e.resizeHandler = function(t, i) {
                return e.create({
                    render: function() {
                        return r(i)
                    }
                }).mount(t)
            }, e.awaitRedraw = function() {
                return new t(function(t) {
                    requestAnimationFrame(function() {
                        t()
                    })
                })
            }
        }).call(this, i(6))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };

        function o(t, e, i) {
            for (void 0 === e && (e = "dhx_id"), void 0 === i && (i = "target"), t instanceof Event && (t = t[i]); t;) {
                if (t.getAttribute && t.getAttribute(e)) return t;
                t = t.parentNode
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), i(39), e.toNode = function(t) {
            return "string" == typeof t && (t = document.getElementById(t) || document.querySelector(t)), t || document.body
        }, e.eventHandler = function(t, e) {
            var i = Object.keys(e);
            return function(n) {
                for (var o = t(n), r = n.target; r;) {
                    var a = r.getAttribute && r.getAttribute("class") || "";
                    if (a.length)
                        for (var s = a.split(" "), c = 0; c < i.length; c++)
                            if (s.indexOf(i[c]) > -1) return e[i[c]](n, o);
                    r = r.parentNode
                }
                return !0
            }
        }, e.locate = function(t, e) {
            void 0 === e && (e = "dhx_id");
            var i = o(t, e);
            return i ? i.getAttribute(e) : ""
        }, e.locateNode = o, e.getBox = function(t) {
            var e = t.getBoundingClientRect(),
                i = document.body,
                n = window.pageYOffset || i.scrollTop,
                o = window.pageXOffset || i.scrollLeft;
            return {
                top: e.top + n,
                left: e.left + o,
                right: i.offsetWidth - e.right,
                bottom: i.offsetHeight - e.bottom,
                width: e.right - e.left,
                height: e.bottom - e.top
            }
        };
        var r, a = -1;

        function s(t) {
            var e = t.getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                right: e.right + window.pageXOffset,
                top: e.top + window.pageYOffset,
                bottom: e.bottom + window.pageYOffset
            }
        }

        function c(t, e) {
            var i = e.mode === r.bottom || e.mode === r.top ? u(t, e) : d(t, e),
                n = i.left,
                o = i.top;
            return {
                left: Math.round(n) + "px",
                top: Math.round(o) + "px",
                minWidth: Math.round(e.width) + "px",
                position: "absolute"
            }
        }

        function l() {
            return {
                rightBorder: window.pageXOffset + window.innerWidth,
                bottomBorder: window.pageYOffset + window.innerHeight
            }
        }

        function u(t, e) {
            var i, o, a = l(),
                s = a.rightBorder,
                c = a.bottomBorder - t.bottom - e.height,
                u = t.top - e.height;
            if (e.mode === r.bottom ? c >= 0 ? o = t.bottom : u >= 0 && (o = u) : u >= 0 ? o = u : c >= 0 && (o = t.bottom), c < 0 && u < 0) {
                if (e.auto) return d(t, n({}, e, {
                    mode: r.right,
                    auto: !1
                }));
                o = c > u ? t.bottom : u
            }
            if (e.centering) i = function(t, e, i) {
                var n = (e - (t.right - t.left)) / 2,
                    o = t.left - n,
                    r = t.right + n;
                return o >= 0 && r <= i ? o : o < 0 ? 0 : i - e
            }(t, e.width, s);
            else {
                var h = s - t.left - e.width,
                    p = t.right - e.width;
                i = h >= 0 ? t.left : p >= 0 ? p : p > h ? t.left : p
            }
            return {
                left: i,
                top: o
            }
        }

        function d(t, e) {
            var i, o, a = l(),
                s = a.rightBorder,
                c = a.bottomBorder,
                d = s - t.right - e.width,
                h = t.left - e.width;
            if (e.mode === r.right ? d >= 0 ? i = t.right : h >= 0 && (i = h) : h >= 0 ? i = h : d >= 0 && (i = t.right), h < 0 && d < 0) {
                if (e.auto) return u(t, n({}, e, {
                    mode: r.bottom,
                    auto: !1
                }));
                i = h > d ? h : t.right
            }
            if (e.centering) o = function(t, e, i) {
                var n = (e - (t.bottom - t.top)) / 2,
                    o = t.top - n,
                    r = t.bottom + n;
                return o >= 0 && r <= i ? o : o < 0 ? 0 : i - e
            }(t, e.height, s);
            else {
                var p = t.bottom - e.height,
                    g = c - t.top - e.height;
                o = g >= 0 ? t.top : p > 0 ? p : p > g ? p : t.top
            }
            return {
                left: i,
                top: o
            }
        }
        e.getScrollbarWidth = function() {
                if (a > -1) return a;
                var t = document.createElement("div");
                return document.body.appendChild(t), t.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;", a = t.offsetWidth - t.clientWidth, document.body.removeChild(t), a
            }, e.fitPosition = function(t, e) {
                return c(s(t), e)
            }, e.isIE = function() {
                var t = window.navigator.userAgent;
                return t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1
            }, e.getRealPosition = s,
            function(t) {
                t.left = "left", t.right = "right", t.bottom = "bottom", t.top = "top"
            }(r = e.Position || (e.Position = {})), e.calculatePosition = c
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = (new Date).valueOf();
        e.uid = function() {
            return "u" + o++
        }, e.extend = function t(e, i, n) {
            if (void 0 === n && (n = !0), i)
                for (var o in i) {
                    var r = i[o],
                        a = e[o];
                    !n || "object" != typeof a || a instanceof Date || a instanceof Array ? e[o] = r : t(a, r)
                }
            return e
        }, e.copy = function(t, e) {
            var i = {};
            for (var n in t) e && "$" === n[0] || (i[n] = t[n]);
            return i
        }, e.naturalSort = function(t) {
            return t.sort(function(t, e) {
                return "string" == typeof t ? t.localeCompare(e) : t - e
            })
        }, e.findIndex = function(t, e) {
            for (var i = t.length, n = 0; n < i; n++)
                if (e(t[n])) return n;
            return -1
        }, e.isEqualString = function(t, e) {
            if (t.length > e.length) return !1;
            for (var i = 0; i < t.length; i++)
                if (t[i].toLowerCase() !== e[i].toLowerCase()) return !1;
            return !0
        }, e.singleOuterClick = function(t) {
            var e = function(i) {
                t(i) && document.removeEventListener("click", e)
            };
            document.addEventListener("click", e)
        }, e.detectWidgetClick = function(t, e) {
            var i = function(i) {
                return e(n.locate(i, "dhx_widget_id") === t)
            };
            return document.addEventListener("click", i),
                function() {
                    return document.removeEventListener("click", i)
                }
        }, e.unwrapBox = function(t) {
            return Array.isArray(t) ? t[0] : t
        }, e.wrapBox = function(t) {
            return Array.isArray(t) ? t : [t]
        }, e.isDefined = function(t) {
            return null !== t && void 0 !== t
        }, e.range = function(t, e) {
            if (t > e) return [];
            for (var i = []; t <= e;) i.push(t++);
            return i
        }, e.isNumeric = function(t) {
            return !isNaN(t - parseFloat(t))
        }, e.downloadFile = function(t, e, i) {
            void 0 === i && (i = "text/plain");
            var n = new Blob([t], {
                type: i
            });
            if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(n, e);
            else {
                var o = document.createElement("a"),
                    r = URL.createObjectURL(n);
                o.href = r, o.download = e, document.body.appendChild(o), o.click(), setTimeout(function() {
                    document.body.removeChild(o), window.URL.revokeObjectURL(r)
                }, 0)
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.all = "all", t.level = "level", t.leafs = "leafs"
            }(e.TreeFilterType || (e.TreeFilterType = {})),
            function(t) {
                t.top = "top", t.bot = "bot", t.in = "in"
            }(e.DropPosition || (e.DropPosition = {})),
            function(t) {
                t.afterAdd = "afteradd", t.beforeAdd = "beforeadd", t.removeAll = "removeall", t.beforeRemove = "beforeremove", t.afterRemove = "afterremove", t.change = "change", t.load = "load", t.loadError = "loaderror"
            }(e.DataEvents || (e.DataEvents = {})),
            function(t) {
                t.beforeDrag = "beforedrag", t.beforeDrop = "beforeDrop", t.dragStart = "dragstart", t.dragEnd = "dragend", t.canDrop = "candrop", t.cancelDrop = "canceldrop", t.dropComplete = "dropcomplete", t.dragOut = "dragOut", t.dragIn = "dragIn"
            }(e.DragEvents || (e.DragEvents = {})),
            function(t) {
                t.target = "target", t.both = "both", t.source = "source"
            }(e.DragMode || (e.DragMode = {})),
            function(t) {
                t.child = "child", t.sibling = "sibling", t.complex = "complex"
            }(e.DropBehaviour || (e.DropBehaviour = {})),
            function(t) {
                t.json = "json", t.csv = "csv", t.xml = "xml"
            }(e.DataDriver || (e.DataDriver = {}))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(12),
            o = i(26);
        e.isEqualObj = function(t, e) {
            for (var i in t)
                if (t[i] !== e[i]) return !1;
            return !0
        }, e.naturalCompare = function(t, e) {
            if (isNaN(t) || isNaN(e)) {
                var i = [],
                    n = [];
                for (t.replace(/(\d+)|(\D+)/g, function(t, e, n) {
                        i.push([e || 1 / 0, n || ""])
                    }), e.replace(/(\d+)|(\D+)/g, function(t, e, i) {
                        n.push([e || 1 / 0, i || ""])
                    }); i.length && n.length;) {
                    var o = i.shift(),
                        r = n.shift(),
                        a = o[0] - r[0] || o[1].localeCompare(r[1]);
                    if (a) return a
                }
                return i.length - n.length
            }
            return t - e
        }, e.findByConf = function(t, e) {
            if ("function" == typeof e) {
                if (e.call(this, t)) return t
            } else if (e.by && e.match && t[e.by] === e.match) return t
        }, e.isDebug = function() {
            var t = window.dhx;
            if (void 0 !== t) return void 0 !== t.debug && t.debug
        }, e.dhxWarning = function(t) {
            console.warn(t)
        }, e.dhxError = function(t) {
            throw new Error(t)
        }, e.toProxy = function(t) {
            var e = typeof t;
            return "string" === e ? new n.DataProxy(t) : "object" === e ? t : void 0
        }, e.toDataDriver = function(t) {
            if ("string" == typeof t) {
                var e = window.dhx,
                    i = e && e.dataDrivers || o.dataDrivers;
                if (i[t]) return new i[t];
                console.warn("Incorrect data driver type:", t), console.warn("Available types:", JSON.stringify(Object.keys(i)))
            } else if ("object" == typeof t) return t
        }, e.copyWithoutInner = function(t, e) {
            var i = {};
            for (var n in t) "$" === n[0] || e && e[n] || (i[n] = t[n]);
            return i
        }, e.isTreeCollection = function(t) {
            return Boolean(t.getRoot)
        }, e.hasJsonOrArrayStructure = function(t) {
            if ("object" == typeof t) return !0;
            if ("string" != typeof t) return !1;
            try {
                var e = JSON.parse(t);
                return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
            } catch (t) {
                return !1
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.events = {}, this.context = t || this
            }
            return t.prototype.on = function(t, e, i) {
                var n = t.toLowerCase();
                this.events[n] = this.events[n] || [], this.events[n].push({
                    callback: e,
                    context: i || this.context
                })
            }, t.prototype.detach = function(t, e) {
                var i = t.toLowerCase(),
                    n = this.events[i];
                if (e && n && n.length)
                    for (var o = n.length - 1; o >= 0; o--) n[o].context === e && n.splice(o, 1);
                else this.events[i] = []
            }, t.prototype.fire = function(t, e) {
                void 0 === e && (e = []);
                var i = t.toLowerCase();
                return !this.events[i] || this.events[i].map(function(t) {
                    return t.callback.apply(t.context, e)
                }).indexOf(!1) < 0
            }, t.prototype.clear = function() {
                this.events = {}
            }, t
        }();
        e.EventSystem = n, e.EventsMixin = function(t) {
            var e = new n(t = t || {});
            t.detachEvent = e.detach.bind(e), t.attachEvent = e.on.bind(e), t.callEvent = e.fire.bind(e)
        }
    }, function(t, e, i) {
        (function(e, i) {
            ! function() {
                var n = 1,
                    o = {},
                    r = !1;

                function a(t) {
                    e.setImmediate ? i(t) : e.importScripts ? setTimeout(t) : (o[++n] = t, e.postMessage(n, "*"))
                }

                function s(t) {
                    "use strict";
                    if ("function" != typeof t && void 0 != t) throw TypeError();
                    if ("object" != typeof this || this && this.then) throw TypeError();
                    var e, i, n = this,
                        o = 0,
                        r = 0,
                        c = [];
                    n.promise = n, n.resolve = function(t) {
                        return e = n.fn, i = n.er, o || (r = t, o = 1, a(d)), n
                    }, n.reject = function(t) {
                        return e = n.fn, i = n.er, o || (r = t, o = 2, a(d)), n
                    }, n._d = 1, n.then = function(t, e) {
                        if (1 != this._d) throw TypeError();
                        var i = new s;
                        return i.fn = t, i.er = e, 3 == o ? i.resolve(r) : 4 == o ? i.reject(r) : c.push(i), i
                    }, n.catch = function(t) {
                        return n.then(null, t)
                    };
                    var l = function(t) {
                        o = t || 4, c.map(function(t) {
                            3 == o && t.resolve(r) || t.reject(r)
                        })
                    };
                    try {
                        "function" == typeof t && t(n.resolve, n.reject)
                    } catch (t) {
                        n.reject(t)
                    }
                    return n;

                    function u(t, e, i, n) {
                        if (2 == o) return n();
                        if ("object" != typeof r && "function" != typeof r || "function" != typeof t) n();
                        else try {
                            var a = 0;
                            t.call(r, function(t) {
                                a++ || (r = t, e())
                            }, function(t) {
                                a++ || (r = t, i())
                            })
                        } catch (t) {
                            r = t, i()
                        }
                    }

                    function d() {
                        var t;
                        try {
                            t = r && r.then
                        } catch (t) {
                            return r = t, o = 2, d()
                        }
                        u(t, function() {
                            o = 1, d()
                        }, function() {
                            o = 2, d()
                        }, function() {
                            try {
                                1 == o && "function" == typeof e ? r = e(r) : 2 == o && "function" == typeof i && (r = i(r), o = 1)
                            } catch (t) {
                                return r = t, l()
                            }
                            r == n ? (r = TypeError(), l()) : u(t, function() {
                                l(3)
                            }, l, function() {
                                l(1 == o && 3)
                            })
                        })
                    }
                }(e = this).setImmediate || e.addEventListener("message", function(t) {
                    if (t.source == e)
                        if (r) a(o[t.data]);
                        else {
                            r = !0;
                            try {
                                o[t.data]()
                            } catch (t) {}
                            delete o[t.data], r = !1
                        }
                }), s.resolve = function(t) {
                    if (1 != this._d) throw TypeError();
                    return t instanceof s ? t : new s(function(e) {
                        e(t)
                    })
                }, s.reject = function(t) {
                    if (1 != this._d) throw TypeError();
                    return new s(function(e, i) {
                        i(t)
                    })
                }, s.all = function(t) {
                    if (1 != this._d) throw TypeError();
                    if (!(t instanceof Array)) return s.reject(TypeError());
                    var e = new s;
                    return function i(n, o) {
                        return o ? e.resolve(o) : n ? e.reject(n) : (0 == t.reduce(function(t, e) {
                            return e && e.then ? t + 1 : t
                        }, 0) && e.resolve(t), void t.map(function(e, n) {
                            e && e.then && e.then(function(e) {
                                return t[n] = e, i(), e
                            }, i)
                        }))
                    }(), e
                }, s.race = function(t) {
                    if (1 != this._d) throw TypeError();
                    if (!(t instanceof Array)) return s.reject(TypeError());
                    if (0 == t.length) return new s;
                    var e = new s;
                    return function i(n, o) {
                        return o ? e.resolve(o) : n ? e.reject(n) : (0 == t.reduce(function(t, e) {
                            return e && e.then ? t + 1 : t
                        }, 0) && e.resolve(t), void t.map(function(t, e) {
                            t && t.then && t.then(function(t) {
                                i(null, t)
                            }, i)
                        }))
                    }(), e
                }, s._d = 1, t.exports = s
            }()
        }).call(this, i(16), i(41).setImmediate)
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.config = this.setDefaults(t), this.id = t.id, t.width && (t.width = parseFloat(t.width)), t.height && (t.height = parseFloat(t.height)), t.x && (t.x = parseFloat(t.x)), t.y && (t.y = parseFloat(t.y))
            }
            return t.prototype.isConnector = function() {
                return !1
            }, t.prototype.canResize = function() {
                return !0
            }, t.prototype.getCenter = function() {
                var t = this.config;
                return {
                    x: Math.abs(t.width / 2),
                    y: Math.abs(t.height / 2)
                }
            }, t.prototype.getBox = function() {
                var t = this.config,
                    e = t.x + (t.dx || 0),
                    i = e + t.width,
                    n = t.y + (t.dy || 0);
                return {
                    left: e,
                    right: i,
                    top: n,
                    bottom: n + t.height
                }
            }, t.prototype.getMetaInfo = function() {
                return [{
                    id: "text",
                    label: "Text",
                    type: "text"
                }]
            }, t.prototype.move = function(t, e) {
                this.update({
                    x: t,
                    y: e
                })
            }, t.prototype.resize = function(t, e) {
                this.update({
                    width: t,
                    height: e
                })
            }, t.prototype.rotate = function(t) {
                this.update({
                    angle: t
                })
            }, t.prototype.update = function(t) {
                for (var e in t) this.config[e] = t[e], this.config.id && (this.id = this.config.id)
            }, t.prototype.toSVG = function() {
                return ""
            }, t.prototype.getPoint = function(t, e) {
                var i = this.config;
                if (i.angle) {
                    var n = i.x + i.width / 2,
                        o = i.y + i.height / 2,
                        r = i.angle * (Math.PI / 180);
                    return {
                        x: (t - n) * Math.cos(r) - (e - o) * Math.sin(r) + n,
                        y: (t - n) * Math.sin(r) + (e - o) * Math.cos(r) + o
                    }
                }
                return {
                    x: t,
                    y: e
                }
            }, t.prototype.setCss = function(t) {
                this.config.css = t
            }, t.prototype.getCss = function() {
                return (this.config.$selected ? "dhx_selected " : "") + (this.config.css || "")
            }, t.prototype.setDefaults = function(t) {
                return t
            }, t.prototype.getCoords = function(t) {
                var e = t.x,
                    i = t.y;
                return t.dx && (e = t.x + t.dx), t.dy && (i = t.y + t.dy), {
                    x: e,
                    y: i
                }
            }, t
        }();
        e.BaseShape = n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(23);
        e.SelectionEvents = n.SelectionEvents;
        var o = i(11);
        e.DataEvents = o.DataEvents,
            function(t) {
                t.scroll = "scroll", t.beforeCollapse = "beforecollapse", t.afterCollapse = "aftercollapse", t.beforeExpand = "beforeexpand", t.afterExpand = "afterexpand", t.shapeMouseDown = "shapemousedown", t.shapeClick = "shapeclick", t.shapedDblClick = "shapedblclick", t.shapeIconClick = "shapeiconclick", t.beforeRender = "beforerender", t.shapeHover = "shapeHover", t.emptyAreaClick = "emptyAreaClick"
            }(e.DiagramEvents || (e.DiagramEvents = {}))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(37),
            r = i(2),
            a = i(0),
            s = i(31),
            c = function() {
                function t(t, e) {
                    var i = this;
                    this._config = n({}, t), this._evs = e, this._uid = r.uid(), this._handlers = {
                        change: function(t) {
                            return i._changed(t)
                        }
                    }
                }
                return t.prototype.setValue = function(t, e) {
                    var i = this._config.value;
                    t !== i && (this._config.value = t, this._config.invalid = !o.validate(t, this._config.validate), e || this._evs.fire(s.PropertyEvents.change, [this._config.id, t, i]))
                }, t.prototype.getValue = function() {
                    return this._config.value
                }, t.prototype.clear = function() {
                    this.setValue("", !0)
                }, t.prototype.toVDOM = function() {
                    return a.el(".dhx_text_item", {
                        _key: this._uid
                    }, [a.el(".dhx_value", [a.el("input", {
                        _ref: this._uid,
                        type: "text",
                        value: this._config.value,
                        class: this._config.invaild ? "dhx_invalid" : "",
                        onchange: this._handlers.change,
                        oninput: this._handlers.change
                    })])])
                }, t.prototype._changed = function(t) {
                    this.setValue(t.target.value)
                }, t
            }();
        e.Text = c
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(1),
            r = function() {
                function t(t, e) {
                    this._uid = n.uid(), this.config = e || {}
                }
                return t.prototype.mount = function(t, e) {
                    e && (this._view = e), t && this._view && this._view.mount && (this._container = o.toNode(t), this._container.tagName ? this._view.mount(this._container) : this._container.attach && this._container.attach(this))
                }, t.prototype.unmount = function() {
                    var t = this.getRootView();
                    t && t.node && (t.unmount(), this._view = null)
                }, t.prototype.getRootView = function() {
                    return this._view
                }, t.prototype.getRootNode = function() {
                    return this._view && this._view.node && this._view.node.el
                }, t.prototype.paint = function() {
                    this._view && (this._view.node || this._container) && (this._doNotRepaint = !1, this._view.redraw())
                }, t
            }();
        e.View = r, e.toViewLike = function(t) {
            return {
                getRootView: function() {
                    return t
                },
                paint: function() {
                    return t.node && t.redraw()
                },
                mount: function(e) {
                    return t.mount(e)
                }
            }
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(3)), n(i(24)), n(i(53)), n(i(54)), n(i(12)), n(i(4)), n(i(28)), n(i(27)), n(i(56)), n(i(26)), n(i(25))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(25),
            o = function() {
                function t(t) {
                    this.url = t
                }
                return t.prototype.load = function() {
                    return n.ajax.get(this.url)
                }, t.prototype.save = function(t, e) {
                    switch (e) {
                        case "delete":
                            return n.ajax.delete(this.url, t);
                        case "update":
                        case "insert":
                        default:
                            return n.ajax.post(this.url, t)
                    }
                }, t
            }();
        e.DataProxy = o
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(7),
            a = i(14),
            s = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.config = e, i.id = i.config.id, i
                }
                return n(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = this.getCenter(),
                        i = t.$selected ? t.color : "#E4E4E4",
                        n = this.getCoords(t);
                    return o.sv("g", {
                        _key: t.id,
                        transform: "translate(" + n.x + "," + n.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: this.getCss(),
                        dhx_id: t.id
                    }, [o.sv("rect", {
                        class: "dhx_item_shape",
                        id: t.id,
                        height: t.height,
                        width: t.width,
                        rx: 1,
                        ry: 1,
                        stroke: i,
                        "stroke-width": 1
                    }), a.getTextTemplate(t, this.text()), a.getHeaderTpl(t), a.getCircleTpl(t)])
                }, e.prototype.getMetaInfo = function() {
                    return [{
                        id: "text",
                        label: "Text",
                        type: "text"
                    }]
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_item " + t.prototype.getCss.call(this)
                }, e.prototype.setDefaults = function(t) {
                    return t.width = t.width || 140, t.height = t.height || 90, t
                }, e.prototype.text = function() {
                    return this.config.text
                }, e
            }(r.BaseShape);
        e.OrgChartCard = s
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0);
        e.getCircleTpl = function(t) {
            if (!t.$count && !1 !== t.open || !t.$kids) return "";
            var e = "vertical" === t.dir,
                i = !1 === t.open,
                o = t.width / 2,
                r = t.height / 2,
                a = {
                    x: e ? 0 : o,
                    y: e ? r : t.height
                },
                s = i ? n.sv("polyline", {
                    points: a.x - 5 + "," + a.y + "\n\t\t\t" + a.x + "," + a.y + "\n\t\t\t" + a.x + "," + (a.y - 5) + "\n\t\t\t" + a.x + "," + (a.y + 5) + "\n\t\t\t" + a.x + "," + a.y + "\n\t\t\t" + (a.x + 5) + "," + a.y,
                    "stroke-width": "2",
                    stroke: "white",
                    fill: "none"
                }) : n.sv("line", {
                    x1: a.x - 5,
                    y1: a.y,
                    x2: a.x + 5,
                    y2: a.y,
                    "stroke-width": "2",
                    stroke: "white"
                });
            return n.sv("g", {
                x: a.x,
                y: a.y,
                dhx_diagram: "hide",
                class: i ? "dhx_expand_icon" : "dhx_hide_icon"
            }, [n.sv("circle", {
                r: 10,
                cx: a.x,
                cy: a.y,
                fill: t.$expandColor
            }), s])
        }, e.getHeaderTpl = function(t) {
            var e = t.color || "#20b6e2";
            return n.sv("rect", {
                height: 3.5,
                width: t.width,
                class: "dhx_item_header",
                stroke: e,
                fill: e,
                "stroke-width": 1
            })
        }, e.getTextTemplate = function(t, e) {
            return t.text || t.title ? n.sv("foreignObject", {
                width: t.width,
                overflow: "hidden",
                height: t.height,
                transform: "translate(0 0)"
            }, [n.el("div", {
                class: "shape_content",
                style: "width:" + t.width + "px;height:" + t.height + "px;"
            }, e)]) : null
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom", t.center = "center"
            }(e.RealPosition || (e.RealPosition = {})),
            function(t) {
                t.right = "right", t.bottom = "bottom", t.center = "center"
            }(e.Position || (e.Position = {})),
            function(t) {
                t.topLeft = "top-left", t.topRight = "top-right", t.bottomLeft = "bottom-left", t.bottomRight = "bottom-right"
            }(e.MessageContainerPosition || (e.MessageContainerPosition = {}))
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(57),
            o = i(13),
            r = i(58),
            a = i(59),
            s = i(60),
            c = i(18),
            l = i(61),
            u = i(62);
        for (var d in e.shapes = {
                line: n.Line,
                dash: n.Line,
                card: o.OrgChartCard,
                "img-card": r.OrgChartImgCard,
                "svg-card": a.OrgChartSvgCard,
                "svg-img-card": s.OrgChartSvgImgCard,
                text: l.DiagramTextShape,
                "custom-content": u.CustomContent
            }, c.flowShapes) e.shapes[d] = c.DiagramFlowShape;
        e.shapesFactory = function(t, i) {
            h(t);
            var n = e.shapes[t.type];
            return !n && (n = e.shapes.card, i[t.type]) ? new c.DiagramFlowShape(t, i) : new n(t)
        };
        var h = function(t) {
            window.SVGForeignObjectElement || ("img-card" === t.type && (t.type = "svg-img-card"), "card" === t.type && (t.type = "svg-card"))
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(14),
            a = function(t) {
                function i(e, i) {
                    var n = t.call(this, e) || this;
                    return n.shapes = i, n.config = e, n.id = n.config.id, n
                }
                return n(i, t), i.prototype.getMetaInfo = function() {
                    return [{
                        id: "fill",
                        type: "color",
                        label: "Fill",
                        hint: "Top line",
                        value: "#FFDDFF"
                    }, {
                        id: "text",
                        label: "Content",
                        type: "text"
                    }, {
                        id: "strokeProps",
                        type: "stroke",
                        label: "Stroke"
                    }, {
                        id: "textProps",
                        type: "textProps",
                        label: "Text"
                    }]
                }, i.prototype.toSVG = function() {
                    this.config.strokeType && ("dash" === this.config.strokeType && (this.config.strokeDash = "5,5"), "none" === this.config.strokeType && (this.config.stroke = "none"));
                    var t = this.config,
                        e = this.getCenter(),
                        i = this.getCoords(t);
                    return o.sv("g", {
                        _key: t.id,
                        transform: "translate(" + i.x + "," + i.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: "dhx_diagram_flow_item " + this.getCss(),
                        dhx_id: t.id
                    }, this._getShapeStruct(t).concat([r.getCircleTpl(t)]))
                }, i.prototype.setDefaults = function(t) {
                    var e = t.width,
                        i = t.height,
                        n = t.stroke,
                        o = t.extraLinesStroke,
                        r = t.fill,
                        a = t.strokeWidth,
                        s = t.fontColor,
                        c = t.textAlign,
                        l = t.lineHeight,
                        u = t.fontStyle,
                        d = t.textVerticalAlign,
                        h = t.type,
                        p = t.fontSize,
                        g = ["circle", "or", "junction"].indexOf(h) >= 0,
                        f = "roll" === h ? "#DEDEDE" : o || "#FFF";
                    return t.width = e || (g ? 90 : 140), t.height = i || 90, t.stroke = n || "#DEDEDE", t.extraLinesStroke = f, t.fill = r || "#DEDEDE", t.strokeWidth = a || 1, t.fontColor = s || "#4C4C4C", t.fontSize = p || 14, t.textAlign = c || "center", t.lineHeight = l || 14, t.fontStyle = u || "normal", t.textVerticalAlign = d || "center", t
                }, i.prototype._getShapeStruct = function(t) {
                    var i = e.flowShapes[t.type] || this.shapes[t.type];
                    if ("function" == typeof i) return this._getShapeFromFunction(i);
                    var n, r = t.width,
                        a = t.height,
                        s = t.stroke,
                        c = t.fill,
                        l = t.strokeWidth,
                        u = t.strokeDash,
                        d = t.extraLinesStroke,
                        h = Math.round(t.width / 12),
                        p = i.path(r, a, h),
                        g = i.additionalPath(r, a, h);
                    return i.text ? n = function(t) {
                        var e = (new DOMParser).parseFromString(t, "text/xml");
                        return o.sv("g", {}, [o.jsonToVDOM(o.xmlToJson(e))])
                    }(i.text(this.config)) : t.text && (n = this._getText()), [function(t) {
                        return o.sv("path", {
                            d: t,
                            class: "dhx_diagram_flow__shape dhx_item_shape ",
                            stroke: s,
                            fill: c,
                            "stroke-width": l,
                            "stroke-dasharray": u || ""
                        })
                    }(p), function(t) {
                        return o.sv("path", {
                            d: t,
                            fill: "none",
                            stroke: d,
                            class: "dhx_diagram_extra_lines"
                        })
                    }(g), n]
                }, i.prototype._getShapeFromFunction = function(t) {
                    var e = (new DOMParser).parseFromString(t(this.config), "text/xml");
                    return window.SVGForeignObjectElement ? [o.sv("foreignObject", {
                        overflow: "hidden",
                        width: this.config.width,
                        height: this.config.height,
                        transform: "translate(0 0)"
                    }, [o.jsonToVDOM(o.xmlToJson(e))])] : [o.jsonToVDOM(o.xmlToJson(e))]
                }, i.prototype._getText = function() {
                    var t = this.config,
                        e = t.textVerticalAlign;
                    if (t.text) {
                        var i = t.text.split(/\r?\n/).filter(function(t) {
                                return t.trim()
                            }),
                            n = 1 === i.length ? .35 : .6,
                            r = {
                                left: 10,
                                center: t.width / 2,
                                right: t.width - 10
                            },
                            a = i.map(function(e) {
                                var i = o.sv("tspan", {
                                    class: "dhx_content_text",
                                    x: r[t.textAlign],
                                    dy: n + "em"
                                }, e.trim());
                                return n = t.lineHeight / 14 * 1.2, i
                            }),
                            s = {
                                top: 10,
                                center: t.height / (i.length + 1),
                                bottom: t.height - 17 * i.length
                            };
                        return o.sv("text", {
                            y: s[e],
                            x: t.width / 2,
                            "text-anchor": {
                                left: "start",
                                center: "middle",
                                right: "end"
                            }[t.textAlign],
                            "font-size": t.fontSize,
                            "font-style": t.fontStyle,
                            "font-weight": t.fontWeight,
                            fill: t.fontColor
                        }, a)
                    }
                }, i
            }(i(7).BaseShape);
        e.DiagramFlowShape = a, e.flowShapes = {
            circle: {
                path: function(t, e) {
                    return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
                },
                additionalPath: function() {}
            },
            rectangle: {
                path: function(t, e) {
                    return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                },
                additionalPath: function() {}
            },
            triangle: {
                path: function(t, e) {
                    return "M " + t / 2 + " 0 L" + t + " " + e + " L 0 " + e + " z"
                },
                additionalPath: function() {}
            },
            start: {
                path: function(t, e) {
                    return "\n\t\t\tM " + e / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + e / 2 + "," + e + "\n\t\t\tH " + (t - e / 2) + " A " + e / 2 + "," + e / 2 + " 0 1 0 " + (t - e / 2) + ",0 H " + e / 2 + " Z"
                },
                additionalPath: function() {}
            },
            end: {
                path: function(t, e) {
                    return "\n\t\t\tM " + e / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + e / 2 + "," + e + "\n\t\t\tH " + (t - e / 2) + " A " + e / 2 + "," + e / 2 + " 0 1 0 " + (t - e / 2) + ",0 H " + e / 2 + " Z"
                },
                additionalPath: function() {}
            },
            process: {
                path: function(t, e) {
                    return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                },
                additionalPath: function() {}
            },
            output: {
                path: function(t, e, i) {
                    return "M " + 2 * i + ",0 " + t + ",0 " + (t - 2 * i) + "," + e + " 0," + e + " Z"
                },
                additionalPath: function() {}
            },
            decision: {
                path: function(t, e) {
                    return "M 0 " + e / 2 + " L " + t / 2 + " 0 L " + t + " " + e / 2 + " L " + t / 2 + " " + e + " Z"
                },
                additionalPath: function() {}
            },
            display: {
                path: function(t, e) {
                    return "\n\t\t\tM 0 " + e / 2 + " L " + t / 4 + " 0 H " + 3 * t / 4 + "\n\t\t\tA " + t / 4 + "," + e / 2 + " 0 1 1 " + 3 * t / 4 + "," + e + "\n\t\t\tH " + t / 4 + " Z"
                },
                additionalPath: function() {}
            },
            document: {
                path: function(t, e) {
                    return "M0 " + e + " C\n\t\t\t" + t / 6 + " " + 10 * e / 9 + ",\n\t\t\t" + t / 3 + " " + 10 * e / 9 + ",\n\t\t\t" + t / 2 + " " + e + " S\n\t\t\t" + 5 * t / 6 + " " + 8 * e / 9 + ",\n\t\t\t" + t + " " + e + "\n\t\t\tV 0 H 0 Z"
                },
                additionalPath: function() {}
            },
            data: {
                path: function(t, e, i) {
                    return "M " + i + " 0 Q\n\t\t\t" + -i + " " + e / 2 + ",\n\t\t\t" + i + " " + e + " H " + t + " Q\n\t\t\t" + (t - 2 * i) + " " + e / 2 + ",\n\t\t\t" + t + " 0 Z"
                },
                additionalPath: function() {}
            },
            database: {
                path: function(t, e, i) {
                    return "M 0 " + i + " A " + t / 2 + "," + i + " 0 1 0 " + t + "," + i + "\n\t\t\tA " + t / 2 + "," + i + " 0 1 0 0," + i + "\n\t\t\tV " + e + " H " + t + " V " + i
                },
                additionalPath: function(t, e, i) {
                    return "M 0 " + i + " A " + t / 2 + "," + i + " 0 1 0 " + t + "," + i
                }
            },
            internal: {
                path: function(t, e) {
                    return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                },
                additionalPath: function(t, e, i) {
                    return "M " + i + " 0 V " + e + " M 0 " + i + " H " + t
                }
            },
            offline: {
                path: function(t, e) {
                    return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z"
                },
                additionalPath: function(t, e, i) {
                    var n = e / Math.sqrt(Math.pow(t / 2, 2) + Math.pow(e, 2)),
                        o = Math.sqrt(Math.pow(i / n, 2) - Math.pow(i, 2));
                    return "M " + (t / 2 - o) + " " + (e - i) + " h " + 2 * o
                }
            },
            delay: {
                path: function(t, e) {
                    return "\n\t\t\tM 0 0 H " + 3 * t / 4 + "\n\t\t\tA " + t / 4 + "," + e / 2 + " 0 1 1 " + 3 * t / 4 + "," + e + "\n\t\t\tH 0 Z"
                },
                additionalPath: function() {}
            },
            page: {
                path: function(t, e) {
                    return "\n\t\t\tM 0,0\n\t\t\t" + t + ",0\n\t\t\t" + t + "," + e / 2 + "\n\t\t\t" + t / 2 + "," + e + "\n\t\t\t0," + e / 2 + " Z"
                },
                additionalPath: function() {}
            },
            input: {
                path: function(t, e) {
                    return "\n\t\t\tM 0," + e / 3 + "\n\t\t\t" + t + ",0\n\t\t\t" + t + "," + e + "\n\t\t\t0," + e + " Z"
                },
                additionalPath: function() {}
            },
            operation: {
                path: function(t, e) {
                    return "\n\t\t\tM 0,0\n\t\t\t" + t + ",0\n\t\t\t" + 3 * t / 4 + "," + e + "\n\t\t\t" + t / 4 + "," + e + " Z"
                },
                additionalPath: function() {}
            },
            punchcard: {
                path: function(t, e) {
                    return "\n\t\t\tM 0," + e / 4 + "\n\t\t\t" + t / 4 + ",0\n\t\t\t" + t + ",0\n\t\t\t" + t + "," + e + "\n\t\t\t0," + e + " Z"
                },
                additionalPath: function() {}
            },
            subroutine: {
                path: function(t, e) {
                    return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                },
                additionalPath: function(t, e, i) {
                    return "M " + i + " 0 V " + e + " M " + (t - i) + " 0 V " + e
                }
            },
            comment: {
                path: function(t, e) {
                    return "M " + t + " 0 H 0 V " + e + " H" + t + " V" + (e - 4) + " H4 V4 H" + t
                },
                additionalPath: function() {}
            },
            storage: {
                path: function(t, e) {
                    return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z"
                },
                additionalPath: function() {}
            },
            extract: {
                path: function(t, e) {
                    return "M 0," + e + " " + t + "," + e + " " + t / 2 + ",0 Z"
                },
                additionalPath: function() {}
            },
            collate: {
                path: function(t, e) {
                    return "M " + t / 2 + " " + e / 2 + " L 0 0 H " + t + " L 0 " + e + " H " + t + " Z"
                },
                additionalPath: function() {}
            },
            or: {
                path: function(t, e) {
                    return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
                },
                additionalPath: function(t, e) {
                    return "\n\t\t\tM" + (t - e) / 2 + " " + e / 2 + " " + (t - (t - e) / 2) + " " + e / 2 + "\n\t\t\tM" + t / 2 + " 0 " + t / 2 + " " + e
                }
            },
            junction: {
                path: function(t, e) {
                    return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
                },
                additionalPath: function(t, e) {
                    return "\n\t\t\tM " + (t / 2 - e * Math.SQRT2 / 4) + " " + (e / 2 - e * Math.SQRT2 / 4) + " L " + (t / 2 + e * Math.SQRT2 / 4) + " " + (e / 2 + e * Math.SQRT2 / 4) + "\n\t\t\tM " + (t / 2 - e * Math.SQRT2 / 4) + " " + (e / 2 + e * Math.SQRT2 / 4) + " L " + (t / 2 + e * Math.SQRT2 / 4) + " " + (e / 2 - e * Math.SQRT2 / 4)
                }
            },
            keyring: {
                path: function(t, e, i) {
                    return "\n\t\t\tM " + i + " 0 A " + i + "," + e / 2 + " 0 1 0 " + i + "," + e + "\n\t\t\tH " + (t - i) + " A " + i + "," + e / 2 + " 0 1 0 " + (t - i) + ",0 H " + i + " Z"
                },
                additionalPath: function() {}
            },
            tape: {
                path: function(t, e) {
                    return "\n\t\t\tM0 " + e + " C\n\t\t\t" + t / 6 + " " + 10 * e / 9 + ",\n\t\t\t" + t / 3 + " " + 10 * e / 9 + ",\n\t\t\t" + t / 2 + " " + e + " S\n\t\t\t" + 5 * t / 6 + " " + 8 * e / 9 + ",\n\t\t\t" + t + " " + e + "\n\t\t\tV 0 C\n\t\t\t" + 5 * t / 6 + " " + -e / 9 + ",\n\t\t\t" + 2 * t / 3 + " " + -e / 9 + ",\n\t\t\t" + t / 2 + " 0 S\n\t\t\t" + 1 * t / 6 + " " + e / 9 + ",\n\t\t\t0 0 Z"
                },
                additionalPath: function() {}
            },
            preparation: {
                path: function(t, e) {
                    return "M 0," + e / 2 + " L20 0 L" + (t - 20) + " 0 L" + t + " " + e / 2 + " L" + (t - 20) + " " + e + " L20 " + e
                },
                additionalPath: function() {}
            },
            endpoint: {
                path: function(t, e) {
                    return "M0 " + e / 2 + "  L" + t / 2 + " 0 L " + t / 2 + " " + e + " z"
                },
                additionalPath: function() {}
            },
            roll: {
                path: function(t, e) {
                    return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
                },
                additionalPath: function(t, e) {
                    return "M " + t / 2 + " " + e + " H " + t
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = {
                rotate: i(96),
                elbow: i(97),
                straight: i(98),
                curved: i(99),
                "align-bottom": i(100),
                "align-center": i(101),
                "align-left": i(102),
                "align-right": i(103),
                "align-middle": i(104),
                "align-top": i(105),
                "align-horizontal-center": i(106),
                "align-horizontal-left": i(107),
                "align-horizontal-right": i(108),
                "align-vertical-bottom": i(109),
                "align-vertical-top": i(110),
                "align-vertical-middle": i(111),
                "text-shape": i(112),
                "image-shape": i(113),
                "filled-arrow": i(114),
                "filled-arrow-rewerse": i(115),
                line: i(116),
                duplicate: i(117),
                connect: i(118),
                "change-shape": i(119),
                plus: i(120),
                minus: i(121),
                "remove-point": i(122)
            };
        e.getIcon = function(t, e, i, r) {
            void 0 === i && (i = 20), void 0 === r && (r = 20);
            var a = o[t].replace("data:image/svg+xml;base64,", "");
            return n.el("i", {
                ".innerHTML": window.atob(a),
                class: e || "",
                _key: t,
                style: {
                    width: i,
                    height: r,
                    display: "block",
                    pointerEvents: "none"
                }
            })
        }, e.addIcon = function() {
            return n.sv("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, [n.sv("path", {
                d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            })])
        }, e.removeIcon = function() {
            return n.sv("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, [n.sv("path", {
                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
            })])
        }, e.verticalIcon = function() {
            return n.sv("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "18",
                viewBox: "0 0 10 18"
            }, [n.sv("path", {
                d: "M2.5,5 C1.11928813,5 0,3.88071187 0,2.5 C0,1.11928813 1.11928813,0 2.5,0 C3.88071187,0 5,1.11928813 5,2.5 C5,3.88071187 3.88071187,5 2.5,5 Z M10,11 L5,11 L5,9 L3,9 L3,11 L3,15 L5,15 L5,13 L10,13 L10,18 L5,18 L5,16 L2,16 L2,15 L2,11 L2,9 L2,8 L2,5 L2.5,5 L3,5 L3,8 L5,8 L5,6 L10,6 L10,11 Z"
            })])
        }, e.horizontalIcon = function() {
            return n.sv("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "15",
                viewBox: "0 0 20 15",
                transform: "translate(.5,.5)"
            }, [n.sv("path", {
                d: "M10,4.94999094 L10,7 L17,7 L17,7.5 L17,10 L16,10 L16,8 L10,8 L10,10 L9,10 L9,8 L3,8 L3,10 L2,10 L2,7 L2.5,7 L9,7 L9,4.94999094 C7.85887984,4.71835578 7,3.70947896 7,2.5 C7,1.11928813 8.11928813,0 9.5,0 C10.8807119,0 12,1.11928813 12,2.5 C12,3.70947896 11.1411202,4.71835578 10,4.94999094 Z M-2.90878432e-13,10 L5,10 L5,15 L-2.90878432e-13,15 L-2.90878432e-13,10 Z M14,10 L19,10 L19,15 L14,15 L14,10 Z M7,10 L12,10 L12,15 L7,15 L7,10 Z"
            })])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            apply: "apply",
            reject: "reject"
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            var e = document.activeElement;
            e.classList.contains("dhx_alert__confirm-reject") || e.classList.contains("dhx_alert__confirm-aply") || t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.blockScreen = function(t) {
            var e = document.createElement("div");
            return e.className = "dhx_alert__overlay " + (t || ""), document.body.appendChild(e), document.addEventListener("keydown", n),
                function() {
                    document.body.removeChild(e), document.removeEventListener("keydown", n)
                }
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };

        function o(t, e, i) {
            var o = {
                top: {
                    x: (t = n({}, t)).x + t.width / 2,
                    y: t.y - e
                },
                bottom: {
                    x: t.x + t.width / 2,
                    y: t.y + t.height + e
                },
                left: {
                    x: t.x - e,
                    y: t.y + t.height / 2
                },
                right: {
                    x: t.x + t.width + e,
                    y: t.y + t.height / 2
                }
            };
            return i ? [o[i] || o].map(function(e) {
                return t.$shape.getPoint(e.x, e.y)
            }) : [o.top, o.bottom, o.left, o.right].map(function(e) {
                return t.$shape.getPoint(e.x, e.y)
            })
        }

        function r(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return Math.sqrt(i * i + n * n)
        }

        function a(t, e, i, o, r, a) {
            if (void 0 === a && (a = 10), !r) {
                var s = i.y === o.y ? +a : 0,
                    c = i.x === o.x ? +a : 0;
                return [t, {
                    x1: i.x,
                    y1: i.y,
                    x: i.x + s,
                    y: i.y + c
                }, {
                    x: o.x - s,
                    y: o.y - c
                }, {
                    x1: o.x,
                    y1: o.y,
                    x: e.x,
                    y: e.y
                }]
            }
            var l = o.x < r.x ? -1 : 1,
                u = o.y < r.y ? -1 : 1,
                d = i.x > r.x ? 1 : -1,
                h = i.y > r.y ? 1 : -1,
                p = n({}, r),
                g = n({}, o),
                f = {
                    x1: r.x,
                    y1: r.y,
                    x: r.x,
                    y: r.y + a * u
                };
            return i.x === r.x && (p.y += a * h, g.x -= a * l, f = {
                x1: r.x,
                y1: r.y,
                x: r.x + a * l,
                y: r.y
            }), i.y === r.y && (p.x += a * d, g.y -= a * u, f = {
                x1: r.x,
                y1: r.y,
                x: r.x,
                y: r.y + a * u
            }), [t, i, p, f, g, {
                x1: o.x,
                y1: o.y,
                x: e.x,
                y: e.y
            }]
        }

        function s(t, e, i) {
            return [t, {
                x1: i.x,
                y1: i.y,
                x: e.x,
                y: e.y
            }]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.nearestLinkPath = function(t, e, i, n) {
            if (e && i) {
                var c = function(t, e, i, n, c, l) {
                    void 0 === c && (c = ""), void 0 === l && (l = "");
                    for (var u, d = o(e, 0, c), h = o(i, 0, l), p = o(e, n, c), g = o(i, n, l), f = 1 / 0, v = 0; v < p.length; v++)
                        for (var _ = p[v], y = 0; y < g.length; y++) {
                            var m = g[y],
                                I = r(_, m);
                            if (f > I)
                                if (f = I, _.x === m.x || _.y === m.y) d[v].x === _.x && _.x === h[y].x || d[v].y === _.y && h[y].y === _.y ? u = [d[v], h[y]] : (u = [d[v], _, m, h[y]], t.cornersRadius && "straight" !== t.connectType && (u = a(d[v], h[y], _, m, null, t.cornersRadius)));
                                else {
                                    var x = _.x < d[v].x && _.x < m.x,
                                        b = _.y > d[v].y && _.y > m.y,
                                        w = d[v].x === _.x || x ? {
                                            x: _.x,
                                            y: m.y
                                        } : {
                                            x: m.x,
                                            y: _.y
                                        };
                                    w = b ? {
                                        x: m.x,
                                        y: _.y
                                    } : w, u = "curved" === t.connectType ? s(d[v], h[y], w) : t.cornersRadius && "straight" !== t.connectType ? a(d[v], h[y], _, m, w, t.cornersRadius) : [d[v], _, w, m, h[y]]
                                }
                        }
                    return u
                }(t, e, i, n.lineGap, t.fromSide, t.toSide);
                if ("straight" === t.connectType) return t.points = [c[0], c[c.length - 1]];
                if (t.points) {
                    if (t.points.length === c.length) t.points = t.points.map(function(t, e) {
                        return t && c[e] && !t.$custom ? c[e] : t
                    });
                    else {
                        var l = t.points.filter(function(t) {
                            return t.$custom
                        });
                        t.points = l.length ? t.points : c
                    }
                    t.$move || (t.points[0] = c[0], t.points[t.points.length - 1] = c[c.length - 1])
                } else t.points = c
            }
        }, e.directLinkPath = function(t, e, i, n) {
            var o = e.x + (e.dx || 0),
                r = e.y + (e.dy || 0),
                a = i.x + (i.dx || 0),
                s = i.y + (i.dy || 0);
            if ("vertical" === e.dir) {
                var c = o,
                    l = Math.round(r + e.height / 2),
                    u = a,
                    d = Math.round(s + i.height / 2),
                    h = .5 - Math.round(n.margin.itemX / 2);
                t.points = [{
                    x: c,
                    y: l
                }, {
                    x: c + h,
                    y: l
                }, {
                    x: c + h,
                    y: d
                }, {
                    x: u,
                    y: d
                }]
            } else c = Math.round(o + e.width / 2), l = r + e.height, u = Math.round(a + i.width / 2), d = s, h = Math.round(n.margin.itemY / 2) + .5, t.points = [{
                x: c,
                y: l
            }, {
                x: c,
                y: l + h
            }, {
                x: u,
                y: l + h
            }, {
                x: u,
                y: d
            }]
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.beforeUnSelect = "beforeunselect", t.afterUnSelect = "afterunselect", t.beforeSelect = "beforeselect", t.afterSelect = "afterselect"
            }(e.SelectionEvents || (e.SelectionEvents = {}))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(5),
            r = i(49),
            a = i(52),
            s = i(12),
            c = i(4),
            l = i(3),
            u = i(2),
            d = function() {
                function t(t, e) {
                    this.config = t || {}, this._order = [], this._pull = {}, this._changes = {
                        order: []
                    }, this._initOrder = null, this._sort = new a.Sort, this._loader = new r.Loader(this, this._changes), this.events = e || new o.EventSystem(this), this.events.on(l.DataEvents.loadError, function(t) {
                        "string" != typeof t ? c.dhxError(t) : c.dhxWarning(t)
                    })
                }
                return t.prototype.add = function(t, e) {
                    var i = this;
                    if (this.events.fire(l.DataEvents.beforeAdd, [t])) {
                        if (Array.isArray(t)) return t.map(function(t, n) {
                            0 !== n && (e += 1);
                            var o = i._addCore(t, e);
                            return i._onChange("add", t.id, t), i.events.fire(l.DataEvents.afterAdd, [t]), o
                        });
                        var n = this._addCore(t, e);
                        return this._onChange("add", t.id, t), this.events.fire(l.DataEvents.afterAdd, [t]), n
                    }
                }, t.prototype.remove = function(t) {
                    var e = this;
                    if (t)
                        if (t instanceof Array) t.map(function(t) {
                            var i = e._pull[t];
                            if (i) {
                                if (!e.events.fire(l.DataEvents.beforeRemove, [i])) return;
                                e._removeCore(i.id), e._onChange("remove", t, i)
                            }
                            e.events.fire(l.DataEvents.afterRemove, [i])
                        });
                        else {
                            var i = this._pull[t];
                            if (i) {
                                if (!this.events.fire(l.DataEvents.beforeRemove, [i])) return;
                                this._removeCore(i.id), this._onChange("remove", t, i)
                            }
                            this.events.fire(l.DataEvents.afterRemove, [i])
                        }
                }, t.prototype.removeAll = function() {
                    this._removeAll(), this.events.fire(l.DataEvents.removeAll), this.events.fire(l.DataEvents.change)
                }, t.prototype.exists = function(t) {
                    return !!this._pull[t]
                }, t.prototype.getNearId = function(t) {
                    if (!this._pull[t]) return this._order[0].id || ""
                }, t.prototype.getItem = function(t) {
                    return this._pull[t]
                }, t.prototype.update = function(t, e, i) {
                    var n = this.getItem(t);
                    if (n) {
                        if (c.isEqualObj(e, n)) return;
                        e.id && t !== e.id ? (c.dhxWarning("this method doesn't allow change id"), c.isDebug()) : (u.extend(this._pull[t], e, !1), this.config.update && this.config.update(this._pull[t]), i || this._onChange("update", t, this._pull[t]))
                    } else c.dhxWarning("item not found")
                }, t.prototype.getIndex = function(t) {
                    var e = u.findIndex(this._order, function(e) {
                        return e.id === t
                    });
                    return this._pull[t] && e >= 0 ? e : -1
                }, t.prototype.getId = function(t) {
                    if (this._order[t]) return this._order[t].id
                }, t.prototype.getLength = function() {
                    return this._order.length
                }, t.prototype.filter = function(t, e) {
                    if ((e = u.extend({
                            add: !1,
                            multiple: !0
                        }, e)).add || (this._order = this._initOrder || this._order, this._initOrder = null), this._filters = this._filters || {}, e.multiple && t || (this._filters = {}), t) {
                        if ("function" == typeof t) {
                            this._filters._ = {
                                match: "_",
                                compare: t
                            }
                        } else t.match ? (t.compare = t.compare || function(t, e) {
                            return t === e
                        }, this._filters[t.by] = t) : delete this._filters[t.by];
                        this._applyFilters()
                    }
                    this.events.fire(l.DataEvents.change)
                }, t.prototype.find = function(t) {
                    for (var e in this._pull) {
                        var i = c.findByConf(this._pull[e], t);
                        if (i) return i
                    }
                    return null
                }, t.prototype.findAll = function(t) {
                    var e = [];
                    for (var i in this._pull) {
                        var n = c.findByConf(this._pull[i], t);
                        n && e.push(n)
                    }
                    return e
                }, t.prototype.sort = function(t) {
                    if (t) this._sort.sort(this._order, t), this._initOrder && this._initOrder.length && this._sort.sort(this._initOrder, t);
                    else {
                        for (var e in this._order = [], this._pull) this._order.push(this._pull[e]);
                        this._applyFilters()
                    }
                    this.events.fire(l.DataEvents.change)
                }, t.prototype.copy = function(e, i, o, r) {
                    var a = this;
                    if (e instanceof Array) return e.map(function(e, s) {
                        if (!a.exists(e)) return null;
                        var l = u.uid(),
                            d = -1 === i ? -1 : i + s;
                        return o ? o instanceof t || !r ? o.exists(e) ? (o.add(n({}, c.copyWithoutInner(a.getItem(e)), {
                            id: l
                        }), d), l) : (o.add(c.copyWithoutInner(a.getItem(e)), d), e) : void o.add(c.copyWithoutInner(a.getItem(e)), d) : (a.add(n({}, c.copyWithoutInner(a.getItem(e)), {
                            id: l
                        }), d), l)
                    });
                    if (!this.exists(e)) return null;
                    var s = u.uid();
                    return o ? o instanceof t || !r ? o.exists(e) ? (o.add(n({}, c.copyWithoutInner(this.getItem(e)), {
                        id: s
                    }), i), s) : (o.add(c.copyWithoutInner(this.getItem(e)), i), e) : void o.add(c.copyWithoutInner(this.getItem(e)), i) : (this.add(n({}, c.copyWithoutInner(this.getItem(e)), {
                        id: s
                    }), i), s)
                }, t.prototype.move = function(t, e, i, n) {
                    var o = this;
                    if (t instanceof Array) return t.map(function(t, r) {
                        var a = -1 === e ? -1 : e + r;
                        if (i && i !== o && o.exists(t)) {
                            var s = u.copy(o.getItem(t), !0);
                            return i.exists(t) && (s.id = u.uid()), n && (s.parent = n), i.add(s, a), o.remove(t), s.id
                        }
                        if (o.getIndex(t) === a) return null;
                        var c = o._order.splice(o.getIndex(t), 1)[0];
                        return -1 === e && (e = o._order.length), o._order.splice(a, 0, c), o.events.fire(l.DataEvents.change), t
                    });
                    if (i && i !== this && this.exists(t)) {
                        var r = u.copy(this.getItem(t), !0);
                        return i.exists(t) && (r.id = u.uid()), n && (r.parent = n), i.add(r, e), this.remove(t), r.id
                    }
                    if (this.getIndex(t) === e) return null;
                    var a = this._order.splice(this.getIndex(t), 1)[0];
                    return -1 === e && (e = this._order.length), this._order.splice(e, 0, a), this.events.fire(l.DataEvents.change), t
                }, t.prototype.load = function(t, e) {
                    return "string" == typeof t && (t = new s.DataProxy(t)), this._loader.load(t, e)
                }, t.prototype.parse = function(t, e) {
                    return this._removeAll(), this._loader.parse(t, e)
                }, t.prototype.$parse = function(t) {
                    var e = this.config.approximate;
                    e && (t = this._approximate(t, e.value, e.maxNum)), this._parse_data(t), this.events.fire(l.DataEvents.change, ["load"]), this.events.fire(l.DataEvents.load)
                }, t.prototype.save = function(t) {
                    this._loader.save(t)
                }, t.prototype.isSaved = function() {
                    return !this._changes.order.length
                }, t.prototype.map = function(t) {
                    for (var e = [], i = 0; i < this._order.length; i++) e.push(t.call(this, this._order[i], i));
                    return e
                }, t.prototype.mapRange = function(t, e, i) {
                    t < 0 && (t = 0), e > this._order.length - 1 && (e = this._order.length - 1);
                    for (var n = [], o = t; o <= e; o++) n.push(i.call(this, this._order[o], o));
                    return n
                }, t.prototype.reduce = function(t, e) {
                    for (var i = 0; i < this._order.length; i++) e = t.call(this, e, this._order[i], i);
                    return e
                }, t.prototype.serialize = function(t) {
                    void 0 === t && (t = l.DataDriver.json);
                    var e = this.map(function(t) {
                            var e = n({}, t);
                            return Object.keys(e).forEach(function(t) {
                                "$" === t[0] && delete e[t]
                            }), e
                        }),
                        i = c.toDataDriver(t);
                    if (i) return i.serialize(e)
                }, t.prototype.getInitialData = function() {
                    return this._initOrder
                }, t.prototype._removeAll = function() {
                    this._pull = {}, this._order = [], this._changes.order = [], this._initOrder = null
                }, t.prototype._addCore = function(t, e) {
                    return this.config.init && (t = this.config.init(t)), t.id = t.id ? t.id.toString() : u.uid(), this._pull[t.id] && c.dhxError("Item already exist"), this._initOrder && this._initOrder.length && this._addToOrder(this._initOrder, t, e), this._addToOrder(this._order, t, e), t.id
                }, t.prototype._removeCore = function(t) {
                    this.getIndex(t) >= 0 && (this._order = this._order.filter(function(e) {
                        return e.id !== t
                    }), delete this._pull[t]), this._initOrder && this._initOrder.length && (this._initOrder = this._initOrder.filter(function(e) {
                        return e.id !== t
                    }))
                }, t.prototype._parse_data = function(t) {
                    var e = this._order.length;
                    this.config.prep && (t = this.config.prep(t));
                    for (var i = 0, n = t; i < n.length; i++) {
                        var o = n[i];
                        this.config.init && (o = this.config.init(o)), o.id = o.id || 0 === o.id ? o.id : u.uid(), this._pull[o.id] = o, this._order[e++] = o
                    }
                }, t.prototype._approximate = function(t, e, i) {
                    for (var n = t.length, o = e.length, r = Math.floor(n / i), a = Array(Math.ceil(n / r)), s = 0, c = 0; c < n; c += r) {
                        for (var l = u.copy(t[c]), d = Math.min(n, c + r), h = 0; h < o; h++) {
                            for (var p = 0, g = c; g < d; g++) p += t[g][e[h]];
                            l[e[h]] = p / (d - c)
                        }
                        a[s++] = l
                    }
                    return a
                }, t.prototype._onChange = function(t, e, i) {
                    for (var o = 0, r = this._changes.order; o < r.length; o++) {
                        var a = r[o];
                        if (a.id === e && !a.saving) return a.error && (a.error = !1), a = n({}, a, {
                            obj: i,
                            status: t
                        }), void this.events.fire(l.DataEvents.change, [e, t, i])
                    }
                    this._changes.order.push({
                        id: e,
                        status: t,
                        obj: n({}, i),
                        saving: !1
                    }), this.events.fire(l.DataEvents.change, [e, t, i])
                }, t.prototype._addToOrder = function(t, e, i) {
                    i >= 0 && t[i] ? (this._pull[e.id] = e, t.splice(i, 0, e)) : (this._pull[e.id] = e, t.push(e))
                }, t.prototype._applyFilters = function() {
                    var t = this;
                    if (this._filters && Object.keys(this._filters).length) {
                        var e = this._order.filter(function(e) {
                            return Object.keys(t._filters).every(function(i) {
                                return e[i] ? t._filters[i].compare(e[i], t._filters[i].match, e) : t._filters[i].compare(e)
                            })
                        });
                        this._initOrder || (this._initOrder = this._order), this._order = e
                    }
                }, t
            }();
        e.DataCollection = d
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(3),
                o = i(4);

            function r(t) {
                return t ? t.indexOf("json") >= 0 ? "json" : t.indexOf("xml") >= 0 ? "xml" : "text" : "text"
            }

            function a(e, i, a, s, c) {
                var l = s || {};
                if (c && (l.Accept = "application/" + c), "GET" !== a && (l["Content-Type"] = l["Content-Type"] || "application/json"), "GET" === a) {
                    var u = i && "object" == typeof i ? function(t) {
                        return Object.keys(t).reduce(function(e, i) {
                            var n = "object" == typeof t[i] ? JSON.stringify(t[i]) : t[i];
                            return e.push(i + "=" + encodeURIComponent(n)), e
                        }, []).join("&")
                    }(i) : i && "string" == typeof i ? i : "";
                    u && (e += -1 === e.indexOf("?") ? "?" : "&", e += u), i = null
                }
                return window.fetch ? window.fetch(e, {
                    method: a,
                    body: i ? JSON.stringify(i) : null,
                    headers: l
                }).then(function(e) {
                    if (!e.ok) return e.text().then(function(i) {
                        return t.reject({
                            status: e.status,
                            statusText: e.statusText,
                            message: i
                        })
                    });
                    var i = c || r(e.headers.get("Content-Type"));
                    if ("raw" === i) return {
                        headers: Object.fromEntries(e.headers.entries()),
                        url: e.url,
                        body: e.body
                    };
                    if (204 !== e.status) switch (i) {
                        case "json":
                            return e.json();
                        case "xml":
                            var a = o.toDataDriver(n.DataDriver.xml);
                            return a ? e.text().then(a.toJsonObject) : e.text();
                        default:
                            return e.text()
                    }
                }) : new t(function(t, s) {
                    var u = new XMLHttpRequest;
                    for (var d in u.onload = function() {
                            u.status >= 200 && u.status < 300 ? ("raw" === c && t({
                                url: u.responseURL,
                                headers: u.getAllResponseHeaders().trim().split(/[\r\n]+/).reduce(function(t, e) {
                                    var i = e.split(": ");
                                    return t[i[0]] = i[1], t
                                }, {}),
                                body: u.response
                            }), 204 === u.status ? t() : t(function(t, e) {
                                switch (e) {
                                    case "json":
                                        return JSON.parse(t);
                                    case "text":
                                        return t;
                                    case "xml":
                                        var i = o.toDataDriver(n.DataDriver.xml);
                                        return i ? i.toJsonObject(t) : {
                                            parseError: "Incorrect data driver type: 'xml'"
                                        };
                                    default:
                                        return t
                                }
                            }(u.responseText, c || r(u.getResponseHeader("Content-Type"))))) : s({
                                status: u.status,
                                statusText: u.statusText
                            })
                        }, u.onerror = function() {
                            s({
                                status: u.status,
                                statusText: u.statusText,
                                message: u.responseText
                            })
                        }, u.open(a, e), l) u.setRequestHeader(d, l[d]);
                    switch (a) {
                        case "POST":
                        case "DELETE":
                        case "PUT":
                            u.send(void 0 !== i ? JSON.stringify(i) : "");
                            break;
                        case "GET":
                        default:
                            u.send()
                    }
                })
            }
            e.ajax = {
                get: function(t, e, i) {
                    return a(t, e, "GET", i && i.headers, void 0 !== i ? i.responseType : void 0)
                },
                post: function(t, e, i) {
                    return a(t, e, "POST", i && i.headers, void 0 !== i ? i.responseType : void 0)
                },
                put: function(t, e, i) {
                    return a(t, e, "PUT", i && i.headers, void 0 !== i ? i.responseType : void 0)
                },
                delete: function(t, e, i) {
                    return a(t, e, "DELETE", i && i.headers, void 0 !== i ? i.responseType : void 0)
                }
            }
        }).call(this, i(6))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(27),
            r = i(28),
            a = i(50);
        e.dataDrivers = {
            json: o.JsonDriver,
            csv: r.CsvDriver
        }, e.dataDriversPro = n({}, e.dataDrivers, {
            xml: a.XMLDriver
        })
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.prototype.toJsonArray = function(t) {
                return this.getRows(t)
            }, t.prototype.serialize = function(t) {
                return t
            }, t.prototype.getFields = function(t) {
                return t
            }, t.prototype.getRows = function(t) {
                return "string" == typeof t ? JSON.parse(t) : t
            }, t
        }();
        e.JsonDriver = n
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t) {
                this.config = n({}, {
                    skipHeader: 0,
                    nameByHeader: !1,
                    rowDelimiter: "\n",
                    columnDelimiter: ","
                }, t), this.config.nameByHeader && (this.config.skipHeader = 1)
            }
            return t.prototype.getFields = function(t, e) {
                for (var i = t.trim().split(this.config.columnDelimiter), n = {}, o = 0; o < i.length; o++) n[e ? e[o] : o + 1] = i[o];
                return n
            }, t.prototype.getRows = function(t) {
                return t.trim().split(this.config.rowDelimiter)
            }, t.prototype.toJsonArray = function(t) {
                var e = this,
                    i = this.getRows(t),
                    n = this.config.names;
                if (this.config.skipHeader) {
                    var o = i.splice(0, this.config.skipHeader);
                    this.config.nameByHeader && (n = o[0].trim().split(this.config.columnDelimiter))
                }
                return i.map(function(t) {
                    return e.getFields(t, n)
                })
            }, t.prototype.serialize = function(t, e) {
                var i = t[0] ? Object.keys(t[0]).filter(function(t) {
                        return "$" !== t[0]
                    }).join(this.config.columnDelimiter) : "",
                    n = this._serialize(t);
                return e ? n : i + n
            }, t.prototype._serialize = function(t) {
                var e = this;
                return t.reduce(function(t, i) {
                    var n = Object.keys(i).reduce(function(t, n, o) {
                        return "$" === n[0] || "items" === n ? t : "" + t + i[n] + (o === i.length - 1 ? "" : e.config.columnDelimiter)
                    }, "");
                    return i.items ? t + "\n" + n + e._serialize(i.items) : "" + t + e.config.rowDelimiter + n
                }, "")
            }, t
        }();
        e.CsvDriver = o
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(34));
        var o = i(35);
        e.locale = o.default, n(i(8));
        var r = i(17);
        e.shapes = r.shapes, n(i(18))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.resetButton = "resetbutton", t.applyButton = "applybutton", t.shapeMove = "shapemove", t.shapeResize = "shaperesize", t.zoomIn = "zoomin", t.zoomOut = "zoomout", t.visibility = "visibility", t.shapesUp = "shapesup", t.exportData = "exportData"
            }(e.DiagramEditorEvents || (e.DiagramEditorEvents = {}))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.change = "change", t.beforeFileUpload = "onBeforeFileUpload", t.afterFileUpload = "afterFileUpload"
            }(e.PropertyEvents || (e.PropertyEvents = {}))
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(38)), n(i(40)), n(i(44)), n(i(33)), n(i(15))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(1),
            r = i(15),
            a = 750,
            s = 200;

        function c(t, e, i, n) {
            var o, a, s;
            switch (e) {
                case r.Position.center:
                    return (a = t.left + window.pageXOffset + (t.width - i) / 2) + 8 < window.pageXOffset && (a = t.left + window.pageXOffset), {
                        left: a,
                        top: s = t.top + window.pageYOffset + (t.height - n) / 2,
                        pos: o = r.RealPosition.center
                    };
                case r.Position.right:
                    return o = r.RealPosition.right, (a = t.right + window.pageXOffset) + i + 8 > window.innerWidth + window.pageXOffset && (a = window.pageXOffset + t.left - i, o = r.RealPosition.left), {
                        left: a,
                        top: s = window.pageYOffset + t.top + (t.height - n) / 2,
                        pos: o
                    };
                case r.Position.bottom:
                default:
                    return (a = window.pageXOffset + t.left + (t.width - i) / 2) + i > window.innerWidth + window.pageXOffset ? a = window.innerWidth + window.pageXOffset - i : a < 0 && (a = 0), o = r.RealPosition.bottom, (s = window.pageYOffset + t.bottom) + n + 8 > window.innerHeight + window.pageYOffset && (s = window.pageYOffset + t.top - n, o = r.RealPosition.top), {
                        left: a,
                        top: s,
                        pos: o
                    }
            }
        }
        e.findPosition = c;
        var l = document.createElement("div"),
            u = document.createElement("span");
        u.className = "dhx_tooltip__text", l.appendChild(u), l.style.position = "absolute";
        var d, h = null,
            p = !1,
            g = null,
            f = null;

        function v(t, e, i, n, o) {
            void 0 === o && (o = !1);
            var a = t.getBoundingClientRect();
            u.textContent = e, document.body.appendChild(l), l.className = "dhx_widget dhx_tooltip" + (o ? " dhx_tooltip--forced" : "");
            var s = l.getBoundingClientRect(),
                d = c(a, i, s.width, s.height),
                h = d.left,
                g = d.top,
                f = d.pos;
            switch (f) {
                case r.RealPosition.bottom:
                case r.RealPosition.top:
                case r.RealPosition.left:
                case r.RealPosition.right:
                case r.RealPosition.center:
                    l.style.left = h + "px", l.style.top = g + "px"
            }
            l.className += " dhx_tooltip--" + f + " " + (n || ""), p = !0, o || setTimeout(function() {
                l.className += " dhx_tooltip--animate"
            })
        }

        function _(t, e, i) {
            var n = i.force,
                o = i.showDelay,
                c = i.hideDelay,
                u = i.position,
                _ = i.css;
            n || (f = setTimeout(function() {
                v(t, e, u || r.Position.bottom, _)
            }, o || a));
            var y = function() {
                p && function(t) {
                    h && (g = setTimeout(function() {
                        document.body.removeChild(l), p = !1, g = null
                    }, t || s))
                }(c), clearTimeout(f), t.removeEventListener("mouseleave", y), t.removeEventListener("blur", y), document.removeEventListener("mousedown", y), h = null, d = null
            };
            n && v(t, e, u, _, n), t.addEventListener("mouseleave", y), t.addEventListener("blur", y), document.addEventListener("mousedown", y), d = y
        }

        function y(t, e) {
            var i = o.toNode(e.node);
            i !== h && (d && (d(), d = null), h = i, g ? (clearTimeout(g), g = null, _(i, t, n({}, e, {
                force: !0
            }))) : _(i, t, e))
        }

        function m(t) {
            var e = o.locateNode(t, "dhx_tooltip_text");
            e && y(e.getAttribute("dhx_tooltip_text"), {
                position: e.getAttribute("dhx_tooltip_position") || r.Position.bottom,
                node: e
            })
        }
        e.tooltip = y, e.enableTooltip = function() {
            document.addEventListener("mousemove", m)
        }, e.disableTooltip = function() {
            document.removeEventListener("mousemove", m)
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(5),
            a = i(2),
            s = i(0),
            c = i(1),
            l = i(10),
            u = i(46),
            d = i(22),
            h = i(47),
            p = i(48),
            g = i(17),
            f = i(18),
            v = i(63),
            _ = i(64),
            y = i(8),
            m = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    n.version = "2.2.1", n._set_defaults(), n._init_events(), n._init_struct(), n.config.toolbar && (n._toolbar = new _.Toolbar(n.events, n.config.toolbar));
                    var o = s.create({
                        render: function(t) {
                            return n._render(t)
                        }
                    }, n);
                    return n.mount(e, o), n
                }
                return n(e, t), e.prototype.locate = function(t) {
                    var e = c.locate(t, "dhx_id"),
                        i = this.data.getItem(e);
                    return i ? i.$shape : null
                }, e.prototype.collapseItem = function(t) {
                    this.events.fire(y.DiagramEvents.beforeCollapse, [t]) && (this.data.update(t, {
                        open: !1
                    }), this.events.fire(y.DiagramEvents.afterCollapse, [t]))
                }, e.prototype.expandItem = function(t) {
                    this.events.fire(y.DiagramEvents.beforeExpand, [t]) && (this.data.update(t, {
                        open: !0
                    }), this.events.fire(y.DiagramEvents.afterExpand, [t]))
                }, e.prototype.getScrollState = function() {
                    var t = this.getRootView().node.el;
                    return {
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }
                }, e.prototype.scrollTo = function(t, e) {
                    var i = this.getRootView().node.el;
                    i.scrollLeft = t, i.scrollTop = e
                }, e.prototype.showItem = function(t) {
                    var e = this.getRootView().node.el,
                        i = this.data.getItem(t);
                    if (i) {
                        var n = i.$shape.getBox(),
                            o = e.offsetWidth / 2,
                            r = e.offsetHeight / 2;
                        this.scrollTo(n.right + 10 - o, n.bottom + 10 - r)
                    }
                }, e.prototype._render = function(t) {
                    if (this._doNotRepaint && t.node) return t.node;
                    this._doNotRepaint = !0;
                    var e = this._getContent(),
                        i = e.size,
                        n = e.content;
                    this.events.fire(y.DiagramEvents.beforeRender, [i]);
                    var r = i.x - i.left + 2 * this.config.margin.x,
                        a = i.y - i.top + 2 * this.config.margin.y,
                        c = "org" === this.config.type ? "dhx_org_chart" : "dhx_free_diagram";
                    i.left -= this.config.margin.x, i.top -= this.config.margin.y;
                    var l = r * this.config.scale,
                        u = a * this.config.scale,
                        d = null;
                    if (this._toolbar) {
                        var h = this.selection.getId();
                        h && (d = this._toolbar.toSVG(this.data.getItem(h), i))
                    }
                    var p = null;
                    return this.config.$svg && (p = this.config.$svg(i)), s.el(".dhx_diagram.dhx_widget", o({}, this._htmlevents), [s.el(".dhx_wrapper", {
                        class: c
                    }, [s.sv("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: l,
                        height: u,
                        viewBox: i.left + " " + i.top + " " + r + " " + a
                    }, [s.sv("defs", [s.sv("filter", {
                        x: 0,
                        y: 0,
                        width: 1,
                        height: 1,
                        id: "dhx_text_background"
                    }, [s.sv("feFlood", {
                        "flood-color": "white"
                    }), s.sv("feComposite", { in : "SourceGraphic"
                    })])]), s.sv("g", {
                        "shape-rendering": 1 === this.config.scale && "org" === this.config.type ? "crispedges" : "auto"
                    }, n)]), d].concat(p))])
                }, e.prototype._init_events = function() {
                    var t = this;
                    this._htmlevents = {
                        onscroll: function() {
                            t.events.fire(y.DiagramEvents.scroll, [t.getScrollState()])
                        },
                        onmousedown: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_diagram_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeMouseDown, [i.id, e])
                            },
                            dhx_diagram_flow_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeMouseDown, [i.id, e])
                            },
                            dhx_diagram_connector: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeMouseDown, [i.id, e, t._getPoint(e.clientX, e.clientY)])
                            }
                        }),
                        onmouseover: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_diagram_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeHover, [i.id, e])
                            },
                            dhx_diagram_flow_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeHover, [i.id, e])
                            },
                            dhx_diagram_connector: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeHover, [i.id, e])
                            }
                        }),
                        onclick: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_expand_icon: function(e, i) {
                                return t.expandItem(i.id)
                            },
                            dhx_hide_icon: function(e, i) {
                                return t.collapseItem(i.id)
                            },
                            dhx_diagram_connector: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeClick, [i.id, e])
                            },
                            dhx_diagram_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeClick, [i.id, e]), t.config.select && t.selection.add(i.id)
                            },
                            dhx_diagram_flow_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapeClick, [i.id, e]), t.config.select && t.selection.add(i.id)
                            },
                            dhx_diagram: function(e) {
                                var i = e.target,
                                    n = i.getAttribute && (i.getAttribute("class") || "").match(/dhx_diagram\b/),
                                    o = "svg" === i.tagName;
                                (n || o) && t.events.fire(y.DiagramEvents.emptyAreaClick, [e])
                            }
                        }),
                        ondblclick: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_diagram_connector: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapedDblClick, [i.id, e])
                            },
                            dhx_diagram_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapedDblClick, [i.id, e])
                            },
                            dhx_diagram_flow_item: function(e, i) {
                                t.events.fire(y.DiagramEvents.shapedDblClick, [i.id, e])
                            }
                        })
                    }
                }, e.prototype._set_defaults = function() {
                    this.config = a.extend({
                        defaultShapeType: "card",
                        defaultLinkType: "line",
                        lineGap: 10,
                        scale: 1,
                        margin: {
                            x: 40,
                            y: 40,
                            itemX: 40,
                            itemY: 40
                        },
                        gridStep: 10
                    }, this.config)
                }, e.prototype._init_struct = function() {
                    var t = this;
                    this.events = new r.EventSystem(this), this.flowShapes = o({}, f.flowShapes), this.data = new v.ShapesCollection({
                        init: function(e) {
                            var i = "from" in e ? t.config.defaultLinkType : t.config.defaultShapeType;
                            return e.type = e.type || i, "org" !== t.config.type && e.from && (e.stroke = e.stroke || "#2196F3"), e.$shape = g.shapesFactory(e, t.flowShapes), e
                        },
                        update: function(t) {
                            t.$shape.config = t
                        },
                        type: this.config.type
                    }, this.events), this.selection = new p.Selection({}, this.data, this.events), this.export = new u.Exporter("diagram", this.version, this), this.data.events.on(y.DataEvents.change, function() {
                        return t.paint()
                    }), this.events.on(y.SelectionEvents.afterSelect, function() {
                        return t.paint()
                    })
                }, e.prototype._getContent = function() {
                    var t = this,
                        e = !1;
                    "org" === this.config.type && (h.placeOrgonogram(this.data, this.config), e = !0);
                    var i = {
                            x: 0,
                            y: 0,
                            left: 0,
                            top: 0,
                            scale: this.config.scale
                        },
                        n = [],
                        o = [];
                    return this.data.mapVisible(function(r) {
                        r.$shape.isConnector() ? (e || d.nearestLinkPath(r, t.data.getItem(r.from), t.data.getItem(r.to), t.config), o.push(r.$shape.toSVG())) : n.push(r.$shape.toSVG());
                        var a = r.$shape.getBox();
                        a.right > i.x && (i.x = a.right), a.left < i.left && (i.left = a.left), a.bottom > i.y && (i.y = a.bottom), a.top < i.top && (i.top = a.top)
                    }), {
                        size: i,
                        content: o.concat(n)
                    }
                }, e.prototype._getPoint = function(t, e) {
                    var i = this.getRootView().node.el.getBoundingClientRect();
                    return {
                        x: t - i.left - this.config.margin.x,
                        y: e - i.top - this.config.margin.y
                    }
                }, e
            }(l.View);
        e.Diagram = m
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            applyAll: "Apply all",
            resetChanges: "Reset Changes",
            // editCard: "Edit Card",
            // color: "Color",
            // position: "Position",
            // size: "Size"
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.beforeShow = "beforeShow", t.afterShow = "afterShow", t.beforeHide = "beforeHide", t.afterHide = "afterHide", t.beforeResizeStart = "beforeResizeStart", t.resize = "resize", t.afterResizeEnd = "afterResizeEnd", t.beforeAdd = "beforeAdd", t.afterAdd = "afterAdd", t.beforeRemove = "beforeRemove", t.afterRemove = "afterRemove", t.beforeCollapse = "beforeCollapse", t.afterCollapse = "afterCollapse"
            }(e.LayoutEvents || (e.LayoutEvents = {})),
            function(t) {
                t[t.unknown = 0] = "unknown", t[t.percents = 1] = "percents", t[t.pixels = 2] = "pixels", t[t.mixedpx1 = 3] = "mixedpx1", t[t.mixedpx2 = 4] = "mixedpx2", t[t.mixedperc1 = 5] = "mixedperc1", t[t.mixedperc2 = 6] = "mixedperc2"
            }(e.resizeMode || (e.resizeMode = {}))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            email: /^[a-z\_\-\.]+@[a-z\_\-]+\.[a-z]{2,}$/i,
            number: /^\-?[0-9]{1,6}$/,
            color: /^\#[0-9A-Fa-f]{6}$/,
            date: /^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}$/
        };
        e.validate = function(t, e) {
            var i = !0;
            return e && "string" == typeof t && "" !== t && (i = "function" == typeof(e = n[e] || e) ? e.call(this, t) : !!t.match(e)), i
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = i(15),
            r = new WeakMap,
            a = new Map;

        function s(t, e) {
            e && clearTimeout(r.get(t));
            var i = t.parentNode,
                n = i.getAttribute("data-position"),
                o = i.parentNode,
                s = a.get(o);
            if (s) {
                var c = s[n];
                if (c) {
                    var l = c.stack,
                        u = l.indexOf(t);
                    return -1 !== u ? (i.removeChild(t), l.splice(u, 1), void(0 === l.length && o.removeChild(i))) : void 0
                }
            }
        }

        function c(t, e) {
            var i = document.createElement("div");
            return i.setAttribute("data-position", e), i.className = "dhx_message-container dhx_message-container--" + e + (t === document.body ? " dhx_message-container--in-body" : ""), i
        }
        e.message = function(t) {
            var e;
            "string" == typeof t && (t = {
                text: t
            }), t.position = t.position || o.MessageContainerPosition.topRight;
            var i = document.createElement("div");
            i.className = "dhx_widget dhx_message " + (t.css || ""), t.html ? i.innerHTML = t.html : i.innerHTML = '<span class="dhx_message__text">' + t.text + "</span>\n\t\t" + (t.icon ? '<span class="dhx_message__icon dxi ' + t.icon + '"></span>' : "");
            var l = t.node ? n.toNode(t.node) : document.body;
            "static" === getComputedStyle(l).position && (l.style.position = "relative");
            var u = a.get(l);
            u ? u[t.position] || (u[t.position] = {
                stack: [],
                container: c(l, t.position)
            }) : a.set(l, ((e = {})[t.position] = {
                stack: [],
                container: c(l, t.position)
            }, e));
            var d = a.get(l)[t.position],
                h = d.stack,
                p = d.container;
            if (0 === h.length && l.appendChild(p), h.push(i), p.appendChild(i), t.expire) {
                var g = setTimeout(function() {
                    return s(i)
                }, t.expire);
                r.set(i, g)
            }
            i.onclick = function() {
                return s(i, !0)
            }
        }
    }, function(t, e) {
        if (Element && !Element.prototype.matches) {
            var i = Element.prototype;
            i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
        }
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(20),
                o = i(21);
            e.alert = function(e) {
                var i = e.buttons && e.buttons[0] ? e.buttons[0] : n.default.apply,
                    r = o.blockScreen(e.blockerCss);
                return new t(function(t) {
                    var n = document.createElement("div");
                    n.className = "dhx_widget dhx_alert " + (e.css || ""), n.innerHTML = "\n\t\t\t" + (e.header ? '<div class="dhx_alert__header"> ' + e.header + " </div>" : "") + "\n\t\t\t" + (e.text ? '<div class="dhx_alert__content">' + e.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (e.buttonsAlignment ? "dhx_alert__footer--" + e.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + i + "</button>\n\t\t\t</div>", document.body.appendChild(n), n.querySelector(".dhx_alert__apply-button").focus(), n.querySelector("button").addEventListener("click", function() {
                        r(), document.body.removeChild(n), t(!0)
                    })
                })
            }
        }).call(this, i(6))
    }, function(t, e, i) {
        (function(t) {
            var n = void 0 !== t && t || "undefined" != typeof self && self || window,
                o = Function.prototype.apply;

            function r(t, e) {
                this._id = t, this._clearFn = e
            }
            e.setTimeout = function() {
                return new r(o.call(setTimeout, n, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new r(o.call(setInterval, n, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                this._clearFn.call(n, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, i(42), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, i(16))
    }, function(t, e, i) {
        (function(t, e) {
            ! function(t, i) {
                "use strict";
                if (!t.setImmediate) {
                    var n, o = 1,
                        r = {},
                        a = !1,
                        s = t.document,
                        c = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    c = c && c.setTimeout ? c : t, "[object process]" === {}.toString.call(t.process) ? n = function(t) {
                        e.nextTick(function() {
                            u(t)
                        })
                    } : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                i = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = i, e
                        }
                    }() ? function() {
                        var e = "setImmediate$" + Math.random() + "$",
                            i = function(i) {
                                i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && u(+i.data.slice(e.length))
                            };
                        t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), n = function(i) {
                            t.postMessage(e + i, "*")
                        }
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(t) {
                            u(t.data)
                        }, n = function(e) {
                            t.port2.postMessage(e)
                        }
                    }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                        var t = s.documentElement;
                        n = function(e) {
                            var i = s.createElement("script");
                            i.onreadystatechange = function() {
                                u(e), i.onreadystatechange = null, t.removeChild(i), i = null
                            }, t.appendChild(i)
                        }
                    }() : n = function(t) {
                        setTimeout(u, 0, t)
                    }, c.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                        var a = {
                            callback: t,
                            args: e
                        };
                        return r[o] = a, n(o), o++
                    }, c.clearImmediate = l
                }

                function l(t) {
                    delete r[t]
                }

                function u(t) {
                    if (a) setTimeout(u, 0, t);
                    else {
                        var e = r[t];
                        if (e) {
                            a = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        n = t.args;
                                    switch (n.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(n[0]);
                                            break;
                                        case 2:
                                            e(n[0], n[1]);
                                            break;
                                        case 3:
                                            e(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            e.apply(i, n)
                                    }
                                }(e)
                            } finally {
                                l(t), a = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, i(16), i(43))
    }, function(t, e) {
        var i, n, o = t.exports = {};

        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (i === setTimeout) return setTimeout(t, 0);
            if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);
            try {
                return i(t, 0)
            } catch (e) {
                try {
                    return i.call(null, t, 0)
                } catch (e) {
                    return i.call(this, t, 0)
                }
            }
        }! function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                i = r
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                n = a
            }
        }();
        var c, l = [],
            u = !1,
            d = -1;

        function h() {
            u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && p())
        }

        function p() {
            if (!u) {
                var t = s(h);
                u = !0;
                for (var e = l.length; e;) {
                    for (c = l, l = []; ++d < e;) c && c[d].run();
                    d = -1, e = l.length
                }
                c = null, u = !1,
                    function(t) {
                        if (n === clearTimeout) return clearTimeout(t);
                        if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                        try {
                            n(t)
                        } catch (e) {
                            try {
                                return n.call(null, t)
                            } catch (e) {
                                return n.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function g(t, e) {
            this.fun = t, this.array = e
        }

        function f() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            l.push(new g(t, e)), 1 !== l.length || u || s(p)
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = f, o.addListener = f, o.once = f, o.off = f, o.removeListener = f, o.removeAllListeners = f, o.emit = f, o.prependListener = f, o.prependOnceListener = f, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(20),
                o = i(21);
            e.confirm = function(e) {
                var i = e.buttons && e.buttons[0] ? e.buttons[0] : n.default.apply,
                    r = e.buttons && e.buttons[1] ? e.buttons[1] : n.default.reject,
                    a = o.blockScreen(e.blockerCss);
                return new t(function(t) {
                    var n = document.createElement("div");
                    n.className = "dhx_widget dhx_alert dhx_alert--confirm" + (e.css ? " " + e.css : ""), n.innerHTML = "\n\t\t" + (e.header ? '<div class="dhx_alert__header"> ' + e.header + " </div>" : "") + "\n\t\t" + (e.text ? '<div class="dhx_alert__content">' + e.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (e.buttonsAlignment ? "dhx_alert__footer--" + e.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__confirm-aply dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium">' + i + '</button>\n\t\t\t\t<button class="dhx_alert__confirm-reject dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + r + "</button>\n\t\t\t</div>", document.body.appendChild(n), n.querySelector(".dhx_alert__confirm-reject").focus();
                    var o = function(e) {
                        "BUTTON" === e.target.tagName && function(e) {
                            a(), n.removeEventListener("click", o), document.body.removeChild(n), t(e)
                        }(e.target.classList.contains("dhx_alert__confirm-aply"))
                    };
                    n.addEventListener("click", o)
                })
            }
        }).call(this, i(6))
    }, function(t, e, i) {
        /**
         * Copyright (c) 2017, Leon Sorokin
         * All rights reserved. (MIT Licensed)
         *
         * domvm.js (DOM ViewModel)
         * A thin, fast, dependency-free vdom view layer
         * @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
         */
        t.exports = function() {
            "use strict";
            var t = 1,
                e = 2,
                i = 3,
                n = 4,
                o = 5,
                r = "undefined" != typeof window,
                a = (r ? window : {}).requestAnimationFrame,
                s = {};

            function c() {}
            var l = Array.isArray;

            function u(t) {
                return null != t
            }

            function d(t) {
                return null != t && t.constructor === Object
            }

            function h(t, e, i, n) {
                t.splice.apply(t, [i, n].concat(e))
            }

            function p(t) {
                var e = typeof t;
                return "string" === e || "number" === e
            }

            function g(t) {
                return "function" == typeof t
            }

            function f(t) {
                for (var e = arguments, i = 1; i < e.length; i++)
                    for (var n in e[i]) t[n] = e[i][n];
                return t
            }

            function v(t, e) {
                for (var i = [], n = e; n < t.length; n++) i.push(t[n]);
                return i
            }

            function _(t, e) {
                for (var i in t)
                    if (t[i] !== e[i]) return !1;
                return !0
            }

            function y(t, e) {
                var i = t.length;
                if (e.length !== i) return !1;
                for (var n = 0; n < i; n++)
                    if (t[n] !== e[n]) return !1;
                return !0
            }

            function m(t) {
                if (!a) return t;
                var e, i, n;

                function o() {
                    e = 0, t.apply(i, n)
                }
                return function() {
                    i = this, n = arguments, e || (e = a(o))
                }
            }

            function I(t) {
                return "o" === t[0] && "n" === t[1]
            }

            function x(t) {
                return "_" === t[0]
            }

            function b(t) {
                return "style" === t
            }

            function w(t) {
                t && t.el && t.el.offsetHeight
            }

            function M(t) {
                return null != t.node && null != t.node.el
            }

            function C(t, e) {
                switch (e) {
                    case "value":
                    case "checked":
                    case "selected":
                        return !0
                }
                return !1
            }

            function D(t) {
                for (t = t || s; null == t.vm && t.parent;) t = t.parent;
                return t.vm
            }

            function A() {}
            var S = A.prototype = {
                constructor: A,
                type: null,
                vm: null,
                key: null,
                ref: null,
                data: null,
                hooks: null,
                ns: null,
                el: null,
                tag: null,
                attrs: null,
                body: null,
                flags: 0,
                _class: null,
                _diff: null,
                _dead: !1,
                _lis: !1,
                idx: null,
                parent: null
            };

            function T(t) {
                var i = new A;
                return i.type = e, i.body = t, i
            }
            var j = {},
                P = /\[(\w+)(?:=(\w+))?\]/g,
                L = 1,
                E = 2,
                N = 4,
                k = 8;

            function Z(e, i, n, o) {
                var r = new A;
                r.type = t, u(o) && (r.flags = o), r.attrs = i;
                var a = function(t) {
                    var e, i, n, o, r = j[t];
                    if (null == r)
                        for (j[t] = r = {
                                tag: (e = t.match(/^[-\w]+/)) ? e[0] : "div",
                                id: (i = t.match(/#([-\w]+)/)) ? i[1] : null,
                                class: (n = t.match(/\.([-\w.]+)/)) ? n[1].replace(/\./g, " ") : null,
                                attrs: null
                            }; o = P.exec(t);) null == r.attrs && (r.attrs = {}), r.attrs[o[1]] = o[2] || "";
                    return r
                }(e);
                if (r.tag = a.tag, a.id || a.class || a.attrs) {
                    var s = r.attrs || {};
                    if (a.id && !u(s.id) && (s.id = a.id), a.class && (r._class = a.class, s.class = a.class + (u(s.class) ? " " + s.class : "")), a.attrs)
                        for (var c in a.attrs) u(s[c]) || (s[c] = a.attrs[c]);
                    r.attrs = s
                }
                var l = r.attrs;
                return u(l) && (u(l._key) && (r.key = l._key), u(l._ref) && (r.ref = l._ref), u(l._hooks) && (r.hooks = l._hooks), u(l._data) && (r.data = l._data), u(l._flags) && (r.flags = l._flags), u(r.key) || (u(r.ref) ? r.key = r.ref : u(l.id) ? r.key = l.id : u(l.name) && (r.key = l.name + ("radio" === l.type || "checkbox" === l.type ? l.value : "")))), null != n && (r.body = n), r
            }

            function z(t, i, r, a) {
                if (t.type !== o && t.type !== n) {
                    t.parent = i, t.idx = r, t.vm = a, null != t.ref && function(t, e, i) {
                        var n = ["refs"].concat(e.split("."));
                        ! function(t, e, i) {
                            for (var n; n = e.shift();) 0 === e.length ? t[n] = i : t[n] = t = t[n] || {}
                        }(t, n, i)
                    }(D(t), t.ref, t);
                    var s = t.hooks,
                        c = a && a.hooks;
                    (s && (s.willRemove || s.didRemove) || c && (c.willUnmount || c.didUnmount)) && function(t) {
                        for (; t = t.parent;) t.flags |= L
                    }(t), l(t.body) && function(t) {
                        for (var i = t.body, n = 0; n < i.length; n++) {
                            var o = i[n];
                            !1 === o || null == o ? i.splice(n--, 1) : l(o) ? h(i, o, n--, 1) : (null == o.type && (i[n] = o = T("" + o)), o.type === e ? null == o.body || "" === o.body ? i.splice(n--, 1) : n > 0 && i[n - 1].type === e ? (i[n - 1].body += o.body, i.splice(n--, 1)) : z(o, t, n, null) : z(o, t, n, null))
                        }
                    }(t)
                }
            }
            var O = {
                animationIterationCount: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridColumn: !0,
                order: !0,
                lineClamp: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            };

            function G(t, e) {
                return isNaN(e) || O[t] ? e : e + "px"
            }

            function R(t, e) {
                var i = (t.attrs || s).style,
                    n = e ? (e.attrs || s).style : null;
                if (null == i || p(i)) t.el.style.cssText = i;
                else {
                    for (var o in i) {
                        var r = i[o];
                        (null == n || null != r && r !== n[o]) && (t.el.style[o] = G(o, r))
                    }
                    if (n)
                        for (var a in n) null == i[a] && (t.el.style[a] = "")
                }
            }
            var B = [];

            function V(t, e, i, n, o) {
                if (null != t) {
                    var r = i.hooks[e];
                    if (r) {
                        if ("d" !== e[0] || "i" !== e[1] || "d" !== e[2]) return r(i, n);
                        o ? w(i.parent) && r(i, n) : B.push([r, i, n])
                    }
                }
            }

            function W(t) {
                var e;
                if (B.length)
                    for (w(t.node); e = B.shift();) e[0](e[1], e[2])
            }
            var H = r ? document : null;

            function Y(t) {
                return t.nextSibling
            }

            function U(t, e, i) {
                var n = e._node,
                    o = n.vm;
                if (l(n.body))
                    if ((n.flags & L) === L)
                        for (var r = 0; r < n.body.length; r++) U(e, n.body[r].el);
                    else F(n);
                delete e._node, t.removeChild(e), V(n.hooks, "didRemove", n, null, i), null != o && (V(o.hooks, "didUnmount", o, o.data, i), o.node = null)
            }

            function X(t, e) {
                var i = e._node;
                if (!i._dead) {
                    var n = function t(e) {
                        var i = e.vm,
                            n = null != i && V(i.hooks, "willUnmount", i, i.data),
                            o = V(e.hooks, "willRemove", e);
                        if ((e.flags & L) === L && l(e.body))
                            for (var r = 0; r < e.body.length; r++) t(e.body[r]);
                        return n || o
                    }(i);
                    null != n && function(t) {
                        return "object" == typeof t && g(t.then)
                    }(n) ? (i._dead = !0, n.then(function(t, e, i) {
                        return function() {
                            return t.apply(i, e)
                        }
                    }(U, [t, e, !0]))) : U(t, e)
                }
            }

            function F(t) {
                for (var e = t.body, i = 0; i < e.length; i++) {
                    var n = e[i];
                    delete n.el._node, null != n.vm && (n.vm.node = null), l(n.body) && F(n)
                }
            }

            function Q(t) {
                var e = t.el;
                if (0 == (t.flags & L)) l(t.body) && F(t), e.textContent = null;
                else {
                    var i = e.firstChild;
                    do {
                        var n = Y(i);
                        X(e, i)
                    } while (i = n)
                }
            }

            function J(t, e, i) {
                var n = e._node,
                    o = null != e.parentNode,
                    r = e !== i && o ? null : n.vm;
                null != r && V(r.hooks, "willMount", r, r.data), V(n.hooks, o ? "willReinsert" : "willInsert", n), t.insertBefore(e, i), V(n.hooks, o ? "didReinsert" : "didInsert", n), null != r && V(r.hooks, "didMount", r, r.data)
            }

            function K(t, e, i) {
                J(t, e, i ? Y(i) : null)
            }
            var $ = {},
                q = c;

            function tt(t, e, i) {
                t[e] = i
            }

            function et(t, e, i, n, o) {
                var r = t.apply(o, e.concat([i, n, o, o.data]));
                o.onevent(i, n, o, o.data, e), q.call(null, i, n, o, o.data, e), !1 === r && (i.preventDefault(), i.stopPropagation())
            }

            function it(t) {
                var e, i, n = function(t) {
                        for (; null == t._node;) t = t.parentNode;
                        return t._node
                    }(t.target),
                    o = D(n),
                    r = t.currentTarget._node.attrs["on" + t.type];
                if (l(r)) e = r[0], i = r.slice(1), et(e, i, t, n, o);
                else
                    for (var a in r)
                        if (t.target.matches(a)) {
                            var s = r[a];
                            l(s) ? (e = s[0], i = s.slice(1)) : (e = s, i = []), et(e, i, t, n, o)
                        }
            }

            function nt(t, e, i, n) {
                if (i !== n) {
                    var o = t.el;
                    null == i || g(i) ? tt(o, e, i) : null == n && tt(o, e, it)
                }
            }

            function ot(t, e, i) {
                "." === e[0] && (e = e.substr(1), i = !0), i ? t.el[e] = "" : t.el.removeAttribute(e)
            }

            function rt(t, e, i, n, o) {
                var r = t.el;
                null == i ? !o && ot(t, e, !1) : null != t.ns ? r.setAttribute(e, i) : "class" === e ? r.className = i : "id" === e || "boolean" == typeof i || n ? r[e] = i : "." === e[0] ? r[e.substr(1)] = i : r.setAttribute(e, i)
            }

            function at(t, e, i) {
                var n = t.attrs || s,
                    o = e.attrs || s;
                if (n === o);
                else {
                    for (var r in n) {
                        var a = n[r],
                            c = C(t.tag, r),
                            l = c ? t.el[r] : o[r];
                        a === l || (b(r) ? R(t, e) : x(r) || (I(r) ? nt(t, r, a, l) : rt(t, r, a, c, i)))
                    }
                    for (var r in o) !(r in n) && !x(r) && ot(t, r, C(t.tag, r) || I(r))
                }
            }

            function st(t, e, i, o) {
                return t.type === n && (e = t.data, i = t.key, o = t.opts, t = t.view), new bt(t, e, i, o)
            }

            function ct(t) {
                for (var e = 0; e < t.body.length; e++) {
                    var r = t.body[e],
                        a = r.type;
                    if (a <= i) J(t.el, lt(r));
                    else if (a === n) {
                        var s = st(r.view, r.data, r.key, r.opts)._redraw(t, e, !1);
                        a = s.node.type, J(t.el, lt(s.node))
                    } else if (a === o) {
                        var s = r.vm;
                        s._redraw(t, e), a = s.node.type, J(t.el, s.node.el)
                    }
                }
            }

            function lt(n, o) {
                return null == n.el && (n.type === t ? (n.el = o || function(t, e) {
                    return null != e ? H.createElementNS(e, t) : H.createElement(t)
                }(n.tag, n.ns), null != n.attrs && at(n, s, !0), (n.flags & k) === k && n.body.body(n), l(n.body) ? ct(n) : null != n.body && "" !== n.body && (n.el.textContent = n.body)) : n.type === e ? n.el = o || function(t) {
                    return H.createTextNode(t)
                }(n.body) : n.type === i && (n.el = o || function(t) {
                    return H.createComment(t)
                }(n.body))), n.el._node = n, n.el
            }
            window.lisMove = pt;
            var ut = 1,
                dt = 2;

            function ht(t, e, i, n, o, r, a, s) {
                return function(c, l, u, d, h, p) {
                    var g, f;
                    if (null != d[n]) {
                        if (null == (g = d[n]._node)) return void(d[n] = t(d[n]));
                        if (function(t) {
                                return t.parent
                            }(g) !== c) return f = t(d[n]), null != g.vm ? g.vm.unmount(!0) : X(l, d[n]), void(d[n] = f)
                    }
                    if (d[o] == h) return dt;
                    if (null == d[o].el) i(l, lt(d[o]), d[n]), d[o] = e(d[o], u);
                    else if (d[o].el === d[n]) d[o] = e(d[o], u), d[n] = t(d[n]);
                    else {
                        if (p || g !== d[a]) return p && null != d[n] ? pt(t, e, i, n, o, l, u, g, d) : ut;
                        f = d[n], d[n] = t(f), s(l, f, d[r]), d[r] = f
                    }
                }
            }

            function pt(t, e, i, n, o, r, a, s, c) {
                if (s._lis) i(r, c[o].el, c[n]), c[o] = e(c[o], a);
                else {
                    var l = function(t, e) {
                        var i, n = 0,
                            o = e.length - 1;
                        if (o <= 2147483647)
                            for (; n <= o;) {
                                if (e[i = n + o >> 1] === t) return i;
                                e[i] < t ? n = i + 1 : o = i - 1
                            } else
                                for (; n <= o;) {
                                    if (i = Math.floor((n + o) / 2), e[i] === t) return i;
                                    e[i] < t ? n = i + 1 : o = i - 1
                                }
                        return n == e.length ? null : n
                    }(s.idx, c.tombs);
                    s._lis = !0;
                    var u = t(c[n]);
                    i(r, c[n], null != l ? a[c.tombs[l]].el : l), null == l ? c.tombs.push(s.idx) : c.tombs.splice(l, 0, s.idx), c[n] = u
                }
            }
            var gt = ht(Y, function(t, e) {
                    return e[t.idx + 1]
                }, J, "lftSib", "lftNode", "rgtSib", "rgtNode", K),
                ft = ht(function(t) {
                    return t.previousSibling
                }, function(t, e) {
                    return e[t.idx - 1]
                }, K, "rgtSib", "rgtNode", "lftSib", "lftNode", J);

            function vt(t, e, i, n) {
                for (var o = Array.prototype.slice.call(e.childNodes), r = [], a = 0; a < o.length; a++) {
                    var s = o[a]._node;
                    s.parent === t && r.push(s.idx)
                }
                for (var c = function(t) {
                        var e, i, n = t.slice(),
                            o = [];
                        o.push(0);
                        for (var r = 0, a = t.length; r < a; ++r) {
                            var s = o[o.length - 1];
                            if (t[s] < t[r]) n[r] = s, o.push(r);
                            else {
                                for (e = 0, i = o.length - 1; e < i;) {
                                    var c = (e + i) / 2 | 0;
                                    t[o[c]] < t[r] ? e = c + 1 : i = c
                                }
                                t[r] < t[o[e]] && (e > 0 && (n[r] = o[e - 1]), o[e] = r)
                            }
                        }
                        for (e = o.length, i = o[e - 1]; e-- > 0;) o[e] = i, i = n[i];
                        return o
                    }(r).map(function(t) {
                        return r[t]
                    }), l = 0; l < c.length; l++) i[c[l]]._lis = !0;
                for (n.tombs = c;;) {
                    var u = gt(t, e, i, n, null, !0);
                    if (u === dt) break
                }
            }

            function _t(t) {
                return t.el._node.parent !== t.parent
            }

            function yt(t, e, i) {
                return e[i]
            }

            function mt(t, e, i) {
                for (; i < e.length; i++) {
                    var r = e[i];
                    if (null != r.vm) {
                        if (t.type === n && r.vm.view === t.view && r.vm.key === t.key || t.type === o && r.vm === t.vm) return r
                    } else if (!_t(r) && t.tag === r.tag && t.type === r.type && t.key === r.key && (t.flags & ~L) == (r.flags & ~L)) return r
                }
                return null
            }

            function It(t, e, i) {
                return e[e._keys[t.key]]
            }

            function xt(r, a) {
                V(a.hooks, "willRecycle", a, r);
                var c = r.el = a.el,
                    u = a.body,
                    d = r.body;
                if (c._node = r, r.type !== e || d === u) {
                    null == r.attrs && null == a.attrs || at(r, a, !1);
                    var h = l(u),
                        p = l(d),
                        g = (r.flags & k) === k;
                    h ? p || g ? function(e, r) {
                        var a = e.body,
                            c = a.length,
                            l = r.body,
                            u = l.length,
                            d = (e.flags & k) === k,
                            h = (e.flags & E) === E,
                            p = (e.flags & N) === N,
                            g = !h && e.type === t,
                            f = !0,
                            v = p ? It : h || d ? yt : mt;
                        if (p) {
                            for (var _ = {}, y = 0; y < l.length; y++) _[l[y].key] = y;
                            l._keys = _
                        }
                        if (g && 0 === c) return Q(r), void(d && (e.body = []));
                        var m, I, x = 0,
                            b = !1,
                            w = 0;
                        if (d) var C = {
                                key: null
                            },
                            D = Array(c);
                        for (var y = 0; y < c; y++) {
                            if (d) {
                                var A = !1,
                                    S = null;
                                f && (p && (C.key = a.key(y)), m = v(C, l, w)), null != m ? (I = m.idx, !0 === (S = a.diff(y, m)) ? ((T = m).parent = e, T.idx = y, T._lis = !1) : A = !0) : A = !0, A && (z(T = a.tpl(y), e, y), T._diff = null != S ? S : a.diff(y), null != m && xt(T, m)), D[y] = T
                            } else {
                                var T = a[y],
                                    j = T.type;
                                if (j <= i)(m = f && v(T, l, w)) && (xt(T, m), I = m.idx);
                                else if (j === n) {
                                    if (m = f && v(T, l, w)) {
                                        I = m.idx;
                                        var P = m.vm._update(T.data, e, y)
                                    } else var P = st(T.view, T.data, T.key, T.opts)._redraw(e, y, !1);
                                    j = P.node.type
                                } else if (j === o) {
                                    var L = M(T.vm),
                                        P = T.vm._update(T.data, e, y, L);
                                    j = P.node.type
                                }
                            }
                            if (!p && null != m && (I === w ? ++w === u && c > u && (m = null, f = !1) : b = !0, u > 100 && b && ++x % 10 == 0))
                                for (; w < u && _t(l[w]);) w++
                        }
                        d && (e.body = D), g && function(t, e) {
                            var i = e.body,
                                n = t.el,
                                o = t.body,
                                r = {
                                    lftNode: o[0],
                                    rgtNode: o[o.length - 1],
                                    lftSib: (i[0] || s).el,
                                    rgtSib: (i[i.length - 1] || s).el
                                };
                            t: for (;;) {
                                for (;;) {
                                    var a = gt(t, n, o, r, null, !1);
                                    if (a === ut) break;
                                    if (a === dt) break t
                                }
                                for (;;) {
                                    var c = ft(t, n, o, r, r.lftNode, !1);
                                    if (c === ut) break;
                                    if (c === dt) break t
                                }
                                vt(t, n, o, r);
                                break
                            }
                        }(e, r)
                    }(r, a) : d !== u && (null != d ? c.textContent = d : Q(a)) : p ? (Q(a), ct(r)) : d !== u && (c.firstChild ? c.firstChild.nodeValue = d : c.textContent = d), V(a.hooks, "didRecycle", a, r)
                } else c.nodeValue = d
            }

            function bt(t, e, i, n) {
                var o = this;
                o.view = t, o.data = e, o.key = i, n && (o.opts = n, o.config(n));
                var r = d(t) ? t : t.call(o, o, e, i, n);
                g(r) ? o.render = r : (o.render = r.render, o.config(r)), o._redrawAsync = m(function(t) {
                    return o.redraw(!0)
                }), o._updateAsync = m(function(t) {
                    return o.update(t, !0)
                }), o.init && o.init.call(o, o, o.data, o.key, n)
            }
            var wt = bt.prototype = {
                constructor: bt,
                _diff: null,
                init: null,
                view: null,
                key: null,
                data: null,
                state: null,
                api: null,
                opts: null,
                node: null,
                hooks: null,
                onevent: c,
                refs: null,
                render: null,
                mount: function(t, e) {
                    var i = this;
                    return e ? (Q({
                        el: t,
                        flags: 0
                    }), i._redraw(null, null, !1), t.nodeName.toLowerCase() !== i.node.tag ? (lt(i.node), J(t.parentNode, i.node.el, t), t.parentNode.removeChild(t)) : J(t.parentNode, lt(i.node, t), t)) : (i._redraw(null, null), t && J(t, i.node.el)), t && W(i), i
                },
                unmount: function(t) {
                    var e = this.node;
                    X(e.el.parentNode, e.el), t || W(this)
                },
                config: function(t) {
                    var e = this;
                    t.init && (e.init = t.init), t.diff && (e.diff = t.diff), t.onevent && (e.onevent = t.onevent), t.hooks && (e.hooks = f(e.hooks || {}, t.hooks)), t.onemit && (e.onemit = f(e.onemit || {}, t.onemit))
                },
                parent: function() {
                    return D(this.node.parent)
                },
                root: function() {
                    for (var t = this.node; t.parent;) t = t.parent;
                    return t.vm
                },
                redraw: function(t) {
                    return t ? this._redraw(null, null, M(this)) : this._redrawAsync(), this
                },
                update: function(t, e) {
                    return e ? this._update(t, null, null, M(this)) : this._updateAsync(t), this
                },
                _update: function(t, e, i, n) {
                    var o = this;
                    return null != t && o.data !== t && (V(o.hooks, "willUpdate", o, t), o.data = t), o._redraw(e, i, n)
                },
                _redraw: function(t, e, i) {
                    var n, o, r = null == t,
                        a = this,
                        s = a.node && a.node.el && a.node.el.parentNode,
                        c = a.node;
                    if (null != a.diff && (n = a._diff, a._diff = o = a.diff(a, a.data), null != c)) {
                        var u = l(n) ? y : _,
                            d = n === o || u(n, o);
                        if (d) return Mt(a, c, t, e)
                    }
                    s && V(a.hooks, "willRedraw", a, a.data);
                    var h = a.render.call(a, a, a.data, n, o);
                    if (h === c) return Mt(a, c, t, e);
                    if (a.refs = null, null != a.key && h.key !== a.key && (h.key = a.key), a.node = h, t ? (z(h, t, e, a), t.body[e] = h) : c && c.parent ? (z(h, c.parent, c.idx, a), c.parent.body[c.idx] = h) : z(h, null, null, a), !1 !== i)
                        if (c)
                            if (c.tag !== h.tag || c.key !== h.key) {
                                c.vm = h.vm = null;
                                var p = c.el.parentNode,
                                    g = Y(c.el);
                                X(p, c.el), J(p, lt(h), g), c.el = h.el, h.vm = a
                            } else xt(h, c);
                    else lt(h);
                    return s && V(a.hooks, "didRedraw", a, a.data), r && s && W(a), a
                },
                _redrawAsync: null,
                _updateAsync: null
            };

            function Mt(t, e, i, n) {
                return null != i && (i.body[n] = e, e.idx = n, e.parent = i, e._lis = !1), t
            }

            function Ct(t, e, i, n) {
                var o, r;
                return null == i ? d(e) ? o = e : r = e : (o = e, r = i), Z(t, o, r, n)
            }
            var Dt = "http://www.w3.org/2000/svg";

            function At(t, e, i, n) {
                this.view = t, this.data = e, this.key = i, this.opts = n
            }

            function St(t) {
                this.vm = t
            }
            At.prototype = {
                constructor: At,
                type: n,
                view: null,
                data: null,
                key: null,
                opts: null
            }, St.prototype = {
                constructor: St,
                type: o,
                vm: null
            };
            var Tt = {
                config: function(t) {
                    q = t.onevent || q, t.onemit && function(t) {
                        f($, t)
                    }(t.onemit)
                },
                ViewModel: bt,
                VNode: A,
                createView: st,
                defineElement: Ct,
                defineSvgElement: function(t, e, i, n) {
                    var o = Ct(t, e, i, n);
                    return o.ns = Dt, o
                },
                defineText: T,
                defineComment: function(t) {
                    var e = new A;
                    return e.type = i, e.body = t, e
                },
                defineView: function(t, e, i, n) {
                    return new At(t, e, i, n)
                },
                injectView: function(t) {
                    return new St(t)
                },
                injectElement: function(e) {
                    var i = new A;
                    return i.type = t, i.el = i.key = e, i
                },
                lazyList: function(t, e) {
                    var i = t.length,
                        n = {
                            items: t,
                            length: i,
                            key: function(i) {
                                return e.key(t[i], i)
                            },
                            diff: function(i, n) {
                                var o = e.diff(t[i], i);
                                if (null == n) return o;
                                var r = n._diff,
                                    a = o === r || l(r) ? y(o, r) : _(o, r);
                                return a || o
                            },
                            tpl: function(i) {
                                return e.tpl(t[i], i)
                            },
                            map: function(t) {
                                return e.tpl = t, n
                            },
                            body: function(t) {
                                for (var e = Array(i), o = 0; o < i; o++) {
                                    var r = n.tpl(o);
                                    r._diff = n.diff(o), e[o] = r, z(r, t, o)
                                }
                                t.body = e
                            }
                        };
                    return n
                },
                FIXED_BODY: E,
                DEEP_REMOVE: L,
                KEYED_LIST: N,
                LAZY_LIST: k
            };

            function jt(t) {
                var e, i, n = arguments,
                    o = n.length;
                if (o > 1) {
                    var r = 1;
                    d(n[1]) && (i = n[1], r = 2), e = o === r + 1 && (p(n[r]) || l(n[r]) || i && (i._flags & k) === k) ? n[r] : v(n, r)
                }
                return Z(t, i, e)
            }
            return S.patch = function(t, e) {
                ! function(t, e, i) {
                    if (null != e.type) {
                        if (null != t.vm) return;
                        z(e, t.parent, t.idx, null), t.parent.body[t.idx] = e, xt(e, t), i && w(e), W(D(e))
                    } else {
                        var n = Object.create(t);
                        n.attrs = f({}, t.attrs);
                        var o = f(t.attrs, e);
                        if (null != t._class) {
                            var r = o.class;
                            o.class = null != r && "" !== r ? t._class + " " + r : t._class
                        }
                        at(t, n), i && w(t)
                    }
                }(this, t, e)
            }, wt.emit = function(t) {
                var e = this,
                    i = e,
                    n = v(arguments, 1).concat(i, i.data);
                do {
                    var o = e.onemit,
                        r = o ? o[t] : null;
                    if (r) {
                        r.apply(e, n);
                        break
                    }
                } while (e = e.parent());
                $[t] && $[t].apply(e, n)
            }, wt.onemit = null, wt.body = function() {
                return function t(e, i) {
                    var n = e.body;
                    if (l(n))
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            null != r.vm ? i.push(r.vm) : t(r, i)
                        }
                    return i
                }(this.node, [])
            }, Tt.defineElementSpread = jt, Tt.defineSvgElementSpread = function() {
                var t = jt.apply(null, arguments);
                return t.ns = Dt, t
            }, Tt
        }()
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, i) {
                this._name = t, this._version = e, this._view = i
            }
            return t.prototype.pdf = function(t) {
                this._rawExport(t, "pdf", this._view)
            }, t.prototype.png = function(t) {
                this._rawExport(t, "png", this._view)
            }, t.prototype._rawExport = function(t, e, i) {
                (t = t || {}).url = t.url || "https://export.dhtmlx.ru/" + this._name + "/" + e, t.url += "/" + this._version;
                var n = i.getRootView().node.el.innerHTML,
                    o = document.createElement("form");
                o.style.cssText = "position:absolute; left:-1000px; visibility:hidden;", o.setAttribute("method", "POST"), o.setAttribute("action", t.url), o.innerHTML = "<input type='hidden' name='raw'><input type='hidden' name='config'>", o.childNodes[0].value = n, o.childNodes[1].value = JSON.stringify(t), document.body.appendChild(o), o.submit(), setTimeout(function() {
                    o.parentNode.removeChild(o)
                }, 100)
            }, t
        }();
        e.Exporter = n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(22),
            o = ["#FF9800", "#607D8B", "#00C7B5", "#03A9F4", "#9575CD", "#F06292"];
        e.placeOrgonogram = function(t, e) {
            var i = t.getRoots();
            if (1 === i.length) {
                var r = t.getItem(i[0]);
                ! function t(e, i, n, o, r) {
                    var a = i.$kids,
                        s = "vertical" === i.dir,
                        c = s ? n.margin.itemX / 2 : 0,
                        l = 0;
                    if (!1 !== i.open && a) {
                        for (var u = 0, d = 0; d < a.length; d++) {
                            var h = e.getItem(a[d][1]);
                            if (!h.hidden) {
                                var p = t(e, h, n, o + c, c);
                                s ? l = Math.max(l, p) : l += p, u++
                            }
                        }
                        u && !s && (l += (u - 1) * n.margin.itemX), i.$count = u
                    }
                    if (l = Math.max(i.width, l), s) i.x = o;
                    else {
                        var g = n.gridStep || 1,
                            f = (l - i.width) / 2 + o;
                        i.x = Math.ceil(f / g) * g
                    }
                    return i.y = 0, i.$width = l, l + r
                }(t, r, e, 0, 0),
                function t(e, i, r, a, s, c) {
                    var l = i.$kids,
                        u = "vertical" === i.dir,
                        d = 0;
                    if (i.x += r, i.y += a, s.gridStep && (i.y = Math.ceil(i.y / s.gridStep) * s.gridStep), a += i.height + s.margin.itemY, !1 !== i.open && l)
                        for (var h = void 0, p = 0; p < l.length; p++)
                            if (!(h = e.getItem(l[p][1])).hidden) {
                                var g = t(e, h, r, a, s, c + 1);
                                u ? (a += g + s.margin.itemY, d += g + s.margin.itemY) : (d = Math.max(d, g + s.margin.itemY), r += h.$width + s.margin.itemX), n.directLinkPath(e.getItem(l[p][0]), i, h, s)
                            }
                    if (l) {
                        var f = e.getItem(l[0][1]).color;
                        i.$expandColor = f || o[(c + 1) % o.length]
                    }
                    return i.color = i.color || o[c % o.length], i.height + d
                }(t, r, 0, 0, e, 0)
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(5),
            o = i(8),
            r = function() {
                function t(t, e, i) {
                    var r = this;
                    this.events = i || new n.EventSystem, this._data = e, this._data.events.on(o.DataEvents.removeAll, function() {
                        r._selected = null
                    }), this._data.events.on(o.DataEvents.change, function() {
                        if (r._selected) {
                            var t = r._data.getNearId(r._selected);
                            if (t !== r._selected) {
                                var e = r._data.getItem(r._selected);
                                e && (e.$selected = !1), r._selected = null, t && r.add(t)
                            }
                        }
                    })
                }
                return t.prototype.getId = function() {
                    return this._selected
                }, t.prototype.getItem = function() {
                    return this._selected ? this._data.getItem(this._selected) : null
                }, t.prototype.remove = function(t) {
                    return !(t = t || this._selected) || !!this.events.fire(o.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, {
                        $selected: !1
                    }, !0), this._selected = null, this.events.fire(o.SelectionEvents.afterUnSelect, [t]), !0)
                }, t.prototype.add = function(t) {
                    this._selected !== t && (this.remove(), this.events.fire(o.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t, {
                        $selected: !0
                    }, !0), this.events.fire(o.SelectionEvents.afterSelect, [t])))
                }, t
            }();
        e.Selection = r
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(4),
                o = i(3),
                r = function() {
                    function e(t, e) {
                        this._parent = t, this._changes = e
                    }
                    return e.prototype.load = function(t, e) {
                        var i = this;
                        return this._parent.loadData = t.load().then(function(t) {
                            return i._parent.removeAll(), i.parse(t, e)
                        }).catch(function(t) {
                            i._parent.events.fire(o.DataEvents.loadError, [t])
                        })
                    }, e.prototype.parse = function(t, e) {
                        return void 0 === e && (e = "json"), "json" !== e || n.hasJsonOrArrayStructure(t) || this._parent.events.fire(o.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]), t = (e = n.toDataDriver(e)).toJsonArray(t), this._parent.$parse(t), t
                    }, e.prototype.save = function(e) {
                        for (var i = this, o = function(o) {
                                if (o.saving || o.pending) n.dhxWarning("item is saving");
                                else {
                                    var a = r._findPrevState(o.id);
                                    if (a && a.saving) {
                                        var s = new t(function(t, r) {
                                            a.promise.then(function() {
                                                o.pending = !1, t(i._setPromise(o, e))
                                            }).catch(function(t) {
                                                i._removeFromOrder(a), i._setPromise(o, e), n.dhxWarning(t), r(t)
                                            })
                                        });
                                        r._addToChain(s), o.pending = !0
                                    } else r._setPromise(o, e)
                                }
                            }, r = this, a = 0, s = this._changes.order; a < s.length; a++) {
                            o(s[a])
                        }
                        this._parent.saveData.then(function() {
                            i._saving = !1
                        })
                    }, e.prototype._setPromise = function(t, e) {
                        var i = this;
                        return t.promise = e.save(t.obj, t.status), t.promise.then(function() {
                            i._removeFromOrder(t)
                        }).catch(function(e) {
                            t.saving = !1, t.error = !0, n.dhxError(e)
                        }), t.saving = !0, this._saving = !0, this._addToChain(t.promise), t.promise
                    }, e.prototype._addToChain = function(t) {
                        this._parent.saveData && this._saving ? this._parent.saveData = this._parent.saveData.then(function() {
                            return t
                        }) : this._parent.saveData = t
                    }, e.prototype._findPrevState = function(t) {
                        for (var e = 0, i = this._changes.order; e < i.length; e++) {
                            var n = i[e];
                            if (n.id === t) return n
                        }
                        return null
                    }, e.prototype._removeFromOrder = function(t) {
                        this._changes.order = this._changes.order.filter(function(e) {
                            return !n.isEqualObj(e, t)
                        })
                    }, e
                }();
            e.Loader = r
        }).call(this, i(6))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(51);
        var o = function() {
            function t() {}
            return t.prototype.toJsonArray = function(t) {
                return this.getRows(t)
            }, t.prototype.toJsonObject = function(t) {
                var e;
                return "string" == typeof t && (e = this._fromString(t)),
                    function t(e, i) {
                        i = i || {};
                        var n = e.attributes;
                        if (n && n.length)
                            for (var o = 0; o < n.length; o++) i[n[o].name] = n[o].value;
                        var r = e.childNodes;
                        for (o = 0; o < r.length; o++)
                            if (1 === r[o].nodeType) {
                                var a = r[o].tagName;
                                i[a] ? ("function" != typeof i[a].push && (i[a] = [i[a]]), i[a].push(t(r[o], {}))) : i[a] = t(r[o], {})
                            }
                        return i
                    }(e)
            }, t.prototype.serialize = function(t) {
                return n.jsonToXML(t)
            }, t.prototype.getFields = function(t) {
                return t
            }, t.prototype.getRows = function(t) {
                if ("string" == typeof t && (t = this._fromString(t)), t) {
                    var e = t.childNodes && t.childNodes[0] && t.childNodes[0].childNodes;
                    return e && e.length ? this._getRows(e) : null
                }
                return []
            }, t.prototype._getRows = function(t) {
                for (var e = [], i = 0; i < t.length; i++) "item" === t[i].tagName && e.push(this._nodeToJS(t[i]));
                return e
            }, t.prototype._fromString = function(t) {
                try {
                    return (new DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    return null
                }
            }, t.prototype._nodeToJS = function(t) {
                var e = {};
                if (this._haveAttrs(t))
                    for (var i = t.attributes, n = 0; n < i.length; n++) {
                        var o = i[n],
                            r = o.name,
                            a = o.value;
                        e[r] = this._toType(a)
                    }
                if (3 === t.nodeType) return e.value = e.value || this._toType(t.textContent), e;
                var s = t.childNodes;
                if (s)
                    for (n = 0; n < s.length; n++) {
                        var c = s[n],
                            l = c.tagName;
                        l && ("items" === l && c.childNodes ? e[l] = this._getRows(c.childNodes) : this._haveAttrs(c) ? e[l] = this._nodeToJS(c) : e[l] = this._toType(c.textContent))
                    }
                return e
            }, t.prototype._toType = function(t) {
                return "false" === t || "true" === t ? "true" === t : isNaN(t) ? t : Number(t)
            }, t.prototype._haveAttrs = function(t) {
                return t.attributes && t.attributes.length
            }, t
        }();
        e.XMLDriver = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = 4;

        function o(t) {
            return " ".repeat(t)
        }

        function r(t, e) {
            void 0 === e && (e = n);
            var i = o(e) + "<item>\n";
            for (var a in t) Array.isArray(t[a]) ? (i += o(e + n) + "<" + a + ">\n", i += t[a].map(function(t) {
                return r(t, e + 2 * n)
            }).join("\n") + "\n", i += o(e + n) + "</" + a + ">\n") : i += o(e + n) + "<" + a + ">" + t[a] + "</" + a + ">\n";
            return i += o(e) + "</item>"
        }
        e.jsonToXML = function(t, e) {
            void 0 === e && (e = "root");
            for (var i = '<?xml version="1.0" encoding="iso-8859-1"?>\n<' + e + ">", n = 0; n < t.length; n++) i += "\n" + r(t[n]);
            return i + "\n</" + e + ">"
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(4),
            o = function() {
                function t() {}
                return t.prototype.sort = function(t, e) {
                    var i = this;
                    e.rule && "function" == typeof e.rule ? this._sort(t, e) : e.by && (e.rule = function(t, o) {
                        var r = i._checkVal(e.as, t[e.by]),
                            a = i._checkVal(e.as, o[e.by]);
                        return n.naturalCompare(r.toString(), a.toString())
                    }, this._sort(t, e))
                }, t.prototype._checkVal = function(t, e) {
                    return t ? t.call(this, e) : e
                }, t.prototype._sort = function(t, e) {
                    var i = this,
                        n = {
                            asc: 1,
                            desc: -1
                        };
                    return t.sort(function(t, o) {
                        return e.rule.call(i, t, o) * (n[e.dir] || n.asc)
                    })
                }, t
            }();
        e.Sort = o
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(2),
            r = i(24),
            a = i(12),
            s = i(4),
            c = i(3);

        function l(t, e, i, n) {
            void 0 !== n && -1 !== n && t[i] && t[i][n] ? t[i].splice(n, 0, e) : (t[i] || (t[i] = []), t[i].push(e))
        }
        var u = function(t) {
            function e(e, i) {
                var n, r = t.call(this, e, i) || this,
                    a = r._root = "_ROOT_" + o.uid();
                return r._childs = ((n = {})[a] = [], n), r._initChilds = null, r
            }
            return n(e, t), e.prototype.add = function(e, i, n) {
                var o = this;
                if (void 0 === i && (i = -1), void 0 === n && (n = this._root), "object" != typeof e && (e = {
                        value: e
                    }), Array.isArray(e)) return e.map(function(e, r) {
                    r > 0 && -1 !== i && (i += 1), e.parent = e.parent ? e.parent.toString() : n;
                    var a = t.prototype.add.call(o, e, i);
                    if (Array.isArray(e.items))
                        for (var s = 0, c = e.items; s < c.length; s++) {
                            var l = c[s];
                            o.add(l, -1, e.id)
                        }
                    return a
                });
                e.parent = e.parent ? e.parent.toString() : n;
                var r = t.prototype.add.call(this, e, i);
                if (Array.isArray(e.items))
                    for (var a = 0, s = e.items; a < s.length; a++) {
                        var c = s[a];
                        this.add(c, -1, e.id)
                    }
                return r
            }, e.prototype.getRoot = function() {
                return this._root
            }, e.prototype.getParent = function(t, e) {
                if (void 0 === e && (e = !1), !this._pull[t]) return null;
                var i = this._pull[t].parent;
                return e ? this._pull[i] : i
            }, e.prototype.getItems = function(t) {
                return this._childs && this._childs[t] ? this._childs[t] : []
            }, e.prototype.getLength = function(t) {
                return void 0 === t && (t = this._root), this._childs[t] ? this._childs[t].length : null
            }, e.prototype.removeAll = function(e) {
                var i;
                if (e)
                    for (var n = 0, o = this._childs[e].slice(); n < o.length; n++) {
                        var r = o[n];
                        this.remove(r.id)
                    } else {
                        t.prototype.removeAll.call(this);
                        var a = this._root;
                        this._initChilds = null, this._childs = ((i = {})[a] = [], i)
                    }
            }, e.prototype.getIndex = function(t) {
                var e = this.getParent(t);
                return e && this._childs[e] ? o.findIndex(this._childs[e], function(e) {
                    return e.id === t
                }) : -1
            }, e.prototype.sort = function(t) {
                var e = this;
                if (t) {
                    for (var i in this._childs) this._sort.sort(this._childs[i], t);
                    if (this._initChilds && Object.keys(this._initChilds).length)
                        for (var i in this._initChilds) this._sort.sort(this._initChilds[i], t)
                } else if (this._childs = {}, this._parse_data(Object.keys(this._pull).map(function(t) {
                        return e._pull[t]
                    })), this._filters)
                    for (var i in this._filters) {
                        var n = this._filters[i];
                        this.filter(n.rule, n.config)
                    }
                this.events.fire(c.DataEvents.change)
            }, e.prototype.map = function(t, e, i) {
                void 0 === e && (e = this._root), void 0 === i && (i = !0);
                var n = [];
                if (!this.haveItems(e)) return n;
                for (var o = 0; o < this._childs[e].length; o++)
                    if (n.push(t.call(this, this._childs[e][o], o)), i) {
                        var r = this.map(t, this._childs[e][o].id, i);
                        n = n.concat(r)
                    }
                return n
            }, e.prototype.filter = function(t, e) {
                var i = this;
                if (void 0 === e && (e = {}), t) {
                    this._initChilds || (this._initChilds = this._childs), e.type = e.type || c.TreeFilterType.all, this._filters = {}, this._filters._ = {
                        rule: t,
                        config: e
                    };
                    var n = {};
                    this._recursiveFilter(t, e, this._root, 0, n), Object.keys(n).forEach(function(t) {
                        for (var e = i.getParent(t), o = i.getItem(t); e;) n[e] || (n[e] = []), o && !n[e].find(function(t) {
                            return t.id === o.id
                        }) && n[e].push(o), o = i.getItem(e), e = i.getParent(e)
                    }), this._childs = n, this.events.fire(c.DataEvents.change)
                } else this.restoreOrder()
            }, e.prototype.restoreOrder = function() {
                this._initChilds && (this._childs = this._initChilds, this._initChilds = null), this.events.fire(c.DataEvents.change)
            }, e.prototype.copy = function(t, e, i, n) {
                var r = this;
                if (void 0 === i && (i = this), void 0 === n && (n = this._root), t instanceof Array) return t.map(function(t, a) {
                    if (!r.exists(t)) return null;
                    var c = r._childs[t],
                        l = -1 === e ? -1 : e + a;
                    if (i === r && !r.canCopy(t, n)) return null;
                    var u = s.copyWithoutInner(r.getItem(t), {
                        items: !0
                    });
                    if (i.exists(t) && (u.id = o.uid()), s.isTreeCollection(i)) {
                        if (r.exists(t) && (u.parent = n, i !== r && n === r._root && (u.parent = i.getRoot()), i.add(u, l), t = u.id), c)
                            for (var d = 0, h = c; d < h.length; d++) {
                                var p = h[d].id,
                                    g = r.getIndex(p);
                                "string" == typeof t && r.copy(p, g, i, t)
                            }
                        return t
                    }
                    i.add(u, l)
                });
                if (!this.exists(t)) return null;
                var a = this._childs[t];
                if (i === this && !this.canCopy(t, n)) return null;
                var c = s.copyWithoutInner(this.getItem(t), {
                    items: !0
                });
                if (i.exists(t) && (c.id = o.uid()), s.isTreeCollection(i)) {
                    if (this.exists(t) && (c.parent = n, i !== this && n === this._root && (c.parent = i.getRoot()), i.add(c, e), t = c.id), a)
                        for (var l = 0, u = a; l < u.length; l++) {
                            var d = u[l].id,
                                h = this.getIndex(d);
                            "string" == typeof t && this.copy(d, h, i, t)
                        }
                    return t
                }
                i.add(c, e)
            }, e.prototype.move = function(t, e, i, n) {
                var o = this;
                if (void 0 === i && (i = this), void 0 === n && (n = this._root), t instanceof Array) return t.map(function(t, r) {
                    if (!o.exists(t)) return null;
                    var a = -1 === e ? -1 : e + r;
                    if (i !== o) {
                        if (!s.isTreeCollection(i)) return i.add(s.copyWithoutInner(o.getItem(t)), a), void o.remove(t);
                        var l = o.copy(t, a, i, n);
                        return o.remove(t), l
                    }
                    if (!o.canCopy(t, n)) return null;
                    var u = o.getParent(t),
                        d = o.getIndex(t),
                        h = o._childs[u].splice(d, 1)[0];
                    return h.parent = n, o._childs[u].length || delete o._childs[u], o.haveItems(n) || (o._childs[n] = []), -1 === a ? a = o._childs[n].push(h) : o._childs[n].splice(a, 0, h), o.events.fire(c.DataEvents.change), t
                });
                if (!this.exists(t)) return null;
                if (i !== this) {
                    if (!s.isTreeCollection(i)) return i.add(s.copyWithoutInner(this.getItem(t)), e), void this.remove(t);
                    var r = this.copy(t, e, i, n);
                    return this.remove(t), r
                }
                if (!this.canCopy(t, n)) return null;
                var a = this.getParent(t),
                    l = this.getIndex(t),
                    u = this._childs[a].splice(l, 1)[0];
                return u.parent = n, this._childs[a].length || delete this._childs[a], this.haveItems(n) || (this._childs[n] = []), -1 === e ? e = this._childs[n].push(u) : this._childs[n].splice(e, 0, u), this.events.fire(c.DataEvents.change), t
            }, e.prototype.eachChild = function(t, e, i, n) {
                if (void 0 === i && (i = !0), void 0 === n && (n = function() {
                        return !0
                    }), this.haveItems(t))
                    for (var o = 0; o < this._childs[t].length; o++) e.call(this, this._childs[t][o], o), i && n(this._childs[t][o]) && this.eachChild(this._childs[t][o].id, e, i, n)
            }, e.prototype.getNearId = function(t) {
                return t
            }, e.prototype.loadItems = function(t, e) {
                var i = this;
                void 0 === e && (e = "json");
                var n = this.config.autoload + "?id=" + t;
                new a.DataProxy(n).load().then(function(n) {
                    n = (e = s.toDataDriver(e)).toJsonArray(n), i._parse_data(n, t), i.events.fire(c.DataEvents.change)
                })
            }, e.prototype.refreshItems = function(t, e) {
                void 0 === e && (e = "json"), this.removeAll(t), this.loadItems(t, e)
            }, e.prototype.eachParent = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = this.getItem(t);
                if (n && (i && e.call(this, n), n.parent !== this._root)) {
                    var o = this.getItem(n.parent);
                    e.call(this, o), this.eachParent(n.parent, e)
                }
            }, e.prototype.haveItems = function(t) {
                return t in this._childs
            }, e.prototype.canCopy = function(t, e) {
                if (t === e) return !1;
                var i = !0;
                return this.eachParent(e, function(e) {
                    return e.id === t ? i = !1 : null
                }), i
            }, e.prototype.serialize = function(t, e) {
                void 0 === t && (t = c.DataDriver.json);
                var i = this._serialize(this._root, e),
                    n = s.toDataDriver(t);
                if (n) return n.serialize(i)
            }, e.prototype.getId = function(t, e) {
                if (void 0 === e && (e = this._root), this._childs[e] && this._childs[e][t]) return this._childs[e][t].id
            }, e.prototype._removeAll = function(e) {
                var i;
                if (e)
                    for (var n = 0, o = this._childs[e].slice(); n < o.length; n++) {
                        var r = o[n];
                        this.remove(r.id)
                    } else {
                        t.prototype._removeAll.call(this);
                        var a = this._root;
                        this._initChilds = null, this._childs = ((i = {})[a] = [], i)
                    }
            }, e.prototype._removeCore = function(t) {
                if (this._pull[t]) {
                    var e = this.getParent(t);
                    this._childs[e] = this._childs[e].filter(function(e) {
                        return e.id !== t
                    }), e === this._root || this._childs[e].length || delete this._childs[e], this._initChilds && this._initChilds[e] && (this._initChilds[e] = this._initChilds[e].filter(function(e) {
                        return e.id !== t
                    }), e === this._root || this._initChilds[e].length || delete this._initChilds[e]), this._fastDeleteChilds(this._childs, t), this._initChilds && this._fastDeleteChilds(this._initChilds, t)
                }
            }, e.prototype._addToOrder = function(t, e, i) {
                var n = this._childs,
                    o = this._initChilds,
                    r = e.parent;
                this._pull[e.id] = e, l(n, e, r, i), o && l(o, e, r, i)
            }, e.prototype._parse_data = function(t, e) {
                void 0 === e && (e = this._root);
                for (var i = 0, n = t; i < n.length; i++) {
                    var r = n[i];
                    this.config.init && (r = this.config.init(r)), "object" != typeof r && (r = {
                        value: r
                    }), r.id = r.id ? r.id.toString() : o.uid(), r.parent = r.parent ? r.parent.toString() : e, this._pull[r.id] = r, this._childs[r.parent] || (this._childs[r.parent] = []), this._childs[r.parent].push(r), r.items && r.items instanceof Object && this._parse_data(r.items, r.id)
                }
            }, e.prototype._fastDeleteChilds = function(t, e) {
                if (this._pull[e] && delete this._pull[e], t[e]) {
                    for (var i = 0; i < t[e].length; i++) this._fastDeleteChilds(t, t[e][i].id);
                    delete t[e]
                }
            }, e.prototype._recursiveFilter = function(t, e, i, n, o) {
                var r = this,
                    a = this._childs[i];
                if (a) {
                    var s = function(t) {
                        switch (e.type) {
                            case c.TreeFilterType.all:
                                return !0;
                            case c.TreeFilterType.level:
                                return n === e.level;
                            case c.TreeFilterType.leafs:
                                return !r.haveItems(t.id)
                        }
                    };
                    if ("function" == typeof t) {
                        var l = function(e) {
                            return s(e) && t(e)
                        };
                        (u = a.filter(l)).length && (o[i] = u)
                    } else if (t.by && t.match) {
                        var u;
                        l = function(e) {
                            return s(e) && -1 !== e[t.by].toString().toLowerCase().indexOf(t.match.toString().toLowerCase())
                        };
                        (u = a.filter(l)).length && (o[i] = u)
                    }
                    for (var d = 0, h = a; d < h.length; d++) {
                        var p = h[d];
                        this._recursiveFilter(t, e, p.id, n + 1, o)
                    }
                }
            }, e.prototype._serialize = function(t, e) {
                var i = this;
                return void 0 === t && (t = this._root), this.map(function(t) {
                    var n = {};
                    for (var o in t) "parent" !== o && "items" !== o && (n[o] = t[o]);
                    return e && (n = e(n)), i.haveItems(t.id) && (n.items = i._serialize(t.id, e)), n
                }, t, !1)
            }, e
        }(r.DataCollection);
        e.TreeCollection = u
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = i(55),
            r = i(3),
            a = i(4);
        var s = function() {
                function t() {
                    var t = this;
                    this._transferData = {}, this._canMove = !0, this._selectedIds = [], this._onMouseMove = function(e) {
                        if (t._transferData.id) {
                            var i = e.pageX,
                                n = e.pageY;
                            if (!t._transferData.ghost) {
                                if (Math.abs(t._transferData.x - i) < 3 && Math.abs(t._transferData.y - n) < 3) return;
                                var o = t._onDragStart(t._transferData.id, t._transferData.targetId);
                                if (!o) return void t._endDrop();
                                t._transferData.ghost = o, document.body.appendChild(t._transferData.ghost)
                            }
                            t._moveGhost(i, n), t._onDrag(e)
                        }
                    }, this._onMouseUp = function() {
                        t._transferData.x && (t._transferData.ghost ? (t._removeGhost(), t._onDrop()) : t._endDrop(), document.removeEventListener("mousemove", t._onMouseMove), document.removeEventListener("mouseup", t._onMouseUp))
                    }
                }
                return t.prototype.setItem = function(t, e) {
                    o.collectionStore.setItem(t, e)
                }, t.prototype.onMouseDown = function(t, e, i) {
                    if (1 === t.which) {
                        t.preventDefault(), document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onMouseUp);
                        var o = n.locateNode(t, "dhx_id"),
                            r = o && o.getAttribute("dhx_id"),
                            a = n.locate(t, "dhx_widget_id");
                        if (e && -1 !== e.indexOf(r) && e.length > 1 ? (this._selectedIds = e, this._itemsForGhost = i) : (this._selectedIds = [], this._itemsForGhost = null), r && a) {
                            var s = n.getBox(o),
                                c = s.left,
                                l = s.top;
                            this._transferData.initXOffset = t.pageX - c, this._transferData.initYOffset = t.pageY - l, this._transferData.x = t.pageX, this._transferData.y = t.pageY, this._transferData.targetId = a, this._transferData.id = r, this._transferData.item = o
                        }
                    }
                }, t.prototype._moveGhost = function(t, e) {
                    this._transferData.ghost && (this._transferData.ghost.style.left = t - this._transferData.initXOffset + "px", this._transferData.ghost.style.top = e - this._transferData.initYOffset + "px")
                }, t.prototype._removeGhost = function() {
                    document.body.removeChild(this._transferData.ghost)
                }, t.prototype._onDrop = function() {
                    if (this._canMove) {
                        var t = o.collectionStore.getItem(this._lastCollectionId),
                            e = t && t.config;
                        if (t && e.dragMode !== r.DragMode.source) {
                            if (t.events.fire(r.DragEvents.beforeDrop, [this._lastId, this._transferData.target])) {
                                var i = {
                                        id: this._lastId,
                                        target: t
                                    },
                                    n = {
                                        id: this._transferData.id,
                                        target: this._transferData.target
                                    };
                                this._move(n, i), i.target.events.fire(r.DragEvents.dropComplete, [i.id, this._transferData.dropPosition])
                            }
                            this._endDrop()
                        } else this._endDrop()
                    } else this._endDrop()
                }, t.prototype._onDragStart = function(t, e) {
                    var i = o.collectionStore.getItem(e),
                        n = i.config;
                    if (n.dragMode === r.DragMode.target) return null;
                    var a = i.data.getItem(t),
                        s = function(t, e) {
                            var i = t.getBoundingClientRect(),
                                n = document.createElement("div"),
                                o = t.cloneNode(!0);
                            return o.style.width = i.width + "px", o.style.height = i.height + "px", o.style.maxHeight = i.height + "px", o.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, o.style.opacity = "0.8", o.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, n.appendChild(o), e && e.length && e.forEach(function(t, e) {
                                var o = t.cloneNode(!0);
                                o.style.width = i.width + "px", o.style.height = i.height + "px", o.style.maxHeight = i.height + "px", o.style.top = 12 * (e + 1) - i.height - i.height * e + "px", o.style.left = 12 * (e + 1) + "px", o.style.opacity = "0.6", o.style.zIndex = "" + (-e - 1), n.appendChild(o)
                            }), n.className = "dhx_drag-ghost", n
                        }(this._transferData.item, this._itemsForGhost);
                    return i.events.fire(r.DragEvents.beforeDrag, [a, s]) && t ? (i.events.fire(r.DragEvents.dragStart, [t, this._selectedIds]), this._toggleTextSelection(!0), this._transferData.target = i, this._transferData.dragConfig = n, s) : null
                }, t.prototype._onDrag = function(t) {
                    var e = t.clientX,
                        i = t.clientY,
                        s = document.elementFromPoint(e, i),
                        c = n.locate(s, "dhx_widget_id");
                    if (c) {
                        var l = o.collectionStore.getItem(c),
                            u = n.locate(s, "dhx_id");
                        if (!u) return this._cancelCanDrop(), this._lastCollectionId = c, this._lastId = null, void this._canDrop();
                        if (l.config.dropBehaviour === r.DropBehaviour.complex) {
                            var d = function(t) {
                                var e = t.clientY,
                                    i = n.locateNode(t);
                                if (!i) return null;
                                var o = i.childNodes[0].getBoundingClientRect();
                                return (e - o.top) / o.height
                            }(t);
                            this._transferData.dropPosition = d <= .25 ? r.DropPosition.top : d >= .75 ? r.DropPosition.bot : r.DropPosition.in
                        } else if (this._lastId === u && this._lastCollectionId === c) return;
                        var h = {
                            id: this._transferData.id,
                            target: this._transferData.target
                        };
                        if ("source" !== l.config.dragMode)
                            if (h.target.events.fire(r.DragEvents.dragOut, [u, l]), c !== this._transferData.targetId || !a.isTreeCollection(h.target.data) || a.isTreeCollection(h.target.data) && h.target.data.canCopy(h.id, u)) this._cancelCanDrop(), this._lastId = u, this._lastCollectionId = c, h.target.events.fire(r.DragEvents.dragIn, [u, this._transferData.dropPosition, o.collectionStore.getItem(c)]) && this._canDrop();
                            else this._cancelCanDrop()
                    } else this._canMove && this._cancelCanDrop()
                }, t.prototype._move = function(t, e) {
                    var i = t.target.data,
                        n = e.target.data,
                        o = 0,
                        s = e.id;
                    switch (a.isTreeCollection(n) ? e.target.config.dropBehaviour : void 0) {
                        case r.DropBehaviour.child:
                            break;
                        case r.DropBehaviour.sibling:
                            s = n.getParent(s), o = n.getIndex(e.id) + 1;
                            break;
                        case r.DropBehaviour.complex:
                            var c = this._transferData.dropPosition;
                            c === r.DropPosition.top ? (s = n.getParent(s), o = n.getIndex(e.id)) : c === r.DropPosition.bot && (s = n.getParent(s), o = n.getIndex(e.id) + 1);
                            break;
                        default:
                            o = e.id ? t.target === e.target && n.getIndex(t.id) < n.getIndex(e.id) ? n.getIndex(e.id) - 1 : n.getIndex(e.id) : -1
                    }
                    this._transferData.dragConfig.dragCopy ? this._selectedIds instanceof Array && this._selectedIds.length > 1 ? this._selectedIds.map(function(t) {
                        i.copy(t, o, n, s), o > -1 && o++
                    }) : i.copy(t.id, o, n, s) : this._selectedIds instanceof Array && this._selectedIds.length > 1 ? this._selectedIds.map(function(t) {
                        i.move(t, o, n, s), o > -1 && o++
                    }) : i.move(t.id, o, n, s)
                }, t.prototype._endDrop = function() {
                    this._toggleTextSelection(!1), this._transferData.target && this._transferData.target.events.fire(r.DragEvents.dragEnd, [this._transferData.id, this._selectedIds]), this._cancelCanDrop(), this._canMove = !0, this._transferData = {}, this._lastId = null, this._lastCollectionId = null
                }, t.prototype._cancelCanDrop = function() {
                    this._canMove = !1;
                    var t = o.collectionStore.getItem(this._lastCollectionId);
                    t && this._lastId && t.events.fire(r.DragEvents.cancelDrop, [this._lastId]), this._lastCollectionId = null, this._lastId = null
                }, t.prototype._canDrop = function() {
                    this._canMove = !0;
                    var t = o.collectionStore.getItem(this._lastCollectionId);
                    t && this._lastId && t.events.fire(r.DragEvents.canDrop, [this._lastId, this._transferData.dropPosition])
                }, t.prototype._toggleTextSelection = function(t) {
                    t ? document.body.classList.add("dhx_no-select") : document.body.classList.remove("dhx_no-select")
                }, t
            }(),
            c = window.dhxHelpers = window.dhxHelpers || {};
        c.dragManager = c.dragManager || new s, e.dragManager = c.dragManager
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t() {
                    this._store = {}
                }
                return t.prototype.setItem = function(t, e) {
                    this._store[t] = e
                }, t.prototype.getItem = function(t) {
                    return this._store[t] ? this._store[t] : null
                }, t
            }(),
            o = window.dhxHelpers = window.dhxHelpers || {};
        o.collectionStore = o.collectionStore || new n, e.collectionStore = o.collectionStore
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(5),
            o = i(23),
            r = i(3),
            a = function() {
                function t(t, e, i) {
                    var o = this;
                    this.events = i || new n.EventSystem(this), this._data = e, this._data.events.on(r.DataEvents.removeAll, function() {
                        o._selected = null
                    }), this._data.events.on(r.DataEvents.change, function() {
                        if (o._selected) {
                            var t = o._data.getNearId(o._selected);
                            t !== o._selected && (o._selected = null, t && o.add(t))
                        }
                    })
                }
                return t.prototype.getId = function() {
                    return this._selected
                }, t.prototype.getItem = function() {
                    return this._selected ? this._data.getItem(this._selected) : null
                }, t.prototype.remove = function(t) {
                    return !(t = t || this._selected) || !!this.events.fire(o.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, {
                        $selected: !1
                    }), this._selected = null, this.events.fire(o.SelectionEvents.afterUnSelect, [t]), !0)
                }, t.prototype.add = function(t) {
                    this._selected !== t && (this.remove(), this.events.fire(o.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t, {
                        $selected: !0
                    }), this.events.fire(o.SelectionEvents.afterSelect, [t])))
                }, t
            }();
        e.Selection = a
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(0),
            a = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return n(e, t), e.prototype.isConnector = function() {
                    return !0
                }, e.prototype.getMetaInfo = function() {
                    return [{
                        id: "strokeProps",
                        type: "stroke",
                        label: "Stroke",
                        connector: !0
                    }]
                }, e.prototype.setDefaults = function(t) {
                    return t.connectType = t.connectType || "elbow", t.stroke = t.stroke || "#CCC", t.strokeWidth = t.strokeWidth || 2, t.cornersRadius = t.cornersRadius || 0, t
                }, e.prototype.toSVG = function() {
                    var t = this.config.$selected;
                    return this.id = this.config.id, r.sv("g", {
                        dhx_id: this.config.id || "",
                        _key: this.config.id,
                        class: "dhx_diagram_connector " + this.getCss()
                    }, [r.sv("path", {
                        d: this._getPoints(),
                        fill: "none",
                        class: "dhx_diagram_line " + (t ? "dhx_diagram_line--selected" : ""),
                        "stroke-dasharray": this._getType(),
                        "stroke-linejoin": "round",
                        stroke: this.config.stroke,
                        "stroke-width": this.config.strokeWidth
                    })].concat(this._getArrowLine()))
                }, e.prototype.getBox = function() {
                    var t = o({}, this.config),
                        e = t.points.reduce(function(t, e) {
                            return t.x = Math.max(t.x, e.x), t.y = Math.max(t.y, e.y), t
                        }, {
                            x: 0,
                            y: 0
                        }),
                        i = e.x - t.x,
                        n = e.y - t.y,
                        r = t.x,
                        a = r + i,
                        s = t.y;
                    return {
                        left: r,
                        right: a,
                        top: s,
                        bottom: s + n
                    }
                }, e.prototype._getType = function() {
                    if (this.config.strokeType && (this.config.type = this.config.strokeType), this.config.type) switch (this.config.type) {
                        case "line":
                            return "";
                        case "dash":
                            return "5, 5";
                        default:
                            return ""
                    }
                }, e.prototype._getPoints = function() {
                    return this._getStringPoints()
                }, e.prototype._getStringPoints = function() {
                    return this.config.width = Math.abs(this.config.points[this.config.points.length - 1].x - this.config.points[0].x), this.config.height = Math.abs(this.config.points[this.config.points.length - 1].y - this.config.points[0].y), this.config.x = this.config.points[0].x, this.config.y = this.config.points[0].y, "M " + this.config.x + "," + this.config.y + this.config.points.map(function(t) {
                        return t.x1 && t.y1 ? "Q" + t.x1 + "," + t.y1 + " " + t.x + "," + t.y : "L " + t.x + "," + t.y
                    }).join(" ")
                }, e.prototype._getArrowLine = function() {
                    var t = this.config.points,
                        e = this.config.backArrow,
                        i = this.config.forwardArrow;
                    if (e || i) return [e ? this._arrow(t[1], t[0]) : null, i ? this._arrow(t[t.length - 2], t[t.length - 1]) : null]
                }, e.prototype._arrow = function(t, e) {
                    var i = t.x !== e.x,
                        n = (i ? t.x < e.x : t.y < e.y) ? 1 : -1,
                        o = e.x - (i ? n : 0),
                        a = e.y - (i ? 0 : n),
                        s = e.x - (i ? 7 * n : 5 * n),
                        c = e.y - (i ? 5 : 7 * n),
                        l = e.x + (i ? -7 * n : 5 * n),
                        u = e.y - (i ? -5 : 7 * n);
                    return r.sv("path", {
                        d: "M" + s + "," + c + " L" + o + "," + a + " L" + l + "," + u + " Z",
                        class: "dhx_diagram__arrow",
                        "shape-rendering": "auto",
                        stroke: this.config.stroke,
                        fill: this.config.stroke
                    })
                }, e
            }(i(7).BaseShape);
        e.Line = a
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.getMetaInfo = function() {
                    return [
                        {
                        id: "title",
                        label: "Title",
                        type: "text"
                    }
                    , {
                        id: "text",
                        label: "Text",
                        type: "text"
                    }, {
                        id: "img",
                        label: "Image",
                        type: "image"
                    }]
                }, e.prototype.setDefaults = function(t) {
                    return t.width = t.width || 460, t.height = t.height || 90, t
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_image " + t.prototype.getCss.call(this)
                }, e.prototype.text = function() {
                    var t = this.config;
                    return [o.el("img", {
                        style: "background-color:" + t.color + ";\n\t\t\t\t\t\twidth: 60px; height:60px; float: left; margin: 16px 12px 0 8px; border-radius: 50%;\n\t\t\t\t\t\tbackground-size: 100% 100%; background-repeat: no-repeat;",
                        src: "" + t.img
                    }), o.el("div", {
                        style: "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500;\n\t\t\t\t\t\tcolor: rgba(0, 0, 0, .38); font-size: 14px; line-height: 17px; margin-top: 25px;\n\t\t\t\t\t\twhite-space: nowrap; "
                    }, [t.title || null]), o.el("div", {
                        class: "dhx_content_text " + (t.title ? "" : "dhx_content_text-alone")
                    }, [t.text || null]), o.el("div", {
                        class: "dhx_content_text " + (t.title ? "" : "dhx_content_text-alone")
                    }, [t.text || null])]
                }, e
            }(i(13).OrgChartCard);
        e.OrgChartImgCard = r
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(13),
            a = i(14),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = this.getCenter(),
                        i = t.$selected ? t.color : "#E4E4E4",
                        n = this.getCoords(t);
                    return o.sv("g", {
                        transform: "translate(" + n.x + "," + n.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: this.getCss(),
                        dhx_id: t.id
                    }, [o.sv("rect", {
                        class: "dhx_item_shape",
                        id: t.id,
                        height: t.height,
                        width: t.width,
                        rx: 1,
                        ry: 1,
                        stroke: i,
                        "stroke-width": 1
                    }), o.sv("text", {
                        y: t.height / 2,
                        dy: "-5",
                        x: t.width / 2,
                        "text-anchor": "middle"
                    }, [t.title ? o.sv("tspan", {
                        class: "dhx_content_title"
                    }, this.title()) : null, o.sv("tspan", {
                        class: "dhx_content_text",
                        x: t.width / 2,
                        dy: t.title ? "1.5em" : ".5em"
                    }, this.text())]), a.getHeaderTpl(t), a.getCircleTpl(t)])
                }, e.prototype.getMetaInfo = function() {
                    return [{
                        id: "title",
                        label: "Title",
                        type: "text"
                    }, {
                        id: "text",
                        label: "Text",
                        type: "text"
                    }]
                }, e.prototype.text = function() {
                    return this.config.text || ""
                }, e.prototype.title = function() {
                    return this.config.title || ""
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_svg-card " + (t.prototype.getCss.call(this) || "")
                }, e
            }(r.OrgChartCard);
        e.OrgChartSvgCard = s
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(13),
            a = i(14),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.toSVG = function() {
                    var t = this.setDefaults(this.config),
                        e = this.getCenter(),
                        i = t.$selected ? t.color : "#E4E4E4",
                        n = this.getCoords(t);
                    return o.sv("g", {
                        transform: "translate(" + n.x + "," + n.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: this.getCss(),
                        dhx_id: t.id
                    }, [o.sv("defs", [o.sv("pattern", {
                        id: "uid" + t.id,
                        patternUnits: "objectBoundingBox",
                        width: "100%",
                        height: "100%"
                    }, [o.sv("image", {
                        width: 60,
                        height: 60,
                        href: t.img
                    })])]), o.sv("rect", {
                        class: "dhx_item_shape",
                        id: t.id,
                        height: t.height,
                        width: t.width,
                        rx: 1,
                        ry: 1,
                        stroke: i,
                        "stroke-width": 1
                    }), o.sv("circle", {
                        class: "circ",
                        cx: 38,
                        cy: 46,
                        r: 30,
                        fill: "url(#uid" + t.id + ")"
                    }), o.sv("text", {
                        y: t.height / 2,
                        dy: "-5",
                        x: t.width / 2 + 30,
                        "text-anchor": "middle"
                    }, [t.title ? o.sv("tspan", {
                        class: "dhx_content_title"
                    }, this.title()) : null, o.sv("tspan", {
                        class: "dhx_content_text",
                        x: t.width / 2 + 30,
                        dy: t.title ? "1.5em" : ".5em"
                    }, this.text())]), a.getHeaderTpl(t), a.getCircleTpl(t)])
                }, e.prototype.getMetaInfo = function() {
                    return [{
                        id: "title",
                        label: "Title",
                        type: "text"
                    }, {
                        id: "text",
                        label: "Text",
                        type: "text"
                    }, {
                        id: "img",
                        label: "Image",
                        type: "image"
                    }]
                }, e.prototype.setDefaults = function(t) {
                    return t.width = t.width || 210, t.height = t.height || 90, t
                }, e.prototype.text = function() {
                    return this.config.text || ""
                }, e.prototype.title = function() {
                    return this.config.title || ""
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_svg-card " + (t.prototype.getCss.call(this) || "")
                }, e
            }(r.OrgChartCard);
        e.OrgChartSvgImgCard = s
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.config = e, i.id = i.config.id, i
                }
                return n(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = this.getCoords(t);
                    return this.id = t.id, o.sv("g", {
                        _key: t.id,
                        transform: "translate(" + e.x + "," + e.y + ") ",
                        "text-anchor": "middle",
                        class: "dhx_item_shape dhx_diagram_flow_item " + this.getCss(),
                        dhx_id: t.id
                    }, [this._getText()])
                }, e.prototype.getMetaInfo = function() {
                    return [{
                        id: "text",
                        label: "Content",
                        type: "text"
                    }, {
                        id: "textProps",
                        type: "textProps",
                        label: "Text",
                        alignments: !1
                    }]
                }, e.prototype.canResize = function() {
                    return !1
                }, e.prototype.setDefaults = function(t) {
                    var e = t.width,
                        i = t.height,
                        n = t.fontColor,
                        o = t.fontSize,
                        r = t.fontStyle,
                        a = t.textAlign,
                        s = t.lineHeight,
                        c = t.textVerticalAlign;
                    return t.width = e || 0, t.height = i || 0, t.fontColor = n || "rgba(0,0,0,0.70)", t.fontSize = o || 14, t.textAlign = a || "center", t.lineHeight = s || 14, t.fontStyle = r || "normal", t.textVerticalAlign = c || "center", t
                }, e.prototype._getText = function() {
                    var t = this.config;
                    if (t.text) {
                        var e = t.text.split(/\r?\n/).filter(function(t) {
                                return t.trim()
                            }),
                            i = 1 === e.length ? 0 : .6,
                            n = e.map(function(t) {
                                var e = o.sv("tspan", {
                                    x: 0,
                                    dy: i + "em"
                                }, t.trim());
                                return i = 1.2, e
                            });
                        return o.sv("text", {
                            y: t.height,
                            x: t.width,
                            "text-anchor": "middle",
                            class: "dhx_item_text",
                            "font-size": t.fontSize,
                            "font-style": t.fontStyle,
                            fill: t.fontColor
                        }, n)
                    }
                }, e
            }(i(7).BaseShape);
        e.DiagramTextShape = r
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.config = e, i.id = i.config.id, i
                }
                return n(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = t.html,
                        i = t.svg,
                        n = t.width,
                        r = t.height,
                        a = t.id,
                        s = t.angle,
                        c = this.getCenter(),
                        l = this.getCoords(t);
                    if (window.SVGForeignObjectElement && e) return o.sv("g", {
                        _key: a,
                        transform: "translate(" + l.x + "," + l.y + ") rotate(" + (s || 0) + "," + c.x + "," + c.y + ")",
                        class: this.getCss(),
                        dhx_id: a
                    }, [o.sv("foreignObject", {
                        overflow: "hidden",
                        width: n,
                        height: r,
                        transform: "translate(0 0)"
                    }, [o.el("div", {
                        class: "shape_content",
                        style: "width:" + n + "px;height:" + r + "px;",
                        ".innerHTML": e
                    })])]);
                    var u = (new DOMParser).parseFromString(i || e, "text/xml");
                    return o.sv("g", {
                        _key: a,
                        transform: "translate(" + l.x + "," + l.y + ") rotate(" + (s || 0) + "," + c.x + "," + c.y + ")",
                        class: this.getCss(),
                        dhx_id: a,
                        width: n,
                        height: r
                    }, [o.jsonToVDOM(o.xmlToJson(u))])
                }, e.prototype.setDefaults = function(t) {
                    return t.width = t.width || 140, t.height = t.height || 90, t
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_item " + t.prototype.getCss.call(this)
                }, e
            }(i(7).BaseShape);
        e.CustomContent = r
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(11),
            r = i(8),
            a = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n._roots = [], n._orgMode = "org" === e.type, n.events.on(r.DataEvents.change, function(t, e, i) {
                        "remove" === e && (n._removeNested(i), n._removeCore(i.$parent)), "add" === e && i.parent && n._addCore({
                            from: i.parent,
                            to: i.id
                        }, -1), n._mark_chains()
                    }), n
                }
                return n(e, t), e.prototype.getNearId = function(t) {
                    var e = this._pull[t];
                    if (!e) return this._order.length ? this._order[0].id : "";
                    for (var i = e; this._orgMode && i.$parent;)
                        if (!1 === (i = this._pull[this._pull[i.$parent].from]).open) return i.id;
                    return e.id
                }, e.prototype.mapVisible = function(t) {
                    var e = this,
                        i = [];
                    if (this._orgMode)
                        for (var n = this.getRoots(), o = 0; o < n.length; o++) this._eachBranch(this.getItem(n[o]), t, i);
                    else this.map(function(n) {
                        if (!n.hidden) {
                            if (n.$shape.isConnector()) {
                                var o = e.getItem(n.from) || {},
                                    r = e.getItem(n.to) || {};
                                if (o.hidden || r.hidden) return
                            }
                            i.push(t(n))
                        }
                    });
                    return i
                }, e.prototype.getRoots = function() {
                    return this._roots
                }, e.prototype._removeNested = function(t) {
                    var e = t.$kids;
                    if (e)
                        for (var i = 0; i < e.length; i++) this._orgMode && (this._removeNested(this.getItem(e[i][1])), this._removeCore(e[i][1])), this._removeCore(e[i][0])
                }, e.prototype._eachBranch = function(t, e, i) {
                    if (!t.hidden && (i.push(e(t)), !1 !== t.open)) {
                        var n = t.$kids;
                        if (n)
                            for (var o = 0; o < n.length; o++) {
                                var r = this.getItem(n[o][1]);
                                r.hidden || (i.push(e(this.getItem(n[o][0]))), this._eachBranch(r, e, i))
                            }
                    }
                }, e.prototype._parse_data = function(e) {
                    for (var i = [], n = !1, o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.parent && !n && i.push({
                            from: r.parent,
                            to: r.id
                        }), r.from && (n = !0)
                    }
                    i.length && !n && (e = e.concat(i)), t.prototype._parse_data.call(this, e)
                }, e.prototype._mark_chains = function() {
                    var t = this;
                    this._roots = [];
                    var e = {},
                        i = {};
                    this.map(function(t) {
                        if (t.$shape.isConnector()) {
                            var n = t;
                            i[n.to] = n.id, (e[n.from] = e[n.from] || []).push([t.id, n.to])
                        }
                    }), this.map(function(n) {
                        n.$shape.isConnector() || (n.$parent = i[n.id], n.$kids = e[n.id], n.$parent || t._roots.push(n.id))
                    })
                }, e
            }(o.DataCollection);
        e.ShapesCollection = a
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(1),
            r = i(8),
            a = function() {
                function t(t, e) {
                    var i = this;
                    this.config = {
                        height: 50,
                        iconWidth: 30,
                        gap: 20,
                        icons: e
                    }, this.events = t, this._handlers = {
                        onclick: o.eventHandler(function(t) {
                            return o.locate(t)
                        }, {
                            dhx_icon: function(t, e) {
                                i.events.fire(r.DiagramEvents.shapeIconClick, [e, t])
                            }
                        })
                    }, this.events.on(r.DiagramEvents.shapeMouseDown, function(t, e, n) {
                        i._pressCoords = n
                    }), this.events.on(r.DiagramEvents.emptyAreaClick, function() {
                        i._pressCoords = null
                    })
                }
                return t.prototype.toSVG = function(t, e) {
                    var i = this.config,
                        o = this._getIcons(t, i.icons),
                        r = i.iconWidth * o.length + i.gap,
                        a = this._getCoords(t, r, i.height, e.scale);
                    return n.el("div", {
                        class: "dhx_popup_toolbar",
                        style: "\n\t\t\t\tmax-height:" + this.config.height + "px;\n\t\t\t\twidth:" + this.config.width + "px;\n\t\t\t\ttop:" + (a.y - e.top * e.scale) + "px;\n\t\t\t\tleft:" + (a.x - e.left * e.scale) + "px;",
                        onclick: this._handlers.onclick
                    }, [n.el("div", {
                        class: "dhx_item_toolbar"
                    }, o)])
                }, t.prototype._getIcons = function(t, e) {
                    for (var i = [], o = 0; o < e.length; o++) {
                        var r = e[o];
                        if (!r.check || r.check(t)) {
                            var a = r.css ? r.css(t) : "",
                                s = {
                                    _key: r.id,
                                    class: "dhx_icon " + a,
                                    dhx_id: r.id
                                },
                                c = "function" == typeof r.content ? r.content(t) : r.content;
                            "string" == typeof c ? (s[".innerHTML"] = c, i.push(n.el("div", s))) : i.push(n.el("div", s, [c]))
                        }
                    }
                    return i
                }, t.prototype._getCoords = function(t, e, i, n) {
                    if (t.$shape.isConnector()) return this._pressCoords ? {
                        x: this._pressCoords.x * n - 50,
                        y: this._pressCoords.y * n - 50
                    } : {
                        x: t.points[0].x * n,
                        y: t.points[0].y * n
                    };
                    var o = t.$shape.getBox();
                    return {
                        x: (o.right / 2 + o.left / 2) * n - e / 2,
                        y: o.top * n - i - 10
                    }
                }, t
            }();
        e.Toolbar = a
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(123),
            o = i(30),
            r = i(0),
            a = i(29),
            s = i(124),
            c = i(125);

        function l(t, e) {
            n.drag.start(t, e.data.resizer, e.data.p)
        }

        function u(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return Math.sqrt(i * i + n * n)
        }
        e.getLength = u;
        var d = function() {
            function t(t, e) {
                var i = this;
                this._events = t, this._diagram = e, this._connect = new s.Connect(this, this._diagram), this._resize = new c.Resize(this, this._diagram), this._diagram.events.on(a.DiagramEvents.shapeMouseDown, function(t, r) {
                    var s = i._diagram.config.gridStep;
                    i._connect.removeNearShape(), i._diagram.selection.add(t);
                    var c = i._diagram.data.getItem(t);
                    c.$connectMode && i._connect.setNearShape(c), c.$shape.isConnector() && c.$selectedPoint && (c.$selectedPoint = ""), n.drag.start(r, {
                        onMove: function(t, n, o) {
                            n.x = Math.round(n.x / s) * s, n.y = Math.round(n.y / s) * s;
                            var r = {
                                dx: (c.dx || 0) + n.x,
                                dy: (c.dy || 0) + n.y
                            };
                            "org" !== e.config.type && (r = {
                                x: (c.x || 0) + n.x,
                                y: (c.y || 0) + n.y
                            }), i._diagram.data.update(c.id, r)
                        },
                        onUp: function() {
                            i._events.fire(o.DiagramEditorEvents.shapeMove, [])
                        }
                    }, null), i._diagram.events.on(a.DiagramEvents.beforeRender, function(t) {
                        return i._diagramSize = t
                    })
                }), this._diagram.events.on(a.DiagramEvents.shapedDblClick, function(t, e) {
                    var n = i._diagram.data.getItem(t);
                    if (n.$shape.isConnector()) {
                        var o = i.getPoint(e.clientX, e.clientY);
                        o.$custom = !0;
                        var r = 1 / 0,
                            a = n.points.reduce(function(t, e, i) {
                                var n = u(e, o);
                                return n < r && (r = n, t = i), t
                            }, 1),
                            s = n.points.slice();
                        s.splice(a, 0, o), i._diagram.data.update(t, {
                            points: s
                        }), i._diagram.paint()
                    }
                }), this._diagram.events.on(a.SelectionEvents.afterUnSelect, function(t) {
                    var e = i._diagram.data.getItem(t);
                    e.$shape.isConnector() && e.$selectedPoint && (e.$selectedPoint = null)
                })
            }
            return t.prototype.toSVG = function(t, e) {
                if (!t) {
                    var i = [this._connect.getPoints(t, e)];
                    return r.el(".dhx_controls", {
                        onmousedown: {
                            ".dhx_connect_grip": l,
                            ".dhx_connect_point": l
                        }
                    }, i)
                }
                if (!1 !== t.$shape.canResize()) {
                    var n = [];
                    return n = "org" === this._diagram.config.type ? [this._resize.getPoints(t, e)] : [this._connect.getPoints(t, e), this._connect.getItemId() !== t.id && this._resize.getPoints(t, e)], r.el(".dhx_controls", {
                        onmousedown: {
                            ".dhx_resize_grip": l,
                            ".dhx_connect_grip": l,
                            ".dhx_connect_point": l,
                            ".dhx_shape_rotate": l
                        },
                        onclick: {
                            ".dhx_resize_grip": this._gripClick
                        }
                    }, n)
                }
            }, t.prototype.setNearShape = function(t) {
                this._connect.setNearShape(t)
            }, t.prototype.toggleNearShape = function(t) {
                this._connect.toggleNearShape(t)
            }, t.prototype.getPoint = function(t, e) {
                var i = this._diagram.getRootView().node.el,
                    n = i.getBoundingClientRect(),
                    o = this._diagram.config.margin,
                    r = this._diagramSize || {
                        left: -o.x,
                        top: -o.y
                    },
                    a = this._diagram.config.scale,
                    s = i.scrollLeft,
                    c = i.scrollTop;
                return {
                    x: (t - n.left) / a - o.x + s + (r.left + o.x),
                    y: (e - n.top) / a - o.y + c + (r.top + o.y)
                }
            }, t.prototype.onMove = function(t, e, i) {
                var n = this._diagram.selection.getItem();
                if (i.rotate && this._rotate(t, n), i.$break) {
                    i.$break = !1;
                    var o = {
                        x: i.dx,
                        y: i.dy,
                        $custom: !0
                    };
                    n.points.splice(i.i, 0, o)
                }
                var r = this._diagram.config.gridStep;
                if (n.$shape.isConnector()) this._connect.moveConnector(t, n, e, i);
                else {
                    e.x = Math.round(e.x / r) * r, e.y = Math.round(e.y / r) * r;
                    var a = {
                        x: n.x
                    };
                    1 === i.dx ? (a.x += e.x, a.width = n.width - e.x) : a.width = n.width - e.x * i.dx, a.width >= 30 || (a.width = n.width), a.height = n.height - e.y * i.dy, a.height >= 30 ? "org" === this._diagram.config.type ? a.dy = (n.dy || 0) + e.y * (1 === i.dy ? 1 : 0) : a.y = (n.y || 0) + e.y * (1 === i.dy ? 1 : 0) : a.height = n.height, this._diagram.data.update(n.id, a)
                }
            }, t.prototype.onUp = function() {
                this._connect.onUp(), this._diagram.paint(), this._events.fire(o.DiagramEditorEvents.shapeResize, [])
            }, t.prototype._rotate = function(t, e) {
                var i = this.getPoint(t.clientX, t.clientY),
                    n = i.x,
                    o = i.y,
                    r = e.x + e.width / 2,
                    a = e.y + e.height / 2,
                    s = Math.atan2(o - a, n - r);
                s < 0 && (s += 2 * Math.PI);
                var c = Math.round(s * (180 / Math.PI));
                this._diagram.data.update(e.id, {
                    angle: c
                })
            }, t.prototype._gripClick = function(t, e) {
                var i = e.data.resizer._diagram.selection.getItem(),
                    n = e.data.p;
                i.$shape.isConnector() && !n.$break && (i.$selectedPoint = n.i)
            }, t
        }();
        e.Controls = d
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0);
        e.getIconGroup = function(t, e, i, o, r) {
            return n.el(".icons_group", {
                onclick: [t, e]
            }, i.map(function(t) {
                return n.el("div", {
                    class: (t.css || "") + " " + (t.id === o ? "dhx_selected" : ""),
                    dhx_id: r && o === t.id ? "" : t.id
                }, [t.el || null])
            }))
        }, e.getSelect = function(t, e, i, o) {
            var r = i[0],
                a = i.map(function(i) {
                    var a;
                    if (!i.disabled) return i.id === o && (r = i, a = "dhx_selected_option"), n.el(".dhx_select_option", {
                        onmousedown: [t, e, i.id],
                        tabIndex: 1,
                        class: a
                    }, [i.el ? i.el() : n.el("div", {
                        class: i.class || ""
                    }, i.text || ""), i.id === o && n.el(".dxi.dxi-check")])
                });
            return [n.el(".dhx_custom_select", {
                tabIndex: 1
            }, [n.el(".dhx_select_label", [r.el ? r.el() : n.el("div", {
                class: r.class || ""
            }, r.text || "")]), n.el(".dhx_select_content", a)])]
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(130)), n(i(79)), n(i(68));
        var o = i(69);
        e.locale = o.default
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                return e + e + i + i + n + n
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        }

        function o(t) {
            var e, i, n = t.r / 255,
                o = t.g / 255,
                r = t.b / 255,
                a = Math.max(n, o, r),
                s = a - Math.min(n, o, r),
                c = function(t) {
                    return (a - t) / 6 / s + .5
                };
            if (0 === s) e = i = 0;
            else {
                i = s / a;
                var l = c(n),
                    u = c(o),
                    d = c(r);
                n === a ? e = d - u : o === a ? e = 1 / 3 + l - d : r === a && (e = 2 / 3 + u - l), e < 0 ? e += 1 : e > 1 && (e -= 1)
            }
            return {
                h: Math.floor(360 * e),
                s: i,
                v: a
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.HSVtoRGB = function(t) {
            var e = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                i = t.h / 60,
                n = t.s,
                o = t.v,
                r = Math.floor(i) % 6,
                a = i - Math.floor(i),
                s = 255 * o * (1 - n),
                c = 255 * o * (1 - n * a),
                l = 255 * o * (1 - n * (1 - a));
            switch (o *= 255, r) {
                case 0:
                    e.r = o, e.g = l, e.b = s;
                    break;
                case 1:
                    e.r = c, e.g = o, e.b = s;
                    break;
                case 2:
                    e.r = s, e.g = o, e.b = l;
                    break;
                case 3:
                    e.r = s, e.g = c, e.b = o;
                    break;
                case 4:
                    e.r = l, e.g = s, e.b = o;
                    break;
                case 5:
                    e.r = o, e.g = s, e.b = c
            }
            for (var u in e) e[u] = Math.round(e[u]);
            return e
        }, e.RGBToHex = function(t) {
            return Object.keys(t).reduce(function(e, i) {
                var n = t[i].toString(16).toUpperCase();
                return e + (n = 1 === n.length ? "0" + n : n)
            }, "#")
        }, e.HexToRGB = n, e.RGBToHSV = o, e.HexToHSV = function(t) {
            return o(n(t))
        }, e.isHex = function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            cancel: "Cancel",
            select: "Select",
            rightClickToDelete: "Right click to delete",
            customColors: "Custom colors",
            addNewColor: "Add new color"
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(134)), n(i(80))
    }, , , function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(2),
            r = i(5),
            a = i(10),
            s = i(29),
            c = i(74),
            l = i(95),
            u = i(30),
            d = i(75),
            h = i(65),
            p = i(76),
            g = i(78),
            f = i(82),
            v = function(t) {
                function e(e, i) {
                    var n = this,
                        a = o.extend({
                            shapeType: "card",
                            gridStep: 10,
                            reservedWidth: 100,
                            editMode: !0,
                            showApply: !0,
                            showReset: !0,
                            showExport: !0,
                            lineGap: 10
                        }, i);
                    return (n = t.call(this, e, a) || this).version = "2.2.1", n.events = new r.EventSystem(n), n._keyManager = l.keyManager, n._initUI(e), n._setHandlers(), n
                }
                return n(e, t), e.prototype.paint = function() {
                    this._layout.paint(), this.diagram.paint()
                }, e.prototype.import = function(t) {
                    this.diagram.data.parse(t.data.serialize())
                }, e.prototype.parse = function(t) {
                    this.diagram.data.parse(t)
                }, e.prototype.serialize = function() {
                    return this.diagram.data.serialize()
                }, e.prototype.getRootView = function() {
                    return this._layout.getRootView()
                }, e.prototype._initUI = function(t) {
                    var e = this,
                        i = this._layout = new c.Layout(t, {
                            height: "100%",
                            width: "100%",
                            rows: [{
                                id: "top",
                                css: "dhx_topbar shadow-bottom"
                            }, {
                                css: "flex ",
                                cols: [{
                                    id: "center",
                                    css: "flex"
                                }, {
                                    id: "right",
                                    css: "sidebar"
                                }]
                            }]
                        });
                    this.diagram = new s.Diagram(null, {
                        type: "org",
                        select: !0,
                        toolbar: d.buttons,
                        defaultShapeType: this.config.shapeType,
                        scroll: !0,
                        gridStep: this.config.gridStep,
                        margin: {
                            y: 70,
                            x: this.config.reservedWidth
                        },
                        lineGap: this.config.lineGap
                    }), this._sidebar = new g.Sidebar(this.diagram), this._resizer = new h.Controls(this.events, this.diagram), this.diagram.config.$svg = function(t) {
                        var i = e.diagram.selection.getId(),
                            n = e.diagram.data.getItem(i);
                        return [e._resizer.toSVG(n, t)]
                    }, this.diagram.events.on(s.SelectionEvents.beforeSelect, function(t) {
                        return !e.diagram.data.getItem(t).$shape.isConnector()
                    }), this.history = new f.UndoManager(this.diagram.data), this.diagram.data.parse([{
                        id: "1"
                    }]), this.diagram.events.on(s.DataEvents.load, function() {
                        e.history.reset(), e.diagram.selection.add(e.diagram.data.getId(0))
                    }), i.getCell("top").attach(p.topbar, this), i.getCell("right").attach(this._sidebar.getUI()), i.getCell("center").attach(this.diagram)
                }, e.prototype._setHandlers = function() {
                    var t = this;
                    this.diagram.events.on(s.DiagramEvents.shapeIconClick, function(e) {
                        var i = t.diagram.selection.getId();
                        switch (e) {
                            case "add":
                                var n = {
                                    id: o.uid(),
                                    parent: i
                                };
                                t.diagram.data.add(n), t.diagram.showItem(n.id);
                                break;
                            case "remove":
                                t._removeShape(i);
                                break;
                            case "vertical":
                            case "horizontal":
                                t.diagram.data.update(i, {
                                    dir: e
                                })
                        }
                    }), this.events.on(u.DiagramEditorEvents.exportData, function() {
                        var e = JSON.stringify(t.diagram.data.serialize());
                        o.downloadFile(e, "data.json", "text/json")
                    }), this.events.on(u.DiagramEditorEvents.zoomIn, function() {
                        t.diagram.config.scale = t.diagram.config.scale || 1, t.diagram.config.scale += .05, t.paint()
                    }), this.events.on(u.DiagramEditorEvents.zoomOut, function() {
                        t.diagram.config.scale = t.diagram.config.scale || 1, t.diagram.config.scale = t.diagram.config.scale <= .05 ? .05 : t.diagram.config.scale - .05, t.paint()
                    }), this.events.on(u.DiagramEditorEvents.visibility, function() {
                        t.config.editMode = !t.config.editMode, t._checkEditMode(), t._layout.paint()
                    }), this.diagram.events.on(s.DataEvents.change, function() {
                        return t._layout.paint()
                    })
                }, e.prototype._checkEditMode = function() {
                    this._layout.getCell("left") && (this._layout.getCell("left").config.hidden = !this.config.editMode), this._layout.getCell("right").config.hidden = !this.config.editMode;
                    var t = this._layout.getCell("center");
                    if (this.config.editMode) t.attach(this.diagram);
                    else {
                        var e = new s.Diagram(null, {
                            type: this.config.type || "",
                            scroll: !0,
                            gridStep: this.config.gridStep,
                            scale: this.diagram.config.scale,
                            margin: {
                                y: 70,
                                x: this.config.reservedWidth
                            }
                        });
                        e.data.parse(this.diagram.data.serialize()), t.attach(e)
                    }
                    this.config.editMode && (t.config.css = t.config.css.replace(" dhx_preview_mode", "")), this.config.editMode || -1 !== t.config.css.indexOf(" dhx_preview_mode") || (t.config.css += " dhx_preview_mode")
                }, e.prototype._removeShape = function(t) {
                    t = t || this.diagram.selection.getId(), this.diagram.selection.remove(t), this.diagram.data.remove(t), this._sidebar.clear()
                }, e
            }(a.View);
        e.DiagramEditor = v
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(92)), n(i(36))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(19);
        e.buttons = [{
            content: n.addIcon,
            id: "add"
        }, {
            content: n.horizontalIcon,
            id: "horizontal",
            check: function(t) {
                return t.$kids && t.$kids.length
            },
            css: function(t) {
                return "vertical" !== t.dir ? "dhx_active" : ""
            }
        }, {
            content: n.verticalIcon,
            id: "vertical",
            check: function(t) {
                return t.$kids && t.$kids.length
            },
            css: function(t) {
                return "vertical" === t.dir ? "dhx_active" : ""
            }
        }, {
            content: n.removeIcon,
            id: "remove",
            check: function(t) {
                return !!t.$parent
            },
            css: function() {
                return "dhx_icon_remove"
            }
        }], e.freeEditorButtons = [{
            content: function() {
                return n.getIcon("duplicate")
            },
            id: "copy",
            check: function(t) {
                return !t.$shape.isConnector()
            }
        }, {
            content: function() {
                return n.getIcon("connect")
            },
            id: "connect",
            check: function(t) {
                return !t.$shape.isConnector() && "text" !== t.type
            },
            css: function(t) {
                return t.$connectMode ? "dhx_active_icon" : ""
            }
        }, {
            content: n.removeIcon,
            id: "removePoint",
            check: function(t) {
                return t.$shape.isConnector() && t.$selectedPoint
            },
            css: function(t) {
                return t.$connectMode ? "dhx_active_icon" : ""
            }
        }, {
            content: n.removeIcon,
            id: "remove",
            css: function() {
                return "dhx_icon_remove"
            },
            check: function(t) {
                return !t.$selectedPoint
            }
        }]
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(77),
            r = i(30);

        function a(t, e) {
            e.data.editor.history.undo(!0), e.data.editor.events.fire(r.DiagramEditorEvents.resetButton)
        }

        function s(t, e) {
            e.data.editor.events.fire(r.DiagramEditorEvents.applyButton)
        }

        function c(t, e) {
            e.data.editor.history.undo()
        }

        function l(t, e) {
            e.data.editor.history.redo()
        }

        function u(t, e) {
            var i = e.data.editor;
            "in" === e.data.dir ? i.events.fire(r.DiagramEditorEvents.zoomIn) : i.events.fire(r.DiagramEditorEvents.zoomOut)
        }

        function d(t, e) {
            e.data.editor.events.fire(r.DiagramEditorEvents.visibility)
        }

        function h(t, e) {
            e.data.editor.events.fire(r.DiagramEditorEvents.exportData)
        }
        e.topbar = function(t) {
            var e = t.history,
                i = n.el("button", {
                    class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_link dhx_button__topbar",
                    dhx_id: "resetAll",
                    _data: {
                        editor: t
                    },
                    onclick: [a]
                }, [n.el("span.dhx_button__text", o.default.resetChanges)]),
                r = n.el("button", {
                    class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_flat dhx_button__topbar",
                    dhx_id: "applyAll",
                    _data: {
                        editor: t
                    },
                    onclick: [s]
                }, [n.el("span.dhx_button__text", o.default.applyAll)]),
                p = n.el("button", {
                    class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_link dhx_button__topbar",
                    dhx_id: "exportData",
                    _data: {
                        editor: t
                    },
                    onclick: [h]
                }, [n.el("span.dhx_button__text", o.default.exportData)]),
                g = n.el(".dhx_editor_scale", [n.el(".dhx_zoom_in", {
                    class: "dxi dxi-minus",
                    onclick: [u],
                    _data: {
                        editor: t,
                        dir: "out"
                    }
                }), n.el(".dhx_scale_value", (100 * (t.diagram.config.scale || 1)).toFixed(0) + "%"), n.el(".dhx_zoom_out", {
                    class: "dxi dxi-plus",
                    onclick: [u],
                    _data: {
                        editor: t,
                        dir: "in"
                    }
                })]),
                f = t.config.editMode ? "dxi-eye" : "dxi-eye-off dhx_selected",
                v = n.el(".dhx_visibility", {
                    class: "dxi " + f,
                    onclick: [d],
                    _data: {
                        editor: t,
                        visible: !0
                    }
                }),
                _ = n.el(".dhx_items_block", [t.config.showExport && p, v, g]),
                y = n.el(".dhx_state_block", [n.el("div", {
                    dhx_id: "undo",
                    _data: {
                        editor: t
                    },
                    onclick: [c],
                    class: "undo dxi dxi-undo " + (e.isUndo() ? "undo--active" : "")
                }), n.el("div", {
                    dhx_id: "redo",
                    _data: {
                        editor: t
                    },
                    onclick: [l],
                    class: "redo dxi dxi-redo " + (e.isRedo() ? "redo--active" : "")
                })]);
            return n.el("div", {
                class: "dhx_topbar_wrap",
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%"
                }
            }, [t.config.showReset && i, t.config.showApply && r, y, _])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            applyAll: "Apply all",
            exportData: "Export Data",
            resetChanges: "Reset Changes",
            // editCard: "Edit Card",
            // color: "Color",
            // position: "Position",
            // size: "Size",
            save: "Save",
            reset: "Reset",
            shapeChangeTooltip: "Choose new type of shape from left toolbar"
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(29),
            r = i(126),
            a = i(31),
            s = i(143),
            c = i(77),
            l = function() {
                function t(t) {
                    var e = this;
                    this._diagram = t, "org" === t.config.type ? this._ui = new r.Property(null, {
                        title: c.default.editCard
                    }) : this._ui = new r.Property(null);
                    var i = "org" === t.config.type ? s.baseSidebar : s.freeSidebar;
                    this._ui.data.parse(i), this._ui.events.on(a.PropertyEvents.change, function() {
                        return e.getValues()
                    }), this._diagram.events.on(o.DataEvents.change, function() {
                        return e.setValues()
                    }), this._diagram.events.on(o.SelectionEvents.afterSelect, function() {
                        var t = e._diagram.selection.getItem();
                        if (e._itemType !== t.type) {
                            var n = t.$shape.getMetaInfo().map(function(t) {
                                    return t.type = "text" === t.type ? "textarea" : t.type, t
                                }),
                                o = i.concat(n);
                            t.$shape.isConnector() && (o = n.slice()), t.$shape.canResize() || (o = n.slice()), e._ui.data.parse(o), e._itemType = t.type
                        }
                        e.setValues()
                    }), this._ui.getRootView().hooks = {
                        didRedraw: function() {
                            e._selectItem && (e.select(e._selectItem), e._selectItem = null)
                        }
                    }
                }
                return t.prototype.setValues = function() {
                    var t = this._diagram.selection.getItem();
                    if (t) {
                        var e = n({}, t, {
                            position: {
                                dx: t.dx || 0,
                                dy: t.dy || 0
                            },
                            size: {
                                width: t.width,
                                height: t.height
                            },
                            color: t.color || ""
                        });
                        if ("org" !== this._diagram.config.type) {
                            var i = t.$shape.isConnector() ? {
                                backArrow: e.backArrow || "",
                                forwardArrow: e.forwardArrow || "",
                                connectType: t.connectType || "elbow",
                                cornersRadius: t.cornersRadius
                            } : {};
                            e = n({}, t, {
                                align: {
                                    horizontal: t.horizontalAlign || "",
                                    vertical: t.verticalAlign || ""
                                },
                                arrange: {
                                    x: t.x || 0,
                                    y: t.y || 0,
                                    width: t.width,
                                    height: t.height,
                                    angle: t.angle || 0
                                },
                                fill: t.fill || "",
                                strokeProps: n({
                                    stroke: t.stroke || "#2196F3",
                                    strokeWidth: t.strokeWidth,
                                    strokeType: t.strokeType || "line"
                                }, i),
                                textProps: {
                                    fontColor: t.fontColor,
                                    fontSize: t.fontSize,
                                    lineHeight: t.lineHeight,
                                    fontStyle: t.fontStyle,
                                    fontWeight: t.fontWeight,
                                    textAlign: t.textAlign,
                                    textVerticalAlign: t.textVerticalAlign
                                }
                            })
                        }
                        this._ui.setValues(e)
                    }
                }, t.prototype.getValues = function() {
                    var t = n({}, this._ui.getValues());
                    "org" === this._diagram.config.type ? (t.dx = 1 * t.position.dx, t.dy = 1 * t.position.dy, t.width = 1 * t.size.width, t.height = 1 * t.size.height) : (t.arrange && (t.x = 1 * t.arrange.x, t.y = 1 * t.arrange.y, t.width = 1 * t.arrange.width, t.height = 1 * t.arrange.height, t.angle = 1 * t.arrange.angle, delete t.arrange), t.align && (t.horizontalAlign = t.align.horizontal, t.verticalAlign = t.align.vertical, "bottom" === t.align.vertical && (t.dy = t.height), "top" === t.align.vertical && (t.dy = -t.height), "middle" === t.align.vertical && (t.dy = 0), "center" === t.align.horizontal && (t.dx = 0), "left" === t.align.horizontal && (t.dx = -t.width), "right" === t.align.horizontal && (t.dx = t.width)), t.strokeProps && (t.connectType !== t.strokeProps.connectType && (t.points = null), delete(t = n({}, t, t.strokeProps)).strokeProps), t.textProps && delete(t = n({}, t, t.textProps)).textProps), delete t.size, delete t.position;
                    var e = this._diagram.selection.getId();
                    this._diagram.data.update(e, t)
                }, t.prototype.clear = function() {
                    this._ui.clear()
                }, t.prototype.empty = function() {
                    this._ui.data.parse([{
                        id: "arrange",
                        type: "label",
                        label: "Arrange"
                    }, {
                        id: "fill",
                        type: "label",
                        label: "Fill"
                    }, {
                        id: "stroke",
                        type: "label",
                        label: "Stroke"
                    }, {
                        id: "text",
                        type: "label",
                        label: "Text"
                    }]), this._itemType = null
                }, t.prototype.select = function(t) {
                    this._ui.selectItem(t)
                }, t.prototype.isItemsSelected = function() {
                    return this._ui.isItemsSelected()
                }, t.prototype.getUI = function() {
                    return this._ui
                }, t
            }();
        e.Sidebar = l
    }, 
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.change = "change", t.selectClick = "selectClick", t.cancelClick = "cancelClick", t.viewChange = "viewChange", t.colorChange = "colorChange"
            }(e.ColorpickerEvents || (e.ColorpickerEvents = {})),
            function(t) {
                t.palette = "palette", t.picker = "picker"
            }(e.ViewsTypes || (e.ViewsTypes = {}))
    }, 
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.beforeHide = "beforeHide", t.beforeShow = "beforeShow", t.afterHide = "afterHide", t.afterShow = "afterShow", t.click = "click"
            }(e.PopupEvents || (e.PopupEvents = {}))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(0),
            a = i(31),
            s = i(37),
            c = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n._map = {}, e.options = e.options.map(function(t) {
                        return n._map[t.id] = t, o({}, t)
                    }), n
                }
                return n(e, t), e.prototype.setValue = function(t, e) {
                    for (var i in t) {
                        var n = this._map[i];
                        this._setValue(n, t[i], !0)
                    }
                    e || this._evs.fire(a.PropertyEvents.change)
                }, e.prototype.getValue = function() {
                    for (var t = {}, e = this._config.options, i = 0; i < e.length; i++) {
                        var n = e[i];
                        t[n.id] = n.value
                    }
                    return t
                }, e.prototype.clear = function() {
                    for (var t = this._config.options, e = {}, i = 0; i < t.length; i++) e[t[i].id] = "";
                    this.setValue(e, !0)
                }, e.prototype.toVDOM = function() {
                    for (var t = this._config.options, e = t.length, i = [], n = [], o = 0; o < e; o++) {
                        var a = t[o];
                        n.push(r.el("input", {
                            type: "text",
                            name: a.id,
                            value: a.value,
                            index: o,
                            class: a.invalid ? "dhx_invalid" : "",
                            _ref: this._uid + o,
                            onchange: this._handlers.change,
                            oninput: this._handlers.change
                        })), i.push(r.el("span", a.label))
                    }
                    return r.el(".edit-section", [r.el(".inputs_group", [r.el("span", this._config.label)].concat(n)), r.el(".inputs_group_desc", i)])
                }, e.prototype._changed = function(t) {
                    var e = t.target.value,
                        i = t.target.getAttribute("index"),
                        n = this._config.options[i];
                    e !== n.value && (s.validate(e, n.validate) ? (t.target.setAttribute("class", ""), this._setValue(n, e)) : t.target.setAttribute("class", "dhx_invalid"))
                }, e.prototype._setValue = function(t, e, i) {
                    var n = t.value;
                    t.value = e, i || this._evs.fire(a.PropertyEvents.change, [t.id, e, n])
                }, e
            }(i(9).Text);
        e.Inputs = c
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(11),
            o = function() {
                function t(t) {
                    var e = this;
                    this._data = t, this.reset(), this._data.events.on(n.DataEvents.change, function() {
                        e._inProgress || e.push(e._data.serialize())
                    })
                }
                return t.prototype.push = function(t) {
                    this._position !== this._state.length - 1 && (this._state = this._state.slice(0, this._position + 1));
                    var e = this._state.length - 1,
                        i = new Date,
                        n = {
                            time: i,
                            state: t
                        };
                    i.valueOf() - this._state[e].time.valueOf() > 500 ? (this._state.push(n), this._position++) : this._state[e] = n
                }, t.prototype.reset = function() {
                    this._inProgress || (this._state = [{
                        time: new Date,
                        state: this._data.serialize()
                    }], this._position = 0)
                }, t.prototype.undo = function(t) {
                    this.isUndo() && (t ? (this._position = 0, this._state = this._state.slice(0, 1)) : this._position--, this._apply(this._state[this._position]))
                }, t.prototype.redo = function() {
                    this.isRedo() && (this._position++, this._apply(this._state[this._position]))
                }, t.prototype.isUndo = function() {
                    return this._position > 0
                }, t.prototype.isRedo = function() {
                    return this._position + 1 <= this._state.length - 1
                }, t.prototype._apply = function(t) {
                    this._inProgress = !0, this._data.parse(t.state), this._inProgress = !1
                }, t
            }();
        e.UndoManager = o
    }, , , , , , , function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(0);
        e.awaitRedraw = o.awaitRedraw;
        var r = i(34);
        e.Diagram = r.Diagram, i(90);
        var a = i(11);
        e.DataCollection = a.DataCollection;
        var s = i(91),
            c = i(35),
            l = i(17);
        e.DiagramShapes = l.shapes;
        var u = window;
        e.i18n = u.dhx && u.dhx.i18n ? u.dhx.i18 : {}, e.i18n.setLocale = function(t, i) {
            var n = e.i18n[t];
            for (var o in i) n[o] = i[o]
        }, e.i18n.diagram = e.i18n.diagram || c.default;
        var d = function() {
            return function(t, e) {
                var i;
                void 0 === e && (e = {}), i = "org" === e.type ? new s.DiagramEditor(t, e) : new s.FreeEditor(t, e), n.extend(this, i)
            }
        }();
        e.DiagramEditor = d
    }, function(t, e, i) {}, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(i(73)), n(i(144)), n(i(30));
        var o = i(19);
        e.getIcon = o.getIcon
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(93),
            r = i(36),
            a = i(0),
            s = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    if (n._root = n.config.parent || n, n._all = {}, n._parseConfig(), n.config.views && (n.config.activeView = n.config.activeView || n._cells[0].id, n._isViewLayout = !0), !i.parent) {
                        var o = a.create({
                            render: function() {
                                return n.toVDOM()
                            }
                        }, n);
                        n.mount(e, o)
                    }
                    return n
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    if (this._isViewLayout) {
                        var e = [this.getCell(this.config.activeView).toVDOM()];
                        return t.prototype.toVDOM.call(this, e)
                    }
                    var i = [];
                    return this._cells.forEach(function(t) {
                        var e = t.toVDOM();
                        Array.isArray(e) ? i = i.concat(e) : i.push(e)
                    }), t.prototype.toVDOM.call(this, i)
                }, e.prototype.removeCell = function(t) {
                    if (this.events.fire(r.LayoutEvents.beforeRemove, [t])) {
                        var e = this.config.parent || this;
                        if (e !== this) return e.removeCell(t);
                        var i = this.getCell(t);
                        if (i) {
                            var n = i.getParent();
                            delete this._all[t], n._cells = n._cells.filter(function(e) {
                                return e.id !== t
                            }), n.paint()
                        }
                        this.events.fire(r.LayoutEvents.afterRemove, [t])
                    }
                }, e.prototype.addCell = function(t, e) {
                    if (void 0 === e && (e = -1), this.events.fire(r.LayoutEvents.beforeAdd, [t.id])) {
                        var i = this._createCell(t);
                        e < 0 && (e = this._cells.length + e + 1), this._cells.splice(e, 0, i), this.paint(), this.events.fire(r.LayoutEvents.afterAdd, [t.id])
                    }
                }, e.prototype.getId = function(t) {
                    return t < 0 && (t = this._cells.length + t), this._cells[t] ? this._cells[t].id : void 0
                }, e.prototype.getRefs = function(t) {
                    return this._root.getRootView().refs[t]
                }, e.prototype.getCell = function(t) {
                    return this._root._all[t]
                }, e.prototype.cell = function(t) {
                    return this.getCell(t)
                }, e.prototype._getCss = function(e) {
                    var i = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows",
                        n = this.config.align ? " " + i + "--" + this.config.align : "";
                    if (e) return i + " dhx_layout-cell" + (this.config.align ? " dhx_layout-cell--" + this.config.align : "");
                    var o = this.config.parent ? t.prototype._getCss.call(this) : "dhx_widget dhx_layout",
                        r = this.config.parent ? "" : " dhx_layout-cell";
                    return o + (this.config.full ? r : " " + i) + n
                }, e.prototype._parseConfig = function() {
                    var t = this,
                        e = this.config,
                        i = e.rows || e.cols || e.views || [];
                    this._xLayout = !e.rows, this._cells = i.map(function(e) {
                        return t._createCell(e)
                    })
                }, e.prototype._createCell = function(t) {
                    var i;
                    return t.rows || t.cols || t.views ? (t.parent = this._root, i = new e(this, t)) : i = new o.Cell(this, t), this._root._all[i.id] = i, i
                }, e
            }(o.Cell);
        e.Layout = s
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(2),
            a = i(0),
            s = i(10),
            c = i(36),
            l = i(94),
            u = i(5),
            d = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, r.extend({
                            gravity: !0
                        }, i)) || this,
                        o = e;
                    return o && o.isVisible && (n._parent = o), n._parent && n._parent.events ? n.events = n._parent.events : n.events = new u.EventSystem(n), n.config.full = void 0 === n.config.full ? Boolean(n.config.header || n.config.collapsable) : n.config.full, n._initHandlers(), n.id = n.config.id || r.uid(), n
                }
                return n(e, t), e.prototype.paint = function() {
                    if (this.isVisible()) {
                        var t = this.getRootView();
                        t ? t.redraw() : this._parent.paint()
                    }
                }, e.prototype.isVisible = function() {
                    if (!this._parent) return !(!this._container || !this._container.tagName) || Boolean(this.getRootNode());
                    var t = this._parent.config.activeView;
                    return (!t || t === this.id) && (!this.config.hidden && (!this._parent || this._parent.isVisible()))
                }, e.prototype.hide = function() {
                    this.events.fire(c.LayoutEvents.beforeHide, [this.id]) && (this.config.hidden = !0, this._parent && this._parent.paint && this._parent.paint(), this.events.fire(c.LayoutEvents.afterHide, [this.id]))
                }, e.prototype.show = function() {
                    this.events.fire(c.LayoutEvents.beforeShow, [this.id]) && (this._parent && this._parent.config.activeView ? this._parent.config.activeView = this.id : this.config.hidden = !1, this._parent && !this._parent.isVisible() && this._parent.show(), this.paint(), this.events.fire(c.LayoutEvents.afterHide, [this.id]))
                }, e.prototype.getParent = function() {
                    return this._parent
                }, e.prototype.destructor = function() {
                    this.config = null, this.unmount()
                }, e.prototype.getWidget = function() {
                    return this._ui
                }, e.prototype.getCellView = function() {
                    return this._parent && this._parent.getRefs(this._uid)
                }, e.prototype.attach = function(t, e) {
                    return this.config.html = null, "object" == typeof t ? this._ui = t : "string" == typeof t ? this._ui = new window.dhx[t](null, e) : "function" == typeof t && (t.prototype instanceof s.View ? this._ui = new t(null, e) : this._ui = {
                        getRootView: function() {
                            return t(e)
                        }
                    }), this.paint(), this._ui
                }, e.prototype.attachHTML = function(t) {
                    this.config.html = t, this.paint()
                }, e.prototype.toVDOM = function(t) {
                    var e;
                    if (null === this.config && (this.config = {}), !this.config.hidden) {
                        var i, n = this._calculateStyle(),
                            s = r.isDefined(this.config.padding) ? {
                                padding: this.config.padding
                            } : {};
                        if (!this.config.html)
                            if (this._ui) {
                                var c = this._ui.getRootView();
                                c.render && (c = a.inject(c)), i = [c]
                            } else i = t || null;
                        var l = !this.config.resizable || this._isLastCell() || this.config.collapsed ? null : a.el(".dhx_layout-resizer." + (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), o({}, this._resizerHandlers, {
                                _ref: "resizer_" + this._uid
                            }), [a.el("span.dhx_layout-resizer__icon", {
                                class: "dxi " + (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal")
                            })]),
                            u = {};
                        if (this.config.on)
                            for (var d in this.config.on) u["on" + d] = this.config.on[d];
                        var h = a.el("div", o(((e = {
                            _key: this._uid,
                            style: this.config.full || this.config.html ? n : o({}, n, s),
                            _ref: this._uid
                        })["aria-labelledby"] = this.config.id ? "tab-content-" + this.config.id : null, e), u, {
                            class: this._getCss(!1) + (this.config.css ? " " + this.config.css : "") + (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") + (this.config.resizable ? " dhx_layout-cell--resizeble" : "") + (this.config.gravity ? " dhx_layout-cell--gravity" : "")
                        }), this.config.full ? [a.el("div", {
                            tabindex: this.config.collapsable ? "0" : "-1",
                            class: "dhx_layout-cell-header" + (this._isXDirection() ? " dhx_layout-cell-header--col" : " dhx_layout-cell-header--row") + (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") + (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") + (((this.getParent() || {}).config || {}).isAccordion ? " dhx_layout-cell-header--accordion" : ""),
                            onclick: this._handlers.collapse,
                            onkeydown: this._handlers.enterCollapse
                        }, [this.config.headerIcon && a.el("span.dhx_layout-cell-header__icon" + this.config.headerIcon), this.config.headerImage && a.el(".dhx_layout-cell-header__image-wrapper", [a.el("img", {
                            src: this.config.headerImage,
                            class: "dhx_layout-cell-header__image"
                        })]), this.config.header && a.el("h3.dhx_layout-cell-header__title", this.config.header), this.config.collapsable && a.el("div.dhx_layout-cell-header__collapse-icon", {
                            class: this._getCollapseIcon()
                        })]), this.config.collapsed ? null : a.el("div", {
                            style: s,
                            ".innerHTML": this.config.html,
                            class: this._getCss(!0) + " dhx_layout-cell-content"
                        }, i)] : this.config.html ? [a.el(".dhx_layout-cell-content", {
                            ".innerHTML": this.config.html,
                            style: s
                        })] : i);
                        return l ? [h, l] : h
                    }
                }, e.prototype._getCss = function(t) {
                    return "dhx_layout-cell"
                }, e.prototype._initHandlers = function() {
                    var t = this;
                    this._handlers = {
                        enterCollapse: function(e) {
                            13 === e.keyCode && t._handlers.collapse()
                        },
                        collapse: function() {
                            t.config.collapsable && t.events.fire(c.LayoutEvents.beforeCollapse, [t.id]) && (t.config.collapsed = !t.config.collapsed, t.paint(), t.events.fire(c.LayoutEvents.afterCollapse, [t.id]))
                        }
                    };
                    var e = {
                            left: null,
                            top: null,
                            isActive: !1,
                            range: null,
                            xLayout: null,
                            nextCell: null,
                            size: null,
                            resizerLength: null,
                            mode: null,
                            percentsum: null
                        },
                        i = function() {
                            e.isActive = !1, document.body.classList.remove("dhx_no-select--resize"), document.removeEventListener("mouseup", i), document.removeEventListener("mousemove", n), t.events.fire(c.LayoutEvents.afterResizeEnd, [t.id])
                        },
                        n = function(i) {
                            if (e.isActive && e.mode !== c.resizeMode.unknown) {
                                var n = e.xLayout ? i.x - e.range.min + window.pageXOffset : i.y - e.range.min + window.pageYOffset,
                                    o = e.xLayout ? "width" : "height";
                                switch (n < 0 ? n = e.resizerLength / 2 : n > e.size && (n = e.size - e.resizerLength), e.mode) {
                                    case c.resizeMode.pixels:
                                        t.config[o] = n - e.resizerLength / 2 + "px", e.nextCell.config[o] = e.size - n - e.resizerLength / 2 + "px";
                                        break;
                                    case c.resizeMode.mixedpx1:
                                        t.config[o] = n - e.resizerLength / 2 + "px";
                                        break;
                                    case c.resizeMode.mixedpx2:
                                        e.nextCell.config[o] = e.size - n - e.resizerLength / 2 + "px";
                                        break;
                                    case c.resizeMode.percents:
                                        t.config[o] = n / e.size * e.percentsum + "%", e.nextCell.config[o] = (e.size - n) / e.size * e.percentsum + "%";
                                        break;
                                    case c.resizeMode.mixedperc1:
                                        t.config[o] = n / e.size * e.percentsum + "%";
                                        break;
                                    case c.resizeMode.mixedperc2:
                                        e.nextCell.config[o] = (e.size - n) / e.size * e.percentsum + "%"
                                }
                                t.paint(), t.events.fire(c.LayoutEvents.resize, [t.id])
                            }
                        };
                    this._resizerHandlers = {
                        onmousedown: function(o) {
                            if (3 !== o.which && (e.isActive && i(), t.events.fire(c.LayoutEvents.beforeResizeStart, [t.id]))) {
                                document.body.classList.add("dhx_no-select--resize");
                                var r = t.getCellView(),
                                    a = t._getNextCell(),
                                    s = a.getCellView(),
                                    u = t._getResizerView(),
                                    d = r.el.getBoundingClientRect(),
                                    h = u.el.getBoundingClientRect(),
                                    p = s.el.getBoundingClientRect();
                                if (e.xLayout = t._isXDirection(), e.left = d.left + window.pageXOffset, e.top = d.top + window.pageYOffset, e.range = l.getBlockRange(d, p, e.xLayout), e.size = e.range.max - e.range.min, e.isActive = !0, e.nextCell = a, e.resizerLength = e.xLayout ? h.width : h.height, e.mode = l.getResizeMode(e.xLayout, t.config, a.config), e.mode === c.resizeMode.percents) {
                                    var g = e.xLayout ? "width" : "height";
                                    e.percentsum = parseFloat(t.config[g]) + parseFloat(a.config[g])
                                }
                                if (e.mode === c.resizeMode.mixedperc1) {
                                    g = e.xLayout ? "width" : "height";
                                    e.percentsum = 1 / (d[g] / (e.size - e.resizerLength)) * parseFloat(t.config[g])
                                }
                                if (e.mode === c.resizeMode.mixedperc2) {
                                    g = e.xLayout ? "width" : "height";
                                    e.percentsum = 1 / (p[g] / (e.size - e.resizerLength)) * parseFloat(a.config[g])
                                }
                                document.addEventListener("mouseup", i), document.addEventListener("mousemove", n)
                            }
                        },
                        ondragstart: function(t) {
                            return t.preventDefault()
                        }
                    }
                }, e.prototype._getCollapseIcon = function() {
                    return this._isXDirection() && this.config.collapsed ? "dxi dxi-chevron-right" : this._isXDirection() && !this.config.collapsed ? "dxi dxi-chevron-left" : !this._isXDirection() && this.config.collapsed ? "dxi dxi-chevron-up" : this._isXDirection() || this.config.collapsed ? void 0 : "dxi dxi-chevron-down"
                }, e.prototype._isLastCell = function() {
                    var t = this._parent;
                    return t && t._cells.indexOf(this) === t._cells.length - 1
                }, e.prototype._getNextCell = function() {
                    var t = this._parent,
                        e = t._cells.indexOf(this);
                    return t._cells[e + 1]
                }, e.prototype._getResizerView = function() {
                    return this._parent.getRefs("resizer_" + this._uid)
                }, e.prototype._isXDirection = function() {
                    return this._parent && this._parent._xLayout
                }, e.prototype._calculateStyle = function() {
                    var t = this.config;
                    if (t) {
                        var e = {};
                        return this._isXDirection() ? (void 0 === t.width || t.collapsed || (e.flexBasis = t.width, e.width = t.width), void 0 !== t.height && (e.height = t.height)) : (void 0 === t.height || t.collapsed || (e.height = t.height), void 0 !== t.width && (e.width = t.width)), e
                    }
                }, e
            }(s.View);
        e.Cell = d
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(36);
        e.getResizeMode = function(t, e, i) {
            var o = t ? "width" : "height",
                r = e[o] && -1 !== e[o].indexOf("%"),
                a = i[o] && -1 !== i[o].indexOf("%"),
                s = e[o] && -1 !== e[o].indexOf("px"),
                c = i[o] && -1 !== i[o].indexOf("px");
            return r && a ? n.resizeMode.percents : s && c ? n.resizeMode.pixels : s && !c ? n.resizeMode.mixedpx1 : c && !s ? n.resizeMode.mixedpx2 : r ? n.resizeMode.mixedperc1 : a ? n.resizeMode.mixedperc2 : n.resizeMode.unknown
        }, e.getBlockRange = function(t, e, i) {
            return void 0 === i && (i = !0), i ? {
                min: t.left + window.pageXOffset,
                max: e.right + window.pageXOffset
            } : {
                min: t.top + window.pageYOffset,
                max: e.bottom + window.pageYOffset
            }
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            for (var e = t.toLowerCase().match(/\w+/g), i = 0, n = "", o = 0; o < e.length; o++) {
                var r = e[o];
                "meta" === r ? i += 8 : "ctrl" === r ? i += 4 : "shift" === r ? i += 2 : "alt" === r ? i += 1 : n = r
            }
            return i + n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {
                var t = this;
                this._keysStorage = {}, document.addEventListener("keydown", function(e) {
                    var i = (e.metaKey ? 8 : 0) + (e.ctrlKey ? 4 : 0) + (e.shiftKey ? 2 : 0) + (e.altKey ? 1 : 0) + (e.key && e.key.toLowerCase()),
                        n = t._keysStorage[i];
                    n && (n.handler(e), e.preventDefault())
                })
            }
            return t.prototype.addHotKey = function(t, e, i) {
                var o = n(t);
                this._keysStorage[o] = {
                    handler: e,
                    scope: i
                }
            }, t.prototype.removeHotKey = function(t, e) {
                var i = this._keysStorage;
                t && delete i[o = n(t)];
                if (e)
                    for (var o in i) i[o].scope === e && delete i[o]
            }, t.prototype.exist = function(t) {
                var e = n(t);
                return !!this._keysStorage[e]
            }, t
        }();
        e.keyManager = new o
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5yb3RhdGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0icm90YXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTMuNTUsNS4wNSBMOSwwLjUgTDksMy41NyBDNS4wNiw0LjA2IDIsNy40MiAyLDExLjUgQzIsMTUuNTggNS4wNSwxOC45NCA5LDE5LjQzIEw5LDE3LjQxIEM2LjE2LDE2LjkzIDQsMTQuNDcgNCwxMS41IEM0LDguNTMgNi4xNiw2LjA3IDksNS41OSBMOSw5LjUgTDEzLjU1LDUuMDUgTDEzLjU1LDUuMDUgWiBNMTcuOTMsMTAuNSBDMTcuNzYsOS4xMSAxNy4yMSw3Ljc3IDE2LjMxLDYuNjEgTDE0Ljg5LDguMDMgQzE1LjQzLDguNzggMTUuNzcsOS42MyAxNS45MSwxMC41IEwxNy45MywxMC41IEwxNy45MywxMC41IFogTTExLDE3LjQgTDExLDE5LjQyIEMxMi4zOSwxOS4yNSAxMy43NCwxOC43MSAxNC45LDE3LjgxIEwxMy40NiwxNi4zNyBDMTIuNzEsMTYuOTEgMTEuODcsMTcuMjYgMTEsMTcuNCBMMTEsMTcuNCBaIE0xNC44OSwxNC45OCBMMTYuMzEsMTYuMzkgQzE3LjIxLDE1LjIzIDE3Ljc2LDEzLjg5IDE3LjkzLDEyLjUgTDE1LjkxLDEyLjUgQzE1Ljc3LDEzLjM3IDE1LjQzLDE0LjIyIDE0Ljg5LDE0Ljk4IEwxNC44OSwxNC45OCBaIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5lbGJvdzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJlbGJvdyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gZmlsbD0iI0I4QzZENiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuMDAwMDAwLCAtMTAuMDAwMDAwKSAiIHBvaW50cz0iMTMgNiAxMyAxMiAyIDEyIDIgMTggNCAxOCA0IDE0IDEzIDE0IDE1IDE0IDE1IDYgMTggNiAxNCAyIDEwIDYiPjwvcG9seWdvbj4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdHJhaWdodDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMTUuODgwMDA0OSAxNC40NTk5OTE1IDMuNDEwMDM0MTggMiAyIDMuNDEwMDAzNjYgMTQuNDY5OTcwNyAxNS44ODAwMDQ5IDEyLjM0OTk3NTYgMTggMTggMTggMTggMTIuMzM5OTk2MyI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9InN0cmFpZ2h0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjOTA5Q0FEIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjQjhDNkQ2IiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jdXJ2ZWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTUsMTMuOTk4MTYyIEMxNC45MDA0NTEsMTAuOTU1OTk3NSAxMy43MDMzNjAxLDguMjA1Njc2NDkgMTEuNDA4NzI3Myw1Ljc0NzE5ODk5IEM5LjExNDA5NDU1LDMuMjg4NzIxNDkgNS45Nzc4NTIxLDIuMDM5NjU1MTYgMiwyIEwyLDQgQzUuMjc2NDMyNjEsMy45OTgwODM2NyA3Ljg5MjgyNzQ4LDQuOTk3NjM3IDkuODQ5MTg0NjEsNi45OTg2NTk5OSBDMTEuODA1NTQxNyw4Ljk5OTY4Mjk5IDEyLjg1NTgxMzUsMTEuMzM1MjAyNSAxMywxNC4wMDUyMTg0IEwxMCwxNC4wMDUyMTg0IEwxNCwxOC4wMDAzODkgTDE4LDEzLjk5ODE2MiBMMTUsMTMuOTk4MTYyIFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJjdXJ2ZWQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8dXNlIGZpbGw9IiM5MDlDQUQiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNCOEM2RDYiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ib3R0b208L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tYm90dG9tIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTEsMTIgTDExLDEgTDksMSBMOSwxMiBMNiwxMiBMMTAsMTYgTDE0LDEyIEwxMSwxMiBaIE0yLDE3IEwyLDE5IEwxOCwxOSBMMTgsMTcgTDIsMTcgTDIsMTcgWiIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1jZW50ZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tY2VudGVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNNCwxNyBMMTYsMTcgTDE2LDE1IEw0LDE1IEw0LDE3IEw0LDE3IFogTTEsMTMgTDE5LDEzIEwxOSwxMSBMMSwxMSBMMSwxMyBMMSwxMyBaIE00LDkgTDE2LDkgTDE2LDcgTDQsNyBMNCw5IEw0LDkgWiBNMSwzIEwxLDUgTDE5LDUgTDE5LDMgTDEsMyBMMSwzIFoiIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1sZWZ0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImFsaWduLWxlZnQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMywxNSBMMSwxNSBMMSwxNyBMMTMsMTcgTDEzLDE1IEwxMywxNSBaIE0xMyw3IEwxLDcgTDEsOSBMMTMsOSBMMTMsNyBMMTMsNyBaIE0xLDEzIEwxOSwxMyBMMTksMTEgTDEsMTEgTDEsMTMgTDEsMTMgWiBNMSwzIEwxLDUgTDE5LDUgTDE5LDMgTDEsMyBMMSwzIFoiIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1yaWdodDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJhbGlnbi1yaWdodCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEsMTcgTDE5LDE3IEwxOSwxNSBMMSwxNSBMMSwxNyBMMSwxNyBaIE03LDEzIEwxOSwxMyBMMTksMTEgTDcsMTEgTDcsMTMgTDcsMTMgWiBNMSw5IEwxOSw5IEwxOSw3IEwxLDcgTDEsOSBMMSw5IFogTTcsNSBMMTksNSBMMTksMyBMNywzIEw3LDUgTDcsNSBaIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1taWRkbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tbWlkZGxlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNOSwxNiBMOSwxOSBMMTEsMTkgTDExLDE2IEwxNCwxNiBMMTAsMTIgTDYsMTYgTDksMTYgWiBNMTEsNCBMMTEsMSBMOSwxIEw5LDQgTDYsNCBMMTAsOCBMMTQsNCBMMTEsNCBaIE0yLDkgTDIsMTEgTDE4LDExIEwxOCw5IEwyLDkgTDIsOSBaIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi10b3A8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNOSw4IEw5LDE5IEwxMSwxOSBMMTEsOCBMMTQsOCBMMTAsNCBMNiw4IEw5LDggWiBNMiwxIEwyLDMgTDE4LDMgTDE4LDEgTDIsMSBMMiwxIFoiIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ob3Jpem9udGFsLWNlbnRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJhbGlnbi1ob3Jpem9udGFsLWNlbnRlciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTExLDE2IEwxMSwxOSBMOSwxOSBMOSwxNiBMNSwxNiBMNSwxMiBMOSwxMiBMOSw4IEwzLDggTDMsNyBMMyw0IEw5LDQgTDksMSBMMTEsMSBMMTEsNCBMMTcsNCBMMTcsOCBMMTEsOCBMMTEsMTIgTDE1LDEyIEwxNSwxMyBMMTUsMTYgTDExLDE2IFoiIGlkPSJob3Jpem9udGFsLWNlbnRlciIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ob3Jpem9udGFsLWxlZnQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24taG9yaXpvbnRhbC1sZWZ0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTUsMTIgTDUsMTIgTDUsMTYgTDE1LDE2IEwxNSwxMyBMMTUsMTIgWiBNNSw4IEwxOSw4IEwxOSw0IEw1LDQgTDUsNyBMNSw4IFogTTEsMTkgTDMsMTkgTDMsMSBMMSwxIEwxLDE5IFoiIGlkPSJob3Jpem9udGFsLWxlZnQiIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ob3Jpem9udGFsLXJpZ2h0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImFsaWduLWhvcml6b250YWwtcmlnaHQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xNSwxMiBMMTUsMTMgTDE1LDE2IEw1LDE2IEw1LDEyIEwxNSwxMiBaIE0xLDggTDEsNyBMMSw0IEwxNSw0IEwxNSw4IEwxLDggWiBNMTcsMTkgTDE3LDEgTDE5LDEgTDE5LDE5IEwxNywxOSBaIiBpZD0iaG9yaXpvbnRhbC1yaWdodCIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi12ZXJ0aWNhbC1ib3R0b208L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdmVydGljYWwtYm90dG9tIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTYsNSBMMTYsNy41IEwxNiwxNSBMMTIsMTUgTDEyLDUgTDE2LDUgWiBNNCwxNSBMNCwxMS41IEw0LDEgTDgsMSBMOCwxNSBMNCwxNSBaIE0xLDE5IEwxLDE3IEwxOSwxNyBMMTksMTkgTDEsMTkgWiIgaWQ9InZlcnRpY2FsLWJvdHRvbSIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi12ZXJ0aWNhbC10b3A8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdmVydGljYWwtdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTYsNSBMMTYsNy41IEwxNiwxNSBMMTIsMTUgTDEyLDUgTDE2LDUgWiBNNCwxOSBMNCwxNS41IEw0LDUgTDgsNSBMOCwxOSBMNCwxOSBaIE0xLDMgTDEsMSBMMTksMSBMMTksMyBMMSwzIFoiIGlkPSJ2ZXJ0aWNhbC10b3AiIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi12ZXJ0aWNhbC1taWRkbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdmVydGljYWwtbWlkZGxlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTYsOSBMMTksOSBMMTksMTEgTDE2LDExIEwxNiwxNSBMMTIsMTUgTDEyLDExIEw4LDExIEw4LDE3IEw0LDE3IEw0LDEzLjUgTDQsMTEgTDEsMTEgTDEsOSBMNCw5IEw0LDMgTDgsMyBMOCw5IEwxMiw5IEwxMiw1IEwxNiw1IEwxNiw3LjUgTDE2LDkgWiIgaWQ9InZlcnRpY2FsLW1pZGRsZSIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT50ZXh0LXNoYXBlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InRleHQtc2hhcGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0zLDcgTDMsMTAgTDksMTAgTDksMjMgTDEyLDIzIEwxMiwxMCBMMTgsMTAgTDE4LDcgTDQsNyBMMyw3IFogTTE2LDEyIEwxNiwxNSBMMjAsMTUgTDIwLDIzIEwyMywyMyBMMjMsMTUgTDI3LDE1IEwyNywxMiBMMTYsMTIgWiIgaWQ9IlRleHQiIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pbWFnZS1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJpbWFnZS1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTMsMSBMMjcsMSBDMjguMTA0NTY5NSwxIDI5LDEuODk1NDMwNSAyOSwzIEwyOSwyNyBDMjksMjguMTA0NTY5NSAyOC4xMDQ1Njk1LDI5IDI3LDI5IEwzLDI5IEMxLjg5NTQzMDUsMjkgMSwyOC4xMDQ1Njk1IDEsMjcgTDEsMyBDMSwxLjg5NTQzMDUgMS44OTU0MzA1LDEgMywxIFogTTQsMyBDMy40NDc3MTUyNSwzIDMsMy40NDc3MTUyNSAzLDQgTDMsMjYgQzMsMjYuNTUyMjg0NyAzLjQ0NzcxNTI1LDI3IDQsMjcgTDI2LDI3IEMyNi41NTIyODQ3LDI3IDI3LDI2LjU1MjI4NDcgMjcsMjYgTDI3LDQgQzI3LDMuNDQ3NzE1MjUgMjYuNTUyMjg0NywzIDI2LDMgTDQsMyBaIE0xMywyMSBMMTgsMTQgTDI1LjAwMDU1NTcsMjQgTDUuMDAwNTY5MywyNCBMOS41LDE2Ljk5NTI1MDUgTDEzLDIxIFoiIGlkPSJNYXNrIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5maWxsZWQtYXJyb3c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iZmlsbGVkLWFycm93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU29saWQtLS1TZWxlY3RlZC1Ob3ctU3R5bGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTAwMDAwLCAyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJMZWZ0LUFycm93IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjUwMDAwMCwgOC4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04LjUwMDAwMCwgLTguMDAwMDAwKSB0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy41LDEyLjUgTDcuNSwwLjUiIGlkPSJTaGFwZSIgc3Ryb2tlPSIjOTA5Q0FEIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iIzkwOUNBRCIgcG9pbnRzPSIwLjUgNi41IDcuNSAxNS41IDE0LjUgNi41Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5maWxsZWQtYXJyb3c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iZmlsbGVkLWFycm93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU29saWQtLS1TZWxlY3RlZC1Ob3ctU3R5bGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTAwMDAwLCAyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJMZWZ0LUFycm93IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjUwMDAwMCwgOC4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTguNTAwMDAwLCAtOC4wMDAwMDApIHRyYW5zbGF0ZSgxLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjUsMTIuNSBMNy41LDAuNSIgaWQ9IlNoYXBlIiBzdHJva2U9IiM5MDlDQUQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjOTA5Q0FEIiBwb2ludHM9IjAuNSA2LjUgNy41IDE1LjUgMTQuNSA2LjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDMwIDMwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMiAoNTExNjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5saW5lPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxwb2x5Z29uIGZpbGw9IiM5MDlDQUQiIHBvaW50cz0iNSAxMCA1IDggMjUgOCAyNSAxMCI+PC9wb2x5Z29uPg0KICAgIDwvZz4NCjwvc3ZnPg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kdXBsaWNhdGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iZHVwbGljYXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTAsNSBMMTgsNSBDMTkuMTA0NTY5NSw1IDIwLDUuODk1NDMwNSAyMCw3IEwyMCwxOCBDMjAsMTkuMTA0NTY5NSAxOS4xMDQ1Njk1LDIwIDE4LDIwIEwxMCwyMCBDOC44OTU0MzA1LDIwIDgsMTkuMTA0NTY5NSA4LDE4IEw4LDcgQzgsNS44OTU0MzA1IDguODk1NDMwNSw1IDEwLDUgWiBNMTAsNyBMMTgsNyBMMTgsMTggTDEwLDE4IEwxMCw3IFogTTIsMCBMMTAsMCBDMTEuMTA0NTY5NSwwIDEyLDAuODk1NDMwNSAxMiwyIEwxMiw0IEwxMCw0IEwxMCwyIEwyLDIgTDIsMTMgTDcsMTMgTDcsMTUgTDIsMTUgQzAuODk1NDMwNSwxNSAwLDE0LjEwNDU2OTUgMCwxMyBMMCwyIEMwLDAuODk1NDMwNSAwLjg5NTQzMDUsMCAyLDAgWiIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jb25uZWN0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbm5lY3QiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik01LjgyOTI5NDI5LDE1IEw5LDE1IEw5LDMgTDE0LDMgTDE0LDEgTDIwLDEgTDIwLDcgTDE0LDcgTDE0LDUgTDExLDUgTDExLDE1IEwxMSwxNyBMNS44MjkyOTQyOSwxNyBDNS40MTc0NTc4OCwxOC4xNjUxOTI0IDQuMzA2MjE4ODMsMTkgMywxOSBDMS4zNDMxNDU3NSwxOSAwLDE3LjY1Njg1NDIgMCwxNiBDMCwxNC4zNDMxNDU4IDEuMzQzMTQ1NzUsMTMgMywxMyBDNC4zMDYyMTg4MywxMyA1LjQxNzQ1Nzg4LDEzLjgzNDgwNzYgNS44MjkyOTQyOSwxNSBaIE0xNiw1IEwxOCw1IEwxOCwzIEwxNiwzIEwxNiw1IFogTTMsMTcgQzMuNTUyMjg0NzUsMTcgNCwxNi41NTIyODQ3IDQsMTYgQzQsMTUuNDQ3NzE1MyAzLjU1MjI4NDc1LDE1IDMsMTUgQzIuNDQ3NzE1MjUsMTUgMiwxNS40NDc3MTUzIDIsMTYgQzIsMTYuNTUyMjg0NyAyLjQ0NzcxNTI1LDE3IDMsMTcgWiIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGFuZ2Utc2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iY2hhbmdlLXNoYXBlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTUsMCBDMTcuNzYxNDIzNywwIDIwLDIuMjM4NTc2MjUgMjAsNSBDMjAsNy43NjE0MjM3NSAxNy43NjE0MjM3LDEwIDE1LDEwIEMxMi4yMzg1NzYzLDEwIDEwLDcuNzYxNDIzNzUgMTAsNSBDMTAsMi4yMzg1NzYyNSAxMi4yMzg1NzYzLDAgMTUsMCBaIE0wLDEwIEwxMCwxMCBMMTAsMjAgTDAsMjAgTDAsMTAgWiIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5wbHVzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InBsdXMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwb2x5Z29uIGZpbGw9IiM5MDlDQUQiIHBvaW50cz0iMTYgMTYgMTYgMjAgMTQgMjAgMTQgMTYgMTAgMTYgMTAgMTQgMTQgMTQgMTQgMTAgMTYgMTAgMTYgMTQgMjAgMTQgMjAgMTYiPjwvcG9seWdvbj4KICAgIDwvZz4KPC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5taW51czwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJtaW51cyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gZmlsbD0iIzkwOUNBRCIgcG9pbnRzPSIxMCAxNiAxMCAxNCAyMCAxNCAyMCAxNiI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpvc2I9Imh0dHA6Ly93d3cub3BlbnN3YXRjaGJvb2sub3JnL3VyaS8yMDA5L29zYiIKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIyMCIKICAgaGVpZ2h0PSIyMCIKICAgdmlld0JveD0iMCAwIDUuMjkxNjY2NSA1LjI5MTY2NjUiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9InJlbW92ZV9wb2ludC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDU1NiIKICAgICAgIG9zYjpwYWludD0ic29saWQiPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eToxOyIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDQ1NTQiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQzNzI1Ij4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3AzNzIxIiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eTowOyIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDM3MjMiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQzNzI1IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50MzcyNyIKICAgICAgIHgxPSIxMzIuODU4NjMiCiAgICAgICB5MT0iMTIwLjY3NDExIgogICAgICAgeDI9IjE3MC44NDUyNSIKICAgICAgIHkyPSIxODYuNjMwOTUiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjE1LjgzOTE5MiIKICAgICBpbmtzY2FwZTpjeD0iNi40NzA5Njg2IgogICAgIGlua3NjYXBlOmN5PSI5LjI3ODgxNjciCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICB1bml0cz0icHgiCiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkMzczMSIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yOTEuNzA4MzMpIj4KICAgIDxjaXJjbGUKICAgICAgIGlkPSJwYXRoMzcyOSIKICAgICAgIGN4PSIyLjYyODU3MjkiCiAgICAgICBjeT0iMjk0LjM3ODU3IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4xODUyMDgzMztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgcj0iMS45MDgwNTI4IiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMTQ4MTY2Nzk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDAuNzkzNzUsMjkyLjUwMjA4IDMuNzA0MTY2NywzLjcwNDE3IgogICAgICAgaWQ9InBhdGgzNzM3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjE0ODE2Njc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAwLjc5Mzc1LDI5Ni4yMDYyNSAzLjcwNDE2NjcsLTMuNzA0MTciCiAgICAgICBpZD0icGF0aDM3MzkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAwLDI5NC4zNTQxNiBIIDAuNzkzNzQ5OTkiCiAgICAgICBpZD0icGF0aDQ1NjIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA0LjQ5NzkxNjYsMjk0LjM1NDE2IGggMC43OTM3NSIKICAgICAgIGlkPSJwYXRoNDU2NCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPC9nPgo8L3N2Zz4K"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {
                var t = this;
                this._moveHandler = function(e) {
                    if (Math.abs(e.clientX - t._start.x) > 5 || Math.abs(e.clientY - t._start.y) > 5) {
                        var i = {
                            x: e.clientX - t._start.x,
                            y: e.clientY - t._start.y
                        };
                        t._handler.onMove(e, i, t._context), t._start.x += i.x, t._start.y += i.y
                    }
                }, this._upHandler = function(e) {
                    document.removeEventListener("mousemove", t._moveHandler), document.removeEventListener("mouseup", t._upHandler), document.body.classList.remove("dhx_noselect"), t._handler.onUp(e), t._handler = t._start = null
                }
            }
            return t.prototype.start = function(t, e, i) {
                this._handler = e, this._context = i, this._start = {
                    x: t.clientX,
                    y: t.clientY
                }, document.addEventListener("mousemove", this._moveHandler), document.addEventListener("mouseup", this._upHandler), document.body.classList.add("dhx_noselect")
            }, t
        }();
        e.drag = new n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(0),
            r = function() {
                function t(t, e) {
                    var i = this;
                    this.createConnector = function(t) {
                        var e = n.uid();
                        i._connector = {
                            id: e,
                            from: t.id,
                            fromSide: t.side
                        };
                        var o = i._nearShape.$shape.getPoint(t.dx, t.dy);
                        i._diagram.data.add({
                            id: e,
                            type: "line",
                            points: [{
                                x: o.x,
                                y: o.y
                            }, {
                                x: o.x,
                                y: o.y
                            }],
                            stroke: "#2196F3",
                            $move: !0
                        }), i._diagram.selection.add(e)
                    }, this._setNearPoint = function(t) {
                        i._nearPoint && t.side === i._nearPoint.side || (i._nearPoint = t, i._diagram.paint())
                    }, this._removeNearPoint = function() {
                        i._nearPoint && (i._nearPoint = null, i._diagram.paint())
                    }, this._controls = t, this._diagram = e
                }
                return t.prototype.getItemId = function() {
                    return this._nearShape ? this._nearShape.id : ""
                }, t.prototype.getPoints = function(t, e) {
                    var i = this;
                    if (this._nearShape && this._nearShape.$shape.canResize()) {
                        var n = this._diagram.config.scale,
                            r = "org" === this._diagram.config.type ? 10 : 8;
                        if (t && t.$shape.isConnector() && t.$move) {
                            var s = this._diagram.data.map(function(t) {
                                if (t.$shape.isConnector() || !t.$shape.canResize()) return null;
                                var s = t.$shape.getBox();
                                return o.el(".dhx_connect", {
                                    style: {
                                        width: t.width * n,
                                        height: t.height * n,
                                        position: "absolute",
                                        top: (s.top - e.top) * n,
                                        left: (s.left - e.left) * n,
                                        pointerEvents: "none",
                                        transform: "rotate(" + (t.angle || 0) + "deg)"
                                    }
                                }, i._getConnectionPoints(a(t, r), n))
                            });
                            return o.el("div", s)
                        }
                        var c = this._nearShape.$shape.getBox();
                        return o.el(".dhx_connect", {
                            style: {
                                width: this._nearShape.width * n,
                                height: this._nearShape.height * n,
                                position: "absolute",
                                top: (c.top - e.top) * n,
                                left: (c.left - e.left) * n,
                                pointerEvents: "none",
                                transform: "rotate(" + (this._nearShape.angle || 0) + "deg)"
                            }
                        }, this._getConnectionPoints(a(this._nearShape, r), n))
                    }
                }, t.prototype._getConnectionPoints = function(t, e) {
                    var i = this;
                    return t.map(function(t) {
                        return o.el(".dhx_connect_point", {
                            style: {
                                top: t.y * e - 15,
                                left: t.x * e - 15
                            },
                            _key: n.uid(),
                            class: (i._nearPoint && i._nearPoint.side) === t.side && t.id === i._nearPoint.id ? "dhx_nearest_point" : "",
                            _data: {
                                resizer: i._controls,
                                p: t
                            },
                            onmouseover: [i._setNearPoint, t],
                            onmouseleave: [i._removeNearPoint],
                            onmousedown: [i.createConnector, t]
                        }, [o.el(".dhx_connect_grip", {
                            _data: {
                                resizer: i._controls,
                                p: t
                            }
                        })])
                    })
                }, t.prototype.setNearShape = function(t) {
                    t !== this._nearShape && (this._nearShape = t, this._diagram.paint())
                }, t.prototype.toggleNearShape = function(t) {
                    this._nearShape = this._nearShape && this._nearShape.id === t.id ? null : t, this._diagram.paint()
                }, t.prototype.removeNearShape = function() {
                    this._nearShape = null, this._nearPoint = null
                }, t.prototype.moveConnector = function(t, e, i, n) {
                    var o, r, a = this._controls.getPoint(t.clientX, t.clientY);
                    if (this._connector) {
                        var s = this._diagram.data.getItem(this._connector.id);
                        s.points[s.points.length - 1] = {
                            x: a.x,
                            y: a.y
                        }, this._diagram.data.update(s.id, s), this._diagram.paint()
                    }
                    this._findNearShape(e, a, n);
                    var c = e.points.map(function(t, e) {
                        return e === n.i && (t.x = i.x + t.x, t.y = i.y + t.y, t.$custom = !0, n.side && (r = n.side)), t
                    });
                    this._nearPoint && r ? this._diagram.data.update(e.id, ((o = {
                        points: c,
                        $move: !0
                    })[r] = this._nearPoint.id, o[r + "Side"] = this._nearPoint.side, o)) : this._diagram.data.update(e.id, {
                        points: c,
                        $move: !0
                    })
                }, t.prototype.onUp = function() {
                    var t = this._diagram.selection.getItem();
                    if (delete t.$move, this._connector && this._nearShape) {
                        var e = this._connector.from,
                            i = this._nearShape.id;
                        e && i && e !== i && this._nearPoint ? this._diagram.data.update(t.id, {
                            from: this._connector.from,
                            to: this._nearShape.id,
                            fromSide: this._connector.fromSide,
                            toSide: this._nearPoint.side,
                            points: null
                        }) : (this._diagram.selection.add(this._connector.from), this._diagram.data.remove(t.id)), this._connector = null
                    }
                    this._nearShape = null, this._nearPoint = null
                }, t.prototype._findNearShape = function(t, e, i) {
                    var n = this,
                        o = "from" === i.side ? "to" : "from";
                    this._diagram.data.map(function(i) {
                        var r = i.x + i.width / 2,
                            a = i.y + i.height / 2;
                        Math.sqrt(Math.pow(e.x - r, 2) + Math.pow(e.y - a, 2)) < i.width && i.id !== t[o] && !i.$shape.isConnector() && (n._nearShape = i)
                    })
                }, t
            }();

        function a(t, e) {
            if (!t) return [];
            var i = t.$shape.getBox(),
                n = t.width,
                o = t.height,
                r = i.left - e / 2,
                a = i.top - e / 2;
            return [{
                x: 0 + n / 2,
                y: 0,
                dx: r + n / 2,
                dy: a,
                id: t.id,
                side: "top"
            }, {
                x: 0 + n,
                y: 0 + o / 2,
                dx: r + n,
                dy: a + o / 2,
                id: t.id,
                side: "right"
            }, {
                x: 0 + n / 2,
                y: 0 + o,
                dx: r + n / 2,
                dy: a + o,
                id: t.id,
                side: "bottom"
            }, {
                x: 0,
                y: 0 + o / 2,
                dx: r,
                dy: a + o / 2,
                id: t.id,
                side: "left"
            }]
        }
        e.Connect = r, e.getConnectPoints = a
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(19),
            a = i(65),
            s = function() {
                function t(t, e) {
                    this._controls = t, this._diagram = e
                }
                return t.prototype.getPoints = function(t, e) {
                    var i = this;
                    if (t) {
                        var n = t.$shape.getBox(),
                            a = this._diagram.config.scale,
                            s = "org" === this._diagram.config.type ? 10 : 8,
                            c = 0;
                        t.$shape.isConnector() && (c = 2);
                        var u = l(t, a).map(function(t) {
                            return o.el(".dhx_resize_grip", {
                                style: "\n\t\t\t\t\tcursor: " + t.cursor + ";\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: " + (t.y - c - s / 2) + "px;\n\t\t\t\t\tleft: " + (t.x - c - s / 2) + "px;\n\t\t\t\t\tpointer-events:auto;\n\t\t\t\t",
                                tabindex: -1,
                                class: t.$break ? "dhx_break_point" : "",
                                _data: {
                                    resizer: i._controls,
                                    p: t
                                }
                            })
                        });
                        return o.el(".dhx_resizer", {
                            style: {
                                width: t.width * a,
                                height: t.height * a,
                                position: "absolute",
                                top: (n.top - e.top) * a,
                                left: (n.left - e.left) * a,
                                pointerEvents: "none",
                                transform: "rotate(" + (t.angle || 0) + "deg)"
                            }
                        }, u.concat([!t.$shape.isConnector() && o.el("div", {
                            class: "dhx_diagram_item",
                            dhx_id: t.id,
                            style: {
                                width: t.width * a,
                                height: t.height * a,
                                top: 0,
                                left: 0,
                                background: "none",
                                border: "solid 1px blue",
                                position: "absolute",
                                zIndex: 0,
                                pointerEvents: "none"
                            }
                        }), !t.$shape.isConnector() && "org" !== this._diagram.config.type && o.el(".dhx_shape_rotate", {
                            style: {
                                width: 20,
                                height: 20,
                                position: "absolute",
                                top: t.height * a / 2 - 10,
                                left: t.width * a + 10,
                                zIndex: 1e4,
                                pointerEvents: "auto"
                            },
                            _data: {
                                resizer: this._controls,
                                p: {
                                    rotate: !0
                                }
                            }
                        }, [r.getIcon("rotate")])]))
                    }
                }, t
            }();

        function c(t, e) {
            var i = n({}, t.points[0]);
            i.x *= e, i.y *= e;
            var o = [];
            return t.points.map(function(r, s, c) {
                if ((r = n({}, r)).x *= e, r.y *= e, r.cursor = "pointer", r.i = s, 0 === s && (r.side = "from"), s === t.points.length - 1 && (r.side = "to"), "curved" !== t.connectType && c[s + 1]) {
                    var l = n({}, c[s + 1]);
                    if (l.x *= e, l.y *= e, a.getLength(r, l) > 20) {
                        var u = (r.x + l.x) / 2,
                            d = (r.y + l.y) / 2;
                        o.push({
                            x: u - i.x + 2,
                            y: d - i.y + 2,
                            dx: u / e,
                            dy: d / e,
                            $break: !0,
                            i: s + 1
                        })
                    }
                }
                return r.dx = r.x, r.dy = r.y, r.x = r.x - i.x + 2, r.y = r.y - i.y + 2, r
            }).concat(o)
        }

        function l(t, e) {
            if (t.$shape.isConnector()) return c(t, e);
            var i = t.width * e,
                n = t.height * e;
            return [{
                cursor: "nw-resize",
                x: 0,
                y: 0,
                dx: 1,
                dy: 1
            }, {
                cursor: "n-resize",
                x: 0 + i / 2,
                y: 0,
                dx: 0,
                dy: 1
            }, {
                cursor: "ne-resize",
                x: 0 + i,
                y: 0,
                dx: -1,
                dy: 1
            }, {
                cursor: "e-resize",
                x: 0 + i,
                y: 0 + n / 2,
                dx: -1,
                dy: 0
            }, {
                cursor: "se-resize",
                x: 0 + i,
                y: 0 + n,
                dx: -1,
                dy: -1
            }, {
                cursor: "s-resize",
                x: 0 + i / 2,
                y: 0 + n,
                dx: 0,
                dy: -1
            }, {
                cursor: "sw-resize",
                x: 0,
                y: 0 + n,
                dx: 1,
                dy: -1
            }, {
                cursor: "w-resize",
                x: 0,
                y: 0 + n / 2,
                dx: 1,
                dy: 0
            }]
        }
        e.Resize = s, e.getConnectorPoints = c, e.getRectPoints = l
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(127),
            r = i(31),
            a = i(0),
            s = i(5),
            c = i(10),
            l = i(11),
            u = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    n.events = new s.EventSystem, n.data = new l.DataCollection;
                    var o = a.create({
                        render: function(t, e) {
                            return e._toVDOM()
                        }
                    }, n);
                    return n.events.on(r.PropertyEvents.change, function() {
                        return n.paint()
                    }), n.events.on(r.PropertyEvents.afterFileUpload, function() {
                        return n.paint()
                    }), n.data.events.on(l.DataEvents.load, function() {
                        n._parseStruct()
                    }), n.mount(e, o), n
                }
                return n(e, t), e.prototype.clear = function() {
                    this.data.map(function(t) {
                        return t.$item.clear()
                    })
                }, e.prototype.getValues = function() {
                    return this.data.reduce(function(t, e) {
                        return t[e.id] = e.$item.getValue(), t
                    }, {})
                }, e.prototype.setValues = function(t) {
                    this.data.map(function(e) {
                        var i = t[e.id];
                        i ? (e.$item.clear(), e.$item.setValue(i, !0)) : e.$item.clear()
                    }), this.paint()
                }, e.prototype.isItemSelected = function(t) {
                    var e = this.data.getItem(t),
                        i = e ? e._uid : "";
                    return !!i && this.getRootView().refs[i].el === document.activeElement
                }, e.prototype.isItemsSelected = function() {
                    var t = this.getRootView().refs,
                        e = !1;
                    for (var i in t) t[i].el === document.activeElement && (e = !0);
                    return e
                }, e.prototype.selectItem = function(t) {
                    var e = this.data.getItem(t),
                        i = e && e.$item ? e.$item._uid : "",
                        n = this.getRootView().refs;
                    i && n && n[i].el.focus()
                }, e.prototype._parseStruct = function() {
                    var t = this;
                    this.data.map(function(e) {
                        e.$item = new o.items[e.type](e, t.events)
                    }), this.paint()
                }, e.prototype._toVDOM = function() {
                    var t = this.data.map(function(t) {
                        return t.$item.toVDOM()
                    });
                    return a.el(".dhx_property", [a.el(".sidebar-title", this.config.title)].concat(t))
                }, e
            }(c.View);
        e.Property = u
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(128),
            o = i(129),
            r = i(135),
            a = i(81),
            s = i(136),
            c = i(137),
            l = i(138),
            u = i(139),
            d = i(9),
            h = i(140),
            p = i(141),
            g = i(142);
        e.items = {
            text: d.Text,
            textarea: h.Textarea,
            group: r.Group,
            inputs: a.Inputs,
            color: o.ColorPicker,
            image: g.Uploader,
            inputsGroup: s.InputsGroup,
            stroke: u.Stroke,
            textProps: p.TextProps,
            alignBar: n.AlignBar,
            label: c.Label,
            select: l.Select
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(0),
            a = i(19),
            s = i(66),
            c = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n._handlers.iconClick = function(t, e) {
                        var i, r = e.target.getAttribute("dhx_id");
                        n.setValue(o({}, n._config.value, ((i = {})[t] = r, i)))
                    }, n
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    return r.el(".edit-section.align_bar", {
                        _key: this._uid
                    }, [s.getIconGroup(this._handlers.iconClick, "horizontal", [{
                        id: "left",
                        el: a.getIcon("align-horizontal-left"),
                        css: "align_icon_wrap"
                    }, {
                        id: "center",
                        el: a.getIcon("align-horizontal-center"),
                        css: "align_icon_wrap"
                    }, {
                        id: "right",
                        el: a.getIcon("align-horizontal-right"),
                        css: "align_icon_wrap"
                    }], this._config.value.horizontal), s.getIconGroup(this._handlers.iconClick, "vertical", [{
                        id: "top",
                        el: a.getIcon("align-vertical-top"),
                        css: "align_icon_wrap"
                    }, {
                        id: "middle",
                        el: a.getIcon("align-vertical-middle"),
                        css: "align_icon_wrap"
                    }, {
                        id: "bottom",
                        el: a.getIcon("align-vertical-bottom"),
                        css: "align_icon_wrap"
                    }], this._config.value.vertical)])
                }, e
            }(i(9).Text);
        e.AlignBar = c
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(67),
            r = i(0),
            a = i(9),
            s = i(70),
            c = function(t) {
                function e(e, i) {
                    var n = this;
                    return e.validation = e.validation || "color", (n = t.call(this, e, i) || this)._colorPicker = new o.Colorpicker(null), n._colorPicker.events.on(o.ColorpickerEvents.change, function(t) {
                        n._popup.hide(), n.setValue(t)
                    }), n._popup = new s.Popup, n._popup.attach(n._colorPicker), n._handlers.show = function(t) {
                        return n._showPopup(t.target)
                    }, n
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    return r.el(".edit-section.color-edit", {
                        _key: this._uid
                    }, [r.el(".section-title", this._config.label || ""), r.el(".color-edit", [r.el(".color_picker_wrap", {
                        onclick: this._handlers.show
                    }, [r.el("label.input_element", {
                        for: this._config.id
                    }, [r.el("input", {
                        type: "text",
                        name: this._config.id,
                        value: this._config.value,
                        disabled: !0
                    }), r.el(".input_icon_wrap", [r.el(".input_icon", {
                        style: {
                            backgroundColor: this._config.value
                        }
                    })])])])])])
                }, e.prototype._showPopup = function(t) {
                    this._colorPicker.setValue(this._config.value), this._popup.show(t)
                }, e
            }(a.Text);
        e.ColorPicker = c
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(5),
            a = i(1),
            s = i(10),
            c = i(2),
            l = i(68),
            u = i(131),
            d = i(69),
            h = i(79),
            p = i(33),
            g = i(32),
            f = i(132),
            v = i(133),
            _ = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    n._setPaletteGrip = function(t) {
                        var e = n.getRootView().refs.picker_palette.el.getBoundingClientRect(),
                            i = t.clientY - e.top,
                            o = t.clientX - e.left,
                            r = v.calculatePaletteGrip(e, i, o),
                            a = r.s,
                            s = r.v;
                        n._pickerState.hsv.s = a, n._pickerState.hsv.v = s, n.paint()
                    }, n._setRangeGrip = function(t) {
                        var e = n.getRootView().refs.hue_range.el.getBoundingClientRect(),
                            i = t.clientX - e.left,
                            o = v.calculateRangeGrip(e, i),
                            r = o.h,
                            a = o.rangeLeft;
                        n._pickerState.hsv.h = r, n._pickerState.rangeLeft = a, n.paint()
                    }, n._onColorClick = function(t, e) {
                        n._selected = e.data.color.toUpperCase(), n.events.fire(h.ColorpickerEvents.change, [n._selected]), n.events.fire(h.ColorpickerEvents.colorChange, [n._selected])
                    }, n._container = e, n.config = c.extend({
                        css: "",
                        paletteOnly: !1,
                        grayShades: !0,
                        pickerOnly: !1,
                        customColors: [],
                        palette: u.palette,
                        width: "238px"
                    }, n.config), n.config.palette || (n.config.palette = u.palette), n.config.customColors && (n.config.customColors = n.config.customColors.map(function(t) {
                        return t.toUpperCase()
                    })), n.events = new r.EventSystem(n), n._pickerState = {
                        hsv: {
                            h: 0,
                            s: 1,
                            v: 1
                        },
                        currentView: h.ViewsTypes.palette,
                        customHex: ""
                    }, n._setHandlers();
                    var a = o.create({
                        render: function() {
                            return n._getContent()
                        }
                    });
                    return n.mount(n._container, a), n
                }
                return n(e, t), e.prototype.destructor = function() {
                    this.unmount()
                }, e.prototype.focusValue = function(t) {
                    this._focusColor(t) && this.paint()
                }, e.prototype.setValue = function(t) {
                    this._focusColor(t) && (this.paint(), this.events.fire(h.ColorpickerEvents.change, [this._selected]), this.events.fire(h.ColorpickerEvents.colorChange, [this._selected]))
                }, e.prototype.getValue = function() {
                    return this._selected
                }, e.prototype.getCustomColors = function() {
                    return this.config.customColors
                }, e.prototype.setCustomColors = function(t) {
                    this.config.customColors = t.map(function(t) {
                        return t.toUpperCase()
                    }), this.paint()
                }, e.prototype.setCurrentMode = function(t) {
                    h.ViewsTypes[t] && (this._pickerState.currentView = t, this.events.fire(h.ColorpickerEvents.viewChange, [t]), this.paint())
                }, e.prototype.getCurrentMode = function() {
                    return this._pickerState.currentView
                }, e.prototype.getView = function() {
                    return this.getCurrentMode()
                }, e.prototype.setView = function(t) {
                    this.setCurrentMode(t)
                }, e.prototype._setHandlers = function() {
                    var t = this;
                    this._handlers = {
                        click: {
                            ".dhx_palette__cell": this._onColorClick
                        },
                        mousedown: function(e) {
                            var i = a.locate(e);
                            t._pickerState.customHex = "", "picker_palette" === i ? t._setPaletteGrip(e) : t._setRangeGrip(e);
                            var n = "picker_palette" === i ? t._setPaletteGrip : t._setRangeGrip;
                            document.addEventListener("mousemove", n), document.addEventListener("mouseup", function() {
                                document.removeEventListener("mousemove", n)
                            }), t.paint()
                        },
                        buttonsClick: function(e) {
                            t.setCurrentMode(h.ViewsTypes.palette), "cancel" !== e ? "apply" === e && -1 === t.config.customColors.indexOf(t._pickerState.background) && (t.setValue(t._pickerState.background), t.events.fire(h.ColorpickerEvents.selectClick, [])) : t.events.fire(h.ColorpickerEvents.cancelClick, [])
                        },
                        customColorClick: function() {
                            t.setView(h.ViewsTypes.picker)
                        },
                        oninput: function(e) {
                            t._inputTimeout && clearTimeout(t._inputTimeout), t._inputTimeout = setTimeout(function() {
                                var i = e.target.value; - 1 === i.indexOf("#") && (i = "#" + i), t._pickerState.customHex = i, l.isHex(i) && (t._pickerState.hsv = l.HexToHSV(i), t.paint())
                            }, 100)
                        },
                        contextmenu: {
                            ".dhx_palette__cell": function(e, i) {
                                e.preventDefault();
                                var n = t.config.customColors.indexOf(i.data.color); - 1 !== n && t._removeCustomColor(n), t.paint()
                            }
                        },
                        mouseover: {
                            ".dhx_palette__cell": function(t) {
                                t.target && p.tooltip(d.default.rightClickToDelete, {
                                    node: t.target,
                                    position: g.Position.bottom
                                })
                            },
                            ".dhx_colorpicker-custom-colors__picker": function(t) {
                                t.target && p.tooltip(d.default.addNewColor, {
                                    node: t.target,
                                    position: g.Position.bottom
                                })
                            }
                        }
                    }, this.events.on(h.ColorpickerEvents.change, function() {
                        t.paint()
                    }), this.events.on(h.ColorpickerEvents.colorChange, function() {
                        t.paint()
                    })
                }, e.prototype._focusColor = function(t) {
                    if (void 0 === t || t.length < 4) return !1;
                    var e = t.toUpperCase();
                    if (!l.isHex(e)) return !1;
                    var i = this.config.palette.reduce(function(t, i) {
                            return t || (i.forEach(function(i) {
                                i.toUpperCase() !== e || (t = !0)
                            }), t)
                        }, !1),
                        n = -1 !== u.grayShades.indexOf(e);
                    if (!i && !n) {
                        var o = this.getCustomColors(); - 1 === o.indexOf(e.toUpperCase()) && o.push(e.toUpperCase())
                    }
                    return this._selected = e || null, this._pickerState.hsv = l.HexToHSV(e), !0
                }, e.prototype._removeCustomColor = function(t) {
                    this.config.customColors.splice(t, 1)
                }, e.prototype._getCells = function(t, e) {
                    var i = this;
                    return void 0 === e && (e = ""), t.reduce(function(t, n) {
                        var r = (i._selected || "").toUpperCase() === n.toUpperCase() ? "dhx_palette__cell--selected" : "";
                        return t.push(o.el(".dhx_palette__cell", {
                            class: r + " " + e,
                            _data: {
                                color: n
                            },
                            style: "background:" + n
                        })), t
                    }, [])
                }, e.prototype._getGrayShades = function() {
                    return o.el(".dhx_palette__row", this._getCells(u.grayShades))
                }, e.prototype._getPalette = function() {
                    var t = this;
                    return this.config.palette.reduce(function(e, i) {
                        return e.push(o.el(".dhx_palette__col", t._getCells(i))), e
                    }, [])
                }, e.prototype._getContent = function() {
                    var t;
                    return t = this.config.pickerOnly ? [f.getPicker(this, this._pickerState, this._handlers)] : "palette" === this._pickerState.currentView ? [this.config.grayShades && this._getGrayShades()].concat(this._getPalette(), [!this.config.paletteOnly && o.el(".dhx_colorpicker-custom-colors", {
                        onmouseover: this._handlers.mouseover
                    }, [o.el(".dhx_colorpicker-custom-colors__header", [d.default.customColors]), o.el(".dhx_palette--custom.dhx_palette__row", this._getCells(this.config.customColors, "dhx_custom-color__cell").concat([o.el(".dhx_colorpicker-custom-colors__picker", {
                        class: "dxi dxi-plus",
                        onclick: this._handlers.customColorClick,
                        onmouseover: this._handlers.mouseover
                    })]))])]) : [f.getPicker(this, this._pickerState, this._handlers)], o.el(".dhx_widget.dhx_colorpicker", {
                        class: this.config.css,
                        style: {
                            width: this.config.width
                        }
                    }, [o.el(".dhx_palette", {
                        onclick: this._handlers.click,
                        oncontextmenu: this._handlers.contextmenu
                    }, t)])
                }, e
            }(s.View);
        e.Colorpicker = _
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.grayShades = ["#000000", "#4C4C4C", "#666666", "#808080", "#999999", "#B3B3B3", "#CCCCCC", "#E6E6E6", "#F2F2F2", "#FFFFFF"], e.palette = [
            ["#D4DAE4", "#B0B8CD", "#949DB1", "#727A8C", "#5E6677", "#3F4757", "#1D2534"],
            ["#FFCDD2", "#FE9998", "#F35C4E", "#E94633", "#D73C2D", "#CA3626", "#BB2B1A"],
            ["#F9E6AD", "#F4D679", "#EDB90F", "#EAA100", "#EA8F00", "#EA7E00", "#EA5D00"],
            ["#BCE4CE", "#90D2AF", "#33B579", "#36955F", "#247346", "#1D5B38", "#17492D"],
            ["#BDF0E9", "#92E7DC", "#02D7C5", "#11B3A5", "#018B80", "#026B60", "#024F43"],
            ["#B3E5FC", "#81D4FA", "#29B6F6", "#039BE5", "#0288D1", "#0277BD", "#01579B"],
            ["#AEC1FF", "#88A3F9", "#5874CD", "#2349AE", "#163FA2", "#083596", "#002381"],
            ["#C5C0DA", "#9F97C1", "#7E6BAD", "#584A8F", "#4F4083", "#473776", "#3A265F"],
            ["#D6BDCC", "#C492AC", "#A9537C", "#963A64", "#81355A", "#6E3051", "#4C2640"],
            ["#D2C5C1", "#B4A09A", "#826358", "#624339", "#5D4037", "#4E342E", "#3E2723"]
        ]
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(68),
            o = i(0),
            r = i(69);
        e.getPicker = function(t, e, i) {
            var a = n.HSVtoRGB(e.hsv);
            e.background = n.RGBToHex(a);
            var s = n.RGBToHex(n.HSVtoRGB({
                    h: e.hsv.h,
                    s: 1,
                    v: 1
                })),
                c = t.getRootView(),
                l = c.refs ? c.refs.picker_palette.el.getBoundingClientRect() : {
                    height: 200,
                    width: 218,
                    x: 0,
                    y: 0
                },
                u = l.height - 2,
                d = l.width - 2,
                h = u - e.hsv.v * u - 4,
                p = e.hsv.s * d - 4,
                g = l.width - 6,
                f = g - (360 - e.hsv.h) / 360 * g,
                v = e.customHex ? e.customHex.replace("#", "") : e.background.replace("#", "");
            return o.el(".dhx_colorpicker-picker", {}, [o.el(".dhx_colorpicker-picker__palette", {
                style: {
                    height: 132,
                    background: s
                },
                onmousedown: i.mousedown,
                dhx_id: "picker_palette",
                _ref: "picker_palette"
            }, [o.el(".dhx_palette_grip", {
                style: {
                    top: h,
                    left: p
                }
            })]), o.el(".dhx_colorpicker-hue-range", {
                style: {
                    height: 16
                },
                onmousedown: i.mousedown,
                dhx_id: "hue_range",
                _key: "hue_range",
                _ref: "hue_range"
            }, [o.el(".dhx_colorpicker-hue-range__grip", {
                style: {
                    left: f
                }
            })]), o.el(".dhx_colorpicker-value", [o.el(".dhx_colorpicker-value__color", {
                style: {
                    background: e.background
                }
            }), o.el(".dhx_colorpicker-value__input__wrapper", [o.el("input", {
                class: "dhx_colorpicker-value__input",
                value: v,
                oninput: i.oninput,
                maxlength: "7",
                _key: "hex_input"
            })])]), o.el(".dhx_colorpicker-picker__buttons", [!t.config.pickerOnly && o.el("button", {
                class: "dhx_button dhx_button--size_medium dhx_button--view_link dhx_button--color_primary",
                onclick: [i.buttonsClick, "cancel"]
            }, r.default.cancel), o.el("button", {
                class: "dhx_button dhx_button--size_medium dhx_button--view_flat dhx_button--color_primary",
                onclick: [i.buttonsClick, "apply"]
            }, r.default.select)])])
        }, e.calculatePaletteGrip = function(t, e, i) {
            var n = t.refs.picker_palette.el.getBoundingClientRect(),
                o = n.height,
                r = n.width;
            e = e < 0 ? 0 : e > o ? o : e, i = i < 0 ? 0 : i > r ? r : i;
            var a = Math.round(i / (r / 100)),
                s = 100 - Math.round(e / (o / 100));
            this._pickerState.hsv.s = a / 100, this._pickerState.hsv.v = s / 100
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculatePaletteGrip = function(t, e, i) {
            var n = t.height,
                o = t.width;
            return e = e < 0 ? 0 : e > n ? n : e, i = i < 0 ? 0 : i > o ? o : i, {
                s: Math.round(i / (o / 100)) / 100,
                v: (100 - Math.round(e / (n / 100))) / 100
            }
        }, e.calculateRangeGrip = function(t, e) {
            var i = t.width;
            return e = e < 0 ? 0 : e > i ? i : e, {
                h: Math.round(e / i * 360),
                rangeLeft: e
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(2),
            a = i(0),
            s = i(5),
            c = i(1),
            l = i(10),
            u = i(80),
            d = function(t) {
                function e(e) {
                    void 0 === e && (e = {});
                    var i = t.call(this, null, r.extend({}, e)) || this,
                        n = i._popup = document.createElement("div");
                    return n.className = "dhx_widget dhx_popup" + (i.config.css ? " " + i.config.css : ""), n.style.position = "absolute", i.mount(n, a.create({
                        render: function() {
                            return i.toVDOM()
                        }
                    })), i._clickEvent = function(t) {
                        return i.events.fire(u.PopupEvents.click, [t])
                    }, i.events = e.events || new s.EventSystem(i), i._isActive = !1, i
                }
                return n(e, t), e.prototype.show = function(t, e, i) {
                    var n = this;
                    void 0 === e && (e = {}), this.events.fire(u.PopupEvents.beforeShow, [t]) && (t = c.toNode(t), this._isActive ? this._setPopupSize(t, e) : (i && this.attach(i), this._popup.style.left = "0", this._popup.style.top = "0", document.body.appendChild(this._popup), this._setPopupSize(t, e), this._isActive = !0, a.awaitRedraw().then(function() {
                        n.events.fire(u.PopupEvents.afterShow, [t]), n._outerClickDestructor = n._detectOuterClick(t)
                    })))
                }, e.prototype.hide = function() {
                    this._hide(!1, null)
                }, e.prototype.isVisible = function() {
                    return this._isActive
                }, e.prototype.attach = function(t, e) {
                    return this._html = null, "object" == typeof t ? this._ui = t : "string" == typeof t ? this._ui = new window.dhx[t](null, e) : "function" == typeof t && (t.prototype instanceof l.View ? this._ui = new t(null, e) : this._ui = {
                        getRootView: function() {
                            return t(e)
                        }
                    }), this.paint(), this._ui
                }, e.prototype.attachHTML = function(t) {
                    this._html = t, this.paint()
                }, e.prototype.getWidget = function() {
                    return this._ui
                }, e.prototype.getContainer = function() {
                    return this.getRootView().refs.content.el
                }, e.prototype.toVDOM = function() {
                    var t;
                    return this._html ? t = a.el(".dhx_popup__inner-html-content", {
                        ".innerHTML": this._html
                    }) : (t = this._ui ? this._ui.getRootView() : null) && t.render && (t = a.inject(t)), a.el("div", {
                        class: "dhx_popup-content",
                        onclick: this._clickEvent,
                        _key: this._uid,
                        _ref: "content"
                    }, [t])
                }, e.prototype.destructor = function() {
                    this.hide(), this._outerClickDestructor && this._outerClickDestructor(), this._popup = null
                }, e.prototype._setPopupSize = function(t, e, i) {
                    var n = this;
                    void 0 === i && (i = 3);
                    var r = this._popup.getBoundingClientRect(),
                        a = r.width,
                        s = r.height;
                    if (this._timeout && (clearTimeout(this._timeout), this._timeout = null), !i || 0 !== a && 0 !== s) {
                        var l = c.fitPosition(t, o({
                                centering: !0,
                                mode: c.Position.bottom
                            }, e, {
                                width: a,
                                height: s
                            })),
                            u = l.left,
                            d = l.top;
                        if (this._popup.style.left = u, this._popup.style.top = d, e.indent && 0 !== e.indent) switch (e.mode) {
                            case c.Position.top:
                                this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) - parseInt(e.indent.toString(), null) + "px";
                                break;
                            case c.Position.bottom:
                                this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px";
                                break;
                            case c.Position.left:
                                this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) - parseInt(e.indent.toString(), null) + "px";
                                break;
                            case c.Position.right:
                                this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px";
                                break;
                            default:
                                this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px"
                        }
                    } else this._timeout = setTimeout(function() {
                        n._isActive && (n._setPopupSize(t, e, i - 1), n._timeout = null)
                    })
                }, e.prototype._detectOuterClick = function(t) {
                    var e = this,
                        i = function(n) {
                            for (var o = n.target; o;) {
                                if (o === t || o === e._popup) return;
                                o = o.parentNode
                            }
                            e._hide(!0, n) && document.removeEventListener("click", i)
                        };
                    return document.addEventListener("click", i),
                        function() {
                            return document.removeEventListener("click", i)
                        }
                }, e.prototype._hide = function(t, e) {
                    if (this._isActive) return !!this.events.fire(u.PopupEvents.beforeHide, [t, e]) && (document.body.removeChild(this._popup), this._isActive = !1, this._outerClickDestructor && (this._outerClickDestructor(), this._outerClickDestructor = null), this.events.fire(u.PopupEvents.afterHide, [e]), !0)
                }, e
            }(l.View);
        e.Popup = d
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = function() {
                function t(t, e) {
                    this._config = t
                }
                return t.prototype.toVDOM = function() {
                    return n.el(".dhx_group_item.side-bar", this._config.label || "")
                }, t
            }();
        e.Group = o
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    for (var t = this._config.options, e = t.length, i = [], n = 0; n < e; n++) {
                        var r = t[n];
                        i.push(o.el("label.input_element", {
                            for: r.id
                        }, [o.el("input", {
                            type: "text",
                            name: r.id,
                            value: r.value,
                            index: n,
                            class: r.invalid ? "dhx_invalid" : "",
                            _ref: this._uid + n,
                            onchange: this._handlers.change,
                            oninput: this._handlers.change
                        }), o.el(".input_icon_wrap", [r.icon ? r.icon() : o.el(".input_icon", r.label)])]))
                    }
                    return o.el(".edit-section.input_group_up", [o.el(".section-title", this._config.label), o.el(".inputs_group", i.slice())])
                }, e
            }(i(81).Inputs);
        e.InputsGroup = r
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    var t = this._config;
                    return o.el(".edit-section.text-edit", {
                        _key: this._uid
                    }, [o.el(".section-title", t.label)])
                }, e
            }(i(9).Text);
        e.Label = r
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(11),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    var t = this._getOptions(this._config.data);
                    return o.el(".edit-section.input_group_up", [o.el(".section-title", this._config.label), o.el("select.dhx_select", {
                        onchange: this._handlers.change,
                        oninput: this._handlers.change
                    }, t)])
                }, e.prototype._getOptions = function(t) {
                    var e = this;
                    if (t instanceof Array) {
                        var i = new r.DataCollection;
                        i.parse(t), t = i
                    }
                    return t.add({
                        value: "",
                        title: ""
                    }, 0), t.map(function(t) {
                        var i = t.value === e._config.value;
                        return o.el("option.dhx_option", {
                            value: t.value,
                            selected: i
                        }, t.title)
                    })
                }, e
            }(i(9).Text);
        e.Select = a
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(67),
            a = i(0),
            s = i(37),
            c = i(19),
            l = i(66),
            u = i(9),
            d = i(70),
            h = function(t) {
                function e(e, i) {
                    var n = this;
                    return e.validation = e.validation || "color", (n = t.call(this, e, i) || this)._colorPicker = new r.Colorpicker(null), n._popup = new d.Popup, n._popup.attach(n._colorPicker), n._colorPicker.events.on(r.ColorpickerEvents.change, function(t) {
                        n._popup.hide(), n.setValue(o({}, n._config.value, {
                            stroke: t
                        }))
                    }), n._handlers.show = function(t) {
                        return n._showPopup(t.target)
                    }, n._handlers.saveType = function(t, e) {
                        var i;
                        n.setValue(o({}, n._config.value, ((i = {})[t] = e, i)))
                    }, n._handlers.change = function(t) {
                        var e, i = t.target.getAttribute("name"),
                            r = t.target.value;
                        s.validate(r, "number") ? (t.target.setAttribute("class", ""), n.setValue(o({}, n._config.value, ((e = {})[i] = r, e)))) : t.target.setAttribute("class", "dhx_invalid")
                    }, n._handlers.iconClick = function(t, e) {
                        var i, r = e.target.getAttribute("dhx_id");
                        n.setValue(o({}, n._config.value, ((i = {})[t] = r, i)))
                    }, n
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    return a.el(".edit-section.line-edit", {
                        _key: this._uid
                    }, [a.el(".section-title", this._config.label || ""), a.el(".line-edit-content", [a.el(".input_element.alone_picker", {
                        onclick: this._handlers.show
                    }, [a.el(".input_icon_wrap", [a.el(".input_icon", {
                        style: {
                            backgroundColor: this._config.value.stroke
                        }
                    })])]), a.el(".dropup.input_element", l.getSelect(this._handlers.saveType, "strokeType", [{
                        id: "none",
                        text: "None",
                        disabled: this._config.connector
                    }, {
                        id: "line",
                        class: "dhx_select_line"
                    }, {
                        id: "dash",
                        class: "dhx_select_dash"
                    }], this._config.value.strokeType || "line")), "none" !== this._config.value.strokeType && a.el(".input_element.line_width", [a.el("input", {
                        type: "text",
                        onchange: this._handlers.change,
                        oninput: this._handlers.change,
                        value: this._config.value.strokeWidth,
                        name: "strokeWidth",
                        class: this._config.invalid ? "dhx_invalid" : ""
                    }), a.el(".title", "PX")])]), this._config.connector && a.el(".line-edit-content", [a.el(".input_element.arrow_select", l.getSelect(this._handlers.saveType, "backArrow", [{
                        id: "",
                        el: function() {
                            return c.getIcon("line")
                        }
                    }, {
                        id: "filled",
                        el: function() {
                            return c.getIcon("filled-arrow")
                        }
                    }], this._config.value.backArrow)), a.el(".input_element.arrow_select", l.getSelect(this._handlers.saveType, "forwardArrow", [{
                        id: "",
                        el: function() {
                            return c.getIcon("line")
                        }
                    }, {
                        id: "filled",
                        el: function() {
                            return c.getIcon("filled-arrow-rewerse")
                        }
                    }], this._config.value.forwardArrow)), l.getIconGroup(this._handlers.iconClick, "connectType", [{
                        id: "straight",
                        el: c.getIcon("straight"),
                        css: "dhx_line_icon"
                    }, {
                        id: "elbow",
                        el: c.getIcon("elbow"),
                        css: "dhx_line_icon"
                    }], this._config.value.connectType)]), this._config.value.connectType && "elbow" === this._config.value.connectType && a.el(".input_element", [a.el("input", {
                        type: "text",
                        name: "cornersRadius",
                        onchange: this._handlers.change,
                        oninput: this._handlers.change,
                        value: this._config.value.cornersRadius
                    }), a.el(".input_icon_wrap", [a.el(".input_icon", "r")])])])
                }, e.prototype._showPopup = function(t) {
                    this._colorPicker.setValue(this._config.value.stroke), this._popup.show(t)
                }, e
            }(u.Text);
        e.Stroke = h
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    var t = this._config,
                        e = t.placeholder || "";
                    return o.el(".edit-section.text-edit", {
                        _key: this._uid
                    }, [o.el(".section-title", t.label), o.el("textarea.dhx_textarea", {
                        placeholder: e,
                        value: t.value,
                        class: this._config.isValid ? "" : "dhx_invalid",
                        _ref: this._uid,
                        onchange: this._handlers.change,
                        oninput: this._handlers.change
                    })])
                }, e
            }(i(9).Text);
        e.Textarea = r
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(67),
            a = i(0),
            s = i(37),
            c = i(66),
            l = i(9),
            u = i(70),
            d = function(t) {
                function e(e, i) {
                    var n = this;
                    return e.validation = e.validation || "color", (n = t.call(this, e, i) || this)._colorPicker = new r.Colorpicker(null), n._popup = new u.Popup, n._popup.attach(n._colorPicker), n._colorPicker.events.on(r.ColorpickerEvents.change, function(t) {
                        n._popup.hide(), n.setValue(o({}, n._config.value, {
                            fontColor: t
                        }))
                    }), n._handlers.show = function(t) {
                        return n._showPopup(t.target)
                    }, n._handlers.change = function(t) {
                        var e = t.target.value;
                        s.validate(e, "number") ? (t.target.setAttribute("class", ""), n.setValue(o({}, n._config.value, {
                            lineHeight: e
                        }))) : t.target.setAttribute("class", "dhx_invalid")
                    }, n._handlers.onSelect = function(t, e) {
                        var i;
                        n.setValue(o({}, n._config.value, ((i = {})[t] = e, i)))
                    }, n._handlers.iconClick = function(t, e) {
                        var i, r = e.target.getAttribute("dhx_id");
                        n.setValue(o({}, n._config.value, ((i = {})[t] = r, i)))
                    }, n
                }
                return n(e, t), e.prototype.toVDOM = function() {
                    return a.el(".edit-section.line-edit", {
                        _key: this._uid
                    }, [a.el(".section-title", this._config.label || ""), a.el(".line-edit-content", [a.el(".dropup.input_element", c.getSelect(this._handlers.onSelect, "fontSize", [{
                        id: "14",
                        text: "14"
                    }, {
                        id: "16",
                        text: "16"
                    }, {
                        id: "18",
                        text: "18"
                    }, {
                        id: "20",
                        text: "20"
                    }], parseFloat(this._config.value.fontSize).toString() || "14")), a.el(".input_element.line_height", [a.el("input", {
                        type: "text",
                        onchange: this._handlers.change,
                        oninput: this._handlers.change,
                        value: this._config.value.lineHeight,
                        _key: "line_height"
                    }), a.el(".input_icon_wrap", [a.el(".dxi.dxi-format-line-spacing")])]), c.getIconGroup(this._handlers.iconClick, "fontWeight", [{
                        id: "bold",
                        css: "dxi dxi-format-bold"
                    }], this._config.value.fontWeight, !0), c.getIconGroup(this._handlers.iconClick, "fontStyle", [{
                        id: "italic",
                        css: "dxi dxi-format-italic"
                    }], this._config.value.fontStyle, !0)]), a.el(".line-edit-content", [a.el(".input_element.alone_picker", {
                        onclick: this._handlers.show
                    }, [a.el(".input_icon_wrap", [a.el(".input_icon", {
                        style: {
                            backgroundColor: this._config.value.fontColor
                        }
                    })])]), !1 !== this._config.alignments && c.getIconGroup(this._handlers.iconClick, "textAlign", [{
                        id: "left",
                        css: "dxi dxi-format-align-left"
                    }, {
                        id: "center",
                        css: "dxi dxi-format-align-center"
                    }, {
                        id: "right",
                        css: "dxi dxi-format-align-right"
                    }], this._config.value.textAlign), !1 !== this._config.alignments && c.getIconGroup(this._handlers.iconClick, "textVerticalAlign", [{
                        id: "top",
                        css: "dxi dxi-format-vertical-align-top"
                    }, {
                        id: "center",
                        css: "dxi dxi-format-vertical-align-center"
                    }, {
                        id: "bottom",
                        css: "dxi dxi-format-vertical-align-bottom"
                    }], this._config.value.textVerticalAlign)])])
                }, e.prototype._showPopup = function(t) {
                    this._colorPicker.setValue(this._config.value.fontColor), this._popup.show(t)
                }, e
            }(l.Text);
        e.TextProps = d
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(0),
                r = i(31),
                a = function(e) {
                    function i(t, i) {
                        var n = e.call(this, t, i) || this;
                        return n._handlers.upload = function(t) {
                            return n._onUpload(t)
                        }, n
                    }
                    return n(i, e), i.prototype.toVDOM = function() {
                        return o.el(".edit-section.color-edit", [o.el(".section-title", this._config.label), o.el(".dhx_img_uploader", [o.el("label", [o.el("input.dhx_uploader_input", {
                            type: "file",
                            name: "file",
                            id: "dhx_img_upload",
                            accept: ".jpg, .jpeg, .png",
                            style: "display:none",
                            onchange: this._handlers.upload
                        }), o.el(".dhx_uploader_preview", {
                            id: "dhx_img_preview",
                            class: this._loading ? "loading" : "",
                            style: 'background-image:url("' + this._config.value + '")',
                            _ref: this._uid
                        }, [o.el(".dhx_loading")]), o.el(".pop-up", this._config.hint || "Click to upload")])])])
                    }, i.prototype._getBase64 = function(e) {
                        return new t(function(t, i) {
                            e || i();
                            var n = new FileReader;
                            n.onloadend = function() {
                                t(n.result)
                            }, n.readAsDataURL(e)
                        })
                    }, i.prototype._onUpload = function(t) {
                        var e = this,
                            i = t.target.files[0];
                        this._loading = !0, this._evs.fire(r.PropertyEvents.beforeFileUpload), this._getBase64(i).then(function(t) {
                            e.setValue(t), e._evs.fire(r.PropertyEvents.afterFileUpload)
                        }).catch(function(t) {
                            return !0
                        }).then(function(t) {
                            return e._loading = !1
                        })
                    }, i
                }(i(9).Text);
            e.Uploader = a
        }).call(this, i(6))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0);
        e.baseSidebar = [
        //     {
        //     id: "color",
        //     type: "color",
        //     label: "Color",
        //     hint: "Top line",
        //     value: "#FFDDFF"
        // }, 
        // {
        //     id: "position",
        //     type: "inputsGroup",
        //     label: "Position",
        //     validate: "number",
        //     options: [{
        //         id: "dx",
        //         value: "1000",
        //         label: "dx",
        //         validate: "number"
        //     }, {
        //         id: "dy",
        //         value: "999",
        //         label: "dy",
        //         validate: "number"
        //     }]
        // }, 
        // {
        //     id: "size",
        //     type: "inputsGroup",
        //     label: "Size",
        //     options: [{
        //         id: "width",
        //         value: "1000",
        //         label: "w",
        //         validate: "number"
        //     }, {
        //         id: "height",
        //         value: "999",
        //         label: "h",
        //         validate: "number"
        //     }]
        // }
    ], e.freeSidebar = [{
            id: "arrange",
            type: "inputsGroup",
            label: "Arrange",
            validate: "number",
            options: [
                {
                id: "x",
                value: "1000",
                label: "x",
                validate: "number"
            }, 
            {
                id: "y",
                value: "999",
                label: "y",
                validate: "number"
            }, {
                id: "width",
                value: "1000",
                label: "w",
                validate: "number"
            }, {
                id: "height",
                value: "999",
                label: "h",
                validate: "number"
            }, {
                id: "angle",
                value: "999",
                label: "y",
                validate: "number",
                icon: function() {
                    return n.el(".dxi.dxi-rotate-right.rotate_icon")
                }
            }]
        }]
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(2),
            a = i(29),
            s = i(74),
            c = i(75),
            l = i(65),
            u = i(73),
            d = i(76),
            h = i(145),
            p = i(78),
            g = i(30),
            f = i(82),
            v = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.parse = function(t) {
                    this.diagram.data.parse(t.map(function(t) {
                        return t.from || t.to ? t : (t.fill = t.fill || "#EEF1F6", t.stroke = t.stroke || "#B8C6D6", t.extraLinesStroke = t.extraLinesStroke || "#B8C6D6", t)
                    }))
                }, e.prototype._initUI = function(t) {
                    var e = this,
                        i = this._layout = new s.Layout(t, {
                            height: "100%",
                            rows: [{
                                id: "top",
                                css: "dhx_topbar shadow-bottom"
                            }, {
                                css: "flex editor free_editor",
                                cols: [{
                                    id: "left",
                                    css: "shapesbar_cont"
                                }, {
                                    id: "center",
                                    css: "flex"
                                }, {
                                    id: "right",
                                    css: "sidebar free_sidebar"
                                }]
                            }],
                            css: "dhx_free_editor"
                        });
                    this.diagram = new a.Diagram(null, {
                        type: this.config.type || "",
                        select: !0,
                        toolbar: c.freeEditorButtons,
                        gridStep: this.config.gridStep,
                        margin: {
                            y: 70,
                            x: this.config.reservedWidth
                        },
                        lineGap: this.config.lineGap
                    }), this.diagram.config.$svg = function(t) {
                        var i = e.diagram.selection.getId(),
                            n = e.diagram.data.getItem(i);
                        return e._resizer.toSVG(n, t)
                    }, this.diagram.data.parse([{
                        id: "1",
                        type: "rectangle",
                        x: 0,
                        y: 0
                    }]), this.diagram.events.on(a.DataEvents.load, function() {
                        e.history.reset(), e.diagram.selection.add(e.diagram.data.getId(0)), e._checkEditMode()
                    }), this.diagram.events.on(a.DiagramEvents.emptyAreaClick, function(t) {
                        e.diagram.selection.getId() && (e.diagram.selection.remove(), e._sidebar.empty(), e.diagram.paint(), e._layout.paint()), e._findNearestConnector(t)
                    }), this._shapesBar = new h.ShapesBar(null, {
                        events: this.events,
                        diagram: this.diagram,
                        availableShapes: this.config.availableShapes
                    }), this._sidebar = new p.Sidebar(this.diagram), this._resizer = new l.Controls(this.events, this.diagram), this.history = new f.UndoManager(this.diagram.data), i.getCell("top").attach(d.topbar, this), i.getCell("right").attach(this._sidebar.getUI()), i.getCell("left").attach(this._shapesBar), i.getCell("center").attach(this.diagram), this._checkEditMode()
                }, e.prototype._showConnectPoints = function(t, e) {
                    var i = this.diagram.data.getItem(t);
                    e ? (i.$connectMode = !i.$connectMode, this._resizer.toggleNearShape(i)) : this._resizer.setNearShape(i)
                }, e.prototype._setHandlers = function() {
                    var t = this;
                    this.diagram.events.on(a.DiagramEvents.shapeIconClick, function(e) {
                        var i = t.diagram.selection.getId();
                        switch (e) {
                            case "copy":
                                t._copyShape(), t._pasteShape();
                                break;
                            case "remove":
                                t._removeShape(i);
                                break;
                            case "connect":
                                t._showConnectPoints(t.diagram.selection.getId(), !0);
                                break;
                            case "removePoint":
                                var n = t.diagram.selection.getItem();
                                n.points.splice(n.$selectedPoint, 1), n.$selectedPoint = null, t.diagram.paint()
                        }
                    }), this.events.on(g.DiagramEditorEvents.exportData, function() {
                        var e = JSON.stringify(t.diagram.data.serialize());
                        r.downloadFile(e, "data.json", "text/json")
                    }), this.diagram.events.on(a.DataEvents.change, function() {
                        return t._layout.paint()
                    }), this.diagram.events.on(a.DiagramEvents.shapeHover, function(e) {
                        var i = t.diagram.selection.getId(),
                            n = t.diagram.data.getItem(e);
                        e === i || n.$shape.isConnector() || t._showConnectPoints(e)
                    }), this.events.on(g.DiagramEditorEvents.zoomIn, function() {
                        t.diagram.config.scale = t.diagram.config.scale || 1, t.diagram.config.scale += .05, t.paint()
                    }), this.events.on(g.DiagramEditorEvents.zoomOut, function() {
                        t.diagram.config.scale = t.diagram.config.scale || 1, t.diagram.config.scale = t.diagram.config.scale <= .05 ? .05 : t.diagram.config.scale - .05, t.paint()
                    }), this.events.on(g.DiagramEditorEvents.visibility, function() {
                        t.config.editMode = !t.config.editMode, t._checkEditMode(), t._layout.paint()
                    }), this.events.on(g.DiagramEditorEvents.shapesUp, function(i) {
                        if (t._changeMode) {
                            var n = t.diagram.selection.getId();
                            return t.diagram.data.update(n, {
                                type: i.type
                            }), t.diagram.paint(), t._changeMode = !1, void t._layout.getCell("center").attach(t.diagram)
                        }
                        var o = t.diagram.getRootView().node.el.getBoundingClientRect();
                        if (i.x < o.left || i.x > o.right) t._addShape(i, 0, 0);
                        else {
                            var r = t._resizer.getPoint(i.x, i.y);
                            r.x = Math.round(r.x / e) * e, r.y = Math.round(r.y / e) * e, t._addShape(i, r.x, r.y)
                        }
                    }), this._keyManager.addHotKey("delete", function() {
                        t._removeShape()
                    }), this._keyManager.addHotKey("backspace", function() {
                        t._removeShape()
                    }), this._keyManager.addHotKey("ctrl+c", function() {
                        t._copyShape()
                    }), this._keyManager.addHotKey("ctrl+d", function() {
                        t._copyShape(), t._pasteShape()
                    }), this._keyManager.addHotKey("ctrl+v", function() {
                        t._sidebar.isItemsSelected() || t._pasteShape()
                    }), this._keyManager.addHotKey("ctrl+z", function() {
                        t._sidebar.isItemsSelected() || t.history.undo()
                    }), this._keyManager.addHotKey("ctrl+shift+z", function() {
                        t._sidebar.isItemsSelected() || t.history.redo()
                    }), this._keyManager.addHotKey("meta+c", function() {
                        t._copyShape()
                    }), this._keyManager.addHotKey("meta+d", function() {
                        t._copyShape(), t._pasteShape()
                    }), this._keyManager.addHotKey("meta+v", function() {
                        t._sidebar.isItemsSelected() || t._pasteShape()
                    }), this._keyManager.addHotKey("meta+z", function() {
                        t._sidebar.isItemsSelected() || t.history.undo()
                    }), this._keyManager.addHotKey("meta+shift+z", function() {
                        t._sidebar.isItemsSelected() || t.history.redo()
                    });
                    var e = 10;
                    this._keyManager.addHotKey("arrowleft", function() {
                        var i = t.diagram.selection.getItem();
                        i && t.diagram.data.update(i.id, {
                            x: i.x - e
                        })
                    }), this._keyManager.addHotKey("arrowright", function() {
                        var i = t.diagram.selection.getItem();
                        i && t.diagram.data.update(i.id, {
                            x: i.x + e
                        })
                    }), this._keyManager.addHotKey("arrowup", function() {
                        var i = t.diagram.selection.getItem();
                        i && t.diagram.data.update(i.id, {
                            y: i.y - e
                        })
                    }), this._keyManager.addHotKey("arrowdown", function() {
                        var i = t.diagram.selection.getItem();
                        i && t.diagram.data.update(i.id, {
                            y: i.y + e
                        })
                    })
                }, e.prototype._copyShape = function() {
                    this._copiedShape = this.diagram.selection.getItem()
                }, e.prototype._pasteShape = function() {
                    this._copiedShape && this.diagram.data.add(o({}, this._copiedShape, {
                        id: r.uid(),
                        x: this._copiedShape.x + this._copiedShape.width + 10
                    }))
                }, e.prototype._addShape = function(t, e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = 0), this.diagram.data.add({
                        id: r.uid(),
                        type: t.type,
                        text: t.text || "Text",
                        x: e,
                        y: i,
                        fill: "#EEF1F6",
                        stroke: "#B8C6D6",
                        extraLinesStroke: "#B8C6D6"
                    })
                }, e.prototype._findNearestConnector = function(t) {
                    var e = this,
                        i = this._resizer.getPoint(t.clientX, t.clientY);
                    this.diagram.data.map(function(t) {
                        if (t.$shape.isConnector())
                            for (var n = 0; n < t.points.length; n++) {
                                var o = t.points[n];
                                if (t.points[n + 1]) {
                                    var r = i,
                                        a = o,
                                        s = t.points[n + 1],
                                        c = a.y < r.y && s.y > r.y || s.y < r.y && a.y > r.y,
                                        l = a.x < r.x && s.x > r.x || s.x < r.x && a.x > r.x;
                                    if (c || l) {
                                        var u = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                                            d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                                            h = Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)),
                                            p = (u + d + h) / 2;
                                        if (2 * Math.sqrt(p * (p - u) * (p - d) * (p - h)) / h <= 10) {
                                            e.diagram.selection.add(t.id);
                                            break
                                        }
                                    }
                                }
                            }
                    })
                }, e
            }(u.DiagramEditor);
        e.FreeEditor = v
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(0),
            a = i(1),
            s = i(10),
            c = i(29),
            l = i(19),
            u = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    n._dropdowns = [], n._handleMove = function(t) {
                        if ((!(Math.abs(t.pageX - n._pressedShapeInfo.x + t.pageY - n._pressedShapeInfo.y) < 10) || n._shadow) && n._pressedShapeInfo) {
                            if (!n._shadow) {
                                n._shadow = r.create({
                                    render: function() {
                                        return n._getShadow()
                                    }
                                }, n), n._shadow.mount(document.body)
                            }
                            n._pressedShapeInfo.x = t.x, n._pressedShapeInfo.y = t.y, n._shadow.redraw()
                        }
                    }, n._handleUp = function() {
                        document.removeEventListener("mousemove", n._handleMove), document.removeEventListener("mouseup", n._handleUp), n.config.events.fire("shapesUp", [o({}, n._pressedShapeInfo)]), n._pressedShapeInfo = null, n._shadow && (n._shadow.unmount(), n._shadow = null)
                    }, n._toggle = function(t) {
                        n._dropdowns[t] = !n._dropdowns[t]
                    }, n._htmlEvents = {
                        onmousedown: a.eventHandler(function(t) {
                            return a.locate(t)
                        }, {
                            dhx_shape_thumb: function(t, e) {
                                1 === t.which && (n._pressedShapeInfo = {
                                    type: e,
                                    x: t.x,
                                    y: t.y
                                }, "text" === e && (n._pressedShapeInfo.text = "Text"), document.addEventListener("mousemove", n._handleMove), document.addEventListener("mouseup", n._handleUp))
                            }
                        })
                    };
                    var s = r.create({
                        render: function(t) {
                            return n._render(t)
                        }
                    }, n);
                    return n.mount(e, s), n
                }
                return n(e, t), e.prototype._getShadow = function() {
                    if (this._pressedShapeInfo) {
                        var t = this.config.diagram.config.scale,
                            e = this._pressedShapeInfo.type,
                            i = this._pressedShapeInfo.y,
                            n = this._pressedShapeInfo.x;
                        return "text" === e ? r.el(".dhx_shape_shadow", {
                            style: {
                                position: "fixed",
                                zIndex: 999999,
                                top: i,
                                left: n
                            }
                        }, [this._getTextShape()]) : r.el(".dhx_shape_shadow", {
                            style: {
                                position: "fixed",
                                zIndex: 999999,
                                top: i,
                                left: n
                            }
                        }, [r.sv("svg", {
                            width: 150 * t,
                            height: 100 * t,
                            viewbox: "0 0 10 10",
                            preserveAspectRatio: "none"
                        }, [new c.DiagramFlowShape({
                            type: e,
                            x: 0,
                            y: 0,
                            fill: "#EEF1F6",
                            stroke: "#B8C6D6"
                        }).toSVG()])])
                    }
                }, e.prototype._getWrappedShape = function(t, e, i, n) {
                    return r.el(".dhx_shape_thumb", {
                        dhx_id: t
                    }, [n || r.sv("svg", {
                        width: e + 7,
                        height: i + 7,
                        viewbox: "0 0 " + (e + 7) + " " + (i + 7),
                        xmlns: "http://www.w3.org/2000/svg"
                    }, [new c.DiagramFlowShape({
                        type: t,
                        width: e,
                        height: i,
                        x: 4.5,
                        y: 4.5
                    }).toSVG()]), r.el(".dhx_shape_name", t)])
                }, e.prototype._wrapDropdown = function(t, e, i) {
                    void 0 === i && (i = !0);
                    var n = t;
                    return this._dropdowns[t] = void 0 === this._dropdowns[t] ? i : this._dropdowns[t], r.el(".dhx_dropdown", [r.el("input", {
                        class: "dhx_dropdown_checkbox",
                        id: n,
                        name: n,
                        type: "checkbox",
                        checked: this._dropdowns[t],
                        onchange: [this._toggle, t]
                    }), r.el("label", {
                        class: "dhx_dropdown_label",
                        for: n
                    }, t), r.el(".dhx_dropdown_content", [e])])
                }, e.prototype._getTextShape = function() {
                    return l.getIcon("text-shape", "", 30, 30)
                }, e.prototype._render = function(t) {
                    var e = this,
                        i = (this.config.availableShapes || Object.keys(c.flowShapes)).map(function(t) {
                            return e._getWrappedShape(t, 50, 30)
                        });
                    return i.push(this._getWrappedShape("text", 50, 70, this._getTextShape())), r.el(".shapesbar_wrap", {
                        onclick: this._htmlEvents.onclick,
                        onmousedown: this._htmlEvents.onmousedown
                    }, [this._wrapDropdown("shapes", r.el(".shapesbar", i))])
                }, e
            }(s.View);
        e.ShapesBar = u
    }])
}), window.dhx_legacy) {
if (window.dhx)
    for (var key in dhx) dhx_legacy[key] = dhx[key];
window.dhx = dhx_legacy, delete window.dhx_legacy
}