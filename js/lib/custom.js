/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
(function(e, t, n) {
    typeof define == "function" && define.amd ? define(["jquery"], function(r) {
        return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
})(this, document, function(e, t, n, r) {
    (function(e, t, n, r) {
        function T(e) {
            while (e && typeof e.originalEvent != "undefined") e = e.originalEvent;
            return e
        }

        function N(t, n) {
            var i = t.type,
                s, o, a, l, c, h, p, d, v;
            t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f);
            if (s)
                for (p = o.length, l; p;) l = o[--p], t[l] = s[l];
            i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1);
            if (i.search(/^touch/) !== -1) {
                a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r;
                if (h)
                    for (d = 0, v = u.length; d < v; d++) l = u[d], t[l] = h[l]
            }
            return t
        }

        function C(t) {
            var n = {},
                r, s;
            while (t) {
                r = e.data(t, i);
                for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return n
        }

        function k(t, n) {
            var r;
            while (t) {
                r = e.data(t, i);
                if (r && (!n || r[n])) return t;
                t = t.parentNode
            }
            return null
        }

        function L() {
            g = !1
        }

        function A() {
            g = !0
        }

        function O() {
            E = 0, v.length = 0, m = !1, A()
        }

        function M() {
            L()
        }

        function _() {
            D(), c = setTimeout(function() {
                c = 0, O()
            }, e.vmouse.resetTimerDuration)
        }

        function D() {
            c && (clearTimeout(c), c = 0)
        }

        function P(t, n, r) {
            var i;
            if (r && r[t] || !r && k(n.target, t)) i = N(n, t), e(n.target).trigger(i);
            return i
        }

        function H(t) {
            var n = e.data(t.target, s),
                r;
            !m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
        }

        function B(t) {
            var n = T(t).touches,
                r, i, o;
            n && n.length === 1 && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
        }

        function j(e) {
            if (g) return;
            d || P("vmousecancel", e, C(e.target)), d = !0, _()
        }

        function F(t) {
            if (g) return;
            var n = T(t).touches[0],
                r = d,
                i = e.vmouse.moveDistanceThreshold,
                s = C(t.target);
            d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i, d && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _()
        }

        function I(e) {
            if (g) return;
            A();
            var t = C(e.target),
                n, r;
            P("vmouseup", e, t), d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({
                touchID: E,
                x: r.clientX,
                y: r.clientY
            }), m = !0)), P("vmouseout", e, t), d = !1, _()
        }

        function q(t) {
            var n = e.data(t, i),
                r;
            if (n)
                for (r in n)
                    if (n[r]) return !0;
            return !1
        }

        function R() {}

        function U(t) {
            var n = t.substr(1);
            return {
                setup: function() {
                    q(this) || e.data(this, i, {});
                    var r = e.data(this, i);
                    r[t] = !0, l[t] = (l[t] || 0) + 1, l[t] === 1 && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, l.touchstart === 1 && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
                },
                teardown: function() {
                    --l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
                    var r = e(this),
                        s = e.data(this, i);
                    s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i)
                }
            }
        }
        var i = "virtualMouseBindings",
            s = "virtualTouchID",
            o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            u = "clientX clientY pageX pageY screenX screenY".split(" "),
            a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            f = e.event.props.concat(a),
            l = {},
            c = 0,
            h = 0,
            p = 0,
            d = !1,
            v = [],
            m = !1,
            g = !1,
            y = "addEventListener" in n,
            b = e(n),
            w = 1,
            E = 0,
            S, x;
        e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]);
        y && n.addEventListener("click", function(t) {
            var n = v.length,
                r = t.target,
                i, o, u, a, f, l;
            if (n) {
                i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r;
                while (u) {
                    for (a = 0; a < n; a++) {
                        f = v[a], l = 0;
                        if (u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) {
                            t.preventDefault(), t.stopPropagation();
                            return
                        }
                    }
                    u = u.parentNode
                }
            }
        }, !0)
    })(e, t, n),
    function(e) {
        e.mobile = {}
    }(e),
    function(e, t) {
        var r = {
            touch: "ontouchend" in n
        };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r)
    }(e),
    function(e, t, r) {
        function l(t, n, i, s) {
            var o = i.type;
            i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o
        }
        var i = e(n),
            s = e.mobile.support.touch,
            o = "touchmove scroll",
            u = s ? "touchstart" : "mousedown",
            a = s ? "touchend" : "mouseup",
            f = s ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.bind(n, e) : this.trigger(n)
            }, e.attrFn && (e.attrFn[n] = !0)
        }), e.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function s(e, n) {
                    r = n, l(t, r ? "scrollstart" : "scrollstop", e)
                }
                var t = this,
                    n = e(t),
                    r, i;
                n.bind(o, function(t) {
                    if (!e.event.special.scrollstart.enabled) return;
                    r || s(t, !0), clearTimeout(i), i = setTimeout(function() {
                        s(t, !1)
                    }, 50)
                })
            },
            teardown: function() {
                e(this).unbind(o)
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var t = this,
                    n = e(t),
                    r = !1;
                n.bind("vmousedown", function(s) {
                    function a() {
                        clearTimeout(u)
                    }

                    function f() {
                        a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f)
                    }

                    function c(e) {
                        f(), !r && o === e.target ? l(t, "tap", e) : r && e.preventDefault()
                    }
                    r = !1;
                    if (s.which && s.which !== 1) return !1;
                    var o = s.target,
                        u;
                    n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function() {
                        e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", {
                            target: o
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel")
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(e) {
                var n = t.pageXOffset,
                    r = t.pageYOffset,
                    i = e.clientX,
                    s = e.clientY;
                if (e.pageY === 0 && Math.floor(s) > Math.floor(e.pageY) || e.pageX === 0 && Math.floor(i) > Math.floor(e.pageX)) i -= n, s -= r;
                else if (s < e.pageY - r || i < e.pageX - n) i = e.pageX - n, s = e.pageY - r;
                return {
                    x: i,
                    y: s
                }
            },
            start: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [r.x, r.y],
                    origin: e(t.target)
                }
            },
            stop: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [r.x, r.y]
                }
            },
            handleSwipe: function(t, n, r, i) {
                if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
                    var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
                    return l(r, "swipe", e.Event("swipe", {
                        target: i,
                        swipestart: t,
                        swipestop: n
                    }), !0), l(r, s, e.Event(s, {
                        target: i,
                        swipestart: t,
                        swipestop: n
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var t, n = this,
                    r = e(n),
                    s = {};
                t = e.data(this, "mobile-events"), t || (t = {
                    length: 0
                }, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function(t) {
                    if (e.event.special.swipe.eventInProgress) return;
                    e.event.special.swipe.eventInProgress = !0;
                    var r, o = e.event.special.swipe.start(t),
                        u = t.target,
                        l = !1;
                    s.move = function(t) {
                        if (!o || t.isDefaultPrevented()) return;
                        r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()
                    }, s.stop = function() {
                        l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null
                    }, i.on(f, s.move).one(a, s.stop)
                }, r.on(u, s.start)
            },
            teardown: function() {
                var t, n;
                t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, t.length === 0 && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(t, n) {
            e.event.special[t] = {
                setup: function() {
                    e(this).bind(n, e.noop)
                },
                teardown: function() {
                    e(this).unbind(n)
                }
            }
        })
    }(e, this)
});;
jQuery(document).ready(function($) {
    var productViewer = function(element) {
        this.element = element;
        this.handleContainer = this.element.find('.cd-product-viewer-handle');
        this.handleFill = this.handleContainer.children('.fill');
        this.handle = this.handleContainer.children('.handle');
        this.imageWrapper = this.element.find('.product-viewer');
        this.slideShow = this.imageWrapper.children('.product-sprite');
        this.frames = this.element.data('frame');
        this.friction = this.element.data('friction');
        this.visibleFrame = 0;
        this.loaded = false;
        this.animating = false;
        this.xPosition = 0;
        this.loadFrames();
    }
    productViewer.prototype.loadFrames = function() {
        var self = this,
            imageUrl = this.slideShow.data('image'),
            newImg = $('<img/>');
        this.loading('0.5');
        newImg.attr('src', imageUrl).load(function() {
            $(this).remove();
            self.loaded = true;
        }).each(function() {
            image = this;
            if (image.complete) {
                $(image).trigger('load');
            }
        });
    }
    productViewer.prototype.loading = function(percentage) {
        var self = this;
        transformElement(this.handleFill, 'scaleX(' + percentage + ')');
        setTimeout(function() {
            if (self.loaded) {
                self.element.addClass('loaded');
                transformElement(self.handleFill, 'scaleX(1)');
                self.dragImage();
                if (self.handle) self.dragHandle();
            } else {
                var newPercentage = parseFloat(percentage) + .1;
                if (newPercentage < 1) {
                    self.loading(newPercentage);
                } else {
                    self.loading(parseFloat(percentage));
                }
            }
        }, 500);
    }
    productViewer.prototype.dragHandle = function() {
        var self = this;
        self.handle.on('mousedown vmousedown', function(e) {
            self.handle.addClass('cd-draggable');
            var dragWidth = self.handle.outerWidth(),
                containerOffset = self.handleContainer.offset().left,
                containerWidth = self.handleContainer.outerWidth(),
                minLeft = containerOffset - dragWidth / 2,
                maxLeft = containerOffset + containerWidth - dragWidth / 2;
            self.xPosition = self.handle.offset().left + dragWidth - e.pageX;
            self.element.on('mousemove vmousemove', function(e) {
                if (!self.animating) {
                    self.animating = true;
                    (!window.requestAnimationFrame) ? setTimeout(function() {
                        self.animateDraggedHandle(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft);
                    }, 100): requestAnimationFrame(function() {
                        self.animateDraggedHandle(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft);
                    });
                }
            }).one('mouseup vmouseup', function(e) {
                self.handle.removeClass('cd-draggable');
                self.element.off('mousemove vmousemove');
            });
            e.preventDefault();
        }).on('mouseup vmouseup', function(e) {
            self.handle.removeClass('cd-draggable');
        });
    }
    productViewer.prototype.animateDraggedHandle = function(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft) {
        var self = this;
        var leftValue = e.pageX + self.xPosition - dragWidth;
        if (leftValue < minLeft) {
            leftValue = minLeft;
        } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
        }
        var widthValue = Math.ceil((leftValue + dragWidth / 2 - containerOffset) * 1000 / containerWidth) / 10;
        self.visibleFrame = Math.ceil((widthValue * (self.frames - 1)) / 100);
        self.updateFrame();
        $('.cd-draggable', self.handleContainer).css('left', widthValue + '%').one('mouseup vmouseup', function() {
            $(this).removeClass('cd-draggable');
        });
        self.animating = false;
    }
    productViewer.prototype.dragImage = function() {
        var self = this;
        self.slideShow.on('mousedown vmousedown', function(e) {
            self.slideShow.addClass('cd-draggable');
            var containerOffset = self.imageWrapper.offset().left,
                containerWidth = self.imageWrapper.outerWidth(),
                minFrame = 0,
                maxFrame = self.frames - 1;
            self.xPosition = e.pageX;
            self.element.on('mousemove vmousemove', function(e) {
                if (!self.animating) {
                    self.animating = true;
                    (!window.requestAnimationFrame) ? setTimeout(function() {
                        self.animateDraggedImage(e, containerOffset, containerWidth);
                    }, 100): requestAnimationFrame(function() {
                        self.animateDraggedImage(e, containerOffset, containerWidth);
                    });
                }
            }).one('mouseup vmouseup', function(e) {
                self.slideShow.removeClass('cd-draggable');
                self.element.off('mousemove vmousemove');
                self.updateHandle();
            });
            e.preventDefault();
        }).on('mouseup vmouseup', function(e) {
            self.slideShow.removeClass('cd-draggable');
        });
    }
    productViewer.prototype.animateDraggedImage = function(e, containerOffset, containerWidth) {
        var self = this;
        var leftValue = self.xPosition - e.pageX;
        var widthValue = Math.ceil((leftValue) * 100 / (containerWidth * self.friction));
        var frame = (widthValue * (self.frames - 1)) / 100;
        if (frame > 0) {
            frame = Math.floor(frame);
        } else {
            frame = Math.ceil(frame);
        }
        var newFrame = self.visibleFrame + frame;
        if (newFrame < 0) {
            newFrame = self.frames - 1;
        } else if (newFrame > self.frames - 1) {
            newFrame = 0;
        }
        if (newFrame != self.visibleFrame) {
            self.visibleFrame = newFrame;
            self.updateFrame();
            self.xPosition = e.pageX;
        }
        self.animating = false;
    }
    productViewer.prototype.updateHandle = function() {
        if (this.handle) {
            var widthValue = 100 * this.visibleFrame / this.frames;
            this.handle.animate({
                'left': widthValue + '%'
            }, 200);
        }
    }
    productViewer.prototype.updateFrame = function() {
        var transformValue = -(100 * this.visibleFrame / this.frames);
        transformElement(this.slideShow, 'translateX(' + transformValue + '%)');
    }

    function transformElement(element, value) {
        element.css({
            '-moz-transform': value,
            '-webkit-transform': value,
            '-ms-transform': value,
            '-o-transform': value,
            'transform': value,
        });
    }
    var productToursWrapper = $('.cd-product-viewer-wrapper');
    productToursWrapper.each(function() {
        new productViewer($(this));
    });
});;

