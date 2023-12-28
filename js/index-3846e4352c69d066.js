(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function (e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return a(5075)
            }])
        },
        5075: function (e, s, a) {
            "use strict";
            a.r(s);
            var r = a(8520),
                n = a.n(r),
                i = a(5893),
                t = a(1803),
                m = a(7294),
                l = a(1664);

            function c(e, s, a, r, n, i, t) {
                try {
                    var m = e[i](t),
                        l = m.value
                } catch (c) {
                    return void a(c)
                }
                m.done ? s(l) : Promise.resolve(l).then(r, n)
            }
            s.default = function () {
                var e = (0, m.useState)(0),
                    s = e[0],
                    a = e[1],
                    r = (0, m.useState)(1),
                    x = r[0],
                    g = r[1];
                return (0, m.useEffect)((function () {
                    var e;
                    (e = n().mark((function e() {
                        var s, r;
                        return n().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("https://raiders.raid.party");
                                case 2:
                                    return s = e.sent, e.next = 5, s.json();
                                case 5:
                                    r = e.sent.raiders, a(r);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function () {
                        var s = this,
                            a = arguments;
                        return new Promise((function (r, n) {
                            var i = e.apply(s, a);

                            function t(e) {
                                c(i, r, n, t, m, "next", e)
                            }

                            function m(e) {
                                c(i, r, n, t, m, "throw", e)
                            }
                            t(void 0)
                        }))
                    })().catch(console.error)
                }), []), (0, i.jsxs)("div", {
                    className: "bg-[#0E071D] w-screen h-screen overflow-y-scroll font-vp text-xl overflow-x-hidden text-white",
                    children: [(0, i.jsxs)("div", {
                        className: "flex items-center justify-between max-w-5xl mx-auto w-full px-8 pt-4 mb-4",
                        children: [(0, i.jsx)(l.default, {
                            href: "/",
                            children: (0, i.jsx)("img", {
                                className: "w-[3rem] rendering-pixelated cursor-pointer",
                                src: "/images/rp-logo.png",
                                alt: ""
                            })
                        }), (0, i.jsxs)("div", {
                            className: "flex",
                            children: [(0, i.jsx)(l.default, {
                                href: "/about",
                                children: (0, i.jsx)("span", {
                                    className: "text-[#7166B2] cursor-pointer fs-30",
                                    children: "About"
                                })
                            }), (0, i.jsx)(l.default, {
                                href: "/road",
                                children: (0, i.jsx)("span", {
                                    className: "text-[#7166B2] cursor-pointer pl-5 fs-30",
                                    children: "Roadmap"
                                })
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "bg-[url(/images/banner.png)] bg-center bg-cover flex flex-col fade-out ",
                        children: [ (0, i.jsx)("div", {
                            className: "h-400px text-center text-[#794B9C] mx-auto text-2xl",
                            children: [(0, i.jsx)(l.default, {                               
                                className: "mx-auto py-1.5 px-3 btn-play bg-[#ffffff] hover:bg-[#E4377A] group flex flex-col",
                                children: (0, i.jsx)("img", {
                                    className: "m-auto -translate-y-0.5 font-medium"
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex mx-auto mt-[5rem] mb-[2rem] gap-4",
                            children: [(0, i.jsx)(t.E.button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                onClick: function () {
                                    window.open("https://play.raid.party/")
                                },
                                className: "mx-auto py-1.5 px-3 btn-play bg-[#602754] hover:bg-[#FD8F0E] group flex flex-col",
                                children: (0, i.jsx)("span", {
                                    className: "m-auto -translate-y-0.5 font-medium",
                                    children: "Start Raiding"
                                })
                            }), (0, i.jsx)(t.E.button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                onClick: function () {
                                    window.open("https://raid-party.notion.site/Raid-Party-The-Idle-Yield-MMORPG-on-Ethereum-bbfd23a7070f46a59de3f70e8b4125dd", "_blank")
                                },
                                className: "mx-auto py-1.5 px-3 btn-learn bg-[#6937C7] hover:bg-[#7C41EA] group flex flex-col",
                                children: (0, i.jsx)("span", {
                                    className: "m-auto -translate-y-0.5 font-medium",
                                    children: "Whitepaper"
                                })
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col m-auto w-screen z-10 relative",
                        children: [(0, i.jsx)("div", {
                            className: "absolute top-[20rem] fade-in bg-[url(/images/tilebg.png)] bg-cover bottom-0 w-screen"
                        }), (0, i.jsx)("div", {
                            className: "mt-20 mb-10 mx-auto w-screen md:px-16",
                            children: (0, i.jsxs)("div", {
                                className: "bg-[url('/images/raidbg.png')] bg-origin-border bg-center bg-cover relative flex flex-col md:ring-1 ring-white/10 ring-inset max-w-5xl mx-auto h-[46rem] md:h-[50rem] md:rounded-md overflow-hidden",
                                children: [(0, i.jsxs)("div", {
                                    className: "px-12 py-8 flex flex-col",
                                    children: [(0, i.jsx)("span", {
                                        className: " text-white text-6xl font-bold",
                                        children: "Everybody's Invited."
                                    }), (0, i.jsx)("span", {
                                        className: "text-white/60 text-2xl font-medium mt-5",
                                        children: "Join the largest MMO on Ethereum, slaying enemies and meeting comrades along the way."
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "absolute bottom-0 right-0 left-0 flex flex-col",
                                    children: [(0, i.jsx)("img", {
                                        className: "mx-auto rendering-pixelated",
                                        src: "/images/frog.gif",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "rendering-pixelated",
                                        src: "/images/tiles.png",
                                        alt: ""
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "absolute left-0 right-0 bottom-0 h-[15rem] bg-gradient-to-t from-[#140C23] to-transparent"
                                }), (0, i.jsx)("img", {
                                    className: "absolute left-0 bottom-5 h-[20rem]",
                                    src: "/images/tile-bg.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "absolute -right-1 bottom-5 scale-x-[-1] h-[20rem]",
                                    src: "/images/tile-bg.png",
                                    alt: ""
                                }), (0, i.jsxs)("div", {
                                    className: "absolute hidden md:block left-0 bottom-[7rem]",
                                    children: [(0, i.jsx)("img", {
                                        className: "h-[10rem] m-auto rendering-pixelated",
                                        src: "/images/fighters/7.png",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "rendering-pixelated",
                                        src: "/images/tile-plat-2.png",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "h-[10rem] m-auto rendering-pixelated",
                                        src: "/images/fighters/2.png",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "rendering-pixelated",
                                        src: "/images/tile-plat.png",
                                        alt: ""
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "absolute hidden md:block right-0 bottom-[7rem] scale-x-[-1]",
                                    children: [(0, i.jsx)("img", {
                                        className: "h-[10rem] m-auto rendering-pixelated",
                                        src: "/images/fighters/11.png",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "rendering-pixelated",
                                        src: "/images/tile-plat-2.png",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "h-[10rem] m-auto rendering-pixelated",
                                        src: "/images/fighters/18.png",
                                        alt: ""
                                    }), (0, i.jsx)("img", {
                                        className: "rendering-pixelated",
                                        src: "/images/tile-plat.png",
                                        alt: ""
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "absolute bottom-0 right-0 left-0 flex flex-col",
                                    children: [(0, i.jsxs)("div", {
                                        className: "mx-auto flex flex-nowrap justify-center",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex md:space-x-[-2rem]",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[10rem] hidden md:block rendering-pixelated",
                                                src: "/images/fighters/1.png",
                                                alt: ""
                                            }), (0, i.jsx)("img", {
                                                className: "h-[10rem] rendering-pixelated",
                                                src: "/images/fighters/3.png",
                                                alt: ""
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "flex md:space-x-[-2rem]",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[10rem] scale-x-[-1] hidden md:block rendering-pixelated",
                                                src: "/images/fighters/14.png",
                                                alt: ""
                                            }), (0, i.jsx)("img", {
                                                className: "h-[10rem] scale-x-[-1] rendering-pixelated",
                                                src: "/images/fighters/24.png",
                                                alt: ""
                                            })]
                                        })]
                                    }), (0, i.jsx)("img", {
                                        className: "",
                                        src: "/images/tiles.png",
                                        alt: ""
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "max-w-5xl mx-auto flex z-50 mb-20 px-10",
                            children: (0, i.jsxs)("div", {
                                className: "space-y-4 my-6 mx-auto flex flex-col",
                                children: [(0, i.jsxs)("p", {
                                    className: "text-white text-5xl md:text-6xl font-bold text-center mx-auto",
                                    children: ["Join everyone in the", (0, i.jsxs)("mark", {
                                        className: "text-[#E02674] bg-transparent",
                                        children: [" ", "Raid Dungeon."]
                                    })]
                                }), (0, i.jsx)("span", {
                                    className: "text-[#7C70B4] text-2xl text-center mx-auto",
                                    children: "Fend off bosses, build your team, and earn rewards together with everyone in Raid Party, the on-chain idle MMO."
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "mt-10 mb-[10rem] md:grid grid-cols-2 mx-auto md:space-x-20 items-center max-w-5xl relative",
                            children: [(0, i.jsx)("div", {
                                className: "flex px-10 md:px-6 z-10",
                                children: (0, i.jsxs)("div", {
                                    className: "my-auto flex flex-col",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-white text-5xl md:text-6xl font-bold",
                                        children: "Deal Damage"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[#E02674] text-5xl md:text-6xl font-bold",
                                        children: "Earn $RPG!"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[#7C70B4] mt-10 text-2xl",
                                        children: "$RPG is the utility token of the RPG ecosystem! Use it to mint new NFTs, enhance your current ones, and more!"
                                    })]
                                })
                            })]
                             
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "mx-auto mt-[5rem] flex flex-col md:w-[40rem] px-10 md:px-0",
                        children: [(0, i.jsxs)("div", {
                            className: "flex",
                            children: [(0, i.jsx)("span", {
                                className: "text-left text-5xl md:text-7xl font-bold",
                                children: "Collect NFTs"
                            }), (0, i.jsx)("div", {})]
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-row-reverse",
                            children: [(0, i.jsx)("div", {}), (0, i.jsx)("span", {
                                className: "text-right text-5xl md:text-7xl font-bold text-[#E02674]",
                                children: "Assemble your Party"
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "md:grid grid-cols-2 max-w-6xl mx-auto md:mt-32 mt-16 md:px-0",
                        children: [(0, i.jsx)("div", {
                            className: "md:p-[6rem] flex flex-col bg-[#0E071D] z-10 px-10",
                            children: (0, i.jsxs)("div", {
                                className: "flex flex-col my-auto md:pt-10",
                                children: [(0, i.jsx)("span", {
                                    className: "text-[#7C70B4] text-3xl",
                                    children: "Start your party with"
                                }), (0, i.jsx)("span", {
                                    className: "text-[#E02674] text-6xl font-bold",
                                    children: "RPG Heroes"
                                }), (0, i.jsx)("span", {
                                    className: "text-[#7C70B4] mt-10 text-2xl",
                                    children: "Our trademark visuals, the headshot / profile pictures of RPG. Lead your fighters into battle with your hero!"
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "z-0 py-10 overflow-hidden fade-left",
                            children: [(0, i.jsxs)(t.E.div, {
                                animate: {
                                    // x: [0, -2000, 0]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 50
                                },
                                className: "flex space-x-14 mt-10",
                                children: [(0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/1.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/2.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[14rem] h-[14rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                })]
                            }), (0, i.jsxs)(t.E.div, {
                                animate: {
                                    x: [-2800, 0, -2800]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 60
                                },
                                className: "flex space-x-14 mt-10",
                                
                            }), (0, i.jsxs)(t.E.div, {
                                animate: {
                                    x: [0, -2800, 0]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 60
                                },
                                className: "flex space-x-14 mt-10",
                                
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "md:grid flex flex-col-reverse grid-cols-2 max-w-6xl mx-auto mt-32",
                        children: [(0, i.jsxs)("div", {
                            className: "z-0 my-10 overflow-hidden fade-left",
                            children: [(0, i.jsxs)(t.E.div, {
                                animate: {
                                    // x: [0, -1300, 0]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 30
                                },
                                className: "flex space-x-14 mt-10",
                                children: [(0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/1.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/2.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/4.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/5.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/6.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/7.png",
                                    alt: ""
                                }),
                                (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/1.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/2.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/3.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/4.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/5.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/6.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/7.png",
                                    alt: ""
                                })]
                            }), (0, i.jsxs)(t.E.div, {
                                animate: {
                                    // x: [-1300, 0, -1300]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 30
                                },
                                className: "flex space-x-14 mt-10",
                                children: [(0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/8.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/9.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/10.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/11.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/12.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/13.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/14.png",
                                    alt: ""
                                }),
                                (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/8.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/9.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/10.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/11.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/12.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/13.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/14.png",
                                    alt: ""
                                })]
                            }), (0, i.jsxs)(t.E.div, {
                                animate: {
                                    // x: [0, -1300, 0]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 30
                                },
                                className: "flex space-x-14 mt-10",
                                children: [ (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/15.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/16.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/17.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/18.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/19.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/20.png",
                                    alt: ""
                                }),
                                (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/15.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/16.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/17.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/18.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/19.png",
                                    alt: ""
                                }), (0, i.jsx)("img", {
                                    className: "rendering-pixelated btnsm w-[8rem] h-[8rem] shrink-0",
                                    src: "/images/heros/20.png",
                                    alt: ""
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: " px-10 md:p-[6rem] flex flex-col",
                            children: (0, i.jsxs)("div", {
                                className: "flex flex-col my-auto",
                                children: [(0, i.jsx)("span", {
                                    className: "text-[#7C70B4] text-3xl",
                                    children: "Deal damage with"
                                }), (0, i.jsx)("span", {
                                    className: "text-[#E02674] text-6xl font-bold",
                                    children: "RPG Fighters"
                                }), (0, i.jsx)("span", {
                                    className: "text-[#7C70B4] mt-10 text-2xl",
                                    children: "Fighters are the real damage dealers of the RPG ecosystem. They hit hard to yield that coveted $RPG."
                                })]
                            })
                        }),(0, i.jsx)("div",{
                        className:"",
                        children:(0, i.jsxs)("img",{
                        className:"",
                        src:"/images/logo.png",
                        alt:""
                        })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col space-y-4 mt-[10rem] px-10 mx-auto max-w-5xl",
                        children: [(0, i.jsxs)("span", {
                            className: "text-white text-6xl font-bold",
                            children: ["Limitless ", (0, i.jsx)("span", {
                                className: "text-[#E02674]",
                                children: "Enhancement"
                            })]
                        }), (0, i.jsx)("span", {
                            className: "text-[#7C70B4] text-2xl",
                            children: "Spend $RPG to enhance your heroes and fighers limitlessly, and deal even more damage than their initial DPS."
                        })]
                    }), (0, i.jsx)("div", {
                        className: "w-screen md:w-screen max-w-5xl mx-auto relative mb-[10rem] md:mb-[20rem] md:pl-10",
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col max-w-6xl mx-auto px-10 md:px-0 pb-20",
                            children: [(0, i.jsxs)("div", {
                                className: "max-w-5xl grid grid-cols-6 my-12 text-2xl",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col ml-2",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-[#7C70B4]",
                                        children: "Base DPS"
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium",
                                        children: ["200 ", (0, i.jsx)("mark", {
                                            className: "text-[#9087C9] bg-transparent",
                                            children: " DPS"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-[#7C70B4]",
                                        children: ["Enhancement", " ", (0, i.jsxs)("mark", {
                                            className: "text-[#ECB768] bg-transparent font-bold",
                                            children: [" ", "+1"]
                                        })]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium",
                                        children: ["+ 200", " ", (0, i.jsx)("mark", {
                                            className: "text-[#9087C9] bg-transparent",
                                            children: " DPS"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-[#7C70B4]",
                                        children: ["Enhancement", " ", (0, i.jsxs)("mark", {
                                            className: "text-[#A3EC5B] bg-transparent font-bold",
                                            children: [" ", "+2"]
                                        })]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium",
                                        children: ["+ 400", " ", (0, i.jsx)("mark", {
                                            className: "text-[#9087C9] bg-transparent",
                                            children: " DPS"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-[#7C70B4]",
                                        children: ["Enhancement", " ", (0, i.jsxs)("mark", {
                                            className: "text-[#5BA6EC] bg-transparent font-bold",
                                            children: [" ", "+3"]
                                        })]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium",
                                        children: ["+ 600", " ", (0, i.jsx)("mark", {
                                            className: "text-[#9087C9] bg-transparent",
                                            children: " DPS"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-[#7C70B4]",
                                        children: ["Enhancement", " ", (0, i.jsxs)("mark", {
                                            className: "text-[#B55BEC] bg-transparent font-bold",
                                            children: [" ", "+4"]
                                        })]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium",
                                        children: ["+ 1000", " ", (0, i.jsx)("mark", {
                                            className: "text-[#9087C9] bg-transparent",
                                            children: " DPS"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-[#7C70B4]",
                                        children: ["Enhancement", " ", (0, i.jsxs)("mark", {
                                            className: "text-[#EC5BC3] bg-transparent font-bold",
                                            children: [" ", "+5"]
                                        })]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium",
                                        children: ["+ 1600", " ", (0, i.jsx)("mark", {
                                            className: "text-[#9087C9] bg-transparent",
                                            children: " DPS"
                                        })]
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "grid grid-cols-6 items-center",
                                children: [(0, i.jsx)("div", {
                                    className: "h-1 bg-[#352C6B] mr-3"
                                }), (0, i.jsx)("div", {
                                    className: "h-1 enhancement col-span-5 z-10"
                                })]
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "bg-[url(/images/banner.png)] bg-cover flex flex-col fade-in space-y-10 md:py-24",
                        children: [(0, i.jsx)("span", {
                            className: "text-center mx-auto text-white text-6xl font-bold",
                            children: "Learn More"
                        }), (0, i.jsx)("span", {
                            className: "text-center text-[#7C70B4] mx-auto text-2xl",
                            children: "Want to join us? Get in the Discord!"
                        }), (0, i.jsx)("div", {
                            className: "mx-auto pb-24",
                            children: (0, i.jsx)("button", {
                                onClick: function () {
                                    window.open("http://discord.gg/RPG", "_blank")
                                },
                                className: "btn-play bg-[#E4377A] flex mx-auto hover:bg-[#E4377A] pb-2 transition mt-10 mb-20 px-2",
                                children: (0, i.jsx)("span", {
                                    className: "text-xl font-bold m-auto",
                                    children: "Join the Party"
                                })
                            })
                        }), (0, i.jsx)("img", {
                            className: "w-[10rem] mx-auto mt-[12rem]",
                            src: "/images/logo.png",
                            alt: ""
                        })]
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [228, 774, 888, 179], (function () {
            return s = 5301, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);