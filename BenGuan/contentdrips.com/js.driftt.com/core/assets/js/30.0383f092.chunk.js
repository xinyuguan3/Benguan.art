(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "2AO3": function(e, a, t) {
            "use strict";
            t.r(a);
            var c = t("mj2O"),
                n = t.n(c),
                r = t("7SM1"),
                l = t("Rqwx"),
                i = t("QtlZ"),
                o = t("My8U"),
                s = t("ERkP"),
                u = t.n(s),
                d = t("uDfI"),
                f = t("SkRI"),
                m = t("7oto"),
                b = t("Cpup"),
                p = t("HSQL");
            i.a.name = "chat";
            var v = Object(s.lazy)(Object(r.a)(n.a.mark(function _callee() {
                return n.a.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Object(f.a)(function() {
                                return Promise.all([t.e(1), t.e(0), t.e(29)]).then(t.bind(null, "SrLZ"))
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }, _callee)
            })));
            a.default = function ChatPage() {
                return Object(s.useEffect)(function() {
                    Object(o.a)({
                        name: "chat",
                        syncWith: "controller",
                        store: i.a
                    }), Object(m.c)({
                        topic: "CONDUCTOR:action-from-plugin",
                        handler: function handler(e) {
                            var a = e.data,
                                t = void 0 === a ? {} : a;
                            i.a.dispatch(Object(b.a)({
                                type: t.action,
                                payload: t.payload
                            }))
                        }
                    }), Object(p.a)("WIDGET_CHAT_FRAME.start")
                }, []), u.a.createElement(d.a, {
                    store: i.a
                }, u.a.createElement(s.Suspense, {
                    fallback: u.a.createElement(l.a, null)
                }, u.a.createElement(v, null)))
            }
        },
        HXmn: function(e, a, t) {
            "use strict";
            var c = t("jm9a"),
                n = t("O94r"),
                r = t.n(n),
                l = t("ERkP"),
                i = t.n(l),
                o = t("0lfv");
            t("yhQp");
            a.a = function LoaderBalls(e) {
                var a = e.className,
                    t = e.size,
                    n = void 0 === t ? "medium" : t,
                    l = e.visible,
                    s = void 0 === l || l,
                    u = "loaderBallTitle_".concat(Object(o.u)());
                return i.a.createElement("div", {
                    "aria-live": "polite",
                    className: r()("drift-widget-loader-balls drift-widget-loader-balls--".concat(n), Object(c.a)({
                        "drift-widget-loader-balls--visible": s
                    }, a, !!a))
                }, i.a.createElement("svg", {
                    "aria-labelledby": u,
                    viewBox: "0 0 80 80",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, i.a.createElement("title", {
                    id: u
                }, "Processing... please wait"), i.a.createElement("circle", {
                    cx: "10",
                    cy: "20",
                    r: "9"
                }), i.a.createElement("circle", {
                    cx: "40",
                    cy: "20",
                    r: "9"
                }), i.a.createElement("circle", {
                    cx: "70",
                    cy: "20",
                    r: "9"
                })))
            }
        },
        My8U: function(e, a, t) {
            "use strict";
            var c = t("nfbA"),
                n = t("SWQ0"),
                r = t("wNJw"),
                l = t("7oto");
            a.a = function UseStoreSync(e) {
                var a = e.store,
                    t = e.syncWith,
                    i = e.name;
                return Object(l.c)({
                    topic: "CONDUCTOR:action-from-".concat(t),
                    handler: function handler(e) {
                        a.dispatch(Object(c.a)(Object(c.a)({}, e.data.action), {}, {
                            _foreignDispatch: !0
                        }))
                    }
                }), Object(r.a)(n.a["".concat(i.toUpperCase(), "_READY")]), a
            }
        },
        Rqwx: function(e, a, t) {
            "use strict";
            var c = t("HXmn"),
                n = t("ERkP"),
                r = t.n(n),
                l = t("uDfI");
            t("VSUx");
            a.a = function ChatLoader() {
                var e = Object(l.c)(function(e) {
                    return e.view.chatOpen
                });
                return r.a.createElement("div", {
                    className: "drift-widget-chat-layout-loader"
                }, r.a.createElement(c.a, {
                    className: "drift-widget-chat-layout-loader--loader-balls",
                    visible: e
                }))
            }
        },
        VSUx: function(e, a, t) {},
        yhQp: function(e, a, t) {}
    }
]);