function opacityHeaderImage() {
    var header = $('.opacity-box');
    var range = $('.header-content').height() / 4;
    var el_range = $(".section-gallery-slider").height() / 4;
    var pageheight = $(window).height();
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop(),
            height = header.outerHeight(),
            offset = height / 2,
            calc = 1 - (scrollTop - offset + range) / range;
        header.css({
            'opacity': calc
        });
        if (calc > '1') {
            header.css({
                'opacity': 1
            });
        } else if (calc < '0') {
            header.css({
                'opacity': 0
            });
        }
        if (scrollTop > pageheight) {
            $(".head-menu").addClass('big-gradient');
        } else {
            $(".head-menu").removeClass('big-gradient');
        }
        if (scrollTop > height + 5) {
            $(".scroll-single-gallery").addClass('scroll-single-gallery-hidden');
        } else {
            $(".scroll-single-gallery").removeClass('scroll-single-gallery-hidden');
        }
    });
}

function slidersInit() {
    var mySwiper = new Swiper('.gallery-in-page', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        spaceBetween: 40,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 0,
            },
            420: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                spaceBetween: 0,
            },
        },
    });
    var mySwiper = new Swiper('.gallery-team', {
        slidesPerView: 5,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            800: {
                slidesPerView: 3,
            },
        },
    });
    var galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            800: {
                spaceBetween: 10,
            },
        },
    });
}

