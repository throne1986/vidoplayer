// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = function(a) {
            if (!(a instanceof Array)) {
                a = ba(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    Pd: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Pd;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = ea,
        p = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Va = b.prototype
        },
        la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = function(a) {
            a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global &&
                global, a
            ];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            return globalThis
        },
        na = ma(this),
        oa = function(a, b) {
            if (b) {
                var c = na;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && la(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    oa("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var pa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    oa("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = pa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var qa = function() {
            qa = function() {};
            na.Symbol || (na.Symbol = ra)
        },
        sa = function(a, b) {
            this.g = a;
            la(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    sa.prototype.toString = function() {
        return this.g
    };
    var ra = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new sa("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        ua = function() {
            qa();
            var a = na.Symbol.iterator;
            a || (a = na.Symbol.iterator = na.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && la(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ta(aa(this))
                }
            });
            ua = function() {}
        },
        ta = function(a) {
            ua();
            a = {
                next: a
            };
            a[na.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        va = function(a, b) {
            ua();
            a instanceof String && (a += "");
            var c = 0,
                d = {
                    next: function() {
                        if (c < a.length) {
                            var e = c++;
                            return {
                                value: b(e, a[e]),
                                done: !1
                            }
                        }
                        d.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        };
                        return d.next()
                    }
                };
            d[Symbol.iterator] = function() {
                return d
            };
            return d
        };
    oa("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    });
    oa("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    });
    var wa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        xa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) wa(d, e) && (a[e] = d[e])
            }
            return a
        };
    oa("Object.assign", function(a) {
        return a || xa
    });
    oa("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    oa("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    oa("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    oa("WeakMap", function(a) {
        function b() {}
        function c(l) {
            var n = typeof l;
            return "object" === n && null !== l || "function" === n
        }
        function d(l) {
            if (!wa(l, f)) {
                var n = new b;
                la(l, f, {
                    value: n
                })
            }
        }
        function e(l) {
            var n = Object[l];
            n && (Object[l] = function(m) {
                if (m instanceof b) return m;
                d(m);
                return n(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        n = Object.seal({}),
                        m = new a([
                            [l, 2],
                            [n, 3]
                        ]);
                    if (2 != m.get(l) || 3 != m.get(n)) return !1;
                    m.delete(l);
                    m.set(n, 4);
                    return !m.has(l) && 4 == m.get(n)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(l) {
                this.g = (g += Math.random() + 1).toString();
                if (l) {
                    l = ba(l);
                    for (var n; !(n = l.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        h.prototype.set = function(l, n) {
            if (!c(l)) throw Error("Invalid WeakMap key");
            d(l);
            if (!wa(l, f)) throw Error("WeakMap key fail: " + l);
            l[f][this.g] = n;
            return this
        };
        h.prototype.get = function(l) {
            return c(l) && wa(l, f) ? l[f][this.g] : void 0
        };
        h.prototype.has = function(l) {
            return c(l) && wa(l, f) && wa(l[f],
                this.g)
        };
        h.prototype.delete = function(l) {
            return c(l) && wa(l, f) && wa(l[f], this.g) ? delete l[f][this.g] : !1
        };
        return h
    });
    oa("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(ba([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var n = l.entries(),
                        m = n.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = n.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        ua();
        var b = new WeakMap,
            c = function(h) {
                this.h = {};
                this.g =
                    f();
                this.size = 0;
                if (h) {
                    h = ba(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this.h[n.id] = []);
            n.la ? n.la.value = l : (n.la = {
                next: this.g,
                Ga: this.g.Ga,
                head: this.g,
                key: h,
                value: l
            }, n.list.push(n.la), this.g.Ga.next = n.la, this.g.Ga = n.la, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.la && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.la.Ga.next = h.la.next, h.la.next.Ga = h.la.Ga,
                h.la.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Ga = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).la
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).la) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, l) {
            for (var n = this.entries(),
                    m; !(m = n.next()).done;) m = m.value, h.call(l, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, l) {
                var n = l && typeof l;
                "object" == n || "function" == n ? b.has(l) ? n = b.get(l) : (n = "" + ++g, b.set(l, n)) : n = "p_" + l;
                var m = h.h[n];
                if (m && wa(h.h, n))
                    for (h = 0; h < m.length; h++) {
                        var t = m[h];
                        if (l !== l && t.key !== t.key || l === t.key) return {
                            id: n,
                            list: m,
                            index: h,
                            la: t
                        }
                    }
                return {
                    id: n,
                    list: m,
                    index: -1,
                    la: void 0
                }
            },
            e = function(h, l) {
                var n = h.g;
                return ta(function() {
                    if (n) {
                        for (; n.head != h.g;) n = n.Ga;
                        for (; n.next != n.head;) return n =
                            n.next, {
                                done: !1,
                                value: l(n)
                            };
                        n = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ga = h.next = h.head = h
            },
            g = 0;
        return c
    });
    oa("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.w()
                })
            }
            this.g.push(g)
        };
        var d = na.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.w = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (n) {
                        this.o(n)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.h = 0;
            this.l = void 0;
            this.g = [];
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.o = function() {
            function g(n) {
                return function(m) {
                    l || (l = !0, n.call(h, m))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.D),
                reject: g(this.w)
            }
        };
        e.prototype.D = function(g) {
            if (g === this) this.w(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.H(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.C(g) : this.A(g)
            }
        };
        e.prototype.C = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.w(l);
                return
            }
            "function" == typeof h ? this.I(h, g) : this.A(g)
        };
        e.prototype.w = function(g) {
            this.F(2, g)
        };
        e.prototype.A = function(g) {
            this.F(1, g)
        };
        e.prototype.F = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.l = h;
            this.J()
        };
        e.prototype.J = function() {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.H = function(g) {
            var h =
                this.o();
            g.vb(h.resolve, h.reject)
        };
        e.prototype.I = function(g, h) {
            var l = this.o();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (n) {
                l.reject(n)
            }
        };
        e.prototype.then = function(g, h) {
            function l(B, r) {
                return "function" == typeof B ? function(A) {
                    try {
                        n(B(A))
                    } catch (z) {
                        m(z)
                    }
                } : r
            }
            var n, m, t = new e(function(B, r) {
                n = B;
                m = r
            });
            this.vb(l(g, n), l(h, m));
            return t
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.vb = function(g, h) {
            function l() {
                switch (n.h) {
                    case 1:
                        g(n.l);
                        break;
                    case 2:
                        h(n.l);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            n.h);
                }
            }
            var n = this;
            null == this.g ? f.h(l) : this.g.push(l)
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var n = ba(g), m = n.next(); !m.done; m = n.next()) c(m.value).vb(h, l)
            })
        };
        e.all = function(g) {
            var h = ba(g),
                l = h.next();
            return l.done ? c([]) : new e(function(n, m) {
                function t(A) {
                    return function(z) {
                        B[A] = z;
                        r--;
                        0 == r && n(B)
                    }
                }
                var B = [],
                    r = 0;
                do B.push(void 0), r++, c(l.value).vb(t(B.length - 1), m), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    oa("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    oa("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    oa("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    oa("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    var za = za || {},
        q = this || self,
        u = function(a, b, c) {
            a = a.split(".");
            c = c || q;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Ca = function() {
            if (null === Aa) a: {
                var a = q.document;
                if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ba.test(a)) {
                    Aa = a;
                    break a
                }
                Aa = ""
            }
            return Aa
        },
        Ba = /^[\w+/_-]+[=]{0,2}$/,
        Aa = null,
        Da = function(a, b) {
            a = a.split(".");
            b = b || q;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Ea = function() {},
        Fa = function(a) {
            a.ec = void 0;
            a.B = function() {
                return a.ec ? a.ec : a.ec = new a
            }
        },
        Ga = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        Ha = function(a) {
            return "array" == Ga(a)
        },
        Ia = function(a) {
            var b = Ga(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        v = function(a) {
            return "function" == Ga(a)
        },
        Ja = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ka = "closure_uid_" + (1E9 * Math.random() >>>
            0),
        La = 0,
        Ma = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Na = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        Pa = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Pa = Ma : Pa = Na;
            return Pa.apply(null, arguments)
        },
        Qa = function(a,
            b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        w = Date.now || function() {
            return +new Date
        },
        Ra = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Va = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var Sa;
    var Ta = function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        x = function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ua = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        },
        Va = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h =
                        f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Wa = function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Xa = function(a, b, c) {
            var d = c;
            x(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        Ya = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        $a = function(a, b) {
            b = Za(a, b, void 0);
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        },
        Za =
        function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        ab = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) return d;
            return -1
        },
        bb = function(a, b) {
            return 0 <= Ta(a, b)
        },
        cb = function(a, b) {
            b = Ta(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        db = function(a, b) {
            var c = 0;
            Ua(a, function(d, e) {
                b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length &&
                    c++
            })
        },
        eb = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        fb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        gb = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++];
                var f = e;
                f = Ja(f) ? "o" + (Object.prototype.hasOwnProperty.call(f, Ka) && f[Ka] || (f[Ka] = ++La)) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
            }
            a.length = c
        },
        jb = function(a, b) {
            a.sort(b || ib)
        },
        ib = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        kb = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = "";
            return b
        };
    var lb = function(a) {
        return Wa(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var nb = function(a) {
            return function() {
                return a
            }
        },
        ob = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        pb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        qb = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = q.setTimeout(e, 1E3);
                    a.apply(void 0, d)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var rb = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        sb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        tb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Bb = function(a, b) {
            if (b) a = a.replace(ub, "&amp;").replace(vb, "&lt;").replace(wb, "&gt;").replace(xb, "&quot;").replace(yb, "&#39;").replace(zb, "&#0;");
            else {
                if (!Ab.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ub, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(vb, "&lt;")); -
                1 != a.indexOf(">") && (a = a.replace(wb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(xb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(yb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(zb, "&#0;"))
            }
            return a
        },
        ub = /&/g,
        vb = /</g,
        wb = />/g,
        xb = /"/g,
        yb = /'/g,
        zb = /\x00/g,
        Ab = /[\x00&<>"']/,
        y = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        Db = function(a, b) {
            var c = 0;
            a = tb(String(a)).split(".");
            b = tb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Cb(0 == f[2].length, 0 == g[2].length) || Cb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Cb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Eb;
    a: {
        var Fb = q.navigator;
        if (Fb) {
            var Gb = Fb.userAgent;
            if (Gb) {
                Eb = Gb;
                break a
            }
        }
        Eb = ""
    }
    var C = function(a) {
        return -1 != Eb.indexOf(a)
    };
    var Hb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Ib = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        Kb = function(a) {
            var b = Jb,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return !0;
            return !1
        },
        Mb = function(a) {
            var b = Lb,
                c;
            for (c in b)
                if (!a.call(void 0, b[c], c, b)) return !1;
            return !0
        },
        Nb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Ob = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Pb = function(a, b) {
            var c = Ia(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null ==
                    a) return;
                a = a[d[c]]
            }
            return a
        },
        Qb = function(a, b) {
            return null !== a && b in a
        },
        Rb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Tb = function(a) {
            var b = Sb,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return c
        },
        Ub = function(a) {
            for (var b in a) return !1;
            return !0
        },
        Vb = function(a) {
            for (var b in a) delete a[b]
        },
        Wb = function(a, b, c) {
            return null !== a && b in a ? a[b] : c
        },
        Xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Yb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d =
                    arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Xb.length; f++) c = Xb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var ac = function() {
            return C("Trident") || C("MSIE")
        },
        bc = function() {
            return C("Firefox") || C("FxiOS")
        },
        dc = function() {
            return C("Safari") && !(cc() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || bc() || C("Silk") || C("Android"))
        },
        cc = function() {
            return (C("Chrome") || C("CriOS")) && !C("Edge")
        };
    var gc = function(a, b) {
        this.g = a === ec && b || "";
        this.h = fc
    };
    gc.prototype.La = !0;
    gc.prototype.Da = function() {
        return this.g
    };
    var hc = function(a) {
            return a instanceof gc && a.constructor === gc && a.h === fc ? a.g : "type_error:Const"
        },
        ic = function(a) {
            return new gc(ec, a)
        },
        fc = {},
        ec = {};
    var lc = function(a, b) {
        this.g = a === jc && b || "";
        this.h = kc
    };
    lc.prototype.La = !0;
    lc.prototype.Da = function() {
        return this.g.toString()
    };
    lc.prototype.cc = !0;
    lc.prototype.Zb = function() {
        return 1
    };
    var mc = function(a) {
            if (a instanceof lc && a.constructor === lc && a.h === kc) return a.g;
            Ga(a);
            return "type_error:TrustedResourceUrl"
        },
        kc = {},
        nc = function(a) {
            return new lc(jc, a)
        },
        jc = {};
    var qc = function(a, b) {
        this.g = a === oc && b || "";
        this.h = pc
    };
    qc.prototype.La = !0;
    qc.prototype.Da = function() {
        return this.g.toString()
    };
    qc.prototype.cc = !0;
    qc.prototype.Zb = function() {
        return 1
    };
    var rc = function(a) {
            if (a instanceof qc && a.constructor === qc && a.h === pc) return a.g;
            Ga(a);
            return "type_error:SafeUrl"
        },
        sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        tc = function(a) {
            if (a instanceof qc) return a;
            a = "object" == typeof a && a.La ? a.Da() : String(a);
            sc.test(a) || (a = "about:invalid#zClosurez");
            return new qc(oc, a)
        },
        pc = {},
        oc = {};
    var vc = function() {
        this.g = "";
        this.h = uc
    };
    vc.prototype.La = !0;
    var uc = {};
    vc.prototype.Da = function() {
        return this.g
    };
    var wc = function(a) {
            var b = new vc;
            b.g = a;
            return b
        },
        xc = wc("");
    var zc = function() {
        this.g = "";
        this.l = yc;
        this.h = null
    };
    zc.prototype.cc = !0;
    zc.prototype.Zb = function() {
        return this.h
    };
    zc.prototype.La = !0;
    zc.prototype.Da = function() {
        return this.g.toString()
    };
    var Ac = function(a) {
            if (a instanceof zc && a.constructor === zc && a.l === yc) return a.g;
            Ga(a);
            return "type_error:SafeHtml"
        },
        yc = {},
        Bc = function(a, b) {
            var c = new zc;
            c.g = a;
            c.h = b;
            return c
        };
    Bc("<!DOCTYPE html>", 0);
    Bc("", 0);
    Bc("<br>", 0);
    var Cc = function(a, b) {
        a.src = mc(b);
        (b = Ca()) && a.setAttribute("nonce", b)
    };
    var Dc = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Ec = function(a) {
            return a = Bb(a, void 0)
        },
        Fc = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        Gc = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Hc = function(a) {
            return null == a ? "" : String(a)
        },
        Ic = 2147483648 * Math.random() | 0,
        Jc = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Kc = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        Lc = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Mc = function() {
            return C("iPhone") && !C("iPod") && !C("iPad")
        },
        Nc = function() {
            return Mc() || C("iPad") || C("iPod")
        };
    var Oc = function(a) {
        Oc[" "](a);
        return a
    };
    Oc[" "] = Ea;
    var Pc = function(a, b) {
            try {
                return Oc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Rc = function(a, b) {
            var c = Qc;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Sc = C("Opera"),
        Tc = ac(),
        Uc = C("Edge"),
        Vc = C("Gecko") && !(y(Eb, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Wc = y(Eb, "WebKit") && !C("Edge"),
        Xc = C("Macintosh"),
        Yc = C("Android"),
        Zc = Mc(),
        $c = C("iPad"),
        ad = C("iPod"),
        ed = Nc(),
        fd = function() {
            var a = q.document;
            return a ? a.documentMode : void 0
        },
        gd;
    a: {
        var hd = "",
            id = function() {
                var a = Eb;
                if (Vc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Uc) return /Edge\/([\d\.]+)/.exec(a);
                if (Tc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Wc) return /WebKit\/(\S+)/.exec(a);
                if (Sc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();id && (hd = id ? id[1] : "");
        if (Tc) {
            var jd = fd();
            if (null != jd && jd > parseFloat(hd)) {
                gd = String(jd);
                break a
            }
        }
        gd = hd
    }
    var kd = gd,
        Qc = {},
        ld = function(a) {
            return Rc(a, function() {
                return 0 <= Db(kd, a)
            })
        },
        md;
    md = q.document && Tc ? fd() : void 0;
    var nd = bc(),
        od = Mc() || C("iPod"),
        pd = C("iPad"),
        qd = C("Android") && !(cc() || bc() || C("Opera") || C("Silk")),
        rd = cc(),
        sd = dc() && !Nc();
    var td = {},
        ud = null,
        vd = function(a, b) {
            void 0 === b && (b = 0);
            if (!ud) {
                ud = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    td[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === ud[h] && (ud[h] = g)
                    }
                }
            }
            b = td[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                var l = a[d],
                    n = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = l >> 2;
                l = (l & 3) << 4 | n >> 4;
                n = (n & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (n = 64));
                c.push(b[g], b[l], b[n] || "", b[h] ||
                    "")
            }
            return c.join("")
        };
    var wd = 0,
        xd = 0;
    var yd = function() {
        this.g = []
    };
    yd.prototype.length = function() {
        return this.g.length
    };
    yd.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var zd = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        Ad = function(a, b) {
            a.g.push(b >>> 0 & 255);
            a.g.push(b >>> 8 & 255);
            a.g.push(b >>> 16 & 255);
            a.g.push(b >>> 24 & 255)
        };
    var Bd = function() {
        this.h = [];
        this.l = 0;
        this.g = new yd
    };
    Bd.prototype.reset = function() {
        this.h = [];
        this.g.end();
        this.l = 0
    };
    var Cd = function(a, b, c) {
        if (null != c) {
            zd(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            wd = b;
            xd = d;
            c = wd;
            for (b = xd; 0 < b || 127 < c;) a.g.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.g.push(c)
        }
    };
    var Dd = function() {},
        Ed = "function" == typeof Uint8Array,
        Jd = function(a, b, c, d) {
            a.h = null;
            b || (b = []);
            a.F = void 0;
            a.o = -1;
            a.g = b;
            a: {
                if (b = a.g.length) {
                    --b;
                    var e = a.g[b];
                    if (!(null === e || "object" != typeof e || Array.isArray(e) || Ed && e instanceof Uint8Array)) {
                        a.w = b - a.o;
                        a.l = e;
                        break a
                    }
                }
                a.w = Number.MAX_VALUE
            }
            a.A = {};
            if (c)
                for (b = 0; b < c.length; b++) e = c[b], e < a.w ? (e += a.o, a.g[e] = a.g[e] || Fd) : (Gd(a), a.l[e] = a.l[e] || Fd);
            if (d && d.length)
                for (b = 0; b < d.length; b++) {
                    e = c = void 0;
                    for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                        var l = g[h],
                            n = Hd(f, l);
                        null != n &&
                            (e = l, c = n, Id(f, l, void 0))
                    }
                    e && Id(f, e, c)
                }
        },
        Fd = [],
        Gd = function(a) {
            var b = a.w + a.o;
            a.g[b] || (a.l = a.g[b] = {})
        },
        Hd = function(a, b) {
            if (b < a.w) {
                b += a.o;
                var c = a.g[b];
                return c === Fd ? a.g[b] = [] : c
            }
            if (a.l) return c = a.l[b], c === Fd ? a.l[b] = [] : c
        },
        Kd = function(a, b) {
            a = Hd(a, b);
            return null == a ? 0 : a
        },
        Id = function(a, b, c) {
            b < a.w ? a.g[b + a.o] = c : (Gd(a), a.l[b] = c)
        },
        Ld = function(a, b, c) {
            0 !== c ? Id(a, b, c) : a.g[b + a.o] = null;
            return a
        },
        Nd = function(a) {
            if (a.h)
                for (var b in a.h) {
                    var c = a.h[b];
                    if (Ha(c))
                        for (var d = 0; d < c.length; d++) c[d] && Md(c[d]);
                    else c && Md(c)
                }
        },
        Md =
        function(a) {
            Nd(a);
            return a.g
        };
    Dd.prototype.toString = function() {
        Nd(this);
        return this.g.toString()
    };
    Dd.prototype.clone = function() {
        return new this.constructor(Od(Md(this)))
    };
    var Od = function(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Od(d) : d)
            }
            return b
        }
        if (Ed && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Od(d) : d);
        return b
    };
    var Pd = document,
        D = window;
    var Rd = function(a) {
        Jd(this, a, null, Qd)
    };
    Ra(Rd, Dd);
    var Sd = function(a) {
        Jd(this, a, null, null)
    };
    Ra(Sd, Dd);
    var Qd = [
        [3, 4, 5]
    ];
    var Td = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Td.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.kh;
            d = c.mh || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Zc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(w() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    Td.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = tb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    var Ud = function(a, b) {
        a.get(b);
        a.set(b, "", {
            Zc: 0,
            path: void 0,
            domain: void 0
        })
    };
    Td.prototype.ya = function() {
        return Vd(this).keys
    };
    Td.prototype.ga = function() {
        return Vd(this).values
    };
    Td.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Td.prototype.clear = function() {
        for (var a = Vd(this).keys, b = a.length - 1; 0 <= b; b--) Ud(this, a[b])
    };
    var Vd = function(a) {
            a = (a.g.cookie || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = tb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        },
        Wd = new Td("undefined" == typeof document ? null : document);
    var Xd = function(a) {
            return (a = (new Td(a)).get("DATA_USE_CONSENT", "")) ? a : null
        },
        Yd = function(a) {
            var b = (b = (new Td(a)).get("FCCDCF", "")) ? b : null;
            try {
                var c = b ? new Rd(b ? JSON.parse(b) : null) : null
            } catch (d) {
                c = null
            }
            if (!c) return Xd(a);
            c.h || (c.h = {});
            c.h[3] || (b = Hd(c, 3)) && (c.h[3] = new Sd(b));
            c = c.h[3];
            if (!c || null == Hd(c, 1)) return Xd(a);
            a = Hd(c, 2);
            b = Date.now();
            if (a) {
                if (b < a || b > a + 33696E6) return null
            } else return null;
            return Hd(c, 1)
        };
    var $d = function(a) {
        Jd(this, a, Zd, null)
    };
    Ra($d, Dd);
    var Zd = [1, 2, 3, 4];
    var be = function() {
            return !ae() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
        },
        ae = function() {
            return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
        };
    var ce = ob(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function de(a) {
        return a ? a.passive && ce() ? a : a.capture || !1 : !1
    }
    var ee = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, de(d)), !0) : !1
        },
        fe = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, de(void 0))
        },
        ge = function(a) {
            var b = void 0 === b ? {} : b;
            if (v(window.CustomEvent)) var c = new CustomEvent("rum_blp", b);
            else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
            a.dispatchEvent(c)
        };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var he = !Tc || 9 <= Number(md),
        ie = Tc || Sc || Wc;
    var je = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    k = je.prototype;
    k.clone = function() {
        return new je(this.x, this.y)
    };
    k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var E = function(a, b) {
        this.width = a;
        this.height = b
    };
    k = E.prototype;
    k.clone = function() {
        return new E(this.width, this.height)
    };
    k.aspectRatio = function() {
        return this.width / this.height
    };
    k.isEmpty = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var me = function(a) {
            return a ? new ke(le(a)) : Sa || (Sa = new ke)
        },
        ne = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
        },
        pe = function(a, b) {
            Hb(b, function(c, d) {
                c && "object" == typeof c && c.La && (c = c.Da());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : oe.hasOwnProperty(d) ? a.setAttribute(oe[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        oe = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        qe = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new E(a.clientWidth, a.clientHeight)
        },
        re = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Wc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Tc && ld("10") && a.pageYOffset != b.scrollTop ? new je(b.scrollLeft, b.scrollTop) : new je(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        F = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        ue = function(a, b, c) {
            var d = arguments,
                e = document,
                f = String(d[0]),
                g = d[1];
            if (!he && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="', Ec(g.name), '"');
                if (g.type) {
                    f.push(' type="', Ec(g.type), '"');
                    var h = {};
                    Yb(h, g);
                    delete h.type;
                    g = h
                }
                f.push(">");
                f = f.join("")
            }
            f = se(e, f);
            g && ("string" === typeof g ? f.className =
                g : Array.isArray(g) ? f.className = g.join(" ") : pe(f, g));
            2 < d.length && te(e, f, d);
            return f
        },
        te = function(a, b, c) {
            function d(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !Ia(f) || Ja(f) && 0 < f.nodeType ? d(f) : x(ve(f) ? fb(f) : f, d)
            }
        },
        se = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        we = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        xe = function(a) {
            var b;
            if (ie && !(Tc && ld("9") && !ld("10") &&
                    q.SVGElement && a instanceof q.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return Ja(b) && 1 == b.nodeType ? b : null
        },
        ye = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        le = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        ze = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? F(a.contentDocument) :
                    null)
            } catch (b) {}
            return null
        },
        ve = function(a) {
            if (a && "number" == typeof a.length) {
                if (Ja(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (v(a)) return "function" == typeof a.item
            }
            return !1
        },
        Ae = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        ke = function(a) {
            this.g = a || q.document || document
        };
    ke.prototype.createElement = function(a) {
        return se(this.g, a)
    };
    ke.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    ke.prototype.contains = ye;
    var Ce = function(a) {
            Be();
            return nc(a)
        },
        Be = Ea;
    var De = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Ee = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Dc(e) : "")
                }
            }
        },
        Fe = /#|$/,
        Ge = function(a, b) {
            var c = a.search(Fe);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 ==
                            f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Dc(a.substr(d, e - d))
        };
    var He = function(a) {
            try {
                return !!a && null != a.location.href && Pc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        Ie = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Je = /https?:\/\/[^\/]+/,
        Ke = function(a) {
            return (a = Je.exec(a)) && a[0] || ""
        },
        Le = function() {
            var a = q;
            var b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        },
        Ne = function() {
            var a = Me;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        },
        Oe = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Pe = function(a, b) {
            for (var c = 0; 50 > c; ++c) {
                if (Oe(a, b)) return a;
                a: {
                    try {
                        var d = a.parent;
                        if (d && d != a) {
                            var e = d;
                            break a
                        }
                    } catch (f) {}
                    e = null
                }
                if (!(a = e)) break
            }
            return null
        };
    var Qe = function(a) {
        var b = document;
        try {
            var c = Yd(b);
            var d = c ? new $d(c ? JSON.parse(c) : null) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        b = Hd(d, 7);
        if (null == b ? b : b) return 4;
        if (6048E5 < w() - (Hd(d, 5) || 0)) return 0;
        if (a) {
            if (bb(Hd(d, 3), a)) return 2;
            if (bb(Hd(d, 4), a)) return 3
        }
        return 1
    };
    var Re = {
        Tg: 1,
        hh: 2,
        Jg: 3
    };
    var G = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        },
        Se = function(a) {
            return a.right - a.left
        },
        Te = function(a) {
            return a.bottom - a.top
        };
    k = G.prototype;
    k.clone = function() {
        return new G(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function(a) {
        return this && a ? a instanceof G ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Ue = function(a, b, c) {
        b instanceof je ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    G.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Ve = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    Ve.prototype.clone = function() {
        return new Ve(this.left, this.top, this.width, this.height)
    };
    var We = function(a) {
        return new G(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    k = Ve.prototype;
    k.contains = function(a) {
        return a instanceof je ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    k.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var Xe = function(a) {
        a = void 0 === a ? q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var Ye = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var Ze = /^((market|itms|intent|itms-appss):\/\/)/i;
    var af = function(a, b) {
            if ("string" === typeof b)(b = $e(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = $e(d, c);
                    f && (d.style[f] = e)
                }
        },
        bf = {},
        $e = function(a, b) {
            var c = bf[b];
            if (!c) {
                var d = Jc(b);
                c = d;
                void 0 === a.style[d] && (d = (Wc ? "Webkit" : Vc ? "Moz" : Tc ? "ms" : Sc ? "O" : null) + Lc(d), void 0 !== a.style[d] && (c = d));
                bf[b] = c
            }
            return c
        },
        cf = function(a, b) {
            var c = a.style[Jc(b)];
            return "undefined" !== typeof c ? c : a.style[$e(a, b)] || ""
        },
        df = function(a) {
            try {
                var b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            Tc &&
                a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        ef = function(a) {
            var b = le(a),
                c = new je(0, 0);
            var d = b ? le(b) : document;
            d = !Tc || 9 <= Number(md) || "CSS1Compat" == me(d).g.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = df(a);
            b = re(me(b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        ff = function(a, b) {
            var c = new je(0, 0),
                d = F(le(a));
            if (!Pc(d, "parent")) return c;
            do {
                if (d == b) var e = ef(a);
                else e = df(a), e = new je(e.left,
                    e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        gf = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Wc && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = df(a), new E(a.right - a.left, a.bottom - a.top)) : new E(b, c)
        };
    var hf = !!window.google_async_iframe_id,
        jf = hf && window.parent || window,
        kf = function() {
            if (hf && !He(jf)) {
                var a = "." + Pd.domain;
                try {
                    for (; 2 < a.split(".").length && !He(jf);) Pd.domain = a = a.substr(a.indexOf(".") + 1), jf = window.parent
                } catch (b) {}
                He(jf) || (jf = window)
            }
            return jf
        };
    nc(hc(ic("//fonts.googleapis.com/css")));
    var lf = function(a, b, c) {
            c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        mf = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var nf = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        rf = function(a) {
            a = a || of();
            for (var b = new pf(q.location.href, q, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
                var f = a[e];
                !c && nf.test(f.url) && (c = f);
                if (f.url && !f.hc) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            0 != b.depth && f && (e = a[d]);
            return new qf(b, e, c)
        },
        of = function() {
            var a = q,
                b = [],
                c = null;
            do {
                var d = a;
                if (He(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
                } else e = c, c = null;
                b.push(new pf(e || "", d));
                try {
                    a = d.parent
                } catch (f) {
                    a = null
                }
            } while (a &&
                d != a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = q;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.hc = !0);
            return b
        },
        qf = function(a, b, c) {
            this.g = a;
            this.h = b;
            this.l = c
        },
        pf = function(a, b, c) {
            this.url = a;
            this.ia = b;
            this.hc = !!c;
            this.depth = null
        };
    var sf = function() {
            this.h = "&";
            this.o = !1;
            this.l = {};
            this.w = 0;
            this.g = []
        },
        tf = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        vf = function(a, b, c, d, e) {
            var f = [];
            Ie(a, function(g, h) {
                (g = uf(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        uf = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(uf(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(vf(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        wf = function(a, b, c) {
            a.g.push(b);
            a.l[b] = c
        },
        xf = function(a, b, c, d) {
            a.g.push(b);
            a.l[b] = tf(c, d)
        },
        zf = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = yf(a) - c.length;
            if (0 > d) return "";
            a.g.sort(function(m, t) {
                return m - t
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.l[g], l = 0; l < h.length; l++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var n = vf(h[l], a.h, ",$");
                    if (n) {
                        n = e + n;
                        if (d >= n.length) {
                            d -= n.length;
                            b += n;
                            e = a.h;
                            break
                        }
                        a.o && (e = d, n[e - 1] == a.h && --e, b +=
                            n.substr(0, e), e = a.h, d = 0);
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a + ""
        },
        yf = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.h.length - 1
        };
    var Af = function() {
            var a = void 0 === a ? D : a;
            this.h = "http:" === a.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        },
        Df = function() {
            var a = Bf,
                b = Cf.google_srt;
            0 <= b && 1 >= b && (a.g = b)
        },
        Ef = function(a, b, c, d, e) {
            if ((d ? a.g : Math.random()) < (e || .01)) try {
                if (c instanceof sf) var f = c;
                else f = new sf, Ie(c, function(h, l) {
                    var n = f,
                        m = n.w++;
                    wf(n, m, tf(l, h))
                });
                var g = zf(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Ye(q, g)
            } catch (h) {}
        };
    var Ff = null;
    var Gf = function() {
            var a = q.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : w()
        },
        Hf = function() {
            var a = void 0 === a ? q : a;
            return (a = a.performance) && a.now ? a.now() : null
        },
        If = function(a) {
            var b = q.performance;
            return b && b.timing && b.timing[a] || 0
        },
        Jf = function() {
            var a = Math.min(If("domLoading") || Infinity, If("domInteractive") || Infinity);
            return Infinity == a ? Math.max(If("responseEnd"), If("navigationStart")) : a
        };
    var Kf = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var Lf = q.performance,
        Mf = !!(Lf && Lf.mark && Lf.measure && Lf.clearMarks),
        Nf = ob(function() {
            var a;
            if (a = Mf) {
                var b;
                if (null === Ff) {
                    Ff = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (Ff = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ff;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        Of = function(a, b) {
            this.events = [];
            this.g = b || q;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.h = Nf() || (null !=
                c ? c : Math.random() < a)
        };
    Of.prototype.F = function() {
        this.h = !1;
        this.events != this.g.google_js_reporting_queue && (Nf() && x(this.events, Pf), this.events.length = 0)
    };
    Of.prototype.J = function(a) {
        !this.h || 2048 < this.events.length || this.events.push(a)
    };
    var Pf = function(a) {
        a && Lf && Nf() && (Lf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Lf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Of.prototype.start = function(a, b) {
        if (!this.h) return null;
        var c = Hf() || Gf();
        a = new Kf(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Lf && Nf() && Lf.mark(b);
        return a
    };
    Of.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            var b = Hf() || Gf();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Lf && Nf() && Lf.mark(b);
            this.J(a)
        }
    };
    var Rf = function() {
        var a = Qf;
        this.l = Bf;
        this.A = "jserror";
        this.o = !0;
        this.h = null;
        this.F = this.Fa;
        this.g = void 0 === a ? null : a;
        this.w = !1
    };
    k = Rf.prototype;
    k.pinger = function() {
        return this.l
    };
    k.Rb = function(a) {
        this.h = a
    };
    k.Gc = function(a) {
        this.A = a
    };
    k.Hc = function(a) {
        this.o = a
    };
    k.Ic = function(a) {
        this.w = a
    };
    k.Ua = function(a, b, c) {
        try {
            if (this.g && this.g.h) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (g) {
            b = this.o;
            try {
                Pf(d);
                var f = new lf(g, {
                    message: Sf(g)
                });
                b = this.F(a, f, void 0, c)
            } catch (h) {
                this.Fa(217, h)
            }
            if (!b) throw g;
        }
        return e
    };
    k.Dc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.Ua(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    k.Fa = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new sf;
            f.o = !0;
            xf(f, 1, "context", a);
            mf(b) || (b = new lf(b, {
                message: Sf(b)
            }));
            b.msg && xf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (l) {}
            if (d) try {
                d(g)
            } catch (l) {}
            wf(f, 3, [g]);
            var h = rf();
            h.h && xf(f, 4, "top", h.h.url || "");
            xf(f, 5, "url", h.g.url || "");
            Ef(this.l, e, f, this.w, c)
        } catch (l) {
            try {
                Ef(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Sf(l),
                    url: h && h.g.url
                }, this.w, c)
            } catch (n) {}
        }
        return this.o
    };
    var Sf = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Tf = function() {
        this.h = "jserror";
        this.l = !1;
        this.g = null;
        this.o = !1;
        this.A = Math.random();
        this.w = this.Fa
    };
    k = Tf.prototype;
    k.Gc = function(a) {
        this.h = a
    };
    k.Rb = function(a) {
        this.g = a
    };
    k.Hc = function(a) {
        this.l = a
    };
    k.Ic = function(a) {
        this.o = a
    };
    k.Fa = function(a, b, c, d, e) {
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.A : Math.random()) > (void 0 === c ? .01 : c)) return this.l;
        mf(b) || (b = new lf(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        q.google_js_errors = q.google_js_errors || [];
        q.google_js_errors.push(b);
        q.error_rep_loaded || (b = q.document, a = b.createElement("script"), Cc(a, Ce(q.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a,
            b), q.error_rep_loaded = !0);
        return this.l
    };
    k.Ua = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.w(a, e, .01, c, this.h)) throw e;
        }
        return d
    };
    k.Dc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.Ua(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Bf, Uf, Vf, Cf = kf(),
        Qf = new Of(1, Cf);
    (function() {
        Bf = new Af;
        "number" !== typeof Cf.google_srt && (Cf.google_srt = Math.random());
        Df();
        Uf = new Rf;
        Uf.Rb(function(b) {
            var c = D.jerExpIds;
            if (Ha(c) && 0 !== c.length) {
                var d = b.eid;
                d ? (c = [].concat(ca(d.split(",")), ca(c)), gb(c), b.eid = c.join(",")) : b.eid = c.join(",")
            }
            Vf && (b.jc = Vf);
            (c = D.jerUserAgent) && (b.useragent = c)
        });
        Uf.Ic(!0);
        "complete" == Cf.document.readyState ? Cf.google_measure_js_timing || Qf.F() : Qf.h && ee(Cf, "load", function() {
            Cf.google_measure_js_timing || Qf.F()
        });
        var a = Pd.currentScript;
        Vf = a ? a.dataset.jc : ""
    })();
    var Wf = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, He(a) && (c = a, b = d);
        return {
            ia: c,
            level: b
        }
    };
    var Xf = function() {
            this.S = {}
        },
        $f = function() {
            if (Yf) var a = Yf;
            else {
                a = ((a = Xe()) ? He(a.master) ? a.master : null : null) || kf();
                var b = a.google_persistent_state_async;
                a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Yf = b : a.google_persistent_state_async = Yf = new Xf
            }
            b = kf();
            var c = Xe(b);
            c ? ((c = c || Xe()) ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Wf(b).ia, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2,
                43))), b = c);
            c = Zf[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            a = void 0 === d ? a[c] = b : d;
            return a
        },
        Yf = null,
        ag = {},
        Zf = (ag[8] = "google_prev_ad_formats_by_region", ag[9] = "google_prev_ad_slotnames_by_region", ag);
    var dg = function(a) {
            var b = [];
            bg(new cg, a, b);
            return b.join("")
        },
        cg = function() {},
        bg = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), bg(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), eg(d, c), c.push(":"), bg(a, f, c),
                            e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        eg(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        fg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        gg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        eg = function(a, b) {
            b.push('"', a.replace(gg,
                function(c) {
                    var d = fg[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), fg[c] = d);
                    return d
                }), '"')
        };
    var hg = function() {
            this.g = null;
            this.h = "missing-id"
        },
        jg = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return ig("missing-element", a.h), a.g = "", null
            }
            if (1 < b.length) return ig("multiple-elements", a.h), a.g = "", null;
            b = b[0];
            return b ? b.innerHTML : (ig("missing-element", a.h), a.g = "", null)
        },
        lg = function() {
            var a = kg,
                b = jg(a);
            if (null !== b)
                if (/^\s*$/.test(b) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                        "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
                    var c = JSON.parse(b);
                    b = c.experimentFlags;
                    c = c.binaryIdentifier;
                    var d = "string" === typeof c;
                    d && (a.h = c);
                    "string" !== typeof b ? (ig("missing-flags", a.h), a.g = "") : (d || ig("missing-binary-id", a.h), a.g = b)
                } else ig("invalid-json", a.h), a.g = ""
        };
    hg.prototype.reset = function() {
        this.g = null;
        this.h = "missing-id"
    };
    var mg = function(a, b, c) {
            this.id = a;
            this.G = b;
            this.g = c;
            this.Qb = !1
        },
        ng = function(a) {
            return a.Qb || a.g
        },
        og = function() {
            this.g = []
        },
        pg = function() {
            this.g = new Map;
            this.h = !1;
            this.o = new og;
            this.w = new mg(0, 0, !1);
            this.l = [this.o]
        },
        H = function(a) {
            var b = qg;
            if (b.h || b.g.has(a.id) || null == a.G && null == a.control || 0 == a.Tc) return b.w;
            var c = b.o;
            if (null != a.control)
                for (var d = ba(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else null != a.va && (c = a.va);
            d = 0;
            null != a.control ? d = a.control.G : null != a.G &&
                (d = a.G);
            a = new mg(a.id, d, !!a.jh);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        rg = function() {
            var a = qg;
            return [].concat(ca(a.g.keys())).filter(function(b) {
                return ng(this.g.get(b))
            }, a)
        },
        sg = function(a) {
            var b = qg;
            b.h || (a.g(b.l, b.g), b.h = !0)
        };
    pg.prototype.reset = function() {
        for (var a = ba(this.g), b = a.next(); !b.done; b = a.next()) b = ba(b.value), b.next(), b.next().value.Qb = !1;
        this.h = !1
    };
    var qg = new pg,
        ug = function() {
            return tg.g.filter(function(a) {
                return ng(a)
            }).map(function(a) {
                return a.id
            })
        };
    var vg = function() {};
    vg.prototype.g = function(a) {
        a = ba(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(1E3 * Math.random());
            b = ba(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.G, d < c) {
                    e.Qb = !0;
                    break
                }
        }
    };
    var wg = function(a) {
        this.h = a
    };
    wg.prototype.g = function(a, b) {
        a = ba(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.Qb = !0
    };
    var xg = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        yg = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var zg = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var Ag = function(a, b, c) {
            Ie(b, function(d, e) {
                var f = c && c[e];
                !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
            });
            return a
        },
        Hg = function(a, b, c, d, e, f, g, h) {
            f = void 0 === f ? Infinity : f;
            g = void 0 === g ? !1 : g;
            Of.call(this, a, h);
            var l = this;
            this.C = 0;
            this.K = f;
            this.$ = b;
            this.L = c;
            this.Y = d;
            this.aa = e;
            a = this.g.navigator;
            this.V = !("csi.gstatic.com" !== this.L || !a || !a.sendBeacon);
            this.w = {};
            this.I = {};
            this.g.performance && this.g.performance.now || Bg(this, "dat", 1);
            a && a.deviceMemory && Bg(this, "dmc",
                a.deviceMemory);
            this.P = !g;
            this.N = function() {
                l.g.setTimeout(function() {
                    return Cg(l)
                }, 1100)
            };
            this.pa = [];
            this.X = function() {
                Dg(l, 1)
            };
            this.O = function() {
                Dg(l, 2)
            };
            this.ma = qb(function() {
                Cg(l)
            });
            this.sa = function() {
                var m = l.g.document;
                (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && l.ma()
            };
            this.D = this.g.setTimeout(function() {
                return Cg(l)
            }, 5E3);
            this.A = {};
            this.o = b.length + c.length + d.length + e.length + 3;
            this.l = 0;
            x(this.events, function(m) {
                return Eg(l, m)
            });
            this.H = [];
            b = zg(this.g);
            var n = function(m) {
                var t = m[0];
                m = m[1];
                var B = t.length + m.length + 2;
                8E3 < l.o + l.l + B && Cg(l);
                l.H.push([t, m]);
                l.l += B;
                6E3 <= l.o + l.l && Cg(l);
                return 0
            };
            x(b, function(m) {
                return n(m)
            });
            b.length = 0;
            b.push = n;
            Fg(this);
            Gg(this)
        };
    p(Hg, Of);
    var Gg = function(a) {
            "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
                return Cg(a)
            }, 0) : ee(a.g, "load", a.N);
            var b = yg(a.g.document);
            "undefined" !== typeof b && ee(a.g, b, a.sa);
            ee(a.g, "unload", a.X);
            ee(a.g, "pagehide", a.O)
        },
        Bg = function(a, b, c) {
            c = String(c);
            a.o = null != a.w[b] ? a.o + (c.length - a.w[b].length) : a.o + (b.length + c.length + 2);
            a.w[b] = c
        },
        Ig = function(a) {
            null != a.w.uet && (a.o -= 3 + a.w.uet.length + 2, delete a.w.uet)
        },
        Jg = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = null == a.A[b] ? b.length + c.length + 2 : d ? c.length +
                e.length : c.length - a.A[b].length;
            8E3 < a.o + a.l + f && (Cg(a), f = b.length + c.length + 2);
            a.A[b] = d && null != a.A[b] ? a.A[b] + ("" + e + c) : c;
            a.l += f;
            6E3 <= a.o + a.l && Cg(a)
        },
        Cg = function(a) {
            if (a.h && a.P) {
                try {
                    if (a.l) {
                        var b = a.A;
                        a.C++;
                        var c = Kg(a, b);
                        b = !1;
                        try {
                            b = !!(a.V && a.g.navigator && a.g.navigator.sendBeacon(c, null))
                        } catch (d) {
                            a.V = !1
                        }
                        b || Ye(a.g, c);
                        Fg(a);
                        a.C === a.K && a.F()
                    }
                } catch (d) {
                    (new Tf).Fa(358, d)
                }
                a.A = {};
                a.l = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.D);
                a.D = 0
            }
        },
        Kg = function(a, b) {
            var c = a.$ + "//" + a.L + a.Y + a.aa,
                d = {};
            c = Ag(c, a.w, d);
            c = Ag(c, b, d);
            a.g.google_timing_params && (c = Ag(c, a.g.google_timing_params, d), a.g.google_timing_params = void 0);
            x(a.H, function(e) {
                var f = ba(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = Ag(c, (g[e] = f, g))
            });
            a.H.length = 0;
            return c
        },
        Fg = function(a) {
            Bg(a, "puid", (a.C + 1).toString(36) + "~" + w().toString(36))
        },
        Eg = function(a, b) {
            var c = "met." + b.type,
                d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
                e = Math.round(b.duration);
            b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "");
            Jg(a,
                c, b, !0, "~")
        };
    Hg.prototype.J = function(a) {
        this.h && this.C < this.K && (Of.prototype.J.call(this, a), Eg(this, a))
    };
    Hg.prototype.F = function() {
        Of.prototype.F.call(this);
        this.g.clearTimeout(this.D);
        this.l = this.D = 0;
        this.A = {};
        Vb(this.I);
        Vb(this.w);
        fe(this.g, "load", this.N);
        fe(this.g, "unload", this.X);
        fe(this.g, "pagehide", this.O)
    };
    var Dg = function(a, b) {
        Bg(a, "uet", b);
        x(a.pa, function(c) {
            try {
                c()
            } catch (d) {}
        });
        ge(a.g);
        Cg(a);
        Ig(a)
    };
    var I = function() {
            this.g = new Hg(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
            var a = $f();
            null != a && Bg(this.g, "c", a)
        },
        Lg = function(a, b, c) {
            if (null != c) {
                a = a.g;
                var d = b + "=" + c;
                a.I[d] || (Jg(a, b, c, !1), 1E3 > d.length && (a.I[d] = !0))
            }
        },
        Mg = function(a, b) {
            a = a.g;
            var c = Gf() - 0;
            a.h && a.J(new Kf(b, 4, c, 0, void 0))
        };
    Fa(I);
    var Ng = function(a, b) {
        this.h = a;
        this.l = b
    };
    p(Ng, wg);
    Ng.prototype.g = function(a, b) {
        wg.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = ba(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",");
        a = a.map(String).join(",");
        Lg(I.B(), "sei", b);
        Lg(I.B(), "nsei", a);
        Lg(I.B(), "bi", this.l)
    };
    var Og = function() {
        hg.apply(this, arguments)
    };
    p(Og, hg);
    var ig = function(a, b) {
        var c = I.B();
        Lg(c, "eee", a);
        Lg(c, "bi", b)
    };
    Fa(Og);
    function Pg() {
        return Qg.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var tg = new og;
    H({
        id: 418572103,
        G: 0
    });
    H({
        id: 420706097,
        G: 10
    });
    H({
        id: 420706098,
        G: 10
    });
    H({
        id: 21061786,
        G: 10
    });
    H({
        id: 21061817,
        G: 10
    });
    H({
        id: 21061824,
        G: 50
    });
    H({
        id: 21061888,
        G: 10
    });
    H({
        id: 21061893,
        G: 10
    });
    H({
        id: 21062100,
        G: 0
    });
    H({
        id: 21063062,
        G: 0
    });
    H({
        id: 420706109,
        G: 10
    });
    H({
        id: 420706110,
        G: 10
    });
    H({
        id: 21062347,
        G: 0
    });
    H({
        id: 21063070,
        G: 0
    });
    H({
        id: 21063072,
        G: 0
    });
    H({
        id: 21063100,
        G: 0
    });
    H({
        id: 420706116,
        G: 0
    });
    H({
        id: 420706105,
        G: 10
    });
    H({
        id: 420706106,
        G: 10
    });
    H({
        id: 75259402,
        G: 10
    });
    H({
        id: 75259403,
        G: 10
    });
    H({
        id: 21064018,
        G: 0
    });
    H({
        id: 21064020,
        G: 0
    });
    H({
        id: 21064022,
        G: 0
    });
    H({
        id: 21064024,
        G: 0
    });
    H({
        id: 21064075,
        G: 0
    });
    H({
        id: 21064201,
        G: 50
    });
    var Rg = H({
        id: 210640812,
        G: 10
    });
    H({
        id: 420706142,
        G: 0
    });
    H({
        id: 21064347,
        G: 0
    });
    H({
        id: 21064362,
        G: 0
    });
    H({
        id: 72811302,
        G: 0
    });
    H({
        id: 72811303,
        G: 0
    });
    H({
        id: 72811304,
        G: 0
    });
    H({
        id: 72811305,
        G: 0
    });
    H({
        id: 72811306,
        G: 0
    });
    H({
        id: 72811307,
        G: 0
    });
    H({
        id: 21064565,
        G: 0
    });
    H({
        id: 21064567,
        G: 0
    });
    H({
        id: 21064572,
        G: 10
    });
    H({
        id: 21064573,
        G: 10
    });
    H({
        id: 40819804,
        G: 10
    });
    var Sg = H({
        id: 40819805,
        G: 10
    });
    H({
        id: 418572006,
        G: 10
    });
    H({
        id: 44711678,
        G: 10
    });
    H({
        id: 420706136,
        G: 10
    });
    H({
        id: 420706137,
        G: 10
    });
    H({
        id: 420706138,
        G: 10
    });
    H({
        id: 420706139,
        G: 10
    });
    H({
        id: 420706140,
        G: 10
    });
    H({
        id: 420706141,
        G: 10
    });
    H({
        id: 21065285,
        G: 1
    });
    H({
        id: 21065286,
        G: 1
    });
    H({
        id: 21065287,
        G: 10,
        Tc: nd
    });
    H({
        id: 21065288,
        G: 10,
        Tc: nd
    });
    H({
        id: 72811314,
        G: 0
    });
    H({
        id: 44713198,
        G: 0
    });
    H({
        id: 44713399,
        G: 50
    });
    H({
        id: 44713400,
        G: 50
    });
    H({
        id: 44714510,
        G: 0
    });
    H({
        id: 44714743,
        G: 0
    });
    H({
        id: 42530094,
        G: 50,
        va: tg
    });
    H({
        id: 42530095,
        G: 50,
        va: tg
    });
    H({
        id: 42530173,
        G: 10,
        va: tg
    });
    H({
        id: 42530174,
        G: 10,
        va: tg
    });
    H({
        id: 668123728,
        G: 10,
        va: tg
    });
    H({
        id: 668123729,
        G: 10,
        va: tg
    });
    H({
        id: 370204080,
        G: 1,
        va: tg
    });
    H({
        id: 370204081,
        G: 0,
        va: tg
    });
    H({
        id: 44710407,
        G: 10,
        va: tg
    });
    H({
        id: 44710408,
        G: 10,
        va: tg
    });
    H({
        id: 31061774,
        G: 10
    });
    var Tg = H({
        id: 31061775,
        G: 10
    });
    H({
        id: 504733015,
        G: 0
    });
    var Ug = H({
        id: 504733016,
        G: 0
    });
    H({
        id: 189176E3,
        G: 50
    });
    H({
        id: 189176001,
        G: 50
    });
    H({
        id: 40819802,
        G: 10
    });
    H({
        id: 40819803,
        G: 10
    });
    H({
        id: 44712632,
        G: 10
    });
    H({
        id: 44712633,
        G: 10
    });
    H({
        id: 44714545,
        G: 10
    });
    var Vg = H({
        id: 44714546,
        G: 10
    });
    H({
        id: 44715336,
        G: 10
    });
    if ("undefined" === typeof window.v8_flag_map) {
        var kg = Og.B();
        null === kg.g && lg();
        var Qg = kg.g,
            Wg;
        null === kg.g && lg();
        Wg = kg.h;
        if (Qg) {
            var Xg = new Ng(Pg(), Wg);
            sg(Xg)
        }
    };
    qg.reset();
    sg(new vg);
    var J = function() {
        this.J = this.J;
        this.F = this.F
    };
    J.prototype.J = !1;
    J.prototype.ob = function() {
        return this.J
    };
    J.prototype.U = function() {
        this.J || (this.J = !0, this.R())
    };
    var Zg = function(a, b) {
        b = Qa(Yg, b);
        a.J ? b() : (a.F || (a.F = []), a.F.push(b))
    };
    J.prototype.R = function() {
        if (this.F)
            for (; this.F.length;) this.F.shift()()
    };
    var Yg = function(a) {
        a && "function" == typeof a.U && a.U()
    };
    var $g = function(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1
    };
    $g.prototype.l = function() {
        this.defaultPrevented = !0
    };
    q.console && "function" === typeof q.console.log && Pa(q.console.log, q.console);
    var ah = function(a) {
        for (var b = [], c = a = F(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var bh = !Tc || 9 <= Number(md),
        ch = Tc && !ld("9"),
        dh = function() {
            if (!q.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                q.addEventListener("test", Ea, b), q.removeEventListener("test", Ea, b)
            } catch (c) {}
            return a
        }();
    var fh = function(a, b) {
        $g.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            (b = a.relatedTarget) ? Vc && (Pc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement :
                "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId =
                a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : eh[a.pointerType] || "";
            this.state = a.state;
            this.h = a;
            a.defaultPrevented && this.l()
        }
    };
    Ra(fh, $g);
    var eh = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    fh.prototype.l = function() {
        fh.Va.l.call(this);
        var a = this.h;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, ch) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var gh = "closure_listenable_" + (1E6 * Math.random() | 0),
        hh = function(a) {
            return !(!a || !a[gh])
        },
        ih = 0;
    var jh = function(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ab = e;
            this.key = ++ih;
            this.bb = this.ub = !1
        },
        kh = function(a) {
            a.bb = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Ab = null
        };
    var lh = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    lh.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = mh(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ub = !1)) : (b = new jh(b, this.src, f, !!d, e), b.ub = c, a.push(b));
        return b
    };
    var nh = function(a, b) {
            var c = b.type;
            c in a.g && cb(a.g[c], b) && (kh(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
        },
        oh = function(a, b, c, d, e) {
            a = a.g[b.toString()];
            b = -1;
            a && (b = mh(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        mh = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.bb && f.listener == b && f.capture == !!c && f.Ab == d) return e
            }
            return -1
        };
    var ph = "closure_lm_" + (1E6 * Math.random() | 0),
        qh = {},
        rh = 0,
        th = function(a, b, c, d, e) {
            if (d && d.once) return sh(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) th(a, b[f], c, d, e);
                return null
            }
            c = uh(c);
            return hh(a) ? a.T(b, c, Ja(d) ? !!d.capture : !!d, e) : vh(a, b, c, !1, d, e)
        },
        vh = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Ja(e) ? !!e.capture : !!e,
                h = wh(a);
            h || (a[ph] = h = new lh(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = xh();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) dh || (e = g), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(yh(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            rh++;
            return c
        },
        xh = function() {
            var a = zh,
                b = bh ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        sh = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) sh(a, b[f], c, d, e);
                return null
            }
            c = uh(c);
            return hh(a) ? a.o.add(String(b),
                c, !0, Ja(d) ? !!d.capture : !!d, e) : vh(a, b, c, !0, d, e)
        },
        Ah = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Ah(a, b[f], c, d, e);
            else d = Ja(d) ? !!d.capture : !!d, c = uh(c), hh(a) ? a.Ba(b, c, d, e) : a && (a = wh(a)) && (b = oh(a, b, c, d, e)) && Bh(b)
        },
        Bh = function(a) {
            if ("number" !== typeof a && a && !a.bb) {
                var b = a.src;
                if (hh(b)) nh(b.o, a);
                else {
                    var c = a.type,
                        d = a.g;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(yh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    rh--;
                    (c = wh(b)) ? (nh(c,
                        a), 0 == c.h && (c.src = null, b[ph] = null)) : kh(a)
                }
            }
        },
        yh = function(a) {
            return a in qh ? qh[a] : qh[a] = "on" + a
        },
        Dh = function(a, b, c, d) {
            var e = !0;
            if (a = wh(a))
                if (b = a.g[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.bb && (f = Ch(f, d), e = e && !1 !== f)
                    }
                return e
        },
        Ch = function(a, b) {
            var c = a.listener,
                d = a.Ab || a.src;
            a.ub && Bh(a);
            return c.call(d, b)
        },
        zh = function(a, b) {
            if (a.bb) return !0;
            if (!bh) {
                var c = b || Da("window.event");
                b = new fh(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 ==
                            c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.g; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; 0 <= e; e--) {
                        b.g = c[e];
                        var f = Dh(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; e < c.length; e++) b.g = c[e],
                    f = Dh(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return Ch(a, new fh(b, this))
        },
        wh = function(a) {
            a = a[ph];
            return a instanceof lh ? a : null
        },
        Eh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        uh = function(a) {
            if (v(a)) return a;
            a[Eh] || (a[Eh] = function(b) {
                return a.handleEvent(b)
            });
            return a[Eh]
        };
    var K = function() {
        J.call(this);
        this.o = new lh(this);
        this.Md = this;
        this.ma = null
    };
    Ra(K, J);
    K.prototype[gh] = !0;
    k = K.prototype;
    k.addEventListener = function(a, b, c, d) {
        th(this, a, b, c, d)
    };
    k.removeEventListener = function(a, b, c, d) {
        Ah(this, a, b, c, d)
    };
    k.dispatchEvent = function(a) {
        var b, c = this.ma;
        if (c)
            for (b = []; c; c = c.ma) b.push(c);
        c = this.Md;
        var d = a.type || a;
        if ("string" === typeof a) a = new $g(a, c);
        else if (a instanceof $g) a.target = a.target || c;
        else {
            var e = a;
            a = new $g(d, c);
            Yb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.g = b[f];
                e = Fh(g, d, !0, a) && e
            }
        g = a.g = c;
        e = Fh(g, d, !0, a) && e;
        e = Fh(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.g = b[f], e = Fh(g, d, !1, a) && e;
        return e
    };
    k.R = function() {
        K.Va.R.call(this);
        if (this.o) {
            var a = this.o,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, kh(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.ma = null
    };
    k.T = function(a, b, c, d) {
        return this.o.add(String(a), b, !1, c, d)
    };
    k.Ba = function(a, b, c, d) {
        var e = this.o;
        a = String(a).toString();
        if (a in e.g) {
            var f = e.g[a];
            b = mh(f, b, c, d); - 1 < b && (kh(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--))
        }
    };
    var Fh = function(a, b, c, d) {
        b = a.o.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.bb && g.capture == c) {
                var h = g.listener,
                    l = g.Ab || g.src;
                g.ub && nh(a.o, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    var Gh = function(a, b) {
        K.call(this);
        this.h = a || 1;
        this.g = b || q;
        this.l = Pa(this.Uf, this);
        this.w = w()
    };
    Ra(Gh, K);
    k = Gh.prototype;
    k.kb = !1;
    k.ua = null;
    k.setInterval = function(a) {
        this.h = a;
        this.ua && this.kb ? (this.stop(), this.start()) : this.ua && this.stop()
    };
    k.Uf = function() {
        if (this.kb) {
            var a = w() - this.w;
            0 < a && a < .8 * this.h ? this.ua = this.g.setTimeout(this.l, this.h - a) : (this.ua && (this.g.clearTimeout(this.ua), this.ua = null), this.dispatchEvent("tick"), this.kb && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.kb = !0;
        this.ua || (this.ua = this.g.setTimeout(this.l, this.h), this.w = w())
    };
    k.stop = function() {
        this.kb = !1;
        this.ua && (this.g.clearTimeout(this.ua), this.ua = null)
    };
    k.R = function() {
        Gh.Va.R.call(this);
        this.stop();
        delete this.g
    };
    var Hh = function(a, b, c) {
        if (v(a)) c && (a = Pa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = Pa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0)
    };
    var Ih = function() {
            return Math.round(w() / 1E3)
        },
        Jh = function(a) {
            var b = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
            return null != b ? b : null != a ? a : Ih()
        };
    var Kh = function() {
        this.h = -1
    };
    var Lh = function() {
        this.g = {};
        return this
    };
    Lh.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var Mh = function(a, b) {
        a.g.eb = Wb(a.g, "eb", 0) | b
    };
    Lh.prototype.get = function(a) {
        return Wb(this.g, a, null)
    };
    var Nh = null,
        Oh = function() {
            this.g = {};
            this.h = 0
        },
        Ph = function(a, b) {
            this.A = a;
            this.o = !0;
            this.h = b
        };
    Ph.prototype.getName = function() {
        return this.A
    };
    Ph.prototype.g = function() {
        return this.h
    };
    Ph.prototype.l = function() {
        return String(this.h)
    };
    var Qh = function(a, b) {
        Ph.call(this, String(a), b);
        this.w = a;
        this.h = !!b
    };
    Ra(Qh, Ph);
    Qh.prototype.l = function() {
        return this.h ? "1" : "0"
    };
    var Rh = function(a, b) {
        Ph.call(this, a, b)
    };
    Ra(Rh, Ph);
    Rh.prototype.l = function() {
        return this.h ? Math.round(this.h.top) + "." + Math.round(this.h.left) + "." + (Math.round(this.h.top) + Math.round(this.h.height)) + "." + (Math.round(this.h.left) + Math.round(this.h.width)) : ""
    };
    var Sh = function(a) {
            if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                a = a.split(".");
                var b = Number(a[0]),
                    c = Number(a[1]);
                return new Rh("", new Ve(c, b, Number(a[3]) - c, Number(a[2]) - b))
            }
            return new Rh("", new Ve(0, 0, 0, 0))
        },
        Th = function() {
            Nh || (Nh = new Oh);
            return Nh
        },
        Uh = function(a, b) {
            a.g[b.getName()] = b
        };
    var Vh = function(a) {
            var b = new Ve(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Ve(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var l = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (l <= f) {
                            e.left = g;
                            e.top = l;
                            e.width = h - g;
                            e.height = f - l;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        Wh = function(a, b) {
            var c = a.getBoundingClientRect();
            a = ff(a,
                b);
            return new Ve(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        Xh = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new Ve(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;Uh(a, new Ph("vp", d));d && 0 < d ? (e = We(b), f = We(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;Uh(a, new Qh(512,
                    e));d && 0 < d ? (e = We(b), f = We(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;Uh(a, new Qh(1024, e));d && 0 < d ? (e = We(b), f = We(c), e = e.left >= f.left && e.left < f.right) : e = !1;Uh(a, new Qh(2048, e));d && 0 < d ? (b = We(b), c = We(c), c = b.right <= c.right && b.right > c.left) : c = !1;Uh(a, new Qh(4096, c))
            }
        };
    var Yh = function(a, b) {
        var c = 0;
        Pb(F(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = Th();
            a.g = {};
            var e = new Qh(32, !0);
            e.o = !1;
            Uh(a, e);
            e = F().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            Uh(a, new Qh(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = F().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (m) {
                    g = !1
                }
                if (g) {
                    var h = ah(d);
                    var l = h && 0 != h.length ? "1" : "0"
                } else l = "2"
            } catch (m) {
                l = "2"
            }
            Uh(a, new Qh(256,
                "2" == l));
            Uh(a, new Qh(128, "1" == l));
            h = g = F().top;
            "2" == l && (h = F());
            f = Wh(d, h);
            Uh(a, new Rh("er", f));
            try {
                var n = h.document && !h.document.body ? null : qe(h || window)
            } catch (m) {
                n = null
            }
            n ? (h = re(me(h.document).g), Uh(a, new Qh(16384, !!h)), n = h ? new Ve(h.x, h.y, n.width, n.height) : null) : n = null;
            Uh(a, new Rh("vi", n));
            if (n && "1" == l) {
                l = ah(d);
                d = [];
                for (h = 0; h < l.length; h++)(e = Wh(l[h], g)) && d.push(e);
                d.push(n);
                n = Vh(d)
            }
            Xh(a, f, n);
            a.h && (l = Ih() - a.h, Uh(a, new Ph("ts", l)));
            a.h = Ih()
        } else a = Th(), a.g = {}, a.h = Ih(), Uh(a, new Qh(32, !1));
        this.l = a;
        this.g =
            new Lh;
        this.g.set("ve", 4);
        c && Mh(this.g, 1);
        Pb(F(), "ima", "video", "client", "crossdomainTag") && Mh(this.g, 4);
        Pb(F(), "ima", "video", "client", "sdkTag") && Mh(this.g, 8);
        Pb(F(), "ima", "video", "client", "jsTag") && Mh(this.g, 2);
        b && Wb(b, "fullscreen", !1) && Mh(this.g, 16);
        this.h = b = null;
        if (c && (c = Pb(F(), "ima", "video", "client"), c.getEData)) {
            this.h = c.getEData();
            if (c = Pb(F(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi,
                    b && a && (b = Sh(b).g(), a = Sh(a).g(), l = null, Wb(c.g, "er", null) && (l = Wb(c.g, "er", null).g(), l.top += b.top, l.left += b.left, Uh(c, new Rh("er", l))), Wb(c.g, "vi", null) && (n = Wb(c.g, "vi", null).g(), n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = Vh(d), Xh(c, l, b), Uh(c, new Rh("vi", a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        this.g.set("td", Ih() - Jh(b))
    };
    var Zh = new Gh(200),
        $h = function(a, b) {
            try {
                var c = new Yh(a, b);
                a = [];
                var d = Number(c.g.get("eb")),
                    e = c.g.g;
                "eb" in e && delete e.eb;
                var f, g = c.g;
                e = [];
                for (var h in g.g) e.push(h + g.g[h]);
                (f = e.join("_")) && a.push(f);
                if (c.h) {
                    var l = c.h.serialize();
                    l && a.push(l)
                }
                var n, m = c.l;
                f = d;
                g = [];
                f || (f = 0);
                for (var t in m.g) {
                    var B = m.g[t];
                    if (B instanceof Qh) B.g() && (f |= B.w);
                    else {
                        var r, A = m.g[t];
                        (r = A.o ? A.l() : "") && g.push(t + r)
                    }
                }
                g.push("eb" + String(f));
                (n = g.join("_")) && a.push(n);
                c.g.set("eb", d);
                return a.join("_")
            } catch (z) {
                return "tle;" + Fc(z.name,
                    12) + ";" + Fc(z.message, 40)
            }
        },
        ai = function(a, b) {
            th(Zh, "tick", function() {
                var c = $h(b);
                a(c)
            });
            Zh.start();
            Zh.dispatchEvent("tick")
        };
    var bi;
    bi = ["av.key", "js", "unreleased"].slice(-1)[0];
    var ci = [0, 2, 1],
        di = null;
    document.addEventListener && document.addEventListener("mousedown", function(a) {
        di = a
    }, !0);
    window.mb = function(a) {
        if (a) {
            var b;
            if (b = window.event || di) {
                var c;
                (c = b.which ? 1 << ci[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c
            } else b = null;
            if (c = b)
                if (window.css) window.css(a.id, "mb", c, void 0, void 0);
                else if (a) {
                b = a.href;
                var d = b.indexOf("&mb=");
                if (0 > d) c = b + "&mb=" + c;
                else {
                    d += 4;
                    var e = b.indexOf("&", d);
                    c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c
                }
                a.href = 2E3 < c.length ? b : c
            }
        }
    };
    var ei = function(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                d = (void 0 === c ? 0 : c) ? (new E(e.innerWidth, e.innerHeight)).round() : qe(e || window).round()
            } catch (l) {
                d = new E(-12245933, -12245933)
            }
            a = d;
            var f = re(me(b.document).g);
            if (-12245933 == a.width) {
                var g = a.width;
                var h = new G(g, g, g, g)
            } else h = new G(f.y, f.x + a.width, f.y + a.height, f.x);
            return h
        } catch (l) {
            return new G(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var fi = function(a) {
        var b = {};
        x(a, function(c) {
            var d = c.event,
                e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
        });
        db(a, function(c) {
            return null === b[c.event]
        })
    };
    var gi = {
        NONE: 0,
        ig: 1
    };
    var hi = function() {
        this.W = 0;
        this.g = !1;
        this.h = -1;
        this.Ra = !1;
        this.ka = 0
    };
    hi.prototype.isVisible = function() {
        return this.Ra ? .3 <= this.W : .5 <= this.W
    };
    var L = {
            Bd: 0,
            mg: 1
        },
        ii = {
            Bd: 0,
            zg: 1,
            Ag: 2
        },
        ji = {
            668123728: 0,
            668123729: 1
        },
        ki = {
            NONE: 0,
            Cg: 1,
            qg: 2
        },
        li = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        mi = {
            44710407: 0,
            44710408: 1
        },
        ni = {
            42530339: 0,
            42530340: 1
        };
    var oi = function() {
            this.h = null;
            this.o = !1;
            this.w = null
        },
        N = function(a) {
            a.o = !0;
            return a
        },
        pi = function(a, b) {
            a.w = void 0 === b ? null : b
        },
        qi = function(a, b) {
            a.w && x(b, function(c) {
                c = a.w[c];
                void 0 !== c && a.l(c)
            })
        };
    oi.prototype.g = function() {
        return this.h
    };
    var ri = function(a) {
        oi.call(this);
        this.A = a
    };
    p(ri, oi);
    ri.prototype.l = function(a) {
        null === this.h && Rb(this.A, a) && (this.h = a)
    };
    var si = function() {
        oi.call(this)
    };
    p(si, oi);
    si.prototype.l = function(a) {
        null === this.h && "string" === typeof a && (this.h = a)
    };
    var ti = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    ti.prototype.enable = function() {
        this.l = !0
    };
    ti.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    var P = function(a, b, c) {
            a.g[b] || (a.g[b] = new ri(c));
            return a.g[b]
        },
        ui = function(a) {
            a.g.queryid || (a.g.queryid = new si)
        },
        vi = function(a, b, c) {
            (a = a.g[b]) && a.l(c)
        },
        wi = function(a, b) {
            if (Qb(a.h, b)) return a.h[b];
            if (a = a.g[b]) return a.g()
        },
        xi = function(a) {
            var b = {},
                c = Ib(a.g, function(d) {
                    return d.o
                });
            Hb(c, function(d, e) {
                d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.h ? String(d.h) : "";
                0 < d.length && (b[e] = d)
            }, a);
            return b
        },
        yi = function(a) {
            a = xi(a);
            var b = [];
            Hb(a, function(c, d) {
                d in Object.prototype || "undefined" != typeof c && b.push([d,
                    ":", c
                ].join(""))
            });
            return b
        },
        zi = function() {
            var a = R.B().M,
                b = ug();
            a.l && x(Nb(a.g), function(c) {
                return qi(c, b)
            })
        };
    var Ai = !Tc && !dc();
    var Bi = function() {
        this.g = this.Ma = null
    };
    var Ci = function() {};
    Ci.prototype.now = function() {
        return 0
    };
    Ci.prototype.h = function() {
        return 0
    };
    Ci.prototype.l = function() {
        return 0
    };
    Ci.prototype.g = function() {
        return 0
    };
    var Ei = function() {
        if (!Di()) throw Error();
    };
    p(Ei, Ci);
    var Di = function() {
        return !(!D || !D.performance)
    };
    Ei.prototype.now = function() {
        return Di() && D.performance.now ? D.performance.now() : Ci.prototype.now.call(this)
    };
    Ei.prototype.h = function() {
        return Di() && D.performance.memory ? D.performance.memory.totalJSHeapSize || 0 : Ci.prototype.h.call(this)
    };
    Ei.prototype.l = function() {
        return Di() && D.performance.memory ? D.performance.memory.usedJSHeapSize || 0 : Ci.prototype.l.call(this)
    };
    Ei.prototype.g = function() {
        return Di() && D.performance.memory ? D.performance.memory.jsHeapSizeLimit || 0 : Ci.prototype.g.call(this)
    };
    var Fi = function() {};
    Fi.prototype.isVisible = function() {
        return 1 === xg(Pd)
    };
    var Gi = function(a, b) {
            this.g = a;
            this.depth = b
        },
        Ii = function(a) {
            a = a || of();
            var b = Math.max(a.length - 1, 0),
                c = rf(a);
            a = c.g;
            var d = c.h,
                e = c.l,
                f = [];
            c = function(h, l) {
                return null == h ? l : h
            };
            e && f.push(new Gi([e.url, e.hc ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new Gi([d.url, 2], 0));
            a.url && a != e && f.push(new Gi([a.url, 0], c(a.depth, b)));
            var g = Wa(f, function(h, l) {
                return f.slice(0, f.length - l)
            });
            !a.url || (e || d) && a != e || (d = Ke(a.url)) && g.push([new Gi([d, 1], c(a.depth, b))]);
            g.push([]);
            return Wa(g, function(h) {
                return Hi(b, h)
            })
        };
    function Hi(a, b) {
        var c = Xa(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = kb(c + 2);
        d[0] = a;
        x(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    var Ji = function() {
        var a = Ii();
        return Wa(a, function(b) {
            return uf(b)
        })
    };
    var Ki = function() {
            this.h = new Fi;
            this.g = Di() ? new Ei : new Ci
        },
        Mi = function() {
            Li();
            var a = D.document;
            return !!(a && a.body && a.body.getBoundingClientRect && v(D.setInterval) && v(D.clearInterval) && v(D.setTimeout) && v(D.clearTimeout))
        };
    Ki.prototype.setInterval = function(a, b) {
        return D.setInterval(a, b)
    };
    Ki.prototype.clearInterval = function(a) {
        D.clearInterval(a)
    };
    Ki.prototype.setTimeout = function(a, b) {
        return D.setTimeout(a, b)
    };
    Ki.prototype.clearTimeout = function(a) {
        D.clearTimeout(a)
    };
    var Ni = function(a) {
            Li();
            var b = kf() || D;
            Ye(b, a)
        },
        Oi = function() {
            Li();
            return Ji()
        };
    Fa(Ki);
    var Pi = function() {};
    Pi.prototype.getContext = function() {
        if (!this.g) {
            if (!D) throw Error("Context has not been set and window is undefined.");
            this.g = Ki.B()
        }
        return this.g
    };
    Fa(Pi);
    var Li = function() {
        return Pi.B().getContext()
    };
    var Qi = function(a) {
        Jd(this, a, null, null)
    };
    Ra(Qi, Dd);
    var Ri = function(a) {
            this.o = a;
            this.g = -1;
            this.h = this.l = 0
        },
        Si = function(a, b) {
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                if (-1 < a.g) return b.apply(null, ca(d));
                try {
                    return a.g = a.o.g.now(), b.apply(null, ca(d))
                } finally {
                    a.l += a.o.g.now() - a.g, a.g = -1, a.h += 1
                }
            }
        };
    var Ti = function(a, b) {
        this.h = a;
        this.l = b;
        this.g = new Ri(a)
    };
    var R = function() {
        this.o = void 0;
        this.l = this.F = 0;
        this.Z = "ns";
        this.A = -1;
        this.M = new ti;
        pi(N(P(this.M, "mv", ki)), li);
        P(this.M, "omid", L);
        N(P(this.M, "epoh", L));
        N(P(this.M, "epph", L));
        pi(N(P(this.M, "umt", L)), ji);
        N(P(this.M, "phel", L));
        N(P(this.M, "phell", L));
        N(P(this.M, "oseid", Re));
        N(P(this.M, "xdi", L));
        N(P(this.M, "amp", L));
        N(P(this.M, "prf", L));
        N(P(this.M, "gtx", L));
        N(P(this.M, "mvp_lv", L));
        P(this.M, "xosd", L);
        this.M.h.xosd = 1;
        this.M.h.mxd = 1;
        pi(N(P(this.M, "etl", L)), mi);
        N(P(this.M, "msp", L));
        N(P(this.M, "eocm", L));
        N(P(this.M,
            "pnl", ii));
        pi(N(P(this.M, "ecs", L)), ni);
        this.g = new Ti(Li(), this.M);
        this.w = this.h = !1
    };
    R.prototype.Cc = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.M;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("="),
                        e = d[0];
                    d = 1 < d.length ? parseInt(d[1], 10) : 1;
                    isNaN(d) || (e = b.g[e]) && e.l(d)
                }
            }
        }
    };
    Fa(R);
    var Ui = function() {
            var a = "https:";
            D && D.location && "http:" === D.location.protocol && (a = "http:");
            this.h = a;
            this.g = .01;
            this.l = Math.random()
        },
        Vi = function(a, b, c, d, e) {
            if ((d ? a.l : Math.random()) < (e || a.g)) try {
                if (c instanceof sf) var f = c;
                else f = new sf, Ie(c, function(h, l) {
                    var n = f,
                        m = n.w++;
                    wf(n, m, tf(l, h))
                });
                var g = zf(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Ni(g)
            } catch (h) {}
        };
    var Yi = function() {
        var a = Wi;
        this.l = Xi;
        this.A = "jserror";
        this.o = !0;
        this.h = null;
        this.F = this.Fa;
        this.g = void 0 === a ? null : a;
        this.w = !1
    };
    k = Yi.prototype;
    k.pinger = function() {
        return this.l
    };
    k.Rb = function(a) {
        this.h = a
    };
    k.Gc = function(a) {
        this.A = a
    };
    k.Hc = function(a) {
        this.o = a
    };
    k.Ic = function(a) {
        this.w = a
    };
    k.Ua = function(a, b, c) {
        var d = this;
        return Si(R.B().g.g, function() {
            try {
                if (d.g && d.g.h) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (l) {
                var g = d.o;
                try {
                    Pf(e);
                    var h = new Zi($i(l));
                    g = d.F(a, h, void 0, c)
                } catch (n) {
                    d.Fa(217, n)
                }
                if (!g) throw l;
            }
            return f
        })()
    };
    k.Dc = function(a, b, c, d) {
        var e = this;
        return Si(R.B().g.g, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.Ua(a, function() {
                return b.apply(c, g)
            }, d)
        })
    };
    k.Fa = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new sf;
            f.o = !0;
            xf(f, 1, "context", a);
            mf(b) || (b = new Zi($i(b)));
            b.msg && xf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (l) {}
            if (d) try {
                d(g)
            } catch (l) {}
            wf(f, 3, [g]);
            var h = rf();
            h.h && xf(f, 4, "top", h.h.url || "");
            xf(f, 5, "url", h.g.url || "");
            Vi(this.l, e, f, this.w, c)
        } catch (l) {
            try {
                Vi(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: $i(l),
                    url: h && h.g.url
                }, this.w, c)
            } catch (n) {}
        }
        return this.o
    };
    var $i = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        Zi = function(a) {
            lf.call(this, Error(a), {
                message: a
            })
        };
    p(Zi, lf);
    var Xi, aj, Wi = new Of(1, kf()),
        bj = function() {
            var a = kf();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Wi.F())
        };
    (function() {
        Xi = new Ui;
        aj = new Yi;
        var a = kf();
        a && a.document && ("complete" == a.document.readyState ? bj() : Wi.h && ee(a, "load", function() {
            bj()
        }))
    })();
    var cj = function(a) {
            aj.Rb(function(b) {
                x(a, function(c) {
                    c(b)
                })
            })
        },
        dj = function(a, b) {
            return aj.Ua(a, b, void 0)
        },
        ej = function(a, b, c, d) {
            return aj.Dc(a, b, c, d)
        },
        fj = function(a, b, c, d) {
            aj.Fa(a, b, c, d)
        };
    var gj = Date.now(),
        hj = -1,
        ij = -1,
        jj, kj = -1,
        lj = !1,
        mj = function() {
            return Date.now() - gj
        },
        nj = function() {
            var a = R.B().o,
                b = 0 <= ij ? mj() - ij : -1,
                c = lj ? mj() - hj : -1,
                d = 0 <= kj ? mj() - kj : -1;
            if (947190542 == a) return 100;
            if (79463069 == a) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            fj(637, Error(), .001);
            var f = b; - 1 != c && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                }
            void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        };
    var oj = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        Sb = {
            Vb: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            Id: "metric",
            Ub: "pause",
            Mc: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            Jd: "mute",
            Kd: "unmute",
            FULLSCREEN: "fullscreen",
            Fd: "exitfullscreen",
            Lc: "bufferstart",
            Kc: "bufferfinish",
            Gd: "fully_viewable_audible_half_duration_impression",
            Hd: "measurable_impression",
            zd: "abandon",
            Ed: "engagedview",
            IMPRESSION: "impression",
            Cd: "creativeview",
            LOADED: "loaded",
            Ug: "progress",
            gg: "close",
            hg: "collapse",
            Mg: "overlay_resize",
            Ng: "overlay_unmeasurable_impression",
            Og: "overlay_unviewable_impression",
            Qg: "overlay_viewable_immediate_impression",
            Pg: "overlay_viewable_end_of_session_impression",
            Dd: "custom_metric_viewable"
        },
        pj = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        qj = ["start", "firstquartile", "midpoint", "thirdquartile"],
        rj = ["abandon"],
        sj = {
            gh: -1,
            Vb: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            Id: 5,
            Ub: 6,
            Mc: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            Jd: 10,
            Kd: 11,
            FULLSCREEN: 12,
            Fd: 13,
            Gd: 14,
            Hd: 15,
            zd: 16,
            Ed: 17,
            IMPRESSION: 18,
            Cd: 19,
            LOADED: 20,
            Dd: 21,
            Lc: 22,
            Kc: 23
        };
    var Lb = {
            Zf: "addEventListener",
            rg: "getMaxSize",
            sg: "getScreenSize",
            tg: "getState",
            ug: "getVersion",
            Vg: "removeEventListener",
            Dg: "isViewable"
        },
        tj = function(a) {
            var b = a !== a.top,
                c = a.top === Wf(a).ia,
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), Mb(function(g) {
                return v(f[g])
            }) || (e = 1));
            return {
                wa: f,
                wb: e,
                qd: d
            }
        };
    var uj = function(a) {
        return (a = a.document) && v(a.elementFromPoint)
    };
    if (Pd && Pd.URL) {
        var vj, Me = Pd.URL;
        vj = !!Me && 0 < Ne().length;
        aj.Hc(!vj)
    }
    var wj = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = ej(d, c);
        ee(a, b, c, {
            capture: e
        })
    };
    var xj = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };
    function yj(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && Pc(a, "parentElement") ? yj(xe(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var zj = function(a, b, c, d) {
        if (!a) return d;
        d = yj(a, b, c, d);
        if (!d.done) try {
            var e = le(a),
                f = e && F(e);
            return zj(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };
    function Aj(a) {
        var b = !Tc || ld(8);
        return zj(a, function(c, d) {
            c = Pc(d, "style") && d.style && cf(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var Bj = function(a) {
            return zj(a, function(b, c) {
                return !(!Pc(c, "style") || !c.style || "none" !== cf(c, "display"))
            }, function(b) {
                return b
            }, !1) ? !0 : Aj(a)
        },
        Cj = function(a) {
            return new G(a.top, a.right, a.bottom, a.left)
        },
        Dj = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new G(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        Ej = function(a) {
            return null != a && 0 <= a && 1 >= a
        };
    function Fj() {
        var a = Eb;
        return a ? Ya("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return y(a, b)
        }) || y(a, "OMI/") && !y(a, "XiaoMi/") ? !0 : y(a, "Presto") && y(a, "Linux") && !y(a, "X11") && !y(a, "Android") && !y(a, "Mobi") : !1
    }
    function Ij() {
        var a = Eb;
        return y(a, "AppleTV") || y(a, "Apple TV") || y(a, "CFNetwork") || y(a, "tvOS")
    }
    function Jj() {
        var a = Eb;
        return y(a, "sdk_google_atv_x86") || y(a, "Android TV")
    }
    function Kj() {
        return y(Eb, "CrKey") || y(Eb, "PlayStation") || y(Eb, "Roku") || Fj() || y(Eb, "Xbox") || Ij() || Jj()
    };
    var S = function() {
            this.C = !1;
            this.l = !He(D.top);
            this.F = ae() || be();
            var a = of();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(De)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new G(0, 0, 0, 0);
            this.w = new E(0, 0);
            this.o = new E(0, 0);
            this.J = new G(0, 0, 0, 0);
            this.H = null;
            this.A = 0;
            this.D = !1;
            this.h = !(!D || !tj(D).wa);
            Lj(this)
        },
        Mj = function(a, b) {
            b && b.screen && (a.w = new E(b.screen.width, b.screen.height))
        },
        Nj = function(a, b) {
            var c = a.g ? new E(Se(a.g), Te(a.g)) : new E(0, 0);
            b = void 0 ===
                b ? D : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var l = h.scrollHeight,
                        n = h.scrollWidth,
                        m = h.offsetHeight,
                        t = h.offsetWidth;
                    h.clientHeight != m && (l = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, t = g.offsetWidth);
                    l > c.height ? l > m ? (d = l, e = n) : (d = m, e = t) : l < m ? (d = l, e = n) : (d = m, e = t)
                }
                var B = new E(e, d)
            } catch (r) {
                B =
                    new E(-12245933, -12245933)
            }
            a.o = B
        },
        Lj = function(a) {
            D && D.document && (a.J = ei(!1, D, a.F), a.g = ei(!0, D, a.F), a.H = a.g, Nj(a, D), Mj(a, D))
        },
        Oj = function() {
            var a = S.B();
            if (0 < a.A || a.D) return !0;
            a = Li().h.isVisible();
            var b = 0 === xg(Pd);
            return a || b
        };
    Fa(S);
    var Pj = new G(0, 0, 0, 0);
    function Qj(a, b) {
        b = Rj(b);
        return 0 === b ? 0 : Rj(a) / b
    }
    function Rj(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function Sj(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                if (a = xe(a) || a) {
                    var d = le(a),
                        e = d && F(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function Tj(a, b, c) {
        if (!a || !b) return !1;
        b = Ue(a.clone(), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = kf();
        He(d.top) && d.top && d.top.document && (d = d.top);
        if (!uj(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = le(c)) && b.defaultView && b.defaultView.frameElement) && Sj(b, a);
        d = a === c;
        a = !d && a && Ae(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Uj(a, b, c, d) {
        return S.B().l ? !1 : 0 >= Se(a) || 0 >= Te(a) ? !0 : c && d ? dj(208, function() {
            return Tj(a, b, c)
        }) : !1
    };
    var Vj = function(a, b, c) {
        var d = new G(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.h = c
    };
    var Wj = function(a, b, c, d, e, f, g) {
        this.J = a;
        this.F = b;
        this.A = c;
        this.g = d;
        this.w = e;
        this.h = f;
        this.o = g
    };
    Wj.prototype.l = function() {
        return this.J
    };
    var Xj = function(a) {
        this.l = a;
        this.h = 0;
        this.g = null
    };
    Xj.prototype.cancel = function() {
        Li().clearTimeout(this.g);
        this.g = null
    };
    var Yj = function(a) {
        var b = Li();
        a.g = b.setTimeout(Si(R.B().g.g, ej(143, function() {
            a.h++;
            a.l.aa()
        })), nj())
    };
    var Zj = function(a, b, c) {
        this.ia = a;
        this.sa = void 0 === c ? "na" : c;
        this.A = [];
        this.H = !1;
        this.w = new Vj(-1, !0, this);
        this.g = this;
        this.C = b;
        this.I = this.pa = this.D = !1;
        this.N = "uk";
        this.V = !1;
        this.o = !0
    };
    k = Zj.prototype;
    k.hd = function() {
        return this.Nb()
    };
    k.Nb = function() {
        return !1
    };
    k.wc = function() {
        return this.H = !0
    };
    k.Ya = function() {
        return this.g.N
    };
    k.lb = function() {
        return this.g.I
    };
    var bk = function(a, b, c) {
        if (!a.I || (void 0 === c ? 0 : c)) a.I = !0, a.N = b, a.C = 0, a.g != a || ak(a)
    };
    Zj.prototype.getName = function() {
        return this.g.sa
    };
    Zj.prototype.Ia = function() {
        return this.g.O()
    };
    Zj.prototype.O = function() {
        return {}
    };
    Zj.prototype.Ea = function() {
        return this.g.C
    };
    var ck = function(a, b) {
        bb(a.A, b) || (a.A.push(b), b.Za(a.g), b.Ka(a.w), b.za() && (a.D = !0))
    };
    Zj.prototype.X = function() {
        var a = S.B();
        a.g = ei(!0, this.ia, a.F)
    };
    Zj.prototype.Y = function() {
        Mj(S.B(), this.ia)
    };
    Zj.prototype.Xa = function() {
        Nj(S.B(), this.ia)
    };
    Zj.prototype.P = function() {
        return this.w.g
    };
    var dk = function(a) {
        a = a.g;
        a.Y();
        a.X();
        var b = S.B();
        b.J = ei(!1, a.ia, b.F);
        a.Xa();
        a.w.g = a.P()
    };
    Zj.prototype.aa = function() {};
    var ek = function(a, b) {
        a.g != a ? ek(a.g, b) : a.o !== b && (a.o = b, ak(a))
    };
    Zj.prototype.fc = function() {
        return this.g.o
    };
    var fk = function(a) {
        a.D = a.A.length ? Ya(a.A, function(b) {
            return b.za()
        }) : !1
    };
    Zj.prototype.l = function() {
        return this.w
    };
    var gk = function(a) {
            var b = fb(a.A);
            x(b, function(c) {
                c.Ka(a.w)
            })
        },
        ak = function(a) {
            var b = fb(a.A);
            x(b, function(c) {
                c.Za(a.g)
            });
            a.g != a || gk(a)
        };
    k = Zj.prototype;
    k.Za = function(a) {
        var b = this.g,
            c = a.Ea();
        this.g = c >= this.C ? a : this;
        b !== this.g ? (this.o = this.g.o, ak(this)) : this.o !== this.g.o && (this.o = this.g.o, ak(this))
    };
    k.Ka = function(a) {
        if (a.h === this.g) {
            var b;
            if (!(b = this.pa)) {
                b = this.w;
                var c = this.D;
                if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
                b = !c
            }
            this.w = a;
            b && gk(this)
        }
    };
    k.za = function() {
        return this.D
    };
    k.U = function() {
        this.V = !0
    };
    k.ob = function() {
        return this.V
    };
    var hk = function(a, b, c, d) {
        this.element = a;
        this.g = new G(0, 0, 0, 0);
        this.w = new G(0, 0, 0, 0);
        this.h = b;
        this.M = c;
        this.I = d;
        this.H = !1;
        this.timestamp = -1;
        this.o = new Wj(b.l(), this.g, new G(0, 0, 0, 0), 0, 0, mj(), 0)
    };
    k = hk.prototype;
    k.rc = function() {
        return !0
    };
    k.Lb = function() {};
    k.tb = function() {
        if (this.element) {
            var a = this.element,
                b = this.h.g.ia;
            try {
                try {
                    var c = Cj(a.getBoundingClientRect())
                } catch (n) {
                    c = new G(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = ff(a, b),
                    g = f.x,
                    h = f.y;
                var l = new G(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (n) {
                l = Pj.clone()
            }
            this.g = l
        }
    };
    k.Qc = function() {
        this.w = this.h.l().g
    };
    k.Ca = function() {
        this.tb();
        this.o = new Wj(this.h.l(), this.g, this.o.A, this.o.g, this.o.w, mj(), this.o.o)
    };
    k.U = function() {
        if (!this.ob()) {
            var a = this.h;
            cb(a.A, this);
            a.D && this.za() && fk(a);
            this.Lb();
            this.H = !0
        }
    };
    k.ob = function() {
        return this.H
    };
    k.Ia = function() {
        return this.h.Ia()
    };
    k.Ea = function() {
        return this.h.Ea()
    };
    k.Ya = function() {
        return this.h.Ya()
    };
    k.lb = function() {
        return this.h.lb()
    };
    k.Za = function() {};
    k.Ka = function() {
        this.Ca()
    };
    k.za = function() {
        return this.I
    };
    var ik = function(a) {
        this.w = !1;
        this.g = a;
        this.o = Ea
    };
    k = ik.prototype;
    k.Ea = function() {
        return this.g.Ea()
    };
    k.Ya = function() {
        return this.g.Ya()
    };
    k.lb = function() {
        return this.g.lb()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Kb(a, b, c), ck(this.g, d));
        return d
    };
    k.dd = function() {
        return this.pb()
    };
    k.pb = function() {
        return !1
    };
    k.cd = function(a) {
        return this.g.wc() ? (ck(this.g, this), this.o = a, !0) : !1
    };
    k.Za = function(a) {
        0 == a.Ea() && this.o(a.Ya(), this)
    };
    k.Ka = function() {};
    k.za = function() {
        return !1
    };
    k.U = function() {
        this.w = !0
    };
    k.ob = function() {
        return this.w
    };
    k.Ia = function() {
        return {}
    };
    var jk = function(a, b, c) {
            this.l = void 0 === c ? 0 : c;
            this.h = a;
            this.g = null == b ? "" : b
        },
        kk = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        lk = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var mk = function() {
        this.l = 0;
        this.g = [];
        this.h = !1
    };
    mk.prototype.add = function(a, b, c) {
        ++this.l;
        a = new jk(a, b, c);
        this.g.push(new jk(a.h, a.g, a.l + this.l / 4096));
        this.h = !0;
        return this
    };
    var nk = function(a, b) {
            x(b.g, function(c) {
                a.add(c.h, c.g, kk(c))
            })
        },
        ok = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = void 0 === d ? !0 : d;
            Ie(b, function(e, f) {
                d && void 0 === e || a.add(f, e, c)
            });
            return a
        },
        qk = function(a) {
            var b = pk;
            a.h && (jb(a.g, function(c, d) {
                return lk(d, c) ? 1 : lk(c, d) ? -1 : 0
            }), a.h = !1);
            return Xa(a.g, function(c, d) {
                d = b(d);
                return "" + c + ("" != c && "" != d ? "&" : "") + d
            }, "")
        };
    var pk = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Ha(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (bb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var rk = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new mk;
        void 0 !== a && nk(this.g, a);
        b && this.g.add("v", bi, -16)
    };
    rk.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = qk(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };
    var sk = function(a) {
            var b = [],
                c = [];
            Hb(a, function(d, e) {
                if (!(e in Object.prototype) && "undefined" != typeof d) switch (Ha(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                    case "aio":
                    case "nio":
                    case "iem":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        tk = function() {
            if (bi && "unreleased" !== bi) return bi
        },
        uk = function(a) {
            var b = void 0 === b ? 4E3 : b;
            a = a.toString();
            if (!/&v=[^&]+/.test(a)) {
                var c = tk();
                a = c ? a + "&v=" + encodeURIComponent(c) : a
            }
            a = a.substring(0, b);
            Ni(a)
        };
    var vk = function() {
        this.g = 0
    };
    Fa(vk);
    var wk = function(a, b, c) {
        x(a.h, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.h(),
                    g = new mk;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.w);
                d = vk.B();
                g.add("i", d.g++);
                g.add("adk", e);
                ok(g, f);
                e = new rk(g);
                uk(e)
            }
        })
    };
    var xk = function() {
            this.h = this.l = this.o = this.g = 0
        },
        yk = function(a, b, c, d) {
            b && (a.g += c, a.h += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (void 0 === d ? !b : d) a.o = 0
        };
    var zk = [1, .75, .5, .3, 0],
        Ak = function(a) {
            this.h = a = void 0 === a ? zk : a;
            this.g = Wa(this.h, function() {
                return new xk
            })
        },
        Ck = function(a, b) {
            return Bk(a, function(c) {
                return c.g
            }, void 0 === b ? !0 : b)
        },
        Ek = function(a, b) {
            return Dk(a, b, function(c) {
                return c.g
            })
        },
        Fk = function(a, b) {
            return Bk(a, function(c) {
                return c.l
            }, void 0 === b ? !0 : b)
        },
        Gk = function(a, b) {
            return Dk(a, b, function(c) {
                return c.l
            })
        },
        Hk = function(a, b) {
            return Dk(a, b, function(c) {
                return c.h
            })
        },
        Ik = function(a) {
            x(a.g, function(b) {
                b.h = 0
            })
        },
        Jk = function(a, b, c, d, e, f, g) {
            g = void 0 ===
                g ? !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.h.length; f++) {
                var h = a.h[f],
                    l = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                yk(a.g[f], g && l, e, !g || h)
            }
        },
        Bk = function(a, b, c) {
            a = Wa(a.g, function(d) {
                return b(d)
            });
            return c ? a : Kk(a)
        },
        Dk = function(a, b, c) {
            var d = ab(a.h, function(e) {
                return b <= e
            });
            return -1 == d ? 0 : c(a.g[d])
        },
        Kk = function(a) {
            return Wa(a, function(b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c]
            })
        };
    var Lk = function() {
            this.h = new Ak;
            this.V = new xk;
            this.H = this.F = -1;
            this.$ = 1E3;
            this.aa = new Ak([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.N = this.I = -1
        },
        Mk = function(a, b) {
            return Fk(a.h, void 0 === b ? !0 : b)
        };
    Lk.prototype.K = function(a, b, c, d) {
        this.F = -1 != this.F ? Math.min(this.F, b.W) : b.W;
        this.H = Math.max(this.H, b.W);
        this.I = -1 != this.I ? Math.min(this.I, b.ka) : b.ka;
        this.N = Math.max(this.N, b.ka);
        Jk(this.aa, b.ka, c.ka, b.g, a, d);
        Jk(this.h, b.W, c.W, b.g, a, d);
        c = d || c.Ra != b.Ra ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        yk(this.V, c, a, b)
    };
    Lk.prototype.Ta = function() {
        return this.V.l >= this.$
    };
    var Nk = new G(0, 0, 0, 0),
        Ok = function(a, b, c) {
            J.call(this);
            this.position = Nk.clone();
            this.Gb = this.yb();
            this.pc = -2;
            this.Vf = Date.now();
            this.sd = -1;
            this.kc = b;
            this.Cb = null;
            this.xb = !1;
            this.Pb = null;
            this.opacity = -1;
            this.Sf = c;
            this.ud = this.qc = Ea;
            this.na = new Bi;
            this.na.Ma = a;
            this.na.g = a;
            this.Sa = !1;
            this.Pa = {
                yc: null,
                xc: null
            };
            this.pd = !0;
            this.rb = null;
            this.$a = !1;
            R.B().F++;
            this.ea = this.ac();
            this.rd = -1;
            this.Z = null;
            a = this.M = new ti;
            P(a, "od", gi);
            N(P(a, "opac", L));
            N(P(a, "gcm", L));
            P(a, "cm", L);
            a.h.cm = 1;
            N(P(a, "sbeos", L));
            N(P(a, "prf",
                L));
            N(P(a, "mwt", L));
            N(P(a, "lcs", L));
            P(a, "iogeo", L);
            N(P(a, "osddt", L));
            N(P(a, "nrl", L));
            (a = this.na.Ma) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (Ai && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Kc()) : a.getAttribute("data-" + Kc())) && (S.B().h = !0);
            1 == this.Sf ? vi(this.M, "od", 1) : vi(this.M, "od", 0)
        };
    p(Ok, J);
    k = Ok.prototype;
    k.R = function() {
        this.na.g && (this.Pa.yc && (fe(this.na.g, "mouseover", this.Pa.yc), this.Pa.yc = null), this.Pa.xc && (fe(this.na.g, "mouseout", this.Pa.xc), this.Pa.xc = null));
        this.rb && this.rb.U();
        this.Z && this.Z.U();
        delete this.Gb;
        delete this.qc;
        delete this.ud;
        delete this.na.Ma;
        delete this.na.g;
        delete this.Pa;
        delete this.rb;
        delete this.Z;
        delete this.M;
        J.prototype.R.call(this)
    };
    k.Qa = function() {
        return this.Z ? this.Z.g : this.position
    };
    k.Cc = function(a) {
        R.B().Cc(a)
    };
    k.za = function() {
        return !1
    };
    k.yb = function() {
        return new Lk
    };
    k.oa = function() {
        return this.Gb
    };
    var Pk = function(a, b) {
            b != a.$a && (a.$a = b, a = S.B(), b ? a.A++ : 0 < a.A && a.A--)
        },
        Qk = function(a, b, c) {
            a.sb(c ? a.ea.W : 0, b, c, !1, {}, a.zb(b), a.ea.ka)
        },
        Rk = function(a) {
            return a.Z ? a.Z.getName() : R.B().Z
        },
        Sk = function(a, b) {
            if (a.Z) {
                if (b.getName() === a.Z.getName()) return;
                a.Z.U();
                a.Z = null
            }
            b = b.create(a.na.g, a.M, a.za());
            if (b = null != b && b.rc() ? b : null) a.Z = b
        },
        Tk = function(a, b, c) {
            if (!a.Cb || -1 === b.h || -1 === a.Cb.h) return 0;
            a = b.h - a.Cb.h;
            return a > c ? 0 : a
        };
    Ok.prototype.Xc = function(a) {
        return Tk(this, a, 1E4)
    };
    var Uk = function(a, b, c) {
            if (a.Z) {
                a.Z.Ca();
                var d = a.Z.o,
                    e = d.l(),
                    f = e.g;
                if (null != d.A) {
                    var g = d.F;
                    a.Pb = new je(g.left - f.left, g.top - f.top)
                }
                f = a.Sb() ? Math.max(d.g, d.w) : d.g;
                f = .99 <= f ? 1 : f;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = 1 === wi(a.M, "osddt");
                "nis" == a.Z.getName() && (e = !0);
                "gsv" == a.Z.getName() && (e = !0);
                e ? (e = a.Xc(d), a.Cb = d, a.sb(f, b, c, !1, g, e, d.o)) : a.sb(f, b, c, !1, g, a.zb(b), d.o)
            }
        },
        Vk = function(a) {
            if (a.xb && a.rb) {
                var b = 1 == wi(a.M, "od"),
                    c = S.B().g,
                    d = a.rb,
                    e = Rk(a),
                    f = new E(Se(c), Te(c));
                c = a.Sb();
                a = {
                    Tf: e,
                    Pb: a.Pb,
                    Yf: f,
                    Sb: c,
                    W: a.ea.W,
                    Wf: b
                };
                if (b = d.l) {
                    b.Ca();
                    e = b.o;
                    f = e.l().g;
                    var g = null,
                        h = null;
                    null != e.A && f && (g = e.F, g = new je(g.left - f.left, g.top - f.top), h = new E(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.w) : e.g;
                    c = {
                        Tf: b.getName(),
                        Pb: g,
                        Yf: h,
                        Sb: c,
                        Wf: !1,
                        W: e
                    }
                } else c = null;
                c && wk(d, a, c)
            }
        };
    k = Ok.prototype;
    k.sb = function(a, b, c, d, e, f, g) {
        this.Sa || (this.xb && (a = this.Wb(a, c, e, g), d = d && this.ea.W >= (this.Ra() ? .3 : .5), this.Jc(f, a, d), this.kc = b, 0 < a.W && -1 === this.rd && (this.rd = b), -1 == this.sd && this.Ta() && (this.sd = b), -2 == this.pc && (this.pc = Rj(this.Qa()) ? a.W : -1), this.ea = a, c && (this.ea.W = 0)), this.qc(this))
    };
    k.Jc = function(a, b, c) {
        this.oa().K(a, b, this.ea, c)
    };
    k.ac = function() {
        return new hi
    };
    k.Wb = function(a, b, c, d) {
        c = this.ac();
        c.g = b;
        b = Li().h;
        b = 0 === xg(Pd) ? -1 : b.isVisible() ? 0 : 1;
        c.h = b;
        c.W = this.Xb(a);
        c.Ra = this.Ra();
        c.ka = d;
        return c
    };
    k.Yc = function(a, b) {
        if (-1 == this.kc) return 0;
        a = a - this.kc || 1;
        return a > b ? 1 : a
    };
    k.zb = function(a) {
        return this.Yc(a, 1E4)
    };
    k.Xb = function(a) {
        return 0 === this.opacity && 1 === wi(this.M, "opac") ? 0 : a
    };
    k.Ra = function() {
        return !1
    };
    k.Sb = function() {
        return !1
    };
    k.ra = function() {
        return 0
    };
    k.Ta = function() {
        return this.Gb.Ta()
    };
    var Wk = function(a, b, c) {
        b && (a.qc = b);
        c && (a.ud = c)
    };
    var Xk = "StopIteration" in q ? q.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Yk = function() {};
    Yk.prototype.next = function() {
        throw Xk;
    };
    Yk.prototype.Od = function() {
        return this
    };
    var Zk = function() {
            this.o = this.g = this.l = this.h = this.w = 0
        },
        $k = function(a) {
            var b = {};
            var c = w() - a.w;
            b = (b.ptlt = c, b);
            (c = a.h) && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var al = function() {
        hi.call(this);
        this.l = !1;
        this.volume = void 0;
        this.w = !1;
        this.o = -1
    };
    p(al, hi);
    var bl = function(a) {
        return Ej(a.volume) && .1 <= a.volume
    };
    var cl = function() {
            var a = {};
            this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a);
            this.g = {};
            for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
            this.l = 0
        },
        dl = function(a, b) {
            var c = a.h[b],
                d = c[1];
            a.l += c[0];
            0 < d && 0 == a.g[b] && (a.g[b] = 1)
        },
        fl = function(a) {
            return el(a, Ob(a.h))
        },
        el = function(a, b) {
            var c = 0,
                d;
            for (d in a.g) bb(b, d) &&
                1 == a.g[d] && (c += a.h[d][1], a.g[d] = 2);
            return c
        },
        gl = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.h[c][1]
            }
            return b
        };
    var hl = function() {
        this.h = this.l = 0
    };
    hl.prototype.g = function() {
        return this.l
    };
    var il = function(a, b, c) {
        32 <= b || (a.h & 1 << b && !c ? a.l &= ~(1 << b) : a.h & 1 << b || !c || (a.l |= 1 << b), a.h |= 1 << b)
    };
    var jl = function() {
        Lk.call(this);
        this.l = new xk;
        this.P = this.C = this.L = 0;
        this.J = -1;
        this.ma = new xk;
        this.w = new xk;
        this.g = new Ak;
        this.A = this.o = -1;
        this.D = new xk;
        this.$ = 2E3;
        this.O = new hl;
        this.Y = new hl;
        this.X = new hl
    };
    p(jl, Lk);
    var kl = function(a, b, c) {
        var d = a.P;
        lj || c || -1 == a.J || (d += b - a.J);
        return d
    };
    jl.prototype.K = function(a, b, c, d) {
        if (!b.w) {
            Lk.prototype.K.call(this, a, b, c, d);
            var e = bl(b) && bl(c),
                f = .5 <= (d ? Math.min(b.W, c.W) : c.W);
            Ej(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
            f && (this.L += a, this.C += e ? a : 0);
            Jk(this.g, b.W, c.W, b.g, a, d, e);
            yk(this.l, !0, a);
            yk(this.w, e, a);
            yk(this.D, c.l, a);
            yk(this.ma, e && !f, a);
            a = Math.floor(b.o / 1E3);
            il(this.O, a, b.isVisible());
            il(this.Y, a, 1 <= b.W);
            il(this.X, a, bl(b))
        }
    };
    var ll = function() {
        this.g = !1
    };
    var ml = function(a, b) {
        this.g = !1;
        this.o = a;
        this.J = b;
        this.h = 0
    };
    p(ml, ll);
    var nl = function(a, b) {
        return a.l(b) ? (b = a.J.report(a.o, b), a.h |= b, 0 == b) : !1
    };
    ml.prototype.l = function() {
        return !0
    };
    ml.prototype.w = function() {
        return !1
    };
    ml.prototype.getId = function() {
        var a = this,
            b = Tb(function(c) {
                return c == a.o
            });
        return sj[b].toString()
    };
    ml.prototype.toString = function() {
        var a = "";
        this.w() && (a += "c");
        this.g && (a += "s");
        0 < this.h && (a += ":" + this.h);
        return this.getId() + a
    };
    var ol = function(a, b, c, d) {
        hk.call(this, a, b, c, d)
    };
    p(ol, hk);
    ol.prototype.D = function(a) {
        var b = 1 == wi(this.M, "od");
        return Uj(a, this.w, this.element, b)
    };
    ol.prototype.Rc = function() {
        var a = this.h.l();
        this.timestamp = -1 === a.time ? mj() : a.time
    };
    ol.prototype.Ca = function() {
        this.Rc();
        this.tb();
        this.Qc();
        var a = this.g;
        var b = this.w;
        a = a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new G(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new G(0, 0, 0, 0);
        b = a.top >= a.bottom || a.left >= a.right ? new G(0, 0, 0, 0) : a;
        a = this.h.l();
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.D(b) ? b = new G(0, 0, 0, 0) : (c = S.B().w, e = new G(0, c.height, c.width, 0), c = Qj(b, this.g), d = Qj(b,
            S.B().g), e = Qj(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new G(0, 0, 0, 0) : Ue(b, -this.g.left, -this.g.top);
        this.o = new Wj(a, this.g, b, c, d, this.timestamp, e)
    };
    ol.prototype.getName = function() {
        return this.h.getName()
    };
    var pl = new G(0, 0, 0, 0),
        ql = function(a, b, c) {
            hk.call(this, null, a, b, c);
            this.F = a.fc();
            this.A = 0
        };
    p(ql, ol);
    k = ql.prototype;
    k.rc = function() {
        this.l();
        return !0
    };
    k.Ka = function() {
        ol.prototype.Ca.call(this)
    };
    k.Rc = function() {};
    k.tb = function() {};
    k.Ca = function() {
        this.l();
        ol.prototype.Ca.call(this)
    };
    k.Za = function(a) {
        a = a.fc();
        a !== this.F && (a ? this.l() : (S.B().g = new G(0, 0, 0, 0), this.g = new G(0, 0, 0, 0), this.w = new G(0, 0, 0, 0), this.timestamp = -1));
        this.F = a
    };
    var rl = {},
        sl = (rl.firstquartile = 0, rl.midpoint = 1, rl.thirdquartile = 2, rl.complete = 3, rl),
        tl = function(a, b, c, d, e, f) {
            e = void 0 === e ? null : e;
            f = void 0 === f ? [] : f;
            Ok.call(this, b, c, d);
            this.Yb = 0;
            this.Aa = {};
            this.da = new cl;
            this.ad = {};
            this.ha = "";
            this.Na = null;
            this.sa = !1;
            this.g = [];
            this.A = e;
            this.C = f;
            this.w = null;
            this.l = -1;
            this.X = this.H = void 0;
            this.K = this.I = 0;
            this.P = -1;
            this.ma = this.aa = !1;
            this.O = this.D = this.h = this.gb = this.pa = 0;
            new Ak;
            this.V = this.Y = 0;
            this.$ = -1;
            this.ca = 0;
            this.L = Ea;
            this.N = [this.yb()];
            this.Xa = 2;
            this.Wa = {};
            this.Wa.pause =
                "p";
            this.Wa.resume = "r";
            this.Wa.skip = "s";
            this.Wa.mute = "m";
            this.Wa.unmute = "um";
            this.Wa.exitfullscreen = "ef";
            this.o = null
        };
    p(tl, Ok);
    tl.prototype.za = function() {
        return !0
    };
    tl.prototype.td = function() {
        if (this.A) {
            var a = this.A;
            a.g || (a.g = nl(a, this))
        }
    };
    var ul = function(a) {
        return void 0 === a ? a : Number(a) ? xj(a, 3) : 0
    };
    k = tl.prototype;
    k.Xc = function(a) {
        return Tk(this, a, Math.max(1E4, this.l / 3))
    };
    k.zb = function(a) {
        return 2 == this.ca ? 0 : Ok.prototype.Yc.call(this, a, Math.max(1E4, this.l / 3))
    };
    k.sb = function(a, b, c, d, e, f, g) {
        var h = this,
            l = this.L(this) || {};
        Yb(l, e);
        this.l = l.duration || this.l;
        this.H = l.isVpaid || this.H;
        this.X = l.isYouTube || this.X;
        e = vl(this, b);
        1 === wl(this) && (f = e);
        Ok.prototype.sb.call(this, a, b, c, d, l, f, g);
        this.A && this.A.g && x(this.C, function(n) {
            n.g || (n.g = nl(n, h))
        })
    };
    k.Jc = function(a, b, c) {
        Ok.prototype.Jc.call(this, a, b, c);
        xl(this).K(a, b, this.ea, c);
        this.ma = bl(this.ea) && bl(b); - 1 == this.P && this.aa && (this.P = this.oa().l.g);
        this.da.l = 0;
        a = this.Ta();
        b.isVisible() && dl(this.da, "vs");
        a && dl(this.da, "vw");
        Ej(b.volume) && dl(this.da, "am");
        bl(b) && dl(this.da, "a");
        this.$a && dl(this.da, "f"); - 1 != b.h && (dl(this.da, "bm"), 1 == b.h && dl(this.da, "b"));
        bl(b) && b.isVisible() && dl(this.da, "avs");
        this.ma && a && dl(this.da, "avw");
        0 < b.W && dl(this.da, "pv");
        yl(this, this.oa().l.g, !0) && dl(this.da, "gdr");
        2E3 <=
            Gk(this.oa().h, 1) && dl(this.da, "pmx")
    };
    k.yb = function() {
        return new jl
    };
    k.oa = function() {
        return this.Gb
    };
    var xl = function(a, b) {
        var c;
        null != b && b < a.N.length ? c = b : c = a.N.length - 1;
        return a.N[c]
    };
    tl.prototype.ac = function() {
        return new al
    };
    tl.prototype.Wb = function(a, b, c, d) {
        a = Ok.prototype.Wb.call(this, a, b, c, void 0 === d ? -1 : d);
        a.l = this.$a;
        a.w = 2 == this.ca;
        a.volume = c.volume;
        Ej(a.volume) || (this.pa++, b = this.ea, Ej(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.o = void 0 !== c && 0 <= c ? c : -1;
        return a
    };
    var wl = function(a) {
            var b = !!wi(R.B().M, "umt");
            return a.H || !b && !a.X ? 0 : 1
        },
        vl = function(a, b) {
            b = a.zb(b);
            var c = a.L(a) || {};
            c = void 0 !== c.currentTime ? c.currentTime : a.I;
            var d = c - a.I,
                e = 0;
            0 <= d ? (a.K += b, a.V += Math.max(b - d, 0), e = Math.min(d, a.K)) : a.Y += Math.abs(d);
            0 != d && (a.K = 0); - 1 == a.$ && 0 < d && (a.$ = 0 <= kj ? mj() - kj : -1);
            a.I = c;
            return e
        };
    tl.prototype.Xb = function(a) {
        return S.B().C ? 0 : this.$a ? 1 : Ok.prototype.Xb.call(this, a)
    };
    tl.prototype.ra = function() {
        return 1
    };
    tl.prototype.getDuration = function() {
        return this.l
    };
    var zl = function(a, b) {
            Ya(a.C, function(c) {
                return c.o == b.o
            }) || a.C.push(b)
        },
        yl = function(a, b, c) {
            return 15E3 <= b ? !0 : a.aa ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.P ? b >= a.P : !1 : !1
        },
        Al = function(a) {
            var b = {},
                c = S.B();
            b.insideIframe = c.l;
            b.unmeasurable = a.Sa;
            b.position = a.Qa();
            b.exposure = a.ea.W;
            b.documentSize = c.o;
            b.viewportSize = new E(Se(c.g), Te(c.g));
            null != a.o && (b.presenceData = a.o);
            b.screenShare = a.ea.ka;
            return b
        },
        Bl = function(a) {
            var b = xj(a.ea.W, 2),
                c = a.da.l,
                d = a.ea,
                e = xl(a),
                f = ul(e.o),
                g = ul(e.A),
                h = ul(d.volume),
                l = xj(e.F, 2),
                n = xj(e.H, 2),
                m = xj(d.W, 2),
                t = xj(e.I, 2),
                B = xj(e.N, 2);
            d = xj(d.ka, 2);
            a = a.Qa().clone();
            a.round();
            e = Mk(e, !1);
            return {
                Xf: b,
                nb: c,
                Hb: f,
                Db: g,
                ib: h,
                Ib: l,
                Eb: n,
                W: m,
                Jb: t,
                Fb: B,
                ka: d,
                position: a,
                Ob: e
            }
        },
        Dl = function(a, b) {
            Cl(a.g, b, function() {
                return {
                    Xf: 0,
                    nb: void 0,
                    Hb: -1,
                    Db: -1,
                    ib: -1,
                    Ib: -1,
                    Eb: -1,
                    W: -1,
                    Jb: -1,
                    Fb: -1,
                    ka: -1,
                    position: void 0,
                    Ob: []
                }
            });
            a.g[b] = Bl(a)
        },
        Cl = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Gl = function(a, b, c) {
            var d = a.ad[b];
            if (null != d) return d;
            d = El(a, b);
            var e = Tb(function(f) {
                return f == b
            });
            c = Fl(a, d, d, c,
                sl[Sb[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (c.std = "csm", c.ic = el(a.da, ["gdr"]));
            return c
        },
        Hl = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        Fl = function(a, b, c, d, e) {
            if (a.Sa) return {
                "if": 0
            };
            var f = a.Qa().clone();
            f.round();
            var g = S.B(),
                h = R.B(),
                l = a.oa(),
                n = Rk(a),
                m = {};
            m["if"] = g.l ? 1 : void 0;
            m.sdk = a.w ? a.w : void 0;
            m.t = a.Vf;
            m.p = [f.top, f.left, f.bottom, f.right];
            m.tos = Ck(l.h, !1);
            m.mtos = Mk(l);
            m.mcvt = l.V.l;
            m.ps = void 0;
            m.vht = kl(l, mj(), 2 == a.ca);
            m.mut = l.ma.l;
            m.a = ul(a.ea.volume);
            m.mv = ul(l.A);
            m.fs = a.$a ? 1 : 0;
            m.ft = l.D.g;
            m.at = l.w.g;
            m.as = .1 <= l.o ? 1 : 0;
            m.atos = Ck(l.g);
            m.ssb = Ck(l.aa, !1);
            m.amtos = Fk(l.g);
            m.uac = a.pa;
            m.vpt = l.l.g;
            "nio" == n && (m.nio = 1, m.avms = "nio");
            m.gmm = "4";
            m.gdr = yl(a, l.l.g, !0) ? 1 : 0;
            m.efpf = a.Xa;
            if ("gsv" == n || "nis" == n) f = a.Z, 0 < f.A && (m.nnut = f.A);
            m.tcm = wl(a);
            m.nmt = a.Y;
            m.bt = a.V;
            m.pst = a.$;
            m.vpaid = a.H;
            m.dur = a.l;
            m.vmtime = a.I;
            m.is = a.da.l;
            1 <= a.g.length && (m.i0 = a.g[0].nb, m.a0 = [a.g[0].ib], m.c0 = [a.g[0].W], m.ss0 = [a.g[0].ka], f = a.g[0].position, m.p0 = f ? [f.top, f.left, f.bottom, f.right] : void 0);
            2 <= a.g.length && (m.i1 = a.g[1].nb, m.a1 = Hl(a.g[1].Hb, a.g[1].ib, a.g[1].Db), m.c1 = Hl(a.g[1].Ib, a.g[1].W, a.g[1].Eb), m.ss1 = Hl(a.g[1].Jb, a.g[1].ka, a.g[1].Fb), f = a.g[1].position, m.p1 = f ? [f.top, f.left, f.bottom, f.right] : void 0, m.mtos1 = a.g[1].Ob);
            3 <= a.g.length && (m.i2 = a.g[2].nb, m.a2 = Hl(a.g[2].Hb, a.g[2].ib, a.g[2].Db), m.c2 = Hl(a.g[2].Ib, a.g[2].W, a.g[2].Eb), m.ss2 = Hl(a.g[2].Jb, a.g[2].ka, a.g[2].Fb), f = a.g[2].position, m.p2 = f ? [f.top, f.left, f.bottom, f.right] : void 0, m.mtos2 = a.g[2].Ob);
            4 <= a.g.length && (m.i3 = a.g[3].nb, m.a3 = Hl(a.g[3].Hb,
                a.g[3].ib, a.g[3].Db), m.c3 = Hl(a.g[3].Ib, a.g[3].W, a.g[3].Eb), m.ss3 = Hl(a.g[3].Jb, a.g[3].ka, a.g[3].Fb), f = a.g[3].position, m.p3 = f ? [f.top, f.left, f.bottom, f.right] : void 0, m.mtos3 = a.g[3].Ob);
            m.cs = gl(a.da);
            b && (m.ic = fl(a.da), m.dvpt = l.l.h, m.dvs = Hk(l.h, .5), m.dfvs = Hk(l.h, 1), m.davs = Hk(l.g, .5), m.dafvs = Hk(l.g, 1), c && (l.l.h = 0, Ik(l.h), Ik(l.g)), a.Ta() && (m.dtos = l.L, m.dav = l.C, m.dtoss = a.Yb + 1, c && (l.L = 0, l.C = 0, a.Yb++)), m.dat = l.w.h, m.dft = l.D.h, c && (l.w.h = 0, l.D.h = 0));
            m.ps = [g.o.width, g.o.height];
            m.bs = [Se(g.g), Te(g.g)];
            m.scs = [g.w.width,
                g.w.height
            ];
            m.dom = g.domain;
            a.gb && (m.vds = a.gb);
            if (0 < a.C.length || a.A) b = fb(a.C), a.A && b.push(a.A), m.pings = Wa(b, function(t) {
                return t.toString()
            });
            b = Wa(Va(a.C, function(t) {
                return t.w()
            }), function(t) {
                return t.getId()
            });
            gb(b);
            m.ces = b;
            a.h && (m.vmer = a.h);
            a.D && (m.vmmk = a.D);
            a.O && (m.vmiec = a.O);
            m.avms = Rk(a);
            a.Z && Yb(m, a.Z.Ia());
            d ? (m.c = xj(a.ea.W, 2), m.ss = xj(a.ea.ka, 2)) : m.tth = mj() - jj;
            m.mc = xj(l.H, 2);
            m.nc = xj(l.F, 2);
            m.mv = ul(l.A);
            m.nv = ul(l.o);
            m.lte = xj(a.pc, 2);
            d = xl(a, e);
            Mk(l);
            m.qmtos = Mk(d);
            m.qnc = xj(d.F, 2);
            m.qmv = ul(d.A);
            m.qnv =
                ul(d.o);
            m.qas = .1 <= d.o ? 1 : 0;
            m.qi = a.ha;
            m.avms || (m.avms = "geo");
            m.psm = l.O.h;
            m.psv = l.O.g();
            m.psfv = l.Y.g();
            m.psa = l.X.g();
            h = yi(h.M);
            h.length && (m.veid = h);
            a.o && Yb(m, $k(a.o));
            return m
        },
        El = function(a, b) {
            if (bb(rj, b)) return !0;
            var c = a.Aa[b];
            return void 0 !== c ? (a.Aa[b] = !0, !c) : !1
        };
    var Il = w(),
        Ll = function() {
            this.g = {};
            var a = F();
            Jl(this, a, document);
            var b = Kl();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) Jl(this, c, c.document);
                    Jl(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        Kl = function() {
            var a = document.documentElement;
            try {
                if (!He(F().top)) return "2";
                var b = [],
                    c = F(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        Jl = function(a, b, c) {
            wj(c, "mousedown", function() {
                return Ml(a)
            }, 301);
            wj(b,
                "scroll",
                function() {
                    return Nl(a)
                }, 302);
            wj(c, "touchmove", function() {
                return Ol(a)
            }, 303);
            wj(c, "mousemove", function() {
                return Pl(a)
            }, 304);
            wj(c, "keydown", function() {
                return Ql(a)
            }, 305)
        },
        Ml = function(a) {
            Hb(a.g, function(b) {
                1E5 < b.l || ++b.l
            })
        },
        Nl = function(a) {
            Hb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        Ol = function(a) {
            Hb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        Ql = function(a) {
            Hb(a.g, function(b) {
                1E5 < b.h || ++b.h
            })
        },
        Pl = function(a) {
            Hb(a.g, function(b) {
                1E5 < b.o || ++b.o
            })
        };
    var Rl = function() {
            this.g = [];
            this.h = []
        },
        Sl = function(a, b) {
            return $a(a.g, function(c) {
                return c.ha == b
            })
        },
        Tl = function(a, b) {
            return b ? $a(a.g, function(c) {
                return c.na.Ma == b
            }) : null
        },
        Ul = function(a, b) {
            return $a(a.h, function(c) {
                return 2 == c.ra() && c.ha == b
            })
        },
        Wl = function() {
            var a = Vl;
            return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : eb(a.h, a.g)
        };
    Rl.prototype.reset = function() {
        this.g = [];
        this.h = []
    };
    var Xl = function(a, b) {
            a = 1 == b.ra() ? a.g : a.h;
            var c = Za(a, function(d) {
                return d == b
            });
            return -1 != c ? (a.splice(c, 1), b.Z && b.Z.Lb(), b.U(), !0) : !1
        },
        Yl = function(a) {
            var b = Vl;
            if (Xl(b, a)) {
                switch (a.ra()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return Ul(b, a.ha)
                        };
                        break;
                    case 1:
                        c = function() {
                            return Sl(b, a.ha)
                        }
                }
                for (var d = c(); d; d = c()) Xl(b, d)
            }
        },
        Zl = function(a) {
            var b = Vl;
            a = Va(a, function(c) {
                return !Tl(b, c.na.Ma)
            });
            b.g.push.apply(b.g, ca(a))
        },
        $l = function(a) {
            var b = Vl,
                c = [];
            x(a, function(d) {
                Ya(b.g, function(e) {
                    return e.na.Ma ===
                        d.na.Ma && e.ha === d.ha
                }) || (b.g.push(d), c.push(d))
            })
        };
    Fa(Rl);
    var Vl = Rl.B();
    var am = function() {
            this.g = this.h = null
        },
        bm = function(a, b) {
            if (null == a.h) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = $a(a.h, function(d) {
                return null != d && d.dd()
            });
            a.g && (a.g.cd(c) ? dk(a.g.g) : b(a.g.g.Ya(), a.g));
            return null != a.g
        };
    Fa(am);
    var dm = function(a) {
        a = cm(a);
        ik.call(this, a.length ? a[a.length - 1] : new Zj(D, 0));
        this.l = a;
        this.h = null
    };
    p(dm, ik);
    k = dm.prototype;
    k.getName = function() {
        return (this.h ? this.h : this.g).getName()
    };
    k.Ia = function() {
        return (this.h ? this.h : this.g).Ia()
    };
    k.Ea = function() {
        return (this.h ? this.h : this.g).Ea()
    };
    k.cd = function(a) {
        var b = !1;
        x(this.l, function(c) {
            c.wc() && (b = !0)
        });
        b && (this.o = a, ck(this.g, this));
        return b
    };
    k.U = function() {
        x(this.l, function(a) {
            a.U()
        });
        ik.prototype.U.call(this)
    };
    k.dd = function() {
        return Ya(this.l, function(a) {
            return a.hd()
        })
    };
    k.pb = function() {
        return Ya(this.l, function(a) {
            return a.Nb()
        })
    };
    k.Kb = function(a, b, c) {
        return new ol(a, this.g, b, c)
    };
    k.Ka = function(a) {
        this.h = a.h
    };
    var cm = function(a) {
        if (!a.length) return [];
        a = Va(a, function(c) {
            return null != c && c.hd()
        });
        for (var b = 1; b < a.length; b++) ck(a[b - 1], a[b]);
        return a
    };
    var em = function(a, b, c, d) {
        hk.call(this, a, b, c, d);
        this.C = this.J = null
    };
    p(em, ol);
    em.prototype.rc = function() {
        var a = this;
        this.C || (this.C = mj());
        if (dj(298, function() {
                return fm(a)
            })) return !0;
        bk(this.h, "msf");
        return !1
    };
    var hm = function(a, b) {
            try {
                if (b.length) {
                    a.J || (a.J = mj());
                    var c = gm(b),
                        d = ff(a.element, a.h.g.ia),
                        e = d.x,
                        f = d.y;
                    a.g = new G(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = Cj(c.intersectionRect);
                    a.w = Ue(g, a.g.left - g.left, a.g.top - g.top)
                }
            } catch (h) {
                a.Lb(), fj(299, h)
            }
        },
        gm = function(a) {
            return Xa(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    em.prototype.tb = function() {};
    em.prototype.D = function() {
        return !1
    };
    em.prototype.Qc = function() {};
    em.prototype.Ia = function() {
        var a = {};
        return Object.assign(this.h.Ia(), (a.niot_obs = this.C, a.niot_cbk = this.J, a))
    };
    var im = {
            threshold: [0, .3, .5, .75, 1]
        },
        jm = function(a, b, c, d) {
            em.call(this, a, b, c, d);
            this.A = this.F = this.l = null
        };
    p(jm, em);
    jm.prototype.getName = function() {
        return "nio"
    };
    jm.prototype.Lb = function() {
        if (this.l && this.element) try {
            this.l.unobserve(this.element), this.F ? (this.F.unobserve(this.element), this.F = null) : this.A && (this.A.disconnect(), this.A = null)
        } catch (a) {}
    };
    var km = function(a) {
            return a.l && a.l.takeRecords ? a.l.takeRecords() : []
        },
        fm = function(a) {
            if (!a.element) return !1;
            var b = a.element,
                c = a.h.g.ia,
                d = R.B().g.g;
            a.l = new c.IntersectionObserver(Si(d, function(e) {
                return hm(a, e)
            }), im);
            d = Si(d, function() {
                a.l.unobserve(b);
                a.l.observe(b);
                hm(a, km(a))
            });
            c.ResizeObserver ? (a.F = new c.ResizeObserver(d), a.F.observe(b)) : c.MutationObserver && (a.A = new q.MutationObserver(d), a.A.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.l.observe(b);
            hm(a, km(a));
            return !0
        };
    jm.prototype.Ca = function() {
        var a = km(this);
        0 < a.length && hm(this, a);
        em.prototype.Ca.call(this)
    };
    var lm = function(a) {
        a = void 0 === a ? D : a;
        ik.call(this, new Zj(a, 2))
    };
    p(lm, ik);
    lm.prototype.getName = function() {
        return "nio"
    };
    lm.prototype.pb = function() {
        var a = Eb;
        return a && 0 <= a.toLowerCase().indexOf("cobalt") ? !1 : "exc" !== R.B().Z && !S.B().h && null != this.g.g.ia.IntersectionObserver
    };
    lm.prototype.Kb = function(a, b, c) {
        return new jm(a, this.g, b, c)
    };
    var nm = function() {
        var a = mm();
        Zj.call(this, D.top, a, "geo")
    };
    p(nm, Zj);
    nm.prototype.P = function() {
        return S.B().g
    };
    nm.prototype.Nb = function() {
        var a = mm();
        this.C !== a && (this.g != this && a > this.g.C && (this.g = this, ak(this)), this.C = a);
        return 2 == a
    };
    var mm = function() {
        R.B();
        var a = S.B();
        return a.l || a.h ? 0 : 2
    };
    Fa(nm);
    var om = function() {};
    Fa(om);
    var pm = function() {
            this.done = !1;
            this.g = {
                Rd: 0,
                Nc: 0,
                lh: 0,
                Vc: 0,
                dc: -1,
                Td: 0,
                Sd: 0,
                Ud: 0
            };
            this.w = null;
            this.A = !1;
            this.h = null;
            this.F = 0;
            this.l = new Xj(this)
        },
        sm = function() {
            var a = qm;
            a.A || (a.A = !0, rm(a, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                return a.o.apply(a, ca(c))
            }), a.o())
        };
    pm.prototype.aa = function() {
        tm(this, Wl(), !1)
    };
    var um = function() {
            om.B();
            var a = am.B();
            null != a.g && a.g.g ? dk(a.g.g) : Lj(S.B())
        },
        tm = function(a, b, c) {
            if (!a.done && (a.l.cancel(), 0 != b.length)) {
                a.h = null;
                try {
                    um();
                    var d = mj(),
                        e = R.B();
                    e.A = d;
                    if (null != am.B().g)
                        for (e = 0; e < b.length; e++) Uk(b[e], d, c);
                    else switch (e.Z) {
                        case "exc":
                            for (e = 0; e < b.length; e++) Qk(b[e], d, c)
                    }
                    for (d = 0; d < b.length; d++) Vk(b[d]);
                    ++a.g.Vc
                } finally {
                    c ? x(b, function(f) {
                        f.ea.W = 0
                    }) : Yj(a.l)
                }
            }
        },
        rm = function(a, b) {
            if (!a.w) {
                b = ej(142, b);
                Li();
                var c = yg(Pd);
                c && ee(Pd, c, b, {
                    capture: !1
                }) && (a.w = b)
            }
        };
    pm.prototype.o = function() {
        var a = Oj(),
            b = mj();
        a ? (lj || (hj = b, x(Vl.g, function(c) {
            var d = c.oa();
            d.P = kl(d, b, 1 != c.ca)
        })), lj = !0) : (this.F = vm(this, b), lj = !1, jj = b, x(Vl.g, function(c) {
            c.xb && (c.oa().J = b)
        }));
        tm(this, Wl(), !a)
    };
    var wm = function() {
            var a = am.B();
            if (null != a.g) {
                var b = a.g;
                x(Wl(), function(c) {
                    return Sk(c, b)
                })
            }
        },
        vm = function(a, b) {
            a = a.F;
            lj && (a += b - hj);
            return a
        },
        xm = function(a) {
            var b = qm;
            a = void 0 === a ? function() {
                return {}
            } : a;
            aj.Gc("av-js");
            Xi.g = .01;
            cj([function(c) {
                var d = R.B(),
                    e = {};
                e = (e.bin = d.l, e.type = "error", e);
                d = xi(d.M);
                if (!b.h) {
                    var f = D.document,
                        g = 0 <= ij ? mj() - ij : -1,
                        h = mj(); - 1 == b.g.dc && (g = h);
                    var l = S.B(),
                        n = R.B(),
                        m = xi(n.M),
                        t = Wl();
                    try {
                        if (0 < t.length) {
                            var B = l.g;
                            B && (m.bs = [Se(B), Te(B)]);
                            var r = l.o;
                            r && (m.ps = [r.width, r.height]);
                            D.screen &&
                                (m.ss = [D.screen.width, D.screen.height])
                        } else m.url = encodeURIComponent(D.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        m.tt = g;
                        m.pt = ij;
                        m.bin = n.l;
                        switch (R.B().Z) {
                            case "iem":
                                m.iem = 1;
                                break;
                            case "aio":
                                m.aio = 1;
                                break;
                            case "nio":
                                m.nio = 1
                        }
                        void 0 !== D.google_osd_load_pub_page_exp && (m.olpp = D.google_osd_load_pub_page_exp);
                        m.deb = [1, b.g.Rd, b.g.Nc, b.g.Vc, b.g.dc, 0, b.l.h, b.g.Td, b.g.Sd, b.g.Ud].join("-");
                        m.tvt = vm(b, h);
                        l.h && (m.inapp = 1);
                        if (null !== D && D != D.top) {
                            0 <
                                t.length && (m.iframe_loc = encodeURIComponent(D.location.href.substring(0, 512)));
                            var A = l.J;
                            m.is = [Se(A), Te(A)]
                        }
                    } catch (O) {
                        m.error = 1
                    }
                    b.h = m
                }
                r = b.h;
                B = {};
                for (var z in r) B[z] = r[z];
                z = R.B().g;
                if (1 == wi(z.l, "prf")) {
                    r = new Qi;
                    A = z.g;
                    f = 0; - 1 < A.g && (f = A.o.g.now() - A.g);
                    r = Ld(r, 1, A.l + f);
                    A = z.g;
                    r = Ld(r, 5, -1 < A.g ? A.h + 1 : A.h);
                    r = Ld(r, 2, z.h.g.l());
                    r = Ld(r, 3, z.h.g.h());
                    A = Ld(r, 4, z.h.g.g());
                    z = {};
                    r = new Bd;
                    f = Hd(A, 1);
                    f = null == f ? f : +f;
                    f = null == f ? 0 : f;
                    if (0 !== f && (g = f, null != g)) {
                        zd(r.g, 9);
                        f = r.g;
                        l = g;
                        l = (g = 0 > l ? 1 : 0) ? -l : l;
                        if (0 === l) xd = 0 < 1 / l ? 0 : 2147483648,
                            wd = 0;
                        else if (isNaN(l)) xd = 2147483647, wd = 4294967295;
                        else if (1.7976931348623157E308 < l) xd = (g << 31 | 2146435072) >>> 0, wd = 0;
                        else if (2.2250738585072014E-308 > l) l /= Math.pow(2, -1074), xd = (g << 31 | l / 4294967296) >>> 0, wd = l >>> 0;
                        else {
                            n = l;
                            h = 0;
                            if (2 <= n)
                                for (; 2 <= n && 1023 > h;) h++, n /= 2;
                            else
                                for (; 1 > n && -1022 < h;) n *= 2, h--;
                            l *= Math.pow(2, -h);
                            xd = (g << 31 | h + 1023 << 20 | 1048576 * l & 1048575) >>> 0;
                            wd = 4503599627370496 * l >>> 0
                        }
                        Ad(f, wd);
                        Ad(f, xd)
                    }
                    f = Kd(A, 2);
                    0 !== f && null != f && Cd(r, 2, f);
                    f = Kd(A, 3);
                    0 !== f && null != f && Cd(r, 3, f);
                    f = Kd(A, 4);
                    0 !== f && null != f && Cd(r, 4, f);
                    f = Kd(A, 5);
                    if (0 !== f && null != f && null != f)
                        if (zd(r.g, 40), A = r.g, 0 <= f) zd(A, f);
                        else {
                            for (g = 0; 9 > g; g++) A.g.push(f & 127 | 128), f >>= 7;
                            A.g.push(1)
                        }
                    A = new Uint8Array(r.l + r.g.length());
                    g = r.h;
                    h = g.length;
                    for (l = f = 0; l < h; l++) n = g[l], A.set(n, f), f += n.length;
                    g = r.g.end();
                    A.set(g, f);
                    r.h = [A];
                    z = (z.pf = vd(A), z)
                } else z = {};
                Yb(B, z);
                Yb(c, e, d, B, a());
                if (e = tk()) d = {}, Yb(c, (d.v = encodeURIComponent(e), d))
            }])
        };
    Fa(pm);
    var qm = pm.B();
    var ym = null,
        zm = "",
        Am = !1,
        Bm = function() {
            var a = ym || D;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };
    var Cm = function(a) {
            return function(b) {
                return void 0 === b[a] ? 0 : b[a]
            }
        },
        Em = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (Ha(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return void 0 !== a ? Dm(c, a) : c
                }
            }
        },
        Fm = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Ha(f) && d(e)) return Dm(f, b, c)
            }
        },
        Gm = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        Hm = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] ===
                        b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        Dm = function(a, b, c) {
            return void 0 === c || c ? Va(a, function(d, e) {
                return bb(b, e)
            }) : Wa(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g + h
                }, 0)
            })
        };
    var Im = Hm([void 0, 1, 2, 3, 4, 8, 16]),
        Jm = Hm([void 0, 4, 8, 16]),
        Km = {
            sv: "sv",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: Gm("p0", Jm),
            p1: Gm("p1", Jm),
            p2: Gm("p2", Jm),
            p3: Gm("p3", Jm),
            tos: "tos",
            mtos: "mtos",
            mtos1: Fm("mtos1", [0, 2, 4], !1, Jm),
            mtos2: Fm("mtos2", [0, 2, 4], !1, Jm),
            mtos3: Fm("mtos3", [0, 2, 4], !1, Jm),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: Gm("a0", Jm),
            a1: Gm("a1", Jm),
            a2: Gm("a2", Jm),
            a3: Gm("a3", Jm),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: Gm("c0", Jm),
            c1: Gm("c1", Jm),
            c2: Gm("c2", Jm),
            c3: Gm("c3", Jm),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: Gm("qmtos", Im),
            qnc: Gm("qnc", Im),
            qmv: Gm("qmv", Im),
            qnv: Gm("qnv", Im),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: Gm("ss0", Jm),
            ss1: Gm("ss1", Jm),
            ss2: Gm("ss2", Jm),
            ss3: Gm("ss3", Jm),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids"
        },
        Lm = {
            c: Cm("c"),
            at: "at",
            atos: Fm("atos", [0, 2, 4]),
            ta: function(a, b) {
                return function(c) {
                    if (void 0 ===
                        c[a]) return b
                }
            }("tth", "1"),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Em(),
            j: "dom",
            mtos: Fm("mtos", [0, 2, 4]),
            gmm: "gmm",
            gdr: "gdr",
            ss: Cm("ss"),
            vsv: nb("w2"),
            t: "t"
        },
        Mm = {
            atos: "atos",
            amtos: "amtos",
            avt: Fm("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: Cm("ss"),
            t: "t"
        },
        Nm = {
            a: "a",
            tos: Em(),
            at: "at",
            c: Cm("c"),
            mtos: Fm("mtos", [0, 2, 4]),
            dur: "dur",
            fs: "fs",
            p: "p",
            vpt: "vpt",
            vsv: nb("ias_w2"),
            dom: "dom",
            gmm: "gmm",
            gdr: "gdr",
            t: "t"
        },
        Om = {
            tos: Em(),
            at: "at",
            c: Cm("c"),
            mtos: Fm("mtos", [0, 2, 4]),
            p: "p",
            vpt: "vpt",
            vsv: nb("dv_w4"),
            gmm: "gmm",
            gdr: "gdr",
            dom: "dom",
            t: "t",
            mv: "mv",
            qmpt: Fm("qmtos", [0, 2, 4]),
            qvs: function(a, b) {
                return function(c) {
                    var d = c[a];
                    if ("number" === typeof d) return Wa(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0
                    })
                }
            }("qnc", [1, .5, 0]),
            qmv: "qmv",
            qa: "qas",
            a: "a"
        };
    var Qm = function(a, b) {
            var c = {
                sv: "841",
                cb: "j"
            };
            c.nas = Vl.g.length;
            c.msg = a;
            void 0 !== b && (a = Pm(b)) && (c.e = sj[a]);
            return c
        },
        Rm = function(a) {
            return 0 == a.lastIndexOf("custom_metric_viewable", 0)
        },
        Pm = function(a) {
            var b = Rm(a) ? "custom_metric_viewable" : a.toLowerCase();
            return Tb(function(c) {
                return c == b
            })
        };
    var Sm = {
            ng: "visible",
            bg: "audible",
            ah: "time",
            eh: "timetype"
        },
        Tm = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return "0" == a || "1" == a
            },
            timetype: function(a) {
                return "mtos" == a || "tos" == a
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        Um = function() {
            this.g = void 0;
            this.h = !1;
            this.l = 0;
            this.o = -1;
            this.w = "tos"
        },
        Vm = function(a) {
            try {
                var b = a.split(",");
                return b.length > Ob(Sm).length ? null : Xa(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || void 0 ===
                        Tm[d[0]] || !Tm[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        Wm = function(a, b) {
            if (void 0 == a.g) return 0;
            switch (a.w) {
                case "mtos":
                    return a.h ? Gk(b.g, a.g) : Gk(b.h, a.g);
                case "tos":
                    return a.h ? Ek(b.g, a.g) : Ek(b.h, a.g)
            }
            return 0
        };
    var Xm = function(a, b, c, d) {
        ml.call(this, b, d);
        this.F = a;
        this.A = c
    };
    p(Xm, ml);
    Xm.prototype.getId = function() {
        return this.F
    };
    Xm.prototype.w = function() {
        return !0
    };
    Xm.prototype.l = function(a) {
        var b = a.oa(),
            c = a.getDuration();
        return Ya(this.A, function(d) {
            if (void 0 != d.g) var e = Wm(d, b);
            else b: {
                switch (d.w) {
                    case "mtos":
                        e = d.h ? b.w.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.h ? b.w.g : b.l.g;
                        break b
                }
                e = 0
            }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
            return d
        })
    };
    var Ym = function(a) {
        ml.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    p(Ym, ml);
    Ym.prototype.l = function(a) {
        var b = Ek(a.oa().g, 1);
        return yl(a, b)
    };
    var Zm = function(a, b) {
        ml.call(this, a, b)
    };
    p(Zm, ml);
    Zm.prototype.l = function(a) {
        return a.oa().Ta()
    };
    var $m = function() {
        this.h = this.o = this.A = this.w = this.l = this.g = ""
    };
    var an = function() {},
        bn = function(a, b, c, d, e) {
            var f = {};
            if (void 0 !== a)
                if (null != b)
                    for (var g in b) {
                        var h = b[g];
                        g in Object.prototype || null != h && (v(h) ? f[g] = h(a) : f[g] = a[h])
                    } else Yb(f, a);
            void 0 !== c && Yb(f, c);
            a = qk(ok(new mk, f));
            0 < a.length && void 0 !== d && void 0 !== e && (e = e(a), a += "&" + d + "=" + e);
            return a
        };
    var cn = function() {};
    p(cn, an);
    cn.prototype.g = function(a) {
        var b = new $m;
        b.g = bn(a, Km);
        b.l = bn(a, Mm);
        return b
    };
    var dn = function(a, b, c) {
        ql.call(this, a, b, c)
    };
    p(dn, ql);
    dn.prototype.l = function() {
        var a = Da("ima.admob.getViewability"),
            b = wi(this.M, "queryid");
        v(a) && b && a(b)
    };
    dn.prototype.getName = function() {
        return "gsv"
    };
    var en = function(a) {
        a = void 0 === a ? D : a;
        ik.call(this, new Zj(a, 2))
    };
    p(en, ik);
    en.prototype.getName = function() {
        return "gsv"
    };
    en.prototype.pb = function() {
        var a = S.B();
        R.B();
        return a.h && !1
    };
    en.prototype.Kb = function(a, b, c) {
        return new dn(this.g, b, c)
    };
    var fn = function(a, b, c) {
        ql.call(this, a, b, c)
    };
    p(fn, ql);
    fn.prototype.l = function() {
        var a = this,
            b = Da("ima.bridge.getNativeViewability"),
            c = wi(this.M, "queryid");
        v(b) && c && b(c, function(d) {
            Ub(d) && a.A++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = Dj(d.opt_nativeViewBounds || {});
            var g = a.h.l();
            g.g = f ? pl.clone() : Dj(e);
            a.timestamp = d.opt_nativeTime || -1;
            S.B().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    };
    fn.prototype.getName = function() {
        return "nis"
    };
    var gn = function(a) {
        a = void 0 === a ? D : a;
        ik.call(this, new Zj(a, 2))
    };
    p(gn, ik);
    gn.prototype.getName = function() {
        return "nis"
    };
    gn.prototype.pb = function() {
        var a = S.B();
        R.B();
        return a.h && !1
    };
    gn.prototype.Kb = function(a, b, c) {
        return new fn(this.g, b, c)
    };
    var hn = function() {
        Zj.call(this, D, 2, "mraid");
        this.$ = 0;
        this.K = this.L = !1;
        this.J = null;
        this.h = tj(this.ia);
        this.w.g = new G(0, 0, 0, 0);
        this.ma = !1
    };
    p(hn, Zj);
    hn.prototype.Nb = function() {
        return null != this.h.wa
    };
    hn.prototype.O = function() {
        var a = {};
        this.$ && (a.mraid = this.$);
        this.L && (a.mlc = 1);
        a.mtop = this.h.qd;
        this.J && (a.mse = this.J);
        this.ma && (a.msc = 1);
        a.mcp = this.h.wb;
        return a
    };
    hn.prototype.F = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.wa[a].apply(this.h.wa, c)
        } catch (e) {
            fj(538, e, .01, function(f) {
                f.method = a
            })
        }
    };
    var jn = function(a, b, c) {
        a.F("addEventListener", b, c)
    };
    hn.prototype.wc = function() {
        var a = this;
        if (this.H) return !this.lb();
        this.H = !0;
        if (2 === this.h.wb) return this.J = "ng", bk(this, "w"), !1;
        if (1 === this.h.wb) return this.J = "mm", bk(this, "w"), !1;
        var b;
        if (b = 1 != wi(R.B().M, "mxd")) {
            a: switch (this.h.qd) {
                case 0:
                case 3:
                    b = !0;
                    break a;
                default:
                    b = !1
            }
            b = !b
        }
        if (b) return this.J = "if", bk(this, "w"), !1;
        S.B().D = !0;
        this.ia.document.readyState && "complete" == this.ia.document.readyState ? kn(this) : wj(this.ia, "load", function() {
            Li().setTimeout(ej(292, function() {
                return kn(a)
            }), 100)
        }, 292);
        return !0
    };
    var kn = function(a) {
            R.B().w = !!a.F("isViewable");
            jn(a, "viewableChange", ln);
            "loading" === a.F("getState") ? jn(a, "ready", mn) : nn(a)
        },
        nn = function(a) {
            "string" === typeof a.h.wa.AFMA_LIDAR ? (a.L = !0, on(a)) : (a.h.wb = 3, a.J = "nc", bk(a, "w"))
        },
        on = function(a) {
            a.K = !1;
            var b = 1 == wi(R.B().M, "rmmt"),
                c = !!a.F("isViewable");
            (b ? !c : 1) && Li().setTimeout(ej(524, function() {
                a.K || (pn(a), fj(540, Error()), a.J = "mt", bk(a, "w"))
            }), 500);
            qn(a);
            jn(a, a.h.wa.AFMA_LIDAR, rn)
        },
        qn = function(a) {
            var b = 1 == wi(R.B().M, "sneio"),
                c = void 0 !== a.h.wa.AFMA_LIDAR_EXP_1,
                d = void 0 !== a.h.wa.AFMA_LIDAR_EXP_2;
            (b = b && d) && (a.h.wa.AFMA_LIDAR_EXP_2 = !0);
            c && (a.h.wa.AFMA_LIDAR_EXP_1 = !b)
        },
        pn = function(a) {
            a.F("removeEventListener", a.h.wa.AFMA_LIDAR, rn);
            a.L = !1
        };
    hn.prototype.X = function() {
        var a = S.B(),
            b = sn(this, "getMaxSize");
        a.g = new G(0, b.width, b.height, 0)
    };
    hn.prototype.Y = function() {
        S.B().w = sn(this, "getScreenSize")
    };
    var sn = function(a, b) {
        if ("loading" === a.F("getState")) return new E(-1, -1);
        b = a.F(b);
        if (!b) return new E(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new E(-1, -1) : new E(a, b)
    };
    hn.prototype.U = function() {
        pn(this);
        Zj.prototype.U.call(this)
    };
    var mn = function() {
            try {
                var a = hn.B();
                a.F("removeEventListener", "ready", mn);
                nn(a)
            } catch (b) {
                fj(541, b)
            }
        },
        rn = function(a, b) {
            try {
                var c = hn.B();
                c.K = !0;
                var d = a ? new G(a.y, a.x + a.width, a.y + a.height, a.x) : new G(0, 0, 0, 0);
                var e = mj(),
                    f = Oj();
                var g = new Vj(e, f, c);
                g.g = d;
                g.volume = b;
                c.Ka(g)
            } catch (h) {
                fj(542, h)
            }
        },
        ln = function(a) {
            var b = R.B(),
                c = hn.B();
            a && !b.w && (b.w = !0, c.ma = !0, 1 == wi(R.B().M, "msp") && c.J && bk(c, "w", !0))
        };
    Fa(hn);
    var un = function() {
        this.l = this.N = !1;
        this.g = null;
        this.o = new cn;
        this.h = null;
        var a = {};
        this.K = (a.start = this.ee, a.firstquartile = this.$d, a.midpoint = this.be, a.thirdquartile = this.fe, a.complete = this.Yd, a.pause = this.Bc, a.resume = this.od, a.skip = this.de, a.viewable_impression = this.Ja, a.mute = this.fb, a.unmute = this.fb, a.fullscreen = this.ae, a.exitfullscreen = this.Zd, a.fully_viewable_audible_half_duration_impression = this.Ja, a.measurable_impression = this.Ja, a.abandon = this.Bc, a.engagedview = this.Ja, a.impression = this.Ja, a.creativeview =
            this.Ja, a.progress = this.fb, a.custom_metric_viewable = this.Ja, a.bufferstart = this.Bc, a.bufferfinish = this.od, a);
        a = {};
        this.P = (a.overlay_resize = this.ce, a.abandon = this.bc, a.close = this.bc, a.collapse = this.bc, a.overlay_unmeasurable_impression = function(b) {
                return Gl(b, "overlay_unmeasurable_impression", Oj())
            }, a.overlay_viewable_immediate_impression = function(b) {
                return Gl(b, "overlay_viewable_immediate_impression", Oj())
            }, a.overlay_unviewable_impression = function(b) {
                return Gl(b, "overlay_unviewable_impression", Oj())
            },
            a.overlay_viewable_end_of_session_impression = function(b) {
                return Gl(b, "overlay_viewable_end_of_session_impression", Oj())
            }, a);
        R.B().l = 3;
        tn(this)
    };
    un.prototype.A = function(a) {
        Pk(a, !1);
        Yl(a)
    };
    un.prototype.J = function() {};
    var vn = function(a, b, c, d) {
        a = a.F(null, d, !0, b);
        a.w = c;
        Zl([a]);
        return a
    };
    un.prototype.F = function(a, b, c, d) {
        var e = this;
        this.h || (this.h = this.Uc());
        b = c ? b : -1;
        a = null == this.h || this.l ? new tl(D, a, b, 7) : new tl(D, a, b, 7, new ml("measurable_impression", this.h), wn(this));
        a.ha = d;
        ui(a.M);
        vi(a.M, "queryid", a.ha);
        a.Cc("");
        Wk(a, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.I.apply(e, ca(g))
        }, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.O.apply(e, ca(g))
        });
        (d = am.B().g) && Sk(a, d);
        a.na.Ma && om.B();
        return a
    };
    var xn = function(a, b, c) {
            fi(b);
            var d = a.h;
            x(b, function(e) {
                var f = Wa(e.g, function(g) {
                    var h = Vm(g);
                    if (null == h) g = null;
                    else if (g = new Um, null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
                        var l = "mtos" == h.timetype ? "mtos" : "tos",
                            n = rb(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        "%" == n && (h /= 100);
                        "ms" == n ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                        g.w = void 0 === l ? "tos" : l
                    }
                    return g
                });
                Ya(f, function(g) {
                    return null == g
                }) || zl(c, new Xm(e.id, e.event, f, d))
            })
        },
        wn = function(a) {
            a = a.h;
            return [new Zm("viewable_impression",
                a), new Ym(a)]
        },
        yn = function() {
            var a = [];
            S.B();
            var b = R.B();
            a.push(nm.B());
            wi(b.M, "mvp_lv") && a.push(hn.B());
            var c = [new en, new gn];
            wi(b.M, "ecs");
            c.push(new dm(a));
            c.push(new lm(D));
            return c
        },
        An = function(a) {
            if (!a.N) {
                a.N = !0;
                try {
                    var b = mj(),
                        c = R.B(),
                        d = S.B();
                    ij = b;
                    c.o = 79463069;
                    "o" !== a.g && (ym = Wf(D).ia);
                    if (Mi()) {
                        qm.g.Nc = 0;
                        qm.g.dc = mj() - b;
                        var e = yn(),
                            f = am.B();
                        f.h = e;
                        bm(f, function() {
                            zn()
                        }) ? qm.done || (wm(), ck(f.g.g, a), sm()) : d.l ? zn() : sm()
                    } else Am = !0
                } catch (g) {
                    throw Vl.reset(), g;
                }
            }
        },
        Bn = function(a) {
            qm.l.cancel();
            zm = a;
            qm.done = !0
        },
        Cn = function(a) {
            var b = R.B();
            if (a.g) return a.g;
            var c = am.B().g;
            if (c) switch (c.getName()) {
                case "nis":
                    a.g = "n";
                    break;
                case "gsv":
                    a.g = "m"
            } else switch (b.Z) {
                case "nis":
                    a.g = "n"
            }
            a.g || (a.g = "h");
            return a.g
        },
        Dn = function(a, b, c) {
            if (null == a.h) return b.gb |= 4, !1;
            a = a.h.report(c, b);
            b.gb |= a;
            return 0 == a
        };
    un.prototype.Za = function(a) {
        switch (a.Ea()) {
            case 0:
                if (a = am.B().g) a = a.g, cb(a.A, this), a.D && this.za() && fk(a);
                zn();
                break;
            case 2:
                sm()
        }
    };
    un.prototype.Ka = function() {};
    un.prototype.za = function() {
        return !1
    };
    var zn = function() {
        var a = [new lm(D)],
            b = am.B();
        b.h = a;
        bm(b, function() {
            Bn("i")
        }) ? qm.done || (wm(), sm()) : Bn("i")
    };
    un.prototype.O = function(a, b) {
        a.Sa = !0;
        switch (a.ra()) {
            case 1:
                En(this, a, b);
                break;
            case 2:
                this.Ec(a)
        }
        this.Fc(a)
    };
    var En = function(a, b, c) {
        if (!b.sa) {
            var d = Gl(b, "start", Oj());
            a = a.o.g(d).g;
            var e = {};
            e.r = c;
            e.v = "841v";
            Ee(a, function(f, g) {
                return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
            });
            c = Bm();
            Ee(c, function(f, g) {
                return e[f] = encodeURIComponent(g)
            });
            e.id = "lidarvf";
            c = "//pagead2.googlesyndication.com/pagead/gen_204?" + qk(ok(new mk, e));
            uk(c);
            b.sa = !0
        }
    };
    k = un.prototype;
    k.ee = function(a) {
        Dl(a, 0);
        return Gl(a, "start", Oj())
    };
    k.fb = function(a, b, c) {
        tm(qm, [a], !Oj());
        return this.Ja(a, b, c)
    };
    k.Ja = function(a, b, c) {
        return Gl(a, c, Oj())
    };
    k.$d = function(a) {
        return Fn(a, "firstquartile", 1)
    };
    k.be = function(a) {
        a.aa = !0;
        return Fn(a, "midpoint", 2)
    };
    k.fe = function(a) {
        return Fn(a, "thirdquartile", 3)
    };
    k.Yd = function(a) {
        var b = Fn(a, "complete", 4);
        0 != a.ca && (a.ca = 3);
        return b
    };
    var Fn = function(a, b, c) {
        tm(qm, [a], !Oj());
        Dl(a, c);
        4 != c && Cl(a.N, c, a.yb);
        return Gl(a, b, Oj())
    };
    k = un.prototype;
    k.od = function(a, b, c) {
        b = Oj();
        2 != a.ca || b || (a.oa().J = mj());
        tm(qm, [a], !b);
        2 == a.ca && (a.ca = 1);
        return Gl(a, c, b)
    };
    k.de = function(a, b) {
        b = this.fb(a, b || {}, "skip");
        0 != a.ca && (a.ca = 3);
        return b
    };
    k.ae = function(a, b) {
        Pk(a, !0);
        return this.fb(a, b || {}, "fullscreen")
    };
    k.Zd = function(a, b) {
        Pk(a, !1);
        return this.fb(a, b || {}, "exitfullscreen")
    };
    k.Bc = function(a, b, c) {
        b = a.oa();
        b.P = kl(b, mj(), 1 != a.ca);
        tm(qm, [a], !Oj());
        1 == a.ca && (a.ca = 2);
        return Gl(a, c, Oj())
    };
    k.ce = function(a) {
        tm(qm, [a], !Oj());
        return a.h()
    };
    k.bc = function(a) {
        tm(qm, [a], !Oj());
        this.nd(a);
        0 != a.ca && (a.ca = 3);
        return a.h()
    };
    var tn = function(a) {
            xm(function() {
                var b = Gn();
                null != a.g && (b.sdk = a.g);
                b.avms = R.B().Z;
                return b
            })
        },
        Hn = function(a, b, c, d) {
            var e = Tl(Vl, c);
            null !== e && e.ha !== b && (a.A(e), e = null);
            e || (b = a.F(c, mj(), !1, b), 0 == Vl.h.length && (R.B().o = 79463069), $l([b]), e = b, e.w = Cn(a), d && (e.Na = d));
            return e
        };
    un.prototype.I = function() {};
    var Jn = function(a, b) {
        b.D = 0;
        for (var c in oj) null == a[c] && (b.D |= oj[c]);
        In(a, "currentTime");
        In(a, "duration")
    };
    k = un.prototype;
    k.Ec = function() {};
    k.nd = function() {};
    k.bd = function() {};
    k.Fc = function() {};
    k.Uc = function() {};
    var In = function(a, b) {
            var c = a[b];
            void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
        },
        Gn = function() {
            var a = S.B(),
                b = {};
            return b.sv = "841", b["if"] = a.l ? "1" : "0", b.nas = String(Vl.g.length), b
        };
    var Kn = w(),
        Ln = !1,
        Mn = !1,
        Nn = !1,
        On = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        Pn = function(a) {
            return !!(1 << a & Kn)
        },
        Qn = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return Pn(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return Pn(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return Pn(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return Pn(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return Pn(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return Mn
            },
            function() {
                return Nn
            },
            function() {
                return Pn(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                return !1
            },
            function() {
                return Pn(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || On(a.navigator.vibrate)
            },
            function(a) {
                a =
                    a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return On(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type", "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering",
                    "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return Pn(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return On(a.CSS.supports)
            },
            function() {
                return On(Intl.Collator)
            },
            function(a) {
                return On(a.document.createElement("dialog").show)
            },
            function() {
                return Pn(8)
            },
            function(a) {
                return On(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    easing: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    easing: "ease-in"
                }], {
                    duration: 1300,
                    iterations: 1
                }).reverse)
            },
            function(a) {
                return On(a.document.createElement("div").animate)
            },
            function(a) {
                return On(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return On(a.navigator.getBattery)
            },
            function(a) {
                return On(a.navigator.permissions.query)
            },
            function() {
                return !1
            },
            function() {
                return Pn(9)
            },
            function() {
                return On(webkitRequestAnimationFrame)
            },
            function(a) {
                return On(a.BroadcastChannel.call)
            },
            function(a) {
                return On(a.FontFace)
            },
            function(a) {
                return On(a.Gamepad)
            },
            function() {
                return Pn(10)
            },
            function(a) {
                return On(a.MutationEvent)
            },
            function(a) {
                return On(a.MutationObserver)
            },
            function(a) {
                return On(a.crypto.getRandomValues)
            },
            function(a) {
                return On(a.document.body.createShadowRoot)
            },
            function(a) {
                return On(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return On(a.fetch)
            },
            function() {
                return Pn(11)
            },
            function(a) {
                return On(a.navigator.serviceWorker.register)
            },
            function(a) {
                return On(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return On(a.speechSynthesis.speak)
            },
            function(a) {
                return On(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return Pn(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return Pn(13)
            },
            function(a) {
                return a.CSS.supports("position", "sticky")
            },
            function(a) {
                return void 0 ===
                    a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return Pn(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.oh
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 ==
                    a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        Rn = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        Sn = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        Un = function() {
            try {
                Tn()
            } catch (d) {}
            var a = "a=1&b=" + Kn + "&",
                b = [],
                c = 99;
            x(Qn, function(d, e) {
                var f = !1;
                try {
                    f = d(D)
                } catch (g) {}
                b[e / 32 >>> 0] |= f << e % 32
            });
            x(b, function(d, e) {
                a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
            });
            c = 105;
            x(Rn, function(d) {
                var e = "false";
                try {
                    e = d(D)
                } catch (f) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            x(Sn, function(d) {
                var e = "";
                try {
                    var f = d(D);
                    d = [];
                    for (var g = 0, h = 0; h < f.length; h++) {
                        var l = f.charCodeAt(h);
                        255 < l && (d[g++] = l & 255, l >>= 8);
                        d[g++] = l
                    }
                    e = vd(d, 3)
                } catch (n) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            return a.slice(0, -1)
        },
        Tn = function() {
            if (!Ln) {
                var a = function() {
                    Mn = !0;
                    D.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                D.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    Nn = !0;
                    D.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                D.document.addEventListener("webdriver-evaluate-response", b, !0);
                Ln = !0
            }
        };
    var Vn = function() {
        this.h = 64;
        this.g = Array(4);
        this.w = Array(this.h);
        this.o = this.l = 0;
        this.reset()
    };
    Ra(Vn, Kh);
    Vn.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.o = this.l = 0
    };
    var Wn = function(a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if ("string" === typeof b)
                for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
            else
                for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
            b = a.g[0];
            c = a.g[1];
            e = a.g[2];
            var f = a.g[3];
            var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>>
                15);
            g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
            f = b + (g << 12 & 4294967295 |
                g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
            b = c + (g <<
                5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
            c =
                e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
            f = b + (g << 11 & 4294967295 |
                g >>> 21);
            g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[12] +
                3873151461 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
                4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
                4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
            a.g[0] = a.g[0] + b & 4294967295;
            a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
            a.g[2] = a.g[2] + e & 4294967295;
            a.g[3] = a.g[3] + f & 4294967295
        },
        Xn = function(a, b) {
            if (void 0 === c) var c = b.length;
            for (var d = c - a.h, e = a.w,
                    f = a.l, g = 0; g < c;) {
                if (0 == f)
                    for (; g <= d;) Wn(a, b, g), g += a.h;
                if ("string" === typeof b)
                    for (; g < c;) {
                        if (e[f++] = b.charCodeAt(g++), f == a.h) {
                            Wn(a, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (e[f++] = b[g++], f == a.h) {
                                Wn(a, e);
                                f = 0;
                                break
                            }
            }
            a.l = f;
            a.o += c
        };
    var Yn = function() {
        this.h = null
    };
    p(Yn, cn);
    Yn.prototype.g = function(a) {
        var b = cn.prototype.g.call(this, a);
        var c = Kn = w();
        var d = Pn(5);
        c = (Mn ? !d : d) ? c | 2 : c & -3;
        d = Pn(2);
        c = (Nn ? !d : d) ? c | 8 : c & -9;
        c = {
            s1: (c >>> 0).toString(16)
        };
        this.h || (this.h = Un());
        b.w = this.h;
        b.A = bn(a, Lm, c, "h", Zn("kArwaWEsTs"));
        b.o = bn(a, Nm, {}, "h", Zn("b96YPMzfnx"));
        b.h = bn(a, Om, {}, "h", Zn("yb8Wev6QDg"));
        return b
    };
    var Zn = function(a) {
        return function(b) {
            var c = new Vn;
            Xn(c, b + a);
            var d = Array((56 > c.l ? c.h : 2 * c.h) - c.l);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b) d[b] = 0;
            var e = 8 * c.o;
            for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
            Xn(c, d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)
                for (var f = 0; 32 > f; f += 8) d[e++] = c.g[b] >>> f & 255;
            return lb(d).slice(-8)
        }
    };
    var $n = function(a, b) {
        this.h = a;
        this.l = b
    };
    $n.prototype.report = function(a, b) {
        var c = this.g(b);
        if (v(c)) {
            var d = {};
            d = (d.sv = "841", d.cb = "j", d.e = ao(a), d);
            var e = Gl(b, a, Oj());
            Yb(d, e);
            b.ad[a] = e;
            d = 2 == b.ra() ? sk(d).join("&") : this.l.g(d).g;
            try {
                return c(b.ha, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var ao = function(a) {
        var b = Rm(a) ? "custom_metric_viewable" : a;
        a = Tb(function(c) {
            return c == b
        });
        return sj[a]
    };
    $n.prototype.g = function() {
        return Da(this.h)
    };
    var bo = function(a, b, c) {
        $n.call(this, a, b);
        this.o = c
    };
    p(bo, $n);
    bo.prototype.g = function(a) {
        if (!a.Na) return $n.prototype.g.call(this, a);
        if (this.o[a.Na]) return function() {};
        fj(393, Error());
        return null
    };
    var co = function() {
        un.call(this);
        this.D = void 0;
        this.H = null;
        this.C = !1;
        this.w = {};
        this.L = 0;
        this.o = new Yn
    };
    p(co, un);
    co.prototype.J = function(a, b) {
        var c = this,
            d = R.B(),
            e = am.B();
        if (null != e.g) switch (e.g.getName()) {
            case "nis":
                var f = eo(this, a, b);
                break;
            case "gsv":
                f = fo(this, a, b);
                break;
            case "exc":
                f = go(this, a)
        } else switch (d.Z) {
            case "nis":
                f = eo(this, a, b);
                break;
            case "exc":
                f = go(this, a)
        }
        f || (b.opt_overlayAdElement ? f = void 0 : b.opt_adElement ? f = Hn(this, a, b.opt_adElement, b.opt_osdId) : (f = Sl(Vl, a) || void 0, 1 != wi(d.M, "etl") || f || (f = Hn(this, a, D.document.body, b.opt_osdId))));
        f && 1 == f.ra() && (f.L == Ea && (f.L = function(g) {
            return c.bd(g)
        }), ho(this,
            f, b));
        return f
    };
    var ho = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.h && Ha(c) && xn(a, c, b)
    };
    co.prototype.bd = function(a) {
        a.h = 0;
        a.O = 0;
        if ("h" == a.w || "n" == a.w) {
            if (R.B().h) var b = Da("ima.bridge.getVideoMetadata");
            else if (a.Na && io(this)) {
                var c = this.w[a.Na];
                c ? b = function(e) {
                    return jo(c, e)
                } : null !== c && fj(379, Error())
            } else b = Da("ima.common.getVideoMetadata");
            if (v(b)) try {
                var d = b(a.ha)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2
        } else if ("b" == a.w)
            if (b = Da("ytads.bulleit.getVideoMetadata"), v(b)) try {
                d = b(a.ha)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else if ("ml" == a.w)
            if (b = Da("ima.common.getVideoMetadata"), v(b)) try {
                d = b(a.ha)
            } catch (e) {
                a.h |=
                    4
            } else a.h |= 2;
            else a.h |= 1;
        a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : Ub(d) ? a.h |= 32 : null != d.errorCode && (a.O = d.errorCode, a.h |= 64));
        null == d && (d = {});
        Jn(d, a);
        Ej(d.volume) && Ej(this.D) && (d.volume *= this.D);
        return d
    };
    var fo = function(a, b, c) {
            var d = Sl(Vl, b);
            d || (d = c.opt_nativeTime || -1, d = vn(a, b, Cn(a), d), c.opt_osdId && (d.Na = c.opt_osdId));
            return d
        },
        eo = function(a, b, c) {
            var d = Sl(Vl, b);
            d || (d = vn(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        go = function(a, b) {
            var c = Sl(Vl, b);
            c || (c = vn(a, b, "h", -1));
            return c
        };
    co.prototype.Uc = function() {
        if (io(this)) return new bo("ima.common.triggerExternalActivityEvent", this.o, this.w);
        var a = ko(this);
        return null != a ? new $n(a, this.o) : null
    };
    var ko = function(a) {
        var b = R.B();
        switch (Cn(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
                if (b.h) return "ima.bridge.triggerExternalActivityEvent";
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    co.prototype.Ec = function(a) {
        !a.g && a.Sa && Dn(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    co.prototype.nd = function(a) {
        a.pd && (a.Ta() ? Dn(this, a, "overlay_viewable_end_of_session_impression") : Dn(this, a, "overlay_unviewable_impression"), a.pd = !1)
    };
    var lo = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        Yb(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        if (e.opt_bounds) return a.o.g(Qm("ol", d));
        if (void 0 !== d)
            if (void 0 !== Pm(d))
                if (Am) b = Qm("ue", d);
                else if (An(a), "i" == zm) b = Qm("i", d), b["if"] = 0;
        else if (b = a.J(b, e)) {
            b: {
                "i" == zm && (b.Sa = !0, a.Fc(b));c = e.opt_fullscreen;void 0 !== c && Pk(b, !!c);
                var f;
                if (c = !S.B().h && !Kj()) Li(),
                c = 0 === xg(Pd);
                if (f = c) {
                    switch (b.ra()) {
                        case 1:
                            En(a, b, "pv");
                            break;
                        case 2:
                            a.Ec(b)
                    }
                    Bn("pv")
                }
                c = d.toLowerCase();
                if (!f && bb(pj, c) && 0 == b.ca) {
                    "i" != zm &&
                        (qm.done = !1);
                    f = void 0 !== e ? e.opt_nativeTime : void 0;
                    kj = f = "number" === typeof f ? f : mj();
                    b.xb = !0;
                    var g = Oj();
                    b.ca = 1;
                    b.Aa = {};
                    b.Aa.firstquartile = !1;
                    b.Aa.midpoint = !1;
                    b.Aa.thirdquartile = !1;
                    b.Aa.complete = !1;
                    b.Aa.pause = !1;
                    b.Aa.skip = !1;
                    b.Aa.viewable_impression = !1;
                    b.Yb = 0;
                    g || (b.oa().J = f);
                    tm(qm, [b], !g)
                }
                0 != b.ca && bb(qj, c) && (b.Sa || a.l || b.td());
                (f = b.Wa[c]) && dl(b.da, f);
                switch (b.ra()) {
                    case 1:
                        var h = Rm(c) ? a.K.custom_metric_viewable : a.K[c];
                        break;
                    case 2:
                        h = a.P[c]
                }
                if (h && (d = h.call(a, b, e, d), void 0 !== d)) {
                    e = Qm(void 0, c);
                    Yb(e, d);
                    d =
                        e;
                    break b
                }
                d = void 0
            }
            3 == b.ca && a.A(b);b = d
        }
        else b = Qm("nf", d);
        else b = void 0;
        else Am ? b = Qm("ue") : (b = a.J(b, e)) ? (d = Qm(), Yb(d, Fl(b, !0, !1, !1)), b = d) : b = Qm("nf");
        return "string" === typeof b ? a.o.g(void 0) : a.o.g(b)
    };
    co.prototype.I = function(a) {
        this.l && 1 == a.ra() && mo(this, a)
    };
    co.prototype.Fc = function(a) {
        this.l && 1 == a.ra() && mo(this, a)
    };
    var mo = function(a, b) {
            var c;
            if (b.Na && io(a)) {
                var d = a.w[b.Na];
                d ? c = function(f, g) {
                    no(d, f, g)
                } : null !== d && fj(379, Error())
            } else c = Da("ima.common.triggerViewabilityMeasurementUpdate");
            if (v(c)) {
                var e = Al(b);
                e.nativeVolume = a.D;
                c(b.ha, e)
            }
        },
        oo = function(a, b, c) {
            a.w[b] = c
        },
        io = function(a) {
            return R.B().h || "h" != Cn(a) && "m" != Cn(a) ? !1 : 0 != a.L
        };
    co.prototype.F = function(a, b, c, d) {
        a = un.prototype.F.call(this, a, b, c, d);
        this.C && (b = this.H, null == a.o && (a.o = new Zk), b.g[a.ha] = a.o, a.o.w = Il);
        return a
    };
    co.prototype.A = function(a) {
        a && 1 == a.ra() && this.C && delete this.H.g[a.ha];
        return un.prototype.A.call(this, a)
    };
    var po = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.l, b.moatInit = a.w, b.moatViewability = a.A, b.integralAdsViewability = a.o, b.doubleVerifyViewability = a.h, b
        },
        qo = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a = lo(co.B(), b, c, a);
            return po(a)
        };
    Fa(co);
    var ro = new $m;
    ro.w = "stopped";
    ro.g = "stopped";
    ro.l = "stopped";
    ro.A = "stopped";
    ro.o = "stopped";
    ro.h = "stopped";
    Object.freeze(ro);
    var so = ej(193, qo, void 0, Gn);
    u("Goog_AdSense_Lidar_sendVastEvent", so, void 0);
    var to = ej(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = lo(co.B(), a, b);
        return po(a)
    });
    u("Goog_AdSense_Lidar_getViewability", to, void 0);
    var uo = ej(195, function() {
        return Oi()
    });
    u("Goog_AdSense_Lidar_getUrlSignalsArray", uo, void 0);
    var vo = ej(196, function() {
        return dg(Oi())
    });
    u("Goog_AdSense_Lidar_getUrlSignalsList", vo, void 0);
    var wo = function(a, b) {
        this.h = {};
        this.g = [];
        this.o = this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof wo)
                for (c = a.ya(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    wo.prototype.ga = function() {
        xo(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    wo.prototype.ya = function() {
        xo(this);
        return this.g.concat()
    };
    wo.prototype.isEmpty = function() {
        return 0 == this.l
    };
    wo.prototype.clear = function() {
        this.h = {};
        this.o = this.l = this.g.length = 0
    };
    var zo = function(a, b) {
            yo(a.h, b) && (delete a.h[b], a.l--, a.o++, a.g.length > 2 * a.l && xo(a))
        },
        xo = function(a) {
            if (a.l != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    yo(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.l != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], yo(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
    k = wo.prototype;
    k.get = function(a, b) {
        return yo(this.h, a) ? this.h[a] : b
    };
    k.set = function(a, b) {
        yo(this.h, a) || (this.l++, this.g.push(a), this.o++);
        this.h[a] = b
    };
    k.forEach = function(a, b) {
        for (var c = this.ya(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new wo(this)
    };
    k.Od = function(a) {
        xo(this);
        var b = 0,
            c = this.o,
            d = this,
            e = new Yk;
        e.next = function() {
            if (c != d.o) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw Xk;
            var f = d.g[b++];
            return a ? f : d.h[f]
        };
        return e
    };
    var yo = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ao = function(a) {
            if (a.ga && "function" == typeof a.ga) return a.ga();
            if ("string" === typeof a) return a.split("");
            if (Ia(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Nb(a)
        },
        Bo = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (Ia(a) || "string" === typeof a) x(a, b, void 0);
            else {
                if (a.ya && "function" == typeof a.ya) var c = a.ya();
                else if (a.ga && "function" == typeof a.ga) c = void 0;
                else if (Ia(a) || "string" === typeof a) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c =
                    Ob(a);
                d = Ao(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
    var Co = function(a, b) {
        this.g = this.F = this.o = "";
        this.J = null;
        this.w = this.l = "";
        this.A = !1;
        var c;
        a instanceof Co ? (this.A = void 0 !== b ? b : a.A, Do(this, a.o), this.F = a.F, this.g = a.g, Eo(this, a.J), this.l = a.l, Fo(this, a.h.clone()), this.w = a.w) : a && (c = String(a).match(De)) ? (this.A = !!b, Do(this, c[1] || "", !0), this.F = Go(c[2] || ""), this.g = Go(c[3] || "", !0), Eo(this, c[4]), this.l = Go(c[5] || "", !0), Fo(this, c[6] || "", !0), this.w = Go(c[7] || "")) : (this.A = !!b, this.h = new Ho(null, this.A))
    };
    Co.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(Io(b, Jo, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.F) && a.push(Io(b, Jo, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.J, null != c && a.push(":", String(c));
        if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Io(c, "/" == c.charAt(0) ? Ko : Lo, !0));
        (c = this.h.toString()) && a.push("?", c);
        (c = this.w) && a.push("#", Io(c, Mo));
        return a.join("")
    };
    Co.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.o;
        c ? Do(b, a.o) : c = !!a.F;
        c ? b.F = a.F : c = !!a.g;
        c ? b.g = a.g : c = null != a.J;
        var d = a.l;
        if (c) Eo(b, a.J);
        else if (c = !!a.l) {
            if ("/" != d.charAt(0))
                if (this.g && !this.l) d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/"); - 1 != e && (d = b.l.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length &&
                        "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.l = d : c = "" !== a.h.toString();
        c ? Fo(b, a.h.clone()) : c = !!a.w;
        c && (b.w = a.w);
        return b
    };
    Co.prototype.clone = function() {
        return new Co(this)
    };
    var Do = function(a, b, c) {
            a.o = c ? Go(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        Eo = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.J = b
            } else a.J = null
        },
        Fo = function(a, b, c) {
            b instanceof Ho ? (a.h = b, No(a.h, a.A)) : (c || (b = Io(b, Oo)), a.h = new Ho(b, a.A))
        },
        Po = function(a, b, c) {
            a.h.set(b, c);
            return a
        },
        Go = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Io = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Qo), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
                "%$1")), a) : null
        },
        Qo = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Jo = /[#\/\?@]/g,
        Lo = /[#\?:]/g,
        Ko = /[#\?]/g,
        Oo = /[#\?@]/g,
        Mo = /#/g,
        Ho = function(a, b) {
            this.h = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        Ro = function(a) {
            a.g || (a.g = new wo, a.h = 0, a.l && Ee(a.l, function(b, c) {
                a.add(Dc(b), c)
            }))
        };
    Ho.prototype.add = function(a, b) {
        Ro(this);
        this.l = null;
        a = So(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    };
    var To = function(a, b) {
        Ro(a);
        b = So(a, b);
        yo(a.g.h, b) && (a.l = null, a.h -= a.g.get(b).length, zo(a.g, b))
    };
    Ho.prototype.clear = function() {
        this.g = this.l = null;
        this.h = 0
    };
    Ho.prototype.isEmpty = function() {
        Ro(this);
        return 0 == this.h
    };
    var Uo = function(a, b) {
        Ro(a);
        b = So(a, b);
        return yo(a.g.h, b)
    };
    k = Ho.prototype;
    k.forEach = function(a, b) {
        Ro(this);
        this.g.forEach(function(c, d) {
            x(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.ya = function() {
        Ro(this);
        for (var a = this.g.ga(), b = this.g.ya(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.ga = function(a) {
        Ro(this);
        var b = [];
        if ("string" === typeof a) Uo(this, a) && (b = eb(b, this.g.get(So(this, a))));
        else {
            a = this.g.ga();
            for (var c = 0; c < a.length; c++) b = eb(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        Ro(this);
        this.l = null;
        a = So(this, a);
        Uo(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.ga(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = this.g.ya(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.ga(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    k.clone = function() {
        var a = new Ho;
        a.l = this.l;
        this.g && (a.g = this.g.clone(), a.h = this.h);
        return a
    };
    var So = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        No = function(a, b) {
            b && !a.o && (Ro(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (To(this, d), To(this, e), 0 < c.length && (this.l = null, this.g.set(So(this, e), fb(c)), this.h += c.length))
            }, a));
            a.o = b
        };
    var Vo = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        Wo = /\bocr\b/,
        Xo = 0,
        Yo = {},
        Zo = function(a) {
            if (sb(Hc(a))) return !1;
            if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0;
            try {
                var b = new Co(a)
            } catch (c) {
                return null !=
                    $a(Vo, function(d) {
                        return 0 < a.search(d)
                    })
            }
            return b.w.match(Wo) ? !0 : null != $a(Vo, function(c) {
                return null != a.match(c)
            })
        },
        cp = function(a) {
            if (a && (a = $o(a), !sb(a))) {
                var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                ap(function(c) {
                    bp(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                })
            }
        },
        bp = function(a) {
            var b = ue("IFRAME", {
                src: a,
                style: "display:none"
            });
            a = le(b).body;
            var c = Hh(function() {
                Bh(d);
                we(b)
            }, 15E3);
            var d = sh(b, ["load",
                "error"
            ], function() {
                Hh(function() {
                    q.clearTimeout(c);
                    we(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        ap = function(a) {
            var b = Yo.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                dp(function(d, e) {
                    delete Yo[e];
                    c || (c = !0, null == Yo.imageLoadingEnabled && (Yo.imageLoadingEnabled = d), a(d))
                })
            }
        },
        dp = function(a) {
            var b = new Image,
                c = "" + Xo++;
            Yo[c] = b;
            b.onload = function() {
                clearTimeout(d);
                a(!0, c)
            };
            var d = setTimeout(function() {
                a(!1, c)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        ep = function(a) {
            if (a) {
                var b =
                    se(document, "OBJECT");
                b.data = a;
                b.width = "1";
                b.height = "1";
                b.style.visibility = "hidden";
                var c = "" + Xo++;
                Yo[c] = b;
                b.onload = b.onerror = function() {
                    delete Yo[c]
                };
                document.body.appendChild(b)
            }
        },
        fp = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + Xo++;
                Yo[c] = b;
                b.onload = b.onerror = function() {
                    delete Yo[c]
                };
                b.src = a
            }
        },
        gp = function(a) {
            a && ap(function(b) {
                b ? fp(a) : ep(a)
            })
        },
        $o = function(a) {
            a instanceof qc || (a = "object" == typeof a && a.La ? a.Da() : String(a), sc.test(a) || (a = "about:invalid#zClosurez"), a = new qc(oc, a));
            var b = rc(a);
            if ("about:invalid#zClosurez" ===
                b) return "";
            if (b instanceof zc) a = b;
            else {
                var c = "object" == typeof b;
                a = null;
                c && b.cc && (a = b.Zb());
                b = Bb(c && b.La ? b.Da() : String(b));
                a = Bc(b, a)
            }
            a = Ac(a).toString();
            return encodeURIComponent(String(dg(a)))
        };
    var hp = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var ip = function(a) {
        var b = a.Ha,
            c = void 0 === a.xa ? !1 : a.xa;
        this.A = a.Oa;
        this.g = b;
        this.w = c
    };
    var jp = function(a) {
        var b = a.xd,
            c = a.Pc,
            d = a.wd,
            e = a.Oc;
        ip.call(this, {
            Oa: a.Oa,
            Ha: a.Ha,
            height: a.height,
            width: a.width,
            xa: void 0 === a.xa ? !1 : a.xa
        });
        this.o = b;
        this.l = c;
        this.F = d;
        this.h = e
    };
    p(jp, ip);
    jp.prototype.getVideoUrl = function() {
        return this.o
    };
    var kp = function(a) {
        var b = a.$c;
        ip.call(this, {
            Oa: a.Oa,
            Ha: a.Ha,
            height: a.height,
            width: a.width,
            xa: void 0 === a.xa ? !1 : a.xa
        });
        this.h = b
    };
    p(kp, ip);
    var lp = function() {
        this.g = w()
    };
    lp.prototype.reset = function() {
        this.g = w()
    };
    var mp = function(a) {
        var b = w();
        a = a.g + 5E3 - b;
        return 0 < a ? a : 0
    };
    var np = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        op = ["c.googlesyndication.com"];
    function pp(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        qp(a, op) ? c = !1 : "https:" == b && qp(a, np) && (c = !0);
        if (c) {
            b = new Co(a);
            if ("https" == b.o) return a;
            Lg(I.B(), "htp", "1");
            Do(b, "https");
            return b.toString()
        }
        return a
    }
    function qp(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    };
    var rp = function(a) {
        return (a = a.exec(Eb)) ? a[1] : ""
    };
    (function() {
        if (nd) return rp(/Firefox\/([0-9.]+)/);
        if (Tc || Uc || Sc) return kd;
        if (rd) return Nc() ? rp(/CriOS\/([0-9.]+)/) : rp(/Chrome\/([0-9.]+)/);
        if (sd && !Nc()) return rp(/Version\/([0-9.]+)/);
        if (od || pd) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Eb);
            if (a) return a[1] + "." + a[2]
        } else if (qd) return (a = rp(/Android\s+([0-9.]+)/)) ? a : rp(/Version\/([0-9.]+)/);
        return ""
    })();
    var up = /OS (\S+) like/,
        vp = /Android ([\d\.]+)/;
    function wp(a, b) {
        a = (a = a.exec(Eb)) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= Db(a, b)
    }
    var xp = function() {
            return Xc && "ontouchstart" in document.documentElement
        },
        yp = function(a) {
            return ed && wp(up, a)
        },
        zp = function(a) {
            return (a = void 0 === a ? null : a) && v(a.getAttribute) ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var Ap = function() {};
    Ap.prototype.g = null;
    Ap.prototype.getOptions = function() {
        var a;
        (a = this.g) || (a = {}, Bp(this) && (a[0] = !0, a[1] = !0), a = this.g = a);
        return a
    };
    var Cp, Dp = function() {};
    Ra(Dp, Ap);
    var Ep = function(a) {
            return (a = Bp(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Bp = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.h = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.h
        };
    Cp = new Dp;
    var Fp = function(a) {
        K.call(this);
        this.headers = new wo;
        this.I = a || null;
        this.h = !1;
        this.H = this.g = null;
        this.N = "";
        this.w = 0;
        this.l = this.L = this.A = this.K = !1;
        this.D = 0;
        this.C = null;
        this.Y = "";
        this.O = this.P = !1
    };
    Ra(Fp, K);
    var Gp = /^https?$/i,
        Hp = ["POST", "PUT"],
        Ip = function(a, b) {
            a.D = Math.max(0, b)
        };
    Fp.prototype.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.N + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.N = a;
        this.w = 0;
        this.K = !1;
        this.h = !0;
        this.g = this.I ? Ep(this.I) : Ep(Cp);
        this.H = this.I ? this.I.getOptions() : Cp.getOptions();
        this.g.onreadystatechange = Pa(this.X, this);
        try {
            this.L = !0, this.g.open(b, String(a), !0), this.L = !1
        } catch (f) {
            Jp(this);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && Bo(d, function(f, g) {
            e.set(g, f)
        });
        d = $a(e.ya(), Kp);
        c = q.FormData &&
            a instanceof q.FormData;
        !bb(Hp, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.g.setRequestHeader(g, f)
        }, this);
        this.Y && (this.g.responseType = this.Y);
        "withCredentials" in this.g && this.g.withCredentials !== this.P && (this.g.withCredentials = this.P);
        try {
            Lp(this), 0 < this.D && ((this.O = Mp(this.g)) ? (this.g.timeout = this.D, this.g.ontimeout = Pa(this.V, this)) : this.C = Hh(this.V, this.D, this)), this.A = !0, this.g.send(a), this.A = !1
        } catch (f) {
            Jp(this)
        }
    };
    var Mp = function(a) {
            return Tc && ld(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        Kp = function(a) {
            return "content-type" == a.toLowerCase()
        };
    Fp.prototype.V = function() {
        "undefined" != typeof za && this.g && (this.w = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var Jp = function(a) {
            a.h = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.w = 5;
            Np(a);
            Op(a)
        },
        Np = function(a) {
            a.K || (a.K = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    Fp.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.w = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Op(this))
    };
    Fp.prototype.R = function() {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Op(this, !0));
        Fp.Va.R.call(this)
    };
    Fp.prototype.X = function() {
        this.ob() || (this.L || this.A || this.l ? Pp(this) : this.$())
    };
    Fp.prototype.$ = function() {
        Pp(this)
    };
    var Pp = function(a) {
            if (a.h && "undefined" != typeof za && (!a.H[1] || 4 != Qp(a) || 2 != Rp(a)))
                if (a.A && 4 == Qp(a)) Hh(a.X, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == Qp(a)) {
                a.h = !1;
                try {
                    var b = Rp(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.N).match(De)[1] || null;
                            if (!f && q.self && q.self.location) {
                                var g = q.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !Gp.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.w = 6, Np(a))
                } finally {
                    Op(a)
                }
            }
        },
        Op = function(a, b) {
            if (a.g) {
                Lp(a);
                var c = a.g,
                    d = a.H[0] ? Ea : null;
                a.g = null;
                a.H = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        Lp = function(a) {
            a.g && a.O && (a.g.ontimeout = null);
            a.C && (q.clearTimeout(a.C), a.C = null)
        };
    Fp.prototype.fc = function() {
        return !!this.g
    };
    var Qp = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Rp = function(a) {
            try {
                return 2 < Qp(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        Sp = function(a) {
            try {
                return a.g ? a.g.responseText : ""
            } catch (b) {
                return ""
            }
        },
        Tp = function(a, b) {
            if (a.g && 4 == Qp(a)) return a = a.g.getResponseHeader(b), null === a ? void 0 : a
        };
    var Up = function() {
            if (!Tc) return !1;
            try {
                return new ActiveXObject("MSXML2.DOMDocument"), !0
            } catch (a) {
                return !1
            }
        },
        Vp = Tc && Up();
    var Wp = function(a) {
        J.call(this);
        this.o = a;
        this.h = {}
    };
    Ra(Wp, J);
    var Xp = [];
    Wp.prototype.T = function(a, b, c, d) {
        return Yp(this, a, b, c, d)
    };
    var Yp = function(a, b, c, d, e, f) {
            Array.isArray(c) || (c && (Xp[0] = c.toString()), c = Xp);
            for (var g = 0; g < c.length; g++) {
                var h = th(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
                if (!h) break;
                a.h[h.key] = h
            }
            return a
        },
        $p = function(a, b, c, d) {
            Zp(a, b, c, d, void 0)
        },
        Zp = function(a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var g = 0; g < c.length; g++) Zp(a, b, c[g], d, e, f);
            else(b = sh(b, c, d || a.handleEvent, e, f || a.o || a)) && (a.h[b.key] = b)
        };
    Wp.prototype.Ba = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.Ba(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Ja(d) ? !!d.capture : !!d, e = e || this.o || this, c = uh(c), d = !!d, b = hh(a) ? oh(a.o, String(b), c, d, e) : a ? (a = wh(a)) ? oh(a, b, c, d, e) : null : null, b && (Bh(b), delete this.h[b.key])
    };
    var aq = function(a) {
        Hb(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && Bh(b)
        }, a);
        a.h = {}
    };
    Wp.prototype.R = function() {
        Wp.Va.R.call(this);
        aq(this)
    };
    Wp.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var bq = function() {};
    bq.prototype.get = function(a, b) {
        return cq(a, b)
    };
    var cq = function(a, b) {
            return dq(a, !0, b).then(function(c) {
                return Promise.resolve(c)
            }, function(c) {
                return c instanceof Error && 6 == c.message ? dq(a, !1, b) : Promise.reject(c)
            })
        },
        dq = function(a, b, c) {
            var d = new Fp;
            d.P = b;
            Ip(d, mp(c));
            var e = new Wp;
            return new Promise(function(f, g) {
                $p(e, d, "success", function() {
                    try {
                        var h = d.g ? d.g.responseXML : null
                    } catch (B) {
                        h = null
                    }
                    if (null == h)
                        if (h = Sp(d), "undefined" != typeof DOMParser) {
                            var l = new DOMParser;
                            Be();
                            h = Bc(h, null);
                            h = l.parseFromString(Ac(h), "application/xml")
                        } else if (Vp) {
                        l = new ActiveXObject("MSXML2.DOMDocument");
                        l.resolveExternals = !1;
                        l.validateOnParse = !1;
                        try {
                            l.setProperty("ProhibitDTD", !0), l.setProperty("MaxXMLSize", 2048), l.setProperty("MaxElementDepth", 256)
                        } catch (B) {}
                        l.loadXML(h);
                        h = l
                    } else throw Error("Your browser does not support loading xml documents");
                    l = ng(Rg);
                    var n;
                    if (n = h && h.documentElement)(n = h.documentElement) && "VAST" != !n.nodeName ? (n = n.getAttribute("version")) ? (n = parseInt(n, 10), n = null == n || isNaN(n) ? null : n) : n = null : n = null, n = null == n || 2 > n || 4 < n ? !1 : !0;
                    if (!n && l) {
                        l = {
                            vastUrl: a.substring(0, 200),
                            responseText: Sp(d).substring(0,
                                200),
                            status: Rp(d),
                            contentType: Tp(d, "Content-Type"),
                            acao: Tp(d, "Access-Control-Allow-Origin"),
                            acac: Tp(d, "Access-Control-Allow-Credentials"),
                            origin: window.location.origin
                        };
                        n = I.B();
                        for (var m = ba(Object.keys(l)), t = m.next(); !t.done; t = m.next()) t = t.value, Lg(n, t, l[t])
                    }
                    f(h);
                    e.U();
                    d.U()
                });
                $p(e, d, ["error", "timeout"], function() {
                    g(Error(d.w));
                    e.U();
                    d.U()
                });
                d.send(pp(a), "GET", void 0)
            })
        };
    var eq = function(a) {
            var b = {};
            a.split(",").forEach(function(c) {
                var d = c.split("=");
                2 == d.length && (c = tb(d[0]), d = tb(d[1]), 0 < c.length && (b[c] = d))
            });
            return b
        },
        fq = function(a) {
            var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
            if (!a) return null;
            a = a.toLowerCase().replace("-", "_");
            if (b.includes(a)) return a;
            a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
            return b.includes(a) ? a : null
        };
    function gq(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return new(Function.prototype.bind.apply(a, [null].concat(ca(c))))
    };
    function hq() {
        Wd.set("GoogleAdServingTest", "Good");
        var a = "Good" == Wd.get("GoogleAdServingTest");
        a && Ud(Wd, "GoogleAdServingTest");
        return a
    };
    var iq = {
        cg: "autoplayDisallowed",
        dg: "beginFullscreen",
        eg: "canPlay",
        fg: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        jg: "end",
        kg: "endFullscreen",
        lg: "error",
        pg: "focusSkipButton",
        Gg: "loadStart",
        LOADED: "loaded",
        Hg: "mediaLoadTimeout",
        Ig: "mediaPlaybackTimeout",
        Ub: "pause",
        Rg: "play",
        Wg: "seeked",
        Xg: "seeking",
        Yg: "skip",
        Zg: "skipShown",
        Vb: "start",
        fh: "timeUpdate",
        bh: "timedMetadata",
        Ld: "volumeChange",
        ih: "waiting"
    };
    var jq = function() {};
    function kq() {
        return !!window.MediaSource
    };
    var lq = function(a, b, c) {
        var d = new jq;
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var nq = function(a, b, c, d, e) {
        J.call(this);
        this.$ = a;
        this.H = new Co(b.url);
        this.h = c;
        this.l = e;
        this.I = b.g;
        this.Y = d;
        (this.K = b.h) || To(this.H.h, "alr");
        Lg(I.B(), "sl_dv" + this.l, (null != this.K).toString());
        this.L = !this.K;
        this.V = 0;
        this.g = new XMLHttpRequest;
        this.C = this.X = this.A = this.o = 0;
        this.O = .1;
        this.w = [];
        this.D = !1;
        this.P = this.N = null;
        mq(this)
    };
    p(nq, J);
    var mq = function(a) {
            a.N = th(a.g, "load", function() {
                oq(a);
                if (a.L) {
                    var b = a.g.responseText;
                    a.D = !b || b.length < a.I;
                    a.C = 0;
                    Mg(I.B(), "sl_cc" + a.l + "-" + a.A);
                    a.A++;
                    pq(a)
                }
            });
            a.P = th(a.g, "progress", function() {
                oq(a)
            });
            a.g.addEventListener("error", function() {
                Mg(I.B(), "sl_ec" + a.l + "-" + a.o)
            });
            a.h.addEventListener("updateend", function() {
                a.h.buffered.length && (a.X = a.h.buffered.end(0), a.D && !a.h.updating && a.o == a.A && (Mg(I.B(), "sl_lc" + a.l), a.Y()))
            });
            a.h.addEventListener("update", function() {
                a.w.length && !a.h.updating && a.h.appendBuffer(a.w.shift())
            });
            a.h.addEventListener("error", function() {
                Mg(I.B(), "msb_err" + a.l)
            });
            qq(a)
        },
        qq = function(a) {
            Mg(I.B(), "sl_rc" + a.l + "-" + a.o);
            var b = a.o * a.I;
            b = Po(a.H, "range", b + "-" + (b + a.I - 1)).toString();
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.o++
        },
        oq = function(a) {
            if (!a.L) {
                var b = a.g.getResponseHeader("content-type");
                if (b && 0 <= b.indexOf("text/plain")) {
                    a.g.readyState == XMLHttpRequest.DONE && (a.H = new Co(a.g.response), a.o = 0, a.A = 0, a.V++, qq(a));
                    return
                }
                a.L = !0;
                Mg(I.B(), "sl_redc" + a.l);
                Lg(I.B(), "sl_tr" + a.l, a.V.toString())
            }
            To(a.H.h, "alr");
            if (a.g.readyState == XMLHttpRequest.LOADING || a.g.readyState == XMLHttpRequest.DONE) {
                b = a.g.response;
                for (var c = new Uint8Array(b.length - a.C), d = 0; d < c.length; d++) c[d] = b.charCodeAt(d + a.C) & 255;
                a.C = b.length;
                b = c.buffer;
                0 < b.byteLength && (a.h.updating || a.w.length ? a.w.push(b) : a.h.appendBuffer(b))
            }
        },
        pq = function(a) {
            var b = a.A == a.o && !a.h.updating && !a.w.length;
            !a.D && b && a.$.currentTime >= a.O && (a.O = a.X + .1, qq(a))
        };
    nq.prototype.R = function() {
        Bh(this.N);
        Bh(this.P);
        J.prototype.R.call(this)
    };
    var sq = function(a, b) {
        J.call(this);
        var c = this;
        this.A = a;
        this.D = b;
        this.h = new MediaSource;
        this.C = [];
        this.l = [];
        this.g = this.w = null;
        this.o = !1;
        this.h.addEventListener("sourceopen", function() {
            return rq(c)
        })
    };
    p(sq, J);
    var rq = function(a) {
        Mg(I.B(), "msmsw_oso");
        a.w = th(a.A, "timeupdate", function() {
            if (!a.o)
                for (var e = ba(a.l), f = e.next(); !f.done; f = e.next()) pq(f.value)
        });
        for (var b = 0; b < a.D.length; b++) {
            var c = a.D[b];
            Lg(I.B(), "msmsw_mime" + b, c.mimeType);
            Lg(I.B(), "msmsw_cs" + b, c.mimeType);
            var d = a.h.addSourceBuffer(c.mimeType);
            d ? (a.C.push(d), c = gq(nq, a.A, c, d, function() {
                    a: if (!a.o) {
                        for (var e = ba(a.l), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, !f.D || f.h.updating || f.w.length) break a;
                        a.h.endOfStream();
                        a.o = !0;
                        Bh(a.w)
                    }
                }, b), a.l.push(c)) :
                Mg(I.B(), "msmsw_sbf" + b)
        }
        Lg(I.B(), "msmsw_ns", a.C.length.toString())
    };
    sq.prototype.R = function() {
        this.g && window.URL.revokeObjectURL(this.g);
        for (var a = ba(this.l), b = a.next(); !b.done; b = a.next()) b.value.U();
        Bh(this.w);
        J.prototype.R.call(this)
    };
    var tq = function() {
        throw Error("Do not instantiate directly");
    };
    tq.prototype.g = null;
    tq.prototype.getContent = function() {
        return this.content
    };
    tq.prototype.toString = function() {
        return this.content
    };
    var uq = function() {
        tq.call(this)
    };
    Ra(uq, tq);
    var vq = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(uq);
    var wq = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        xq = function(a) {
            a = tb(a);
            if ("" == a) return null;
            var b = String(a.substr(0, 4)).toLowerCase();
            if (0 == ("url(" <
                    b ? -1 : "url(" == b ? 0 : 1)) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in wq)) return null
            }
            return a
        };
    function yq(a) {
        var b = q.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    var zq = yq("getPropertyValue"),
        Aq = yq("setProperty");
    function Bq(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (Tc && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var Cq = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        Eq = function(a) {
            if (!a) return xc;
            var b = document.createElement("div").style,
                c = Dq(a);
            x(c, function(d) {
                var e = Wc && d in Cq ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = Bq(zq, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [d]) || "", d = xq(d), null != d && Bq(Aq, b, b.setProperty ? "setProperty" : "setAttribute", [e, d]))
            });
            return wc(b.cssText ||
                "")
        },
        Dq = function(a) {
            Ia(a) ? a = fb(a) : (a = Ob(a), cb(a, "cssText"));
            return a
        };
    var Fq = function() {
        if (window.MutationObserver) {
            var a = [];
            (new MutationObserver(function() {
                a.forEach(function(b) {
                    return b()
                });
                a = []
            })).observe(document.createTextNode(""), {
                characterData: !0
            })
        }
    };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || Fq();
    var Gq = function(a, b, c) {
        this.l = a;
        this.g = Math.min(Math.max(b || 0, 0), 1);
        this.h = null != c ? c : !0
    };
    Gq.prototype.getId = function() {
        return this.l
    };
    var Hq = function(a) {
        this.l = a;
        this.h = new wo;
        this.g = null
    };
    Hq.prototype.getId = function() {
        return this.l
    };
    var Iq = function(a) {
        var b = Math.random(),
            c = 0,
            d = a.h.ga();
        d.forEach(function(h) {
            c += h.g
        });
        var e = 1 < c ? c : 1;
        a.g = null;
        for (var f = 0, g = 0; g < d.length; ++g)
            if (f += d[g].g, f / e >= b) {
                a.g = d[g];
                break
            }
    };
    var Jq = function() {
        return null != q.G_testRunner
    };
    var Kq = function(a) {
            this.g = a
        },
        Nq = function() {
            var a = Lq(T);
            return Mq(a, "disableExperiments")
        },
        Mq = function(a, b) {
            return Qb(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1
        },
        Oq = function(a) {
            if (Qb(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Ha(a) && a.forEach(function(d) {
                    "number" === typeof d && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var V = function() {
            this.w = "always";
            this.J = 4;
            this.I = 1;
            this.g = 0;
            this.l = !0;
            this.A = "en";
            this.N = !1;
            this.D = this.C = "";
            this.H = null;
            this.X = this.O = -1;
            this.V = this.L = this.K = "";
            this.h = !1;
            this.o = !0;
            try {
                this.aa = Ii(void 0)[0]
            } catch (a) {}
        },
        Pq = function(a) {
            a = Hc(a);
            sb(a) || (a = a.substring(0, 20));
            return a
        };
    k = V.prototype;
    k.rf = function(a) {
        this.w = a
    };
    k.ff = function() {
        return this.w
    };
    k.xf = function(a) {
        this.J = a
    };
    k.jf = function() {
        return this.J
    };
    k.Af = function(a) {
        this.P = a
    };
    k.mf = function() {
        return this.P
    };
    k.Bf = function(a) {
        "boolean" === typeof a && (this.I = a ? 1 : 0)
    };
    k.Cf = function(a) {
        this.I = a
    };
    k.qf = function(a) {
        this.l = a
    };
    k.nf = function() {
        return this.l
    };
    k.vf = function(a) {
        this.N = a
    };
    k.ab = function() {
        return this.N
    };
    k.wf = function(a) {
        if (a = fq(a)) this.A = a
    };
    k.Wd = function() {
        return this.A
    };
    k.yf = function(a) {
        this.C = Pq(a)
    };
    k.kf = function() {
        return this.C
    };
    k.zf = function(a) {
        this.D = Pq(a)
    };
    k.lf = function() {
        return this.D
    };
    var Lq = function(a) {
        if (null == a.H) {
            var b = {};
            var c = (new Co(F().location.href)).h;
            if (Uo(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.H = new Kq(b)
        }
        return a.H
    };
    V.prototype.Y = function(a) {
        this.O = a
    };
    V.prototype.$ = function(a) {
        this.X = a
    };
    var Sq = function() {
            var a = T;
            Qq();
            a.K = Rq[1] || ""
        },
        Tq = function() {
            var a = T;
            Qq();
            a.V = Rq[6] || ""
        },
        Uq = function() {
            var a = T;
            Qq();
            a.L = Rq[4] || ""
        };
    k = V.prototype;
    k.tf = function(a) {
        this.h = a
    };
    k.gf = function() {
        return this.h
    };
    k.sf = function(a) {
        this.o = a
    };
    k.uf = function() {};
    k.hf = function() {
        return !0
    };
    var T = new V;
    var Yq = function() {
            this.h = !1;
            this.g = new wo;
            Vq(this, 44715558);
            Vq(this, 44715559);
            Wq(this);
            var a = Lq(T);
            a = Oq(a);
            null != a && (this.h = !0, Xq(this, a.map(String)))
        },
        Zq = null,
        $q = function() {
            Zq || (Zq = new Yq);
            return Zq
        },
        Vq = function(a, b) {
            sb(Hc("GvnExternalLayer")) || isNaN(b) || 0 >= b || (b = new Gq(b, .01), ar(a, "GvnExternalLayer").h.set(b.getId(), b))
        },
        Wq = function(a) {
            Nq() || a.g.ga().forEach(function(b) {
                Iq(b)
            })
        },
        br = function(a, b, c, d) {
            isNaN(b) || 0 >= b || sb(Hc(c)) || (a.h = !0, d = null != d ? d : !0, ar(a, c).g = new Gq(b, 0, d))
        },
        Xq = function(a, b) {
            b.forEach(function(c) {
                br(a,
                    Number(c), "FORCED_PUB_EXP_LAYER_" + c, void 0)
            })
        },
        cr = function() {
            var a = {};
            $q().g.ga().forEach(function(b) {
                var c = b.g;
                if (c) {
                    var d = {};
                    d.experimentId = c.getId();
                    d.shouldReport = c.h;
                    a[b.getId()] = d
                } else a[b.getId()] = {}
            });
            return a
        },
        dr = function() {
            var a = $q(),
                b;
            (b = a.h) || (b = Nq() ? 0 : !Jq());
            return b ? a.g.ga().some(function(c) {
                return !!c.g && 44715559 == c.g.getId()
            }) : !1
        },
        er = function() {
            var a = $q(),
                b;
            if (b = !a.h)(b = Nq()) || (b = Jq());
            if (b) return "";
            var c = [];
            a.g.ga().forEach(function(d) {
                (d = d.g) && d.h && c.push(d.getId())
            });
            a = rg();
            return c.concat(a).sort().join(",")
        },
        ar = function(a, b) {
            var c = a.g.get(b);
            null == c && (c = new Hq(b), a.g.set(b, c));
            return c
        };
    var fr = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var ir = function() {
            var a = "h.3.371.3";
            null != gr ? (a += "/n." + gr, null != hr && (a += "/" + hr)) : T.ab() && (a += "/vpaid_adapter");
            return a
        },
        hr = null,
        gr = null;
    var jr = function(a) {
            var b = Lq(T);
            if (b && Mq(b, "forceCustomPlayback") || T.ab()) return !0;
            if (($c || xp()) && a) return !1;
            a = a && ($c || xp() || yp(10)) && (T.h || ng(Sg));
            return (Zc || ad) && !a || Yc && (!Yc || !wp(vp, 4)) || Kj() ? !0 : !1
        },
        kr = function(a) {
            return null == a ? !1 : T.ab() ? !0 : ed || $c || xp() ? zp(a) ? $c || xp() || yp(10) && T.h ? !1 : !0 : !0 : Yc && (!Yc || !wp(vp, 4)) || Kj() ? !0 : !1
        },
        lr = function() {
            var a = Lq(T);
            return a && Mq(a, "disableOnScreenDetection") ? !1 : !Ij()
        };
    var mr = function() {
            this.creativeType = "All";
            this.g = []
        },
        nr = {
            Bg: "Image",
            og: "Flash",
            ag: "All"
        };
    var or = !1,
        pr = function(a) {
            if (a = a.match(/[\d]+/g)) a.length = 3
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (or = !0, a.description)) {
                pr(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                or = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], or = !(!a || !a.enabledPlugin))) {
            pr(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                or = !0;
                pr(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                or = !0;
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), or = !0, pr(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    var qr = or;
    var rr = function(a, b) {
            b = void 0 === b ? new mr : b;
            this.o = a;
            this.g = b ? b : new mr;
            a = this.g.creativeType;
            this.l = null != a && Rb(nr, a) ? this.g.creativeType : "All";
            this.h = null != this.g.g ? this.g.g : []
        },
        ur = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                !sb(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.masterSequenceNumber) || d.g.masterSequenceNumber == d.g.sequenceNumber) && sr(a, d) ? c.push(d) : (d = tr(a, d), null != d && !sb(d.getContent()) && c.push(d))
            });
            return c
        },
        sr = function(a, b) {
            var c;
            if (c = "Flash" != b.h() || qr)
                if (c = b.h(), c = null ==
                    c ? !0 : "All" == a.l || a.l == c) c = b.g.adSlotId, c = 0 == a.h.length ? !0 : null != c ? a.h.includes(c) : !1;
            c ? (b = b.g.size, a = a.o, a = a == b || a && b && a.width == b.width && a.height == b.height ? !0 : !1) : a = !1;
            return a
        },
        tr = function(a, b) {
            b = vr(b);
            return null == b ? null : b.find(function(c) {
                return sr(a, c)
            }) || null
        };
    var wr = function(a) {
        K.call(this);
        this.w = a || "goog_" + Ic++;
        this.l = [];
        this.h = !1
    };
    p(wr, K);
    wr.prototype.connect = function() {
        for (this.h = !0; 0 != this.l.length;) {
            var a = this.l.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    wr.prototype.send = function(a, b, c) {
        this.h ? this.sendMessage(a, b, c) : this.l.push({
            name: a,
            type: b,
            data: c
        })
    };
    wr.prototype.sendMessage = function() {};
    var W = {},
        xr = (W.creativeView = "creativeview", W.start = "start", W.midpoint = "midpoint", W.firstQuartile = "firstquartile", W.thirdQuartile = "thirdquartile", W.complete = "complete", W.mute = "mute", W.unmute = "unmute", W.pause = "pause", W.rewind = "rewind", W.resume = "resume", W.fullscreen = "fullscreen", W.exitFullscreen = "exitfullscreen", W.expand = "expand", W.collapse = "collapse", W.close = "close", W.acceptInvitation = "acceptinvitation", W.userInteraction = "userInteraction", W.adCanPlay = "adCanPlay", W.adStarted = "adStarted", W.abandon = "abandon",
            W.acceptInvitationLinear = "acceptinvitationlinear", W.engagedView = "engagedview", W.instreamAdComplete = "instreamAdComplete", W.skipShown = "skipshown", W.skippableStateChanged = "skippableStateChanged", W.skip = "skip", W.progress = "progress", W.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", W.annotation_start = "annotation_start", W.annotation_click = "annotation_click", W.annotation_close = "annotation_close", W.cta_annotation_shown = "cta_annotation_shown", W.cta_annotation_clicked = "cta_annotation_clicked", W.cta_annotation_closed =
            "cta_annotation_closed", W.replay = "replay", W.stop = "stop", W.autoplayDisallowed = "autoplayDisallowed", W.error = "error", W.mediaLoadTimeout = "mediaLoadTimeout", W.linearChanged = "linearChanged", W.click = "click", W.contentPauseRequested = "contentPauseRequested", W.contentResumeRequested = "contentResumeRequested", W.discardAdBreak = "discardAdBreak", W.updateAdsRenderingSettings = "updateAdsRenderingSettings", W.durationChange = "durationChange", W.expandedChanged = "expandedChanged", W.autoClose = "autoClose", W.userClose = "userClose",
            W.userRecall = "userRecall", W.prefetched = "prefetched", W.loaded = "loaded", W.init = "init", W.allAdsCompleted = "allAdsCompleted", W.adMetadata = "adMetadata", W.adBreakReady = "adBreakReady", W.adBreakFetchError = "adBreakFetchError", W.log = "log", W.volumeChange = "volumeChange", W.companionBackfill = "companionBackfill", W.companionInitialized = "companionInitialized", W.companionImpression = "companionImpression", W.companionClick = "companionClick", W.impression = "impression", W.interaction = "interaction", W.adProgress = "adProgress",
            W.adBuffering = "adBuffering", W.trackingUrlPinged = "trackingUrlPinged", W.measurable_impression = "measurable_impression", W.custom_metric_viewable = "custom_metric_viewable", W.viewable_impression = "viewable_impression", W.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", W.overlay_resize = "overlay_resize", W.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", W.overlay_unviewable_impression = "overlay_unviewable_impression", W.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", W.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", W.externalActivityEvent = "externalActivityEvent", W.adEvent = "adEvent", W.configure = "configure", W.remainingTime = "remainingTime", W.destroy = "destroy", W.resize = "resize", W.volume = "volume", W.sendAbandonUrls = "sendAbandonUrls", W.authorIconClicked = "videoAuthorIconClicked", W.authorNameClicked = "videoAuthorClicked", W.videoClicked = "videoClicked", W.videoIconClicked = "videoIconClicked", W.learnMoreClicked =
            "videoLearnMoreClicked", W.muteClicked = "videoMuteClicked", W.titleClicked = "videoTitleClicked", W.skipShown = "SKIP_SHOWN", W.videoSkipClicked = "SKIPPED", W.unmuteClicked = "videoUnmuteClicked", W.vpaidEvent = "vpaidEvent", W.show_ad = "show_ad", W.video_card_endcap_collapse = "video_card_endcap_collapse", W.video_card_endcap_dismiss = "video_card_endcap_dismiss", W.video_card_endcap_impression = "video_card_endcap_impression", W.mediaUrlPinged = "mediaUrlPinged", W.breakStart = "breakstart", W.breakEnd = "breakend", W.omidReady = "omidReady",
            W.omidUnavailable = "omidUnavailable", W.omidAdSessionCompleted = "omidAdSessionCompleted", W.omidAdSessionAbandoned = "omidAdSessionAbandoned", W.verificationNotExecuted = "verificationNotExecuted", W.loadStart = "loadStart", W.seeked = "seeked", W.seeking = "seeking", W);
    var yr = function(a) {
        this.g = a
    };
    k = yr.prototype;
    k.pe = function() {
        return this.g.totalAds
    };
    k.me = function() {
        return this.g.maxDuration
    };
    k.ke = function() {
        return this.g.adPosition
    };
    k.ne = function() {
        return this.g.podIndex
    };
    k.oe = function() {
        return this.g.timeOffset
    };
    k.le = function() {
        return this.g.isBumper
    };
    var zr = function(a) {
        this.g = a
    };
    zr.prototype.getContent = function() {
        return this.g.content
    };
    zr.prototype.h = function() {
        return this.g.contentType
    };
    zr.prototype.o = function() {
        return this.g.size.width
    };
    zr.prototype.l = function() {
        return this.g.size.height
    };
    var vr = function(a) {
        return (a = a.g.backupCompanions) ? a.map(function(b) {
            return new zr(b)
        }) : []
    };
    var Ar = function(a, b) {
        this.h = a;
        this.g = b
    };
    Ar.prototype.o = function() {
        return this.h
    };
    Ar.prototype.l = function() {
        return this.g
    };
    var X = function(a) {
        this.g = a
    };
    X.prototype.h = function() {
        return this.g.adId
    };
    X.prototype.l = function() {
        return this.g.creativeAdId
    };
    X.prototype.o = function() {
        return this.g.creativeId
    };
    var Br = function(a) {
        return a.g.adQueryId
    };
    k = X.prototype;
    k.re = function() {
        return this.g.adSystem
    };
    k.se = function() {
        return this.g.advertiserName
    };
    k.te = function() {
        return this.g.apiFramework
    };
    k.Oe = function() {
        return this.g.adWrapperIds
    };
    k.Qe = function() {
        return this.g.adWrapperCreativeIds
    };
    k.Pe = function() {
        return this.g.adWrapperSystems
    };
    k.isLinear = function() {
        return this.g.linear
    };
    k.Re = function() {
        return this.g.skippable
    };
    k.ve = function() {
        return this.g.contentType
    };
    k.xe = function() {
        return this.g.description
    };
    k.De = function() {
        return this.g.title
    };
    k.getDuration = function() {
        return this.g.duration
    };
    k.Me = function() {
        return this.g.vastMediaWidth
    };
    k.Le = function() {
        return this.g.vastMediaHeight
    };
    k.Ne = function() {
        return this.g.width
    };
    k.ye = function() {
        return this.g.height
    };
    k.Ge = function() {
        return this.g.uiElements
    };
    k.Ae = function() {
        return this.g.minSuggestedDuration
    };
    k.qe = function() {
        return new yr(this.g.adPodInfo)
    };
    k.ue = function(a, b, c) {
        var d = this.g.companions.map(function(e) {
            return new zr(e)
        });
        return ur(new rr(new E(a, b), c), d)
    };
    k.Ee = function() {
        return eq(Hc(this.g.traffickingParameters))
    };
    k.Fe = function() {
        return this.g.traffickingParameters
    };
    k.Ke = function() {
        return this.g.vastMediaBitrate
    };
    k.ze = function() {
        return this.g.mediaUrl
    };
    k.Ce = function() {
        return this.g.surveyUrl
    };
    k.we = function() {
        return this.g.dealId
    };
    k.Je = function() {
        return (this.g.universalAdIds || []).map(function(a) {
            return new Ar(a.adIdValue, a.adIdRegistry)
        })
    };
    k.Ie = function() {
        return this.g.universalAdIdValue
    };
    k.He = function() {
        return this.g.universalAdIdRegistry
    };
    k.Be = function() {
        return this.g.skipTimeOffset
    };
    k.Se = function() {
        return this.g.disableUi
    };
    var Cr = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        $g.call(this, a);
        this.A = b;
        this.w = c
    };
    p(Cr, $g);
    Cr.prototype.F = function() {
        return this.A
    };
    Cr.prototype.J = function() {
        return this.w
    };
    function Dr(a) {
        a = pp(a, Ij() ? "https" : window.location.protocol);
        if (Ij()) Er(a);
        else try {
            a && (Zo(a) ? cp(a) : gp(a))
        } catch (b) {}
    }
    function Er(a) {
        (new bq).get(a, new lp).then(function() {}, function() {})
    };
    var Fr = function(a, b, c) {
        a = Error.call(this);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        this.l = b;
        this.h = c
    };
    p(Fr, Error);
    Fr.prototype.toString = function() {
        return "AdError " + this.h + ": " + this.l + (null != this.g ? " Caused by: " + this.g : "")
    };
    var Gr = function(a, b) {
            this.message = a;
            this.g = b
        },
        Hr = new Gr("Failed to initialize ad playback element before starting ad playback.", 400),
        Ir = new Gr("The provided {0} information: {1} is invalid.", 1101);
    function Jr(a, b, c) {
        var d = void 0 === b ? null : b;
        if (!(d instanceof Fr)) {
            var e = a.g,
                f = a.message,
                g = Array.prototype.slice.call(arguments, 2);
            if (0 < g.length)
                for (var h = 0; h < g.length; h++) f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
            e = new Fr("adPlayError", f, e);
            e.g = d;
            d = e
        }
        return d
    };
    var Kr = function() {
        K.call(this);
        this.I = !1;
        this.g = null;
        this.C = this.H = this.L = !1;
        this.h = 0;
        this.w = [];
        this.D = !1;
        this.O = this.N = Infinity;
        this.l = 0;
        this.A = new Wp(this);
        this.K = {}
    };
    p(Kr, K);
    var Mr = function(a, b) {
            null == b || a.I || (a.g = b, Lr(a), a.I = !0)
        },
        Or = function(a) {
            null != a.g && a.I && (Nr(a), a.I = !1, a.H = !1, a.C = !1, a.h = 0, a.w = [], a.D = !1)
        },
        Lr = function(a) {
            Nr(a);
            !(a.g instanceof K) && "ontouchstart" in document.documentElement && ed ? (a.K = {
                touchstart: function(b) {
                    a.H = !0;
                    a.h = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.L = !0);
                    a.D = Pr(a, b.touches) || 1 != b.touches.length;
                    a.D ? (a.N = Infinity, a.O = Infinity) : (a.N = b.touches[0].clientX, a.O = b.touches[0].clientY);
                    b = b.touches;
                    a.w = [];
                    for (var c = 0; c < b.length; c++) a.w.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.h = b.touches.length;
                    if (!yp(8) || Math.pow(b.changedTouches[0].clientX - a.N, 2) + Math.pow(b.changedTouches[0].clientY - a.O, 2) > Math.pow(5, 2)) a.C = !0
                },
                touchend: function(b) {
                    return void Qr(a, b)
                }
            }, Hb(a.K, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.A.T(a.g, "click", a.P)
        },
        Nr = function(a) {
            a.A.Ba(a.g, "click", a.P);
            Hb(a.K, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.K = {}
        },
        Qr = function(a, b) {
            !a.H || 1 != a.h || a.C || a.L || a.D || !Pr(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void Rr(a)
                },
                300));
            a.h = b.touches.length;
            0 == a.h && (a.H = !1, a.C = !1, a.w = []);
            a.L = !1
        };
    Kr.prototype.P = function() {
        Rr(this)
    };
    var Pr = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.w.includes(b[c].identifier)) return !0;
            return !1
        },
        Rr = function(a) {
            a.l = 0;
            a.dispatchEvent(new $g("click"))
        };
    Kr.prototype.R = function() {
        Or(this);
        this.A.U();
        this.A = null;
        K.prototype.R.call(this)
    };
    var Sr = function(a, b, c) {
        this.h = c;
        0 == b.length && (b = [
            []
        ]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length;) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var l = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
                } else if (239 < h && 365 > h) {
                    l = d[f++];
                    var n = d[f++],
                        m = d[f++];
                    h = ((h & 7) << 18 | (l & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else l = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                    (l & 63) << 6 | n & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    Sr.prototype.match = function(a) {
        var b = this;
        return this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.371.3" == c[1] || 2 <= c.length && "3.371.3" == c[2] ? !0 : !1
        })
    };
    var Tr = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        Ur = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        Vr = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115,
            101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47
        ],
        Wr = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Xr = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
                50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        Yr = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Zr = new Sr(Tr, Wr, !1),
        $r = new Sr(Tr, Xr, !0),
        as = new Sr(Ur, Wr, !1),
        bs = new Sr(Ur, Xr, !0),
        cs = new Sr(Vr, Wr, !1),
        ds = new Sr([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
            121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1),
        es = new Sr(Tr, [
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44,
                51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ], !0),
        fs = new Sr(Tr, Yr, !1),
        gs = new Sr(Vr, Yr, !1),
        Jb = {
            xg: Zr,
            vg: $r,
            Fg: as,
            Eg: bs,
            yg: cs,
            $g: ds,
            wg: es,
            Kg: fs,
            Lg: gs
        };
    var hs = function() {
            var a = F(),
                b = document;
            return new Co(a.parent == a ? a.location.href : b.referrer)
        },
        is = function(a, b) {
            Po(a, "url", "");
            try {
                var c = 2083 - a.toString().length - 1;
                if (0 >= c) return a.toString();
                for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
                Po(a, "url", d)
            } catch (g) {}
            return a.toString()
        };
    var js = function() {
        this.g = .01 > Math.random();
        this.h = Math.floor(4503599627370496 * Math.random())
    };
    js.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (!Jq() && (this.g || (void 0 === c ? 0 : c))) {
            b.lid = a;
            b.sdkv = ir();
            a = er();
            sb(Hc(a)) || (b.e = a);
            b = ks(this, b);
            var d = new Co("http://pagead2.googlesyndication.com/pagead/gen_204");
            Hb(b, function(e, f) {
                Po(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = hs();
            Do(d, b.o);
            b = d.toString();
            a = d.h.get("url");
            null != a && ac() && 2083 < b.length && (b = is(d, a));
            Dr(b)
        }
    };
    var ks = function(a, b) {
        b.id = "ima_html5";
        var c = hs();
        b.c = a.h;
        b.domain = c.g;
        return b
    };
    Fa(js);
    var ls = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        $g.call(this, a);
        this.ba = b;
        this.fa = c;
        this.Mb = d;
        this.ld = e
    };
    p(ls, $g);
    ls.prototype.toString = function() {
        return ""
    };
    var ms = null,
        ns = function() {
            K.call(this);
            this.g = null;
            this.D = new Wp(this);
            Zg(this, this.D);
            this.h = new Map;
            this.w = new Map;
            this.l = this.A = !1;
            this.C = null
        },
        os;
    p(ns, K);
    var ps = function() {
        null == ms && (ms = new ns);
        return ms
    };
    ns.prototype.td = function() {};
    var no = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && a.g.send("activityMonitor", "viewabilityMeasurement", d)
    };
    ns.prototype.destroy = function() {
        this.D.Ba(this.g, "activityMonitor", this.H);
        this.l = !1;
        this.h.clear();
        this === os && (os = null)
    };
    ns.prototype.R = function() {
        this.destroy();
        K.prototype.R.call(this)
    };
    var rs = function(a) {
            if (null == a) return !1;
            if ((Zc || ad) && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            a = qs(a);
            var b = window.screen.availHeight || window.screen.height;
            return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
        },
        qs = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                v(a.getBoundingClientRect) && ye(le(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        ts = function(a, b, c, d, e) {
            e = void 0 === e ? {} :
                e;
            if (a.l) {
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.C) return a.C(b, c, e);
                if (a = d ? a.w.get(d) : T.F) null == e.opt_fullscreen && (e.opt_fullscreen = rs(a)), null == e.opt_adElement && (e.opt_adElement = a);
                return Uf.Ua(469, Qa(qo, b, c, e), void 0) || {}
            }
            return {}
        },
        us = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.w.set(c, b);
            if (ng(Tg)) try {
                ai(function(d) {
                    if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        a.g.send("activityMonitor", "engagementData", e)
                    }
                }, function() {
                    return b
                })
            } catch (d) {}
            0 != T.g && oo(co.B(), c, a);
            return c
        },
        vs = function(a,
            b, c) {
            if (c) a.h.get(c) == b && a.h.delete(c);
            else {
                var d = [];
                a.h.forEach(function(e, f) {
                    e == b && d.push(f)
                });
                d.forEach(a.h.delete, a.h)
            }
        },
        jo = function(a, b) {
            a = a.h.get(b);
            return v(a) ? a() : {}
        },
        ws = function(a) {
            if (v(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                a.g.send("activityMonitor", "pageSignals", b)
            }
        };
    ns.prototype.H = function(a) {
        var b = a.fa,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.ba) {
            case "getPageSignals":
                ws(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = ts(this, e, c, a, f);
                this.g.send("activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, Qb(b, "isFullscreen") && (e = b.isFullscreen), Qb(b, "loggingId") && (b = b.loggingId, c.loggingId = b, js.B().report(43, {
                    step: "beforeLookup",
                    logid: b,
                    time: Date.now()
                })), c.engagementString = xs(this, a, e), this.g && this.g.send("activityMonitor", "engagement", c)
        }
    };
    var xs = function(a, b, c) {
        var d = b ? a.w.get(b) : T.F;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = $h(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Fc(e.name, 12) + ";" + Fc(e.message, 40)
        }
        return c
    };
    u("ima.common.getVideoMetadata", function(a) {
        return jo(ps(), a)
    }, void 0);
    u("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        no(ps(), a, b)
    }, void 0);
    var ys = Tc ? nc(hc(ic('javascript:""'))) : nc(hc(ic("about:blank")));
    mc(ys);
    var zs = Tc ? nc(hc(ic('javascript:""'))) : nc(hc(ic("javascript:undefined")));
    mc(zs);
    var As = function(a) {
        $g.call(this, a)
    };
    p(As, $g);
    var Bs = function() {
            this.loadVideoTimeout = 8E3;
            this.autoAlign = !0;
            this.bitrate = -1;
            this.uiElements = null;
            this.enablePreloading = this.disableClickThrough = !1;
            this.mimeTypes = null;
            this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            this.playAdsAfterTime = -1;
            this.useVideoAdUi = !0;
            this.disableUi = !1
        },
        Cs = function(a, b) {
            var c = {};
            Object.assign(c, a);
            b && (c.useClickElement = !1, c.disableClickThrough = !0);
            return c
        };
    var Ds = function() {
        K.call(this);
        this.g = new wo;
        this.h = null;
        this.l = new Map;
        this.w = new Wp(this);
        Zg(this, this.w);
        this.D = new Map;
        this.C = null;
        this.A = -1;
        R.B().h = !0;
        lr()
    };
    Ra(Ds, K);
    var Es = null,
        Fs = function() {
            null == Es && (Es = new Ds);
            return Es
        },
        Gs = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            Fs().dispatchEvent(new As("measurable_impression", null, c))
        },
        Hs = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            Fs().dispatchEvent(new As("viewable_impression", null, c))
        },
        Is = function(a, b, c) {
            var d = {};
            d.queryId = a;
            d.viewabilityString = b;
            d.eventName = c;
            Fs().dispatchEvent(new As("externalActivityEvent", null, d))
        };
    Ds.prototype.destroy = function() {
        this.w.Ba(this.h, "activityMonitor", this.H);
        this.h = null
    };
    Ds.prototype.H = function(a) {
        var b = a.fa;
        switch (a.ba) {
            case "appStateChanged":
                co.B();
                b = b.appState;
                a = S.B();
                a.C != b && (a.C = b, (a = am.B().g) && ek(a.g, !b));
                break;
            case "externalActivityEvent":
                Is(b.queryId, b.viewabilityString, b.eventName);
                break;
            case "measurableImpression":
                Gs(b.queryId, b.viewabilityString);
                break;
            case "viewableImpression":
                Hs(b.queryId, b.viewabilityString);
                break;
            case "engagementData":
                b = b.engagementString;
                Fs().C = b;
                Fs().A = w();
                break;
            case "viewability":
                a = b.queryId;
                var c = b.vastEvent;
                this.l.get(a) && "start" ==
                    c && this.l.get(a);
                a = b.eventId;
                window.clearTimeout(a);
                if (c = this.g.get(a)) zo(this.g, a), c(b.viewabilityData);
                break;
            case "viewabilityMeasurement":
                co.B();
                b = R.B();
                S.B();
                wi(b.M, "ecs");
                break;
            case "engagement":
                a = b.eventId;
                window.clearTimeout(a);
                c = this.g.get(a);
                if (js.B().g) {
                    var d = -1;
                    this.I && (d = w() - this.I);
                    var e = !1;
                    c || (e = !0);
                    Qb(b, "loggingId") && js.B().report(43, {
                        step: "receivedResponse",
                        time: w(),
                        timeout: e,
                        logid: b.loggingId,
                        timediff: d
                    })
                }
                c && (zo(this.g, a), c(b.engagementString))
        }
    };
    u("ima.bridge.getNativeViewability", function(a, b) {
        Fs();
        b({})
    }, void 0);
    u("ima.bridge.getVideoMetadata", function(a) {
        return (a = Fs().D.get(a)) ? a() : {}
    }, void 0);
    u("ima.bridge.triggerViewEvent", Hs, void 0);
    u("ima.bridge.triggerMeasurableEvent", Gs, void 0);
    u("ima.bridge.triggerExternalActivityEvent", Is, void 0);
    Object.entries({
        "application/dash+xml": 1,
        "application/x-javascript": 2,
        "application/x-mpegurl": 3,
        "application/javascript": 4,
        "audio/ogg": 5,
        "audio/mp4": 6,
        "audio/mpeg": 7,
        "audio/wav": 8,
        "text/javascript": 9,
        "video/m4v": 10,
        "video/ogg": 11,
        "video/x-flv": 12,
        "video/3gpp": 13,
        "video/mpt2": 14,
        "video/mp4": 15,
        "video/mpeg": 16,
        "video/quicktime": 17,
        "video/webm": 18
    });
    var Js = function(a, b) {
        wr.call(this, b);
        this.A = a;
        this.g = null;
        this.C = new Wp(this);
        this.C.T(F(), "message", this.D)
    };
    p(Js, wr);
    var Ks = function(a) {
        if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    Js.prototype.sendMessage = function(a, b, c) {
        null != this.g && null != this.g.postMessage && this.g.postMessage(Ls(this, a, b, c), "*");
        null != this.g && null == this.g.postMessage && js.B().report(11)
    };
    Js.prototype.R = function() {
        Yg(this.C);
        this.g = null;
        wr.prototype.R.call(this)
    };
    Js.prototype.D = function(a) {
        a = a.h;
        var b = Ks(a.data);
        if (Ms(this, b)) {
            if (null == this.g) this.g = a.source, this.h || this.connect();
            else if (this.g != a.source) return;
            Ms(this, b) && this.dispatchEvent(new ls(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var Ls = function(a, b, c, d) {
            var e = {};
            e.name = b;
            e.type = c;
            null != d && (e.data = d);
            e.sid = a.w;
            e.channel = a.A;
            return "ima://" + dg(e)
        },
        Ms = function(a, b) {
            if (null == b) return !1;
            var c = b.channel;
            if (null == c || c != a.A) return !1;
            b = b.sid;
            return null == b || "*" != a.w && b != a.w ? !1 : !0
        };
    var Ns = nc(hc(ic("http://pagead2.googlesyndication.com/omsdk/releases/live/omsdk-v1.js")));
    function Os(a, b) {
        if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
        if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
        if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
    }
    function Ps(a, b) {
        if (null == b) throw Error("Value for " + a + " is undefined or null");
    }
    function Qs(a, b) {
        if (null == b) throw Error(a + " must not be null or undefined.");
        if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
    };
    function Rs() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.1-google_20200121")
    }
    function Ss() {
        for (var a = ["1", "3", "1"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Ts = {
        LOADED: "loaded",
        Vb: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        Ub: "pause",
        Mc: "resume",
        Lc: "bufferStart",
        Kc: "bufferFinish",
        SKIPPED: "skipped",
        Ld: "volumeChange",
        Sg: "playerStateChange",
        $f: "adUserInteraction"
    };
    var Us = function(a, b, c, d) {
            this.h = a;
            this.method = b;
            this.version = c;
            this.g = d
        },
        Vs = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        Ws = function(a) {
            return new Us(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        },
        Xs = function(a) {
            var b = {};
            b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
            void 0 !== a.g && (b.omid_message_args = a.g);
            return b
        };
    var Ys = function(a) {
        this.h = a
    };
    function Zs(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    function $s(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(Zs, c)[a[a.length - 1]] = b
    };
    function at() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };
    function bt(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        ct(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ca(b))));
        }, function() {
            return console.error.apply(console, ca(b))
        })
    }
    function ct(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var dt = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var et = function(a) {
        this.h = a;
        this.handleExportedMessage = et.prototype.l.bind(this)
    };
    p(et, Ys);
    et.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(Xs(a), this)
    };
    et.prototype.l = function(a, b) {
        Vs(a) && this.g && this.g(Ws(a), b)
    };
    var ft = eval("this"),
        gt = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof ft && ft) return ft;
            throw Error("Could not determine global object context.");
        }();
    function ht(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }
    function it(a) {
        if (a === gt) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var jt = function(a, b) {
        this.h = b = void 0 === b ? gt : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                Vs(e) && d.source && c.g && c.g(Ws(e), d.source)
            }
        })
    };
    p(jt, Ys);
    jt.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(Xs(a), "*")
    };
    var kt = ["omid", "v1_SessionServiceCommunication"];
    function lt(a) {
        return kt.reduce(function(b, c) {
            return b && b[c]
        }, a)
    };
    $s("OmidSessionClient.Partner", function(a, b) {
        Os("Partner.name", a);
        Os("Partner.version", b);
        this.name = a;
        this.version = b
    });
    var mt = function(a, b, c) {
        Os("VerificationScriptResource.resourceUrl", a);
        this.h = a;
        this.l = b;
        this.g = c
    };
    mt.prototype.toJSON = function() {
        return {
            resourceUrl: this.h,
            vendorKey: this.l,
            verificationParameters: this.g
        }
    };
    $s("OmidSessionClient.VerificationScriptResource", mt);
    $s("OmidSessionClient.Context", function(a, b, c) {
        c = void 0 === c ? null : c;
        Ps("Context.partner", a);
        this.g = a;
        this.l = b;
        this.h = c
    });
    var nt = {
            sessionError: "reportError"
        },
        ot = Object.keys(Ts).map(function(a) {
            return Ts[a]
        }),
        pt = ["impressionOccurred"],
        qt = function() {
            var a = void 0 === a ? gt : a;
            this.g = a.omidSessionInterface
        };
    qt.prototype.sendMessage = function(a, b, c) {
        "registerSessionObserver" == a && (c = [b]);
        nt[a] && (a = nt[a]);
        b = this.g;
        0 <= pt.indexOf(a) && (b = b.adEvents);
        0 <= ot.indexOf(a) && (b = b.videoEvents);
        b = b[a];
        if (!b) throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, ca(c))
    };
    var ut = function(a, b, c) {
            Ps("AdSession.context", a);
            this.J = a;
            if (!b) {
                var d;
                "undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
                d = ht(d) ? d : gt;
                var e = void 0 === e ? dt : e;
                a: {
                    b = ba([d, ht(d) ? d.top : gt]);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        b: {
                            var g = d;f = f.value;
                            var h = e;
                            if (!it(f)) try {
                                var l = lt(f);
                                if (l) {
                                    var n = new et(l);
                                    break b
                                }
                            } catch (m) {}
                            n = h(f) ? new jt(g, f) : null
                        }
                        if (g = n) {
                            b = g;
                            break a
                        }
                    }
                    b = null
                }
            }
            this.h = b;
            this.D = c || new qt;
            this.F = this.w = this.o = !1;
            this.A = this.C = null;
            this.l = {};
            this.h && (this.h.g = this.H.bind(this));
            this.g("setClientInfo", "1.3.1-google_20200121", this.J.g.name, this.J.g.version);
            rt(this, a.l);
            (a = a.h) && this.g("setContentUrl", a);
            tt(this)
        },
        vt = function(a, b) {
            a.sendMessage("registerSessionObserver", b)
        };
    ut.prototype.error = function(a, b) {
        this.g("sessionError", a, b)
    };
    ut.prototype.g = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.sendMessage.apply(this, [a, null].concat(ca(c)))
    };
    ut.prototype.sendMessage = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        if (this.h) e = at(), b && (this.l[e] = b), d = new Us(e, "SessionService." + a, "1.3.1-google_20200121", Rs() && Ss() ? d : JSON.stringify(d)), this.h.sendMessage(d);
        else if (null != this.D.g) try {
            this.D.sendMessage(a, b, d)
        } catch (f) {
            bt("Failed to communicate with SessionInterface with error:"), bt(f)
        }
    };
    ut.prototype.H = function(a) {
        var b = a.method,
            c = a.h;
        a = a.g;
        if ("response" === b && this.l[c]) {
            var d = Rs() && Ss() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.l[c].apply(this, d)
        }
        "error" === b && window.console && bt(a)
    };
    var rt = function(a, b) {
            b && (b = b.map(function(c) {
                return c.toJSON()
            }), a.g("injectVerificationScriptResources", b))
        },
        tt = function(a) {
            vt(a, function(b) {
                "sessionStart" === b.type && (a.F = !0, a.C = b.data.creativeType, a.A = b.data.impressionType);
                "sessionFinish" === b.type && (a.F = !1)
            })
        };
    $s("OmidSessionClient.AdSession", ut);
    var wt = function(a) {
        Ps("AdEvents.adSession", a);
        try {
            if (a.o) throw Error("AdEvents already registered.");
            a.o = !0;
            a.g("registerAdEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has an ad events instance registered");
        }
    };
    wt.prototype.loaded = function(a) {
        a = void 0 === a ? null : a;
        var b = this.g;
        if ("definedByJavaScript" === b.C) throw Error("Creative type has not been redefined");
        if ("definedByJavaScript" === b.A) throw Error("Impression type has not been redefined");
        a ? this.g.g("loaded", a.toJSON()) : this.g.g("loaded")
    };
    $s("OmidSessionClient.AdEvents", wt);
    var xt = function(a) {
        Ps("MediaEvents.adSession", a);
        try {
            if (a.w) throw Error("MediaEvents already registered.");
            a.w = !0;
            a.g("registerMediaEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has a media events instance registered");
        }
    };
    xt.prototype.loaded = function(a) {
        Ps("MediaEvents.loaded.vastProperties", a);
        this.g.g("loaded", a.toJSON())
    };
    xt.prototype.start = function(a, b) {
        Qs("MediaEvents.start.duration", a);
        Qs("MediaEvents.start.mediaPlayerVolume", b);
        if (0 > b || 1 < b) throw Error("Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
        this.g.g("start", a, b)
    };
    xt.prototype.pause = function() {
        this.g.g("pause")
    };
    xt.prototype.resume = function() {
        this.g.g("resume")
    };
    $s("OmidSessionClient.MediaEvents", xt);
    var At = function(a, b) {
            yt ? a.srcdoc = b : (a = a.contentWindow) && zt(a.document, b)
        },
        yt = Wc && "srcdoc" in se(document, "IFRAME"),
        zt = function(a, b) {
            a.open("text/html", "replace");
            a.write(b);
            a.close()
        };
    function Bt(a) {
        return (a = ze(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }
    function Ct(a, b) {
        var c = ue("IFRAME", {
            name: b,
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = "<script src=" + Ns.Da() + ">\x3c/script>";
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                Bt(c) ? d(c) : e()
            })
        });
        At(c, a);
        return b
    };
    var Dt = function(a, b) {
        K.call(this);
        this.h = Bt(a);
        this.g = b
    };
    p(Dt, K);
    var Ft = function(a) {
            try {
                a.h.registerSessionObserver(function(b) {
                    "sessionStart" == b.type ? Et(a, a.g) : "sessionFinish" == b.type && Ft(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        Et = function(a, b) {
            try {
                a.h.setVideoElement(b)
            } catch (c) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var Gt = function(a) {
        this.g = a
    };
    Gt.prototype.h = function() {
        return this.g
    };
    var Ht = function(a) {
            this.g = a;
            this.l = "";
            this.h = -1;
            this.o = !1
        },
        Jt = function(a, b) {
            if (0 <= a.h) {
                var c = null == b ? function() {} : b,
                    d = function() {
                        It(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else null != b && b()
        },
        It = function(a, b) {
            var c = 0 < a.g.seekable.length;
            a.o ? c ? (a.g.currentTime = a.h, Kt(a), b()) : setTimeout(function() {
                return It(a, b)
            }, 100) : (Kt(a), b())
        },
        Kt = function(a) {
            a.h = -1;
            a.l = "";
            a.o = !1
        };
    var Lt = function(a) {
        K.call(this);
        this.g = a;
        this.Y = null;
        this.w = new Ht(a);
        this.A = 0;
        this.H = this.N = this.O = this.aa = this.D = !1;
        this.I = this.l = null;
        this.L = new E(this.g.offsetWidth, this.g.offsetHeight);
        this.$ = rs(this.g);
        this.X = !1
    };
    p(Lt, K);
    Lt.prototype.pa = function() {
        var a = this.w;
        a.l = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    };
    Lt.prototype.V = function(a) {
        Jt(this.w, a)
    };
    Lt.prototype.load = function(a, b) {
        var c = I.B(),
            d = parseInt(c.g.w.c, 10) / 2;
        null != d && Bg(c.g, "slotId", d);
        c = I.B().g;
        c.P = !0;
        Cg(c);
        Mg(I.B(), "hvd_lc");
        c = I.B();
        d = this.L.width + "x" + this.L.height;
        null != d && Bg(c.g, "ps", d);
        Mt(this);
        this.O = !1;
        if (b)
            if (Mg(I.B(), "hvd_ad"), b instanceof kp) {
                if (Mg(I.B(), "hvd_mad"), b = b.h) {
                    Mg(I.B(), "hvd_admu");
                    Nt(this, b);
                    return
                }
            } else if (b instanceof jp) {
            Mg(I.B(), "hvd_dad");
            c = b.getVideoUrl();
            d = b.l;
            var e = b.F,
                f = b.h,
                g = b.A,
                h = b.g;
            if (c && d && e && f && g && h && (Mg(I.B(), "hvd_addu"), b.w)) {
                Mg(I.B(), "hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (kq() && kq() && MediaSource.isTypeSupported(b) && kq() && MediaSource.isTypeSupported(f)) {
                    Mg(I.B(), "hvd_ymse");
                    Mg(I.B(), "hvd_mse");
                    this.Y = new sq(this.g, [new lq(c, b, 35E4), new lq(d, f, 82E3)]);
                    Zg(this, this.Y);
                    a = this.g;
                    b = this.Y;
                    b.g || (b.g = window.URL.createObjectURL(b.h));
                    b = b.g;
                    a.src = b;
                    this.g.load();
                    return
                }
                Mg(I.B(), "hvd_nmse")
            }
        } else Mg(I.B(), "hvd_uad");
        a ? Nt(this, a) : (Mg(I.B(), "hvd_vn"), this.g.load())
    };
    var Nt = function(a, b) {
            Mg(I.B(), "hvd_src");
            a.g.src = b;
            a.g.load()
        },
        Ot = function(a) {
            Mt(a);
            a.O = !1;
            a.g.removeAttribute("src");
            a.g.load()
        };
    Lt.prototype.getVideoUrl = function() {
        return this.g.src
    };
    Lt.prototype.setVolume = function(a) {
        this.g.volume = a;
        this.g.muted = 0 == a ? !0 : !1
    };
    Lt.prototype.getVolume = function() {
        return this.isMuted() ? 0 : this.g.volume
    };
    var Pt = function(a) {
        a.X = !1;
        a.O || ac() ? (a.H = !1, a.l = a.g.play(), null != a.l && (a.I = null, a.l.then(function() {
            a.l = null;
            a.kd(a.I);
            a.I = null
        }).catch(function(b) {
            a.l = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.vc()
        }))) : a.H = !0
    };
    Lt.prototype.pause = function() {
        null == this.l && (this.X = !0, this.g.pause())
    };
    Lt.prototype.isMuted = function() {
        return this.g.muted
    };
    var Qt = function(a) {
        (Zc || ad) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen()
    };
    Lt.prototype.getCurrentTime = function() {
        return this.g.currentTime
    };
    Lt.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    Lt.prototype.R = function() {
        Rt(this);
        K.prototype.R.call(this)
    };
    var St = function(a) {
            Rt(a);
            a.h = new Wp(a);
            a.h.T(a.g, fr, a.sa);
            a.h.T(a.g, "ended", a.Gf);
            a.h.T(a.g, "webkitbeginfullscreen", a.zc);
            a.h.T(a.g, "webkitendfullscreen", a.jd);
            a.h.T(a.g, "loadedmetadata", a.If);
            a.h.T(a.g, "pause", a.Lf);
            a.h.T(a.g, "playing", a.kd);
            a.h.T(a.g, "timeupdate", a.Ef);
            a.h.T(a.g, "volumechange", a.Of);
            a.h.T(a.g, "error", a.vc);
            a.h.T(a.g, qd || ed && !yp(8) ? "loadeddata" : "canplay", a.Jf);
            a.K = new Kr;
            a.h.T(a.K, "click", a.Df);
            Mr(a.K, a.g);
            a.P = new Gh(1E3);
            a.h.T(a.P, "tick", a.Hf);
            a.P.start()
        },
        Rt = function(a) {
            null !=
                a.K && (Or(a.K), a.K = null);
            null != a.P && a.P.U();
            null != a.h && (a.h.U(), a.h = null);
            Mt(a)
        },
        Mt = function(a) {
            a.aa = !1;
            a.N = !1;
            a.D = !1;
            a.H = !1;
            a.A = 0;
            a.l = null;
            a.I = null;
            Yg(a.C)
        };
    Lt.prototype.sa = function(a) {
        this.dispatchEvent(a.type)
    };
    var Tt = function(a, b) {
        a.N || (a.N = !0, a.dispatchEvent("start"), v(a.g.getAttribute) && a.g.getAttribute("playsinline"), $c || xp() || yp(10) || Jj() || y(Eb, "Xbox") || (Zc || ad ? 0 : (!Yc || Yc && wp(vp, 4)) && !Kj()) || !Yc || Yc && wp(vp, 3) || (Zc || ad) && !yp(4) || a.zc(b))
    };
    k = Lt.prototype;
    k.If = function() {
        this.O = !0;
        this.H && Pt(this);
        this.H = !1
    };
    k.Jf = function() {
        this.aa || (this.aa = !0, this.dispatchEvent("loaded"))
    };
    k.kd = function(a) {
        null != this.l ? this.I = a : (this.dispatchEvent("play"), ed || $c || xp() || qd || Tt(this, a))
    };
    k.Ef = function(a) {
        if (!this.N && (ed || $c || xp() || qd)) {
            if (0 >= this.getCurrentTime()) return;
            if (qd && this.g.ended && 1 == this.getDuration()) {
                this.vc(a);
                return
            }
            Tt(this, a)
        }
        if (ed || y(Eb, "Nintendo WiiU")) {
            if (1.5 < this.getCurrentTime() - this.A) {
                this.D = !0;
                this.g.currentTime = this.A;
                return
            }
            this.D = !1;
            this.getCurrentTime() > this.A && (this.A = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    };
    k.Of = function() {
        this.dispatchEvent("volumeChange")
    };
    k.Lf = function() {
        if (this.N && ed && !this.X && (2 > Ut(this) || this.D)) {
            this.C = new Gh(250);
            this.h.T(this.C, "tick", this.Ff);
            this.C.start();
            var a = !0
        } else a = !1;
        a || this.l || this.dispatchEvent("pause")
    };
    k.Gf = function() {
        var a = !0;
        if (ed || y(Eb, "Nintendo WiiU")) a = this.A >= this.g.duration - 1.5;
        !this.D && a && this.dispatchEvent("end")
    };
    k.zc = function() {
        this.dispatchEvent("beginFullscreen")
    };
    k.jd = function() {
        this.dispatchEvent("endFullscreen")
    };
    k.vc = function() {
        this.dispatchEvent("error")
    };
    k.Df = function() {
        this.dispatchEvent("click")
    };
    k.Hf = function() {
        var a = new E(this.g.offsetWidth, this.g.offsetHeight),
            b = rs(this.g);
        if (a.width != this.L.width || a.height != this.L.height) !this.$ && b ? this.zc() : this.$ && !b && this.jd(), this.L = a, this.$ = b
    };
    k.Ff = function() {
        if (!this.g.ended && this.g.paused && (ed || rd ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = Ut(this);
            0 < b && (2 <= b || 2 > a) && (Yg(this.C), Pt(this))
        } else Yg(this.C)
    };
    var Ut = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    var Yt = function(a, b, c) {
        J.call(this);
        var d = this;
        this.l = b;
        this.o = c;
        b = new Wp(this);
        Zg(this, b);
        this.w = "goog_" + Ic++;
        this.g = this.h = null;
        Ct(a, this.w).then(function(e) {
            return void Vt(d, e)
        }).catch(function() {
            return void Wt(d)
        });
        b.T(this.l, "adsManager", function(e) {
            "allAdsCompleted" == e.ba && Xt(d)
        })
    };
    p(Yt, J);
    var Vt = function(a, b) {
            a.h = b;
            var c = {};
            c = (c.frameName = a.w, c);
            a.l.send("omid", "iframeReady", c);
            a.g = new Dt(b, a.o);
            a.g.T("error", function() {
                return void Wt(a)
            });
            Ft(a.g)
        },
        Wt = function(a) {
            a.l.send("omid", "iframeFailed");
            a.U()
        },
        Xt = function(a) {
            setTimeout(function() {
                a.U()
            }, 3E3)
        };
    Yt.prototype.R = function() {
        this.h && (we(this.h), this.h = null);
        J.prototype.R.call(this)
    };
    var Zt = function(a, b, c, d) {
        J.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.h = new Wp(this);
        Zg(this, this.h);
        this.h.T(this.o, d, this.A)
    };
    p(Zt, J);
    var bu = function(a, b) {
        var c = b.fa;
        switch (b.ba) {
            case "showVideo":
                $t(a.l);
                break;
            case "hide":
                au(a.l);
                break;
            case "getPreloadDisplay":
            case "resizeAndPositionVideo":
                a = a.l.g;
                c = c.resizeAndPositionVideo;
                a.g.style.left = String(c.x) + "px";
                a.g.style.top = String(c.y) + "px";
                a.g.style.width = String(c.width) + "px";
                a.g.style.height = String(c.height) + "px";
                break;
            case "restoreSizeAndPositionVideo":
                c = a.l.g, c.g.style.width = "100%", c.g.style.height = "100%", c.g.style.left = "0", c.g.style.right = "0"
        }
    };
    Zt.prototype.A = function(a) {
        var b = a.fa;
        switch (a.ba) {
            case "activate":
                a = this.l;
                var c = this.g;
                a.g != c && a.h && a.o && a.l && (c.setVolume(a.g.getVolume()), c = a.g, a.g = a.l, a.l = c, c = a.h, a.h = a.o, a.o = c, cu(a.o.g, !1));
                break;
            case "startTracking":
                a = this.g;
                c = this.w;
                this.h.T(a, Nb(iq), c);
                this.h.T(a, fr, c);
                St(this.g);
                break;
            case "stopTracking":
                a = this.g;
                c = this.w;
                this.h.Ba(a, Nb(iq), c);
                this.h.Ba(a, fr, c);
                Rt(this.g);
                break;
            case "exitFullscreen":
                Qt(this.g);
                break;
            case "play":
                Pt(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                St(this.g);
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    l = b.demuxedVideoUrl,
                    n = b.demuxedAudioMimeType,
                    m = b.demuxedVideoMimeType,
                    t = b.demuxedAudioCodec,
                    B = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var r = null;
                l && h && b && m && n && B && t && (r = new jp({
                    xd: l,
                    Pc: h,
                    wd: m,
                    Oc: n,
                    Oa: B,
                    Ha: t,
                    height: null,
                    width: null,
                    xa: b
                }));
                h = null;
                d && e && g && f && (h = new kp({
                    $c: d,
                    mimeType: e,
                    Oa: g,
                    Ha: f,
                    height: null,
                    width: null,
                    xa: b
                }));
                r ? a.load(c, r) : h ? a.load(c, h) : a.load(c, null);
                break;
            case "unload":
                Ot(this.g);
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    Zt.prototype.w = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        this.o.send(this.C,
            a, b)
    };
    var du = function(a, b) {
        J.call(this);
        this.h = b;
        this.l = new Zt(a, b, this.h.g, "videoDisplay1");
        Zg(this, this.l);
        this.g = null;
        var c = this.h.l;
        null != c && (this.g = new Zt(a, b, c, "videoDisplay2"), Zg(this, this.g))
    };
    p(du, J);
    du.prototype.uc = function() {};
    du.prototype.A = function(a) {
        bu(this.l, a);
        this.g && bu(this.g, a)
    };
    var fu = function(a, b) {
        J.call(this);
        this.w = a;
        this.l = b;
        this.o = new Wp(this);
        Zg(this, this.o);
        this.g = this.l.g;
        null != this.g && (this.o.T(this.w, "videoDisplay1", this.Mf), this.o.T(this.w, "videoDisplay2", this.Xd), eu(this, this.g, this.qb));
        this.h = null
    };
    p(fu, J);
    k = fu.prototype;
    k.uc = function(a) {
        this.g && gu(this, this.g, this.qb);
        this.g = a;
        eu(this, this.g, this.qb)
    };
    k.Mf = function(a) {
        if (null != this.g) {
            var b = a.fa;
            switch (a.ba) {
                case "startTracking":
                    St(this.g);
                    break;
                case "stopTracking":
                    Rt(this.g);
                    break;
                case "exitFullscreen":
                    Qt(this.g);
                    break;
                case "play":
                    Pt(this.g);
                    break;
                case "pause":
                    this.g.pause();
                    break;
                case "load":
                    hu(this.g, b);
                    break;
                case "unload":
                    Ot(this.g);
                    break;
                case "setCurrentTime":
                    this.g.g.currentTime = b.currentTime;
                    break;
                case "setVolume":
                    this.g.setVolume(b.volume)
            }
        }
    };
    k.Xd = function(a) {
        if (null != this.h) {
            var b = a.fa;
            switch (a.ba) {
                case "startTracking":
                    St(this.h);
                    break;
                case "stopTracking":
                    Rt(this.h);
                    break;
                case "load":
                    hu(this.h, b)
            }
        }
    };
    k.Ac = function(a) {
        switch (a.type) {
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            default:
                return
        }
        this.w.send("videoDisplay2", a, {})
    };
    k.qb = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        this.w.send("videoDisplay1",
            a, b)
    };
    var eu = function(a, b, c) {
            a.o.T(b, Nb(iq), c);
            a.o.T(b, fr, c)
        },
        gu = function(a, b, c) {
            a.o.Ba(b, Nb(iq), c);
            a.o.Ba(b, fr, c)
        };
    fu.prototype.A = function(a) {
        switch (a.ba) {
            case "showVideo":
                $t(this.l);
                break;
            case "hide":
                au(this.l);
                break;
            case "getPreloadDisplay":
                null != this.g && null == this.h && (this.h = this.l.l, eu(this, this.h, this.Ac), null == this.h ? js.B().report(112, {
                    outer: !0,
                    "null": !0
                }) : js.B().report(112, {
                    outer: !0,
                    "null": !1
                }));
                break;
            case "swapVideoDisplays":
                if (null != this.g && null != this.h) {
                    gu(this, this.g, this.qb);
                    gu(this, this.h, this.Ac);
                    a = this.l;
                    if (a.h && a.o && a.l) {
                        a.l.setVolume(a.g.getVolume());
                        var b = a.g;
                        a.g = a.l;
                        a.l = b;
                        b = a.h;
                        a.h = a.o;
                        a.o =
                            b;
                        b = a.J;
                        a = a.g;
                        b.l.uc(a);
                        b.D && (b = b.D, a = a.w.g, b.o = a, b.g && (b = b.g, b.g = a, Et(b, a)))
                    }
                    this.g = this.l.g;
                    this.h = this.l.l;
                    eu(this, this.g, this.qb);
                    eu(this, this.h, this.Ac)
                }
        }
    };
    var hu = function(a, b) {
        var c = b.videoUrl,
            d = b.muxedMediaUrl,
            e = b.muxedMimeType,
            f = b.muxedAudioCodec,
            g = b.muxedVideoCodec,
            h = b.demuxedAudioUrl,
            l = b.demuxedVideoUrl,
            n = b.demuxedAudioMimeType,
            m = b.demuxedVideoMimeType,
            t = b.demuxedAudioCodec,
            B = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var r = null;
        l && h && b && m && n && B && t && (r = new jp({
            xd: l,
            Pc: h,
            wd: m,
            Oc: n,
            Oa: B,
            Ha: t,
            height: null,
            width: null,
            xa: b
        }));
        h = null;
        d && e && g && f && (h = new kp({
            $c: d,
            mimeType: e,
            Oa: g,
            Ha: f,
            height: null,
            width: null,
            xa: b
        }));
        r ? a.load(c, r) : h ? a.load(c, h) : a.load(c, null)
    };
    var iu = function(a, b, c, d, e, f) {
        ls.call(this, a, b, c, d, e);
        this.h = f
    };
    p(iu, ls);
    var ju = function(a, b) {
        K.call(this);
        this.w = a;
        this.l = b;
        this.g = {};
        this.h = new Wp(this);
        this.h.T(F(), "message", this.A)
    };
    p(ju, K);
    ju.prototype.send = function(a) {
        var b = a.h;
        this.g.hasOwnProperty(b) && this.g[b].send(a.type, a.ba, a.fa)
    };
    var ku = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new Js(b, c), a.h.T(c, a.w, function(e) {
            this.dispatchEvent(new iu(e.type, e.ba, e.fa, e.Mb, e.ld, b))
        }), c.g = d, c.connect(), a.g[b] = c)
    };
    ju.prototype.R = function() {
        this.h.U();
        for (var a in this.g) Yg(this.g[a]);
        K.prototype.R.call(this)
    };
    ju.prototype.A = function(a) {
        a = a.h;
        var b = Ks(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.l && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                ku(this, c, d, a.source);
                this.dispatchEvent(new iu(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };
    function lu() {
        return !!Da("googletag.cmd", F())
    }
    function mu() {
        var a = Da("googletag.console", F());
        return null != a ? a : null
    }
    var nu = function() {
        Wp.call(this);
        this.l = new ju("gpt", !0);
        Zg(this, this.l);
        this.T(this.l, "gpt", this.A);
        this.g = null;
        lu() || F().top === F() || (this.g = new ju("gpt", !1), Zg(this, this.g), this.T(this.g, "gpt", this.w))
    };
    p(nu, Wp);
    nu.prototype.A = function(a) {
        var b = a.ld,
            c = "//imasdk.googleapis.com".match(De);
        b = b.match(De);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g) ku(this.g, a.h, a.Mb, F().parent), null != this.g && this.g.send(a);
            else if (c = a.fa, null != c && void 0 !== c.scope) {
            b = c.scope;
            c = c.args;
            var d;
            if ("proxy" == b) c = a.ba, "isGptPresent" == c ? d = lu() : "isConsolePresent" == c && (d = null != mu());
            else if (lu())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.ba;
                    var e = F().googletag;
                    if (null != e && null != e[b] && (e = e[b](), null != e && (d = e[d], null != d))) try {
                        var f = d.apply(e, c)
                    } catch (g) {}
                    d =
                        f
                } else if ("console" == b) {
                if (f = mu(), null != f && (e = f[a.ba], null != e)) try {
                    e.apply(f, c)
                } catch (g) {}
            } else if (null === b) {
                d = a.ba;
                f = F();
                if (["googleGetCompanionAdSlots", "googleSetCompanionAdContents"].includes(d) && (d = f[d], null != d)) try {
                    e = d.apply(f, c)
                } catch (g) {}
                d = e
            }
            void 0 !== d && (a.fa.returnValue = d, this.l.send(a))
        }
    };
    nu.prototype.w = function(a) {
        this.l.send(a)
    };
    var ou = function(a, b) {
        if (a.g) {
            var c = a.g;
            Yg(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, Yg(a.g[b]), delete a.g[b])
    };
    var qu = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, l, n, m, t) {
                if ("%" == n) return "%";
                var B = c.shift();
                if ("undefined" == typeof B) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = B;
                return pu[n].apply(null, arguments)
            })
        },
        pu = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Gc(" ", Number(c) - a.length) : Gc(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Gc(" ", a) : f + Gc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return pu.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    pu.i = pu.d;
    pu.u = pu.d;
    var uu = function(a, b) {
        K.call(this);
        this.A = new Wp(this);
        Zg(this, this.A);
        this.O = this.N = null;
        this.L = !1;
        this.K = "goog_" + Ic++;
        this.C = new Map;
        var c = this.K,
            d = (Le() ? "https:" : "http:") + qu("//imasdk.googleapis.com/js/core/bridge3.371.3_%s.html", T.A);
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (g) {}
                    e = e.parent
                } while (e != e.top)
            } catch (g) {}
            f = !1
        }
        f && (d += "?f=" + c);
        c = ue("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: "autoplay",
            style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
        });
        $p(this.A, c, "load", this.$);
        a.appendChild(c);
        this.g = c;
        this.w = ru(this);
        this.H = b;
        this.h = null;
        try {
            -1 != window.location.search.indexOf("goognewman=newvmap") && br($q(), 44715559, "GvnExternalLayer")
        } catch (g) {}
        if (dr()) try {
            console.log("IMA outer:newman")
        } catch (g) {}
        this.l = tu(this);
        this.H.g && this.A.T(this.w, "displayContainer", this.V);
        this.A.T(this.w, "mouse", this.X);
        this.A.T(this.w, "touch", this.Y);
        c = F();
        d = Da("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new nu, u("google.ima.gptProxyInstance", d, c), c = d);
        this.P =
            c;
        ng(Ug) && (this.D = new Yt(a, this.w, b.g.w.g), Zg(this, this.D), this.I = !1)
    };
    p(uu, K);
    var tu = function(a) {
            a.l && a.l.U();
            a.l = new fu(a.w, a.H);
            Zg(a, a.l);
            return a.l
        },
        ru = function(a, b) {
            b = void 0 === b ? "*" : b;
            var c = a.C.get(b);
            null == c && (c = new Js(a.K, b), a.L && (c.g = ze(a.g), c.connect()), a.C.set(b, c));
            return c
        };
    uu.prototype.R = function() {
        null !== this.h && (this.h.U(), this.h = null);
        this.C.forEach(function(a) {
            Yg(a)
        });
        this.C.clear();
        ou(this.P, this.K);
        we(this.g);
        K.prototype.R.call(this)
    };
    uu.prototype.X = function(a) {
        var b = a.fa,
            c = ef(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.ba, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var vu = function(a, b) {
        var c = ef(a.g),
            d = !!("TouchEvent" in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    uu.prototype.Y = function(a) {
        var b = a.fa,
            c = ef(this.g);
        if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: vu(this, b.touches),
            targetTouches: vu(this, b.targetTouches),
            changedTouches: vu(this, b.changedTouches)
        }, a = new TouchEvent(a.ba, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.ba, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX +
                c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, vu(this, b.touches), vu(this, b.targetTouches), vu(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    uu.prototype.V = function(a) {
        switch (a.ba) {
            case "showVideo":
                null == this.h ? (this.h = new Kr, this.A.T(this.h, "click", this.aa)) : Or(this.h);
                Mr(this.h, wu(this.H));
                break;
            case "hide":
                null !== this.h && (this.h.U(), this.h = null)
        }
        this.l.A(a)
    };
    uu.prototype.aa = function() {
        this.w.send("displayContainer", "videoClick")
    };
    uu.prototype.$ = function() {
        var a = this;
        this.N = Jf();
        this.O = Gf();
        this.C.forEach(function(b) {
            b.g = ze(a.g);
            b.connect()
        });
        this.L = !0
    };
    var yu = function() {
        K.call(this);
        this.buffered = new xu;
        this.w = new xu;
        this.h = new Wp(this);
        this.src = this.l = "";
        this.A = !1;
        this.g = null;
        var a = Lq(T);
        if (a) {
            a: {
                if (Qb(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a)) break a;a = NaN
            }
            this.duration = a
        }
    };
    Ra(yu, K);
    var zu = new wo,
        Au = function() {
            var a = ["video/mp4"],
                b = ["video/ogg"],
                c = new yu;
            c.canPlayType = function(d) {
                return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
            };
            c.width = 0;
            c.height = 0;
            c.offsetWidth = 0;
            c.offsetHeight = 0;
            return c
        },
        Bu = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        xu = function() {
            this.length = 0;
            this.g = []
        };
    xu.prototype.start = function(a) {
        return this.g[a].startTime
    };
    xu.prototype.end = function(a) {
        return this.g[a].endTime
    };
    k = yu.prototype;
    k.readyState = 0;
    k.currentTime = 0;
    k.duration = NaN;
    k.Bb = !0;
    k.autoplay = !1;
    k.loop = !1;
    k.controls = !1;
    k.volume = 1;
    k.muted = !1;
    Object.defineProperty(yu.prototype, "src", {
        get: function() {
            return yu.prototype.l
        },
        set: function(a) {
            var b = yu.prototype;
            b.A && null != b.g ? (b.g.reject(), b.g = null) : b.l = a
        }
    });
    k = yu.prototype;
    k.lc = 0;
    k.jb = null;
    k.Tb = null;
    k.pause = function() {
        this.autoplay = !1;
        this.Bb || (null.stop(), this.Bb = !0, this.dispatchEvent("timeupdate"), this.dispatchEvent("pause"))
    };
    k.load = function() {
        this.readyState = 0;
        this.Bb = !0;
        this.dispatchEvent("loadstart");
        this.setProperty("duration", isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
        var a = this.w;
        a.g.push(new Bu(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new Bu(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress")
    };
    k.setProperty = function(a, b) {
        switch (a) {
            case "currentTime":
                a = Number(b);
                this.dispatchEvent("seeking");
                this.currentTime = a;
                this.dispatchEvent("seeked");
                a = w() - this.lc;
                b = this.currentTime + a / 1E3;
                this.lc += a;
                2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent("timeupdate");
                this.currentTime == this.duration && (this.Bb = !0, null.stop(), this.dispatchEvent("ended"));
                break;
            case "duration":
                this.duration = Number(b);
                this.dispatchEvent("durationchange");
                break;
            case "volume":
                this.volume = Number(b);
                this.dispatchEvent("volumechange");
                break;
            default:
                throw "Property setter not implemented";
        }
    };
    k.setAttribute = function(a, b) {
        null != a && zu.set(a, b)
    };
    k.getAttribute = function(a) {
        return zu.get(a)
    };
    k.R = function() {
        this.h.U()
    };
    k.Nf = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.Tb && (this.Tb.innerText = b);
        c && this.jb && (this.jb.style.backgroundColor = c)
    };
    var Cu = function(a, b) {
        J.call(this);
        if (null == a || !ye(le(a), a)) throw Jr(Ir, null, "containerElement", "element");
        this.o = a;
        this.l = this.g = null;
        a = Lq(T);
        if (Mq(a, "useVideoElementFake")) {
            a = Au();
            var c = ue("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            });
            for (d in a) c[d] = a[d];
            a.jb = ue("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            });
            a.Tb = ue("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            });
            a.jb.appendChild(a.Tb);
            c.appendChild(a.jb);
            a.h.T(a, ["loadeddata", "playing", "pause", "ended"], a.Nf);
            var d = c
        } else d = ue("VIDEO", {
            style: "background-color:#000;position:absolute;width:100%;height:100%;left:0px;top:0px;",
            title: vq("Advertisement").toString()
        });
        d.setAttribute("webkit-playsinline", !0);
        d.setAttribute("playsinline", !0);
        this.h = d;
        this.g = ue("DIV", {
            style: "display:none;"
        });
        this.o.appendChild(this.g);
        this.g.appendChild(this.h);
        b && (this.l = ue("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        }), this.g.appendChild(this.l))
    };
    p(Cu, J);
    Cu.prototype.R = function() {
        we(this.g);
        J.prototype.R.call(this)
    };
    Cu.prototype.show = function() {
        cu(this.g, !0)
    };
    var cu = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var Fu = function(a, b, c) {
        if (null == a || !ye(le(a), a)) throw Jr(Ir, null, "containerElement", "element");
        this.A = b;
        this.$ = kr(this.A || null);
        this.Y = zp(this.A || null);
        this.V = String(Math.floor(1E9 * Math.random()));
        this.K = !1;
        this.H = a;
        this.N = null != b;
        T.g = 2;
        this.C = Du(b ? b : null);
        var d = ue("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.w = d;
        this.h = null;
        Eu(this) && b ? a = new Lt(b) : (this.h = new Cu(this.w, !0), a = new Lt(this.h.h));
        this.g = a;
        this.l = this.o = null;
        a = Yc && !(Yc && wp(vp, 4));
        d = Zc || ad;
        !this.h || Eu(this) ||
            !T.l || Kj() || a || d || (this.o = new Cu(this.w, !0), this.l = new Lt(this.o.h));
        this.F = c || null;
        this.P = null != this.F;
        Eu(this) && b ? v(b.getBoundingClientRect) ? c = b : (c = this.w, T.F = c) : c = this.w;
        this.D = c;
        this.J = new uu(this.w, this);
        this.O = new E(0, 0);
        this.I = "";
        b && (b = b.src || b.currentSrc, b = b instanceof Co ? b.clone() : new Co(b, void 0), 200 > b.toString().length ? this.I = b.toString() : 200 > b.g.length && (this.I = b.g));
        this.L = new Map;
        this.L.set("videoDisplay1", this.g);
        this.l && this.L.set("videoDisplay2", this.l)
    };
    Fu.prototype.X = function() {
        this.K = !0;
        if (null != this.h) {
            var a = this.h;
            a.h && a.h.load()
        }
        null != this.o && (a = this.o, a.h && a.h.load())
    };
    Fu.prototype.destroy = function() {
        var a = this;
        this.A = null;
        Yg(this.h);
        Yg(this.o);
        Yg(this.J);
        this.g.V(function() {
            return Yg(a.g)
        });
        null != this.l && this.l.V(function() {
            return Yg(a.l)
        });
        we(this.w)
    };
    var $t = function(a) {
            null != a.h && a.h.show()
        },
        au = function(a) {
            null != a.h && cu(a.h.g, !1)
        },
        wu = function(a) {
            return a.P && a.F ? a.F : null != a.h ? a.h.l : null
        },
        Eu = function(a) {
            return jr(a.C) && a.N
        };
    Fu.prototype.setSize = function(a, b) {
        var c = this.w;
        null != c && (-1 == a ? (c.style.right = "0", c.style.left = "0") : c.style.width = a + "px", -1 == b ? (c.style.bottom = "0", c.style.top = "0") : c.style.height = b + "px");
        c = this.J;
        c.g.width = -1 == a ? "100%" : a;
        c.g.height = -1 == b ? "100%" : b;
        try {
            c.g.offsetTop = c.g.offsetTop
        } catch (d) {}
        this.O = new E(a, b)
    };
    var Du = function(a) {
        return null != a && v(a.getAttribute) && null != a.getAttribute("playsinline") ? !0 : !1
    };
    var Gu = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.g = a
    };
    p(Gu, Error);
    k = Gu.prototype;
    k.tc = function() {
        var a = this.g.innerError;
        return a instanceof Object ? new Gu(a) : null != a ? Error(a) : null
    };
    k.ed = function() {
        return this.g.errorMessage
    };
    k.sc = function() {
        return this.g.errorCode
    };
    k.je = function() {
        var a = this.sc();
        return 1E3 > a ? a : 900
    };
    k.ie = function() {
        return this.g.type
    };
    k.toString = function() {
        return "AdError " + this.sc() + ": " + this.ed() + (null != this.tc() ? " Caused by: " + this.tc() : "")
    };
    var Hu = function(a, b) {
        b = void 0 === b ? null : b;
        $g.call(this, "adError");
        this.h = a;
        this.o = b
    };
    p(Hu, $g);
    Hu.prototype.w = function() {
        return this.h
    };
    Hu.prototype.A = function() {
        return this.o
    };
    var Iu = function(a, b) {
        b = void 0 === b ? null : b;
        Cr.call(this, "adMetadata", a);
        this.h = b
    };
    p(Iu, Cr);
    Iu.prototype.o = function() {
        return this.h
    };
    var Ju = function(a) {
        this.g = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var Ku = function(a, b) {
        K.call(this);
        this.l = a;
        this.A = b;
        this.h = this.l.currentTime;
        this.g = new Gh(250);
        Zg(this, this.g);
        this.w = new Wp(this);
        Zg(this, this.w);
        Yp(this.w, this.g, "tick", this.C, !1, this)
    };
    p(Ku, K);
    Ku.prototype.Qa = function() {
        return this.h
    };
    Ku.prototype.start = function() {
        Lu(this);
        this.g.start()
    };
    Ku.prototype.stop = function() {
        this.g.stop()
    };
    Ku.prototype.C = function() {
        var a = this.l.currentTime;
        a != this.Qa() && (this.h = a, Lu(this))
    };
    var Lu = function(a) {
        var b = {};
        b.currentTime = a.Qa();
        a.A.send("contentTimeUpdate", "contentTimeUpdate", b)
    };
    var Mu = function(a, b, c) {
        K.call(this);
        this.h = a;
        this.g = null;
        this.I = "";
        this.K = new vc;
        this.L = 0;
        this.C = this.l = null;
        this.w = b;
        this.A = null;
        this.D = "";
        this.H = c
    };
    p(Mu, K);
    Mu.prototype.N = function(a) {
        try {
            var b = a.h.data;
            try {
                var c = JSON.parse(b)
            } catch (bd) {
                return
            }
            var d = c.session;
            if (null != d && this.D == d) switch (c.type) {
                case "friendlyReady":
                    var e = Nu(this);
                    if (null != e) {
                        this.g = e;
                        this.I = e.currentSrc;
                        var f = e.style.cssText;
                        if (Tc && 10 > document.documentMode) var g = new vc;
                        else {
                            var h = document;
                            "function" === typeof HTMLTemplateElement && (h = se(document, "TEMPLATE").content.ownerDocument);
                            var l = h.implementation.createHTMLDocument("").createElement("DIV");
                            l.style.cssText = f;
                            g = Eq(l.style)
                        }
                        this.K =
                            g;
                        this.L = e.currentTime
                    } else {
                        var n = this.h.H,
                            m = this.h.O;
                        var t = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (m.width + "px; ");
                        t += "height:" + m.height + "px;";
                        this.g = ue("VIDEO", {
                            style: t,
                            autoplay: !0
                        });
                        n.appendChild(this.g)
                    }
                    var B = this.h.H;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var r = this.g;
                    b: {
                        var A = le(r);
                        if (A.defaultView && A.defaultView.getComputedStyle) {
                            var z = A.defaultView.getComputedStyle(r, null);
                            if (z) {
                                var O = z.display || z.getPropertyValue("display") || "";
                                break b
                            }
                        }
                        O = ""
                    }
                    if ("none" !=
                        (O || (r.currentStyle ? r.currentStyle.display : null) || r.style && r.style.display)) var U = gf(r);
                    else {
                        var M = r.style,
                            ya = M.display,
                            Oa = M.visibility,
                            cd = M.position;
                        M.visibility = "hidden";
                        M.position = "absolute";
                        M.display = "inline";
                        var Zb = gf(r);
                        M.display = ya;
                        M.position = cd;
                        M.visibility = Oa;
                        U = Zb
                    }
                    e += "width:" + U.width + "px; ";
                    e += "height:" + U.height + "px;";
                    this.C = ue("DIV", {
                        style: e
                    });
                    B.appendChild(this.C);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.C)
                    } catch (bd) {
                        Ou(this)
                    }
                    this.w.send("vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g &&
                        !be() && !ae() && af(this.g, {
                            visibility: "visible"
                        });
                    this.w.send("vpaid", "", b);
                    break;
                case "becameNonlinear":
                    Pu(this);
                    this.w.send("vpaid", "", b);
                    break;
                case "startAd":
                    B = {};
                    if (this.g) {
                        h = this.g.paused;
                        var dd = 0 < this.g.currentTime;
                        B.apl = dd && !h ? "1" : "0";
                        B.ip = h ? "1" : "0";
                        B.iavp = dd ? "1" : "0"
                    } else B.apl = "n";
                    js.B().report(99, B);
                    this.w.send("vpaid", "", b);
                    null != Nu(this) && $t(this.h);
                    break;
                default:
                    this.w.send("vpaid", "", b)
            }
        } catch (bd) {
            Ou(this)
        }
    };
    var Ou = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.D;
            a = dg(b);
            window.postMessage(a, "*")
        },
        Nu = function(a) {
            a = "videoDisplayUnknown" == a.H ? a.h.g : a.h.L.get(a.H);
            var b = ng(Vg);
            return a.w.g instanceof HTMLVideoElement || b ? a.w.g : null
        },
        Pu = function(a) {
            a.g && !be() && !ae() && af(a.g, {
                visibility: "hidden"
            })
        };
    Mu.prototype.R = function() {
        K.Va.R.call(this);
        Yg(this.A);
        this.A = null;
        we(this.C);
        this.C = null;
        we(this.l);
        this.l = null;
        var a = Nu(this);
        if (null != a) {
            var b = a.style;
            var c = this.K;
            c instanceof vc && c.constructor === vc && c.h === uc ? c = c.g : (Ga(c), c = "type_error:SafeStyle");
            b.cssText = c;
            be() || ae() ? (a.src = this.I, a.currentTime = this.L) : (a.removeAttribute("src"), au(this.h))
        } else we(this.g), this.g = null
    };
    var Qu = function(a, b) {
        J.call(this);
        this.l = a;
        this.h = b;
        this.g = new Map
    };
    p(Qu, J);
    var Ru = function(a, b) {
        try {
            var c = b.fa,
                d = c.session;
            switch (c.vpaidEventType) {
                case "createFriendlyIframe":
                    b = "videoDisplayUnknown";
                    c.videoDisplayName && (b = c.videoDisplayName);
                    var e = c.session,
                        f = new Mu(a.l, a.h, b);
                    a.g.set(e, f);
                    f.D = e;
                    a = "about:self";
                    Tc && (a = "");
                    f.l = ue("IFRAME", {
                        src: a,
                        allowtransparency: !0,
                        background: "transparent"
                    });
                    af(f.l, {
                        display: "none",
                        width: "0",
                        height: "0"
                    });
                    var g = f.h.H;
                    g.appendChild(f.l);
                    var h = g.ownerDocument,
                        l = h.defaultView || h.parentWindow;
                    null == f.A && (f.A = new Wp(f));
                    f.A.T(l, "message", f.N);
                    var n = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (f.D + '");\x3c/script></body>');
                    if (rd || nd || Uc) {
                        var m = f.l.contentWindow;
                        m && zt(m.document, n)
                    } else At(f.l, n);
                    break;
                case "vpaidNonLinear":
                    var t = a.g.get(d);
                    t && Pu(t);
                    break;
                case "destroyFriendlyIframe":
                    var B = a.g.get(d);
                    B && (B.U(), a.g.delete(d))
            }
        } catch (r) {
            js.B().report(125, {
                msg: r.message
            })
        }
    };
    Qu.prototype.R = function() {
        this.g.forEach(function(a) {
            return a.U()
        })
    };
    var Su = function() {
        this.g = [];
        this.h = []
    };
    Su.prototype.isEmpty = function() {
        return 0 == this.g.length && 0 == this.h.length
    };
    Su.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    Su.prototype.contains = function(a) {
        return bb(this.g, a) || bb(this.h, a)
    };
    Su.prototype.ga = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    var Y = function(a, b, c, d, e, f, g) {
        K.call(this);
        var h = this;
        this.I = a;
        this.g = b;
        this.H = c;
        this.yd = e;
        this.w = new Bs;
        this.K = g;
        this.P = !1;
        this.N = 1;
        this.Nd = d;
        this.aa = -1;
        this.l = this.h = null;
        this.D = new Ku({
            currentTime: 0
        }, this.K);
        this.C = new Su;
        this.Xa = this.$ = !1;
        this.V = new Map;
        this.X = this.pa = !1;
        this.sa = new Qu(b, g);
        Zg(this, this.sa);
        this.L = f && null != this.g.F;
        this.O = function() {
            var l = h.g.g,
                n = l.getCurrentTime();
            l = l.getDuration();
            return {
                currentTime: n,
                duration: l,
                isPlaying: !0,
                volume: h.N
            }
        };
        this.Y = new Wp(this);
        this.Y.T(this.K,
            "adsManager", this.Qd)
    };
    p(Y, K);
    Y.prototype.Qd = function(a) {
        var b = this,
            c = a.ba,
            d = a.fa;
        switch (c) {
            case "error":
                Tu(this);
                Uu(this, d);
                break;
            case "contentPauseRequested":
                js.B().report(130);
                Vu(this);
                Wu(this, a.ba, a.fa);
                break;
            case "contentResumeRequested":
                Xu(this, function() {
                    return Wu(b, c, d)
                });
                break;
            case "remainingTime":
                this.aa = d.remainingTime;
                break;
            case "skip":
                Wu(this, c, d);
                break;
            case "log":
                Wu(this, c, d, d.logData);
                break;
            case "companionBackfill":
                a = Da("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipShown":
                this.P = !0;
                Wu(this, c, d);
                break;
            case "interaction":
                Wu(this, c, d, d.interactionData);
                break;
            case "vpaidEvent":
                Ru(this.sa, a);
                break;
            case "skippableStateChanged":
                a = d.adData;
                null != a.skippable && (this.P = a.skippable);
                Wu(this, c, d);
                break;
            case "volumeChange":
                a = d.adData;
                null != a && "number" === typeof a.volume && (this.N = a.volume);
                Wu(this, c, d);
                break;
            case "firstQuartile":
                Wu(this, xr.firstQuartile, d);
                Wu(this, c, d);
                break;
            case "thirdQuartile":
                Wu(this, xr.thirdQuartile, d);
                Wu(this, c, d);
                break;
            default:
                Wu(this, c, d)
        }
    };
    var Wu = function(a, b, c, d) {
            if (null == c.companions) {
                var e = a.V.get(c.adId);
                c.companions = null != e ? e : []
            }
            var f = c.adData;
            if (e = null == f ? null : new X(f)) a.h = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new Cr(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    null != c.adCuePoints && (b = new Gt(c.adCuePoints));
                    b = new Iu(e, b);
                    break;
                case "allAdsCompleted":
                    a.h = null;
                    a.pa = !0;
                    b = new Cr(b, e);
                    break;
                case "contentPauseRequested":
                    a.X = !1;
                    b = new Cr(b, e);
                    break;
                case "contentResumeRequested":
                    a.h = null;
                    a.X = !0;
                    b = new Cr(b, e);
                    break;
                case "loaded":
                    a.aa =
                        e.getDuration();
                    lr() && (d = a.I, c = a.yd, d.h.set(Br(e), a.O), (0 != T.g ? co.B().l : d.A) && ts(d, "loaded", Br(e), c));
                    null != f.gfpCookie && T.o && hq() && (d = f.gfpCookie, Wd.set("__gads", d.value, {
                        Zc: d.expires,
                        path: d.path,
                        domain: d.domain
                    }), delete f.gfpCookie);
                    b = new Cr(b, e, f);
                    break;
                case "start":
                    a.V.set(c.adId, c.companions);
                    null != wu(a.g) && (null == a.l ? (a.l = new Kr, a.Y.T(a.l, "click", a.Kf)) : Or(a.l), Mr(a.l, wu(a.g)));
                    b = new Cr(b, e);
                    break;
                case "complete":
                    null != a.l && Or(a.l);
                    lr() && vs(a.I, a.O, Br(e));
                    a.h = null;
                    a.V.delete(c.adId);
                    b = new Cr(b,
                        e);
                    break;
                case "log":
                    f = null;
                    null != d && null != d.type ? (c = d.type, c = "adLoadError" == c || "adPlayError" == c) : c = !1;
                    c && (f = {
                        adError: new Gu(d)
                    });
                    b = new Cr(b, e, f);
                    break;
                case "interaction":
                    b = new Cr(b, e, d);
                    break;
                case "adProgress":
                    b = new Cr(b, e, new Ju(c));
                    break;
                default:
                    b = new Cr(b, e)
            }
            a.dispatchEvent(b);
            a.pa && a.X && a.destroy()
        },
        Uu = function(a, b) {
            var c = new Hu(new Gu(b));
            a.$ ? (a.dispatchEvent(c), lr() && a.h && vs(a.I, a.O, Br(a.h)), a.h = null) : a.C.h.push(c);
            a = {
                error: b.errorCode,
                vis: xg(document)
            };
            js.B().report(7, a)
        },
        Yu = function(a, b, c) {
            a.K.send("adsManager",
                b, c)
        },
        Xu = function(a, b) {
            js.B().report(131);
            Tu(a, b)
        },
        Vu = function(a) {
            var b = a.g.g;
            Eu(a.g) && a.w.restoreCustomPlaybackStateOnAdBreakComplete && null != b.pa && b.pa()
        },
        Tu = function(a, b) {
            var c = a.g.g;
            Eu(a.g) && a.w.restoreCustomPlaybackStateOnAdBreakComplete && null != c.V ? c.V(b) : b && b()
        };
    k = Y.prototype;
    k.bf = function(a, b, c, d) {
        if (this.C.isEmpty()) {
            var e = this.g,
                f = null;
            e.A && null == d && (f = {
                vd: "setnull"
            });
            e.A && e.A === d && (f = {
                vd: "match"
            });
            if (e.A && e.A !== d) {
                f = kr(d || null);
                var g = zp(d || null);
                f = {
                    vd: "diff",
                    oc: e.$,
                    nc: f,
                    oi: e.Y,
                    ni: g
                }
            }!e.A && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.V, js.B().report(93, f));
            null != d && (e.C = Du(d), jr(e.C) && (e.N = !0, Yg(e.h), Yg(e.o), Yg(e.l), e.h = null, e.o = null, e.l = null, Yg(e.g), e.g = new Lt(d), v(d.getBoundingClientRect) ? e.D = d : (e.D = e.w, T.F = e.D), d = e.J, e = e.g, d.l.uc(e), d.D && (d = d.D, e = e.w.g, d.o = e, d.g && (d = d.g, d.g =
                e, Et(d, e)))));
            this.$ = !0;
            this.gd(a, b, c);
            e = Cs(this.w, this.L);
            Yu(this, "init", {
                adsRenderingSettings: e,
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.C.isEmpty();) b = a = this.C, 0 == b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
            this.U()
        }
    };
    k.he = function() {
        return Eu(this.g)
    };
    k.ge = function() {
        return this.L
    };
    k.af = function() {
        return this.aa
    };
    k.Ye = function() {
        return this.P
    };
    k.Vd = function() {
        Yu(this, "discardAdBreak")
    };
    k.df = function(a) {
        if (null != a) {
            var b = this.w.bitrate,
                c = a.bitrate;
            js.B().report(96, {
                init: this.$ ? "1" : "0",
                start: this.Xa ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.w = a;
            a = Cs(this.w, this.L);
            Yu(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: a
            })
        }
    };
    k.cf = function() {
        Yu(this, "skip")
    };
    k.start = function() {
        if (this.H) {
            (Zc || ad) && js.B().report(50, {
                customPlayback: Eu(this.g)
            });
            this.g.K || js.B().report(26, {
                adtagurl: this.H,
                customPlayback: Eu(this.g)
            });
            Bj(this.g.w) && js.B().report(30, {
                adtagurl: this.H,
                customPlayback: Eu(this.g)
            });
            var a = this.g.F,
                b = this.g.w,
                c;
            if (c = a && b && !Bj(a)) a = qs(a), b = qs(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && js.B().report(31, {
                adtagurl: this.H,
                customPlayback: Eu(this.g)
            })
        }
        if (!this.g.K &&
            !Eu(this.g)) throw Jr(Hr);
        b = this.g;
        b.P = this.L && null != b.F;
        this.g.J.g.style.opacity = 1;
        null != this.A && 1 == this.getVolume() && ("boolean" === typeof this.A.muted && this.A.muted ? this.setVolume(0) : "number" === typeof this.A.volume && (b = this.A.volume, 0 <= b && 1 >= b && this.setVolume(this.A.volume)));
        this.Xa = !0;
        Yu(this, "start")
    };
    k.Kf = function() {
        if (!this.w.disableClickThrough && null != this.h) {
            var a = this.h.g.clickThroughUrl;
            if (null != a) {
                var b = ic("_blank");
                if (!sb(Hc(a))) {
                    var c = a instanceof qc || !Ze.test(a) ? a : new qc(oc, a);
                    a = window;
                    c = c instanceof qc ? c : tc(c);
                    (a || q).open(rc(c), b ? hc(b) : "", "", void 0)
                }
            }
        }
    };
    k.gd = function(a, b, c) {
        this.g.setSize(a, b);
        Yu(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    k.stop = function() {
        Yu(this, "stop")
    };
    k.Xe = function() {
        Yu(this, "expand")
    };
    k.We = function() {
        Yu(this, "collapse")
    };
    k.getVolume = function() {
        return this.N
    };
    k.setVolume = function(a) {
        this.N = a;
        this.g.g.setVolume(a);
        Yu(this, "volume", {
            volume: a
        })
    };
    k.pause = function() {
        Yu(this, "pause")
    };
    k.resume = function() {
        Yu(this, "resume")
    };
    k.destroy = function() {
        this.U()
    };
    k.Ze = function() {
        return this.Nd
    };
    k.$e = function() {
        js.B().report(124, {
            api: "getCurrentAd"
        });
        return this.h
    };
    k.R = function() {
        Yu(this, "destroy");
        null != this.l && this.l.U();
        this.Y.U();
        this.C.clear();
        this.D && (this.D.stop(), this.D.U());
        lr() && vs(this.I, this.O);
        K.prototype.R.call(this)
    };
    k.Ve = function() {
        js.B().report(124, {
            api: "clicked"
        });
        Yu(this, "click")
    };
    var Zu = function(a, b) {
        $g.call(this, "adsManagerLoaded");
        this.h = a;
        this.o = b
    };
    p(Zu, $g);
    Zu.prototype.w = function(a, b) {
        var c = this.h;
        c.A = a;
        null != a.currentTime && (c.D = new Ku(a, c.K), c.D.start());
        null != b && (c.w = b);
        return this.h
    };
    Zu.prototype.A = function() {
        return this.o
    };
    var Z = function() {
        this.videoPlayMuted = this.videoPlayActivation = "unknown";
        this.videoContinuousPlay = "0";
        this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
        this.forceNonLinearFullSlot = !1;
        this.vastLoadTimeout = 5E3
    };
    Z.prototype.setAdWillAutoPlay = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    Z.prototype.setAdWillPlayMuted = function(a) {
        this.videoPlayMuted = a ? "muted" : "unmuted"
    };
    Z.prototype.setContinuousPlayback = function(a) {
        this.videoContinuousPlay = a ? "2" : "1"
    };
    var av = function() {
            if (Ij()) return window.location.href;
            var a = rf(),
                b = a.h,
                c = a.g;
            a = a.l;
            var d = null;
            a && (d = $u(a.url));
            return d ? d : b && b.url ? b.url : c && c.url ? c.url : ""
        },
        $u = function(a) {
            try {
                var b = new Co(a);
                if (!b.g.includes(".cdn.ampproject.org")) return null;
                var c = b.l.split("/").slice(1);
                if ("s" == c[1] && 3 > c.length) return null;
                if (2 > c.length) return a;
                var d = "s" == c[1];
                c = d ? c.slice(2) : c.slice(1);
                var e = decodeURIComponent(c[0]) + "/";
                return d ? "https://" + e + c.slice(1).join("/") : "http://" + e + c.slice(1).join("/")
            } catch (f) {
                return null
            }
        },
        bv = function() {
            var a = F().location.ancestorOrigins;
            return a ? 0 < a.length && 200 > a[a.length - 1].length ? a[a.length - 1] : "" : null
        };
    var cv = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload", e.href = y("preload", "stylesheet") ? mc(b).toString() : b instanceof lc ? mc(b).toString() : b instanceof qc ? rc(b) : rc(tc(b))
        } catch (f) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (f) {}
    };
    var dv = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        ev = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        fv = q,
        gv = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(q.location.hostname)];
            Rq[3] >= w() && b.push("adsid=" + encodeURIComponent(Rq[1]));
            return a + "?" + b.join("&")
        },
        Rq, hv, Qq = function() {
            fv = q;
            Rq = fv.googleToken = fv.googleToken || {};
            var a = w();
            Rq[1] && Rq[3] > a && 0 < Rq[2] || (Rq[1] = "", Rq[2] = -1, Rq[3] = -1, Rq[4] = "", Rq[6] = "");
            hv = fv.googleIMState = fv.googleIMState || {};
            a = hv[1];
            dv.test(a) && !ev.test(a) ||
                (hv[1] = ".google.com");
            Ha(hv[5]) || (hv[5] = []);
            "boolean" !== typeof hv[6] && (hv[6] = !1);
            Ha(hv[7]) || (hv[7] = []);
            "number" !== typeof hv[8] && (hv[8] = 0)
        },
        iv = {
            $b: function() {
                return 0 < hv[8]
            },
            Pf: function() {
                hv[8]++
            },
            Qf: function() {
                0 < hv[8] && hv[8]--
            },
            Rf: function() {
                hv[8] = 0
            },
            nh: function() {
                return !1
            },
            Wc: function() {
                return hv[5]
            },
            Sc: function(a) {
                try {
                    a()
                } catch (b) {
                    q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            md: function() {
                if (!iv.$b()) {
                    var a = q.document,
                        b = function(e) {
                            e = gv(e);
                            a: {
                                try {
                                    var f = Ca();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            cv(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return q.processGoogleToken({}, 2)
                            };
                            e = Ce(e);
                            Cc(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), iv.Pf()
                            } catch (g) {}
                        },
                        c = hv[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    q.setTimeout(function() {
                        return q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        jv = function(a) {
            Qq();
            var b = fv.googleToken[5] || 0;
            a && (0 != b || Rq[3] >= w() ? iv.Sc(a) : (iv.Wc().push(a), iv.md()));
            Rq[3] >= w() && Rq[2] >= w() || iv.md()
        },
        kv = function(a) {
            q.processGoogleToken = q.processGoogleToken ||
                function(b, c) {
                    var d = b;
                    d = void 0 === d ? {} : d;
                    c = void 0 === c ? 0 : c;
                    b = d.newToken || "";
                    var e = "NT" == b,
                        f = parseInt(d.freshLifetimeSecs || "", 10),
                        g = parseInt(d.validLifetimeSecs || "", 10),
                        h = d["1p_jar"] || "";
                    d = d.pucrd || "";
                    Qq();
                    1 == c ? iv.Rf() : iv.Qf();
                    var l = fv.googleToken = fv.googleToken || {},
                        n = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                    e = e && !iv.$b() && (!(Rq[3] >= w()) || "NT" == Rq[1]);
                    var m = !(Rq[3] >= w()) && 0 != c;
                    if (n || e || m) e = w(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Ye(q,
                        "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), l[5] = c, l[1] = b, l[2] = f, l[3] = g, l[4] = h, l[6] = d, Qq();
                    if (n || !iv.$b()) {
                        c = iv.Wc();
                        for (b = 0; b < c.length; b++) iv.Sc(c[b]);
                        c.length = 0
                    }
                };
            jv(a)
        };
    var lv = function(a, b) {
        b = void 0 === b ? 500 : b;
        J.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.w = 0;
        this.A = b;
        this.l = null
    };
    p(lv, J);
    lv.prototype.R = function() {
        this.o = {};
        this.l && (fe(this.h, "message", this.l), delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        J.prototype.R.call(this)
    };
    var nv = function(a) {
            return v(a.h.__uspapi) || null != mv(a)
        },
        pv = function(a, b) {
            var c = {};
            if (nv(a)) {
                var d = pb(function() {
                    return b(c)
                });
                ov(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.A)
            } else b(c)
        },
        ov = function(a, b) {
            if (v(a.h.__uspapi)) a = a.h.__uspapi, a("getUSPData", 1, b);
            else if (mv(a)) {
                qv(a);
                var c = ++a.w;
                a.o[c] = b;
                a.g && (b = {}, a.g.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }, b), "*"))
            }
        },
        mv = function(a) {
            if (a.g) return a.g;
            a.g = Pe(a.h, "__uspapiLocator");
            return a.g
        },
        qv = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    a.o[d.callId](d.returnValue, d.success)
                } catch (e) {}
            }, ee(a.h, "message", a.l))
        };
    var rv = function(a, b) {
        b = void 0 === b ? 500 : b;
        J.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.w = 0;
        this.A = b;
        this.l = null
    };
    p(rv, J);
    rv.prototype.R = function() {
        this.o = {};
        this.l && (fe(this.h, "message", this.l), delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        J.prototype.R.call(this)
    };
    var uv = function(a) {
            return v(a.h.__tcfapi) || null != tv(a)
        },
        wv = function(a, b) {
            var c = {},
                d = pb(function() {
                    if (void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent || !c.cmpStatus || "error" === c.cmpStatus || "loaded" !== c.cmpStatus || "tcloaded" !== c.eventStatus && "useractioncomplete" !== c.eventStatus) c.tcString = "tcunavailable";
                    b(c)
                });
            vv(a, function(e, f) {
                f &&
                    (c = e);
                d()
            }, d);
            setTimeout(d, a.A)
        },
        vv = function(a, b, c) {
            v(a.h.__tcfapi) ? (a = a.h.__tcfapi, a("getTCData", 2, b, void 0)) : tv(a) ? (xv(a), c = ++a.w, a.o[c] = b, a.g && (b = {}, a.g.postMessage((b.__tcfapiCall = {
                command: "getTCData",
                version: 2,
                callId: c,
                parameter: void 0
            }, b), "*"))) : c && c()
        },
        tv = function(a) {
            if (a.g) return a.g;
            a.g = Pe(a.h, "__tcfapiLocator");
            return a.g
        },
        xv = function(a) {
            a.l || (a.l = function(b) {
                    try {
                        var c;
                        "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                        var d = c.__tcfapiReturn;
                        a.o[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                },
                ee(a.h, "message", a.l))
        };
    var yv = function() {
        var a = this;
        this.g = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    (function() {
        if (!Kb(function(e) {
                return e.match(F().location.href)
            })) {
            for (var a = ne(), b = null, c = null, d = 0; d < a.length; d++)
                if (c = a[d], Kb(function(e) {
                        return e.match(c.src)
                    })) {
                    b = c;
                    break
                }
            if (null == b) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
        }
    })();
    var Bv = function(a) {
        K.call(this);
        this.g = a;
        this.A = new Map;
        this.l = this.g.J;
        this.C = new Wp(this);
        this.D = new rv(window);
        this.H = new lv(window);
        0 != T.g ? (this.h = new ns, Zg(this, this.h)) : this.h = ps();
        if (lr()) {
            a = this.h;
            var b = ru(this.l);
            if (!a.l) {
                a.g = b || null;
                a.g && (a.D.T(a.g, "activityMonitor", a.H), ws(a));
                if (!(q.ima && q.ima.video && q.ima.video.client && q.ima.video.client.tagged)) {
                    u("ima.video.client.sdkTag", !0, void 0);
                    var c = q.document;
                    b = se(document, "SCRIPT");
                    var d = nc(hc(ic("https://s0.2mdn.net/instream/video/client.js")));
                    Cc(b, d);
                    b.async = !0;
                    b.type = "text/javascript";
                    c = c.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c)
                }
                zi();
                co.B().L = T.g;
                a.A = !0;
                co.B().l = !0;
                a.C = (v(null), null);
                b = co.B();
                c = "h" == Cn(b) || "b" == Cn(b);
                d = !(R.B(), !1);
                c && d && (b.C = !0, b.H = new Ll);
                a.l = !0
            }
            this.w = us(this.h, this.g.D)
        }
        zv();
        Av()
    };
    p(Bv, K);
    k = Bv.prototype;
    k.R = function() {
        this.C.U();
        var a = this.w;
        this.h.w.delete(a);
        0 != T.g && (co.B().w[a] = null);
        K.prototype.R.call(this)
    };
    k.destroy = function() {
        this.U()
    };
    k.getVersion = function() {
        return "h.3.371.3"
    };
    k.Ue = function(a, b) {
        var c = this,
            d = [];
        if (!Kj()) {
            var e = new yv;
            d.push(e.g);
            kv(function() {
                Sq();
                Tq();
                Uq();
                e.resolve()
            })
        }
        var f = null;
        if (uv(this.D)) {
            var g = new yv;
            d.push(g.g);
            wv(this.D, function(n) {
                f = n;
                g.resolve()
            })
        }
        var h = null;
        if (nv(this.H)) {
            var l = new yv;
            d.push(l.g);
            pv(this.H, function(n) {
                h = n;
                l.resolve()
            })
        }
        Promise.all(d).then(function() {
            var n = f,
                m = h,
                t = a.adTagUrl;
            t && js.B().report(8, {
                adtagurl: t,
                customPlayback: Eu(c.g),
                customClick: null != c.g.F
            });
            var B = "goog_" + Ic++;
            c.A.set(B, b || null);
            if (t) {
                var r = /iu=\/(\d+)\//.exec(Dc(t));
                (r = r && 2 == r.length ? r[1] : null) || (r = Hc((new Co(t)).h.get("client")), r = sb(r) ? null : r)
            } else r = null;
            r = r || "";
            var A = Qe(r);
            0 != A ? r = A : (A = q.top, r = Oe(A, "googlefcInactive") ? 4 : r && Oe(A, "googlefcPA-" + r) ? 2 : Oe(A, "googlefcNPA") ? 3 : 0);
            A = {};
            n = (A.gfcPresent = (!!q.googlefc || Oe(q.top, "googlefcPresent")) && 4 != r, A.gfcUserConsent = r, A.isGdprLoader = !0, A.gdprApplies = n ? n.gdprApplies : null, A.tcString = n ? n.tcString : null, A.uspString = m ? m.uspString : null, A);
            m = {};
            if (T.o) {
                r = hq();
                if (m.isBrowserCookieEnabled = r) r = new Co(t), A = r.l, r = rb(r.g, "doubleclick.net") &&
                    (sb(A) ? !1 : /\/gampad\/(live\/)?ads/.test(A));
                r && (r = Wd.get("__gads"), m.gfpCookieValue = Hc(r))
            }
            r = cr();
            A = {};
            A.limaExperimentIds = rg().sort().join(",");
            var z = c.fd(),
                O = 0 != T.g ? co.B().l : c.h.A;
            O = void 0 === O ? null : O;
            var U = {};
            null != O && (U.activeViewPushUpdates = O);
            U.activityMonitorMode = z.g;
            U.adsToken = z.K;
            U.autoPlayAdBreaks = z.l;
            U.companionBackfill = z.w;
            U.cookiesEnabled = z.o;
            U.disableCustomPlaybackForIOS10Plus = z.h;
            U.engagementDetection = !0;
            U.isFunctionalTest = !1;
            U.isVpaidAdapter = z.ab();
            U["1pJar"] = z.L;
            U.numRedirects = z.J;
            U.pageCorrelator = z.O;
            U.persistentStateCorrelator = $f();
            U.playerType = z.C;
            U.playerVersion = z.D;
            U.ppid = z.P;
            U.privacyControls = z.V;
            U.reportMediaRequests = !1;
            U.streamCorrelator = z.X;
            U.testingConfig = Lq(z).g;
            U.unloadAbandonPingEnabled = !0;
            U.urlSignals = z.aa;
            U.vpaidMode = z.I;
            z = {};
            z.contentMediaUrl = c.g.I;
            z.customClickTrackingProvided = null != c.g.F;
            a: {
                O = of();O = ba(O);
                for (var M = O.next(); !M.done; M = O.next())
                    if (M = M.value, M.url && M.url.includes("amp=1")) {
                        O = !0;
                        break a
                    }
                O = null != window.context ? 0 < parseInt(window.context.ampcontextVersion,
                    10) : null != rf().l
            }
            z.isAmp = O;
            a: {
                try {
                    var ya = window.top.location.href
                } catch (Dv) {
                    ya = 2;
                    break a
                }
                ya = null == ya ? 2 : ya == window.document.location.href ? 0 : 1
            }
            z.iframeState = ya;
            z.imaHostingDomain = window.document.domain;
            z.location = av();
            z.referrer = window.document.referrer;
            z.domLoadTime = c.l.N;
            z.sdkImplLoadTime = c.l.O;
            z.topOrigin = bv();
            z.osdId = c.w;
            z.usesCustomVideoPlayback = Eu(c.g);
            z.usesInlinePlayback = c.g.C;
            O = c.g.H;
            ya = [];
            var Oa = M = "";
            if (null != O) {
                M = O;
                Oa = !0;
                Oa = void 0 === Oa ? !1 : Oa;
                for (var cd = [], Zb = 0; M && 25 > Zb; ++Zb) {
                    var dd = "";
                    void 0 !==
                        Oa && Oa || (dd = (dd = 9 !== M.nodeType && M.id) ? "/" + dd : "");
                    a: {
                        if (M && M.nodeName && M.parentElement) {
                            var bd = M.nodeName.toString().toLowerCase();
                            for (var sp = M.parentElement.childNodes, tp = 0, Gj = 0; Gj < sp.length; ++Gj) {
                                var Hj = sp[Gj];
                                if (Hj.nodeName && Hj.nodeName.toString().toLowerCase() === bd) {
                                    if (M === Hj) {
                                        bd = "." + tp;
                                        break a
                                    }++tp
                                }
                            }
                        }
                        bd = ""
                    }
                    cd.push((M.nodeName && M.nodeName.toString().toLowerCase()) + dd + bd);
                    M = M.parentElement
                }
                M = cd.join();
                if (O) {
                    O = (O = O.ownerDocument) && (O.defaultView || O.parentWindow) || null;
                    Oa = [];
                    if (O) try {
                        var Q = O.parent;
                        for (cd = 0; Q && Q !== O && 25 > cd; ++cd) {
                            var $b = Q.frames;
                            for (Zb = 0; Zb < $b.length; ++Zb)
                                if (O === $b[Zb]) {
                                    Oa.push(Zb);
                                    break
                                }
                            O = Q;
                            Q = O.parent
                        }
                    } catch (Dv) {}
                    Oa = Oa.join()
                } else Oa = ""
            }
            ya.push(M, Oa);
            if (null != t) {
                for (Q = 0; Q < hp.length - 1; ++Q) ya.push(Ge(t, hp[Q]) || "");
                t = Ge(t, "videoad_start_delay");
                Q = "";
                t && (t = parseInt(t, 10), Q = 0 > t ? "postroll" : 0 == t ? "preroll" : "midroll");
                ya.push(Q)
            } else
                for (t = 0; t < hp.length; ++t) ya.push("");
            t = ya.join(":");
            Q = t.length;
            if (0 == Q) t = 0;
            else {
                $b = 305419896;
                for (ya = 0; ya < Q; ya++) $b ^= ($b << 5) + ($b >> 2) + t.charCodeAt(ya) & 4294967295;
                t = 0 < $b ? $b : 4294967296 + $b
            }
            z.videoAdKey = t.toString();
            t = {};
            Q = {};
            Q.adsResponse = a.adsResponse;
            Q.videoPlayActivation = a.videoPlayActivation;
            Q.videoPlayMuted = a.videoPlayMuted;
            Q.videoContinuousPlay = a.videoContinuousPlay;
            Q.adTagUrl = a.adTagUrl;
            Q.contentDuration = a.contentDuration;
            Q.contentKeywords = a.contentKeywords;
            Q.contentTitle = a.contentTitle;
            Q.linearAdSlotWidth = a.linearAdSlotWidth;
            Q.linearAdSlotHeight = a.linearAdSlotHeight;
            Q.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
            Q.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight;
            Q.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
            Q.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
            Q.vastLoadTimeout = a.vastLoadTimeout;
            Object.assign(t, Q);
            t.consentSettings = n;
            t.cookieSettings = m;
            t.experimentState = r;
            t.imalibExperiments = A;
            t.settings = U;
            t.videoEnvironment = z;
            B = ru(c.l, B);
            c.C.T(B, "adsLoader", c.I);
            B.send("adsLoader", "requestAds", t)
        })
    };
    k.fd = function() {
        return T
    };
    k.Te = function() {
        ru(this.l).send("adsLoader", "contentComplete")
    };
    var zv = function() {
        !Kj() && kv(function() {
            Sq();
            Tq();
            Uq()
        })
    };
    Bv.prototype.I = function(a) {
        var b = a.ba;
        switch (b) {
            case "adsLoaded":
                b = a.fa;
                a = a.Mb;
                var c = this.l,
                    d = 1 == b.newManager;
                !c.I && d ? (c.I = !0, c.l.U(), c.l = new du(c.w, c.H), Zg(c, c.l)) : c.I && !d && (c.I = !1, tu(c));
                b = new Y(this.h, this.g, b.adTagUrl || "", b.adCuePoints, this.w, b.isCustomClickTrackingAllowed, ru(this.l, a));
                this.dispatchEvent(new Zu(b, Cv(this, a)));
                break;
            case "error":
                b = a.fa;
                this.dispatchEvent(new Hu(new Gu(b), Cv(this, a.Mb)));
                b = {
                    error: b.errorCode,
                    vis: xg(document)
                };
                js.B().report(7, b);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new Cr(b,
                    null, a.fa))
        }
    };
    var Cv = function(a, b) {
            var c = a.A.get(b);
            a.A.delete(b);
            return c
        },
        Av = function() {
            var a = (window.location.origin || "null").trim(),
                b = "null" === a,
                c = window == window.top,
                d = !1,
                e = !1;
            try {
                d = null != window.top.location.hostname, e = null != window.parent.location.hostname
            } catch (g) {}
            var f = null != Array.from(document.body.getElementsByTagName("script")).find(function(g) {
                return g.src && g.src.includes("connatix")
            });
            js.B().report(121, {
                location: av(),
                top_origin: bv(),
                origin: a,
                is_null: b,
                is_top: c,
                is_friendly_to_top: d,
                is_friendly_to_parent: e,
                is_vpaid_adapter: T.ab(),
                is_connatix_player: f
            })
        };
    X.prototype.getCompanionAds = X.prototype.ue;
    X.prototype.isLinear = X.prototype.isLinear;
    X.prototype.isSkippable = X.prototype.Re;
    X.prototype.isUiDisabled = X.prototype.Se;
    X.prototype.getAdId = X.prototype.h;
    X.prototype.getAdSystem = X.prototype.re;
    X.prototype.getAdvertiserName = X.prototype.se;
    X.prototype.getApiFramework = X.prototype.te;
    X.prototype.getContentType = X.prototype.ve;
    X.prototype.getCreativeId = X.prototype.o;
    X.prototype.getCreativeAdId = X.prototype.l;
    X.prototype.getDescription = X.prototype.xe;
    X.prototype.getTitle = X.prototype.De;
    X.prototype.getDuration = X.prototype.getDuration;
    X.prototype.getHeight = X.prototype.ye;
    X.prototype.getWidth = X.prototype.Ne;
    X.prototype.getVastMediaHeight = X.prototype.Le;
    X.prototype.getVastMediaWidth = X.prototype.Me;
    X.prototype.getVastMediaBitrate = X.prototype.Ke;
    X.prototype.getWrapperCreativeIds = X.prototype.Qe;
    X.prototype.getWrapperAdIds = X.prototype.Oe;
    X.prototype.getWrapperAdSystems = X.prototype.Pe;
    X.prototype.getTraffickingParameters = X.prototype.Ee;
    X.prototype.getTraffickingParametersString = X.prototype.Fe;
    X.prototype.getAdPodInfo = X.prototype.qe;
    X.prototype.getUiElements = X.prototype.Ge;
    X.prototype.getMinSuggestedDuration = X.prototype.Ae;
    X.prototype.getMediaUrl = X.prototype.ze;
    X.prototype.getSurveyUrl = X.prototype.Ce;
    X.prototype.getSkipTimeOffset = X.prototype.Be;
    X.prototype.getDealId = X.prototype.we;
    X.prototype.getUniversalAdIds = X.prototype.Je;
    X.prototype.getUniversalAdIdValue = X.prototype.Ie;
    X.prototype.getUniversalAdIdRegistry = X.prototype.He;
    Gt.prototype.getCuePoints = Gt.prototype.h;
    u("google.ima.AdCuePoints.PREROLL", 0, window);
    u("google.ima.AdCuePoints.POSTROLL", -1, window);
    u("google.ima.AdDisplayContainer", Fu, window);
    Fu.prototype.initialize = Fu.prototype.X;
    Fu.prototype.destroy = Fu.prototype.destroy;
    yr.prototype.getPodIndex = yr.prototype.ne;
    yr.prototype.getTimeOffset = yr.prototype.oe;
    yr.prototype.getTotalAds = yr.prototype.pe;
    yr.prototype.getMaxDuration = yr.prototype.me;
    yr.prototype.getAdPosition = yr.prototype.ke;
    yr.prototype.getIsBumper = yr.prototype.le;
    Ju.prototype.adBreakDuration = Ju.prototype.g;
    Ju.prototype.adPosition = Ju.prototype.adPosition;
    Ju.prototype.currentTime = Ju.prototype.currentTime;
    Ju.prototype.duration = Ju.prototype.duration;
    Ju.prototype.totalAds = Ju.prototype.totalAds;
    Ar.prototype.getAdIdValue = Ar.prototype.o;
    Ar.prototype.getAdIdRegistry = Ar.prototype.l;
    u("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
    u("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
    u("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
    u("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
    u("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
    u("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
    u("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
    u("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
    u("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
    u("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
    u("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
    u("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
    u("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
    u("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
    u("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
    u("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
    u("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
    u("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
    u("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
    u("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
    u("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
    u("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
    u("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
    u("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
    u("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
    u("google.ima.AdError.ErrorCode.AUTOPLAY_DISALLOWED", 1205, window);
    u("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    u("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    u("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    u("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    u("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    u("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    u("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    u("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
    u("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
    Gu.prototype.getErrorCode = Gu.prototype.sc;
    Gu.prototype.getVastErrorCode = Gu.prototype.je;
    Gu.prototype.getInnerError = Gu.prototype.tc;
    Gu.prototype.getMessage = Gu.prototype.ed;
    Gu.prototype.getType = Gu.prototype.ie;
    u("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
    Hu.prototype.getError = Hu.prototype.w;
    Hu.prototype.getUserRequestContext = Hu.prototype.A;
    u("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
    u("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
    u("google.ima.AdEvent.Type.CLICK", "click", window);
    u("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
    u("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
    u("google.ima.AdEvent.Type.STARTED", "start", window);
    u("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
    u("google.ima.AdEvent.Type.PAUSED", "pause", window);
    u("google.ima.AdEvent.Type.RESUMED", "resume", window);
    u("google.ima.AdEvent.Type.AD_PROGRESS", "adProgress", window);
    u("google.ima.AdEvent.Type.AD_BUFFERING", "adBuffering", window);
    u("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstQuartile", window);
    u("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
    u("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdQuartile", window);
    u("google.ima.AdEvent.Type.COMPLETE", "complete", window);
    u("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
    u("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
    u("google.ima.AdEvent.Type.LOADED", "loaded", window);
    u("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
    u("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
    u("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
    u("google.ima.AdEvent.Type.INTERACTION", "interaction", window);
    u("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
    u("google.ima.AdEvent.Type.SKIPPED", "skip", window);
    u("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
    u("google.ima.AdEvent.Type.LOG", "log", window);
    u("google.ima.AdEvent.Type.VIEWABLE_IMPRESSION", "viewable_impression", window);
    u("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
    u("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
    Cr.prototype.type = Cr.prototype.type;
    Cr.prototype.getAd = Cr.prototype.F;
    Cr.prototype.getAdData = Cr.prototype.J;
    Iu.prototype.getAdCuePoints = Iu.prototype.o;
    u("google.ima.AdsLoader", Bv, window);
    Bv.prototype.getSettings = Bv.prototype.fd;
    Bv.prototype.requestAds = Bv.prototype.Ue;
    Bv.prototype.contentComplete = Bv.prototype.Te;
    Bv.prototype.destroy = Bv.prototype.destroy;
    Bv.prototype.getVersion = Bv.prototype.getVersion;
    u("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
    Zu.prototype.getAdsManager = Zu.prototype.w;
    Zu.prototype.getUserRequestContext = Zu.prototype.A;
    u("google.ima.CompanionAdSelectionSettings", mr, window);
    u("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
    u("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
    u("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
    u("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
    u("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
    u("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
    u("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
    u("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
    u("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
    u("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
    u("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    u("ima.ImaSdkSettings", V, window);
    u("google.ima.settings", T, window);
    V.prototype.setCompanionBackfill = V.prototype.rf;
    V.prototype.getCompanionBackfill = V.prototype.ff;
    V.prototype.setAutoPlayAdBreaks = V.prototype.qf;
    V.prototype.isAutoPlayAdBreak = V.prototype.nf;
    V.prototype.setPpid = V.prototype.Af;
    V.prototype.getPpid = V.prototype.mf;
    V.prototype.setVpaidAllowed = V.prototype.Bf;
    V.prototype.setVpaidMode = V.prototype.Cf;
    V.prototype.setIsVpaidAdapter = V.prototype.vf;
    V.prototype.isVpaidAdapter = V.prototype.ab;
    V.prototype.setNumRedirects = V.prototype.xf;
    V.prototype.getNumRedirects = V.prototype.jf;
    V.prototype.getLocale = V.prototype.Wd;
    V.prototype.setLocale = V.prototype.wf;
    V.prototype.getPlayerType = V.prototype.kf;
    V.prototype.setPlayerType = V.prototype.yf;
    V.prototype.getDisableFlashAds = V.prototype.hf;
    V.prototype.setDisableFlashAds = V.prototype.uf;
    V.prototype.getPlayerVersion = V.prototype.lf;
    V.prototype.setPlayerVersion = V.prototype.zf;
    V.prototype.setPageCorrelator = V.prototype.Y;
    V.prototype.setStreamCorrelator = V.prototype.$;
    V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.tf;
    V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.gf;
    V.prototype.setCookiesEnabled = V.prototype.sf;
    u("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
    u("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
    u("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
    u("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
    u("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
    u("google.ima.AdsRenderingSettings", Bs, window);
    u("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    u("google.ima.AdsRequest", Z, window);
    Z.prototype.adTagUrl = Z.prototype.adTagUrl;
    Z.prototype.adsResponse = Z.prototype.adsResponse;
    Z.prototype.nonLinearAdSlotHeight = Z.prototype.nonLinearAdSlotHeight;
    Z.prototype.nonLinearAdSlotWidth = Z.prototype.nonLinearAdSlotWidth;
    Z.prototype.linearAdSlotHeight = Z.prototype.linearAdSlotHeight;
    Z.prototype.linearAdSlotWidth = Z.prototype.linearAdSlotWidth;
    Z.prototype.setAdWillAutoPlay = Z.prototype.setAdWillAutoPlay;
    Z.prototype.setAdWillPlayMuted = Z.prototype.setAdWillPlayMuted;
    Z.prototype.setContinuousPlayback = Z.prototype.setContinuousPlayback;
    Z.prototype.contentDuration = Z.prototype.contentDuration;
    Z.prototype.contentKeywords = Z.prototype.contentKeywords;
    Z.prototype.contentTitle = Z.prototype.contentTitle;
    Z.prototype.vastLoadTimeout = Z.prototype.vastLoadTimeout;
    u("google.ima.VERSION", "3.371.3", void 0);
    u("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
    u("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
    u("google.ima.ViewMode.NORMAL", "normal", void 0);
    u("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
    Y.prototype.isCustomPlaybackUsed = Y.prototype.he;
    Y.prototype.isCustomClickTrackingUsed = Y.prototype.ge;
    Y.prototype.destroy = Y.prototype.destroy;
    Y.prototype.init = Y.prototype.bf;
    Y.prototype.start = Y.prototype.start;
    Y.prototype.stop = Y.prototype.stop;
    Y.prototype.pause = Y.prototype.pause;
    Y.prototype.resume = Y.prototype.resume;
    Y.prototype.getCuePoints = Y.prototype.Ze;
    Y.prototype.getCurrentAd = Y.prototype.$e;
    Y.prototype.getRemainingTime = Y.prototype.af;
    Y.prototype.expand = Y.prototype.Xe;
    Y.prototype.collapse = Y.prototype.We;
    Y.prototype.getAdSkippableState = Y.prototype.Ye;
    Y.prototype.resize = Y.prototype.gd;
    Y.prototype.skip = Y.prototype.cf;
    Y.prototype.getVolume = Y.prototype.getVolume;
    Y.prototype.setVolume = Y.prototype.setVolume;
    Y.prototype.discardAdBreak = Y.prototype.Vd;
    Y.prototype.updateAdsRenderingSettings = Y.prototype.df;
    Y.prototype.clicked = Y.prototype.Ve;
    zr.prototype.getContent = zr.prototype.getContent;
    zr.prototype.getContentType = zr.prototype.h;
    zr.prototype.getHeight = zr.prototype.l;
    zr.prototype.getWidth = zr.prototype.o;
})();