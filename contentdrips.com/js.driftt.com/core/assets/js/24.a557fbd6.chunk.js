(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        "3y+j": function(e, t, n) {},
        "BA/U": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var c = function onKeyDownSubmit(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return function(n) {
                    (function isEnter(e) {
                        return "Enter" === e.key || 13 === e.keyCode
                    }(n) || t && function isSpace(e) {
                        return "Space" === e.key || 32 === e.keyCode
                    }(n)) && (n.preventDefault(), e())
                }
            }
        },
        BY8A: function(e, t, n) {
            "use strict";
            var c = n("s8DI"),
                a = n("QtlZ"),
                o = n("Hvhg"),
                i = n("ERkP"),
                r = n.n(i),
                s = n("rTkt");
            n("zoZM");
            t.a = function ThemeStyleSheets() {
                var e = Object(i.useState)(!1),
                    t = Object(c.a)(e, 2),
                    n = t[0],
                    u = t[1],
                    l = Object(o.b)(Object(a.b)());
                return Object(i.useEffect)(function() {
                    n || (Object(s.a)(l), Object(s.b)(l), u(!0))
                }, [l, n]), r.a.createElement("div", {
                    className: "drift-widget-preload-fonts",
                    "aria-hidden": "true"
                }, r.a.createElement("span", null, "A"), r.a.createElement("strong", null, "B"))
            }
        },
        NJR1: function(e, t, n) {},
        "ab+K": function(e, t, n) {
            "use strict";
            var c = n("/UYI"),
                a = n("nQD+"),
                o = n("Za8o"),
                i = n("LwEI"),
                r = n("ERkP"),
                s = n.n(r);
            n("NJR1");
            t.a = function MessageCloseButton(e) {
                var t = e.onClick,
                    n = e.shouldFocus,
                    u = void 0 !== n && n,
                    l = Object(i.a)(),
                    f = Object(r.useRef)(null);
                Object(o.a)(f, u);
                return s.a.createElement(a.a, {
                    onClick: function handleOnClick(e) {
                        (null === f || void 0 === f ? void 0 : f.current) && (null === f || void 0 === f || f.current.blur()), t(e)
                    },
                    ref: f,
                    className: "drift-widget-message-close-button drift-widget-close-button--align-".concat(l),
                    "aria-label": "Close Drift Widget messenger preview overlay"
                }, s.a.createElement(c.a, {
                    width: 10,
                    height: 10
                }))
            }
        },
        dT9Q: function(e, t, n) {
            "use strict";
            var c = n("s8DI"),
                a = n("BA/U"),
                o = n("ab+K"),
                i = n("7oh4"),
                r = n("nedb"),
                s = n("Erxq"),
                u = n("58kB"),
                l = n("hEj5"),
                f = n("IJKc"),
                b = n("LwEI"),
                d = n("SsZN"),
                O = n("vjCh"),
                j = n("qixE"),
                g = n("xwTo"),
                v = n("da4L"),
                h = n("X9/c"),
                m = n("g6eD"),
                p = n("2XY6"),
                E = n("i9gz"),
                w = n("RhEL"),
                C = n("LVcX"),
                k = n("ERkP"),
                S = n.n(k),
                I = n("uDfI"),
                y = n("vTYT"),
                D = n("y0on");
            n("pUpc");
            t.a = function MessagePreview() {
                var e = Object(l.a)(),
                    t = Object(c.a)(e, 2),
                    n = t[0],
                    N = t[1],
                    R = Object(I.b)(),
                    _ = Object(k.useState)(null),
                    A = Object(c.a)(_, 2),
                    M = A[0],
                    L = A[1],
                    T = Object(I.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    J = Object(f.a)(),
                    x = Object(r.a)(),
                    P = Object(I.c)(p.e),
                    B = Object(I.c)(function(e) {
                        return e.view.chatOpen
                    }),
                    U = Object(b.a)(),
                    W = Object(u.a)(M ? M.authorId : null),
                    H = Object(k.useMemo)(function() {
                        return !(!M || !M.body || B)
                    }, [M, B]);
                Object(k.useEffect)(function setLatestMessageFromConvo() {
                    if (Object(E.a)(J)) L(null);
                    else {
                        var e = J.pop() || {};
                        M && Object(w.a)(e.id, M.id) || L(Object(v.r)(e, 100))
                    }
                }, [J]), Object(k.useLayoutEffect)(function updateFrameSize() {
                    if (H) {
                        var e = n ? n.width : 0,
                            t = n ? n.height : 0,
                            c = e + i.b + 40,
                            a = t + 36;
                        Object(h.c)(a, c)
                    }
                }, [n, H]);
                var K = Object(s.a)(M);
                if (!H) return null;
                var Z = function dismiss() {
                        M && (Object(j.c)(T), L({}), Object(h.b)(), F())
                    },
                    F = function dismissPlaybookIfNotInteracted() {
                        if (!Object(g.i)()) {
                            var e = Object(C.a)(null, ["attributes", "playbookId"], x);
                            Object(d.o)(M), Object(O.l)(x.id, e)
                        }
                    },
                    X = function openChat() {
                        if (Object(h.b)(), K) {
                            var e = Object(C.a)(null, ["attributes", "playbookId"], x);
                            Object(d.n)(M), Object(O.l)(x.id, e)
                        }
                        R(Object(m.e)({
                            chatOpen: !0
                        }))
                    },
                    G = Object(v.c)(M),
                    Q = Object(D.a)(W.recipient.name, G);
                return P ? S.a.createElement("div", {
                    className: "drift-widget-message-preview-wrapper",
                    key: "".concat(M.id, "-preview-box")
                }, S.a.createElement("div", {
                    className: "drift-widget-message-preview drift-widget-message-preview--align-".concat(U)
                }, U === y.a.RIGHT && S.a.createElement(o.a, {
                    onClick: Z
                }), S.a.createElement("div", {
                    onClick: X,
                    onKeyDown: Object(a.a)(X),
                    className: "drift-widget-message-preview-text drift-widget-message-preview-text--align-".concat(U),
                    "aria-label": "".concat(Q ? Q + " - " : "", "Click to open chat"),
                    "aria-live": "polite",
                    tabIndex: 0,
                    role: "button"
                }, S.a.createElement("span", {
                    ref: N
                }, G)), U === y.a.LEFT && S.a.createElement(o.a, {
                    onClick: Z
                }))) : null
            }
        },
        g3yi: function(e, t, n) {
            "use strict";
            var c = n("nfbA"),
                a = n("efbE"),
                o = n("LeJ0"),
                i = function getDefaultAuthParams(e) {
                    return {
                        org_id: e,
                        client_id: o.a.CLIENT_ID,
                        consent_id: "has_consent"
                    }
                };
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            });
            var r = function executeWidgetBootstrapForMode(e, t, n) {
                    switch (e) {
                        case "LANDING_PAGE":
                            return l(t, n);
                        case "CHAT":
                        default:
                            return u(t, n)
                    }
                },
                s = function executeBootstrapPing(e) {
                    return a.c.post("widget_bootstrap/ping", e)
                },
                u = function widgetBootstrap(e, t) {
                    var n = i(e);
                    return a.b.post("widget_bootstrap", {
                        data: Object(c.a)(Object(c.a)({}, n), t)
                    })
                },
                l = function landingPageBootstrap(e, t) {
                    var n = i(e);
                    return a.b.post("widget_bootstrap/landing_page", {
                        data: Object(c.a)(Object(c.a)({}, n), t)
                    })
                }
        },
        pUpc: function(e, t, n) {},
        xAY9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var c = n("efbE"),
                a = function getEmbedConfiguration(e) {
                    return c.l.get("/embeds/".concat(e, ".json"))
                }
        },
        xKh3: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return h
            }), n.d(t, "a", function() {
                return m
            });
            var c = n("mj2O"),
                a = n.n(c),
                o = n("7SM1"),
                i = n("uIJS"),
                r = n("wQh9"),
                s = n("LeJ0"),
                u = n("QtlZ"),
                l = n("xwTo"),
                f = n("qwiD"),
                b = n("P2Ru"),
                d = n("ADGC"),
                O = n("0lfv"),
                j = n("l+Xe"),
                g = n("/l56"),
                v = new(function() {
                    function RefetchMessagesState() {
                        Object(i.a)(this, RefetchMessagesState), this.isJoinAfterConnectionLost = void 0, this.isJoinAfterConnectionLost = !1
                    }
                    return Object(r.a)(RefetchMessagesState, [{
                        key: "shouldRefetchMessagesOnChannelJoin",
                        value: function shouldRefetchMessagesOnChannelJoin() {
                            return this.isJoinAfterConnectionLost
                        }
                    }, {
                        key: "onSocketDisconnect",
                        value: function onSocketDisconnect() {
                            this.isJoinAfterConnectionLost = !0
                        }
                    }, {
                        key: "resetStateOnJoin",
                        value: function resetStateOnJoin() {
                            this.isJoinAfterConnectionLost = !1
                        }
                    }]), RefetchMessagesState
                }()),
                h = function OpenSocket(e) {
                    var t = e.session_token,
                        n = e.org_id,
                        c = e.socketCluster,
                        a = e.ip,
                        o = s.a.WS_PROTOCOL,
                        i = "LOCAL" === s.a.WS_USER_ENV ? "" : "".concat(n, "-"),
                        r = p(n, i, c),
                        u = "".concat(o, "://").concat(r, "/ws"),
                        l = new b.a(u, {
                            params: {
                                session_token: t,
                                remote_ip: a
                            },
                            timeout: 1e4,
                            reconnectAfterMs: function reconnectAfterMs(e) {
                                return [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4
                            },
                            rejoinAfterMs: function rejoinAfterMs(e) {
                                return [1e3, 2e3, 5e3][e - 1] || 1e4
                            }
                        });
                    return l.connect(), l.onError(function() {
                        c === g.c.CHAT && v.onSocketDisconnect()
                    }), l.onClose(function() {
                        c === g.c.CHAT && v.onSocketDisconnect()
                    }), l
                },
                m = function() {
                    var e = Object(o.a)(a.a.mark(function _callee2(e) {
                        var t, n, c, i;
                        return a.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = e.channelName, n = e.socket, c = e.events, i = new Promise(function() {
                                        var e = Object(o.a)(a.a.mark(function _callee(e, o) {
                                            var i;
                                            return a.a.wrap(function _callee$(a) {
                                                for (;;) switch (a.prev = a.next) {
                                                    case 0:
                                                        i = n.channel(t), c.forEach(function(e) {
                                                            var t = e.topic,
                                                                n = e.event;
                                                            i.on(t, n)
                                                        }), i.join().receive("ok", function() {
                                                            Object(l.i)() && v.shouldRefetchMessagesOnChannelJoin() && t.startsWith(g.b.USER) && (Object(O.m)({
                                                                data: ["joined user channel ".concat(t, " after disconnect and user interacted with active conversation"), "is_mobile_".concat(Object(d.a)(!0))],
                                                                internal: !0
                                                            }), u.a.dispatch(Object(f.w)({
                                                                channel: g.b.USER,
                                                                shouldRefetchMessagesForActiveConversation: !0
                                                            })), v.resetStateOnJoin()), e({
                                                                channel: i
                                                            })
                                                        }).receive("error", function(e) {
                                                            Object(O.m)({
                                                                data: ["Error connecting to channel: ".concat(t)]
                                                            }), o(e)
                                                        }).receive("timeout", function(e) {
                                                            Object(O.m)({
                                                                data: ["Joining the ".concat(t, " channel timed out. ")]
                                                            })
                                                        });
                                                    case 3:
                                                    case "end":
                                                        return a.stop()
                                                }
                                            }, _callee)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), r.abrupt("return", i);
                                case 3:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2)
                    }));
                    return function JoinChannel(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function _resolveSocketBaseForType(e, t, n) {
                    switch (n) {
                        case g.c.CHAT:
                            return "".concat(Object(j.d)(e));
                        case g.c.USER:
                            return s.a.WS_USER_BASE;
                        case g.c.PRESENCE:
                            return "".concat(t).concat(Object(j.c)(e));
                        case g.c.VISITOR_PRESENCE:
                            return s.a.WS_VISITOR_PRESENCE_BASE;
                        default:
                            return ""
                    }
                }
        },
        yXOZ: function(e, t, n) {
            "use strict";
            var c = n("nfbA"),
                a = n("s8DI"),
                o = n("BA/U"),
                i = n("O94r"),
                r = n.n(i),
                s = n("+Kbs"),
                u = n("yEsl"),
                l = n("hSLT"),
                f = n("nedb"),
                b = n("mZ4K"),
                d = n("UvQv"),
                O = n("fL0f"),
                j = n("Za8o"),
                g = n("Erxq"),
                v = n("tLIi"),
                h = n("o3t1"),
                m = n("58kB"),
                p = n("lE29"),
                E = n("cwuI"),
                w = n("IJKc"),
                C = n("LwEI"),
                k = n("Hnjx"),
                S = n("SsZN"),
                I = n("vjCh"),
                y = n("g6eD"),
                D = n("2XY6"),
                N = n("LVcX"),
                R = n("0B8E"),
                _ = n("ERkP"),
                A = n.n(_),
                M = n("Tr4L"),
                L = n("uDfI"),
                T = n("ADGC"),
                J = n("MFhO"),
                x = n("7oto"),
                P = n("1kux"),
                B = n("rTkt"),
                U = (n("3y+j"), "SENDER"),
                W = "MEGAPHONE",
                H = "THEME_ICON";
            t.a = function WidgetIcon() {
                var e = Object(_.useState)(!1),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    i = t[1],
                    K = Object(_.useRef)(null);
                Object(j.a)(K, n);
                var Z = Object(d.a)(),
                    F = Z.isDisabled,
                    X = Z.setIsDisabled,
                    G = Object(h.a)(),
                    Q = G.hoverProps,
                    Y = G.isHovered,
                    z = Object(L.b)(),
                    V = Object(M.a)().t,
                    q = Object(L.c)(function(e) {
                        return e.view.chatOpen
                    }),
                    $ = Object(L.c)(function(e) {
                        return e.session.gdpr
                    }),
                    ee = Object(L.c)(D.e),
                    te = Object(L.c)(function(e) {
                        return !!e.conversations.activeConversation
                    }),
                    ne = Object(C.a)(),
                    ce = Object(f.a)(),
                    ae = Object(L.c)(function(e) {
                        return Object(N.a)(!1, ["embed", "configuration", "theme"], e)
                    }).unreadBadgeEnabled,
                    oe = Object(w.a)(),
                    ie = Object(L.c)(function(e) {
                        return e.view.isChatTakeover
                    }),
                    re = Object(v.a)(),
                    se = Object(g.a)(re),
                    ue = Object(p.a)(),
                    le = ue.backgroundStyles,
                    fe = ue.widgetSecondaryColor,
                    be = Object(_.useMemo)(function() {
                        return Y ? Object(B.c)(le.background, -35) : le.background
                    }, [Y, le]),
                    de = Object(E.a)(),
                    Oe = de.Icon,
                    je = de.customIcon,
                    ge = de.hasCustomIcon,
                    ve = Object(b.a)(),
                    he = Object(l.a)().type,
                    me = ve || Object(N.a)(void 0, ["authorId"], re),
                    pe = Object(m.a)(me).recipient,
                    Ee = oe ? Object(R.a)(oe).length : 0,
                    we = he === J.a.SLIDER,
                    Ce = me && (we || Ee > 0),
                    ke = Object(O.a)(["titleNotificationEnabled"]),
                    Se = Object(a.a)(ke, 1)[0],
                    Ie = void 0 !== Se && Se,
                    ye = Object(_.useMemo)(function() {
                        return Ce ? U : we && !me ? W : H
                    }, [me, we, Ce]),
                    De = Object(k.a)();
                Object(_.useEffect)(function() {
                    Ie && Object(x.a)({
                        topic: "page-notification-update",
                        message: {
                            totalUnreadMessages: Ee,
                            pageTitleNotificationMsg: V("titleNotifier.newMessageNotification")
                        }
                    })
                }, [Ee, Ie, V]), Object(_.useEffect)(function() {
                    F && !we && X(!1)
                }, [F, we, X]), Object(_.useEffect)(function() {
                    Object(x.a)({
                        topic: "toggle-widget-controller",
                        message: {
                            isChatTakeover: ie,
                            open: q,
                            hasActiveConversation: te && $.hasConsent
                        }
                    })
                }, [q, $, te, ie]), Object(_.useEffect)(function() {
                    oe && oe.length > 0 && Object(P.a)()
                }, [oe]), Object(_.useEffect)(function() {
                    Object(x.c)({
                        topic: "CONDUCTOR:focusWidgetIcon",
                        handler: function handler() {
                            return i(!0)
                        }
                    })
                }, []);
                var Ne = function onToggleChat() {
                        if (!q && Ee > 0 && se) {
                            var e = Object(N.a)(null, ["attributes", "playbookId"], ce);
                            Object(I.l)(ce.id, e), Object(S.n)(re)
                        }! function toggle(e) {
                            we ? (Object(x.a)({
                                topic: "slider:showDetails",
                                message: {}
                            }), X(!0)) : z(Object(y.e)({
                                chatOpen: e
                            })), e && Object(x.a)({
                                topic: "reset-controller-size"
                            })
                        }(!q)
                    },
                    Re = Object(_.useMemo)(function() {
                        return Ce && !q ? null : {
                            background: "".concat(be)
                        }
                    }, [Ce, q, be]),
                    _e = Object(_.useMemo)(function() {
                        return !ge || Ce || q ? null : Y ? Object(c.a)({
                            opacity: .65
                        }, je) : je
                    }, [je, Ce, q, ge, Y]),
                    Ae = Object(_.useMemo)(function() {
                        if (q) return pe.name ? "Click to close chat with ".concat(pe.name, " in the Drift Widget messenger") : "Click to close Drift Widget messenger";
                        var e = pe.name ? "Click to open chat with ".concat(pe.name, " in the Drift Widget messenger") : "Click to open Drift Widget messenger";
                        return ae && Ee > 0 ? "".concat(e, " - Unread messages: ").concat(Ee) : e
                    }, [q, ae, pe.name, Ee]);
                return ee ? A.a.createElement("div", Object.assign({
                    className: r()("drift-widget-controller drift-widget-controller--align-".concat(ne), [De], {
                        "drift-widget-controller--closed": !Object(T.a)() && q,
                        "drift-widget-controller--custom-icon": ge,
                        "drift-widget-controller--avatar": Ce,
                        "drift-widget-controller--hide": ie,
                        "drift-widget-controller--disabled": F
                    }),
                    onClick: Ne,
                    style: Re
                }, Q, {
                    "aria-label": Ae,
                    "aria-disabled": F,
                    "aria-hidden": F,
                    role: "button",
                    tabIndex: F ? -1 : 0,
                    onKeyDown: Object(o.a)(Ne),
                    ref: K
                }), A.a.createElement("div", {
                    className: r()("drift-widget-controller-icon", [De]),
                    style: _e
                }, A.a.createElement("div", {
                    className: "drift-controller-icon--active"
                }, ye === W && A.a.createElement(s.n, {
                    fill: fe
                }), ye === U && A.a.createElement(u.a, {
                    className: r()([De], "drift-controller-icon--avatar"),
                    avatarClassName: r()([De], "drift-controller-icon--avatar-avatar"),
                    id: me
                }), ye === H && !ge && Oe), A.a.createElement("div", {
                    className: "drift-controller-icon--close",
                    style: {
                        backgroundColor: fe
                    }
                })), ae && Ee > 0 && A.a.createElement("div", {
                    className: "drift-controller-icon-unread"
                }, Math.min(Ee, 99))) : null
            }
        },
        zoZM: function(e, t, n) {}
    }
]);