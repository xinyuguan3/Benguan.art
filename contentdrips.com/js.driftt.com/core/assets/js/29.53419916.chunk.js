(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        "2uLe": function(e, t, a) {
            "use strict";
            var n = a("mj2O"),
                c = a.n(n),
                r = a("7SM1"),
                i = a("VkHq"),
                o = a("Hvhg"),
                s = a("ERkP"),
                u = a("uDfI"),
                l = a("vTYT"),
                b = a("7oto");
            t.a = function useSetPreviewHeight() {
                var e = Object(s.useRef)(null),
                    t = Object(u.c)(function(e) {
                        return !!e.conversations.activeConversation
                    }),
                    a = Object(u.c)(o.c).showBranding,
                    n = void 0 !== a && a,
                    f = Object(i.a)().noPolicy,
                    O = Object(u.c)(function(e) {
                        return e.session.gdpr
                    }),
                    d = O.hasConsent,
                    j = O.declinedConsent,
                    v = Object(s.useCallback)(function() {
                        var e = 0,
                            t = !n && f;
                        return j && (e += 40), t && (e += 18), d || (e += t ? 14 : 7), e
                    }, [j, d, f, n]),
                    h = Object(s.useCallback)(function() {
                        return e.current ? e.current.clientHeight : 200
                    }, [e]),
                    m = Object(s.useCallback)(function() {
                        var e = Object(r.a)(c.a.mark(function _callee(e) {
                            var a, n, r, i, o = arguments;
                            return c.a.wrap(function _callee$(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (a = o.length > 1 && void 0 !== o[1] && o[1], !t || !d) {
                                            c.next = 3;
                                            break
                                        }
                                        return c.abrupt("return");
                                    case 3:
                                        if (n = v(), r = h(), "205px" !== (i = e ? "".concat(r + 155 - n, "px") : "0px")) {
                                            c.next = 8;
                                            break
                                        }
                                        return c.abrupt("return");
                                    case 8:
                                        Object(b.a)({
                                            topic: "set-frame-height",
                                            message: {
                                                height: i,
                                                name: l.c.CHAT,
                                                transition: !0,
                                                transitionHeight: a
                                            }
                                        });
                                    case 9:
                                    case "end":
                                        return c.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t, d, v, h]),
                    p = Object(s.useCallback)(Object(r.a)(c.a.mark(function _callee2() {
                        var e;
                        return c.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = h(), Object(b.a)({
                                        topic: "set-frame-height",
                                        message: {
                                            height: "".concat(e + 80, "px"),
                                            name: l.c.SLIDER,
                                            transition: !0,
                                            transitionHeight: !1
                                        }
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    })), [h]),
                    g = Object(s.useCallback)(Object(r.a)(c.a.mark(function _callee3() {
                        var e;
                        return c.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = h(), Object(b.a)({
                                        topic: "set-frame-height",
                                        message: {
                                            height: "".concat(e + 35, "px"),
                                            name: l.c.EMAIL_CAPTURE,
                                            transition: !0,
                                            transitionHeight: !1
                                        }
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    })), [h]);
                return {
                    previewRef: e,
                    setChatHeight: m,
                    setSliderHeight: p,
                    setEmailCaptureHeight: g
                }
            }
        },
        G5CQ: function(e, t, a) {},
        Gxm1: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return o
            }), a.d(t, "b", function() {
                return s
            });
            var n = a("QtlZ"),
                c = a("LVcX"),
                r = a("0lfv"),
                i = a("CYoe"),
                o = function markTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    n.a.dispatch(Object(i.c)(e, t))
                },
                s = function measureTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                        a = Object(c.a)(null, ["metrics", "timeByName", e], Object(n.b)());
                    return a ? (n.a.dispatch(Object(i.a)(e)), t - a) : (Object(r.m)({
                        type: "warn",
                        data: ['Tried to measure "'.concat(e, '" without mark')]
                    }), null)
                }
        },
        SrLZ: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("mj2O"),
                c = a.n(n),
                r = a("7SM1"),
                i = a("s8DI"),
                o = a("OE2q"),
                s = a("O94r"),
                u = a.n(s),
                l = a("Rqwx"),
                b = a("fTFZ"),
                f = a("vkRn"),
                O = a("CwrG"),
                d = a("HXmn"),
                j = a("8eKL"),
                v = a("slYP"),
                h = a("BY8A"),
                m = a("+/Je"),
                p = a("Y0wo"),
                g = a("fw6E"),
                w = a("1b8i"),
                E = a("gRD2"),
                C = a("fpJs"),
                _ = a("Sn8X"),
                k = a("fJrp"),
                T = a("VkHq"),
                S = a("lE29"),
                y = a("swFs"),
                A = a("+Kbs"),
                H = a("nQD+"),
                L = a("sxX9"),
                x = a("2uLe"),
                N = a("g6eD"),
                R = a("2XY6"),
                I = a("ERkP"),
                M = a.n(I),
                B = a("uDfI"),
                V = a("ADGC"),
                D = (a("SwvN"), function HeaderLayout(e) {
                    var t = e.chatHidden,
                        a = e.isConversationHistoryOpen,
                        n = void 0 !== a && a,
                        c = e.isChatTakeover,
                        r = void 0 !== c && c,
                        o = Object(B.b)(),
                        s = Object(S.a)(),
                        l = s.backgroundStyles,
                        b = s.conversationHeaderTextStyles,
                        f = Object(B.c)(function(e) {
                            return e.session.gdpr
                        }).hasConsent,
                        O = Object(x.a)(),
                        d = O.setChatHeight,
                        j = O.previewRef,
                        v = Object(B.c)(function(e) {
                            return e.view
                        }).chatOpen,
                        h = Object(I.useState)(Object(B.c)(R.a)),
                        m = Object(i.a)(h, 2),
                        p = m[0],
                        g = m[1],
                        w = Object(k.a)(p),
                        E = p !== w;
                    Object(I.useLayoutEffect)(function() {
                        v && !t && d(v, E)
                    }, [v, t, d, E]);
                    var C = Object(B.c)(R.a);
                    Object(I.useEffect)(function() {
                        C !== p && g(C)
                    }, [C, p]);
                    var _ = L.a[p],
                        T = p !== L.b.CONVERSATION,
                        D = Object(V.a)() && !r && !n;
                    return M.a.createElement("header", {
                        className: u()("drift-widget-header", {
                            "drift-widget-header--collapsed": T,
                            "drift-widget-header--gdpr-consent": !f
                        })
                    }, M.a.createElement(y.a, {
                        style: l
                    }), M.a.createElement("div", {
                        className: "drift-widget-header--content"
                    }, M.a.createElement(_, {
                        previewRef: j,
                        resetChatHeight: function resetChatHeight() {
                            d(v, !0)
                        }
                    })), D && M.a.createElement(H.a, {
                        onClick: function doToggleChat() {
                            o(Object(N.e)({
                                chatOpen: !1
                            }))
                        },
                        className: u()("drift-widget-mobile-close", {
                            "drift-widget-mobile-close--chat-open": v
                        }),
                        "aria-label": "Close Drift Widget messenger",
                        style: b
                    }, M.a.createElement(A.j, {
                        width: 16,
                        height: 16
                    })))
                }),
                P = a("vjCh"),
                F = a("qixE"),
                G = a("K7i0"),
                X = a("bYXQ"),
                Y = a("Hvhg"),
                U = a("pu/X"),
                q = a("da4L"),
                J = a("Gxm1"),
                Q = a("LVcX"),
                $ = a("TbSn"),
                K = a("kNJ0"),
                W = a("oPI6"),
                Z = a("MFhO"),
                z = a("6lNa"),
                ee = a("0lfv"),
                te = a("VpmR"),
                ae = a("7oto"),
                ne = a("4c+F"),
                ce = a("HSQL"),
                re = (a("sXTY"), null),
                ie = function ChatLayout() {
                    var e = Object(B.b)(),
                        t = Object(V.a)(),
                        a = Object(I.useState)(!0),
                        n = Object(i.a)(a, 2),
                        s = n[0],
                        l = n[1];
                    Object(_.a)();
                    var y = Object(B.c)(function(e) {
                            return e.view
                        }),
                        A = y.chatOpen,
                        H = y.isChatTakeover,
                        L = Object(B.c)(Y.c).showBranding,
                        x = void 0 !== L && L,
                        N = Object(T.a)().noPolicy,
                        R = !x && N;
                    Object(I.useLayoutEffect)(function() {
                        H && A && Object(ae.a)({
                            topic: "set-frame-width-and-height",
                            message: {
                                className: p.a,
                                height: "100%",
                                max: !0,
                                name: "chat",
                                width: "100%"
                            }
                        })
                    }, [H, A]);
                    var W = Object(B.c)(function(e) {
                            return e.conversations.activeConversation
                        }),
                        te = Object(E.a)().fetchMessages,
                        ie = Object(k.a)(W),
                        oe = Object(B.c)(function(e) {
                            return e.conversations.conversations
                        }),
                        se = Object(B.c)(function(e) {
                            return e.conversations.messages
                        }),
                        ue = Object(B.c)(function(e) {
                            return Object(Q.a)({}, ["conversations", "messages", e.conversations.activeConversation], e)
                        }),
                        le = Object(B.c)(function(e) {
                            return Object(Q.a)(!1, ["conversations", "conversationStatus", e.conversations.activeConversation, "permaclosed"], e)
                        }),
                        be = Object(I.useMemo)(function() {
                            return Object(q.q)(ue)
                        }, [ue]),
                        fe = Object(B.c)(function(e) {
                            return e.campaigns.activeCampaign
                        }),
                        Oe = Object(I.useMemo)(function() {
                            return Object(Q.a)(null, ["attributes", "campaignDisplayType"], fe) === Z.a.WELCOME_MESSAGE
                        }, [fe]),
                        de = Object(B.c)(function(e) {
                            return e.session.gdpr
                        }).hasConsent,
                        je = Object(B.c)(function(e) {
                            return Object(Q.a)(!1, ["conversations", "conversationStatus", W, "endUserResponded"], e)
                        }),
                        ve = Object(g.a)(),
                        he = ve.conversationHistoryOpen,
                        me = ve.conversationHistoryEnabled,
                        pe = Object(S.a)().widgetBackgroundStyles;
                    Object(I.useEffect)(function() {
                        (function() {
                            var t = Object(r.a)(c.a.mark(function _callee() {
                                var t, a, n, r, i;
                                return c.a.wrap(function _callee$(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            if (t = !W || W === m.a, a = ie === W, n = !!oe[W] && !!se[W], !(t || a || n || Object(X.d)(W))) {
                                                c.next = 5;
                                                break
                                            }
                                            return c.abrupt("return");
                                        case 5:
                                            return c.prev = 5, c.next = 8, Object(o.h)(W);
                                        case 8:
                                            r = c.sent, i = r.data, e(Object(G.h)({
                                                conversation: i
                                            })), te({}), c.next = 17;
                                            break;
                                        case 14:
                                            c.prev = 14, c.t0 = c.catch(5), Object(ee.f)(U.a.MESSAGE.FETCH_MESSAGE_OR_ACTIVE_CONVO, c.t0, !0);
                                        case 17:
                                        case "end":
                                            return c.stop()
                                    }
                                }, _callee, null, [
                                    [5, 14]
                                ])
                            }));
                            return function fetchInfoForActiveConversation() {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }, [W, e, te, ie, oe, se]), Object(I.useEffect)(function() {
                        A ? (function() {
                            var e = Object(r.a)(c.a.mark(function _callee2() {
                                return c.a.wrap(function _callee2$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(ae.a)({
                                                topic: "focus-frame",
                                                message: {
                                                    name: "chat"
                                                }
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee2)
                            }));
                            return function focus() {
                                return e.apply(this, arguments)
                            }
                        }()(), re && clearTimeout(re), l(!1)) : re = setTimeout(function delaySetReflowHidden() {
                            l(!0)
                        }, 350)
                    }, [A]);
                    var ge = Object(I.useMemo)(function() {
                        if (!de || !A) return !1;
                        if (fe && fe.id && !W) {
                            var e = !!Object(Q.a)(null, ["attributes", "cta"], fe),
                                t = "CHAT_RESPONSE" !== Object(Q.a)(null, ["attributes", "cta", "CtaType"], fe);
                            if (e && t) return !1
                        }
                        var a = be.length > 0 && be.length <= 2 && !Object(q.f)(be[0]);
                        return !H || a || be.length > 2
                    }, [fe, W, de, H, be, A]);
                    Object(I.useEffect)(function() {
                        Object(ce.b)("WIDGET_CHAT_FRAME.start")
                    }, []);
                    var we = Object(I.useRef)(!1);
                    Object(I.useEffect)(function() {
                        if (!we.current && H && be.length > 0) {
                            var e = Object(J.b)("post_form_takeover_tti"),
                                t = Object(J.b)("post_form_takeover_show");
                            e && Object(ne.d)("Post Form Takeover TTI", e), t && Object(ne.d)("Post Form Takeover Show", t), we.current = !0
                        }
                    }, [H, be]);
                    var Ee = Object(I.useMemo)(function() {
                            if (le) return b.a.UNAVAILABLE;
                            var e = Object($.a)(be);
                            if (!e) return b.a.AVAILABLE;
                            var t = Object(K.a)(-2, be),
                                a = Object(q.f)(t) && Object(q.i)(e);
                            return Object(q.f)(e) || a || Object(q.j)(e) ? b.a.UNAVAILABLE_BUTTONS : Object(q.n)(e) || Object(q.n)(t) && Object(q.i)(e) ? b.a.AVAILABLE_BUTTONS : b.a.AVAILABLE
                        }, [be, le]),
                        Ce = Ee === b.a.AVAILABLE || Ee === b.a.AVAILABLE_BUTTONS,
                        _e = Object(w.a)(be, W),
                        ke = Object(I.useMemo)(function() {
                            return Object(q.d)(_e)
                        }, [_e]),
                        Te = Object(I.useMemo)(function() {
                            return M.a.createElement(j.a, {
                                messageGroups: ke,
                                messages: _e,
                                reflowHidden: s,
                                disabled: he
                            })
                        }, [ke, _e, s, he]),
                        Se = Object(C.a)(),
                        ye = Object(I.useMemo)(function() {
                            if (_e && _e.length) {
                                var e = Object($.a)(_e);
                                if (e && Object(q.k)(e)) return e
                            }
                            return null
                        }, [_e]),
                        Ae = de && (!!W || H),
                        He = !ge || !Ce;
                    return M.a.createElement("main", {
                        className: u()("drift-widget-chat-layout", {
                            "drift-widget-chat-layout__takeover": H && !t,
                            "drift-widget-chat-layout__takeover--noResponse": H && !t && !je
                        }),
                        "aria-live": "polite"
                    }, M.a.createElement(h.a, null), M.a.createElement("div", {
                        className: u()("drift-widget-chat-wrapper", {
                            "drift-widget-chat-wrapper__open": A,
                            "drift-widget-chat-wrapper__closed": !A,
                            "drift-widget-chat-wrapper__reflow-hidden": s,
                            "drift-widget-chat-wrapper__active-conversation": Ae,
                            "drift-widget-chat-wrapper__no-footer-content": R && He
                        }),
                        tabIndex: 0
                    }, M.a.createElement(D, {
                        isConversationHistoryOpen: he,
                        chatHidden: s,
                        isChatTakeover: H
                    }), !H && me && M.a.createElement(f.a, null), Ae && M.a.createElement("div", {
                        className: u()("drift-widget-message-history", {
                            "drift-widget-message-history--with-footer": Se,
                            "drift-widget-message-history--no-composer": He
                        }),
                        style: pe
                    }, Te, 0 === be.length && M.a.createElement(d.a, null)), M.a.createElement("div", {
                        className: "drift-widget-chat-bottom"
                    }, ge && M.a.createElement(b.b, {
                        state: Ee,
                        disabled: he,
                        onSubmit: function doSendMessage(t) {
                            if ((Oe || H) && !W) {
                                var a = Object(Q.a)(null, ["attributes", "playbookId"], fe);
                                ! function sendSubmittedEventForChatResponseCampaign() {
                                    fe && "CHAT_RESPONSE" === Object(Q.a)(null, ["attributes", "cta", "CtaType"], fe) && Object(F.a)(z.b.SUBMITTED)
                                }(), Object(P.l)(fe.id, a)
                            }
                            e(Object(G.m)(t))
                        },
                        chatHidden: s,
                        activeConversationId: W
                    }), !he && M.a.createElement(O.a, null)), W && !!ye && M.a.createElement(v.a, {
                        message: ye
                    })))
                };
            t.default = function(e) {
                var t = Object(I.useState)(!1),
                    a = Object(i.a)(t, 2),
                    n = a[0],
                    o = a[1],
                    s = Object(B.c)(function(e) {
                        return e.view.initComplete
                    }),
                    u = Object(B.c)(function(e) {
                        return Object(Q.a)("en", ["embed", "configuration", "locale"], e)
                    });
                return Object(I.useEffect)(function() {
                    s && !n && function() {
                        var e = Object(r.a)(c.a.mark(function _callee3() {
                            return c.a.wrap(function _callee3$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(te.b)(u);
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(ee.m)({
                                            data: ["i18n failed to load - ".concat(e.t0.message), e.t0],
                                            type: "warn",
                                            internal: !0
                                        });
                                    case 8:
                                        o(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee3, null, [
                                [0, 5]
                            ])
                        }));
                        return function runAsync() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [s, n, u]), M.a.createElement(W.a, null, s && n ? M.a.createElement(ie, e) : M.a.createElement(l.a, null))
            }
        },
        SwvN: function(e, t, a) {},
        sXTY: function(e, t, a) {},
        swFs: function(e, t, a) {
            "use strict";
            var n = a("ERkP"),
                c = a.n(n);
            a("G5CQ");
            t.a = function TopLine(e) {
                var t = e.style;
                return c.a.createElement("div", {
                    className: "drift-widget-header-top-line",
                    style: t
                })
            }
        }
    }
]);