(function($) {
    $(window).on("load", function() {
        $('body,html').animate({
            scrollTop: 1
        }, 0);
        $(document).scrollzipInit();
        $(document).rollerInit();
        var faq_height = $('.verflow-faq-box').outerHeight();
        $('.fixed-form-faq').css({
            'height': faq_height
        });
        (function($) {
            $('.faq-accordion-box .faq-row').click(function(j) {
                var dropDown = $(this).closest('.faq-row').find('.content-row-faq');
                $(this).closest('.faq-accordion-box').find('.content-row-faq').not(dropDown).slideUp();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.faq-accordion-box').find('.faq-row.active').removeClass('active');
                    $(this).addClass('active');
                }
                dropDown.stop(false, true).slideToggle();
                j.preventDefault();
            });
        })(jQuery);
    });
    $(window).on("load scroll resize", function() {
        $('.numscroller').scrollzip({
            showFunction: function() {
                numberRoller($(this).attr('data-slno'));
            },
            wholeVisible: false,
        });
    });
    $.fn.scrollzipInit = function() {
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>");
    };
    $.fn.rollerInit = function() {
        var i = 0;
        $('.numscroller').each(function() {
            i++;
            $(this).attr('data-slno', i);
            $(this).addClass("roller-title-number-" + i);
        });
    };
    $.fn.scrollzip = function(options) {
        var settings = $.extend({
            showFunction: null,
            hideFunction: null,
            showShift: 0,
            wholeVisible: false,
            hideShift: 0,
        }, options);
        return this.each(function(i, obj) {
            $(this).addClass('scrollzip');
            if ($.isFunction(settings.showFunction)) {
                if (!$(this).hasClass('isShown') && ($(window).outerHeight() + $('#scrollzipPoint').offset().top - settings.showShift) > ($(this).offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) && ($('#scrollzipPoint').offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) < ($(this).outerHeight() + $(this).offset().top - settings.showShift)) {
                    $(this).addClass('isShown');
                    settings.showFunction.call(this);
                }
            }
            if ($.isFunction(settings.hideFunction)) {
                if ($(this).hasClass('isShown') && (($(window).outerHeight() + $('#scrollzipPoint').offset().top - settings.hideShift) < ($(this).offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) || ($('#scrollzipPoint').offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) > ($(this).outerHeight() + $(this).offset().top - settings.hideShift))) {
                    $(this).removeClass('isShown');
                    settings.hideFunction.call(this);
                }
            }
            return this;
        });
    };

    function numberRoller(slno) {
        var min = $('.roller-title-number-' + slno).attr('data-min');
        var max = $('.roller-title-number-' + slno).attr('data-max');
        var timediff = $('.roller-title-number-' + slno).attr('data-delay');
        var increment = $('.roller-title-number-' + slno).attr('data-increment');
        var numdiff = max - min;
        var timeout = (timediff * 1000) / numdiff;
        numberRoll(slno, min, max, increment, timeout);
    }

    function numberRoll(slno, min, max, increment, timeout) {
        if (min <= max) {
            $('.roller-title-number-' + slno).html(min);
            min = parseInt(min) + parseInt(increment);
            setTimeout(function() {
                numberRoll(eval(slno), eval(min), eval(max), eval(increment), eval(timeout))
            }, timeout);
        } else {
            $('.roller-title-number-' + slno).html(max);
        }
    }
})(jQuery);

