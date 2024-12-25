/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (
    n,
    t
) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = n.document
            ? t(n, !0)
            : function (n) {
                if (!n.document)
                    throw new Error("jQuery requires a window with a document");
                return t(n);
            })
        : t(n);
})("undefined" != typeof window ? window : this, function (n, t) {
    "use strict";
    var e = [],
        r = Object.getPrototypeOf,
        i = e.slice,
        o = e.flat
            ? function (n) {
                return e.flat.call(n);
            }
            : function (n) {
                return e.concat.apply([], n);
            },
        u = e.push,
        c = e.indexOf,
        f = {},
        a = f.toString,
        s = f.hasOwnProperty,
        l = s.toString,
        h = l.call(Object),
        d = {},
        p = function (n) {
            return "function" == typeof n && "number" != typeof n.nodeType;
        },
        v = function (n) {
            return null != n && n === n.window;
        },
        m = n.document,
        g = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0,
        };

    function y(n, t, e) {
        var r,
            i,
            o = (e = e || m).createElement("script");
        if (((o.text = n), t))
            for (r in g)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
        e.head.appendChild(o).parentNode.removeChild(o);
    }

    function b(n) {
        return null == n
            ? n + ""
            : "object" == typeof n || "function" == typeof n
                ? f[a.call(n)] || "object"
                : typeof n;
    }
    var x = "3.5.1",
        S = function (n, t) {
            return new S.fn.init(n, t);
        };

    function w(n) {
        var t = !!n && "length" in n && n.length,
            e = b(n);
        return (
            !p(n) &&
            !v(n) &&
            ("array" === e ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in n))
        );
    }
    (S.fn = S.prototype =
    {
        jquery: x,
        constructor: S,
        length: 0,
        toArray: function () {
            return i.call(this);
        },
        get: function (n) {
            return null == n
                ? i.call(this)
                : n < 0
                    ? this[n + this.length]
                    : this[n];
        },
        pushStack: function (n) {
            var t = S.merge(this.constructor(), n);
            return (t.prevObject = this), t;
        },
        each: function (n) {
            return S.each(this, n);
        },
        map: function (n) {
            return this.pushStack(
                S.map(this, function (t, e) {
                    return n.call(t, e, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                S.grep(this, function (n, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                S.grep(this, function (n, t) {
                    return t % 2;
                })
            );
        },
        eq: function (n) {
            var t = this.length,
                e = +n + (n < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: e.sort,
        splice: e.splice,
    }),
        (S.extend = S.fn.extend =
            function () {
                var n,
                    t,
                    e,
                    r,
                    i,
                    o,
                    u = arguments[0] || {},
                    c = 1,
                    f = arguments.length,
                    a = !1;
                for (
                    "boolean" == typeof u && ((a = u), (u = arguments[c] || {}), c++),
                    "object" == typeof u || p(u) || (u = {}),
                    c === f && ((u = this), c--);
                    c < f;
                    c++
                )
                    if (null != (n = arguments[c]))
                        for (t in n)
                            (r = n[t]),
                                "__proto__" !== t &&
                                u !== r &&
                                (a && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((e = u[t]),
                                        (o =
                                            i && !Array.isArray(e)
                                                ? []
                                                : i || S.isPlainObject(e)
                                                    ? e
                                                    : {}),
                                        (i = !1),
                                        (u[t] = S.extend(a, o, r)))
                                    : void 0 !== r && (u[t] = r));
                return u;
            }),
        S.extend({
            expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (n) {
                throw new Error(n);
            },
            noop: function () { },
            isPlainObject: function (n) {
                var t, e;
                return !(
                    !n ||
                    "[object Object]" !== a.call(n) ||
                    ((t = r(n)) &&
                        ("function" !=
                            typeof (e = s.call(t, "constructor") && t.constructor) ||
                            l.call(e) !== h))
                );
            },
            isEmptyObject: function (n) {
                var t;
                for (t in n) return !1;
                return !0;
            },
            globalEval: function (n, t, e) {
                y(
                    n,
                    {
                        nonce: t && t.nonce,
                    },
                    e
                );
            },
            each: function (n, t) {
                var e,
                    r = 0;
                if (w(n))
                    for (e = n.length; r < e && !1 !== t.call(n[r], r, n[r]); r++);
                else for (r in n) if (!1 === t.call(n[r], r, n[r])) break;
                return n;
            },
            makeArray: function (n, t) {
                var e = t || [];
                return (
                    null != n &&
                    (w(Object(n))
                        ? S.merge(e, "string" == typeof n ? [n] : n)
                        : u.call(e, n)),
                    e
                );
            },
            inArray: function (n, t, e) {
                return null == t ? -1 : c.call(t, n, e);
            },
            merge: function (n, t) {
                for (var e = +t.length, r = 0, i = n.length; r < e; r++) n[i++] = t[r];
                return (n.length = i), n;
            },
            grep: function (n, t, e) {
                for (var r = [], i = 0, o = n.length, u = !e; i < o; i++)
                    !t(n[i], i) !== u && r.push(n[i]);
                return r;
            },
            map: function (n, t, e) {
                var r,
                    i,
                    u = 0,
                    c = [];
                if (w(n))
                    for (r = n.length; u < r; u++)
                        null != (i = t(n[u], u, e)) && c.push(i);
                else for (u in n) null != (i = t(n[u], u, e)) && c.push(i);
                return o(c);
            },
            guid: 1,
            support: d,
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]),
        S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (n, t) {
                f["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var T = (function (n) {
        var t,
            e,
            r,
            i,
            o,
            u,
            c,
            f,
            a,
            s,
            l,
            h,
            d,
            p,
            v,
            m,
            g,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            S = n.document,
            w = 0,
            T = 0,
            E = an(),
            D = an(),
            $ = an(),
            k = an(),
            F = function (n, t) {
                return n === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            M = [],
            L = M.pop,
            C = M.push,
            N = M.push,
            A = M.slice,
            P = function (n, t) {
                for (var e = 0, r = n.length; e < r; e++) if (n[e] === t) return e;
                return -1;
            },
            R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            _ = "[\\x20\\t\\r\\n\\f]",
            H =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                _ +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            O =
                "\\[" +
                _ +
                "*(" +
                H +
                ")(?:" +
                _ +
                "*([*^$|!~]?=)" +
                _ +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                _ +
                "*\\]",
            I =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                O +
                ")*)|.*)\\)|)",
            U = new RegExp(_ + "+", "g"),
            q = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            W = new RegExp("^" + _ + "*," + _ + "*"),
            z = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
            G = new RegExp(_ + "|>"),
            X = new RegExp(I),
            B = new RegExp("^" + H + "$"),
            Y = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    _ +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    _ +
                    "*(?:([+-]|)" +
                    _ +
                    "*(\\d+)|))" +
                    _ +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    _ +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    _ +
                    "*((?:-\\d)?\\d*)" +
                    _ +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            J = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            nn = /[+~]/,
            tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + _ + "?|\\\\([^\\r\\n\\f])", "g"),
            en = function (n, t) {
                var e = "0x" + n.slice(1) - 65536;
                return (
                    t ||
                    (e < 0
                        ? String.fromCharCode(e + 65536)
                        : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
                );
            },
            rn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            on = function (n, t) {
                return t
                    ? "\0" === n
                        ? "�"
                        : n.slice(0, -1) +
                        "\\" +
                        n.charCodeAt(n.length - 1).toString(16) +
                        " "
                    : "\\" + n;
            },
            un = function () {
                h();
            },
            cn = Sn(
                function (n) {
                    return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase();
                },
                {
                    dir: "parentNode",
                    next: "legend",
                }
            );
        try {
            N.apply((M = A.call(S.childNodes)), S.childNodes),
                M[S.childNodes.length].nodeType;
        } catch (t) {
            N = {
                apply: M.length
                    ? function (n, t) {
                        C.apply(n, A.call(t));
                    }
                    : function (n, t) {
                        for (var e = n.length, r = 0; (n[e++] = t[r++]););
                        n.length = e - 1;
                    },
            };
        }

        function fn(n, t, r, i) {
            var o,
                c,
                a,
                s,
                l,
                p,
                g,
                y = t && t.ownerDocument,
                S = t ? t.nodeType : 9;
            if (
                ((r = r || []),
                    "string" != typeof n || !n || (1 !== S && 9 !== S && 11 !== S))
            )
                return r;
            if (!i && (h(t), (t = t || d), v)) {
                if (11 !== S && (l = V.exec(n)))
                    if ((o = l[1])) {
                        if (9 === S) {
                            if (!(a = t.getElementById(o))) return r;
                            if (a.id === o) return r.push(a), r;
                        } else if (y && (a = y.getElementById(o)) && b(t, a) && a.id === o)
                            return r.push(a), r;
                    } else {
                        if (l[2]) return N.apply(r, t.getElementsByTagName(n)), r;
                        if (
                            (o = l[3]) &&
                            e.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return N.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (
                    e.qsa &&
                    !k[n + " "] &&
                    (!m || !m.test(n)) &&
                    (1 !== S || "object" !== t.nodeName.toLowerCase())
                ) {
                    if (((g = n), (y = t), 1 === S && (G.test(n) || z.test(n)))) {
                        for (
                            ((y = (nn.test(n) && yn(t.parentNode)) || t) === t && e.scope) ||
                            ((s = t.getAttribute("id"))
                                ? (s = s.replace(rn, on))
                                : t.setAttribute("id", (s = x))),
                            c = (p = u(n)).length;
                            c--;

                        )
                            p[c] = (s ? "#" + s : ":scope") + " " + xn(p[c]);
                        g = p.join(",");
                    }
                    try {
                        return N.apply(r, y.querySelectorAll(g)), r;
                    } catch (t) {
                        k(n, !0);
                    } finally {
                        s === x && t.removeAttribute("id");
                    }
                }
            }
            return f(n.replace(q, "$1"), t, r, i);
        }

        function an() {
            var n = [];
            return function t(e, i) {
                return (
                    n.push(e + " ") > r.cacheLength && delete t[n.shift()],
                    (t[e + " "] = i)
                );
            };
        }

        function sn(n) {
            return (n[x] = !0), n;
        }

        function ln(n) {
            var t = d.createElement("fieldset");
            try {
                return !!n(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }

        function hn(n, t) {
            for (var e = n.split("|"), i = e.length; i--;) r.attrHandle[e[i]] = t;
        }

        function dn(n, t) {
            var e = t && n,
                r =
                    e &&
                    1 === n.nodeType &&
                    1 === t.nodeType &&
                    n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (e) for (; (e = e.nextSibling);) if (e === t) return -1;
            return n ? 1 : -1;
        }

        function pn(n) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n;
            };
        }

        function vn(n) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n;
            };
        }

        function mn(n) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === n
                                : t.disabled === n
                            : t.isDisabled === n || (t.isDisabled !== !n && cn(t) === n)
                        : t.disabled === n
                    : "label" in t && t.disabled === n;
            };
        }

        function gn(n) {
            return sn(function (t) {
                return (
                    (t = +t),
                    sn(function (e, r) {
                        for (var i, o = n([], e.length, t), u = o.length; u--;)
                            e[(i = o[u])] && (e[i] = !(r[i] = e[i]));
                    })
                );
            });
        }

        function yn(n) {
            return n && void 0 !== n.getElementsByTagName && n;
        }
        for (t in ((e = fn.support = {}),
            (o = fn.isXML =
                function (n) {
                    var t = n.namespaceURI,
                        e = (n.ownerDocument || n).documentElement;
                    return !J.test(t || (e && e.nodeName) || "HTML");
                }),
            (h = fn.setDocument =
                function (n) {
                    var t,
                        i,
                        u = n ? n.ownerDocument || n : S;
                    return (
                        u != d &&
                        9 === u.nodeType &&
                        u.documentElement &&
                        ((p = (d = u).documentElement),
                            (v = !o(d)),
                            S != d &&
                            (i = d.defaultView) &&
                            i.top !== i &&
                            (i.addEventListener
                                ? i.addEventListener("unload", un, !1)
                                : i.attachEvent && i.attachEvent("onunload", un)),
                            (e.scope = ln(function (n) {
                                return (
                                    p.appendChild(n).appendChild(d.createElement("div")),
                                    void 0 !== n.querySelectorAll &&
                                    !n.querySelectorAll(":scope fieldset div").length
                                );
                            })),
                            (e.attributes = ln(function (n) {
                                return (n.className = "i"), !n.getAttribute("className");
                            })),
                            (e.getElementsByTagName = ln(function (n) {
                                return (
                                    n.appendChild(d.createComment("")),
                                    !n.getElementsByTagName("*").length
                                );
                            })),
                            (e.getElementsByClassName = Z.test(d.getElementsByClassName)),
                            (e.getById = ln(function (n) {
                                return (
                                    (p.appendChild(n).id = x),
                                    !d.getElementsByName || !d.getElementsByName(x).length
                                );
                            })),
                            e.getById
                                ? ((r.filter.ID = function (n) {
                                    var t = n.replace(tn, en);
                                    return function (n) {
                                        return n.getAttribute("id") === t;
                                    };
                                }),
                                    (r.find.ID = function (n, t) {
                                        if (void 0 !== t.getElementById && v) {
                                            var e = t.getElementById(n);
                                            return e ? [e] : [];
                                        }
                                    }))
                                : ((r.filter.ID = function (n) {
                                    var t = n.replace(tn, en);
                                    return function (n) {
                                        var e =
                                            void 0 !== n.getAttributeNode && n.getAttributeNode("id");
                                        return e && e.value === t;
                                    };
                                }),
                                    (r.find.ID = function (n, t) {
                                        if (void 0 !== t.getElementById && v) {
                                            var e,
                                                r,
                                                i,
                                                o = t.getElementById(n);
                                            if (o) {
                                                if ((e = o.getAttributeNode("id")) && e.value === n)
                                                    return [o];
                                                for (i = t.getElementsByName(n), r = 0; (o = i[r++]);)
                                                    if ((e = o.getAttributeNode("id")) && e.value === n)
                                                        return [o];
                                            }
                                            return [];
                                        }
                                    })),
                            (r.find.TAG = e.getElementsByTagName
                                ? function (n, t) {
                                    return void 0 !== t.getElementsByTagName
                                        ? t.getElementsByTagName(n)
                                        : e.qsa
                                            ? t.querySelectorAll(n)
                                            : void 0;
                                }
                                : function (n, t) {
                                    var e,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(n);
                                    if ("*" === n) {
                                        for (; (e = o[i++]);) 1 === e.nodeType && r.push(e);
                                        return r;
                                    }
                                    return o;
                                }),
                            (r.find.CLASS =
                                e.getElementsByClassName &&
                                function (n, t) {
                                    if (void 0 !== t.getElementsByClassName && v)
                                        return t.getElementsByClassName(n);
                                }),
                            (g = []),
                            (m = []),
                            (e.qsa = Z.test(d.querySelectorAll)) &&
                            (ln(function (n) {
                                var t;
                                (p.appendChild(n).innerHTML =
                                    "<a id='" +
                                    x +
                                    "'></a><select id='" +
                                    x +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    n.querySelectorAll("[msallowcapture^='']").length &&
                                    m.push("[*^$]=" + _ + "*(?:''|\"\")"),
                                    n.querySelectorAll("[selected]").length ||
                                    m.push("\\[" + _ + "*(?:value|" + R + ")"),
                                    n.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                                    (t = d.createElement("input")).setAttribute("name", ""),
                                    n.appendChild(t),
                                    n.querySelectorAll("[name='']").length ||
                                    m.push("\\[" + _ + "*name" + _ + "*=" + _ + "*(?:''|\"\")"),
                                    n.querySelectorAll(":checked").length || m.push(":checked"),
                                    n.querySelectorAll("a#" + x + "+*").length ||
                                    m.push(".#.+[+~]"),
                                    n.querySelectorAll("\\\f"),
                                    m.push("[\\r\\n\\f]");
                            }),
                                ln(function (n) {
                                    n.innerHTML =
                                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = d.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        n.appendChild(t).setAttribute("name", "D"),
                                        n.querySelectorAll("[name=d]").length &&
                                        m.push("name" + _ + "*[*^$|!~]?="),
                                        2 !== n.querySelectorAll(":enabled").length &&
                                        m.push(":enabled", ":disabled"),
                                        (p.appendChild(n).disabled = !0),
                                        2 !== n.querySelectorAll(":disabled").length &&
                                        m.push(":enabled", ":disabled"),
                                        n.querySelectorAll("*,:x"),
                                        m.push(",.*:");
                                })),
                            (e.matchesSelector = Z.test(
                                (y =
                                    p.matches ||
                                    p.webkitMatchesSelector ||
                                    p.mozMatchesSelector ||
                                    p.oMatchesSelector ||
                                    p.msMatchesSelector)
                            )) &&
                            ln(function (n) {
                                (e.disconnectedMatch = y.call(n, "*")),
                                    y.call(n, "[s!='']:x"),
                                    g.push("!=", I);
                            }),
                            (m = m.length && new RegExp(m.join("|"))),
                            (g = g.length && new RegExp(g.join("|"))),
                            (t = Z.test(p.compareDocumentPosition)),
                            (b =
                                t || Z.test(p.contains)
                                    ? function (n, t) {
                                        var e = 9 === n.nodeType ? n.documentElement : n,
                                            r = t && t.parentNode;
                                        return (
                                            n === r ||
                                            !(
                                                !r ||
                                                1 !== r.nodeType ||
                                                !(e.contains
                                                    ? e.contains(r)
                                                    : n.compareDocumentPosition &&
                                                    16 & n.compareDocumentPosition(r))
                                            )
                                        );
                                    }
                                    : function (n, t) {
                                        if (t) for (; (t = t.parentNode);) if (t === n) return !0;
                                        return !1;
                                    }),
                            (F = t
                                ? function (n, t) {
                                    if (n === t) return (l = !0), 0;
                                    var r =
                                        !n.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        r ||
                                        (1 &
                                            (r =
                                                (n.ownerDocument || n) == (t.ownerDocument || t)
                                                    ? n.compareDocumentPosition(t)
                                                    : 1) ||
                                            (!e.sortDetached && t.compareDocumentPosition(n) === r)
                                            ? n == d || (n.ownerDocument == S && b(S, n))
                                                ? -1
                                                : t == d || (t.ownerDocument == S && b(S, t))
                                                    ? 1
                                                    : s
                                                        ? P(s, n) - P(s, t)
                                                        : 0
                                            : 4 & r
                                                ? -1
                                                : 1)
                                    );
                                }
                                : function (n, t) {
                                    if (n === t) return (l = !0), 0;
                                    var e,
                                        r = 0,
                                        i = n.parentNode,
                                        o = t.parentNode,
                                        u = [n],
                                        c = [t];
                                    if (!i || !o)
                                        return n == d
                                            ? -1
                                            : t == d
                                                ? 1
                                                : i
                                                    ? -1
                                                    : o
                                                        ? 1
                                                        : s
                                                            ? P(s, n) - P(s, t)
                                                            : 0;
                                    if (i === o) return dn(n, t);
                                    for (e = n; (e = e.parentNode);) u.unshift(e);
                                    for (e = t; (e = e.parentNode);) c.unshift(e);
                                    for (; u[r] === c[r];) r++;
                                    return r
                                        ? dn(u[r], c[r])
                                        : u[r] == S
                                            ? -1
                                            : c[r] == S
                                                ? 1
                                                : 0;
                                })),
                        d
                    );
                }),
            (fn.matches = function (n, t) {
                return fn(n, null, null, t);
            }),
            (fn.matchesSelector = function (n, t) {
                if (
                    (h(n),
                        e.matchesSelector &&
                        v &&
                        !k[t + " "] &&
                        (!g || !g.test(t)) &&
                        (!m || !m.test(t)))
                )
                    try {
                        var r = y.call(n, t);
                        if (
                            r ||
                            e.disconnectedMatch ||
                            (n.document && 11 !== n.document.nodeType)
                        )
                            return r;
                    } catch (n) {
                        k(t, !0);
                    }
                return 0 < fn(t, d, null, [n]).length;
            }),
            (fn.contains = function (n, t) {
                return (n.ownerDocument || n) != d && h(n), b(n, t);
            }),
            (fn.attr = function (n, t) {
                (n.ownerDocument || n) != d && h(n);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(n, t, !v) : void 0;
                return void 0 !== o
                    ? o
                    : e.attributes || !v
                        ? n.getAttribute(t)
                        : (o = n.getAttributeNode(t)) && o.specified
                            ? o.value
                            : null;
            }),
            (fn.escape = function (n) {
                return (n + "").replace(rn, on);
            }),
            (fn.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }),
            (fn.uniqueSort = function (n) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (
                    ((l = !e.detectDuplicates),
                        (s = !e.sortStable && n.slice(0)),
                        n.sort(F),
                        l)
                ) {
                    for (; (t = n[o++]);) t === n[o] && (i = r.push(o));
                    for (; i--;) n.splice(r[i], 1);
                }
                return (s = null), n;
            }),
            (i = fn.getText =
                function (n) {
                    var t,
                        e = "",
                        r = 0,
                        o = n.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof n.textContent) return n.textContent;
                            for (n = n.firstChild; n; n = n.nextSibling) e += i(n);
                        } else if (3 === o || 4 === o) return n.nodeValue;
                    } else for (; (t = n[r++]);) e += i(t);
                    return e;
                }),
            ((r = fn.selectors =
            {
                cacheLength: 50,
                createPseudo: sn,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0,
                    },
                    " ": {
                        dir: "parentNode",
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0,
                    },
                    "~": {
                        dir: "previousSibling",
                    },
                },
                preFilter: {
                    ATTR: function (n) {
                        return (
                            (n[1] = n[1].replace(tn, en)),
                            (n[3] = (n[3] || n[4] || n[5] || "").replace(tn, en)),
                            "~=" === n[2] && (n[3] = " " + n[3] + " "),
                            n.slice(0, 4)
                        );
                    },
                    CHILD: function (n) {
                        return (
                            (n[1] = n[1].toLowerCase()),
                            "nth" === n[1].slice(0, 3)
                                ? (n[3] || fn.error(n[0]),
                                    (n[4] = +(n[4]
                                        ? n[5] + (n[6] || 1)
                                        : 2 * ("even" === n[3] || "odd" === n[3]))),
                                    (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                                : n[3] && fn.error(n[0]),
                            n
                        );
                    },
                    PSEUDO: function (n) {
                        var t,
                            e = !n[6] && n[2];
                        return Y.CHILD.test(n[0])
                            ? null
                            : (n[3]
                                ? (n[2] = n[4] || n[5] || "")
                                : e &&
                                X.test(e) &&
                                (t = u(e, !0)) &&
                                (t = e.indexOf(")", e.length - t) - e.length) &&
                                ((n[0] = n[0].slice(0, t)), (n[2] = e.slice(0, t))),
                                n.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (n) {
                        var t = n.replace(tn, en).toLowerCase();
                        return "*" === n
                            ? function () {
                                return !0;
                            }
                            : function (n) {
                                return n.nodeName && n.nodeName.toLowerCase() === t;
                            };
                    },
                    CLASS: function (n) {
                        var t = E[n + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + _ + ")" + n + "(" + _ + "|$)")) &&
                                E(n, function (n) {
                                    return t.test(
                                        ("string" == typeof n.className && n.className) ||
                                        (void 0 !== n.getAttribute && n.getAttribute("class")) ||
                                        ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, t, e) {
                        return function (r) {
                            var i = fn.attr(r, n);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                ((i += ""),
                                    "=" === t
                                        ? i === e
                                        : "!=" === t
                                            ? i !== e
                                            : "^=" === t
                                                ? e && 0 === i.indexOf(e)
                                                : "*=" === t
                                                    ? e && -1 < i.indexOf(e)
                                                    : "$=" === t
                                                        ? e && i.slice(-e.length) === e
                                                        : "~=" === t
                                                            ? -1 < (" " + i.replace(U, " ") + " ").indexOf(e)
                                                            : "|=" === t &&
                                                            (i === e || i.slice(0, e.length + 1) === e + "-"));
                        };
                    },
                    CHILD: function (n, t, e, r, i) {
                        var o = "nth" !== n.slice(0, 3),
                            u = "last" !== n.slice(-4),
                            c = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (n) {
                                return !!n.parentNode;
                            }
                            : function (t, e, f) {
                                var a,
                                    s,
                                    l,
                                    h,
                                    d,
                                    p,
                                    v = o !== u ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = c && t.nodeName.toLowerCase(),
                                    y = !f && !c,
                                    b = !1;
                                if (m) {
                                    if (o) {
                                        for (; v;) {
                                            for (h = t; (h = h[v]);)
                                                if (
                                                    c
                                                        ? h.nodeName.toLowerCase() === g
                                                        : 1 === h.nodeType
                                                )
                                                    return !1;
                                            p = v = "only" === n && !p && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((p = [u ? m.firstChild : m.lastChild]), u && y)) {
                                        for (
                                            b =
                                            (d =
                                                (a =
                                                    (s =
                                                        (l = (h = m)[x] || (h[x] = {}))[h.uniqueID] ||
                                                        (l[h.uniqueID] = {}))[n] || [])[0] === w &&
                                                a[1]) && a[2],
                                            h = d && m.childNodes[d];
                                            (h = (++d && h && h[v]) || (b = d = 0) || p.pop());

                                        )
                                            if (1 === h.nodeType && ++b && h === t) {
                                                s[n] = [w, d, b];
                                                break;
                                            }
                                    } else if (
                                        (y &&
                                            (b = d =
                                                (a =
                                                    (s =
                                                        (l = (h = t)[x] || (h[x] = {}))[h.uniqueID] ||
                                                        (l[h.uniqueID] = {}))[n] || [])[0] === w && a[1]),
                                            !1 === b)
                                    )
                                        for (
                                            ;
                                            (h = (++d && h && h[v]) || (b = d = 0) || p.pop()) &&
                                            ((c
                                                ? h.nodeName.toLowerCase() !== g
                                                : 1 !== h.nodeType) ||
                                                !++b ||
                                                (y &&
                                                    ((s =
                                                        (l = h[x] || (h[x] = {}))[h.uniqueID] ||
                                                        (l[h.uniqueID] = {}))[n] = [w, b]),
                                                    h !== t));

                                        );
                                    return (b -= i) === r || (b % r == 0 && 0 <= b / r);
                                }
                            };
                    },
                    PSEUDO: function (n, t) {
                        var e,
                            i =
                                r.pseudos[n] ||
                                r.setFilters[n.toLowerCase()] ||
                                fn.error("unsupported pseudo: " + n);
                        return i[x]
                            ? i(t)
                            : 1 < i.length
                                ? ((e = [n, n, "", t]),
                                    r.setFilters.hasOwnProperty(n.toLowerCase())
                                        ? sn(function (n, e) {
                                            for (var r, o = i(n, t), u = o.length; u--;)
                                                n[(r = P(n, o[u]))] = !(e[r] = o[u]);
                                        })
                                        : function (n) {
                                            return i(n, 0, e);
                                        })
                                : i;
                    },
                },
                pseudos: {
                    not: sn(function (n) {
                        var t = [],
                            e = [],
                            r = c(n.replace(q, "$1"));
                        return r[x]
                            ? sn(function (n, t, e, i) {
                                for (var o, u = r(n, null, i, []), c = n.length; c--;)
                                    (o = u[c]) && (n[c] = !(t[c] = o));
                            })
                            : function (n, i, o) {
                                return (t[0] = n), r(t, null, o, e), (t[0] = null), !e.pop();
                            };
                    }),
                    has: sn(function (n) {
                        return function (t) {
                            return 0 < fn(n, t).length;
                        };
                    }),
                    contains: sn(function (n) {
                        return (
                            (n = n.replace(tn, en)),
                            function (t) {
                                return -1 < (t.textContent || i(t)).indexOf(n);
                            }
                        );
                    }),
                    lang: sn(function (n) {
                        return (
                            B.test(n || "") || fn.error("unsupported lang: " + n),
                            (n = n.replace(tn, en).toLowerCase()),
                            function (t) {
                                var e;
                                do {
                                    if (
                                        (e = v
                                            ? t.lang
                                            : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    )
                                        return (
                                            (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                        );
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id;
                    },
                    root: function (n) {
                        return n === p;
                    },
                    focus: function (n) {
                        return (
                            n === d.activeElement &&
                            (!d.hasFocus || d.hasFocus()) &&
                            !!(n.type || n.href || ~n.tabIndex)
                        );
                    },
                    enabled: mn(!1),
                    disabled: mn(!0),
                    checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!n.checked) || ("option" === t && !!n.selected)
                        );
                    },
                    selected: function (n) {
                        return (
                            n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                        );
                    },
                    empty: function (n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (n) {
                        return !r.pseudos.empty(n);
                    },
                    header: function (n) {
                        return Q.test(n.nodeName);
                    },
                    input: function (n) {
                        return K.test(n.nodeName);
                    },
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return ("input" === t && "button" === n.type) || "button" === t;
                    },
                    text: function (n) {
                        var t;
                        return (
                            "input" === n.nodeName.toLowerCase() &&
                            "text" === n.type &&
                            (null == (t = n.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: gn(function () {
                        return [0];
                    }),
                    last: gn(function (n, t) {
                        return [t - 1];
                    }),
                    eq: gn(function (n, t, e) {
                        return [e < 0 ? e + t : e];
                    }),
                    even: gn(function (n, t) {
                        for (var e = 0; e < t; e += 2) n.push(e);
                        return n;
                    }),
                    odd: gn(function (n, t) {
                        for (var e = 1; e < t; e += 2) n.push(e);
                        return n;
                    }),
                    lt: gn(function (n, t, e) {
                        for (var r = e < 0 ? e + t : t < e ? t : e; 0 <= --r;) n.push(r);
                        return n;
                    }),
                    gt: gn(function (n, t, e) {
                        for (var r = e < 0 ? e + t : e; ++r < t;) n.push(r);
                        return n;
                    }),
                },
            }).pseudos.nth = r.pseudos.eq),
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
        }))
            r.pseudos[t] = pn(t);
        for (t in {
            submit: !0,
            reset: !0,
        })
            r.pseudos[t] = vn(t);

        function bn() { }

        function xn(n) {
            for (var t = 0, e = n.length, r = ""; t < e; t++) r += n[t].value;
            return r;
        }

        function Sn(n, t, e) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                u = e && "parentNode" === o,
                c = T++;
            return t.first
                ? function (t, e, i) {
                    for (; (t = t[r]);) if (1 === t.nodeType || u) return n(t, e, i);
                    return !1;
                }
                : function (t, e, f) {
                    var a,
                        s,
                        l,
                        h = [w, c];
                    if (f) {
                        for (; (t = t[r]);)
                            if ((1 === t.nodeType || u) && n(t, e, f)) return !0;
                    } else
                        for (; (t = t[r]);)
                            if (1 === t.nodeType || u)
                                if (
                                    ((s =
                                        (l = t[x] || (t[x] = {}))[t.uniqueID] ||
                                        (l[t.uniqueID] = {})),
                                        i && i === t.nodeName.toLowerCase())
                                )
                                    t = t[r] || t;
                                else {
                                    if ((a = s[o]) && a[0] === w && a[1] === c)
                                        return (h[2] = a[2]);
                                    if (((s[o] = h)[2] = n(t, e, f))) return !0;
                                }
                    return !1;
                };
        }

        function wn(n) {
            return 1 < n.length
                ? function (t, e, r) {
                    for (var i = n.length; i--;) if (!n[i](t, e, r)) return !1;
                    return !0;
                }
                : n[0];
        }

        function Tn(n, t, e, r, i) {
            for (var o, u = [], c = 0, f = n.length, a = null != t; c < f; c++)
                (o = n[c]) && ((e && !e(o, r, i)) || (u.push(o), a && t.push(c)));
            return u;
        }

        function En(n, t, e, r, i, o) {
            return (
                r && !r[x] && (r = En(r)),
                i && !i[x] && (i = En(i, o)),
                sn(function (o, u, c, f) {
                    var a,
                        s,
                        l,
                        h = [],
                        d = [],
                        p = u.length,
                        v =
                            o ||
                            (function (n, t, e) {
                                for (var r = 0, i = t.length; r < i; r++) fn(n, t[r], e);
                                return e;
                            })(t || "*", c.nodeType ? [c] : c, []),
                        m = !n || (!o && t) ? v : Tn(v, h, n, c, f),
                        g = e ? (i || (o ? n : p || r) ? [] : u) : m;
                    if ((e && e(m, g, c, f), r))
                        for (a = Tn(g, d), r(a, [], c, f), s = a.length; s--;)
                            (l = a[s]) && (g[d[s]] = !(m[d[s]] = l));
                    if (o) {
                        if (i || n) {
                            if (i) {
                                for (a = [], s = g.length; s--;)
                                    (l = g[s]) && a.push((m[s] = l));
                                i(null, (g = []), a, f);
                            }
                            for (s = g.length; s--;)
                                (l = g[s]) &&
                                    -1 < (a = i ? P(o, l) : h[s]) &&
                                    (o[a] = !(u[a] = l));
                        }
                    } else (g = Tn(g === u ? g.splice(p, g.length) : g)), i ? i(null, u, g, f) : N.apply(u, g);
                })
            );
        }

        function Dn(n) {
            for (
                var t,
                e,
                i,
                o = n.length,
                u = r.relative[n[0].type],
                c = u || r.relative[" "],
                f = u ? 1 : 0,
                s = Sn(
                    function (n) {
                        return n === t;
                    },
                    c,
                    !0
                ),
                l = Sn(
                    function (n) {
                        return -1 < P(t, n);
                    },
                    c,
                    !0
                ),
                h = [
                    function (n, e, r) {
                        var i =
                            (!u && (r || e !== a)) ||
                            ((t = e).nodeType ? s(n, e, r) : l(n, e, r));
                        return (t = null), i;
                    },
                ];
                f < o;
                f++
            )
                if ((e = r.relative[n[f].type])) h = [Sn(wn(h), e)];
                else {
                    if ((e = r.filter[n[f].type].apply(null, n[f].matches))[x]) {
                        for (i = ++f; i < o && !r.relative[n[i].type]; i++);
                        return En(
                            1 < f && wn(h),
                            1 < f &&
                            xn(
                                n.slice(0, f - 1).concat({
                                    value: " " === n[f - 2].type ? "*" : "",
                                })
                            ).replace(q, "$1"),
                            e,
                            f < i && Dn(n.slice(f, i)),
                            i < o && Dn((n = n.slice(i))),
                            i < o && xn(n)
                        );
                    }
                    h.push(e);
                }
            return wn(h);
        }
        return (
            (bn.prototype = r.filters = r.pseudos),
            (r.setFilters = new bn()),
            (u = fn.tokenize =
                function (n, t) {
                    var e,
                        i,
                        o,
                        u,
                        c,
                        f,
                        a,
                        s = D[n + " "];
                    if (s) return t ? 0 : s.slice(0);
                    for (c = n, f = [], a = r.preFilter; c;) {
                        for (u in ((e && !(i = W.exec(c))) ||
                            (i && (c = c.slice(i[0].length) || c), f.push((o = []))),
                            (e = !1),
                            (i = z.exec(c)) &&
                            ((e = i.shift()),
                                o.push({
                                    value: e,
                                    type: i[0].replace(q, " "),
                                }),
                                (c = c.slice(e.length))),
                            r.filter))
                            !(i = Y[u].exec(c)) ||
                                (a[u] && !(i = a[u](i))) ||
                                ((e = i.shift()),
                                    o.push({
                                        value: e,
                                        type: u,
                                        matches: i,
                                    }),
                                    (c = c.slice(e.length)));
                        if (!e) break;
                    }
                    return t ? c.length : c ? fn.error(n) : D(n, f).slice(0);
                }),
            (c = fn.compile =
                function (n, t) {
                    var e,
                        i,
                        o,
                        c,
                        f,
                        s,
                        l = [],
                        p = [],
                        m = $[n + " "];
                    if (!m) {
                        for (t || (t = u(n)), e = t.length; e--;)
                            (m = Dn(t[e]))[x] ? l.push(m) : p.push(m);
                        (m = $(
                            n,
                            ((i = p),
                                (c = 0 < (o = l).length),
                                (f = 0 < i.length),
                                (s = function (n, t, e, u, s) {
                                    var l,
                                        p,
                                        m,
                                        g = 0,
                                        y = "0",
                                        b = n && [],
                                        x = [],
                                        S = a,
                                        T = n || (f && r.find.TAG("*", s)),
                                        E = (w += null == S ? 1 : Math.random() || 0.1),
                                        D = T.length;
                                    for (
                                        s && (a = t == d || t || s);
                                        y !== D && null != (l = T[y]);
                                        y++
                                    ) {
                                        if (f && l) {
                                            for (
                                                p = 0, t || l.ownerDocument == d || (h(l), (e = !v));
                                                (m = i[p++]);

                                            )
                                                if (m(l, t || d, e)) {
                                                    u.push(l);
                                                    break;
                                                }
                                            s && (w = E);
                                        }
                                        c && ((l = !m && l) && g--, n && b.push(l));
                                    }
                                    if (((g += y), c && y !== g)) {
                                        for (p = 0; (m = o[p++]);) m(b, x, t, e);
                                        if (n) {
                                            if (0 < g) for (; y--;) b[y] || x[y] || (x[y] = L.call(u));
                                            x = Tn(x);
                                        }
                                        N.apply(u, x),
                                            s &&
                                            !n &&
                                            0 < x.length &&
                                            1 < g + o.length &&
                                            fn.uniqueSort(u);
                                    }
                                    return s && ((w = E), (a = S)), b;
                                }),
                                c ? sn(s) : s)
                        )).selector = n;
                    }
                    return m;
                }),
            (f = fn.select =
                function (n, t, e, i) {
                    var o,
                        f,
                        a,
                        s,
                        l,
                        h = "function" == typeof n && n,
                        d = !i && u((n = h.selector || n));
                    if (((e = e || []), 1 === d.length)) {
                        if (
                            2 < (f = d[0] = d[0].slice(0)).length &&
                            "ID" === (a = f[0]).type &&
                            9 === t.nodeType &&
                            v &&
                            r.relative[f[1].type]
                        ) {
                            if (!(t = (r.find.ID(a.matches[0].replace(tn, en), t) || [])[0]))
                                return e;
                            h && (t = t.parentNode), (n = n.slice(f.shift().value.length));
                        }
                        for (
                            o = Y.needsContext.test(n) ? 0 : f.length;
                            o-- && ((a = f[o]), !r.relative[(s = a.type)]);

                        )
                            if (
                                (l = r.find[s]) &&
                                (i = l(
                                    a.matches[0].replace(tn, en),
                                    (nn.test(f[0].type) && yn(t.parentNode)) || t
                                ))
                            ) {
                                if ((f.splice(o, 1), !(n = i.length && xn(f))))
                                    return N.apply(e, i), e;
                                break;
                            }
                    }
                    return (
                        (h || c(n, d))(
                            i,
                            t,
                            !v,
                            e,
                            !t || (nn.test(n) && yn(t.parentNode)) || t
                        ),
                        e
                    );
                }),
            (e.sortStable = x.split("").sort(F).join("") === x),
            (e.detectDuplicates = !!l),
            h(),
            (e.sortDetached = ln(function (n) {
                return 1 & n.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ln(function (n) {
                return (
                    (n.innerHTML = "<a href='#'></a>"),
                    "#" === n.firstChild.getAttribute("href")
                );
            }) ||
            hn("type|href|height|width", function (n, t, e) {
                if (!e) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (e.attributes &&
                ln(function (n) {
                    return (
                        (n.innerHTML = "<input/>"),
                        n.firstChild.setAttribute("value", ""),
                        "" === n.firstChild.getAttribute("value")
                    );
                })) ||
            hn("value", function (n, t, e) {
                if (!e && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
            }),
            ln(function (n) {
                return null == n.getAttribute("disabled");
            }) ||
            hn(R, function (n, t, e) {
                var r;
                if (!e)
                    return !0 === n[t]
                        ? t.toLowerCase()
                        : (r = n.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
            }),
            fn
        );
    })(n);
    (S.find = T),
        (S.expr = T.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = T.uniqueSort),
        (S.text = T.getText),
        (S.isXMLDoc = T.isXML),
        (S.contains = T.contains),
        (S.escapeSelector = T.escape);
    var E = function (n, t, e) {
        for (var r = [], i = void 0 !== e; (n = n[t]) && 9 !== n.nodeType;)
            if (1 === n.nodeType) {
                if (i && S(n).is(e)) break;
                r.push(n);
            }
        return r;
    },
        D = function (n, t) {
            for (var e = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && e.push(n);
            return e;
        },
        $ = S.expr.match.needsContext;

    function k(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
    }
    var F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(n, t, e) {
        return p(t)
            ? S.grep(n, function (n, r) {
                return !!t.call(n, r, n) !== e;
            })
            : t.nodeType
                ? S.grep(n, function (n) {
                    return (n === t) !== e;
                })
                : "string" != typeof t
                    ? S.grep(n, function (n) {
                        return -1 < c.call(t, n) !== e;
                    })
                    : S.filter(t, n, e);
    }
    (S.filter = function (n, t, e) {
        var r = t[0];
        return (
            e && (n = ":not(" + n + ")"),
            1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, n)
                    ? [r]
                    : []
                : S.find.matches(
                    n,
                    S.grep(t, function (n) {
                        return 1 === n.nodeType;
                    })
                )
        );
    }),
        S.fn.extend({
            find: function (n) {
                var t,
                    e,
                    r = this.length,
                    i = this;
                if ("string" != typeof n)
                    return this.pushStack(
                        S(n).filter(function () {
                            for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (e = this.pushStack([]), t = 0; t < r; t++) S.find(n, i[t], e);
                return 1 < r ? S.uniqueSort(e) : e;
            },
            filter: function (n) {
                return this.pushStack(j(this, n || [], !1));
            },
            not: function (n) {
                return this.pushStack(j(this, n || [], !0));
            },
            is: function (n) {
                return !!j(this, "string" == typeof n && $.test(n) ? S(n) : n || [], !1)
                    .length;
            },
        });
    var M,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (n, t, e) {
        var r, i;
        if (!n) return this;
        if (((e = e || M), "string" == typeof n)) {
            if (
                !(r =
                    "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length
                        ? [null, n, null]
                        : L.exec(n)) ||
                (!r[1] && t)
            )
                return !t || t.jquery ? (t || e).find(n) : this.constructor(t).find(n);
            if (r[1]) {
                if (
                    ((t = t instanceof S ? t[0] : t),
                        S.merge(
                            this,
                            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)
                        ),
                        F.test(r[1]) && S.isPlainObject(t))
                )
                    for (r in t) p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (i = m.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
            );
        }
        return n.nodeType
            ? ((this[0] = n), (this.length = 1), this)
            : p(n)
                ? void 0 !== e.ready
                    ? e.ready(n)
                    : n(S)
                : S.makeArray(n, this);
    }).prototype = S.fn),
        (M = S(m));
    var C = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0,
        };

    function A(n, t) {
        for (; (n = n[t]) && 1 !== n.nodeType;);
        return n;
    }
    S.fn.extend({
        has: function (n) {
            var t = S(n, this),
                e = t.length;
            return this.filter(function () {
                for (var n = 0; n < e; n++) if (S.contains(this, t[n])) return !0;
            });
        },
        closest: function (n, t) {
            var e,
                r = 0,
                i = this.length,
                o = [],
                u = "string" != typeof n && S(n);
            if (!$.test(n))
                for (; r < i; r++)
                    for (e = this[r]; e && e !== t; e = e.parentNode)
                        if (
                            e.nodeType < 11 &&
                            (u
                                ? -1 < u.index(e)
                                : 1 === e.nodeType && S.find.matchesSelector(e, n))
                        ) {
                            o.push(e);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (n) {
            return n
                ? "string" == typeof n
                    ? c.call(S(n), this[0])
                    : c.call(this, n.jquery ? n[0] : n)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (n, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(n, t))));
        },
        addBack: function (n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
        },
    }),
        S.each(
            {
                parent: function (n) {
                    var t = n.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (n) {
                    return E(n, "parentNode");
                },
                parentsUntil: function (n, t, e) {
                    return E(n, "parentNode", e);
                },
                next: function (n) {
                    return A(n, "nextSibling");
                },
                prev: function (n) {
                    return A(n, "previousSibling");
                },
                nextAll: function (n) {
                    return E(n, "nextSibling");
                },
                prevAll: function (n) {
                    return E(n, "previousSibling");
                },
                nextUntil: function (n, t, e) {
                    return E(n, "nextSibling", e);
                },
                prevUntil: function (n, t, e) {
                    return E(n, "previousSibling", e);
                },
                siblings: function (n) {
                    return D((n.parentNode || {}).firstChild, n);
                },
                children: function (n) {
                    return D(n.firstChild);
                },
                contents: function (n) {
                    return null != n.contentDocument && r(n.contentDocument)
                        ? n.contentDocument
                        : (k(n, "template") && (n = n.content || n),
                            S.merge([], n.childNodes));
                },
            },
            function (n, t) {
                S.fn[n] = function (e, r) {
                    var i = S.map(this, t, e);
                    return (
                        "Until" !== n.slice(-5) && (r = e),
                        r && "string" == typeof r && (i = S.filter(r, i)),
                        1 < this.length &&
                        (N[n] || S.uniqueSort(i), C.test(n) && i.reverse()),
                        this.pushStack(i)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;

    function R(n) {
        return n;
    }

    function _(n) {
        throw n;
    }

    function H(n, t, e, r) {
        var i;
        try {
            n && p((i = n.promise))
                ? i.call(n).done(t).fail(e)
                : n && p((i = n.then))
                    ? i.call(n, t, e)
                    : t.apply(void 0, [n].slice(r));
        } catch (n) {
            e.apply(void 0, [n]);
        }
    }
    (S.Callbacks = function (n) {
        var t, e;
        n =
            "string" == typeof n
                ? ((t = n),
                    (e = {}),
                    S.each(t.match(P) || [], function (n, t) {
                        e[t] = !0;
                    }),
                    e)
                : S.extend({}, n);
        var r,
            i,
            o,
            u,
            c = [],
            f = [],
            a = -1,
            s = function () {
                for (u = u || n.once, o = r = !0; f.length; a = -1)
                    for (i = f.shift(); ++a < c.length;)
                        !1 === c[a].apply(i[0], i[1]) &&
                            n.stopOnFalse &&
                            ((a = c.length), (i = !1));
                n.memory || (i = !1), (r = !1), u && (c = i ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        c &&
                        (i && !r && ((a = c.length - 1), f.push(i)),
                            (function t(e) {
                                S.each(e, function (e, r) {
                                    p(r)
                                        ? (n.unique && l.has(r)) || c.push(r)
                                        : r && r.length && "string" !== b(r) && t(r);
                                });
                            })(arguments),
                            i && !r && s()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (n, t) {
                            for (var e; -1 < (e = S.inArray(t, c, e));)
                                c.splice(e, 1), e <= a && a--;
                        }),
                        this
                    );
                },
                has: function (n) {
                    return n ? -1 < S.inArray(n, c) : 0 < c.length;
                },
                empty: function () {
                    return c && (c = []), this;
                },
                disable: function () {
                    return (u = f = []), (c = i = ""), this;
                },
                disabled: function () {
                    return !c;
                },
                lock: function () {
                    return (u = f = []), i || r || (c = i = ""), this;
                },
                locked: function () {
                    return !!u;
                },
                fireWith: function (n, t) {
                    return (
                        u ||
                        ((t = [n, (t = t || []).slice ? t.slice() : t]),
                            f.push(t),
                            r || s()),
                        this
                    );
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return l;
    }),
        S.extend({
            Deferred: function (t) {
                var e = [
                    [
                        "notify",
                        "progress",
                        S.Callbacks("memory"),
                        S.Callbacks("memory"),
                        2,
                    ],
                    [
                        "resolve",
                        "done",
                        S.Callbacks("once memory"),
                        S.Callbacks("once memory"),
                        0,
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        S.Callbacks("once memory"),
                        S.Callbacks("once memory"),
                        1,
                        "rejected",
                    ],
                ],
                    r = "pending",
                    i = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (n) {
                            return i.then(null, n);
                        },
                        pipe: function () {
                            var n = arguments;
                            return S.Deferred(function (t) {
                                S.each(e, function (e, r) {
                                    var i = p(n[r[4]]) && n[r[4]];
                                    o[r[1]](function () {
                                        var n = i && i.apply(this, arguments);
                                        n && p(n.promise)
                                            ? n
                                                .promise()
                                                .progress(t.notify)
                                                .done(t.resolve)
                                                .fail(t.reject)
                                            : t[r[0] + "With"](this, i ? [n] : arguments);
                                    });
                                }),
                                    (n = null);
                            }).promise();
                        },
                        then: function (t, r, i) {
                            var o = 0;

                            function u(t, e, r, i) {
                                return function () {
                                    var c = this,
                                        f = arguments,
                                        a = function () {
                                            var n, a;
                                            if (!(t < o)) {
                                                if ((n = r.apply(c, f)) === e.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                (a =
                                                    n &&
                                                    ("object" == typeof n || "function" == typeof n) &&
                                                    n.then),
                                                    p(a)
                                                        ? i
                                                            ? a.call(n, u(o, e, R, i), u(o, e, _, i))
                                                            : (o++,
                                                                a.call(
                                                                    n,
                                                                    u(o, e, R, i),
                                                                    u(o, e, _, i),
                                                                    u(o, e, R, e.notifyWith)
                                                                ))
                                                        : (r !== R && ((c = void 0), (f = [n])),
                                                            (i || e.resolveWith)(c, f));
                                            }
                                        },
                                        s = i
                                            ? a
                                            : function () {
                                                try {
                                                    a();
                                                } catch (n) {
                                                    S.Deferred.exceptionHook &&
                                                        S.Deferred.exceptionHook(n, s.stackTrace),
                                                        o <= t + 1 &&
                                                        (r !== _ && ((c = void 0), (f = [n])),
                                                            e.rejectWith(c, f));
                                                }
                                            };
                                    t
                                        ? s()
                                        : (S.Deferred.getStackHook &&
                                            (s.stackTrace = S.Deferred.getStackHook()),
                                            n.setTimeout(s));
                                };
                            }
                            return S.Deferred(function (n) {
                                e[0][3].add(u(0, n, p(i) ? i : R, n.notifyWith)),
                                    e[1][3].add(u(0, n, p(t) ? t : R)),
                                    e[2][3].add(u(0, n, p(r) ? r : _));
                            }).promise();
                        },
                        promise: function (n) {
                            return null != n ? S.extend(n, i) : i;
                        },
                    },
                    o = {};
                return (
                    S.each(e, function (n, t) {
                        var u = t[2],
                            c = t[5];
                        (i[t[1]] = u.add),
                            c &&
                            u.add(
                                function () {
                                    r = c;
                                },
                                e[3 - n][2].disable,
                                e[3 - n][3].disable,
                                e[0][2].lock,
                                e[0][3].lock
                            ),
                            u.add(t[3].fire),
                            (o[t[0]] = function () {
                                return (
                                    o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                                );
                            }),
                            (o[t[0] + "With"] = u.fireWith);
                    }),
                    i.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (n) {
                var t = arguments.length,
                    e = t,
                    r = Array(e),
                    o = i.call(arguments),
                    u = S.Deferred(),
                    c = function (n) {
                        return function (e) {
                            (r[n] = this),
                                (o[n] = 1 < arguments.length ? i.call(arguments) : e),
                                --t || u.resolveWith(r, o);
                        };
                    };
                if (
                    t <= 1 &&
                    (H(n, u.done(c(e)).resolve, u.reject, !t),
                        "pending" === u.state() || p(o[e] && o[e].then))
                )
                    return u.then();
                for (; e--;) H(o[e], c(e), u.reject);
                return u.promise();
            },
        });
    var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (t, e) {
        n.console &&
            n.console.warn &&
            t &&
            O.test(t.name) &&
            n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
    }),
        (S.readyException = function (t) {
            n.setTimeout(function () {
                throw t;
            });
        });
    var I = S.Deferred();

    function U() {
        m.removeEventListener("DOMContentLoaded", U),
            n.removeEventListener("load", U),
            S.ready();
    }
    (S.fn.ready = function (n) {
        return (
            I.then(n).catch(function (n) {
                S.readyException(n);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (n) {
                (!0 === n ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0) !== n && 0 < --S.readyWait) ||
                    I.resolveWith(m, [S]);
            },
        }),
        (S.ready.then = I.then),
        "complete" === m.readyState ||
            ("loading" !== m.readyState && !m.documentElement.doScroll)
            ? n.setTimeout(S.ready)
            : (m.addEventListener("DOMContentLoaded", U),
                n.addEventListener("load", U));
    var q = function (n, t, e, r, i, o, u) {
        var c = 0,
            f = n.length,
            a = null == e;
        if ("object" === b(e))
            for (c in ((i = !0), e)) q(n, t, c, e[c], !0, o, u);
        else if (
            void 0 !== r &&
            ((i = !0),
                p(r) || (u = !0),
                a &&
                (u
                    ? (t.call(n, r), (t = null))
                    : ((a = t),
                        (t = function (n, t, e) {
                            return a.call(S(n), e);
                        }))),
                t)
        )
            for (; c < f; c++) t(n[c], e, u ? r : r.call(n[c], c, t(n[c], e)));
        return i ? n : a ? t.call(n) : f ? t(n[0], e) : o;
    },
        W = /^-ms-/,
        z = /-([a-z])/g;

    function G(n, t) {
        return t.toUpperCase();
    }

    function X(n) {
        return n.replace(W, "ms-").replace(z, G);
    }
    var B = function (n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
    };

    function Y() {
        this.expando = S.expando + Y.uid++;
    }
    (Y.uid = 1),
        (Y.prototype = {
            cache: function (n) {
                var t = n[this.expando];
                return (
                    t ||
                    ((t = {}),
                        B(n) &&
                        (n.nodeType
                            ? (n[this.expando] = t)
                            : Object.defineProperty(n, this.expando, {
                                value: t,
                                configurable: !0,
                            }))),
                    t
                );
            },
            set: function (n, t, e) {
                var r,
                    i = this.cache(n);
                if ("string" == typeof t) i[X(t)] = e;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (n, t) {
                return void 0 === t
                    ? this.cache(n)
                    : n[this.expando] && n[this.expando][X(t)];
            },
            access: function (n, t, e) {
                return void 0 === t || (t && "string" == typeof t && void 0 === e)
                    ? this.get(n, t)
                    : (this.set(n, t, e), void 0 !== e ? e : t);
            },
            remove: function (n, t) {
                var e,
                    r = n[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        e = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in r
                                ? [t]
                                : t.match(P) || []).length;
                        for (; e--;) delete r[t[e]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                        (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
                }
            },
            hasData: function (n) {
                var t = n[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            },
        });
    var J = new Y(),
        K = new Y(),
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function V(n, t, e) {
        var r, i;
        if (void 0 === e && 1 === n.nodeType)
            if (
                ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
                    "string" == typeof (e = n.getAttribute(r)))
            ) {
                try {
                    e =
                        "true" === (i = e) ||
                        ("false" !== i &&
                            ("null" === i
                                ? null
                                : i === +i + ""
                                    ? +i
                                    : Q.test(i)
                                        ? JSON.parse(i)
                                        : i));
                } catch (n) { }
                K.set(n, t, e);
            } else e = void 0;
        return e;
    }
    S.extend({
        hasData: function (n) {
            return K.hasData(n) || J.hasData(n);
        },
        data: function (n, t, e) {
            return K.access(n, t, e);
        },
        removeData: function (n, t) {
            K.remove(n, t);
        },
        _data: function (n, t, e) {
            return J.access(n, t, e);
        },
        _removeData: function (n, t) {
            J.remove(n, t);
        },
    }),
        S.fn.extend({
            data: function (n, t) {
                var e,
                    r,
                    i,
                    o = this[0],
                    u = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                    ) {
                        for (e = u.length; e--;)
                            u[e] &&
                                0 === (r = u[e].name).indexOf("data-") &&
                                ((r = X(r.slice(5))), V(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                        K.set(this, n);
                    })
                    : q(
                        this,
                        function (t) {
                            var e;
                            if (o && void 0 === t)
                                return void 0 !== (e = K.get(o, n)) ||
                                    void 0 !== (e = V(o, n))
                                    ? e
                                    : void 0;
                            this.each(function () {
                                K.set(this, n, t);
                            });
                        },
                        null,
                        t,
                        1 < arguments.length,
                        null,
                        !0
                    );
            },
            removeData: function (n) {
                return this.each(function () {
                    K.remove(this, n);
                });
            },
        }),
        S.extend({
            queue: function (n, t, e) {
                var r;
                if (n)
                    return (
                        (t = (t || "fx") + "queue"),
                        (r = J.get(n, t)),
                        e &&
                        (!r || Array.isArray(e)
                            ? (r = J.access(n, t, S.makeArray(e)))
                            : r.push(e)),
                        r || []
                    );
            },
            dequeue: function (n, t) {
                t = t || "fx";
                var e = S.queue(n, t),
                    r = e.length,
                    i = e.shift(),
                    o = S._queueHooks(n, t);
                "inprogress" === i && ((i = e.shift()), r--),
                    i &&
                    ("fx" === t && e.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            n,
                            function () {
                                S.dequeue(n, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (n, t) {
                var e = t + "queueHooks";
                return (
                    J.get(n, e) ||
                    J.access(n, e, {
                        empty: S.Callbacks("once memory").add(function () {
                            J.remove(n, [t + "queue", e]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (n, t) {
                var e = 2;
                return (
                    "string" != typeof n && ((t = n), (n = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], n)
                        : void 0 === t
                            ? this
                            : this.each(function () {
                                var e = S.queue(this, n, t);
                                S._queueHooks(this, n),
                                    "fx" === n && "inprogress" !== e[0] && S.dequeue(this, n);
                            })
                );
            },
            dequeue: function (n) {
                return this.each(function () {
                    S.dequeue(this, n);
                });
            },
            clearQueue: function (n) {
                return this.queue(n || "fx", []);
            },
            promise: function (n, t) {
                var e,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    u = this.length,
                    c = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for (
                    "string" != typeof n && ((t = n), (n = void 0)), n = n || "fx";
                    u--;

                )
                    (e = J.get(o[u], n + "queueHooks")) &&
                        e.empty &&
                        (r++, e.empty.add(c));
                return c(), i.promise(t);
            },
        });
    var nn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        tn = new RegExp("^(?:([+-])=|)(" + nn + ")([a-z%]*)$", "i"),
        en = ["Top", "Right", "Bottom", "Left"],
        rn = m.documentElement,
        on = function (n) {
            return S.contains(n.ownerDocument, n);
        },
        un = {
            composed: !0,
        };
    rn.getRootNode &&
        (on = function (n) {
            return (
                S.contains(n.ownerDocument, n) || n.getRootNode(un) === n.ownerDocument
            );
        });
    var cn = function (n, t) {
        return (
            "none" === (n = t || n).style.display ||
            ("" === n.style.display && on(n) && "none" === S.css(n, "display"))
        );
    };

    function fn(n, t, e, r) {
        var i,
            o,
            u = 20,
            c = r
                ? function () {
                    return r.cur();
                }
                : function () {
                    return S.css(n, t, "");
                },
            f = c(),
            a = (e && e[3]) || (S.cssNumber[t] ? "" : "px"),
            s =
                n.nodeType &&
                (S.cssNumber[t] || ("px" !== a && +f)) &&
                tn.exec(S.css(n, t));
        if (s && s[3] !== a) {
            for (f /= 2, a = a || s[3], s = +f || 1; u--;)
                S.style(n, t, s + a),
                    (1 - o) * (1 - (o = c() / f || 0.5)) <= 0 && (u = 0),
                    (s /= o);
            (s *= 2), S.style(n, t, s + a), (e = e || []);
        }
        return (
            e &&
            ((s = +s || +f || 0),
                (i = e[1] ? s + (e[1] + 1) * e[2] : +e[2]),
                r && ((r.unit = a), (r.start = s), (r.end = i))),
            i
        );
    }
    var an = {};

    function sn(n, t) {
        for (var e, r, i, o, u, c, f, a = [], s = 0, l = n.length; s < l; s++)
            (r = n[s]).style &&
                ((e = r.style.display),
                    t
                        ? ("none" === e &&
                            ((a[s] = J.get(r, "display") || null),
                                a[s] || (r.style.display = "")),
                            "" === r.style.display &&
                            cn(r) &&
                            (a[s] =
                                ((f = u = o = void 0),
                                    (u = (i = r).ownerDocument),
                                    (c = i.nodeName),
                                    (f = an[c]) ||
                                    ((o = u.body.appendChild(u.createElement(c))),
                                        (f = S.css(o, "display")),
                                        o.parentNode.removeChild(o),
                                        "none" === f && (f = "block"),
                                        (an[c] = f)))))
                        : "none" !== e && ((a[s] = "none"), J.set(r, "display", e)));
        for (s = 0; s < l; s++) null != a[s] && (n[s].style.display = a[s]);
        return n;
    }
    S.fn.extend({
        show: function () {
            return sn(this, !0);
        },
        hide: function () {
            return sn(this);
        },
        toggle: function (n) {
            return "boolean" == typeof n
                ? n
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    cn(this) ? S(this).show() : S(this).hide();
                });
        },
    });
    var ln,
        hn,
        dn = /^(?:checkbox|radio)$/i,
        pn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        vn = /^$|^module$|\/(?:java|ecma)script/i;
    (ln = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (hn = m.createElement("input")).setAttribute("type", "radio"),
        hn.setAttribute("checked", "checked"),
        hn.setAttribute("name", "t"),
        ln.appendChild(hn),
        (d.checkClone = ln.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ln.innerHTML = "<textarea>x</textarea>"),
        (d.noCloneChecked = !!ln.cloneNode(!0).lastChild.defaultValue),
        (ln.innerHTML = "<option></option>"),
        (d.option = !!ln.lastChild);
    var mn = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
    };

    function gn(n, t) {
        var e;
        return (
            (e =
                void 0 !== n.getElementsByTagName
                    ? n.getElementsByTagName(t || "*")
                    : void 0 !== n.querySelectorAll
                        ? n.querySelectorAll(t || "*")
                        : []),
            void 0 === t || (t && k(n, t)) ? S.merge([n], e) : e
        );
    }

    function yn(n, t) {
        for (var e = 0, r = n.length; e < r; e++)
            J.set(n[e], "globalEval", !t || J.get(t[e], "globalEval"));
    }
    (mn.tbody = mn.tfoot = mn.colgroup = mn.caption = mn.thead),
        (mn.th = mn.td),
        d.option ||
        (mn.optgroup = mn.option =
            [1, "<select multiple='multiple'>", "</select>"]);
    var bn = /<|&#?\w+;/;

    function xn(n, t, e, r, i) {
        for (
            var o,
            u,
            c,
            f,
            a,
            s,
            l = t.createDocumentFragment(),
            h = [],
            d = 0,
            p = n.length;
            d < p;
            d++
        )
            if ((o = n[d]) || 0 === o)
                if ("object" === b(o)) S.merge(h, o.nodeType ? [o] : o);
                else if (bn.test(o)) {
                    for (
                        u = u || l.appendChild(t.createElement("div")),
                        c = (pn.exec(o) || ["", ""])[1].toLowerCase(),
                        f = mn[c] || mn._default,
                        u.innerHTML = f[1] + S.htmlPrefilter(o) + f[2],
                        s = f[0];
                        s--;

                    )
                        u = u.lastChild;
                    S.merge(h, u.childNodes), ((u = l.firstChild).textContent = "");
                } else h.push(t.createTextNode(o));
        for (l.textContent = "", d = 0; (o = h[d++]);)
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (
                ((a = on(o)), (u = gn(l.appendChild(o), "script")), a && yn(u), e)
            )
                for (s = 0; (o = u[s++]);) vn.test(o.type || "") && e.push(o);
        return l;
    }
    var Sn = /^key/,
        wn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Tn = /^([^.]*)(?:\.(.+)|)/;

    function En() {
        return !0;
    }

    function Dn() {
        return !1;
    }

    function $n(n, t) {
        return (
            (n ===
                (function () {
                    try {
                        return m.activeElement;
                    } catch (n) { }
                })()) ==
            ("focus" === t)
        );
    }

    function kn(n, t, e, r, i, o) {
        var u, c;
        if ("object" == typeof t) {
            for (c in ("string" != typeof e && ((r = r || e), (e = void 0)), t))
                kn(n, c, e, r, t[c], o);
            return n;
        }
        if (
            (null == r && null == i
                ? ((i = e), (r = e = void 0))
                : null == i &&
                ("string" == typeof e
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = e), (e = void 0))),
                !1 === i)
        )
            i = Dn;
        else if (!i) return n;
        return (
            1 === o &&
            ((u = i),
                ((i = function (n) {
                    return S().off(n), u.apply(this, arguments);
                }).guid = u.guid || (u.guid = S.guid++))),
            n.each(function () {
                S.event.add(this, t, i, r, e);
            })
        );
    }

    function Fn(n, t, e) {
        e
            ? (J.set(n, t, !1),
                S.event.add(n, t, {
                    namespace: !1,
                    handler: function (n) {
                        var r,
                            o,
                            u = J.get(this, t);
                        if (1 & n.isTrigger && this[t]) {
                            if (u.length)
                                (S.event.special[t] || {}).delegateType && n.stopPropagation();
                            else if (
                                ((u = i.call(arguments)),
                                    J.set(this, t, u),
                                    (r = e(this, t)),
                                    this[t](),
                                    u !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : (o = {}),
                                    u !== o)
                            )
                                return (
                                    n.stopImmediatePropagation(), n.preventDefault(), o.value
                                );
                        } else
                            u.length &&
                                (J.set(this, t, {
                                    value: S.event.trigger(
                                        S.extend(u[0], S.Event.prototype),
                                        u.slice(1),
                                        this
                                    ),
                                }),
                                    n.stopImmediatePropagation());
                    },
                }))
            : void 0 === J.get(n, t) && S.event.add(n, t, En);
    }
    (S.event = {
        global: {},
        add: function (n, t, e, r, i) {
            var o,
                u,
                c,
                f,
                a,
                s,
                l,
                h,
                d,
                p,
                v,
                m = J.get(n);
            if (B(n))
                for (
                    e.handler && ((e = (o = e).handler), (i = o.selector)),
                    i && S.find.matchesSelector(rn, i),
                    e.guid || (e.guid = S.guid++),
                    (f = m.events) || (f = m.events = Object.create(null)),
                    (u = m.handle) ||
                    (u = m.handle =
                        function (t) {
                            return void 0 !== S && S.event.triggered !== t.type
                                ? S.event.dispatch.apply(n, arguments)
                                : void 0;
                        }),
                    a = (t = (t || "").match(P) || [""]).length;
                    a--;

                )
                    (d = v = (c = Tn.exec(t[a]) || [])[1]),
                        (p = (c[2] || "").split(".").sort()),
                        d &&
                        ((l = S.event.special[d] || {}),
                            (d = (i ? l.delegateType : l.bindType) || d),
                            (l = S.event.special[d] || {}),
                            (s = S.extend(
                                {
                                    type: d,
                                    origType: v,
                                    data: r,
                                    handler: e,
                                    guid: e.guid,
                                    selector: i,
                                    needsContext: i && S.expr.match.needsContext.test(i),
                                    namespace: p.join("."),
                                },
                                o
                            )),
                            (h = f[d]) ||
                            (((h = f[d] = []).delegateCount = 0),
                                (l.setup && !1 !== l.setup.call(n, r, p, u)) ||
                                (n.addEventListener && n.addEventListener(d, u))),
                            l.add &&
                            (l.add.call(n, s), s.handler.guid || (s.handler.guid = e.guid)),
                            i ? h.splice(h.delegateCount++, 0, s) : h.push(s),
                            (S.event.global[d] = !0));
        },
        remove: function (n, t, e, r, i) {
            var o,
                u,
                c,
                f,
                a,
                s,
                l,
                h,
                d,
                p,
                v,
                m = J.hasData(n) && J.get(n);
            if (m && (f = m.events)) {
                for (a = (t = (t || "").match(P) || [""]).length; a--;)
                    if (
                        ((d = v = (c = Tn.exec(t[a]) || [])[1]),
                            (p = (c[2] || "").split(".").sort()),
                            d)
                    ) {
                        for (
                            l = S.event.special[d] || {},
                            h = f[(d = (r ? l.delegateType : l.bindType) || d)] || [],
                            c =
                            c[2] &&
                            new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            u = o = h.length;
                            o--;

                        )
                            (s = h[o]),
                                (!i && v !== s.origType) ||
                                (e && e.guid !== s.guid) ||
                                (c && !c.test(s.namespace)) ||
                                (r && r !== s.selector && ("**" !== r || !s.selector)) ||
                                (h.splice(o, 1),
                                    s.selector && h.delegateCount--,
                                    l.remove && l.remove.call(n, s));
                        u &&
                            !h.length &&
                            ((l.teardown && !1 !== l.teardown.call(n, p, m.handle)) ||
                                S.removeEvent(n, d, m.handle),
                                delete f[d]);
                    } else for (d in f) S.event.remove(n, d + t[a], e, r, !0);
                S.isEmptyObject(f) && J.remove(n, "handle events");
            }
        },
        dispatch: function (n) {
            var t,
                e,
                r,
                i,
                o,
                u,
                c = new Array(arguments.length),
                f = S.event.fix(n),
                a = (J.get(this, "events") || Object.create(null))[f.type] || [],
                s = S.event.special[f.type] || {};
            for (c[0] = f, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (
                ((f.delegateTarget = this),
                    !s.preDispatch || !1 !== s.preDispatch.call(this, f))
            ) {
                for (
                    u = S.event.handlers.call(this, f, a), t = 0;
                    (i = u[t++]) && !f.isPropagationStopped();

                )
                    for (
                        f.currentTarget = i.elem, e = 0;
                        (o = i.handlers[e++]) && !f.isImmediatePropagationStopped();

                    )
                        (f.rnamespace &&
                            !1 !== o.namespace &&
                            !f.rnamespace.test(o.namespace)) ||
                            ((f.handleObj = o),
                                (f.data = o.data),
                                void 0 !==
                                (r = (
                                    (S.event.special[o.origType] || {}).handle || o.handler
                                ).apply(i.elem, c)) &&
                                !1 === (f.result = r) &&
                                (f.preventDefault(), f.stopPropagation()));
                return s.postDispatch && s.postDispatch.call(this, f), f.result;
            }
        },
        handlers: function (n, t) {
            var e,
                r,
                i,
                o,
                u,
                c = [],
                f = t.delegateCount,
                a = n.target;
            if (f && a.nodeType && !("click" === n.type && 1 <= n.button))
                for (; a !== this; a = a.parentNode || this)
                    if (1 === a.nodeType && ("click" !== n.type || !0 !== a.disabled)) {
                        for (o = [], u = {}, e = 0; e < f; e++)
                            void 0 === u[(i = (r = t[e]).selector + " ")] &&
                                (u[i] = r.needsContext
                                    ? -1 < S(i, this).index(a)
                                    : S.find(i, this, null, [a]).length),
                                u[i] && o.push(r);
                        o.length &&
                            c.push({
                                elem: a,
                                handlers: o,
                            });
                    }
            return (
                (a = this),
                f < t.length &&
                c.push({
                    elem: a,
                    handlers: t.slice(f),
                }),
                c
            );
        },
        addProp: function (n, t) {
            Object.defineProperty(S.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: p(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[n];
                    },
                set: function (t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t,
                    });
                },
            });
        },
        fix: function (n) {
            return n[S.expando] ? n : new S.Event(n);
        },
        special: {
            load: {
                noBubble: !0,
            },
            click: {
                setup: function (n) {
                    var t = this || n;
                    return (
                        dn.test(t.type) && t.click && k(t, "input") && Fn(t, "click", En),
                        !1
                    );
                },
                trigger: function (n) {
                    var t = this || n;
                    return (
                        dn.test(t.type) && t.click && k(t, "input") && Fn(t, "click"), !0
                    );
                },
                _default: function (n) {
                    var t = n.target;
                    return (
                        (dn.test(t.type) &&
                            t.click &&
                            k(t, "input") &&
                            J.get(t, "click")) ||
                        k(t, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (n) {
                    void 0 !== n.result &&
                        n.originalEvent &&
                        (n.originalEvent.returnValue = n.result);
                },
            },
        },
    }),
        (S.removeEvent = function (n, t, e) {
            n.removeEventListener && n.removeEventListener(t, e);
        }),
        (S.Event = function (n, t) {
            if (!(this instanceof S.Event)) return new S.Event(n, t);
            n && n.type
                ? ((this.originalEvent = n),
                    (this.type = n.type),
                    (this.isDefaultPrevented =
                        n.defaultPrevented ||
                            (void 0 === n.defaultPrevented && !1 === n.returnValue)
                            ? En
                            : Dn),
                    (this.target =
                        n.target && 3 === n.target.nodeType
                            ? n.target.parentNode
                            : n.target),
                    (this.currentTarget = n.currentTarget),
                    (this.relatedTarget = n.relatedTarget))
                : (this.type = n),
                t && S.extend(this, t),
                (this.timeStamp = (n && n.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Dn,
            isPropagationStopped: Dn,
            isImmediatePropagationStopped: Dn,
            isSimulated: !1,
            preventDefault: function () {
                var n = this.originalEvent;
                (this.isDefaultPrevented = En),
                    n && !this.isSimulated && n.preventDefault();
            },
            stopPropagation: function () {
                var n = this.originalEvent;
                (this.isPropagationStopped = En),
                    n && !this.isSimulated && n.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var n = this.originalEvent;
                (this.isImmediatePropagationStopped = En),
                    n && !this.isSimulated && n.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (n) {
                    var t = n.button;
                    return null == n.which && Sn.test(n.type)
                        ? null != n.charCode
                            ? n.charCode
                            : n.keyCode
                        : !n.which && void 0 !== t && wn.test(n.type)
                            ? 1 & t
                                ? 1
                                : 2 & t
                                    ? 3
                                    : 4 & t
                                        ? 2
                                        : 0
                            : n.which;
                },
            },
            S.event.addProp
        ),
        S.each(
            {
                focus: "focusin",
                blur: "focusout",
            },
            function (n, t) {
                S.event.special[n] = {
                    setup: function () {
                        return Fn(this, n, $n), !1;
                    },
                    trigger: function () {
                        return Fn(this, n), !0;
                    },
                    delegateType: t,
                };
            }
        ),
        S.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (n, t) {
                S.event.special[n] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (n) {
                        var e,
                            r = n.relatedTarget,
                            i = n.handleObj;
                        return (
                            (r && (r === this || S.contains(this, r))) ||
                            ((n.type = i.origType),
                                (e = i.handler.apply(this, arguments)),
                                (n.type = t)),
                            e
                        );
                    },
                };
            }
        ),
        S.fn.extend({
            on: function (n, t, e, r) {
                return kn(this, n, t, e, r);
            },
            one: function (n, t, e, r) {
                return kn(this, n, t, e, r, 1);
            },
            off: function (n, t, e) {
                var r, i;
                if (n && n.preventDefault && n.handleObj)
                    return (
                        (r = n.handleObj),
                        S(n.delegateTarget).off(
                            r.namespace ? r.origType + "." + r.namespace : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof n) {
                    for (i in n) this.off(i, t, n[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((e = t), (t = void 0)),
                    !1 === e && (e = Dn),
                    this.each(function () {
                        S.event.remove(this, n, e, t);
                    })
                );
            },
        });
    var jn = /<script|<style|<link/i,
        Mn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ln = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Cn(n, t) {
        return (
            (k(n, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(n).children("tbody")[0]) ||
            n
        );
    }

    function Nn(n) {
        return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
    }

    function An(n) {
        return (
            "true/" === (n.type || "").slice(0, 5)
                ? (n.type = n.type.slice(5))
                : n.removeAttribute("type"),
            n
        );
    }

    function Pn(n, t) {
        var e, r, i, o, u, c;
        if (1 === t.nodeType) {
            if (J.hasData(n) && (c = J.get(n).events))
                for (i in (J.remove(t, "handle events"), c))
                    for (e = 0, r = c[i].length; e < r; e++) S.event.add(t, i, c[i][e]);
            K.hasData(n) && ((o = K.access(n)), (u = S.extend({}, o)), K.set(t, u));
        }
    }

    function Rn(n, t, e, r) {
        t = o(t);
        var i,
            u,
            c,
            f,
            a,
            s,
            l = 0,
            h = n.length,
            v = h - 1,
            m = t[0],
            g = p(m);
        if (g || (1 < h && "string" == typeof m && !d.checkClone && Mn.test(m)))
            return n.each(function (i) {
                var o = n.eq(i);
                g && (t[0] = m.call(this, i, o.html())), Rn(o, t, e, r);
            });
        if (
            h &&
            ((u = (i = xn(t, n[0].ownerDocument, !1, n, r)).firstChild),
                1 === i.childNodes.length && (i = u),
                u || r)
        ) {
            for (f = (c = S.map(gn(i, "script"), Nn)).length; l < h; l++)
                (a = i),
                    l !== v &&
                    ((a = S.clone(a, !0, !0)), f && S.merge(c, gn(a, "script"))),
                    e.call(n[l], a, l);
            if (f)
                for (s = c[c.length - 1].ownerDocument, S.map(c, An), l = 0; l < f; l++)
                    (a = c[l]),
                        vn.test(a.type || "") &&
                        !J.access(a, "globalEval") &&
                        S.contains(s, a) &&
                        (a.src && "module" !== (a.type || "").toLowerCase()
                            ? S._evalUrl &&
                            !a.noModule &&
                            S._evalUrl(
                                a.src,
                                {
                                    nonce: a.nonce || a.getAttribute("nonce"),
                                },
                                s
                            )
                            : y(a.textContent.replace(Ln, ""), a, s));
        }
        return n;
    }

    function _n(n, t, e) {
        for (var r, i = t ? S.filter(t, n) : n, o = 0; null != (r = i[o]); o++)
            e || 1 !== r.nodeType || S.cleanData(gn(r)),
                r.parentNode &&
                (e && on(r) && yn(gn(r, "script")), r.parentNode.removeChild(r));
        return n;
    }
    S.extend({
        htmlPrefilter: function (n) {
            return n;
        },
        clone: function (n, t, e) {
            var r,
                i,
                o,
                u,
                c,
                f,
                a,
                s = n.cloneNode(!0),
                l = on(n);
            if (
                !(
                    d.noCloneChecked ||
                    (1 !== n.nodeType && 11 !== n.nodeType) ||
                    S.isXMLDoc(n)
                )
            )
                for (u = gn(s), r = 0, i = (o = gn(n)).length; r < i; r++)
                    (c = o[r]),
                        "input" === (a = (f = u[r]).nodeName.toLowerCase()) &&
                            dn.test(c.type)
                            ? (f.checked = c.checked)
                            : ("input" !== a && "textarea" !== a) ||
                            (f.defaultValue = c.defaultValue);
            if (t)
                if (e)
                    for (o = o || gn(n), u = u || gn(s), r = 0, i = o.length; r < i; r++)
                        Pn(o[r], u[r]);
                else Pn(n, s);
            return (
                0 < (u = gn(s, "script")).length && yn(u, !l && gn(n, "script")), s
            );
        },
        cleanData: function (n) {
            for (var t, e, r, i = S.event.special, o = 0; void 0 !== (e = n[o]); o++)
                if (B(e)) {
                    if ((t = e[J.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(e, r) : S.removeEvent(e, r, t.handle);
                        e[J.expando] = void 0;
                    }
                    e[K.expando] && (e[K.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (n) {
                return _n(this, n, !0);
            },
            remove: function (n) {
                return _n(this, n);
            },
            text: function (n) {
                return q(
                    this,
                    function (n) {
                        return void 0 === n
                            ? S.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                    (this.textContent = n);
                            });
                    },
                    null,
                    n,
                    arguments.length
                );
            },
            append: function () {
                return Rn(this, arguments, function (n) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        Cn(this, n).appendChild(n);
                });
            },
            prepend: function () {
                return Rn(this, arguments, function (n) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Cn(this, n);
                        t.insertBefore(n, t.firstChild);
                    }
                });
            },
            before: function () {
                return Rn(this, arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this);
                });
            },
            after: function () {
                return Rn(this, arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
                });
            },
            empty: function () {
                for (var n, t = 0; null != (n = this[t]); t++)
                    1 === n.nodeType && (S.cleanData(gn(n, !1)), (n.textContent = ""));
                return this;
            },
            clone: function (n, t) {
                return (
                    (n = null != n && n),
                    (t = null == t ? n : t),
                    this.map(function () {
                        return S.clone(this, n, t);
                    })
                );
            },
            html: function (n) {
                return q(
                    this,
                    function (n) {
                        var t = this[0] || {},
                            e = 0,
                            r = this.length;
                        if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                        if (
                            "string" == typeof n &&
                            !jn.test(n) &&
                            !mn[(pn.exec(n) || ["", ""])[1].toLowerCase()]
                        ) {
                            n = S.htmlPrefilter(n);
                            try {
                                for (; e < r; e++)
                                    1 === (t = this[e] || {}).nodeType &&
                                        (S.cleanData(gn(t, !1)), (t.innerHTML = n));
                                t = 0;
                            } catch (n) { }
                        }
                        t && this.empty().append(n);
                    },
                    null,
                    n,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Rn(
                    this,
                    arguments,
                    function (t) {
                        var e = this.parentNode;
                        S.inArray(this, n) < 0 &&
                            (S.cleanData(gn(this)), e && e.replaceChild(t, this));
                    },
                    n
                );
            },
        }),
        S.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (n, t) {
                S.fn[n] = function (n) {
                    for (var e, r = [], i = S(n), o = i.length - 1, c = 0; c <= o; c++)
                        (e = c === o ? this : this.clone(!0)),
                            S(i[c])[t](e),
                            u.apply(r, e.get());
                    return this.pushStack(r);
                };
            }
        );
    var Hn = new RegExp("^(" + nn + ")(?!px)[a-z%]+$", "i"),
        On = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        In = function (n, t, e) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = n.style[i]), (n.style[i] = t[i]);
            for (i in ((r = e.call(n)), t)) n.style[i] = o[i];
            return r;
        },
        Un = new RegExp(en.join("|"), "i");

    function qn(n, t, e) {
        var r,
            i,
            o,
            u,
            c = n.style;
        return (
            (e = e || On(n)) &&
            ("" !== (u = e.getPropertyValue(t) || e[t]) ||
                on(n) ||
                (u = S.style(n, t)),
                !d.pixelBoxStyles() &&
                Hn.test(u) &&
                Un.test(t) &&
                ((r = c.width),
                    (i = c.minWidth),
                    (o = c.maxWidth),
                    (c.minWidth = c.maxWidth = c.width = u),
                    (u = e.width),
                    (c.width = r),
                    (c.minWidth = i),
                    (c.maxWidth = o))),
            void 0 !== u ? u + "" : u
        );
    }

    function Wn(n, t) {
        return {
            get: function () {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (s) {
                (a.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (s.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    rn.appendChild(a).appendChild(s);
                var t = n.getComputedStyle(s);
                (r = "1%" !== t.top),
                    (f = 12 === e(t.marginLeft)),
                    (s.style.right = "60%"),
                    (u = 36 === e(t.right)),
                    (i = 36 === e(t.width)),
                    (s.style.position = "absolute"),
                    (o = 12 === e(s.offsetWidth / 3)),
                    rn.removeChild(a),
                    (s = null);
            }
        }

        function e(n) {
            return Math.round(parseFloat(n));
        }
        var r,
            i,
            o,
            u,
            c,
            f,
            a = m.createElement("div"),
            s = m.createElement("div");
        s.style &&
            ((s.style.backgroundClip = "content-box"),
                (s.cloneNode(!0).style.backgroundClip = ""),
                (d.clearCloneStyle = "content-box" === s.style.backgroundClip),
                S.extend(d, {
                    boxSizingReliable: function () {
                        return t(), i;
                    },
                    pixelBoxStyles: function () {
                        return t(), u;
                    },
                    pixelPosition: function () {
                        return t(), r;
                    },
                    reliableMarginLeft: function () {
                        return t(), f;
                    },
                    scrollboxSize: function () {
                        return t(), o;
                    },
                    reliableTrDimensions: function () {
                        var t, e, r, i;
                        return (
                            null == c &&
                            ((t = m.createElement("table")),
                                (e = m.createElement("tr")),
                                (r = m.createElement("div")),
                                (t.style.cssText = "position:absolute;left:-11111px"),
                                (e.style.height = "1px"),
                                (r.style.height = "9px"),
                                rn.appendChild(t).appendChild(e).appendChild(r),
                                (i = n.getComputedStyle(e)),
                                (c = 3 < parseInt(i.height)),
                                rn.removeChild(t)),
                            c
                        );
                    },
                }));
    })();
    var zn = ["Webkit", "Moz", "ms"],
        Gn = m.createElement("div").style,
        Xn = {};

    function Bn(n) {
        return (
            S.cssProps[n] ||
            Xn[n] ||
            (n in Gn
                ? n
                : (Xn[n] =
                    (function (n) {
                        for (
                            var t = n[0].toUpperCase() + n.slice(1), e = zn.length;
                            e--;

                        )
                            if ((n = zn[e] + t) in Gn) return n;
                    })(n) || n))
        );
    }
    var Yn = /^(none|table(?!-c[ea]).+)/,
        Jn = /^--/,
        Kn = {
            position: "absolute",
            visibility: "hidden",
            display: "block",
        },
        Qn = {
            letterSpacing: "0",
            fontWeight: "400",
        };

    function Zn(n, t, e) {
        var r = tn.exec(t);
        return r ? Math.max(0, r[2] - (e || 0)) + (r[3] || "px") : t;
    }

    function Vn(n, t, e, r, i, o) {
        var u = "width" === t ? 1 : 0,
            c = 0,
            f = 0;
        if (e === (r ? "border" : "content")) return 0;
        for (; u < 4; u += 2)
            "margin" === e && (f += S.css(n, e + en[u], !0, i)),
                r
                    ? ("content" === e && (f -= S.css(n, "padding" + en[u], !0, i)),
                        "margin" !== e &&
                        (f -= S.css(n, "border" + en[u] + "Width", !0, i)))
                    : ((f += S.css(n, "padding" + en[u], !0, i)),
                        "padding" !== e
                            ? (f += S.css(n, "border" + en[u] + "Width", !0, i))
                            : (c += S.css(n, "border" + en[u] + "Width", !0, i)));
        return (
            !r &&
            0 <= o &&
            (f +=
                Math.max(
                    0,
                    Math.ceil(
                        n["offset" + t[0].toUpperCase() + t.slice(1)] - o - f - c - 0.5
                    )
                ) || 0),
            f
        );
    }

    function nt(n, t, e) {
        var r = On(n),
            i =
                (!d.boxSizingReliable() || e) &&
                "border-box" === S.css(n, "boxSizing", !1, r),
            o = i,
            u = qn(n, t, r),
            c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Hn.test(u)) {
            if (!e) return u;
            u = "auto";
        }
        return (
            ((!d.boxSizingReliable() && i) ||
                (!d.reliableTrDimensions() && k(n, "tr")) ||
                "auto" === u ||
                (!parseFloat(u) && "inline" === S.css(n, "display", !1, r))) &&
            n.getClientRects().length &&
            ((i = "border-box" === S.css(n, "boxSizing", !1, r)),
                (o = c in n) && (u = n[c])),
            (u = parseFloat(u) || 0) +
            Vn(n, t, e || (i ? "border" : "content"), o, r, u) +
            "px"
        );
    }

    function tt(n, t, e, r, i) {
        return new tt.prototype.init(n, t, e, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var e = qn(n, "opacity");
                        return "" === e ? "1" : e;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (n, t, e, r) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var i,
                    o,
                    u,
                    c = X(t),
                    f = Jn.test(t),
                    a = n.style;
                if (
                    (f || (t = Bn(c)), (u = S.cssHooks[t] || S.cssHooks[c]), void 0 === e)
                )
                    return u && "get" in u && void 0 !== (i = u.get(n, !1, r)) ? i : a[t];
                "string" == (o = typeof e) &&
                    (i = tn.exec(e)) &&
                    i[1] &&
                    ((e = fn(n, t, i)), (o = "number")),
                    null != e &&
                    e == e &&
                    ("number" !== o ||
                        f ||
                        (e += (i && i[3]) || (S.cssNumber[c] ? "" : "px")),
                        d.clearCloneStyle ||
                        "" !== e ||
                        0 !== t.indexOf("background") ||
                        (a[t] = "inherit"),
                        (u && "set" in u && void 0 === (e = u.set(n, e, r))) ||
                        (f ? a.setProperty(t, e) : (a[t] = e)));
            }
        },
        css: function (n, t, e, r) {
            var i,
                o,
                u,
                c = X(t);
            return (
                Jn.test(t) || (t = Bn(c)),
                (u = S.cssHooks[t] || S.cssHooks[c]) &&
                "get" in u &&
                (i = u.get(n, !0, e)),
                void 0 === i && (i = qn(n, t, r)),
                "normal" === i && t in Qn && (i = Qn[t]),
                "" === e || e
                    ? ((o = parseFloat(i)), !0 === e || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        S.each(["height", "width"], function (n, t) {
            S.cssHooks[t] = {
                get: function (n, e, r) {
                    if (e)
                        return !Yn.test(S.css(n, "display")) ||
                            (n.getClientRects().length && n.getBoundingClientRect().width)
                            ? nt(n, t, r)
                            : In(n, Kn, function () {
                                return nt(n, t, r);
                            });
                },
                set: function (n, e, r) {
                    var i,
                        o = On(n),
                        u = !d.scrollboxSize() && "absolute" === o.position,
                        c = (u || r) && "border-box" === S.css(n, "boxSizing", !1, o),
                        f = r ? Vn(n, t, r, c, o) : 0;
                    return (
                        c &&
                        u &&
                        (f -= Math.ceil(
                            n["offset" + t[0].toUpperCase() + t.slice(1)] -
                            parseFloat(o[t]) -
                            Vn(n, t, "border", !1, o) -
                            0.5
                        )),
                        f &&
                        (i = tn.exec(e)) &&
                        "px" !== (i[3] || "px") &&
                        ((n.style[t] = e), (e = S.css(n, t))),
                        Zn(0, e, f)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = Wn(d.reliableMarginLeft, function (n, t) {
            if (t)
                return (
                    (parseFloat(qn(n, "marginLeft")) ||
                        n.getBoundingClientRect().left -
                        In(
                            n,
                            {
                                marginLeft: 0,
                            },
                            function () {
                                return n.getBoundingClientRect().left;
                            }
                        )) + "px"
                );
        })),
        S.each(
            {
                margin: "",
                padding: "",
                border: "Width",
            },
            function (n, t) {
                (S.cssHooks[n + t] = {
                    expand: function (e) {
                        for (
                            var r = 0, i = {}, o = "string" == typeof e ? e.split(" ") : [e];
                            r < 4;
                            r++
                        )
                            i[n + en[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                    },
                }),
                    "margin" !== n && (S.cssHooks[n + t].set = Zn);
            }
        ),
        S.fn.extend({
            css: function (n, t) {
                return q(
                    this,
                    function (n, t, e) {
                        var r,
                            i,
                            o = {},
                            u = 0;
                        if (Array.isArray(t)) {
                            for (r = On(n), i = t.length; u < i; u++)
                                o[t[u]] = S.css(n, t[u], !1, r);
                            return o;
                        }
                        return void 0 !== e ? S.style(n, t, e) : S.css(n, t);
                    },
                    n,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = tt).prototype = {
            constructor: tt,
            init: function (n, t, e, r, i, o) {
                (this.elem = n),
                    (this.prop = e),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[e] ? "" : "px"));
            },
            cur: function () {
                var n = tt.propHooks[this.prop];
                return n && n.get ? n.get(this) : tt.propHooks._default.get(this);
            },
            run: function (n) {
                var t,
                    e = tt.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                            S.easing[this.easing](
                                n,
                                this.options.duration * n,
                                0,
                                1,
                                this.options.duration
                            ))
                        : (this.pos = t = n),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    e && e.set ? e.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = tt.prototype),
        ((tt.propHooks = {
            _default: {
                get: function (n) {
                    var t;
                    return 1 !== n.elem.nodeType ||
                        (null != n.elem[n.prop] && null == n.elem.style[n.prop])
                        ? n.elem[n.prop]
                        : (t = S.css(n.elem, n.prop, "")) && "auto" !== t
                            ? t
                            : 0;
                },
                set: function (n) {
                    S.fx.step[n.prop]
                        ? S.fx.step[n.prop](n)
                        : 1 !== n.elem.nodeType ||
                            (!S.cssHooks[n.prop] && null == n.elem.style[Bn(n.prop)])
                            ? (n.elem[n.prop] = n.now)
                            : S.style(n.elem, n.prop, n.now + n.unit);
                },
            },
        }).scrollTop = tt.propHooks.scrollLeft =
            {
                set: function (n) {
                    n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
                },
            }),
        (S.easing = {
            linear: function (n) {
                return n;
            },
            swing: function (n) {
                return 0.5 - Math.cos(n * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = tt.prototype.init),
        (S.fx.step = {});
    var et,
        rt,
        it,
        ot,
        ut = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function ft() {
        rt &&
            (!1 === m.hidden && n.requestAnimationFrame
                ? n.requestAnimationFrame(ft)
                : n.setTimeout(ft, S.fx.interval),
                S.fx.tick());
    }

    function at() {
        return (
            n.setTimeout(function () {
                et = void 0;
            }),
            (et = Date.now())
        );
    }

    function st(n, t) {
        var e,
            r = 0,
            i = {
                height: n,
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (e = en[r])] = i["padding" + e] = n;
        return t && (i.opacity = i.width = n), i;
    }

    function lt(n, t, e) {
        for (
            var r,
            i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
            o = 0,
            u = i.length;
            o < u;
            o++
        )
            if ((r = i[o].call(e, t, n))) return r;
    }

    function ht(n, t, e) {
        var r,
            i,
            o = 0,
            u = ht.prefilters.length,
            c = S.Deferred().always(function () {
                delete f.elem;
            }),
            f = function () {
                if (i) return !1;
                for (
                    var t = et || at(),
                    e = Math.max(0, a.startTime + a.duration - t),
                    r = 1 - (e / a.duration || 0),
                    o = 0,
                    u = a.tweens.length;
                    o < u;
                    o++
                )
                    a.tweens[o].run(r);
                return (
                    c.notifyWith(n, [a, r, e]),
                    r < 1 && u
                        ? e
                        : (u || c.notifyWith(n, [a, 1, 0]), c.resolveWith(n, [a]), !1)
                );
            },
            a = c.promise({
                elem: n,
                props: S.extend({}, t),
                opts: S.extend(
                    !0,
                    {
                        specialEasing: {},
                        easing: S.easing._default,
                    },
                    e
                ),
                originalProperties: t,
                originalOptions: e,
                startTime: et || at(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var r = S.Tween(
                        n,
                        a.opts,
                        t,
                        e,
                        a.opts.specialEasing[t] || a.opts.easing
                    );
                    return a.tweens.push(r), r;
                },
                stop: function (t) {
                    var e = 0,
                        r = t ? a.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; e < r; e++) a.tweens[e].run(1);
                    return (
                        t
                            ? (c.notifyWith(n, [a, 1, 0]), c.resolveWith(n, [a, t]))
                            : c.rejectWith(n, [a, t]),
                        this
                    );
                },
            }),
            s = a.props;
        for (
            (function (n, t) {
                var e, r, i, o, u;
                for (e in n)
                    if (
                        ((i = t[(r = X(e))]),
                            (o = n[e]),
                            Array.isArray(o) && ((i = o[1]), (o = n[e] = o[0])),
                            e !== r && ((n[r] = o), delete n[e]),
                            (u = S.cssHooks[r]) && ("expand" in u))
                    )
                        for (e in ((o = u.expand(o)), delete n[r], o))
                            (e in n) || ((n[e] = o[e]), (t[e] = i));
                    else t[r] = i;
            })(s, a.opts.specialEasing);
            o < u;
            o++
        )
            if ((r = ht.prefilters[o].call(a, n, s, a.opts)))
                return (
                    p(r.stop) &&
                    (S._queueHooks(a.elem, a.opts.queue).stop = r.stop.bind(r)),
                    r
                );
        return (
            S.map(s, lt, a),
            p(a.opts.start) && a.opts.start.call(n, a),
            a
                .progress(a.opts.progress)
                .done(a.opts.done, a.opts.complete)
                .fail(a.opts.fail)
                .always(a.opts.always),
            S.fx.timer(
                S.extend(f, {
                    elem: n,
                    anim: a,
                    queue: a.opts.queue,
                })
            ),
            a
        );
    }
    (S.Animation = S.extend(ht, {
        tweeners: {
            "*": [
                function (n, t) {
                    var e = this.createTween(n, t);
                    return fn(e.elem, n, tn.exec(t), e), e;
                },
            ],
        },
        tweener: function (n, t) {
            p(n) ? ((t = n), (n = ["*"])) : (n = n.match(P));
            for (var e, r = 0, i = n.length; r < i; r++)
                (e = n[r]),
                    (ht.tweeners[e] = ht.tweeners[e] || []),
                    ht.tweeners[e].unshift(t);
        },
        prefilters: [
            function (n, t, e) {
                var r,
                    i,
                    o,
                    u,
                    c,
                    f,
                    a,
                    s,
                    l = "width" in t || "height" in t,
                    h = this,
                    d = {},
                    p = n.style,
                    v = n.nodeType && cn(n),
                    m = J.get(n, "fxshow");
                for (r in (e.queue ||
                    (null == (u = S._queueHooks(n, "fx")).unqueued &&
                        ((u.unqueued = 0),
                            (c = u.empty.fire),
                            (u.empty.fire = function () {
                                u.unqueued || c();
                            })),
                        u.unqueued++,
                        h.always(function () {
                            h.always(function () {
                                u.unqueued--, S.queue(n, "fx").length || u.empty.fire();
                            });
                        })),
                    t))
                    if (((i = t[r]), ut.test(i))) {
                        if (
                            (delete t[r],
                                (o = o || "toggle" === i),
                                i === (v ? "hide" : "show"))
                        ) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            v = !0;
                        }
                        d[r] = (m && m[r]) || S.style(n, r);
                    }
                if ((f = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (l &&
                        1 === n.nodeType &&
                        ((e.overflow = [p.overflow, p.overflowX, p.overflowY]),
                            null == (a = m && m.display) && (a = J.get(n, "display")),
                            "none" === (s = S.css(n, "display")) &&
                            (a
                                ? (s = a)
                                : (sn([n], !0),
                                    (a = n.style.display || a),
                                    (s = S.css(n, "display")),
                                    sn([n]))),
                            ("inline" === s || ("inline-block" === s && null != a)) &&
                            "none" === S.css(n, "float") &&
                            (f ||
                                (h.done(function () {
                                    p.display = a;
                                }),
                                    null == a && ((s = p.display), (a = "none" === s ? "" : s))),
                                (p.display = "inline-block"))),
                        e.overflow &&
                        ((p.overflow = "hidden"),
                            h.always(function () {
                                (p.overflow = e.overflow[0]),
                                    (p.overflowX = e.overflow[1]),
                                    (p.overflowY = e.overflow[2]);
                            })),
                        (f = !1),
                        d))
                        f ||
                            (m
                                ? "hidden" in m && (v = m.hidden)
                                : (m = J.access(n, "fxshow", {
                                    display: a,
                                })),
                                o && (m.hidden = !v),
                                v && sn([n], !0),
                                h.done(function () {
                                    for (r in (v || sn([n]), J.remove(n, "fxshow"), d))
                                        S.style(n, r, d[r]);
                                })),
                            (f = lt(v ? m[r] : 0, r, h)),
                            r in m ||
                            ((m[r] = f.start), v && ((f.end = f.start), (f.start = 0)));
            },
        ],
        prefilter: function (n, t) {
            t ? ht.prefilters.unshift(n) : ht.prefilters.push(n);
        },
    })),
        (S.speed = function (n, t, e) {
            var r =
                n && "object" == typeof n
                    ? S.extend({}, n)
                    : {
                        complete: e || (!e && t) || (p(n) && n),
                        duration: n,
                        easing: (e && t) || (t && !p(t) && t),
                    };
            return (
                S.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                    (r.duration in S.fx.speeds
                        ? (r.duration = S.fx.speeds[r.duration])
                        : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    p(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                }),
                r
            );
        }),
        S.fn.extend({
            fadeTo: function (n, t, e, r) {
                return this.filter(cn).css("opacity", 0).show().end().animate(
                    {
                        opacity: t,
                    },
                    n,
                    e,
                    r
                );
            },
            animate: function (n, t, e, r) {
                var i = S.isEmptyObject(n),
                    o = S.speed(t, e, r),
                    u = function () {
                        var t = ht(this, S.extend({}, n), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (
                    (u.finish = u),
                    i || !1 === o.queue ? this.each(u) : this.queue(o.queue, u)
                );
            },
            stop: function (n, t, e) {
                var r = function (n) {
                    var t = n.stop;
                    delete n.stop, t(e);
                };
                return (
                    "string" != typeof n && ((e = t), (t = n), (n = void 0)),
                    t && this.queue(n || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != n && n + "queueHooks",
                            o = S.timers,
                            u = J.get(this);
                        if (i) u[i] && u[i].stop && r(u[i]);
                        else for (i in u) u[i] && u[i].stop && ct.test(i) && r(u[i]);
                        for (i = o.length; i--;)
                            o[i].elem !== this ||
                                (null != n && o[i].queue !== n) ||
                                (o[i].anim.stop(e), (t = !1), o.splice(i, 1));
                        (!t && e) || S.dequeue(this, n);
                    })
                );
            },
            finish: function (n) {
                return (
                    !1 !== n && (n = n || "fx"),
                    this.each(function () {
                        var t,
                            e = J.get(this),
                            r = e[n + "queue"],
                            i = e[n + "queueHooks"],
                            o = S.timers,
                            u = r ? r.length : 0;
                        for (
                            e.finish = !0,
                            S.queue(this, n, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === n &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < u; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete e.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (n, t) {
            var e = S.fn[t];
            S.fn[t] = function (n, r, i) {
                return null == n || "boolean" == typeof n
                    ? e.apply(this, arguments)
                    : this.animate(st(t, !0), n, r, i);
            };
        }),
        S.each(
            {
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: {
                    opacity: "show",
                },
                fadeOut: {
                    opacity: "hide",
                },
                fadeToggle: {
                    opacity: "toggle",
                },
            },
            function (n, t) {
                S.fn[n] = function (n, e, r) {
                    return this.animate(t, n, e, r);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var n,
                t = 0,
                e = S.timers;
            for (et = Date.now(); t < e.length; t++)
                (n = e[t])() || e[t] !== n || e.splice(t--, 1);
            e.length || S.fx.stop(), (et = void 0);
        }),
        (S.fx.timer = function (n) {
            S.timers.push(n), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            rt || ((rt = !0), ft());
        }),
        (S.fx.stop = function () {
            rt = null;
        }),
        (S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400,
        }),
        (S.fn.delay = function (t, e) {
            return (
                (t = (S.fx && S.fx.speeds[t]) || t),
                (e = e || "fx"),
                this.queue(e, function (e, r) {
                    var i = n.setTimeout(e, t);
                    r.stop = function () {
                        n.clearTimeout(i);
                    };
                })
            );
        }),
        (it = m.createElement("input")),
        (ot = m.createElement("select").appendChild(m.createElement("option"))),
        (it.type = "checkbox"),
        (d.checkOn = "" !== it.value),
        (d.optSelected = ot.selected),
        ((it = m.createElement("input")).value = "t"),
        (it.type = "radio"),
        (d.radioValue = "t" === it.value);
    var dt,
        pt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (n, t) {
            return q(this, S.attr, n, t, 1 < arguments.length);
        },
        removeAttr: function (n) {
            return this.each(function () {
                S.removeAttr(this, n);
            });
        },
    }),
        S.extend({
            attr: function (n, t, e) {
                var r,
                    i,
                    o = n.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === n.getAttribute
                        ? S.prop(n, t, e)
                        : ((1 === o && S.isXMLDoc(n)) ||
                            (i =
                                S.attrHooks[t.toLowerCase()] ||
                                (S.expr.match.bool.test(t) ? dt : void 0)),
                            void 0 !== e
                                ? null === e
                                    ? void S.removeAttr(n, t)
                                    : i && "set" in i && void 0 !== (r = i.set(n, e, t))
                                        ? r
                                        : (n.setAttribute(t, e + ""), e)
                                : i && "get" in i && null !== (r = i.get(n, t))
                                    ? r
                                    : null == (r = S.find.attr(n, t))
                                        ? void 0
                                        : r);
            },
            attrHooks: {
                type: {
                    set: function (n, t) {
                        if (!d.radioValue && "radio" === t && k(n, "input")) {
                            var e = n.value;
                            return n.setAttribute("type", t), e && (n.value = e), t;
                        }
                    },
                },
            },
            removeAttr: function (n, t) {
                var e,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === n.nodeType) for (; (e = i[r++]);) n.removeAttribute(e);
            },
        }),
        (dt = {
            set: function (n, t, e) {
                return !1 === t ? S.removeAttr(n, e) : n.setAttribute(e, e), e;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (n, t) {
            var e = pt[t] || S.find.attr;
            pt[t] = function (n, t, r) {
                var i,
                    o,
                    u = t.toLowerCase();
                return (
                    r ||
                    ((o = pt[u]),
                        (pt[u] = i),
                        (i = null != e(n, t, r) ? u : null),
                        (pt[u] = o)),
                    i
                );
            };
        });
    var vt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function gt(n) {
        return (n.match(P) || []).join(" ");
    }

    function yt(n) {
        return (n.getAttribute && n.getAttribute("class")) || "";
    }

    function bt(n) {
        return Array.isArray(n) ? n : ("string" == typeof n && n.match(P)) || [];
    }
    S.fn.extend({
        prop: function (n, t) {
            return q(this, S.prop, n, t, 1 < arguments.length);
        },
        removeProp: function (n) {
            return this.each(function () {
                delete this[S.propFix[n] || n];
            });
        },
    }),
        S.extend({
            prop: function (n, t, e) {
                var r,
                    i,
                    o = n.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(n)) ||
                        ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== e
                            ? i && "set" in i && void 0 !== (r = i.set(n, e, t))
                                ? r
                                : (n[t] = e)
                            : i && "get" in i && null !== (r = i.get(n, t))
                                ? r
                                : n[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (n) {
                        var t = S.find.attr(n, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : vt.test(n.nodeName) || (mt.test(n.nodeName) && n.href)
                                ? 0
                                : -1;
                    },
                },
            },
            propFix: {
                for: "htmlFor",
                class: "className",
            },
        }),
        d.optSelected ||
        (S.propHooks.selected = {
            get: function (n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (n) {
                var t = n.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        S.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (n) {
                var t,
                    e,
                    r,
                    i,
                    o,
                    u,
                    c,
                    f = 0;
                if (p(n))
                    return this.each(function (t) {
                        S(this).addClass(n.call(this, t, yt(this)));
                    });
                if ((t = bt(n)).length)
                    for (; (e = this[f++]);)
                        if (((i = yt(e)), (r = 1 === e.nodeType && " " + gt(i) + " "))) {
                            for (u = 0; (o = t[u++]);)
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (c = gt(r)) && e.setAttribute("class", c);
                        }
                return this;
            },
            removeClass: function (n) {
                var t,
                    e,
                    r,
                    i,
                    o,
                    u,
                    c,
                    f = 0;
                if (p(n))
                    return this.each(function (t) {
                        S(this).removeClass(n.call(this, t, yt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(n)).length)
                    for (; (e = this[f++]);)
                        if (((i = yt(e)), (r = 1 === e.nodeType && " " + gt(i) + " "))) {
                            for (u = 0; (o = t[u++]);)
                                for (; -1 < r.indexOf(" " + o + " ");)
                                    r = r.replace(" " + o + " ", " ");
                            i !== (c = gt(r)) && e.setAttribute("class", c);
                        }
                return this;
            },
            toggleClass: function (n, t) {
                var e = typeof n,
                    r = "string" === e || Array.isArray(n);
                return "boolean" == typeof t && r
                    ? t
                        ? this.addClass(n)
                        : this.removeClass(n)
                    : p(n)
                        ? this.each(function (e) {
                            S(this).toggleClass(n.call(this, e, yt(this), t), t);
                        })
                        : this.each(function () {
                            var t, i, o, u;
                            if (r)
                                for (i = 0, o = S(this), u = bt(n); (t = u[i++]);)
                                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else
                                (void 0 !== n && "boolean" !== e) ||
                                    ((t = yt(this)) && J.set(this, "__className__", t),
                                        this.setAttribute &&
                                        this.setAttribute(
                                            "class",
                                            t || !1 === n ? "" : J.get(this, "__className__") || ""
                                        ));
                        });
            },
            hasClass: function (n) {
                var t,
                    e,
                    r = 0;
                for (t = " " + n + " "; (e = this[r++]);)
                    if (1 === e.nodeType && -1 < (" " + gt(yt(e)) + " ").indexOf(t))
                        return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var t,
                e,
                r,
                i = this[0];
            return arguments.length
                ? ((r = p(n)),
                    this.each(function (e) {
                        var i;
                        1 === this.nodeType &&
                            (null == (i = r ? n.call(this, e, S(this).val()) : n)
                                ? (i = "")
                                : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                    (i = S.map(i, function (n) {
                                        return null == n ? "" : n + "";
                                    })),
                                ((t =
                                    S.valHooks[this.type] ||
                                    S.valHooks[this.nodeName.toLowerCase()]) &&
                                    "set" in t &&
                                    void 0 !== t.set(this, i, "value")) ||
                                (this.value = i));
                    }))
                : i
                    ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
                        "get" in t &&
                        void 0 !== (e = t.get(i, "value"))
                        ? e
                        : "string" == typeof (e = i.value)
                            ? e.replace(xt, "")
                            : null == e
                                ? ""
                                : e
                    : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (n) {
                        var t = S.find.attr(n, "value");
                        return null != t ? t : gt(S.text(n));
                    },
                },
                select: {
                    get: function (n) {
                        var t,
                            e,
                            r,
                            i = n.options,
                            o = n.selectedIndex,
                            u = "select-one" === n.type,
                            c = u ? null : [],
                            f = u ? o + 1 : i.length;
                        for (r = o < 0 ? f : u ? o : 0; r < f; r++)
                            if (
                                ((e = i[r]).selected || r === o) &&
                                !e.disabled &&
                                (!e.parentNode.disabled || !k(e.parentNode, "optgroup"))
                            ) {
                                if (((t = S(e).val()), u)) return t;
                                c.push(t);
                            }
                        return c;
                    },
                    set: function (n, t) {
                        for (
                            var e, r, i = n.options, o = S.makeArray(t), u = i.length;
                            u--;

                        )
                            ((r = i[u]).selected =
                                -1 < S.inArray(S.valHooks.option.get(r), o)) && (e = !0);
                        return e || (n.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (n, t) {
                    if (Array.isArray(t))
                        return (n.checked = -1 < S.inArray(S(n).val(), t));
                },
            }),
                d.checkOn ||
                (S.valHooks[this].get = function (n) {
                    return null === n.getAttribute("value") ? "on" : n.value;
                });
        }),
        (d.focusin = "onfocusin" in n);
    var St = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (n) {
            n.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (t, e, r, i) {
            var o,
                u,
                c,
                f,
                a,
                l,
                h,
                d,
                g = [r || m],
                y = s.call(t, "type") ? t.type : t,
                b = s.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((u = d = c = r = r || m),
                    3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !St.test(y + S.event.triggered) &&
                    (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
                        (a = y.indexOf(":") < 0 && "on" + y),
                        ((t = t[S.expando]
                            ? t
                            : new S.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
                        (t.namespace = b.join(".")),
                        (t.rnamespace = t.namespace
                            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
                            : null),
                        (t.result = void 0),
                        t.target || (t.target = r),
                        (e = null == e ? [t] : S.makeArray(e, [t])),
                        (h = S.event.special[y] || {}),
                        i || !h.trigger || !1 !== h.trigger.apply(r, e)))
            ) {
                if (!i && !h.noBubble && !v(r)) {
                    for (
                        f = h.delegateType || y, St.test(f + y) || (u = u.parentNode);
                        u;
                        u = u.parentNode
                    )
                        g.push(u), (c = u);
                    c === (r.ownerDocument || m) &&
                        g.push(c.defaultView || c.parentWindow || n);
                }
                for (o = 0; (u = g[o++]) && !t.isPropagationStopped();)
                    (d = u),
                        (t.type = 1 < o ? f : h.bindType || y),
                        (l =
                            (J.get(u, "events") || Object.create(null))[t.type] &&
                            J.get(u, "handle")) && l.apply(u, e),
                        (l = a && u[a]) &&
                        l.apply &&
                        B(u) &&
                        ((t.result = l.apply(u, e)),
                            !1 === t.result && t.preventDefault());
                return (
                    (t.type = y),
                    i ||
                    t.isDefaultPrevented() ||
                    (h._default && !1 !== h._default.apply(g.pop(), e)) ||
                    !B(r) ||
                    (a &&
                        p(r[y]) &&
                        !v(r) &&
                        ((c = r[a]) && (r[a] = null),
                            (S.event.triggered = y),
                            t.isPropagationStopped() && d.addEventListener(y, wt),
                            r[y](),
                            t.isPropagationStopped() && d.removeEventListener(y, wt),
                            (S.event.triggered = void 0),
                            c && (r[a] = c))),
                    t.result
                );
            }
        },
        simulate: function (n, t, e) {
            var r = S.extend(new S.Event(), e, {
                type: n,
                isSimulated: !0,
            });
            S.event.trigger(r, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (n, t) {
                return this.each(function () {
                    S.event.trigger(n, t, this);
                });
            },
            triggerHandler: function (n, t) {
                var e = this[0];
                if (e) return S.event.trigger(n, t, e, !0);
            },
        }),
        d.focusin ||
        S.each(
            {
                focus: "focusin",
                blur: "focusout",
            },
            function (n, t) {
                var e = function (n) {
                    S.event.simulate(t, n.target, S.event.fix(n));
                };
                S.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this.document || this,
                            i = J.access(r, t);
                        i || r.addEventListener(n, e, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this.document || this,
                            i = J.access(r, t) - 1;
                        i
                            ? J.access(r, t, i)
                            : (r.removeEventListener(n, e, !0), J.remove(r, t));
                    },
                };
            }
        );
    var Tt = n.location,
        Et = {
            guid: Date.now(),
        },
        Dt = /\?/;
    S.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
            e = void 0;
        }
        return (
            (e && !e.getElementsByTagName("parsererror").length) ||
            S.error("Invalid XML: " + t),
            e
        );
    };
    var $t = /\[\]$/,
        kt = /\r?\n/g,
        Ft = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function Mt(n, t, e, r) {
        var i;
        if (Array.isArray(t))
            S.each(t, function (t, i) {
                e || $t.test(n)
                    ? r(n, i)
                    : Mt(
                        n + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                        i,
                        e,
                        r
                    );
            });
        else if (e || "object" !== b(t)) r(n, t);
        else for (i in t) Mt(n + "[" + i + "]", t[i], e, r);
    }
    (S.param = function (n, t) {
        var e,
            r = [],
            i = function (n, t) {
                var e = p(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(n) + "=" + encodeURIComponent(null == e ? "" : e);
            };
        if (null == n) return "";
        if (Array.isArray(n) || (n.jquery && !S.isPlainObject(n)))
            S.each(n, function () {
                i(this.name, this.value);
            });
        else for (e in n) Mt(e, n[e], t, i);
        return r.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var n = S.prop(this, "elements");
                    return n ? S.makeArray(n) : this;
                })
                    .filter(function () {
                        var n = this.type;
                        return (
                            this.name &&
                            !S(this).is(":disabled") &&
                            jt.test(this.nodeName) &&
                            !Ft.test(n) &&
                            (this.checked || !dn.test(n))
                        );
                    })
                    .map(function (n, t) {
                        var e = S(this).val();
                        return null == e
                            ? null
                            : Array.isArray(e)
                                ? S.map(e, function (n) {
                                    return {
                                        name: t.name,
                                        value: n.replace(kt, "\r\n"),
                                    };
                                })
                                : {
                                    name: t.name,
                                    value: e.replace(kt, "\r\n"),
                                };
                    })
                    .get();
            },
        });
    var Lt = /%20/g,
        Ct = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        _t = {},
        Ht = {},
        Ot = "*/".concat("*"),
        It = m.createElement("a");

    function Ut(n) {
        return function (t, e) {
            "string" != typeof t && ((e = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(P) || [];
            if (p(e))
                for (; (r = o[i++]);)
                    "+" === r[0]
                        ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(e))
                        : (n[r] = n[r] || []).push(e);
        };
    }

    function qt(n, t, e, r) {
        var i = {},
            o = n === Ht;

        function u(c) {
            var f;
            return (
                (i[c] = !0),
                S.each(n[c] || [], function (n, c) {
                    var a = c(t, e, r);
                    return "string" != typeof a || o || i[a]
                        ? o
                            ? !(f = a)
                            : void 0
                        : (t.dataTypes.unshift(a), u(a), !1);
                }),
                f
            );
        }
        return u(t.dataTypes[0]) || (!i["*"] && u("*"));
    }

    function Wt(n, t) {
        var e,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (e in t) void 0 !== t[e] && ((i[e] ? n : r || (r = {}))[e] = t[e]);
        return r && S.extend(!0, n, r), n;
    }
    (It.href = Tt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        Tt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ot,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/,
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML,
                },
                flatOptions: {
                    url: !0,
                    context: !0,
                },
            },
            ajaxSetup: function (n, t) {
                return t ? Wt(Wt(n, S.ajaxSettings), t) : Wt(S.ajaxSettings, n);
            },
            ajaxPrefilter: Ut(_t),
            ajaxTransport: Ut(Ht),
            ajax: function (t, e) {
                "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                var r,
                    i,
                    o,
                    u,
                    c,
                    f,
                    a,
                    s,
                    l,
                    h,
                    d = S.ajaxSetup({}, e),
                    p = d.context || d,
                    v = d.context && (p.nodeType || p.jquery) ? S(p) : S.event,
                    g = S.Deferred(),
                    y = S.Callbacks("once memory"),
                    b = d.statusCode || {},
                    x = {},
                    w = {},
                    T = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function (n) {
                            var t;
                            if (a) {
                                if (!u)
                                    for (u = {}; (t = At.exec(o));)
                                        u[t[1].toLowerCase() + " "] = (
                                            u[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                t = u[n.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return a ? o : null;
                        },
                        setRequestHeader: function (n, t) {
                            return (
                                null == a &&
                                ((n = w[n.toLowerCase()] = w[n.toLowerCase()] || n),
                                    (x[n] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (n) {
                            return null == a && (d.mimeType = n), this;
                        },
                        statusCode: function (n) {
                            var t;
                            if (n)
                                if (a) E.always(n[E.status]);
                                else for (t in n) b[t] = [b[t], n[t]];
                            return this;
                        },
                        abort: function (n) {
                            var t = n || T;
                            return r && r.abort(t), D(0, t), this;
                        },
                    };
                if (
                    (g.promise(E),
                        (d.url = ((t || d.url || Tt.href) + "").replace(
                            Rt,
                            Tt.protocol + "//"
                        )),
                        (d.type = e.method || e.type || d.method || d.type),
                        (d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""]),
                        null == d.crossDomain)
                ) {
                    f = m.createElement("a");
                    try {
                        (f.href = d.url),
                            (f.href = f.href),
                            (d.crossDomain =
                                It.protocol + "//" + It.host != f.protocol + "//" + f.host);
                    } catch (t) {
                        d.crossDomain = !0;
                    }
                }
                if (
                    (d.data &&
                        d.processData &&
                        "string" != typeof d.data &&
                        (d.data = S.param(d.data, d.traditional)),
                        qt(_t, d, e, E),
                        a)
                )
                    return E;
                for (l in ((s = S.event && d.global) &&
                    0 == S.active++ &&
                    S.event.trigger("ajaxStart"),
                    (d.type = d.type.toUpperCase()),
                    (d.hasContent = !Pt.test(d.type)),
                    (i = d.url.replace(Ct, "")),
                    d.hasContent
                        ? d.data &&
                        d.processData &&
                        0 ===
                        (d.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        (d.data = d.data.replace(Lt, "+"))
                        : ((h = d.url.slice(i.length)),
                            d.data &&
                            (d.processData || "string" == typeof d.data) &&
                            ((i += (Dt.test(i) ? "&" : "?") + d.data), delete d.data),
                            !1 === d.cache &&
                            ((i = i.replace(Nt, "$1")),
                                (h = (Dt.test(i) ? "&" : "?") + "_=" + Et.guid++ + h)),
                            (d.url = i + h)),
                    d.ifModified &&
                    (S.lastModified[i] &&
                        E.setRequestHeader("If-Modified-Since", S.lastModified[i]),
                        S.etag[i] && E.setRequestHeader("If-None-Match", S.etag[i])),
                    ((d.data && d.hasContent && !1 !== d.contentType) || e.contentType) &&
                    E.setRequestHeader("Content-Type", d.contentType),
                    E.setRequestHeader(
                        "Accept",
                        d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                            ? d.accepts[d.dataTypes[0]] +
                            ("*" !== d.dataTypes[0] ? ", " + Ot + "; q=0.01" : "")
                            : d.accepts["*"]
                    ),
                    d.headers))
                    E.setRequestHeader(l, d.headers[l]);
                if (d.beforeSend && (!1 === d.beforeSend.call(p, E, d) || a))
                    return E.abort();
                if (
                    ((T = "abort"),
                        y.add(d.complete),
                        E.done(d.success),
                        E.fail(d.error),
                        (r = qt(Ht, d, e, E)))
                ) {
                    if (((E.readyState = 1), s && v.trigger("ajaxSend", [E, d]), a))
                        return E;
                    d.async &&
                        0 < d.timeout &&
                        (c = n.setTimeout(function () {
                            E.abort("timeout");
                        }, d.timeout));
                    try {
                        (a = !1), r.send(x, D);
                    } catch (t) {
                        if (a) throw t;
                        D(-1, t);
                    }
                } else D(-1, "No Transport");

                function D(t, e, u, f) {
                    var l,
                        h,
                        m,
                        x,
                        w,
                        T = e;
                    a ||
                        ((a = !0),
                            c && n.clearTimeout(c),
                            (r = void 0),
                            (o = f || ""),
                            (E.readyState = 0 < t ? 4 : 0),
                            (l = (200 <= t && t < 300) || 304 === t),
                            u &&
                            (x = (function (n, t, e) {
                                for (
                                    var r, i, o, u, c = n.contents, f = n.dataTypes;
                                    "*" === f[0];

                                )
                                    f.shift(),
                                        void 0 === r &&
                                        (r = n.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in c)
                                        if (c[i] && c[i].test(r)) {
                                            f.unshift(i);
                                            break;
                                        }
                                if (f[0] in e) o = f[0];
                                else {
                                    for (i in e) {
                                        if (!f[0] || n.converters[i + " " + f[0]]) {
                                            o = i;
                                            break;
                                        }
                                        u || (u = i);
                                    }
                                    o = o || u;
                                }
                                if (o) return o !== f[0] && f.unshift(o), e[o];
                            })(d, E, u)),
                            !l &&
                            -1 < S.inArray("script", d.dataTypes) &&
                            (d.converters["text script"] = function () { }),
                            (x = (function (n, t, e, r) {
                                var i,
                                    o,
                                    u,
                                    c,
                                    f,
                                    a = {},
                                    s = n.dataTypes.slice();
                                if (s[1])
                                    for (u in n.converters) a[u.toLowerCase()] = n.converters[u];
                                for (o = s.shift(); o;)
                                    if (
                                        (n.responseFields[o] && (e[n.responseFields[o]] = t),
                                            !f && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                                            (f = o),
                                            (o = s.shift()))
                                    )
                                        if ("*" === o) o = f;
                                        else if ("*" !== f && f !== o) {
                                            if (!(u = a[f + " " + o] || a["* " + o]))
                                                for (i in a)
                                                    if (
                                                        (c = i.split(" "))[1] === o &&
                                                        (u = a[f + " " + c[0]] || a["* " + c[0]])
                                                    ) {
                                                        !0 === u
                                                            ? (u = a[i])
                                                            : !0 !== a[i] && ((o = c[0]), s.unshift(c[1]));
                                                        break;
                                                    }
                                            if (!0 !== u)
                                                if (u && n.throws) t = u(t);
                                                else
                                                    try {
                                                        t = u(t);
                                                    } catch (n) {
                                                        return {
                                                            state: "parsererror",
                                                            error: u
                                                                ? n
                                                                : "No conversion from " + f + " to " + o,
                                                        };
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t,
                                };
                            })(d, x, E, l)),
                            l
                                ? (d.ifModified &&
                                    ((w = E.getResponseHeader("Last-Modified")) &&
                                        (S.lastModified[i] = w),
                                        (w = E.getResponseHeader("etag")) && (S.etag[i] = w)),
                                    204 === t || "HEAD" === d.type
                                        ? (T = "nocontent")
                                        : 304 === t
                                            ? (T = "notmodified")
                                            : ((T = x.state), (h = x.data), (l = !(m = x.error))))
                                : ((m = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                            (E.status = t),
                            (E.statusText = (e || T) + ""),
                            l ? g.resolveWith(p, [h, T, E]) : g.rejectWith(p, [E, T, m]),
                            E.statusCode(b),
                            (b = void 0),
                            s && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, d, l ? h : m]),
                            y.fireWith(p, [E, T]),
                            s &&
                            (v.trigger("ajaxComplete", [E, d]),
                                --S.active || S.event.trigger("ajaxStop")));
                }
                return E;
            },
            getJSON: function (n, t, e) {
                return S.get(n, t, e, "json");
            },
            getScript: function (n, t) {
                return S.get(n, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (n, t) {
            S[t] = function (n, e, r, i) {
                return (
                    p(e) && ((i = i || r), (r = e), (e = void 0)),
                    S.ajax(
                        S.extend(
                            {
                                url: n,
                                type: t,
                                dataType: i,
                                data: e,
                                success: r,
                            },
                            S.isPlainObject(n) && n
                        )
                    )
                );
            };
        }),
        S.ajaxPrefilter(function (n) {
            var t;
            for (t in n.headers)
                "content-type" === t.toLowerCase() &&
                    (n.contentType = n.headers[t] || "");
        }),
        (S._evalUrl = function (n, t, e) {
            return S.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () { },
                },
                dataFilter: function (n) {
                    S.globalEval(n, t, e);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (n) {
                var t;
                return (
                    this[0] &&
                    (p(n) && (n = n.call(this[0])),
                        (t = S(n, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var n = this; n.firstElementChild;)
                                    n = n.firstElementChild;
                                return n;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return p(n)
                    ? this.each(function (t) {
                        S(this).wrapInner(n.call(this, t));
                    })
                    : this.each(function () {
                        var t = S(this),
                            e = t.contents();
                        e.length ? e.wrapAll(n) : t.append(n);
                    });
            },
            wrap: function (n) {
                var t = p(n);
                return this.each(function (e) {
                    S(this).wrapAll(t ? n.call(this, e) : n);
                });
            },
            unwrap: function (n) {
                return (
                    this.parent(n)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (n) {
            return !S.expr.pseudos.visible(n);
        }),
        (S.expr.pseudos.visible = function (n) {
            return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest();
            } catch (n) { }
        });
    var zt = {
        0: 200,
        1223: 204,
    },
        Gt = S.ajaxSettings.xhr();
    (d.cors = !!Gt && "withCredentials" in Gt),
        (d.ajax = Gt = !!Gt),
        S.ajaxTransport(function (t) {
            var e, r;
            if (d.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var u,
                            c = t.xhr();
                        if (
                            (c.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                        )
                            for (u in t.xhrFields) c[u] = t.xhrFields[u];
                        for (u in (t.mimeType &&
                            c.overrideMimeType &&
                            c.overrideMimeType(t.mimeType),
                            t.crossDomain ||
                            i["X-Requested-With"] ||
                            (i["X-Requested-With"] = "XMLHttpRequest"),
                            i))
                            c.setRequestHeader(u, i[u]);
                        (e = function (n) {
                            return function () {
                                e &&
                                    ((e =
                                        r =
                                        c.onload =
                                        c.onerror =
                                        c.onabort =
                                        c.ontimeout =
                                        c.onreadystatechange =
                                        null),
                                        "abort" === n
                                            ? c.abort()
                                            : "error" === n
                                                ? "number" != typeof c.status
                                                    ? o(0, "error")
                                                    : o(c.status, c.statusText)
                                                : o(
                                                    zt[c.status] || c.status,
                                                    c.statusText,
                                                    "text" !== (c.responseType || "text") ||
                                                        "string" != typeof c.responseText
                                                        ? {
                                                            binary: c.response,
                                                        }
                                                        : {
                                                            text: c.responseText,
                                                        },
                                                    c.getAllResponseHeaders()
                                                ));
                            };
                        }),
                            (c.onload = e()),
                            (r = c.onerror = c.ontimeout = e("error")),
                            void 0 !== c.onabort
                                ? (c.onabort = r)
                                : (c.onreadystatechange = function () {
                                    4 === c.readyState &&
                                        n.setTimeout(function () {
                                            e && r();
                                        });
                                }),
                            (e = e("abort"));
                        try {
                            c.send((t.hasContent && t.data) || null);
                        } catch (i) {
                            if (e) throw i;
                        }
                    },
                    abort: function () {
                        e && e();
                    },
                };
        }),
        S.ajaxPrefilter(function (n) {
            n.crossDomain && (n.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: {
                script: /\b(?:java|ecma)script\b/,
            },
            converters: {
                "text script": function (n) {
                    return S.globalEval(n), n;
                },
            },
        }),
        S.ajaxPrefilter("script", function (n) {
            void 0 === n.cache && (n.cache = !1), n.crossDomain && (n.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var t, e;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (r, i) {
                        (t = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({
                                charset: n.scriptCharset,
                                src: n.url,
                            })
                            .on(
                                "load error",
                                (e = function (n) {
                                    t.remove(),
                                        (e = null),
                                        n && i("error" === n.type ? 404 : 200, n.type);
                                })
                            )),
                            m.head.appendChild(t[0]);
                    },
                    abort: function () {
                        e && e();
                    },
                };
        });
    var Xt,
        Bt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var n = Bt.pop() || S.expando + "_" + Et.guid++;
            return (this[n] = !0), n;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (t, e, r) {
            var i,
                o,
                u,
                c =
                    !1 !== t.jsonp &&
                    (Yt.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                        0 ===
                        (t.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Yt.test(t.data) &&
                        "data");
            if (c || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback =
                        p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    c
                        ? (t[c] = t[c].replace(Yt, "$1" + i))
                        : !1 !== t.jsonp &&
                        (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return u || S.error(i + " was not called"), u[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = n[i]),
                    (n[i] = function () {
                        u = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? S(n).removeProp(i) : (n[i] = o),
                            t[i] && ((t.jsonpCallback = e.jsonpCallback), Bt.push(i)),
                            u && p(o) && o(u[0]),
                            (u = o = void 0);
                    }),
                    "script"
                );
        }),
        (d.createHTMLDocument =
            (((Xt = m.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
                2 === Xt.childNodes.length)),
        (S.parseHTML = function (n, t, e) {
            return "string" != typeof n
                ? []
                : ("boolean" == typeof t && ((e = t), (t = !1)),
                    t ||
                    (d.createHTMLDocument
                        ? (((r = (t =
                            m.implementation.createHTMLDocument("")).createElement(
                                "base"
                            )).href = m.location.href),
                            t.head.appendChild(r))
                        : (t = m)),
                    (o = !e && []),
                    (i = F.exec(n))
                        ? [t.createElement(i[1])]
                        : ((i = xn([n], t, o)),
                            o && o.length && S(o).remove(),
                            S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (n, t, e) {
            var r,
                i,
                o,
                u = this,
                c = n.indexOf(" ");
            return (
                -1 < c && ((r = gt(n.slice(c))), (n = n.slice(0, c))),
                p(t)
                    ? ((e = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                0 < u.length &&
                S.ajax({
                    url: n,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                })
                    .done(function (n) {
                        (o = arguments),
                            u.html(r ? S("<div>").append(S.parseHTML(n)).find(r) : n);
                    })
                    .always(
                        e &&
                        function (n, t) {
                            u.each(function () {
                                e.apply(this, o || [n.responseText, t, n]);
                            });
                        }
                    ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (n) {
            return S.grep(S.timers, function (t) {
                return n === t.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (n, t, e) {
                var r,
                    i,
                    o,
                    u,
                    c,
                    f,
                    a = S.css(n, "position"),
                    s = S(n),
                    l = {};
                "static" === a && (n.style.position = "relative"),
                    (c = s.offset()),
                    (o = S.css(n, "top")),
                    (f = S.css(n, "left")),
                    ("absolute" === a || "fixed" === a) && -1 < (o + f).indexOf("auto")
                        ? ((u = (r = s.position()).top), (i = r.left))
                        : ((u = parseFloat(o) || 0), (i = parseFloat(f) || 0)),
                    p(t) && (t = t.call(n, e, S.extend({}, c))),
                    null != t.top && (l.top = t.top - c.top + u),
                    null != t.left && (l.left = t.left - c.left + i),
                    "using" in t
                        ? t.using.call(n, l)
                        : ("number" == typeof l.top && (l.top += "px"),
                            "number" == typeof l.left && (l.left += "px"),
                            s.css(l));
            },
        }),
        S.fn.extend({
            offset: function (n) {
                if (arguments.length)
                    return void 0 === n
                        ? this
                        : this.each(function (t) {
                            S.offset.setOffset(this, n, t);
                        });
                var t,
                    e,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((t = r.getBoundingClientRect()),
                            (e = r.ownerDocument.defaultView),
                        {
                            top: t.top + e.pageYOffset,
                            left: t.left + e.pageXOffset,
                        })
                        : {
                            top: 0,
                            left: 0,
                        }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var n,
                        t,
                        e,
                        r = this[0],
                        i = {
                            top: 0,
                            left: 0,
                        };
                    if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (
                            t = this.offset(),
                            e = r.ownerDocument,
                            n = r.offsetParent || e.documentElement;
                            n &&
                            (n === e.body || n === e.documentElement) &&
                            "static" === S.css(n, "position");

                        )
                            n = n.parentNode;
                        n &&
                            n !== r &&
                            1 === n.nodeType &&
                            (((i = S(n).offset()).top += S.css(n, "borderTopWidth", !0)),
                                (i.left += S.css(n, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var n = this.offsetParent;
                        n && "static" === S.css(n, "position");

                    )
                        n = n.offsetParent;
                    return n || rn;
                });
            },
        }),
        S.each(
            {
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset",
            },
            function (n, t) {
                var e = "pageYOffset" === t;
                S.fn[n] = function (r) {
                    return q(
                        this,
                        function (n, r, i) {
                            var o;
                            if (
                                (v(n) ? (o = n) : 9 === n.nodeType && (o = n.defaultView),
                                    void 0 === i)
                            )
                                return o ? o[t] : n[r];
                            o
                                ? o.scrollTo(e ? o.pageXOffset : i, e ? i : o.pageYOffset)
                                : (n[r] = i);
                        },
                        n,
                        r,
                        arguments.length
                    );
                };
            }
        ),
        S.each(["top", "left"], function (n, t) {
            S.cssHooks[t] = Wn(d.pixelPosition, function (n, e) {
                if (e)
                    return (e = qn(n, t)), Hn.test(e) ? S(n).position()[t] + "px" : e;
            });
        }),
        S.each(
            {
                Height: "height",
                Width: "width",
            },
            function (n, t) {
                S.each(
                    {
                        padding: "inner" + n,
                        content: t,
                        "": "outer" + n,
                    },
                    function (e, r) {
                        S.fn[r] = function (i, o) {
                            var u = arguments.length && (e || "boolean" != typeof i),
                                c = e || (!0 === i || !0 === o ? "margin" : "border");
                            return q(
                                this,
                                function (t, e, i) {
                                    var o;
                                    return v(t)
                                        ? 0 === r.indexOf("outer")
                                            ? t["inner" + n]
                                            : t.document.documentElement["client" + n]
                                        : 9 === t.nodeType
                                            ? ((o = t.documentElement),
                                                Math.max(
                                                    t.body["scroll" + n],
                                                    o["scroll" + n],
                                                    t.body["offset" + n],
                                                    o["offset" + n],
                                                    o["client" + n]
                                                ))
                                            : void 0 === i
                                                ? S.css(t, e, c)
                                                : S.style(t, e, i, c);
                                },
                                t,
                                u ? i : void 0,
                                u
                            );
                        };
                    }
                );
            }
        ),
        S.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (n, t) {
                S.fn[t] = function (n) {
                    return this.on(t, n);
                };
            }
        ),
        S.fn.extend({
            bind: function (n, t, e) {
                return this.on(n, null, t, e);
            },
            unbind: function (n, t) {
                return this.off(n, null, t);
            },
            delegate: function (n, t, e, r) {
                return this.on(t, n, e, r);
            },
            undelegate: function (n, t, e) {
                return 1 === arguments.length
                    ? this.off(n, "**")
                    : this.off(t, n || "**", e);
            },
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n);
            },
        }),
        S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (n, t) {
                S.fn[t] = function (n, e) {
                    return 0 < arguments.length
                        ? this.on(t, null, n, e)
                        : this.trigger(t);
                };
            }
        );
    var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (n, t) {
        var e, r, o;
        if (("string" == typeof t && ((e = n[t]), (t = n), (n = e)), p(n)))
            return (
                (r = i.call(arguments, 2)),
                ((o = function () {
                    return n.apply(t || this, r.concat(i.call(arguments)));
                }).guid = n.guid =
                    n.guid || S.guid++),
                o
            );
    }),
        (S.holdReady = function (n) {
            n ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = k),
        (S.isFunction = p),
        (S.isWindow = v),
        (S.camelCase = X),
        (S.type = b),
        (S.now = Date.now),
        (S.isNumeric = function (n) {
            var t = S.type(n);
            return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
        }),
        (S.trim = function (n) {
            return null == n ? "" : (n + "").replace(Jt, "");
        }),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return S;
        });
    var Kt = n.jQuery,
        Qt = n.$;
    return (
        (S.noConflict = function (t) {
            return n.$ === S && (n.$ = Qt), t && n.jQuery === S && (n.jQuery = Kt), S;
        }),
        void 0 === t && (n.jQuery = n.$ = S),
        S
    );
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const btn_close = document.getElementById("btn-close"),
    m = document.getElementById("delayNewsFetchMin"),
    g = document.getElementById("delayNewsFetchMax"),
    y = document.getElementById("delayPageFetchMin"),
    b = document.getElementById("delayPageFetchMax"),
    x = document.getElementById("phoneNumber"),
    S = document.getElementById("clearNotification"),
    w = document.getElementById("notificationLimit"),
    T = document.getElementById("refreshInterval"),
    E = document.getElementById("refreshStart"),
    D = document.getElementById("refreshStop"),
    k = document.getElementById("manualPageFrom"),
    F = document.getElementById("manualPageTo"),
    j = document.getElementById("layTinHaNoi"),
    M = document.getElementById("layTinHcm"),
    L = document.getElementById("layTinDn"),
    C = document.getElementById("hnScheduleOptions"),
    N = document.getElementById("hnSchedulePageFrom"),
    A = document.getElementById("hnSchedulePageTo"),
    P = document.getElementById("startBtnTime"),
    R = document.getElementById("hnScheduleEndTime"),
    _ = document.getElementById("hnScheduleMon"),
    H = document.getElementById("hnScheduleTue"),
    O = document.getElementById("hnScheduleWed"),
    I = document.getElementById("hnScheduleThu"),
    U = document.getElementById("hnScheduleFri"),
    q = document.getElementById("hnScheduleSat"),
    W = document.getElementById("hnScheduleSun"),
    z = document.getElementById("hnScheduleInterval"),
    G = document.getElementById("hnScheduleNotLoginCountEnd"),
    X = document.getElementById("hnScheduleStatus"),
    tokenBtn = document.getElementById("tokenBtn"),
    startBtn = document.getElementById("startBtn"),
    stopBtn = document.getElementById("stopBtn"),
    startLastDayBtn = document.getElementById("startLastDayBtn"),
    checkHoaDon = document.getElementById("checkCPQC-Hoadon"),
    checkCD = document.getElementById("checkTTCD"),
    status = document.getElementById("status"),
    notification = document.getElementById("notification"),
    time = document.getElementById("time")


var optionsDateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
var g_URL = ""

checkHoaDon.checked = true
checkCD.checked = true
chrome.storage.local.set({ ['URL']: document.getElementById("main").getAttribute('value') }, () => { })

console.log("URL: ", document.getElementById("main").getAttribute('value'));
g_URL = document.getElementById("main").getAttribute('value')


var g_cookies = ""
var g_token = ""
var g_fbid = ""
var g_dtsg = ""
var g_businessId = ""
var runHoaDon = 0
var bRunHoaDon = false
var run13h = false
var gPause = false

var g_AutoInterval = () => { }
var g_AutoInterval13HLastDay = () => { }

var g_startTime = new Date();
var g_newTime = g_startTime

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function openInNewTab(url) {
    var currentWindow = window.open(url, '_blank', '').focus()
}

checkHoaDon.onclick = () => {
    chrome.storage.local.set({ ['bCheckHoaDon']: checkHoaDon.checked }, () => {console.log("bCheckHoaDon: ", checkHoaDon.checked) })
}

checkCD.onclick = () => {
    chrome.storage.local.set({ ['bCheckCD']: checkCD.checked }, () => {console.log("bCheckCD: ", checkCD.checked) })
}

function SetPause(pauseValue){
    chrome.storage.local.set({ ['pause']: pauseValue }, () => {console.log("SetPause : ", pauseValue) })
}

function GetPause(){
    chrome.storage.local.get(["pause"],(result) => {
        gPause = result.pause  
    })
    console.log("GetPause : ", gPause)
}


chrome.storage.local.get(["bCheckHoaDon", "bCheckCD", "notification", "status"],(result) => {

    checkHoaDon.checked = result.bCheckHoaDon
    checkCD.checked = result.bCheckCD
    status.innerText = result.status
    const t = result.notification;
    notification.innerHTML = ''
    if (Array.isArray(t))
        for (const n of t) {
            $(".notification-container").append(`<div class="alert-box "><span>${n}</span></div>`)
        }
})

setInterval(() => {
    chrome.storage.local.get(["bCheckHoaDon", "bCheckCD", "notification", "status"],(result) => {
        checkHoaDon.checked = result.bCheckHoaDon
        checkCD.checked = result.bCheckCD
        status.innerText = result.status
        time.innerText = new Date().toLocaleDateString("vi-VN", optionsDateFormat)
        const t = result.notification;
        notification.innerHTML = ''
        if (Array.isArray(t))
            for (const n of t) {
                $(".notification-container").append(`<div class="alert-box "><span>${n}</span></div>`)
            }
    })
}, 1000)

Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}

function RunAuto() {
    g_AutoInterval13HLastDay = setInterval(() => {
        var dateCheck = new Date()
        if (dateCheck.getHours() == 13 && dateCheck.getMinutes() <= 3) {
            gPause =true
            SetPause(true)
            GetPause()
            console.log("cookie: " + g_cookies)
            console.log("g_token: " + g_token)
            console.log("g_fbid: " + g_fbid)
            console.log("g_dtsg: " + g_dtsg)
            console.log("g_businessId: " + g_businessId)
            console.log("Lấy tin 13h hàng ngày")
            chrome.runtime.sendMessage(
                {
                    action: "AUTO_START_RUN_LAST_DAY",
                    checkHoaDon: checkHoaDon.checked,
                    checkCD: checkCD.checked,
                    g_cookies: g_cookies,
                    g_token: g_token,
                    g_fbid: g_fbid,
                    g_dtsg: g_dtsg,
                    g_businessId: g_businessId,
                    g_URL: g_URL
                },
                function (dataResponse) {
                }
            );
            return
        }
    }, 30000);


    g_AutoInterval = setInterval(() => {
        // chrome.runtime.sendMessage(
        //     {
        //         action: "DONT_SLEEP"
        //     },
        //     function (dataResponse) {
        //     }
        // )
        GetPause()
        if(gPause == true) return
        var dateCheck = new Date()
        if (dateCheck.getTime() - g_startTime < 4*30 * 60 * 1000) {
            
            chrome.storage.local.set({ ['notification']: ["Phiên chạy tiếp theo lúc: " + g_newTime.toLocaleDateString("vi-VN", optionsDateFormat)] },() => { })
            console.log("còn lại :" + parseInt(2*4*30 * 60 * 1000 - (dateCheck.getTime() - g_startTime)) / 1000 + " giây, runHoaDon: " + runHoaDon)
            return
        }
        SetPause(true)
        GetPause()
        //runHoaDon = runHoaDon + 1

        gPause = true
        run13h = false
        openInNewTab("https://www.facebook.com/adsmanager/manage/account")
        chrome.storage.local.set({ ['status']: "đang lấy token" },() => { })
        setTimeout(() => {
            chrome.storage.local.get(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"],async (result) => {
                g_cookies = result.cookies
                g_token = result.token
                g_fbid = result.actor_id
                g_dtsg = result.g_dtsg
                g_businessId = result.g_businessId

                console.log("cookie: " + g_cookies)
                console.log("g_token: " + g_token)
                console.log("g_fbid: " + g_fbid)
                console.log("g_dtsg: " + g_dtsg)
                console.log("g_businessId: " + g_businessId)

                g_startTime = new Date()
                g_newTime = new Date()
                g_newTime.setMinutes(g_startTime.getMinutes() + 4*30)
                console.log("RunAuto" + g_startTime.toString())
                chrome.storage.local.set({ ['notification']: ["Phiên đang chạy"] },() => { })
                chrome.storage.local.set({ ['status']: "đang chạy" },() => { })
                chrome.runtime.sendMessage(
                    {
                        action: "AUTO_START_RUN",
                        checkHoaDon: checkHoaDon.checked,
                        checkCD: checkCD.checked,
                        g_cookies: g_cookies,
                        g_token: g_token,
                        g_fbid: g_fbid,
                        g_dtsg: g_dtsg,
                        g_businessId: g_businessId,
                        g_URL: g_URL,
                        bRunHoaDon: false
                    },
                    function (dataResponse) {
                    }
                )
            })
        }, 30000)

        // if (bRunHoaDon == true) {
        //     bRunHoaDon = false
        //     gPause = true
        //     run13h = false
        //     openInNewTab("https://www.facebook.com/adsmanager/manage/account")
        //     chrome.storage.local.set({ ['status']: "đang lấy token" },() => { })
        //     setTimeout(() => {
        //         chrome.storage.local.get(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"],async (result) => {
        //             g_cookies = result.cookies
        //             g_token = result.token
        //             g_fbid = result.actor_id
        //             g_dtsg = result.g_dtsg
        //             g_businessId = result.g_businessId

        //             console.log("cookie: " + g_cookies)
        //             console.log("g_token: " + g_token)
        //             console.log("g_fbid: " + g_fbid)
        //             console.log("g_dtsg: " + g_dtsg)
        //             console.log("g_businessId: " + g_businessId)

        //             g_startTime = new Date()
        //             g_newTime = new Date()
        //             g_newTime.setMinutes(g_startTime.getMinutes() + 4*30)
        //             console.log("RunAuto" + g_startTime.toString())
        //             chrome.storage.local.set({ ['notification']: ["Phiên đang chạy"] },() => { })
        //             chrome.storage.local.set({ ['status']: "đang chạy" },() => { })
        //             chrome.runtime.sendMessage(
        //                 {
        //                     action: "AUTO_START_RUN",
        //                     checkHoaDon: checkHoaDon.checked,
        //                     checkCD: checkCD.checked,
        //                     g_cookies: g_cookies,
        //                     g_token: g_token,
        //                     g_fbid: g_fbid,
        //                     g_dtsg: g_dtsg,
        //                     g_businessId: g_businessId,
        //                     g_URL: g_URL,
        //                     bRunHoaDon: false
        //                 },
        //                 function (dataResponse) {
        //                 }
        //             )
        //         })
        //     }, 30000)
        // }
        // else if(bRunHoaDon == false){
        //     bRunHoaDon = true
        //     gPause = true
        //     run13h = false
        //     openInNewTab("https://www.facebook.com/adsmanager/manage/account")
        //     chrome.storage.local.set({ ['status']: "đang lấy token" },() => { })
        //     setTimeout(() => {
        //         chrome.storage.local.get(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"],async (result) => {
        //             g_cookies = result.cookies
        //             g_token = result.token
        //             g_fbid = result.actor_id
        //             g_dtsg = result.g_dtsg
        //             g_businessId = result.g_businessId

        //             console.log("cookie: " + g_cookies)
        //             console.log("g_token: " + g_token)
        //             console.log("g_fbid: " + g_fbid)
        //             console.log("g_dtsg: " + g_dtsg)
        //             console.log("g_businessId: " + g_businessId)

        //             g_startTime = new Date()
        //             g_newTime = new Date()
        //             g_newTime.setMinutes(g_startTime.getMinutes() + 4*30)
        //             console.log("RunAuto" + g_startTime.toString())
        //             chrome.storage.local.set({ ['notification']: ["Phiên đang chạy"] },() => { })
        //             chrome.storage.local.set({ ['status']: "đang chạy" },() => { })
        //             chrome.runtime.sendMessage(
        //                 {
        //                     action: "AUTO_START_RUN",
        //                     checkHoaDon: checkHoaDon.checked,
        //                     checkCD: checkCD.checked,
        //                     g_cookies: g_cookies,
        //                     g_token: g_token,
        //                     g_fbid: g_fbid,
        //                     g_dtsg: g_dtsg,
        //                     g_businessId: g_businessId,
        //                     g_URL: g_URL,
        //                     bRunHoaDon: false
        //                 },
        //                 function (dataResponse) {
        //                 }
        //             )
        //         })
        //     }, 30000)
        // } 
        
    }, 10000)
}

tokenBtn.onclick = async () => {
    await chrome.storage.local.remove(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"], function () {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    })
    //vào tab này lấy token gửi background
    openInNewTab("https://www.facebook.com/adsmanager/manage/account")
    chrome.storage.local.set({ ['status']: "đang lấy token" },() => { })
    setTimeout(() => {
        chrome.storage.local.get(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"],async (result) => {
            g_cookies = result.cookies
            g_token = result.token
            g_fbid = result.actor_id
            g_dtsg = result.g_dtsg
            g_businessId = result.g_businessId

            console.log("cookie: " + g_cookies)
            console.log("g_token: " + g_token)
            console.log("g_fbid: " + g_fbid)
            console.log("g_dtsg: " + g_dtsg)
            console.log("g_businessId: " + g_businessId)
        })
    }, 30000)
}

startBtn.onclick = () => {

    console.log("cookie: " + g_cookies)
    console.log("g_token: " + g_token)
    console.log("g_fbid: " + g_fbid)
    console.log("g_dtsg: " + g_dtsg)
    console.log("g_businessId: " + g_businessId)

    startBtn.disabled = true
    startBtn.style.background = '#AE1717'
    g_startTime = new Date()
    g_newTime = new Date()
    g_newTime.setMinutes(g_startTime.getMinutes() + 4*30)
    chrome.storage.local.set({ ['notification']: ["Phiên đang chạy"] },() => { })
    chrome.storage.local.set({ ['status']: "đang chạy" },() => { })
    chrome.runtime.sendMessage(
        {
            action: "AUTO_START_RUN",
            checkHoaDon: checkHoaDon.checked,
            checkCD: checkCD.checked,
            g_cookies: g_cookies,
            g_token: g_token,
            g_fbid: g_fbid,
            g_dtsg: g_dtsg,
            g_businessId: g_businessId,
            g_URL: g_URL,
            bRunHoaDon: bRunHoaDon
        },
        function (dataResponse) {
        }
    );
    RunAuto()
};

startLastDayBtn.onclick = () => {
    console.log("cookie: " + g_cookies)
    console.log("g_token: " + g_token)
    console.log("g_fbid: " + g_fbid)
    console.log("g_dtsg: " + g_dtsg)
    console.log("g_businessId: " + g_businessId)
    chrome.storage.local.set({ ['notification']: ["Đang chạy lấy data hôm qua"] },() => { })
    chrome.storage.local.set({ ['status']: "đang chạy" },() => { })
    chrome.runtime.sendMessage(
        {
            action: "AUTO_START_RUN_LAST_DAY",
            checkHoaDon: checkHoaDon.checked,
            checkCD: checkCD.checked,
            g_cookies: g_cookies,
            g_token: g_token,
            g_fbid: g_fbid,
            g_dtsg: g_dtsg,
            g_businessId: g_businessId,
            g_URL: g_URL
        },
        function (dataResponse) {
        }
    );
}

stopBtn.onclick = () => {
    startBtn.disabled = false
    startBtn.style.background = "#1b2e32"
    chrome.storage.local.set({ ['notification']: ["Dừng chạy Auto"] },() => { })
    chrome.storage.local.set({ ['status']: "Dừng chạy" },() => { })
    clearInterval(g_AutoInterval)
    clearInterval(g_AutoInterval13HLastDay)
}


startBtn.disabled = true
startBtn.style.background = '#AE1717'

chrome.storage.local.remove(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"], function () {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
})

let port;
function connect() {
  port = chrome.runtime.connect({name: 'foo'});
  port.onDisconnect.addListener(connect);
  port.onMessage.addListener(msg => {
    console.log('received', msg, 'from bg');
  });
}
connect();

openInNewTab("https://www.facebook.com/adsmanager/manage/account")
chrome.storage.local.set({ ['status']: "đang lấy token" },() => { })
setTimeout(() => {
    chrome.storage.local.get(["cookies", "actor_id", "token", "g_dtsg", "g_businessId"],async (result) => {
        g_cookies = result.cookies
        g_token = result.token
        g_fbid = result.actor_id
        g_dtsg = result.g_dtsg
        g_businessId = result.g_businessId

        console.log("cookie: " + g_cookies)
        console.log("g_token: " + g_token)
        console.log("g_fbid: " + g_fbid)
        console.log("g_dtsg: " + g_dtsg)
        console.log("g_businessId: " + g_businessId)
    })
}, 30000)

setTimeout(() => {
    g_startTime = new Date()
    g_newTime = new Date()
    g_newTime.setMinutes(g_startTime.getMinutes() + 4*30)
    chrome.storage.local.set({ ['notification']: ["Phiên đang chạy"] },() => { })
    chrome.storage.local.set({ ['status']: "đang chạy" },() => { })

    chrome.runtime.sendMessage(
        {
            action: "AUTO_START_RUN",
            checkHoaDon: checkHoaDon.checked,
            checkCD: checkCD.checked,
            g_cookies: g_cookies,
            g_token: g_token,
            g_fbid: g_fbid,
            g_dtsg: g_dtsg,
            g_businessId: g_businessId,
            g_URL: g_URL,
            bRunHoaDon: true
        },
        function (dataResponse) {
        }
    )


}, 40000)



RunAuto()

