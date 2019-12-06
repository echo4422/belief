! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ce.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function (e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function r(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function s(e) {
        var t = {};
        return pe.each(e.match(Ne) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (o(), pe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Me, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if ($e(e)) {
            var r, s, o = pe.expando,
                a = e.nodeType,
                l = a ? pe.cache : e,
                u = a ? e[o] : e[o] && o;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[o] = ne.pop() || pe.guid++ : o), l[u] || (l[u] = a ? {} : {
                toJSON: pe.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)), s = l[u], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[pe.camelCase(t)] = n), "string" == typeof t ? null == (r = s[t]) && (r = s[pe.camelCase(t)]) : r = s, r
        }
    }

    function d(e, t, n) {
        if ($e(e)) {
            var i, r, s = e.nodeType,
                o = s ? pe.cache : e,
                a = s ? e[pe.expando] : pe.expando;
            if (o[a]) {
                if (t && (i = n ? o[a] : o[a].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !pe.isEmptyObject(i)) return
                }(n || (delete o[a].data, u(o[a]))) && (s ? pe.cleanData([e], !0) : de.deleteExpando || o != o.window ? delete o[a] : o[a] = void 0)
            }
        }
    }

    function h(e, t, n, i) {
        var r, s = 1,
            o = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return pe.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== u && +l) && Oe.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                s = s || ".5", c /= s, pe.style(e, t, c + u)
            } while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function p(e) {
        var t = We.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        var n, i, r = 0,
            s = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || pe.nodeName(i, t) ? s.push(i) : pe.merge(s, f(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], s) : s
    }

    function g(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }

    function m(e) {
        Ie.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, i, r) {
        for (var s, o, a, l, u, c, d, h = e.length, v = p(t), y = [], w = 0; h > w; w++)
            if ((o = e[w]) || 0 === o)
                if ("object" === pe.type(o)) pe.merge(y, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
            for (l = l || v.appendChild(t.createElement("div")), u = (Pe.exec(o) || ["", ""])[1].toLowerCase(), d = Be[u] || Be._default, l.innerHTML = d[1] + pe.htmlPrefilter(o) + d[2], s = d[0]; s--;) l = l.lastChild;
            if (!de.leadingWhitespace && Re.test(o) && y.push(t.createTextNode(Re.exec(o)[0])), !de.tbody)
                for (o = "table" !== u || Qe.test(o) ? "<table>" !== d[1] || Qe.test(o) ? 0 : l : l.firstChild, s = o && o.childNodes.length; s--;) pe.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
            for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(t.createTextNode(o));
        for (l && v.removeChild(l), de.appendChecked || pe.grep(f(y, "input"), m), w = 0; o = y[w++];)
            if (i && pe.inArray(o, i) > -1) r && r.push(o);
            else if (a = pe.contains(o.ownerDocument, o), l = f(v.appendChild(o), "script"), a && g(l), n)
            for (s = 0; o = l[s++];) Fe.test(o.type || "") && n.push(o);
        return l = null, v
    }

    function y() {
        return !0
    }

    function w() {
        return !1
    }

    function x() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function _(e, t, n, i, r, s) {
        var o, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) _(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = w;
        else if (!r) return e;
        return 1 === s && (o = r, r = function (e) {
            return pe().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = pe.guid++)), e.each(function () {
            pe.event.add(this, t, r, i, n)
        })
    }

    function b(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function T(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function k(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, r, s = pe._data(e),
                o = pe._data(t, s),
                a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++) pe.event.add(t, n, a[n][i])
            }
            o.data && (o.data = pe.extend({}, o.data))
        }
    }

    function E(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                r = pe._data(t);
                for (i in r.events) pe.removeEvent(t, i, r.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, T(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ie.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function S(e, t, n, i) {
        t = se.apply([], t);
        var r, s, o, a, l, u, c = 0,
            d = e.length,
            h = d - 1,
            p = t[0],
            g = pe.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !de.checkClone && nt.test(p)) return e.each(function (r) {
            var s = e.eq(r);
            g && (t[0] = p.call(this, r, s.html())), S(s, t, n, i)
        });
        if (d && (u = v(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (a = pe.map(f(u, "script"), C), o = a.length; d > c; c++) s = u, c !== h && (s = pe.clone(s, !0, !0), o && pe.merge(a, f(s, "script"))), n.call(e[c], s, c);
            if (o)
                for (l = a[a.length - 1].ownerDocument, pe.map(a, T), c = 0; o > c; c++) s = a[c], Fe.test(s.type || "") && !pe._data(s, "globalEval") && pe.contains(l, s) && (s.src ? pe._evalUrl && pe._evalUrl(s.src) : pe.globalEval((s.text || s.textContent || s.innerHTML || "").replace(rt, "")));
            u = r = null
        }
        return e
    }

    function N(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || pe.cleanData(f(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && g(f(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function D(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            i = pe.css(n[0], "display");
        return n.detach(), i
    }

    function j(e) {
        var t = ie,
            n = lt[e];
        return n || (n = D(e, t), "none" !== n && n || (at = (at || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (at[0].contentWindow || at[0].contentDocument).document, t.write(), t.close(), n = D(e, t), at.detach()), lt[e] = n), n
    }

    function $(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = bt.length; n--;)
            if ((e = bt[n] + t) in Ct) return e
    }

    function M(e, t) {
        for (var n, i, r, s = [], o = 0, a = e.length; a > o; o++) i = e[o], i.style && (s[o] = pe._data(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && He(i) && (s[o] = pe._data(i, "olddisplay", j(i.nodeName)))) : (r = He(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
        for (o = 0; a > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function L(e, t, n) {
        var i = wt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function O(e, t, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += pe.css(e, n + qe[s], !0, r)), i ? ("content" === n && (o -= pe.css(e, "padding" + qe[s], !0, r)), "margin" !== n && (o -= pe.css(e, "border" + qe[s] + "Width", !0, r))) : (o += pe.css(e, "padding" + qe[s], !0, r), "padding" !== n && (o += pe.css(e, "border" + qe[s] + "Width", !0, r)));
        return o
    }

    function q(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = pt(e),
            o = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = ft(e, t, s), (0 > r || null == r) && (r = e.style[t]), ct.test(r)) return r;
            i = o && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + O(e, t, n || (o ? "border" : "content"), i, s) + "px"
    }

    function H(e, t, n, i, r) {
        return new H.prototype.init(e, t, n, i, r)
    }

    function z() {
        return e.setTimeout(function () {
            Tt = void 0
        }), Tt = pe.now()
    }

    function I(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = qe[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function P(e, t, n) {
        for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), s = 0, o = r.length; o > s; s++)
            if (i = r[s].call(n, t, e)) return i
    }

    function F(e, t, n) {
        var i, r, s, o, a, l, u, c = this,
            d = {},
            h = e.style,
            p = e.nodeType && He(e),
            f = pe._data(e, "fxshow");
        n.queue || (a = pe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, pe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = pe.css(e, "display"), "inline" === ("none" === u ? pe._data(e, "olddisplay") || j(e.nodeName) : u) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Et.exec(r)) {
                if (delete t[i], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !f || void 0 === f[i]) continue;
                    p = !0
                }
                d[i] = f && f[i] || pe.style(e, i)
            } else u = void 0;
        if (pe.isEmptyObject(d)) "inline" === ("none" === u ? j(e.nodeName) : u) && (h.display = u);
        else {
            f ? "hidden" in f && (p = f.hidden) : f = pe._data(e, "fxshow", {}), s && (f.hidden = !p), p ? pe(e).show() : c.done(function () {
                pe(e).hide()
            }), c.done(function () {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d) pe.style(e, t, d[t])
            });
            for (i in d) o = P(p ? f[i] : 0, i, c), i in f || (f[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function R(e, t) {
        var n, i, r, s, o;
        for (n in e)
            if (i = pe.camelCase(n), r = t[i], s = e[n], pe.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = pe.cssHooks[i]) && "expand" in o) {
                s = o.expand(s), delete e[i];
                for (n in s) n in e || (e[n] = s[n], t[n] = r)
            } else t[i] = r
    }

    function W(e, t, n) {
        var i, r, s = 0,
            o = W.prefilters.length,
            a = pe.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = Tt || z(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                return a.notifyWith(e, [u, s, n]), 1 > s && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Tt || z(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (R(c, u.opts.specialEasing); o > s; s++)
            if (i = W.prefilters[s].call(u, e, c, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(c, P, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(e) {
        return pe.attr(e, "class") || ""
    }

    function V(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                s = t.toLowerCase().match(Ne) || [];
            if (pe.isFunction(n))
                for (; i = s[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Q(e, t, n, i) {
        function r(a) {
            var l;
            return s[a] = !0, pe.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            o = e === Jt;
        return r(t.dataTypes[0]) || !s["*"] && r("*")
    }

    function X(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n), e
    }

    function U(e, t, n) {
        for (var i, r, s, o, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) s = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                i || (i = o)
            }
            s = s || i
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
    }

    function Y(e, t, n, i) {
        var r, s, o, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
        for (s = c.shift(); s;)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (!(o = u[l + " " + s] || u["* " + s]))
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                        break
                    } if (!0 !== o)
                if (o && e.throws) t = o(t);
                else try {
                    t = o(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: o ? e : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function J(e) {
        if (!pe.contains(e.ownerDocument || ie, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Z(e, t, n, i) {
        var r;
        if (pe.isArray(t)) pe.each(t, function (t, r) {
            n || nn.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== pe.type(t)) i(e, t);
        else
            for (r in t) Z(e + "[" + r + "]", t[r], n, i)
    }

    function K() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        ie = e.document,
        re = ne.slice,
        se = ne.concat,
        oe = ne.push,
        ae = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = {},
        he = "1.12.4",
        pe = function (e, t) {
            return new pe.fn.init(e, t)
        },
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ge = /^-ms-/,
        me = /-([\da-z])/gi,
        ve = function (e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: he,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function () {
            return re.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function (e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return pe.each(this, e)
        },
        map: function (e) {
            return this.pushStack(pe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function () {
        var e, t, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || pe.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r) e = o[i], n = r[i], o !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, s = e && pe.isArray(e) ? e : []) : s = e && pe.isPlainObject(e) ? e : {}, o[i] = pe.extend(u, s, n)) : void 0 !== n && (o[i] = n));
        return o
    }, pe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === pe.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && pe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ge, "ms-").replace(me, ve)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; i > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(fe, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : oe.call(i, e)), i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, s = e.length, o = !n; s > r; r++) !t(e[r], r) !== o && i.push(e[r]);
            return i
        },
        map: function (e, t, i) {
            var r, s, o = 0,
                a = [];
            if (n(e))
                for (r = e.length; r > o; o++) null != (s = t(e[o], o, i)) && a.push(s);
            else
                for (o in e) null != (s = t(e[o], o, i)) && a.push(s);
            return se.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e) ? (n = re.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || pe.guid++, i) : void 0
        },
        now: function () {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function (e) {
        function t(e, t, n, i) {
            var r, s, o, a, u, d, h, p, f = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t : z) !== j && D(t), t = t || j, A)) {
                if (11 !== g && (d = ge.exec(e)))
                    if (r = d[1]) {
                        if (9 === g) {
                            if (!(o = t.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (f && (o = f.getElementById(r)) && q(t, o) && o.id === r) return n.push(o), n
                    } else {
                        if (d[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = d[3]) && w.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), n
                    } if (w.qsa && !W[e + " "] && (!M || !M.test(e))) {
                    if (1 !== g) f = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ve, "\\$&") : t.setAttribute("id", a = H), h = C(e), s = h.length, u = ce.test(a) ? "#" + a : "[id='" + a + "']"; s--;) h[s] = u + " " + c(h[s]);
                        p = h.join(","), f = me.test(e) && l(t.parentNode) || t
                    }
                    if (p) try {
                        return G.apply(n, f.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        a === H && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[H] = !0, e
        }

        function r(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
        }

        function o(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, s = e([], n.length, t), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {}

        function c(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                s = P++;
            return t.first ? function (t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, s)
            } : function (t, n, o) {
                var a, l, u, c = [I, s];
                if (o) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === I && a[1] === s) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, o)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var r = 0, s = n.length; s > r; r++) t(e, n[r], i);
            return i
        }

        function f(e, t, n, i, r) {
            for (var s, o = [], a = 0, l = e.length, u = null != t; l > a; a++)(s = e[a]) && (n && !n(s, i, r) || (o.push(s), u && t.push(a)));
            return o
        }

        function g(e, t, n, r, s, o) {
            return r && !r[H] && (r = g(r)), s && !s[H] && (s = g(s, o)), i(function (i, o, a, l) {
                var u, c, d, h = [],
                    g = [],
                    m = o.length,
                    v = i || p(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : f(v, h, e, a, l),
                    w = n ? s || (i ? e : m || r) ? [] : o : y;
                if (n && n(y, w, a, l), r)
                    for (u = f(w, g), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (w[g[c]] = !(y[g[c]] = d));
                if (i) {
                    if (s || e) {
                        if (s) {
                            for (u = [], c = w.length; c--;)(d = w[c]) && u.push(y[c] = d);
                            s(null, w = [], u, l)
                        }
                        for (c = w.length; c--;)(d = w[c]) && (u = s ? Z(i, d) : h[c]) > -1 && (i[u] = !(o[u] = d))
                    }
                } else w = f(w === o ? w.splice(m, w.length) : w), s ? s(null, o, w, l) : G.apply(o, w)
            })
        }

        function m(e) {
            for (var t, n, i, r = e.length, s = x.relative[e[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = d(function (e) {
                    return e === t
                }, o, !0), u = d(function (e) {
                    return Z(t, e) > -1
                }, o, !0), p = [function (e, n, i) {
                    var r = !s && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > a; a++)
                if (n = x.relative[e[a].type]) p = [d(h(p), n)];
                else {
                    if (n = x.filter[e[a].type].apply(null, e[a].matches), n[H]) {
                        for (i = ++a; r > i && !x.relative[e[i].type]; i++);
                        return g(a > 1 && h(p), a > 1 && c(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > a && m(e.slice(a, i)), r > i && m(e = e.slice(i)), r > i && c(e))
                    }
                    p.push(n)
                } return h(p)
        }

        function v(e, n) {
            var r = n.length > 0,
                s = e.length > 0,
                o = function (i, o, a, l, u) {
                    var c, d, h, p = 0,
                        g = "0",
                        m = i && [],
                        v = [],
                        y = E,
                        w = i || s && x.find.TAG("*", u),
                        _ = I += null == y ? 1 : Math.random() || .1,
                        b = w.length;
                    for (u && (E = o === j || o || u); g !== b && null != (c = w[g]); g++) {
                        if (s && c) {
                            for (d = 0, o || c.ownerDocument === j || (D(c), a = !A); h = e[d++];)
                                if (h(c, o || j, a)) {
                                    l.push(c);
                                    break
                                } u && (I = _)
                        }
                        r && ((c = !h && c) && p--, i && m.push(c))
                    }
                    if (p += g, r && g !== p) {
                        for (d = 0; h = n[d++];) h(m, v, o, a);
                        if (i) {
                            if (p > 0)
                                for (; g--;) m[g] || v[g] || (v[g] = U.call(l));
                            v = f(v)
                        }
                        G.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (I = _, E = y), m
                };
            return r ? i(o) : o
        }
        var y, w, x, _, b, C, T, k, E, S, N, D, j, $, A, M, L, O, q, H = "sizzle" + 1 * new Date,
            z = e.document,
            I = 0,
            P = 0,
            F = n(),
            R = n(),
            W = n(),
            B = function (e, t) {
                return e === t && (N = !0), 0
            },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            X = [],
            U = X.pop,
            Y = X.push,
            G = X.push,
            J = X.slice,
            Z = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            oe = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(ie),
            ce = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            fe = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            we = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function () {
                D()
            };
        try {
            G.apply(X = J.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: X.length ? function (e, t) {
                    Y.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, b = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, $ = j.documentElement, A = !b(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function (e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = fe.test(j.getElementsByClassName), w.getById = r(function (e) {
                return $.appendChild(e).id = H, !j.getElementsByName || !j.getElementsByName(H).length
            }), w.getById ? (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && A) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function (e) {
                var t = e.replace(ye, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function (e) {
                var t = e.replace(ye, we);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = w.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, x.find.CLASS = w.getElementsByClassName && function (e, t) {
                return void 0 !== t.getElementsByClassName && A ? t.getElementsByClassName(e) : void 0
            }, L = [], M = [], (w.qsa = fe.test(j.querySelectorAll)) && (r(function (e) {
                $.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:value|" + K + ")"), e.querySelectorAll("[id~=" + H + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || M.push(".#.+[+~]")
            }), r(function (e) {
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = fe.test(O = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function (e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), L.push("!=", ie)
            }), M = M.length && new RegExp(M.join("|")), L = L.length && new RegExp(L.join("|")), t = fe.test($.compareDocumentPosition), q = t || fe.test($.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, B = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === z && q(z, e) ? -1 : t === j || t.ownerDocument === z && q(z, t) ? 1 : S ? Z(S, e) - Z(S, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    s = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !s) return e === j ? -1 : t === j ? 1 : r ? -1 : s ? 1 : S ? Z(S, e) - Z(S, t) : 0;
                if (r === s) return o(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? o(a[i], l[i]) : a[i] === z ? -1 : l[i] === z ? 1 : 0
            }, j) : j
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== j && D(e), n = n.replace(le, "='$1']"), w.matchesSelector && A && !W[n + " "] && (!L || !L.test(n)) && (!M || !M.test(n))) try {
                var i = O.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== j && D(e), q(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== j && D(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== i ? i : w.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (N = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(B), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return S = null, e
        }, _ = t.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += _(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
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
                ATTR: function (e) {
                    return e[1] = e[1].replace(ye, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ye, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (r) {
                        var s = t.attr(r, e);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, h, p, f, g = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (h = t; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                for (h = m, d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], w = p && u[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (w = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++w && h === t) {
                                        c[e] = [I, p, w];
                                        break
                                    }
                            } else if (y && (h = t, d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], w = p),
                                !1 === w)
                                for (;
                                    (h = ++p && h && h[g] || (w = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++w || (y && (d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [I, w]), h !== t)););
                            return (w -= r) === i || w % i == 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var r, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[H] ? s(n) : s.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = s(e, n), o = r.length; o--;) i = Z(e, r[o]), e[i] = !(t[i] = r[o])
                    }) : function (e) {
                        return s(e, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = T(e.replace(se, "$1"));
                    return r[H] ? i(function (e, t, n, i) {
                        for (var s, o = r(e, null, i, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(ye, we),
                        function (t) {
                            return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, we).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === $
                },
                focus: function (e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !x.pseudos.empty(e)
                },
                header: function (e) {
                    return pe.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function () {
                    return [0]
                }),
                last: a(function (e, t) {
                    return [t - 1]
                }),
                eq: a(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: a(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: a(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: a(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: a(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) x.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return u.prototype = x.filters = x.pseudos, x.setFilters = new u, C = t.tokenize = function (e, n) {
            var i, r, s, o, a, l, u, c = R[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = x.preFilter; a;) {
                i && !(r = oe.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), s.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), a = a.slice(i.length));
                for (o in x.filter) !(r = de[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : R(e, l).slice(0)
        }, T = t.compile = function (e, t) {
            var n, i = [],
                r = [],
                s = W[e + " "];
            if (!s) {
                for (t || (t = C(e)), n = t.length; n--;) s = m(t[n]), s[H] ? i.push(s) : r.push(s);
                s = W(e, v(r, i)), s.selector = e
            }
            return s
        }, k = t.select = function (e, t, n, i) {
            var r, s, o, a, u, d = "function" == typeof e && e,
                h = !i && C(e = d.selector || e);
            if (n = n || [], 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === t.nodeType && A && x.relative[s[1].type]) {
                    if (!(t = (x.find.ID(o.matches[0].replace(ye, we), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (r = de.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
                    if ((u = x.find[a]) && (i = u(o.matches[0].replace(ye, we), me.test(s[0].type) && l(t.parentNode) || t))) {
                        if (s.splice(r, 1), !(e = i.length && c(s))) return G.apply(n, i), n;
                        break
                    }
            }
            return (d || T(e, h))(i, t, !A, n, !t || me.test(e) && l(t.parentNode) || t), n
        }, w.sortStable = H.split("").sort(B).join("") === H, w.detectDuplicates = !!N, D(), w.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(K, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var we = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && pe(e).is(n)) break;
                    i.push(e)
                } return i
        },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        _e = pe.expr.match.needsContext,
        be = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
                for (t = 0; r > t; t++)
                    if (pe.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) pe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && _e.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Te, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Te, "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), be.test(i[1]) && pe.isPlainObject(t))
                    for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((r = ie.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return Te.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = ie, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
    }).prototype = pe.fn, Te = pe(ie);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function (e) {
            var t, n = pe(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, s = [], o = _e.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    } return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return we(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return we(e, "nextSibling")
        },
        prevAll: function (e) {
            return we(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return xe(e.firstChild)
        },
        contents: function (e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function (e, t) {
        pe.fn[e] = function (n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Se[e] || (r = pe.uniqueSort(r)), Ee.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Ne = /\S+/g;
    pe.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : pe.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            l = -1,
            u = function () {
                for (r = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function () {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                        pe.each(n, function (n, i) {
                            pe.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return pe.each(arguments, function (e, t) {
                        for (var n;
                            (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (e) {
                    return e ? pe.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = !0, n || c.disable(), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, pe.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return pe.Deferred(function (n) {
                            pe.each(t, function (t, s) {
                                var o = pe.isFunction(e[t]) && e[t];
                                r[s[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? pe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, pe.each(t, function (e, s) {
                var o = s[2],
                    a = s[3];
                i[s[1]] = o.add, a && o.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function () {
                    return r[s[0] + "With"](this === r ? i : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                s = re.call(arguments),
                o = s.length,
                a = 1 !== o || e && pe.isFunction(e.promise) ? o : 0,
                l = 1 === a ? e : pe.Deferred(),
                u = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) s[r] && pe.isFunction(s[r].promise) ? s[r].promise().progress(u(r, n, t)).done(u(r, i, s)).fail(l.reject) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    });
    var De;
    pe.fn.ready = function (e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (De.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
        }
    }), pe.ready.promise = function (t) {
        if (!De)
            if (De = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a);
        else {
            ie.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    o(), pe.ready()
                }
            }()
        }
        return De.promise(t)
    }, pe.ready.promise();
    var je;
    for (je in pe(de)) break;
    de.ownFirst = "0" === je, de.inlineBlockNeedsLayout = !1, pe(function () {
            var e, t, n, i;
            (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function () {
            var e = ie.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var $e = function (e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !u(e)
            },
            data: function (e, t, n) {
                return c(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function (e, t) {
                var n, i, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === e) {
                    if (this.length && (r = pe.data(s), 1 === s.nodeType && !pe._data(s, "parsedAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), l(s, i, r[i])));
                        pe._data(s, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    pe.data(this, e, t)
                }) : s ? l(s, e, pe.data(s, e)) : void 0
            },
            removeData: function (e) {
                return this.each(function () {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    s = pe._queueHooks(e, t),
                    o = function () {
                        pe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, o, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function () {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    r = pe.Deferred(),
                    s = this,
                    o = this.length,
                    a = function () {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = pe._data(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        }),
        function () {
            var e;
            de.shrinkWrapBlocks = function () {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Oe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        He = function (e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        ze = function (e, t, n, i, r, s, o) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === pe.type(n)) {
                r = !0;
                for (a in n) ze(e, t, a, n[a], !0, s, o)
            } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(pe(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
        },
        Ie = /^(?:checkbox|radio)$/i,
        Pe = /<([\w:-]+)/,
        Fe = /^$|\/(?:java|ecma)script/i,
        Re = /^\s+/,
        We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function () {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var Be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
    var Ve = /<|&#?\w+;/,
        Qe = /<tbody/i;
    ! function () {
        var t, n, i = ie.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Xe = /^(?:input|select|textarea)$/i,
        Ue = /^key/,
        Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ge = /^(?:focusinfocus|focusoutblur)$/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var s, o, a, l, u, c, d, h, p, f, g, m = pe._data(e);
            if (m) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = pe.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
                        return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(Ne) || [""], a = t.length; a--;) s = Je.exec(t[a]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p && (u = pe.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pe.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var s, o, a, l, u, c, d, h, p, f, g, m = pe.hasData(e) && pe._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(Ne) || [""], u = t.length; u--;)
                    if (a = Je.exec(t[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(e, o));
                        l && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || pe.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[u], n, i, !0);
                pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var s, o, a, l, u, c, d, h = [i || ie],
                p = ce.call(t, "type") ? t.type : t,
                f = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ge.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!r && !u.noBubble && !pe.isWindow(i)) {
                    for (l = u.delegateType || p, Ge.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), c = a;
                    c === (i.ownerDocument || ie) && h.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (a = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, s = (pe._data(a, "events") || {})[t.type] && pe._data(a, "handle"), s && s.apply(a, n), (s = o && a[o]) && s.apply && $e(a) && (t.result = s.apply(a, n), !1 === t.result && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(h.pop(), n)) && $e(i) && o && i[p] && !pe.isWindow(i)) {
                    c = i[o], c && (i[o] = null), pe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0, c && (i[o] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = pe.event.fix(e);
            var t, n, i, r, s, o = [],
                a = re.call(arguments),
                l = (pe._data(this, "events") || {})[e.type] || [],
                u = pe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = pe.event.handlers.call(this, e, l), t = 0;
                    (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, s, o = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; a > n; n++) s = t[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(s);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && o.push({
                elem: this,
                handlers: t.slice(a)
            }), o
        },
        fix: function (e) {
            if (e[pe.expando]) return e;
            var t, n, i, r = e.type,
                s = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ye.test(r) ? this.mouseHooks : Ue.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new pe.Event(s), t = i.length; t--;) n = i[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = ie.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n))
    }, pe.Event = function (e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : w) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    s = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function () {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function () {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function () {
            return Xe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Xe.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return pe.event.remove(this, "._change"), !Xe.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = pe._data(i, t);
                r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = pe._data(i, t) - 1;
                r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
            }
        }
    }), pe.fn.extend({
        on: function (e, t, n, i) {
            return _(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return _(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), this.each(function () {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        Ke = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
        et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        st = p(ie),
        ot = st.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function (e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, s, o, a, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !Ke.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ot.innerHTML = e.outerHTML, ot.removeChild(s = ot.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (i = f(s), a = f(e), o = 0; null != (r = a[o]); ++o) i[o] && E(r, i[o]);
            if (t)
                if (n)
                    for (a = a || f(e), i = i || f(s), o = 0; null != (r = a[o]); o++) k(r, i[o]);
                else k(e, s);
            return i = f(s, "script"), i.length > 0 && g(i, !l && f(e, "script")), i = a = r = null, s
        },
        cleanData: function (e, t) {
            for (var n, i, r, s, o = 0, a = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[o]); o++)
                if ((t || $e(n)) && (r = n[a], s = r && l[r])) {
                    if (s.events)
                        for (i in s.events) c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, s.handle);
                    l[r] && (delete l[r], u || void 0 === n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), ne.push(r))
                }
        }
    }), pe.fn.extend({
        domManip: S,
        detach: function (e) {
            return N(this, e, !0)
        },
        remove: function (e) {
            return N(this, e)
        },
        text: function (e) {
            return ze(this, function (e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    b(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return pe.clone(this, e, t)
            })
        },
        html: function (e) {
            return ze(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ke.test(e)) && (de.leadingWhitespace || !Re.test(e)) && !Be[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(f(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return S(this, arguments, function (t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(f(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        pe.fn[e] = function (e) {
            for (var n, i = 0, r = [], s = pe(e), o = s.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), pe(s[i])[t](n), oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var at, lt = {
            HTML: "block",
            BODY: "block"
        },
        ut = /^margin/,
        ct = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        dt = function (e, t, n, i) {
            var r, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            r = n.apply(e, i || []);
            for (s in t) e.style[s] = o[s];
            return r
        },
        ht = ie.documentElement;
    ! function () {
        function t() {
            var t, c, d = ie.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = u.appendChild(ie.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", s = 0 === u.getClientRects().length, s && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", s = 0 === t[0].offsetHeight)), d.removeChild(l)
        }
        var n, i, r, s, o, a, l = ie.createElement("div"),
            u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function () {
                return null == n && t(), s
            },
            boxSizingReliable: function () {
                return null == n && t(), r
            },
            pixelMarginRight: function () {
                return null == n && t(), i
            },
            pixelPosition: function () {
                return null == n && t(), n
            },
            reliableMarginRight: function () {
                return null == n && t(), o
            },
            reliableMarginLeft: function () {
                return null == n && t(), a
            }
        }))
    }();
    var pt, ft, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ft = function (e, t, n) {
        var i, r, s, o, a = e.style;
        return n = n || pt(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)), n && !de.pixelMarginRight() && ct.test(o) && ut.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), void 0 === o ? o : o + ""
    }) : ht.currentStyle && (pt = function (e) {
        return e.currentStyle
    }, ft = function (e, t, n) {
        var i, r, s, o, a = e.style;
        return n = n || pt(e), o = n ? n[t] : void 0, null == o && a && a[t] && (o = a[t]), ct.test(o) && !gt.test(t) && (i = a.left, r = e.runtimeStyle, s = r && r.left, s && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = i, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
    });
    var mt = /alpha\([^)]*\)/i,
        vt = /opacity\s*=\s*([^)]*)/i,
        yt = /^(none|table(?!-c[ea]).+)/,
        wt = new RegExp("^(" + Le + ")(.*)$", "i"),
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _t = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        bt = ["Webkit", "O", "Moz", "ms"],
        Ct = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = pe.camelCase(t),
                    l = e.style;
                if (t = pe.cssProps[a] || (pe.cssProps[a] = A(a) || a), o = pe.cssHooks[t] || pe.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                if (s = typeof n, "string" === s && (r = Oe.exec(n)) && r[1] && (n = h(e, t, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (pe.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function (e, t, n, i) {
            var r, s, o, a = pe.camelCase(t);
            return t = pe.cssProps[a] || (pe.cssProps[a] = A(a) || a), o = pe.cssHooks[t] || pe.cssHooks[a], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = ft(e, t, i)), "normal" === s && t in _t && (s = _t[t]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
        }
    }), pe.each(["height", "width"], function (e, t) {
        pe.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, xt, function () {
                    return q(e, t, i)
                }) : q(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var r = i && pt(e);
                return L(e, n, i ? O(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function (e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(s.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(s) ? s.replace(mt, r) : s + " " + r)
        }
    }), pe.cssHooks.marginRight = $(de.reliableMarginRight, function (e, t) {
        return t ? dt(e, {
            display: "inline-block"
        }, ft, [e, "marginRight"]) : void 0
    }), pe.cssHooks.marginLeft = $(de.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(ft(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        pe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + qe[i] + t] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, ut.test(e) || (pe.cssHooks[e + t].set = L)
    }), pe.fn.extend({
        css: function (e, t) {
            return ze(this, function (e, t, n) {
                var i, r, s = {},
                    o = 0;
                if (pe.isArray(t)) {
                    for (i = pt(e), r = t.length; r > o; o++) s[t[o]] = pe.css(e, t[o], !1, i);
                    return s
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return M(this, !0)
        },
        hide: function () {
            return M(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = H, H.prototype = {
        constructor: H,
        init: function (e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = H.prototype.init, pe.fx.step = {};
    var Tt, kt, Et = /^(?:toggle|show|hide)$/,
        St = /queueHooks$/;
    pe.Animation = pe.extend(W, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Oe.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
            },
            prefilters: [F],
            prefilter: function (e, t) {
                t ? W.prefilters.unshift(e) : W.prefilters.push(e)
            }
        }), pe.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(He).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = pe.isEmptyObject(e),
                    s = pe.speed(t, n, i),
                    o = function () {
                        var t = W(this, pe.extend({}, e), s);
                        (r || pe._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        s = pe.timers,
                        o = pe._data(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && St.test(r) && i(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = pe._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        s = pe.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function (e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
            }
        }), pe.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            pe.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function () {
            var e, t = pe.timers,
                n = 0;
            for (Tt = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), Tt = void 0
        }, pe.fx.timer = function (e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function () {
            kt || (kt = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function () {
            e.clearInterval(kt), kt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function (t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            })
        },
        function () {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                r = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var Nt = /\r/g,
        Dt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = pe.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)) : void 0
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(Dt, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), s) return t;
                            o.push(t)
                        } return o
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, s = pe.makeArray(t), o = r.length; o--;)
                        if (i = r[o], pe.inArray(pe.valHooks.option.get(i), s) > -1) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function () {
        pe.valHooks[this] = {
            set: function (e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        }, de.checkOn || (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var jt, $t, At = pe.expr.attrHandle,
        Mt = /^(?:checked|selected)$/i,
        Lt = de.getSetAttribute,
        Ot = de.input;
    pe.fn.extend({
        attr: function (e, t) {
            return ze(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function (e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? $t : jt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                s = t && t.match(Ne);
            if (s && 1 === e.nodeType)
                for (; n = s[r++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Ot && Lt || !Mt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute(Lt ? n : i)
        }
    }), $t = {
        set: function (e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : Ot && Lt || !Mt.test(n) ? e.setAttribute(!Lt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = At[t] || pe.find.attr;
        Ot && Lt || !Mt.test(t) ? At[t] = function (e, t, i) {
            var r, s;
            return i || (s = At[t], At[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, At[t] = s), r
        } : At[t] = function (e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ot && Lt || (pe.attrHooks.value = {
        set: function (e, t, n) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : jt && jt.set(e, t, n)
        }
    }), Lt || (jt = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, At.id = At.name = At.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, pe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: jt.set
    }, pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            jt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function (e, t) {
        pe.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var qt = /^(?:input|select|textarea|button|object)$/i,
        Ht = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function (e, t) {
            return ze(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = pe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), pe.extend({
        prop: function (e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : qt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function (e, t) {
        pe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var zt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function (e) {
            var t, n, i, r, s, o, a, l = 0;
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).addClass(e.call(this, t, B(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
                        for (o = 0; s = t[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        a = pe.trim(i), r !== a && pe.attr(n, "class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, s, o, a, l = 0;
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).removeClass(e.call(this, t, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
                        for (o = 0; s = t[o++];)
                            for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                        a = pe.trim(i), r !== a && pe.attr(n, "class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                pe(this).toggleClass(e.call(this, n, B(this), t), t)
            }) : this.each(function () {
                var t, i, r, s;
                if ("string" === n)
                    for (i = 0, r = pe(this), s = e.match(Ne) || []; t = s[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = B(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(zt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        pe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var It = e.location,
        Pt = pe.now(),
        Ft = /\?/,
        Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = pe.trim(t + "");
        return r && !pe.trim(r.replace(Rt, function (e, t, r, s) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !s - !r, "")
        })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Wt = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Xt = /^(?:GET|HEAD)$/,
        Ut = /^\/\//,
        Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Gt = {},
        Jt = {},
        Zt = "*/".concat("*"),
        Kt = It.href,
        en = Yt.exec(Kt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Kt,
            type: "GET",
            isLocal: Qt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? X(X(e, pe.ajaxSettings), t) : X(pe.ajaxSettings, e)
        },
        ajaxPrefilter: V(Gt),
        ajaxTransport: V(Jt),
        ajax: function (t, n) {
            function i(t, n, i, r) {
                var s, d, y, w, _, C = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), c = void 0, a = r || "", b.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (w = U(h, b, i)), w = Y(h, w, b, s), s ? (h.ifModified && (_ = b.getResponseHeader("Last-Modified"), _ && (pe.lastModified[o] = _), (_ = b.getResponseHeader("etag")) && (pe.etag[o] = _)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, d = w.data, y = w.error, s = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (n || C) + "", s ? g.resolveWith(p, [d, C, b]) : g.rejectWith(p, [b, C, y]), b.statusCode(v), v = void 0, u && f.trigger(s ? "ajaxSuccess" : "ajaxError", [b, h, s ? d : y]), m.fireWith(p, [b, C]), u && (f.trigger("ajaxComplete", [b, h]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, s, o, a, l, u, c, d, h = pe.ajaxSetup({}, n),
                p = h.context || h,
                f = h.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                g = pe.Deferred(),
                m = pe.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                w = {},
                x = 0,
                _ = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = Vt.exec(a);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = w[n] = w[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || _;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (g.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || Kt) + "").replace(Wt, "").replace(Ut, en[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pe.trim(h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain && (r = Yt.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), Q(Gt, h, n, b), 2 === x) return b;
            u = pe.event && h.global, u && 0 == pe.active++ && pe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Xt.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Ft.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Bt.test(o) ? o.replace(Bt, "$1_=" + Pt++) : o + (Ft.test(o) ? "&" : "?") + "_=" + Pt++)), h.ifModified && (pe.lastModified[o] && b.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && b.setRequestHeader("If-None-Match", pe.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : h.accepts["*"]);
            for (s in h.headers) b.setRequestHeader(s, h.headers[s]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, b, h) || 2 === x)) return b.abort();
            _ = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[s](h[s]);
            if (c = Q(Jt, h, n, b)) {
                if (b.readyState = 1, u && f.trigger("ajaxSend", [b, h]), 2 === x) return b;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    x = 1, c.send(y, i)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return b
        },
        getJSON: function (e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function (e, t) {
        pe[t] = function (e, n, i, r) {
            return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function (e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, pe.fn.extend({
        wrapAll: function (e) {
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return pe.isFunction(e) ? this.each(function (t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = pe.isFunction(e);
            return this.each(function (n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function (e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, pe.expr.filters.visible = function (e) {
        return !pe.expr.filters.hidden(e)
    };
    var tn = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        sn = /^(?:submit|button|image|reset|file)$/i,
        on = /^(?:input|select|textarea|keygen)/i;
    pe.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, r);
        return i.join("&").replace(tn, "+")
    }, pe.fn.extend({
        serialize: function () {
            return pe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && on.test(this.nodeName) && !sn.test(e) && (this.checked || !Ie.test(e))
            }).map(function (e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return this.isLocal ? ee() : ie.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || ee()
    } : K;
    var an = 0,
        ln = {},
        un = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in ln) ln[e](void 0, !0)
    }), de.cors = !!un && "withCredentials" in un, (un = de.ajax = !!un) && pe.ajaxTransport(function (t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function (i, r) {
                    var s, o = t.xhr(),
                        a = ++an;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                    o.send(t.hasContent && t.data || null), n = function (e, i) {
                        var s, l, u;
                        if (n && (i || 4 === o.readyState))
                            if (delete ln[a], n = void 0, o.onreadystatechange = pe.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && r(s, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = ln[a] = n : n()
                },
                abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function (i, r) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = cn.pop() || pe.expando + "_" + Pt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, s, o, a = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + r) : !1 !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return o || pe.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function () {
            o = arguments
        }, i.always(function () {
            void 0 === s ? pe(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, cn.push(r)), o && pe.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), pe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ie;
        var i = be.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
    };
    var hn = pe.fn.load;
    pe.fn.load = function (e, t, n) {
        if ("string" != typeof e && hn) return hn.apply(this, arguments);
        var i, r, s, o = this,
            a = e.indexOf(" ");
        return a > -1 && (i = pe.trim(e.slice(a, e.length)), e = e.slice(0, a)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, o.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            o.each(function () {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        pe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function (e) {
        return pe.grep(pe.timers, function (t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function (e, t, n) {
            var i, r, s, o, a, l, u, c = pe.css(e, "position"),
                d = pe(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = pe.css(e, "top"), l = pe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [s, l]) > -1, u ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, pe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                s = r && r.ownerDocument;
            return s ? (t = s.documentElement, pe.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(s), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || ht
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (i) {
            return ze(this, function (e, i, r) {
                var s = te(e);
                return void 0 === r ? s ? t in s ? s[t] : s.document.documentElement[i] : e[i] : void(s ? s.scrollTo(n ? pe(s).scrollLeft() : r, n ? r : pe(s).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), pe.each(["top", "left"], function (e, t) {
        pe.cssHooks[t] = $(de.pixelPosition, function (e, n) {
            return n ? (n = ft(e, t), ct.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            pe.fn[i] = function (i, r) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    o = n || (!0 === i || !0 === r ? "margin" : "border");
                return ze(this, function (t, n, i) {
                    var r;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? pe.css(t, n, o) : pe.style(t, n, i, o)
                }, t, s ? i : void 0, s, null)
            }
        })
    }), pe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function () {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return pe
    });
    var pn = e.jQuery,
        fn = e.$;
    return pe.noConflict = function (t) {
        return e.$ === pe && (e.$ = fn), t && e.jQuery === pe && (e.jQuery = pn), pe
    }, t || (e.jQuery = e.$ = pe), pe
}),
function (e, t, n, i) {
    e.extend({
        autoH: function (t) {
            var n = e(t).outerHeight(),
                i = -n / 2;
            e(t).css("marginTop", i)
        },
        autoEachH: function (t, n) {
            e(t).each(function () {
                var t = e(this).find(n).outerHeight(),
                    i = -t / 2;
                e(this).find(n).css("marginTop", i)
            })
        },
        clickToggle: function (t, n) {
            e(t).click(function () {
                e(n).is(":visible") ? (e(this).removeClass("clicked"), e(n).slideUp()) : (e(this).addClass("clicked"), e(n).slideDown())
            })
        },
        backTop: function (t, n) {
            e(t).click(function () {
                e("html, body").animate({
                    scrollTop: "0"
                }, n)
            })
        },
        RndNum: function (e) {
            for (var t = "", n = 0; n < e; n++) t += Math.floor(10 * Math.random());
            return t
        },
        changCode: function (t, n, i) {
            var r = (new Date).getTime(),
                s = t + "data/include/imagecode.php?act=verifycode&width=" + n + "&height=" + i + "&random=" + r + this.RndNum(4);
            e("#checkCodeImg").attr("src", s)
        },
        tabs: function (t, n, i) {
            e(n).hide(), e(n).eq(0).show(), e(t).eq(0).addClass("on"), e(t).bind(i, function () {
                e(this).addClass("on").siblings().removeClass("on");
                var t = e(this).index();
                e(n).eq(t).show().siblings().hide()
            })
        }
    })
}(jQuery, window, document),
function (e) {
    "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e, t) {
    "use strict";

    function n(t, i) {
        function r() {
            s.$el = e(t), s.$el.length ? s._init(s.$el[0], i) : P(t) && (B[t] = i)
        }
        var s = this;
        return s instanceof n ? void(n.pending ? e(window).on("validatorready", r) : r()) : new n(t, i)
    }

    function i(t) {
        function n() {
            var t = this.options;
            for (var n in t) n in Q && (this[n] = t[n]);
            e.extend(this, {
                _valHook: function () {
                    return "true" === this.element.contentEditable ? "text" : "val"
                },
                getValue: function () {
                    var t = this.element;
                    return "number" === t.type && t.validity && t.validity.badInput ? "NaN" : e(t)[this._valHook()]()
                },
                setValue: function (t) {
                    e(this.element)[this._valHook()](this.value = t)
                },
                getRangeMsg: function (e, t, n) {
                    function i(e, t) {
                        return l ? e > t : e >= t
                    }
                    if (t) {
                        var r, s = this,
                            o = s.messages[s._r] || "",
                            a = t[0].split("~"),
                            l = "false" === t[1],
                            u = a[0],
                            c = a[1],
                            d = "rg",
                            h = [""],
                            p = z(e) && +e == +e;
                        return 2 === a.length ? u && c ? (p && i(e, +u) && i(+c, e) && (r = !0), h = h.concat(a), d = l ? "gtlt" : "rg") : u && !c ? (p && i(e, +u) && (r = !0), h.push(u), d = l ? "gt" : "gte") : !u && c && (p && i(+c, e) && (r = !0), h.push(c), d = l ? "lt" : "lte") : (e === +u && (r = !0), h.push(u), d = "eq"), o && (n && o[d + n] && (d += n), h[0] = o[d]), r || s._rules && (s._rules[s._i].msg = s.renderMsg.apply(null, h))
                    }
                },
                renderMsg: function () {
                    var e = arguments,
                        t = e[0],
                        n = e.length;
                    if (t) {
                        for (; --n;) t = t.replace("{" + n + "}", e[n]);
                        return t
                    }
                }
            })
        }

        function i(n, i, r) {
            this.key = n, this.validator = t, e.extend(this, r, i)
        }
        return n.prototype = t, i.prototype = new n, i
    }

    function r(e, t) {
        if (F(e)) {
            var n, i = t ? !0 === t ? this : t : r.prototype;
            for (n in e) p(n) && (i[n] = o(e[n]))
        }
    }

    function s(e, t) {
        if (F(e)) {
            var n, i = t ? !0 === t ? this : t : s.prototype;
            for (n in e) i[n] = e[n]
        }
    }

    function o(t) {
        switch (e.type(t)) {
            case "function":
                return t;
            case "array":
                var n = function () {
                    return t[0].test(this.value) || t[1] || !1
                };
                return n.msg = t[1], n;
            case "regexp":
                return function () {
                    return t.test(this.value)
                }
        }
    }

    function a(t) {
        var n, i, r;
        if (t && t.tagName) {
            switch (t.tagName) {
                case "INPUT":
                case "SELECT":
                case "TEXTAREA":
                case "BUTTON":
                case "FIELDSET":
                    n = t.form || e(t).closest("." + w);
                    break;
                case "FORM":
                    n = t;
                    break;
                default:
                    n = e(t).closest("." + w)
            }
            for (i in B)
                if (e(n).is(i)) {
                    r = B[i];
                    break
                } return e(n).data(m) || e(n)[m](r).data(m)
        }
    }

    function l(e, t) {
        var n = z(W(e, b + "-" + t));
        if (n && (n = new Function("return " + n)())) return o(n)
    }

    function u(e, t, n) {
        var i = t.msg,
            r = t._r;
        return F(i) && (i = i[r]), P(i) || (i = W(e, C + "-" + r) || W(e, C) || (n ? P(n) ? n : n[r] : "")), i
    }

    function c(e) {
        var t;
        return e && (t = M.exec(e)), t && t[0]
    }

    function d(e) {
        return "INPUT" === e.tagName && "checkbox" === e.type || "radio" === e.type
    }

    function h(e) {
        return Date.parse(e.replace(/\.|\-/g, "/"))
    }

    function p(e) {
        return /^\w+$/.test(e)
    }

    function f(e) {
        var t = "#" === e.charAt(0);
        return e = e.replace(/([:.{(|)}\/\[\]])/g, "\\$1"), t ? e : '[name="' + e + '"]:first'
    }
    var g, m = "validator",
        v = "." + m,
        y = ".field",
        w = "nice-" + m,
        x = "msg-box",
        _ = "aria-invalid",
        b = "data-rule",
        C = "data-msg",
        T = "data-tip",
        k = "data-timely",
        E = "data-target",
        S = "novalidate",
        N = ":verifiable",
        D = /(&)?(!)?\b(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\|)?/g,
        j = /(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,
        $ = /(?:([^:;\(\[]*):)?(.*)/,
        A = /[^\x00-\xff]/g,
        M = /top|right|bottom|left/,
        L = /(?:(cors|jsonp):)?(?:(post|get):)?(.+)/i,
        O = /[<>'"`\\]|&#x?\d+[A-F]?;?|%3[A-F]/gim,
        q = e.noop,
        H = e.proxy,
        z = e.trim,
        I = e.isFunction,
        P = function (e) {
            return "string" == typeof e
        },
        F = function (e) {
            return e && "[object Object]" === Object.prototype.toString.call(e)
        },
        R = document.documentMode || +(navigator.userAgent.match(/MSIE (\d+)/) && RegExp.$1),
        W = function (e, n, i) {
            return e && e.tagName ? i === t ? e.getAttribute(n) : void(null === i ? e.removeAttribute(n) : e.setAttribute(n, "" + i)) : null
        },
        B = {},
        V = {
            debug: 0,
            theme: "default",
            ignore: "",
            focusInvalid: !0,
            focusCleanup: !1,
            stopOnError: !1,
            beforeSubmit: null,
            valid: null,
            invalid: null,
            validation: null,
            formClass: "n-default",
            validClass: "n-valid",
            invalidClass: "n-invalid",
            bindClassTo: null
        },
        Q = {
            timely: 1,
            display: null,
            target: null,
            ignoreBlank: !1,
            showOk: !0,
            dataFilter: function (e) {
                if (P(e) || F(e) && ("error" in e || "ok" in e)) return e
            },
            msgMaker: function (t) {
                var n;
                return n = '<span role="alert" class="msg-wrap n-' + t.type + '">' + t.arrow, t.result ? e.each(t.result, function (e, i) {
                    n += '<span class="n-' + i.type + '">' + t.icon + '<span class="n-msg">' + i.msg + "</span></span>"
                }) : n += t.icon + '<span class="n-msg">' + t.msg + "</span>", n += "</span>"
            },
            msgWrapper: "span",
            msgArrow: "",
            msgIcon: '<span class="n-icon"></span>',
            msgClass: "n-right",
            msgStyle: "",
            msgShow: null,
            msgHide: null
        },
        X = {};
    return e.fn.validator = function (t) {
            var i = this,
                r = arguments;
            return i.is(N) ? i : (i.is("form") || (i = this.find("form")), i.length || (i = this), i.each(function () {
                var i = e(this).data(m);
                if (i)
                    if (P(t)) {
                        if ("_" === t.charAt(0)) return;
                        i[t].apply(i, [].slice.call(r, 1))
                    } else t && (i._reset(!0), i._init(this, t));
                else new n(this, t)
            }), this)
        }, e.fn.isValid = function (e, n) {
            var i, r, s = a(this[0]),
                o = I(e);
            return !s || (o || n !== t || (n = e), s.checkOnly = !!n, r = s.options, i = s._multiValidate(this.is(N) ? this : this.find(N), function (t) {
                t || !r.focusInvalid || s.checkOnly || s.$el.find("[" + _ + "]:first").focus(), o && (e.length ? e(t) : t && e()), s.checkOnly = !1
            }), o ? this : i)
        }, e.extend(e.expr.pseudos || e.expr[":"], {
            verifiable: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && !{
                    submit: 1,
                    button: 1,
                    reset: 1,
                    image: 1
                } [e.type] || "select" === t || "textarea" === t || "true" === e.contentEditable) && !e.disabled
            },
            filled: function (t) {
                return !!z(e(t).val())
            }
        }), n.prototype = {
            _init: function (t, n) {
                var o, a, l, u = this;
                I(n) && (n = {
                    valid: n
                }), n = u._opt = n || {}, l = W(t, "data-" + m + "-option"), l = u._dataOpt = l && "{" === l.charAt(0) ? new Function("return " + l)() : {}, a = u._themeOpt = X[n.theme || l.theme || V.theme], o = u.options = e.extend({}, V, Q, a, u.options, n, l), u.rules = new r(o.rules, !0), u.messages = new s(o.messages, !0), u.Field = i(u), u.elements = u.elements || {}, u.deferred = {}, u.errors = {}, u.fields = {}, u._initFields(o.fields), u.$el.data(m) || (u.$el.data(m, u).addClass(w + " " + o.formClass).on("form-submit-validate", function (e, t, n, i, r) {
                    u.vetoed = r.veto = !u.isValid, u.ajaxFormOptions = i
                }).on("submit" + v + " validate" + v, H(u, "_submit")).on("reset" + v, H(u, "_reset")).on("showmsg" + v, H(u, "_showmsg")).on("hidemsg" + v, H(u, "_hidemsg")).on("focusin" + v + " click" + v, N, H(u, "_focusin")).on("focusout" + v + " validate" + v, N, H(u, "_focusout")).on("keyup" + v + " input" + v + " compositionstart compositionend", N, H(u, "_focusout")).on("click" + v, ":radio,:checkbox", "click", H(u, "_focusout")).on("change" + v, 'select,input[type="file"]', "change", H(u, "_focusout")), u._NOVALIDATE = W(t, S), W(t, S, S)), P(o.target) && u.$el.find(o.target).addClass("msg-container")
            },
            _guessAjax: function (t) {
                function n(t, n, i) {
                    return !!(t && t[n] && e.map(t[n], function (e) {
                        return ~e.namespace.indexOf(i) ? 1 : null
                    }).length)
                }
                var i = this;
                if (!(i.isAjaxSubmit = !!i.options.valid)) {
                    var r = (e._data || e.data)(t, "events");
                    i.isAjaxSubmit = n(r, "valid", "form") || n(r, "submit", "form-plugin")
                }
            },
            _initFields: function (e) {
                function t(e, t) {
                    if (null === t || o) {
                        var n = s.elements[e];
                        n && s._resetElement(n, !0), delete s.fields[e]
                    } else s.fields[e] = new s.Field(e, P(t) ? {
                        rule: t
                    } : t, s.fields[e])
                }
                var n, i, r, s = this,
                    o = null === e;
                if (o && (e = s.fields), F(e))
                    for (n in e)
                        if (~n.indexOf(","))
                            for (i = n.split(","), r = i.length; r--;) t(z(i[r]), e[n]);
                        else t(n, e[n]);
                s.$el.find(N).each(function () {
                    s._parse(this)
                })
            },
            _parse: function (e) {
                var t, n, i, r = this,
                    s = e.name,
                    o = W(e, b);
                return o && W(e, b, null), e.id && ("#" + e.id in r.fields || !s || null !== o && (t = r.fields[s]) && o !== t.rule && e.id !== t.key) && (s = "#" + e.id), s || (s = "#" + (e.id = "N" + String(Math.random()).slice(-12))), t = r.getField(s, !0), t.rule = o || t.rule, (n = W(e, "data-display")) && (t.display = n), t.rule && ((null !== W(e, "data-must") || /\b(?:match|checked)\b/.test(t.rule)) && (t.must = !0), /\brequired\b/.test(t.rule) && (t.required = !0), (i = W(e, k)) ? t.timely = +i : t.timely > 3 && W(e, k, t.timely), r._parseRule(t), t.old = {}), P(t.target) && W(e, E, t.target), P(t.tip) && W(e, T, t.tip), r.fields[s] = t
            },
            _parseRule: function (n) {
                var i = $.exec(n.rule);
                i && (n._i = 0, i[1] && (n.display = i[1]), i[2] && (n._rules = [], i[2].replace(D, function () {
                    var i = arguments;
                    i[4] = i[4] || i[5], n._rules.push({
                        and: "&" === i[1],
                        not: "!" === i[2],
                        or: "|" === i[6],
                        method: i[3],
                        params: i[4] ? e.map(i[4].split(", "), z) : t
                    })
                })))
            },
            _multiValidate: function (n, i) {
                var r = this,
                    s = r.options;
                return r.hasError = !1, s.ignore && (n = n.not(s.ignore)), n.each(function () {
                    if (r._validate(this), r.hasError && s.stopOnError) return !1
                }), i && (r.validating = !0, e.when.apply(null, e.map(r.deferred, function (e) {
                    return e
                })).done(function () {
                    i.call(r, !r.hasError), r.validating = !1
                })), e.isEmptyObject(r.deferred) ? !r.hasError : t
            },
            _submit: function (n) {
                var i = this,
                    r = i.options,
                    s = n.target,
                    o = "submit" === n.type && "FORM" === s.tagName && !n.isDefaultPrevented();
                n.preventDefault(), g && ~(g = !1) || i.submiting || "validate" === n.type && i.$el[0] !== s || I(r.beforeSubmit) && !1 === r.beforeSubmit.call(i, s) || (i.isAjaxSubmit === t && i._guessAjax(s), i._debug("log", "\n<<< event: " + n.type), i._reset(), i.submiting = !0, i._multiValidate(i.$el.find(N), function (t) {
                    var n, a = t || 2 === r.debug ? "valid" : "invalid";
                    t || (r.focusInvalid && i.$el.find("[" + _ + "]:first").focus(), n = e.map(i.errors, function (e) {
                        return e
                    })), i.submiting = !1, i.isValid = t, I(r[a]) && r[a].call(i, s, n), i.$el.trigger(a + ".form", [s, n]), i._debug("log", ">>> " + a), t && (i.vetoed ? e(s).ajaxSubmit(i.ajaxFormOptions) : o && !i.isAjaxSubmit && document.createElement("form").submit.call(s))
                }))
            },
            _reset: function (e) {
                var t = this;
                t.errors = {}, e && (t.reseting = !0, t.$el.find(N).each(function () {
                    t._resetElement(this)
                }), delete t.reseting)
            },
            _resetElement: function (e, t) {
                this._setClass(e, null), this.hideMsg(e)
            },
            _focusin: function (e) {
                var t, n, i = this,
                    r = i.options,
                    s = e.target;
                i.validating || "click" === e.type && document.activeElement === s || (r.focusCleanup && "true" === W(s, _) && (i._setClass(s, null), i.hideMsg(s)), n = W(s, T), n ? i.showMsg(s, {
                    type: "tip",
                    msg: n
                }) : (W(s, b) && i._parse(s), (t = W(s, k)) && (8 !== t && 9 !== t || i._focusout(e))))
            },
            _focusout: function (t) {
                var n, i, r, s, o, a, l, u, c, h = this,
                    p = h.options,
                    f = t.target,
                    g = t.type,
                    m = "focusin" === g,
                    v = "validate" === g,
                    y = 0;
                if ("compositionstart" === g && (h.pauseValidate = !0), "compositionend" === g && (h.pauseValidate = !1), !h.pauseValidate && (i = f.name && d(f) ? h.$el.find('input[name="' + f.name + '"]').get(0) : f, (r = h.getField(i)) && r.rule)) {
                    if (n = r._e, r._e = g, c = r.timely, !v) {
                        if (!c || d(f) && "click" !== g) return;
                        if (o = r.getValue(), r.ignoreBlank && !o && !m) return void h.hideMsg(f);
                        if ("focusout" === g) {
                            if ("change" === n) return;
                            if (2 === c || 8 === c) {
                                if (s = r.old, !o || !s) return;
                                r.isValid && !s.showOk ? h.hideMsg(f) : h._makeMsg(f, r, s)
                            }
                        } else {
                            if (c < 2 && !t.data) return;
                            if ((a = +new Date) - (f._ts || 0) < 100) return;
                            if (f._ts = a, "keyup" === g) {
                                if ("input" === n) return;
                                if (l = t.keyCode, u = {
                                        8: 1,
                                        9: 1,
                                        16: 1,
                                        32: 1,
                                        46: 1
                                    }, 9 === l && !o) return;
                                if (l < 48 && !u[l]) return
                            }
                            m || (y = c < 100 ? "click" === g || "SELECT" === f.tagName ? 0 : 400 : c)
                        }
                    }
                    p.ignore && e(f).is(p.ignore) || (clearTimeout(r._t), y ? r._t = setTimeout(function () {
                        h._validate(f, r)
                    }, y) : (v && (r.old = {}), h._validate(f, r)))
                }
            },
            _setClass: function (t, n) {
                var i = e(t),
                    r = this.options;
                r.bindClassTo && (i = i.closest(r.bindClassTo)), i.removeClass(r.invalidClass + " " + r.validClass), null !== n && i.addClass(n ? r.validClass : r.invalidClass)
            },
            _showmsg: function (e, t, n) {
                var i = this,
                    r = e.target;
                i.$el.is(r) ? F(t) ? i.showMsg(t) : "tip" === t && i.$el.find(N + "[" + T + "]", r).each(function () {
                    i.showMsg(this, {
                        type: t,
                        msg: n
                    })
                }) : i.showMsg(r, {
                    type: t,
                    msg: n
                })
            },
            _hidemsg: function (t) {
                var n = e(t.target);
                n.is(N) && this.hideMsg(n)
            },
            _validatedField: function (t, n, i) {
                var r = this,
                    s = r.options,
                    o = n.isValid = i.isValid = !!i.isValid,
                    a = o ? "valid" : "invalid";
                i.key = n.key, i.ruleName = n._r, i.id = t.id, i.value = n.value, r.elements[n.key] = i.element = t, r.isValid = r.$el[0].isValid = o ? r.isFormValid() : o, o ? i.type = "ok" : (r.submiting && (r.errors[n.key] = i.msg), r.hasError = !0), n.old = i, I(n[a]) && n[a].call(r, t, i), I(s.validation) && s.validation.call(r, t, i), e(t).attr(_, !o || null).trigger(a + y, [i, r]), r.$el.triggerHandler("validation", [i, r]), r.checkOnly || (r._setClass(t, i.skip || "tip" === i.type ? null : o), r._makeMsg.apply(r, arguments))
            },
            _makeMsg: function (t, n, i) {
                n.msgMaker && (i = e.extend({}, i), "focusin" === n._e && (i.type = "tip"), this[i.showOk || i.msg || "tip" === i.type ? "showMsg" : "hideMsg"](t, i, n))
            },
            _validatedRule: function (n, i, r, s) {
                i = i || d.getField(n), s = s || {};
                var o, a, l, c, d = this,
                    h = i._r,
                    p = i.timely,
                    f = 9 === p || 8 === p,
                    g = !1;
                if (null === r) return d._validatedField(n, i, {
                    isValid: !0,
                    skip: !0
                }), void(i._i = 0);
                if (r === t ? l = !0 : !0 === r || "" === r ? g = !0 : P(r) ? o = r : F(r) ? r.error ? o = r.error : (o = r.ok, g = !0) : g = !!r, a = i._rules[i._i], a.not && (o = t, g = "required" === h || !g), a.or)
                    if (g)
                        for (; i._i < i._rules.length && i._rules[i._i].or;) i._i++;
                    else l = !0;
                else a.and && (i.isValid || (l = !0));
                l ? g = !0 : (g && !1 !== i.showOk && (c = W(n, "data-ok"), o = null === c ? P(i.ok) ? i.ok : o : c, !P(o) && P(i.showOk) && (o = i.showOk), P(o) && (s.showOk = g)), g && !f || (o = (u(n, i, o || a.msg || d.messages[h]) || d.messages.fallback).replace(/\{0\|?([^\}]*)\}/, function (e, t) {
                    return d._getDisplay(n, i.display) || t || d.messages[0]
                })), g || (i.isValid = g), s.msg = o, e(n).trigger((g ? "valid" : "invalid") + ".rule", [h, o])), !f || l && !a.and || (g || i._m || (i._m = o), i._v = i._v || [], i._v.push({
                    type: g ? l ? "tip" : "ok" : "error",
                    msg: o || a.msg
                })), d._debug("log", "   " + i._i + ": " + h + " => " + (g || o)), (g || f) && i._i < i._rules.length - 1 ? (i._i++, d._checkRule(n, i)) : (i._i = 0, f ? (s.isValid = i.isValid, s.result = i._v, s.msg = i._m || "", i.value || "focusin" !== i._e || (s.type = "tip")) : s.isValid = g, d._validatedField(n, i, s), delete i._m, delete i._v)
            },
            _checkRule: function (n, i) {
                var r, s, o, a = this,
                    u = i.key,
                    c = i._rules[i._i],
                    d = c.method,
                    h = c.params;
                a.submiting && a.deferred[u] || (o = i.old, i._r = d, o && !i.must && !c.must && c.result !== t && o.ruleName === d && o.id === n.id && i.value && o.value === i.value ? r = c.result : (s = l(n, d) || a.rules[d] || q, r = s.call(i, n, h, i), s.msg && (c.msg = s.msg)), F(r) && I(r.then) ? (a.deferred[u] = r, i.isValid = t, !a.checkOnly && a.showMsg(n, {
                    type: "loading",
                    msg: a.messages.loading
                }, i), r.then(function (r, s, o) {
                    var l, u = z(o.responseText),
                        d = i.dataFilter;
                    /jsonp?/.test(this.dataType) ? u = r : "{" === u.charAt(0) && (u = e.parseJSON(u)), l = d.call(this, u, i), l === t && (l = d.call(this, u.data, i)), c.data = this.data, c.result = i.old ? l : t, a._validatedRule(n, i, l)
                }, function (e, t) {
                    a._validatedRule(n, i, a.messages[t] || t)
                }).always(function () {
                    delete a.deferred[u]
                })) : a._validatedRule(n, i, r))
            },
            _validate: function (e, t) {
                var n = this;
                if (!e.disabled && null === W(e, S) && (t = t || n.getField(e)) && (t._rules || n._parse(e), t._rules)) return n._debug("info", t.key), t.isValid = !0, t.element = e, t.value = t.getValue(), t.required || t.must || t.value || d(e) ? (n._checkRule(e, t), t.isValid) : (n._validatedField(e, t, {
                    isValid: !0
                }), !0)
            },
            _debug: function (e, t) {
                window.console && this.options.debug && console[e](t)
            },
            test: function (e, n) {
                var i, r, s, o, a = this,
                    l = j.exec(n);
                return l && (s = l[1]) in a.rules && (o = l[2] || l[3], o = o ? o.split(", ") : t, r = a.getField(e, !0), r._r = s, r.value = r.getValue(), i = a.rules[s].call(r, e, o)), !0 === i || i === t || null === i
            },
            _getDisplay: function (e, t) {
                return P(t) ? t : I(t) ? t.call(this, e) : ""
            },
            _getMsgOpt: function (t, n) {
                var i = n || this.options;
                return e.extend({
                    type: "error",
                    pos: c(i.msgClass),
                    target: i.target,
                    wrapper: i.msgWrapper,
                    style: i.msgStyle,
                    cls: i.msgClass,
                    arrow: i.msgArrow,
                    icon: i.msgIcon
                }, P(t) ? {
                    msg: t
                } : t)
            },
            _getMsgDOM: function (n, i) {
                var r, s, o, a, l = e(n);
                if (l.is(N) ? (o = i.target || W(n, E), o && (o = I(o) ? o.call(this, n) : "#" === o.charAt(0) ? e(o) : this.$el.find(o), o.length && (o.is(N) ? (l = o, n = o.get(0)) : o.hasClass(x) ? r = o : a = o)), r || (s = d(n) && n.name || !n.id ? n.name : n.id, r = (a || this.$el).find(i.wrapper + "." + x + '[for="' + s + '"]'))) : r = l, !i.hide && !r.length)
                    if (r = e("<" + i.wrapper + ">").attr({
                            class: x + (i.cls ? " " + i.cls : ""),
                            style: i.style || t,
                            for: s
                        }), a) r.appendTo(a);
                    else if (d(n)) {
                    var u = l.parent();
                    r.appendTo(u.is("label") ? u.parent() : u)
                } else r[i.pos && "right" !== i.pos ? "insertBefore" : "insertAfter"](l);
                return r
            },
            showMsg: function (t, n, i) {
                if (t) {
                    var r, s, o, a, l = this,
                        u = l.options;
                    if (F(t) && !t.jquery && !n) return void e.each(t, function (e, t) {
                        var n = l.elements[e] || l.$el.find(f(e))[0];
                        l.showMsg(n, t)
                    });
                    e(t).is(N) && (i = i || l.getField(t)), (s = (i || u).msgMaker) && (n = l._getMsgOpt(n, i), t = (t.name && d(t) ? l.$el.find('input[name="' + t.name + '"]') : e(t)).get(0), n.msg || "error" === n.type || null !== (o = W(t, "data-" + n.type)) && (n.msg = o), P(n.msg) && (a = l._getMsgDOM(t, n), !M.test(a[0].className) && a.addClass(n.cls), 6 === R && "bottom" === n.pos && (a[0].style.marginTop = e(t).outerHeight() + "px"), a.html(s.call(l, n))[0].style.display = "", I(r = i && i.msgShow || u.msgShow) && r.call(l, a, n.type)))
                }
            },
            hideMsg: function (t, n, i) {
                var r, s, o = this,
                    a = o.options;
                t = e(t).get(0), e(t).is(N) && (i = i || o.getField(t)) && (i.isValid || o.reseting) && W(t, _, null), n = o._getMsgOpt(n, i), n.hide = !0, s = o._getMsgDOM(t, n), s.length && (I(r = i && i.msgHide || a.msgHide) ? r.call(o, s, n.type) : (s[0].style.display = "none", s[0].innerHTML = ""))
            },
            getField: function (e, n) {
                var i, r, s = this;
                if (P(e)) i = e, e = t;
                else {
                    if (W(e, b)) return s._parse(e);
                    i = e.id && "#" + e.id in s.fields || !e.name ? "#" + e.id : e.name
                }
                return ((r = s.fields[i]) || n && (r = new s.Field(i))) && (r.element = e), r
            },
            setField: function (e, t) {
                var n = {};
                e && (P(e) ? n[e] = t : n = e, this._initFields(n))
            },
            isFormValid: function () {
                var e, t, n = this.fields;
                for (e in n)
                    if (t = n[e], t._rules && (t.required || t.must || t.value) && !t.isValid) return !1;
                return !0
            },
            holdSubmit: function (e) {
                this.submiting = e === t || e
            },
            cleanUp: function () {
                this._reset(1)
            },
            destroy: function () {
                this._reset(1), this.$el.off(v).removeData(m), W(this.$el[0], S, this._NOVALIDATE)
            }
        }, e(window).on("beforeunload", function () {
            this.focus()
        }), e(document).on("click", ":submit", function () {
            var e, t = this;
            t.form && ((e = t.getAttributeNode("formnovalidate")) && null !== e.nodeValue || null !== W(t, S)) && (g = !0)
        }).on("focusin submit validate", "form,." + w, function (t) {
            if (null === W(this, S)) {
                var n, i = e(this);
                !i.data(m) && (n = a(this)) && (e.isEmptyObject(n.fields) ? (W(this, S, S), i.off(v).removeData(m)) : "focusin" === t.type ? n._focusin(t) : n._submit(t))
            }
        }), new s({
            fallback: "This field is not valid.",
            loading: "Validating..."
        }), new r({
            required: function (t, n) {
                var i = this,
                    r = z(i.value),
                    s = !0;
                if (n)
                    if (1 === n.length) {
                        if (p(n[0])) {
                            if (i.rules[n[0]] && !r && !i.test(t, n[0])) return null
                        } else if (!r && !e(n[0], i.$el).length) return null
                    } else if ("not" === n[0]) e.each(n.slice(1), function () {
                    return s = r !== z(this)
                });
                else if ("from" === n[0]) {
                    var o, a = i.$el.find(n[1]),
                        l = "_validated_";
                    return s = a.filter(function () {
                        var e = i.getField(this);
                        return e && !!z(e.getValue())
                    }).length >= (n[2] || 1), s ? r || (o = null) : o = u(a[0], i) || !1, e(t).data(l) || a.data(l, 1).each(function () {
                        t !== this && i._validate(this)
                    }).removeData(l), o
                }
                return s && !!r
            },
            integer: function (e, t) {
                var n, i = "0|",
                    r = "[1-9]\\d*",
                    s = t ? t[0] : "*";
                switch (s) {
                    case "+":
                        n = r;
                        break;
                    case "-":
                        n = "-" + r;
                        break;
                    case "+0":
                        n = i + r;
                        break;
                    case "-0":
                        n = "0|-" + r;
                        break;
                    default:
                        n = "0|-?" + r
                }
                return n = "^(?:" + n + ")$", new RegExp(n).test(this.value) || this.messages.integer && this.messages.integer[s]
            },
            match: function (t, n) {
                if (n) {
                    var i, r, s, o, a, l, u, c = this,
                        d = !0,
                        p = "eq";
                    if (1 === n.length ? s = n[0] : (p = n[0], s = n[1]), a = f(s), l = c.$el.find(a)[0]) {
                        if (u = c.getField(l), i = c.value, r = u.getValue(), c._match || (c.$el.on("valid" + y + v, a, function () {
                                e(t).trigger("validate")
                            }), c._match = u._match = 1), !c.required && "" === i && "" === r) return null;
                        if (o = n[2], o && (/^date(time)?$/i.test(o) ? (i = h(i), r = h(r)) : "time" === o && (i = +i.replace(/:/g, ""), r = +r.replace(/:/g, ""))), "eq" !== p && !isNaN(+i) && isNaN(+r)) return !0;
                        switch (p) {
                            case "lt":
                                d = +i < +r;
                                break;
                            case "lte":
                                d = +i <= +r;
                                break;
                            case "gte":
                                d = +i >= +r;
                                break;
                            case "gt":
                                d = +i > +r;
                                break;
                            case "neq":
                                d = i !== r;
                                break;
                            default:
                                d = i === r
                        }
                        return d || F(c.messages.match) && c.messages.match[p].replace("{1}", c._getDisplay(l, u.display || s))
                    }
                }
            },
            range: function (e, t) {
                return this.getRangeMsg(this.value, t)
            },
            checked: function (e, t) {
                if (d(e)) {
                    var n, i, r = this;
                    return e.name ? i = r.$el.find('input[name="' + e.name + '"]').filter(function () {
                        var e = this;
                        return !n && d(e) && (n = e), !e.disabled && e.checked
                    }).length : (n = e, i = n.checked), t ? r.getRangeMsg(i, t) : !!i || u(n, r, "") || r.messages.required || !1
                }
            },
            length: function (e, t) {
                var n = this.value,
                    i = ("true" === t[1] ? n.replace(A, "xx") : n).length;
                return this.getRangeMsg(i, t, t[1] ? "_2" : "")
            },
            remote: function (t, n) {
                if (n) {
                    var i, r = this,
                        s = L.exec(n[0]),
                        o = r._rules[r._i],
                        a = {},
                        l = "",
                        u = s[3],
                        c = s[2] || "POST",
                        d = (s[1] || "").toLowerCase();
                    return o.must = !0, a[t.name] = r.value, n[1] && e.map(n.slice(1), function (e) {
                        var t, n;
                        ~e.indexOf("=") ? l += "&" + e : (t = e.split(":"), e = z(t[0]), n = z(t[1]) || e, a[e] = r.$el.find(f(n)).val())
                    }), a = e.param(a) + l, !r.must && o.data && o.data === a ? o.result : ("cors" !== d && /^https?:/.test(u) && !~u.indexOf(location.host) && (i = "jsonp"), e.ajax({
                        url: u,
                        type: c,
                        data: a,
                        dataType: i
                    }))
                }
            },
            filter: function (e, t) {
                var n = this.value,
                    i = n.replace(t ? new RegExp("[" + t[0] + "]", "gm") : O, "");
                i !== n && this.setValue(i)
            }
        }), n.config = function (t, n) {
            function i(e, t) {
                "rules" === e ? new r(t) : "messages" === e ? new s(t) : e in Q ? Q[e] = t : V[e] = t
            }
            F(t) ? e.each(t, i) : P(t) && i(t, n)
        }, n.setTheme = function (t, n) {
            F(t) ? e.extend(!0, X, t) : P(t) && F(n) && (X[t] = e.extend(X[t], n))
        }, n.load = function (t) {
            if (t) {
                var i, r, s, o = document,
                    a = {},
                    l = o.scripts[0];
                t.replace(/([^?=&]+)=([^&#]*)/g, function (e, t, n) {
                    a[t] = n
                }), i = a.dir || n.dir, n.css || "" === a.css || (r = o.createElement("link"), r.rel = "stylesheet", r.href = n.css = i + "jquery.validator.css", l.parentNode.insertBefore(r, l)), !n.local && ~t.indexOf("local") && "" !== a.local && (n.local = (a.local || o.documentElement.lang || "en").replace("_", "-"), n.pending = 1, r = o.createElement("script"), r.src = i + "local/" + n.local + ".js", s = "onload" in r ? "onload" : "onreadystatechange", r[s] = function () {
                    r.readyState && !/loaded|complete/.test(r.readyState) || (r = r[s] = null, delete n.pending, e(window).triggerHandler("validatorready"))
                }, l.parentNode.insertBefore(r, l))
            }
        },
        function () {
            for (var e, t, i = document.scripts, r = i.length, s = /(.*validator(?:\.min)?.js)(\?.*(?:local|css|dir)(?:=[\w\-]*)?)?/; r-- && !t;) e = i[r], t = (e.hasAttribute ? e.src : e.getAttribute("src", 4) || "").match(s);
            t && (n.dir = t[1].split("/").slice(0, -1).join("/") + "/", n.load(t[2]))
        }(), e[m] = n
}),
function (e) {
    "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    e.validator.config({
        rules: {
            digits: [/^\d+$/, "请填写数字"],
            letters: [/^[a-z]+$/i, "请填写字母"],
            date: [/^\d{4}-\d{2}-\d{2}$/, "请填写有效的日期，格式:yyyy-mm-dd"],
            time: [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, "请填写有效的时间，00:00到23:59之间"],
            email: [/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, "请填写有效的邮箱"],
            url: [/^(https?|s?ftp):\/\/\S+$/i, "请填写有效的网址"],
            qq: [/^[1-9]\d{4,}$/, "请填写有效的QQ号"],
            IDcard: [/^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/, "请填写正确的身份证号码"],
            tel: [/^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/, "请填写有效的电话号码"],
            mobile: [/^1[3-9]\d{9}$/, "请填写有效的手机号"],
            zipcode: [/^\d{6}$/, "请检查邮政编码格式"],
            chinese: [/^[\u0391-\uFFE5]+$/, "请填写中文字符"],
            username: [/^\w{3,12}$/, "请填写3-12位数字、字母、下划线"],
            password: [/^[\S]{6,16}$/, "请填写6-16位字符，不能包含空格"],
            accept: function (t, n) {
                if (!n) return !0;
                var i = n[0],
                    r = e(t).val();
                return "*" === i || new RegExp(".(?:" + i + ")$", "i").test(r) || this.renderMsg("只接受{1}后缀的文件", i.replace(/\|/g, ","))
            }
        },
        messages: {
            0: "此处",
            fallback: "{0}格式不正确",
            loading: "正在验证...",
            error: "网络异常",
            timeout: "请求超时",
            required: "{0}不能为空",
            remote: "{0}已被使用",
            integer: {
                "*": "请填写整数",
                "+": "请填写正整数",
                "+0": "请填写正整数或0",
                "-": "请填写负整数",
                "-0": "请填写负整数或0"
            },
            match: {
                eq: "{0}与{1}不一致",
                neq: "{0}与{1}不能相同",
                lt: "{0}必须小于{1}",
                gt: "{0}必须大于{1}",
                lte: "{0}不能大于{1}",
                gte: "{0}不能小于{1}"
            },
            range: {
                rg: "请填写{1}到{2}的数",
                gte: "请填写不小于{1}的数",
                lte: "请填写最大{1}的数",
                gtlt: "请填写{1}到{2}之间的数",
                gt: "请填写大于{1}的数",
                lt: "请填写小于{1}的数"
            },
            checked: {
                eq: "请选择{1}项",
                rg: "请选择{1}到{2}项",
                gte: "请至少选择{1}项",
                lte: "请最多选择{1}项"
            },
            length: {
                eq: "请填写{1}个字符",
                rg: "请填写{1}到{2}个字符",
                gte: "请至少填写{1}个字符",
                lte: "请最多填写{1}个字符",
                eq_2: "",
                rg_2: "",
                gte_2: "",
                lte_2: ""
            }
        }
    });
    var t = '<span class="n-arrow"><b>◆</b><i>◆</i></span>';
    e.validator.setTheme({
        simple_right: {
            formClass: "n-simple",
            msgClass: "n-right"
        },
        simple_bottom: {
            formClass: "n-simple",
            msgClass: "n-bottom"
        },
        yellow_top: {
            formClass: "n-yellow",
            msgClass: "n-top",
            msgArrow: t
        },
        yellow_right: {
            formClass: "n-yellow",
            msgClass: "n-right",
            msgArrow: t
        },
        yellow_right_effect: {
            formClass: "n-yellow",
            msgClass: "n-right",
            msgArrow: t,
            msgShow: function (e, t) {
                var n = e.children();
                n.is(":animated") || ("error" === t ? n.css({
                    left: "20px",
                    opacity: 0
                }).delay(100).show().stop().animate({
                    left: "-4px",
                    opacity: 1
                }, 150).animate({
                    left: "3px"
                }, 80).animate({
                    left: 0
                }, 80) : n.css({
                    left: 0,
                    opacity: 1
                }).fadeIn(200))
            },
            msgHide: function (e, t) {
                e.children().stop().delay(100).show().animate({
                    left: "20px",
                    opacity: 0
                }, 300, function () {
                    e.hide()
                })
            }
        }
    })
}),
function (e, t, n, i) {
    function r(t, n) {
        this.settings = null, this.options = e.extend({}, r.Defaults, n), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, e.each(["onResize", "onThrottledResize"], e.proxy(function (t, n) {
            this._handlers[n] = e.proxy(this[n], this)
        }, this)), e.each(r.Plugins, e.proxy(function (e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), e.each(r.Workers, e.proxy(function (t, n) {
            this._pipe.push({
                filter: n.filter,
                run: e.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, r.Type = {
        Event: "event",
        State: "state"
    }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            var t = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            !n && this.$stage.children().css(r), e.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                r = !this.settings.autoWidth,
                s = [];
            for (e.items = {
                    merge: !1,
                    width: t
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = n > 1 || e.items.merge, s[i] = r ? t * n : this._items[i].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var t = [],
                n = this._items,
                i = this.settings,
                r = Math.max(2 * i.items, 4),
                s = 2 * Math.ceil(n.length / 2),
                o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0,
                a = "",
                l = "";
            for (o /= 2; o > 0;) t.push(this.normalize(t.length / 2, !0)), a += n[t[t.length - 1]][0].outerHTML, t.push(this.normalize(n.length - 1 - (t.length - 1) / 2, !0)), l = n[t[t.length - 1]][0].outerHTML + l, o -= 1;
            this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < t;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * e);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, i.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var e, t, n, i, r = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s,
                a = o + this.width() * r,
                l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + s * r, (this.op(e, "<=", o) && this.op(e, ">", a) || this.op(t, "<", o) && this.op(t, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], r.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(e("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, r.prototype.initializeItems = function () {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map(function (t) {
            return e(t)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, r.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, t, n;
            e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.$element.children(t).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e)
        }
        this.initializeStage(), this.initializeItems(),
            this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, r.prototype.setup = function () {
        var t = this.viewport(),
            n = this.options.responsive,
            i = -1,
            r = null;
        n ? (e.each(n, function (e) {
            e <= t && e > i && (i = Number(e))
        }), r = e.extend({}, this.options, n[i]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = e.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, r.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function (t) {
        var n = this.trigger("prepare", {
            content: t
        });
        return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, r.prototype.update = function () {
        for (var t = 0, n = this._pipe.length, i = e.proxy(function (e) {
                return this[e]
            }, this._invalidated), r = {}; t < n;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(r), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function (e) {
        switch (e = e || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, r.prototype.onThrottledResize = function () {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, r.prototype.registerEventHandlers = function () {
        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
    }, r.prototype.onDragStart = function (t) {
        var i = null;
        3 !== t.which && (e.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
            x: i[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        }) : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (e.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), e(n).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(n).one("mousemove.owl.core touchmove.owl.core", e.proxy(function (t) {
            var i = this.difference(this._drag.pointer, this.pointer(t));
            e(n).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, r.prototype.onDragMove = function (e) {
        var t = null,
            n = null,
            i = null,
            r = this.difference(this._drag.pointer, this.pointer(e)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
    }, r.prototype.onDragEnd = function (t) {
        var i = this.difference(this._drag.pointer, this.pointer(t)),
            r = this._drag.stage.current,
            s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function (t, n) {
        var r = -1,
            s = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || e.each(o, e.proxy(function (e, a) {
            return "left" === n && t > a - 30 && t < a + 30 ? r = e : "right" === n && t > a - s - 30 && t < a - s + 30 ? r = e + 1 : this.op(t, "<", a) && this.op(t, ">", o[e + 1] !== i ? o[e + 1] : a - s) && (r = "left" === n ? e + 1 : e), -1 === r
        }, this)), this.settings.loop || (this.op(t, ">", o[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", o[this.maximum()]) && (r = t = this.maximum())), r
    }, r.prototype.animate = function (t) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : n ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, r.prototype.is = function (e) {
        return this._states.current[e] && this._states.current[e] > 0
    }, r.prototype.current = function (e) {
        if (e === i) return this._current;
        if (0 === this._items.length) return i;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function (t) {
        return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function (e, t) {
            return t
        })
    }, r.prototype.reset = function (e) {
        (e = this.normalize(e)) !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function (e, t) {
        var n = this._items.length,
            r = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || n < 1 ? e = i : (e < 0 || e >= n + r) && (e = ((e - r / 2) % n + n) % n + r / 2), e
    }, r.prototype.relative = function (e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, r.prototype.maximum = function (e) {
        var t, n, i, r = this.settings,
            s = this._coordinates.length;
        if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            if (t = this._items.length)
                for (n = this._items[--t].width(), i = this.$element.width(); t-- && !((n += this._items[t].width() + this.settings.margin) > i););
            s = t + 1
        } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return e && (s -= this._clones.length / 2), Math.max(s, 0)
    }, r.prototype.minimum = function (e) {
        return e ? 0 : this._clones.length / 2
    }, r.prototype.items = function (e) {
        return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, r.prototype.mergers = function (e) {
        return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, r.prototype.clones = function (t) {
        var n = this._clones.length / 2,
            r = n + this._items.length,
            s = function (e) {
                return e % 2 == 0 ? r + e / 2 : n - (e + 1) / 2
            };
        return t === i ? e.map(this._clones, function (e, t) {
            return s(t)
        }) : e.map(this._clones, function (e, n) {
            return e === t ? s(n) : null
        })
    }, r.prototype.speed = function (e) {
        return e !== i && (this._speed = e), this._speed
    }, r.prototype.coordinates = function (t) {
        var n, r = 1,
            s = t - 1;
        return t === i ? e.map(this._coordinates, e.proxy(function (e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, s = t + 1), n = this._coordinates[t], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * r) : n = this._coordinates[s] || 0, n = Math.ceil(n))
    }, r.prototype.duration = function (e, t, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, r.prototype.to = function (e, t) {
        var n = this.current(),
            i = null,
            r = e - this.relative(n),
            s = (r > 0) - (r < 0),
            o = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), e = n + r, (i = ((e - a) % o + o) % o + a) !== e && i - r <= l && i - r > 0 && (n = i - r, e = i, this.reset(n))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.isVisible() && this.update()
    }, r.prototype.next = function (e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, r.prototype.prev = function (e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, r.prototype.onTransitionEnd = function (e) {
        if (e !== i && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, r.prototype.viewport = function () {
        var i;
        return this.options.responsiveBaseElement !== t ? i = e(this.options.responsiveBaseElement).width() : t.innerWidth ? i = t.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, r.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(e.proxy(function (e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function (t, n) {
        var r = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
            content: t,
            position: n
        }), t = this.prepare(t), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[n - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(t), this._items.splice(n, 0, t), this._mergers.splice(n, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: n
        })
    }, r.prototype.remove = function (e) {
        (e = this.normalize(e, !0)) !== i && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, r.prototype.preloadAutoWidthImages = function (t) {
        t.each(e.proxy(function (t, n) {
            this.enter("pre-loading"), n = e(n), e(new Image).one("load", e.proxy(function (e) {
                n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }, r.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(n).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function (e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? e > n : e < n;
            case ">":
                return i ? e < n : e > n;
            case ">=":
                return i ? e <= n : e >= n;
            case "<=":
                return i ? e >= n : e <= n
        }
    }, r.prototype.on = function (e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, r.prototype.off = function (e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, r.prototype.trigger = function (t, n, i, s, o) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = e.camelCase(e.grep(["on", t, i], function (e) {
                return e
            }).join("-").toLowerCase()),
            u = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({
                relatedTarget: this
            }, a, n));
        return this._supress[t] || (e.each(this._plugins, function (e, t) {
            t.onTrigger && t.onTrigger(u)
        }), this.register({
            type: r.Type.Event,
            name: t
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, r.prototype.enter = function (t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
            this._states.current[t] === i && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, r.prototype.leave = function (t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
            this._states.current[t]--
        }, this))
    }, r.prototype.register = function (t) {
        if (t.type === r.Type.Event) {
            if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                var n = e.event.special[t.name]._default;
                e.event.special[t.name]._default = function (e) {
                    return !n || !n.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, e.event.special[t.name].owl = !0
            }
        } else t.type === r.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function (n, i) {
            return e.inArray(n, this._states.tags[t.name]) === i
        }, this)))
    }, r.prototype.suppress = function (t) {
        e.each(t, e.proxy(function (e, t) {
            this._supress[t] = !0
        }, this))
    }, r.prototype.release = function (t) {
        e.each(t, e.proxy(function (e, t) {
            delete this._supress[t]
        }, this))
    }, r.prototype.pointer = function (e) {
        var n = {
            x: null,
            y: null
        };
        return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (n.x = e.pageX, n.y = e.pageY) : (n.x = e.clientX, n.y = e.clientY), n
    }, r.prototype.isNumeric = function (e) {
        return !isNaN(parseFloat(e))
    }, r.prototype.difference = function (e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, e.fn.owlCarousel = function (t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var i = e(this),
                s = i.data("owl.carousel");
            s || (s = new r(this, "object" == typeof t && t), i.data("owl.carousel", s), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, n) {
                s.register({
                    type: r.Type.Event,
                    name: n
                }), s.$element.on(n + ".owl.carousel.core", e.proxy(function (e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, s))
            })), "string" == typeof t && "_" !== t.charAt(0) && s[t].apply(s, n)
        })
    }, e.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    var r = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var e, n;
        t.clearInterval(this._interval);
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    var r = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var n = this._core.settings,
                        i = n.center && Math.ceil(n.items / 2) || n.items,
                        r = n.center && -1 * i || 0,
                        s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + r,
                        o = this._core.clones().length,
                        a = e.proxy(function (e, t) {
                            this.load(t)
                        }, this);
                    for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (s -= n.lazyLoadEager, i++)); r++ < i;) this.load(o / 2 + this._core.relative(s)), o && e.each(this._core.clones(this._core.relative(s)), a), s++
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, r.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n),
            r = i && i.find(".owl-lazy");
        !r || e.inArray(i.get(0), this._loaded) > -1 || (r.each(e.proxy(function (n, i) {
            var r, s = e(i),
                o = t.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: o
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", e.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this)).attr("src", o) : s.is("source") ? s.one("load.owl.lazy", e.proxy(function () {
                this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this)).attr("srcset", o) : (r = new Image, r.onload = e.proxy(function () {
                s.css({
                    "background-image": 'url("' + o + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this), r.src = o)
        }, this)), this._loaded.push(i.get(0)))
    }, r.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    var r = function (n) {
        this._core = n, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var i = this;
        e(t).on("load", function () {
            i._core.settings.autoHeight && i.update()
        }), e(t).resize(function () {
            i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout(function () {
                i.update()
            }, 250))
        })
    };
    r.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, r.prototype.update = function () {
        var t = this._core._current,
            n = t + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            r = this._core.$stage.children().toArray().slice(t, n),
            s = [],
            o = 0;
        e.each(r, function (t, n) {
            s.push(e(n).height())
        }), o = Math.max.apply(null, s), o <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function () {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    var r = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": e.proxy(function (t) {
                if (t.namespace) {
                    var n = e(t.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function (e) {
            this.play(e)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, r.prototype.fetch = function (e, t) {
        var n = function () {
                return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            r = e.attr("data-width") || this._core.settings.videoWidth,
            s = e.attr("data-height") || this._core.settings.videoHeight,
            o = e.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[o] = {
            type: n,
            id: i,
            width: r,
            height: s
        }, t.attr("data-video", o), this.thumbnail(e, this._videos[o])
    }, r.prototype.thumbnail = function (t, n) {
        var i, r, s, o = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
            a = t.find("img"),
            l = "src",
            u = "",
            c = this._core.settings,
            d = function (n) {
                r = '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? e("<div/>", {
                    class: "owl-video-tn " + u,
                    srcType: n
                }) : e("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + n + ")"
                }), t.after(i), t.after(r)
            };
        if (t.wrap(e("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length) return d(a.attr(l)), a.remove(), !1;
        "youtube" === n.type ? (s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", d(s)) : "vimeo" === n.type ? e.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                s = e[0].thumbnail_large, d(s)
            }
        }) : "vzaar" === n.type && e.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                s = e.framegrab_url, d(s)
            }
        })
    }, r.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, r.prototype.play = function (t) {
        var n, i = e(t.target),
            r = i.closest("." + this._core.settings.itemClass),
            s = this._videos[r.attr("data-video")],
            o = s.width || "100%",
            a = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), n = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), n.attr("height", a), n.attr("width", o), "youtube" === s.type ? n.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? n.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && n.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), e(n).wrap('<div class="owl-video-frame" />').insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function () {
        var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return t && e(t).parent().hasClass("owl-video-frame")
    }, r.prototype.destroy = function () {
        var e, t;
        this._core.$element.off("click.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    var r = function (t) {
        this.core = t, this.core.options = e.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function (e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": e.proxy(function (e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, r.prototype.swap = function () {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var t, n = e.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(e.support.animation.end, n).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(o)), s && r.one(e.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
        }
    }, r.prototype.clear = function (t) {
        e(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, r.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    var r = function (t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": e.proxy(function (e, t, n) {
                e.namespace && this.play(t, n)
            }, this),
            "stop.owl.autoplay": e.proxy(function (e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, r.prototype._next = function (i) {
        this._call = t.setTimeout(e.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
    }, r.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, r.prototype.play = function (n, i) {
        var r;
        this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = t.setTimeout(e.proxy(this._next, this, i), n - r)
    }, r.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
    }, r.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
    }, r.prototype.destroy = function () {
        var e, t;
        this.stop();
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    "use strict";
    var r = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, r.prototype.initialize = function () {
        var t, n = this._core.settings;
        this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function (e) {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next = e("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function (e) {
                this.next(n.navSpeed)
            }, this)),
            n.dotsData || (this._templates = [e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy(function (t) {
                var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                t.preventDefault(), this.to(i, n.dotsSpeed)
            }, this));
        for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
    }, r.prototype.destroy = function () {
        var e, t, n, i, r;
        r = this._core.settings;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) "$relative" === t && r.navContainer ? this._controls[t].html("") : this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, r.prototype.update = function () {
        var e, t, n, i = this._core.clones().length / 2,
            r = i + this._core.items().length,
            s = this._core.maximum(!0),
            o = this._core.settings,
            a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], e = i, t = 0, n = 0; e < r; e++) {
                if (t >= a || 0 === t) {
                    if (this._pages.push({
                            start: Math.min(s, e - i),
                            end: e - i + a - 1
                        }), Math.min(s, e - i) === s) break;
                    t = 0, ++n
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, r.prototype.draw = function () {
        var t, n = this._core.settings,
            i = this._core.items().length <= n.items,
            r = this._core.relative(this._core.current()),
            s = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (t = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function (t) {
        var n = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, r.prototype.current = function () {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, e.proxy(function (e, n) {
            return e.start <= t && e.end >= t
        }, this)).pop()
    }, r.prototype.getPosition = function (t) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += r.slideBy : n -= r.slideBy), n
    }, r.prototype.next = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, r.prototype.prev = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, r.prototype.to = function (t, n, i) {
        var r;
        !i && this._pages.length ? (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, n)) : e.proxy(this._overrides.to, this._core)(t, n)
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    "use strict";
    var r = function (n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": e.proxy(function (t) {
                if (t.namespace) {
                    var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = t.content
                }
            }, this),
            "changed.owl.carousel": e.proxy(function (n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        r = e.map(this._hashes, function (e, t) {
                            return e === i ? t : null
                        }).join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function (e) {
            var n = t.location.hash.substring(1),
                i = this._core.$stage.children(),
                r = this._hashes[n] && i.index(this._hashes[n]);
            void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        }, this))
    };
    r.Defaults = {
        URLhashListener: !1
    }, r.prototype.destroy = function () {
        var n, i;
        e(t).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document),
function (e, t, n, i) {
    function r(t, n) {
        var r = !1,
            s = t.charAt(0).toUpperCase() + t.slice(1);
        return e.each((t + " " + a.join(s + " ") + s).split(" "), function (e, t) {
            if (o[t] !== i) return r = !n || t, !1
        }), r
    }

    function s(e) {
        return r(e, !0)
    }
    var o = e("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        u = {
            csstransforms: function () {
                return !!r("transform")
            },
            csstransforms3d: function () {
                return !!r("perspective")
            },
            csstransitions: function () {
                return !!r("transition")
            },
            cssanimations: function () {
                return !!r("animation")
            }
        };
    u.csstransitions() && (e.support.transition = new String(s("transition")), e.support.transition.end = l.transition.end[e.support.transition]), u.cssanimations() && (e.support.animation = new String(s("animation")), e.support.animation.end = l.animation.end[e.support.animation]), u.csstransforms() && (e.support.transform = new String(s("transform")), e.support.transform3d = u.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function (e) {
    e.fn.slide = function (t) {
        return e.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: !1,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: !1,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: !1,
            pnLoop: !0,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: !0,
            defaultPlay: !0,
            returnDefault: !1
        }, this.each(function () {
            var n, i = e.extend({}, e.fn.slide.defaults, t),
                r = e(this),
                s = i.effect,
                o = e(i.prevCell, r),
                a = e(i.nextCell, r),
                l = e(i.pageStateCell, r),
                u = e(i.playStateCell, r),
                c = e(i.titCell, r),
                d = c.size(),
                h = e(i.mainCell, r),
                p = h.children().size(),
                f = i.switchLoad,
                g = e(i.targetCell, r),
                m = parseInt(i.defaultIndex),
                v = parseInt(i.delayTime),
                y = parseInt(i.interTime),
                w = (parseInt(i.triggerTime), parseInt(i.scroll)),
                x = "false" != i.autoPlay && 0 != i.autoPlay,
                _ = "false" != i.opp && 0 != i.opp,
                b = "false" != i.autoPage && 0 != i.autoPage,
                C = "false" != i.pnLoop && 0 != i.pnLoop,
                T = "false" != i.mouseOverStop && 0 != i.mouseOverStop,
                k = "false" != i.defaultPlay && 0 != i.defaultPlay,
                E = "false" != i.returnDefault && 0 != i.returnDefault,
                S = isNaN(i.vis) ? 1 : parseInt(i.vis),
                N = !-[1] && !window.XMLHttpRequest,
                D = 0,
                j = 0,
                $ = 0,
                A = 0,
                M = i.easing,
                L = null,
                O = null,
                q = null,
                H = i.titOnClassName,
                z = c.index(r.find("." + H)),
                I = m = -1 == z ? m : z,
                P = m,
                F = m,
                R = p >= S ? p % w != 0 ? p % w : w : 0,
                W = "leftMarquee" == s || "topMarquee" == s,
                B = function () {
                    e.isFunction(i.startFun) && i.startFun(m, d, r, e(i.titCell, r), h, g, o, a)
                },
                V = function () {
                    e.isFunction(i.endFun) && i.endFun(m, d, r, e(i.titCell, r), h, g, o, a)
                },
                Q = function () {
                    c.removeClass(H), k && c.eq(P).addClass(H)
                };
            if ("menu" == i.type) return k && c.removeClass(H).eq(m).addClass(H), c.hover(function () {
                n = e(this).find(i.targetCell);
                var t = c.index(e(this));
                O = setTimeout(function () {
                    switch (m = t, c.removeClass(H).eq(m).addClass(H), B(), s) {
                        case "fade":
                            n.stop(!0, !0).animate({
                                opacity: "show"
                            }, v, M, V);
                            break;
                        case "slideDown":
                            n.stop(!0, !0).animate({
                                height: "show"
                            }, v, M, V)
                    }
                }, i.triggerTime)
            }, function () {
                switch (clearTimeout(O), s) {
                    case "fade":
                        n.animate({
                            opacity: "hide"
                        }, v, M);
                        break;
                    case "slideDown":
                        n.animate({
                            height: "hide"
                        }, v, M)
                }
            }), void(E && r.hover(function () {
                clearTimeout(q)
            }, function () {
                q = setTimeout(Q, v)
            }));
            if (0 == d && (d = p), W && (d = 2), b) {
                if (p >= S)
                    if ("leftLoop" == s || "topLoop" == s) d = p % w != 0 ? 1 + (p / w ^ 0) : p / w;
                    else {
                        var X = p - S;
                        d = 1 + parseInt(X % w != 0 ? X / w + 1 : X / w), d <= 0 && (d = 1)
                    }
                else d = 1;
                c.html("");
                var U = "";
                if (1 == i.autoPage || "true" == i.autoPage)
                    for (var Y = 0; Y < d; Y++) U += "<li>" + (Y + 1) + "</li>";
                else
                    for (var Y = 0; Y < d; Y++) U += i.autoPage.replace("$", Y + 1);
                c.html(U);
                var c = c.children()
            }
            if (p >= S) {
                h.children().each(function () {
                    e(this).width() > $ && ($ = e(this).width(), j = e(this).outerWidth(!0)), e(this).height() > A && (A = e(this).height(), D = e(this).outerHeight(!0))
                });
                var G = h.children(),
                    J = function () {
                        for (var e = 0; e < S; e++) G.eq(e).clone().addClass("clone").appendTo(h);
                        for (var e = 0; e < R; e++) G.eq(p - e - 1).clone().addClass("clone").prependTo(h)
                    };
                switch (s) {
                    case "fold":
                        h.css({
                            position: "relative",
                            width: j,
                            height: D
                        }).children().css({
                            position: "absolute",
                            width: $,
                            left: 0,
                            top: 0,
                            display: "none"
                        });
                        break;
                    case "top":
                        h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + S * D + 'px"></div>').css({
                            top: -m * w * D,
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            height: A
                        });
                        break;
                    case "left":
                        h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + S * j + 'px"></div>').css({
                            width: p * j,
                            left: -m * w * j,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            float: "left",
                            width: $
                        });
                        break;
                    case "leftLoop":
                    case "leftMarquee":
                        J(), h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + S * j + 'px"></div>').css({
                            width: (p + S + R) * j,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0",
                            left: -(R + m * w) * j
                        }).children().css({
                            float: "left",
                            width: $
                        });
                        break;
                    case "topLoop":
                    case "topMarquee":
                        J(), h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + S * D + 'px"></div>').css({
                            height: (p + S + R) * D,
                            position: "relative",
                            padding: "0",
                            margin: "0",
                            top: -(R + m * w) * D
                        }).children().css({
                            height: A
                        })
                }
            }
            var Z = function (e) {
                    var t = e * w;
                    return e == d ? t = p : -1 == e && p % w != 0 && (t = -p % w), t
                },
                K = function (t) {
                    var n = function (n) {
                        for (var i = n; i < S + n; i++) t.eq(i).find("img[" + f + "]").each(function () {
                            var t = e(this);
                            if (t.attr("src", t.attr(f)).removeAttr(f), h.find(".clone")[0])
                                for (var n = h.children(), i = 0; i < n.size(); i++) n.eq(i).find("img[" + f + "]").each(function () {
                                    e(this).attr(f) == t.attr("src") && e(this).attr("src", e(this).attr(f)).removeAttr(f)
                                })
                        })
                    };
                    switch (s) {
                        case "fade":
                        case "fold":
                        case "top":
                        case "left":
                        case "slideDown":
                            n(m * w);
                            break;
                        case "leftLoop":
                        case "topLoop":
                            n(R + Z(F));
                            break;
                        case "leftMarquee":
                        case "topMarquee":
                            var i = "leftMarquee" == s ? h.css("left").replace("px", "") : h.css("top").replace("px", ""),
                                r = "leftMarquee" == s ? j : D,
                                o = R;
                            if (i % r != 0) {
                                var a = Math.abs(i / r ^ 0);
                                o = 1 == m ? R + a : R + a - 1
                            }
                            n(o)
                    }
                },
                ee = function (e) {
                    if (!k || I != m || e || W) {
                        if (W ? m >= 1 ? m = 1 : m <= 0 && (m = 0) : (F = m, m >= d ? m = 0 : m < 0 && (m = d - 1)), B(), null != f && K(h.children()), g[0] && (n = g.eq(m), null != f && K(g), "slideDown" == s ? (g.not(n).stop(!0, !0).slideUp(v), n.slideDown(v, M, function () {
                                h[0] || V()
                            })) : (g.not(n).stop(!0, !0).hide(), n.animate({
                                opacity: "show"
                            }, v, function () {
                                h[0] || V()
                            }))), p >= S) switch (s) {
                            case "fade":
                                h.children().stop(!0, !0).eq(m).animate({
                                    opacity: "show"
                                }, v, M, function () {
                                    V()
                                }).siblings().hide();
                                break;
                            case "fold":
                                h.children().stop(!0, !0).eq(m).animate({
                                    opacity: "show"
                                }, v, M, function () {
                                    V()
                                }).siblings().animate({
                                    opacity: "hide"
                                }, v, M);
                                break;
                            case "top":
                                h.stop(!0, !1).animate({
                                    top: -m * w * D
                                }, v, M, function () {
                                    V()
                                });
                                break;
                            case "left":
                                h.stop(!0, !1).animate({
                                    left: -m * w * j
                                }, v, M, function () {
                                    V()
                                });
                                break;
                            case "leftLoop":
                                var t = F;
                                h.stop(!0, !0).animate({
                                    left: -(Z(F) + R) * j
                                }, v, M, function () {
                                    t <= -1 ? h.css("left", -(R + (d - 1) * w) * j) : t >= d && h.css("left", -R * j), V()
                                });
                                break;
                            case "topLoop":
                                var t = F;
                                h.stop(!0, !0).animate({
                                    top: -(Z(F) + R) * D
                                }, v, M, function () {
                                    t <= -1 ? h.css("top", -(R + (d - 1) * w) * D) : t >= d && h.css("top", -R * D), V()
                                });
                                break;
                            case "leftMarquee":
                                var i = h.css("left").replace("px", "");
                                0 == m ? h.animate({
                                    left: ++i
                                }, 0, function () {
                                    h.css("left").replace("px", "") >= 0 && h.css("left", -p * j)
                                }) : h.animate({
                                    left: --i
                                }, 0, function () {
                                    h.css("left").replace("px", "") <= -(p + R) * j && h.css("left", -R * j)
                                });
                                break;
                            case "topMarquee":
                                var r = h.css("top").replace("px", "");
                                0 == m ? h.animate({
                                    top: ++r
                                }, 0, function () {
                                    h.css("top").replace("px", "") >= 0 && h.css("top", -p * D)
                                }) : h.animate({
                                    top: --r
                                }, 0, function () {
                                    h.css("top").replace("px", "") <= -(p + R) * D && h.css("top", -R * D)
                                })
                        }
                        c.removeClass(H).eq(m).addClass(H), I = m, C || (a.removeClass("nextStop"), o.removeClass("prevStop"), 0 == m && o.addClass("prevStop"), m == d - 1 && a.addClass("nextStop")), l.html("<span>" + (m + 1) + "</span>/" + d)
                    }
                };
            k && ee(!0), E && r.hover(function () {
                clearTimeout(q)
            }, function () {
                q = setTimeout(function () {
                    m = P, k ? ee() : "slideDown" == s ? n.slideUp(v, Q) : n.animate({
                        opacity: "hide"
                    }, v, Q), I = m
                }, 300)
            });
            var te = function (e) {
                    L = setInterval(function () {
                        _ ? m-- : m++, ee()
                    }, e || y)
                },
                ne = function (e) {
                    L = setInterval(ee, e || y)
                },
                ie = function () {
                    T || !x || u.hasClass("pauseState") || (clearInterval(L), te())
                },
                re = function () {
                    (C || m != d - 1) && (m++, ee(), W || ie())
                },
                se = function () {
                    (C || 0 != m) && (m--, ee(), W || ie())
                },
                oe = function () {
                    clearInterval(L), W ? ne() : te(), u.removeClass("pauseState")
                },
                ae = function () {
                    clearInterval(L), u.addClass("pauseState")
                };
            if (x ? W ? (_ ? m-- : m++, ne(), T && h.hover(ae, oe)) : (te(), T && r.hover(ae, oe)) : (W && (_ ? m-- : m++), u.addClass("pauseState")), u.click(function () {
                    u.hasClass("pauseState") ? oe() : ae()
                }), "mouseover" == i.trigger ? c.hover(function () {
                    var e = c.index(this);
                    O = setTimeout(function () {
                        m = e, ee(), ie()
                    }, i.triggerTime)
                }, function () {
                    clearTimeout(O)
                }) : c.click(function () {
                    m = c.index(this), ee(), ie()
                }), W) {
                if (a.mousedown(re), o.mousedown(se), C) {
                    var le, ue = function () {
                            le = setTimeout(function () {
                                clearInterval(L), ne(y / 10 ^ 0)
                            }, 150)
                        },
                        ce = function () {
                            clearTimeout(le), clearInterval(L), ne()
                        };
                    a.mousedown(ue), a.mouseup(ce), o.mousedown(ue), o.mouseup(ce)
                }
                "mouseover" == i.trigger && (a.hover(re, function () {}), o.hover(se, function () {}))
            } else a.click(re), o.click(se);
            if ("auto" == i.vis && 1 == w && ("left" == s || "leftLoop" == s)) {
                var de, he = function () {
                    N && (h.width("auto"), h.children().width("auto")), h.parent().width("auto"), j = h.parent().width(), N && h.parent().width(j), h.children().width(j), "left" == s ? (h.width(j * p), h.stop(!0, !1).animate({
                        left: -m * j
                    }, 0)) : (h.width(j * (p + 2)), h.stop(!0, !1).animate({
                        left: -(m + 1) * j
                    }, 0)), N || j == h.parent().width() || he()
                };
                e(window).resize(function () {
                    clearTimeout(de), de = setTimeout(he, 100)
                }), he()
            }
        })
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, i, r) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function (e, t, n, i, r) {
        return i * (t /= r) * t + n
    },
    easeOutQuad: function (e, t, n, i, r) {
        return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, i, r) {
        return i * (t /= r) * t * t + n
    },
    easeOutCubic: function (e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, i, r) {
        return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, i, r) {
        return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, i, r) {
        return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function (e, t, n, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function (e, t, n, i, r) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function (e, t, n, i, r) {
        return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
    },
    easeInOutExpo: function (e, t, n, i, r) {
        return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function (e, t, n, i, r) {
        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, i, r) {
        var s = 1.70158,
            o = 0,
            a = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (o || (o = .3 * r), a < Math.abs(i)) {
            a = i;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(i / a);
        return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / o) + n
    },
    easeOutElastic: function (e, t, n, i, r) {
        var s = 1.70158,
            o = 0,
            a = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (o || (o = .3 * r), a < Math.abs(i)) {
            a = i;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * r - s) * (2 * Math.PI) / o) + i + n
    },
    easeInOutElastic: function (e, t, n, i, r) {
        var s = 1.70158,
            o = 0,
            a = i;
        if (0 == t) return n;
        if (2 == (t /= r / 2)) return n + i;
        if (o || (o = r * (.3 * 1.5)), a < Math.abs(i)) {
            a = i;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(i / a);
        return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / o) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / o) * .5 + i + n
    },
    easeInBack: function (e, t, n, i, r, s) {
        return void 0 == s && (s = 1.70158), i * (t /= r) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, i, r, s) {
        return void 0 == s && (s = 1.70158), i * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, i, r, s) {
        return void 0 == s && (s = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + n : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, i, r) {
        return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function (e, t, n, i, r) {
        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, i, r) {
        return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
});