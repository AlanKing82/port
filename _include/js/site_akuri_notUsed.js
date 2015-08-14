function InfoBox(a) {
    a = a || {}, google.maps.OverlayView.apply(this, arguments), this.content_ = a.content || "", this.disableAutoPan_ = a.disableAutoPan || !1, this.maxWidth_ = a.maxWidth || 0, this.pixelOffset_ = a.pixelOffset || new google.maps.Size(0, 0), this.position_ = a.position || new google.maps.LatLng(0, 0), this.zIndex_ = a.zIndex || null, this.boxClass_ = a.boxClass || "infoBox", this.boxStyle_ = a.boxStyle || {}, this.closeBoxMargin_ = a.closeBoxMargin || "2px", this.closeBoxURL_ = a.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", "" === a.closeBoxURL && (this.closeBoxURL_ = ""), this.infoBoxClearance_ = a.infoBoxClearance || new google.maps.Size(1, 1), "undefined" == typeof a.visible && (a.visible = "undefined" == typeof a.isHidden ? !0 : !a.isHidden), this.isHidden_ = !a.visible, this.alignBottom_ = a.alignBottom || !1, this.pane_ = a.pane || "floatPane", this.enableEventPropagation_ = a.enableEventPropagation || !1, this.div_ = null, this.closeListener_ = null, this.moveListener_ = null, this.contextListener_ = null, this.eventListeners_ = null, this.fixedWidthSet_ = null
}! function() {
    var a = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
        },
        searchString: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].string,
                    d = a[b].prop;
                if (this.versionSearchString = a[b].versionSearch || a[b].identity, c) {
                    if (-1 != c.indexOf(a[b].subString)) return a[b].identity
                } else if (d) return a[b].identity
            }
        },
        searchVersion: function(a) {
            var b = a.indexOf(this.versionSearchString);
            if (-1 != b) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };
    a.init();
    var b = a.browser,
        c = a.version;
    ("Explorer" == b && 9 > c || "Firefox" == b && 4 > c || "Opera" == b && 11 > c || "Safari" == b && 4 > c || "Chrome" == b && 17 > c) && (document.getElementById("oldBrowser").style.display = "block")
}(),
function(a, b) {
    function c(a) {
        var b = a.length,
            c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = fb.expando + Math.random()
    }

    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)
            if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d
                } catch (f) {}
                pb.set(a, c, d)
            } else d = b;
        return d
    }

    function g() {
        return !0
    }

    function h() {
        return !1
    }

    function i() {
        try {
            return T.activeElement
        } catch (a) {}
    }

    function j(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function k(a, b, c) {
        if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fb.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Cb.test(b)) return fb.filter(b, a, c);
            b = fb.filter(b, a)
        }
        return fb.grep(a, function(a) {
            return bb.call(b, a) >= 0 !== c
        })
    }

    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"))
    }

    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) fb.event.add(b, e, j[e][c])
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i))
        }
    }

    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([a], d) : d
    }

    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function s(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--;)
            if (b = _b[e] + c, b in a) return b;
        return d
    }

    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
    }

    function u(b) {
        return a.getComputedStyle(b, null)
    }

    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g
    }

    function y(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = u(a),
            g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e)) return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function z(a) {
        var b = T,
            c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c
    }

    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body),
            d = fb.css(c[0], "display");
        return c.remove(), d
    }

    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b)) fb.each(b, function(b, e) {
            c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fb.type(b)) d(a, b);
        else
            for (e in b) B(a + "[" + e + "]", b[e], c, d)
    }

    function C(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function D(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, fb.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }), j
        }
        var g = {}, h = a === sc;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }

    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a
    }

    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }

    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function H() {
        return setTimeout(function() {
            Bc = b
        }), Bc = fb.now()
    }

    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function J(a, b, c) {
        var d, e, f = 0,
            g = Gc.length,
            h = fb.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: fb.extend({}, b),
                opts: fb.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Bc || H(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++)
            if (d = Gc[f].call(j, a, k, j.opts)) return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function K(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function L(a, c, d) {
        var e, f, g, h, i, j, k = this,
            l = {}, m = a.style,
            n = a.nodeType && t(a),
            o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j()
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
        }));
        for (e in c)
            if (f = c[e], Dc.exec(f)) {
                if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                    if ("show" !== f || !o || o[e] === b) continue;
                    n = !0
                }
                l[e] = o && o[e] || fb.style(a, e)
            }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fb(a).show() : k.done(function() {
                fb(a).hide()
            }), k.done(function() {
                var b;
                qb.remove(a, "fxshow");
                for (b in l) fb.style(a, b, l[b])
            });
            for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e)
    }

    function N(a, b) {
        var c, d = {
                height: a
            }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var P, Q, R = typeof b,
        S = a.location,
        T = a.document,
        U = T.documentElement,
        V = a.jQuery,
        W = a.$,
        X = {}, Y = [],
        Z = "2.0.2",
        $ = Y.concat,
        _ = Y.push,
        ab = Y.slice,
        bb = Y.indexOf,
        cb = X.toString,
        db = X.hasOwnProperty,
        eb = Z.trim,
        fb = function(a, b) {
            return new fb.fn.init(a, b, P)
        }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        hb = /\S+/g,
        ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        kb = /^-ms-/,
        lb = /-([\da-z])/gi,
        mb = function(a, b) {
            return b.toUpperCase()
        }, nb = function() {
            T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), fb.ready()
        };
    fb.fn = fb.prototype = {
        jquery: Z,
        constructor: fb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ib.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), jb.test(e[1]) && fb.isPlainObject(c))
                        for (e in c) fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ab.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return fb.each(this, a, b)
        },
        ready: function(a) {
            return fb.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(ab.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: _,
        sort: [].sort,
        splice: [].splice
    }, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (a = arguments[i]))
                for (c in a) d = h[c], e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, fb.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [fb]), fb.fn.trigger && fb(T).trigger("ready").off("ready")))
        },
        isFunction: function(a) {
            return "function" === fb.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && fb(e).remove(), fb.merge([], d.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a) return null;
            try {
                d = new DOMParser, c = d.parseFromString(a, "text/xml")
            } catch (e) {
                c = b
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), c
        },
        noop: function() {},
        globalEval: function(a) {
            var b, c = eval;
            a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(kb, "ms-").replace(lb, mb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : eb.call(a)
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : bb.call(b, a, c)
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !! c; g > f; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return $.apply([], i)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), f = function() {
                return a.apply(c || this, e.concat(ab.call(arguments)))
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d) fb.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(fb(a), c)
            })), c))
                for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: Date.now,
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), fb.ready.promise = function(b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), a.addEventListener("load", nb, !1))), Q.promise(b)
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        X["[object " + b + "]"] = b.toLowerCase()
    }), P = fb(T),
    function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;
            if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (M && !d) {
                if (e = xb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return eb.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return eb.apply(c, b.getElementsByClassName(g)), c
                    }
                if (B.qsa && (!N || !N.test(a))) {
                    if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Ab, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + q(j[i]);
                        m = rb.test(a) && b.parentNode || b, n = j.join(",")
                    }
                    if (n) try {
                        return eb.apply(c, m.querySelectorAll(n)), c
                    } catch (o) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return y(a.replace(ob, "$1"), b, c, d)
        }

        function d(a) {
            return wb.test(a + "")
        }

        function e() {
            function a(c, d) {
                return b.push(c += " ") > D.cacheLength && delete a[b.shift()], a[c] = d
            }
            var b = [];
            return a
        }

        function f(a) {
            return a[R] = !0, a
        }

        function g(a) {
            var b = K.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function h(a, b, c) {
            a = a.split("|");
            for (var d, e = a.length, f = c ? null : b; e--;)(d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f)
        }

        function i(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null
        }

        function j(a, b) {
            return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }

        function k(a) {
            return "input" === a.nodeName.toLowerCase() ? a.defaultValue : b
        }

        function l(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function m(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function n(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function o(a) {
            return f(function(b) {
                return b = +b, f(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function p(a, b) {
            var d, e, f, g, h, i, j, k = W[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = D.preFilter; h;) {
                (!d || (e = pb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = qb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ob, " ")
                }), h = h.slice(d.length));
                for (g in D.filter)!(e = vb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return b ? h.length : h ? c.error(a) : W(a, i).slice(0)
        }

        function q(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function r(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = U++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = T + " " + f;
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e)
                            if (j = b[R] || (b[R] = {}), (i = j[d]) && i[0] === k) {
                                if ((h = i[1]) === !0 || h === C) return h === !0
                            } else if (i = j[d] = [k], i[1] = a(b, c, g) || C, i[1] === !0) return !0
            }
        }

        function s(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function t(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function u(a, b, c, d, e, g) {
            return d && !d[R] && (d = u(d)), e && !e[R] && (e = u(e, g)), f(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || x(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : t(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = t(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? hb.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = t(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : eb.apply(g, r)
            })
        }

        function v(a) {
            for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function(a) {
                    return a === b
                }, g, !0), j = r(function(a) {
                    return hb.call(b, a) > -1
                }, g, !0), k = [
                    function(a, c, d) {
                        return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }
                ]; e > h; h++)
                if (c = D.relative[a[h].type]) k = [r(s(k), c)];
                else {
                    if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                        for (d = ++h; e > d && !D.relative[a[d].type]; d++);
                        return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ob, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a))
                    }
                    k.push(c)
                }
            return s(k)
        }

        function w(a, b) {
            var d = 0,
                e = b.length > 0,
                g = a.length > 0,
                h = function(f, h, i, j, k) {
                    var l, m, n, o = [],
                        p = 0,
                        q = "0",
                        r = f && [],
                        s = null != k,
                        u = H,
                        v = f || g && D.find.TAG("*", k && h.parentNode || h),
                        w = T += null == u ? 1 : Math.random() || .1;
                    for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                        if (g && l) {
                            for (m = 0; n = a[m++];)
                                if (n(l, h, i)) {
                                    j.push(l);
                                    break
                                }
                            s && (T = w, C = ++d)
                        }
                        e && ((l = !n && l) && p--, f && r.push(l))
                    }
                    if (p += q, e && q !== p) {
                        for (m = 0; n = b[m++];) n(r, o, h, i);
                        if (f) {
                            if (p > 0)
                                for (; q--;) r[q] || o[q] || (o[q] = cb.call(j));
                            o = t(o)
                        }
                        eb.apply(j, o), s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                    }
                    return s && (T = w, H = u), r
                };
            return e ? f(h) : h
        }

        function x(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d
        }

        function y(a, b, c, d) {
            var e, f, g, h, i, j = p(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                    if (b = (D.find.ID(g.matches[0].replace(Bb, Cb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = vb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !D.relative[h = g.type]);)
                    if ((i = D.find[h]) && (d = i(g.matches[0].replace(Bb, Cb), rb.test(f[0].type) && b.parentNode || b))) {
                        if (f.splice(e, 1), a = d.length && q(f), !a) return eb.apply(c, d), c;
                        break
                    }
            }
            return G(a, j)(d, b, !M, c, rb.test(a)), c
        }

        function z() {}
        var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date,
            S = a.document,
            T = 0,
            U = 0,
            V = e(),
            W = e(),
            X = e(),
            Y = !1,
            Z = function() {
                return 0
            }, $ = typeof b,
            _ = 1 << 31,
            ab = {}.hasOwnProperty,
            bb = [],
            cb = bb.pop,
            db = bb.push,
            eb = bb.push,
            gb = bb.slice,
            hb = bb.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            }, ib = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            jb = "[\\x20\\t\\r\\n\\f]",
            kb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            lb = kb.replace("w", "w#"),
            mb = "\\[" + jb + "*(" + kb + ")" + jb + "*(?:([*^$|!~]?=)" + jb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + lb + ")|)|)" + jb + "*\\]",
            nb = ":(" + kb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + mb.replace(3, 8) + ")*)|.*)\\)|)",
            ob = RegExp("^" + jb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + jb + "+$", "g"),
            pb = RegExp("^" + jb + "*," + jb + "*"),
            qb = RegExp("^" + jb + "*([>+~]|" + jb + ")" + jb + "*"),
            rb = RegExp(jb + "*[+~]"),
            sb = RegExp("=" + jb + "*([^\\]'\"]*)" + jb + "*\\]", "g"),
            tb = RegExp(nb),
            ub = RegExp("^" + lb + "$"),
            vb = {
                ID: RegExp("^#(" + kb + ")"),
                CLASS: RegExp("^\\.(" + kb + ")"),
                TAG: RegExp("^(" + kb.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + mb),
                PSEUDO: RegExp("^" + nb),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + jb + "*(even|odd|(([+-]|)(\\d*)n|)" + jb + "*(?:([+-]|)" + jb + "*(\\d+)|))" + jb + "*\\)|)", "i"),
                bool: RegExp("^(?:" + ib + ")$", "i"),
                needsContext: RegExp("^" + jb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + jb + "*((?:-\\d)?\\d*)" + jb + "*\\)|)(?=[^-]|$)", "i")
            }, wb = /^[^{]+\{\s*\[native \w/,
            xb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yb = /^(?:input|select|textarea|button)$/i,
            zb = /^h\d$/i,
            Ab = /'|\\/g,
            Bb = RegExp("\\\\([\\da-f]{1,6}" + jb + "?|(" + jb + ")|.)", "ig"),
            Cb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
            };
        try {
            eb.apply(bb = gb.call(S.childNodes), S.childNodes), bb[S.childNodes.length].nodeType
        } catch (Db) {
            eb = {
                apply: bb.length ? function(a, b) {
                    db.apply(a, gb.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        F = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, B = c.support = {}, J = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : S,
                e = c.parentWindow;
            return c !== K && 9 === c.nodeType && c.documentElement ? (K = c, L = c.documentElement, M = !F(c), e && e.frameElement && e.attachEvent("onbeforeunload", function() {
                J()
            }), B.attributes = g(function(a) {
                return a.innerHTML = "<a href='#'></a>", h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")), h(ib, i, null == a.getAttribute("disabled")), a.className = "i", !a.getAttribute("className")
            }), B.input = g(function(a) {
                return a.innerHTML = "<input>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), B.getElementsByClassName = g(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), B.getById = g(function(a) {
                return L.appendChild(a).id = R, !c.getElementsByName || !c.getElementsByName(R).length
            }), B.getById ? (D.find.ID = function(a, b) {
                if (typeof b.getElementById !== $ && M) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, D.filter.ID = function(a) {
                var b = a.replace(Bb, Cb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete D.find.ID, D.filter.ID = function(a) {
                var b = a.replace(Bb, Cb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), D.find.TAG = B.getElementsByTagName ? function(a, c) {
                return typeof c.getElementsByTagName !== $ ? c.getElementsByTagName(a) : b
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, D.find.CLASS = B.getElementsByClassName && function(a, c) {
                return typeof c.getElementsByClassName !== $ && M ? c.getElementsByClassName(a) : b
            }, O = [], N = [], (B.qsa = d(c.querySelectorAll)) && (g(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || N.push("\\[" + jb + "*(?:value|" + ib + ")"), a.querySelectorAll(":checked").length || N.push(":checked")
            }), g(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + jb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), N.push(",.*:")
            })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                B.disconnectedMatch = P.call(a, "div"), P.call(a, "[s!='']:x"), O.push("!=", nb)
            }), N = N.length && RegExp(N.join("|")), O = O.length && RegExp(O.join("|")), Q = d(L.contains) || L.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, B.sortDetached = g(function(a) {
                return 1 & a.compareDocumentPosition(c.createElement("div"))
            }), Z = L.compareDocumentPosition ? function(a, b) {
                if (a === b) return Y = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !B.sortDetached && b.compareDocumentPosition(a) === d ? a === c || Q(S, a) ? -1 : b === c || Q(S, b) ? 1 : I ? hb.call(I, a) - hb.call(I, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function(a, b) {
                var d, e = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (a === b) return Y = !0, 0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : I ? hb.call(I, a) - hb.call(I, b) : 0;
                if (f === g) return l(a, b);
                for (d = a; d = d.parentNode;) h.unshift(d);
                for (d = b; d = d.parentNode;) i.unshift(d);
                for (; h[e] === i[e];) e++;
                return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0
            }, c) : K
        }, c.matches = function(a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sb, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                var d = P.call(a, b);
                if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return c(b, K, null, [a]).length > 0
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== K && J(a), Q(a, b)
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== K && J(a);
            var d = D.attrHandle[c.toLowerCase()],
                e = d && ab.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
            return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        }, c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        }, c.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        }, E = c.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += E(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d]; d++) c += E(b);
            return c
        }, D = c.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: vb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(Bb, Cb), a[3] = (a[4] || a[5] || "").replace(Bb, Cb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return vb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && tb.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(Bb, Cb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = V[a + " "];
                    return b || (b = RegExp("(^|" + jb + ")" + a + "(" + jb + "|$)")) && V(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [T, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [T, m]), l !== b)););
                            return m -= e, m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[R] ? e(b) : e.length > 1 ? (d = [a, a, "", b], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = hb.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [],
                        c = [],
                        d = G(a.replace(ob, "$1"));
                    return d[R] ? f(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: f(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: f(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || E(b)).indexOf(a) > -1
                    }
                }),
                lang: f(function(a) {
                    return ub.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(Bb, Cb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === L
                },
                focus: function(a) {
                    return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !D.pseudos.empty(a)
                },
                header: function(a) {
                    return zb.test(a.nodeName)
                },
                input: function(a) {
                    return yb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: o(function() {
                    return [0]
                }),
                last: o(function(a, b) {
                    return [b - 1]
                }),
                eq: o(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: o(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: o(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                    return a
                })
            }
        };
        for (A in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[A] = m(A);
        for (A in {
            submit: !0,
            reset: !0
        }) D.pseudos[A] = n(A);
        G = c.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = X[a + " "];
            if (!f) {
                for (b || (b = p(a)), c = b.length; c--;) f = v(b[c]), f[R] ? d.push(f) : e.push(f);
                f = X(a, w(e, d))
            }
            return f
        }, D.pseudos.nth = D.pseudos.eq, z.prototype = D.filters = D.pseudos, D.setFilters = new z, B.sortStable = R.split("").sort(Z).join("") === R, J(), [0, 0].sort(Z), B.detectDuplicates = Y, fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains
    }(a);
    var ob = {};
    fb.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                    if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
            }, m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            fb.each(b, function(b, c) {
                                var e = fb.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), f ? h = j.length : c && (g = b, l(c))
                    }
                    return this
                },
                remove: function() {
                    return j && fb.each(arguments, function(a, b) {
                        for (var c;
                            (c = fb.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                    }), this
                },
                has: function(a) {
                    return a ? fb.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], h = 0, this
                },
                disable: function() {
                    return j = k = c = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, c || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || e && !k || (f ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return m
    }, fb.extend({
        Deferred: function(a) {
            var b = [
                ["resolve", "done", fb.Callbacks("once memory"), "resolved"],
                ["reject", "fail", fb.Callbacks("once memory"), "rejected"],
                ["notify", "progress", fb.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return fb.Deferred(function(c) {
                            fb.each(b, function(b, f) {
                                var g = f[0],
                                    h = fb.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? fb.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = ab.call(arguments),
                g = f.length,
                h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fb.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), fb.support = function(b) {
        var c = T.createElement("input"),
            d = T.createDocumentFragment(),
            e = T.createElement("div"),
            f = T.createElement("select"),
            g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
        }), b) : b
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    }, e.prototype = {
        key: function(a) {
            if (!e.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (fb.isEmptyObject(f)) fb.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c]
        },
        access: function(a, c, d) {
            return c === b || c && "string" == typeof c && d === b ? this.get(a, c) : (this.set(a, c, d), d !== b ? d : c)
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a),
                h = this.cache[g];
            if (c === b) this.cache[g] = {};
            else {
                fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(hb) || [])), d = e.length;
                for (; d--;) delete h[e[d]]
            }
        },
        hasData: function(a) {
            return !fb.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    }, pb = new e, qb = new e, fb.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return pb.hasData(a) || qb.hasData(a)
        },
        data: function(a, b, c) {
            return pb.access(a, b, c)
        },
        removeData: function(a, b) {
            pb.remove(a, b)
        },
        _data: function(a, b, c) {
            return qb.access(a, b, c)
        },
        _removeData: function(a, b) {
            qb.remove(a, b)
        }
    }), fb.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function() {
                pb.set(this, a)
            }) : fb.access(this, function(c) {
                var d, e = fb.camelCase(a);
                if (g && c === b) {
                    if (d = pb.get(g, a), d !== b) return d;
                    if (d = pb.get(g, e), d !== b) return d;
                    if (d = f(g, e, b), d !== b) return d
                } else this.each(function() {
                    var d = pb.get(this, e);
                    pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c)
                })
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                pb.remove(this, a)
            })
        }
    }), fb.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = qb.get(a, c), d && (!e || fb.isArray(d) ? e = qb.access(a, c, fb.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fb._queueHooks(a, b),
                g = function() {
                    fb.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {
                empty: fb.Callbacks("once memory").add(function() {
                    qb.remove(a, [b + "queue", c])
                })
            })
        }
    }), fb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fb.queue(this, a, c);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = fb.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = qb.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var tb, ub, vb = /[\t\r\n\f]/g,
        wb = /\r/g,
        xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({
        attr: function(a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fb.propFix[a] || a]
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(hb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                        for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        c.className = fb.trim(d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(hb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? fb.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return this.each(fb.isFunction(a) ? function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var e, f = 0, g = fb(this), h = b, i = a.match(hb) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = fb.isFunction(a), this.each(function(d) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                    return null == a ? "" : a + ""
                })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d)) : void 0
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fb(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (fb.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(hb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, f = fb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function(a, c, e) {
            var f = fb.expr.attrHandle[c],
                g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g
        }
    }), fb.support.optSelected || (fb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fb.propFix[this.toLowerCase()] = this
    }), fb.each(["radio", "checkbox"], function() {
        fb.valHooks[this] = {
            set: function(a, c) {
                return fb.isArray(c) ? a.checked = fb.inArray(fb(a).val(), c) >= 0 : b
            }
        }, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var yb = /^key/,
        zb = /^(?:mouse|contextmenu)|click/,
        Ab = /^(?:focusinfocus|focusoutblur)$/,
        Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = (c || "").match(hb) || [""], k = c.length; k--;) i = Bb.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fb.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(hb) || [""], j = b.length; j--;)
                    if (h = Bb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || T],
                o = db.call(c, "type") ? c.type : c,
                p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = 0 > o.indexOf(":") && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fb.makeArray(d, [c]), m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = n[g++]) && !c.isPropagationStopped();) c.type = g > 1 ? j : m.bindType || o, l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), c.result
            }
        },
        dispatch: function(a) {
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [],
                i = ab.call(arguments),
                j = (qb.get(this, "events") || {})[a.type] || [],
                k = fb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fb.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, d = 0;
                        (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j !== this; j = j.parentNode || this)
                    if (j.disabled !== !0 || "click" !== a.type) {
                        for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [j]).length), e[f] && e.push(g);
                        e.length && h.push({
                            elem: j,
                            handlers: e
                        })
                    }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[fb.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : b
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), !1) : b
                },
                _default: function(a) {
                    return fb.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fb.extend(new fb.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, fb.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, fb.Event = function(a, c) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, c && fb.extend(this, c), this.timeStamp = a && a.timeStamp || fb.now(), this[fb.expando] = !0, b) : new fb.Event(a, c)
    }, fb.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }
    }, fb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fb.support.focusinBubbles || fb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                fb.event.simulate(b, a.target, fb.event.fix(a), !0)
            };
        fb.event.special[b] = {
            setup: function() {
                0 === c++ && T.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0)
            }
        }
    }), fb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = h;
            else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return fb().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function() {
                fb.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? fb.event.trigger(a, c, d, !0) : b
        }
    });
    var Cb = /^.[^:#\[\.,]*$/,
        Db = /^(?:parents|prev(?:Until|All))/,
        Eb = fb.expr.match.needsContext,
        Fb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fb.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (fb.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function(a) {
            var b = fb(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (fb.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1))
        },
        is: function(a) {
            return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [a] : a),
                d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return fb.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c)
        },
        next: function(a) {
            return j(a, "nextSibling")
        },
        prev: function(a) {
            return j(a, "previousSibling")
        },
        nextAll: function(a) {
            return fb.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return fb.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return fb.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || fb.merge([], a.childNodes)
        }
    }, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e)
        }
    }), fb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b;
                (a = a[c]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && fb(a).is(d)) break;
                    e.push(a)
                }
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Hb = /<([\w:]+)/,
        Ib = /<|&#?\w+;/,
        Jb = /<(?:script|style|link)/i,
        Kb = /^(?:checkbox|radio)$/i,
        Lb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mb = /^$|\/(?:java|ecma)script/i,
        Nb = /^true\/(.*)/,
        Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Pb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, Pb.th = Pb.td, fb.fn.extend({
        text: function(a) {
            return fb.access(this, function(a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fb.cleanData(q(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b)
            })
        },
        html: function(a) {
            return fb.access(this, function(a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = fb.map(this, function(a) {
                return [a.nextSibling, a.parentNode]
            }),
                b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                o = k - 1,
                p = a[0],
                r = fb.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fb.clone(h, !0, !0), g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++) h = f[j], Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")))
            }
            return this
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d)
        }
    }), fb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = fb.contains(a.ownerDocument, a);
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))
                for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]);
                else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                if (e = a[k], e || 0 === e)
                    if ("object" === fb.type(e)) fb.merge(n, e.nodeType ? [e] : e);
                    else if (Ib.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || ["", ""])[1].toLowerCase(), h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.firstChild;
                fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++];)
                if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                    for (j = 0; e = f[j++];) Mb.test(e.type || "") && c.push(e);
            return m
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0;
                (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length)
                        for (i = 0;
                            (g = f[i]) !== b; i++) j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && delete qb.cache[h]
                }
                delete pb.cache[d[pb.expando]]
            }
        },
        _evalUrl: function(a) {
            return fb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), fb.fn.extend({
        wrapAll: function(a) {
            var b;
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(fb.isFunction(a) ? function(b) {
                fb(this).wrapInner(a.call(this, b))
            } : function() {
                var b = fb(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/,
        Tb = /^margin/,
        Ub = RegExp("^(" + gb + ")(.*)$", "i"),
        Vb = RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"),
        Wb = RegExp("^([+-])=(" + gb + ")", "i"),
        Xb = {
            BODY: "block"
        }, Yb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Zb = {
            letterSpacing: 0,
            fontWeight: 400
        }, $b = ["Top", "Right", "Bottom", "Left"],
        _b = ["Webkit", "O", "Moz", "ms"];
    fb.fn.extend({
        css: function(a, c) {
            return fb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fb.css(a, c[h], !1, e);
                    return g
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : t(this)) ? fb(this).show() : fb(this).hide()
            })
        }
    }), fb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Qb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fb.camelCase(c),
                    j = a.style;
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), b)
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f
        }
    }), Qb = function(a, c, d) {
        var e, f, g, h = d || u(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }, fb.each(["height", "width"], function(a, c) {
        fb.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                    return y(a, c, e)
                }) : y(a, c, e) : b
            },
            set: function(a, b, d) {
                var e = d && u(a);
                return w(a, b, d ? x(a, c, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), fb(function() {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? fb.swap(a, {
                    display: "inline-block"
                }, Qb, [a, "marginRight"]) : b
            }
        }), !fb.support.pixelPosition && fb.fn.position && fb.each(["top", "left"], function(a, c) {
            fb.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = Qb(a, c), Vb.test(d) ? fb(a).position()[c] + "px" : d) : b
                }
            }
        })
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    }, fb.expr.filters.visible = function(a) {
        return !fb.expr.filters.hidden(a)
    }), fb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Tb.test(a) || (fb.cssHooks[a + b].set = w)
    });
    var ac = /%20/g,
        bc = /\[\]$/,
        cc = /\r?\n/g,
        dc = /^(?:submit|button|image|reset|file)$/i,
        ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({
        serialize: function() {
            return fb.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a))
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(cc, "\r\n")
                }
            }).get()
        }
    }), fb.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) fb.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) B(d, a[d], c, f);
        return e.join("&").replace(ac, "+")
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var fc, gc, hc = fb.now(),
        ic = /\?/,
        jc = /#.*$/,
        kc = /([?&])_=[^&]*/,
        lc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        nc = /^(?:GET|HEAD)$/,
        oc = /^\/\//,
        pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qc = fb.fn.load,
        rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
        if ("string" != typeof a && qc) return qc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, g || [a.responseText, b, a])
        }), this
    }, fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), fb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gc,
            type: "GET",
            isLocal: mc.test(fc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fb.parseJSON,
                "text xml": fb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a)
        },
        ajaxPrefilter: C(rc),
        ajaxTransport: C(sc),
        ajax: function(a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fb.active || fb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event,
                p = fb.Deferred(),
                q = fb.Callbacks("once memory"),
                r = m.statusCode || {}, s = {}, t = {}, u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!h)
                                for (h = {}; b = lc.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [""], null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), D(rc, m, c, w), 2 === u) return w;
            k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = D(sc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return fb.get(a, b, c, "script")
        }
    }), fb.each(["get", "post"], function(a, c) {
        fb[c] = function(a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), fb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fb.globalEval(a), a
            }
        }
    }), fb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fb("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), T.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var vc = [],
        wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a
        }
    }), fb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || fb.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), h = g = b
        }), "script") : b
    }), fb.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var xc = fb.ajaxSettings.xhr(),
        yc = {
            0: 200,
            1223: 204
        }, zc = 0,
        Ac = {};
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in Ac) Ac[a]();
        Ac = b
    }), fb.support.cors = !! xc && "withCredentials" in xc, fb.support.ajax = xc = !! xc, fb.ajaxTransport(function(a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {
            send: function(d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (f in a.xhrFields) h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) h.setRequestHeader(f, d[f]);
                c = function(a) {
                    return function() {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                            text: h.responseText
                        } : b, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null)
            },
            abort: function() {
                c && c()
            }
        } : b
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/,
        Ec = RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"),
        Fc = /queueHooks$/,
        Gc = [L],
        Hc = {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = Ec.exec(b),
                        f = e && e[3] || (fb.cssNumber[a] ? "" : "px"),
                        g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };
    fb.Animation = fb.extend(J, {
        tweener: function(a, b) {
            fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Gc.unshift(a) : Gc.push(a)
        }
    }), fb.Tween = M, M.prototype = {
        constructor: M,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fb.each(["toggle", "show", "hide"], function(a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }), fb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = fb.isEmptyObject(a),
                f = fb.speed(b, c, d),
                g = function() {
                    var b = J(this, fb.extend({}, a), f);
                    (e || qb.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = fb.timers,
                    g = qb.get(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && fb.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qb.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = fb.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), fb.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), fb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {
            complete: c || !c && b || fb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fb.isFunction(b) && b
        };
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
        }, d
    }, fb.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
        var a, c = fb.timers,
            d = 0;
        for (Bc = fb.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b
    }, fb.fx.timer = function(a) {
        a() && fb.timers.push(a) && fb.fx.start()
    }, fb.fx.interval = 13, fb.fx.start = function() {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval))
    }, fb.fx.stop = function() {
        clearInterval(Cc), Cc = null
    }, fb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem
        }).length
    }), fb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            fb.offset.setOffset(this, a, b)
        });
        var c, d, e = this[0],
            f = {
                top: 0,
                left: 0
            }, g = e && e.ownerDocument;
        return g ? (c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f) : void 0
    }, fb.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"),
                l = fb(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fb.css(c, "marginTop", !0),
                    left: b.left - d.left - fb.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position");) a = a.offsetParent;
                return a || U
            })
        }
    }), fb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function(f) {
            return fb.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g, b)
            }, c, f, arguments.length, null)
        }
    }), fb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        fb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            fb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function(c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), fb.fn.size = function() {
        return this.length
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb)
}(window),
function(a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !! g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
    }

    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var e = 0,
        f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        scrollParent: function() {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length)
                for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                    if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                    f = f.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
        function e(b, c, d, e) {
            return a.each(f, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
            g = d.toLowerCase(),
            h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function(c) {
            return c === b ? h["inner" + d].call(this) : this.each(function() {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function(b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function(a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                    for (d = 0; e.length > d; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        },
        hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }
    })
}(jQuery),
function(a, b) {
    function c() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function d(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function() {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
        }).delegate(c, "mouseover", function() {
            a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function e(b, c) {
        a.extend(b, c);
        for (var d in c) null == c[d] && (b[d] = c[d]);
        return b
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var f, g = "datepicker";
    a.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            return e(this._defaults, a || {}), this
        },
        _attachDatepicker: function(b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
        },
        _newInst: function(b, c) {
            var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: e,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
        },
        _attachments: function(b, c) {
            var d, e, f, g = this._get(c, "appendText"),
                h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
            }))
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20),
                    g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function(a) {
                    for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e);
                    return d
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
            }
        },
        _inlineDatepicker: function(b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(b, c, d, f, h) {
            var i, j, k, l, m, n = this._dialogInst;
            return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, this._dialogInput.val(c), this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null, this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [j / 2 - 100 + l, k / 2 - 150 + m]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], g, n), this
        },
        _destroyDatepicker: function(b) {
            var c, d = a(b),
                e = a.data(b, g);
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(b) {
            var c, d, e = a(b),
                f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a
            }))
        },
        _disableDatepicker: function(b) {
            var c, d, e = a(b),
                f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a
            }), this._disabledInputs[this._disabledInputs.length] = b)
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var b = 0; this._disabledInputs.length > b; b++)
                if (this._disabledInputs[b] === a) return !0;
            return !1
        },
        _getInst: function(b) {
            try {
                return a.data(b, g)
            } catch (c) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(c, d, f) {
            var g, h, i, j, k = this._getInst(c);
            return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled" in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k)), b)
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b)
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
        },
        _doKeyDown: function(b) {
            var c, d, e, f = a.datepicker._getInst(b.target),
                g = !0,
                h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                case 9:
                    a.datepicker._hideDatepicker(), g = !1;
                    break;
                case 13:
                    return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                case 27:
                    a.datepicker._hideDatepicker();
                    break;
                case 33:
                    a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 34:
                    a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 35:
                    (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                    break;
                case 36:
                    (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                    break;
                case 37:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 38:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                    break;
                case 39:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 40:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                    break;
                default:
                    g = !1
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation())
        },
        _doKeyPress: function(c) {
            var d, e, f = a.datepicker._getInst(c.target);
            return a.datepicker._get(f, "constrainInput") ? (d = a.datepicker._possibleChars(a.datepicker._get(f, "dateFormat")), e = String.fromCharCode(null == c.charCode ? c.keyCode : c.charCode), c.ctrlKey || c.metaKey || " " > e || !d || d.indexOf(e) > -1) : b
        },
        _doKeyUp: function(b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal) try {
                c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
            } catch (e) {}
            return !0
        },
        _showDatepicker: function(b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var c, d, f, g, h, i, j;
                c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [b, c]) : {}, f !== !1 && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                    return g |= "fixed" === a(this).css("position"), !g
                }), h = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var c, d = this._getNumberOfMonths(b),
                e = d[1],
                g = 17;
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function(b, c, d) {
            var e = b.dpDiv.outerWidth(),
                f = b.dpDiv.outerHeight(),
                g = b.input ? b.input.outerWidth() : 0,
                h = b.input ? b.input.outerHeight() : 0,
                i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
        },
        _findPos: function(b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [c.left, c.top]
        },
        _hideDatepicker: function(b) {
            var c, d, e, f, h = this._curInst;
            !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function() {
                a.datepicker._tidyDialog(h)
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(b) {
            if (a.datepicker._curInst) {
                var c = a(b.target),
                    d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(b, c, d) {
            var e = a(b),
                f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
        },
        _gotoToday: function(b) {
            var c, d = a(b),
                e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
        },
        _selectMonthYear: function(b, c, d) {
            var e = a(b),
                f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
        },
        _selectDay: function(b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(b) {
            var c = a(b);
            this._selectDate(c, "")
        },
        _selectDate: function(b, c) {
            var d, e = a(b),
                f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                a(this).val(e)
            }))
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [b > 0 && 6 > b, ""]
        },
        iso8601Week: function(a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
        },
        parseDate: function(c, d, e) {
            if (null == c || null == d) throw "Invalid arguments";
            if (d = "object" == typeof d ? "" + d : d + "", "" === d) return null;
            var f, g, h, i, j = 0,
                k = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                l = "string" != typeof k ? k : (new Date).getFullYear() % 100 + parseInt(k, 10),
                m = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (e ? e.dayNames : null) || this._defaults.dayNames,
                o = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (e ? e.monthNames : null) || this._defaults.monthNames,
                q = -1,
                r = -1,
                s = -1,
                t = -1,
                u = !1,
                v = function(a) {
                    var b = c.length > f + 1 && c.charAt(f + 1) === a;
                    return b && f++, b
                }, w = function(a) {
                    var b = v(a),
                        c = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                        e = RegExp("^\\d{1," + c + "}"),
                        f = d.substring(j).match(e);
                    if (!f) throw "Missing number at position " + j;
                    return j += f[0].length, parseInt(f[0], 10)
                }, x = function(c, e, f) {
                    var g = -1,
                        h = a.map(v(c) ? f : e, function(a, b) {
                            return [[b, a]]
                        }).sort(function(a, b) {
                            return -(a[1].length - b[1].length)
                        });
                    if (a.each(h, function(a, c) {
                        var e = c[1];
                        return d.substr(j, e.length).toLowerCase() === e.toLowerCase() ? (g = c[0], j += e.length, !1) : b
                    }), -1 !== g) return g + 1;
                    throw "Unknown name at position " + j
                }, y = function() {
                    if (d.charAt(j) !== c.charAt(f)) throw "Unexpected literal at position " + j;
                    j++
                };
            for (f = 0; c.length > f; f++)
                if (u) "'" !== c.charAt(f) || v("'") ? y() : u = !1;
                else switch (c.charAt(f)) {
                    case "d":
                        s = w("d");
                        break;
                    case "D":
                        x("D", m, n);
                        break;
                    case "o":
                        t = w("o");
                        break;
                    case "m":
                        r = w("m");
                        break;
                    case "M":
                        r = x("M", o, p);
                        break;
                    case "y":
                        q = w("y");
                        break;
                    case "@":
                        i = new Date(w("@")), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                        break;
                    case "!":
                        i = new Date((w("!") - this._ticksTo1970) / 1e4), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                        break;
                    case "'":
                        v("'") ? y() : u = !0;
                        break;
                    default:
                        y()
                }
                if (d.length > j && (h = d.substr(j), !/^\s+/.test(h))) throw "Extra/unparsed characters found in date: " + h;
            if (-1 === q ? q = (new Date).getFullYear() : 100 > q && (q += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= q ? 0 : -100)), t > -1)
                for (r = 1, s = t; g = this._getDaysInMonth(q, r - 1), !(g >= s);) r++, s -= g;
            if (i = this._daylightSavingAdjust(new Date(q, r - 1, s)), i.getFullYear() !== q || i.getMonth() + 1 !== r || i.getDate() !== s) throw "Invalid date";
            return i
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(a, b, c) {
            if (!b) return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                f = (c ? c.dayNames : null) || this._defaults.dayNames,
                g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                h = (c ? c.monthNames : null) || this._defaults.monthNames,
                i = function(b) {
                    var c = a.length > d + 1 && a.charAt(d + 1) === b;
                    return c && d++, c
                }, j = function(a, b, c) {
                    var d = "" + b;
                    if (i(a))
                        for (; c > d.length;) d = "0" + d;
                    return d
                }, k = function(a, b, c, d) {
                    return i(a) ? d[b] : c[b]
                }, l = "",
                m = !1;
            if (b)
                for (d = 0; a.length > d; d++)
                    if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                    else switch (a.charAt(d)) {
                        case "d":
                            l += j("d", b.getDate(), 2);
                            break;
                        case "D":
                            l += k("D", b.getDay(), e, f);
                            break;
                        case "o":
                            l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            l += j("m", b.getMonth() + 1, 2);
                            break;
                        case "M":
                            l += k("M", b.getMonth(), g, h);
                            break;
                        case "y":
                            l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                            break;
                        case "@":
                            l += b.getTime();
                            break;
                        case "!":
                            l += 1e4 * b.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            i("'") ? l += "'" : m = !0;
                            break;
                        default:
                            l += a.charAt(d)
                    }
                    return l
        },
        _possibleChars: function(a) {
            var b, c = "",
                d = !1,
                e = function(c) {
                    var d = a.length > b + 1 && a.charAt(b + 1) === c;
                    return d && b++, d
                };
            for (b = 0; a.length > b; b++)
                if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                else switch (a.charAt(b)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        c += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        e("'") ? c += "'" : d = !0;
                        break;
                    default:
                        c += a.charAt(b)
                }
                return c
        },
        _get: function(a, c) {
            return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"),
                    d = a.lastVal = a.input ? a.input.val() : null,
                    e = this._getDefaultDate(a),
                    f = e,
                    g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e
                } catch (h) {
                    d = b ? "" : d
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(b, c, d) {
            var e = function(a) {
                var b = new Date;
                return b.setDate(b.getDate() + a), b
            }, f = function(c) {
                    try {
                        return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                    } catch (d) {}
                    for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
                        switch (j[2] || "d") {
                            case "d":
                            case "D":
                                h += parseInt(j[1], 10);
                                break;
                            case "w":
                            case "W":
                                h += 7 * parseInt(j[1], 10);
                                break;
                            case "m":
                            case "M":
                                g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                                break;
                            case "y":
                            case "Y":
                                f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
                        }
                        j = i.exec(c)
                    }
                    return new Date(f, g, h)
                }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function(a, b, c) {
            var d = !b,
                e = a.selectedMonth,
                f = a.selectedYear,
                g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
            var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b
        },
        _attachHandlers: function(b) {
            var c = this._get(b, "stepMonths"),
                d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                var b = {
                    prev: function() {
                        a.datepicker._adjustDate(d, -c, "M")
                    },
                    next: function() {
                        a.datepicker._adjustDate(d, +c, "M")
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker()
                    },
                    today: function() {
                        a.datepicker._gotoToday(d)
                    },
                    selectDay: function() {
                        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return a.datepicker._selectMonthYear(d, this, "M"), !1
                    },
                    selectYear: function() {
                        return a.datepicker._selectMonthYear(d, this, "Y"), !1
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                Q = this._get(a, "isRTL"),
                R = this._get(a, "showButtonPanel"),
                S = this._get(a, "hideIfNoPrevNext"),
                T = this._get(a, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(a),
                V = this._get(a, "showCurrentAtPos"),
                W = this._get(a, "stepMonths"),
                X = 1 !== U[0] || 1 !== U[1],
                Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                Z = this._getMinMaxDate(a, "min"),
                $ = this._getMinMaxDate(a, "max"),
                _ = a.drawMonth - V,
                ab = a.drawYear;
            if (0 > _ && (_ += 12, ab--), $)
                for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(ab, _, 1)) > b;) _--, 0 > _ && (_ = 11, ab--);
            for (a.drawMonth = _, a.drawYear = ab, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, ab, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, ab, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                    if (z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                            case 0:
                                B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                break;
                            case U[1] - 1:
                                B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                break;
                            default:
                                B += " ui-datepicker-group-middle", A = ""
                        }
                        B += "'>"
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(ab, _), ab === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X ? this.maxRows > G ? this.maxRows : G : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(ab, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>"
                    }
                    _++, _ > 11 && (_ = 0, ab++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                }
                u += x
            }
            return u += j, a._keyEvent = !1, u
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                r = this._get(a, "changeYear"),
                s = this._get(a, "showMonthAfterYear"),
                t = "<div class='ui-datepicker-title'>",
                u = "";
            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
            else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>"
            } if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                else {
                    for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
                        var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(b) ? m : b
                    }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                    a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.drawYear + ("Y" === c ? b : 0),
                e = a.drawMonth + ("M" === c ? b : 0),
                f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max"),
                e = c && c > b ? c : b;
            return d && e > d ? d : e
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function(a, b) {
            return new Date(a, b, 1).getDay()
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a),
                f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
        },
        _isInRange: function(a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"),
                f = this._getMinMaxDate(a, "max"),
                g = null,
                h = null,
                i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
        }
    }), a.fn.datepicker = function(b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
    }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.10.3"
}(jQuery), window.Modernizr = function(a, b, c) {
    function d(a) {
        s.cssText = a
    }

    function e(a, b) {
        return typeof a === b
    }

    function f(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function g(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
        }
        return !1
    }

    function h(a, b, d) {
        for (var f in a) {
            var g = b[a[f]];
            if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
        }
        return !1
    }

    function i(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            f = (a + " " + v.join(d + " ") + d).split(" ");
        return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + w.join(d + " ") + d).split(" "), h(f, b, c))
    }
    var j, k, l, m = "2.7.1",
        n = {}, o = !0,
        p = b.documentElement,
        q = "modernizr",
        r = b.createElement(q),
        s = r.style,
        t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
        u = "Webkit Moz O ms",
        v = u.split(" "),
        w = u.toLowerCase().split(" "),
        x = {}, y = [],
        z = y.slice,
        A = function(a, c, d, e) {
            var f, g, h, i, j = b.createElement("div"),
                k = b.body,
                l = k || b.createElement("body");
            if (parseInt(d, 10))
                for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
            return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !! g
        }, B = {}.hasOwnProperty;
    l = e(B, "undefined") || e(B.call, "undefined") ? function(a, b) {
        return b in a && e(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
        return B.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = z.call(arguments, 1),
            d = function() {
                if (this instanceof d) {
                    var e = function() {};
                    e.prototype = b.prototype;
                    var f = new e,
                        g = b.apply(f, c.concat(z.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(z.call(arguments)))
            };
        return d
    }), x.history = function() {
        return !!a.history && !! history.pushState
    }, x.textshadow = function() {
        return "" === b.createElement("div").style.textShadow
    }, x.csstransforms = function() {
        return !!i("transform")
    }, x.csstransforms3d = function() {
        var a = !! i("perspective");
        return a && "webkitPerspective" in p.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    }, x.csstransitions = function() {
        return i("transition")
    };
    for (var C in x) l(x, C) && (k = C.toLowerCase(), n[k] = x[C](), y.push((n[k] ? "" : "no-") + k));
    return n.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a) l(a, d) && n.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), n[a] !== c) return n;
            b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
        }
        return n
    }, d(""), r = j = null, n._version = m, n._prefixes = t, n._domPrefixes = w, n._cssomPrefixes = v, n.testProp = function(a) {
        return g([a])
    }, n.testAllProps = i, n.testStyles = A, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + y.join(" ") : ""), n
}(this, this.document), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = [].slice,
            e = function(a, b, d) {
                c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = e.prototype.render
            }, f = 1e-10,
            g = c._internals.isSelector,
            h = c._internals.isArray,
            i = e.prototype = c.to({}, .1, {}),
            j = [];
        e.version = "1.11.1", i.constructor = e, i.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.ticker = c.ticker, i.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
        }, i.updateTo = function(a, b) {
            var d, e = this.ratio;
            b && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (d in a) this.vars[d] = a[d];
            if (this._initted)
                if (b) this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var f = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1)
            } else if (this._time > 0) {
                this._initted = !1, this._init();
                for (var g, h = 1 / (1 - e), i = this._firstPT; i;) g = i.s + i.c, i.c *= h, i.s = g - i.c, i = i._next
            }
            return this
        }, i.render = function(a, b, c) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var d, e, g, h, i, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
                o = this._time,
                p = this._totalTime,
                q = this._cycle,
                r = this._duration;
            if (a >= n ? (this._totalTime = n, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete"), 0 === r && (m = this._rawPrevTime, (0 === a || 0 > m || m === f) && m !== a && (c = !0, m > f && (e = "onReverseComplete")), this._rawPrevTime = m = !b || a ? a : f)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === r && this._rawPrevTime > f) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === r && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = m = !b || a ? a : f)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (h = r + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time), this._time > r ? this._time = r : 0 > this._time && (this._time = 0)), this._easeType ? (i = this._time / r, k = this._easeType, l = this._easePower, (1 === k || 3 === k && i >= .5) && (i = 1 - i), 3 === k && (i *= 2), 1 === l ? i *= i : 2 === l ? i *= i * i : 3 === l ? i *= i * i * i : 4 === l && (i *= i * i * i * i), this.ratio = 1 === k ? 1 - i : 2 === k ? i : .5 > this._time / r ? i / 2 : 1 - i / 2) : this.ratio = this._ease.getRatio(this._time / r)), o === this._time && !c && q === this._cycle) return void(p !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || j)));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0), 0 === p && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || j))), g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || j)), this._cycle !== q && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || j)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || j), 0 === r && this._rawPrevTime === f && m !== f && (this._rawPrevTime = 0)))
        }, e.to = function(a, b, c) {
            return new e(a, b, c)
        }, e.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
        }, e.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
        }, e.staggerTo = e.allTo = function(a, b, f, i, k, l, m) {
            i = i || 0;
            var n, o, p, q, r = f.delay || 0,
                s = [],
                t = function() {
                    f.onComplete && f.onComplete.apply(f.onCompleteScope || this, arguments), k.apply(m || this, l || j)
                };
            for (h(a) || ("string" == typeof a && (a = c.selector(a) || a), g(a) && (a = d.call(a, 0))), n = a.length, p = 0; n > p; p++) {
                o = {};
                for (q in f) o[q] = f[q];
                o.delay = r, p === n - 1 && k && (o.onComplete = t), s[p] = new e(a[p], b, o), r += i
            }
            return s
        }, e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
        }, e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
        }, e.delayedCall = function(a, b, c, d, f) {
            return new e(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            })
        }, e.set = function(a, b) {
            return new e(a, 0, b)
        }, e.isTweening = function(a) {
            return c.getTweensOf(a, !0).length > 0
        };
        var k = function(a, b) {
            for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(k(f, b)), e = d.length), f = f._next;
            return d
        }, l = e.getAllTweens = function(b) {
                return k(a._rootTimeline, b).concat(k(a._rootFramesTimeline, b))
            };
        e.killAll = function(a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var f, g, h, i = l(0 != e),
                j = i.length,
                k = c && d && e;
            for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g.totalDuration()) : g._enabled(!1, !1))
        }, e.killChildTweensOf = function(a, b) {
            if (null != a) {
                var f, i, j, k, l, m = c._tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a), g(a) && (a = d(a, 0)), h(a))
                    for (k = a.length; --k > -1;) e.killChildTweensOf(a[k], b);
                else {
                    f = [];
                    for (j in m)
                        for (i = m[j].target.parentNode; i;) i === a && (f = f.concat(m[j].tweens)), i = i.parentNode;
                    for (l = f.length, k = 0; l > k; k++) b && f[k].totalTime(f[k].totalDuration()), f[k]._enabled(!1, !1)
                }
            }
        };
        var m = function(a, c, d, e) {
            c = c !== !1, d = d !== !1, e = e !== !1;
            for (var f, g, h = l(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        };
        return e.pauseAll = function(a, b, c) {
            m(!0, a, b, c)
        }, e.resumeAll = function(a, b, c) {
            m(!1, a, b, c)
        }, e.globalTimeScale = function(b) {
            var d = a._rootTimeline,
                e = c.ticker.time;
            return arguments.length ? (b = b || f, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
        }, i.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, i.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, i.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, i.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        }, i.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, i.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, i.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, i.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, e
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var c, d, e = this.vars;
            for (d in e) c = e[d], g(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
            g(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
        }, e = 1e-10,
            f = c._internals.isSelector,
            g = c._internals.isArray,
            h = [],
            i = function(a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            }, j = function(a, b, c, d) {
                a._timeline.pause(a._startTime), b && b.apply(d || a._timeline, c || h)
            }, k = h.slice,
            l = d.prototype = new b;
        return d.version = "1.11.0", l.constructor = d, l.kill()._gc = !1, l.to = function(a, b, d, e) {
            return b ? this.add(new c(a, b, d), e) : this.set(a, d, e)
        }, l.from = function(a, b, d, e) {
            return this.add(c.from(a, b, d), e)
        }, l.fromTo = function(a, b, d, e, f) {
            return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }, l.staggerTo = function(a, b, e, g, h, j, l, m) {
            var n, o = new d({
                    onComplete: j,
                    onCompleteParams: l,
                    onCompleteScope: m
                });
            for ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = k.call(a, 0)), g = g || 0, n = 0; a.length > n; n++) e.startAt && (e.startAt = i(e.startAt)), o.to(a[n], b, i(e), n * g);
            return this.add(o, h)
        }, l.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
        }, l.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
        }, l.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }, l.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
        }, d.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a),
                h = g._timeline;
            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
            return h.add(g, 0), g
        }, l.add = function(e, f, h, i) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && g(e)) {
                    for (h = h || "normal", i = i || 0, j = f, k = e.length, l = 0; k > l; l++) g(m = e[l]) && (m = new d({
                        tweens: m
                    })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === h ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === h && (m._startTime -= m.delay())), j += i;
                    return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._duration < this.duration())
                for (n = this, o = n.rawTime() > e._startTime; n._gc && n._timeline;) n._timeline.smoothChildTiming && o ? n.totalTime(n._totalTime, !0) : n._enabled(!0, !1), n = n._timeline;
            return this
        }, l.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array || b && b.push && g(b)) {
                for (var c = b.length; --c > -1;) this.remove(b[c]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }, l._remove = function(a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
        }, l.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }, l.insert = l.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }, l.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }, l.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this
        }, l.addPause = function(a, b, c, d) {
            return this.call(j, ["{self}", b, c, d], this, a)
        }, l.removeLabel = function(a) {
            return delete this._labels[a], this
        }, l.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, l._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || e.push && g(e)))
                for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
            else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }, l.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }, l.stop = function() {
            return this.paused(!0)
        }, l.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }, l.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }, l.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, i, j, k = this._dirty ? this.totalDuration() : this._totalDuration,
                l = this._time,
                m = this._startTime,
                n = this._timeScale,
                o = this._paused;
            if (a >= k ? (this._totalTime = this._time = k, this._reversed || this._hasPausedChild() || (f = !0, i = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (j = !0, this._rawPrevTime > e && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a ? a : e, a = k + 1e-6) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== l || 0 === this._duration && (this._rawPrevTime > e || 0 > a && this._rawPrevTime >= 0)) && (i = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (j = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a ? a : e, a = 0, this._initted || (j = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== l && this._first || c || j) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== l && a > 0 && (this._active = !0), 0 === l && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= l)
                    for (d = this._first; d && (g = d._next, !this._paused || o);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                else
                    for (d = this._last; d && (g = d._prev, !this._paused || o);)(d._active || l >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), i && (this._gc || (m === this._startTime || n !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || h)))
            }
        }, l._hasPausedChild = function() {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        }, l.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g;) e > g._startTime || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f
        }, l.getTweensOf = function(a, b) {
            for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
            return f
        }, l._contains = function(a) {
            for (var b = a.timeline; b;) {
                if (b === this) return !0;
                b = b.timeline
            }
            return !1
        }, l.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
            if (b)
                for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }, l._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
            return e
        }, l.clear = function(a) {
            var b = this.getChildren(!1, !0, !0),
                c = b.length;
            for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0)
        }, l.invalidate = function() {
            for (var a = this._first; a;) a.invalidate(), a = a._next;
            return this
        }, l._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }, l.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, l.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                    this._duration = this._totalDuration = d, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
        }, l.usesFrames = function() {
            for (var b = this._timeline; b._timeline;) b = b._timeline;
            return b === a._rootFramesTimeline
        }, l.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, d
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
        var d = function(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, e = 1e-10,
            f = [],
            g = new c(null, null, 1, 0),
            h = d.prototype = new a;
        return h.constructor = d, h.kill()._gc = !1, d.version = "1.11.0", h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
        }, h.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c)
        }, h.removeCallback = function(a, b) {
            if (a)
                if (null == b) this._kill(null, a);
                else
                    for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this
        }, h.tweenTo = function(a, c) {
            c = c || {};
            var d, e, h = {
                    ease: g,
                    overwrite: 2,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
            for (d in c) h[d] = c[d];
            return h.time = this._parseTimeOrLabel(a), e = new b(this, Math.abs(Number(h.time) - this._time) / this._timeScale || .001, h), h.onStart = function() {
                e.target.paused(!0), e.vars.time !== e.target.time() && e.duration(Math.abs(e.vars.time - e.target.time()) / e.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || e, c.onStartParams || f)
            }, e
        }, h.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                onCompleteScope: this
            }, c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
        }, h.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, g, h, i, j, k, l = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                n = this._time,
                o = this._totalTime,
                p = this._startTime,
                q = this._timeScale,
                r = this._rawPrevTime,
                s = this._paused,
                t = this._cycle;
            if (a >= l ? (this._locked || (this._totalTime = l, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (g = !0, i = "onComplete", 0 === this._duration && (0 === a || 0 > r || r === e) && r !== a && this._first && (j = !0, r > e && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = m, a = m + 1e-6)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== n || 0 === m && (r > e || 0 > a && r >= 0) && !this._locked) && (i = "onReverseComplete", g = this._reversed), 0 > a ? (this._active = !1, 0 === m && r >= 0 && this._first && (j = !0), this._rawPrevTime = a) : (this._rawPrevTime = m || !b || a ? a : e, a = 0, this._initted || (j = !0))) : (0 === m && 0 > r && (j = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (k = m + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && this._cycle--, this._time = this._totalTime - this._cycle * k, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, a = m + 1e-6) : 0 > this._time ? this._time = a = 0 : a = this._time))), this._cycle !== t && !this._locked) {
                var u = this._yoyo && 0 !== (1 & t),
                    v = u === (this._yoyo && 0 !== (1 & this._cycle)),
                    w = this._totalTime,
                    x = this._cycle,
                    y = this._rawPrevTime,
                    z = this._time;
                if (this._totalTime = t * m, t > this._cycle ? u = !u : this._totalTime += m, this._time = n, this._rawPrevTime = 0 === m ? r - 1e-5 : r, this._cycle = t, this._locked = !0, n = u ? 0 : m, this.render(n, b, 0 === m), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f), v && (n = u ? m + 1e-6 : -1e-6, this.render(n, !0, !1)), this._locked = !1, this._paused && !s) return;
                this._time = z, this._totalTime = w, this._cycle = x, this._rawPrevTime = y
            }
            if (!(this._time !== n && this._first || c || j)) return void(o !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= n)
                for (d = this._first; d && (h = d._next, !this._paused || s);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
            else
                for (d = this._last; d && (h = d._prev, !this._paused || s);)(d._active || n >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
            this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), i && (this._locked || this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || f)))
        }, h.getActive = function(a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d, e, f = [],
                g = this.getChildren(a, b, c),
                h = 0,
                i = g.length;
            for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
            return f
        }, h.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(),
                d = c.length;
            for (b = 0; d > b; b++)
                if (c[b].time > a) return c[b].name;
            return null
        }, h.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                if (a > b[c].time) return b[c].name;
            return null
        }, h.getLabelsArray = function() {
            var a, b = [],
                c = 0;
            for (a in this._labels) b[c++] = {
                time: this._labels[a],
                name: a
            };
            return b.sort(function(a, b) {
                return a.time - b.time
            }), b
        }, h.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, h.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, h.totalDuration = function(b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, h.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, h.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, h.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        }, d
    }, !0),
    function() {
        var a = 180 / Math.PI,
            b = [],
            c = [],
            d = [],
            e = {}, f = function(a, b, c, d) {
                this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
            }, g = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            h = function(a, b, c, d) {
                var e = {
                    a: a
                }, f = {}, g = {}, h = {
                        c: d
                    }, i = (a + b) / 2,
                    j = (b + c) / 2,
                    k = (c + d) / 2,
                    l = (i + j) / 2,
                    m = (j + k) / 2,
                    n = (m - l) / 8;
                return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
            }, i = function(a, e, f, g, i) {
                var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                    x = 0,
                    y = a[0].a;
                for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, i ? (t = b[j], u = c[j], v = .25 * (u + t) * e / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - .5 * (l - k) * e, p = l + .5 * (m - l) * e, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = h(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = h(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
            }, j = function(a, d, e, g) {
                var h, i, j, k, l, m, n = [];
                if (g)
                    for (a = [g].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = g[d] + Number(m.charAt(0) + m.substr(2)));
                if (h = a.length - 2, 0 > h) return n[0] = new f(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
                for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new f(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                return n[i] = new f(a[i][d], 0, 0, a[i + 1][d]), n
            }, k = function(a, f, h, k, l, m) {
                var n, o, p, q, r, s, t, u, v = {}, w = [],
                    x = m || a[0];
                l = "string" == typeof l ? "," + l + "," : g, null == f && (f = 1);
                for (o in a[0]) w.push(o);
                if (a.length > 1) {
                    for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                        if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                            t = !1;
                            break
                        }
                    t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                }
                for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = j(a, o, e[o], m);
                for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                if (!k) {
                    for (n = w.length; --n > -1;)
                        if (e[o])
                            for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q], d[q] = (d[q] || 0) + r * r;
                    for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                }
                for (n = w.length, q = h ? 4 : 1; --n > -1;) o = w[n], p = v[o], i(p, f, h, k, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                return v
            }, l = function(a, b, c) {
                b = b || "soft";
                var d, e, g, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2,
                    r = "soft" === b,
                    s = [];
                if (r && c && (a = [c].concat(a)), null == a || q + 1 > a.length) throw "invalid Bezier data";
                for (m in a[0]) s.push(m);
                for (j = s.length; --j > -1;) {
                    for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                    for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], g = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new f(d, e, g, h) : new f(d, (2 * e + d) / 3, (2 * e + g) / 3, g);
                    i.length = n
                }
                return p
            }, m = function(a, b, c) {
                for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                    for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
            }, n = function(a, b) {
                b = b >> 0 || 6;
                var c, d, e, f, g = [],
                    h = [],
                    i = 0,
                    j = 0,
                    k = b - 1,
                    l = [],
                    n = [];
                for (c in a) m(a[c], g, b);
                for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, n[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = n, h[f] = j, i = 0, n = []);
                return {
                    length: j,
                    lengths: h,
                    segments: l
                }
            }, o = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: !0,
                init: function(a, b, c) {
                    this._target = a, b instanceof Array && (b = {
                        values: b
                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                    var d, e, f, g, h, i = b.values || [],
                        j = {}, m = i[0],
                        o = b.autoRotate || c.vars.orientToBezier;
                    this._autoRotate = o ? o instanceof Array ? o : [
                        ["x", "y", "rotation", o === !0 ? 0 : Number(o) || 0]
                    ] : null;
                    for (d in m) this._props.push(d);
                    for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                    if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? k(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : l(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                        var p = n(this._beziers, this._timeRes);
                        this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (o = this._autoRotate)
                        for (o[0] instanceof Array || (this._autoRotate = o = [o]), f = o.length; --f > -1;)
                            for (g = 0; 3 > g; g++) d = o[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                    return !0
                },
                set: function(b) {
                    var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                        n = this._func,
                        o = this._target;
                    if (this._timeRes) {
                        if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                            for (j = m - 1; j > e && b >= (this._l2 = k[++e]););
                            this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                        } else if (this._l1 > b && e > 0) {
                            for (; e > 0 && (this._l1 = k[--e]) >= b;);
                            0 === e && this._l1 > b ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                        }
                        if (c = e, b -= this._l1, e = this._si, b > this._s2 && l.length - 1 > e) {
                            for (j = l.length - 1; j > e && b >= (this._s2 = l[++e]););
                            this._s1 = l[e - 1], this._si = e
                        } else if (this._s1 > b && e > 0) {
                            for (; e > 0 && (this._s1 = l[--e]) >= b;);
                            0 === e && this._s1 > b ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                        }
                        h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                    for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = i + (i > 0 ? .5 : -.5) >> 0), n[f] ? o[f](i) : o[f] = i;
                    if (this._autoRotate) {
                        var p, q, r, s, t, u, v, w = this._autoRotate;
                        for (e = w.length; --e > -1;) f = w[e][2], u = w[e][3] || 0, v = w[e][4] === !0 ? 1 : a, g = this._beziers[w[e][0]], p = this._beziers[w[e][1]], g && p && (g = g[c], p = p[c], q = g.a + (g.b - g.a) * h, s = g.b + (g.c - g.b) * h, q += (s - q) * h, s += (g.c + (g.d - g.c) * h - s) * h, r = p.a + (p.b - p.a) * h, t = p.b + (p.c - p.b) * h, r += (t - r) * h, t += (p.c + (p.d - p.c) * h - t) * h, i = Math.atan2(t - r, s - q) * v + u, n[f] ? o[f](i) : o[f] = i)
                    }
                }
            }),
            p = o.prototype;
        o.bezierThrough = k, o.cubicToQuadratic = h, o._autoCSS = !0, o.quadraticToCubic = function(a, b, c) {
            return new f(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        }, o._cssRegister = function() {
            var a = window._gsDefine.globals.CSSPlugin;
            if (a) {
                var b = a._internals,
                    c = b._parseToProxy,
                    d = b._setPluginRatio,
                    e = b.CSSPropTween;
                b._registerComplexSpecialProp("bezier", {
                    parser: function(a, b, f, g, h, i) {
                        b instanceof Array && (b = {
                            values: b
                        }), i = new o;
                        var j, k, l, m = b.values,
                            n = m.length - 1,
                            p = [],
                            q = {};
                        if (0 > n) return h;
                        for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), p[j] = l.end;
                        for (k in b) q[k] = b[k];
                        return q.values = p, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", j, !1]
                        ] : null != l.end.x ? [
                            ["x", "y", "rotation", j, !1]
                        ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform), i._onInitTween(l.proxy, q, g._tween), h
                    }
                })
            }
        }, p._roundProps = function(a, b) {
            for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
        }, p._kill = function(a) {
            var b, c, d = this._props;
            for (b in this._beziers)
                if (b in a)
                    for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
            return this._super._kill.call(this, a)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
                a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
            }, h = {}, i = g.prototype = new a("css");
        i.constructor = g, g.version = "1.11.0", g.API = 2, g.defaultTransformPerspective = 0, i = "px", g.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i
        };
        var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            s = /[^\d\-\.]/g,
            t = /(?:\d|\-|\+|=|#|\.)*/g,
            u = /opacity *= *([^)]*)/,
            v = /opacity:([^;]*)/,
            w = /alpha\(opacity *=.+?\)/i,
            x = /^(rgb|hsl)/,
            y = /([A-Z])/g,
            z = /-([a-z])/gi,
            A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            B = function(a, b) {
                return b.toUpperCase()
            }, C = /(?:Left|Right|Width)/i,
            D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            F = /,(?=[^\)]*(?:\(|$))/gi,
            G = Math.PI / 180,
            H = 180 / Math.PI,
            I = {}, J = document,
            K = J.createElement("div"),
            L = J.createElement("img"),
            M = g._internals = {
                _specialProps: h
            }, N = navigator.userAgent,
            O = function() {
                var a, b = N.indexOf("Android"),
                    c = J.createElement("div");
                return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), n = l && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), m = -1 !== N.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N), o = parseFloat(RegExp.$1), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
            }(),
            P = function(a) {
                return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, Q = function(a) {
                window.console && console.log(a)
            }, R = "",
            S = "",
            T = function(a, b) {
                b = b || K;
                var c, d, e = b.style;
                if (void 0 !== e[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null
            }, U = J.defaultView ? J.defaultView.getComputedStyle : function() {}, V = g.getStyle = function(a, b, c, d, e) {
                var f;
                return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(y, "-$1").toLowerCase()), f = a || c.length ? a : c[b]) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
            }, W = function(a, b, c, d, e) {
                if ("px" === d || !d) return c;
                if ("auto" === d || !c) return 0;
                var f, g = C.test(b),
                    h = a,
                    i = K.style,
                    j = 0 > c;
                return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || J.body, i[g ? "width" : "height"] = c + d), h.appendChild(K), f = parseFloat(K[g ? "offsetWidth" : "offsetHeight"]), h.removeChild(K), 0 !== f || e || (f = W(a, b, c, d, !0))), j ? -f : f
            }, X = function(a, b, c) {
                if ("absolute" !== V(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top",
                    e = V(a, "margin" + d, c);
                return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0)
            }, Y = function(a, b) {
                var c, d, e = {};
                if (b = b || U(a, null))
                    if (c = b.length)
                        for (; --c > -1;) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]);
                    else
                        for (c in b) e[c] = b[c];
                    else if (b = a.currentStyle || a.style)
                    for (c in b) "string" == typeof c && void 0 !== e[c] && (e[c.replace(z, B)] = b[c]);
                return O || (e.opacity = P(a)), d = xb(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, wb && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
            }, Z = function(a, b, c, d, e) {
                var f, g, h, i = {}, j = a.style;
                for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), void 0 !== j[g] && (h = new lb(j, g, j[g], h)));
                if (d)
                    for (g in d) "className" !== g && (i[g] = d[g]);
                return {
                    difs: i,
                    firstMPT: h
                }
            }, $ = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ab = function(a, b, c) {
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                    e = $[b],
                    f = e.length;
                for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                return d
            }, bb = function(a, b) {
                (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                var c = a.split(" "),
                    d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                    e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
            }, cb = function(a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            }, db = function(a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
            }, eb = function(a, b, c, d) {
                var e, f, g, h, i = 1e-6;
                return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? 1 : H) - ("=" === a.charAt(1) ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), h = b + g), i > h && h > -i && (h = 0), h
            }, fb = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, gb = function(a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
            }, hb = function(a) {
                var b, c, d, e, f, g;
                return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fb[a] ? fb[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = gb(e + 1 / 3, b, c), a[1] = gb(e, b, c), a[2] = gb(e - 1 / 3, b, c), a) : (a = a.match(p) || fb.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fb.black
            }, ib = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in fb) ib += "|" + i + "\\b";
        ib = RegExp(ib + ")", "gi");
        var jb = function(a, b, c, d) {
            if (null == a) return function(a) {
                return a
            };
            var e, f = b ? (a.match(ib) || [""])[0] : "",
                g = a.split(f).join("").match(r) || [],
                h = a.substr(0, a.indexOf(g[0])),
                i = ")" === a.charAt(a.length - 1) ? ")" : "",
                j = -1 !== a.indexOf(" ") ? " " : ",",
                k = g.length,
                l = k > 0 ? g[0].replace(p, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l;
                else if (d && F.test(a)) {
                    for (o = a.replace(F, "|").split("|"), n = 0; o.length > n; n++) o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(ib) || [f])[0], m = a.split(b).join("").match(r) || [], n = m.length, k > n--)
                    for (; k > ++n;) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            } : function(a) {
                var b, f, m;
                if ("number" == typeof a) a += l;
                else if (d && F.test(a)) {
                    for (f = a.replace(F, "|").split("|"), m = 0; f.length > m; m++) f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(r) || [], m = b.length, k > m--)
                    for (; k > ++m;) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                return h + b.join(j) + i
            } : function(a) {
                return a
            }
        }, kb = function(a) {
                return a = a.split(","),
                function(b, c, d, e, f, g, h) {
                    var i, j = (c + "").split(" ");
                    for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                    return e.parse(b, h, f, g)
                }
            }, lb = (M._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                    for (h = f.firstMPT; h;) {
                        if (c = h.t, c.type) {
                            if (1 === c.type) {
                                for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                c.e = e
                            }
                        } else c.e = c.s + c.xs0;
                        h = h._next
                    }
            }, function(a, b, c, d, e) {
                this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
            }),
            mb = (M._parseToProxy = function(a, b, c, d, e, f) {
                var g, h, i, j, k, l = d,
                    m = {}, n = {}, o = c._transform,
                    p = I;
                for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                    if (1 >= d.type && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new lb(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                        for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new lb(d, i, h, j, d.rxp[i]));
                    d = d._next
                }
                return {
                    proxy: m,
                    end: n,
                    firstMPT: j,
                    pt: k
                }
            }, M.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof mb || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
            }),
            nb = g.parseComplex = function(a, b, c, d, e, f, g, h, i, k) {
                c = c || f || "", g = new mb(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
                var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "),
                    B = d.split(", ").join(",").split(" "),
                    C = A.length,
                    D = j !== !1;
                for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++)
                    if (o = A[l], r = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, cb(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0);
                    else if (e && ("#" === o.charAt(0) || fb[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", o = hb(o), r = hb(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), v && (o = 4 > o.length ? 1 : o[3], g.appendXtra("", o, (4 > r.length ? 1 : r[3]) - o, z, !1)));
                else if (s = o.match(p)) {
                    if (t = r.match(q), !t || t.length !== s.length) return g;
                    for (n = 0, m = 0; s.length > m; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), cb(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), n = w + y.length;
                    g["xs" + g.l] += o.substr(n)
                } else g["xs" + g.l] += g.l ? " " + o : o; if (-1 !== d.indexOf("=") && g.data) {
                    for (z = g.xs0 + g.data.s, l = 1; g.l > l; l++) z += g["xs" + l] + g.data["xn" + l];
                    g.e = z + g["xs" + l]
                }
                return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
            }, ob = 9;
        for (i = mb.prototype, i.l = i.pr = 0; --ob > 0;) i["xn" + ob] = 0, i["xs" + ob] = "";
        i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(a, b, c, d, e, f) {
            var g = this,
                h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new mb(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var pb = function(a, b) {
            b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || jb(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
        }, qb = M._registerComplexSpecialProp = function(a, b, c) {
                "object" != typeof b && (b = {
                    parser: c
                });
                var d, e, f = a.split(","),
                    g = b.defaultValue;
                for (c = c || [g], d = 0; f.length > d; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new pb(f[d], b)
            }, rb = function(a) {
                if (!h[a]) {
                    var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    qb(a, {
                        parser: function(a, c, d, e, f, g, i) {
                            var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                            return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                        }
                    })
                }
            };
        i = pb.prototype, i.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [b], i = [c])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, c[g] += " " + m));
                b = h.join(", "), c = i.join(", ")
            }
            return nb(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, i.parse = function(a, b, c, d, f, g) {
            return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }, g.registerSpecialProp = function(a, b, c) {
            qb(a, {
                parser: function(a, d, e, f, g, h) {
                    var i = new mb(a, e, 0, 0, g, 2, e, !1, c);
                    return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                },
                priority: c
            })
        };
        var sb = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            tb = T("transform"),
            ub = R + "transform",
            vb = T("transformOrigin"),
            wb = null !== T("perspective"),
            xb = function(a, b, c, d) {
                if (a._gsTransform && c && !d) return a._gsTransform;
                var e, f, h, i, j, k, l, m, n, o, p, q, r, s = c ? a._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    }, t = 0 > s.scaleX,
                    u = 2e-5,
                    v = 1e5,
                    w = 179.99,
                    x = w * G,
                    y = wb ? parseFloat(V(a, vb, b, !1, "0 0 0").split(" ")[2]) || s.zOrigin || 0 : 0;
                for (tb ? e = V(a, ub, b, !0) : a.currentStyle && (e = a.currentStyle.filter.match(D), e = e && 4 === e.length ? [e[0].substr(4), Number(e[2].substr(4)), Number(e[1].substr(4)), e[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), f = (e || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = f.length; --h > -1;) i = Number(f[h]), f[h] = (j = i - (i |= 0)) ? (0 | j * v + (0 > j ? -.5 : .5)) / v + i : i;
                if (16 === f.length) {
                    var z = f[8],
                        A = f[9],
                        B = f[10],
                        C = f[12],
                        E = f[13],
                        F = f[14];
                    if (s.zOrigin && (F = -s.zOrigin, C = z * F - f[12], E = A * F - f[13], F = B * F + s.zOrigin - f[14]), !c || d || null == s.rotationX) {
                        var I, J, K, L, M, N, O, P = f[0],
                            Q = f[1],
                            R = f[2],
                            S = f[3],
                            T = f[4],
                            U = f[5],
                            W = f[6],
                            X = f[7],
                            Y = f[11],
                            Z = Math.atan2(W, B),
                            $ = -x > Z || Z > x;
                        s.rotationX = Z * H, Z && (L = Math.cos(-Z), M = Math.sin(-Z), I = T * L + z * M, J = U * L + A * M, K = W * L + B * M, z = T * -M + z * L, A = U * -M + A * L, B = W * -M + B * L, Y = X * -M + Y * L, T = I, U = J, W = K), Z = Math.atan2(z, P), s.rotationY = Z * H, Z && (N = -x > Z || Z > x, L = Math.cos(-Z), M = Math.sin(-Z), I = P * L - z * M, J = Q * L - A * M, K = R * L - B * M, A = Q * M + A * L, B = R * M + B * L, Y = S * M + Y * L, P = I, Q = J, R = K), Z = Math.atan2(Q, U), s.rotation = Z * H, Z && (O = -x > Z || Z > x, L = Math.cos(-Z), M = Math.sin(-Z), P = P * L + T * M, J = Q * L + U * M, U = Q * -M + U * L, W = R * -M + W * L, Q = J), O && $ ? s.rotation = s.rotationX = 0 : O && N ? s.rotation = s.rotationY = 0 : N && $ && (s.rotationY = s.rotationX = 0), s.scaleX = (0 | Math.sqrt(P * P + Q * Q) * v + .5) / v, s.scaleY = (0 | Math.sqrt(U * U + A * A) * v + .5) / v, s.scaleZ = (0 | Math.sqrt(W * W + B * B) * v + .5) / v, s.skewX = 0, s.perspective = Y ? 1 / (0 > Y ? -Y : Y) : 0, s.x = C, s.y = E, s.z = F
                    }
                } else if (!(wb && !d && f.length && s.x === f[4] && s.y === f[5] && (s.rotationX || s.rotationY) || void 0 !== s.x && "none" === V(a, "display", b))) {
                    var _ = f.length >= 6,
                        ab = _ ? f[0] : 1,
                        bb = f[1] || 0,
                        cb = f[2] || 0,
                        db = _ ? f[3] : 1;
                    s.x = f[4] || 0, s.y = f[5] || 0, k = Math.sqrt(ab * ab + bb * bb), l = Math.sqrt(db * db + cb * cb), m = ab || bb ? Math.atan2(bb, ab) * H : s.rotation || 0, n = cb || db ? Math.atan2(cb, db) * H + m : s.skewX || 0, o = k - Math.abs(s.scaleX || 0), p = l - Math.abs(s.scaleY || 0), Math.abs(n) > 90 && 270 > Math.abs(n) && (t ? (k *= -1, n += 0 >= m ? 180 : -180, m += 0 >= m ? 180 : -180) : (l *= -1, n += 0 >= n ? 180 : -180)), q = (m - s.rotation) % 180, r = (n - s.skewX) % 180, (void 0 === s.skewX || o > u || -u > o || p > u || -u > p || q > -w && w > q && !1 | q * v || r > -w && w > r && !1 | r * v) && (s.scaleX = k, s.scaleY = l, s.rotation = m, s.skewX = n), wb && (s.rotationX = s.rotationY = s.z = 0, s.perspective = parseFloat(g.defaultTransformPerspective) || 0, s.scaleZ = 1)
                }
                s.zOrigin = y;
                for (h in s) u > s[h] && s[h] > -u && (s[h] = 0);
                return c && (a._gsTransform = s), s
            }, yb = function(a) {
                var b, c, d = this.data,
                    e = -d.rotation * G,
                    f = e + d.skewX * G,
                    g = 1e5,
                    h = (0 | Math.cos(e) * d.scaleX * g) / g,
                    i = (0 | Math.sin(e) * d.scaleX * g) / g,
                    j = (0 | Math.sin(f) * -d.scaleY * g) / g,
                    k = (0 | Math.cos(f) * d.scaleY * g) / g,
                    l = this.t.style,
                    m = this.t.currentStyle;
                if (m) {
                    c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                    var n, p, q = this.t.offsetWidth,
                        r = this.t.offsetHeight,
                        s = "absolute" !== m.position,
                        v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                        w = d.x,
                        x = d.y;
                    if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, p = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, w += n - (n * h + p * i), x += p - (n * j + p * k)), s ? (n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")") : v += ", sizingMethod='auto expand')", l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(" && b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                        var y, z, A, B = 8 > o ? 1 : -1;
                        for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), ob = 0; 4 > ob; ob++) z = _[ob], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, A = c !== d[z] ? 2 > ob ? -d.ieOffsetX : -d.ieOffsetY : 2 > ob ? n - d.ieOffsetX : p - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ob || 2 === ob ? 1 : B))) + "px"
                    }
                }
            }, zb = function() {
                var a, b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B = this.data,
                    C = this.t.style,
                    D = B.rotation * G,
                    E = B.scaleX,
                    F = B.scaleY,
                    H = B.scaleZ,
                    I = B.perspective;
                if (m && (y = C.top ? "top" : C.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", u = V(this.t, y, null, !1), z = parseFloat(u) || 0, A = u.substr((z + "").length) || "px", B._ffFix = !B._ffFix, C[y] = (B._ffFix ? z + .05 : z - .05) + A), D || B.skewX) s = Math.cos(D), t = Math.sin(D), a = s, e = t, B.skewX && (D -= B.skewX * G, s = Math.cos(D), t = Math.sin(D)), b = -t, f = s;
                else {
                    if (!(B.rotationY || B.rotationX || 1 !== H || I)) return void(C[tb] = "translate3d(" + B.x + "px," + B.y + "px," + B.z + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                    a = f = 1, b = e = 0
                }
                k = 1, c = d = g = h = i = j = l = n = o = 0, p = I ? -1 / I : 0, q = B.zOrigin, r = 1e5, D = B.rotationY * G, D && (s = Math.cos(D), t = Math.sin(D), i = k * -t, n = p * -t, c = a * t, g = e * t, k *= s, p *= s, a *= s, e *= s), D = B.rotationX * G, D && (s = Math.cos(D), t = Math.sin(D), u = b * s + c * t, v = f * s + g * t, w = j * s + k * t, x = o * s + p * t, c = b * -t + c * s, g = f * -t + g * s, k = j * -t + k * s, p = o * -t + p * s, b = u, f = v, j = w, o = x), 1 !== H && (c *= H, g *= H, k *= H, p *= H), 1 !== F && (b *= F, f *= F, j *= F, o *= F), 1 !== E && (a *= E, e *= E, i *= E, n *= E), q && (l -= q, d = c * l, h = g * l, l = k * l + q), d = (u = (d += B.x) - (d |= 0)) ? (0 | u * r + (0 > u ? -.5 : .5)) / r + d : d, h = (u = (h += B.y) - (h |= 0)) ? (0 | u * r + (0 > u ? -.5 : .5)) / r + h : h, l = (u = (l += B.z) - (l |= 0)) ? (0 | u * r + (0 > u ? -.5 : .5)) / r + l : l, C[tb] = "matrix3d(" + [(0 | a * r) / r, (0 | e * r) / r, (0 | i * r) / r, (0 | n * r) / r, (0 | b * r) / r, (0 | f * r) / r, (0 | j * r) / r, (0 | o * r) / r, (0 | c * r) / r, (0 | g * r) / r, (0 | k * r) / r, (0 | p * r) / r, d, h, l, I ? 1 + -l / I : 1].join(",") + ")"
            }, Ab = function() {
                var a, b, c, d, e, f, g, h, i, j = this.data,
                    k = this.t,
                    l = k.style;
                m && (a = l.top ? "top" : l.bottom ? "bottom" : parseFloat(V(k, "top", null, !1)) ? "bottom" : "top", b = V(k, a, null, !1), c = parseFloat(b) || 0, d = b.substr((c + "").length) || "px", j._ffFix = !j._ffFix, l[a] = (j._ffFix ? c + .05 : c - .05) + d), j.rotation || j.skewX ? (e = j.rotation * G, f = e - j.skewX * G, g = 1e5, h = j.scaleX * g, i = j.scaleY * g, l[tb] = "matrix(" + (0 | Math.cos(e) * h) / g + "," + (0 | Math.sin(e) * h) / g + "," + (0 | Math.sin(f) * -i) / g + "," + (0 | Math.cos(f) * i) / g + "," + j.x + "," + j.y + ")") : l[tb] = "matrix(" + j.scaleX + ",0,0," + j.scaleY + "," + j.x + "," + j.y + ")"
            };
        qb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(a, b, c, d, f, g, h) {
                if (d._transform) return f;
                var i, j, k, l, m, n, o, p = d._transform = xb(a, e, !0, h.parseTransform),
                    q = a.style,
                    r = 1e-6,
                    s = sb.length,
                    t = h,
                    u = {};
                if ("string" == typeof t.transform && tb) k = q.cssText, q[tb] = t.transform, q.display = "block", i = xb(a, null, !1), q.cssText = k;
                else if ("object" == typeof t) {
                    if (i = {
                        scaleX: db(null != t.scaleX ? t.scaleX : t.scale, p.scaleX),
                        scaleY: db(null != t.scaleY ? t.scaleY : t.scale, p.scaleY),
                        scaleZ: db(null != t.scaleZ ? t.scaleZ : t.scale, p.scaleZ),
                        x: db(t.x, p.x),
                        y: db(t.y, p.y),
                        z: db(t.z, p.z),
                        perspective: db(t.transformPerspective, p.perspective)
                    }, o = t.directionalRotation, null != o)
                        if ("object" == typeof o)
                            for (k in o) t[k] = o[k];
                        else t.rotation = o;
                    i.rotation = eb("rotation" in t ? t.rotation : "shortRotation" in t ? t.shortRotation + "_short" : "rotationZ" in t ? t.rotationZ : p.rotation, p.rotation, "rotation", u), wb && (i.rotationX = eb("rotationX" in t ? t.rotationX : "shortRotationX" in t ? t.shortRotationX + "_short" : p.rotationX || 0, p.rotationX, "rotationX", u), i.rotationY = eb("rotationY" in t ? t.rotationY : "shortRotationY" in t ? t.shortRotationY + "_short" : p.rotationY || 0, p.rotationY, "rotationY", u)), i.skewX = null == t.skewX ? p.skewX : eb(t.skewX, p.skewX), i.skewY = null == t.skewY ? p.skewY : eb(t.skewY, p.skewY), (j = i.skewY - p.skewY) && (i.skewX += j, i.rotation += j)
                }
                for (null != t.force3D && (p.force3D = t.force3D, n = !0), m = p.force3D || p.z || p.rotationX || p.rotationY || i.z || i.rotationX || i.rotationY || i.perspective, m || null == t.scale || (i.scaleZ = 1); --s > -1;) c = sb[s], l = i[c] - p[c], (l > r || -r > l || null != I[c]) && (n = !0, f = new mb(p, c, p[c], l, f), c in u && (f.e = u[c]), f.xs0 = 0, f.plugin = g, d._overwriteProps.push(f.n));
                return l = t.transformOrigin, (l || wb && m && p.zOrigin) && (tb ? (n = !0, c = vb, l = (l || V(a, c, e, !1, "50% 50%")) + "", f = new mb(q, c, 0, 0, f, -1, "transformOrigin"), f.b = q[c], f.plugin = g, wb ? (k = p.zOrigin, l = l.split(" "), p.zOrigin = (l.length > 2 && (0 === k || "0px" !== l[2]) ? parseFloat(l[2]) : k) || 0, f.xs0 = f.e = q[c] = l[0] + " " + (l[1] || "50%") + " 0px", f = new mb(p, "zOrigin", 0, 0, f, -1, f.n), f.b = k, f.xs0 = f.e = p.zOrigin) : f.xs0 = f.e = q[c] = l) : bb(l + "", p)), n && (d._transformType = m || 3 === this._transformType ? 3 : 2), f
            },
            prefix: !0
        }), qb("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), qb("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g) {
                b = this.format(b);
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    y = a.style;
                for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; x.length > i; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), v = W(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = nb(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: jb("0px 0px 0px 0px", !1, !0)
        }), qb("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position",
                    p = e || U(a, null),
                    q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: bb
        }), qb("backgroundSize", {
            defaultValue: "0 0",
            formatter: bb
        }), qb("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), qb("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), qb("transformStyle", {
            prefix: !0
        }), qb("backfaceVisibility", {
            prefix: !0
        }), qb("userSelect", {
            prefix: !0
        }), qb("margin", {
            parser: kb("marginTop,marginRight,marginBottom,marginLeft")
        }), qb("padding", {
            parser: kb("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), qb("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
            }
        }), qb("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), qb("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }), qb("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ib) || ["#000"])[0]
            }
        }), qb("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e) {
                var f = a.style,
                    g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                return new mb(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
            }
        });
        var Bb = function(a) {
            var b, c = this.t,
                d = c.filter || V(this.data, "filter"),
                e = 0 | this.s + this.c * a;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("opacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(u, "opacity=" + e))
        };
        qb("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(V(a, "opacity", e, !1, "1")),
                    i = a.style,
                    j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === V(a, "visibility", e) && 0 !== b && (h = 0), O ? f = new mb(i, "opacity", h, b - h, f) : (f = new mb(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Bb), j && (f = new mb(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
            }
        });
        var Cb = function(a, b) {
            b && (a.removeProperty ? a.removeProperty(b.replace(y, "-$1").toLowerCase()) : a.removeAttribute(b))
        }, Db = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.className = 0 === a ? this.b : this.e;
                    for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Cb(c, b.p), b = b._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        qb("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.className,
                    p = a.style.cssText;
                if (g = f._classNamePT = new mb(a, d, 0, 0, g, 2), g.setRatio = Db, g.pr = -11, c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), f._tween._duration && (a.className = g.e, j = Z(a, k, Y(a), i, m), a.className = o, g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), g
            }
        });
        var Eb = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f = this.t.style,
                    g = h.transform.parse;
                if ("all" === this.e) f.cssText = "", e = !0;
                else
                    for (b = this.e.split(","), d = b.length; --d > -1;) c = b[d], h[c] && (h[c].parse === g ? e = !0 : c = "transformOrigin" === c ? vb : h[c].p), Cb(f, c);
                e && (Cb(f, tb), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (qb("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new mb(a, d, 0, 0, f, 2), f.setRatio = Eb, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
            }
        }), i = "bezier,throwProps,physicsProps,physics2D".split(","), ob = i.length; ob--;) rb(i[ob]);
        i = g.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = U(a, ""), f = this._overwriteProps;
            var i, m, o, p, q, r, s, t, u, w = a.style;
            if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && (w.zIndex = 0)), "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), this._transformType) {
                for (u = 3 === this._transformType, tb ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), ("auto" === s || "" === s) && (w.zIndex = 0)), n && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, o = m; o && o._next;) o = o._next;
                t = new mb(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && wb ? zb : tb ? Ab : yb, t.data = this._transform || xb(a, e, !0), f.pop()
            }
            if (c) {
                for (; m;) {
                    for (r = m._next, o = p; o && o.pr > m.pr;) o = o._next;
                    (m._prev = o ? o._prev : q) ? m._prev._next = m : p = m, (m._next = o) ? o._prev = m : q = m, m = r
                }
                this._firstPT = p
            }
            return !0
        }, i.parse = function(a, b, c, f) {
            var g, i, k, l, m, n, o, p, q, r, s = a.style;
            for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = hb(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = nb(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = ab(a, g, e), o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = d[g] || o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && (k || 0 === k) && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, k > 100 && (k = 100), b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : (l = W(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new mb(s, g, l || k || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new mb(s, g, k, l - k, c, 0, g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = nb(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
            return c
        }, i.setRatio = function(a) {
            var b, c, d, e = this._firstPT,
                f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e;) {
                        if (b = e.c * a + e.s, e.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : f > b && b > -f && (b = 0), e.type)
                            if (1 === e.type)
                                if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                        else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                        else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                        else {
                            for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                            e.t[e.p] = c
                        } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else e.t[e.p] = b + e.xs0;
                        e = e._next
                    } else
                        for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                else
                    for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
        }, i._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2, this._transform = this._transform || xb(this._target, e, !0)
        }, i._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
        }, i._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
        };
        var Fb = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1;) Fb(a[e], b, c);
            else
                for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Fb(f, b, c)
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h = b.to(a, c, d),
                i = [h],
                j = [],
                k = [],
                l = [],
                m = b._internals.reservedProps;
            for (a = h._targets || h.target, Fb(a, j, l), h.render(c, !0), Fb(a, k), h.render(0, !0), h._enabled(!0), e = l.length; --e > -1;)
                if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                    f = f.difs;
                    for (g in d) m[g] && (f[g] = d[g]);
                    i.push(b.to(l[e], c, f))
                }
            return i
        }, a.activate([g]), g
    }, !0),
    function() {
        var a = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c, !0
            }
        }),
            b = a.prototype;
        b._onInitAllProps = function() {
            for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; --f > -1;) g[e[f]] = 1;
            for (f = e.length; --f > -1;)
                for (a = e[f], b = d._firstPT; b;) c = b._next, b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), b._prev ? b._prev._next = c : d._firstPT === b && (d._firstPT = c), b._next = b._prev = null, d._propLookup[a] = h), b = c;
            return !1
        }, b._add = function(a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
        }
    }(), window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(a, b) {
            var c;
            if ("function" != typeof a.setAttribute) return !1;
            this._target = a, this._proxy = {};
            for (c in b) this._addTween(this._proxy, c, parseFloat(a.getAttribute(c)), b[c], c) && this._overwriteProps.push(c);
            return !0
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = c[d], this._target.setAttribute(b, this._proxy[b] + "")
        }
    }), window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(a, b) {
            "object" != typeof b && (b = {
                rotation: b
            }), this.finals = {};
            var c, d, e, f, g, h, i = b.useRadians === !0 ? 2 * Math.PI : 360,
                j = 1e-6;
            for (c in b) "useRadians" !== c && (h = (b[c] + "").split("_"), d = h[0], e = parseFloat("function" != typeof a[c] ? a[c] : a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]()), f = this.finals[c] = "string" == typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, g = f - e, h.length && (d = h.join("_"), -1 !== d.indexOf("short") && (g %= i, g !== g % (i / 2) && (g = 0 > g ? g + i : g - i)), -1 !== d.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * i) % i - (0 | g / i) * i : -1 !== d.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * i) % i - (0 | g / i) * i)), (g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
            return !0
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a);
            else
                for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
        }
    })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var b, c, d, e = window.GreenSockGlobals || window,
            f = e.com.greensock,
            g = 2 * Math.PI,
            h = Math.PI / 2,
            i = f._class,
            j = function(b, c) {
                var d = i("easing." + b, function() {}, !0),
                    e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, d
            }, k = a.register || function() {}, l = function(a, b, c, d) {
                var e = i("easing." + a, {
                    easeOut: new b,
                    easeIn: new c,
                    easeInOut: new d
                }, !0);
                return k(e, a), e
            }, m = function(a, b, c) {
                this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            }, n = function(b, c) {
                var d = i("easing." + b, function(a) {
                    this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                }, !0),
                    e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, e.config = function(a) {
                    return new d(a)
                }, d
            }, o = l("Back", n("BackOut", function(a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), n("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), n("BackInOut", function(a) {
                return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            p = i("easing.SlowMo", function(a, b, c) {
                b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
            }, !0),
            q = p.prototype = new a;
        return q.constructor = p, q.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
            return new p(a, b, c)
        }, b = i("easing.SteppedEase", function(a) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
        }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
        }, q.config = b.config = function(a) {
            return new b(a)
        }, c = i("easing.RoughEase", function(b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                x: c,
                y: d
            };
            for (j.sort(function(a, b) {
                return a.x - b.x
            }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
            this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
        }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;) b = b.next;
                b = b.prev
            } else
                for (; b.prev && b.t >= a;) b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, q.config = function(a) {
            return new c(a)
        }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function(a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
        })), l("Circ", j("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function(a) {
            return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), d = function(b, c, d) {
            var e = i("easing." + b, function(a, b) {
                this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
            }, !0),
                f = e.prototype = new a;
            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                return new e(a, b)
            }, e
        }, l("Elastic", d("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
        }, .3), d("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
        }, .3), d("ElasticInOut", function(a) {
            return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1
        }, .45)), l("Expo", j("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function(a) {
            return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), l("Sine", j("SineOut", function(a) {
            return Math.sin(a * h)
        }), j("SineIn", function(a) {
            return -Math.cos(a * h) + 1
        }), j("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })), i("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
    }, !0)
}),
function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a;
    if (!b.TweenLite) {
        var c, d, e, f, g, h = function(a) {
                var c, d = a.split("."),
                    e = b;
                for (c = 0; d.length > c; c++) e[d[c]] = e = e[d[c]] || {};
                return e
            }, i = h("com.greensock"),
            j = 1e-10,
            k = [].slice,
            l = function() {}, m = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return c instanceof Array || "object" == typeof c && !! c.push && a.call(c) === b
                }
            }(),
            n = {}, o = function(c, d, e, f) {
                this.sc = n[c] ? n[c].sc : [], n[c] = this, this.gsClass = null, this.func = e;
                var g = [];
                this.check = function(i) {
                    for (var j, k, l, m, p = d.length, q = p; --p > -1;)(j = n[d[p]] || new o(d[p], [])).gsClass ? (g[p] = j.gsClass, q--) : i && j.sc.push(this);
                    if (0 === q && e)
                        for (k = ("com.greensock." + c).split("."), l = k.pop(), m = h(k.join("."))[l] = this.gsClass = e.apply(e, g), f && (b[l] = m, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + c.split(".").join("/"), [], function() {
                            return m
                        }) : "undefined" != typeof module && module.exports && (module.exports = m)), p = 0; this.sc.length > p; p++) this.sc[p].check()
                }, this.check(!0)
            }, p = a._gsDefine = function(a, b, c, d) {
                return new o(a, b, c, d)
            }, q = i._class = function(a, b, c) {
                return b = b || function() {}, p(a, [], function() {
                    return b
                }, c), b
            };
        p.globals = b;
        var r = [0, 0, 1, 1],
            s = [],
            t = q("easing.Ease", function(a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? r.concat(b) : r
            }, !0),
            u = t.map = {}, v = t.register = function(a, b, c, d) {
                for (var e, f, g, h, j = b.split(","), k = j.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                    for (f = j[k], e = d ? q("easing." + f, null, !0) : i.easing[f] || {}, g = l.length; --g > -1;) h = l[g], u[f + "." + h] = u[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (e = t.prototype, e._calcEnd = !1, e.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], d = c.length; --d > -1;) e = c[d] + ",Power" + d, v(new t(null, null, 1, d), e, "easeOut", !0), v(new t(null, null, 2, d), e, "easeIn" + (0 === d ? ",easeNone" : "")), v(new t(null, null, 3, d), e, "easeInOut");
        u.linear = i.easing.Linear.easeIn, u.swing = i.easing.Quad.easeInOut;
        var w = q("events.EventDispatcher", function(a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        e = w.prototype, e.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var h, i, j = this._listeners[a],
                k = 0;
            for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) h = j[i], h.c === b && h.s === c ? j.splice(i, 1) : 0 === k && e > h.pr && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }), this !== f || g || f.wake()
        }, e.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, e.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c)
        };
        var x = a.requestAnimationFrame,
            y = a.cancelAnimationFrame,
            z = Date.now || function() {
                return (new Date).getTime()
            }, A = z();
        for (c = ["ms", "moz", "webkit", "o"], d = c.length; --d > -1 && !x;) x = a[c[d] + "RequestAnimationFrame"], y = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
        q("Ticker", function(a, b) {
            var c, d, e, h, i, j = this,
                k = z(),
                m = b !== !1 && x,
                n = function(a) {
                    A = z(), j.time = (A - k) / 1e3;
                    var b, f = j.time - i;
                    (!c || f > 0 || a === !0) && (j.frame++, i += f + (f >= h ? .004 : h - f), b = !0), a !== !0 && (e = d(n)), b && j.dispatchEvent("tick")
                };
            w.call(j), j.time = j.frame = 0, j.tick = function() {
                n(!0)
            }, j.sleep = function() {
                null != e && (m && y ? y(e) : clearTimeout(e), d = l, e = null, j === f && (g = !1))
            }, j.wake = function() {
                null !== e && j.sleep(), d = 0 === c ? l : m && x ? x : function(a) {
                    return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                }, j === f && (g = !0), n(2)
            }, j.fps = function(a) {
                return arguments.length ? (c = a, h = 1 / (c || 60), i = this.time + h, void j.wake()) : c
            }, j.useRAF = function(a) {
                return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
            }, j.fps(a), setTimeout(function() {
                m && (!e || 5 > j.frame) && j.useRAF(!1)
            }, 1500)
        }), e = i.Ticker.prototype = new i.events.EventDispatcher, e.constructor = i.Ticker;
        var B = q("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, O) {
                g || f.wake();
                var c = this.vars.useFrames ? N : O;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        f = B.ticker = new i.Ticker, e = B.prototype, e._dirty = e._gc = e._initted = e._paused = !1, e._totalTime = e._time = 0, e._rawPrevTime = -1, e._next = e._last = e._onUpdate = e._timeline = e.timeline = null, e._paused = !1;
        var C = function() {
            z() - A > 2e3 && f.wake(), setTimeout(C, 2e3)
        };
        C(), e.play = function(a, b) {
            return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
        }, e.pause = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!0)
        }, e.resume = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!1)
        }, e.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, e.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, e.reverse = function(a, b) {
            return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, e.render = function() {}, e.invalidate = function() {
            return this
        }, e.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        }, e._enabled = function(a, b) {
            return g || f.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, e._kill = function() {
            return this._enabled(!1, !1)
        }, e.kill = function(a, b) {
            return this._kill(a, b), this
        }, e._uncache = function(a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, e._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, e.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = m(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, e.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, e.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, e.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, e.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, e.totalTime = function(a, b, c) {
            if (g || f.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && this.render(a, b, !1)
            }
            return this
        }, e.progress = e.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }, e.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, e.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || j, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, e.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, e.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                g || a || f.wake();
                var b = this._timeline,
                    c = b.rawTime(),
                    d = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        var D = q("core.SimpleTimeline", function(a) {
            B.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        e = D.prototype = new B, e.constructor = D, e.kill()._gc = !1, e._first = e._last = null, e._sortChildren = !1, e.add = e.insert = function(a, b) {
            var c, d;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                for (d = a._startTime; c && c._startTime > d;) c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
        }, e._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
        }, e.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, e.rawTime = function() {
            return g || f.wake(), this._totalTime
        };
        var E = q("TweenLite", function(b, c, d) {
            if (B.call(this, c, d), this.render = E.prototype.render, null == b) throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : E.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? M[E.defaultOverwrite] : "number" == typeof i ? i >> 0 : M[i], (h || b instanceof Array || b.push && m(b)) && "number" != typeof b[0])
                for (this._targets = g = k.call(b, 0), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(k.call(f, 0))) : (this._siblings[e] = P(f, this, !1), 1 === i && this._siblings[e].length > 1 && Q(f, this, null, 1, this._siblings[e])) : (f = g[e--] = E.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else this._propLookup = {}, this._siblings = P(b, this, !1), 1 === i && this._siblings.length > 1 && Q(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
            F = function(b) {
                return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            }, G = function(a, b) {
                var c, d = {};
                for (c in a) L[c] || c in b && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!I[c] || I[c] && I[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        e = E.prototype = new B, e.constructor = E, e.kill()._gc = !1, e.ratio = 0, e._firstPT = e._targets = e._overwrittenProps = e._startAt = null, e._notifyPluginsOfEnabled = !1, E.version = "1.11.1", E.defaultEase = e._ease = new t(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = f, E.autoSleep = !0, E.selector = a.$ || a.jQuery || function(b) {
            return a.$ ? (E.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
        };
        var H = E._internals = {
            isArray: m,
            isSelector: F
        }, I = E._plugins = {}, J = E._tweenLookup = {}, K = 0,
            L = H.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            }, M = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }, N = B._rootFramesTimeline = new D,
            O = B._rootTimeline = new D;
        O._startTime = f.time, N._startTime = f.frame, O._active = N._active = !0, B._updateRoot = function() {
            if (O.render((f.time - O._startTime) * O._timeScale, !1, !1), N.render((f.frame - N._startTime) * N._timeScale, !1, !1), !(f.frame % 120)) {
                var a, b, c;
                for (c in J) {
                    for (b = J[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete J[c]
                }
                if (c = O._first, (!c || c._paused) && E.autoSleep && !N._first && 1 === f._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || f.sleep()
                }
            }
        }, f.addEventListener("tick", B._updateRoot);
        var P = function(a, b, c) {
            var d, e, f = a._gsTweenID;
            if (J[f || (a._gsTweenID = f = "t" + K++)] || (J[f] = {
                target: a,
                tweens: []
            }), b && (d = J[f].tweens, d[e = d.length] = b, c))
                for (; --e > -1;) d[e] === b && d.splice(e, 1);
            return J[f].tweens
        }, Q = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var k, l = b._startTime + j,
                    m = [],
                    n = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || R(b, 0, o), 0 === R(h, k, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale + j > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                for (f = n; --f > -1;) h = m[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                return g
            }, R = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * j > f - b ? j : (f += a.totalDuration() / a._timeScale / e) > b + j ? 0 : f - b - j
            };
        e._init = function() {
            var a, b, c, d, e = this.vars,
                f = this._overwrittenProps,
                g = this._duration,
                h = e.immediateRender,
                i = e.ease;
            if (e.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = E.to(this.target, 0, e.startAt), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== g) return
            } else if (e.runBackwards && 0 !== g)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    c = {};
                    for (d in e) L[d] && "autoCSS" !== d || (c[d] = e[d]);
                    if (c.overwrite = 0, c.data = "isFromStart", this._startAt = E.to(this.target, 0, c), e.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                }
            if (this._ease = i ? i instanceof t ? e.easeParams instanceof Array ? i.config.apply(i, e.easeParams) : i : "function" == typeof i ? new t(i, e.easeParams) : u[i] || E.defaultEase : E.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], f ? f[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, f); if (b && E._onPluginEvent("_onInitAllProps", this), f && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = e.onUpdate, this._initted = !0
        }, e._initProps = function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b) return !1;
            this.vars.css || b.style && b !== a && b.nodeType && I.css && this.vars.autoCSS !== !1 && G(this.vars, b);
            for (f in this.vars) {
                if (k = this.vars[f], L[f]) k && (k instanceof Array || k.push && m(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                else if (I[f] && (i = new I[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                        _next: this._firstPT,
                        t: i,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: f,
                        pg: !0,
                        pr: i._priority
                    }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = c[f] = j = {
                    _next: this._firstPT,
                    t: b,
                    p: f,
                    f: "function" == typeof b[f],
                    n: f,
                    pg: !1,
                    pr: 0
                }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && Q(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : h
        }, e.render = function(a, b, c) {
            var d, e, f, g, h = this._time,
                i = this._duration;
            if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (g = this._rawPrevTime, (0 === a || 0 > g || g === j) && g !== a && (c = !0, g > j && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a ? a : j);
            else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && this._rawPrevTime > j) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === i && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = g = !b || a ? a : j)) : this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var k = a / i,
                    l = this._easeType,
                    m = this._easePower;
                (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), this.ratio = 1 === l ? 1 - k : 2 === l ? k : .5 > a / i ? k / 2 : 1 - k / 2
            } else this.ratio = this._ease.getRatio(a / i); if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || c && 0 === this._time && 0 === h || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || s), 0 === i && this._rawPrevTime === j && g !== j && (this._rawPrevTime = 0)))
            }
        }, e._kill = function(a, b) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : E.selector(b) || b;
            var c, d, e, f, g, h, i, j;
            if ((m(b) || F(b)) && "number" != typeof b[0])
                for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
            else {
                if (this._targets) {
                    for (c = this._targets.length; --c > -1;)
                        if (b === this._targets[c]) {
                            g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                } if (g) {
                    i = a || g, j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                    for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }, e.invalidate = function() {
            return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, e._enabled = function(a, b) {
            if (g || f.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = P(d[c], this, !0);
                else this._siblings = P(this.target, this, !0)
            }
            return B.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, E.to = function(a, b, c) {
            return new E(a, b, c)
        }, E.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new E(a, b, c)
        }, E.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new E(a, b, d)
        }, E.delayedCall = function(a, b, c, d, e) {
            return new E(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }, E.set = function(a, b) {
            return new E(a, 0, b)
        }, E.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : E.selector(a) || a;
            var c, d, e, f;
            if ((m(a) || F(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(E.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else
                for (d = P(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }, E.killTweensOf = E.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = E.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var S = q("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = S.prototype
        }, !0);
        if (e = S.prototype, S.version = "1.10.1", S.API = 2, e._firstPT = null, e._addTween = function(a, b, c, d, e, f) {
            var g, h;
            return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                _next: this._firstPT,
                t: a,
                p: b,
                s: c,
                c: g,
                f: "function" == typeof a[b],
                n: e || b,
                r: f
            }, h._next && (h._next._prev = h), h) : void 0
        }, e.setRatio = function(a) {
            for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = 0 | b + (b > 0 ? .5 : -.5) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
        }, e._kill = function(a) {
            var b, c = this._overwriteProps,
                d = this._firstPT;
            if (null != a[this._propName]) this._overwriteProps = [];
            else
                for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
            for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
            return !1
        }, e._roundProps = function(a, b) {
            for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
        }, E._onPluginEvent = function(a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h;) {
                    for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g
                }
                h = b._firstPT = e
            }
            for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
            return c
        }, S.activate = function(a) {
            for (var b = a.length; --b > -1;) a[b].API === S.API && (I[(new a[b])._propName] = a[b]);
            return !0
        }, p.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
            var b, c = a.propName,
                d = a.priority || 0,
                e = a.overwriteProps,
                f = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, g = q("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                    S.call(this, c, d), this._overwriteProps = e || []
                }, a.global === !0),
                h = g.prototype = new S(c);
            h.constructor = g, g.API = a.API;
            for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version, S.activate([g]), g
        }, c = a._gsQueue) {
            for (d = 0; c.length > d; d++) c[d]();
            for (e in n) n[e].func || a.console.log("GSAP encountered missing dependency: com.greensock." + e)
        }
        g = !1
    }
}(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite"], function(a, b) {
        var c, d, e, f, g = {
                css: {}
            }, h = {
                css: {}
            }, i = {
                css: {}
            }, j = {
                css: {}
            }, k = {}, l = document,
            m = l.documentElement || {}, n = [],
            o = function() {
                return !1
            }, p = 180 / Math.PI,
            q = l.all && !l.addEventListener,
            r = [],
            s = {}, t = 0,
            u = /^(?:a|input|textarea|button|select)$/i,
            v = 0,
            w = function() {
                for (var a = r.length; --a > -1;) r[a]()
            }, x = function(a) {
                r.push(a), 1 === r.length && b.ticker.addEventListener("tick", w)
            }, y = function(a) {
                for (var c = r.length; --c > -1;) r[c] === a && r.splice(c, 1);
                b.to(z, 0, {
                    overwrite: "all",
                    delay: 15,
                    onComplete: z
                })
            }, z = function() {
                r.length || b.ticker.removeEventListener("tick", w)
            }, A = function(a, b) {
                var c;
                for (c in b) void 0 === a[c] && (a[c] = b[c]);
                return a
            }, B = function(a, b) {
                return a = a || window.event, k.pageX = a.clientX + l.body.scrollLeft + m.scrollLeft, k.pageY = a.clientY + l.body.scrollTop + m.scrollTop, b && (a.returnValue = !1), k
            }, C = function(a) {
                return a ? ("string" == typeof a && (a = b.selector(a)), a.length && a !== window && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === window || a.nodeType && a.style ? a : null) : a
            }, D = function(a, b) {
                var d, e, f, g = a.style;
                if (void 0 === g[b]) {
                    for (f = ["O", "Moz", "ms", "Ms", "Webkit"], e = 5, d = b.charAt(0).toUpperCase() + b.substr(1); --e > -1 && void 0 === g[f[e] + d];);
                    if (0 > e) return "";
                    c = 3 === e ? "ms" : f[e], b = c + d
                }
                return b
            }, E = function(a, b, c) {
                var d = a.style;
                void 0 === d[b] && (b = D(a, b)), null == c ? d.removeProperty ? d.removeProperty(b.replace(/([A-Z])/g, "-$1").toLowerCase()) : d.removeAttribute(b) : void 0 !== d[b] && (d[b] = c)
            }, F = l.defaultView ? l.defaultView.getComputedStyle : o,
            G = function(a, b, c) {
                var d, e = (a._gsTransform || {})[b];
                return e || 0 === e ? e : (a.style[b] ? e = a.style[b] : (d = F(a)) ? (a = d.getPropertyValue(b.replace(/([A-Z])/g, "-$1").toLowerCase()), e = a || d.length ? a : d[b]) : a.currentStyle && (e = a.currentStyle[b]), c ? e : parseFloat(e) || 0)
            }, H = function(a, b, c) {
                var d = a.vars,
                    e = d[c],
                    f = a._listeners[b];
                "function" == typeof e && e.apply(d[c + "Scope"] || a, d[c + "Params"] || [a.pointerEvent]), f && a.dispatchEvent(b)
            }, I = {
                x: 0,
                y: 0
            }, J = function(a, b) {
                var c, d, e, f, g, h, i, j, k = C(a);
                if (!k) return j = a.min || a.minX || a.minRotation || 0, i = a.min || a.minY || 0, void 0 !== a.left ? a : {
                    left: j,
                    top: i,
                    width: (a.max || a.maxX || a.maxRotation || 0) - j,
                    height: (a.max || a.maxY || 0) - i
                };
                if (c = null != k.pageYOffset ? k.pageYOffset : null != l.scrollTop ? l.scrollTop : l.body.scrollTop || m.scrollTop || 0, d = null != k.pageXOffset ? k.pageXOffset : null != l.scrollLeft ? l.scrollLeft : l.body.scrollLeft || m.scrollLeft || 0, k === window) return {
                    top: c,
                    left: d,
                    width: m.clientWidth || k.innerWidth || l.body.clientWidth || 0,
                    height: k.innerHeight - 20 < m.clientHeight ? m.clientHeight : k.innerHeight || l.body.clientHeight || 0
                };
                if (b) {
                    for (g = k.offsetWidth, h = k.offsetHeight, i = k.offsetTop, j = k.offsetLeft; k = k.offsetParent;) i += k.offsetTop, j += k.offsetLeft;
                    return {
                        top: i,
                        left: j,
                        width: g,
                        height: h
                    }
                }
                return e = k.getBoundingClientRect(), f = k._gsTransform || I, {
                    top: e.top - f.y + c,
                    left: e.left - f.x + d,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }
            }, K = l.createElement("div"),
            L = D(K, "transformOrigin").replace(/([A-Z])/g, "-$1").toLowerCase(),
            M = D(K, "transform"),
            N = "" !== D(K, "perspective"),
            O = function(a) {
                var b = J(a, !0),
                    c = F(a),
                    d = L && c ? c.getPropertyValue(L) : "50% 50%",
                    e = d.split(" "),
                    f = -1 !== d.indexOf("left") ? "0%" : -1 !== d.indexOf("right") ? "100%" : e[0],
                    g = -1 !== d.indexOf("top") ? "0%" : -1 !== d.indexOf("bottom") ? "100%" : e[1],
                    h = a._gsTransform || I;
                return ("center" === g || null == g) && (g = "50%"), ("center" === f || isNaN(parseFloat(f))) && (f = "50%"), b.left += h.x + (-1 !== f.indexOf("%") ? b.width * parseFloat(f) / 100 : parseFloat(f)), b.top += h.y + (-1 !== g.indexOf("%") ? b.height * parseFloat(g) / 100 : parseFloat(g)), b
            }, P = function(a) {
                return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
            }, Q = function(a) {
                var b, c, d, e = [],
                    f = a.length;
                for (b = 0; f > b; b++)
                    if (c = a[b], P(c))
                        for (d = c.length, d = 0; c.length > d; d++) e.push(c[d]);
                    else e.push(c);
                return e
            }, R = "ontouchstart" in m && "orientation" in window,
            S = function(a) {
                for (var b = a.split(","), c = (void 0 !== K.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : void 0 !== K.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : a).split(","), d = {}, e = 7; --e > -1;) d[b[e]] = c[e], d[c[e]] = b[e];
                return d
            }("touchstart,touchmove,touchend,touchcancel"),
            T = function(a, b, c) {
                a.addEventListener ? a.addEventListener(S[b] || b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
            }, U = function(a, b, c) {
                a.removeEventListener ? a.removeEventListener(S[b] || b, c) : a.detachEvent && a.detachEvent("on" + b, c)
            }, V = function(a) {
                d = a.touches && a.touches.length > v, U(a.target, "touchend", V)
            }, W = function(a) {
                d = a.touches && a.touches.length > v, T(a.target, "touchend", V)
            }, X = 999999999999999,
            Y = function(a, b, c, d, e, f) {
                var g, h, i, j = {};
                if (b)
                    if (1 !== e && b instanceof Array)
                        for (j.end = g = [], i = b.length, h = 0; i > h; h++) g[h] = b[h] * e;
                    else j.end = "function" == typeof b ? function(c) {
                        return b.call(a, c) * e
                    } : b;
                return (c || 0 === c) && (j.max = c), (d || 0 === d) && (j.min = d), f && (j.velocity = 0), j
            }, Z = function(a) {
                var b;
                return a && a.getAttribute && "BODY" !== a.nodeName ? "true" === (b = a.getAttribute("data-clickable")) || "false" !== b && (a.onclick || u.test(a.nodeName + "")) ? !0 : Z(a.parentNode) : !1
            }, $ = function() {
                var a, b = l.createElement("div"),
                    c = l.createElement("div"),
                    d = c.style,
                    e = l.body || K;
                return d.display = "inline-block", d.position = "relative", b.style.cssText = c.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", b.appendChild(c), e.appendChild(b), f = c.offsetHeight + 18 > b.scrollHeight, d.width = "100%", M || (d.paddingRight = "500px", a = b.scrollLeft = b.scrollWidth - b.clientWidth, d.left = "-90px", a = a !== b.scrollLeft), e.removeChild(b), a
            }(),
            _ = function(a, c) {
                a = C(a), c = c || {};
                var d, e, g, h, i, j, k = l.createElement("div"),
                    m = k.style,
                    n = a.firstChild,
                    o = 0,
                    p = 0,
                    r = a.scrollTop,
                    s = a.scrollLeft,
                    t = 0,
                    u = 0,
                    v = 0;
                N && c.force3D !== !1 ? (i = "translate3d(", j = "px,0px)") : M && (i = "translate(", j = "px)"), this.scrollTop = function(a, b) {
                    return arguments.length ? void this.top(-a, b) : -this.top()
                }, this.scrollLeft = function(a, b) {
                    return arguments.length ? void this.left(-a, b) : -this.left()
                }, this.left = function(d, e) {
                    if (!arguments.length) return -(a.scrollLeft + p);
                    var f = a.scrollLeft - s,
                        g = p;
                    return (f > 2 || -2 > f) && !e ? (s = a.scrollLeft, b.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1
                    }), this.left(-s), void(c.onKill && c.onKill())) : (d = -d, 0 > d ? (p = 0 | d - .5, d = 0) : d > u ? (p = 0 | d - u, d = u) : p = 0, (p || g) && (i ? this._suspendTransforms || (m[M] = i + -p + "px," + -o + j) : m.left = -p + "px", $ && p + t >= 0 && (m.paddingRight = p + t + "px")), a.scrollLeft = 0 | d, void(s = a.scrollLeft))
                }, this.top = function(d, e) {
                    if (!arguments.length) return -(a.scrollTop + o);
                    var f = a.scrollTop - r,
                        g = o;
                    return (f > 2 || -2 > f) && !e ? (r = a.scrollTop, b.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1
                    }), this.top(-r), void(c.onKill && c.onKill())) : (d = -d, 0 > d ? (o = 0 | d - .5, d = 0) : d > v ? (o = 0 | d - v, d = v) : o = 0, (o || g) && (i ? this._suspendTransforms || (m[M] = i + -p + "px," + -o + j) : m.top = -o + "px"), a.scrollTop = 0 | d, void(r = a.scrollTop))
                }, this.maxScrollTop = function() {
                    return v
                }, this.maxScrollLeft = function() {
                    return u
                }, this.disable = function() {
                    for (n = k.firstChild; n;) h = n.nextSibling, a.appendChild(n), n = h;
                    a.removeChild(k)
                }, this.enable = function() {
                    if (n = a.firstChild, n !== k) {
                        for (; n;) h = n.nextSibling, k.appendChild(n), n = h;
                        a.appendChild(k), this.calibrate()
                    }
                }, this.calibrate = function(b) {
                    var c, h, i = a.clientWidth === d;
                    r = a.scrollTop, s = a.scrollLeft, (!i || a.clientHeight !== e || k.offsetHeight !== g || b) && ((o || p) && (c = this.left(), h = this.top(), this.left(-a.scrollLeft), this.top(-a.scrollTop)), (!i || b) && (m.display = "block", m.width = "auto", m.paddingRight = "0px", t = Math.max(0, a.scrollWidth - a.clientWidth), t && (t += G(a, "paddingLeft") + (f ? G(a, "paddingRight") : 0))), m.display = "inline-block", m.position = "relative", m.overflow = "visible", m.width = "100%", m.paddingRight = t + "px", f && (m.paddingBottom = G(a, "paddingBottom", !0)), q && (m.zoom = "1"), d = a.clientWidth, e = a.clientHeight, u = a.scrollWidth - d, v = a.scrollHeight - e, g = k.offsetHeight, (c || h) && (this.left(c), this.top(h)))
                }, this.content = k, this.element = a, this._suspendTransforms = !1, this.enable()
            }, ab = function(c, f) {
                a.call(this, c), c = C(c), e || (e = (window.GreenSockGlobals || window).com.greensock.plugins.ThrowPropsPlugin), this.vars = f = f || {}, this.target = c, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(f.dragResistance) || 0, this.edgeResistance = isNaN(f.edgeResistance) ? 1 : parseFloat(f.edgeResistance) || 0;
                var k, m, r, u, w, z, D, F, I, K, L, M, N, P, Q, V, $, bb, cb, db, eb, fb, gb = (f.type || (q ? "top,left" : "x,y")).toLowerCase(),
                    hb = -1 !== gb.indexOf("x") || -1 !== gb.indexOf("y"),
                    ib = -1 !== gb.indexOf("rotation"),
                    jb = hb ? "x" : "left",
                    kb = hb ? "y" : "top",
                    lb = -1 !== gb.indexOf("x") || -1 !== gb.indexOf("left") || "scroll" === gb,
                    mb = -1 !== gb.indexOf("y") || -1 !== gb.indexOf("top") || "scroll" === gb,
                    nb = this,
                    ob = C(f.trigger || c),
                    pb = {}, qb = function(a) {
                        if ($) {
                            var d = nb.x,
                                e = nb.y,
                                f = 1e-6;
                            f > d && d > -f && (d = 0), f > e && e > -f && (e = 0), ib ? (N.rotation = nb.rotation = nb.x, b.set(c, M)) : k ? (mb && k.top(e), lb && k.left(d)) : hb ? (mb && (N.y = e), lb && (N.x = d), b.set(c, M)) : (mb && (c.style.top = e + "px"), lb && (c.style.left = d + "px")), D && !a && H(nb, "drag", "onDrag")
                        }
                        $ = !1
                    }, rb = function(a, b) {
                        var d;
                        hb ? (nb.y = c._gsTransform.y, nb.x = c._gsTransform.x) : ib ? nb.x = nb.rotation = c._gsTransform.rotation : k ? (nb.y = k.top(), nb.x = k.left()) : (nb.y = parseInt(c.style.top, 10) || 0, nb.x = parseInt(c.style.left, 10) || 0), !cb && !db || b || (cb && (d = cb(nb.x), d !== nb.x && (nb.x = d, ib && (nb.rotation = d), $ = !0)), db && (d = db(nb.y), d !== nb.y && (nb.y = d, $ = !0)), $ && qb(!0)), f.onThrowUpdate && !a && f.onThrowUpdate.apply(f.onThrowUpdateScope || nb, f.onThrowUpdateParams || n)
                    }, sb = function() {
                        var a, b, d, e;
                        z = !1, k ? (k.calibrate(), nb.minX = I = -k.maxScrollLeft(), nb.minY = L = -k.maxScrollTop(), nb.maxX = F = nb.maxY = K = 0, z = !0) : f.bounds && (a = J(f.bounds), ib ? (nb.minX = I = a.left, nb.maxX = F = a.left + a.width, nb.minY = L = nb.maxY = K = 0) : void 0 !== f.bounds.maxX || void 0 !== f.bounds.maxY ? (a = f.bounds, nb.minX = I = a.minX, nb.minY = L = a.minY, nb.maxX = F = a.maxX, nb.maxY = K = a.maxY) : (b = J(c), nb.minX = I = (hb ? 0 : G(c, "left")) + a.left - b.left, nb.minY = L = (hb ? 0 : G(c, "top")) + a.top - b.top, nb.maxX = F = I + (a.width - b.width), nb.maxY = K = L + (a.height - b.height)), I > F && (nb.minX = F, nb.maxX = F = I, I = nb.minX), L > K && (nb.minY = K, nb.maxY = K = L, L = nb.minY), ib && (nb.minRotation = I, nb.maxRotation = F), z = !0), f.liveSnap && (d = f.liveSnap === !0 ? f.snap || {} : f.liveSnap, e = d instanceof Array || "function" == typeof d, ib ? (cb = wb(e ? d : d.rotation, I, F, 1), db = null) : (cb = wb(e ? d : d.x || d.left || d.scrollLeft, I, F, k ? -1 : 1), db = wb(e ? d : d.y || d.top || d.scrollTop, L, K, k ? -1 : 1)))
                    }, tb = function(a, b) {
                        var d, g, h;
                        a && e ? (a === !0 && (d = f.snap || {}, g = d instanceof Array || "function" == typeof d, a = {
                            resistance: (f.throwResistance || f.resistance || 1e3) / (ib ? 10 : 1)
                        }, ib ? a.rotation = Y(nb, g ? d : d.rotation, F, I, 1, b) : (lb && (a[jb] = Y(nb, g ? d : d.x || d.left || d.scrollLeft, F, I, k ? -1 : 1, b)), mb && (a[kb] = Y(nb, g ? d : d.y || d.top || d.scrollTop, K, L, k ? -1 : 1, b)))), nb.tween = h = e.to(k || c, {
                            throwProps: a,
                            ease: f.ease || Power3.easeOut,
                            onComplete: f.onThrowComplete,
                            onCompleteParams: f.onThrowCompleteParams,
                            onCompleteScope: f.onThrowCompleteScope || nb,
                            onUpdate: f.fastMode ? f.onThrowUpdate : rb,
                            onUpdateParams: f.onThrowUpdateParams,
                            onUpdateScope: f.onThrowUpdateScope || nb
                        }, isNaN(f.maxDuration) ? 2 : f.maxDuration, isNaN(f.minDuration) ? .5 : f.minDuration, isNaN(f.overshootTolerance) ? 1 - nb.edgeResistance + .2 : f.overshootTolerance), f.fastMode || (k && (k._suspendTransforms = !0), h.seek(h.duration()), rb(!0, !0), nb.endX = nb.x, nb.endY = nb.y, ib && (nb.endRotation = nb.x), h.play(0), rb(!0, !0), k && (k._suspendTransforms = !1))) : z && nb.applyBounds()
                    }, ub = function() {
                        var a = 1 - nb.edgeResistance;
                        k ? (sb(), w = k.top(), u = k.left()) : (vb() ? (rb(!0, !0), sb()) : nb.applyBounds(), ib ? (V = O(c), rb(!0, !0), u = nb.x, w = nb.y = Math.atan2(V.top - r, m - V.left) * p) : (w = G(c, kb), u = G(c, jb))), z && a && (u > F ? u = F + (u - F) / a : I > u && (u = I - (I - u) / a), ib || (w > K ? w = K + (w - K) / a : L > w && (w = L - (L - w) / a)))
                    }, vb = function() {
                        return nb.tween && nb.tween.isActive()
                    }, wb = function(a, b, c, d) {
                        return "function" == typeof a ? function(e) {
                            var f = nb.isDragging ? 1 - nb.edgeResistance : 1;
                            return a.call(nb, e > c ? c + (e - c) * f : b > e ? b + (e - b) * f : e) * d
                        } : a instanceof Array ? function(d) {
                            for (var e, f, g = a.length, h = 0, i = X; --g > -1;) e = a[g], f = e - d, 0 > f && (f = -f), i > f && e >= b && c >= e && (h = g, i = f);
                            return a[h]
                        } : isNaN(a) ? function(a) {
                            return a
                        } : function() {
                            return a * d
                        }
                    }, xb = function(a) {
                        if (!nb.isDragging && a) {
                            if (nb.pointerEvent = a, S[a.type] ? (fb = -1 !== a.type.indexOf("touch") ? ob : l, T(fb, "touchend", zb), T(fb, "touchmove", yb), T(fb, "touchcancel", zb), T(l, "touchstart", W)) : (fb = null, T(l, "mousemove", yb), T(l, "mouseup", zb)), eb = Z(a.target) && !f.dragClickables) return void T(a.target, "change", zb);
                            q ? a = B(a, !0) : a.touches && a.touches.length > v + 1 || (a.preventDefault(), a.preventManipulation && a.preventManipulation()), a.changedTouches ? (a = P = a.changedTouches[0], Q = a.identifier) : a.pointerId ? Q = a.pointerId : P = null, v++, x(qb), nb.tween && nb.tween.kill(), b.killTweensOf(k || c, !0, pb), r = nb.pointerY = a.pageY, m = nb.pointerX = a.pageX, ub(), nb.tween = null, ib || k || f.zIndexBoost === !1 || (c.style.zIndex = ab.zIndex++), nb.isDragging = !0, D = !(!f.onDrag && !nb._listeners.drag), $ = !1, ib || E(ob, "cursor", f.cursor || "move"), H(nb, "dragstart", "onDragStart")
                        }
                    }, yb = function(a) {
                        if (!d && nb.isDragging) {
                            q ? a = B(a, !0) : (a.preventDefault(), a.preventManipulation && a.preventManipulation()), nb.pointerEvent = a;
                            var b, c, e, f, g, h, i = a.changedTouches,
                                j = 1 - nb.dragResistance,
                                k = 1 - nb.edgeResistance;
                            if (i) {
                                if (a = i[0], a !== P && a.identifier !== Q) {
                                    for (g = i.length; --g > -1 && (a = i[g]).identifier !== Q;);
                                    if (0 > g) return
                                }
                            } else if (a.pointerId && Q && a.pointerId !== Q) return;
                            nb.pointerX = a.pageX, nb.pointerY = a.pageY, $ = !0, ib ? (f = Math.atan2(V.top - a.pageY, a.pageX - V.left) * p, h = nb.y - f, nb.y = f, h > 180 ? w -= 360 : -180 > h && (w += 360), e = u + (w - f) * j) : (c = a.pageY - r, b = a.pageX - m, e = b > 2 || -2 > b ? u + b * j : u, f = c > 2 || -2 > c ? w + c * j : w), cb || db ? (cb && (e = cb(e)), db && (f = db(f))) : z && (e > F ? e = F + (e - F) * k : I > e && (e = I + (e - I) * k), ib || (f > K ? f = K + (f - K) * k : L > f && (f = L + (f - L) * k))), nb.x !== e || nb.y !== f && !ib ? (nb.x = nb.endX = e, ib ? nb.endRotation = e : nb.y = nb.endY = f) : $ = !1
                        }
                    }, zb = function(a, b) {
                        if (!a || !Q || b || !a.pointerId || a.pointerId === Q) {
                            var c, d, e, g, h = a;
                            if (fb ? (U(fb, "touchend", zb), U(fb, "touchmove", yb), U(fb, "touchcancel", zb), U(l, "touchstart", W)) : (U(l, "mouseup", zb), U(l, "mousemove", yb)), $ = !1, eb) return a && U(a.target, "change", zb), H(nb, "click", "onClick"), void(eb = !1);
                            if (y(qb), ib || E(ob, "cursor", f.cursor || "move"), nb.isDragging = !1, v--, a) {
                                if (q && (a = B(a, !1)), c = a.changedTouches, c && (a = c[0], a !== P && a.identifier !== Q)) {
                                    for (g = c.length; --g > -1 && (a = c[g]).identifier !== Q;);
                                    if (0 > g) return
                                }
                                nb.pointerEvent = h, nb.pointerX = a.pageX, nb.pointerY = a.pageY, e = a.pageY - r, d = a.pageX - m
                            }
                            return h && 2 > d && d > -2 && 2 > e && e > -2 ? H(nb, "click", "onClick") : (tb(f.throwProps), q || !h || !f.dragClickables && Z(h.target) || (h.preventDefault(), h.preventManipulation && h.preventManipulation())), H(nb, "dragend", "onDragEnd"), !0
                        }
                    };
                this.startDrag = xb, this.endDrag = function(a) {
                    zb(a, !0)
                }, this.applyBounds = function(a) {
                    var b, c;
                    return a && f.bounds !== a ? (f.bounds = a, nb.update(!0)) : (rb(!0), sb(), z && (b = nb.x, c = nb.y, z && (b > F ? b = F : I > b && (b = I), c > K ? c = K : L > c && (c = L)), (nb.x !== b || nb.y !== c) && (nb.x = nb.endX = b, ib ? nb.endRotation = b : nb.y = nb.endY = c, $ = !0, qb())), nb)
                }, this.update = function(a) {
                    var b = nb.x,
                        c = nb.y;
                    return a ? nb.applyBounds() : rb(!0), nb.isDragging && (b !== nb.x || c !== nb.y && !ib) && ub(), nb
                }, this.enable = function() {
                    var a;
                    return T(ob, "mousedown", xb), T(ob, "touchstart", xb), ib || E(ob, "cursor", f.cursor || "move"), E(ob, "userSelect", "none"), E(ob, "touchCallout", "none"), E(ob, "touchAction", "none"), e && e.track(k || c, hb ? "x,y" : ib ? "rotation" : "top,left"), k && k.enable(), c._gsDragID = a = "d" + t++, s[a] = this, k && (k.element._gsDragID = a), b.set(c, {
                        x: "+=0"
                    }), this.update(), nb
                }, this.disable = function() {
                    var a = this.isDragging;
                    return ib || E(ob, "cursor", null), b.killTweensOf(k || c, !0, pb), E(ob, "userSelect", "text"), E(ob, "touchCallout", "default"), E(ob, "MSTouchAction", "auto"), U(ob, "mousedown", xb), U(ob, "touchstart", xb), fb && (U(fb, "touchcancel", zb), U(fb, "touchend", zb), U(fb, "touchmove", yb)), U(l, "mouseup", zb), U(l, "mousemove", yb), e && e.untrack(k || c, hb ? "x,y" : ib ? "rotation" : "top,left"), k && k.disable(), y(qb), delete s[c._gsDragID], this.isDragging = eb = !1, a && H(this, "dragend", "onDragEnd"), nb
                }, -1 !== gb.indexOf("scroll") && (k = this.scrollProxy = new _(c, A({
                    onKill: function() {
                        nb.isDragging && zb(null)
                    }
                }, f)), c.style.overflowY = mb && !R ? "auto" : "hidden", c.style.overflowX = lb && !R ? "auto" : "hidden", c = k.content), ob.ondragstart = ob.onselectstart = o, f.force3D !== !1 && b.set(c, {
                    force3D: !0
                }), ib ? pb.rotation = 1 : (lb && (pb[jb] = 1), mb && (pb[kb] = 1)), ib ? (M = j, N = M.css, M.overwrite = !1) : hb && (M = lb && mb ? g : lb ? h : i, N = M.css, M.overwrite = !1), bb = ab.get(this.target), bb && bb.disable(), this.isDragging = !1, this.enable()
            }, bb = ab.prototype = new a;
        return bb.constructor = ab, bb.pointerX = bb.pointerY = 0, ab.version = "0.9.4", ab.zIndex = 1e3, T(l, "touchcancel", function() {}), ab.create = function(a, c) {
            "string" == typeof a && (a = b.selector(a));
            for (var d = P(a) ? Q(a) : [a], e = d.length; --e > -1;) d[e] = new ab(d[e], c);
            return d
        }, ab.get = function(a) {
            return s[(C(a) || {})._gsDragID]
        }, ab
    }, !0)
}), window._gsDefine && window._gsQueue.pop()(), ! function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function() {}, i = function(a, b) {
            return a - b
        }, j = {
            n: {}
        }, k = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = k.listeners(a),
                j = 0,
                l = [],
                m = {}, n = [],
                o = b;
            b = a, c = 0;
            for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (l.sort(i); l[j] < 0;)
                if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
            for (p = 0; q > p; p++)
                if (e = h[p], "zIndex" in e)
                    if (e.zIndex == l[j]) {
                        if (n.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break;
                        while (e)
                    } else m[e.zIndex] = e;
                    else if (n.push(e.apply(d, g)), c) break;
            return c = f, b = o, n.length ? n : null
        };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
            n: {}
        });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
            if (d.f[e] == b) return h;
        return d.f.push(b),
        function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, k.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function() {
        c = 1
    }, k.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function() {
        return b.split(f)
    }, k.off = k.unbind = function(a, b) {
        if (!a) return void(k._events = j = {
            n: {}
        });
        var c, d, h, i, l, m, n, o = a.split(f),
            p = [j];
        for (i = 0, l = o.length; l > i; i++)
            for (m = 0; m < p.length; m += h.length - 2) {
                if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
                else
                    for (d in c) c[e](d) && h.push(c[d]);
                p.splice.apply(p, h)
            }
        for (i = 0, l = p.length; l > i; i++)
            for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) {
                                c.f.splice(m, 1);
                                break
                            }!c.f.length && delete c.f
                    }
                    for (d in c.n)
                        if (c.n[e](d) && c.n[d].f) {
                            var q = c.n[d].f;
                            for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) {
                                    q.splice(m, 1);
                                    break
                                }!q.length && delete c.n[d].f
                        }
                } else {
                    delete c.f;
                    for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
    }, k.once = function(a, b) {
        var c = function() {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k
    }) : a.eve = k
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    function c(a) {
        if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, V)) return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
        var d = Array.prototype.slice.call(arguments, 0);
        if (c.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
                e.call(c._engine.create[D](c, d))
            })
        }
        return c._engine.create[D](c, arguments)
    }

    function d(a) {
        if ("function" == typeof a || Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[z](c) && (b[c] = d(a[c]));
        return b
    }

    function e(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return a.push(a.splice(c, 1)[0])
    }

    function f(a, b, c) {
        function d() {
            var f = Array.prototype.slice.call(arguments, 0),
                g = f.join("␀"),
                h = d.cache = d.cache || {}, i = d.count = d.count || [];
            return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
        }
        return d
    }

    function g() {
        return this.hex
    }

    function h(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }

    function i(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }

    function j(a, b, c, d, e, f, g, h, j) {
        null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
        for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
            var q = k * m[p] + k,
                r = i(q, a, c, e, g),
                s = i(q, b, d, f, h),
                t = r * r + s * s;
            o += n[p] * N.sqrt(t)
        }
        return k * o
    }

    function k(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
            var k, l = 1,
                m = l / 2,
                n = l - m,
                o = .01;
            for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;) m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
            return n
        }
    }

    function l(a, b, c, d, e, f, g, h) {
        if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k,
                    m = j / k,
                    n = +l.toFixed(2),
                    o = +m.toFixed(2);
                if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2))) return {
                    x: l,
                    y: m
                }
            }
        }
    }

    function m(a, b, d) {
        var e = c.bezierBBox(a),
            f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
        for (var g = j.apply(0, a), h = j.apply(0, b), i = O(~~(g / 5), 1), k = O(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
            var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
            m.push({
                x: r.x,
                y: r.y,
                t: q / i
            })
        }
        for (q = 0; k + 1 > q; q++) r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
            x: r.x,
            y: r.y,
            t: q / k
        });
        for (q = 0; i > q; q++)
            for (var s = 0; k > s; s++) {
                var t = m[q],
                    u = m[q + 1],
                    v = n[s],
                    w = n[s + 1],
                    x = Q(u.x - t.x) < .001 ? "y" : "x",
                    y = Q(w.x - v.x) < .001 ? "y" : "x",
                    z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
                if (z) {
                    if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                    o[z.x.toFixed(4)] = z.y.toFixed(4);
                    var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                        B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                    A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({
                        x: z.x,
                        y: z.y,
                        t1: P(A, 1),
                        t2: P(B, 1)
                    }))
                }
            }
        return p
    }

    function n(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
            var s = a[q];
            if ("M" == s[0]) e = i = s[1], f = j = s[2];
            else {
                "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var t = 0, u = b.length; u > t; t++) {
                    var v = b[t];
                    if ("M" == v[0]) g = k = v[1], h = l = v[2];
                    else {
                        "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var w = m(n, o, d);
                        if (d) p += w;
                        else {
                            for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w)
                        }
                    }
                }
            }
        }
        return p
    }

    function o(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function p() {
        return this.x + H + this.y + H + this.width + " × " + this.height
    }

    function q(a, b, c, d, e, f) {
        function g(a) {
            return ((l * a + k) * a + j) * a
        }

        function h(a, b) {
            var c = i(a, b);
            return ((o * c + n) * c + m) * c
        }

        function i(a, b) {
            var c, d, e, f, h, i;
            for (e = a, i = 0; 8 > i; i++) {
                if (f = g(e) - a, Q(f) < b) return e;
                if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6) break;
                e -= f / h
            }
            if (c = 0, d = 1, e = a, c > e) return c;
            if (e > d) return d;
            for (; d > c;) {
                if (f = g(e), Q(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        var j = 3 * b,
            k = 3 * (d - b) - j,
            l = 1 - j - k,
            m = 3 * c,
            n = 3 * (e - c) - m,
            o = 1 - m - n;
        return h(a, 1 / (200 * f))
    }

    function r(a, b) {
        var c = [],
            d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a) a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
            c.sort(lb)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }

    function s(a, d, e, f, g, h) {
        e = _(e);
        var i, j, k, l, m, n, p = a.ms,
            r = {}, s = {}, t = {};
        if (f)
            for (v = 0, x = ic.length; x > v; v++) {
                var u = ic[v];
                if (u.el.id == d.id && u.anim == a) {
                    u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                    break
                }
            } else f = +s;
        for (var v = 0, x = a.percents.length; x > v; v++) {
            if (a.percents[v] == e || a.percents[v] > f * a.top) {
                e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
                break
            }
            f && d.attr(a.anim[a.percents[v]])
        }
        if (i) {
            if (j) j.initstatus = f, j.start = new Date - j.ms * f;
            else {
                for (var y in i)
                    if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y))) switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
                        case T:
                            t[y] = (s[y] - r[y]) / p;
                            break;
                        case "colour":
                            r[y] = c.getRGB(r[y]);
                            var A = c.getRGB(s[y]);
                            t[y] = {
                                r: (A.r - r[y].r) / p,
                                g: (A.g - r[y].g) / p,
                                b: (A.b - r[y].b) / p
                            };
                            break;
                        case "path":
                            var B = Kb(r[y], s[y]),
                                C = B[1];
                            for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                                t[y][v] = [0];
                                for (var D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                            }
                            break;
                        case "transform":
                            var G = d._,
                                H = Pb(G[y], s[y]);
                            if (H)
                                for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)
                                    for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
                            else {
                                var K = d.matrix || new o,
                                    L = {
                                        _: {
                                            transform: G.transform
                                        },
                                        getBBox: function() {
                                            return d.getBBox(1)
                                        }
                                    };
                                r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
                            }
                            break;
                        case "csv":
                            var M = I(i[y])[J](w),
                                N = I(r[y])[J](w);
                            if ("clip-rect" == y)
                                for (r[y] = N, t[y] = [], v = N.length; v--;) t[y][v] = (M[v] - r[y][v]) / p;
                            s[y] = M;
                            break;
                        default:
                            for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;) t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
                    }
                    var O = i.easing, P = c.easing_formulas[O];
                if (!P)
                    if (P = I(O).match(Z), P && 5 == P.length) {
                        var Q = P;
                        P = function(a) {
                            return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
                        }
                    } else P = nb;
                if (n = i.start || a.start || +new Date, u = {
                    anim: a,
                    percent: e,
                    timestamp: n,
                    start: n + (a.del || 0),
                    status: 0,
                    initstatus: f || 0,
                    stop: !1,
                    ms: p,
                    easing: P,
                    from: r,
                    diff: t,
                    to: s,
                    el: d,
                    callback: i.callback,
                    prev: m,
                    next: l,
                    repeat: h || a.times,
                    origin: d.attr(),
                    totalOrigin: g
                }, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length)) return kc();
                k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }

    function t(a) {
        for (var b = 0; b < ic.length; b++) ic[b].el.paper == a && ic.splice(b--, 1)
    }
    c.version = "2.1.2", c.eve = b;
    var u, v, w = /[, ]+/,
        x = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        }, y = /\{(\d+)\}/g,
        z = "hasOwnProperty",
        A = {
            doc: document,
            win: a
        }, B = {
            was: Object.prototype[z].call(A.win, "Raphael"),
            is: A.win.Raphael
        }, C = function() {
            this.ca = this.customAttributes = {}
        }, D = "apply",
        E = "concat",
        F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
        G = "",
        H = " ",
        I = String,
        J = "split",
        K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [J](H),
        L = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, M = I.prototype.toLowerCase,
        N = Math,
        O = N.max,
        P = N.min,
        Q = N.abs,
        R = N.pow,
        S = N.PI,
        T = "number",
        U = "string",
        V = "array",
        W = Object.prototype.toString,
        X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        Y = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        }, Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        $ = N.round,
        _ = parseFloat,
        ab = parseInt,
        bb = I.prototype.toUpperCase,
        cb = c._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        }, db = c._availableAnimAttrs = {
            blur: T,
            "clip-rect": "csv",
            cx: T,
            cy: T,
            fill: "colour",
            "fill-opacity": T,
            "font-size": T,
            height: T,
            opacity: T,
            path: "path",
            r: T,
            rx: T,
            ry: T,
            stroke: "colour",
            "stroke-opacity": T,
            "stroke-width": T,
            transform: "transform",
            width: T,
            x: T,
            y: T
        }, eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        fb = {
            hs: 1,
            rg: 1
        }, gb = /,?([achlmqrstvxz]),?/gi,
        hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        lb = function(a, b) {
            return _(a) - _(b)
        }, mb = function() {}, nb = function(a) {
            return a
        }, ob = c._rectPath = function(a, b, c, d, e) {
            return e ? [
                ["M", a + e, b],
                ["l", c - 2 * e, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - 2 * e],
                ["a", e, e, 0, 0, 1, -e, e],
                ["l", 2 * e - c, 0],
                ["a", e, e, 0, 0, 1, -e, -e],
                ["l", 0, 2 * e - d],
                ["a", e, e, 0, 0, 1, e, -e],
                ["z"]
            ] : [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ]
        }, pb = function(a, b, c, d) {
            return null == d && (d = c), [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ]
        }, qb = c._getPath = {
            path: function(a) {
                return a.attr("path")
            },
            circle: function(a) {
                var b = a.attrs;
                return pb(b.cx, b.cy, b.r)
            },
            ellipse: function(a) {
                var b = a.attrs;
                return pb(b.cx, b.cy, b.rx, b.ry)
            },
            rect: function(a) {
                var b = a.attrs;
                return ob(b.x, b.y, b.width, b.height, b.r)
            },
            image: function(a) {
                var b = a.attrs;
                return ob(b.x, b.y, b.width, b.height)
            },
            text: function(a) {
                var b = a._getBBox();
                return ob(b.x, b.y, b.width, b.height)
            },
            set: function(a) {
                var b = a._getBBox();
                return ob(b.x, b.y, b.width, b.height)
            }
        }, rb = c.mapPath = function(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = Kb(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        };
    if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var sb, tb = A.doc.createElement("div");
        if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj) return c.type = G;
        tb = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
        return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, -1).toLowerCase() == b
    }, c.angle = function(a, b, d, e, f, g) {
        if (null == f) {
            var h = a - d,
                i = b - e;
            return h || i ? (180 + 180 * N.atan2(-i, -h) / S + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
    }, c.rad = function(a) {
        return a % 360 * S / 180
    }, c.deg = function(a) {
        return 180 * a / S % 360
    }, c.snapTo = function(a, b, d) {
        if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
            for (var e = a.length; e--;)
                if (Q(a[e] - b) <= d) return a[e]
        } else {
            a = +a;
            var f = b % a;
            if (d > f) return b - f;
            if (f > a - d) return b - f + a
        }
        return b
    }, c.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = 0 | 16 * N.random(),
            c = "x" == a ? b : 8 | 3 & b;
        return c.toString(16)
    }), c.setWindow = function(a) {
        b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
    };
    var ub = function(a) {
        if (c.vml) {
            var b, d = /^\s+|\s+$/g;
            try {
                var e = new ActiveXObject("htmlfile");
                e.write("<body>"), e.close(), b = e.body
            } catch (g) {
                b = createPopup().document.body
            }
            var h = b.createTextRange();
            ub = f(function(a) {
                try {
                    b.style.color = I(a).replace(d, G);
                    var c = h.queryCommandValue("ForeColor");
                    return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
                } catch (e) {
                    return "none"
                }
            })
        } else {
            var i = A.doc.createElement("i");
            i.title = "Raphaël Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ub = f(function(a) {
                return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
            })
        }
        return ub(a)
    }, vb = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, wb = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, xb = function() {
            return this.hex
        }, yb = function(a, b, d) {
            if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
                var e = c.getRGB(a);
                a = e.r, b = e.g, d = e.b
            }
            return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
        }, zb = function(a, b, d, e) {
            a *= 255, b *= 255, d *= 255;
            var f = {
                r: a,
                g: b,
                b: d,
                hex: c.rgb(a, b, d),
                toString: xb
            };
            return c.is(e, "finite") && (f.opacity = e), f
        };
    c.color = function(a) {
        var b;
        return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
            hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xb, a
    }, c.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.rgb2hsb = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
            h: d,
            s: e,
            b: f,
            toString: vb
        }
    }, c.rgb2hsl = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
            h: d,
            s: e,
            l: f,
            toString: wb
        }
    }, c._path2string = function() {
        return this.join(",").replace(gb, "$1")
    }, c._preload = function(a, b) {
        var c = A.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, A.doc.body.removeChild(this)
        }, c.onerror = function() {
            A.doc.body.removeChild(this)
        }, A.doc.body.appendChild(c), c.src = a
    }, c.getRGB = f(function(a) {
        if (!a || (a = I(a)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        };
        if ("none" == a) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: g
        };
        !(fb[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ub(a));
        var b, d, e, f, h, i, j = a.match(X);
        return j ? (j[2] && (e = ab(j[2].substring(5), 16), d = ab(j[2].substring(3, 5), 16), b = ab(j[2].substring(1, 3), 16)), j[3] && (e = ab((h = j[3].charAt(3)) + h, 16), d = ab((h = j[3].charAt(2)) + h, 16), b = ab((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {
            r: b,
            g: d,
            b: e,
            toString: g
        }, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        }
    }, c), c.hsb = f(function(a, b, d) {
        return c.hsb2rgb(a, b, d).hex
    }), c.hsl = f(function(a, b, d) {
        return c.hsl2rgb(a, b, d).hex
    }), c.rgb = f(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), c.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: a || .75
        }, c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        })), c.hex
    }, c.getColor.reset = function() {
        delete this.start
    }, c.parsePathString = function(a) {
        if (!a) return null;
        var b = Ab(a);
        if (b.arr) return Cb(b.arr);
        var d = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, e = [];
        return c.is(a, V) && c.is(a[0], V) && (e = Cb(a)), e.length || I(a).replace(hb, function(a, b, c) {
            var f = [],
                g = b.toLowerCase();
            if (c.replace(jb, function(a, b) {
                b && f.push(+b)
            }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][E](f));
            else
                for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]););
        }), e.toString = c._path2string, b.arr = Cb(e), e
    }, c.parseTransformString = f(function(a) {
        if (!a) return null;
        var b = [];
        return c.is(a, V) && c.is(a[0], V) && (b = Cb(a)), b.length || I(a).replace(ib, function(a, c, d) {
            var e = [];
            M.call(c), d.replace(jb, function(a, b) {
                b && e.push(+b)
            }), b.push([c][E](e))
        }), b.toString = c._path2string, b
    });
    var Ab = function(a) {
        var b = Ab.ps = Ab.ps || {};
        return b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b) b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }), b[a]
    };
    c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = R(j, 3),
            l = R(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * N.atan2(q - s, r - t) / S;
        return (q > s || t > r) && (y += 180), {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: w,
                y: x
            },
            alpha: y
        }
    }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
        var j = Jb.apply(null, a);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, c.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, c.isBBoxIntersect = function(a, b) {
        var d = c.isPointInsideBBox;
        return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }, c.pathIntersection = function(a, b) {
        return n(a, b)
    }, c.pathIntersectionNumber = function(a, b) {
        return n(a, b, 1)
    }, c.isPointInsidePath = function(a, b, d) {
        var e = c.pathBBox(a);
        return c.isPointInsideBBox(e, b, d) && 1 == n(a, [
            ["M", b, d],
            ["H", e.x2 + 10]
        ], 1) % 2
    }, c._removedFactory = function(a) {
        return function() {
            b("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var Bb = c.pathBBox = function(a) {
        var b = Ab(a);
        if (b.bbox) return d(b.bbox);
        if (!a) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
        a = Kb(a);
        for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
            if (c = a[i], "M" == c[0]) e = c[1], f = c[2], g.push(e), h.push(f);
            else {
                var k = Jb(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
                g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
            }
        var l = P[D](0, g),
            m = P[D](0, h),
            n = O[D](0, g),
            o = O[D](0, h),
            p = n - l,
            q = o - m,
            r = {
                x: l,
                y: m,
                x2: n,
                y2: o,
                width: p,
                height: q,
                cx: l + p / 2,
                cy: m + q / 2
            };
        return b.bbox = d(r), r
    }, Cb = function(a) {
            var b = d(a);
            return b.toString = c._path2string, b
        }, Db = c._pathToRelative = function(a) {
            var b = Ab(a);
            if (b.rel) return Cb(b.rel);
            c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
            for (var j = i, k = a.length; k > j; j++) {
                var l = d[j] = [],
                    m = a[j];
                if (m[0] != M.call(m[0])) switch (l[0] = M.call(m[0]), l[0]) {
                    case "a":
                        l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                        break;
                    case "v":
                        l[1] = +(m[1] - f).toFixed(3);
                        break;
                    case "m":
                        g = m[1], h = m[2];
                    default:
                        for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                } else {
                    l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                    for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
                }
                var r = d[j].length;
                switch (d[j][0]) {
                    case "z":
                        e = g, f = h;
                        break;
                    case "h":
                        e += +d[j][r - 1];
                        break;
                    case "v":
                        f += +d[j][r - 1];
                        break;
                    default:
                        e += +d[j][r - 2], f += +d[j][r - 1]
                }
            }
            return d.toString = c._path2string, b.rel = Cb(d), d
        }, Eb = c._pathToAbsolute = function(a) {
            var b = Ab(a);
            if (b.abs) return Cb(b.abs);
            if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length) return [["M", 0, 0]];
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                i = 0,
                j = 0;
            "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
            for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
                if (d.push(k = []), l = a[n], l[0] != bb.call(l[0])) switch (k[0] = bb.call(l[0]), k[0]) {
                    case "A":
                        k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                        break;
                    case "V":
                        k[1] = +l[1] + f;
                        break;
                    case "H":
                        k[1] = +l[1] + e;
                        break;
                    case "R":
                        for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                        d.pop(), d = d[E](h(p, m));
                        break;
                    case "M":
                        g = +l[1] + e, i = +l[2] + f;
                    default:
                        for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
                } else if ("R" == l[0]) p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
                else
                    for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
                switch (k[0]) {
                    case "Z":
                        e = g, f = i;
                        break;
                    case "H":
                        e = k[1];
                        break;
                    case "V":
                        f = k[1];
                        break;
                    case "M":
                        g = k[k.length - 2], i = k[k.length - 1];
                    default:
                        e = k[k.length - 2], f = k[k.length - 1]
                }
            }
            return d.toString = c._path2string, b.abs = Cb(d), d
        }, Fb = function(a, b, c, d) {
            return [a, b, c, d, c, d]
        }, Gb = function(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }, Hb = function(a, b, c, d, e, g, h, i, j, k) {
            var l, m = 120 * S / 180,
                n = S / 180 * (+e || 0),
                o = [],
                p = f(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2),
                    r = (b - j) / 2,
                    s = q * q / (c * c) + r * r / (d * d);
                s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
                var t = c * c,
                    u = d * d,
                    v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * c * r / d + (a + i) / 2,
                    x = v * -d * q / c + (b + j) / 2,
                    y = N.asin(((b - x) / d).toFixed(9)),
                    z = N.asin(((j - x) / d).toFixed(9));
                y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
            }
            var A = z - y;
            if (Q(A) > m) {
                var B = z,
                    C = i,
                    D = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Hb(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                K = N.tan(A / 4),
                L = 4 / 3 * c * K,
                M = 4 / 3 * d * K,
                O = [a, b],
                P = [a + L * G, b - M * F],
                R = [i + L * I, j - M * H],
                T = [i, j];
            if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k) return [P, R, T][E](o);
            o = [P, R, T][E](o).join()[J](",");
            for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
            return U
        }, Ib = function(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return {
                x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
                y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h
            }
        }, Jb = f(function(a, b, c, d, e, f, g, h) {
            var i, j = e - 2 * c + a - (g - 2 * e + c),
                k = 2 * (c - a) - 2 * (e - c),
                l = a - c,
                m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
                n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
                o = [b, h],
                p = [a, g];
            return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
                min: {
                    x: P[D](0, p),
                    y: P[D](0, o)
                },
                max: {
                    x: O[D](0, p),
                    y: O[D](0, o)
                }
            }
        }),
        Kb = c._path2curve = f(function(a, b) {
            var c = !b && Ab(a);
            if (!b && c.curve) return Cb(c.curve);
            for (var d = Eb(a), e = b && Eb(b), f = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, g = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, h = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"][E](Hb[D](0, [b.x, b.y][E](a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][E](a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][E](Gb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"][E](Gb(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"][E](Fb(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"][E](Fb(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"][E](Fb(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"][E](Fb(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), i = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
                        a.splice(b, 1), l = O(d.length, e && e.length || 0)
                    }
                }, j = function(a, b, c, f, g) {
                    a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = O(d.length, e && e.length || 0))
                }, k = 0, l = O(d.length, e && e.length || 0); l > k; k++) {
                d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var m = d[k],
                    n = e && e[k],
                    o = m.length,
                    p = e && n.length;
                f.x = m[o - 2], f.y = m[o - 1], f.bx = _(m[o - 4]) || f.x, f.by = _(m[o - 3]) || f.y, g.bx = e && (_(n[p - 4]) || g.x), g.by = e && (_(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1]
            }
            return e || (c.curve = Cb(d)), e ? [d, e] : d
        }, null, Cb),
        Lb = (c._parseDots = f(function(a) {
            for (var b = [], d = 0, e = a.length; e > d; d++) {
                var f = {}, g = a[d].match(/^([^:]*):?([\d\.]*)/);
                if (f.color = c.getRGB(g[1]), f.color.error) return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
            }
            for (d = 1, e = b.length - 1; e > d; d++)
                if (!b[d].offset) {
                    for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                        if (b[j].offset) {
                            i = b[j].offset;
                            break
                        }
                    i || (i = 100, j = e), i = _(i);
                    for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
                }
            return b
        }), c._tear = function(a, b) {
            a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
        }),
        Mb = (c._tofront = function(a, b) {
            b.top !== a && (Lb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
        }, c._toback = function(a, b) {
            b.bottom !== a && (Lb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
        }, c._insertafter = function(a, b, c) {
            Lb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
        }, c._insertbefore = function(a, b, c) {
            Lb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
        }, c.toMatrix = function(a, b) {
            var c = Bb(a),
                d = {
                    _: {
                        transform: G
                    },
                    getBBox: function() {
                        return c
                    }
                };
            return Nb(d, b), d.matrix
        }),
        Nb = (c.transformPath = function(a, b) {
            return rb(a, Mb(a, b))
        }, c._extractTransform = function(a, b) {
            if (null == b) return a._.transform;
            b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
            var d = c.parseTransformString(b),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = a._,
                k = new o;
            if (j.transform = d || [], d)
                for (var l = 0, m = d.length; m > l; l++) {
                    var n, p, q, r, s, t = d[l],
                        u = t.length,
                        v = I(t[0]).toLowerCase(),
                        w = t[0] != v,
                        x = w ? k.invert() : 0;
                    "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
                }
            a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
        }),
        Ob = function(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }, Pb = c._equaliseTransform = function(a, b) {
            b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
            for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
                if (f = a[k] || Ob(b[k]), g = b[k] || Ob(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
                for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
            }
            return {
                from: i,
                to: j
            }
        };
    c._getContainer = function(a, b, d, e) {
        var f;
        return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
            container: f,
            width: f.style.pixelWidth || f.offsetWidth,
            height: f.style.pixelHeight || f.offsetHeight
        } : {
            container: f,
            width: b,
            height: d
        } : {
            container: 1,
            x: a,
            y: b,
            width: d,
            height: e
        } : void 0
    }, c.pathToRelative = Db, c._engine = {}, c.path2curve = Kb, c.matrix = function(a, b, c, d, e, f) {
        return new o(a, b, c, d, e, f)
    },
    function(a) {
        function b(a) {
            return a[0] * a[0] + a[1] * a[1]
        }

        function d(a) {
            var c = N.sqrt(b(a));
            a[0] && (a[0] /= c), a[1] && (a[1] /= c)
        }
        a.add = function(a, b, c, d, e, f) {
            var g, h, i, j, k = [
                    [],
                    [],
                    []
                ],
                l = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ],
                m = [
                    [a, c, e],
                    [b, d, f],
                    [0, 0, 1]
                ];
            for (a && a instanceof o && (m = [
                [a.a, a.c, a.e],
                [a.b, a.d, a.f],
                [0, 0, 1]
            ]), g = 0; 3 > g; g++)
                for (h = 0; 3 > h; h++) {
                    for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                    k[g][h] = j
                }
            this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
        }, a.invert = function() {
            var a = this,
                b = a.a * a.d - a.b * a.c;
            return new o(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
        }, a.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
        }, a.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b)
        }, a.scale = function(a, b, c, d) {
            null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
        }, a.rotate = function(a, b, d) {
            a = c.rad(a), b = b || 0, d = d || 0;
            var e = +N.cos(a).toFixed(9),
                f = +N.sin(a).toFixed(9);
            this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
        }, a.x = function(a, b) {
            return a * this.a + b * this.c + this.e
        }, a.y = function(a, b) {
            return a * this.b + b * this.d + this.f
        }, a.get = function(a) {
            return +this[I.fromCharCode(97 + a)].toFixed(4)
        }, a.toString = function() {
            return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, a.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, a.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, a.split = function() {
            var a = {};
            a.dx = this.e, a.dy = this.f;
            var e = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
            var f = -e[0][1],
                g = e[1][1];
            return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
        }, a.toTransformString = function(a) {
            var b = a || this[J]();
            return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(o.prototype);
    var Qb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    v.safari = "Apple Computer, Inc." == navigator.vendor && (Qb && Qb[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qb && Qb[1] < 8 ? function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    } : mb;
    for (var Rb = function() {
        this.returnValue = !1
    }, Sb = function() {
            return this.originalEvent.preventDefault()
        }, Tb = function() {
            this.cancelBubble = !0
        }, Ub = function() {
            return this.originalEvent.stopPropagation()
        }, Vb = function(a) {
            var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            return {
                x: a.clientX + c,
                y: a.clientY + b
            }
        }, Wb = function() {
            return A.doc.addEventListener ? function(a, b, c, d) {
                var e = function(a) {
                    var b = Vb(a);
                    return c.call(d, a, b.x, b.y)
                };
                if (a.addEventListener(b, e, !1), F && L[b]) {
                    var f = function(b) {
                        for (var e = Vb(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                            if (b.targetTouches[g].target == a) {
                                b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Sb, b.stopPropagation = Ub;
                                break
                            }
                        return c.call(d, b, e.x, e.y)
                    };
                    a.addEventListener(L[b], f, !1)
                }
                return function() {
                    return a.removeEventListener(b, e, !1), F && L[b] && a.removeEventListener(L[b], e, !1), !0
                }
            } : A.doc.attachEvent ? function(a, b, c, d) {
                var e = function(a) {
                    a = a || A.win.event;
                    var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                        e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
                        f = a.clientX + e,
                        g = a.clientY + b;
                    return a.preventDefault = a.preventDefault || Rb, a.stopPropagation = a.stopPropagation || Tb, c.call(d, a, f, g)
                };
                a.attachEvent("on" + b, e);
                var f = function() {
                    return a.detachEvent("on" + b, e), !0
                };
                return f
            } : void 0
        }(), Xb = [], Yb = function(a) {
            for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Xb.length; h--;) {
                if (c = Xb[h], F && a.touches) {
                    for (var i, j = a.touches.length; j--;)
                        if (i = a.touches[j], i.identifier == c.el._drag.id) {
                            d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break
                        }
                } else a.preventDefault();
                var k, l = c.el.node,
                    m = l.nextSibling,
                    n = l.parentNode,
                    o = l.style.display;
                A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
            }
        }, Zb = function(a) {
            c.unmousemove(Yb).unmouseup(Zb);
            for (var d, e = Xb.length; e--;) d = Xb[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
            Xb = []
        }, $b = c.el = {}, _b = K.length; _b--;)! function(a) {
        c[a] = $b[a] = function(b, d) {
            return c.is(b, "function") && (this.events = this.events || [], this.events.push({
                name: a,
                f: b,
                unbind: Wb(this.shape || this.node || A.doc, a, b, d || this)
            })), this
        }, c["un" + a] = $b["un" + a] = function(b) {
            for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
            return this
        }
    }(K[_b]);
    $b.data = function(a, d) {
        var e = kb[this.id] = kb[this.id] || {};
        if (0 == arguments.length) return e;
        if (1 == arguments.length) {
            if (c.is(a, "object")) {
                for (var f in a) a[z](f) && this.data(f, a[f]);
                return this
            }
            return b("raphael.data.get." + this.id, this, e[a], a), e[a]
        }
        return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
    }, $b.removeData = function(a) {
        return null == a ? kb[this.id] = {} : kb[this.id] && delete kb[this.id][a], this
    }, $b.getData = function() {
        return d(kb[this.id] || {})
    }, $b.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, $b.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var ac = [];
    $b.drag = function(a, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = i.clientX,
                k = i.clientY,
                l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            if (this._drag.id = i.identifier, F && i.touches)
                for (var n, o = i.touches.length; o--;)
                    if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
                        j = n.clientX, k = n.clientY;
                        break
                    }
            this._drag.x = j + m, this._drag.y = k + l, !Xb.length && c.mousemove(Yb).mouseup(Zb), Xb.push({
                el: this,
                move_scope: f,
                start_scope: g,
                end_scope: h
            }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
        }
        return this._drag = {}, ac.push({
            el: this,
            start: i
        }), this.mousedown(i), this
    }, $b.onDragOver = function(a) {
        a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
    }, $b.undrag = function() {
        for (var a = ac.length; a--;) ac[a].el == this && (this.unmousedown(ac[a].start), ac.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
        !ac.length && c.unmousemove(Yb).unmouseup(Zb), Xb = []
    }, v.circle = function(a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0);
        return this.__set__ && this.__set__.push(e), e
    }, v.rect = function(a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.ellipse = function(a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f), f
    }, v.path = function(a) {
        a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
        var b = c._engine.path(c.format[D](c, arguments), this);
        return this.__set__ && this.__set__.push(b), b
    }, v.image = function(a, b, d, e, f) {
        var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.text = function(a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, I(d));
        return this.__set__ && this.__set__.push(e), e
    }, v.set = function(a) {
        !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new mc(a);
        return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
    }, v.setStart = function(a) {
        this.__set__ = a || this.set()
    }, v.setFinish = function() {
        var a = this.__set__;
        return delete this.__set__, a
    }, v.setSize = function(a, b) {
        return c._engine.setSize.call(this, a, b)
    }, v.setViewBox = function(a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
    }, v.top = v.bottom = null, v.raphael = c;
    var bc = function(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        }
    };
    v.getElementByPoint = function(a, b) {
        var c = this,
            d = c.canvas,
            e = A.doc.elementFromPoint(a, b);
        if (A.win.opera && "svg" == e.tagName) {
            var f = bc(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e) return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
        return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
    }, v.getElementsByBBox = function(a) {
        var b = this.set();
        return this.forEach(function(d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
        }), b
    }, v.getById = function(a) {
        for (var b = this.bottom; b;) {
            if (b.id == a) return b;
            b = b.next
        }
        return null
    }, v.forEach = function(a, b) {
        for (var c = this.bottom; c;) {
            if (a.call(b, c) === !1) return this;
            c = c.next
        }
        return this
    }, v.getElementsByPoint = function(a, b) {
        var c = this.set();
        return this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        }), c
    }, $b.isPointInside = function(a, b) {
        var d = this.realPath = qb[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
    }, $b.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qb[this.type](this), b.bboxwt = Bb(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qb[this.type](this)), b.bbox = Bb(rb(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
    }, $b.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a), a
    }, $b.glow = function(a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
            width: (a.width || 10) + (+this.attr("stroke-width") || 1),
            fill: a.fill || !1,
            opacity: a.opacity || .5,
            offsetx: a.offsetx || 0,
            offsety: a.offsety || 0,
            color: a.color || "#000"
        }, c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || qb[this.type](this);
        f = this.matrix ? rb(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var cc = function(a, b, d, e, f, g, h, i, l) {
        return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
    }, dc = function(a, b) {
            return function(d, e, f) {
                d = Kb(d);
                for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                    if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                    else {
                        if (j = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                            if (b && !m.start) {
                                if (k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                                m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                continue
                            }
                            if (!a && !b) return k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                                x: k.x,
                                y: k.y,
                                alpha: k.alpha
                            }
                        }
                        n += j, g = +i[5], h = +i[6]
                    }
                    l += i.shift() + i
                }
                return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
                    x: k.x,
                    y: k.y,
                    alpha: k.alpha
                }), k
            }
        }, ec = dc(1),
        fc = dc(),
        gc = dc(0, 1);
    c.getTotalLength = ec, c.getPointAtLength = fc, c.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return gc(a, b).end;
        var d = gc(a, c, 1);
        return b ? gc(d, b).end : d
    }, $b.getTotalLength = function() {
        var a = this.getPath();
        return a ? this.node.getTotalLength ? this.node.getTotalLength() : ec(a) : void 0
    }, $b.getPointAtLength = function(a) {
        var b = this.getPath();
        return b ? fc(b, a) : void 0
    }, $b.getPath = function() {
        var a, b = c._getPath[this.type];
        return "text" != this.type && "set" != this.type ? (b && (a = b(this)), a) : void 0
    }, $b.getSubpath = function(a, b) {
        var d = this.getPath();
        return d ? c.getSubpath(d, a, b) : void 0
    };
    var hc = c.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return R(a, 1.7)
        },
        ">": function(a) {
            return R(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
                c = N.sqrt(.1734 + b * b),
                d = c - b,
                e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            return a == !! a ? a : R(2, -10 * a) * N.sin(2 * (a - .075) * S / .3) + 1
        },
        bounce: function(a) {
            var b, c = 7.5625,
                d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }
    };
    hc.easeIn = hc["ease-in"] = hc["<"], hc.easeOut = hc["ease-out"] = hc[">"], hc.easeInOut = hc["ease-in-out"] = hc["<>"], hc["back-in"] = hc.backIn, hc["back-out"] = hc.backOut;
    var ic = [],
        jc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16)
        }, kc = function() {
            for (var a = +new Date, d = 0; d < ic.length; d++) {
                var e = ic[d];
                if (!e.el.removed && !e.paused) {
                    var f, g, h = a - e.start,
                        i = e.ms,
                        j = e.easing,
                        k = e.from,
                        l = e.diff,
                        m = e.to,
                        n = (e.t, e.el),
                        o = {}, p = {};
                    if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && ic.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
                        if (i > h) {
                            var q = j(h / i);
                            for (var r in k)
                                if (k[z](r)) {
                                    switch (db[r]) {
                                        case T:
                                            f = +k[r] + q * i * l[r];
                                            break;
                                        case "colour":
                                            f = "rgb(" + [lc($(k[r].r + q * i * l[r].r)), lc($(k[r].g + q * i * l[r].g)), lc($(k[r].b + q * i * l[r].b))].join(",") + ")";
                                            break;
                                        case "path":
                                            f = [];
                                            for (var t = 0, u = k[r].length; u > t; t++) {
                                                f[t] = [k[r][t][0]];
                                                for (var v = 1, w = k[r][t].length; w > v; v++) f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                                                f[t] = f[t].join(H)
                                            }
                                            f = f.join(H);
                                            break;
                                        case "transform":
                                            if (l[r].real)
                                                for (f = [], t = 0, u = k[r].length; u > t; t++)
                                                    for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++) f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                                            else {
                                                var x = function(a) {
                                                    return +k[r][a] + q * i * l[r][a]
                                                };
                                                f = [
                                                    ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                                ]
                                            }
                                            break;
                                        case "csv":
                                            if ("clip-rect" == r)
                                                for (f = [], t = 4; t--;) f[t] = +k[r][t] + q * i * l[r][t];
                                            break;
                                        default:
                                            var y = [][E](k[r]);
                                            for (f = [], t = n.paper.customAttributes[r].length; t--;) f[t] = +y[t] + q * i * l[r][t]
                                    }
                                    o[r] = f
                                }
                            n.attr(o),
                            function(a, c, d) {
                                setTimeout(function() {
                                    b("raphael.anim.frame." + a, c, d)
                                })
                            }(n.id, n, e.anim)
                        } else {
                            if (function(a, d, e) {
                                setTimeout(function() {
                                    b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                                })
                            }(e.callback, n, e.anim), n.attr(m), ic.splice(d--, 1), e.repeat > 1 && !e.next) {
                                for (g in m) m[z](g) && (p[g] = e.totalOrigin[g]);
                                e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                            }
                            e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                        }
                }
            }
            c.svg && n && n.paper && n.paper.safari(), ic.length && jc(kc)
        }, lc = function(a) {
            return a > 255 ? 255 : 0 > a ? 0 : a
        };
    $b.animateWith = function(a, b, d, e, f, g) {
        var h = this;
        if (h.removed) return g && g.call(h), h;
        var i = d instanceof r ? d : c.animation(d, e, f, g);
        s(i, h, i.percents[0], null, h.attr());
        for (var j = 0, k = ic.length; k > j; j++)
            if (ic[j].anim == b && ic[j].el == a) {
                ic[k - 1].start = ic[j].start;
                break
            }
        return h
    }, $b.onAnimation = function(a) {
        return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
    }, r.prototype.delay = function(a) {
        var b = new r(this.anim, this.ms);
        return b.times = this.times, b.del = +a || 0, b
    }, r.prototype.repeat = function(a) {
        var b = new r(this.anim, this.ms);
        return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
    }, c.animation = function(a, b, d, e) {
        if (a instanceof r) return a;
        (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
        var f, g, h = {};
        for (g in a) a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
        return f ? (d && (h.easing = d), e && (h.callback = e), new r({
            100: h
        }, b)) : new r(a, b)
    }, $b.animate = function(a, b, d, e) {
        var f = this;
        if (f.removed) return e && e.call(f), f;
        var g = a instanceof r ? a : c.animation(a, b, d, e);
        return s(g, f, g.percents[0], null, f.attr()), f
    }, $b.setTime = function(a, b) {
        return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
    }, $b.status = function(a, b) {
        var c, d, e = [],
            f = 0;
        if (null != b) return s(a, this, -1, P(b, 1)), this;
        for (c = ic.length; c > f; f++)
            if (d = ic[f], d.el.id == this.id && (!a || d.anim == a)) {
                if (a) return d.status;
                e.push({
                    anim: d.anim,
                    status: d.status
                })
            }
        return a ? 0 : e
    }, $b.pause = function(a) {
        for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.pause." + this.id, this, ic[c].anim) !== !1 && (ic[c].paused = !0);
        return this
    }, $b.resume = function(a) {
        for (var c = 0; c < ic.length; c++)
            if (ic[c].el.id == this.id && (!a || ic[c].anim == a)) {
                var d = ic[c];
                b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
            }
        return this
    }, $b.stop = function(a) {
        for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.stop." + this.id, this, ic[c].anim) !== !1 && ic.splice(c--, 1);
        return this
    }, b.on("raphael.remove", t), b.on("raphael.clear", t), $b.toString = function() {
        return "Raphaël’s object"
    };
    var mc = function(a) {
        if (this.items = [], this.length = 0, this.type = "set", a)
            for (var b = 0, c = a.length; c > b; b++)!a[b] || a[b].constructor != $b.constructor && a[b].constructor != mc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    }, nc = mc.prototype;
    nc.push = function() {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != $b.constructor && a.constructor != mc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, nc.pop = function() {
        return this.length && delete this[this.length--], this.items.pop()
    }, nc.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; d > c; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
        return this
    };
    for (var oc in $b) $b[z](oc) && (nc[oc] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a][D](c, b)
            })
        }
    }(oc));
    return nc.attr = function(a, b) {
        if (a && c.is(a, V) && c.is(a[0], "object"))
            for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
        else
            for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
        return this
    }, nc.clear = function() {
        for (; this.length;) this.pop()
    }, nc.splice = function(a, b) {
        a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
        var c, d = [],
            e = [],
            f = [];
        for (c = 2; c < arguments.length; c++) f.push(arguments[c]);
        for (c = 0; b > c; c++) e.push(this[a + c]);
        for (; c < this.length - a; c++) d.push(this[a + c]);
        var g = f.length;
        for (c = 0; c < g + d.length; c++) this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
        for (c = this.items.length = this.length -= b - g; this[c];) delete this[c++];
        return new mc(e)
    }, nc.exclude = function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (this[b] == a) return this.splice(b, 1), !0
    }, nc.animate = function(a, b, d, e) {
        (c.is(d, "function") || !d) && (e = d || null);
        var f, g, h = this.items.length,
            i = h,
            j = this;
        if (!h) return this;
        e && (g = function() {
            !--h && e.call(j)
        }), d = c.is(d, U) ? d : g;
        var k = c.animation(a, b, d, g);
        for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
        return this
    }, nc.insertAfter = function(a) {
        for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
        return this
    }, nc.getBBox = function() {
        for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
            if (!this.items[e].removed) {
                var f = this.items[e].getBBox();
                a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
            }
        return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b
        }
    }, nc.clone = function(a) {
        a = this.paper.set();
        for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
        return a
    }, nc.toString = function() {
        return "Raphaël‘s set"
    }, nc.glow = function(a) {
        var b = this.paper.set();
        return this.forEach(function(c) {
            var d = c.glow(a);
            null != d && d.forEach(function(a) {
                b.push(a)
            })
        }), b
    }, nc.isPointInside = function(a, b) {
        var c = !1;
        return this.forEach(function(d) {
            return d.isPointInside(a, b) ? (console.log("runned"), c = !0, !1) : void 0
        }), c
    }, c.registerFont = function(a) {
        if (!a.face) return a;
        this.fonts = this.fonts || {};
        var b = {
            w: a.w,
            face: {},
            glyphs: {}
        }, c = a.face["font-family"];
        for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d]);
        if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
            b.face["units-per-em"] = ab(a.face["units-per-em"], 10);
            for (var e in a.glyphs)
                if (a.glyphs[z](e)) {
                    var f = a.glyphs[e];
                    if (b.glyphs[e] = {
                        w: f.w,
                        k: {},
                        d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[a] || "M"
                        }) + "z"
                    }, f.k)
                        for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
                }
        }
        return a
    }, v.getFont = function(a, b, d, e) {
        if (e = e || "normal", d = d || "normal", b = +b || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[b] || 400, c.fonts) {
            var f = c.fonts[a];
            if (!f) {
                var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
                for (var h in c.fonts)
                    if (c.fonts[z](h) && g.test(h)) {
                        f = c.fonts[h];
                        break
                    }
            }
            var i;
            if (f)
                for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
            return i
        }
    }, v.print = function(a, b, d, e, f, g, h, i) {
        g = g || "middle", h = O(P(h || 0, 1), -1), i = O(P(i || 1, 3), 1);
        var j, k = I(d)[J](G),
            l = 0,
            m = 0,
            n = G;
        if (c.is(e, "string") && (e = this.getFont(e)), e) {
            j = (f || 16) / e.face["units-per-em"];
            for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
                if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
                else {
                    var v = m && e.glyphs[k[t - 1]] || {}, x = e.glyphs[k[t]];
                    l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
                }
                x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
            }
        }
        return this.path(n).attr({
            fill: "#000",
            stroke: "none"
        })
    }, v.add = function(a) {
        if (c.is(a, "array"))
            for (var b, d = this.set(), e = 0, f = a.length; f > e; e++) b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
        return d
    }, c.format = function(a, b) {
        var d = c.is(b, V) ? [0][E](b) : arguments;
        return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
            return null == d[++b] ? G : d[b]
        })), a || G
    }, c.fullfill = function() {
        var a = /\{([^\}]+)\}/g,
            b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            c = function(a, c, d) {
                var e = d;
                return c.replace(b, function(a, b, c, d, f) {
                    b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                }), e = (null == e || e == d ? a : e) + ""
            };
        return function(b, d) {
            return String(b).replace(a, function(a, b) {
                return c(a, b, d)
            })
        }
    }(), c.ninja = function() {
        return B.was ? A.win.Raphael = B.is : delete Raphael, c
    }, c.st = nc,
    function(a, b, d) {
        function e() {
            /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
        }
        null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
            a.removeEventListener(b, d, !1), a.readyState = "complete"
        }, !1), a.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function() {
        u = !0
    }),
    function() {
        if (c.svg) {
            var a = "hasOwnProperty",
                b = String,
                d = parseFloat,
                e = parseInt,
                f = Math,
                g = f.max,
                h = f.abs,
                i = f.pow,
                j = /[, ]+/,
                k = c.eve,
                l = "",
                m = " ",
                n = "http://www.w3.org/1999/xlink",
                o = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                }, p = {};
            c.toString = function() {
                return "Your browser supports SVG.\nYou are running Raphaël " + this.version
            };
            var q = function(d, e) {
                if (e) {
                    "string" == typeof d && (d = q(d));
                    for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
                } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return d
            }, r = function(a, e) {
                    var j = "linear",
                        k = a.id + e,
                        m = .5,
                        n = .5,
                        o = a.node,
                        p = a.paper,
                        r = o.style,
                        s = c._g.doc.getElementById(k);
                    if (!s) {
                        if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                            if (j = "radial", b && c) {
                                m = d(b), n = d(c);
                                var e = 2 * (n > .5) - 1;
                                i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                            }
                            return l
                        }), e = e.split(/\s*\-\s*/), "linear" == j) {
                            var t = e.shift();
                            if (t = -d(t), isNaN(t)) return null;
                            var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                                v = 1 / (g(h(u[2]), h(u[3])) || 1);
                            u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                        }
                        var w = c._parseDots(e);
                        if (!w) return null;
                        if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                            s = q(j + "Gradient", {
                                id: k
                            }), a.gradient = s, q(s, "radial" == j ? {
                                fx: m,
                                fy: n
                            } : {
                                x1: u[0],
                                y1: u[1],
                                x2: u[2],
                                y2: u[3],
                                gradientTransform: a.matrix.invert()
                            }), p.defs.appendChild(s);
                            for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                                offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                                "stop-color": w[x].color || "#fff"
                            }))
                        }
                    }
                    return q(o, {
                        fill: "url(#" + k + ")",
                        opacity: 1,
                        "fill-opacity": 1
                    }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
                }, s = function(a) {
                    var b = a.getBBox(1);
                    q(a.pattern, {
                        patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
                    })
                }, t = function(d, e, f) {
                    if ("path" == d.type) {
                        for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                w = m[v];
                                break;
                            case "wide":
                                y = 5;
                                break;
                            case "narrow":
                                y = 2;
                                break;
                            case "long":
                                x = 5;
                                break;
                            case "short":
                                x = 2
                        }
                        if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                            fill: "none",
                            stroke: t.stroke
                        }) : (j = i = x / 2, k = {
                            fill: t.stroke,
                            stroke: "none"
                        }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                            var A = "raphael-marker-" + w,
                                B = "raphael-marker-" + r + w + x + y;
                            c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                                "stroke-linecap": "round",
                                d: o[w],
                                id: A
                            })), p[A] = 1);
                            var C, D = c._g.doc.getElementById(B);
                            D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                                id: B,
                                markerHeight: y,
                                markerWidth: x,
                                orient: "auto",
                                refX: j,
                                refY: y / 2
                            }), C = q(q("use"), {
                                "xlink:href": "#" + A,
                                transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                                "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                            }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                            var E = i * ("diamond" != w && "oval" != w);
                            f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
                        } else f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                            d: c.getSubpath(t.path, g, h)
                        }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
                        for (k in p)
                            if (p[a](k) && !p[k]) {
                                var F = c._g.doc.getElementById(k);
                                F && F.parentNode.removeChild(F)
                            }
                    }
                }, u = {
                    "": [0],
                    none: [0],
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                }, v = function(a, c, d) {
                    if (c = u[b(c).toLowerCase()]) {
                        for (var e = a.attrs["stroke-width"] || "1", f = {
                                round: e,
                                square: e,
                                butt: 0
                            }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
                        q(a.node, {
                            "stroke-dasharray": g.join(",")
                        })
                    }
                }, w = function(d, f) {
                    var i = d.node,
                        k = d.attrs,
                        m = i.style.visibility;
                    i.style.visibility = "hidden";
                    for (var o in f)
                        if (f[a](o)) {
                            if (!c._availableAttrs[a](o)) continue;
                            var p = f[o];
                            switch (k[o] = p, o) {
                                case "blur":
                                    d.blur(p);
                                    break;
                                case "href":
                                case "title":
                                    var u = q("title"),
                                        w = c._g.doc.createTextNode(p);
                                    u.appendChild(w), i.appendChild(u);
                                    break;
                                case "target":
                                    var x = i.parentNode;
                                    if ("a" != x.tagName.toLowerCase()) {
                                        var u = q("a");
                                        x.insertBefore(u, i), u.appendChild(i), x = u
                                    }
                                    "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                                    break;
                                case "cursor":
                                    i.style.cursor = p;
                                    break;
                                case "transform":
                                    d.transform(p);
                                    break;
                                case "arrow-start":
                                    t(d, p);
                                    break;
                                case "arrow-end":
                                    t(d, p, 1);
                                    break;
                                case "clip-rect":
                                    var z = b(p).split(j);
                                    if (4 == z.length) {
                                        d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                        var A = q("clipPath"),
                                            B = q("rect");
                                        A.id = c.createUUID(), q(B, {
                                            x: z[0],
                                            y: z[1],
                                            width: z[2],
                                            height: z[3]
                                        }), A.appendChild(B), d.paper.defs.appendChild(A), q(i, {
                                            "clip-path": "url(#" + A.id + ")"
                                        }), d.clip = B
                                    }
                                    if (!p) {
                                        var C = i.getAttribute("clip-path");
                                        if (C) {
                                            var D = c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g, l));
                                            D && D.parentNode.removeChild(D), q(i, {
                                                "clip-path": l
                                            }), delete d.clip
                                        }
                                    }
                                    break;
                                case "path":
                                    "path" == d.type && (q(i, {
                                        d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                                    }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                                    break;
                                case "width":
                                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                                    o = "x", p = k.x;
                                case "x":
                                    k.fx && (p = -k.x - (k.width || 0));
                                case "rx":
                                    if ("rx" == o && "rect" == d.type) break;
                                case "cx":
                                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                    break;
                                case "height":
                                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                                    o = "y", p = k.y;
                                case "y":
                                    k.fy && (p = -k.y - (k.height || 0));
                                case "ry":
                                    if ("ry" == o && "rect" == d.type) break;
                                case "cy":
                                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                    break;
                                case "r":
                                    "rect" == d.type ? q(i, {
                                        rx: p,
                                        ry: p
                                    }) : i.setAttribute(o, p), d._.dirty = 1;
                                    break;
                                case "src":
                                    "image" == d.type && i.setAttributeNS(n, "href", p);
                                    break;
                                case "stroke-width":
                                    (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                    break;
                                case "stroke-dasharray":
                                    v(d, p, f);
                                    break;
                                case "fill":
                                    var E = b(p).match(c._ISURL);
                                    if (E) {
                                        A = q("pattern");
                                        var F = q("image");
                                        A.id = c.createUUID(), q(A, {
                                            x: 0,
                                            y: 0,
                                            patternUnits: "userSpaceOnUse",
                                            height: 1,
                                            width: 1
                                        }), q(F, {
                                            x: 0,
                                            y: 0,
                                            "xlink:href": E[1]
                                        }), A.appendChild(F),
                                        function(a) {
                                            c._preload(E[1], function() {
                                                var b = this.offsetWidth,
                                                    c = this.offsetHeight;
                                                q(a, {
                                                    width: b,
                                                    height: c
                                                }), q(F, {
                                                    width: b,
                                                    height: c
                                                }), d.paper.safari()
                                            })
                                        }(A), d.paper.defs.appendChild(A), q(i, {
                                            fill: "url(#" + A.id + ")"
                                        }), d.pattern = A, d.pattern && s(d);
                                        break
                                    }
                                    var G = c.getRGB(p);
                                    if (G.error) {
                                        if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                                            if ("opacity" in k || "fill-opacity" in k) {
                                                var H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                if (H) {
                                                    var I = H.getElementsByTagName("stop");
                                                    q(I[I.length - 1], {
                                                        "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                                    })
                                                }
                                            }
                                            k.gradient = p, k.fill = "none";
                                            break
                                        }
                                    } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                                        opacity: k.opacity
                                    }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                                        "fill-opacity": k["fill-opacity"]
                                    });
                                    G[a]("opacity") && q(i, {
                                        "fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                                    });
                                case "stroke":
                                    G = c.getRGB(p), i.setAttribute(o, G.hex), "stroke" == o && G[a]("opacity") && q(i, {
                                        "stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                                    }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                    break;
                                case "gradient":
                                    ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                                    break;
                                case "opacity":
                                    k.gradient && !k[a]("stroke-opacity") && q(i, {
                                        "stroke-opacity": p > 1 ? p / 100 : p
                                    });
                                case "fill-opacity":
                                    if (k.gradient) {
                                        H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length - 1], {
                                            "stop-opacity": p
                                        }));
                                        break
                                    }
                                default:
                                    "font-size" == o && (p = e(p, 10) + "px");
                                    var J = o.replace(/(\-.)/g, function(a) {
                                        return a.substring(1).toUpperCase()
                                    });
                                    i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p)
                            }
                        }
                    y(d, f), i.style.visibility = m
                }, x = 1.2,
                y = function(d, f) {
                    if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
                        var g = d.attrs,
                            h = d.node,
                            i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                        if (f[a]("text")) {
                            for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                            for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                                dy: i * x,
                                x: g.x
                            }), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
                        } else
                            for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                                dy: i * x,
                                x: g.x
                            }) : q(m[0], {
                                dy: 0
                            });
                        q(h, {
                            x: g.x,
                            y: g.y
                        }), d._.dirty = 1;
                        var p = d._getBBox(),
                            r = g.y - (p.y + p.height / 2);
                        r && c.is(r, "finite") && q(m[0], {
                            dy: r
                        })
                    }
                }, z = function(a, b) {
                    this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                }, A = c.el;
            z.prototype = A, A.constructor = z, c._engine.path = function(a, b) {
                var c = q("path");
                b.canvas && b.canvas.appendChild(c);
                var d = new z(c, b);
                return d.type = "path", w(d, {
                    fill: "none",
                    stroke: "#000",
                    path: a
                }), d
            }, A.rotate = function(a, c, e) {
                if (this.removed) return this;
                if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                    var f = this.getBBox(1);
                    c = f.x + f.width / 2, e = f.y + f.height / 2
                }
                return this.transform(this._.transform.concat([
                    ["r", a, c, e]
                ])), this
            }, A.scale = function(a, c, e, f) {
                if (this.removed) return this;
                if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                    ["s", a, c, e, f]
                ])), this
            }, A.translate = function(a, c) {
                return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
                    ["t", a, c]
                ])), this)
            }, A.transform = function(b) {
                var d = this._;
                if (null == b) return d.transform;
                if (c._extractTransform(this, b), this.clip && q(this.clip, {
                    transform: this.matrix.invert()
                }), this.pattern && s(this), this.node && q(this.node, {
                    transform: this.matrix
                }), 1 != d.sx || 1 != d.sy) {
                    var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({
                        "stroke-width": e
                    })
                }
                return this
            }, A.hide = function() {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this
            }, A.show = function() {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this
            }, A.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    var a = this.paper;
                    a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                    for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
                    this.removed = !0
                }
            }, A._getBBox = function() {
                if ("none" == this.node.style.display) {
                    this.show();
                    var a = !0
                }
                var b = {};
                try {
                    b = this.node.getBBox()
                } catch (c) {} finally {
                    b = b || {}
                }
                return a && this.hide(), b
            }, A.attr = function(b, d) {
                if (this.removed) return this;
                if (null == b) {
                    var e = {};
                    for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                    return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                }
                if (null == d && c.is(b, "string")) {
                    if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    if ("transform" == b) return this._.transform;
                    for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                    return l - 1 ? h : h[g[0]]
                }
                if (null == d && c.is(b, "array")) {
                    for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
                    return h
                }
                if (null != d) {
                    var m = {};
                    m[b] = d
                } else null != b && c.is(b, "object") && (m = b);
                for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
                for (n in this.paper.customAttributes)
                    if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
                        var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                        this.attrs[n] = m[n];
                        for (var p in o) o[a](p) && (m[p] = o[p])
                    }
                return w(this, m), this
            }, A.toFront = function() {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                var a = this.paper;
                return a.top != this && c._tofront(this, a), this
            }, A.toBack = function() {
                if (this.removed) return this;
                var a = this.node.parentNode;
                return "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper), this.paper, this
            }, A.insertAfter = function(a) {
                if (this.removed) return this;
                var b = a.node || a[a.length - 1].node;
                return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
            }, A.insertBefore = function(a) {
                if (this.removed) return this;
                var b = a.node || a[0].node;
                return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
            }, A.blur = function(a) {
                var b = this;
                if (0 !== +a) {
                    var d = q("filter"),
                        e = q("feGaussianBlur");
                    b.attrs.blur = a, d.id = c.createUUID(), q(e, {
                        stdDeviation: +a || 1.5
                    }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
                        filter: "url(#" + d.id + ")"
                    })
                } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
                return b
            }, c._engine.circle = function(a, b, c, d) {
                var e = q("circle");
                a.canvas && a.canvas.appendChild(e);
                var f = new z(e, a);
                return f.attrs = {
                    cx: b,
                    cy: c,
                    r: d,
                    fill: "none",
                    stroke: "#000"
                }, f.type = "circle", q(e, f.attrs), f
            }, c._engine.rect = function(a, b, c, d, e, f) {
                var g = q("rect");
                a.canvas && a.canvas.appendChild(g);
                var h = new z(g, a);
                return h.attrs = {
                    x: b,
                    y: c,
                    width: d,
                    height: e,
                    r: f || 0,
                    rx: f || 0,
                    ry: f || 0,
                    fill: "none",
                    stroke: "#000"
                }, h.type = "rect", q(g, h.attrs), h
            }, c._engine.ellipse = function(a, b, c, d, e) {
                var f = q("ellipse");
                a.canvas && a.canvas.appendChild(f);
                var g = new z(f, a);
                return g.attrs = {
                    cx: b,
                    cy: c,
                    rx: d,
                    ry: e,
                    fill: "none",
                    stroke: "#000"
                }, g.type = "ellipse", q(f, g.attrs), g
            }, c._engine.image = function(a, b, c, d, e, f) {
                var g = q("image");
                q(g, {
                    x: c,
                    y: d,
                    width: e,
                    height: f,
                    preserveAspectRatio: "none"
                }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                var h = new z(g, a);
                return h.attrs = {
                    x: c,
                    y: d,
                    width: e,
                    height: f,
                    src: b
                }, h.type = "image", h
            }, c._engine.text = function(a, b, d, e) {
                var f = q("text");
                a.canvas && a.canvas.appendChild(f);
                var g = new z(f, a);
                return g.attrs = {
                    x: b,
                    y: d,
                    "text-anchor": "middle",
                    text: e,
                    font: c._availableAttrs.font,
                    stroke: "none",
                    fill: "#000"
                }, g.type = "text", w(g, g.attrs), g
            }, c._engine.setSize = function(a, b) {
                return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
            }, c._engine.create = function() {
                var a = c._getContainer.apply(0, arguments),
                    b = a && a.container,
                    d = a.x,
                    e = a.y,
                    f = a.width,
                    g = a.height;
                if (!b) throw new Error("SVG container not found.");
                var h, i = q("svg"),
                    j = "overflow:hidden;";
                return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
                    height: g,
                    version: 1.1,
                    width: f,
                    xmlns: "http://www.w3.org/2000/svg"
                }), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {}), b.renderfix(), b
            }, c._engine.setViewBox = function(a, b, c, d, e) {
                k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                var f, h, i = g(c / this.width, d / this.height),
                    j = this.top,
                    l = e ? "meet" : "xMinYMin";
                for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
                    viewBox: f,
                    preserveAspectRatio: l
                }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({
                    "stroke-width": h
                }), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
                return this._viewBox = [a, b, c, d, !! e], this
            }, c.prototype.renderfix = function() {
                var a, b = this.canvas,
                    c = b.style;
                try {
                    a = b.getScreenCTM() || b.createSVGMatrix()
                } catch (d) {
                    a = b.createSVGMatrix()
                }
                var e = -a.e % 1,
                    f = -a.f % 1;
                (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
            }, c.prototype.clear = function() {
                c.eve("raphael.clear", this);
                for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
                this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
            }, c.prototype.remove = function() {
                k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
            };
            var B = c.st;
            for (var C in A) A[a](C) && !B[a](C) && (B[C] = function(a) {
                return function() {
                    var b = arguments;
                    return this.forEach(function(c) {
                        c[a].apply(c, b)
                    })
                }
            }(C))
        }
    }(),
    function() {
        if (c.vml) {
            var a = "hasOwnProperty",
                b = String,
                d = parseFloat,
                e = Math,
                f = e.round,
                g = e.max,
                h = e.min,
                i = e.abs,
                j = "fill",
                k = /[, ]+/,
                l = c.eve,
                m = " progid:DXImageTransform.Microsoft",
                n = " ",
                o = "",
                p = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                }, q = /([clmz]),?([^clmz]*)/gi,
                r = / progid:\S+Blur\([^\)]+\)/g,
                s = /-?[^,\s-]+/g,
                t = "position:absolute;left:0;top:0;width:1px;height:1px",
                u = 21600,
                v = {
                    path: 1,
                    rect: 1,
                    image: 1
                }, w = {
                    circle: 1,
                    ellipse: 1
                }, x = function(a) {
                    var d = /[ahqstv]/gi,
                        e = c._pathToAbsolute;
                    if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
                        var g = b(a).replace(q, function(a, b, c) {
                            var d = [],
                                e = "m" == b.toLowerCase(),
                                g = p[b];
                            return c.replace(s, function(a) {
                                e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                            }), g + d
                        });
                        return g
                    }
                    var h, i, j = e(a);
                    g = [];
                    for (var k = 0, l = j.length; l > k; k++) {
                        h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
                        for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
                        g.push(i)
                    }
                    return g.join(n)
                }, y = function(a, b, d) {
                    var e = c.matrix();
                    return e.rotate(-a, .5, .5), {
                        dx: e.x(b, d),
                        dy: e.y(b, d)
                    }
                }, z = function(a, b, c, d, e, f) {
                    var g = a._,
                        h = a.matrix,
                        k = g.fillpos,
                        l = a.node,
                        m = l.style,
                        o = 1,
                        p = "",
                        q = u / b,
                        r = u / c;
                    if (m.visibility = "hidden", b && c) {
                        if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                            var s = y(f, d, e);
                            d = s.dx, e = s.dy
                        }
                        if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                            var t = l.getElementsByTagName(j);
                            t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
                        }
                        m.visibility = "visible"
                    }
                };
            c.toString = function() {
                return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
            };
            var A = function(a, c, d) {
                for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        h = e[g];
                        break;
                    case "wide":
                    case "narrow":
                        j = e[g];
                        break;
                    case "long":
                    case "short":
                        i = e[g]
                }
                var k = a.node.getElementsByTagName("stroke")[0];
                k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
            }, B = function(e, i) {
                    e.attrs = e.attrs || {};
                    var l = e.node,
                        m = e.attrs,
                        p = l.style,
                        q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                        r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                        s = e;
                    for (var t in i) i[a](t) && (m[t] = i[t]);
                    if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                        var y = +m.cx,
                            B = +m.cy,
                            D = +m.rx || +m.r || 0,
                            E = +m.ry || +m.r || 0;
                        l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
                    }
                    if ("clip-rect" in i) {
                        var G = b(i["clip-rect"]).split(k);
                        if (4 == G.length) {
                            G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                            var H = l.clipRect || c._g.doc.createElement("div"),
                                I = H.style;
                            I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                        }
                        i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                    }
                    if (e.textpath) {
                        var J = e.textpath.style;
                        i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
                    }
                    if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                        var K = l.getElementsByTagName(j),
                            L = !1;
                        if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                            var M = b(i.fill).match(c._ISURL);
                            if (M) {
                                K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                                var N = e.getBBox(1);
                                K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                                    e._.fillsize = [this.offsetWidth, this.offsetHeight]
                                })
                            } else K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {
                                circle: 1,
                                ellipse: 1
                            } || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
                        }
                        if ("fill-opacity" in i || "opacity" in i) {
                            var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                            O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
                        }
                        l.appendChild(K);
                        var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                            Q = !1;
                        !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
                        var R = c.getRGB(i.stroke);
                        P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
                        var S = .75 * (d(i["stroke-width"]) || 1);
                        if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
                            var T = {
                                "-": "shortdash",
                                ".": "shortdot",
                                "-.": "shortdashdot",
                                "-..": "shortdashdotdot",
                                ". ": "dot",
                                "- ": "dash",
                                "--": "longdash",
                                "- .": "dashdot",
                                "--.": "longdashdot",
                                "--..": "longdashdotdot"
                            };
                            P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
                        }
                        Q && l.appendChild(P)
                    }
                    if ("text" == s.type) {
                        s.paper.canvas.style.display = o;
                        var U = s.paper.span,
                            V = 100,
                            W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                        p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                        var X = U.getBoundingClientRect();
                        s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                        for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                            if (Y[Z] in i) {
                                s._.dirty = 1;
                                break
                            }
                        switch (m["text-anchor"]) {
                            case "start":
                                s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                                break;
                            case "end":
                                s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                                break;
                            default:
                                s.textpath.style["v-text-align"] = "center", s.bbx = 0
                        }
                        s.textpath.style["v-text-kern"] = !0
                    }
                }, C = function(a, f, g) {
                    a.attrs = a.attrs || {};
                    var h = (a.attrs, Math.pow),
                        i = "linear",
                        j = ".5 .5";
                    if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                        return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
                    }), f = f.split(/\s*\-\s*/), "linear" == i) {
                        var k = f.shift();
                        if (k = -d(k), isNaN(k)) return null
                    }
                    var l = c._parseDots(f);
                    if (!l) return null;
                    if (a = a.shape || a.node, l.length) {
                        a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
                        for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
                        g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
                    }
                    return 1
                }, D = function(a, b) {
                    this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        dx: 0,
                        dy: 0,
                        deg: 0,
                        dirty: 1,
                        dirtyT: 1
                    }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                }, E = c.el;
            D.prototype = E, E.constructor = D, E.transform = function(a) {
                if (null == a) return this._.transform;
                var d, e = this.paper._viewBoxShift,
                    f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
                e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
                var g, h = this.matrix.clone(),
                    i = this.skew,
                    j = this.node,
                    k = ~b(this.attrs.fill).indexOf("-"),
                    l = !b(this.attrs.fill).indexOf("url(");
                if (h.translate(1, 1), l || k || "image" == this.type)
                    if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                        j.style.filter = h.toFilter();
                        var m = this.getBBox(),
                            p = this.getBBox(1),
                            q = m.x - p.x,
                            r = m.y - p.y;
                        j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
                    } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
                    else j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
                return d && (this._.transform = d), this
            }, E.rotate = function(a, c, e) {
                if (this.removed) return this;
                if (null != a) {
                    if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                        var f = this.getBBox(1);
                        c = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this._.dirtyT = 1, this.transform(this._.transform.concat([
                        ["r", a, c, e]
                    ])), this
                }
            }, E.translate = function(a, c) {
                return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([
                    ["t", a, c]
                ])), this)
            }, E.scale = function(a, c, e, f) {
                if (this.removed) return this;
                if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                    ["s", a, c, e, f]
                ])), this._.dirtyT = 1, this
            }, E.hide = function() {
                return !this.removed && (this.node.style.display = "none"), this
            }, E.show = function() {
                return !this.removed && (this.node.style.display = o), this
            }, E._getBBox = function() {
                return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                }
            }, E.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                    this.removed = !0
                }
            }, E.attr = function(b, d) {
                if (this.removed) return this;
                if (null == b) {
                    var e = {};
                    for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                    return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                }
                if (null == d && c.is(b, "string")) {
                    if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                    return m - 1 ? h : h[g[0]]
                }
                if (this.attrs && null == d && c.is(b, "array")) {
                    for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
                    return h
                }
                var n;
                null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
                for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
                if (n) {
                    for (o in this.paper.customAttributes)
                        if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                            var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                            this.attrs[o] = n[o];
                            for (var q in p) p[a](q) && (n[q] = p[q])
                        }
                    n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
                }
                return this
            }, E.toFront = function() {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
            }, E.toBack = function() {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
            }, E.insertAfter = function(a) {
                return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
            }, E.insertBefore = function(a) {
                return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
            }, E.blur = function(a) {
                var b = this.node.runtimeStyle,
                    d = b.filter;
                return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
            }, c._engine.path = function(a, b) {
                var c = F("shape");
                c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
                var d = new D(c, b),
                    e = {
                        fill: "none",
                        stroke: "#000"
                    };
                a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
                var f = F("skew");
                return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
            }, c._engine.rect = function(a, b, d, e, f, g) {
                var h = c._rectPath(b, d, e, f, g),
                    i = a.path(h),
                    j = i.attrs;
                return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
            }, c._engine.ellipse = function(a, b, c, d, e) {
                var f = a.path();
                return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
                    cx: b,
                    cy: c,
                    rx: d,
                    ry: e
                }), f
            }, c._engine.circle = function(a, b, c, d) {
                var e = a.path();
                return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
                    cx: b,
                    cy: c,
                    r: d
                }), e
            }, c._engine.image = function(a, b, d, e, f, g) {
                var h = c._rectPath(d, e, f, g),
                    i = a.path(h).attr({
                        stroke: "none"
                    }),
                    k = i.attrs,
                    l = i.node,
                    m = l.getElementsByTagName(j)[0];
                return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
            }, c._engine.text = function(a, d, e, g) {
                var h = F("shape"),
                    i = F("path"),
                    j = F("textpath");
                d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
                var k = new D(h, a),
                    l = {
                        fill: "#000",
                        stroke: "none",
                        font: c._availableAttrs.font,
                        text: g
                    };
                k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
                var m = F("skew");
                return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
            }, c._engine.setSize = function(a, b) {
                var d = this.canvas.style;
                return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
            }, c._engine.setViewBox = function(a, b, d, e, f) {
                c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
                var h, i, j = this.width,
                    k = this.height,
                    l = 1 / g(d / j, e / k);
                return f && (h = k / e, i = j / d, j > d * h && (a -= (j - d * h) / 2 / h), k > e * i && (b -= (k - e * i) / 2 / i)), this._viewBox = [a, b, d, e, !! f], this._viewBoxShift = {
                    dx: -a,
                    dy: -b,
                    scale: l
                }, this.forEach(function(a) {
                    a.transform("...")
                }), this
            };
            var F;
            c._engine.initWin = function(a) {
                var b = a.document;
                b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                        return b.createElement("<rvml:" + a + ' class="rvml">')
                    }
                } catch (c) {
                    F = function(a) {
                        return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
            }, c._engine.initWin(c._g.win), c._engine.create = function() {
                var a = c._getContainer.apply(0, arguments),
                    b = a.container,
                    d = a.height,
                    e = a.width,
                    f = a.x,
                    g = a.y;
                if (!b) throw new Error("VML container not found.");
                var h = new c._Paper,
                    i = h.canvas = c._g.doc.createElement("div"),
                    j = i.style;
                return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {}, h
            }, c.prototype.clear = function() {
                c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
            }, c.prototype.remove = function() {
                c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                return !0
            };
            var G = c.st;
            for (var H in E) E[a](H) && !G[a](H) && (G[H] = function(a) {
                return function() {
                    var b = arguments;
                    return this.forEach(function(c) {
                        c[a].apply(c, b)
                    })
                }
            }(H))
        }
    }(), B.was ? A.win.Raphael = c : Raphael = c, c
}),
function(a) {
    a.address = function() {
        var b, c = function(b) {
                return b = a.extend(a.Event(b), function() {
                    for (var b = {}, c = a.address.parameterNames(), d = 0, e = c.length; e > d; d++) b[c[d]] = a.address.parameter(c[d]);
                    return {
                        value: a.address.value(),
                        path: a.address.path(),
                        pathNames: a.address.pathNames(),
                        parameterNames: c,
                        parameters: b,
                        queryString: a.address.queryString()
                    }
                }.call(a.address)), a(a.address).trigger(b), b
            }, d = function(a) {
                return Array.prototype.slice.call(a)
            }, e = function() {
                return a().bind.apply(a(a.address), Array.prototype.slice.call(arguments)), a.address
            }, f = function() {
                return a().unbind.apply(a(a.address), Array.prototype.slice.call(arguments)), a.address
            }, g = function() {
                return J.pushState && C.state !== b
            }, h = function() {
                return ("/" + K.pathname.replace(new RegExp(C.state), "") + K.search + (i() ? "#" + i() : "")).replace(N, "/")
            }, i = function() {
                var a = K.href.indexOf("#");
                return -1 != a ? K.href.substr(a + 1) : ""
            }, j = function() {
                return g() ? h() : i()
            }, k = function() {
                return "javascript"
            }, l = function(a) {
                return a = a.toString(), (C.strict && "/" != a.substr(0, 1) ? "/" : "") + a
            }, m = function(a, b) {
                return parseInt(a.css(b), 10)
            }, n = function() {
                if (!T) {
                    var a = j();
                    decodeURI(X) != decodeURI(a) && (G && 7 > E ? K.reload() : (G && !P && C.history && M(q, 50), X = a, o(B)))
                }
            }, o = function(a) {
                return M(p, 10), c(x).isDefaultPrevented() || c(a ? y : z).isDefaultPrevented()
            }, p = function() {
                if ("null" !== C.tracker && C.tracker !== u) {
                    var c = a.isFunction(C.tracker) ? C.tracker : H[C.tracker],
                        d = (K.pathname + K.search + (a.address && !g() ? a.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                    a.isFunction(c) ? c(d) : a.isFunction(H.urchinTracker) ? H.urchinTracker(d) : H.pageTracker !== b && a.isFunction(H.pageTracker._trackPageview) ? H.pageTracker._trackPageview(d) : H._gaq !== b && a.isFunction(H._gaq.push) && H._gaq.push(["_trackPageview", decodeURI(d)])
                }
            }, q = function() {
                var a = k() + ":" + B + ";document.open();document.writeln('<html><head><title>" + I.title.replace(/\'/g, "\\'") + "</title><script>var " + v + ' = "' + encodeURIComponent(j()).replace(/\'/g, "\\'") + (I.domain != K.hostname ? '";document.domain="' + I.domain : "") + "\";</script></head></html>');document.close();";
                7 > E ? O.src = a : O.contentWindow.location.replace(a)
            }, r = function() {
                if (Q && -1 != R) {
                    var a, b, c = Q.substr(R + 1).split("&");
                    for (a = 0; a < c.length; a++) b = c[a].split("="), /^(autoUpdate|history|strict|wrap)$/.test(b[0]) && (C[b[0]] = isNaN(b[1]) ? /^(true|yes)$/i.test(b[1]) : 0 !== parseInt(b[1], 10)), /^(state|tracker)$/.test(b[0]) && (C[b[0]] = b[1]);
                    Q = u
                }
                X = j()
            }, s = function() {
                if (!U) {
                    if (U = A, r(), a('a[rel*="address:"]').address(), C.wrap) {
                        var d = a("body");
                        a("body > *").wrapAll('<div style="padding:' + (m(d, "marginTop") + m(d, "paddingTop")) + "px " + (m(d, "marginRight") + m(d, "paddingRight")) + "px " + (m(d, "marginBottom") + m(d, "paddingBottom")) + "px " + (m(d, "marginLeft") + m(d, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + v + '" style="height:100%;overflow:auto;position:relative;' + (F && !window.statusbar.visible ? "resize:both;" : "") + '" />'), a("html, body").css({
                            height: "100%",
                            margin: 0,
                            padding: 0,
                            overflow: "hidden"
                        }), F && a('<style type="text/css" />').appendTo("head").text("#" + v + "::-webkit-resizer { background-color: #fff; }")
                    }
                    G && !P && (d = I.getElementsByTagName("frameset")[0], O = I.createElement((d ? "" : "i") + "frame"), O.src = k() + ":" + B, d ? (d.insertAdjacentElement("beforeEnd", O), d[d.cols ? "cols" : "rows"] += ",0", O.noResize = A, O.frameBorder = O.frameSpacing = 0) : (O.style.display = "none", O.style.width = O.style.height = 0, O.tabIndex = -1, I.body.insertAdjacentElement("afterBegin", O)), M(function() {
                        a(O).bind("load", function() {
                            var a = O.contentWindow;
                            X = a[v] !== b ? a[v] : "", X != j() && (o(B), K.hash = X)
                        }), O.contentWindow[v] === b && q()
                    }, 50)), M(function() {
                        c("init"), o(B)
                    }, 1), g() || (G && E > 7 || !G && P ? H.addEventListener ? H.addEventListener(w, n, B) : H.attachEvent && H.attachEvent("on" + w, n) : L(n, 50)), "state" in window.history && a(window).trigger("popstate")
                }
            }, t = function(a) {
                return a = a.toLowerCase(), a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [], {
                    browser: a[1] || "",
                    version: a[2] || "0"
                }
            }, u = null,
            v = "jQueryAddress",
            w = "hashchange",
            x = "change",
            y = "internalChange",
            z = "externalChange",
            A = !0,
            B = !1,
            C = {
                autoUpdate: A,
                history: A,
                strict: A,
                wrap: B
            }, D = function() {
                var a = {}, b = t(navigator.userAgent);
                return b.browser && (a[b.browser] = !0, a.version = b.version), a.chrome ? a.webkit = !0 : a.webkit && (a.safari = !0), a
            }(),
            E = parseFloat(D.version),
            F = D.webkit || D.safari,
            G = !a.support.opacity,
            H = function() {
                try {
                    return top.document !== b && top.document.title !== b ? top : window
                } catch (a) {
                    return window
                }
            }(),
            I = H.document,
            J = H.history,
            K = H.location,
            L = setInterval,
            M = setTimeout,
            N = /\/{2,9}/g;
        D = navigator.userAgent;
        var O, P = "on" + w in H,
            Q = a("script:last").attr("src"),
            R = Q ? Q.indexOf("?") : -1,
            S = I.title,
            T = B,
            U = B,
            V = A,
            W = B,
            X = j();
        if (G) {
            E = parseFloat(D.substr(D.indexOf("MSIE") + 4)), I.documentMode && I.documentMode != E && (E = 8 != I.documentMode ? 7 : 8);
            var Y = I.onpropertychange;
            I.onpropertychange = function() {
                Y && Y.call(I), I.title != S && -1 != I.title.indexOf("#" + j()) && (I.title = S)
            }
        }
        if (J.navigationMode && (J.navigationMode = "compatible"), "complete" == document.readyState) var Z = setInterval(function() {
            a.address && (s(), clearInterval(Z))
        }, 50);
        else r(), a(s);
        return a(window).bind("popstate", function() {
            decodeURI(X) != decodeURI(j()) && (X = j(), o(B))
        }).bind("unload", function() {
            H.removeEventListener ? H.removeEventListener(w, n, B) : H.detachEvent && H.detachEvent("on" + w, n)
        }), {
            bind: function() {
                return e.apply(this, d(arguments))
            },
            unbind: function() {
                return f.apply(this, d(arguments))
            },
            init: function() {
                return e.apply(this, ["init"].concat(d(arguments)))
            },
            change: function() {
                return e.apply(this, [x].concat(d(arguments)))
            },
            internalChange: function() {
                return e.apply(this, [y].concat(d(arguments)))
            },
            externalChange: function() {
                return e.apply(this, [z].concat(d(arguments)))
            },
            baseURL: function() {
                var a = K.href;
                return -1 != a.indexOf("#") && (a = a.substr(0, a.indexOf("#"))), /\/$/.test(a) && (a = a.substr(0, a.length - 1)), a
            },
            autoUpdate: function(a) {
                return a !== b ? (C.autoUpdate = a, this) : C.autoUpdate
            },
            history: function(a) {
                return a !== b ? (C.history = a, this) : C.history
            },
            state: function(a) {
                if (a !== b) {
                    C.state = a;
                    var c = h();
                    return C.state !== b && (J.pushState ? "/#/" == c.substr(0, 3) && K.replace(C.state.replace(/^\/$/, "") + c.substr(2)) : "/" != c && c.replace(/^\/#/, "") != i() && M(function() {
                        K.replace(C.state.replace(/^\/$/, "") + "/#" + c)
                    }, 1)), this
                }
                return C.state
            },
            strict: function(a) {
                return a !== b ? (C.strict = a, this) : C.strict
            },
            tracker: function(a) {
                return a !== b ? (C.tracker = a, this) : C.tracker
            },
            wrap: function(a) {
                return a !== b ? (C.wrap = a, this) : C.wrap
            },
            update: function() {
                return W = A, this.value(X), W = B, this
            },
            title: function(a) {
                return a !== b ? (M(function() {
                    S = I.title = a, V && O && O.contentWindow && O.contentWindow.document && (O.contentWindow.document.title = a, V = B)
                }, 50), this) : I.title
            },
            value: function(a) {
                if (a !== b) {
                    if (a = l(a), "/" == a && (a = ""), X == a && !W) return;
                    if (X = a, C.autoUpdate || W) {
                        if (o(A)) return this;
                        g() ? J[C.history ? "pushState" : "replaceState"]({}, "", C.state.replace(/\/$/, "") + ("" === X ? "/" : X)) : (T = A, F ? C.history ? K.hash = "#" + X : K.replace("#" + X) : X != j() && (C.history ? K.hash = "#" + X : K.replace("#" + X)), G && !P && C.history && M(q, 50), F ? M(function() {
                            T = B
                        }, 1) : T = B)
                    }
                    return this
                }
                return l(X)
            },
            path: function(a) {
                if (a !== b) {
                    var c = this.queryString(),
                        d = this.hash();
                    return this.value(a + (c ? "?" + c : "") + (d ? "#" + d : "")), this
                }
                return l(X).split("#")[0].split("?")[0]
            },
            pathNames: function() {
                var a = this.path(),
                    b = a.replace(N, "/").split("/");
                return ("/" == a.substr(0, 1) || 0 === a.length) && b.splice(0, 1), "/" == a.substr(a.length - 1, 1) && b.splice(b.length - 1, 1), b
            },
            queryString: function(a) {
                if (a !== b) {
                    var c = this.hash();
                    return this.value(this.path() + (a ? "?" + a : "") + (c ? "#" + c : "")), this
                }
                return a = X.split("?"), a.slice(1, a.length).join("?").split("#")[0]
            },
            parameter: function(c, d, e) {
                var f, g;
                if (d !== b) {
                    var h = this.parameterNames();
                    for (g = [], d = d === b || d === u ? "" : d.toString(), f = 0; f < h.length; f++) {
                        var i = h[f],
                            j = this.parameter(i);
                        "string" == typeof j && (j = [j]), i == c && (j = d === u || "" === d ? [] : e ? j.concat([d]) : [d]);
                        for (var k = 0; k < j.length; k++) g.push(i + "=" + j[k])
                    }
                    return -1 == a.inArray(c, h) && d !== u && "" !== d && g.push(c + "=" + d), this.queryString(g.join("&")), this
                }
                if (d = this.queryString()) {
                    for (e = [], g = d.split("&"), f = 0; f < g.length; f++) d = g[f].split("="), d[0] == c && e.push(d.slice(1).join("="));
                    if (0 !== e.length) return 1 != e.length ? e : e[0]
                }
            },
            parameterNames: function() {
                var b = this.queryString(),
                    c = [];
                if (b && -1 != b.indexOf("=")) {
                    b = b.split("&");
                    for (var d = 0; d < b.length; d++) {
                        var e = b[d].split("=")[0]; - 1 == a.inArray(e, c) && c.push(e)
                    }
                }
                return c
            },
            hash: function(a) {
                return a !== b ? (this.value(X.split("#")[0] + (a ? "#" + a : "")), this) : (a = X.split("#"), a.slice(1, a.length).join("#"))
            }
        }
    }(), a.fn.address = function(b) {
        return this.data("address") || this.on("click", function(c) {
            if (c.shiftKey || c.ctrlKey || c.metaKey || 2 == c.which) return !0;
            var d = c.currentTarget;
            a(d).is("a") && (c.preventDefault(), c = b ? b.call(d) : /address:/.test(a(d).attr("rel")) ? a(d).attr("rel").split("address:")[1].split(" ")[0] : void 0 === a.address.state() || /^\/?$/.test(a.address.state()) ? a(d).attr("href").replace(/^(#\!?|\.)/, "") : a(d).attr("href").replace(new RegExp("^(.*" + a.address.state() + "|\\.)"), ""), a.address.value(c))
        }).on("submit", function(c) {
            var d = c.currentTarget;
            a(d).is("form") && (c.preventDefault(), c = a(d).attr("action"), d = b ? b.call(d) : (-1 != c.indexOf("?") ? c.replace(/&$/, "") : c + "?") + a(d).serialize(), a.address.value(d))
        }).data("address", !0), this
    }
}(jQuery),
function(a, b) {
    "use strict";
    var c, d = a.document,
        e = a.Modernizr,
        f = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }, g = "Moz Webkit O Ms".split(" "),
        h = function(a) {
            var b, c = d.documentElement.style;
            if ("string" == typeof c[a]) return a;
            a = f(a);
            for (var e = 0, h = g.length; h > e; e++)
                if (b = g[e] + a, "string" == typeof c[b]) return b
        }, i = h("transform"),
        j = h("transitionProperty"),
        k = {
            csstransforms: function() {
                return !!i
            },
            csstransforms3d: function() {
                var a = !! h("perspective");
                if (a) {
                    var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        d = "@media (" + c.join("transform-3d),(") + "modernizr)",
                        e = b("<style>" + d + "{#modernizr{height:3px}}</style>").appendTo("head"),
                        f = b('<div id="modernizr" />').appendTo("html");
                    a = 3 === f.height(), f.remove(), e.remove()
                }
                return a
            },
            csstransitions: function() {
                return !!j
            }
        };
    if (e)
        for (c in k) e.hasOwnProperty(c) || e.addTest(c, k[c]);
    else {
        e = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var l, m = " ";
        for (c in k) l = k[c](), e[c] = l, m += " " + (l ? "" : "no-") + c;
        b("html").addClass(m)
    } if (e.csstransforms) {
        var n = e.csstransforms3d ? {
            translate: function(a) {
                return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
            },
            scale: function(a) {
                return "scale3d(" + a + ", " + a + ", 1) "
            }
        } : {
            translate: function(a) {
                return "translate(" + a[0] + "px, " + a[1] + "px) "
            },
            scale: function(a) {
                return "scale(" + a + ") "
            }
        }, o = function(a, c, d) {
                var e, f, g = b.data(a, "isoTransform") || {}, h = {}, j = {};
                h[c] = d, b.extend(g, h);
                for (e in g) f = g[e], j[e] = n[e](f);
                var k = j.translate || "",
                    l = j.scale || "",
                    m = k + l;
                b.data(a, "isoTransform", g), a.style[i] = m
            };
        b.cssNumber.scale = !0, b.cssHooks.scale = {
            set: function(a, b) {
                o(a, "scale", b)
            },
            get: function(a) {
                var c = b.data(a, "isoTransform");
                return c && c.scale ? c.scale : 1
            }
        }, b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit)
        }, b.cssNumber.translate = !0, b.cssHooks.translate = {
            set: function(a, b) {
                o(a, "translate", b)
            },
            get: function(a) {
                var c = b.data(a, "isoTransform");
                return c && c.translate ? c.translate : [0, 0]
            }
        }
    }
    var p, q;
    e.csstransitions && (p = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[j], q = h("transitionDuration"));
    var r, s = b.event,
        t = b.event.handle ? "handle" : "dispatch";
    s.special.smartresize = {
        setup: function() {
            b(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize", r && clearTimeout(r), r = setTimeout(function() {
                s[t].apply(c, d)
            }, "execAsap" === b ? 0 : 100)
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Isotope = function(a, c, d) {
        this.element = b(c), this._create(a), this._init(d)
    };
    var u = ["width", "height"],
        v = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = u.slice(0);
            for (var e in this.options.containerStyle) d.push(e);
            for (var f = 0, g = d.length; g > f; f++) e = d[f], this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++, b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass)
            }, 0), this.options.resizable && v.bind("smartresize.isotope", function() {
                i.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector,
                c = b ? a.filter(b).add(a.find(b)) : a,
                d = {
                    position: "absolute"
                };
            return c = c.filter(function(a, b) {
                return 1 === b.nodeType
            }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a) c = "_update" + f(d), this[c] && this[c]()
            }
        },
        _updateAnimationEngine: function() {
            var a, b = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (b) {
                case "css":
                case "none":
                    a = !1;
                    break;
                case "jquery":
                    a = !0;
                    break;
                default:
                    a = !e.csstransitions
            }
            this.isUsingJQueryAnimation = a, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = "" === this.options.filter ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
                d = "." + c,
                e = a.filter(d),
                f = e;
            if ("*" !== b) {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }), f.removeClass(c), a.filter(b)
        },
        updateSortData: function(a, c) {
            var d, e, f = this,
                g = this.options.getSortData;
            a.each(function() {
                d = b(this), e = {};
                for (var a in g) e[a] = c || "original-order" !== a ? g[a](d, f) : b.data(this, "isotope-sort-data")[a];
                b.data(this, "isotope-sort-data", e)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
                b = this._getSorter,
                c = this.options.sortAscending ? 1 : -1,
                d = function(d, e) {
                    var f = b(d, a),
                        g = b(e, a);
                    return f === g && "original-order" !== a && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : g > f ? -1 : 0) * c
                };
            this.$filteredAtoms.sort(d)
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            if (this["_" + c + "Layout"](a), this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                })
            }
            this._processStyleQueue(a, b), this.isLaidOut = !0
        },
        _processStyleQueue: function(a, c) {
            var d, f, g, h, i = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                j = this.options.animationOptions,
                k = this.options.onLayout;
            if (f = function(a, b) {
                b.$el[i](b.style, j)
            }, this._isInserting && this.isUsingJQueryAnimation) f = function(a, b) {
                d = b.$el.hasClass("no-transition") ? "css" : i, b.$el[d](b.style, j)
            };
            else if (c || k || j.complete) {
                var l = !1,
                    m = [c, k, j.complete],
                    n = this;
                if (g = !0, h = function() {
                    if (!l) {
                        for (var b, c = 0, d = m.length; d > c; c++) b = m[c], "function" == typeof b && b.call(n.element, a, n);
                        l = !0
                    }
                }, this.isUsingJQueryAnimation && "animate" === i) j.complete = h, g = !1;
                else if (e.csstransitions) {
                    for (var o, r = 0, s = this.styleQueue[0], t = s && s.$el; !t || !t.length;) {
                        if (o = this.styleQueue[r++], !o) return;
                        t = o.$el
                    }
                    var u = parseFloat(getComputedStyle(t[0])[q]);
                    u > 0 && (f = function(a, b) {
                        b.$el[i](b.style, j).one(p, h)
                    }, g = !1)
                }
            }
            b.each(this.styleQueue, f), g && h(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c), b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                var d = c._filter(a);
                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"), c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }), c._isInserting = !1, c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this,
                d = function() {
                    a.remove(), b && b.call(c.element)
                };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms,
                b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), v.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b, c = this.options.layoutMode,
                d = a ? "rowHeight" : "columnWidth",
                e = a ? "height" : "width",
                g = a ? "rows" : "cols",
                h = this.element[e](),
                i = this.options[c] && this.options[c][d] || this.$filteredAtoms["outer" + f(e)](!0) || h;
            b = Math.floor(h / i), b = Math.max(b, 1), this[c][g] = b, this[c][d] = i
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rows" : "cols",
                d = this[b][c];
            return this._getSegments(a), this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var a = this.masonry.cols;
            for (this.masonry.colYs = []; a--;) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var c = this,
                d = c.masonry;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                if (e = Math.min(e, d.cols), 1 === e) c._masonryPlaceBrick(a, d.colYs);
                else {
                    var f, g, h = d.cols + 1 - e,
                        i = [];
                    for (g = 0; h > g; g++) f = d.colYs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                    c._masonryPlaceBrick(a, i)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = this.masonry.columnWidth * d,
                h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0),
                j = this.masonry.cols + 1 - f;
            for (e = 0; j > e; e++) this.masonry.colYs[d + e] = i
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var c = this,
                d = this.element.width(),
                e = this.fitRows;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                0 !== e.x && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var c = this,
                d = this.cellsByRow;
            a.each(function() {
                var a = b(this),
                    e = d.index % d.cols,
                    f = Math.floor(d.index / d.cols),
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function() {
                var a = b(this);
                c._pushPosition(a, 0, c.straightDown.y), c.straightDown.y += a.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; a--;) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var c = this,
                d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                if (e = Math.min(e, d.rows), 1 === e) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                else {
                    var f, g, h = d.rows + 1 - e,
                        i = [];
                    for (g = 0; h > g; g++) f = d.rowXs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                    c._masonryHorizontalPlaceBrick(a, i)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = c,
                h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0),
                j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; j > e; e++) this.masonryHorizontal.rowXs[d + e] = i
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var c = this,
                d = this.element.height(),
                e = this.fitColumns;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                0 !== e.y && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var c = this,
                d = this.cellsByColumn;
            a.each(function() {
                var a = b(this),
                    e = Math.floor(d.index / d.rows),
                    f = d.index % d.rows,
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function() {
                var a = b(this);
                c._pushPosition(a, c.straightAcross.x, 0), c.straightAcross.x += a.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, b.fn.imagesLoaded = function(a) {
        function c() {
            a.call(e, f)
        }

        function d(a) {
            var e = a.target;
            e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c), f.unbind(".imagesLoaded", d)))
        }
        var e = this,
            f = e.find("img").add(e.filter("img")),
            g = f.length,
            h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            i = [];
        return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
            var a = this.src;
            this.src = h, this.src = a
        }), e
    };
    var w = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.isotope = function(a, c) {
        if ("string" == typeof a) {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                return c ? b.isFunction(c[a]) && "_" !== a.charAt(0) ? void c[a].apply(c, d) : void w("no such method '" + a + "' for isotope instance") : void w("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'")
            })
        } else this.each(function() {
            var d = b.data(this, "isotope");
            d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
        });
        return this
    }
}(window, jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var e, f = b || window.event,
            g = [].slice.call(arguments, 1),
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        return b = a.event.fix(f), b.type = "mousewheel", f.wheelDelta && (h = f.wheelDelta), f.detail && (h = -1 * f.detail), f.deltaY && (j = -1 * f.deltaY, h = j), f.deltaX && (i = f.deltaX, h = -1 * i), void 0 !== f.wheelDeltaY && (j = f.wheelDeltaY), void 0 !== f.wheelDeltaX && (i = -1 * f.wheelDeltaX), k = Math.abs(h), (!c || c > k) && (c = k), l = Math.max(Math.abs(j), Math.abs(i)), (!d || d > l) && (d = l), e = h > 0 ? "floor" : "ceil", h = Math[e](h / c), i = Math[e](i / d), j = Math[e](j / d), g.unshift(b, h, i, j), (a.event.dispatch || a.event.handle).apply(this, g)
    }
    var c, d, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        f = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (a.event.fixHooks)
        for (var g = e.length; g;) a.event.fixHooks[e[--g]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = f.length; a;) this.addEventListener(f[--a], b, !1);
            else this.onmousewheel = b
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = f.length; a;) this.removeEventListener(f[--a], b, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
}), InfoBox.prototype = new google.maps.OverlayView, InfoBox.prototype.createInfoBoxDiv_ = function() {
    var a, b, c, d = this,
        e = function(a) {
            a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()
        }, f = function(a) {
            a.returnValue = !1, a.preventDefault && a.preventDefault(), d.enableEventPropagation_ || e(a)
        };
    if (!this.div_) {
        if (this.div_ = document.createElement("div"), this.setBoxStyle_(), "undefined" == typeof this.content_.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + this.content_ : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(this.content_)), this.getPanes()[this.pane_].appendChild(this.div_), this.addClickHandler_(), this.div_.style.width ? this.fixedWidthSet_ = !0 : 0 !== this.maxWidth_ && this.div_.offsetWidth > this.maxWidth_ ? (this.div_.style.width = this.maxWidth_, this.div_.style.overflow = "auto", this.fixedWidthSet_ = !0) : (c = this.getBoxWidths_(), this.div_.style.width = this.div_.offsetWidth - c.left - c.right + "px", this.fixedWidthSet_ = !1), this.panBox_(this.disableAutoPan_), !this.enableEventPropagation_) {
            for (this.eventListeners_ = [], b = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"], a = 0; a < b.length; a++) this.eventListeners_.push(google.maps.event.addDomListener(this.div_, b[a], e));
            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function() {
                this.style.cursor = "default"
            }))
        }
        this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", f), google.maps.event.trigger(this, "domready")
    }
}, InfoBox.prototype.getCloseBoxImg_ = function() {
    var a = "";
    return "" !== this.closeBoxURL_ && (a = "<img", a += " src='" + this.closeBoxURL_ + "'", a += " align=right", a += " style='", a += " position: relative;", a += " cursor: pointer;", a += " margin: " + this.closeBoxMargin_ + ";", a += "'>"), a
}, InfoBox.prototype.addClickHandler_ = function() {
    var a;
    "" !== this.closeBoxURL_ ? (a = this.div_.firstChild, this.closeListener_ = google.maps.event.addDomListener(a, "click", this.getCloseClickHandler_())) : this.closeListener_ = null
}, InfoBox.prototype.getCloseClickHandler_ = function() {
    var a = this;
    return function(b) {
        b.cancelBubble = !0, b.stopPropagation && b.stopPropagation(), google.maps.event.trigger(a, "closeclick"), a.close()
    }
}, InfoBox.prototype.panBox_ = function(a) {
    var b, c, d = 0,
        e = 0;
    if (!a && (b = this.getMap(), b instanceof google.maps.Map)) {
        b.getBounds().contains(this.position_) || b.setCenter(this.position_), c = b.getBounds();
        var f = b.getDiv(),
            g = f.offsetWidth,
            h = f.offsetHeight,
            i = this.pixelOffset_.width,
            j = this.pixelOffset_.height,
            k = this.div_.offsetWidth,
            l = this.div_.offsetHeight,
            m = this.infoBoxClearance_.width,
            n = this.infoBoxClearance_.height,
            o = this.getProjection().fromLatLngToContainerPixel(this.position_);
        if (o.x < -i + m ? d = o.x + i - m : o.x + k + i + m > g && (d = o.x + k + i + m - g), this.alignBottom_ ? o.y < -j + n + l ? e = o.y + j - n - l : o.y + j + n > h && (e = o.y + j + n - h) : o.y < -j + n ? e = o.y + j - n : o.y + l + j + n > h && (e = o.y + l + j + n - h), 0 !== d || 0 !== e) {
            {
                b.getCenter()
            }
            b.panBy(d, e)
        }
    }
}, InfoBox.prototype.setBoxStyle_ = function() {
    var a, b;
    if (this.div_) {
        this.div_.className = this.boxClass_, this.div_.style.cssText = "", b = this.boxStyle_;
        for (a in b) b.hasOwnProperty(a) && (this.div_.style[a] = b[a]);
        "undefined" != typeof this.div_.style.opacity && "" !== this.div_.style.opacity && (this.div_.style.filter = "alpha(opacity=" + 100 * this.div_.style.opacity + ")"), this.div_.style.position = "absolute", this.div_.style.visibility = "hidden", null !== this.zIndex_ && (this.div_.style.zIndex = this.zIndex_)
    }
}, InfoBox.prototype.getBoxWidths_ = function() {
    var a, b = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, c = this.div_;
    return document.defaultView && document.defaultView.getComputedStyle ? (a = c.ownerDocument.defaultView.getComputedStyle(c, ""), a && (b.top = parseInt(a.borderTopWidth, 10) || 0, b.bottom = parseInt(a.borderBottomWidth, 10) || 0, b.left = parseInt(a.borderLeftWidth, 10) || 0, b.right = parseInt(a.borderRightWidth, 10) || 0)) : document.documentElement.currentStyle && c.currentStyle && (b.top = parseInt(c.currentStyle.borderTopWidth, 10) || 0, b.bottom = parseInt(c.currentStyle.borderBottomWidth, 10) || 0, b.left = parseInt(c.currentStyle.borderLeftWidth, 10) || 0, b.right = parseInt(c.currentStyle.borderRightWidth, 10) || 0), b
}, InfoBox.prototype.onRemove = function() {
    this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, InfoBox.prototype.draw = function() {
    this.createInfoBoxDiv_();
    var a = this.getProjection().fromLatLngToDivPixel(this.position_);
    this.div_.style.left = a.x + this.pixelOffset_.width + "px", this.alignBottom_ ? this.div_.style.bottom = -(a.y + this.pixelOffset_.height) + "px" : this.div_.style.top = a.y + this.pixelOffset_.height + "px", this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible"
}, InfoBox.prototype.setOptions = function(a) {
    "undefined" != typeof a.boxClass && (this.boxClass_ = a.boxClass, this.setBoxStyle_()), "undefined" != typeof a.boxStyle && (this.boxStyle_ = a.boxStyle, this.setBoxStyle_()), "undefined" != typeof a.content && this.setContent(a.content), "undefined" != typeof a.disableAutoPan && (this.disableAutoPan_ = a.disableAutoPan), "undefined" != typeof a.maxWidth && (this.maxWidth_ = a.maxWidth), "undefined" != typeof a.pixelOffset && (this.pixelOffset_ = a.pixelOffset), "undefined" != typeof a.alignBottom && (this.alignBottom_ = a.alignBottom), "undefined" != typeof a.position && this.setPosition(a.position), "undefined" != typeof a.zIndex && this.setZIndex(a.zIndex), "undefined" != typeof a.closeBoxMargin && (this.closeBoxMargin_ = a.closeBoxMargin), "undefined" != typeof a.closeBoxURL && (this.closeBoxURL_ = a.closeBoxURL), "undefined" != typeof a.infoBoxClearance && (this.infoBoxClearance_ = a.infoBoxClearance), "undefined" != typeof a.isHidden && (this.isHidden_ = a.isHidden), "undefined" != typeof a.visible && (this.isHidden_ = !a.visible), "undefined" != typeof a.enableEventPropagation && (this.enableEventPropagation_ = a.enableEventPropagation), this.div_ && this.draw()
}, InfoBox.prototype.setContent = function(a) {
    this.content_ = a, this.div_ && (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.fixedWidthSet_ || (this.div_.style.width = ""), "undefined" == typeof a.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + a : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(a)), this.fixedWidthSet_ || (this.div_.style.width = this.div_.offsetWidth + "px", "undefined" == typeof a.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + a : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(a))), this.addClickHandler_()), google.maps.event.trigger(this, "content_changed")
}, InfoBox.prototype.setPosition = function(a) {
    this.position_ = a, this.div_ && this.draw(), google.maps.event.trigger(this, "position_changed")
}, InfoBox.prototype.setZIndex = function(a) {
    this.zIndex_ = a, this.div_ && (this.div_.style.zIndex = a), google.maps.event.trigger(this, "zindex_changed")
}, InfoBox.prototype.setVisible = function(a) {
    this.isHidden_ = !a, this.div_ && (this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible")
}, InfoBox.prototype.getContent = function() {
    return this.content_
}, InfoBox.prototype.getPosition = function() {
    return this.position_
}, InfoBox.prototype.getZIndex = function() {
    return this.zIndex_
}, InfoBox.prototype.getVisible = function() {
    var a;
    return a = "undefined" == typeof this.getMap() || null === this.getMap() ? !1 : !this.isHidden_
}, InfoBox.prototype.show = function() {
    this.isHidden_ = !1, this.div_ && (this.div_.style.visibility = "visible")
}, InfoBox.prototype.hide = function() {
    this.isHidden_ = !0, this.div_ && (this.div_.style.visibility = "hidden")
}, InfoBox.prototype.open = function(a, b) {
    var c = this;
    b && (this.position_ = b.getPosition(), this.moveListener_ = google.maps.event.addListener(b, "position_changed", function() {
        c.setPosition(this.getPosition())
    })), this.setMap(a), this.div_ && this.panBox_()
}, InfoBox.prototype.close = function() {
    var a;
    if (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.eventListeners_) {
        for (a = 0; a < this.eventListeners_.length; a++) google.maps.event.removeListener(this.eventListeners_[a]);
        this.eventListeners_ = null
    }
    this.moveListener_ && (google.maps.event.removeListener(this.moveListener_), this.moveListener_ = null), this.contextListener_ && (google.maps.event.removeListener(this.contextListener_), this.contextListener_ = null), this.setMap(null)
};
var QRCode;
! function() {
    function a(a) {
        this.mode = j.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
        for (var b = 0, c = this.data.length; c > b; b++) {
            var d = [],
                e = this.data.charCodeAt(b);
            e > 65536 ? (d[0] = 240 | (1835008 & e) >>> 18, d[1] = 128 | (258048 & e) >>> 12, d[2] = 128 | (4032 & e) >>> 6, d[3] = 128 | 63 & e) : e > 2048 ? (d[0] = 224 | (61440 & e) >>> 12, d[1] = 128 | (4032 & e) >>> 6, d[2] = 128 | 63 & e) : e > 128 ? (d[0] = 192 | (1984 & e) >>> 6, d[1] = 128 | 63 & e) : d[0] = e, this.parsedData.push(d)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function b(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function c(a, b) {
        if (void 0 == a.length) throw new Error(a.length + "/" + b);
        for (var c = 0; c < a.length && 0 == a[c];) c++;
        this.num = new Array(a.length - c + b);
        for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
    }

    function d(a, b) {
        this.totalCount = a, this.dataCount = b
    }

    function e() {
        this.buffer = [], this.length = 0
    }

    function f() {
        return "undefined" != typeof CanvasRenderingContext2D
    }

    function g() {
        var a = !1,
            b = navigator.userAgent;
        return /android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a
    }

    function h(a, b) {
        for (var c = 1, d = i(a), e = 0, f = p.length; f >= e; e++) {
            var g = 0;
            switch (b) {
                case k.L:
                    g = p[e][0];
                    break;
                case k.M:
                    g = p[e][1];
                    break;
                case k.Q:
                    g = p[e][2];
                    break;
                case k.H:
                    g = p[e][3]
            }
            if (g >= d) break;
            c++
        }
        if (c > p.length) throw new Error("Too long data");
        return c
    }

    function i(a) {
        var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return b.length + (b.length != a ? 3 : 0)
    }
    a.prototype = {
        getLength: function() {
            return this.parsedData.length
        },
        write: function(a) {
            for (var b = 0, c = this.parsedData.length; c > b; b++) a.put(this.parsedData[b], 8)
        }
    }, b.prototype = {
        addData: function(b) {
            var c = new a(b);
            this.dataList.push(c), this.dataCache = null
        },
        isDark: function(a, b) {
            if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
            return this.modules[a][b]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(a, c) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var d = 0; d < this.moduleCount; d++) {
                this.modules[d] = new Array(this.moduleCount);
                for (var e = 0; e < this.moduleCount; e++) this.modules[d][e] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c)
        },
        setupPositionProbePattern: function(a, b) {
            for (var c = -1; 7 >= c; c++)
                if (!(-1 >= a + c || this.moduleCount <= a + c))
                    for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
        },
        getBestMaskPattern: function() {
            for (var a = 0, b = 0, c = 0; 8 > c; c++) {
                this.makeImpl(!0, c);
                var d = m.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c)
            }
            return b
        },
        createMovieClip: function(a, b, c) {
            var d = a.createEmptyMovieClip(b, c),
                e = 1;
            this.make();
            for (var f = 0; f < this.modules.length; f++)
                for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
                    var i = h * e,
                        j = this.modules[f][h];
                    j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill())
                }
            return d
        },
        setupTimingPattern: function() {
            for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = a % 2 == 0);
            for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = b % 2 == 0)
        },
        setupPositionAdjustPattern: function() {
            for (var a = m.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                for (var c = 0; c < a.length; c++) {
                    var d = a[b],
                        e = a[c];
                    if (null == this.modules[d][e])
                        for (var f = -2; 2 >= f; f++)
                            for (var g = -2; 2 >= g; g++) this.modules[d + f][e + g] = -2 == f || 2 == f || -2 == g || 2 == g || 0 == f && 0 == g ? !0 : !1
                }
        },
        setupTypeNumber: function(a) {
            for (var b = m.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
                var d = !a && 1 == (b >> c & 1);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
            }
            for (var c = 0; 18 > c; c++) {
                var d = !a && 1 == (b >> c & 1);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
            }
        },
        setupTypeInfo: function(a, b) {
            for (var c = this.errorCorrectLevel << 3 | b, d = m.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
                var f = !a && 1 == (d >> e & 1);
                6 > e ? this.modules[e][8] = f : 8 > e ? this.modules[e + 1][8] = f : this.modules[this.moduleCount - 15 + e][8] = f
            }
            for (var e = 0; 15 > e; e++) {
                var f = !a && 1 == (d >> e & 1);
                8 > e ? this.modules[8][this.moduleCount - e - 1] = f : 9 > e ? this.modules[8][15 - e - 1 + 1] = f : this.modules[8][15 - e - 1] = f
            }
            this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function(a, b) {
            for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)
                for (6 == g && g--;;) {
                    for (var h = 0; 2 > h; h++)
                        if (null == this.modules[d][g - h]) {
                            var i = !1;
                            f < a.length && (i = 1 == (a[f] >>> e & 1));
                            var j = m.getMask(b, d, g - h);
                            j && (i = !i), this.modules[d][g - h] = i, e--, -1 == e && (f++, e = 7)
                        }
                    if (d += c, 0 > d || this.moduleCount <= d) {
                        d -= c, c = -c;
                        break
                    }
                }
        }
    }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function(a, c, f) {
        for (var g = d.getRSBlocks(a, c), h = new e, i = 0; i < f.length; i++) {
            var j = f[i];
            h.put(j.mode, 4), h.put(j.getLength(), m.getLengthInBits(j.mode, a)), j.write(h)
        }
        for (var k = 0, i = 0; i < g.length; i++) k += g[i].dataCount;
        if (h.getLengthInBits() > 8 * k) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")");
        for (h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4); h.getLengthInBits() % 8 != 0;) h.putBit(!1);
        for (;;) {
            if (h.getLengthInBits() >= 8 * k) break;
            if (h.put(b.PAD0, 8), h.getLengthInBits() >= 8 * k) break;
            h.put(b.PAD1, 8)
        }
        return b.createBytes(h, g)
    }, b.createBytes = function(a, b) {
        for (var d = 0, e = 0, f = 0, g = new Array(b.length), h = new Array(b.length), i = 0; i < b.length; i++) {
            var j = b[i].dataCount,
                k = b[i].totalCount - j;
            e = Math.max(e, j), f = Math.max(f, k), g[i] = new Array(j);
            for (var l = 0; l < g[i].length; l++) g[i][l] = 255 & a.buffer[l + d];
            d += j;
            var n = m.getErrorCorrectPolynomial(k),
                o = new c(g[i], n.getLength() - 1),
                p = o.mod(n);
            h[i] = new Array(n.getLength() - 1);
            for (var l = 0; l < h[i].length; l++) {
                var q = l + p.getLength() - h[i].length;
                h[i][l] = q >= 0 ? p.get(q) : 0
            }
        }
        for (var r = 0, l = 0; l < b.length; l++) r += b[l].totalCount;
        for (var s = new Array(r), t = 0, l = 0; e > l; l++)
            for (var i = 0; i < b.length; i++) l < g[i].length && (s[t++] = g[i][l]);
        for (var l = 0; f > l; l++)
            for (var i = 0; i < b.length; i++) l < h[i].length && (s[t++] = h[i][l]);
        return s
    };
    for (var j = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, k = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, l = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, m = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(a) {
                for (var b = a << 10; m.getBCHDigit(b) - m.getBCHDigit(m.G15) >= 0;) b ^= m.G15 << m.getBCHDigit(b) - m.getBCHDigit(m.G15);
                return (a << 10 | b) ^ m.G15_MASK
            },
            getBCHTypeNumber: function(a) {
                for (var b = a << 12; m.getBCHDigit(b) - m.getBCHDigit(m.G18) >= 0;) b ^= m.G18 << m.getBCHDigit(b) - m.getBCHDigit(m.G18);
                return a << 12 | b
            },
            getBCHDigit: function(a) {
                for (var b = 0; 0 != a;) b++, a >>>= 1;
                return b
            },
            getPatternPosition: function(a) {
                return m.PATTERN_POSITION_TABLE[a - 1]
            },
            getMask: function(a, b, c) {
                switch (a) {
                    case l.PATTERN000:
                        return (b + c) % 2 == 0;
                    case l.PATTERN001:
                        return b % 2 == 0;
                    case l.PATTERN010:
                        return c % 3 == 0;
                    case l.PATTERN011:
                        return (b + c) % 3 == 0;
                    case l.PATTERN100:
                        return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
                    case l.PATTERN101:
                        return b * c % 2 + b * c % 3 == 0;
                    case l.PATTERN110:
                        return (b * c % 2 + b * c % 3) % 2 == 0;
                    case l.PATTERN111:
                        return (b * c % 3 + (b + c) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + a)
                }
            },
            getErrorCorrectPolynomial: function(a) {
                for (var b = new c([1], 0), d = 0; a > d; d++) b = b.multiply(new c([1, n.gexp(d)], 0));
                return b
            },
            getLengthInBits: function(a, b) {
                if (b >= 1 && 10 > b) switch (a) {
                    case j.MODE_NUMBER:
                        return 10;
                    case j.MODE_ALPHA_NUM:
                        return 9;
                    case j.MODE_8BIT_BYTE:
                        return 8;
                    case j.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + a)
                } else if (27 > b) switch (a) {
                    case j.MODE_NUMBER:
                        return 12;
                    case j.MODE_ALPHA_NUM:
                        return 11;
                    case j.MODE_8BIT_BYTE:
                        return 16;
                    case j.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + a)
                } else {
                    if (!(41 > b)) throw new Error("type:" + b);
                    switch (a) {
                        case j.MODE_NUMBER:
                            return 14;
                        case j.MODE_ALPHA_NUM:
                            return 13;
                        case j.MODE_8BIT_BYTE:
                            return 16;
                        case j.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + a)
                    }
                }
            },
            getLostPoint: function(a) {
                for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
                    for (var e = 0; b > e; e++) {
                        for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
                            if (!(0 > d + h || d + h >= b))
                                for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
                        f > 5 && (c += 3 + f - 5)
                    }
                for (var d = 0; b - 1 > d; d++)
                    for (var e = 0; b - 1 > e; e++) {
                        var j = 0;
                        a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3)
                    }
                for (var d = 0; b > d; d++)
                    for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                for (var e = 0; b > e; e++)
                    for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                for (var k = 0, e = 0; b > e; e++)
                    for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
                var l = Math.abs(100 * k / b / b - 50) / 5;
                return c += 10 * l
            }
        }, n = {
            glog: function(a) {
                if (1 > a) throw new Error("glog(" + a + ")");
                return n.LOG_TABLE[a]
            },
            gexp: function(a) {
                for (; 0 > a;) a += 255;
                for (; a >= 256;) a -= 255;
                return n.EXP_TABLE[a]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, o = 0; 8 > o; o++) n.EXP_TABLE[o] = 1 << o;
    for (var o = 8; 256 > o; o++) n.EXP_TABLE[o] = n.EXP_TABLE[o - 4] ^ n.EXP_TABLE[o - 5] ^ n.EXP_TABLE[o - 6] ^ n.EXP_TABLE[o - 8];
    for (var o = 0; 255 > o; o++) n.LOG_TABLE[n.EXP_TABLE[o]] = o;
    c.prototype = {
        get: function(a) {
            return this.num[a]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(a) {
            for (var b = new Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                for (var e = 0; e < a.getLength(); e++) b[d + e] ^= n.gexp(n.glog(this.get(d)) + n.glog(a.get(e)));
            return new c(b, 0)
        },
        mod: function(a) {
            if (this.getLength() - a.getLength() < 0) return this;
            for (var b = n.glog(this.get(0)) - n.glog(a.get(0)), d = new Array(this.getLength()), e = 0; e < this.getLength(); e++) d[e] = this.get(e);
            for (var e = 0; e < a.getLength(); e++) d[e] ^= n.gexp(n.glog(a.get(e)) + b);
            return new c(d, 0).mod(a)
        }
    }, d.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], d.getRSBlocks = function(a, b) {
        var c = d.getRsBlockTable(a, b);
        if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var e = c.length / 3, f = [], g = 0; e > g; g++)
            for (var h = c[3 * g + 0], i = c[3 * g + 1], j = c[3 * g + 2], k = 0; h > k; k++) f.push(new d(i, j));
        return f
    }, d.getRsBlockTable = function(a, b) {
        switch (b) {
            case k.L:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case k.M:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case k.Q:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case k.H:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return void 0
        }
    }, e.prototype = {
        get: function(a) {
            var b = Math.floor(a / 8);
            return 1 == (this.buffer[b] >>> 7 - a % 8 & 1)
        },
        put: function(a, b) {
            for (var c = 0; b > c; c++) this.putBit(1 == (a >>> b - c - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
        }
    };
    var p = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273]
    ],
        q = function() {
            var a = function(a, b) {
                this._el = a, this._htOption = b
            };
            return a.prototype.draw = function(a) {
                function b(a, b) {
                    var c = document.createElementNS("http://www.w3.org/2000/svg", a);
                    for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
                    return c
                } {
                    var c = this._htOption,
                        d = this._el,
                        e = a.getModuleCount();
                    Math.floor(c.width / e), Math.floor(c.height / e)
                }
                this.clear();
                var f = b("svg", {
                    viewBox: "0 0 " + String(e) + " " + String(e),
                    width: "100%",
                    height: "100%",
                    fill: c.colorLight
                });
                f.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), d.appendChild(f), f.appendChild(b("rect", {
                    fill: c.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var g = 0; e > g; g++)
                    for (var h = 0; e > h; h++)
                        if (a.isDark(g, h)) {
                            var i = b("use", {
                                x: String(g),
                                y: String(h)
                            });
                            i.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), f.appendChild(i)
                        }
            }, a.prototype.clear = function() {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, a
        }(),
        r = "svg" === document.documentElement.tagName.toLowerCase(),
        s = r ? q : f() ? function() {
            function a() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
            }

            function b(a, b) {
                var c = this;
                if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                    var d = document.createElement("img"),
                        e = function() {
                            c._bSupportDataURI = !1, c._fFail && _fFail.call(c)
                        }, f = function() {
                            c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c)
                        };
                    return d.onabort = e, d.onerror = e, d.onload = f, void(d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                }
                c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c)
            }
            if (this._android && this._android <= 2.1) {
                var c = 1 / window.devicePixelRatio,
                    d = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(a, b, e, f, g, h, i, j) {
                    if ("nodeName" in a && /img/i.test(a.nodeName))
                        for (var k = arguments.length - 1; k >= 1; k--) arguments[k] = arguments[k] * c;
                    else "undefined" == typeof j && (arguments[1] *= c, arguments[2] *= c, arguments[3] *= c, arguments[4] *= c);
                    d.apply(this, arguments)
                }
            }
            var e = function(a, b) {
                this._bIsPainted = !1, this._android = g(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
            };
            return e.prototype.draw = function(a) {
                var b = this._elImage,
                    c = this._oContext,
                    d = this._htOption,
                    e = a.getModuleCount(),
                    f = d.width / e,
                    g = d.height / e,
                    h = Math.round(f),
                    i = Math.round(g);
                b.style.display = "none", this.clear();
                for (var j = 0; e > j; j++)
                    for (var k = 0; e > k; k++) {
                        var l = a.isDark(j, k),
                            m = k * f,
                            n = j * g;
                        c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i)
                    }
                this._bIsPainted = !0
            }, e.prototype.makeImage = function() {
                this._bIsPainted && b.call(this, a)
            }, e.prototype.isPainted = function() {
                return this._bIsPainted
            }, e.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
            }, e.prototype.round = function(a) {
                return a ? Math.floor(1e3 * a) / 1e3 : a
            }, e
        }() : function() {
            var a = function(a, b) {
                this._el = a, this._htOption = b
            };
            return a.prototype.draw = function(a) {
                for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
                    g.push("<tr>");
                    for (var i = 0; d > i; i++) g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
                    g.push("</tr>")
                }
                g.push("</table>"), c.innerHTML = g.join("");
                var j = c.childNodes[0],
                    k = (b.width - j.offsetWidth) / 2,
                    l = (b.height - j.offsetHeight) / 2;
                k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px")
            }, a.prototype.clear = function() {
                this._el.innerHTML = ""
            }, a
        }();
    QRCode = function(a, b) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: k.H
        }, "string" == typeof b && (b = {
            text: b
        }), b)
            for (var c in b) this._htOption[c] = b[c];
        "string" == typeof a && (a = document.getElementById(a)), this._android = g(), this._el = a, this._oQRCode = null, this._oDrawing = new s(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function(a) {
        this._oQRCode = new b(h(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function() {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function() {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = k
}(),
function() {
    var a, b, c, d, e, f, g, h, i, j, k = "#ffffff",
        l = "#202020",
        m = "#535353",
        n = "#F91D65",
        o = "#F1EBE5",
        p = "#E3D8CA",
        q = "#594630",
        r = "#C4B59D",
        s = "#D8D8D8",
        t = 0,
        u = 0,
        v = 0;
    if ("true" == _local) var w = "http://localhost:8888/akaru/",
    x = "http://localhost:1337";
    else var w = "http://www.akaru.fr/",
    x = "http://devs.akaru.fr:1337";
    var y = {
        nbPreload: 0,
        idPage: null,
        transitionPage: !1,
        largMenu: 0,
        infosPages: null,
        filtres: null,
        refs: null,
        modeExp: !1,
        loaderInit: !1,
        $langue: null,
        loaderAffiche: !0,
        $siteMobile: null,
        telSortieInit: !0,
        touch: null,
        init: function() {
            var e = this;
            e.$langue = $(document.getElementById("langue")), e.$siteMobile = $(document.getElementById("siteMobile")), e.touch = "touch" == d[0].className ? !0 : !1, e.animerLoader(), e.resize(), e.telephone.init(), $(document.getElementById("reseaux")).find("a").on("mouseenter", function() {
                TweenLite.to($(this).find(".normal"), .3, {
                    top: 0,
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    top: 18,
                    opacity: 1,
                    ease: Cubic.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find(".survol"), .3, {
                    top: 36,
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenLite.to($(this).find(".normal"), .3, {
                    top: 18,
                    opacity: 1,
                    ease: Cubic.easeOut
                })
            }), e.touch ? c.find("li.sousMenu > a").on("click", function() {
                if ("true" == this.getAttribute("data-ouvert")) this.setAttribute("data-ouvert", "false"), e.desurvolMenu($(this).parent("li"));
                else {
                    var a = c.find('li.sousMenu > a[data-ouvert="true"]');
                    a.length && (a[0].setAttribute("data-ouvert", "false"), e.desurvolMenu(a.parent("li"))), this.setAttribute("data-ouvert", "true"), e.survolMenu($(this).parent("li"), "survol")
                }
                return !1
            }) : (c.find("> ul > li").on("mouseenter", function() {
                if ($(this).find("> a.logo").length > 0)
                    for (var a = $(this).find("span"), b = 0; b < a.length; b++) {
                        var c = b / 10;
                        TweenMax.to(a[b], .15, {
                            top: 1,
                            ease: Quad.easeOut,
                            delay: c,
                            yoyo: !0,
                            repeat: 1
                        })
                    } else e.survolMenu($(this), "survol")
            }).on("mouseleave", function() {
                $(this).find("> a.logo").length > 0 ? TweenLite.to($(this).find("span"), .1, {
                    top: 8,
                    ease: Quad.easeIn
                }) : e.desurvolMenu($(this))
            }), c.find("> ul > li > ul > li > a").on("mouseenter", function() {
                e.survolSousMenu($(this))
            }).on("mouseleave", function() {
                e.desurvolSousMenu($(this))
            }), c.find("a").on("mouseenter", function() {
                "accueil" == y.idPage && z.changerIconeBulle($(this))
            })), a.load(function() {
                e.adresse.init();
                var a = 0;
                e.largMenu = c.find("> ul").width(), c.find("> ul > li").each(function() {
                    var b = 0;
                    $(this).find("ul li").each(function() {
                        b += $(this).width()
                    }), b > a && (a = b)
                }), a -= 107, c.find("ul ul")[0].style.width = a + "px", c.find("ul ul")[1].style.width = a + "px", c.find("> ul > li")[0].style.marginLeft = (a - e.largMenu) / 2 + "px", a > e.largMenu && (e.largMenu = a), c[0].style.width = e.largMenu + "px", c.find(".barre")[0].style.width = e.largMenu + 108 + "px", c.find("> ul > li").each(function() {
                    largSousMenuTemp = 0, $(this).find("ul li").each(function() {
                        largSousMenuTemp += $(this).width()
                    }), a > largSousMenuTemp - 107 && $(this).find("ul li:nth-child(2)").css("margin-left", (a - (largSousMenuTemp - 107)) / 2)
                }), e.resize(), TweenLite.to(h, .3, {
                    bottom: 0,
                    ease: Expo.easeOut
                }), j.find("a.ouvrir").trigger("mouseenter"), e.finirPreloadInit()
            }), e.$langue.find("a").on("mouseenter", function() {
                return this.className.indexOf("actif") > -1 ? !1 : (TweenLite.to($(this).find("span:nth-child(1)"), .3, {
                    left: 5,
                    top: -14,
                    opacity: 0,
                    ease: Cubic.easeOut
                }), void TweenLite.to($(this).find("span:nth-child(2)"), .3, {
                    left: 0,
                    top: -14,
                    opacity: 1,
                    ease: Cubic.easeOut
                }))
            }).on("mouseleave", function() {
                TweenLite.to($(this).find("span:nth-child(2)"), .3, {
                    left: -5,
                    top: 0,
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenLite.to($(this).find("span:nth-child(1)"), .3, {
                    left: 0,
                    top: 0,
                    opacity: 1,
                    ease: Cubic.easeOut
                })
            }).on("click", function() {
                return this.className.indexOf("actif") > -1 ? !1 : void 0
            }), b.on("mouseenter", "a.btnCube, a.btnCubeBlank", function() {
                Modernizr.csstransforms3d ? (TweenLite.to($(this).find(".normal"), .3, {
                    rotationX: -90,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    rotationX: 0,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".survol"), .3, {
                    top: -36,
                    ease: Quart.easeOut
                }), TweenMax.to($(this).find(".survol span"), .3, {
                    right: 5,
                    ease: Quart.easeIn,
                    yoyo: !0,
                    repeat: -1
                })
            }).on("mouseleave", "a.btnCube, a.btnCubeBlank", function() {
                Modernizr.csstransforms3d ? (TweenLite.to($(this).find(".normal"), .3, {
                    rotationX: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    rotationX: 90,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".survol"), .3, {
                    top: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol span"), .3, {
                    right: 10,
                    ease: Quart.easeOut
                })
            }), b.on("mouseenter", "a.fermerPetit", function() {
                TweenLite.to($(this).find(".losange"), .5, {
                    rotation: -90,
                    borderColor: n,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 90,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: n,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", "a.fermerPetit", function() {
                var a = $(this).parents("#siteMobile").length ? k : l;
                TweenLite.to($(this).find(".losange"), .5, {
                    rotation: 0,
                    borderColor: a,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 0,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: a,
                    ease: Expo.easeOut
                })
            }), e.$siteMobile.find("a.fermerPetit").on("click", function() {
                return TweenLite.to(e.$siteMobile, .5, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    onComplete: function() {
                        e.$siteMobile[0].style.display = "none"
                    }
                }), !1
            }), $.getJSON(_racineWeb + "json-infos-site/infos-pages/" + _lg + "/", function(a) {
                e.infosPages = a, e.finirPreloadInit()
            }), $.getJSON(_racineWeb + "json-contenu-site/filtres/" + _lg + "/", function(a) {
                e.filtres = a, e.finirPreloadInit()
            }), $.getJSON(_racineWeb + "json-contenu-site/references/" + _lg + "/", function(a) {
                e.refs = a, e.finirPreloadInit()
            }), y.preload.init(), y.preload.loaderImg("global", null, null), a.resize(function() {
                e.resize()
            })
        },
        survolMenu: function(a, b) {
            var c = this;
            if (TweenLite.to(a.find("> a span:nth-child(1)"), .3, {
                top: -54,
                opacity: 0,
                ease: Cubic.easeOut
            }), TweenLite.to(a.find("> a span:nth-child(2)"), .3, {
                top: -54,
                opacity: 1,
                ease: Cubic.easeOut
            }), "survol" != b) return !1;
            c.telSortieInit && (c.telSortieInit = !1, j.find("a.ouvrir").trigger("mouseleave")), a.find("ul").length > 0 && (a.find("ul")[0].style.zIndex = 1), TweenLite.to(a.find("ul"), .3, {
                left: 54,
                top: -54,
                ease: Cubic.easeOut
            });
            for (var d = a.find("ul li"), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("gauche" != f.className && "droite" != f.className) {
                    var g = .5 + e / 10;
                    TweenLite.to(f, g, {
                        left: 0,
                        top: 0,
                        ease: Expo.easeOut
                    })
                }
            }
        },
        desurvolMenu: function(a) {
            if (0 === a.length) return !1;
            a[0].className.indexOf("actif") < 0 && (TweenLite.to(a.find("> a span:nth-child(2)"), .3, {
                top: 0,
                opacity: 0,
                ease: Cubic.easeOut
            }), TweenLite.to(a.find("> a span:nth-child(1)"), .3, {
                top: 0,
                opacity: 1,
                ease: Cubic.easeOut
            })), a.find("ul").length > 0 && (a.find("ul")[0].style.zIndex = 0), TweenLite.to(a.find("ul"), .3, {
                left: 0,
                top: 0,
                ease: Cubic.easeOut
            });
            for (var b = a.find("ul li"), c = 0; c < b.length; c++) {
                var d = b[c];
                "gauche" != d.className && "droite" != d.className && TweenLite.to(d, .3, {
                    left: -54,
                    top: 54,
                    ease: Expo.easeOut
                })
            }
        },
        survolSousMenu: function(a) {
            TweenLite.to(a.find("span:nth-child(1)"), .3, {
                top: -54,
                opacity: 0,
                ease: Cubic.easeOut
            }), TweenLite.to(a.find("span:nth-child(2)"), .3, {
                top: -54,
                opacity: 1,
                ease: Cubic.easeOut
            })
        },
        desurvolSousMenu: function(a) {
            a[0].className.indexOf("actif") < 0 && (TweenLite.to(a.find("span:nth-child(2)"), .3, {
                top: 0,
                opacity: 0,
                ease: Cubic.easeOut
            }), TweenLite.to(a.find("span:nth-child(1)"), .3, {
                top: 0,
                opacity: 1,
                ease: Cubic.easeOut
            }))
        },
        finirPreloadInit: function() {
            var a = this;
            a.nbPreload++, 6 == a.nbPreload && a.initPage($(".partie")[0].id)
        },
        initPage: function(a) {
            var b = this;
            b.idPage = a, Modernizr.history && e.find("a.btnCube").address(), "accueil" == a ? z.init() : "agencePresentation" == a || "agencePoles" == a || "agenceProcessus" == a || "agenceClients" == a || "agenceRecompenses" == a ? A.init() : "referencesToutes" == a || "referencesSeule" == a ? B.init() : "expertiseConception" == a || "expertiseCreation" == a || "expertiseDeveloppement" == a || "expertiseEmarketing" == a || "expertiseServices" == a ? C.init() : "contact" == a ? D.init() : "contactVotreProjet" == a && D.projet.init()
        },
        animerLoader: function() {
            var a = this,
                b = f.find(".barre1"),
                c = f.find(".barre2"),
                d = f.find(".barre3"),
                e = new TimelineLite;
            e.to(b, .3, {
                height: 101,
                ease: Quad.easeIn
            }), e.to(c, .3, {
                height: 65,
                ease: Quad.easeOut
            }), e.to(d, .5, {
                height: 113,
                ease: Quad.easeInOut,
                onComplete: function() {
                    b[0].className += " masquer", c[0].className += " masquer", d[0].className += " masquer"
                }
            }), e.to(b, .3, {
                height: 0,
                ease: Quad.easeIn
            }), e.to(c, .3, {
                height: 0,
                ease: Quad.easeOut
            }), e.to(d, .5, {
                height: 0,
                ease: Quad.easeInOut,
                onComplete: function() {
                    b[0].className = "barre1", c[0].className = "barre2", d[0].className = "barre3", a.loaderAffiche && a.animerLoader()
                }
            })
        },
        masquerLoader: function() {
            var a = this;
            a.loaderAffiche = !1, a.loaderInit ? (e[0].style.borderWidth = "0px", e[0].style.margin = "0px", TweenLite.to(e, 0, {
                scale: 1,
                ease: Cubic.easeOut
            })) : a.loaderInit = !0, TweenLite.to(e, .5, {
                top: "0%",
                opacity: 1,
                ease: Cubic.easeOut
            }), TweenLite.to(f.find(".fond"), .5, {
                opacity: 0,
                ease: Cubic.easeOut,
                delay: .3
            }), TweenLite.to(f.find(".akaru"), .5, {
                scale: 2,
                opacity: 0,
                ease: Cubic.easeOut,
                delay: .3,
                onComplete: function() {
                    f[0].style.display = "none", TweenMax.killChildTweensOf(f[0]);
                    var a = f.find(".barre1"),
                        b = f.find(".barre2"),
                        c = f.find(".barre3");
                    a[0].className = "barre1", b[0].className = "barre2", c[0].className = "barre3", a[0].style.height = "0px", b[0].style.height = "0px", c[0].style.height = "0px", y.autoriserTransPage()
                }
            })
        },
        autoriserTransPage: function() {
            var a = this;
            a.transitionPage = !1, a.adresse.verifUrlPage(), a.modeExp && a.telephone.socket.emit("fin transition page desktop", {
                room: a.telephone.roomID
            })
        },
        resize: function() {
            var a = this;
            t = b.width(), u = b.height(), v = a.modeExp ? u : u - 54, e[0].style.height = v + "px", c[0].style.left = (b.width() - a.largMenu) / 2 + "px", "accueil" == a.idPage && z.resize(), "agencePresentation" == a.idPage && A.presentation.resize(), "agencePoles" == a.idPage && A.poles.resize(), "agenceProcessus" == a.idPage && A.processus.resize(), "agenceClients" == a.idPage && A.clients.resize(), "referencesToutes" == a.idPage && B.toutes.resize(), "referencesSeule" == a.idPage && B.seule.resize(), ("expertiseConception" == a.idPage || "expertiseCreation" == a.idPage || "expertiseDeveloppement" == a.idPage || "expertiseEmarketing" == a.idPage || "expertiseServices" == a.idPage) && C.resize(), "contact" == a.idPage && D.resize(), "contactVotreProjet" == a.idPage && D.projet.resize()
        }
    };
    y.preload = {
        tabImgsACharger: null,
        init: function() {
            var a = this;
            a.tabImgsACharger = {
                global: [_racineWeb + "images/bgs/fond_beige.png", _racineWeb + "images/bgs/pattern_grille.png", _racineWeb + "images/bgs/pattern_noir_transparent.png", _racineWeb + "images/bgs/separation_menu.png", _racineWeb + "images/bgs/triangle_beige_bas_droite.png", _racineWeb + "images/bgs/triangle_beige_haut_gauche.png", _racineWeb + "images/btns/fleche_bas_blanc.png", _racineWeb + "images/btns/fleche_bas_rose.png", _racineWeb + "images/btns/fleche_droite_blanc.png", _racineWeb + "images/btns/fleche_droite_noir.png", _racineWeb + "images/btns/fleche_droite_rose.png", _racineWeb + "images/btns/fleche_gauche_blanc.png", _racineWeb + "images/btns/fleche_gauche_rose.png", _racineWeb + "images/btns/telephone_icone.png", _racineWeb + "images/divers/loader_rose_beige_plein.gif", _racineWeb + "images/divers/loader_rose_beige.gif", _racineWeb + "images/divers/main_telephone.png", _racineWeb + "images/divers/sous_menu_droite.png", _racineWeb + "images/divers/sous_menu_gauche.png", _racineWeb + "images/divers/telephone.png", _racineWeb + "images/divers/trait_oblique.png", _racineWeb + "images/logos/akaru_menu.png", _racineWeb + "images/logos/facebook_blanc.png", _racineWeb + "images/logos/facebook_bleu.png", _racineWeb + "images/logos/facebook_noir.png", _racineWeb + "images/logos/facebook_rose.png", _racineWeb + "images/logos/google_plus_blanc.png", _racineWeb + "images/logos/google_plus_noir.png", _racineWeb + "images/logos/google_plus_rose.png", _racineWeb + "images/logos/google_plus_rouge.png", _racineWeb + "images/logos/twitter_blanc.png", _racineWeb + "images/logos/twitter_bleu.png", _racineWeb + "images/logos/twitter_noir.png", _racineWeb + "images/logos/twitter_rose.png"],
                accueil: [_racineWeb + "images/divers/accueil/akaru.png", _racineWeb + "images/divers/accueil/branche.png", _racineWeb + "images/divers/accueil/bulle.png", _racineWeb + "images/divers/accueil/corps_chimere.png", _racineWeb + "images/divers/accueil/eclair.png", _racineWeb + "images/divers/accueil/goutte_1.png", _racineWeb + "images/divers/accueil/goutte_2.png", _racineWeb + "images/divers/accueil/goutte_3.png", _racineWeb + "images/divers/accueil/goutte_4.png", _racineWeb + "images/divers/accueil/icone_bulle_1.png", _racineWeb + "images/divers/accueil/icone_bulle_2.png", _racineWeb + "images/divers/accueil/icone_bulle_3.png", _racineWeb + "images/divers/accueil/icone_bulle_4.png", _racineWeb + "images/divers/accueil/icone_bulle_5.png", _racineWeb + "images/divers/accueil/icone_bulle_6.png", _racineWeb + "images/divers/accueil/icone_bulle_7.png", _racineWeb + "images/divers/accueil/icone_bulle_8.png", _racineWeb + "images/divers/accueil/icone_bulle_9.png", _racineWeb + "images/divers/accueil/icone_bulle_10.png", _racineWeb + "images/divers/accueil/icone_bulle_11.png", _racineWeb + "images/divers/accueil/icone_bulle_12.png", _racineWeb + "images/divers/accueil/icone_bulle_13.png", _racineWeb + "images/divers/accueil/icone_bulle_14.png", _racineWeb + "images/divers/accueil/icone_bulle_15.png", _racineWeb + "images/divers/accueil/losange_noir.png", _racineWeb + "images/divers/accueil/lueur.png", _racineWeb + "images/divers/accueil/montagne_1.png", _racineWeb + "images/divers/accueil/montagne_2.png", _racineWeb + "images/divers/accueil/montagne_3.png", _racineWeb + "images/divers/accueil/montagne_4.png", _racineWeb + "images/divers/accueil/montagne_5.png", _racineWeb + "images/divers/accueil/montagne_6.png", _racineWeb + "images/divers/accueil/nuage_1.png", _racineWeb + "images/divers/accueil/nuage_2.png", _racineWeb + "images/divers/accueil/nuage_3.png", _racineWeb + "images/divers/accueil/ombre_branche.png", _racineWeb + "images/divers/accueil/ombre_montagnes.png", _racineWeb + "images/divers/accueil/ombre_sol_1.png", _racineWeb + "images/divers/accueil/ombre_sol_2.png", _racineWeb + "images/divers/accueil/plume_1.png", _racineWeb + "images/divers/accueil/plume_2.png", _racineWeb + "images/divers/accueil/plume_3.png", _racineWeb + "images/divers/accueil/plume_4.png", _racineWeb + "images/divers/accueil/plume_5.png", _racineWeb + "images/divers/accueil/tete_1_1.png", _racineWeb + "images/divers/accueil/tete_1_2.png", _racineWeb + "images/divers/accueil/tete_1_3.png", _racineWeb + "images/divers/accueil/tete_1_4.png", _racineWeb + "images/divers/accueil/tete_1_5.png", _racineWeb + "images/divers/accueil/tete_2_1.png", _racineWeb + "images/divers/accueil/tete_2_2.png", _racineWeb + "images/divers/accueil/tete_2_3.png", _racineWeb + "images/divers/accueil/tete_2_4.png", _racineWeb + "images/divers/accueil/tete_2_5.png", _racineWeb + "images/divers/accueil/tete_3_1.png", _racineWeb + "images/divers/accueil/tete_3_2.png", _racineWeb + "images/divers/accueil/tete_3_3.png", _racineWeb + "images/divers/accueil/tete_3_4.png", _racineWeb + "images/divers/accueil/tete_3_5.png"],
                poles: [_racineWeb + "images/btns/poles/pole_conseil_et_suivi_survol.png", _racineWeb + "images/btns/poles/pole_conseil_et_suivi.png", _racineWeb + "images/btns/poles/pole_digital_et_interactif_survol.png", _racineWeb + "images/btns/poles/pole_digital_et_interactif.png", _racineWeb + "images/btns/poles/pole_direction_artistique_survol.png", _racineWeb + "images/btns/poles/pole_direction_artistique.png"],
                processus: [_racineWeb + "images/bgs/processus/processus_baniere_titre_p1.png", _racineWeb + "images/bgs/processus/processus_baniere_titre_p2.png", _racineWeb + "images/bgs/processus/processus_baniere_titre_p3.png", _racineWeb + "images/bgs/processus/processus_baniere_titre_p4.png", _racineWeb + "images/bgs/processus/processus_baniere_titre_p5.png", _racineWeb + "images/bgs/processus/processus_baniere_titre_p6.png", _racineWeb + "images/bgs/processus/processus_beige_gris.png", _racineWeb + "images/bgs/processus/processus_icone_p1.png", _racineWeb + "images/bgs/processus/processus_icone_p2.png", _racineWeb + "images/bgs/processus/processus_icone_p3.png", _racineWeb + "images/bgs/processus/processus_icone_p4.png", _racineWeb + "images/bgs/processus/processus_icone_p5.png", _racineWeb + "images/bgs/processus/processus_icone_p6.png", _racineWeb + "images/bgs/processus/processus_triangle_gris_bas_droite.png", _racineWeb + "images/btns/processus/processus_puce_p_inactif.png", _racineWeb + "images/btns/processus/processus_puce_p1.png", _racineWeb + "images/btns/processus/processus_puce_p2.png", _racineWeb + "images/btns/processus/processus_puce_p3.png", _racineWeb + "images/btns/processus/processus_puce_p4.png", _racineWeb + "images/btns/processus/processus_puce_p5.png", _racineWeb + "images/btns/processus/processus_puce_p6.png", _racineWeb + "images/btns/processus/processus_puce_sp_inactif.png", _racineWeb + "images/btns/processus/processus_puce_sp1.png", _racineWeb + "images/btns/processus/processus_puce_sp2.png", _racineWeb + "images/btns/processus/processus_puce_sp3.png", _racineWeb + "images/btns/processus/processus_puce_sp4.png", _racineWeb + "images/btns/processus/processus_puce_sp5.png", _racineWeb + "images/btns/processus/processus_puce_sp6.png", _racineWeb + "images/divers/processus/processus_1_premiere_rencontre_presentation_du_brief.png", _racineWeb + "images/divers/processus/processus_2_premiere_rencontre_definir_votre_objectif.png", _racineWeb + "images/divers/processus/processus_3_conception_reflexion_et_analyse.png", _racineWeb + "images/divers/processus/processus_4_conception_eleboration_de_larborescence.png", _racineWeb + "images/divers/processus/processus_5_conception_zoning_et_maquettes.png", _racineWeb + "images/divers/processus/processus_6_les_contenus_livraison_des_contenus.png", _racineWeb + "images/divers/processus/processus_7_creation_graphique_pages_principales.png", _racineWeb + "images/divers/processus/processus_8_creation_graphique_les_declinaisons.png", _racineWeb + "images/divers/processus/processus_9_realisation_technique_integration_et_developpement.png", _racineWeb + "images/divers/processus/processus_10_realisation_technique_integration_des_contenus.png", _racineWeb + "images/divers/processus/processus_11_realisation_technique_tests_et_verifications.png", _racineWeb + "images/divers/processus/processus_12_mise_en_ligne_communication_digitale.png", _racineWeb + "images/divers/processus/processus_13_mise_en_ligne_champagne_et_petits_fours.png"],
                clients: [_racineWeb + "images/logos/clients/adidas.png", _racineWeb + "images/logos/clients/bandai_namco.png", _racineWeb + "images/logos/clients/bjorg.png", _racineWeb + "images/logos/clients/black_et_decker.png", _racineWeb + "images/logos/clients/blackbody.png", _racineWeb + "images/logos/clients/bledina.png", _racineWeb + "images/logos/clients/boiron.png", _racineWeb + "images/logos/clients/caisse_depargne.png", _racineWeb + "images/logos/clients/candia.png", _racineWeb + "images/logos/clients/cochonou.png", _racineWeb + "images/logos/clients/electronic_arts.png", _racineWeb + "images/logos/clients/evian.png", _racineWeb + "images/logos/clients/fresenius_kabi.png", _racineWeb + "images/logos/clients/king_jouet.png", _racineWeb + "images/logos/clients/le_petit_marseillais.png", _racineWeb + "images/logos/clients/lustucru.png", _racineWeb + "images/logos/clients/monster.png", _racineWeb + "images/logos/clients/nestle.png", _racineWeb + "images/logos/clients/ol_business_team.png", _racineWeb + "images/logos/clients/quechua.png", _racineWeb + "images/logos/clients/timberland.png", _racineWeb + "images/logos/clients/universal.png"],
                recompenses: [_racineWeb + "images/divers/recompenses/aime.png", _racineWeb + "images/divers/recompenses/akaru_k_1.png", _racineWeb + "images/divers/recompenses/akaru_k_2.png", _racineWeb + "images/divers/recompenses/akaru_k_3.png", _racineWeb + "images/divers/recompenses/akaru_k_4.png", _racineWeb + "images/divers/recompenses/akaru.png", _racineWeb + "images/divers/recompenses/award_1_fwa.png", _racineWeb + "images/divers/recompenses/award_2_awwwards.png", _racineWeb + "images/divers/recompenses/award_3_css_design_awards.png", _racineWeb + "images/divers/recompenses/awards.png", _racineWeb + "images/divers/recompenses/bande_1_1.png", _racineWeb + "images/divers/recompenses/bande_1_2.png", _racineWeb + "images/divers/recompenses/bande_2_1.png", _racineWeb + "images/divers/recompenses/bande_2_2.png", _racineWeb + "images/divers/recompenses/bande_3_1.png", _racineWeb + "images/divers/recompenses/c_trait.png", _racineWeb + "images/divers/recompenses/cerise.png", _racineWeb + "images/divers/recompenses/chez_ombre.png", _racineWeb + "images/divers/recompenses/chez.png", _racineWeb + "images/divers/recompenses/clou_1_1.png", _racineWeb + "images/divers/recompenses/clou_1_2.png", _racineWeb + "images/divers/recompenses/clou_2_1.png", _racineWeb + "images/divers/recompenses/clou_2_2.png", _racineWeb + "images/divers/recompenses/coeur.png", _racineWeb + "images/divers/recompenses/compteur.png", _racineWeb + "images/divers/recompenses/couronne_bas.png", _racineWeb + "images/divers/recompenses/couronne_haut.png", _racineWeb + "images/divers/recompenses/couronne.png", _racineWeb + "images/divers/recompenses/de.png", _racineWeb + "images/divers/recompenses/decoration.png", _racineWeb + "images/divers/recompenses/des.png", _racineWeb + "images/divers/recompenses/en.png", _racineWeb + "images/divers/recompenses/et_ombre.png", _racineWeb + "images/divers/recompenses/et.png", _racineWeb + "images/divers/recompenses/fleche_rejouer_beige.png", _racineWeb + "images/divers/recompenses/fleche_rejouer_rose.png", _racineWeb + "images/divers/recompenses/losange_1_1.png", _racineWeb + "images/divers/recompenses/losange_1_2.png", _racineWeb + "images/divers/recompenses/main.png", _racineWeb + "images/divers/recompenses/nous.png", _racineWeb + "images/divers/recompenses/on.png", _racineWeb + "images/divers/recompenses/part.png", _racineWeb + "images/divers/recompenses/plat.png", _racineWeb + "images/divers/recompenses/point_gris.png", _racineWeb + "images/divers/recompenses/point_noir.png", _racineWeb + "images/divers/recompenses/point.png", _racineWeb + "images/divers/recompenses/pointilles_1.png", _racineWeb + "images/divers/recompenses/pointilles_2.png", _racineWeb + "images/divers/recompenses/pointilles_3.png", _racineWeb + "images/divers/recompenses/projets.png", _racineWeb + "images/divers/recompenses/qualite.png", _racineWeb + "images/divers/recompenses/realiser.png", _racineWeb + "images/divers/recompenses/recompenses.png", _racineWeb + "images/divers/recompenses/regulierement.png", _racineWeb + "images/divers/recompenses/rejouer.png", _racineWeb + "images/divers/recompenses/rond_1.png", _racineWeb + "images/divers/recompenses/rond_2.png", _racineWeb + "images/divers/recompenses/rond_coeur.png", _racineWeb + "images/divers/recompenses/sommes.png", _racineWeb + "images/divers/recompenses/triangle.png", _racineWeb + "images/divers/recompenses/z_trait_2.png"],
                conception: [_racineWeb + "images/divers/expertise/expertise_conception_carnet.png", _racineWeb + "images/divers/expertise/expertise_conception_feuille_1.png", _racineWeb + "images/divers/expertise/expertise_conception_feuille_2.png", _racineWeb + "images/divers/expertise/expertise_conception_feuille_3.png", _racineWeb + "images/divers/expertise/expertise_conception_feuille_sol.png"],
                creation: [_racineWeb + "images/divers/expertise/expertise_creation_akaru.png", _racineWeb + "images/divers/expertise/expertise_creation_cercle_1.png", _racineWeb + "images/divers/expertise/expertise_creation_cercle_2.png", _racineWeb + "images/divers/expertise/expertise_creation_fleche_1.png", _racineWeb + "images/divers/expertise/expertise_creation_fleche_2.png", _racineWeb + "images/divers/expertise/expertise_creation_fleche_3.png", _racineWeb + "images/divers/expertise/expertise_creation_lueur.png", _racineWeb + "images/divers/expertise/expertise_creation_mini_k.png"],
                developpement: [_racineWeb + "images/divers/expertise/expertise_developpement_akaru_k.png", _racineWeb + "images/divers/expertise/expertise_developpement_lueur.png"],
                emarketing: [_racineWeb + "images/divers/expertise/expertise_emarketing_lampe_clair.png", _racineWeb + "images/divers/expertise/expertise_emarketing_lampe_sombre.png"],
                services: [_racineWeb + "images/divers/expertise/expertise_services_akaru_k.png", _racineWeb + "images/divers/expertise/expertise_services_lueur.png", _racineWeb + "images/divers/expertise/expertise_services_nuage_1.png", _racineWeb + "images/divers/expertise/expertise_services_nuage_2.png"],
                contact: [_racineWeb + "images/bgs/contact.png", _racineWeb + "images/btns/google_maps_moins.png", _racineWeb + "images/btns/google_maps_plus.png", _racineWeb + "images/btns/google_maps_fermer_infobulle.png", _racineWeb + "images/btns/google_maps_rotation_carte.png", _racineWeb + "images/divers/google_maps_fleche_infobulle.png", _racineWeb + "images/logos/akaru_google_maps.png", _racineWeb + "images/logos/akaru_mini_google_maps_ombre.png", _racineWeb + "images/logos/akaru_mini_google_maps.png"],
                projet: [_racineWeb + "images/btns/calendrier.png", _racineWeb + "images/btns/processus/processus_puce_p_inactif.png", _racineWeb + "images/btns/processus/processus_puce_p1.png", _racineWeb + "images/jquery-custom/animated-overlay.gif", _racineWeb + "images/jquery-custom/ui-bg_flat_0_ffffff_40x100.png", _racineWeb + "images/jquery-custom/ui-bg_flat_100_202020_40x100.png", _racineWeb + "images/jquery-custom/ui-bg_flat_100_e3d8ca_40x100.png", _racineWeb + "images/jquery-custom/ui-bg_flat_100_f1ebe5_40x100.png", _racineWeb + "images/jquery-custom/ui-bg_flat_100_f91d65_40x100.png", _racineWeb + "images/jquery-custom/ui-bg_flat_100_ffffff_40x100.png", _racineWeb + "images/jquery-custom/ui-icons_202020_256x240.png", _racineWeb + "images/jquery-custom/ui-icons_f91d65_256x240.png", _racineWeb + "images/jquery-custom/ui-icons_ffffff_256x240.png"]
            }
        },
        loaderImg: function(a, b, c) {
            for (var d = this, e = null !== a ? d.tabImgsACharger[a] : b, f = e.length, g = 0, h = 0; f > h; h++) $("<img/>").load(function() {
                g++, f == g && ("global" == a ? y.finirPreloadInit() : c())
            }).attr("src", e[h])
        }
    }, y.adresse = {
        init: !0,
        state: void 0 !== window.history.pushState,
        adrState: _racineWeb.substr(0, _racineWeb.length - 1),
        premierChargement: !0,
        urlActive: null,
        nomPage: null,
        nomSousPage: null,
        nomPartie: null,
        nomSousPartie: null,
        nomPagePrec: null,
        nomSousPagePrec: null,
        textes: {
            fr: {
                erreur: "Une erreur s'est produite. Merci de recharcher la page."
            },
            en: {
                erreur: "An error occured. Please try to reload the page."
            }
        },
        init: function() {
            var a = this;
            return Modernizr.history ? void $.address.state(a.adrState).change(function(b) {
                if (a.nomPagePrec = a.nomPage, a.nomSousPagePrec = a.nomSousPage, a.nomPage = b.pathNames[1], a.nomSousPage = b.pathNames[2], a.nomPartie = b.pathNames[3], a.nomSousPartie = b.pathNames[4], void 0 === a.nomPagePrec && void 0 === a.nomPage && "accueil" == y.idPage) return !1;
                if (a.majMenu(), a.state && a.init) a.init = !1, y.touch ? c.find("li.sousMenu ul a, li.simple > a").address() : c.find("a").address(), y.finirPreloadInit();
                else {
                    if (y.transitionPage) return !1;
                    y.transitionPage = !0, a.urlActive = $.address.path(), y.touch && c.find('li.sousMenu > a[data-ouvert="true"]').trigger("click"), y.desurvolMenu(c.find("> ul > li.actif")), y.telephone.telOuvert && (y.telephone.telOuvert = !1, j.find("a.ouvrir").trigger("mouseleave")), y.telephone.qrOuvert && j.find(".fermer a").trigger("click");
                    var d = a.nomPage;
                    d || (d = "accueil"), a.nomSousPage && "filtre" != a.nomSousPage && "reference" != a.nomPage && "formulaire" != a.nomSousPage && (d = a.nomPage + "-" + a.nomSousPage);
                    var g = "reference" == a.nomPage ? a.adrState + "/pages-contenu-site/" + d + "/" + a.nomSousPage + "/" + a.nomPartie + "/" + _lg + "/" : a.adrState + "/pages-contenu-site/" + d + "/" + _lg + "/";
                    if (a.majLangue(), a.majTitrePage(), "poles" == a.nomSousPagePrec && "poles" == a.nomSousPage) A.poles.gererAffichagePole(), a.majMenu();
                    else if ("processus" == a.nomSousPagePrec && "processus" == a.nomSousPage) A.processus.changerEtape(), a.majMenu();
                    else if ("references" == a.nomPage && "references" == a.nomPagePrec) B.toutes.filtrerRefs("changement");
                    else if ("contact" == a.nomPage && "contact" == a.nomPagePrec && "votre-projet" != a.nomSousPage && "votre-projet" != a.nomSousPagePrec) D.afficherMasquerForm("formulaire" == a.nomSousPage ? "afficher" : "masquer");
                    else {
                        var h = v / 20;
                        y.loaderAffiche = !0, y.animerLoader(), f[0].style.display = "block", TweenLite.to(f.find(".fond"), .5, {
                            opacity: .7,
                            ease: Cubic.easeOut
                        }), TweenLite.to(f.find(".akaru"), .5, {
                            scale: 1,
                            opacity: 1,
                            ease: Cubic.easeOut
                        }), TweenLite.to(e, .5, {
                            opacity: 0,
                            scale: .8,
                            borderWidth: h,
                            margin: -h + "px 0 0 " + -h + "px",
                            ease: Cubic.easeOut,
                            onComplete: function() {
                                $.ajax({
                                    url: g,
                                    type: "POST",
                                    data: {
                                        Page: g
                                    },
                                    dataType: "html",
                                    success: function(a) {
                                        e[0].style.top = "-100%", e[0].innerHTML = a, y.initPage($(".partie")[0].id)
                                    },
                                    error: function() {
                                        alert(a.textes[_lg].erreur), y.autoriserTransPage()
                                    }
                                })
                            }
                        })
                    }
                }
            }) : (y.finirPreloadInit(), !1)
        },
        majMenu: function() {
            var a = this,
                b = c.find('> ul > li > a[href*="' + a.nomPage + '"]').parent("li"),
                d = c.find("> ul > li.actif");
            b.index() != d.index() && (b.addClass("actif"), d.removeClass("actif"), y.survolMenu(b, "activé"), d.length > 0 && y.desurvolMenu(d));
            var e = c.find('> ul > li > ul > li > a[href*="' + a.nomPage + "/" + a.nomSousPage + '"]'),
                f = c.find("> ul > li > ul > li > a.actif");
            e.addClass("actif"), f.removeClass("actif"), y.survolSousMenu(e), f.length > 0 && y.desurvolSousMenu(f)
        },
        majTitrePage: function() {
            var a = this,
                b = a.nomPage,
                c = a.nomSousPage,
                d = a.nomPartie,
                e = a.nomSousPartie;
            b || (b = "accueil");
            var f = y.infosPages[b].titre;
            if (("agence" == b || "expertise" == b || "contact" == b && c) && (f = y.infosPages[b][c].titre, "poles" == c && d && (f = y.infosPages[b][c].parties[d].titre), "processus" == c && (f = y.infosPages[b][c].parties[d].sousParties[e].titre)), "reference" == b) {
                for (var g = y.refs[c + "/" + d], h = 0, i = "", j = 0; j < g.supports.length; j++) i += 0 === h ? g.supports[j].nom : ", " + g.supports[j].nom, h++;
                for (j = 0; j < g.services.length; j++) i += 0 === h ? g.services[$i].nom : ", " + g.services[j].nom, h++;
                f = g.nom + " : " + i + " - Akaru"
            }
            $.address.title(f)
        },
        majLangue: function() {
            if ("/" == $.address.path() || "/en/" == $.address.path()) y.$langue.find("a.fr")[0].href = _racineWeb, y.$langue.find("a.en")[0].href = _racineWeb + "en/";
            else {
                var a = "fr" == _lg ? $.address.path().replace("/fr/", "") : $.address.path().replace("/en/", "");
                y.$langue.find("a.fr")[0].href = _racineWeb + "fr/" + a, y.$langue.find("a.en")[0].href = _racineWeb + "en/" + a
            }
        },
        verifUrlPage: function() {
            var a = this;
            a.premierChargement ? a.premierChargement = !1 : a.urlActive != $.address.path() && $.address.update()
        }
    }, y.telephone = {
        socket: null,
        roomID: null,
        connecteExp: !1,
        roomURL: null,
        telOuvert: null,
        qrOuvert: null,
        qrGenere: !1,
        transQrCode: !1,
        init: function() {
            var a = this;
            a.telOuvert = !0, a.qrOuvert = !1, j.find("a.ouvrir").on("mouseenter", function() {
                TweenLite.to($(this).find("> img"), .5, {
                    left: 54,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol .triangle"), .5, {
                    left: -71,
                    top: -71,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol .telephone"), .8, {
                    top: -185,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol .texte"), 1, {
                    left: -290,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find("> img"), .5, {
                    left: 18,
                    ease: Expo.easeOut,
                    delay: .2
                }), TweenLite.to($(this).find(".survol .triangle"), .4, {
                    left: -21,
                    top: -21,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol .telephone"), .4, {
                    top: 0,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol .texte"), .4, {
                    left: 56,
                    ease: Expo.easeOut
                })
            }).on("click", function() {
                return a.transQrCode ? !1 : (a.transQrCode = !0, $(this).trigger("mouseleave"), TweenLite.to($(this).next(".fermer"), .5, {
                    left: -17,
                    top: -17,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".triangle"), .5, {
                    left: -528,
                    top: -528,
                    ease: Expo.easeOut,
                    delay: .4
                }), Modernizr.history ? (a.qrGenere || (a.qrGenere = !0, a.connexion()), TweenLite.to(i.find(".flashez"), .5, {
                    left: -293,
                    ease: Back.easeOut,
                    delay: .5
                }), TweenLite.to(i.find(".qrCode"), .5, {
                    top: -375,
                    ease: Expo.easeOut,
                    delay: .7
                }), TweenLite.to(i.find(".main"), .5, {
                    top: -316,
                    ease: Back.easeOut,
                    delay: 1
                }), TweenLite.to(i.find(".prenez"), .5, {
                    left: -360,
                    ease: Expo.easeOut,
                    delay: 1.3
                }), TweenLite.to(i.find(".visitez"), .5, {
                    left: -425,
                    ease: Expo.easeOut,
                    delay: 1.5
                }), TweenLite.to(i.find(".wifi"), .5, {
                    top: -90,
                    ease: Expo.easeOut,
                    delay: 1.7,
                    onComplete: function() {
                        a.qrOuvert = !0, a.transQrCode = !1
                    }
                })) : TweenLite.to(i.find(".vieux"), .5, {
                    left: -400,
                    ease: Expo.easeOut,
                    delay: .7,
                    onComplete: function() {
                        a.qrOuvert = !0, a.transQrCode = !1
                    }
                }), !1)
            }), j.find(".fermer a").on("mouseenter", function() {
                TweenLite.to($(this).find(".losange"), .5, {
                    rotation: -90,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 90,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find(".losange"), .5, {
                    rotation: 0,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 0,
                    ease: Expo.easeOut
                })
            }).on("click", function() {
                return a.transQrCode ? !1 : (a.transQrCode = !0, a.qrOuvert = !1, TweenLite.to($(this).parent(".fermer"), .3, {
                    left: 33,
                    top: 33,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".triangle"), .4, {
                    left: -155,
                    top: -155,
                    ease: Expo.easeOut,
                    delay: .2,
                    onComplete: function() {
                        a.transQrCode = !1
                    }
                }), Modernizr.history ? (TweenLite.to(i.find(".wifi"), .5, {
                    top: 0,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".visitez"), .3, {
                    left: 10,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".prenez"), .3, {
                    left: 10,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".main"), .3, {
                    top: 0,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".qrCode"), .3, {
                    top: 0,
                    ease: Expo.easeOut
                }), TweenLite.to(i.find(".flashez"), .3, {
                    left: 10,
                    ease: Expo.easeOut
                })) : TweenLite.to(i.find(".vieux"), .5, {
                    left: 10,
                    ease: Expo.easeOut
                }), !1)
            }), g.find("a.fermerPetit, a.btnCube").on("click", function() {
                return $(this).trigger("mouseleave"), a.fermerBoxDeconnexion(), "btnCube" == this.className && j.find("a.ouvrir").trigger("click"), !1
            }), b.on("mouseenter", ".partage a", function() {
                Modernizr.csstransforms3d ? (TweenLite.to($(this).find(".normal"), .3, {
                    rotationX: -90,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    rotationX: 0,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".survol"), .3, {
                    top: -36,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", ".partage a", function() {
                Modernizr.csstransforms3d ? (TweenLite.to($(this).find(".normal"), .3, {
                    rotationX: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    rotationX: 90,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".survol"), .3, {
                    top: 0,
                    ease: Quart.easeOut
                })
            })
        },
        connexion: function() {
            var a = this;
            a.socket = io.connect(x), a.socket.on("connect", function() {
                a.connecteExp = !0, a.socket.emit("generer string")
            }), a.socket.on("generation room", function(b, c) {
                a.roomID = c, a.roomURL = w + _lg + "/exp/" + a.roomID + "/", i.find(".visitez .code")[0].innerHTML = a.roomID;
                new QRCode(i.find(".qrCode")[0], {
                    text: a.roomURL,
                    width: 140,
                    height: 140
                });
                a.socket.emit("nouvelle room", {
                    room: a.roomID
                })
            }), a.socket.on("ajout utilisateur mobile", function() {
                var b = "fr" == _lg ? $.address.path().replace("/fr/", "") : $.address.path().replace("/en/", "");
                "fr" == _lg && "accueil" == y.idPage && (b = ""), a.socket.emit("emission desktop", {
                    room: a.roomID,
                    action: "pageDebut",
                    page: b
                })
            }), a.socket.on("changement page desktop", function(b, c) {
                "lancement" == c.page ? a.activerModeExp() : $.address.value("fr" == _lg && "" === c.page ? c.page : _lg + "/" + c.page)
            }), a.socket.on("recup desktop", function(a, b) {
                "slideshow" == b.page ? "recupInfos" == b.action ? y.slideshow.recupererInfos() : "flecheGauche" == b.action ? $(document.getElementById("navSlideshow")).find("a.gauche").trigger("click") : "flecheDroite" == b.action && $(document.getElementById("navSlideshow")).find("a.droite").trigger("click") : "clients" == b.page ? "deplacerLogos" == b.action && A.clients.deplacerLogosTel(b.direction) : "recompenses" == b.page ? "recupEtatAnim" == b.action ? A.recompenses.recupererEtatAnim() : "deplacerToile" == b.action ? A.recompenses.deplacerToile(b.direction) : "rejouer" == b.action && A.recompenses.rejouerAnim() : "reference" == b.page && ("recupEtatInfos" == b.action ? B.seule.recupererEtatInfos() : "ouvrirInfos" == b.action ? B.seule.$infos.find(".plus a.btnInfos").trigger("click") : "fermerInfos" == b.action && B.seule.$infos.find(".plus a.fermer").trigger("click"))
            }), a.socket.on("suppression utilisateur mobile", function(b, c) {
                a.desactiverModeExp(c.deco)
            })
        },
        activerModeExp: function() {
            var a = this;
            "referencesToutes" == y.idPage && (B.toutes.filtresOuvert && B.toutes.fermerListeFiltres(), B.toutes.$refs.trigger("mouseleave")), y.modeExp = !0, d[0].className = "modeExp", j.find(".fermer a").trigger("click"), y.resize(), TweenLite.to(h, .5, {
                bottom: -54,
                ease: Expo.easeOut
            }), TweenLite.to(e, .5, {
                height: v,
                ease: Expo.easeOut
            }), a.fermerBoxDeconnexion(), "agenceRecompenses" == y.idPage && A.recompenses.desactiverDeplacement()
        },
        desactiverModeExp: function(a) {
            y.modeExp = !1, d[0].className = "", y.resize(), TweenLite.to(h, .5, {
                bottom: 0,
                ease: Expo.easeOut
            }), TweenLite.to(e, .5, {
                height: v,
                ease: Expo.easeOut
            }), "null" == a ? (g.find(".texte1")[0].style.display = "block", g.find(".texte2")[0].style.display = "none") : (g.find(".texte2")[0].style.display = "block", g.find(".texte1")[0].style.display = "none"), TweenLite.to(g.find(".box"), 0, {
                opacity: 1,
                scale: 1,
                ease: Cubic.easeOut
            }), g.find(".fond").css("opacity", .5), TweenLite.from(g.find(".box"), .3, {
                opacity: 0,
                scale: .5,
                ease: Cubic.easeOut
            }), TweenLite.from(g.find(".fond"), .3, {
                opacity: 0,
                ease: Cubic.easeOut
            }), g[0].style.display = "block", "agenceRecompenses" == y.idPage && A.recompenses.finAnim && A.recompenses.activerDeplacement()
        },
        fermerBoxDeconnexion: function() {
            TweenLite.to(g.find(".box"), .3, {
                opacity: 0,
                scale: 1.5,
                ease: Cubic.easeOut
            }), TweenLite.to(g.find(".fond"), .3, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: function() {
                    g[0].style.display = "none"
                }
            })
        }
    }, y.slideshow = {
        $conteneurSlideshow: null,
        nbSlides: 0,
        idSlideActif: null,
        ratioImg: 2e3 / 1080,
        transSlide: null,
        type: null,
        init: function(a) {
            var c = this;
            c.$conteneurSlideshow = $(document.getElementById("conteneurSlideshow")), c.transSlide = !1, c.type = a, c.nbSlides = c.$conteneurSlideshow.find(".slides .slide").length, c.idSlideActif = 1, $(document.getElementById("navSlideshow")).find("a").on("mouseenter", function() {
                var a = this.className;
                "gauche" == a && (TweenLite.to($(this).find(".fleches"), .5, {
                    left: "-100%",
                    ease: Expo.easeOut
                }), TweenMax.to($(this).find(".survol"), .3, {
                    left: -5,
                    ease: Quart.easeIn,
                    yoyo: !0,
                    repeat: -1
                })), "droite" == a && (TweenLite.to($(this).find(".fleches"), .5, {
                    left: "0%",
                    ease: Expo.easeOut
                }), TweenMax.to($(this).find(".survol"), .3, {
                    left: 5,
                    ease: Quart.easeIn,
                    yoyo: !0,
                    repeat: -1
                })), "fermer" == a && (TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 90,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: n,
                    ease: Quart.easeOut
                }))
            }).on("mouseleave", function() {
                var a = this.className;
                "gauche" == a && (TweenLite.to($(this).find(".fleches"), .5, {
                    left: "0%",
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    left: 0,
                    ease: Quart.easeOut
                })), "droite" == a && (TweenLite.to($(this).find(".fleches"), .5, {
                    left: "-100%",
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    left: 0,
                    ease: Quart.easeOut
                })), "fermer" == a && (TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 0,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: k,
                    ease: Quart.easeOut
                }))
            }).on("click", function() {
                if (c.transSlide) return !1;
                c.transSlide = !0;
                var a = c.idSlideActif;
                return "gauche" == this.className ? c.idSlideActif = c.idSlideActif - 1 === 0 ? c.nbSlides : c.idSlideActif - 1 : "droite" == this.className && (c.idSlideActif = c.idSlideActif + 1 > c.nbSlides ? 1 : c.idSlideActif + 1), "fermer" != this.className && c.afficherSlide(a), "gauche" == this.className || "droite" == this.className ? !1 : void 0
            }), b.off("keydown"), b.on("keydown", function(a) {
                var c = $(document.getElementById("navSlideshow"));
                return 0 === c.length || "fermerFiltres" == c[0].className || y.modeExp ? (b.off("keydown"), !1) : void(39 == a.keyCode ? c.find("a.droite").trigger("click") : 37 == a.keyCode ? c.find("a.gauche").trigger("click") : 73 == a.keyCode && !B.seule.infosOuvert && $(document.getElementById("infos")).length > 0 ? B.seule.ouvrirInfos() : 27 == a.keyCode && B.seule.infosOuvert && $(document.getElementById("infos")).length > 0 && B.seule.fermerInfos())
            }), c.$conteneurSlideshow.find(".compteur .total")[0].innerHTML = "/" + c.nbSlides;
            for (var d = 0; d < c.nbSlides; d++) c.$conteneurSlideshow.find(".compteur .numSlides")[0].innerHTML += "<span>" + (d + 1) + "</span>";
            for (var e = c.$conteneurSlideshow.find(".slide .photo img"), f = [], d = 0; d < e.length; d++) f.push(e[d].src);
            if ("simple" == c.type) {
                for (var g = B.seule.$slidesProjets.find("img"), d = 0; d < g.length; d++) f.push(g[d].src);
                for (var h = B.seule.$infos.find(".awards img"), d = 0; d < h.length; d++) f.push(h[d].src)
            }
            y.preload.loaderImg(null, f, function() {
                y.resize(), c.afficherSlide(null), y.masquerLoader()
            })
        },
        redimPhotos: function(a) {
            var b = this,
                c = t / v;
            if (c >= b.ratioImg) {
                var d = -(t / b.ratioImg - v) / 2;
                a.style.cssText = "width:" + t + "px; height:auto; margin-left:0px; margin-top:" + d + "px;"
            } else {
                var e = -(v * b.ratioImg - t) / 2;
                a.style.cssText = "width:auto; height:" + v + "px; margin-left:" + e + "px; margin-top:0px"
            }
        },
        afficherSlide: function(a) {
            var b = this,
                c = b.$conteneurSlideshow.find(".slides .slide:nth-child(" + b.idSlideActif + ")"),
                d = b.$conteneurSlideshow.find(".compteur .numSlides span:nth-child(" + b.idSlideActif + ")");
            if (a) {
                var e = b.$conteneurSlideshow.find(".slides .slide:nth-child(" + a + ")"),
                    f = b.$conteneurSlideshow.find(".compteur .numSlides span:nth-child(" + a + ")");
                TweenLite.to(f, .3, {
                    left: -18,
                    top: 35,
                    ease: Quad.easeIn
                })
            }
            d[0].style.left = "18px", d[0].style.top = "-35px", TweenLite.to(d, .3, {
                left: 0,
                top: 0,
                ease: Quart.easeOut
            }), c[0].style.zIndex = 3, "complet" == b.type ? 1 == b.idSlideActif ? (z.expActive = !0, z.animerExp(), TweenLite.to(c, .5, {
                width: "100%",
                ease: Quart.easeIn,
                onComplete: function() {
                    e && (e[0].style.zIndex = 1, e.find(".photo")[0].style.width = "0%", e.find(".bandeContenu")[0].style.height = "0px", e.find(".bandeContenu")[0].style.marginTop = "153px", e.find(".conteneur")[0].style.marginTop = "-153px"), c[0].style.zIndex = 2, b.transSlide = !1, y.modeExp && y.telephone.socket.emit("emission desktop", {
                        room: y.telephone.roomID,
                        page: "slideshow",
                        action: "finTransSlide"
                    })
                }
            })) : (TweenLite.to(c.find(".photo"), .5, {
                width: "100%",
                ease: Quart.easeIn
            }), TweenLite.to(c.find(".bandeContenu"), .5, {
                height: 307,
                marginTop: 0,
                ease: Quart.easeOut,
                delay: .5
            }), TweenLite.to(c.find(".conteneur"), .5, {
                marginTop: 0,
                ease: Quart.easeOut,
                delay: .5,
                onComplete: function() {
                    e[0].style.zIndex = 1, -1 == e[0].className.indexOf("slideExp") ? (e.find(".photo")[0].style.width = "0%", e.find(".bandeContenu")[0].style.height = "0px", e.find(".bandeContenu")[0].style.marginTop = "153px", e.find(".conteneur")[0].style.marginTop = "-153px") : ("accueil" == y.idPage && z.initExp(), e[0].style.width = "0%"), c[0].style.zIndex = 2, b.transSlide = !1, y.modeExp && y.telephone.socket.emit("emission desktop", {
                        room: y.telephone.roomID,
                        page: "slideshow",
                        action: "finTransSlide"
                    })
                }
            })) : (B.seule.fermerInfos(), TweenLite.to(c.find(".photo"), .5, {
                width: "100%",
                ease: Quart.easeIn,
                onComplete: function() {
                    e && (e[0].style.zIndex = 1, e.find(".photo")[0].style.width = "0%"), c[0].style.zIndex = 2, b.transSlide = !1, y.modeExp && y.telephone.socket.emit("emission desktop", {
                        room: y.telephone.roomID,
                        page: "slideshow",
                        action: "finTransSlide"
                    })
                }
            }))
        },
        recupererInfos: function() {
            var a = this;
            y.telephone.socket.emit("emission desktop", {
                room: y.telephone.roomID,
                page: "slideshow",
                action: "recupInfos",
                nbSlides: a.nbSlides,
                idSlideActif: a.idSlideActif
            })
        },
        resize: function() {
            for (var a = this, b = a.$conteneurSlideshow.find(".slide .photo img, #slidesProjets img"), c = 0; c < b.length; c++) a.redimPhotos(b[c]);
            for (var d = a.$conteneurSlideshow.find(".slide .bandeContenu"), c = 0; c < d.length; c++) d[c].style.top = (v - 307) / 2 + (v - 307) / 4 + "px"
        }
    };
    var z = {
        $slideExp: null,
        $expAccueil: null,
        $texte: null,
        expActive: !1,
        idIconeActif: null,
        init: function() {
            var a = this;
            a.$slideExp = $(".slideExp"), a.$expAccueil = $(document.getElementById("expAccueil")), a.$texte = a.$expAccueil.find(".texte"), a.idIconeActif = 1, y.preload.loaderImg("accueil", null, function() {
                y.slideshow.init("complet")
            })
        },
        animerExp: function() {
            var a = this;
            a.$slideExp.on("mousemove", function(b) {
                a.changerTete(b)
            }), a.foudroyerEclair(), a.genererGoutte(), TweenMax.fromTo(a.$expAccueil.find(".nuage1"), 1, {
                top: 31
            }, {
                top: 21,
                ease: Quad.easeInOut,
                yoyo: !0,
                repeat: -1
            }), TweenMax.fromTo(a.$expAccueil.find(".nuage2"), 1, {
                top: 157
            }, {
                top: 147,
                ease: Quad.easeInOut,
                yoyo: !0,
                repeat: -1,
                delay: .3
            }), TweenMax.fromTo(a.$expAccueil.find(".nuage3"), 1, {
                top: 47
            }, {
                top: 37,
                ease: Quad.easeInOut,
                yoyo: !0,
                repeat: -1,
                delay: .6
            });
            var b = new TimelineLite;
            b.fromTo(a.$expAccueil.find(".montagne1"), .5, {
                top: 303,
                opacity: 0,
                scaleX: 0,
                rotation: -15
            }, {
                top: 103,
                opacity: 1,
                scaleX: 1,
                rotation: 0,
                ease: Back.easeOut
            }, "+=1").fromTo(a.$expAccueil.find(".montagne3"), .5, {
                top: 330,
                opacity: 0,
                scaleX: 0,
                rotation: 15
            }, {
                top: 130,
                opacity: 1,
                scaleX: 1,
                rotation: 0,
                ease: Back.easeOut
            }, "-=0.3").fromTo(a.$expAccueil.find(".montagne2"), .5, {
                top: 123,
                opacity: 0,
                scaleX: 0,
                rotation: 25
            }, {
                top: -77,
                opacity: 1,
                scaleX: 1,
                rotation: 0,
                ease: Back.easeOut
            }, "-=0.3").fromTo(a.$expAccueil.find(".losange"), .5, {
                scale: 0
            }, {
                scale: 1,
                ease: Back.easeOut
            }, "-=0.1").fromTo(a.$expAccueil.find(".akaru"), .5, {
                top: -200,
                opacity: 0
            }, {
                top: 0,
                opacity: 1,
                ease: Back.easeOut
            }, "-=0.3").fromTo(a.$expAccueil.find(".ombre1"), 1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=1").fromTo(a.$expAccueil.find(".ombre2"), 1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=0.5").fromTo(a.$expAccueil.find(".montagne4"), .5, {
                top: 551,
                scaleX: 0,
                rotation: -15,
                opacity: 0
            }, {
                top: 351,
                scaleX: 1,
                rotation: 0,
                opacity: 1,
                ease: Back.easeOut
            }, "-=0.8").fromTo(a.$expAccueil.find(".montagne6"), .5, {
                top: 531,
                scaleX: 0,
                rotation: 15,
                opacity: 0
            }, {
                top: 331,
                scaleX: 1,
                rotation: 0,
                opacity: 1,
                ease: Back.easeOut
            }, "-=0.6").fromTo(a.$expAccueil.find(".montagne5"), .5, {
                top: 497,
                scaleX: 0,
                rotation: 15,
                opacity: 0
            }, {
                top: 297,
                scaleX: 1,
                rotation: 0,
                opacity: 1,
                ease: Back.easeOut
            }, "-=0.4").fromTo(a.$expAccueil.find(".ombreMontagnes"), .5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=0.6").fromTo(a.$expAccueil.find(".branche"), .5, {
                width: 0
            }, {
                width: 203,
                ease: Back.easeOut
            }, "-=0.3").fromTo(a.$expAccueil.find(".ombreBranche"), .5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=0.5").fromTo(a.$expAccueil.find(".corps"), .3, {
                left: 688,
                top: 211,
                opacity: 0,
                rotation: 15
            }, {
                left: 668,
                top: 231,
                opacity: 1,
                rotation: 0,
                ease: Quad.easeOut
            }).fromTo(a.$expAccueil.find(".tete"), .3, {
                left: 640,
                top: 151,
                opacity: 0,
                rotation: 15
            }, {
                left: 620,
                top: 171,
                opacity: 1,
                rotation: 0,
                ease: Quad.easeOut
            }, "-=0.3").fromTo(a.$expAccueil.find(".bulle"), .3, {
                scale: 0
            }, {
                scale: 1,
                ease: Back.easeOut
            }, "-=0.1").fromTo(a.$texte.find("h2"), .5, {
                top: 200,
                opacity: 0
            }, {
                top: 0,
                opacity: 1,
                ease: Expo.easeOut
            }, "-=0.5").fromTo(a.$texte.find("h2 span"), .5, {
                top: 200,
                opacity: 0
            }, {
                top: 0,
                opacity: 1,
                ease: Expo.easeOut
            }, "-=0.4").fromTo(a.$texte.find("h3"), .5, {
                top: 200,
                opacity: 0
            }, {
                top: 0,
                opacity: 1,
                ease: Expo.easeOut
            }, "-=0.4").fromTo(a.$texte.find("a"), .5, {
                top: 200,
                opacity: 0
            }, {
                top: 0,
                opacity: 1,
                ease: Expo.easeOut
            }, "-=0.4").fromTo(a.$expAccueil.find(".plume1"), 1.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=1.5").fromTo(a.$expAccueil.find(".plume3"), 1.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=1").fromTo(a.$expAccueil.find(".plume2"), 1.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Quad.easeOut
            }, "-=1");
            var c = new TimelineLite;
            c.fromTo(a.$expAccueil.find(".plume4"), 1.5, {
                right: 232,
                top: 295,
                rotation: -10,
                opacity: 0
            }, {
                bezier: {
                    type: "cubic",
                    values: [{
                        right: 232,
                        top: 295,
                        rotation: -10,
                        opacity: 0
                    }, {
                        right: 302,
                        top: 345,
                        rotation: 0,
                        opacity: .4
                    }, {
                        right: 332,
                        top: 340,
                        rotation: 5,
                        opacity: 1
                    }, {
                        right: 372,
                        top: 335,
                        rotation: 10,
                        opacity: 1
                    }]
                },
                ease: Quad.easeInOut,
                delay: 3.5
            }), c.to(a.$expAccueil.find(".plume4"), 1.5, {
                bezier: {
                    type: "cubic",
                    values: [{
                        right: 372,
                        top: 335,
                        rotation: 10
                    }, {
                        right: 322,
                        top: 375,
                        rotation: 0
                    }, {
                        right: 282,
                        top: 370,
                        rotation: -5
                    }, {
                        right: 272,
                        top: 365,
                        rotation: -10
                    }]
                },
                ease: Quad.easeInOut
            }), c.to(a.$expAccueil.find(".plume4"), 1.5, {
                bezier: {
                    type: "cubic",
                    values: [{
                        right: 272,
                        top: 365,
                        rotation: -10
                    }, {
                        right: 300,
                        top: 380,
                        rotation: -5
                    }, {
                        right: 307,
                        top: 385,
                        rotation: -2
                    }, {
                        right: 312,
                        top: 385,
                        rotation: 0
                    }]
                },
                ease: Quad.easeInOut
            });
            var d = new TimelineLite;
            d.fromTo(a.$expAccueil.find(".plume5"), 1.5, {
                right: 350,
                top: 284,
                rotation: 10,
                opacity: 0
            }, {
                bezier: {
                    type: "cubic",
                    values: [{
                        right: 350,
                        top: 284,
                        rotation: 10,
                        opacity: 0
                    }, {
                        right: 280,
                        top: 334,
                        rotation: 0,
                        opacity: .4
                    }, {
                        right: 250,
                        top: 329,
                        rotation: -5,
                        opacity: 1
                    }, {
                        right: 210,
                        top: 324,
                        rotation: -10,
                        opacity: 1
                    }]
                },
                ease: Quad.easeInOut,
                delay: 5.8
            }), d.to(a.$expAccueil.find(".plume5"), 1.5, {
                bezier: {
                    type: "cubic",
                    values: [{
                        right: 210,
                        top: 324,
                        rotation: -10
                    }, {
                        right: 260,
                        top: 364,
                        rotation: 0
                    }, {
                        right: 300,
                        top: 359,
                        rotation: 5
                    }, {
                        right: 310,
                        top: 354,
                        rotation: 10
                    }]
                },
                ease: Quad.easeInOut
            }), d.to(a.$expAccueil.find(".plume5"), 1.5, {
                bezier: {
                    type: "cubic",
                    values: [{
                        right: 310,
                        top: 354,
                        rotation: 10
                    }, {
                        right: 280,
                        top: 369,
                        rotation: 5
                    }, {
                        right: 275,
                        top: 374,
                        rotation: 2
                    }, {
                        right: 270,
                        top: 374,
                        rotation: 0
                    }]
                },
                ease: Quad.easeInOut
            })
        },
        initExp: function() {
            var a = this;
            a.expActive = !1, TweenMax.killChildTweensOf(a.$expAccueil[0]), a.$expAccueil.find(".goutte").remove()
        },
        foudroyerEclair: function() {
            var a = this;
            if ("accueil" != y.idPage || !a.expActive) return !1;
            var b = a.$expAccueil.find(".eclair");
            TweenLite.fromTo(b, .5, {
                left: -84,
                top: 100,
                opacity: 1
            }, {
                left: -94,
                top: 130,
                opacity: 0,
                ease: Expo.easeOut
            }), TweenLite.fromTo(b, .5, {
                left: -84,
                top: 100,
                opacity: 1
            }, {
                left: -94,
                top: 130,
                opacity: 0,
                ease: Expo.easeOut,
                delay: .6
            }), TweenLite.fromTo(b, .5, {
                left: -84,
                top: 100,
                opacity: 1
            }, {
                left: -94,
                top: 130,
                opacity: 0,
                ease: Expo.easeOut,
                delay: 1,
                onComplete: function() {
                    var b = 1e3 + Math.round(3e3 * Math.random());
                    setTimeout(function() {
                        a.foudroyerEclair()
                    }, b)
                }
            })
        },
        genererGoutte: function() {
            var a = this;
            if ("accueil" != y.idPage || !a.expActive) return !1;
            var b = (Math.round(1 * Math.random()) + 1, Math.floor(222 * Math.random()) + 50),
                c = (Math.floor(171 * b / 272), v / 800),
                d = $("<img>");
            d[0].className = "goutte";
            var e = 1 + parseInt(4 * Math.random());
            d[0].src = _racineWeb + "images/divers/accueil/goutte_" + e + ".png", a.$expAccueil.append(d);
            var f = (v - 540) / 2;
            d[0].style.top = -f - 50 + "px", d[0].style.left = 100 * Math.random() + "%", TweenLite.to(d, c, {
                top: v,
                ease: Linear.easeIn,
                onComplete: function() {
                    d.remove()
                }
            });
            var g = Math.round(1e3 * Math.random()) + Math.round(v / 400 * 200);
            setTimeout(function() {
                a.genererGoutte()
            }, g)
        },
        changerTete: function(a) {
            var b = this,
                c = t / 5,
                d = v / 3,
                e = parseInt(a.pageX / c) + 1,
                f = parseInt(a.pageY / d) + 1;
            b.$expAccueil.find(".tete img")[0].src = _racineWeb + "images/divers/accueil/tete_" + f + "_" + e + ".png"
        },
        changerIconeBulle: function(a) {
            var b = this,
                c = a[0].getAttribute("data-icone"),
                d = b.$expAccueil.find(".bulle img:nth-child(" + c + ")"),
                e = b.$expAccueil.find(".bulle img:nth-child(" + b.idIconeActif + ")");
            return c == b.idIconeActif ? !1 : (TweenLite.to(d, .3, {
                top: "0%",
                ease: Expo.easeOut
            }), TweenLite.to(e, .3, {
                top: "100%",
                ease: Expo.easeOut,
                onComplete: function() {
                    e[0].style.top = "-100%"
                }
            }), void(b.idIconeActif = c))
        },
        resize: function() {
            var a = this;
            y.slideshow.resize(), a.$expAccueil[0].style.left = (t - 960) / 2 + "px", a.$texte[0].className = u >= 950 ? "texte h950" : u >= 900 ? "texte h900" : u >= 850 ? "texte h850" : u >= 800 ? "texte h800" : u >= 750 ? "texte h750" : u >= 700 ? "texte h700" : u >= 665 ? "texte h665" : u >= 630 ? "texte h630" : "texte"
        }
    }, A = {
            init: function() {
                var a = this;
                "agencePresentation" == y.idPage && a.presentation.init(), "agencePoles" == y.idPage && a.poles.init(), "agenceProcessus" == y.idPage && a.processus.init(), "agenceClients" == y.idPage && a.clients.init(), "agenceRecompenses" == y.idPage && a.recompenses.init()
            }
        };
    A.presentation = {
        init: function() {
            var a = this;
            a.resize(), y.masquerLoader()
        },
        resize: function() {
            $(".partie .contenu")[0].style.marginTop = (v - $(".partie .contenu").height()) / 2 + "px"
        }
    }, A.poles = {
        $poles: null,
        $textePoles: null,
        hautPoleMax: null,
        init: function() {
            var a = this;
            a.$poles = $(document.getElementById("poles")), a.$textePoles = $(document.getElementById("textePoles")), a.$poles.find("a").on("mouseenter", function() {
                return y.modeExp ? !1 : void a.survolBtn($(this))
            }).on("mouseleave", function() {
                return this.className.indexOf("actif") > -1 ? !1 : void a.desurvolBtn($(this))
            }).on("click", function() {
                if (Modernizr.history) {
                    if (y.modeExp) return !1;
                    var a = this.href.substring(this.href.indexOf("/" + _lg + "/"), this.href.length);
                    return $.address.value(a), !1
                }
            });
            for (var b = a.$textePoles.find(".pole"), c = 0; c < b.length; c++) {
                var d = $(b[c]).height();
                d > a.hautPoleMax && (a.hautPoleMax = d)
            }
            if (a.$textePoles[0].style.paddingBottom = a.hautPoleMax + "px", Modernizr.history && $.address.pathNames()[3]) a.gererAffichagePole();
            else {
                var e = window.location.pathname.substring(window.location.pathname.indexOf("/poles") + 7, window.location.pathname.length);
                "" !== e && a.gererAffichagePole()
            }
            y.preload.loaderImg("poles", null, function() {
                a.resize(), y.masquerLoader()
            })
        },
        survolBtn: function(a) {
            TweenLite.to(a.find(".normal"), .5, {
                left: "-20%",
                top: "-20%",
                width: "140%",
                height: "140%",
                opacity: 0,
                ease: Quart.easeOut
            }), TweenLite.to(a.find(".survol"), .5, {
                left: "0%",
                top: "0%",
                width: "100%",
                height: "100%",
                opacity: 1,
                ease: Quart.easeOut
            }), TweenLite.to(a.find("h2"), .5, {
                color: n,
                ease: Quart.easeOut
            })
        },
        desurvolBtn: function(a) {
            TweenLite.to(a.find(".normal"), .5, {
                left: "0%",
                top: "0%",
                width: "100%",
                height: "100%",
                opacity: 1,
                ease: Quart.easeOut
            }), TweenLite.to(a.find(".survol"), .5, {
                left: "50%",
                top: "50%",
                width: "0%",
                height: "0%",
                opacity: 0,
                ease: Quart.easeOut
            }), TweenLite.to(a.find("h2"), .5, {
                color: q,
                ease: Quart.easeOut
            })
        },
        gererAffichagePole: function() {
            var a, b, c = this,
                d = null;
            if (Modernizr.history) a = $.address.pathNames()[2], b = $.address.pathNames()[3];
            else {
                var e = window.location.pathname.split("/");
                a = "" === e[e.length - 1] ? e[e.length - 3] : e[e.length - 2], b = "" === e[e.length - 1] ? e[e.length - 2] : e[e.length - 1]
            }
            var f = null,
                g = null,
                h = null;
            if (b ? 0 === c.$poles.find("a.actif").length ? (d = "afficher", f = c.$poles.find('a[href*="' + a + "/" + b + '"]')) : c.$poles.find("a.actif").length > 0 && (d = "changer", f = c.$poles.find('a[href*="' + a + "/" + b + '"]')) : (d = "masquer", f = c.$poles.find("a.actif")), "afficher" == d) f[0].className += " actif", c.survolBtn(f), TweenLite.to(c.$poles, .5, {
                marginLeft: 209,
                ease: Quart.easeOut
            }), TweenLite.to(c.$poles.find("a"), .5, {
                marginLeft: 15,
                ease: Quart.easeOut
            }), TweenLite.to(c.$poles.find(".icone"), .5, {
                width: 75,
                height: 87,
                ease: Quart.easeOut
            }), g = c.$textePoles.find(".pole:nth-child(" + (f.index() + 1) + ")"), g[0].className += " actif", TweenLite.to(c.$textePoles.find(".trait"), .5, {
                top: g.height() + 20,
                ease: Quart.easeOut
            }), TweenLite.to(g, .5, {
                top: 0,
                opacity: 1,
                ease: Quart.easeOut,
                onComplete: function() {
                    y.adresse.premierChargement || y.autoriserTransPage()
                }
            });
            else if ("changer" == d) {
                var i = c.$poles.find("a.actif");
                f[0].className += " actif", c.survolBtn(f), i[0].className = "pole", c.desurvolBtn(i), g = c.$textePoles.find(".pole:nth-child(" + (f.index() + 1) + ")"), h = c.$textePoles.find(".pole.actif"), g[0].className += " actif", h[0].className = "pole", TweenLite.to(h, .5, {
                    top: 100,
                    opacity: 0,
                    ease: Quart.easeIn
                }), TweenLite.to(c.$textePoles.find(".trait"), .5, {
                    top: g.height() + 20,
                    delay: .5,
                    ease: Quart.easeOut
                }), TweenLite.to(g, .5, {
                    top: 0,
                    opacity: 1,
                    ease: Quart.easeOut,
                    delay: .5,
                    onComplete: function() {
                        y.autoriserTransPage()
                    }
                })
            } else "masquer" == d && (f[0].className = "pole", c.desurvolBtn(f), TweenLite.to(c.$poles, .5, {
                marginLeft: 12,
                ease: Quart.easeOut
            }), TweenLite.to(c.$poles.find("a"), .5, {
                width: 152,
                marginLeft: 120,
                ease: Quart.easeOut
            }), TweenLite.to(c.$poles.find(".icone"), .5, {
                width: 132,
                height: 153,
                ease: Quart.easeOut
            }), h = c.$textePoles.find(".actif"), h[0].className = "pole", TweenLite.to(c.$textePoles.find(".trait"), .5, {
                top: -10,
                ease: Quart.easeOut
            }), TweenLite.to(h, .5, {
                top: 100,
                opacity: 0,
                ease: Quart.easeOut,
                onComplete: function() {
                    y.autoriserTransPage()
                }
            }))
        },
        resize: function() {
            _this = this, $(".partie .contenu")[0].style.marginTop = (v - (380 + _this.hautPoleMax)) / 2 + "px"
        }
    }, A.processus = {
        $etapeActive: null,
        $navEtapes: null,
        init: function() {
            var a = this;
            a.$etapeActive = null, a.$navEtapes = $(document.getElementById("navEtapes")), a.$navEtapes.find("a").on("mouseenter", function() {
                return y.modeExp ? !1 : (TweenLite.to($(this).prev("span"), .5, {
                    right: 15,
                    opacity: 1,
                    ease: Expo.easeOut
                }), this.className.indexOf("sousPartie") > -1 && TweenLite.to($(this).parent("li").parents("li").find("> span"), .5, {
                    right: 15,
                    opacity: 1,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find("> .inactif"), .5, {
                    opacity: 0,
                    ease: Quad.easeOut
                }), void TweenLite.to($(this).find("> .actif"), .5, {
                    opacity: 1,
                    ease: Quad.easeOut
                }))
            }).on("mouseleave", function() {
                return TweenLite.to($(this).prev("span"), .5, {
                    right: 35,
                    opacity: 0,
                    ease: Expo.easeOut
                }), this.className.indexOf("sousPartie") > -1 && TweenLite.to($(this).parent("li").parents("li").find("> span"), .5, {
                    right: 35,
                    opacity: 0,
                    ease: Expo.easeOut
                }), this.className.indexOf("actif") > -1 ? !1 : (TweenLite.to($(this).find("> .actif"), .5, {
                    opacity: 0,
                    ease: Quad.easeOut
                }), void TweenLite.to($(this).find("> .inactif"), .5, {
                    opacity: 1,
                    ease: Quad.easeOut
                }))
            }).on("click", function() {
                if (Modernizr.history) {
                    if (y.modeExp) return !1;
                    var a = this.href.substring(this.href.indexOf("/" + _lg + "/"), this.href.length);
                    return $.address.value(a), !1
                }
            }), $("a.suivant").on("mouseenter", function() {
                TweenLite.to($(this).find(".fleches"), .5, {
                    top: "0%",
                    ease: Expo.easeOut
                }), TweenMax.to($(this).find(".survol"), .3, {
                    top: 5,
                    ease: Quart.easeIn,
                    yoyo: !0,
                    repeat: -1
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find(".fleches"), .5, {
                    top: "-100%",
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    top: 0,
                    ease: Quart.easeOut
                })
            }), Modernizr.history && $("a.suivant").address(), b.off("keydown"), b.on("keydown", function(c) {
                var d = $(document.getElementById("agenceProcessus"));
                if (0 === d.length || y.modeExp) return b.off("keydown"), !1;
                var e = a.$navEtapes.find("a.actif");
                if (40 == c.keyCode) {
                    var f = e.parent("li.sousMenu").next("li.sousMenu");
                    0 === f.length && (f = e.parent("li.menu").next("li.menu").find("li:nth-child(1)")), f.length > 0 && f.find("a").trigger("click")
                } else if (38 == c.keyCode) {
                    var f = e.parent("li.sousMenu").prev("li.sousMenu");
                    0 === f.length && (f = e.parent("li.menu").prev("li.menu").find("li:last-child")), f.length > 0 && f.find("a").trigger("click")
                }
            }), $(document.getElementById("agenceProcessus")).on("mousewheel", function(a, c, d, e) {
                if (0 > e) {
                    var f = jQuery.Event("keydown");
                    f.keyCode = 40, b.trigger(f)
                } else if (e > 0) {
                    var f = jQuery.Event("keydown");
                    f.keyCode = 38, b.trigger(f)
                }
            }), y.preload.loaderImg("processus", null, function() {
                a.resize(), a.changerEtape(), y.masquerLoader()
            })
        },
        changerEtape: function() {
            var a, b = this;
            if (Modernizr.history) a = $.address.pathNames()[3] + "/" + $.address.pathNames()[4];
            else {
                var c = window.location.pathname.split("/");
                a = "" === c[c.length - 1] ? c[c.length - 3] + "/" + c[c.length - 2] : c[c.length - 2] + "/" + c[c.length - 1]
            }
            var d = $('.etape[data-etape*="' + a + '"]');
            return 0 === d.length ? !1 : (d[0].style.zIndex = 2, b.$etapeActive ? (b.$etapeActive[0].style.zIndex = 1, b.$etapeActive.index() < d.index() ? (TweenLite.to(b.$etapeActive.find(".gauche"), 1, {
                top: "100%",
                ease: Expo.easeInOut
            }), TweenLite.to(b.$etapeActive.find(".droite"), 1, {
                top: "-100%",
                ease: Expo.easeInOut
            }), d.find(".gauche")[0].style.top = "-100%", d.find(".droite")[0].style.top = "100%") : (TweenLite.to(b.$etapeActive.find(".gauche"), 1, {
                top: "-100%",
                ease: Expo.easeInOut
            }), TweenLite.to(b.$etapeActive.find(".droite"), 1, {
                top: "100%",
                ease: Expo.easeInOut
            }), d.find(".gauche")[0].style.top = "100%", d.find(".droite")[0].style.top = "-100%"), TweenLite.to(d.find(".gauche, .droite"), 1, {
                top: "0%",
                ease: Expo.easeInOut,
                onComplete: function() {
                    b.$etapeActive = d, y.autoriserTransPage()
                }
            }), TweenLite.to(b.$etapeActive.find("a.suivant"), .5, {
                marginBottom: -100,
                opacity: 0,
                ease: Expo.easeIn
            }), TweenLite.to(d.find("a.suivant"), .5, {
                marginBottom: 0,
                opacity: 1,
                ease: Expo.easeOut,
                delay: .5
            })) : (d.find(".gauche")[0].style.top = "0%", d.find(".droite")[0].style.top = "0%", d.find("a.suivant")[0].style.marginBottom = "0px", d.find("a.suivant").css("opacity", 1), b.$etapeActive = d, y.adresse.premierChargement || y.autoriserTransPage()), void b.majMenu())
        },
        majMenu: function() {
            var a, b, c = this;
            if (Modernizr.history) a = $.address.pathNames()[3], b = $.address.pathNames()[4];
            else {
                var d = window.location.pathname.split("/");
                a = "" === d[d.length - 1] ? d[d.length - 3] : d[d.length - 2], b = "" === d[d.length - 1] ? d[d.length - 2] : d[d.length - 1]
            }
            var e = c.$navEtapes.find('> ul > li > a[href*="' + a + '"]'),
                f = c.$navEtapes.find('ul ul a[href*="' + a + "/" + b + '"]'),
                g = f.parent("li").parent("ul");
            if (TweenLite.to(e.find("> .inactif"), .5, {
                opacity: 0,
                ease: Quad.easeOut
            }), TweenLite.to(e.find("> .actif"), .5, {
                opacity: 1,
                ease: Quad.easeOut
            }), TweenLite.to(f.find("> img.inactif"), .5, {
                opacity: 0,
                ease: Quad.easeOut
            }), TweenLite.to(f.find("> img.actif"), .5, {
                opacity: 1,
                ease: Quad.easeOut
            }), TweenLite.to(g, .5, {
                height: 21 * g.find("a").length,
                ease: Expo.easeOut,
                onComplete: function() {
                    g[0].style.overflow = "inherit"
                }
            }), c.$navEtapes.find("a.actif").length > 0) {
                var h = c.$navEtapes.find("> ul > li > a.actif"),
                    i = c.$navEtapes.find("ul ul a.actif");
                if (i[0].className = "sousPartie", TweenLite.to(i.find("> img.actif"), .5, {
                    opacity: 0,
                    ease: Quad.easeOut
                }), TweenLite.to(i.find("> img.inactif"), .5, {
                    opacity: 1,
                    ease: Quad.easeOut
                }), "actif" != g[0].className) {
                    h[0].className = "";
                    var j = c.$navEtapes.find("ul.actif");
                    j[0].className = "", TweenLite.to(h.find("> .actif"), .5, {
                        opacity: 0,
                        ease: Quad.easeOut
                    }), TweenLite.to(h.find("> .inactif"), .5, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }), j[0].style.overflow = "hidden", TweenLite.to(j, .5, {
                        height: 0,
                        ease: Expo.easeOut
                    })
                }
            }
            e[0].className = "actif", f[0].className += " actif", g[0].className = "actif"
        },
        resize: function() {
            $(document.getElementById("fondProcessus"))[0].style.height = u + "px";
            for (var a = $(".etape"), b = 0; b < a.length; b++) $(a[b]).find("h2")[0].style.top = (v / 2 - 150) / 2 - 75 + "px", $(a[b]).find("h2")[1].style.top = (v / 2 - 150) / 2 - 75 + "px", $(a[b]).find("a.suivant")[0].style.bottom = (v / 2 - 150 - 56 - 41) / 2 + "px", $(a[b]).find(".nous")[0].style.left = (t / 2 - 300 - 140 - 50) / 2 + "px", $(a[b]).find(".vous")[0].style.right = (t / 2 - 300 - 140 - 50) / 2 + "px"
        }
    }, A.clients = {
        $partie: null,
        $contenu: null,
        $conteneurLogos: null,
        $logos: null,
        posLeft: null,
        init: function() {
            var a = this;
            a.$partie = $(".partie"), a.$conteneurLogos = a.$partie.find(".conteneurLogos"), a.$contenu = a.$partie.find(".contenu"), a.$logos = a.$partie.find(".logos"), a.posLeft = 0;
            var b = 152 * a.$logos.find("li").length + 50;
            a.$logos[0].style.width = b + "px", a.$logos[0].style.left = (t - b) / 2 + "px", y.touch || a.$partie.on("mousemove", function(c) {
                return y.modeExp ? !1 : void(b > t && a.deplacerLogos(c, $(this)))
            }), y.preload.loaderImg("clients", null, function() {
                a.resize(), y.masquerLoader()
            })
        },
        deplacerLogos: function(a) {
            var b = this;
            if (y.modeExp) return !1;
            var c = a.pageX;
            100 > c && (c = 100), c > t - 100 && (c = t - 100);
            var d = (-c + 100) * ((b.$logos.width() - t) / (t - 200));
            b.posLeft = d, TweenLite.to(b.$logos, 1, {
                left: d,
                ease: Quart.easeOut
            })
        },
        deplacerLogosTel: function(a) {
            var b = this;
            b.posLeft = "gauche" == a ? b.posLeft += 100 : b.posLeft -= 100, b.posLeft > 0 && (b.posLeft = 0), b.posLeft < -(b.$logos.width() - t) && (b.posLeft = -(b.$logos.width() - t)), TweenLite.to(b.$logos, 2, {
                left: b.posLeft,
                ease: Quart.easeOut
            })
        },
        resize: function() {
            _this = this;
            var a = 30 + (v - 550) / 4;
            _this.$conteneurLogos[0].style.marginTop = a + "px", _this.$conteneurLogos[0].style.marginBottom = a + "px", _this.$contenu[0].style.marginTop = (v - _this.$contenu.height() - 17) / 2 + "px", _this.$conteneurLogos.find(".traitTop")[0].style.top = -a / 2 + "px", _this.$conteneurLogos.find(".traitBottom")[0].style.bottom = -a / 2 + "px"
        }
    }, A.recompenses = {
        $toile: null,
        $chez: null,
        $akaru: null,
        $onAime: null,
        $desProjets: null,
        $contEt: null,
        $nousEn: null,
        $nbAwards: null,
        $gateau: null,
        $trad: null,
        deplacement: null,
        finAnim: null,
        posLeft: 0,
        txtTrad: "At Akaru's, we enjoy producing quality projects and we are usually rewarded for that.",
        posTrad: 0,
        init: function() {
            var a = this;
            a.$trad = $(".trad"), a.$toile = $(document.getElementById("toile")), a.$chez = a.$toile.find(".chez"), a.$akaru = a.$toile.find(".akaru"), a.$onAime = a.$toile.find(".onAime"), a.$desProjets = a.$toile.find(".desProjets"), a.$contEt = a.$toile.find(".contEt"), a.$nousEn = a.$toile.find(".nousEn"), a.$nbAwards = a.$toile.find(".nbAwards"), a.$gateau = a.$toile.find(".gateau"), a.finAnim = !1, a.$nbAwards.find("a.award").on("mouseenter", function() {
                TweenLite.to($(this).find("img"), .5, {
                    opacity: .5,
                    scale: .8,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find("img"), .5, {
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut
                })
            }), a.$gateau.find("a").on("mouseenter", function() {
                TweenLite.to($(this).find(".normal"), .3, {
                    opacity: 0,
                    rotation: -360,
                    ease: Cubic.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    opacity: 1,
                    rotation: -360,
                    ease: Cubic.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find(".normal"), .3, {
                    opacity: 1,
                    rotation: 0,
                    ease: Cubic.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    opacity: 0,
                    rotation: 0,
                    ease: Cubic.easeOut
                })
            }).on("click", function() {
                return a.rejouerAnim(), !1
            }), y.preload.loaderImg("recompenses", null, function() {
                setTimeout(function() {
                    a.animerCrea()
                }, 800), y.masquerLoader()
            })
        },
        animerCrea: function() {
            var a = this;
            "en" == _lg && setTimeout(function() {
                a.afficherTrad()
            }, 1e3);
            var b = t / 2 - 400,
                c = t - 1500,
                d = t - 1950,
                e = t - 2650,
                f = t - 3100,
                g = t - 3550,
                h = t - 4500;
            a.$toile[0].style.left = b + "px", a.$nbAwards.find(".award").css("display", "none"), a.$gateau.find(".btnRejouer")[0].style.top = "8888px", a.$toile[0].style.display = "block", a.$nbAwards.find(".chiffres")[0].style.top = "0px", a.$nbAwards.find(".chiffres")[1].style.top = "0px";
            var i = new TimelineLite;
            i.to(a.$toile, .5, {
                left: c,
                ease: Expo.easeOut,
                delay: 1.6
            }), i.to(a.$toile, .5, {
                left: d,
                ease: Expo.easeOut,
                delay: 1.9
            }), i.to(a.$toile, .5, {
                left: e,
                ease: Expo.easeOut,
                delay: 1.5
            }), i.to(a.$toile, .5, {
                left: f,
                ease: Expo.easeOut,
                delay: 3.7
            }), i.to(a.$toile, .5, {
                left: g,
                ease: Expo.easeOut,
                delay: 1.6
            }), i.to(a.$toile, .5, {
                left: h,
                ease: Expo.easeOut,
                delay: 4.2
            });
            var j = new TimelineLite;
            j.from(a.$chez.find(".losange"), .5, {
                scale: 0,
                ease: Back.easeOut
            }), j.from(a.$chez.find(".courHaut"), .3, {
                top: 55,
                opacity: 0,
                ease: Cubic.easeOut
            }, "-=0.2"), j.from(a.$chez.find(".courBas"), .3, {
                bottom: 55,
                opacity: 0,
                ease: Cubic.easeOut
            }, "-=0.2"), j.from(a.$chez.find(".texte .c"), .4, {
                top: -30,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$chez.find(".ct"), .4, {
                height: 0,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$chez.find(".texte .h"), .4, {
                top: -30,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".ht1"), .4, {
                height: 0,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$chez.find(".ht3"), .4, {
                height: 0,
                ease: Quart.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".ht2"), .4, {
                left: 110,
                width: 0,
                ease: Quart.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".texte .e"), .4, {
                top: -30,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".et2"), .4, {
                width: 0,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$chez.find(".et4"), .4, {
                top: 36,
                height: 0,
                ease: Quart.easeIn
            }, "-=0.4"), j.from(a.$chez.find(".et1"), .4, {
                width: 0,
                ease: Quart.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".et3"), .4, {
                width: 0,
                ease: Quart.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".texte .z"), .4, {
                top: -30,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.4"), j.from(a.$chez.find(".zt1"), .2, {
                width: 0,
                ease: Quart.easeIn
            }, "-=0.1"), j.from(a.$chez.find(".texte .ombre"), .3, {
                backgroundPosition: "11px -11px",
                opacity: 0,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$chez.find(".zt2"), .3, {
                height: 0,
                ease: Quart.easeOut
            }), j.from(a.$chez.find(".zt3"), .2, {
                width: 0,
                ease: Quart.easeIn
            }, "-=0.2"), j.from(a.$toile.find(".pointilles1"), .5, {
                height: 0,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$akaru.find(".t1"), .4, {
                height: 0,
                ease: Quart.easeIn
            }), j.from(a.$akaru.find(".t2"), .4, {
                height: 0,
                ease: Quart.easeOut
            }), j.from(a.$akaru.find(".t3"), .4, {
                height: 0,
                ease: Quart.easeIn
            }, "-=0.2"), j.from(a.$akaru.find(".t4"), .4, {
                height: 0,
                ease: Quart.easeOut
            }), j.from(a.$akaru.find(".a1"), .4, {
                left: -51,
                top: 183,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.2"), j.from(a.$akaru.find(".a2"), .4, {
                top: -183,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$akaru.find(".r"), .4, {
                top: -183,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$akaru.find(".u"), .4, {
                top: -183,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$onAime.find(".bande1"), .4, {
                width: 0,
                ease: Quart.easeOut
            }, "-=0.2"), j.from(a.$onAime.find(".bande1 .clou"), .4, {
                scale: 3,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }), j.from(a.$onAime.find(".on"), .4, {
                left: 223,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.4"), j.from(a.$onAime.find(".aime"), .4, {
                left: 223,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$onAime.find(".rondCoeur"), .5, {
                scale: 2,
                opacity: 0,
                ease: Back.easeOut
            }), j.from(a.$onAime.find(".coeur"), .4, {
                scale: 0,
                ease: Back.easeOut
            }, "-=0.1"), j.from(a.$onAime.find(".bande2"), .4, {
                width: 0,
                ease: Quart.easeOut
            }, "-=0.1"), j.from(a.$onAime.find(".bande2 .clou"), .4, {
                scale: 3,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }), j.from(a.$onAime.find(".realiser"), .5, {
                left: -270,
                ease: Expo.easeOut
            }, "-=0.4"), j.from(a.$desProjets.find(".losangeDes"), .5, {
                scale: 0,
                rotation: 360,
                ease: Back.easeOut
            }, "+=0.2"), j.from(a.$desProjets.find(".des"), .5, {
                scale: 2,
                opacity: 0,
                ease: Back.easeOut
            }), j.from(a.$desProjets.find(".projets"), .5, {
                top: 95,
                height: 0,
                ease: Quart.easeOut
            }, "-=0.1"), j.from(a.$desProjets.find(".de"), .3, {
                opacity: 0,
                ease: Quart.easeOut
            }, "-=0.2"), j.from(a.$desProjets.find(".de"), .3, {
                left: 305,
                width: 121,
                ease: Quart.easeOut
            }), j.from(a.$desProjets.find(".qualite"), .5, {
                top: 273,
                height: 0,
                ease: Quart.easeOut
            }, "-=0.1"), j.from(a.$desProjets.find(".pointilles"), .5, {
                width: 0,
                ease: Expo.easeOut
            }, "-=0.1"), j.to(a.$desProjets.find(".pointilles"), .3, {
                rotation: 7,
                ease: Quart.easeOut
            }, "+=0.2"), j.from(a.$desProjets.find(".main"), .3, {
                opacity: 0,
                ease: Cubic.easeOut
            }, "+=0.1"), j.to(a.$desProjets.find(".main"), .3, {
                bottom: 21,
                ease: Quad.easeOut
            }), j.to(a.$desProjets.find(".pointilles"), .3, {
                rotation: 0,
                ease: Quad.easeOut
            }, "-=0.3"), j.to(a.$desProjets.find(".main"), .5, {
                bottom: 0,
                ease: Quad.easeOut
            }), j.from(a.$contEt.find(".triangle1"), .5, {
                top: -200,
                rotation: 360,
                opacity: 0,
                ease: Expo.easeOut
            }), j.from(a.$contEt.find(".triangle2"), .5, {
                left: -200,
                bottom: -200,
                rotation: -360,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$contEt.find(".triangle3"), .5, {
                right: -200,
                bottom: -200,
                rotation: 360,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$contEt.find(".et"), .5, {
                scale: 0,
                opacity: 0,
                ease: Back.easeOut
            }), j.from(a.$contEt.find(".etOmbre"), .3, {
                left: 53,
                top: 67,
                opacity: 0,
                opacity: 0,
                ease: Quart.easeOut
            }), j.from(a.$nousEn.find(".nous"), .5, {
                left: 404,
                opacity: 0,
                ease: Expo.easeOut
            }, "+=0.5"), j.from(a.$nousEn.find(".en"), .5, {
                left: 601,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$nousEn.find(".sommes"), .5, {
                left: 402,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$nousEn.find(".rond2"), .5, {
                scale: 0,
                ease: Back.easeOut
            }, "-=0.1"), j.from(a.$nousEn.find(".pt1"), .4, {
                scale: 2,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$nousEn.find(".pt2"), .4, {
                scale: 2,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$nousEn.find(".pt3"), .4, {
                scale: 2,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$nousEn.find(".rond1"), .5, {
                scale: 2,
                opacity: 0,
                ease: Back.easeOut
            }, "-=0.1"), j.from(a.$nousEn.find(".bande"), .5, {
                left: 335,
                width: 0,
                ease: Expo.easeOut
            }, "-=0.5"), j.from(a.$nousEn.find(".regulierement img"), .5, {
                left: 457,
                top: 2,
                ease: Expo.easeOut
            }), j.from(a.$nousEn.find(".clou1"), .4, {
                scale: 3,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.1"), j.from(a.$nousEn.find(".clou2"), .4, {
                scale: 3,
                opacity: 0,
                rotation: 360,
                ease: Quart.easeOut
            }, "-=0.4"), j.from(a.$nousEn.find(".recompenses"), .4, {
                left: 446,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.1"), j.from(a.$nousEn.find(".point"), .5, {
                scale: 0,
                ease: Back.easeOut
            }), j.from(a.$nousEn.find(".decoration"), .5, {
                left: 505,
                bottom: -20,
                rotation: 8,
                opacity: 0,
                ease: Back.easeOut
            }), j.to(a.$nbAwards.find(".couronne"), 0, {
                left: 115,
                rotation: -8,
                ease: Quart.easeOut
            }), j.from(a.$nbAwards.find(".losange1"), .5, {
                scale: 0,
                rotation: -180,
                ease: Back.easeOut
            }, "+=0.3"), j.from(a.$nbAwards.find(".losange2"), .5, {
                scale: 0,
                rotation: 180,
                ease: Back.easeOut
            }, "-=0.5"), j.from(a.$nbAwards.find(".compteur"), .5, {
                top: -16,
                opacity: 0,
                ease: Expo.easeOut
            }), j.from(a.$nbAwards.find(".awards"), .5, {
                left: 249,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.3"), j.from(a.$nbAwards.find(".award1"), .3, {
                top: 420,
                opacity: 0,
                ease: Expo.easeOut,
                onStart: function() {
                    a.$nbAwards.find(".award").css("display", "block")
                }
            }, "-=0.2"), j.from(a.$nbAwards.find(".award2"), .3, {
                top: 420,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.2"), j.from(a.$nbAwards.find(".award3"), .3, {
                top: 420,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.2"), j.from(a.$nbAwards.find(".couronne"), .5, {
                top: -200,
                opacity: 0,
                ease: Quart.easeIn
            }, "-=0.3"), j.to(a.$nbAwards.find(".couronne"), .5, {
                left: 127,
                rotation: 0,
                ease: Quart.easeOut
            }), j.from(a.$nbAwards.find(".pt1"), .4, {
                scale: 2,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$nbAwards.find(".pt2"), .4, {
                scale: 2,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.3"), j.from(a.$nbAwards.find(".pt3"), .4, {
                scale: 2,
                opacity: 0,
                rotation: -360,
                ease: Quart.easeOut
            }, "-=0.3"), j.to(a.$gateau.find(".cerise"), 0, {
                rotation: -6,
                ease: Quart.easeIn
            }), j.from(a.$gateau.find(".plat"), .5, {
                scale: 0,
                ease: Back.easeOut
            }, "-=0.7"), j.from(a.$gateau.find(".part"), .5, {
                height: 0,
                ease: Back.easeOut
            }), j.from(a.$gateau.find(".cerise"), .5, {
                top: -400,
                opacity: 0,
                ease: Quart.easeIn
            }), j.to(a.$gateau.find(".cerise"), .5, {
                rotation: 0,
                ease: Quart.easeOut
            }), j.from(a.$gateau.find(".rejouer"), .3, {
                left: -30,
                opacity: 0,
                ease: Quart.easeOut,
                onStart: function() {
                    a.$gateau.find(".btnRejouer")[0].style.top = "130px"
                }
            }, "+=0.5"), j.from(a.$gateau.find(".fleche"), .3, {
                right: -30,
                opacity: 0,
                ease: Quart.easeOut,
                onComplete: function() {
                    a.activerDeplacement(), a.posLeft = h
                }
            }, "-=0.3"), j.to(a.$nbAwards.find(".unites .chiffres"), 8, {
                top: -4830,
                ease: Quart.easeInOut
            }, "-=5"), j.to(a.$nbAwards.find(".dizaines .chiffres"), .3, {
                top: -138,
                ease: Quart.easeInOut
            }, "-=4.7"), j.to(a.$nbAwards.find(".dizaines .chiffres"), .3, {
                top: -276,
                ease: Quart.easeInOut
            }, "-=4.0"), j.to(a.$nbAwards.find(".dizaines .chiffres"), .5, {
                top: -414,
                ease: Quart.easeInOut
            }, "-=3.2")
        },
        rejouerAnim: function() {
            var a = this;
            a.finAnim = !1, a.desactiverDeplacement(), a.$trad.length && TweenLite.to(a.$trad, 1.5, {
                opacity: 0,
                ease: Quart.easeIn
            }), TweenLite.to(a.$toile, 1.5, {
                left: t / 2 - 400,
                opacity: 0,
                ease: Quart.easeIn,
                onComplete: function() {
                    a.$trad.length && (a.posTrad = 0, a.$trad[0].innerHTML = "", a.$trad.css("opacity", 1)), a.$toile[0].style.display = "none", a.$toile.css("opacity", 1), setTimeout(function() {
                        a.animerCrea()
                    }, 500)
                }
            })
        },
        activerDeplacement: function() {
            var a = this;
            a.finAnim = !0, y.modeExp ? y.telephone.socket.emit("emission desktop", {
                room: y.telephone.roomID,
                page: "recompenses",
                action: "finAnim"
            }) : a.deplacement = Draggable.create(a.$toile, {
                type: "x",
                bounds: document.getElementById("agenceRecompenses")
            })
        },
        desactiverDeplacement: function() {
            var a = this;
            a.deplacement && a.deplacement[0].disable()
        },
        recupererEtatAnim: function() {
            var a = this;
            y.telephone.socket.emit("emission desktop", {
                room: y.telephone.roomID,
                page: "recompenses",
                action: "recupEtatAnim",
                etat: a.finAnim
            })
        },
        deplacerToile: function(a) {
            var b = this;
            b.posLeft = "gauche" == a ? b.posLeft += 100 : b.posLeft -= 100, b.posLeft > 0 && (b.posLeft = 0), b.posLeft < t - 4500 && (b.posLeft = t - 4500), TweenLite.to(b.$toile, 2, {
                left: b.posLeft,
                ease: Quart.easeOut
            })
        },
        afficherTrad: function() {
            var a = this;
            if ("agenceRecompenses" != y.idPage) return a.posTrad = 0, !1;
            if (a.$trad[0].innerHTML = a.txtTrad.substr(0, a.posTrad), a.posTrad++, a.posTrad <= a.txtTrad.length) {
                var b = Math.floor(300 * Math.random()) + 50;
                setTimeout(function() {
                    a.afficherTrad()
                }, b)
            }
        }
    };
    var B = {
        init: function() {
            var a = this;
            "referencesToutes" == y.idPage && a.toutes.init(), "referencesSeule" == y.idPage && a.seule.init()
        }
    };
    B.toutes = {
        $referencesToutes: null,
        $conteneurRefs: null,
        $refs: null,
        $btnFiltres: null,
        $filtres: null,
        survolFiltre: null,
        filtresOuvert: null,
        filtreRefs: null,
        init: function() {
            var a = this;
            a.$referencesToutes = $(document.getElementById("referencesToutes")), a.$conteneurRefs = $(document.getElementById("conteneurRefs")), a.$refs = a.$conteneurRefs.find("a.ref"), a.$btnFiltres = a.$referencesToutes.find("a.btnFiltres"), a.$filtres = a.$referencesToutes.find(".filtres"), a.survolFiltre = !1, a.filtresOuvert = !1, a.$btnFiltres.on("mouseenter", function() {
                a.survolFiltre = !0, Modernizr.csstransforms3d ? (TweenLite.to($(this).find(".normal"), .3, {
                    rotationY: -90,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    rotationY: 0,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".survol"), .3, {
                    left: 0,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", function() {
                a.survolFiltre = !1, Modernizr.csstransforms3d ? (TweenLite.to($(this).find(".normal"), .3, {
                    rotationY: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .3, {
                    rotationY: 90,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".survol"), .3, {
                    left: -61,
                    ease: Quart.easeOut
                })
            }).on("click", function() {
                return a.ouvrirListeFiltres(), !1
            }), a.animerBtnFiltres(), a.$filtres.find(".liste a").on("mouseenter", function() {
                var a = $(this).parent("h2");
                TweenLite.to(this, .3, {
                    color: n,
                    ease: Quart.easeOut
                }), TweenLite.to(a.find(".barre"), .3, {
                    left: 0,
                    ease: Expo.easeOut
                }), TweenLite.to(a.find(".num"), .3, {
                    bottom: 10,
                    opacity: 1,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", function() {
                var a = $(this).parent("h2");
                "actif" != this.className && TweenLite.to(this, .3, {
                    color: k,
                    ease: Quart.easeOut
                }), TweenLite.to(a.find(".barre"), .3, {
                    left: -13,
                    ease: Expo.easeOut
                }), TweenLite.to(a.find(".num"), .3, {
                    bottom: 30,
                    opacity: 0,
                    ease: Expo.easeOut
                })
            }), Modernizr.history && a.$filtres.find(".liste a").address(), y.touch || a.$filtres.find(".liste").on("mousemove", function(a) {
                var b = $(this).height();
                if (v > b) return !1;
                var c = a.pageY;
                50 > c && (c = 50), c > v - 50 && (c = v - 50);
                var d = (-c + 50) * ((b - v) / (v - 100));
                TweenLite.to(this, .5, {
                    top: d,
                    ease: Quart.easeOut
                })
            });
            var b = $(document.getElementById("navSlideshow"));
            b.find("a.fermer").on("mouseenter", function() {
                TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 180,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: n,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 0,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: k,
                    ease: Quart.easeOut
                })
            }).on("click", function() {
                return a.fermerListeFiltres(), !1
            }), y.touch || a.$filtres.find(".fond").on("mouseenter", function(a) {
                this.className += " survol", b[0].style.left = a.pageX - 33 + "px", b[0].style.top = a.pageY - 30 + "px", TweenLite.to(b, .3, {
                    opacity: 1,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", function() {
                this.className = "fond", TweenLite.to(b, .3, {
                    opacity: 0,
                    ease: Quart.easeOut
                })
            }).on("mousemove", function(a) {
                TweenLite.to(b, 1, {
                    left: a.pageX - 33,
                    top: a.pageY - 30,
                    ease: Quart.easeOut
                })
            }).on("click", function() {
                return a.fermerListeFiltres(), !1
            });
            var c = null;
            a.$refs.on("mouseenter", function(b) {
                if (this.className.indexOf("inactif") > -1 || y.modeExp) return !1;
                this.style.zIndex = 2, c = $(this).find("h3");
                var d = a.recupererPosSouris(b, $(this), c);
                c[0].style.left = d.X + "px", c[0].style.top = d.Y + "px", TweenLite.to(a.$conteneurRefs.find("a.ref .survol"), .5, {
                    opacity: .5,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find(".survol"), .5, {
                    opacity: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($(this).find("img"), .5, {
                    left: "-5%",
                    top: "-5%",
                    width: "110%",
                    height: "110%",
                    ease: Quart.easeOut
                }), TweenLite.to(c, .3, {
                    opacity: 1,
                    rotationX: 0,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", function() {
                return this.className.indexOf("inactif") > -1 || y.modeExp ? !1 : (this.style.zIndex = 1, TweenLite.to(a.$conteneurRefs.find("a.ref .survol"), .5, {
                    opacity: 0,
                    ease: Quart.easeIn
                }), TweenLite.to($(this).find("img"), .5, {
                    left: "0%",
                    top: "0%",
                    width: "100%",
                    height: "100%",
                    ease: Quart.easeOut
                }), void(null !== c && TweenLite.to(c, .3, {
                    opacity: 0,
                    rotationX: 90,
                    ease: Quart.easeOut
                })))
            }).on("mousemove", function(b) {
                return y.touch || y.modeExp ? !1 : (a.$conteneurRefs.width() > t && a.deplacerVignettes(b, $(this), c), void a.deplacerTitre(b, $(this), c))
            }).on("click", function() {
                if (Modernizr.history) {
                    if (this.className.indexOf("inactif") > -1 || y.modeExp) return !1;
                    a.filtreRefs = "filtre" == $.address.pathNames()[2] ? $.address.pathNames()[3] : null;
                    var b = this.href.substring(this.href.indexOf("/" + _lg + "/"), this.href.length);
                    return $.address.value(b), !1
                }
            }), a.initGrid(), Modernizr.history && "filtre" == $.address.pathNames()[2] ? a.filtrerRefs("init") : !Modernizr.history && window.location.pathname.indexOf("filtre") > -1 ? a.filtrerRefs("init") : a.$filtres.find(".liste a.actif").trigger("mouseenter").trigger("mouseleave");
            for (var d = a.$conteneurRefs.find("a.ref img"), e = [], f = 0; f < d.length; f++) e.push(d[f].src);
            y.preload.loaderImg(null, e, function() {
                y.resize(), y.masquerLoader()
            })
        },
        deplacerVignettes: function(a, b, c) {
            var d = this,
                e = a.pageX;
            200 > e && (e = 200), e > t - 200 && (e = t - 200);
            var f = (-e + 200) * ((d.$conteneurRefs.width() - t) / (t - 400));
            TweenLite.to(d.$conteneurRefs, .5, {
                left: f,
                ease: Quart.easeOut,
                onComplete: function() {
                    d.deplacerTitre(a, b, c)
                }
            })
        },
        deplacerTitre: function(a, b, c) {
            var d = this;
            if (b[0].className.indexOf("inactif") < 0) {
                if (null === c) return !1;
                var e = d.recupererPosSouris(a, b, c);
                TweenLite.to(c, .5, {
                    left: e.X,
                    top: e.Y,
                    ease: Quart.easeOut
                })
            }
        },
        animerBtnFiltres: function() {
            var a = this;
            if ("referencesToutes" != y.idPage) return !1;
            var b = null,
                c = null,
                d = null;
            a.survolFiltre ? (b = a.$btnFiltres.find("span.survol span.actif")[parseInt(4 * Math.random())], c = a.$btnFiltres.find("span.survol span.inactif")[parseInt(5 * Math.random())], d = n) : (b = a.$btnFiltres.find("span.normal span.actif")[parseInt(4 * Math.random())], c = a.$btnFiltres.find("span.normal span.inactif")[parseInt(5 * Math.random())], d = k), b.className = "inactif", c.className = "actif", TweenLite.to(b, .3, {
                backgroundColor: m,
                ease: Quart.easeOut
            }), TweenLite.to(c, .3, {
                backgroundColor: d,
                ease: Quart.easeOut
            }), setTimeout(function() {
                a.animerBtnFiltres()
            }, 800)
        },
        ouvrirListeFiltres: function() {
            var a = this;
            a.filtresOuvert = !0, TweenLite.to(a.$filtres, .5, {
                width: "100%",
                ease: Quart.easeIn
            });
            for (var b = a.$filtres.find("h2"), c = .2, d = 0; d < b.length; d++) TweenLite.to(b[d], .5, {
                left: 0,
                opacity: 1,
                ease: Quart.easeOut,
                delay: c
            }), c += .05
        },
        fermerListeFiltres: function() {
            var a = this;
            a.filtresOuvert = !1, TweenLite.to(a.$filtres, .5, {
                width: "0%",
                ease: Quart.easeOut,
                onComplete: function() {
                    for (var b = a.$filtres.find("h2"), c = 0; c < b.length; c++) b[c].style.left = "-50px", $(b[c]).css("opacity", 0);
                    a.$filtres.find(".liste")[0].style.top = "0px"
                }
            })
        },
        recupererPosSouris: function(a, b, c) {
            var d = a.pageX - b.offset().left - c.width() - 40,
                e = a.pageY - b.offset().top - 60;
            return d < -b.offset().left + 10 && (d = -b.offset().left + 10), b.offset().top + e < 10 && (e = 10), {
                X: d,
                Y: e
            }
        },
        filtrerRefs: function(a) {
            var b = this;
            b.fermerListeFiltres(), b.activerLienFiltre(), TweenLite.to(b.$conteneurRefs, .5, {
                left: 0,
                ease: Quart.easeOut
            }), $refsAInit = b.$conteneurRefs.find('a[data-ordre="1"]');
            for (var c = 0; c < $refsAInit.length; c++) $refsAInit[c].setAttribute("data-ordre", 2);
            var d;
            if (Modernizr.history) d = $.address.pathNames()[3];
            else {
                var e = window.location.pathname.split("/");
                d = "" === e[e.length - 1] ? e[e.length - 2] : e[e.length - 1]
            } if (d) {
                for (var f = b.$conteneurRefs.find('a[data-filtre*="' + d + '"]'), c = 0; c < f.length; c++) f[c].setAttribute("data-ordre", 1);
                f.removeClass("inactif"), TweenLite.to(f.find(".inactif"), .5, {
                    opacity: 0,
                    ease: Quart.easeOut
                });
                var g = b.$conteneurRefs.find('a[data-ordre="2"]');
                g.addClass("inactif"), TweenLite.to(g.find(".inactif"), .5, {
                    opacity: 1,
                    ease: Quart.easeOut,
                    onComplete: function() {
                        "init" != a && y.autoriserTransPage()
                    }
                })
            } else {
                var h = b.$conteneurRefs.find("a.inactif");
                h.removeClass("inactif"), TweenLite.to(h.find(".inactif"), .5, {
                    opacity: 0,
                    ease: Quart.easeOut,
                    onComplete: function() {
                        y.autoriserTransPage()
                    }
                })
            }
            b.$conteneurRefs.isotope("updateSortData", b.$refs), b.$conteneurRefs.isotope({
                sortBy: "ordre"
            })
        },
        activerLienFiltre: function() {
            var a = this,
                b = a.$filtres.find(".liste a.actif");
            b.length > 0 && (b[0].className = "", b.trigger("mouseleave"));
            var c = Modernizr.history ? $.address.path() : window.location.pathname,
                d = a.$filtres.find('.liste a[href*="' + c + '"]');
            d[0].className = "actif", d.trigger("mouseenter").trigger("mouseleave")
        },
        initGrid: function() {
            for (var a = this, b = parseInt(a.$conteneurRefs.height() / 4), c = Math.round(16 * b / 10), d = 0; d < a.$refs.length; d++) 6 > d ? (a.$refs[d].style.width = 2 * c + "px", a.$refs[d].style.height = 2 * b + "px") : (a.$refs[d].style.width = c + "px", a.$refs[d].style.height = b + "px");
            a.$conteneurRefs.isotope({
                itemSelector: "a.ref",
                layoutMode: "masonryHorizontal",
                animationEngine: "best-available",
                animationOptions: {
                    duration: 500,
                    easing: "swing",
                    queue: !1
                },
                masonryHorizontal: {
                    rowHeight: b
                },
                getSortData: {
                    ordre: function(a) {
                        return a.attr("data-ordre")
                    }
                }
            })
        },
        resize: function() {
            var a = this;
            a.initGrid()
        }
    }, B.seule = {
        $referencesSeule: null,
        $infos: null,
        $slides: null,
        $slidesProjets: null,
        posBottomInfos: 0,
        infosOuvert: null,
        init: function() {
            var a = this;
            a.$referencesSeule = $(document.getElementById("referencesSeule")), a.$infos = $(document.getElementById("infos")), a.$slides = a.$referencesSeule.find(".slides"), a.$slidesProjets = $(document.getElementById("slidesProjets")), a.posBottomInfos = -a.$infos.height() - 20 + a.$infos.find("h3").height() + 58, a.infosOuvert = !1, Modernizr.history && $(document.getElementById("navSlideshow")).find("a.fermer").address(), a.$infos[0].style.bottom = a.posBottomInfos;
            var b = (960 - a.$infos.find("h3 span").width()) / 2 - 60;
            if (a.$infos.find(".gauche")[0].style.left = a.$infos.find(".droite")[0].style.right = b + "px", a.$infos.find(".nomProjets .conteneur")[0].style.left = a.$infos.find(".nomProjets .conteneur")[1].style.right = b + 57 + "px", a.$infos.find(".fleches a").on("mouseenter", function() {
                a.survolFlecheProjet($(this))
            }).on("mouseleave", function() {
                a.desurvolFlecheProjet($(this))
            }), Modernizr.history && a.$infos.find(".fleches a").address(), a.$infos.find(".plus a").on("mouseenter", function() {
                "fermer" == this.className ? (TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 90,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: n,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".texte"), .5, {
                    top: "-100%",
                    ease: Expo.easeOut
                }), TweenLite.to(this, .5, {
                    borderColor: n,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", function() {
                "fermer" == this.className ? (TweenLite.to($(this).find(".croix"), .5, {
                    rotation: 0,
                    ease: Expo.easeOut
                }), TweenLite.to($(this).find(".croix span"), .5, {
                    backgroundColor: k,
                    ease: Quart.easeOut
                })) : TweenLite.to($(this).find(".texte"), .5, {
                    top: "0%",
                    ease: Expo.easeOut
                }), TweenLite.to(this, .5, {
                    borderColor: k,
                    ease: Quart.easeOut
                })
            }).on("click", function() {
                return "btnInfos" == this.className ? (a.ouvrirInfos(), !1) : "fermer" == this.className ? (a.fermerInfos(), !1) : void 0
            }), B.toutes.filtreRefs) {
                $(document.getElementById("navSlideshow")).find("a.fermer")[0].href = _racineWeb + _lg + "/references/filtre/" + B.toutes.filtreRefs + "/";
                var c, d = [],
                    e = [],
                    f = [],
                    g = 0;
                for (var h in y.refs)
                    if (y.refs[h].filtres.indexOf(B.toutes.filtreRefs) > -1) {
                        var i = y.refs[h].id + "/" + y.refs[h].alias;
                        i == $.address.pathNames()[2] + "/" + $.address.pathNames()[3] && (c = g), d.push(i), e.push(y.refs[h].nom), f.push(y.refs[h].images[0]), g++
                    }
                var j = 0 > c - 1 ? g - 1 : c - 1,
                    l = c + 1 == g ? 0 : c + 1;
                a.$slidesProjets.find(".prec img")[0].src = _racineWeb + "images/ref/" + f[j], a.$slidesProjets.find(".suiv img")[0].src = _racineWeb + "images/ref/" + f[l], a.$slidesProjets.find(".prec img")[0].alt = e[j] + " - Références | Agence web Lyon - Akaru", a.$slidesProjets.find(".suiv img")[0].alt = e[l] + " - Références | Agence web Lyon - Akaru", a.$infos.find("a.gauche")[0].href = _racineWeb + _lg + "/reference/" + d[j] + "/", a.$infos.find("a.droite")[0].href = _racineWeb + _lg + "/reference/" + d[l] + "/", a.$infos.find(".nomProjets .prec")[0].innerHTML = e[j], a.$infos.find(".nomProjets .suiv")[0].innerHTML = e[l]
            }
            a.$infos.find("h1 a").on("mouseenter", function() {
                TweenLite.to(this, .5, {
                    color: n,
                    ease: Cubic.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to(this, .5, {
                    color: s,
                    ease: Cubic.easeOut
                })
            }), Modernizr.history && a.$infos.find("h1 a").address(), a.$infos.find("h2 a").on("mouseenter", function() {
                TweenLite.to(this, .5, {
                    color: n,
                    borderColor: n,
                    ease: Cubic.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to(this, .5, {
                    color: s,
                    borderColor: s,
                    ease: Cubic.easeOut
                })
            }), Modernizr.history && a.$infos.find("h2 a").address();
            for (var m = a.$infos.find(".awards .award"), o = 0; o < m.length; o++) {
                var p = $(m[o]),
                    q = p.width();
                p.find(".nom")[0].style.right = q + 30 + "px"
            }
            a.$infos.find(".awards a").on("mouseenter", function() {
                var a = $(this).prev(".nom"),
                    b = $(this).parent(".award").width();
                TweenLite.to($(this).prev(".nom"), .5, {
                    right: b + 5,
                    opacity: 1,
                    ease: Expo.easeOut,
                    onStart: function() {
                        a[0].style.zIndex = "1"
                    }
                })
            }).on("mouseleave", function() {
                var a = $(this).prev(".nom"),
                    b = $(this).parent(".award").width();
                TweenLite.to($(this).prev(".nom"), .5, {
                    right: b + 30,
                    opacity: 0,
                    ease: Expo.easeOut,
                    onComplete: function() {
                        a[0].style.zIndex = "-1"
                    }
                })
            }), y.slideshow.init("simple")
        },
        survolFlecheProjet: function(a) {
            var b = this,
                c = 18,
                d = 3,
                e = "-15%";
            "gauche" == a[0].className ? (c = -18, d = -3, e = "15%", TweenLite.to(b.$infos.find(".prec"), .5, {
                left: -10,
                opacity: 1,
                ease: Expo.easeOut
            }), TweenLite.to(b.$slidesProjets.find(".prec"), .5, {
                left: "-70%",
                ease: Expo.easeOut
            })) : (TweenLite.to(b.$infos.find(".suiv"), .5, {
                right: -10,
                opacity: 1,
                ease: Expo.easeOut
            }), TweenLite.to(b.$slidesProjets.find(".suiv"), .5, {
                left: "70%",
                ease: Expo.easeOut
            })), TweenLite.to(b.$infos.find("h3"), .5, {
                opacity: .3,
                ease: Quart.easeOut
            }), TweenLite.to(a.find(".normal"), .5, {
                left: c,
                opacity: 0,
                ease: Expo.easeOut
            }), TweenLite.to(a.find(".survol"), .5, {
                left: 0,
                opacity: 1,
                ease: Expo.easeOut
            }), TweenMax.to(a.find(".survol img"), .3, {
                left: d,
                ease: Quart.easeIn,
                yoyo: !0,
                repeat: -1
            }), TweenLite.to(b.$slides, .5, {
                left: e,
                ease: Expo.easeOut
            })
        },
        desurvolFlecheProjet: function(a) {
            var b = this,
                c = -18;
            "gauche" == a[0].className ? (c = 18, TweenLite.to(b.$infos.find(".prec"), .5, {
                left: 20,
                opacity: 0,
                ease: Expo.easeOut
            }), TweenLite.to(b.$slidesProjets.find(".prec"), .5, {
                left: "-100%",
                ease: Expo.easeOut
            })) : (TweenLite.to(b.$infos.find(".suiv"), .5, {
                right: 20,
                opacity: 0,
                ease: Expo.easeOut
            }), TweenLite.to(b.$slidesProjets.find(".suiv"), .5, {
                left: "100%",
                ease: Expo.easeOut
            })), TweenLite.to(b.$infos.find("h3"), .5, {
                opacity: 1,
                ease: Quart.easeOut
            }), TweenLite.to(a.find(".normal"), .5, {
                left: 0,
                opacity: 1,
                ease: Expo.easeOut
            }), TweenLite.to(a.find(".survol"), .5, {
                left: c,
                opacity: 0,
                ease: Expo.easeOut
            }), TweenLite.to(a.find(".survol img"), .3, {
                left: 0,
                ease: Quart.easeOut
            }), TweenLite.to(b.$slides, .5, {
                left: "0%",
                ease: Expo.easeOut
            })
        },
        ouvrirInfos: function() {
            var a = this;
            a.infosOuvert = !0, TweenLite.to(a.$infos, .5, {
                bottom: 0,
                ease: Expo.easeOut
            }), TweenLite.to(a.$infos.find(".btnInfos"), .5, {
                opacity: 0,
                ease: Quart.easeIn
            }), a.$infos.find(".fermer")[0].style.display = "block", TweenLite.to(a.$infos.find(".fermer"), .5, {
                opacity: 1,
                ease: Quart.easeIn
            })
        },
        fermerInfos: function() {
            var a = this;
            a.infosOuvert = !1, TweenLite.to(a.$infos, .5, {
                bottom: a.posBottomInfos,
                ease: Expo.easeOut
            }), TweenLite.to(a.$infos.find(".btnInfos"), .5, {
                opacity: 1,
                ease: Quart.easeOut
            }), TweenLite.to(a.$infos.find(".fermer"), .5, {
                opacity: 0,
                ease: Quart.easeOut,
                onComplete: function() {
                    a.$infos.find(".fermer")[0].style.display = "none"
                }
            })
        },
        recupererEtatInfos: function() {
            var a = this;
            y.telephone.socket.emit("emission desktop", {
                room: y.telephone.roomID,
                page: "reference",
                action: "recupEtatInfos",
                etat: a.infosOuvert
            })
        },
        resize: function() {
            var a = this;
            y.slideshow.resize(), a.$infos[0].className = t < a.$infos.find("h3 span").width() + 360 && a.$infos.find(".site").length > 0 ? "infos petit" : "infos"
        }
    };
    var C = {
        init: function() {
            var a = this;
            a.resize(), "expertiseConception" == y.idPage && a.conception.init(), "expertiseCreation" == y.idPage && a.creation.init(), "expertiseDeveloppement" == y.idPage && a.developpement.init(), "expertiseEmarketing" == y.idPage && a.emarketing.init(), "expertiseServices" == y.idPage && a.services.init()
        },
        resize: function() {
            $(".expertise .contenu")[0].style.top = (v - $(".expertise .contenu").height()) / 2 + "px"
        }
    };
    C.conception = {
        $animation: null,
        $feuillesVolantes: null,
        init: function() {
            var a = this;
            a.$animation = $(".animation"), a.$feuillesVolantes = $(".feuillesVolantes"), y.preload.loaderImg("conception", null, function() {
                a.genererFeuille(), y.masquerLoader()
            })
        },
        genererFeuille: function() {
            var a = this;
            if ("expertiseConception" != y.idPage) return !1;
            var b = Math.round(3 * Math.random()) + 1,
                c = $("<div>");
            c[0].className = "feuille";
            var d = $("<img>");
            d[0].src = _racineWeb + "images/divers/expertise/expertise_conception_feuille_" + b + ".png", c.append(d);
            var e = 7,
                f = 8,
                g = Math.floor(60 * Math.random()),
                h = Math.floor(20 * Math.random()) + 40,
                i = (Math.floor(50 * Math.random()) + h) / 35,
                j = Math.floor(45 * Math.random()),
                k = Math.floor(10 * Math.random()) + 30,
                l = new TimelineLite;
            c[0].style.left = g + "%", c[0].style.zIndex = Math.floor(10 * Math.random()), a.$feuillesVolantes.append(c);
            for (var m = g, n = g + 1 * h / 2, o = g + 3 * h / 4, p = g + h, q = p, r = g + 1 * h / 2, s = g + 1 * h / 4, t = g, u = j, v = j - k / 3, w = j - 2 * k / 3, x = j - k, z = 0; e > z; z++)
                if (z % 2) {
                    var A = (z - 1) * f,
                        B = (z - 1) * f + f + h / 8,
                        C = B,
                        D = (z - 1) * f + f;
                    l.to(c, i, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: q + "%",
                                top: A + "%",
                                rotation: x
                            }, {
                                left: r + "%",
                                top: B + "%",
                                rotation: w
                            }, {
                                left: s + "%",
                                top: C + "%",
                                rotation: v
                            }, {
                                left: t + "%",
                                top: D + "%",
                                rotation: u
                            }]
                        },
                        ease: Quad.easeInOut
                    })
                } else {
                    var E = (z - 1) * f,
                        F = (z - 1) * f + f + h / 8,
                        G = F,
                        H = (z - 1) * f + f;
                    0 === z ? l.to(c, i, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: m + "%",
                                top: E + "%",
                                rotation: u,
                                opacity: 0
                            }, {
                                left: n + "%",
                                top: F + "%",
                                rotation: v,
                                opacity: .3
                            }, {
                                left: o + "%",
                                top: G + "%",
                                rotation: w,
                                opacity: .6
                            }, {
                                left: p + "%",
                                top: H + "%",
                                rotation: x,
                                opacity: 1
                            }]
                        },
                        ease: Quad.easeInOut
                    }) : z == e - 1 ? l.to(c, i, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: m + "%",
                                top: E + "%",
                                rotation: u,
                                opacity: 1
                            }, {
                                left: n + "%",
                                top: F + "%",
                                rotation: v,
                                opacity: .6
                            }, {
                                left: o + "%",
                                top: G + "%",
                                rotation: w,
                                opacity: .3
                            }, {
                                left: p + "%",
                                top: H + "%",
                                rotation: x,
                                opacity: 0
                            }]
                        },
                        ease: Quad.easeInOut,
                        onComplete: function() {
                            c.remove()
                        }
                    }) : l.to(c, i, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: m + "%",
                                top: E + "%",
                                rotation: u
                            }, {
                                left: n + "%",
                                top: F + "%",
                                rotation: v
                            }, {
                                left: o + "%",
                                top: G + "%",
                                rotation: w
                            }, {
                                left: p + "%",
                                top: H + "%",
                                rotation: x
                            }]
                        },
                        ease: Quad.easeInOut
                    })
                }
            var I = Math.floor(5e3 * Math.random()) + 7e3;
            setTimeout(function() {
                a.genererFeuille()
            }, I)
        }
    }, C.creation = {
        $logoK: null,
        timeOut1: null,
        timeOut2: null,
        timeOut3: null,
        timeOut4: null,
        timeOut5: null,
        init: function() {
            var a = this;
            a.$logoK = $(document.getElementById("logoK")), null !== a.timeOut1 && (clearTimeout(a.timeOut1), clearTimeout(a.timeOut2), clearTimeout(a.timeOut3), clearTimeout(a.timeOut4), clearTimeout(a.timeOut5), a.timeOut1 = a.timeOut2 = a.timeOut3 = a.timeOut4 = a.timeOut5 = null), y.preload.loaderImg("creation", null, function() {
                a.animerLogo(), y.masquerLoader()
            })
        },
        animerLogo: function() {
            var a = this;
            if ("expertiseCreation" != y.idPage) return !1;
            var b = 1200,
                c = Raphael("logoK", 395, 700),
                d = {
                    b1t1: null,
                    b1t2: null,
                    b1t3: null,
                    b1t4: null,
                    b2t1: null,
                    b2t2: null,
                    b2t3: null,
                    b3t1: null,
                    b3t2: null,
                    b4t1: null,
                    b4t2: null,
                    b4t3: null,
                    b4t4: null
                };
            d.b1t1 = c.path("M 141.97 117.68 L 141.97 117.68"), d.b1t2 = c.path("M 83.52 216.67 L 83.52 216.67"), d.b1t3 = c.path("M 183.12 589.18 L 183.12 589.18"), d.b1t4 = c.path("M 215.31 453.959 L 215.31 453.959"), d.b2t1 = c.path("M 113.11 498.58 L 113.11 498.58"), d.b2t2 = c.path("M 274.72 210.28 L 274.72 210.28"), d.b2t3 = c.path("M 340.63 183.11 L 340.63 183.11"), d.b3t1 = c.path("M 303.19 165 L 303.19 165"), d.b3t2 = c.path("M 346.77 165.46 L 346.77 165.46"), d.b4t1 = c.path("M 214.28 356.93 L 214.28 356.93"), d.b4t2 = c.path("M 368 333.53 L 368 333.53"), d.b4t3 = c.path("M 263.49 354.69 L 263.49 354.69"), d.b4t4 = c.path("M 372.53 699 L 372.53 699");
            var e = c.set();
            for (var f in d) e.push(d[f]);
            e.attr({
                fill: "none",
                stroke: "#B8A588",
                "stroke-width": 1,
                "stroke-linecap": "round",
                opacity: .5
            });
            var g = Raphael.animation({
                path: "M 141.97 468.379 L 141.97 117.68"
            }, 500, "easeInOut"),
                h = Raphael.animation({
                    path: "M 83.52 216.67 L 225.31 0"
                }, 500, "easeInOut"),
                i = Raphael.animation({
                    path: "M 183.12 589.18 L 183.12 38.06"
                }, 500, "easeInOut"),
                j = Raphael.animation({
                    path: "M 215.31 453.959 L 56.79 453.959"
                }, 500, "easeInOut"),
                k = Raphael.animation({
                    path: "M 113.11 498.58 L 304.91 169.39"
                }, 500, "easeInOut"),
                l = Raphael.animation({
                    path: "M 339.3 210.28 L 274.72 210.28"
                }, 200, "easeInOut"),
                m = Raphael.animation({
                    path: "M 174.44 479.36 L 340.63 183.11"
                }, 500, "easeInOut"),
                n = Raphael.animation({
                    path: "M 214.28 355.049 L 303.19 165"
                }, 500, "easeIn"),
                o = Raphael.animation({
                    path: "M 260.15 354.19 L 346.77 165.46"
                }, 500, "easeIn"),
                p = Raphael.animation({
                    path: "M 394.75 669.39 L 214.28 356.93"
                }, 500, "easeOut"),
                q = Raphael.animation({
                    path: "M 0 388.28 L 368 333.53"
                }, 500, "easeInOut"),
                r = Raphael.animation({
                    path: "M 379.44 558.98 L 263.49 354.69"
                }, 500, "easeOut"),
                s = Raphael.animation({
                    path: "M 372.53 699 L 372.53 401.57"
                }, 500, "easeInOut");
            d.b1t1.animate(g.delay(b)), d.b1t2.animate(h.delay(b + 200)), d.b1t3.animate(i.delay(b + 600)), d.b1t4.animate(j.delay(b + 400)), d.b2t1.animate(k.delay(b + 900)), d.b2t2.animate(l.delay(b + 1200)), d.b2t3.animate(m.delay(b + 1300)), d.b3t1.animate(n.delay(b + 1900)), d.b3t2.animate(o.delay(b + 2100)), d.b4t1.animate(p.delay(b + 2400)), d.b4t2.animate(q.delay(b + 1700)), d.b4t3.animate(r.delay(b + 2600)), d.b4t4.animate(s.delay(b + 2900));
            var t = {
                b1: null,
                b2: null,
                b3: null,
                b4: null
            };
            t.b1 = c.path("M184.85,71c0,0-45.63,77.39-39.7,72.1c5.94-5.28,37.42-54.31,38.33-49.03c0.91,5.29-37.41,55.76-38.33,63.46 c-0.91,7.69,43.35-53.36,38.33-40.38s-39.69,57.68-39.69,57.68s47.9-53.84,41.06-38.94c-6.85,14.91-52.47,73.07-42.43,62.01 c10.03-11.05,44.25-46.62,41.06-36.05c-3.2,10.58-57.03,58.65-39.69,51.92c17.33-6.73,46.53-41.34,39.69-28.84 c-6.85,12.49-50.64,29.28-39.69,24.47c10.94-4.8,52.01-28.32,41.06-11.5c-10.95,16.83-55.66,40.34-42.43,31.69 s54.29-27.84,41.06-7.17c-13.23,20.67-55.21,37.46-43.8,28.8c11.41-8.65,50.19-48.07,42.43-33.16 c-7.76,14.9-50.64,52.39-38.32,43.26c12.31-9.14,50.18-46.15,38.32-28.84c-11.86,17.3-64.79,71.62-41.06,51.91 c23.72-19.71,54.75-49.03,45.17-33.17c-9.59,15.87-54.75,53.36-41.07,47.59c13.69-5.77,43.8-42.78,38.33-31.72 c-5.48,11.05-57.49,69.7-41.06,57.68c16.42-12.021,52.92-53.36,42.43-31.73c-10.5,21.64-55.21,53.36-39.7,47.59 c15.52-5.77,43.8-40.38,36.96-25.95c-6.84,14.42-44.71,49.03-39.69,46.14c5.02-2.88,46.08-45.18,41.06-33.17 c-5.02,12.02-57.49,64.899-39.69,51.92c17.79-12.98,49.73-48.55,39.69-33.17c-10.04,15.38-53.84,55.28-36.96,46.149 c16.88-9.14,41.52-48.55,35.59-31.729c-5.93,16.83-48.36,57.69-35.59,51.92c12.78-5.77,38.78-49.03,34.22-33.17 c-4.56,15.86-54.29,61.05-34.22,49.03c20.08-12.021,42.89-27.4,27.38-12.98c-15.51,14.42-41.98,25-30.11,25.96 c9.46,0.771,16.6-9.479,16.55-9.51c-0.01,0-0.48,0.64-1.5,2.3c-5.02,8.17-16.42,21.63-16.42,21.63"), $b1 = t.b1.node, $b1.id = "b1", $b1.style.display = "none", t.b2 = c.path("M280.92,219.08c0,0,59.811-6.74,52.45-2.89c-7.36,3.85-55.21,8.67-57.97,11.56c-2.761,2.89,48.31,1.45,48.31,1.45 s-51.07,4.33-53.83,7.22c-2.76,2.89,51.07,1.45,51.07,1.45s-57.97,10.12-60.73,10.12c-2.76,0,59.811-3.86,51.07,2.89 c-8.74,6.74-56.13,3.37-59.35,10.11c-3.221,6.75,55.21-2.41,49.689,1.45c-5.52,3.85-54.75,9.63-57.97,13.01 c-3.22,3.37,73.609-10.12,49.689-1.45c-23.93,8.67-57.51,11.56-57.97,14.45c-0.46,2.9,59.351-5.29,51.061-2.89 c-8.28,2.41-59.351,13.01-59.351,13.01s61.66-8.19,52.45-1.44c-9.2,6.74-56.13,5.78-55.21,10.11c0.92,4.34,47.39,0,42.79,7.23 c-4.601,7.23-52.45,0.96-49.69,7.23c2.76,6.26,44.169,4.33,44.169,4.33s-51.53,6.75-53.83,11.56c-2.3,4.82,63.95-2.4,44.17,4.34 c-19.78,6.75-55.67,1.45-51.07,7.23c4.6,5.78,46.47,1.44,42.79,4.33c-3.68,2.89-60.27,11.57-52.45,14.46s57.51-9.64,44.17-1.45 c-13.35,8.19-56.13,4.82-52.45,8.67c3.68,3.86,52.91,2.41,41.4,5.78c-11.5,3.38-67.17,0.97-51.06,4.34 c16.1,3.37,53.82,4.82,45.54,7.23c-8.28,2.41-48.3,0.479-48.3,1.439c0,0.971,58.891,13.011,49.68,14.45 c-9.2,1.45-50.6-8.189-53.83-7.22c-3.22,0.96,43.71,12.52,37.27,15.899c-6.44,3.37-32.66-5.3-40.03-4.34 c-7.36,0.96,40.49,12.53,34.51,14.45c-5.98,1.93-53.83-13.49-48.31-5.78s50.15,13.49,44.17,15.9s-52.45-12.04-55.21-2.89 c-2.76,9.149,54.75,6.26,46.93,10.119c-7.82,3.851-46.01-3.38-49.69,1.44c0,0,52.45,3.37,42.79,13.01"), $b2 = t.b2.node, $b2.id = "b2", $b2.style.display = "none", t.b3 = c.path("M265.7,337.96c0,0-50.16,9-44.23,5.02c5.919-3.98,46.1-10.63,48.2-13.5c2.11-2.86-41.07,0.73-41.07,0.73s42.94-6.34,45.051-9.2 c2.1-2.87-43.42,0.84-43.42,0.84s48.329-12.13,50.67-12.25c2.34-0.12-50.4,6.26-43.54-0.53c6.859-6.78,47.319-5.64,49.5-12.18 c2.17-6.55-46.62,4.68-42.25,0.78c4.359-3.9,45.63-11.53,48.09-14.87c2.45-3.35-61.59,12.8-42.01,3.53 c19.569-9.28,47.81-13.48,47.97-16.25c0.149-2.76-49.891,7.61-43.07,4.96c6.83-2.64,49.26-14.93,49.26-14.93 s-51.6,10.46-44.35,3.65s47.12-7.93,45.98-12.01c-1.131-4.08-40.181,2.06-36.86-5c3.31-7.07,44.39-3.2,41.53-9.03 c-2.851-5.83-37.801-2.2-37.801-2.2s43.141-8.64,44.7-13.32c1.561-4.67-54.03,5.07-37.8-2.2"), $b3 = t.b3.node, $b3.id = "b3", $b3.style.display = "none", t.b4 = c.path("M266.68,355c0,0-55.03,8-53.65,8.87c1.37,0.86,53.65-2,53.65-2s-46.78,9.53-44.02,8.51c2.75-1.02,54.57-7.989,48.149-3.17 c-6.42,4.82-51.359,13.36-41.27,15.271c10.09,1.92,65.12-16.16,46.77-7.23c-18.34,8.92-54.109,23.08-38.52,20.66 c15.59-2.41,65.58-17.55,49.53-8.71c-16.051,8.84-47.24,23.74-41.271,22.14c5.96-1.59,51.36-20.229,42.65-9.829 c-8.72,10.399-56.87,22.729-34.4,20.52s56.87-27.77,38.521-13.8c-18.34,13.96-48.61,32.95-34.391,26.01 c14.221-6.94,58.24-23.24,42.65-15.33s-41.73,28.57-31.64,27.28c10.079-1.29,46.77-26.93,35.77-15.07 c-11.01,11.86-47.24,29.23-35.77,27.43c11.46-1.8,44.02-25.449,44.02-16.75c0,8.7-45.86,24.61-33.02,24.591 c12.84-0.03,44.489-20.44,37.149-8.261c-7.34,12.181-57.33,31.45-34.399,28.761c22.93-2.69,48.619-20.591,44.029-14.011 c-4.59,6.591-41.729,26.29-30.27,24.49c11.47-1.8,57.79-21.85,38.53-11.06c-19.271,10.8-48.16,36.6-31.65,28.66 c16.51-7.94,44.49-33.71,37.15-21.99c-7.341,11.72-45.86,39.71-33.021,32.819c12.84-6.88,54.12-34.069,41.271-20.77 c-12.841,13.3-51.36,33.51-35.771,28.81c15.6-4.699,57.33-29.149,39.9-15.22c-17.431,13.93-41.271,28.09-33.021,25.96 c8.26-2.14,55.95-34.6,37.15-17.87c-18.801,16.721-44.94,34.181-31.641,30.021c13.301-4.15,40.351-33.55,37.141-21.99 c-3.21,11.57-36.69,26.56-30.271,29.98c6.431,3.42,38.53-33.95,31.65-17.66c-6.88,16.279-42.65,39.59-28.89,32.67 c13.75-6.92,36.229-23.79,30.26-13.49c-5.96,10.29-34.851,27.85-23.38,24.22c11.46-3.63,23.38-13.689,20.63-7.64 c-2.75,6.06-22.01,17.31-15.13,15.68s21.55-9.05,16.51-4.739c-5.05,4.31-20.64,21.38-13.76,17c6.88-4.381,12.84-11.011,12.38-5.961 c-0.46,5.061-7.33,14.011-8.25,16.801c-0.92,2.779,16.51-3.82,19.26,3.399"), $b4 = t.b4.node, $b4.id = "b4", $b4.style.display = "none";
            var u = c.set();
            for (var f in t) u.push(t[f]);
            u.attr({
                fill: "none",
                "stroke-width": 4,
                "stroke-linecap": "round"
            }), t.b1.attr({
                stroke: "#DED4C5"
            }), t.b2.attr({
                stroke: "#CABDA6"
            }), t.b3.attr({
                stroke: "#DED3C0"
            }), t.b4.attr({
                stroke: "#DED4C5"
            });
            var v = b + 3100;
            a.timeOut1 = setTimeout(function() {
                "expertiseCreation" == y.idPage && a.animerFeutre($(document.getElementById("b1")), 1.5)
            }, v), a.timeOut2 = setTimeout(function() {
                "expertiseCreation" == y.idPage && a.animerFeutre($(document.getElementById("b2")), 1.5)
            }, v + 1300), a.timeOut3 = setTimeout(function() {
                "expertiseCreation" == y.idPage && a.animerFeutre($(document.getElementById("b3")), 1)
            }, v + 2600), a.timeOut4 = setTimeout(function() {
                "expertiseCreation" == y.idPage && a.animerFeutre($(document.getElementById("b4")), 1.5)
            }, v + 3400), a.timeOut5 = setTimeout(function() {
                "expertiseCreation" == y.idPage && a.initSVG()
            }, v + 6500);
            var w = new TimelineLite;
            w.fromTo(a.$logoK.find(".fleche1"), .5, {
                left: 172,
                top: 190,
                opacity: 0,
                rotation: -30
            }, {
                left: 202,
                top: 200,
                opacity: 1,
                rotation: 0,
                ease: Expo.easeOut
            }, "+=2.5").fromTo(a.$logoK.find(".cercle1"), .5, {
                opacity: 0,
                rotation: 180
            }, {
                opacity: 1,
                rotation: 0,
                ease: Expo.easeOut
            }, "+=0.3").fromTo(a.$logoK.find(".cercle2"), .5, {
                opacity: 0,
                rotation: -180
            }, {
                opacity: 1,
                rotation: 0,
                ease: Expo.easeOut
            }, "-=0.3").fromTo(a.$logoK.find(".fleche2"), .5, {
                left: 361,
                top: 137,
                opacity: 0,
                rotation: -30
            }, {
                left: 351,
                top: 147,
                opacity: 1,
                rotation: 0,
                ease: Expo.easeOut
            }, "-=0.2").fromTo(a.$logoK.find(".fleche3"), .5, {
                left: 228,
                top: 384,
                opacity: 0,
                rotation: 30
            }, {
                left: 228,
                top: 399,
                opacity: 1,
                rotation: 0,
                ease: Expo.easeOut
            }, "-=0.3")
        },
        animerFeutre: function(a, b) {
            if ("expertiseCreation" != y.idPage) return !1;
            a[0].style.display = "block";
            var c = a[0],
                d = c.getTotalLength();
            c.style.transition = c.style.WebkitTransition = c.style.MozTransition = "none", c.style.strokeDasharray = d + " " + d, c.style.strokeDashoffset = d, c.getBoundingClientRect(), c.style.transition = c.style.WebkitTransition = c.style.MozTransition = "stroke-dashoffset " + String(b) + "s ease-in-out", c.style.strokeDashoffset = "0"
        },
        initSVG: function() {
            var a = this;
            $svg = a.$logoK.find("svg"), TweenLite.to(a.$logoK.find(".anim"), 1.5, {
                opacity: 0,
                ease: Quad.easeOut
            }), TweenLite.to(a.$logoK.find("svg"), 1.5, {
                opacity: 0,
                ease: Quad.easeOut,
                onComplete: function() {
                    $svg.remove(), a.animerLogo()
                }
            })
        }
    }, C.developpement = {
        $texte: null,
        posTexte: null,
        code: null,
        test: 0,
        init: function() {
            var a = this;
            a.$code = $(document.getElementById("expertiseDeveloppement")).find(".code"), a.code = a.$code[0].innerHTML, y.preload.loaderImg("developpement", null, function() {
                a.initDefilementCaracteres(), y.masquerLoader()
            })
        },
        initDefilementCaracteres: function() {
            var a = this;
            a.posTexte = 0, a.$code[0].innerHTML = "", a.$code[0].style.bottom = v / 2 + 80 + "px", a.$code[0].style.display = "block", setTimeout(function() {
                a.defilerCaracteres()
            }, 800)
        },
        defilerCaracteres: function() {
            var a = this;
            if ("expertiseDeveloppement" != y.idPage) return !1;
            var b = Math.floor(35 * Math.random()) + 5;
            if (a.posTexte += b, a.$code[0].innerHTML = "<pre>" + a.code.substring(0, a.posTexte) + "</pre>", a.$code[0].style.bottom = v / 2 + 50 - a.$code.height() / 2 > 50 ? v / 2 + 50 - a.$code.height() / 2 + "px" : "50px", a.posTexte > a.code.length) TweenLite.to(a.$code, 1, {
                opacity: 0,
                ease: Quad.easeOut,
                delay: 2,
                onComplete: function() {
                    a.$code[0].style.display = "none", a.$code.css("opacity", .3), a.initDefilementCaracteres()
                }
            });
            else {
                var c = Math.floor(50 * Math.random()) + 20;
                setTimeout(function() {
                    a.defilerCaracteres()
                }, c)
            }
        }
    }, C.emarketing = {
        $partie: null,
        $lampeSombre: null,
        $lampeClair: null,
        tabTimeout: new Array(100, 800, 100, 150, 100, 600, 100, 150, 100, 300, 100, 400, 100, 100, 100, 100, 100, 100, 100),
        tabOpacite: new Array(.1, 0, .2, 0, .2, 0, .3, 0, .3, 0, .4, 0, .5, 0, .5, 0, .5, 0, 1),
        posTab: null,
        init: function() {
            var a = this;
            a.posTab = 0, a.$partie = $(".partie"), a.$lampeSombre = a.$partie.find(".animation .sombre"), a.$lampeClair = a.$partie.find(".animation .clair"), y.preload.loaderImg("emarketing", null, function() {
                setTimeout(function() {
                    a.allumerLumiere()
                }, 600), y.masquerLoader()
            })
        },
        allumerLumiere: function() {
            var a = this;
            return "expertiseEmarketing" != y.idPage ? !1 : (a.posTab % 2 ? (TweenLite.to(a.$lampeSombre, .05, {
                opacity: 1,
                ease: Cubic.easeOut
            }), TweenLite.to(a.$lampeClair, .05, {
                opacity: 0,
                ease: Cubic.easeOut
            })) : (TweenLite.to(a.$lampeSombre, .1, {
                opacity: 0,
                ease: Cubic.easeOut
            }), TweenLite.to(a.$lampeClair, .1, {
                opacity: a.tabOpacite[a.posTab],
                ease: Cubic.easeOut
            }), a.posTab == a.tabTimeout.length - 1 && (a.$partie[0].className = "partie expertise")), setTimeout(function() {
                return a.posTab == a.tabTimeout.length ? !1 : void a.allumerLumiere()
            }, a.tabTimeout[a.posTab]), void a.posTab++)
        }
    }, C.services = {
        $animation: null,
        $nuagesVolants: null,
        $imgK: null,
        init: function() {
            var a = this;
            a.$animation = $(".animation"), a.$nuagesVolants = $(".nuagesVolants"), a.$imgK = a.$animation.find(".logoK img"), y.preload.loaderImg("services", null, function() {
                a.bougerK(), a.genererTrait(), a.genererNuage(), y.masquerLoader()
            })
        },
        bougerK: function() {
            var a = this;
            a.$imgK[0].style.marginLeft = Math.round(4 * Math.random()) - 2 + "px", a.$imgK[0].style.marginTop = Math.round(4 * Math.random()) - 2 + "px", setTimeout(function() {
                a.bougerK()
            }, 100)
        },
        genererTrait: function() {
            var a = this;
            if ("expertiseServices" != y.idPage) return !1;
            var b = v / (Math.floor(500 * Math.random()) + 700),
                c = Math.floor(200 * Math.random()) + 50,
                d = $("<div>");
            d[0].className = "trait", d[0].style.left = Math.floor(100 * Math.random()) + "%", d[0].style.height = c + "px", d[0].style.marginTop = -c + "px", a.$nuagesVolants.append(d), TweenLite.to(d, b, {
                top: "100%",
                marginTop: 0,
                ease: Linear.easeOut,
                onComplete: function() {
                    d.remove()
                }
            });
            var e = Math.floor(200 * Math.random()) + 200;
            setTimeout(function() {
                a.genererTrait()
            }, e)
        },
        genererNuage: function() {
            var a = this;
            if ("expertiseServices" != y.idPage) return !1;
            var b = Math.round(1 * Math.random()) + 1,
                c = Math.floor(222 * Math.random()) + 50,
                d = Math.floor(171 * c / 272),
                e = 2 * Math.random() + v / 300,
                f = $("<div>");
            f[0].className = "nuage";
            var g = $("<img>");
            g[0].src = _racineWeb + "images/divers/expertise/expertise_services_nuage_" + b + ".png", f.append(g), f[0].style.left = Math.floor(100 * Math.random()) + "%", f[0].style.width = c + "px", f[0].style.height = d + "px", f[0].style.marginLeft = -c / 2 + "px", f[0].style.marginTop = -d / 2 + "px", f[0].style.zIndex = Math.round(1 * Math.random()) + 2, a.$nuagesVolants.append(f), TweenLite.to(g, e, {
                width: "70%",
                ease: Linear.easeOut
            }), TweenLite.to(f, e, {
                top: "116%",
                ease: Linear.easeOut,
                onComplete: function() {
                    f.remove()
                }
            });
            var h = Math.round(2e3 * Math.random()) + Math.round(v / 400 * 1e3);
            setTimeout(function() {
                a.genererNuage()
            }, h)
        }
    };
    var D = {
        $form: null,
        btnClicke: null,
        init: function() {
            var a = this;
            a.$form = $(".form form"), a.btnClicke = !1, a.resize(), b.on("mouseenter", ".btnCentrer, .btnZoomOut, .btnZoomIn, .btnModeSatellite, .btnModePlan, .rotationCarte", function() {
                TweenLite.to($(this).find("> div"), .5, {
                    color: n,
                    backgroundColor: l,
                    ease: Cubic.easeOut
                })
            }).on("mouseleave", ".btnCentrer, .btnZoomOut, .btnZoomIn, .btnModeSatellite, .btnModePlan, .rotationCarte", function() {
                TweenLite.to($(this).find("> div"), .5, {
                    color: k,
                    backgroundColor: n,
                    ease: Cubic.easeOut
                })
            }), a.googleMaps.init(), Modernizr.history && $(".form a.fermerPetit").address(), Modernizr.history && $.address.pathNames()[2] ? a.afficherMasquerForm("afficher") : !Modernizr.history && window.location.pathname.indexOf("formulaire") > -1 && a.afficherMasquerForm("afficher"), a.$form.find("a.btnCube").on("click", function() {
                return a.envoyerForm(), !1
            }), y.preload.loaderImg("contact", null, function() {
                y.masquerLoader()
            })
        },
        afficherMasquerForm: function(a) {
            var b = 90,
                c = 0;
            "masquer" == a && (b = 0, c = -90), Modernizr.csstransforms3d ? (TweenLite.to($(".accueil"), .5, {
                rotationY: b,
                ease: Quart.easeOut
            }), TweenLite.to($(".form"), .5, {
                rotationY: c,
                ease: Quart.easeOut,
                onComplete: function() {
                    y.autoriserTransPage()
                }
            })) : TweenLite.to($(".form"), .5, {
                left: 0,
                ease: Quart.easeOut,
                onComplete: function() {
                    y.autoriserTransPage()
                }
            })
        },
        envoyerForm: function() {
            var a = this;
            if (a.btnClicke) return !1;
            a.btnClicke = !0, a.$form.find(".retour")[0].innerHTML = "", a.$form.find(".loader")[0].style.display = "block";
            var b = a.$form.serialize(),
                c = a.$form[0].action;
            $.post(c, b, function(b) {
                a.$form.find(".loader")[0].style.display = "none", a.btnClicke = !1, a.$form.find(".retour")[0].innerHTML = b.retour, b.etat === !0 && ($(document.getElementById("form_nom"))[0].value = "", $(document.getElementById("form_societe"))[0].value = "", $(document.getElementById("form_email"))[0].value = "", $(document.getElementById("form_sujet"))[0].value = "", $(document.getElementById("form_message"))[0].value = "")
            }, "json")
        },
        resize: function() {
            var a = this;
            $(document.getElementById("plan"))[0].style.width = t + 750 + "px", $contenus = $(".contenu"), $fonds = $contenus.prev(".fond");
            for (var b = 0; b < $contenus.length; b++) {
                var c = (v - $($contenus[b]).height()) / 3;
                $contenus[b].style.top = c + "px", $fonds[b].style.top = c - 200 + "px"
            }
            a.googleMaps.resize()
        }
    };
    D.googleMaps = {
        posGoogleMapsPerso: null,
        styles: null,
        rotationCarteDeg: null,
        textes: {
            fr: {
                centrer: "Centrer",
                satellite: "Satellite",
                plan: "Plan"
            },
            en: {
                centrer: "Center",
                satellite: "Satellite",
                plan: "Map"
            }
        },
        infosBulleOuverte: !1,
        init: function() {
            var a = this;
            a.rotationCarteDeg = 0, a.posGoogleMapsPerso = new google.maps.LatLng(45.7711921, 4.8378021), a.styles = [{
                featureType: "all",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }]
            }];
            var b = {
                zoom: 15,
                center: a.posGoogleMapsPerso,
                scrollwheel: !1,
                disableDefaultUI: !0,
                mapTypeId: "GoogleMapsPerso"
            }, c = new google.maps.Map(document.getElementById("conteneurPlan"), b),
                d = new google.maps.StyledMapType(a.styles);
            c.mapTypes.set("GoogleMapsPerso", d), c.setMapTypeId("GoogleMapsPerso");
            var e = new google.maps.MarkerImage(_racineWeb + "images/logos/akaru_mini_google_maps.png", new google.maps.Size(28, 66), new google.maps.Point(0, 0), new google.maps.Point(28, 66)),
                f = new google.maps.MarkerImage(_racineWeb + "images/logos/akaru_mini_google_maps_ombre.png", new google.maps.Size(71, 36), new google.maps.Point(0, 0), new google.maps.Point(67, 36)),
                g = new google.maps.Marker({
                    position: new google.maps.LatLng(45.7711921, 4.8378021),
                    map: c,
                    icon: e,
                    shadow: f
                }),
                h = document.createElement("div");
            h.id = "infobox", h.innerHTML = '<div class="bulleContact"><a href="#" class="fermer"><img src="' + _racineWeb + 'images/btns/google_maps_fermer_infobulle.png" alt="Agence communication digitale Lyon - Akaru" /></a><img src="' + _racineWeb + 'images/logos/akaru_google_maps.png" alt="Agence communication digitale Lyon - Akaru" /><p>9 Quai André Lassagne <br />69001 Lyon <br />France</p><p>+33 (0)4 82 33 85 10</p><div class="fleche"></div></div>';
            var i = new InfoBox({
                content: h,
                pixelOffset: new google.maps.Size(-15, -235),
                closeBoxURL: ""
            });
            google.maps.event.addListener(g, "click", function() {
                a.ouvrirInfos(g, i, c)
            }), a.ouvrirInfos(g, i, c);
            var j = $(i.content_.firstChild);
            j.find("a.fermer").on("mouseenter", function() {
                TweenLite.to($(this).find("img"), .3, {
                    rotation: 90,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).find("img"), .3, {
                    rotation: 0,
                    ease: Expo.easeOut
                })
            }).on("click", function() {
                return $(this).trigger("mouseleave"), a.fermerInfos(i, j), !1
            }); {
                var k = document.createElement("DIV");
                new a.centrer(k, c)
            }
            k.index = 1, c.controls[google.maps.ControlPosition.TOP_LEFT].push(k); {
                var l = document.createElement("DIV");
                new a.modePlan(l, c)
            }
            l.index = 1, c.controls[google.maps.ControlPosition.TOP_LEFT].push(l); {
                var m = document.createElement("DIV");
                new a.modeSatellite(m, c)
            }
            m.index = 1, c.controls[google.maps.ControlPosition.TOP_LEFT].push(m); {
                var n = document.createElement("DIV");
                new a.zoomOut(n, c)
            }
            n.index = 1, c.controls[google.maps.ControlPosition.TOP_LEFT].push(n); {
                var o = document.createElement("DIV");
                new a.zoomIn(o, c)
            }
            o.index = 1, c.controls[google.maps.ControlPosition.TOP_LEFT].push(o); {
                var p = document.createElement("DIV");
                new a.rotationCarte(p, c)
            }
            p.index = 1, c.controls[google.maps.ControlPosition.TOP_LEFT].push(p)
        },
        ouvrirInfos: function(a, b, c) {
            var d = this;
            if (d.infosBulleOuverte) return !1;
            d.infosBulleOuverte = !0;
            var e = $(b.content_.firstChild);
            b.open(c, a), TweenLite.fromTo(e, .5, {
                top: -50,
                opacity: 0
            }, {
                top: 0,
                opacity: 1,
                ease: Expo.easeOut
            })
        },
        fermerInfos: function(a, b) {
            var c = this;
            c.infosBulleOuverte = !1, TweenLite.to(b, .5, {
                top: -50,
                opacity: 0,
                ease: Expo.easeOut,
                onComplete: function() {
                    a.close()
                }
            })
        },
        centrer: function(a, b) {
            a.className = "btnCentrer", a.style.margin = "10px 3px 0px 760px";
            var c = document.createElement("DIV");
            c.style.height = "26px", c.style.backgroundColor = n, c.style.color = "#FFF", c.style.cursor = "pointer", c.style.textAlign = "center", a.appendChild(c);
            var d = document.createElement("DIV");
            d.style.height = "26px", d.style.padding = "0px 10px 0px 10px", d.innerHTML = D.googleMaps.textes[_lg].centrer, c.appendChild(d), google.maps.event.addDomListener(c, "click", function() {
                b.setCenter(D.googleMaps.posGoogleMapsPerso), b.setZoom(15), D.googleMaps.rotationCarteDeg = 0, $(".rotationCarte")[0].style.display = "none"
            })
        },
        zoomOut: function(a, b) {
            a.className = "btnZoomOut", a.style.margin = "10px 3px 0px 0px";
            var c = document.createElement("DIV");
            c.style.width = "26px", c.style.height = "26px", c.style.backgroundColor = n, c.style.backgroundImage = "url(" + _racineWeb + "images/btns/google_maps_moins.png)", c.style.cursor = "pointer", c.style.textAlign = "center", a.appendChild(c);
            var d = document.createElement("DIV");
            d.style.fontSize = "14px", d.style.lineHeight = "26px", d.style.fontFamily = "Georgia", c.appendChild(d);
            var d = document.createElement("DIV");
            c.appendChild(d), google.maps.event.addDomListener(c, "click", function() {
                b.setZoom(b.getZoom() - 1), 0 === b.getTilt() && (D.googleMaps.rotationCarteDeg = 0, $(".rotationCarte")[0].style.display = "none")
            })
        },
        zoomIn: function(a, b) {
            a.className = "btnZoomIn", a.style.margin = "10px 3px 0px 0px";
            var c = document.createElement("DIV");
            c.style.width = "26px", c.style.height = "26px", c.style.backgroundColor = n, c.style.backgroundImage = "url(" + _racineWeb + "images/btns/google_maps_plus.png)", c.style.cursor = "pointer", c.style.textAlign = "center", a.appendChild(c);
            var d = document.createElement("DIV");
            d.style.fontSize = "14px", d.style.lineHeight = "26px", d.style.fontFamily = "Georgia", c.appendChild(d);
            var d = document.createElement("DIV");
            c.appendChild(d), google.maps.event.addDomListener(c, "click", function() {
                b.setZoom(b.getZoom() + 1), 0 !== b.getTilt() && ($(".rotationCarte")[0].style.display = "block")
            })
        },
        modeSatellite: function(a, b) {
            a.className = "btnModeSatellite", a.style.padding = "10px 3px 0px 0px";
            var c = document.createElement("DIV");
            c.style.height = "26px", c.style.backgroundColor = n, c.style.color = "#FFF", c.style.cursor = "pointer", c.style.textAlign = "center", a.appendChild(c);
            var d = document.createElement("DIV");
            d.style.padding = "0px 10px 0px 10px", d.innerHTML = D.googleMaps.textes[_lg].satellite, c.appendChild(d), google.maps.event.addDomListener(c, "click", function() {
                b.setMapTypeId(google.maps.MapTypeId.HYBRID), $(".btnModeSatellite")[0].style.display = "none", $(".btnModePlan")[0].style.display = "block", 0 !== b.getTilt() && ($(".rotationCarte")[0].style.display = "block")
            })
        },
        modePlan: function(a, b) {
            a.className = "btnModePlan", a.style.padding = "10px 3px 0px 0px", a.style.display = "none";
            var c = document.createElement("DIV");
            c.style.height = "26px", c.style.backgroundColor = n, c.style.color = "#FFF", c.style.cursor = "pointer", c.style.textAlign = "center", a.appendChild(c);
            var d = document.createElement("DIV");
            d.style.padding = "0px 10px 0px 10px", d.innerHTML = D.googleMaps.textes[_lg].plan, c.appendChild(d), google.maps.event.addDomListener(c, "click", function() {
                b.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                var a = new google.maps.StyledMapType(D.googleMaps.styles);
                b.mapTypes.set("GoogleMapsPerso", a), b.setMapTypeId("GoogleMapsPerso"), $(".btnModePlan")[0].style.display = "none", $(".btnModeSatellite")[0].style.display = "block", D.googleMaps.rotationCarteDeg = 0, $(".rotationCarte")[0].style.display = "none"
            })
        },
        rotationCarte: function(a, b) {
            a.className = "rotationCarte", a.style.margin = "10px 3px 0px 0px", a.style.display = "none";
            var c = document.createElement("DIV");
            c.style.width = "26px", c.style.height = "26px", c.style.backgroundColor = n, c.style.backgroundImage = "url(" + _racineWeb + "images/btns/google_maps_rotation_carte.png)", c.style.color = "#FFF", c.style.cursor = "pointer", c.style.textAlign = "center", a.appendChild(c);
            var d = document.createElement("DIV");
            c.appendChild(d), google.maps.event.addDomListener(c, "click", function() {
                D.googleMaps.rotationCarteDeg += 90, b.setHeading(D.googleMaps.rotationCarteDeg)
            })
        },
        resize: function() {
            $(".btnCentrer > div").trigger("click")
        }
    }, D.projet = {
        $contactVotreProjet: null,
        $navEtapes: null,
        $formLivraison: null,
        idEtapeActive: null,
        transEtape: !1,
        tabVerifEtapes: ["etape1", "etape2", "etape3", "etape4", "etape5", "etape6"],
        posVerifEtapes: null,
        infos: null,
        btnClicke: null,
        formEnvoye: null,
        init: function() {
            var a = this;
            a.$contactVotreProjet = $(document.getElementById("contactVotreProjet")), a.$navEtapes = $(document.getElementById("contactVotreProjet")).find("nav"), a.$formLivraison = $(document.getElementById("form_livraison")), a.idEtapeActive = 1, a.posVerifEtapes = 0, a.infos = {
                types: "",
                besoins: "",
                livraison: "",
                prix: "",
                details: "",
                coords: {
                    nom: "",
                    societe: "",
                    email: "",
                    tel: ""
                }
            }, a.btnClicke = !1, a.formEnvoye = !1, $("ul.liste a").on("mouseenter", function() {
                "actif" != this.className && TweenLite.to(this, .5, {
                    color: p,
                    ease: Quart.easeOut
                })
            }).on("mouseleave", function() {
                var a = Modernizr.textshadow ? o : r;
                "actif" != this.className && TweenLite.to(this, .5, {
                    color: a,
                    ease: Quart.easeOut
                })
            }).on("click", function() {
                if ("ombre" == this.className) {
                    if ($(this).parents("ul.prix").length > 0 && $("ul.prix a.actif").length > 0) {
                        var b = $("ul.prix a.actif");
                        b[0].className = "ombre", b.trigger("mouseleave")
                    }
                    $(this).parents(".dates").length > 0 && (a.$formLivraison[0].value = ""), this.className = "actif", TweenLite.to(this, .5, {
                        color: n,
                        ease: Quart.easeOut
                    })
                } else this.className = "ombre", $(this).trigger("mouseenter");
                return !1
            }), "fr" == _lg && ($.datepicker.regional.fr = {
                closeText: "Fermer",
                prevText: "Précédent",
                nextText: "Suivant",
                currentText: "Aujourd'hui",
                monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
                dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
                dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
                weekHeader: "Sem.",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, $.datepicker.setDefaults($.datepicker.regional.fr)), a.$formLivraison.datepicker({
                minDate: new Date,
                onClose: function(a) {
                    a && ($(".dates .liste a")[0].className = "ombre", $(".dates .liste a").trigger("mouseleave"))
                }
            }), $("a.btnCube").on("click", function() {
                return a.verifEtape("suiv", $(this)), !1
            }), a.$navEtapes.find("a").on("click", function() {
                return "actif" != this.className ? !1 : (a.passerEtape("prec", $(this)), !1)
            }).on("mouseenter", function() {
                return "actif" != this.className ? !1 : void TweenLite.to($(this).prev("span"), .5, {
                    top: 20,
                    opacity: 1,
                    ease: Expo.easeOut
                })
            }).on("mouseleave", function() {
                TweenLite.to($(this).prev("span"), .5, {
                    top: 30,
                    opacity: 0,
                    ease: Expo.easeOut
                })
            }), $liensEtapes = a.$navEtapes.find("li");
            for (var b = 0; b < $liensEtapes.length; b++) {
                var c = $($liensEtapes[b]).find("span");
                c[0].style.marginLeft = -(c.width() + 10) / 2 + "px"
            }
            Modernizr.history && a.$contactVotreProjet.find("a.fermerPetit").address(), y.preload.loaderImg("projet", null, function() {
                a.resize(), y.masquerLoader()
            })
        },
        verifEtape: function(a, b) {
            var c = this,
                d = "envoyer" == a ? c.tabVerifEtapes[c.posVerifEtapes] : b.parent(".etape")[0].getAttribute("data-etape");
            if ("etape1" == d) {
                if (c.btnClicke) return !1;
                c.btnClicke = !0;
                var e = $('.etape[data-etape="etape1"]');
                e.find(".retour")[0].innerHTML = "", e.find(".loader")[0].style.display = "block";
                for (var f = "", g = e.find(".liste a.actif"), h = 0; h < g.length; h++) 0 === h ? f = g[h].innerHTML : f += ", " + g[h].innerHTML;
                var i = _racineWeb + "verif/contact/projet/etape-1/";
                $.post(i, {
                    Types: f
                }, function(d) {
                    e.find(".loader")[0].style.display = "none", d.etat === !0 ? "envoyer" == a ? (c.btnClicke = !1, c.infos.types = f, c.posVerifEtapes++, c.verifEtape("envoyer", b)) : c.passerEtape(a, b) : ("envoyer" == a && c.$navEtapes.find("li:nth-child(1) a").trigger("click"), e.find(".retour")[0].innerHTML = d.retour, c.btnClicke = !1)
                }, "json")
            } else if ("etape2" == d) {
                if (c.btnClicke) return !1;
                c.btnClicke = !0;
                var e = $('.etape[data-etape="etape2"]');
                e.find(".retour")[0].innerHTML = "", e.find(".loader")[0].style.display = "block";
                for (var j = "", k = e.find(".liste a.actif"), h = 0; h < k.length; h++) 0 === h ? j = k[h].innerHTML : j += ", " + k[h].innerHTML;
                var i = _racineWeb + "verif/contact/projet/etape-2/";
                $.post(i, {
                    Besoins: j
                }, function(d) {
                    e.find(".loader")[0].style.display = "none", d.etat === !0 ? "envoyer" == a ? (c.btnClicke = !1, c.infos.besoins = j, c.posVerifEtapes++, c.verifEtape("envoyer", b)) : c.passerEtape(a, b) : ("envoyer" == a && c.$navEtapes.find("li:nth-child(2) a").trigger("click"), e.find(".retour")[0].innerHTML = d.retour, c.btnClicke = !1)
                }, "json")
            } else if ("etape3" == d) {
                if (c.btnClicke) return !1;
                c.btnClicke = !0;
                var e = $('.etape[data-etape="etape3"]');
                e.find(".retour")[0].innerHTML = "", e.find(".loader")[0].style.display = "block";
                var l = c.$formLivraison[0].value,
                    m = e.find(".liste a.actif").length > 0 ? e.find(".liste a.actif")[0].innerHTML : "",
                    i = _racineWeb + "verif/contact/projet/etape-3/";
                $.post(i, {
                    Livraison: l,
                    Aucune: m
                }, function(d) {
                    e.find(".loader")[0].style.display = "none", d.etat === !0 ? "envoyer" == a ? (c.btnClicke = !1, c.infos.livraison = l ? l : m, c.posVerifEtapes++, c.verifEtape("envoyer", b)) : c.passerEtape(a, b) : (c.btnClicke = !1, "envoyer" == a && c.$navEtapes.find("li:nth-child(3) a").trigger("click"), e.find(".retour")[0].innerHTML = d.retour)
                }, "json")
            } else if ("etape4" == d) {
                if (c.btnClicke) return !1;
                c.btnClicke = !0;
                var e = $('.etape[data-etape="etape4"]');
                e.find(".retour")[0].innerHTML = "", e.find(".loader")[0].style.display = "block";
                for (var n = "", o = e.find(".liste a.actif"), p = o.length, h = 0; p > h; h++) 0 === h ? n = o[h].innerHTML : n += ", " + o[h].innerHTML;
                var i = _racineWeb + "verif/contact/projet/etape-4/";
                $.post(i, {
                    Prix: n,
                    NbPrix: p
                }, function(d) {
                    e.find(".loader")[0].style.display = "none", d.etat === !0 ? "envoyer" == a ? (c.btnClicke = !1, c.infos.prix = n, c.posVerifEtapes++, c.verifEtape("envoyer", b)) : c.passerEtape(a, b) : (c.btnClicke = !1, "envoyer" == a && c.$navEtapes.find("li:nth-child(4) a").trigger("click"), e.find(".retour")[0].innerHTML = d.retour)
                }, "json")
            } else if ("etape5" == d) {
                if (c.btnClicke) return !1;
                c.btnClicke = !0, "envoyer" == a ? (c.btnClicke = !1, c.infos.details = $(document.getElementById("form_details"))[0].value, c.posVerifEtapes++, c.verifEtape("envoyer", b)) : c.passerEtape(a, b)
            } else if ("etape6" == d) {
                if (c.btnClicke) return !1;
                c.btnClicke = !0, c.posVerifEtapes = 0;
                var e = $('.etape[data-etape="etape6"]');
                e.find(".retour")[0].innerHTML = "", e.find(".loader")[0].style.display = "block";
                var q = e.find("form").serialize(),
                    i = _racineWeb + "verif/contact/projet/etape-6/";
                $.post(i, q, function(d) {
                    e.find(".loader")[0].style.display = "none", d.etat === !0 ? (c.btnClicke = !1, c.infos.coords.nom = $(document.getElementById("form_nom"))[0].value, c.infos.coords.societe = $(document.getElementById("form_societe"))[0].value, c.infos.coords.email = $(document.getElementById("form_email"))[0].value, c.infos.coords.tel = $(document.getElementById("form_tel"))[0].value, "envoyer" == a ? c.envoyerForm() : c.verifEtape("envoyer", b)) : (e.find(".retour")[0].innerHTML = d.retour, c.btnClicke = !1)
                }, "json")
            }
        },
        passerEtape: function(a, b) {
            var c = this;
            if (c.transEtape) return !1;
            c.transEtape = !0;
            var d = $(".etape:nth-child(" + c.idEtapeActive + ")");
            if ("suiv" == a) {
                var e = c.$navEtapes.find("li:nth-child(" + (c.idEtapeActive + 1) + ") a"),
                    f = $(".etape:nth-child(" + (c.idEtapeActive + 1) + ")");
                e.length > 0 && (e[0].className = "actif", TweenLite.to(e.find("img.actif"), .5, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: .5
                }), TweenLite.to(e.find("img.inactif"), .5, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: .5
                })), Modernizr.csstransforms3d ? (TweenLite.to(d, .5, {
                    rotationY: -90,
                    ease: Quart.easeIn
                }), TweenLite.to(f, 0, {
                    rotationY: 90,
                    ease: Quart.easeIn
                }), TweenLite.to(f, .5, {
                    rotationY: 0,
                    ease: Quart.easeOut,
                    delay: .5,
                    onComplete: function() {
                        d.find(".loader")[0].style.display = "none", c.idEtapeActive++, c.transEtape = !1, c.btnClicke = !1
                    }
                })) : (f[0].style.display = "inherit", TweenLite.to(d, .5, {
                    opacity: 0,
                    ease: Quart.easeIn,
                    onComplete: function() {
                        d[0].style.display = "none"
                    }
                }), TweenLite.to(f, .5, {
                    opacity: 1,
                    ease: Quart.easeOut,
                    delay: .5,
                    onComplete: function() {
                        d.find(".loader")[0].style.display = "none", c.idEtapeActive++, c.transEtape = !1, c.btnClicke = !1
                    }
                }))
            } else {
                var g = b.parent("li").index();
                if (g + 1 == c.idEtapeActive) return !1;
                for (var f = $(".etape:nth-child(" + (g + 1) + ")"), h = c.$navEtapes.find("a"), i = 0; i < h.length; i++) i > g && (h[i].className = "", TweenLite.to($(h[i]).find("img.actif"), .5, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: .5
                }), TweenLite.to($(h[i]).find("img.inactif"), .5, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: .5
                }));
                Modernizr.csstransforms3d ? (TweenLite.to(f, 0, {
                    rotationY: -90,
                    ease: Quart.easeIn
                }), TweenLite.to(d, .5, {
                    rotationY: 90,
                    ease: Quart.easeIn
                }), TweenLite.to(f, .5, {
                    rotationY: 0,
                    ease: Quart.easeOut,
                    delay: .5,
                    onComplete: function() {
                        c.idEtapeActive = g + 1, c.transEtape = !1, c.btnClicke = !1
                    }
                })) : (f[0].style.display = "inherit", TweenLite.to(d, .5, {
                    opacity: 0,
                    ease: Quart.easeIn,
                    onComplete: function() {
                        d[0].style.display = "none"
                    }
                }), TweenLite.to(f, .5, {
                    opacity: 1,
                    ease: Quart.easeOut,
                    delay: .5,
                    onComplete: function() {
                        c.idEtapeActive = g + 1, c.transEtape = !1, c.btnClicke = !1
                    }
                }))
            }
        },
        envoyerForm: function() {
            var a = this;
            if (a.formEnvoye) return !1;
            a.formEnvoye = !0;
            var b = $('.etape[data-etape="etape6"]');
            b.find(".retour")[0].innerHTML = "", b.find(".loader")[0].style.display = "block";
            var c = _racineWeb + "verif/contact/projet/envoyer/";
            $.post(c, {
                Infos: a.infos
            }, function(c) {
                b.find(".loader")[0].style.display = "none", c.etat === !0 ? (a.passerEtape("suiv", b.find("a.btnCube")), TweenLite.to(a.$navEtapes, .5, {
                    top: v + 50,
                    opacity: 0,
                    ease: Expo.easeOut
                })) : b.find(".retour")[0].innerHTML = c.retour
            }, "json")
        },
        resize: function() {
            var a = this,
                b = 0;
            $etapes = $(".etape");
            for (var c = 0; c < $etapes.length; c++) {
                var d = $($etapes[c]).height();
                $etapes[c].style.top = (v - d) / 2 - 20 + "px", d > b && (b = d)
            }
            a.$navEtapes[0].style.top = b + (v - b) / 2 + 10 + "px"
        }
    }, $(function() {
        a = $(window), b = $(document.body), c = $(document.getElementById("menu")), d = $(document.getElementById("conteneurSite")), e = $(document.getElementById("conteneurPage")), f = $(document.getElementById("loader")), g = $(document.getElementById("deconnexionExp")), h = $(document.getElementById("header")), i = $(document.getElementById("contenuTel")), j = $(document.getElementById("tel")), y.init()
    })
}();