function initialize() {
    var map;
    var egglabs = new google.maps.LatLng(50.407442, 30.390156);
    var mapCoordinates = new google.maps.LatLng(50.406442, 30.390156);
    var image = new google.maps.MarkerImage('https://southart.com.ua/wp-content/themes/southart-new-theme/images/marker.svg', new google.maps.Size(100, 100), new google.maps.Point(0, 0), new google.maps.Point(50, 50));
    var mapOptions = {
        backgroundColor: "#14151D",
        zoom: 15,
        mapTypeControl: false,
        disableDefaultUI: true,
        scrollwheel: false,
        center: mapCoordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "invert_lightness": true
            }, {
                "saturation": "-48"
            }, {
                "lightness": 30
            }, {
                "gamma": 0.5
            }, {
                "hue": "#007fff"
            }]
        }, {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "-55"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "lightness": "0"
            }, {
                "weight": "1"
            }, {
                "hue": "#007fff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#3d95ee"
            }, {
                "gamma": "0.26"
            }, {
                "lightness": "3"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#3d95ee"
            }, {
                "gamma": "0.25"
            }]
        }]
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var markers = new google.maps.Marker({
        position: egglabs,
        raiseOnDrag: false,
        icon: image,
        optimized: false,
        map: map,
        draggable: false,
    });
    google.maps.event.addListener(markers, "click", function(e) {
        window.open('https://www.google.com/maps/place/%D0%A2%D1%8E%D0%BD%D0%B8%D0%BD%D0%B3-%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5+South.Art/@50.4074152,30.3897506,19z/data=!3m1!4b1!4m5!3m4!1s0x40d4cb7a3a4af47b:0x96b744a622b350f9!8m2!3d50.4074143!4d30.3902978');
    });
}


