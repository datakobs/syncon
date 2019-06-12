!(function(a) {
  'use strict';
  var l = a(window),
    e = a('body'),
    i = a('.navbar');
  function s() {
    return l.width();
  }
  'ontouchstart' in document.documentElement || e.addClass('no-touch');
  var t = s();
  l.on('resize', function() {
    t = s();
  });
  var o = a('.is-sticky');
  if (o.length > 0) {
    var d = a('#mainnav').offset();
    l.scroll(function() {
      var a = l.scrollTop();
      (l.width() > 991 || o.hasClass('mobile-sticky')) && a > d.top
        ? o.hasClass('has-fixed') || o.addClass('has-fixed')
        : o.hasClass('has-fixed') && o.removeClass('has-fixed');
    });
  }
  a('a.menu-link[href*="#"]:not([href="#"])').on('click', function() {
    if (
      location.pathname.replace(/^\//, '') ===
        this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var l = a(this.hash),
        e = !!this.hash.slice(1) && a('[name=' + this.hash.slice(1) + ']'),
        s = t >= 992 ? i.height() - 1 : 0;
      if ((l = l.length ? l : e).length)
        return (
          a('html, body').animate(
            { scrollTop: l.offset().top - s },
            1e3,
            'easeInOutExpo'
          ),
          !1
        );
    }
  });
  var n = window.location.href,
    m = n.split('#'),
    c = a('.nav li a');
  c.length > 0 &&
    c.each(function() {
      n === this.href &&
        '' !== m[1] &&
        a(this)
          .closest('li')
          .addClass('active')
          .parent()
          .closest('li')
          .addClass('active');
    });
  var r = a('.dropdown'),
    h = a('.dropdown-toggle');
  r.length > 0 &&
    (r.on('mouseover', function() {
      l.width() > 991 &&
        (a(this)
          .children('.dropdown-menu')
          .stop()
          .fadeIn(400),
        a(this).addClass('open'));
    }),
    r.on('mouseleave', function() {
      l.width() > 991 &&
        (a(this)
          .children('.dropdown-menu')
          .stop()
          .fadeOut(400),
        a(this).removeClass('open'));
    }),
    h.on('click', function() {
      if (l.width() < 991)
        return (
          a(this)
            .parent()
            .children('.dropdown-menu')
            .fadeToggle(400),
          a(this)
            .parent()
            .toggleClass('open'),
          !1
        );
    })),
    l.on('resize', function() {
      a('.navbar-collapse').removeClass('in'),
        r
          .parent()
          .children('.dropdown-menu')
          .fadeOut('400');
    });
  var v = a('.navbar-toggler'),
    g = a('.is-transparent');
  v.length > 0 &&
    v.on('click', function() {
      a('.remove-animation').removeClass('animated'),
        g.hasClass('active') ? g.removeClass('active') : g.addClass('active');
    });
  var p = a('select');
  p.length > 0 && p.select2(),
    a('.menu-link').on('click', function() {
      a('.navbar-collapse').collapse('hide'), g.removeClass('active');
    }),
    a(document).on('mouseup', function(l) {
      g.is(l.target) ||
        0 !== g.has(l.target).length ||
        (a('.navbar-collapse').collapse('hide'), g.removeClass('active'));
    });
  var u = a('.timeline-carousel');
  if (u.length > 0) {
    var f = !!e.hasClass('is-rtl');
    u.addClass('owl-carousel').owlCarousel({
      navText: [
        "<i class='ti ti-angle-left'></i>",
        "<i class='ti ti-angle-right'></i>"
      ],
      items: 6,
      nav: !0,
      margin: 30,
      rtl: f,
      responsive: {
        0: { items: 1 },
        400: { items: 2, center: !1 },
        599: { items: 3 },
        1024: { items: 5 },
        1170: { items: 6 }
      }
    });
  }
  var b = a('.roadmap-carousel');
  if (b.length > 0) {
    var x = !!e.hasClass('is-rtl');
    b.addClass('owl-carousel').owlCarousel({
      items: 6,
      nav: !1,
      dost: !0,
      margin: 30,
      rtl: x,
      responsive: {
        0: { items: 1 },
        400: { items: 2, center: !1 },
        599: { items: 3 },
        1024: { items: 4 },
        1170: { items: 5 }
      }
    });
  }
  var w = a('.roadmap-carousel-withnav');
  if (w.length > 0) {
    var k = !!e.hasClass('is-rtl');
    w.addClass('owl-carousel').owlCarousel({
      navText: [
        "<i class='ti ti-angle-left'></i>",
        "<i class='ti ti-angle-right'></i>"
      ],
      items: 5,
      nav: !0,
      dost: !1,
      margin: 30,
      rtl: k,
      responsive: {
        0: { items: 1 },
        400: { items: 2, center: !1 },
        599: { items: 3 },
        1024: { items: 4 },
        1170: { items: 5 }
      }
    });
  }
  var C = a('.prblmsltn-list');
  if (C.length > 0) {
    var L = !!e.hasClass('is-rtl');
    C.addClass('owl-carousel').owlCarousel({
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
      ],
      items: 1,
      margin: 30,
      nav: !0,
      dost: !1,
      autoplay: !0,
      loop: !0,
      animateOut: 'fadeOut',
      autoHeight: !0,
      rtl: L
    });
  }
  var y = a('.has-carousel');
  if (y.length > 0) {
    var z = !!e.hasClass('is-rtl');
    y.each(function() {
      var l = a(this),
        e = l.data('items') ? l.data('items') : 4,
        i = e >= 3 ? 2 : e,
        s = i >= 2 ? 1 : i,
        t = l.data('delay') ? l.data('delay') : 6e3,
        o = !!l.data('auto'),
        d = !!l.data('loop'),
        n = !!l.data('dots'),
        m = !!l.data('navs'),
        c = !!l.data('center'),
        r = l.data('margin') ? l.data('margin') : 30;
      l.addClass('owl-carousel').owlCarousel({
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        items: e,
        loop: d,
        nav: m,
        dots: n,
        margin: r,
        center: c,
        autoplay: o,
        autoplayTimeout: t,
        autoplaySpeed: 300,
        rtl: z,
        responsive: {
          0: { items: 1 },
          480: { items: s },
          768: { items: i },
          1170: { items: e }
        }
      });
    });
  }
  var P = a('.token-countdown');
  P.length > 0 &&
    P.each(function() {
      var l = a(this),
        e = l.attr('data-date');
      l.countdown(e).on('update.countdown', function(l) {
        a(this).html(
          l.strftime(
            '<div class="col"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">D<span>ays</span></span></div><div class="col"><span class="countdown-time">%H</span><span class="countdown-text">H<span>ours</span></span></div><div class="col"><span class="countdown-time">%M</span><span class="countdown-text">M<span>inutes<span></span></div><div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">S<span>econds</span></span></div>'
          )
        );
      });
    });
  var D = a('.countdown-s2');
  D.length > 0 &&
    D.each(function() {
      var l = a(this),
        e = l.attr('data-date');
      l.countdown(e).on('update.countdown', function(l) {
        a(this).html(
          l.strftime(
            '<div class="countdown-s2-item"><span class="countdown-s2-time countdown-time-first">%D</span><span class="countdown-s2-text">Days</span></div><div class="countdown-s2-item"><span class="countdown-s2-time">%H</span><span class="countdown-s2-text">Hours</span></div><div class="countdown-s2-item"><span class="countdown-s2-time">%M</span><span class="countdown-s2-text">Min</span></div><div class="countdown-s2-item"><span class="countdown-s2-time countdown-time-last">%S</span><span class="countdown-s2-text">Sec</span></div>'
          )
        );
      });
    });
  var j = a('.content-popup');
  j.length > 0 &&
    j.magnificPopup({
      type: 'inline',
      preloader: !0,
      removalDelay: 400,
      mainClass: 'mfp-fade bg-team-exp'
    });
  var T = a('.video-play');
  T.length > 0 &&
    T.magnificPopup({
      type: 'iframe',
      removalDelay: 160,
      preloader: !0,
      fixedContentPos: !1,
      callbacks: {
        beforeOpen: function() {
          (this.st.image.markup = this.st.image.markup.replace(
            'mfp-figure',
            'mfp-figure mfp-with-anim'
          )),
            (this.st.mainClass = this.st.el.attr('data-effect'));
        }
      }
    });
  var S = a('.imagebg');
  S.length > 0 &&
    S.each(function() {
      var l = a(this),
        e = l.parent(),
        i = l.data('overlay'),
        s = l.children('img').attr('src'),
        t = void 0 !== i && '' !== i && i.split('-');
      void 0 !== s &&
        '' !== s &&
        (e.hasClass('has-bg-image') || e.addClass('has-bg-image'),
        '' !== t &&
          'dark' === t[0] &&
          (e.hasClass('light') || e.addClass('light')),
        l
          .css('background-image', 'url("' + s + '")')
          .addClass('bg-image-loaded'));
    });
  var V = a('[class*="mask-ov"]');
  V.length > 0 &&
    V.each(function() {
      var l = a(this).parent();
      l.hasClass('has-maskbg') || l.addClass('has-maskbg');
    });
  var A = a('#contact-form'),
    O = a('#subscribe-form');
  if (A.length > 0 || O.length > 0) {
    if (!a().validate || !a().ajaxSubmit)
      return (
        console.log('contactForm: jQuery Form or Form Validate not Defined.'),
        !0
      );
    if (A.length > 0) {
      var F = A.find('select.required'),
        B = A.find('.form-results');
      A.validate({
        invalidHandler: function() {
          B.slideUp(400);
        },
        submitHandler: function(l) {
          B.slideUp(400),
            a(l).ajaxSubmit({
              target: B,
              dataType: 'json',
              success: function(e) {
                var i = 'error' === e.result ? 'alert-danger' : 'alert-success';
                B.removeClass('alert-danger alert-success')
                  .addClass('alert ' + i)
                  .html(e.message)
                  .slideDown(400),
                  'error' !== e.result &&
                    a(l)
                      .clearForm()
                      .find('.input-field')
                      .removeClass('input-focused');
              }
            });
        }
      }),
        F.on('change', function() {
          a(this).valid();
        });
    }
    if (O.length > 0) {
      var _ = O.find('.subscribe-results');
      O.validate({
        invalidHandler: function() {
          _.slideUp(400);
        },
        submitHandler: function(l) {
          _.slideUp(400),
            a(l).ajaxSubmit({
              target: _,
              dataType: 'json',
              success: function(e) {
                var i = 'error' === e.result ? 'alert-danger' : 'alert-success';
                _.removeClass('alert-danger alert-success')
                  .addClass('alert ' + i)
                  .html(e.message)
                  .slideDown(400),
                  'error' !== e.result && a(l).clearForm();
              }
            });
        }
      });
    }
  }
  var H = a('.input-line');
  H.length > 0 &&
    H.each(function() {
      var l = a(this);
      a(this).val().length > 0 && l.parent().addClass('input-focused'),
        l.on('focus', function() {
          l.parent().addClass('input-focused');
        }),
        l.on('blur', function() {
          l.parent().removeClass('input-focused'),
            a(this).val().length > 0 && l.parent().addClass('input-focused');
        });
    });
  var M = a('.animated');
  a().waypoint &&
    M.length > 0 &&
    l.on('load', function() {
      M.each(function() {
        var l = a(this),
          e = l.data('animate'),
          i = l.data('duration'),
          s = l.data('delay');
        l.waypoint(
          function() {
            l.addClass('animated ' + e).css('visibility', 'visible'),
              i && l.css('animation-duration', i + 's'),
              s && l.css('animation-delay', s + 's');
          },
          { offset: '93%' }
        );
      });
    });
  var G = a('#preloader'),
    R = a('#loader');
  G.length > 0 &&
    l.on('load', function() {
      R.fadeOut(300), e.addClass('loaded'), G.delay(700).fadeOut(300);
    });
  if (a('.slider-pane').length > 0) {
    var N = !!e.hasClass('is-rtl');
    a('.slider-pane')
      .addClass('owl-carousel')
      .owlCarousel({
        items: 1,
        nav: !1,
        dotsContainer: '.slider-nav,.slider-dot',
        margin: 30,
        loop: !0,
        autoplayTimeout: 3e3,
        rtl: N,
        autoplay: !0,
        animateOut: 'fadeOut',
        autoplayHoverPause: !0
      });
  }
  var U = a('.card');
  U.length > 0 &&
    U.each(function() {
      a('.card-header a').on('click', function() {
        var l = a(this);
        l
          .parent()
          .parent()
          .parent()
          .parent()
          .find(U)
          .removeClass('active'),
          l
            .parent()
            .parent()
            .parent()
            .addClass('active');
      });
    });
  var J = a('#particles-js'),
    I = '#2b56f5',
    E = '#00c0fa';
  e.hasClass('io-zinnia') && ((I = '#fff'), (E = '#fff')),
    J.length > 0 &&
      particlesJS('particles-js', {
        particles: {
          number: { value: 30, density: { enable: !0, value_area: 800 } },
          color: { value: E },
          shape: {
            type: 'circle',
            opacity: 0.2,
            stroke: { width: 0, color: I },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 }
          },
          opacity: {
            value: 0.3,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.12, sync: !1 }
          },
          size: {
            value: 6,
            random: !0,
            anim: { enable: !1, speed: 40, size_min: 0.08, sync: !1 }
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: I,
            opacity: 0.5,
            width: 1.3
          },
          move: {
            enable: !0,
            speed: 6,
            direction: 'none',
            random: !1,
            straight: !1,
            out_mode: 'out',
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: !0, mode: 'repulse' },
            onclick: { enable: !0, mode: 'push' },
            resize: !0
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: !0
      });
  var Q = e.hasClass('is-rtl') ? '../../images' : '../images';
  e.append();
  var q = a(),
    W = a(),
    Z = a();
  Z.length > 0 &&
    Z.on('click', function() {
      var a = Cookies.get('twz-offer');
      return (
        W.removeClass('active'),
        q.addClass('active'),
        null === a &&
          Cookies.set('twz-offer', 'true', { expires: 1, path: '' }),
        !1
      );
    }),
    l.on('load', function() {
      null === Cookies.get('twz-offer')
        ? W.addClass('active')
        : q.addClass('active');
    });
  var X = e.hasClass('is-rtl') ? '../../images' : '../images',
    Y = e.hasClass('is-rtl') ? '../../rtl/' : '../',
    K = e.hasClass('is-rtl') ? '../../../ico-user/' : '../../ico-user/',
    $ = e.hasClass('is-rtl') ? '../' : './rtl/',
    aa = e.hasClass('is-rtl') ? 'LTR' : 'RTL';
  e.append();
  var la = a('.demo-themes,.demo-close'),
    ea = a('.demo-content'),
    ia = a('.demo-color-toggle'),
    sa = a('.demo-color'),
    ta = a('.color-trigger');
  ea.length > 0 &&
    la.on('click', function() {
      ea.toggleClass('demo-active').css('display', 'block'),
        e.toggleClass('shown-preview');
    }),
    ia.length > 0 &&
      ia.on('click', function() {
        sa.slideToggle('slow');
      }),
    ta.length > 0 &&
      ta.on('click', function() {
        var l = a(this).attr('title');
        return a('#layoutstyle').attr('href', 'assets/css/' + l + '.css'), !1;
      });
})(jQuery);
