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

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "/codebase/", n(n.s = 83)
    }([function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(45);
            e.el = r.defineElement, e.sv = r.defineSvgElement, e.view = r.defineView, e.create = r.createView, e.inject = r.injectView, e.KEYED_LIST = r.KEYED_LIST;
            var i = ["a", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "hatch", "hatchpath", "image", "line", "linearGradient", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "view"];

            function o(t) {
                var n = window.ResizeObserver,
                    r = function(e) {
                        var n = e.el.offsetHeight,
                            r = e.el.offsetWidth;
                        t(r, n)
                    };
                return n ? e.el("div.dhx-resize-observer", {
                    _hooks: {
                        didInsert: function(t) {
                            new n(function() {
                                return r(t)
                            }).observe(t.el)
                        }
                    }
                }) : e.el("iframe.dhx-resize-observer", {
                    _hooks: {
                        didInsert: function(t) {
                            t.el.contentWindow.onresize = function() {
                                return r(t)
                            }, r(t)
                        }
                    }
                })
            }
            e.disableHelp = function() {
                r.DEVMODE.mutations = !1, r.DEVMODE.warnings = !1, r.DEVMODE.verbose = !1, r.DEVMODE.UNKEYED_INPUT = !1
            }, e.resizer = o, e.xmlToJson = function t(e) {
                var n = {};
                if (1 === e.nodeType) {
                    if (e.attributes.length > 0) {
                        n["@attributes"] = {};
                        for (var r = 0; r < e.attributes.length; r++) {
                            var i = e.attributes.item(r);
                            n["@attributes"][i.nodeName] = i.nodeValue
                        }
                    }
                } else 3 === e.nodeType && (n = e.nodeValue);
                if (e.hasChildNodes())
                    for (var o = 0; o < e.childNodes.length; o++) {
                        var s = e.childNodes.item(o),
                            a = s.nodeName;
                        if (void 0 === n[a]) n[a] = t(s);
                        else {
                            if (void 0 === n[a].push) {
                                var c = n[a];
                                n[a] = [], n[a].push(c)
                            }
                            n[a].push(t(s))
                        }
                    }
                return n
            }, e.jsonToVDOM = function t(n) {
                var r, o, s = Object.keys(n)[0],
                    a = n[s],
                    c = a["#text"] ? [a["#text"]] : [];
                for (var u in a)
                    if (a.hasOwnProperty(u) && "@attributes" !== u && "#text" !== u)
                        if (Array.isArray(a[u]))
                            for (var l in a[u]) a[u].hasOwnProperty(l) && c.push(t(((r = {})[u] = a[u][l], r)));
                        else c.push(t(((o = {})[u] = a[u], o)));
                return -1 !== i.indexOf(s) ? e.sv(s, a["@attributes"] ? a["@attributes"] : {}, c) : e.el(s, a["@attributes"] ? a["@attributes"] : {}, c)
            }, e.resizeHandler = function(t, n) {
                return e.create({
                    render: function() {
                        return o(n)
                    }
                }).mount(t)
            }, e.awaitRedraw = function() {
                return new t(function(t) {
                    requestAnimationFrame(function() {
                        t()
                    })
                })
            }
        }).call(this, n(6))
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };

        function i(t, e, n) {
            for (void 0 === e && (e = "dhx_id"), void 0 === n && (n = "target"), t instanceof Event && (t = t[n]); t;) {
                if (t.getAttribute && t.getAttribute(e)) return t;
                t = t.parentNode
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(39), e.toNode = function(t) {
            return "string" == typeof t && (t = document.getElementById(t) || document.querySelector(t)), t || document.body
        }, e.eventHandler = function(t, e) {
            var n = Object.keys(e);
            return function(r) {
                for (var i = t(r), o = r.target; o;) {
                    var s = o.getAttribute && o.getAttribute("class") || "";
                    if (s.length)
                        for (var a = s.split(" "), c = 0; c < n.length; c++)
                            if (a.indexOf(n[c]) > -1) return e[n[c]](r, i);
                    o = o.parentNode
                }
                return !0
            }
        }, e.locate = function(t, e) {
            void 0 === e && (e = "dhx_id");
            var n = i(t, e);
            return n ? n.getAttribute(e) : ""
        }, e.locateNode = i, e.getBox = function(t) {
            var e = t.getBoundingClientRect(),
                n = document.body,
                r = window.pageYOffset || n.scrollTop,
                i = window.pageXOffset || n.scrollLeft;
            return {
                top: e.top + r,
                left: e.left + i,
                right: n.offsetWidth - e.right,
                bottom: n.offsetHeight - e.bottom,
                width: e.right - e.left,
                height: e.bottom - e.top
            }
        };
        var o, s = -1;

        function a(t) {
            var e = t.getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                right: e.right + window.pageXOffset,
                top: e.top + window.pageYOffset,
                bottom: e.bottom + window.pageYOffset
            }
        }

        function c(t, e) {
            var n = e.mode === o.bottom || e.mode === o.top ? l(t, e) : f(t, e),
                r = n.left,
                i = n.top;
            return {
                left: Math.round(r) + "px",
                top: Math.round(i) + "px",
                minWidth: Math.round(e.width) + "px",
                position: "absolute"
            }
        }

        function u() {
            return {
                rightBorder: window.pageXOffset + window.innerWidth,
                bottomBorder: window.pageYOffset + window.innerHeight
            }
        }

        function l(t, e) {
            var n, i, s = u(),
                a = s.rightBorder,
                c = s.bottomBorder - t.bottom - e.height,
                l = t.top - e.height;
            if (e.mode === o.bottom ? c >= 0 ? i = t.bottom : l >= 0 && (i = l) : l >= 0 ? i = l : c >= 0 && (i = t.bottom), c < 0 && l < 0) {
                if (e.auto) return f(t, r({}, e, {
                    mode: o.right,
                    auto: !1
                }));
                i = c > l ? t.bottom : l
            }
            if (e.centering) n = function(t, e, n) {
                var r = (e - (t.right - t.left)) / 2,
                    i = t.left - r,
                    o = t.right + r;
                return i >= 0 && o <= n ? i : i < 0 ? 0 : n - e
            }(t, e.width, a);
            else {
                var d = a - t.left - e.width,
                    h = t.right - e.width;
                n = d >= 0 ? t.left : h >= 0 ? h : h > d ? t.left : h
            }
            return {
                left: n,
                top: i
            }
        }

        function f(t, e) {
            var n, i, s = u(),
                a = s.rightBorder,
                c = s.bottomBorder,
                f = a - t.right - e.width,
                d = t.left - e.width;
            if (e.mode === o.right ? f >= 0 ? n = t.right : d >= 0 && (n = d) : d >= 0 ? n = d : f >= 0 && (n = t.right), d < 0 && f < 0) {
                if (e.auto) return l(t, r({}, e, {
                    mode: o.bottom,
                    auto: !1
                }));
                n = d > f ? d : t.right
            }
            if (e.centering) i = function(t, e, n) {
                var r = (e - (t.bottom - t.top)) / 2,
                    i = t.top - r,
                    o = t.bottom + r;
                return i >= 0 && o <= n ? i : i < 0 ? 0 : n - e
            }(t, e.height, a);
            else {
                var h = t.bottom - e.height,
                    p = c - t.top - e.height;
                i = p >= 0 ? t.top : h > 0 ? h : h > p ? h : t.top
            }
            return {
                left: n,
                top: i
            }
        }
        e.getScrollbarWidth = function() {
                if (s > -1) return s;
                var t = document.createElement("div");
                return document.body.appendChild(t), t.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;", s = t.offsetWidth - t.clientWidth, document.body.removeChild(t), s
            }, e.fitPosition = function(t, e) {
                return c(a(t), e)
            }, e.isIE = function() {
                var t = window.navigator.userAgent;
                return t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1
            }, e.getRealPosition = a,
            function(t) {
                t.left = "left", t.right = "right", t.bottom = "bottom", t.top = "top"
            }(o = e.Position || (e.Position = {})), e.calculatePosition = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(1),
            i = (new Date).valueOf();
        e.uid = function() {
            return "u" + i++
        }, e.extend = function t(e, n, r) {
            if (void 0 === r && (r = !0), n)
                for (var i in n) {
                    var o = n[i],
                        s = e[i];
                    !r || "object" != typeof s || s instanceof Date || s instanceof Array ? e[i] = o : t(s, o)
                }
            return e
        }, e.copy = function(t, e) {
            var n = {};
            for (var r in t) e && "$" === r[0] || (n[r] = t[r]);
            return n
        }, e.naturalSort = function(t) {
            return t.sort(function(t, e) {
                return "string" == typeof t ? t.localeCompare(e) : t - e
            })
        }, e.findIndex = function(t, e) {
            for (var n = t.length, r = 0; r < n; r++)
                if (e(t[r])) return r;
            return -1
        }, e.isEqualString = function(t, e) {
            if (t.length > e.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (t[n].toLowerCase() !== e[n].toLowerCase()) return !1;
            return !0
        }, e.singleOuterClick = function(t) {
            var e = function(n) {
                t(n) && document.removeEventListener("click", e)
            };
            document.addEventListener("click", e)
        }, e.detectWidgetClick = function(t, e) {
            var n = function(n) {
                return e(r.locate(n, "dhx_widget_id") === t)
            };
            return document.addEventListener("click", n),
                function() {
                    return document.removeEventListener("click", n)
                }
        }, e.unwrapBox = function(t) {
            return Array.isArray(t) ? t[0] : t
        }, e.wrapBox = function(t) {
            return Array.isArray(t) ? t : [t]
        }, e.isDefined = function(t) {
            return null !== t && void 0 !== t
        }, e.range = function(t, e) {
            if (t > e) return [];
            for (var n = []; t <= e;) n.push(t++);
            return n
        }, e.isNumeric = function(t) {
            return !isNaN(t - parseFloat(t))
        }, e.downloadFile = function(t, e, n) {
            void 0 === n && (n = "text/plain");
            var r = new Blob([t], {
                type: n
            });
            if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(r, e);
            else {
                var i = document.createElement("a"),
                    o = URL.createObjectURL(r);
                i.href = o, i.download = e, document.body.appendChild(i), i.click(), setTimeout(function() {
                    document.body.removeChild(i), window.URL.revokeObjectURL(o)
                }, 0)
            }
        }
    }, function(t, e, n) {
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
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(12),
            i = n(26);
        e.isEqualObj = function(t, e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        }, e.naturalCompare = function(t, e) {
            if (isNaN(t) || isNaN(e)) {
                var n = [],
                    r = [];
                for (t.replace(/(\d+)|(\D+)/g, function(t, e, r) {
                        n.push([e || 1 / 0, r || ""])
                    }), e.replace(/(\d+)|(\D+)/g, function(t, e, n) {
                        r.push([e || 1 / 0, n || ""])
                    }); n.length && r.length;) {
                    var i = n.shift(),
                        o = r.shift(),
                        s = i[0] - o[0] || i[1].localeCompare(o[1]);
                    if (s) return s
                }
                return n.length - r.length
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
            return "string" === e ? new r.DataProxy(t) : "object" === e ? t : void 0
        }, e.toDataDriver = function(t) {
            if ("string" == typeof t) {
                var e = window.dhx,
                    n = e && e.dataDrivers || i.dataDrivers;
                if (n[t]) return new n[t];
                console.warn("Incorrect data driver type:", t), console.warn("Available types:", JSON.stringify(Object.keys(n)))
            } else if ("object" == typeof t) return t
        }, e.copyWithoutInner = function(t, e) {
            var n = {};
            for (var r in t) "$" === r[0] || e && e[r] || (n[r] = t[r]);
            return n
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
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t) {
                this.events = {}, this.context = t || this
            }
            return t.prototype.on = function(t, e, n) {
                var r = t.toLowerCase();
                this.events[r] = this.events[r] || [], this.events[r].push({
                    callback: e,
                    context: n || this.context
                })
            }, t.prototype.detach = function(t, e) {
                var n = t.toLowerCase(),
                    r = this.events[n];
                if (e && r && r.length)
                    for (var i = r.length - 1; i >= 0; i--) r[i].context === e && r.splice(i, 1);
                else this.events[n] = []
            }, t.prototype.fire = function(t, e) {
                void 0 === e && (e = []);
                var n = t.toLowerCase();
                return !this.events[n] || this.events[n].map(function(t) {
                    return t.callback.apply(t.context, e)
                }).indexOf(!1) < 0
            }, t.prototype.clear = function() {
                this.events = {}
            }, t
        }();
        e.EventSystem = r, e.EventsMixin = function(t) {
            var e = new r(t = t || {});
            t.detachEvent = e.detach.bind(e), t.attachEvent = e.on.bind(e), t.callEvent = e.fire.bind(e)
        }
    }, function(t, e, n) {
        (function(e, n) {
            ! function() {
                var r = 1,
                    i = {},
                    o = !1;

                function s(t) {
                    e.setImmediate ? n(t) : e.importScripts ? setTimeout(t) : (i[++r] = t, e.postMessage(r, "*"))
                }

                function a(t) {
                    "use strict";
                    if ("function" != typeof t && void 0 != t) throw TypeError();
                    if ("object" != typeof this || this && this.then) throw TypeError();
                    var e, n, r = this,
                        i = 0,
                        o = 0,
                        c = [];
                    r.promise = r, r.resolve = function(t) {
                        return e = r.fn, n = r.er, i || (o = t, i = 1, s(f)), r
                    }, r.reject = function(t) {
                        return e = r.fn, n = r.er, i || (o = t, i = 2, s(f)), r
                    }, r._d = 1, r.then = function(t, e) {
                        if (1 != this._d) throw TypeError();
                        var n = new a;
                        return n.fn = t, n.er = e, 3 == i ? n.resolve(o) : 4 == i ? n.reject(o) : c.push(n), n
                    }, r.catch = function(t) {
                        return r.then(null, t)
                    };
                    var u = function(t) {
                        i = t || 4, c.map(function(t) {
                            3 == i && t.resolve(o) || t.reject(o)
                        })
                    };
                    try {
                        "function" == typeof t && t(r.resolve, r.reject)
                    } catch (t) {
                        r.reject(t)
                    }
                    return r;

                    function l(t, e, n, r) {
                        if (2 == i) return r();
                        if ("object" != typeof o && "function" != typeof o || "function" != typeof t) r();
                        else try {
                            var s = 0;
                            t.call(o, function(t) {
                                s++ || (o = t, e())
                            }, function(t) {
                                s++ || (o = t, n())
                            })
                        } catch (t) {
                            o = t, n()
                        }
                    }

                    function f() {
                        var t;
                        try {
                            t = o && o.then
                        } catch (t) {
                            return o = t, i = 2, f()
                        }
                        l(t, function() {
                            i = 1, f()
                        }, function() {
                            i = 2, f()
                        }, function() {
                            try {
                                1 == i && "function" == typeof e ? o = e(o) : 2 == i && "function" == typeof n && (o = n(o), i = 1)
                            } catch (t) {
                                return o = t, u()
                            }
                            o == r ? (o = TypeError(), u()) : l(t, function() {
                                u(3)
                            }, u, function() {
                                u(1 == i && 3)
                            })
                        })
                    }
                }(e = this).setImmediate || e.addEventListener("message", function(t) {
                    if (t.source == e)
                        if (o) s(i[t.data]);
                        else {
                            o = !0;
                            try {
                                i[t.data]()
                            } catch (t) {}
                            delete i[t.data], o = !1
                        }
                }), a.resolve = function(t) {
                    if (1 != this._d) throw TypeError();
                    return t instanceof a ? t : new a(function(e) {
                        e(t)
                    })
                }, a.reject = function(t) {
                    if (1 != this._d) throw TypeError();
                    return new a(function(e, n) {
                        n(t)
                    })
                }, a.all = function(t) {
                    if (1 != this._d) throw TypeError();
                    if (!(t instanceof Array)) return a.reject(TypeError());
                    var e = new a;
                    return function n(r, i) {
                        return i ? e.resolve(i) : r ? e.reject(r) : (0 == t.reduce(function(t, e) {
                            return e && e.then ? t + 1 : t
                        }, 0) && e.resolve(t), void t.map(function(e, r) {
                            e && e.then && e.then(function(e) {
                                return t[r] = e, n(), e
                            }, n)
                        }))
                    }(), e
                }, a.race = function(t) {
                    if (1 != this._d) throw TypeError();
                    if (!(t instanceof Array)) return a.reject(TypeError());
                    if (0 == t.length) return new a;
                    var e = new a;
                    return function n(r, i) {
                        return i ? e.resolve(i) : r ? e.reject(r) : (0 == t.reduce(function(t, e) {
                            return e && e.then ? t + 1 : t
                        }, 0) && e.resolve(t), void t.map(function(t, e) {
                            t && t.then && t.then(function(t) {
                                n(null, t)
                            }, n)
                        }))
                    }(), e
                }, a._d = 1, t.exports = a
            }()
        }).call(this, n(16), n(41).setImmediate)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
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
                    n = e + t.width,
                    r = t.y + (t.dy || 0);
                return {
                    left: e,
                    right: n,
                    top: r,
                    bottom: r + t.height
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
                var n = this.config;
                if (n.angle) {
                    var r = n.x + n.width / 2,
                        i = n.y + n.height / 2,
                        o = n.angle * (Math.PI / 180);
                    return {
                        x: (t - r) * Math.cos(o) - (e - i) * Math.sin(o) + r,
                        y: (t - r) * Math.sin(o) + (e - i) * Math.cos(o) + i
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
                    n = t.y;
                return t.dx && (e = t.x + t.dx), t.dy && (n = t.y + t.dy), {
                    x: e,
                    y: n
                }
            }, t
        }();
        e.BaseShape = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(23);
        e.SelectionEvents = r.SelectionEvents;
        var i = n(11);
        e.DataEvents = i.DataEvents,
            function(t) {
                t.scroll = "scroll", t.beforeCollapse = "beforecollapse", t.afterCollapse = "aftercollapse", t.beforeExpand = "beforeexpand", t.afterExpand = "afterexpand", t.shapeMouseDown = "shapemousedown", t.shapeClick = "shapeclick", t.shapedDblClick = "shapedblclick", t.shapeIconClick = "shapeiconclick", t.beforeRender = "beforerender", t.shapeHover = "shapeHover", t.emptyAreaClick = "emptyAreaClick"
            }(e.DiagramEvents || (e.DiagramEvents = {}))
    }, , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2),
            i = n(1),
            o = function() {
                function t(t, e) {
                    this._uid = r.uid(), this.config = e || {}
                }
                return t.prototype.mount = function(t, e) {
                    e && (this._view = e), t && this._view && this._view.mount && (this._container = i.toNode(t), this._container.tagName ? this._view.mount(this._container) : this._container.attach && this._container.attach(this))
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
        e.View = o, e.toViewLike = function(t) {
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
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r(n(3)), r(n(24)), r(n(53)), r(n(54)), r(n(12)), r(n(4)), r(n(28)), r(n(27)), r(n(56)), r(n(26)), r(n(25))
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(25),
            i = function() {
                function t(t) {
                    this.url = t
                }
                return t.prototype.load = function() {
                    return r.ajax.get(this.url)
                }, t.prototype.save = function(t, e) {
                    switch (e) {
                        case "delete":
                            return r.ajax.delete(this.url, t);
                        case "update":
                        case "insert":
                        default:
                            return r.ajax.post(this.url, t)
                    }
                }, t
            }();
        e.DataProxy = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = n(7),
            s = n(14),
            a = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.config = e, n.id = n.config.id, n
                }
                return r(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = this.getCenter(),
                        n = t.$selected ? t.color : "#E4E4E4",
                        r = this.getCoords(t);
                    return i.sv("g", {
                        _key: t.id,
                        transform: "translate(" + r.x + "," + r.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: this.getCss(),
                        dhx_id: t.id
                    }, [i.sv("rect", {
                        class: "dhx_item_shape",
                        id: t.id,
                        height: t.height,
                        width: t.width,
                        rx: 1,
                        ry: 1,
                        stroke: n,
                        "stroke-width": 1
                    }), s.getTextTemplate(t, this.text()), s.getHeaderTpl(t), s.getCircleTpl(t)])
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
            }(o.BaseShape);
        e.OrgChartCard = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0);
        e.getCircleTpl = function(t) {
            if (!t.$count && !1 !== t.open || !t.$kids) return "";
            var e = "vertical" === t.dir,
                n = !1 === t.open,
                i = t.width / 2,
                o = t.height / 2,
                s = {
                    x: e ? 0 : i,
                    y: e ? o : t.height
                },
                a = n ? r.sv("polyline", {
                    points: s.x - 5 + "," + s.y + "\n\t\t\t" + s.x + "," + s.y + "\n\t\t\t" + s.x + "," + (s.y - 5) + "\n\t\t\t" + s.x + "," + (s.y + 5) + "\n\t\t\t" + s.x + "," + s.y + "\n\t\t\t" + (s.x + 5) + "," + s.y,
                    "stroke-width": "2",
                    stroke: "white",
                    fill: "none"
                }) : r.sv("line", {
                    x1: s.x - 5,
                    y1: s.y,
                    x2: s.x + 5,
                    y2: s.y,
                    "stroke-width": "2",
                    stroke: "white"
                });
            return r.sv("g", {
                x: s.x,
                y: s.y,
                dhx_diagram: "hide",
                class: n ? "dhx_expand_icon" : "dhx_hide_icon"
            }, [r.sv("circle", {
                r: 10,
                cx: s.x,
                cy: s.y,
                fill: t.$expandColor
            }), a])
        }, e.getHeaderTpl = function(t) {
            var e = t.color || "#20b6e2";
            return r.sv("rect", {
                height: 3.5,
                width: t.width,
                class: "dhx_item_header",
                stroke: e,
                fill: e,
                "stroke-width": 1
            })
        }, e.getTextTemplate = function(t, e) {
            return t.text || t.title ? r.sv("foreignObject", {
                width: t.width,
                overflow: "hidden",
                height: t.height,
                transform: "translate(0 0)"
            }, [r.el("div", {
                class: "shape_content",
                style: "width:" + t.width + "px;height:" + t.height + "px;"
            }, e)]) : null
        }
    }, function(t, e, n) {
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
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(57),
            i = n(13),
            o = n(58),
            s = n(59),
            a = n(60),
            c = n(18),
            u = n(61),
            l = n(62);
        for (var f in e.shapes = {
                line: r.Line,
                dash: r.Line,
                card: i.OrgChartCard,
                "img-card": o.OrgChartImgCard,
                "svg-card": s.OrgChartSvgCard,
                "svg-img-card": a.OrgChartSvgImgCard,
                text: u.DiagramTextShape,
                "custom-content": l.CustomContent
            }, c.flowShapes) e.shapes[f] = c.DiagramFlowShape;
        e.shapesFactory = function(t, n) {
            d(t);
            var r = e.shapes[t.type];
            return !r && (r = e.shapes.card, n[t.type]) ? new c.DiagramFlowShape(t, n) : new r(t)
        };
        var d = function(t) {
            window.SVGForeignObjectElement || ("img-card" === t.type && (t.type = "svg-img-card"), "card" === t.type && (t.type = "svg-card"))
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = n(14),
            s = function(t) {
                function n(e, n) {
                    var r = t.call(this, e) || this;
                    return r.shapes = n, r.config = e, r.id = r.config.id, r
                }
                return r(n, t), n.prototype.getMetaInfo = function() {
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
                }, n.prototype.toSVG = function() {
                    this.config.strokeType && ("dash" === this.config.strokeType && (this.config.strokeDash = "5,512"), "none" === this.config.strokeType && (this.config.stroke = "none"));
                    var t = this.config,
                        e = this.getCenter(),
                        n = this.getCoords(t);
                    return i.sv("g", {
                        _key: t.id,
                        transform: "translate(" + n.x + "," + n.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: "dhx_diagram_flow_item " + this.getCss(),
                        dhx_id: t.id
                    }, this._getShapeStruct(t).concat([o.getCircleTpl(t)]))
                }, n.prototype.setDefaults = function(t) {
                    var e = t.width,
                        n = t.height,
                        r = t.stroke,
                        i = t.extraLinesStroke,
                        o = t.fill,
                        s = t.strokeWidth,
                        a = t.fontColor,
                        c = t.textAlign,
                        u = t.lineHeight,
                        l = t.fontStyle,
                        f = t.textVerticalAlign,
                        d = t.type,
                        h = t.fontSize,
                        p = ["circle", "or", "junction"].indexOf(d) >= 0,
                        v = "roll" === d ? "#DEDEDE" : i || "#FFF";
                    return t.width = e || (p ? 90 : 140), t.height = n || 90, t.stroke = r || "#DEDEDE", t.extraLinesStroke = v, t.fill = o || "#DEDEDE", t.strokeWidth = s || 1, t.fontColor = a || "#4C4C4C", t.fontSize = h || 14, t.textAlign = c || "center", t.lineHeight = u || 14, t.fontStyle = l || "normal", t.textVerticalAlign = f || "center", t
                }, n.prototype._getShapeStruct = function(t) {
                    var n = e.flowShapes[t.type] || this.shapes[t.type];
                    if ("function" == typeof n) return this._getShapeFromFunction(n);
                    var r, o = t.width,
                        s = t.height,
                        a = t.stroke,
                        c = t.fill,
                        u = t.strokeWidth,
                        l = t.fill,
                        f = t.extraLinesStroke,
                        d = Math.round(t.width / 12),
                        h = n.path(o, s, d),
                        p = n.additionalPath(o, s, d);
                    return n.text ? r = function(t) {
                        var e = (new DOMParser).parseFromString(t, "text/xml");
                        return i.sv("g", {}, [i.jsonToVDOM(i.xmlToJson(e))])
                    }(n.text(this.config)) : t.text && (r = this._getText()), [function(t) {
                        return i.sv("path", {
                            d: t,
                            class: "dhx_diagram_flow__shape dhx_item_shape ",
                            stroke: a,
                            fill: c,
                            "stroke-width": u,
                            "stroke-dasharray": ""
                        })
                    }(h), function(t) {
                        return i.sv("path", {
                            d: t,
                            fill: "none",
                            stroke: f,
                            class: "dhx_diagram_extra_lines"
                        })
                    }(p), r]
                }, n.prototype._getShapeFromFunction = function(t) {
                    var e = (new DOMParser).parseFromString(t(this.config), "text/xml");
                    return window.SVGForeignObjectElement ? [i.sv("foreignObject", {
                        overflow: "hidden",
                        width: this.config.width,
                        height: this.config.height,
                        transform: "translate(0 0)"
                    }, [i.jsonToVDOM(i.xmlToJson(e))])] : [i.jsonToVDOM(i.xmlToJson(e))]
                }, n.prototype._getText = function() {
                    var t = this.config,
                        e = t.textVerticalAlign;
                    if (t.text) {
                        var n = t.text.split(/\r?\n/).filter(function(t) {
                                return t.trim()
                            }),
                            r = 1 === n.length ? .35 : .6,
                            o = {
                                left: 10,
                                center: t.width / 2,
                                right: t.width - 10
                            },
                            s = n.map(function(e) {
                                var n = i.sv("tspan", {
                                    class: "dhx_content_text",
                                    x: o[t.textAlign],
                                    dy: r + "em"
                                }, e.trim());
                                return r = t.lineHeight / 14 * 1.2, n
                            }),
                            a = {
                                top: 10,
                                center: t.height / (n.length + 1),
                                bottom: t.height - 17 * n.length
                            };
                        return i.sv("text", {
                            y: a[e],
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
                        }, s)
                    }
                }, n
            }(n(7).BaseShape);
        e.DiagramFlowShape = s, e.flowShapes = {
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
                path: function(t, e, n) {
                    return "M " + 2 * n + ",0 " + t + ",0 " + (t - 2 * n) + "," + e + " 0," + e + " Z"
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
                path: function(t, e, n) {
                    return "M " + n + " 0 Q\n\t\t\t" + -n + " " + e / 2 + ",\n\t\t\t" + n + " " + e + " H " + t + " Q\n\t\t\t" + (t - 2 * n) + " " + e / 2 + ",\n\t\t\t" + t + " 0 Z"
                },
                additionalPath: function() {}
            },
            database: {
                path: function(t, e, n) {
                    return "M 0 " + n + " A " + t / 2 + "," + n + " 0 1 0 " + t + "," + n + "\n\t\t\tA " + t / 2 + "," + n + " 0 1 0 0," + n + "\n\t\t\tV " + e + " H " + t + " V " + n
                },
                additionalPath: function(t, e, n) {
                    return "M 0 " + n + " A " + t / 2 + "," + n + " 0 1 0 " + t + "," + n
                }
            },
            internal: {
                path: function(t, e) {
                    return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                },
                additionalPath: function(t, e, n) {
                    return "M " + n + " 0 V " + e + " M 0 " + n + " H " + t
                }
            },
            offline: {
                path: function(t, e) {
                    return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z"
                },
                additionalPath: function(t, e, n) {
                    var r = e / Math.sqrt(Math.pow(t / 2, 2) + Math.pow(e, 2)),
                        i = Math.sqrt(Math.pow(n / r, 2) - Math.pow(n, 2));
                    return "M " + (t / 2 - i) + " " + (e - n) + " h " + 2 * i
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
                additionalPath: function(t, e, n) {
                    return "M " + n + " 0 V " + e + " M " + (t - n) + " 0 V " + e
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
                path: function(t, e, n) {
                    return "\n\t\t\tM " + n + " 0 A " + n + "," + e / 2 + " 0 1 0 " + n + "," + e + "\n\t\t\tH " + (t - n) + " A " + n + "," + e / 2 + " 0 1 0 " + (t - n) + ",0 H " + n + " Z"
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
    }, , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            apply: "apply",
            reject: "reject"
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = document.activeElement;
            e.classList.contains("dhx_alert__confirm-reject") || e.classList.contains("dhx_alert__confirm-aply") || t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.blockScreen = function(t) {
            var e = document.createElement("div");
            return e.className = "dhx_alert__overlay " + (t || ""), document.body.appendChild(e), document.addEventListener("keydown", r),
                function() {
                    document.body.removeChild(e), document.removeEventListener("keydown", r)
                }
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };

        function i(t, e, n) {
            var i = {
                top: {
                    x: (t = r({}, t)).x + t.width / 2,
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
            return n ? [i[n] || i].map(function(e) {
                return t.$shape.getPoint(e.x, e.y)
            }) : [i.top, i.bottom, i.left, i.right].map(function(e) {
                return t.$shape.getPoint(e.x, e.y)
            })
        }

        function o(t, e) {
            var n = e.x - t.x,
                r = e.y - t.y;
            return Math.sqrt(n * n + r * r)
        }

        function s(t, e, n, i, o, s) {
            if (void 0 === s && (s = 10), !o) {
                var a = n.y === i.y ? +s : 0,
                    c = n.x === i.x ? +s : 0;
                return [t, {
                    x1: n.x,
                    y1: n.y,
                    x: n.x + a,
                    y: n.y + c
                }, {
                    x: i.x - a,
                    y: i.y - c
                }, {
                    x1: i.x,
                    y1: i.y,
                    x: e.x,
                    y: e.y
                }]
            }
            var u = i.x < o.x ? -1 : 1,
                l = i.y < o.y ? -1 : 1,
                f = n.x > o.x ? 1 : -1,
                d = n.y > o.y ? 1 : -1,
                h = r({}, o),
                p = r({}, i),
                v = {
                    x1: o.x,
                    y1: o.y,
                    x: o.x,
                    y: o.y + s * l
                };
            return n.x === o.x && (h.y += s * d, p.x -= s * u, v = {
                x1: o.x,
                y1: o.y,
                x: o.x + s * u,
                y: o.y
            }), n.y === o.y && (h.x += s * f, p.y -= s * l, v = {
                x1: o.x,
                y1: o.y,
                x: o.x,
                y: o.y + s * l
            }), [t, n, h, v, p, {
                x1: i.x,
                y1: i.y,
                x: e.x,
                y: e.y
            }]
        }

        function a(t, e, n) {
            return [t, {
                x1: n.x,
                y1: n.y,
                x: e.x,
                y: e.y
            }]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.nearestLinkPath = function(t, e, n, r) {
            if (e && n) {
                var c = function(t, e, n, r, c, u) {
                    void 0 === c && (c = ""), void 0 === u && (u = "");
                    for (var l, f = i(e, 0, c), d = i(n, 0, u), h = i(e, r, c), p = i(n, r, u), v = 1 / 0, g = 0; g < h.length; g++)
                        for (var y = h[g], _ = 0; _ < p.length; _++) {
                            var m = p[_],
                                x = o(y, m);
                            if (v > x)
                                if (v = x, y.x === m.x || y.y === m.y) f[g].x === y.x && y.x === d[_].x || f[g].y === y.y && d[_].y === y.y ? l = [f[g], d[_]] : (l = [f[g], y, m, d[_]], t.cornersRadius && "straight" !== t.connectType && (l = s(f[g], d[_], y, m, null, t.cornersRadius)));
                                else {
                                    var w = y.x < f[g].x && y.x < m.x,
                                        b = y.y > f[g].y && y.y > m.y,
                                        D = f[g].x === y.x || w ? {
                                            x: y.x,
                                            y: m.y
                                        } : {
                                            x: m.x,
                                            y: y.y
                                        };
                                    D = b ? {
                                        x: m.x,
                                        y: y.y
                                    } : D, l = "curved" === t.connectType ? a(f[g], d[_], D) : t.cornersRadius && "straight" !== t.connectType ? s(f[g], d[_], y, m, D, t.cornersRadius) : [f[g], y, D, m, d[_]]
                                }
                        }
                    return l
                }(t, e, n, r.lineGap, t.fromSide, t.toSide);
                if ("straight" === t.connectType) return t.points = [c[0], c[c.length - 1]];
                if (t.points) {
                    if (t.points.length === c.length) t.points = t.points.map(function(t, e) {
                        return t && c[e] && !t.$custom ? c[e] : t
                    });
                    else {
                        var u = t.points.filter(function(t) {
                            return t.$custom
                        });
                        t.points = u.length ? t.points : c
                    }
                    t.$move || (t.points[0] = c[0], t.points[t.points.length - 1] = c[c.length - 1])
                } else t.points = c
            }
        }, e.directLinkPath = function(t, e, n, r) {
            var i = e.x + (e.dx || 0),
                o = e.y + (e.dy || 0),
                s = n.x + (n.dx || 0),
                a = n.y + (n.dy || 0);
            if ("vertical" === e.dir) {
                var c = i,
                    u = Math.round(o + e.height / 2),
                    l = s,
                    f = Math.round(a + n.height / 2),
                    d = .5 - Math.round(r.margin.itemX / 2);
                t.points = [{
                    x: c,
                    y: u
                }, {
                    x: c + d,
                    y: u
                }, {
                    x: c + d,
                    y: f
                }, {
                    x: l,
                    y: f
                }]
            } else c = Math.round(i + e.width / 2), u = o + e.height, l = Math.round(s + n.width / 2), f = a, d = Math.round(r.margin.itemY / 2) + .5, t.points = [{
                x: c,
                y: u
            }, {
                x: c,
                y: u + d
            }, {
                x: l,
                y: u + d
            }, {
                x: l,
                y: f
            }]
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.beforeUnSelect = "beforeunselect", t.afterUnSelect = "afterunselect", t.beforeSelect = "beforeselect", t.afterSelect = "afterselect"
            }(e.SelectionEvents || (e.SelectionEvents = {}))
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(5),
            o = n(49),
            s = n(52),
            a = n(12),
            c = n(4),
            u = n(3),
            l = n(2),
            f = function() {
                function t(t, e) {
                    this.config = t || {}, this._order = [], this._pull = {}, this._changes = {
                        order: []
                    }, this._initOrder = null, this._sort = new s.Sort, this._loader = new o.Loader(this, this._changes), this.events = e || new i.EventSystem(this), this.events.on(u.DataEvents.loadError, function(t) {
                        "string" != typeof t ? c.dhxError(t) : c.dhxWarning(t)
                    })
                }
                return t.prototype.add = function(t, e) {
                    var n = this;
                    if (this.events.fire(u.DataEvents.beforeAdd, [t])) {
                        if (Array.isArray(t)) return t.map(function(t, r) {
                            0 !== r && (e += 1);
                            var i = n._addCore(t, e);
                            return n._onChange("add", t.id, t), n.events.fire(u.DataEvents.afterAdd, [t]), i
                        });
                        var r = this._addCore(t, e);
                        return this._onChange("add", t.id, t), this.events.fire(u.DataEvents.afterAdd, [t]), r
                    }
                }, t.prototype.remove = function(t) {
                    var e = this;
                    if (t)
                        if (t instanceof Array) t.map(function(t) {
                            var n = e._pull[t];
                            if (n) {
                                if (!e.events.fire(u.DataEvents.beforeRemove, [n])) return;
                                e._removeCore(n.id), e._onChange("remove", t, n)
                            }
                            e.events.fire(u.DataEvents.afterRemove, [n])
                        });
                        else {
                            var n = this._pull[t];
                            if (n) {
                                if (!this.events.fire(u.DataEvents.beforeRemove, [n])) return;
                                this._removeCore(n.id), this._onChange("remove", t, n)
                            }
                            this.events.fire(u.DataEvents.afterRemove, [n])
                        }
                }, t.prototype.removeAll = function() {
                    this._removeAll(), this.events.fire(u.DataEvents.removeAll), this.events.fire(u.DataEvents.change)
                }, t.prototype.exists = function(t) {
                    return !!this._pull[t]
                }, t.prototype.getNearId = function(t) {
                    if (!this._pull[t]) return this._order[0].id || ""
                }, t.prototype.getItem = function(t) {
                    return this._pull[t]
                }, t.prototype.update = function(t, e, n) {
                    var r = this.getItem(t);
                    if (r) {
                        if (c.isEqualObj(e, r)) return;
                        e.id && t !== e.id ? (c.dhxWarning("this method doesn't allow change id"), c.isDebug()) : (l.extend(this._pull[t], e, !1), this.config.update && this.config.update(this._pull[t]), n || this._onChange("update", t, this._pull[t]))
                    } else c.dhxWarning("item not found")
                }, t.prototype.getIndex = function(t) {
                    var e = l.findIndex(this._order, function(e) {
                        return e.id === t
                    });
                    return this._pull[t] && e >= 0 ? e : -1
                }, t.prototype.getId = function(t) {
                    if (this._order[t]) return this._order[t].id
                }, t.prototype.getLength = function() {
                    return this._order.length
                }, t.prototype.filter = function(t, e) {
                    if ((e = l.extend({
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
                    this.events.fire(u.DataEvents.change)
                }, t.prototype.find = function(t) {
                    for (var e in this._pull) {
                        var n = c.findByConf(this._pull[e], t);
                        if (n) return n
                    }
                    return null
                }, t.prototype.findAll = function(t) {
                    var e = [];
                    for (var n in this._pull) {
                        var r = c.findByConf(this._pull[n], t);
                        r && e.push(r)
                    }
                    return e
                }, t.prototype.sort = function(t) {
                    if (t) this._sort.sort(this._order, t), this._initOrder && this._initOrder.length && this._sort.sort(this._initOrder, t);
                    else {
                        for (var e in this._order = [], this._pull) this._order.push(this._pull[e]);
                        this._applyFilters()
                    }
                    this.events.fire(u.DataEvents.change)
                }, t.prototype.copy = function(e, n, i, o) {
                    var s = this;
                    if (e instanceof Array) return e.map(function(e, a) {
                        if (!s.exists(e)) return null;
                        var u = l.uid(),
                            f = -1 === n ? -1 : n + a;
                        return i ? i instanceof t || !o ? i.exists(e) ? (i.add(r({}, c.copyWithoutInner(s.getItem(e)), {
                            id: u
                        }), f), u) : (i.add(c.copyWithoutInner(s.getItem(e)), f), e) : void i.add(c.copyWithoutInner(s.getItem(e)), f) : (s.add(r({}, c.copyWithoutInner(s.getItem(e)), {
                            id: u
                        }), f), u)
                    });
                    if (!this.exists(e)) return null;
                    var a = l.uid();
                    return i ? i instanceof t || !o ? i.exists(e) ? (i.add(r({}, c.copyWithoutInner(this.getItem(e)), {
                        id: a
                    }), n), a) : (i.add(c.copyWithoutInner(this.getItem(e)), n), e) : void i.add(c.copyWithoutInner(this.getItem(e)), n) : (this.add(r({}, c.copyWithoutInner(this.getItem(e)), {
                        id: a
                    }), n), a)
                }, t.prototype.move = function(t, e, n, r) {
                    var i = this;
                    if (t instanceof Array) return t.map(function(t, o) {
                        var s = -1 === e ? -1 : e + o;
                        if (n && n !== i && i.exists(t)) {
                            var a = l.copy(i.getItem(t), !0);
                            return n.exists(t) && (a.id = l.uid()), r && (a.parent = r), n.add(a, s), i.remove(t), a.id
                        }
                        if (i.getIndex(t) === s) return null;
                        var c = i._order.splice(i.getIndex(t), 1)[0];
                        return -1 === e && (e = i._order.length), i._order.splice(s, 0, c), i.events.fire(u.DataEvents.change), t
                    });
                    if (n && n !== this && this.exists(t)) {
                        var o = l.copy(this.getItem(t), !0);
                        return n.exists(t) && (o.id = l.uid()), r && (o.parent = r), n.add(o, e), this.remove(t), o.id
                    }
                    if (this.getIndex(t) === e) return null;
                    var s = this._order.splice(this.getIndex(t), 1)[0];
                    return -1 === e && (e = this._order.length), this._order.splice(e, 0, s), this.events.fire(u.DataEvents.change), t
                }, t.prototype.load = function(t, e) {
                    return "string" == typeof t && (t = new a.DataProxy(t)), this._loader.load(t, e)
                }, t.prototype.parse = function(t, e) {
                    return this._removeAll(), this._loader.parse(t, e)
                }, t.prototype.$parse = function(t) {
                    var e = this.config.approximate;
                    e && (t = this._approximate(t, e.value, e.maxNum)), this._parse_data(t), this.events.fire(u.DataEvents.change, ["load"]), this.events.fire(u.DataEvents.load)
                }, t.prototype.save = function(t) {
                    this._loader.save(t)
                }, t.prototype.isSaved = function() {
                    return !this._changes.order.length
                }, t.prototype.map = function(t) {
                    for (var e = [], n = 0; n < this._order.length; n++) e.push(t.call(this, this._order[n], n));
                    return e
                }, t.prototype.mapRange = function(t, e, n) {
                    t < 0 && (t = 0), e > this._order.length - 1 && (e = this._order.length - 1);
                    for (var r = [], i = t; i <= e; i++) r.push(n.call(this, this._order[i], i));
                    return r
                }, t.prototype.reduce = function(t, e) {
                    for (var n = 0; n < this._order.length; n++) e = t.call(this, e, this._order[n], n);
                    return e
                }, t.prototype.serialize = function(t) {
                    void 0 === t && (t = u.DataDriver.json);
                    var e = this.map(function(t) {
                            var e = r({}, t);
                            return Object.keys(e).forEach(function(t) {
                                "$" === t[0] && delete e[t]
                            }), e
                        }),
                        n = c.toDataDriver(t);
                    if (n) return n.serialize(e)
                }, t.prototype.getInitialData = function() {
                    return this._initOrder
                }, t.prototype._removeAll = function() {
                    this._pull = {}, this._order = [], this._changes.order = [], this._initOrder = null
                }, t.prototype._addCore = function(t, e) {
                    return this.config.init && (t = this.config.init(t)), t.id = t.id ? t.id.toString() : l.uid(), this._pull[t.id] && c.dhxError("Item already exist"), this._initOrder && this._initOrder.length && this._addToOrder(this._initOrder, t, e), this._addToOrder(this._order, t, e), t.id
                }, t.prototype._removeCore = function(t) {
                    this.getIndex(t) >= 0 && (this._order = this._order.filter(function(e) {
                        return e.id !== t
                    }), delete this._pull[t]), this._initOrder && this._initOrder.length && (this._initOrder = this._initOrder.filter(function(e) {
                        return e.id !== t
                    }))
                }, t.prototype._parse_data = function(t) {
                    var e = this._order.length;
                    this.config.prep && (t = this.config.prep(t));
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        this.config.init && (i = this.config.init(i)), i.id = i.id || 0 === i.id ? i.id : l.uid(), this._pull[i.id] = i, this._order[e++] = i
                    }
                }, t.prototype._approximate = function(t, e, n) {
                    for (var r = t.length, i = e.length, o = Math.floor(r / n), s = Array(Math.ceil(r / o)), a = 0, c = 0; c < r; c += o) {
                        for (var u = l.copy(t[c]), f = Math.min(r, c + o), d = 0; d < i; d++) {
                            for (var h = 0, p = c; p < f; p++) h += t[p][e[d]];
                            u[e[d]] = h / (f - c)
                        }
                        s[a++] = u
                    }
                    return s
                }, t.prototype._onChange = function(t, e, n) {
                    for (var i = 0, o = this._changes.order; i < o.length; i++) {
                        var s = o[i];
                        if (s.id === e && !s.saving) return s.error && (s.error = !1), s = r({}, s, {
                            obj: n,
                            status: t
                        }), void this.events.fire(u.DataEvents.change, [e, t, n])
                    }
                    this._changes.order.push({
                        id: e,
                        status: t,
                        obj: r({}, n),
                        saving: !1
                    }), this.events.fire(u.DataEvents.change, [e, t, n])
                }, t.prototype._addToOrder = function(t, e, n) {
                    n >= 0 && t[n] ? (this._pull[e.id] = e, t.splice(n, 0, e)) : (this._pull[e.id] = e, t.push(e))
                }, t.prototype._applyFilters = function() {
                    var t = this;
                    if (this._filters && Object.keys(this._filters).length) {
                        var e = this._order.filter(function(e) {
                            return Object.keys(t._filters).every(function(n) {
                                return e[n] ? t._filters[n].compare(e[n], t._filters[n].match, e) : t._filters[n].compare(e)
                            })
                        });
                        this._initOrder || (this._initOrder = this._order), this._order = e
                    }
                }, t
            }();
        e.DataCollection = f
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(3),
                i = n(4);

            function o(t) {
                return t ? t.indexOf("json") >= 0 ? "json" : t.indexOf("xml") >= 0 ? "xml" : "text" : "text"
            }

            function s(e, n, s, a, c) {
                var u = a || {};
                if (c && (u.Accept = "application/" + c), "GET" !== s && (u["Content-Type"] = u["Content-Type"] || "application/json"), "GET" === s) {
                    var l = n && "object" == typeof n ? function(t) {
                        return Object.keys(t).reduce(function(e, n) {
                            var r = "object" == typeof t[n] ? JSON.stringify(t[n]) : t[n];
                            return e.push(n + "=" + encodeURIComponent(r)), e
                        }, []).join("&")
                    }(n) : n && "string" == typeof n ? n : "";
                    l && (e += -1 === e.indexOf("?") ? "?" : "&", e += l), n = null
                }
                return window.fetch ? window.fetch(e, {
                    method: s,
                    body: n ? JSON.stringify(n) : null,
                    headers: u
                }).then(function(e) {
                    if (!e.ok) return e.text().then(function(n) {
                        return t.reject({
                            status: e.status,
                            statusText: e.statusText,
                            message: n
                        })
                    });
                    var n = c || o(e.headers.get("Content-Type"));
                    if ("raw" === n) return {
                        headers: Object.fromEntries(e.headers.entries()),
                        url: e.url,
                        body: e.body
                    };
                    if (204 !== e.status) switch (n) {
                        case "json":
                            return e.json();
                        case "xml":
                            var s = i.toDataDriver(r.DataDriver.xml);
                            return s ? e.text().then(s.toJsonObject) : e.text();
                        default:
                            return e.text()
                    }
                }) : new t(function(t, a) {
                    var l = new XMLHttpRequest;
                    for (var f in l.onload = function() {
                            l.status >= 200 && l.status < 300 ? ("raw" === c && t({
                                url: l.responseURL,
                                headers: l.getAllResponseHeaders().trim().split(/[\r\n]+/).reduce(function(t, e) {
                                    var n = e.split(": ");
                                    return t[n[0]] = n[1], t
                                }, {}),
                                body: l.response
                            }), 204 === l.status ? t() : t(function(t, e) {
                                switch (e) {
                                    case "json":
                                        return JSON.parse(t);
                                    case "text":
                                        return t;
                                    case "xml":
                                        var n = i.toDataDriver(r.DataDriver.xml);
                                        return n ? n.toJsonObject(t) : {
                                            parseError: "Incorrect data driver type: 'xml'"
                                        };
                                    default:
                                        return t
                                }
                            }(l.responseText, c || o(l.getResponseHeader("Content-Type"))))) : a({
                                status: l.status,
                                statusText: l.statusText
                            })
                        }, l.onerror = function() {
                            a({
                                status: l.status,
                                statusText: l.statusText,
                                message: l.responseText
                            })
                        }, l.open(s, e), u) l.setRequestHeader(f, u[f]);
                    switch (s) {
                        case "POST":
                        case "DELETE":
                        case "PUT":
                            l.send(void 0 !== n ? JSON.stringify(n) : "");
                            break;
                        case "GET":
                        default:
                            l.send()
                    }
                })
            }
            e.ajax = {
                get: function(t, e, n) {
                    return s(t, e, "GET", n && n.headers, void 0 !== n ? n.responseType : void 0)
                },
                post: function(t, e, n) {
                    return s(t, e, "POST", n && n.headers, void 0 !== n ? n.responseType : void 0)
                },
                put: function(t, e, n) {
                    return s(t, e, "PUT", n && n.headers, void 0 !== n ? n.responseType : void 0)
                },
                delete: function(t, e, n) {
                    return s(t, e, "DELETE", n && n.headers, void 0 !== n ? n.responseType : void 0)
                }
            }
        }).call(this, n(6))
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(27),
            o = n(28),
            s = n(50);
        e.dataDrivers = {
            json: i.JsonDriver,
            csv: o.CsvDriver
        }, e.dataDriversPro = r({}, e.dataDrivers, {
            xml: s.XMLDriver
        })
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
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
        e.JsonDriver = r
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t) {
                this.config = r({}, {
                    skipHeader: 0,
                    nameByHeader: !1,
                    rowDelimiter: "\n",
                    columnDelimiter: ","
                }, t), this.config.nameByHeader && (this.config.skipHeader = 1)
            }
            return t.prototype.getFields = function(t, e) {
                for (var n = t.trim().split(this.config.columnDelimiter), r = {}, i = 0; i < n.length; i++) r[e ? e[i] : i + 1] = n[i];
                return r
            }, t.prototype.getRows = function(t) {
                return t.trim().split(this.config.rowDelimiter)
            }, t.prototype.toJsonArray = function(t) {
                var e = this,
                    n = this.getRows(t),
                    r = this.config.names;
                if (this.config.skipHeader) {
                    var i = n.splice(0, this.config.skipHeader);
                    this.config.nameByHeader && (r = i[0].trim().split(this.config.columnDelimiter))
                }
                return n.map(function(t) {
                    return e.getFields(t, r)
                })
            }, t.prototype.serialize = function(t, e) {
                var n = t[0] ? Object.keys(t[0]).filter(function(t) {
                        return "$" !== t[0]
                    }).join(this.config.columnDelimiter) : "",
                    r = this._serialize(t);
                return e ? r : n + r
            }, t.prototype._serialize = function(t) {
                var e = this;
                return t.reduce(function(t, n) {
                    var r = Object.keys(n).reduce(function(t, r, i) {
                        return "$" === r[0] || "items" === r ? t : "" + t + n[r] + (i === n.length - 1 ? "" : e.config.columnDelimiter)
                    }, "");
                    return n.items ? t + "\n" + r + e._serialize(n.items) : "" + t + e.config.rowDelimiter + r
                }, "")
            }, t
        }();
        e.CsvDriver = i
    }, , , , function(t, e, n) {
        "use strict";

        function r(t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r(n(38)), r(n(40)), r(n(44)), r(n(33)), r(n(15))
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1),
            o = n(15),
            s = 750,
            a = 200;

        function c(t, e, n, r) {
            var i, s, a;
            switch (e) {
                case o.Position.center:
                    return (s = t.left + window.pageXOffset + (t.width - n) / 2) + 8 < window.pageXOffset && (s = t.left + window.pageXOffset), {
                        left: s,
                        top: a = t.top + window.pageYOffset + (t.height - r) / 2,
                        pos: i = o.RealPosition.center
                    };
                case o.Position.right:
                    return i = o.RealPosition.right, (s = t.right + window.pageXOffset) + n + 8 > window.innerWidth + window.pageXOffset && (s = window.pageXOffset + t.left - n, i = o.RealPosition.left), {
                        left: s,
                        top: a = window.pageYOffset + t.top + (t.height - r) / 2,
                        pos: i
                    };
                case o.Position.bottom:
                default:
                    return (s = window.pageXOffset + t.left + (t.width - n) / 2) + n > window.innerWidth + window.pageXOffset ? s = window.innerWidth + window.pageXOffset - n : s < 0 && (s = 0), i = o.RealPosition.bottom, (a = window.pageYOffset + t.bottom) + r + 8 > window.innerHeight + window.pageYOffset && (a = window.pageYOffset + t.top - r, i = o.RealPosition.top), {
                        left: s,
                        top: a,
                        pos: i
                    }
            }
        }
        e.findPosition = c;
        var u = document.createElement("div"),
            l = document.createElement("span");
        l.className = "dhx_tooltip__text", u.appendChild(l), u.style.position = "absolute";
        var f, d = null,
            h = !1,
            p = null,
            v = null;

        function g(t, e, n, r, i) {
            void 0 === i && (i = !1);
            var s = t.getBoundingClientRect();
            l.textContent = e, document.body.appendChild(u), u.className = "dhx_widget dhx_tooltip" + (i ? " dhx_tooltip--forced" : "");
            var a = u.getBoundingClientRect(),
                f = c(s, n, a.width, a.height),
                d = f.left,
                p = f.top,
                v = f.pos;
            switch (v) {
                case o.RealPosition.bottom:
                case o.RealPosition.top:
                case o.RealPosition.left:
                case o.RealPosition.right:
                case o.RealPosition.center:
                    u.style.left = d + "px", u.style.top = p + "px"
            }
            u.className += " dhx_tooltip--" + v + " " + (r || ""), h = !0, i || setTimeout(function() {
                u.className += " dhx_tooltip--animate"
            })
        }

        function y(t, e, n) {
            var r = n.force,
                i = n.showDelay,
                c = n.hideDelay,
                l = n.position,
                y = n.css;
            r || (v = setTimeout(function() {
                g(t, e, l || o.Position.bottom, y)
            }, i || s));
            var _ = function() {
                h && function(t) {
                    d && (p = setTimeout(function() {
                        document.body.removeChild(u), h = !1, p = null
                    }, t || a))
                }(c), clearTimeout(v), t.removeEventListener("mouseleave", _), t.removeEventListener("blur", _), document.removeEventListener("mousedown", _), d = null, f = null
            };
            r && g(t, e, l, y, r), t.addEventListener("mouseleave", _), t.addEventListener("blur", _), document.addEventListener("mousedown", _), f = _
        }

        function _(t, e) {
            var n = i.toNode(e.node);
            n !== d && (f && (f(), f = null), d = n, p ? (clearTimeout(p), p = null, y(n, t, r({}, e, {
                force: !0
            }))) : y(n, t, e))
        }

        function m(t) {
            var e = i.locateNode(t, "dhx_tooltip_text");
            e && _(e.getAttribute("dhx_tooltip_text"), {
                position: e.getAttribute("dhx_tooltip_position") || o.Position.bottom,
                node: e
            })
        }
        e.tooltip = _, e.enableTooltip = function() {
            document.addEventListener("mousemove", m)
        }, e.disableTooltip = function() {
            document.removeEventListener("mousemove", m)
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            i = this && this.__assign || function() {
                return (i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(5),
            s = n(2),
            a = n(0),
            c = n(1),
            u = n(10),
            l = n(46),
            f = n(22),
            d = n(47),
            h = n(48),
            p = n(17),
            v = n(18),
            g = n(63),
            y = n(64),
            _ = n(8),
            m = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    r.version = "2.2.1", r._set_defaults(), r._init_events(), r._init_struct(), r.config.toolbar && (r._toolbar = new y.Toolbar(r.events, r.config.toolbar));
                    var i = a.create({
                        render: function(t) {
                            return r._render(t)
                        }
                    }, r);
                    return r.mount(e, i), r
                }
                return r(e, t), e.prototype.locate = function(t) {
                    var e = c.locate(t, "dhx_id"),
                        n = this.data.getItem(e);
                    return n ? n.$shape : null
                }, e.prototype.collapseItem = function(t) {
                    this.events.fire(_.DiagramEvents.beforeCollapse, [t]) && (this.data.update(t, {
                        open: !1
                    }), this.events.fire(_.DiagramEvents.afterCollapse, [t]))
                }, e.prototype.expandItem = function(t) {
                    this.events.fire(_.DiagramEvents.beforeExpand, [t]) && (this.data.update(t, {
                        open: !0
                    }), this.events.fire(_.DiagramEvents.afterExpand, [t]))
                }, e.prototype.getScrollState = function() {
                    var t = this.getRootView().node.el;
                    return {
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }
                }, e.prototype.scrollTo = function(t, e) {
                    var n = this.getRootView().node.el;
                    n.scrollLeft = t, n.scrollTop = e
                }, e.prototype.showItem = function(t) {
                    var e = this.getRootView().node.el,
                        n = this.data.getItem(t);
                    if (n) {
                        var r = n.$shape.getBox(),
                            i = e.offsetWidth / 2,
                            o = e.offsetHeight / 2;
                        this.scrollTo(r.right + 10 - i, r.bottom + 10 - o)
                    }
                }, e.prototype._render = function(t) {
                    if (this._doNotRepaint && t.node) return t.node;
                    this._doNotRepaint = !0;
                    var e = this._getContent(),
                        n = e.size,
                        r = e.content;
                    this.events.fire(_.DiagramEvents.beforeRender, [n]);
                    var o = n.x - n.left + 2 * this.config.margin.x,
                        s = n.y - n.top + 2 * this.config.margin.y,
                        c = "org" === this.config.type ? "dhx_org_chart" : "dhx_free_diagram";
                    n.left -= this.config.margin.x, n.top -= this.config.margin.y;
                    var u = o * this.config.scale,
                        l = s * this.config.scale,
                        f = null;
                    if (this._toolbar) {
                        var d = this.selection.getId();
                        d && (f = this._toolbar.toSVG(this.data.getItem(d), n))
                    }
                    var h = null;
                    return this.config.$svg && (h = this.config.$svg(n)), a.el(".dhx_diagram.dhx_widget", i({}, this._htmlevents), [a.el(".dhx_wrapper", {
                        class: c
                    }, [a.sv("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: u,
                        height: l,
                        viewBox: n.left + " " + n.top + " " + o + " " + s
                    }, [a.sv("defs", [a.sv("filter", {
                        x: 0,
                        y: 0,
                        width: 1,
                        height: 1,
                        id: "dhx_text_background"
                    }, [a.sv("feFlood", {
                        "flood-color": "white"
                    }), a.sv("feComposite", { in : "SourceGraphic"
                    })])]), a.sv("g", {
                        "shape-rendering": 1 === this.config.scale && "org" === this.config.type ? "crispedges" : "auto"
                    }, r)]), f].concat(h))])
                }, e.prototype._init_events = function() {
                    var t = this;
                    this._htmlevents = {
                        onscroll: function() {
                            t.events.fire(_.DiagramEvents.scroll, [t.getScrollState()])
                        },
                        onmousedown: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_diagram_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeMouseDown, [n.id, e])
                            },
                            dhx_diagram_flow_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeMouseDown, [n.id, e])
                            },
                            dhx_diagram_connector: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeMouseDown, [n.id, e, t._getPoint(e.clientX, e.clientY)])
                            }
                        }),
                        onmouseover: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_diagram_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeHover, [n.id, e])
                            },
                            dhx_diagram_flow_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeHover, [n.id, e])
                            },
                            dhx_diagram_connector: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeHover, [n.id, e])
                            }
                        }),
                        onclick: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_expand_icon: function(e, n) {
                                return t.expandItem(n.id)
                            },
                            dhx_hide_icon: function(e, n) {
                                return t.collapseItem(n.id)
                            },
                            dhx_diagram_connector: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeClick, [n.id, e])
                            },
                            dhx_diagram_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeClick, [n.id, e]), t.config.select && t.selection.add(n.id)
                            },
                            dhx_diagram_flow_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapeClick, [n.id, e]), t.config.select && t.selection.add(n.id)
                            },
                            dhx_diagram: function(e) {
                                var n = e.target,
                                    r = n.getAttribute && (n.getAttribute("class") || "").match(/dhx_diagram\b/),
                                    i = "svg" === n.tagName;
                                (r || i) && t.events.fire(_.DiagramEvents.emptyAreaClick, [e])
                            }
                        }),
                        ondblclick: c.eventHandler(function(e) {
                            return t.locate(e)
                        }, {
                            dhx_diagram_connector: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapedDblClick, [n.id, e])
                            },
                            dhx_diagram_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapedDblClick, [n.id, e])
                            },
                            dhx_diagram_flow_item: function(e, n) {
                                t.events.fire(_.DiagramEvents.shapedDblClick, [n.id, e])
                            }
                        })
                    }
                }, e.prototype._set_defaults = function() {
                    this.config = s.extend({
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
                    this.events = new o.EventSystem(this), this.flowShapes = i({}, v.flowShapes), this.data = new g.ShapesCollection({
                        init: function(e) {
                            var n = "from" in e ? t.config.defaultLinkType : t.config.defaultShapeType;
                            return e.type = e.type || n, "org" !== t.config.type && e.from && (e.stroke = e.stroke || "#2196F3"), e.$shape = p.shapesFactory(e, t.flowShapes), e
                        },
                        update: function(t) {
                            t.$shape.config = t
                        },
                        type: this.config.type
                    }, this.events), this.selection = new h.Selection({}, this.data, this.events), this.export = new l.Exporter("diagram", this.version, this), this.data.events.on(_.DataEvents.change, function() {
                        return t.paint()
                    }), this.events.on(_.SelectionEvents.afterSelect, function() {
                        return t.paint()
                    })
                }, e.prototype._getContent = function() {
                    var t = this,
                        e = !1;
                    "org" === this.config.type && (d.placeOrgonogram(this.data, this.config), e = !0);
                    var n = {
                            x: 0,
                            y: 0,
                            left: 0,
                            top: 0,
                            scale: this.config.scale
                        },
                        r = [],
                        i = [];
                    return this.data.mapVisible(function(o) {
                        o.$shape.isConnector() ? (e || f.nearestLinkPath(o, t.data.getItem(o.from), t.data.getItem(o.to), t.config), i.push(o.$shape.toSVG())) : r.push(o.$shape.toSVG());
                        var s = o.$shape.getBox();
                        s.right > n.x && (n.x = s.right), s.left < n.left && (n.left = s.left), s.bottom > n.y && (n.y = s.bottom), s.top < n.top && (n.top = s.top)
                    }), {
                        size: n,
                        content: i.concat(r)
                    }
                }, e.prototype._getPoint = function(t, e) {
                    var n = this.getRootView().node.el.getBoundingClientRect();
                    return {
                        x: t - n.left - this.config.margin.x,
                        y: e - n.top - this.config.margin.y
                    }
                }, e
            }(u.View);
        e.Diagram = m
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            applyAll: "Apply all",
            resetChanges: "Reset Changes",
            editCard: "Edit Card",
            color: "Color",
            position: "Position",
            size: "Size"
        }
    }, , , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(1),
            i = n(15),
            o = new WeakMap,
            s = new Map;

        function a(t, e) {
            e && clearTimeout(o.get(t));
            var n = t.parentNode,
                r = n.getAttribute("data-position"),
                i = n.parentNode,
                a = s.get(i);
            if (a) {
                var c = a[r];
                if (c) {
                    var u = c.stack,
                        l = u.indexOf(t);
                    return -1 !== l ? (n.removeChild(t), u.splice(l, 1), void(0 === u.length && i.removeChild(n))) : void 0
                }
            }
        }

        function c(t, e) {
            var n = document.createElement("div");
            return n.setAttribute("data-position", e), n.className = "dhx_message-container dhx_message-container--" + e + (t === document.body ? " dhx_message-container--in-body" : ""), n
        }
        e.message = function(t) {
            var e;
            "string" == typeof t && (t = {
                text: t
            }), t.position = t.position || i.MessageContainerPosition.topRight;
            var n = document.createElement("div");
            n.className = "dhx_widget dhx_message " + (t.css || ""), t.html ? n.innerHTML = t.html : n.innerHTML = '<span class="dhx_message__text">' + t.text + "</span>\n\t\t" + (t.icon ? '<span class="dhx_message__icon dxi ' + t.icon + '"></span>' : "");
            var u = t.node ? r.toNode(t.node) : document.body;
            "static" === getComputedStyle(u).position && (u.style.position = "relative");
            var l = s.get(u);
            l ? l[t.position] || (l[t.position] = {
                stack: [],
                container: c(u, t.position)
            }) : s.set(u, ((e = {})[t.position] = {
                stack: [],
                container: c(u, t.position)
            }, e));
            var f = s.get(u)[t.position],
                d = f.stack,
                h = f.container;
            if (0 === d.length && u.appendChild(h), d.push(n), h.appendChild(n), t.expire) {
                var p = setTimeout(function() {
                    return a(n)
                }, t.expire);
                o.set(n, p)
            }
            n.onclick = function() {
                return a(n, !0)
            }
        }
    }, function(t, e) {
        if (Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(20),
                i = n(21);
            e.alert = function(e) {
                var n = e.buttons && e.buttons[0] ? e.buttons[0] : r.default.apply,
                    o = i.blockScreen(e.blockerCss);
                return new t(function(t) {
                    var r = document.createElement("div");
                    r.className = "dhx_widget dhx_alert " + (e.css || ""), r.innerHTML = "\n\t\t\t" + (e.header ? '<div class="dhx_alert__header"> ' + e.header + " </div>" : "") + "\n\t\t\t" + (e.text ? '<div class="dhx_alert__content">' + e.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (e.buttonsAlignment ? "dhx_alert__footer--" + e.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + n + "</button>\n\t\t\t</div>", document.body.appendChild(r), r.querySelector(".dhx_alert__apply-button").focus(), r.querySelector("button").addEventListener("click", function() {
                        o(), document.body.removeChild(r), t(!0)
                    })
                })
            }
        }).call(this, n(6))
    }, function(t, e, n) {
        (function(t) {
            var r = void 0 !== t && t || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function o(t, e) {
                this._id = t, this._clearFn = e
            }
            e.setTimeout = function() {
                return new o(i.call(setTimeout, r, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new o(i.call(setInterval, r, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(r, this._id)
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
            }, n(42), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n(16))
    }, function(t, e, n) {
        (function(t, e) {
            ! function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, i = 1,
                        o = {},
                        s = !1,
                        a = t.document,
                        c = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    c = c && c.setTimeout ? c : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                        e.nextTick(function() {
                            l(t)
                        })
                    } : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? function() {
                        var e = "setImmediate$" + Math.random() + "$",
                            n = function(n) {
                                n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && l(+n.data.slice(e.length))
                            };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), r = function(n) {
                            t.postMessage(e + n, "*")
                        }
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(t) {
                            l(t.data)
                        }, r = function(e) {
                            t.port2.postMessage(e)
                        }
                    }() : a && "onreadystatechange" in a.createElement("script") ? function() {
                        var t = a.documentElement;
                        r = function(e) {
                            var n = a.createElement("script");
                            n.onreadystatechange = function() {
                                l(e), n.onreadystatechange = null, t.removeChild(n), n = null
                            }, t.appendChild(n)
                        }
                    }() : r = function(t) {
                        setTimeout(l, 0, t)
                    }, c.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var s = {
                            callback: t,
                            args: e
                        };
                        return o[i] = s, r(i), i++
                    }, c.clearImmediate = u
                }

                function u(t) {
                    delete o[t]
                }

                function l(t) {
                    if (s) setTimeout(l, 0, t);
                    else {
                        var e = o[t];
                        if (e) {
                            s = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(n, r)
                                    }
                                }(e)
                            } finally {
                                u(t), s = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n(16), n(43))
    }, function(t, e) {
        var n, r, i = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                r = s
            }
        }();
        var c, u = [],
            l = !1,
            f = -1;

        function d() {
            l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && h())
        }

        function h() {
            if (!l) {
                var t = a(d);
                l = !0;
                for (var e = u.length; e;) {
                    for (c = u, u = []; ++f < e;) c && c[f].run();
                    f = -1, e = u.length
                }
                c = null, l = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function p(t, e) {
            this.fun = t, this.array = e
        }

        function v() {}
        i.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            u.push(new p(t, e)), 1 !== u.length || l || a(h)
        }, p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(t) {
            return []
        }, i.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(20),
                i = n(21);
            e.confirm = function(e) {
                var n = e.buttons && e.buttons[0] ? e.buttons[0] : r.default.apply,
                    o = e.buttons && e.buttons[1] ? e.buttons[1] : r.default.reject,
                    s = i.blockScreen(e.blockerCss);
                return new t(function(t) {
                    var r = document.createElement("div");
                    r.className = "dhx_widget dhx_alert dhx_alert--confirm" + (e.css ? " " + e.css : ""), r.innerHTML = "\n\t\t" + (e.header ? '<div class="dhx_alert__header"> ' + e.header + " </div>" : "") + "\n\t\t" + (e.text ? '<div class="dhx_alert__content">' + e.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (e.buttonsAlignment ? "dhx_alert__footer--" + e.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__confirm-aply dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium">' + n + '</button>\n\t\t\t\t<button class="dhx_alert__confirm-reject dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + o + "</button>\n\t\t\t</div>", document.body.appendChild(r), r.querySelector(".dhx_alert__confirm-reject").focus();
                    var i = function(e) {
                        "BUTTON" === e.target.tagName && function(e) {
                            s(), r.removeEventListener("click", i), document.body.removeChild(r), t(e)
                        }(e.target.classList.contains("dhx_alert__confirm-aply"))
                    };
                    r.addEventListener("click", i)
                })
            }
        }).call(this, n(6))
    }, function(t, e, n) {
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
                n = 3,
                r = 4,
                i = 5,
                o = "undefined" != typeof window,
                s = (o ? window : {}).requestAnimationFrame,
                a = {};

            function c() {}
            var u = Array.isArray;

            function l(t) {
                return null != t
            }

            function f(t) {
                return null != t && t.constructor === Object
            }

            function d(t, e, n, r) {
                t.splice.apply(t, [n, r].concat(e))
            }

            function h(t) {
                var e = typeof t;
                return "string" === e || "number" === e
            }

            function p(t) {
                return "function" == typeof t
            }

            function v(t) {
                for (var e = arguments, n = 1; n < e.length; n++)
                    for (var r in e[n]) t[r] = e[n][r];
                return t
            }

            function g(t, e) {
                for (var n = [], r = e; r < t.length; r++) n.push(t[r]);
                return n
            }

            function y(t, e) {
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }

            function _(t, e) {
                var n = t.length;
                if (e.length !== n) return !1;
                for (var r = 0; r < n; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function m(t) {
                if (!s) return t;
                var e, n, r;

                function i() {
                    e = 0, t.apply(n, r)
                }
                return function() {
                    n = this, r = arguments, e || (e = s(i))
                }
            }

            function x(t) {
                return "o" === t[0] && "n" === t[1]
            }

            function w(t) {
                return "_" === t[0]
            }

            function b(t) {
                return "style" === t
            }

            function D(t) {
                t && t.el && t.el.offsetHeight
            }

            function C(t) {
                return null != t.node && null != t.node.el
            }

            function O(t, e) {
                switch (e) {
                    case "value":
                    case "checked":
                    case "selected":
                        return !0
                }
                return !1
            }

            function M(t) {
                for (t = t || a; null == t.vm && t.parent;) t = t.parent;
                return t.vm
            }

            function I() {}
            var E = I.prototype = {
                constructor: I,
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
                var n = new I;
                return n.type = e, n.body = t, n
            }
            var S = {},
                P = /\[(\w+)(?:=(\w+))?\]/g,
                k = 1,
                j = 2,
                A = 4,
                L = 8;

            function R(e, n, r, i) {
                var o = new I;
                o.type = t, l(i) && (o.flags = i), o.attrs = n;
                var s = function(t) {
                    var e, n, r, i, o = S[t];
                    if (null == o)
                        for (S[t] = o = {
                                tag: (e = t.match(/^[-\w]+/)) ? e[0] : "div",
                                id: (n = t.match(/#([-\w]+)/)) ? n[1] : null,
                                class: (r = t.match(/\.([-\w.]+)/)) ? r[1].replace(/\./g, " ") : null,
                                attrs: null
                            }; i = P.exec(t);) null == o.attrs && (o.attrs = {}), o.attrs[i[1]] = i[2] || "";
                    return o
                }(e);
                if (o.tag = s.tag, s.id || s.class || s.attrs) {
                    var a = o.attrs || {};
                    if (s.id && !l(a.id) && (a.id = s.id), s.class && (o._class = s.class, a.class = s.class + (l(a.class) ? " " + a.class : "")), s.attrs)
                        for (var c in s.attrs) l(a[c]) || (a[c] = s.attrs[c]);
                    o.attrs = a
                }
                var u = o.attrs;
                return l(u) && (l(u._key) && (o.key = u._key), l(u._ref) && (o.ref = u._ref), l(u._hooks) && (o.hooks = u._hooks), l(u._data) && (o.data = u._data), l(u._flags) && (o.flags = u._flags), l(o.key) || (l(o.ref) ? o.key = o.ref : l(u.id) ? o.key = u.id : l(u.name) && (o.key = u.name + ("radio" === u.type || "checkbox" === u.type ? u.value : "")))), null != r && (o.body = r), o
            }

            function N(t, n, o, s) {
                if (t.type !== i && t.type !== r) {
                    t.parent = n, t.idx = o, t.vm = s, null != t.ref && function(t, e, n) {
                        var r = ["refs"].concat(e.split("."));
                        ! function(t, e, n) {
                            for (var r; r = e.shift();) 0 === e.length ? t[r] = n : t[r] = t = t[r] || {}
                        }(t, r, n)
                    }(M(t), t.ref, t);
                    var a = t.hooks,
                        c = s && s.hooks;
                    (a && (a.willRemove || a.didRemove) || c && (c.willUnmount || c.didUnmount)) && function(t) {
                        for (; t = t.parent;) t.flags |= k
                    }(t), u(t.body) && function(t) {
                        for (var n = t.body, r = 0; r < n.length; r++) {
                            var i = n[r];
                            !1 === i || null == i ? n.splice(r--, 1) : u(i) ? d(n, i, r--, 1) : (null == i.type && (n[r] = i = T("" + i)), i.type === e ? null == i.body || "" === i.body ? n.splice(r--, 1) : r > 0 && n[r - 1].type === e ? (n[r - 1].body += i.body, n.splice(r--, 1)) : N(i, t, r, null) : N(i, t, r, null))
                        }
                    }(t)
                }
            }
            var H = {
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

            function V(t, e) {
                return isNaN(e) || H[t] ? e : e + "px"
            }

            function X(t, e) {
                var n = (t.attrs || a).style,
                    r = e ? (e.attrs || a).style : null;
                if (null == n || h(n)) t.el.style.cssText = n;
                else {
                    for (var i in n) {
                        var o = n[i];
                        (null == r || null != o && o !== r[i]) && (t.el.style[i] = V(i, o))
                    }
                    if (r)
                        for (var s in r) null == n[s] && (t.el.style[s] = "")
                }
            }
            var B = [];

            function F(t, e, n, r, i) {
                if (null != t) {
                    var o = n.hooks[e];
                    if (o) {
                        if ("d" !== e[0] || "i" !== e[1] || "d" !== e[2]) return o(n, r);
                        i ? D(n.parent) && o(n, r) : B.push([o, n, r])
                    }
                }
            }

            function W(t) {
                var e;
                if (B.length)
                    for (D(t.node); e = B.shift();) e[0](e[1], e[2])
            }
            var z = o ? document : null;

            function K(t) {
                return t.nextSibling
            }

            function Y(t, e, n) {
                var r = e._node,
                    i = r.vm;
                if (u(r.body))
                    if ((r.flags & k) === k)
                        for (var o = 0; o < r.body.length; o++) Y(e, r.body[o].el);
                    else Z(r);
                delete e._node, t.removeChild(e), F(r.hooks, "didRemove", r, null, n), null != i && (F(i.hooks, "didUnmount", i, i.data, n), i.node = null)
            }

            function G(t, e) {
                var n = e._node;
                if (!n._dead) {
                    var r = function t(e) {
                        var n = e.vm,
                            r = null != n && F(n.hooks, "willUnmount", n, n.data),
                            i = F(e.hooks, "willRemove", e);
                        if ((e.flags & k) === k && u(e.body))
                            for (var o = 0; o < e.body.length; o++) t(e.body[o]);
                        return r || i
                    }(n);
                    null != r && function(t) {
                        return "object" == typeof t && p(t.then)
                    }(r) ? (n._dead = !0, r.then(function(t, e, n) {
                        return function() {
                            return t.apply(n, e)
                        }
                    }(Y, [t, e, !0]))) : Y(t, e)
                }
            }

            function Z(t) {
                for (var e = t.body, n = 0; n < e.length; n++) {
                    var r = e[n];
                    delete r.el._node, null != r.vm && (r.vm.node = null), u(r.body) && Z(r)
                }
            }

            function U(t) {
                var e = t.el;
                if (0 == (t.flags & k)) u(t.body) && Z(t), e.textContent = null;
                else {
                    var n = e.firstChild;
                    do {
                        var r = K(n);
                        G(e, n)
                    } while (n = r)
                }
            }

            function Q(t, e, n) {
                var r = e._node,
                    i = null != e.parentNode,
                    o = e !== n && i ? null : r.vm;
                null != o && F(o.hooks, "willMount", o, o.data), F(r.hooks, i ? "willReinsert" : "willInsert", r), t.insertBefore(e, n), F(r.hooks, i ? "didReinsert" : "didInsert", r), null != o && F(o.hooks, "didMount", o, o.data)
            }

            function J(t, e, n) {
                Q(t, e, n ? K(n) : null)
            }
            var $ = {},
                q = c;

            function tt(t, e, n) {
                t[e] = n
            }

            function et(t, e, n, r, i) {
                var o = t.apply(i, e.concat([n, r, i, i.data]));
                i.onevent(n, r, i, i.data, e), q.call(null, n, r, i, i.data, e), !1 === o && (n.preventDefault(), n.stopPropagation())
            }

            function nt(t) {
                var e, n, r = function(t) {
                        for (; null == t._node;) t = t.parentNode;
                        return t._node
                    }(t.target),
                    i = M(r),
                    o = t.currentTarget._node.attrs["on" + t.type];
                if (u(o)) e = o[0], n = o.slice(1), et(e, n, t, r, i);
                else
                    for (var s in o)
                        if (t.target.matches(s)) {
                            var a = o[s];
                            u(a) ? (e = a[0], n = a.slice(1)) : (e = a, n = []), et(e, n, t, r, i)
                        }
            }

            function rt(t, e, n, r) {
                if (n !== r) {
                    var i = t.el;
                    null == n || p(n) ? tt(i, e, n) : null == r && tt(i, e, nt)
                }
            }

            function it(t, e, n) {
                "." === e[0] && (e = e.substr(1), n = !0), n ? t.el[e] = "" : t.el.removeAttribute(e)
            }

            function ot(t, e, n, r, i) {
                var o = t.el;
                null == n ? !i && it(t, e, !1) : null != t.ns ? o.setAttribute(e, n) : "class" === e ? o.className = n : "id" === e || "boolean" == typeof n || r ? o[e] = n : "." === e[0] ? o[e.substr(1)] = n : o.setAttribute(e, n)
            }

            function st(t, e, n) {
                var r = t.attrs || a,
                    i = e.attrs || a;
                if (r === i);
                else {
                    for (var o in r) {
                        var s = r[o],
                            c = O(t.tag, o),
                            u = c ? t.el[o] : i[o];
                        s === u || (b(o) ? X(t, e) : w(o) || (x(o) ? rt(t, o, s, u) : ot(t, o, s, c, n)))
                    }
                    for (var o in i) !(o in r) && !w(o) && it(t, o, O(t.tag, o) || x(o))
                }
            }

            function at(t, e, n, i) {
                return t.type === r && (e = t.data, n = t.key, i = t.opts, t = t.view), new bt(t, e, n, i)
            }

            function ct(t) {
                for (var e = 0; e < t.body.length; e++) {
                    var o = t.body[e],
                        s = o.type;
                    if (s <= n) Q(t.el, ut(o));
                    else if (s === r) {
                        var a = at(o.view, o.data, o.key, o.opts)._redraw(t, e, !1);
                        s = a.node.type, Q(t.el, ut(a.node))
                    } else if (s === i) {
                        var a = o.vm;
                        a._redraw(t, e), s = a.node.type, Q(t.el, a.node.el)
                    }
                }
            }

            function ut(r, i) {
                return null == r.el && (r.type === t ? (r.el = i || function(t, e) {
                    return null != e ? z.createElementNS(e, t) : z.createElement(t)
                }(r.tag, r.ns), null != r.attrs && st(r, a, !0), (r.flags & L) === L && r.body.body(r), u(r.body) ? ct(r) : null != r.body && "" !== r.body && (r.el.textContent = r.body)) : r.type === e ? r.el = i || function(t) {
                    return z.createTextNode(t)
                }(r.body) : r.type === n && (r.el = i || function(t) {
                    return z.createComment(t)
                }(r.body))), r.el._node = r, r.el
            }
            window.lisMove = ht;
            var lt = 1,
                ft = 2;

            function dt(t, e, n, r, i, o, s, a) {
                return function(c, u, l, f, d, h) {
                    var p, v;
                    if (null != f[r]) {
                        if (null == (p = f[r]._node)) return void(f[r] = t(f[r]));
                        if (function(t) {
                                return t.parent
                            }(p) !== c) return v = t(f[r]), null != p.vm ? p.vm.unmount(!0) : G(u, f[r]), void(f[r] = v)
                    }
                    if (f[i] == d) return ft;
                    if (null == f[i].el) n(u, ut(f[i]), f[r]), f[i] = e(f[i], l);
                    else if (f[i].el === f[r]) f[i] = e(f[i], l), f[r] = t(f[r]);
                    else {
                        if (h || p !== f[s]) return h && null != f[r] ? ht(t, e, n, r, i, u, l, p, f) : lt;
                        v = f[r], f[r] = t(v), a(u, v, f[o]), f[o] = v
                    }
                }
            }

            function ht(t, e, n, r, i, o, s, a, c) {
                if (a._lis) n(o, c[i].el, c[r]), c[i] = e(c[i], s);
                else {
                    var u = function(t, e) {
                        var n, r = 0,
                            i = e.length - 1;
                        if (i <= 2147483647)
                            for (; r <= i;) {
                                if (e[n = r + i >> 1] === t) return n;
                                e[n] < t ? r = n + 1 : i = n - 1
                            } else
                                for (; r <= i;) {
                                    if (n = Math.floor((r + i) / 2), e[n] === t) return n;
                                    e[n] < t ? r = n + 1 : i = n - 1
                                }
                        return r == e.length ? null : r
                    }(a.idx, c.tombs);
                    a._lis = !0;
                    var l = t(c[r]);
                    n(o, c[r], null != u ? s[c.tombs[u]].el : u), null == u ? c.tombs.push(a.idx) : c.tombs.splice(u, 0, a.idx), c[r] = l
                }
            }
            var pt = dt(K, function(t, e) {
                    return e[t.idx + 1]
                }, Q, "lftSib", "lftNode", "rgtSib", "rgtNode", J),
                vt = dt(function(t) {
                    return t.previousSibling
                }, function(t, e) {
                    return e[t.idx - 1]
                }, J, "rgtSib", "rgtNode", "lftSib", "lftNode", Q);

            function gt(t, e, n, r) {
                for (var i = Array.prototype.slice.call(e.childNodes), o = [], s = 0; s < i.length; s++) {
                    var a = i[s]._node;
                    a.parent === t && o.push(a.idx)
                }
                for (var c = function(t) {
                        var e, n, r = t.slice(),
                            i = [];
                        i.push(0);
                        for (var o = 0, s = t.length; o < s; ++o) {
                            var a = i[i.length - 1];
                            if (t[a] < t[o]) r[o] = a, i.push(o);
                            else {
                                for (e = 0, n = i.length - 1; e < n;) {
                                    var c = (e + n) / 2 | 0;
                                    t[i[c]] < t[o] ? e = c + 1 : n = c
                                }
                                t[o] < t[i[e]] && (e > 0 && (r[o] = i[e - 1]), i[e] = o)
                            }
                        }
                        for (e = i.length, n = i[e - 1]; e-- > 0;) i[e] = n, n = r[n];
                        return i
                    }(o).map(function(t) {
                        return o[t]
                    }), u = 0; u < c.length; u++) n[c[u]]._lis = !0;
                for (r.tombs = c;;) {
                    var l = pt(t, e, n, r, null, !0);
                    if (l === ft) break
                }
            }

            function yt(t) {
                return t.el._node.parent !== t.parent
            }

            function _t(t, e, n) {
                return e[n]
            }

            function mt(t, e, n) {
                for (; n < e.length; n++) {
                    var o = e[n];
                    if (null != o.vm) {
                        if (t.type === r && o.vm.view === t.view && o.vm.key === t.key || t.type === i && o.vm === t.vm) return o
                    } else if (!yt(o) && t.tag === o.tag && t.type === o.type && t.key === o.key && (t.flags & ~k) == (o.flags & ~k)) return o
                }
                return null
            }

            function xt(t, e, n) {
                return e[e._keys[t.key]]
            }

            function wt(o, s) {
                F(s.hooks, "willRecycle", s, o);
                var c = o.el = s.el,
                    l = s.body,
                    f = o.body;
                if (c._node = o, o.type !== e || f === l) {
                    null == o.attrs && null == s.attrs || st(o, s, !1);
                    var d = u(l),
                        h = u(f),
                        p = (o.flags & L) === L;
                    d ? h || p ? function(e, o) {
                        var s = e.body,
                            c = s.length,
                            u = o.body,
                            l = u.length,
                            f = (e.flags & L) === L,
                            d = (e.flags & j) === j,
                            h = (e.flags & A) === A,
                            p = !d && e.type === t,
                            v = !0,
                            g = h ? xt : d || f ? _t : mt;
                        if (h) {
                            for (var y = {}, _ = 0; _ < u.length; _++) y[u[_].key] = _;
                            u._keys = y
                        }
                        if (p && 0 === c) return U(o), void(f && (e.body = []));
                        var m, x, w = 0,
                            b = !1,
                            D = 0;
                        if (f) var O = {
                                key: null
                            },
                            M = Array(c);
                        for (var _ = 0; _ < c; _++) {
                            if (f) {
                                var I = !1,
                                    E = null;
                                v && (h && (O.key = s.key(_)), m = g(O, u, D)), null != m ? (x = m.idx, !0 === (E = s.diff(_, m)) ? ((T = m).parent = e, T.idx = _, T._lis = !1) : I = !0) : I = !0, I && (N(T = s.tpl(_), e, _), T._diff = null != E ? E : s.diff(_), null != m && wt(T, m)), M[_] = T
                            } else {
                                var T = s[_],
                                    S = T.type;
                                if (S <= n)(m = v && g(T, u, D)) && (wt(T, m), x = m.idx);
                                else if (S === r) {
                                    if (m = v && g(T, u, D)) {
                                        x = m.idx;
                                        var P = m.vm._update(T.data, e, _)
                                    } else var P = at(T.view, T.data, T.key, T.opts)._redraw(e, _, !1);
                                    S = P.node.type
                                } else if (S === i) {
                                    var k = C(T.vm),
                                        P = T.vm._update(T.data, e, _, k);
                                    S = P.node.type
                                }
                            }
                            if (!h && null != m && (x === D ? ++D === l && c > l && (m = null, v = !1) : b = !0, l > 100 && b && ++w % 10 == 0))
                                for (; D < l && yt(u[D]);) D++
                        }
                        f && (e.body = M), p && function(t, e) {
                            var n = e.body,
                                r = t.el,
                                i = t.body,
                                o = {
                                    lftNode: i[0],
                                    rgtNode: i[i.length - 1],
                                    lftSib: (n[0] || a).el,
                                    rgtSib: (n[n.length - 1] || a).el
                                };
                            t: for (;;) {
                                for (;;) {
                                    var s = pt(t, r, i, o, null, !1);
                                    if (s === lt) break;
                                    if (s === ft) break t
                                }
                                for (;;) {
                                    var c = vt(t, r, i, o, o.lftNode, !1);
                                    if (c === lt) break;
                                    if (c === ft) break t
                                }
                                gt(t, r, i, o);
                                break
                            }
                        }(e, o)
                    }(o, s) : f !== l && (null != f ? c.textContent = f : U(s)) : h ? (U(s), ct(o)) : f !== l && (c.firstChild ? c.firstChild.nodeValue = f : c.textContent = f), F(s.hooks, "didRecycle", s, o)
                } else c.nodeValue = f
            }

            function bt(t, e, n, r) {
                var i = this;
                i.view = t, i.data = e, i.key = n, r && (i.opts = r, i.config(r));
                var o = f(t) ? t : t.call(i, i, e, n, r);
                p(o) ? i.render = o : (i.render = o.render, i.config(o)), i._redrawAsync = m(function(t) {
                    return i.redraw(!0)
                }), i._updateAsync = m(function(t) {
                    return i.update(t, !0)
                }), i.init && i.init.call(i, i, i.data, i.key, r)
            }
            var Dt = bt.prototype = {
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
                    var n = this;
                    return e ? (U({
                        el: t,
                        flags: 0
                    }), n._redraw(null, null, !1), t.nodeName.toLowerCase() !== n.node.tag ? (ut(n.node), Q(t.parentNode, n.node.el, t), t.parentNode.removeChild(t)) : Q(t.parentNode, ut(n.node, t), t)) : (n._redraw(null, null), t && Q(t, n.node.el)), t && W(n), n
                },
                unmount: function(t) {
                    var e = this.node;
                    G(e.el.parentNode, e.el), t || W(this)
                },
                config: function(t) {
                    var e = this;
                    t.init && (e.init = t.init), t.diff && (e.diff = t.diff), t.onevent && (e.onevent = t.onevent), t.hooks && (e.hooks = v(e.hooks || {}, t.hooks)), t.onemit && (e.onemit = v(e.onemit || {}, t.onemit))
                },
                parent: function() {
                    return M(this.node.parent)
                },
                root: function() {
                    for (var t = this.node; t.parent;) t = t.parent;
                    return t.vm
                },
                redraw: function(t) {
                    return t ? this._redraw(null, null, C(this)) : this._redrawAsync(), this
                },
                update: function(t, e) {
                    return e ? this._update(t, null, null, C(this)) : this._updateAsync(t), this
                },
                _update: function(t, e, n, r) {
                    var i = this;
                    return null != t && i.data !== t && (F(i.hooks, "willUpdate", i, t), i.data = t), i._redraw(e, n, r)
                },
                _redraw: function(t, e, n) {
                    var r, i, o = null == t,
                        s = this,
                        a = s.node && s.node.el && s.node.el.parentNode,
                        c = s.node;
                    if (null != s.diff && (r = s._diff, s._diff = i = s.diff(s, s.data), null != c)) {
                        var l = u(r) ? _ : y,
                            f = r === i || l(r, i);
                        if (f) return Ct(s, c, t, e)
                    }
                    a && F(s.hooks, "willRedraw", s, s.data);
                    var d = s.render.call(s, s, s.data, r, i);
                    if (d === c) return Ct(s, c, t, e);
                    if (s.refs = null, null != s.key && d.key !== s.key && (d.key = s.key), s.node = d, t ? (N(d, t, e, s), t.body[e] = d) : c && c.parent ? (N(d, c.parent, c.idx, s), c.parent.body[c.idx] = d) : N(d, null, null, s), !1 !== n)
                        if (c)
                            if (c.tag !== d.tag || c.key !== d.key) {
                                c.vm = d.vm = null;
                                var h = c.el.parentNode,
                                    p = K(c.el);
                                G(h, c.el), Q(h, ut(d), p), c.el = d.el, d.vm = s
                            } else wt(d, c);
                    else ut(d);
                    return a && F(s.hooks, "didRedraw", s, s.data), o && a && W(s), s
                },
                _redrawAsync: null,
                _updateAsync: null
            };

            function Ct(t, e, n, r) {
                return null != n && (n.body[r] = e, e.idx = r, e.parent = n, e._lis = !1), t
            }

            function Ot(t, e, n, r) {
                var i, o;
                return null == n ? f(e) ? i = e : o = e : (i = e, o = n), R(t, i, o, r)
            }
            var Mt = "http://www.w3.org/2000/svg";

            function It(t, e, n, r) {
                this.view = t, this.data = e, this.key = n, this.opts = r
            }

            function Et(t) {
                this.vm = t
            }
            It.prototype = {
                constructor: It,
                type: r,
                view: null,
                data: null,
                key: null,
                opts: null
            }, Et.prototype = {
                constructor: Et,
                type: i,
                vm: null
            };
            var Tt = {
                config: function(t) {
                    q = t.onevent || q, t.onemit && function(t) {
                        v($, t)
                    }(t.onemit)
                },
                ViewModel: bt,
                VNode: I,
                createView: at,
                defineElement: Ot,
                defineSvgElement: function(t, e, n, r) {
                    var i = Ot(t, e, n, r);
                    return i.ns = Mt, i
                },
                defineText: T,
                defineComment: function(t) {
                    var e = new I;
                    return e.type = n, e.body = t, e
                },
                defineView: function(t, e, n, r) {
                    return new It(t, e, n, r)
                },
                injectView: function(t) {
                    return new Et(t)
                },
                injectElement: function(e) {
                    var n = new I;
                    return n.type = t, n.el = n.key = e, n
                },
                lazyList: function(t, e) {
                    var n = t.length,
                        r = {
                            items: t,
                            length: n,
                            key: function(n) {
                                return e.key(t[n], n)
                            },
                            diff: function(n, r) {
                                var i = e.diff(t[n], n);
                                if (null == r) return i;
                                var o = r._diff,
                                    s = i === o || u(o) ? _(i, o) : y(i, o);
                                return s || i
                            },
                            tpl: function(n) {
                                return e.tpl(t[n], n)
                            },
                            map: function(t) {
                                return e.tpl = t, r
                            },
                            body: function(t) {
                                for (var e = Array(n), i = 0; i < n; i++) {
                                    var o = r.tpl(i);
                                    o._diff = r.diff(i), e[i] = o, N(o, t, i)
                                }
                                t.body = e
                            }
                        };
                    return r
                },
                FIXED_BODY: j,
                DEEP_REMOVE: k,
                KEYED_LIST: A,
                LAZY_LIST: L
            };

            function St(t) {
                var e, n, r = arguments,
                    i = r.length;
                if (i > 1) {
                    var o = 1;
                    f(r[1]) && (n = r[1], o = 2), e = i === o + 1 && (h(r[o]) || u(r[o]) || n && (n._flags & L) === L) ? r[o] : g(r, o)
                }
                return R(t, n, e)
            }
            return E.patch = function(t, e) {
                ! function(t, e, n) {
                    if (null != e.type) {
                        if (null != t.vm) return;
                        N(e, t.parent, t.idx, null), t.parent.body[t.idx] = e, wt(e, t), n && D(e), W(M(e))
                    } else {
                        var r = Object.create(t);
                        r.attrs = v({}, t.attrs);
                        var i = v(t.attrs, e);
                        if (null != t._class) {
                            var o = i.class;
                            i.class = null != o && "" !== o ? t._class + " " + o : t._class
                        }
                        st(t, r), n && D(t)
                    }
                }(this, t, e)
            }, Dt.emit = function(t) {
                var e = this,
                    n = e,
                    r = g(arguments, 1).concat(n, n.data);
                do {
                    var i = e.onemit,
                        o = i ? i[t] : null;
                    if (o) {
                        o.apply(e, r);
                        break
                    }
                } while (e = e.parent());
                $[t] && $[t].apply(e, r)
            }, Dt.onemit = null, Dt.body = function() {
                return function t(e, n) {
                    var r = e.body;
                    if (u(r))
                        for (var i = 0; i < r.length; i++) {
                            var o = r[i];
                            null != o.vm ? n.push(o.vm) : t(o, n)
                        }
                    return n
                }(this.node, [])
            }, Tt.defineElementSpread = St, Tt.defineSvgElementSpread = function() {
                var t = St.apply(null, arguments);
                return t.ns = Mt, t
            }, Tt
        }()
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e, n) {
                this._name = t, this._version = e, this._view = n
            }
            return t.prototype.pdf = function(t) {
                this._rawExport(t, "pdf", this._view)
            }, t.prototype.png = function(t) {
                this._rawExport(t, "png", this._view)
            }, t.prototype._rawExport = function(t, e, n) {
                (t = t || {}).url = t.url || "https://export.dhtmlx.ru/" + this._name + "/" + e, t.url += "/" + this._version;
                var r = n.getRootView().node.el.innerHTML,
                    i = document.createElement("form");
                i.style.cssText = "position:absolute; left:-1000px; visibility:hidden;", i.setAttribute("method", "POST"), i.setAttribute("action", t.url), i.innerHTML = "<input type='hidden' name='raw'><input type='hidden' name='config'>", i.childNodes[0].value = r, i.childNodes[1].value = JSON.stringify(t), document.body.appendChild(i), i.submit(), setTimeout(function() {
                    i.parentNode.removeChild(i)
                }, 100)
            }, t
        }();
        e.Exporter = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(22),
            i = ["#FF9800", "#607D8B", "#00C7B5", "#03A9F4", "#9575CD", "#F06292"];
        e.placeOrgonogram = function(t, e) {
            var n = t.getRoots();
            if (1 === n.length) {
                var o = t.getItem(n[0]);
                ! function t(e, n, r, i, o) {
                    var s = n.$kids,
                        a = "vertical" === n.dir,
                        c = a ? r.margin.itemX / 2 : 0,
                        u = 0;
                    if (!1 !== n.open && s) {
                        for (var l = 0, f = 0; f < s.length; f++) {
                            var d = e.getItem(s[f][1]);
                            if (!d.hidden) {
                                var h = t(e, d, r, i + c, c);
                                a ? u = Math.max(u, h) : u += h, l++
                            }
                        }
                        l && !a && (u += (l - 1) * r.margin.itemX), n.$count = l
                    }
                    if (u = Math.max(n.width, u), a) n.x = i;
                    else {
                        var p = r.gridStep || 1,
                            v = (u - n.width) / 2 + i;
                        n.x = Math.ceil(v / p) * p
                    }
                    return n.y = 0, n.$width = u, u + o
                }(t, o, e, 0, 0),
                function t(e, n, o, s, a, c) {
                    var u = n.$kids,
                        l = "vertical" === n.dir,
                        f = 0;
                    if (n.x += o, n.y += s, a.gridStep && (n.y = Math.ceil(n.y / a.gridStep) * a.gridStep), s += n.height + a.margin.itemY, !1 !== n.open && u)
                        for (var d = void 0, h = 0; h < u.length; h++)
                            if (!(d = e.getItem(u[h][1])).hidden) {
                                var p = t(e, d, o, s, a, c + 1);
                                l ? (s += p + a.margin.itemY, f += p + a.margin.itemY) : (f = Math.max(f, p + a.margin.itemY), o += d.$width + a.margin.itemX), r.directLinkPath(e.getItem(u[h][0]), n, d, a)
                            }
                    if (u) {
                        var v = e.getItem(u[0][1]).color;
                        n.$expandColor = v || i[(c + 1) % i.length]
                    }
                    return n.color = n.color || i[c % i.length], n.height + f
                }(t, o, 0, 0, e, 0)
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(5),
            i = n(8),
            o = function() {
                function t(t, e, n) {
                    var o = this;
                    this.events = n || new r.EventSystem, this._data = e, this._data.events.on(i.DataEvents.removeAll, function() {
                        o._selected = null
                    }), this._data.events.on(i.DataEvents.change, function() {
                        if (o._selected) {
                            var t = o._data.getNearId(o._selected);
                            if (t !== o._selected) {
                                var e = o._data.getItem(o._selected);
                                e && (e.$selected = !1), o._selected = null, t && o.add(t)
                            }
                        }
                    })
                }
                return t.prototype.getId = function() {
                    return this._selected
                }, t.prototype.getItem = function() {
                    return this._selected ? this._data.getItem(this._selected) : null
                }, t.prototype.remove = function(t) {
                    return !(t = t || this._selected) || !!this.events.fire(i.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, {
                        $selected: !1
                    }, !0), this._selected = null, this.events.fire(i.SelectionEvents.afterUnSelect, [t]), !0)
                }, t.prototype.add = function(t) {
                    this._selected !== t && (this.remove(), this.events.fire(i.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t, {
                        $selected: !0
                    }, !0), this.events.fire(i.SelectionEvents.afterSelect, [t])))
                }, t
            }();
        e.Selection = o
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(4),
                i = n(3),
                o = function() {
                    function e(t, e) {
                        this._parent = t, this._changes = e
                    }
                    return e.prototype.load = function(t, e) {
                        var n = this;
                        return this._parent.loadData = t.load().then(function(t) {
                            return n._parent.removeAll(), n.parse(t, e)
                        }).catch(function(t) {
                            n._parent.events.fire(i.DataEvents.loadError, [t])
                        })
                    }, e.prototype.parse = function(t, e) {
                        return void 0 === e && (e = "json"), "json" !== e || r.hasJsonOrArrayStructure(t) || this._parent.events.fire(i.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]), t = (e = r.toDataDriver(e)).toJsonArray(t), this._parent.$parse(t), t
                    }, e.prototype.save = function(e) {
                        for (var n = this, i = function(i) {
                                if (i.saving || i.pending) r.dhxWarning("item is saving");
                                else {
                                    var s = o._findPrevState(i.id);
                                    if (s && s.saving) {
                                        var a = new t(function(t, o) {
                                            s.promise.then(function() {
                                                i.pending = !1, t(n._setPromise(i, e))
                                            }).catch(function(t) {
                                                n._removeFromOrder(s), n._setPromise(i, e), r.dhxWarning(t), o(t)
                                            })
                                        });
                                        o._addToChain(a), i.pending = !0
                                    } else o._setPromise(i, e)
                                }
                            }, o = this, s = 0, a = this._changes.order; s < a.length; s++) {
                            i(a[s])
                        }
                        this._parent.saveData.then(function() {
                            n._saving = !1
                        })
                    }, e.prototype._setPromise = function(t, e) {
                        var n = this;
                        return t.promise = e.save(t.obj, t.status), t.promise.then(function() {
                            n._removeFromOrder(t)
                        }).catch(function(e) {
                            t.saving = !1, t.error = !0, r.dhxError(e)
                        }), t.saving = !0, this._saving = !0, this._addToChain(t.promise), t.promise
                    }, e.prototype._addToChain = function(t) {
                        this._parent.saveData && this._saving ? this._parent.saveData = this._parent.saveData.then(function() {
                            return t
                        }) : this._parent.saveData = t
                    }, e.prototype._findPrevState = function(t) {
                        for (var e = 0, n = this._changes.order; e < n.length; e++) {
                            var r = n[e];
                            if (r.id === t) return r
                        }
                        return null
                    }, e.prototype._removeFromOrder = function(t) {
                        this._changes.order = this._changes.order.filter(function(e) {
                            return !r.isEqualObj(e, t)
                        })
                    }, e
                }();
            e.Loader = o
        }).call(this, n(6))
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(51);
        var i = function() {
            function t() {}
            return t.prototype.toJsonArray = function(t) {
                return this.getRows(t)
            }, t.prototype.toJsonObject = function(t) {
                var e;
                return "string" == typeof t && (e = this._fromString(t)),
                    function t(e, n) {
                        n = n || {};
                        var r = e.attributes;
                        if (r && r.length)
                            for (var i = 0; i < r.length; i++) n[r[i].name] = r[i].value;
                        var o = e.childNodes;
                        for (i = 0; i < o.length; i++)
                            if (1 === o[i].nodeType) {
                                var s = o[i].tagName;
                                n[s] ? ("function" != typeof n[s].push && (n[s] = [n[s]]), n[s].push(t(o[i], {}))) : n[s] = t(o[i], {})
                            }
                        return n
                    }(e)
            }, t.prototype.serialize = function(t) {
                return r.jsonToXML(t)
            }, t.prototype.getFields = function(t) {
                return t
            }, t.prototype.getRows = function(t) {
                if ("string" == typeof t && (t = this._fromString(t)), t) {
                    var e = t.childNodes && t.childNodes[0] && t.childNodes[0].childNodes;
                    return e && e.length ? this._getRows(e) : null
                }
                return []
            }, t.prototype._getRows = function(t) {
                for (var e = [], n = 0; n < t.length; n++) "item" === t[n].tagName && e.push(this._nodeToJS(t[n]));
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
                    for (var n = t.attributes, r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = i.name,
                            s = i.value;
                        e[o] = this._toType(s)
                    }
                if (3 === t.nodeType) return e.value = e.value || this._toType(t.textContent), e;
                var a = t.childNodes;
                if (a)
                    for (r = 0; r < a.length; r++) {
                        var c = a[r],
                            u = c.tagName;
                        u && ("items" === u && c.childNodes ? e[u] = this._getRows(c.childNodes) : this._haveAttrs(c) ? e[u] = this._nodeToJS(c) : e[u] = this._toType(c.textContent))
                    }
                return e
            }, t.prototype._toType = function(t) {
                return "false" === t || "true" === t ? "true" === t : isNaN(t) ? t : Number(t)
            }, t.prototype._haveAttrs = function(t) {
                return t.attributes && t.attributes.length
            }, t
        }();
        e.XMLDriver = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = 4;

        function i(t) {
            return " ".repeat(t)
        }

        function o(t, e) {
            void 0 === e && (e = r);
            var n = i(e) + "<item>\n";
            for (var s in t) Array.isArray(t[s]) ? (n += i(e + r) + "<" + s + ">\n", n += t[s].map(function(t) {
                return o(t, e + 2 * r)
            }).join("\n") + "\n", n += i(e + r) + "</" + s + ">\n") : n += i(e + r) + "<" + s + ">" + t[s] + "</" + s + ">\n";
            return n += i(e) + "</item>"
        }
        e.jsonToXML = function(t, e) {
            void 0 === e && (e = "root");
            for (var n = '<?xml version="1.0" encoding="iso-8859-1"?>\n<' + e + ">", r = 0; r < t.length; r++) n += "\n" + o(t[r]);
            return n + "\n</" + e + ">"
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(4),
            i = function() {
                function t() {}
                return t.prototype.sort = function(t, e) {
                    var n = this;
                    e.rule && "function" == typeof e.rule ? this._sort(t, e) : e.by && (e.rule = function(t, i) {
                        var o = n._checkVal(e.as, t[e.by]),
                            s = n._checkVal(e.as, i[e.by]);
                        return r.naturalCompare(o.toString(), s.toString())
                    }, this._sort(t, e))
                }, t.prototype._checkVal = function(t, e) {
                    return t ? t.call(this, e) : e
                }, t.prototype._sort = function(t, e) {
                    var n = this,
                        r = {
                            asc: 1,
                            desc: -1
                        };
                    return t.sort(function(t, i) {
                        return e.rule.call(n, t, i) * (r[e.dir] || r.asc)
                    })
                }, t
            }();
        e.Sort = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            o = n(24),
            s = n(12),
            a = n(4),
            c = n(3);

        function u(t, e, n, r) {
            void 0 !== r && -1 !== r && t[n] && t[n][r] ? t[n].splice(r, 0, e) : (t[n] || (t[n] = []), t[n].push(e))
        }
        var l = function(t) {
            function e(e, n) {
                var r, o = t.call(this, e, n) || this,
                    s = o._root = "_ROOT_" + i.uid();
                return o._childs = ((r = {})[s] = [], r), o._initChilds = null, o
            }
            return r(e, t), e.prototype.add = function(e, n, r) {
                var i = this;
                if (void 0 === n && (n = -1), void 0 === r && (r = this._root), "object" != typeof e && (e = {
                        value: e
                    }), Array.isArray(e)) return e.map(function(e, o) {
                    o > 0 && -1 !== n && (n += 1), e.parent = e.parent ? e.parent.toString() : r;
                    var s = t.prototype.add.call(i, e, n);
                    if (Array.isArray(e.items))
                        for (var a = 0, c = e.items; a < c.length; a++) {
                            var u = c[a];
                            i.add(u, -1, e.id)
                        }
                    return s
                });
                e.parent = e.parent ? e.parent.toString() : r;
                var o = t.prototype.add.call(this, e, n);
                if (Array.isArray(e.items))
                    for (var s = 0, a = e.items; s < a.length; s++) {
                        var c = a[s];
                        this.add(c, -1, e.id)
                    }
                return o
            }, e.prototype.getRoot = function() {
                return this._root
            }, e.prototype.getParent = function(t, e) {
                if (void 0 === e && (e = !1), !this._pull[t]) return null;
                var n = this._pull[t].parent;
                return e ? this._pull[n] : n
            }, e.prototype.getItems = function(t) {
                return this._childs && this._childs[t] ? this._childs[t] : []
            }, e.prototype.getLength = function(t) {
                return void 0 === t && (t = this._root), this._childs[t] ? this._childs[t].length : null
            }, e.prototype.removeAll = function(e) {
                var n;
                if (e)
                    for (var r = 0, i = this._childs[e].slice(); r < i.length; r++) {
                        var o = i[r];
                        this.remove(o.id)
                    } else {
                        t.prototype.removeAll.call(this);
                        var s = this._root;
                        this._initChilds = null, this._childs = ((n = {})[s] = [], n)
                    }
            }, e.prototype.getIndex = function(t) {
                var e = this.getParent(t);
                return e && this._childs[e] ? i.findIndex(this._childs[e], function(e) {
                    return e.id === t
                }) : -1
            }, e.prototype.sort = function(t) {
                var e = this;
                if (t) {
                    for (var n in this._childs) this._sort.sort(this._childs[n], t);
                    if (this._initChilds && Object.keys(this._initChilds).length)
                        for (var n in this._initChilds) this._sort.sort(this._initChilds[n], t)
                } else if (this._childs = {}, this._parse_data(Object.keys(this._pull).map(function(t) {
                        return e._pull[t]
                    })), this._filters)
                    for (var n in this._filters) {
                        var r = this._filters[n];
                        this.filter(r.rule, r.config)
                    }
                this.events.fire(c.DataEvents.change)
            }, e.prototype.map = function(t, e, n) {
                void 0 === e && (e = this._root), void 0 === n && (n = !0);
                var r = [];
                if (!this.haveItems(e)) return r;
                for (var i = 0; i < this._childs[e].length; i++)
                    if (r.push(t.call(this, this._childs[e][i], i)), n) {
                        var o = this.map(t, this._childs[e][i].id, n);
                        r = r.concat(o)
                    }
                return r
            }, e.prototype.filter = function(t, e) {
                var n = this;
                if (void 0 === e && (e = {}), t) {
                    this._initChilds || (this._initChilds = this._childs), e.type = e.type || c.TreeFilterType.all, this._filters = {}, this._filters._ = {
                        rule: t,
                        config: e
                    };
                    var r = {};
                    this._recursiveFilter(t, e, this._root, 0, r), Object.keys(r).forEach(function(t) {
                        for (var e = n.getParent(t), i = n.getItem(t); e;) r[e] || (r[e] = []), i && !r[e].find(function(t) {
                            return t.id === i.id
                        }) && r[e].push(i), i = n.getItem(e), e = n.getParent(e)
                    }), this._childs = r, this.events.fire(c.DataEvents.change)
                } else this.restoreOrder()
            }, e.prototype.restoreOrder = function() {
                this._initChilds && (this._childs = this._initChilds, this._initChilds = null), this.events.fire(c.DataEvents.change)
            }, e.prototype.copy = function(t, e, n, r) {
                var o = this;
                if (void 0 === n && (n = this), void 0 === r && (r = this._root), t instanceof Array) return t.map(function(t, s) {
                    if (!o.exists(t)) return null;
                    var c = o._childs[t],
                        u = -1 === e ? -1 : e + s;
                    if (n === o && !o.canCopy(t, r)) return null;
                    var l = a.copyWithoutInner(o.getItem(t), {
                        items: !0
                    });
                    if (n.exists(t) && (l.id = i.uid()), a.isTreeCollection(n)) {
                        if (o.exists(t) && (l.parent = r, n !== o && r === o._root && (l.parent = n.getRoot()), n.add(l, u), t = l.id), c)
                            for (var f = 0, d = c; f < d.length; f++) {
                                var h = d[f].id,
                                    p = o.getIndex(h);
                                "string" == typeof t && o.copy(h, p, n, t)
                            }
                        return t
                    }
                    n.add(l, u)
                });
                if (!this.exists(t)) return null;
                var s = this._childs[t];
                if (n === this && !this.canCopy(t, r)) return null;
                var c = a.copyWithoutInner(this.getItem(t), {
                    items: !0
                });
                if (n.exists(t) && (c.id = i.uid()), a.isTreeCollection(n)) {
                    if (this.exists(t) && (c.parent = r, n !== this && r === this._root && (c.parent = n.getRoot()), n.add(c, e), t = c.id), s)
                        for (var u = 0, l = s; u < l.length; u++) {
                            var f = l[u].id,
                                d = this.getIndex(f);
                            "string" == typeof t && this.copy(f, d, n, t)
                        }
                    return t
                }
                n.add(c, e)
            }, e.prototype.move = function(t, e, n, r) {
                var i = this;
                if (void 0 === n && (n = this), void 0 === r && (r = this._root), t instanceof Array) return t.map(function(t, o) {
                    if (!i.exists(t)) return null;
                    var s = -1 === e ? -1 : e + o;
                    if (n !== i) {
                        if (!a.isTreeCollection(n)) return n.add(a.copyWithoutInner(i.getItem(t)), s), void i.remove(t);
                        var u = i.copy(t, s, n, r);
                        return i.remove(t), u
                    }
                    if (!i.canCopy(t, r)) return null;
                    var l = i.getParent(t),
                        f = i.getIndex(t),
                        d = i._childs[l].splice(f, 1)[0];
                    return d.parent = r, i._childs[l].length || delete i._childs[l], i.haveItems(r) || (i._childs[r] = []), -1 === s ? s = i._childs[r].push(d) : i._childs[r].splice(s, 0, d), i.events.fire(c.DataEvents.change), t
                });
                if (!this.exists(t)) return null;
                if (n !== this) {
                    if (!a.isTreeCollection(n)) return n.add(a.copyWithoutInner(this.getItem(t)), e), void this.remove(t);
                    var o = this.copy(t, e, n, r);
                    return this.remove(t), o
                }
                if (!this.canCopy(t, r)) return null;
                var s = this.getParent(t),
                    u = this.getIndex(t),
                    l = this._childs[s].splice(u, 1)[0];
                return l.parent = r, this._childs[s].length || delete this._childs[s], this.haveItems(r) || (this._childs[r] = []), -1 === e ? e = this._childs[r].push(l) : this._childs[r].splice(e, 0, l), this.events.fire(c.DataEvents.change), t
            }, e.prototype.eachChild = function(t, e, n, r) {
                if (void 0 === n && (n = !0), void 0 === r && (r = function() {
                        return !0
                    }), this.haveItems(t))
                    for (var i = 0; i < this._childs[t].length; i++) e.call(this, this._childs[t][i], i), n && r(this._childs[t][i]) && this.eachChild(this._childs[t][i].id, e, n, r)
            }, e.prototype.getNearId = function(t) {
                return t
            }, e.prototype.loadItems = function(t, e) {
                var n = this;
                void 0 === e && (e = "json");
                var r = this.config.autoload + "?id=" + t;
                new s.DataProxy(r).load().then(function(r) {
                    r = (e = a.toDataDriver(e)).toJsonArray(r), n._parse_data(r, t), n.events.fire(c.DataEvents.change)
                })
            }, e.prototype.refreshItems = function(t, e) {
                void 0 === e && (e = "json"), this.removeAll(t), this.loadItems(t, e)
            }, e.prototype.eachParent = function(t, e, n) {
                void 0 === n && (n = !1);
                var r = this.getItem(t);
                if (r && (n && e.call(this, r), r.parent !== this._root)) {
                    var i = this.getItem(r.parent);
                    e.call(this, i), this.eachParent(r.parent, e)
                }
            }, e.prototype.haveItems = function(t) {
                return t in this._childs
            }, e.prototype.canCopy = function(t, e) {
                if (t === e) return !1;
                var n = !0;
                return this.eachParent(e, function(e) {
                    return e.id === t ? n = !1 : null
                }), n
            }, e.prototype.serialize = function(t, e) {
                void 0 === t && (t = c.DataDriver.json);
                var n = this._serialize(this._root, e),
                    r = a.toDataDriver(t);
                if (r) return r.serialize(n)
            }, e.prototype.getId = function(t, e) {
                if (void 0 === e && (e = this._root), this._childs[e] && this._childs[e][t]) return this._childs[e][t].id
            }, e.prototype._removeAll = function(e) {
                var n;
                if (e)
                    for (var r = 0, i = this._childs[e].slice(); r < i.length; r++) {
                        var o = i[r];
                        this.remove(o.id)
                    } else {
                        t.prototype._removeAll.call(this);
                        var s = this._root;
                        this._initChilds = null, this._childs = ((n = {})[s] = [], n)
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
            }, e.prototype._addToOrder = function(t, e, n) {
                var r = this._childs,
                    i = this._initChilds,
                    o = e.parent;
                this._pull[e.id] = e, u(r, e, o, n), i && u(i, e, o, n)
            }, e.prototype._parse_data = function(t, e) {
                void 0 === e && (e = this._root);
                for (var n = 0, r = t; n < r.length; n++) {
                    var o = r[n];
                    this.config.init && (o = this.config.init(o)), "object" != typeof o && (o = {
                        value: o
                    }), o.id = o.id ? o.id.toString() : i.uid(), o.parent = o.parent ? o.parent.toString() : e, this._pull[o.id] = o, this._childs[o.parent] || (this._childs[o.parent] = []), this._childs[o.parent].push(o), o.items && o.items instanceof Object && this._parse_data(o.items, o.id)
                }
            }, e.prototype._fastDeleteChilds = function(t, e) {
                if (this._pull[e] && delete this._pull[e], t[e]) {
                    for (var n = 0; n < t[e].length; n++) this._fastDeleteChilds(t, t[e][n].id);
                    delete t[e]
                }
            }, e.prototype._recursiveFilter = function(t, e, n, r, i) {
                var o = this,
                    s = this._childs[n];
                if (s) {
                    var a = function(t) {
                        switch (e.type) {
                            case c.TreeFilterType.all:
                                return !0;
                            case c.TreeFilterType.level:
                                return r === e.level;
                            case c.TreeFilterType.leafs:
                                return !o.haveItems(t.id)
                        }
                    };
                    if ("function" == typeof t) {
                        var u = function(e) {
                            return a(e) && t(e)
                        };
                        (l = s.filter(u)).length && (i[n] = l)
                    } else if (t.by && t.match) {
                        var l;
                        u = function(e) {
                            return a(e) && -1 !== e[t.by].toString().toLowerCase().indexOf(t.match.toString().toLowerCase())
                        };
                        (l = s.filter(u)).length && (i[n] = l)
                    }
                    for (var f = 0, d = s; f < d.length; f++) {
                        var h = d[f];
                        this._recursiveFilter(t, e, h.id, r + 1, i)
                    }
                }
            }, e.prototype._serialize = function(t, e) {
                var n = this;
                return void 0 === t && (t = this._root), this.map(function(t) {
                    var r = {};
                    for (var i in t) "parent" !== i && "items" !== i && (r[i] = t[i]);
                    return e && (r = e(r)), n.haveItems(t.id) && (r.items = n._serialize(t.id, e)), r
                }, t, !1)
            }, e
        }(o.DataCollection);
        e.TreeCollection = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(1),
            i = n(55),
            o = n(3),
            s = n(4);
        var a = function() {
                function t() {
                    var t = this;
                    this._transferData = {}, this._canMove = !0, this._selectedIds = [], this._onMouseMove = function(e) {
                        if (t._transferData.id) {
                            var n = e.pageX,
                                r = e.pageY;
                            if (!t._transferData.ghost) {
                                if (Math.abs(t._transferData.x - n) < 3 && Math.abs(t._transferData.y - r) < 3) return;
                                var i = t._onDragStart(t._transferData.id, t._transferData.targetId);
                                if (!i) return void t._endDrop();
                                t._transferData.ghost = i, document.body.appendChild(t._transferData.ghost)
                            }
                            t._moveGhost(n, r), t._onDrag(e)
                        }
                    }, this._onMouseUp = function() {
                        t._transferData.x && (t._transferData.ghost ? (t._removeGhost(), t._onDrop()) : t._endDrop(), document.removeEventListener("mousemove", t._onMouseMove), document.removeEventListener("mouseup", t._onMouseUp))
                    }
                }
                return t.prototype.setItem = function(t, e) {
                    i.collectionStore.setItem(t, e)
                }, t.prototype.onMouseDown = function(t, e, n) {
                    if (1 === t.which) {
                        t.preventDefault(), document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onMouseUp);
                        var i = r.locateNode(t, "dhx_id"),
                            o = i && i.getAttribute("dhx_id"),
                            s = r.locate(t, "dhx_widget_id");
                        if (e && -1 !== e.indexOf(o) && e.length > 1 ? (this._selectedIds = e, this._itemsForGhost = n) : (this._selectedIds = [], this._itemsForGhost = null), o && s) {
                            var a = r.getBox(i),
                                c = a.left,
                                u = a.top;
                            this._transferData.initXOffset = t.pageX - c, this._transferData.initYOffset = t.pageY - u, this._transferData.x = t.pageX, this._transferData.y = t.pageY, this._transferData.targetId = s, this._transferData.id = o, this._transferData.item = i
                        }
                    }
                }, t.prototype._moveGhost = function(t, e) {
                    this._transferData.ghost && (this._transferData.ghost.style.left = t - this._transferData.initXOffset + "px", this._transferData.ghost.style.top = e - this._transferData.initYOffset + "px")
                }, t.prototype._removeGhost = function() {
                    document.body.removeChild(this._transferData.ghost)
                }, t.prototype._onDrop = function() {
                    if (this._canMove) {
                        var t = i.collectionStore.getItem(this._lastCollectionId),
                            e = t && t.config;
                        if (t && e.dragMode !== o.DragMode.source) {
                            if (t.events.fire(o.DragEvents.beforeDrop, [this._lastId, this._transferData.target])) {
                                var n = {
                                        id: this._lastId,
                                        target: t
                                    },
                                    r = {
                                        id: this._transferData.id,
                                        target: this._transferData.target
                                    };
                                this._move(r, n), n.target.events.fire(o.DragEvents.dropComplete, [n.id, this._transferData.dropPosition])
                            }
                            this._endDrop()
                        } else this._endDrop()
                    } else this._endDrop()
                }, t.prototype._onDragStart = function(t, e) {
                    var n = i.collectionStore.getItem(e),
                        r = n.config;
                    if (r.dragMode === o.DragMode.target) return null;
                    var s = n.data.getItem(t),
                        a = function(t, e) {
                            var n = t.getBoundingClientRect(),
                                r = document.createElement("div"),
                                i = t.cloneNode(!0);
                            return i.style.width = n.width + "px", i.style.height = n.height + "px", i.style.maxHeight = n.height + "px", i.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, i.style.opacity = "0.8", i.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, r.appendChild(i), e && e.length && e.forEach(function(t, e) {
                                var i = t.cloneNode(!0);
                                i.style.width = n.width + "px", i.style.height = n.height + "px", i.style.maxHeight = n.height + "px", i.style.top = 12 * (e + 1) - n.height - n.height * e + "px", i.style.left = 12 * (e + 1) + "px", i.style.opacity = "0.6", i.style.zIndex = "" + (-e - 1), r.appendChild(i)
                            }), r.className = "dhx_drag-ghost", r
                        }(this._transferData.item, this._itemsForGhost);
                    return n.events.fire(o.DragEvents.beforeDrag, [s, a]) && t ? (n.events.fire(o.DragEvents.dragStart, [t, this._selectedIds]), this._toggleTextSelection(!0), this._transferData.target = n, this._transferData.dragConfig = r, a) : null
                }, t.prototype._onDrag = function(t) {
                    var e = t.clientX,
                        n = t.clientY,
                        a = document.elementFromPoint(e, n),
                        c = r.locate(a, "dhx_widget_id");
                    if (c) {
                        var u = i.collectionStore.getItem(c),
                            l = r.locate(a, "dhx_id");
                        if (!l) return this._cancelCanDrop(), this._lastCollectionId = c, this._lastId = null, void this._canDrop();
                        if (u.config.dropBehaviour === o.DropBehaviour.complex) {
                            var f = function(t) {
                                var e = t.clientY,
                                    n = r.locateNode(t);
                                if (!n) return null;
                                var i = n.childNodes[0].getBoundingClientRect();
                                return (e - i.top) / i.height
                            }(t);
                            this._transferData.dropPosition = f <= .25 ? o.DropPosition.top : f >= .75 ? o.DropPosition.bot : o.DropPosition.in
                        } else if (this._lastId === l && this._lastCollectionId === c) return;
                        var d = {
                            id: this._transferData.id,
                            target: this._transferData.target
                        };
                        if ("source" !== u.config.dragMode)
                            if (d.target.events.fire(o.DragEvents.dragOut, [l, u]), c !== this._transferData.targetId || !s.isTreeCollection(d.target.data) || s.isTreeCollection(d.target.data) && d.target.data.canCopy(d.id, l)) this._cancelCanDrop(), this._lastId = l, this._lastCollectionId = c, d.target.events.fire(o.DragEvents.dragIn, [l, this._transferData.dropPosition, i.collectionStore.getItem(c)]) && this._canDrop();
                            else this._cancelCanDrop()
                    } else this._canMove && this._cancelCanDrop()
                }, t.prototype._move = function(t, e) {
                    var n = t.target.data,
                        r = e.target.data,
                        i = 0,
                        a = e.id;
                    switch (s.isTreeCollection(r) ? e.target.config.dropBehaviour : void 0) {
                        case o.DropBehaviour.child:
                            break;
                        case o.DropBehaviour.sibling:
                            a = r.getParent(a), i = r.getIndex(e.id) + 1;
                            break;
                        case o.DropBehaviour.complex:
                            var c = this._transferData.dropPosition;
                            c === o.DropPosition.top ? (a = r.getParent(a), i = r.getIndex(e.id)) : c === o.DropPosition.bot && (a = r.getParent(a), i = r.getIndex(e.id) + 1);
                            break;
                        default:
                            i = e.id ? t.target === e.target && r.getIndex(t.id) < r.getIndex(e.id) ? r.getIndex(e.id) - 1 : r.getIndex(e.id) : -1
                    }
                    this._transferData.dragConfig.dragCopy ? this._selectedIds instanceof Array && this._selectedIds.length > 1 ? this._selectedIds.map(function(t) {
                        n.copy(t, i, r, a), i > -1 && i++
                    }) : n.copy(t.id, i, r, a) : this._selectedIds instanceof Array && this._selectedIds.length > 1 ? this._selectedIds.map(function(t) {
                        n.move(t, i, r, a), i > -1 && i++
                    }) : n.move(t.id, i, r, a)
                }, t.prototype._endDrop = function() {
                    this._toggleTextSelection(!1), this._transferData.target && this._transferData.target.events.fire(o.DragEvents.dragEnd, [this._transferData.id, this._selectedIds]), this._cancelCanDrop(), this._canMove = !0, this._transferData = {}, this._lastId = null, this._lastCollectionId = null
                }, t.prototype._cancelCanDrop = function() {
                    this._canMove = !1;
                    var t = i.collectionStore.getItem(this._lastCollectionId);
                    t && this._lastId && t.events.fire(o.DragEvents.cancelDrop, [this._lastId]), this._lastCollectionId = null, this._lastId = null
                }, t.prototype._canDrop = function() {
                    this._canMove = !0;
                    var t = i.collectionStore.getItem(this._lastCollectionId);
                    t && this._lastId && t.events.fire(o.DragEvents.canDrop, [this._lastId, this._transferData.dropPosition])
                }, t.prototype._toggleTextSelection = function(t) {
                    t ? document.body.classList.add("dhx_no-select") : document.body.classList.remove("dhx_no-select")
                }, t
            }(),
            c = window.dhxHelpers = window.dhxHelpers || {};
        c.dragManager = c.dragManager || new a, e.dragManager = c.dragManager
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t() {
                    this._store = {}
                }
                return t.prototype.setItem = function(t, e) {
                    this._store[t] = e
                }, t.prototype.getItem = function(t) {
                    return this._store[t] ? this._store[t] : null
                }, t
            }(),
            i = window.dhxHelpers = window.dhxHelpers || {};
        i.collectionStore = i.collectionStore || new r, e.collectionStore = i.collectionStore
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(5),
            i = n(23),
            o = n(3),
            s = function() {
                function t(t, e, n) {
                    var i = this;
                    this.events = n || new r.EventSystem(this), this._data = e, this._data.events.on(o.DataEvents.removeAll, function() {
                        i._selected = null
                    }), this._data.events.on(o.DataEvents.change, function() {
                        if (i._selected) {
                            var t = i._data.getNearId(i._selected);
                            t !== i._selected && (i._selected = null, t && i.add(t))
                        }
                    })
                }
                return t.prototype.getId = function() {
                    return this._selected
                }, t.prototype.getItem = function() {
                    return this._selected ? this._data.getItem(this._selected) : null
                }, t.prototype.remove = function(t) {
                    return !(t = t || this._selected) || !!this.events.fire(i.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, {
                        $selected: !1
                    }), this._selected = null, this.events.fire(i.SelectionEvents.afterUnSelect, [t]), !0)
                }, t.prototype.add = function(t) {
                    this._selected !== t && (this.remove(), this.events.fire(i.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t, {
                        $selected: !0
                    }), this.events.fire(i.SelectionEvents.afterSelect, [t])))
                }, t
            }();
        e.Selection = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            i = this && this.__assign || function() {
                return (i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r(e, t), e.prototype.isConnector = function() {
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
                    return this.id = this.config.id, o.sv("g", {
                        dhx_id: this.config.id || "",
                        _key: this.config.id,
                        class: "dhx_diagram_connector " + this.getCss()
                    }, [o.sv("path", {
                        d: this._getPoints(),
                        fill: "none",
                        class: "dhx_diagram_line " + (t ? "dhx_diagram_line--selected" : ""),
                        // "stroke-dasharray": this._getType(),
                        "stroke-linejoin": "round",
                        stroke: this.config.stroke,
                        "stroke-width": this.config.strokeWidth
                    })].concat(this._getArrowLine()))
                }, e.prototype.getBox = function() {
                    var t = i({}, this.config),
                        e = t.points.reduce(function(t, e) {
                            return t.x = Math.max(t.x, e.x), t.y = Math.max(t.y, e.y), t
                        }, {
                            x: 0,
                            y: 0
                        }),
                        n = e.x - t.x,
                        r = e.y - t.y,
                        o = t.x,
                        s = o + n,
                        a = t.y;
                    return {
                        left: o,
                        right: s,
                        top: a,
                        bottom: a + r
                    }
                }, e.prototype._getType = function() {
                    if (this.config.strokeType && (this.config.type = this.config.strokeType), this.config.type) switch (this.config.type) {
                        case "line":
                            return "";
                        case "dash12":
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
                        n = this.config.forwardArrow;
                    if (e || n) return [e ? this._arrow(t[1], t[0]) : null, n ? this._arrow(t[t.length - 2], t[t.length - 1]) : null]
                }, e.prototype._arrow = function(t, e) {
                    var n = t.x !== e.x,
                        r = (n ? t.x < e.x : t.y < e.y) ? 1 : -1,
                        i = e.x - (n ? r : 0),
                        s = e.y - (n ? 0 : r),
                        a = e.x - (n ? 7 * r : 5 * r),
                        c = e.y - (n ? 5 : 7 * r),
                        u = e.x + (n ? -7 * r : 5 * r),
                        l = e.y - (n ? -5 : 7 * r);
                    return o.sv("path", {
                        d: "M" + a + "," + c + " L" + i + "," + s + " L" + u + "," + l + " Z",
                        class: "dhx_diagram__arrow",
                        "shape-rendering": "auto",
                        stroke: this.config.stroke,
                        fill: this.config.stroke
                    })
                }, e
            }(n(7).BaseShape);
        e.Line = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype.getMetaInfo = function() {
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
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_image " + t.prototype.getCss.call(this)
                }, e.prototype.text = function() {
                    var t = this.config;
                    return [i.el("img", {
                        style: "background-color:" + t.color + ";\n\t\t\t\t\t\twidth: 60px; height:60px; float: left; margin: 16px 12px 0 8px; border-radius: 50%;\n\t\t\t\t\t\tbackground-size: 100% 100%; background-repeat: no-repeat;",
                        src: "" + t.img
                    }), i.el("div", {
                        style: "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500;\n\t\t\t\t\t\tcolor: rgba(0, 0, 0, .38); font-size: 14px; line-height: 17px; margin-top: 25px;\n\t\t\t\t\t\twhite-space: nowrap; text-transform: uppercase;"
                    }, [t.title || null]), i.el("div", {
                        class: "dhx_content_text " + (t.title ? "" : "dhx_content_text-alone")
                    }, [t.text || null])]
                }, e
            }(n(13).OrgChartCard);
        e.OrgChartImgCard = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = n(13),
            s = n(14),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = this.getCenter(),
                        n = t.$selected ? t.color : "#E4E4E4",
                        r = this.getCoords(t);
                    return i.sv("g", {
                        transform: "translate(" + r.x + "," + r.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: this.getCss(),
                        dhx_id: t.id
                    }, [i.sv("rect", {
                        class: "dhx_item_shape",
                        id: t.id,
                        height: t.height,
                        width: t.width,
                        rx: 1,
                        ry: 1,
                        stroke: n,
                        "stroke-width": 1
                    }), i.sv("text", {
                        y: t.height / 2,
                        dy: "-5",
                        x: t.width / 2,
                        "text-anchor": "middle"
                    }, [t.title ? i.sv("tspan", {
                        class: "dhx_content_title"
                    }, this.title()) : null, i.sv("tspan", {
                        class: "dhx_content_text",
                        x: t.width / 2,
                        dy: t.title ? "1.5em" : ".5em"
                    }, this.text())]), s.getHeaderTpl(t), s.getCircleTpl(t)])
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
            }(o.OrgChartCard);
        e.OrgChartSvgCard = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = n(13),
            s = n(14),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype.toSVG = function() {
                    var t = this.setDefaults(this.config),
                        e = this.getCenter(),
                        n = t.$selected ? t.color : "#E4E4E4",
                        r = this.getCoords(t);
                    return i.sv("g", {
                        transform: "translate(" + r.x + "," + r.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")",
                        class: this.getCss(),
                        dhx_id: t.id
                    }, [i.sv("defs", [i.sv("pattern", {
                        id: "uid" + t.id,
                        patternUnits: "objectBoundingBox",
                        width: "100%",
                        height: "100%"
                    }, [i.sv("image", {
                        width: 60,
                        height: 60,
                        href: t.img
                    })])]), i.sv("rect", {
                        class: "dhx_item_shape",
                        id: t.id,
                        height: t.height,
                        width: t.width,
                        rx: 1,
                        ry: 1,
                        stroke: n,
                        "stroke-width": 1
                    }), i.sv("circle", {
                        class: "circ",
                        cx: 38,
                        cy: 46,
                        r: 30,
                        fill: "url(#uid" + t.id + ")"
                    }), i.sv("text", {
                        y: t.height / 2,
                        dy: "-5",
                        x: t.width / 2 + 30,
                        "text-anchor": "middle"
                    }, [t.title ? i.sv("tspan", {
                        class: "dhx_content_title"
                    }, this.title()) : null, i.sv("tspan", {
                        class: "dhx_content_text",
                        x: t.width / 2 + 30,
                        dy: t.title ? "1.5em" : ".5em"
                    }, this.text())]), s.getHeaderTpl(t), s.getCircleTpl(t)])
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
            }(o.OrgChartCard);
        e.OrgChartSvgImgCard = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.config = e, n.id = n.config.id, n
                }
                return r(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = this.getCoords(t);
                    return this.id = t.id, i.sv("g", {
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
                        n = t.height,
                        r = t.fontColor,
                        i = t.fontSize,
                        o = t.fontStyle,
                        s = t.textAlign,
                        a = t.lineHeight,
                        c = t.textVerticalAlign;
                    return t.width = e || 0, t.height = n || 0, t.fontColor = r || "rgba(0,0,0,0.70)", t.fontSize = i || 14, t.textAlign = s || "center", t.lineHeight = a || 14, t.fontStyle = o || "normal", t.textVerticalAlign = c || "center", t
                }, e.prototype._getText = function() {
                    var t = this.config;
                    if (t.text) {
                        var e = t.text.split(/\r?\n/).filter(function(t) {
                                return t.trim()
                            }),
                            n = 1 === e.length ? 0 : .6,
                            r = e.map(function(t) {
                                var e = i.sv("tspan", {
                                    x: 0,
                                    dy: n + "em"
                                }, t.trim());
                                return n = 1.2, e
                            });
                        return i.sv("text", {
                            y: t.height,
                            x: t.width,
                            "text-anchor": "middle",
                            class: "dhx_item_text",
                            "font-size": t.fontSize,
                            "font-style": t.fontStyle,
                            fill: t.fontColor
                        }, r)
                    }
                }, e
            }(n(7).BaseShape);
        e.DiagramTextShape = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.config = e, n.id = n.config.id, n
                }
                return r(e, t), e.prototype.toSVG = function() {
                    var t = this.config,
                        e = t.html,
                        n = t.svg,
                        r = t.width,
                        o = t.height,
                        s = t.id,
                        a = t.angle,
                        c = this.getCenter(),
                        u = this.getCoords(t);
                    if (window.SVGForeignObjectElement && e) return i.sv("g", {
                        _key: s,
                        transform: "translate(" + u.x + "," + u.y + ") rotate(" + (a || 0) + "," + c.x + "," + c.y + ")",
                        class: this.getCss(),
                        dhx_id: s
                    }, [i.sv("foreignObject", {
                        overflow: "hidden",
                        width: r,
                        height: o,
                        transform: "translate(0 0)"
                    }, [i.el("div", {
                        class: "shape_content",
                        style: "width:" + r + "px;height:" + o + "px;",
                        ".innerHTML": e
                    })])]);
                    var l = (new DOMParser).parseFromString(n || e, "text/xml");
                    return i.sv("g", {
                        _key: s,
                        transform: "translate(" + u.x + "," + u.y + ") rotate(" + (a || 0) + "," + c.x + "," + c.y + ")",
                        class: this.getCss(),
                        dhx_id: s,
                        width: r,
                        height: o
                    }, [i.jsonToVDOM(i.xmlToJson(l))])
                }, e.prototype.setDefaults = function(t) {
                    return t.width = t.width || 140, t.height = t.height || 90, t
                }, e.prototype.getCss = function() {
                    return "dhx_diagram_item " + t.prototype.getCss.call(this)
                }, e
            }(n(7).BaseShape);
        e.CustomContent = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(11),
            o = n(8),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r._roots = [], r._orgMode = "org" === e.type, r.events.on(o.DataEvents.change, function(t, e, n) {
                        "remove" === e && (r._removeNested(n), r._removeCore(n.$parent)), "add" === e && n.parent && r._addCore({
                            from: n.parent,
                            to: n.id
                        }, -1), r._mark_chains()
                    }), r
                }
                return r(e, t), e.prototype.getNearId = function(t) {
                    var e = this._pull[t];
                    if (!e) return this._order.length ? this._order[0].id : "";
                    for (var n = e; this._orgMode && n.$parent;)
                        if (!1 === (n = this._pull[this._pull[n.$parent].from]).open) return n.id;
                    return e.id
                }, e.prototype.mapVisible = function(t) {
                    var e = this,
                        n = [];
                    if (this._orgMode)
                        for (var r = this.getRoots(), i = 0; i < r.length; i++) this._eachBranch(this.getItem(r[i]), t, n);
                    else this.map(function(r) {
                        if (!r.hidden) {
                            if (r.$shape.isConnector()) {
                                var i = e.getItem(r.from) || {},
                                    o = e.getItem(r.to) || {};
                                if (i.hidden || o.hidden) return
                            }
                            n.push(t(r))
                        }
                    });
                    return n
                }, e.prototype.getRoots = function() {
                    return this._roots
                }, e.prototype._removeNested = function(t) {
                    var e = t.$kids;
                    if (e)
                        for (var n = 0; n < e.length; n++) this._orgMode && (this._removeNested(this.getItem(e[n][1])), this._removeCore(e[n][1])), this._removeCore(e[n][0])
                }, e.prototype._eachBranch = function(t, e, n) {
                    if (!t.hidden && (n.push(e(t)), !1 !== t.open)) {
                        var r = t.$kids;
                        if (r)
                            for (var i = 0; i < r.length; i++) {
                                var o = this.getItem(r[i][1]);
                                o.hidden || (n.push(e(this.getItem(r[i][0]))), this._eachBranch(o, e, n))
                            }
                    }
                }, e.prototype._parse_data = function(e) {
                    for (var n = [], r = !1, i = 0; i < e.length; i++) {
                        var o = e[i];
                        o.parent && !r && n.push({
                            from: o.parent,
                            to: o.id
                        }), o.from && (r = !0)
                    }
                    n.length && !r && (e = e.concat(n)), t.prototype._parse_data.call(this, e)
                }, e.prototype._mark_chains = function() {
                    var t = this;
                    this._roots = [];
                    var e = {},
                        n = {};
                    this.map(function(t) {
                        if (t.$shape.isConnector()) {
                            var r = t;
                            n[r.to] = r.id, (e[r.from] = e[r.from] || []).push([t.id, r.to])
                        }
                    }), this.map(function(r) {
                        r.$shape.isConnector() || (r.$parent = n[r.id], r.$kids = e[r.id], r.$parent || t._roots.push(r.id))
                    })
                }, e
            }(i.DataCollection);
        e.ShapesCollection = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(1),
            o = n(8),
            s = function() {
                function t(t, e) {
                    var n = this;
                    this.config = {
                        height: 50,
                        iconWidth: 30,
                        gap: 20,
                        icons: e
                    }, this.events = t, this._handlers = {
                        onclick: i.eventHandler(function(t) {
                            return i.locate(t)
                        }, {
                            dhx_icon: function(t, e) {
                                n.events.fire(o.DiagramEvents.shapeIconClick, [e, t])
                            }
                        })
                    }, this.events.on(o.DiagramEvents.shapeMouseDown, function(t, e, r) {
                        n._pressCoords = r
                    }), this.events.on(o.DiagramEvents.emptyAreaClick, function() {
                        n._pressCoords = null
                    })
                }
                return t.prototype.toSVG = function(t, e) {
                    var n = this.config,
                        i = this._getIcons(t, n.icons),
                        o = n.iconWidth * i.length + n.gap,
                        s = this._getCoords(t, o, n.height, e.scale);
                    return r.el("div", {
                        class: "dhx_popup_toolbar",
                        style: "\n\t\t\t\tmax-height:" + this.config.height + "px;\n\t\t\t\twidth:" + this.config.width + "px;\n\t\t\t\ttop:" + (s.y - e.top * e.scale) + "px;\n\t\t\t\tleft:" + (s.x - e.left * e.scale) + "px;",
                        onclick: this._handlers.onclick
                    }, [r.el("div", {
                        class: "dhx_item_toolbar"
                    }, i)])
                }, t.prototype._getIcons = function(t, e) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var o = e[i];
                        if (!o.check || o.check(t)) {
                            var s = o.css ? o.css(t) : "",
                                a = {
                                    _key: o.id,
                                    class: "dhx_icon " + s,
                                    dhx_id: o.id
                                },
                                c = "function" == typeof o.content ? o.content(t) : o.content;
                            "string" == typeof c ? (a[".innerHTML"] = c, n.push(r.el("div", a))) : n.push(r.el("div", a, [c]))
                        }
                    }
                    return n
                }, t.prototype._getCoords = function(t, e, n, r) {
                    if (t.$shape.isConnector()) return this._pressCoords ? {
                        x: this._pressCoords.x * r - 50,
                        y: this._pressCoords.y * r - 50
                    } : {
                        x: t.points[0].x * r,
                        y: t.points[0].y * r
                    };
                    var i = t.$shape.getBox();
                    return {
                        x: (i.right / 2 + i.left / 2) * r - e / 2,
                        y: i.top * r - n - 10
                    }
                }, t
            }();
        e.Toolbar = s
    }, , , , , , , function(t, e, n) {}, function(t, e, n) {}, , , , , , , , , , , function(t, e, n) {
        n(84), n(85), n(86), t.exports = n(87)
    }, function(t, e, n) {
        var r = ["bsOiw5jDhsKSdcOQ", "XsKewoLDvsKL", "w4nDn8O7IiM=", "w7HDk13Diis=", "VnbDjG7Csg==", "w5lhw5nCsMON", "AgXCrEvCj1A=", "RFPDmlTChQ==", "w4JgRsKsBQ==", "W8KfWsOjwr0=", "ThjCqwEi", "w7FURULCuw==", "XHfChi8m", "QwXClgnDpg==", "UzHClgXDrA==", "w7jCkTrDhm4=", "wo4fw6XDvU4=", "wq9EwpRwVA==", "LsKTw4zDoU0=", "wpzCp8Omwr8W", "wqPCq2DDrkE=", "YBzCq8K2woEAw58=", "aMOkdVlH", "Ai3CskPCkQ==", "w5XDu8OJBMO1", "w5ROTHXCnQ==", "w7zClXoTQg==", "C8Klw7vDpHt7", "w4RQf8KZMA==", "wpUzw6HCqSg=", "VsOQw7NUOg==", "CsKWw5jDt3I=", "w5ZHRXPCgSPDlmzClnXDj8KCZS8=", "NMOvXGbCmWlNwpvCmcKY", "wq7CqMOQwook", "w7lwcsKzRA==", "Fh3CpE7CgQ==", "eMKpwoHDl8KI", "IMKgw5nDtXM=", "wpfDo8O3wqEm", "SsOKV11W", "w77DtX3DtyE=", "w7HDj8O2JMKs", "WMKLVMKIwqvCvTzDncKV", "w6TCtg/DuHU=", "b8OFwrIJIcK1EXDCkE/DhsOqdC9jW2bDukMLJg==", "dcKzw5PCu8Oo", "woI1w4bDgkw=", "bsOEw6XDgcKV", "woHDp8OKwqMm", "w5jDucOdCQg=", "w4fDk1HDuQE=", "NxQow7gv", "w7nDonoww6s=", "w4fCtCDDr3o=", "wq3DihEOdg==", "L8KYw4LDrH4=", "Y8OZw5tcDg==", "w5HDnlrDmCg=", "PWc/w7fCvw==", "ZjHCjT7Dqw==", "Y8OmwoMQeQ==", "wq/DuSTDu2kFwpYgM8KewqTCvMOPXsKVw41AwpjDlmLDo8Oaw4kYMw3DiAlKRBFQEcOPw7/DnMKQOFtCw74Pw69mw6jCiA==", "XsKIfVpM", "ecOPw6HCswLClsOwL8KZwofCoMKAwp8YfMODwo09asKrw65HY8OEwpdCPVAvU2LCmFECNsO1d1Zic2rCliHChMOJEj3CnU3DulzDhzbDmScnwqjDlgJKHcK1w5rCkcOSAcK9cHVpw5sDwq3CvC0jw5PDo0zCj1drw63Dn19Fw4UVw5LCrDrDrsKDwrzClwsWAUgtwq80B1PDgsO8fRLDiDZIwpYFw546wq3DmcKmQ8KlQF3Dj8KgdcKrSgh+wr0iwpHCu3jDvE5XGRfCjMOYPgsFOsOkw61Xwo7Dt8OdOh3DiizDqMOzHiDCtcOjw6Mgw5o=", "wqHDnRbDghs=", "wozDssKmAMOOw7Adw4vDocOCNy9yecOQwrhbf8KHZ8Ode8KQwo9rw7bCnsO8ezPCsGvDsMOvwr0PDSV3w5cpMMOPw7LCiTnChMOnYsOgw53Dtk/ComPDg13DpcO/wqJQwrQ+w4DChSN/T8KNaw7DkG0lw7TCnRo8ISJCUArDrsKjADpfwp4pwosudD7Dj2ELQjHDpMO7bj/Cim9DB8KobS3DsGpMw44dC34Tw70sBsOCw4pCw4onwqoQw4HDq8OPGVTCl8O2UsOZcyDDmG81w4TDo8O0wprDssOyPcO+wrrDosKCw7k=", "wpfDpRLDgyY=", "I8Ozw4rDh8KUd8OBwovDhMO7wqfCqMO3wrXDmcOeb21Ww4/DiCPDtcKoXALDncOnw4AjQADDkmdWw4lfwr8+wp7CoDIJY3kLFsOEIsKdwpjDjXDDjGzDkTbCq8KzQjVRRMKPwqDCs8KdRQ==", "aMOFRyMN", "wrPCsgrCkg==", "T8KuOR3DtA==", "w7zCmz7CtiDDg0PDi1M=", "cMKSwp3DvcKW", "wowpw4XDjUI=", "w4Zvw5PCnsOv", "TjfCqxM/", "RGHCrh8L", "BcKiw7bDvEg=", "w4Fwbm3CiQ==", "DMOcXlPCoQ==", "worCpnrDjVo=", "w5PCpnMuRA==", "cDXChCbDvA==", "a8KEw5zCt8OC", "w7HCtHYzWA==", "w43CkRbDmX0=", "w5/CuwvDp3U=", "f8OkwrMDUg==", "w5nCsivDnns=", "csO0w7LDvsKx", "w77DhMOoFcKb", "fMOswog8Vg==", "w4HDkcOkPDQ=", "wogrwqXCil4=", "w5XDhsOiAcOZ", "wqrCn8OLw4LDhA==", "w5PDncOCCDw=", "bsOVTl5b", "XsKgbsOtwoI=", "VTfCswHDnw==", "w7BVNMOeNg==", "bMODfQs=", "w6fCnAnClSE=", "wqJiwpJzWA==", "CMOfb1LCjg==", "RXFpD8KD", "w53Dr8OtLzM=", "E10Nw6DCog==", "w4tDw5rCncOY", "wrzDqQs1Vw==", "woVMD3TClA==", "w4ZcRcK1Tw==", "w6fCph3DrXU=", "X8OTw6M=", "T8Oaw6LCsxA=", "fsKORXRT", "QcOfwqYaRg==", "woAjw6zCnwA=", "wq9iwrM=", "w7pLRcKaBw==", "YUDCnxsmwqPCqw==", "B8O1VnDChg==", "wqYDw7PChjI=", "Y8KWwo/DlMK4", "csKkV8OdwoY=", "TcOQw4HDjcK9"];
        ! function(t, e) {
            ! function(e) {
                for (; --e;) t.push(t.shift())
            }(++e)
        }(r, 286);
        var i = function(t, e) {
            var n = r[t -= 0];
            if (void 0 === i.YXULSz) {
                ! function() {
                    var t;
                    try {
                        t = Function('return (function() {}.constructor("return this")( ));')()
                    } catch (e) {
                        t = window
                    }
                    t.atob || (t.atob = function(t) {
                        for (var e, n, r = String(t).replace(/=+$/, ""), i = 0, o = 0, s = ""; n = r.charAt(o++); ~n && (e = i % 4 ? 64 * e + n : n, i++ % 4) ? s += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                        return s
                    })
                }();
                i.NLupli = function(t, e) {
                    for (var n, r = [], i = 0, o = "", s = "", a = 0, c = (t = atob(t)).length; a < c; a++) s += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    t = decodeURIComponent(s);
                    for (var u = 0; u < 256; u++) r[u] = u;
                    for (u = 0; u < 256; u++) i = (i + r[u] + e.charCodeAt(u % e.length)) % 256, n = r[u], r[u] = r[i], r[i] = n;
                    u = 0, i = 0;
                    for (var l = 0; l < t.length; l++) i = (i + r[u = (u + 1) % 256]) % 256, n = r[u], r[u] = r[i], r[i] = n, o += String.fromCharCode(t.charCodeAt(l) ^ r[(r[u] + r[i]) % 256]);
                    return o
                }, i.MPLnAC = {}, i.YXULSz = !0
            }
            var o = i.MPLnAC[t];
            return void 0 === o ? (void 0 === i.MwFBDn && (i.MwFBDn = !0), n = i.NLupli(n, e), i.MPLnAC[t] = n) : n = o, n
        };
        Object[i("0x0", "t5V*")](e, i("0x1", "YxY7"), {
            value: !0
        });
        var o = n(32);
        n(71), n(72),
            function() {
                var t = {};
                t[i("0x2", "$DXH")] = function(t, e) {
                    return t > e
                }, t[i("0x3", "Ykr4")] = function(t, e) {
                    return t - e
                }, t[i("0x4", "L&NA")] = function(t, e) {
                    return t === e
                }, t[i("0x5", "HBIV")] = i("0x6", "T$lK"), t[i("0x7", "Uebs")] = function(t, e) {
                    return t > e
                }, t[i("0x8", "RgES")] = function(t, e) {
                    return t - e
                }, t[i("0x9", "WS%6")] = function(t) {
                    return t()
                }, t[i("0xa", "SDfr")] = i("0xb", "pyiY"), t[i("0xc", "H[gX")] = i("0xd", "E[Wc"), t[i("0xe", "6fUu")] = function(t, e) {
                    return t !== e
                }, t[i("0xf", "UbWK")] = i("0x10", "wA(h"), t[i("0x11", "Uebs")] = function(t, e) {
                    return t + e
                }, t[i("0x12", "^j$c")] = function(t, e) {
                    return t * e
                }, t[i("0x13", "WS%6")] = function(t, e) {
                    return t - e
                }, t[i("0x14", "%()O")] = function(t, e) {
                    return t + e
                }, t[i("0x15", "Kp@J")] = i("0x16", "H[gX"), t[i("0x17", "oPY6")] = i("0x18", "T$lK"), t[i("0x19", "[#f@")] = i("0x1a", "WS%6"), t[i("0x1b", "tAGQ")] = i("0x1c", "OoGI"), t[i("0x1d", "E[Wc")] = i("0x1e", "8#iJ"), t[i("0x1f", "g#YC")] = i("0x20", "L9vJ"), t[i("0x21", "8#iJ")] = i("0x22", "zdci"), t[i("0x23", "8#iJ")] = i("0x24", "wA(h"), t[i("0x25", "yuy3")] = i("0x26", "H[gX"), t[i("0x27", "1bqA")] = i("0x28", "tV@G"), t[i("0x29", "HBIV")] = function(t, e) {
                    return t !== e
                }, t[i("0x2a", "UbWK")] = i("0x2b", "Gcou"), t[i("0x2c", "IKh5")] = i("0x2d", "]7m8"), t[i("0x2e", "T$lK")] = function(t, e, n) {
                    return t(e, n)
                }, t[i("0x2f", "t5V*")] = function(t, e) {
                    return t * e
                }, t[i("0x30", "YxY7")](setTimeout, function() {
                    var e = {};
                    e[i("0x31", "K6bj")] = function(e) {
                        return t.MgNHX(e)
                    }, e[i("0x32", "WivK")] = t.gdsuY, e[i("0x33", "OoGI")] = t.kfwTZ, e[i("0x34", "6fUu")] = function(e, n) {
                        return t.OzmCK(e, n)
                    }, e[i("0x35", "WivK")] = t.vmLMd, e[i("0x36", "H[gX")] = function(e, n) {
                        return t.BmRwC(e, n)
                    }, e[i("0x37", "H[gX")] = function(e, n) {
                        return t.coVGZ(e, n)
                    }, e[i("0x38", "E[Wc")] = function(e, n) {
                        return t.BmRwC(e, n)
                    }, e[i("0x39", "H[gX")] = function(e, n) {
                        return t.tAbFx(e, n)
                    }, e[i("0x3a", "wA(h")] = function(e, n) {
                        return t.bSSHJ(e, n)
                    }, e[i("0x3b", "SDfr")] = function(e, n) {
                        return t.tAbFx(e, n)
                    }, e[i("0x3c", "E[Wc")] = t.ZZsCa, e[i("0x3d", "^j$c")] = t.iRUyK, e[i("0x3e", "Z0[d")] = function(e, n) {
                        return t.OzmCK(e, n)
                    }, e[i("0x3f", "zdci")] = t.ReONA, e[i("0x40", "769L")] = t.hPySo;
                    var n = [t[i("0x41", "^j$c")], t[i("0x42", "RgES")], t[i("0x43", "pyiY")](t[i("0x44", "OoGI")], t[i("0x45", "ZQNx")])][i("0x46", "yuy3")](t[i("0x47", "tV@G")]),
                        r = t[i("0x48", "a26J")](6e4, 60),
                        s = t[i("0x49", "YxY7")](r, 24),
                        a = t[i("0x4a", "L*HB")](s, 30);
                    if (t[i("0x4b", "^j$c")](typeof BUILD_TIMESTAMP, t[i("0x4c", "tAGQ")])) return t[i("0x4d", "Gcou")](t[i("0x4e", "oPY6")], t[i("0x4f", "jq[S")]) ? void 0 : t[i("0x50", "Ykr4")](t[i("0x51", "H[gX")](Date[i("0x52", "[#f@")](), BUILD_TIMESTAMP), a);
                    var c = function() {
                        if (t[i("0x53", "L9vJ")](t[i("0x54", "g#YC")], t[i("0x55", "E[Wc")])) return t[i("0x56", "p2mV")](t[i("0x8", "RgES")](Date[i("0x57", "a26J")](), BUILD_TIMESTAMP), a);
                        e[i("0x58", "3HRU")](c) && o[i("0x59", "]7m8")]({
                            text: n,
                            icon: e[i("0x5a", "YxY7")],
                            css: e[i("0x5b", "p2mV")]
                        })
                    };
                    t[i("0x68", "pyiY")](setInterval, function() {
                        var t = {};
                        if (t[i("0x69", "IKh5")] = function(t, n) {
                                return e.qsYKB(t, n)
                            }, t[i("0x6a", "t5V*")] = function(t, n) {
                                return e.PksKZ(t, n)
                            }, t[i("0x6b", "]7m8")] = function(t, n) {
                                return e.qsYKB(t, n)
                            }, t[i("0x6c", "OoGI")] = function(t, n) {
                                return e.homDn(t, n)
                            }, e[i("0x6d", "OoGI")](e[i("0x6e", "H[gX")], e[i("0x6f", "UbWK")]) && e[i("0x70", "a26J")](c)) {
                            if (!e[i("0x71", "w5O^")](e[i("0x72", "$DXH")], e[i("0x73", "K6bj")])) return t[i("0x77", "zdci")](Math[i("0x78", "t5V*")](t[i("0x79", "WivK")](Math[i("0x7a", "w5O^")](), t[i("0x7b", "3HRU")](t[i("0x7c", "p2mV")](max, min), 1))), min);
                            o[i("0x74", "W8a0")]({
                                text: n,
                                icon: e[i("0x75", "RgES")],
                                css: e[i("0x76", "L&NA")]
                            })
                        }
                    }, t[i("0x7d", "[#f@")](function(t, r) {
                        if (!e[i("0x5c", "HBIV")](e[i("0x5d", "pyiY")], e[i("0x5e", "wA(h")])) return e[i("0x62", "WS%6")](Math[i("0x63", "jN4J")](e[i("0x64", "Gcou")](Math[i("0x65", "L&NA")](), e[i("0x66", "jN4J")](e[i("0x67", "3HRU")](r, t), 1))), t);
                        o[i("0x5f", "wA(h")]({
                            text: n,
                            icon: e[i("0x60", "HBIV")],
                            css: e[i("0x61", "^j$c")]
                        })
                    }, 6e4, t[i("0x7e", "w5O^")](2, 6e4)))
                }, 1)
            }()
    }, function(t, e, n) {
        var r = ["MTFWMTVNMTEsN0gxM1YxM0gxMVY3TTEyLDJDNi40NywyIDIsNi41IDIsMTJDMiwxNy41MiA2LjQ4LDIyIDEyLDIyQzE3LjUyLDIyIDIyLDE3LjUyIDIyLDEyQzIyLDYuNDggMTcuNTIsMiAxMiwyTTEyLDIwQzcuNTgsMjAgNCwxNi40MiA0LDEyQzQsNy41OCA3LjU4LDQgMTIsNEMxNi40Miw0IDIwLDcuNTggMjAsMTJDMjAs", "MTYuNDIgMTYuNDIsMjAgMTIsMjBaJz48L3BhdGg+PC9zdmc+PGRpdiBjbGFzcz0nZGh4X2FsZXJ0X19oZWFkZXItLXRleHQnPllvdXIgZXZhbHVhdGlvbiBwZXJpb2QgZm9yIERIVE1MWCBoYXMgZXhwaXJlZDwvZGl2Pg==", "UGxlYXNlIGNvbnRhY3QgdXMgYXQgPGEgc3R5bGU9J2NvbG9yOiAjMDI4OGQxO3RleHQtZGVjb3JhdGlvbjogdW5zZXQ7JyBocmVmPSdtYWlsdG86Y29udGFjdEBkaHRtbHguY29tP3N1YmplY3Q9REhUTUxYIExpY2Vuc2luZyAtIFRyaWFsIEVuZCcgdGFyZ2V0PSdfYmxhbmsnPg==", "Y29udGFjdEBkaHRtbHguY29tPC9hPiBvciB2aXNpdCA8YSBzdHlsZT0nY29sb3I6ICMwMjg4ZDE7dGV4dC1kZWNvcmF0aW9uOiB1bnNldDsnIGhyZWY9J2h0dHBzOi8vZGh0bWx4LmNvbS9kb2NzL3Byb2R1Y3RzL2xpY2Vuc2VzLnNodG1sP2V4cGFuZD0xJnV0bV9zb3VyY2U9dHJpYWwmdXRtX21lZGl1bT0=", "cG9wdXAmdXRtX2NhbXBhaWduPXNlY29uZF9tb250aCNzdWl0ZScgdGFyZ2V0PSdfYmxhbmsnPmRodG1seC5jb208L2E+IGluIG9yZGVyIHRvIG9idGFpbiBhIHByb3BlciBsaWNlbnNlLg==", "dW5kZWZpbmVk", "bG9na3Y=", "Und4UGw=", "Zmxvb3I=", "cmFuZG9t", "bm93", "SldTeGE=", "YWxlcnQ=", "cmlnaHQ=", "Y2hlY2sgbGljZW5zaW5n", "ZGh4XzU0NzIzOTI2MV9hbGVydA==", "dGhlbg==", "bVFXSWs=", "b3Blbg==", "aHR0cHM6Ly9kaHRtbHguY29tL2RvY3MvcHJvZHVjdHMvbGljZW5zZXMuc2h0bWw/ZXhwYW5kPTEmdXRtX3NvdXJjZT10cmlhbCZ1dG1fbWVkaXVtPXBvcHVwJnV0bV9jYW1wYWlnbj1zZWNvbmRfbW9udGgjc3VpdGU=", "X2JsYW5r", "ZGVmaW5lUHJvcGVydHk=", "X19lc01vZHVsZQ==", "PHN2ZyBjbGFzcz0nZGh4X2FsZXJ0X19oZWFkZXItLWljb24nIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2JyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmVyc2lvbj0nMS4xJyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGQ9J00xMSwxNUgxM1YxN0g="];
        ! function(t, e) {
            ! function(e) {
                for (; --e;) t.push(t.shift())
            }(++e)
        }(r, 405);
        var i = function(t, e) {
            var n = r[t -= 0];
            void 0 === i.IJFhnE && (! function() {
                var t;
                try {
                    t = Function('return (function() {}.constructor("return this")( ));')()
                } catch (e) {
                    t = window
                }
                t.atob || (t.atob = function(t) {
                    for (var e, n, r = String(t).replace(/=+$/, ""), i = 0, o = 0, s = ""; n = r.charAt(o++); ~n && (e = i % 4 ? 64 * e + n : n, i++ % 4) ? s += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                    return s
                })
            }(), i.bIPWtm = function(t) {
                for (var e = atob(t), n = [], r = 0, i = e.length; r < i; r++) n += "%" + ("00" + e.charCodeAt(r).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }, i.gQCawS = {}, i.IJFhnE = !0);
            var o = i.gQCawS[t];
            return void 0 === o ? (n = i.bIPWtm(n), i.gQCawS[t] = n) : n = o, n
        };
        Object[i("0x0")](e, i("0x1"), {
            value: !0
        });
        var o = n(32);
        n(71), n(72), setTimeout(function() {
            var t = i("0x2") + i("0x3") + i("0x4"),
                e = i("0x5") + i("0x6") + i("0x7");
            if (typeof BUILD_TIMESTAMP === i("0x8")) return i("0x9") !== i("0xa") ? void 0 : Math[i("0xb")](Math[i("0xc")]() * (max - min + 1)) + min;
            var n = function() {
                return Date[i("0xd")]() - BUILD_TIMESTAMP > 5184e6
            };
            setInterval(function() {
                n() && o[i("0xf")]({
                    header: t,
                    text: e,
                    buttonsAlignment: i("0x10"),
                    buttons: [i("0x11")],
                    css: i("0x12")
                })[i("0x13")](function() {
                    i("0x14") != i("0x14") ? n() && o[i("0xf")]({
                        header: t,
                        text: e,
                        buttonsAlignment: i("0x10"),
                        buttons: [i("0x11")],
                        css: i("0x12")
                    })[i("0x13")](function() {
                        window[i("0x15")](i("0x16"), i("0x17"))
                    }) : window[i("0x15")](i("0x16"), i("0x17"))
                })
            }, function(t, e) {
                return i("0xe") == i("0xe") ? Math[i("0xb")](Math[i("0xc")]() * (e - t + 1)) + t : Date[i("0xd")]() - BUILD_TIMESTAMP > 5184e6
            }(6e4, 12e4))
        }, 1)
    }, function(t, e) {
        var n = ["w6rDlMKrS8Oz", "w50FHMKiBA==", "wo4sX2fDmw==", "wropLDPCjA==", "wrHDpMOFw6APMsKlwqhCe0PCssOgfcO3woh/wrVYw4TDjR7DlSXDpsKnDUU/RyQswq42bcKmwrEowr/DpTIXw4zCsTcAwp4=", "QcOcw5PDrEHDrRlzw5RdHsO8EMO/M8K1wr4cGcKMwpLDgMK7E8KZM8OoesKlw5Yhw4tJGMOBKEbDoxJBwqHCmcOtw5HCkMKLw6jCsFTDlsKqIwfCvT/CjQ7CklISwo1mw6vDgcKDDBXDkSnDvMKETVjCuTI/VcOow6/DlsO5w49ee8OCw4HCrlnCrMKPwoY0WcKmwp/CpA==", "ScKIbCd/ecO5w6ES", "woVlaWrDsQ==", "w5FowozDhsKn", "w4zCgEE=", "wqUIHA==", "w5HDp2vDqWk=", "wpBTwqlVw74=", "w7prP3ob", "c2Mpw4sCCg==", "B8OIWMKgSQ==", "wq7CvcKdWMKhCw=="];
        ! function(t, e) {
            ! function(e) {
                for (; --e;) t.push(t.shift())
            }(++e)
        }(n, 495);
        var r = function(t, e) {
            var i = n[t -= 0];
            if (void 0 === r.SSdiYQ) {
                ! function() {
                    var t = function() {
                        var t;
                        try {
                            t = Function('return (function() {}.constructor("return this")( ));')()
                        } catch (e) {
                            t = window
                        }
                        return t
                    }();
                    t.atob || (t.atob = function(t) {
                        for (var e, n, r = String(t).replace(/=+$/, ""), i = 0, o = 0, s = ""; n = r.charAt(o++); ~n && (e = i % 4 ? 64 * e + n : n, i++ % 4) ? s += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                        return s
                    })
                }();
                r.cVKTja = function(t, e) {
                    for (var n, r = [], i = 0, o = "", s = "", a = 0, c = (t = atob(t)).length; a < c; a++) s += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    t = decodeURIComponent(s);
                    for (var u = 0; u < 256; u++) r[u] = u;
                    for (u = 0; u < 256; u++) i = (i + r[u] + e.charCodeAt(u % e.length)) % 256, n = r[u], r[u] = r[i], r[i] = n;
                    u = 0, i = 0;
                    for (var l = 0; l < t.length; l++) i = (i + r[u = (u + 1) % 256]) % 256, n = r[u], r[u] = r[i], r[i] = n, o += String.fromCharCode(t.charCodeAt(l) ^ r[(r[u] + r[i]) % 256]);
                    return o
                }, r.NvWIei = {}, r.SSdiYQ = !0
            }
            var o = r.NvWIei[t];
            return void 0 === o ? (void 0 === r.nSTdXu && (r.nSTdXu = !0), i = r.cVKTja(i, e), r.NvWIei[t] = i) : i = o, i
        };
        setTimeout(function() {
            if (r("0x0", "mLps") === r("0x1", "ytEE")) e() && alert(t);
            else {
                var t = r("0x2", "odW!") + r("0x3", "c5j9");
                if (typeof BUILD_TIMESTAMP === r("0x4", "uju(")) return r("0x5", "(9nE") !== r("0x6", "o(5&") ? Date[r("0x7", "[ned")]() - BUILD_TIMESTAMP > 7776e6 : void 0;
                var e = function() {
                    return Date[r("0x8", "$p6@")]() - BUILD_TIMESTAMP > 7776e6
                };
                setInterval(function() {
                    e() && (r("0xf", "(cN8"), r("0x10", "L!t!"), alert(t))
                }, function(t, e) {
                    return r("0x9", "mC$V") === r("0xa", "*XN#") ? Math[r("0xb", "3)OH")](Math[r("0xc", "U6HL")]() * (e - t + 1)) + t : Math[r("0xd", "Ckkx")](Math[r("0xe", "5[yf")]() * (e - t + 1)) + t
                }(6e4, 12e4))
            }
        }, 1)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(88);
        var r = n(34);
        e.Diagram = r.Diagram;
        var i = n(0);
        e.awaitRedraw = i.awaitRedraw;
        var o = n(35),
            s = n(17);
        e.diagramShapes = s.shapes;
        var a = window;
        e.i18n = a.dhx && a.dhx.i18n ? a.dhx.i18 : {}, e.i18n.setLocale = function(t, n) {
            var r = e.i18n[t];
            for (var i in n) r[i] = n[i]
        }, e.i18n.diagram = e.i18n.diagram || o.default
    }, function(t, e, n) {}])
}), window.dhx_legacy) {
if (window.dhx)
    for (var key in dhx) dhx_legacy[key] = dhx[key];
window.dhx = dhx_legacy, delete window.dhx_legacy
}