/* InstantClick 3.0.1 | (C) 2014 Alexandre Dieulot | http://instantclick.io/license.html */
var InstantClick=function(e,g){function v(a){var c=a.indexOf("#");return 0>c?a:a.substr(0,c)}function y(a){for(;"A"!=a.nodeName;)a=a.parentNode;return a}function t(a,c){for(var b=0;b<D[a].length;b++)D[a][b](c)}function G(a,c,b,l){e.title=a;e.documentElement.replaceChild(c,e.body);if(b){history.pushState(null,null,b);a=b.indexOf("#");a=-1<a&&e.getElementById(b.substr(a+1));c=0;if(a)for(;a.offsetParent;)c+=a.offsetTop,a=a.offsetParent;scrollTo(0,c);m=v(b)}else scrollTo(0,l);H();z.done();t("change",
!1)}function I(a){w(y(a.target).href)}function J(a){a=y(a.target);a.addEventListener("mouseout",Q);E?(K=a.href,r=setTimeout(w,E)):w(a.href)}function R(a){a=y(a.target);A?a.removeEventListener("mousedown",I):a.removeEventListener("mouseover",J);w(a.href)}function S(a){1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),L(y(a.target).href))}function Q(){r?(clearTimeout(r),r=!1):u&&!h&&(p.abort(),h=u=!1)}function T(){if(!(4>p.readyState)&&0!=p.status){q.ready=+new Date-q.start;t("receive");if(p.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var a=
e.implementation.createHTMLDocument("");a.documentElement.innerHTML=p.responseText;F=a.title;x=a.body;var c=v(s);f[c]={body:x,title:F,scrollY:c in f?f[c].scrollY:0};for(var a=a.head.children,c=0,b,l=a.length-1;0<=l;l--)if(b=a[l],b.hasAttribute("data-instant-track")){b=b.getAttribute("href")||b.getAttribute("src")||b.innerHTML;for(var n=B.length-1;0<=n;n--)B[n]==b&&c++}c!=B.length&&(C=!0)}else C=!0;h&&(h=!1,L(s))}}function H(a){for(var c=e.getElementsByTagName("a"),b,l=g.protocol+"//"+g.host,n=c.length-
1;0<=n;n--){b=c[n];var d;if(!((d=b.target)||(d=b.hasAttribute("download"))||(d=0!=b.href.indexOf(l+"/"))||(d=-1<b.href.indexOf("#")&&v(b.href)==m)))if(M){a:{d=b;do{if(!d.hasAttribute)break;if(d.hasAttribute("data-no-instant"))break;if(d.hasAttribute("data-instant")){d=!0;break a}}while(d=d.parentNode);d=!1}d=!d}else a:{d=b;do{if(!d.hasAttribute)break;if(d.hasAttribute("data-instant"))break;if(d.hasAttribute("data-no-instant")){d=!0;break a}}while(d=d.parentNode);d=!1}d||(b.addEventListener("touchstart",
R),A?b.addEventListener("mousedown",I):b.addEventListener("mouseover",J),b.addEventListener("click",S))}if(!a)for(a=e.body.getElementsByTagName("script"),n=0,j=a.length;n<j;n++)c=a[n],c.hasAttribute("data-no-instant")||(b=e.createElement("script"),c.src&&(b.src=c.src),c.innerHTML&&(b.innerHTML=c.innerHTML),l=c.parentNode,d=c.nextSibling,l.removeChild(c),l.insertBefore(b,d))}function w(a){if(A||!("display"in q&&100>+new Date-(q.start+q.display)))if(r&&(clearTimeout(r),r=!1),a||(a=K),!u||a!=s&&!h)u=
!0,h=!1,s=a,C=x=!1,q={start:+new Date},t("fetch"),p.open("GET",a),p.send()}function L(a){"display"in q||(q.display=+new Date-q.start);r?s&&s!=a?g.href=a:(w(a),z.start(0,!0),t("wait"),h=!0):!u||h?g.href=a:C?g.href=s:x?(f[m].scrollY=pageYOffset,h=u=!1,G(F,x,s)):(z.start(0,!0),t("wait"),h=!0)}var N=navigator.userAgent,O="createTouch"in e,m,K,r,f={},p,s=!1,F=!1,C=!1,x=!1,q={},u=!1,h=!1,B=[],M,A,E,D={fetch:[],receive:[],wait:[],change:[]},z=function(){function a(a,d){f=a;e.getElementById(k.id)&&e.body.removeChild(k);
k.style.opacity="1";e.getElementById(k.id)&&e.body.removeChild(k);l();d&&setTimeout(c,0);clearTimeout(m);m=setTimeout(b,500)}function c(){f=10;l()}function b(){f+=1+2*Math.random();98<=f?f=98:m=setTimeout(b,500);l()}function l(){g.style[h]="translate("+f+"%)";e.getElementById(k.id)||e.body.appendChild(k)}function n(){e.getElementById(k.id)?(clearTimeout(m),f=100,l(),k.style.opacity="0"):(a(100==f?0:f),setTimeout(n,0))}function d(){k.style.left=pageXOffset+"px";k.style.width=innerWidth+"px";k.style.top=
pageYOffset+"px";var a="orientation"in window&&90==Math.abs(orientation);k.style[h]="scaleY("+innerWidth/screen[a?"height":"width"]*2+")"}var k,g,h,f,m;return{init:function(){k=e.createElement("div");k.id="instantclick";g=e.createElement("div");g.id="instantclick-bar";g.className="instantclick-bar";k.appendChild(g);var a=["Webkit","Moz","O"];h="transform";if(!(h in g.style))for(var b=0;3>b;b++)a[b]+"Transform"in g.style&&(h=a[b]+"Transform");var c="transition";if(!(c in g.style))for(b=0;3>b;b++)a[b]+
"Transition"in g.style&&(c="-"+a[b].toLowerCase()+"-"+c);a=e.createElement("style");a.innerHTML="#instantclick{position:"+(O?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+c+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+c+":all .25s}";e.head.appendChild(a);O&&(d(),addEventListener("resize",d),addEventListener("scroll",d))},start:a,done:n}}(),P="pushState"in history&&(!N.match("Android")||N.match("Chrome/"))&&
"file:"!=g.protocol;return{supported:P,init:function(){if(!m)if(P){for(var a=arguments.length-1;0<=a;a--){var c=arguments[a];!0===c?M=!0:"mousedown"==c?A=!0:"number"==typeof c&&(E=c)}m=v(g.href);f[m]={body:e.body,title:e.title,scrollY:pageYOffset};for(var c=e.head.children,b,a=c.length-1;0<=a;a--)b=c[a],b.hasAttribute("data-instant-track")&&(b=b.getAttribute("href")||b.getAttribute("src")||b.innerHTML,B.push(b));p=new XMLHttpRequest;p.addEventListener("readystatechange",T);H(!0);z.init();t("change",
!0);addEventListener("popstate",function(){var a=v(g.href);a!=m&&(a in f?(f[m].scrollY=pageYOffset,m=a,G(f[a].title,f[a].body,!1,f[a].scrollY)):g.href=g.href)})}else t("change",!0)},on:function(a,c){D[a].push(c)}}}(document,location);

// https://cdnjs.cloudflare.com/ajax/libs/fitvids/1.1.0/jquery.fitvids.min.js
!function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};if(!document.getElementById("fit-vids-style")){var head=document.head||document.getElementsByTagName("head")[0],css=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+"</style>",head.appendChild(div.childNodes[1])}return options&&$.extend(settings,options),this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];settings.customSelector&&selectors.push(settings.customSelector);var $allVideos=$(this).find(selectors.join(","));$allVideos=$allVideos.not("object object"),$allVideos.each(function(){var $this=$(this);if(!("embed"===this.tagName.toLowerCase()&&$this.parent("object").length||$this.parent(".fluid-width-video-wrapper").length)){$this.css("height")||$this.css("width")||!isNaN($this.attr("height"))&&!isNaN($this.attr("width"))||($this.attr("height",9),$this.attr("width",16));var height="object"===this.tagName.toLowerCase()||$this.attr("height")&&!isNaN(parseInt($this.attr("height"),10))?parseInt($this.attr("height"),10):$this.height(),width=isNaN(parseInt($this.attr("width"),10))?$this.width():parseInt($this.attr("width"),10),aspectRatio=height/width;if(!$this.attr("id")){var videoID="fitvid"+Math.floor(999999*Math.random());$this.attr("id",videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*aspectRatio+"%"),$this.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);

/*!
    Colorbox 1.6.0
    license: MIT
    http://www.jacklmoore.com/colorbox
*/
(function ($, document, window) {
    var
    // Default settings object.
    // See http://jacklmoore.com/colorbox for details.
    defaults = {
        // data sources
        html: false,
        photo: false,
        iframe: false,
        inline: false,

        // behavior and appearance
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: false,
        initialWidth: "600",
        innerWidth: false,
        maxWidth: false,
        height: false,
        initialHeight: "450",
        innerHeight: false,
        maxHeight: false,
        scalePhotos: true,
        scrolling: true,
        opacity: 0.9,
        preloading: true,
        className: false,
        overlayClose: true,
        escKey: true,
        arrowKey: true,
        top: false,
        bottom: false,
        left: false,
        right: false,
        fixed: false,
        data: undefined,
        closeButton: true,
        fastIframe: true,
        open: false,
        reposition: true,
        loop: true,
        slideshow: false,
        slideshowAuto: true,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

        // alternate image paths for high-res displays
        retinaImage: false,
        retinaUrl: false,
        retinaSuffix: '@2x.$1',

        // internationalization
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",

        // accessbility
        returnFocus: true,
        trapFocus: true,

        // callbacks
        onOpen: false,
        onLoad: false,
        onComplete: false,
        onCleanup: false,
        onClosed: false,

        rel: function() {
            return this.rel;
        },
        href: function() {
            // using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
            return $(this).attr('href');
        },
        title: function() {
            return this.title;
        },
        createImg: function() {
            var img = new Image();
            var attrs = $(this).data('cbox-img-attrs');

            if (typeof attrs === 'object') {
                $.each(attrs, function(key, val){
                    img[key] = val;
                });
            }

            return img;
        },
        createIframe: function() {
            var iframe = document.createElement('iframe');
            var attrs = $(this).data('cbox-iframe-attrs');

            if (typeof attrs === 'object') {
                $.each(attrs, function(key, val){
                    iframe[key] = val;
                });
            }

            if ('frameBorder' in iframe) {
                iframe.frameBorder = 0;
            }
            if ('allowTransparency' in iframe) {
                iframe.allowTransparency = "true";
            }
            iframe.name = (new Date()).getTime(); // give the iframe a unique name to prevent caching
            iframe.allowFullScreen = true;

            return iframe;
        }
    },

    // Abstracting the HTML and event identifiers for easy rebranding
    colorbox = 'colorbox',
    prefix = 'cbox',
    boxElement = prefix + 'Element',

    // Events
    event_open = prefix + '_open',
    event_load = prefix + '_load',
    event_complete = prefix + '_complete',
    event_cleanup = prefix + '_cleanup',
    event_closed = prefix + '_closed',
    event_purge = prefix + '_purge',

    // Cached jQuery Object Variables
    $overlay,
    $box,
    $wrap,
    $content,
    $topBorder,
    $leftBorder,
    $rightBorder,
    $bottomBorder,
    $related,
    $window,
    $loaded,
    $loadingBay,
    $loadingOverlay,
    $title,
    $current,
    $slideshow,
    $next,
    $prev,
    $close,
    $groupControls,
    $events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2

    // Variables for cached values or use across multiple functions
    settings,
    interfaceHeight,
    interfaceWidth,
    loadedHeight,
    loadedWidth,
    index,
    photo,
    open,
    active,
    closing,
    loadingTimer,
    publicMethod,
    div = "div",
    requests = 0,
    previousCSS = {},
    init;

    // ****************
    // HELPER FUNCTIONS
    // ****************

    // Convenience function for creating new jQuery objects
    function $tag(tag, id, css) {
        var element = document.createElement(tag);

        if (id) {
            element.id = prefix + id;
        }

        if (css) {
            element.style.cssText = css;
        }

        return $(element);
    }

    // Get the window height using innerHeight when available to avoid an issue with iOS
    // http://bugs.jquery.com/ticket/6724
    function winheight() {
        return window.innerHeight ? window.innerHeight : $(window).height();
    }

    function Settings(element, options) {
        if (options !== Object(options)) {
            options = {};
        }

        this.cache = {};
        this.el = element;

        this.value = function(key) {
            var dataAttr;

            if (this.cache[key] === undefined) {
                dataAttr = $(this.el).attr('data-cbox-'+key);

                if (dataAttr !== undefined) {
                    this.cache[key] = dataAttr;
                } else if (options[key] !== undefined) {
                    this.cache[key] = options[key];
                } else if (defaults[key] !== undefined) {
                    this.cache[key] = defaults[key];
                }
            }

            return this.cache[key];
        };

        this.get = function(key) {
            var value = this.value(key);
            return $.isFunction(value) ? value.call(this.el, this) : value;
        };
    }

    // Determine the next and previous members in a group.
    function getIndex(increment) {
        var
        max = $related.length,
        newIndex = (index + increment) % max;

        return (newIndex < 0) ? max + newIndex : newIndex;
    }

    // Convert '%' and 'px' values to integers
    function setSize(size, dimension) {
        return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
    }

    // Checks an href to see if it is a photo.
    // There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
    function isImage(settings, url) {
        return settings.get('photo') || settings.get('photoRegex').test(url);
    }

    function retinaUrl(settings, url) {
        return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
    }

    function trapFocus(e) {
        if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
            e.stopPropagation();
            $box.focus();
        }
    }

    function setClass(str) {
        if (setClass.str !== str) {
            $box.add($overlay).removeClass(setClass.str).addClass(str);
            setClass.str = str;
        }
    }

    function getRelated(rel) {
        index = 0;

        if (rel && rel !== false && rel !== 'nofollow') {
            $related = $('.' + boxElement).filter(function () {
                var options = $.data(this, colorbox);
                var settings = new Settings(this, options);
                return (settings.get('rel') === rel);
            });
            index = $related.index(settings.el);

            // Check direct calls to Colorbox.
            if (index === -1) {
                $related = $related.add(settings.el);
                index = $related.length - 1;
            }
        } else {
            $related = $(settings.el);
        }
    }

    function trigger(event) {
        // for external use
        $(document).trigger(event);
        // for internal use
        $events.triggerHandler(event);
    }

    var slideshow = (function(){
        var active,
            className = prefix + "Slideshow_",
            click = "click." + prefix,
            timeOut;

        function clear () {
            clearTimeout(timeOut);
        }

        function set() {
            if (settings.get('loop') || $related[index + 1]) {
                clear();
                timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
            }
        }

        function start() {
            $slideshow
                .html(settings.get('slideshowStop'))
                .unbind(click)
                .one(click, stop);

            $events
                .bind(event_complete, set)
                .bind(event_load, clear);

            $box.removeClass(className + "off").addClass(className + "on");
        }

        function stop() {
            clear();

            $events
                .unbind(event_complete, set)
                .unbind(event_load, clear);

            $slideshow
                .html(settings.get('slideshowStart'))
                .unbind(click)
                .one(click, function () {
                    publicMethod.next();
                    start();
                });

            $box.removeClass(className + "on").addClass(className + "off");
        }

        function reset() {
            active = false;
            $slideshow.hide();
            clear();
            $events
                .unbind(event_complete, set)
                .unbind(event_load, clear);
            $box.removeClass(className + "off " + className + "on");
        }

        return function(){
            if (active) {
                if (!settings.get('slideshow')) {
                    $events.unbind(event_cleanup, reset);
                    reset();
                }
            } else {
                if (settings.get('slideshow') && $related[1]) {
                    active = true;
                    $events.one(event_cleanup, reset);
                    if (settings.get('slideshowAuto')) {
                        start();
                    } else {
                        stop();
                    }
                    $slideshow.show();
                }
            }
        };

    }());


    function launch(element) {
        var options;

        if (!closing) {

            options = $(element).data(colorbox);

            settings = new Settings(element, options);

            getRelated(settings.get('rel'));

            if (!open) {
                open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

                setClass(settings.get('className'));

                // Show colorbox so the sizes can be calculated in older versions of jQuery
                $box.css({visibility:'hidden', display:'block', opacity:''});

                $loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
                $content.css({width:'', height:''}).append($loaded);

                // Cache values needed for size calculations
                interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
                interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
                loadedHeight = $loaded.outerHeight(true);
                loadedWidth = $loaded.outerWidth(true);

                // Opens inital empty Colorbox prior to content being loaded.
                var initialWidth = setSize(settings.get('initialWidth'), 'x');
                var initialHeight = setSize(settings.get('initialHeight'), 'y');
                var maxWidth = settings.get('maxWidth');
                var maxHeight = settings.get('maxHeight');

                settings.w = (maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth;
                settings.h = (maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight;

                $loaded.css({width:'', height:settings.h});
                publicMethod.position();

                trigger(event_open);
                settings.get('onOpen');

                $groupControls.add($title).hide();

                $box.focus();

                if (settings.get('trapFocus')) {
                    // Confine focus to the modal
                    // Uses event capturing that is not supported in IE8-
                    if (document.addEventListener) {

                        document.addEventListener('focus', trapFocus, true);

                        $events.one(event_closed, function () {
                            document.removeEventListener('focus', trapFocus, true);
                        });
                    }
                }

                // Return focus on closing
                if (settings.get('returnFocus')) {
                    $events.one(event_closed, function () {
                        $(settings.el).focus();
                    });
                }
            }

            var opacity = parseFloat(settings.get('opacity'));
            $overlay.css({
                opacity: opacity === opacity ? opacity : '',
                cursor: settings.get('overlayClose') ? 'pointer' : '',
                visibility: 'visible'
            }).show();

            if (settings.get('closeButton')) {
                $close.html(settings.get('close')).appendTo($content);
            } else {
                $close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
            }

            load();
        }
    }

    // Colorbox's markup needs to be added to the DOM prior to being called
    // so that the browser will go ahead and load the CSS background images.
    function appendHTML() {
        if (!$box) {
            init = false;
            $window = $(window);
            $box = $tag(div).attr({
                id: colorbox,
                'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
                role: 'dialog',
                tabindex: '-1'
            }).hide();
            $overlay = $tag(div, "Overlay").hide();
            $loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
            $wrap = $tag(div, "Wrapper");
            $content = $tag(div, "Content").append(
                $title = $tag(div, "Title"),
                $current = $tag(div, "Current"),
                $prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
                $next = $('<button type="button"/>').attr({id:prefix+'Next'}),
                $slideshow = $tag('button', "Slideshow"),
                $loadingOverlay
            );

            $close = $('<button type="button"/>').attr({id:prefix+'Close'});

            $wrap.append( // The 3x3 Grid that makes up Colorbox
                $tag(div).append(
                    $tag(div, "TopLeft"),
                    $topBorder = $tag(div, "TopCenter"),
                    $tag(div, "TopRight")
                ),
                $tag(div, false, 'clear:left').append(
                    $leftBorder = $tag(div, "MiddleLeft"),
                    $content,
                    $rightBorder = $tag(div, "MiddleRight")
                ),
                $tag(div, false, 'clear:left').append(
                    $tag(div, "BottomLeft"),
                    $bottomBorder = $tag(div, "BottomCenter"),
                    $tag(div, "BottomRight")
                )
            ).find('div div').css({'float': 'left'});

            $loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');

            $groupControls = $next.add($prev).add($current).add($slideshow);
        }
        if (document.body && !$box.parent().length) {
            $(document.body).append($overlay, $box.append($wrap, $loadingBay));
        }
    }

    // Add Colorbox's event bindings
    function addBindings() {
        function clickHandler(e) {
            // ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
            // See: http://jacklmoore.com/notes/click-events/
            if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                launch(this);
            }
        }

        if ($box) {
            if (!init) {
                init = true;

                // Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
                $next.click(function () {
                    publicMethod.next();
                });
                $prev.click(function () {
                    publicMethod.prev();
                });
                $close.click(function () {
                    publicMethod.close();
                });
                $overlay.click(function () {
                    if (settings.get('overlayClose')) {
                        publicMethod.close();
                    }
                });

                // Key Bindings
                $(document).bind('keydown.' + prefix, function (e) {
                    var key = e.keyCode;
                    if (open && settings.get('escKey') && key === 27) {
                        e.preventDefault();
                        publicMethod.close();
                    }
                    if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
                        if (key === 37) {
                            e.preventDefault();
                            $prev.click();
                        } else if (key === 39) {
                            e.preventDefault();
                            $next.click();
                        }
                    }
                });

                if ($.isFunction($.fn.on)) {
                    // For jQuery 1.7+
                    $(document).on('click.'+prefix, '.'+boxElement, clickHandler);
                } else {
                    // For jQuery 1.3.x -> 1.6.x
                    // This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
                    // This is not here for jQuery 1.9, it's here for legacy users.
                    $('.'+boxElement).live('click.'+prefix, clickHandler);
                }
            }
            return true;
        }
        return false;
    }

    // Don't do anything if Colorbox already exists.
    if ($[colorbox]) {
        return;
    }

    // Append the HTML when the DOM loads
    $(appendHTML);


    // ****************
    // PUBLIC FUNCTIONS
    // Usage format: $.colorbox.close();
    // Usage from within an iframe: parent.jQuery.colorbox.close();
    // ****************

    publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
        var settings;
        var $obj = this;

        options = options || {};

        if ($.isFunction($obj)) { // assume a call to $.colorbox
            $obj = $('<a/>');
            options.open = true;
        }

        if (!$obj[0]) { // colorbox being applied to empty collection
            return $obj;
        }

        appendHTML();

        if (addBindings()) {

            if (callback) {
                options.onComplete = callback;
            }

            $obj.each(function () {
                var old = $.data(this, colorbox) || {};
                $.data(this, colorbox, $.extend(old, options));
            }).addClass(boxElement);

            settings = new Settings($obj[0], options);

            if (settings.get('open')) {
                launch($obj[0]);
            }
        }

        return $obj;
    };

    publicMethod.position = function (speed, loadedCallback) {
        var
        css,
        top = 0,
        left = 0,
        offset = $box.offset(),
        scrollTop,
        scrollLeft;

        $window.unbind('resize.' + prefix);

        // remove the modal so that it doesn't influence the document width/height
        $box.css({top: -9e4, left: -9e4});

        scrollTop = $window.scrollTop();
        scrollLeft = $window.scrollLeft();

        if (settings.get('fixed')) {
            offset.top -= scrollTop;
            offset.left -= scrollLeft;
            $box.css({position: 'fixed'});
        } else {
            top = scrollTop;
            left = scrollLeft;
            $box.css({position: 'absolute'});
        }

        // keeps the top and left positions within the browser's viewport.
        if (settings.get('right') !== false) {
            left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
        } else if (settings.get('left') !== false) {
            left += setSize(settings.get('left'), 'x');
        } else {
            left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
        }

        if (settings.get('bottom') !== false) {
            top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
        } else if (settings.get('top') !== false) {
            top += setSize(settings.get('top'), 'y');
        } else {
            top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
        }

        $box.css({top: offset.top, left: offset.left, visibility:'visible'});

        // this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
        // but it has to be shrank down around the size of div#colorbox when it's done.  If not,
        // it can invoke an obscure IE bug when using iframes.
        $wrap[0].style.width = $wrap[0].style.height = "9999px";

        function modalDimensions() {
            $topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
            $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
        }

        css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

        // setting the speed to 0 if the content hasn't changed size or position
        if (speed) {
            var tempSpeed = 0;
            $.each(css, function(i){
                if (css[i] !== previousCSS[i]) {
                    tempSpeed = speed;
                    return;
                }
            });
            speed = tempSpeed;
        }

        previousCSS = css;

        if (!speed) {
            $box.css(css);
        }

        $box.dequeue().animate(css, {
            duration: speed || 0,
            complete: function () {
                modalDimensions();

                active = false;

                // shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
                $wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
                $wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";

                if (settings.get('reposition')) {
                    setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
                        $window.bind('resize.' + prefix, publicMethod.position);
                    }, 1);
                }

                if ($.isFunction(loadedCallback)) {
                    loadedCallback();
                }
            },
            step: modalDimensions
        });
    };

    publicMethod.resize = function (options) {
        var scrolltop;

        if (open) {
            options = options || {};

            if (options.width) {
                settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
            }

            if (options.innerWidth) {
                settings.w = setSize(options.innerWidth, 'x');
            }

            $loaded.css({width: settings.w});

            if (options.height) {
                settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
            }

            if (options.innerHeight) {
                settings.h = setSize(options.innerHeight, 'y');
            }

            if (!options.innerHeight && !options.height) {
                scrolltop = $loaded.scrollTop();
                $loaded.css({height: "auto"});
                settings.h = $loaded.height();
            }

            $loaded.css({height: settings.h});

            if(scrolltop) {
                $loaded.scrollTop(scrolltop);
            }

            publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
        }
    };

    publicMethod.prep = function (object) {
        if (!open) {
            return;
        }

        var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

        $loaded.remove();

        $loaded = $tag(div, 'LoadedContent').append(object);

        function getWidth() {
            settings.w = settings.w || $loaded.width();
            settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
            return settings.w;
        }
        function getHeight() {
            settings.h = settings.h || $loaded.height();
            settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
            return settings.h;
        }

        $loaded.hide()
        .appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
        .css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
        .css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
        .prependTo($content);

        $loadingBay.hide();

        // floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.

        $(photo).css({'float': 'none'});

        setClass(settings.get('className'));

        callback = function () {
            var total = $related.length,
                iframe,
                complete;

            if (!open) {
                return;
            }

            function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
                if ($.support.opacity === false) {
                    $box[0].style.removeAttribute('filter');
                }
            }

            complete = function () {
                clearTimeout(loadingTimer);
                $loadingOverlay.hide();
                trigger(event_complete);
                settings.get('onComplete');
            };


            $title.html(settings.get('title')).show();
            $loaded.show();

            if (total > 1) { // handle grouping
                if (typeof settings.get('current') === "string") {
                    $current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
                }

                $next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
                $prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));

                slideshow();

                // Preloads images within a rel group
                if (settings.get('preloading')) {
                    $.each([getIndex(-1), getIndex(1)], function(){
                        var img,
                            i = $related[this],
                            settings = new Settings(i, $.data(i, colorbox)),
                            src = settings.get('href');

                        if (src && isImage(settings, src)) {
                            src = retinaUrl(settings, src);
                            img = document.createElement('img');
                            img.src = src;
                        }
                    });
                }
            } else {
                $groupControls.hide();
            }

            if (settings.get('iframe')) {

                iframe = settings.get('createIframe');

                if (!settings.get('scrolling')) {
                    iframe.scrolling = "no";
                }

                $(iframe)
                    .attr({
                        src: settings.get('href'),
                        'class': prefix + 'Iframe'
                    })
                    .one('load', complete)
                    .appendTo($loaded);

                $events.one(event_purge, function () {
                    iframe.src = "//about:blank";
                });

                if (settings.get('fastIframe')) {
                    $(iframe).trigger('load');
                }
            } else {
                complete();
            }

            if (settings.get('transition') === 'fade') {
                $box.fadeTo(speed, 1, removeFilter);
            } else {
                removeFilter();
            }
        };

        if (settings.get('transition') === 'fade') {
            $box.fadeTo(speed, 0, function () {
                publicMethod.position(0, callback);
            });
        } else {
            publicMethod.position(speed, callback);
        }
    };

    function load () {
        var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;

        active = true;

        photo = false;

        trigger(event_purge);
        trigger(event_load);
        settings.get('onLoad');

        settings.h = settings.get('height') ?
                setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
                settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');

        settings.w = settings.get('width') ?
                setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
                settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');

        // Sets the minimum dimensions for use in image scaling
        settings.mw = settings.w;
        settings.mh = settings.h;

        // Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
        // If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
        if (settings.get('maxWidth')) {
            settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
            settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
        }
        if (settings.get('maxHeight')) {
            settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
            settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
        }

        href = settings.get('href');

        loadingTimer = setTimeout(function () {
            $loadingOverlay.show();
        }, 100);

        if (settings.get('inline')) {
            var $target = $(href);
            // Inserts an empty placeholder where inline content is being pulled from.
            // An event is bound to put inline content back when Colorbox closes or loads new content.
            $inline = $('<div>').hide().insertBefore($target);

            $events.one(event_purge, function () {
                $inline.replaceWith($target);
            });

            prep($target);
        } else if (settings.get('iframe')) {
            // IFrame element won't be added to the DOM until it is ready to be displayed,
            // to avoid problems with DOM-ready JS that might be trying to run in that iframe.
            prep(" ");
        } else if (settings.get('html')) {
            prep(settings.get('html'));
        } else if (isImage(settings, href)) {

            href = retinaUrl(settings, href);

            photo = settings.get('createImg');

            $(photo)
            .addClass(prefix + 'Photo')
            .bind('error',function () {
                prep($tag(div, 'Error').html(settings.get('imgError')));
            })
            .one('load', function () {
                if (request !== requests) {
                    return;
                }

                // A small pause because some browsers will occassionaly report a
                // img.width and img.height of zero immediately after the img.onload fires
                setTimeout(function(){
                    var percent;

                    if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
                        photo.height = photo.height / window.devicePixelRatio;
                        photo.width = photo.width / window.devicePixelRatio;
                    }

                    if (settings.get('scalePhotos')) {
                        setResize = function () {
                            photo.height -= photo.height * percent;
                            photo.width -= photo.width * percent;
                        };
                        if (settings.mw && photo.width > settings.mw) {
                            percent = (photo.width - settings.mw) / photo.width;
                            setResize();
                        }
                        if (settings.mh && photo.height > settings.mh) {
                            percent = (photo.height - settings.mh) / photo.height;
                            setResize();
                        }
                    }

                    if (settings.h) {
                        photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
                    }

                    if ($related[1] && (settings.get('loop') || $related[index + 1])) {
                        photo.style.cursor = 'pointer';
                        photo.onclick = function () {
                            publicMethod.next();
                        };
                    }

                    photo.style.width = photo.width + 'px';
                    photo.style.height = photo.height + 'px';
                    prep(photo);
                }, 1);
            });

            photo.src = href;

        } else if (href) {
            $loadingBay.load(href, settings.get('data'), function (data, status) {
                if (request === requests) {
                    prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
                }
            });
        }
    }

    // Navigates to the next page/image in a set.
    publicMethod.next = function () {
        if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
            index = getIndex(1);
            launch($related[index]);
        }
    };

    publicMethod.prev = function () {
        if (!active && $related[1] && (settings.get('loop') || index)) {
            index = getIndex(-1);
            launch($related[index]);
        }
    };

    // Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
    publicMethod.close = function () {
        if (open && !closing) {

            closing = true;
            open = false;
            trigger(event_cleanup);
            settings.get('onCleanup');
            $window.unbind('.' + prefix);
            $overlay.fadeTo(settings.get('fadeOut') || 0, 0);

            $box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
                $box.hide();
                $overlay.hide();
                trigger(event_purge);
                $loaded.remove();

                setTimeout(function () {
                    closing = false;
                    trigger(event_closed);
                    settings.get('onClosed');
                }, 1);
            });
        }
    };

    // Removes changes Colorbox made to the document, but does not remove the plugin.
    publicMethod.remove = function () {
        if (!$box) { return; }

        $box.stop();
        $[colorbox].close();
        $box.stop(false, true).remove();
        $overlay.remove();
        closing = false;
        $box = null;
        $('.' + boxElement)
            .removeData(colorbox)
            .removeClass(boxElement);

        $(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
    };

    // A method for fetching the current element Colorbox is referencing.
    // returns a jQuery object.
    publicMethod.element = function () {
        return $(settings.el);
    };

    publicMethod.settings = defaults;

}(jQuery, document, window));

/*
 * Justified Gallery - v3.5.4
 * http://miromannino.com/projects/justified-gallery/
 * Copyright (c) 2014 Miro Mannino
 * Licensed under the MIT license.
 */
(function($) {

  /* Events
    jg.complete : called when all the gallery has been created
    jg.resize : called when the gallery has been resized
  */

  $.fn.justifiedGallery = function (arg) {

    // Default options
    var defaults = {
      sizeRangeSuffixes : {
        'lt100': '',  // e.g. Flickr uses '_t'
        'lt240': '',  // e.g. Flickr uses '_m'
        'lt320': '',  // e.g. Flickr uses '_n'
        'lt500': '',  // e.g. Flickr uses ''
        'lt640': '',  // e.g. Flickr uses '_z'
        'lt1024': '', // e.g. Flickr uses '_b'
      },
      rowHeight : 120,
      maxRowHeight : 0, // negative value = no limits, 0 = 1.5 * rowHeight
      margins : 1,
      border: -1, // negative value = same as margins, 0 = disabled

      lastRow : 'nojustify', // or can be 'justify' or 'hide'
      justifyThreshold: 0.75, /* if row width / available space > 0.75 it will be always justified
                                  (i.e. lastRow setting is not considered) */
      fixedHeight : false,
      waitThumbnailsLoad : true,
      captions : true,
      cssAnimation: false,
      imagesAnimationDuration : 500, // ignored with css animations
      captionSettings : { // ignored with css animations
        animationDuration : 500,
        visibleOpacity : 0.7,
        nonVisibleOpacity : 0.0
      },
      rel : null, // rewrite the rel of each analyzed links
      target : null, // rewrite the target of all links
      extension : /\.[^.\\/]+$/,
      refreshTime : 100,
      randomize : false
    };

    function getSuffix(width, height, context) {
      var longestSide;
      longestSide = (width > height) ? width : height;
      if (longestSide <= 100) {
        return context.settings.sizeRangeSuffixes.lt100;
      } else if (longestSide <= 240) {
        return context.settings.sizeRangeSuffixes.lt240;
      } else if (longestSide <= 320) {
        return context.settings.sizeRangeSuffixes.lt320;
      } else if (longestSide <= 500) {
        return context.settings.sizeRangeSuffixes.lt500;
      } else if (longestSide <= 640) {
        return context.settings.sizeRangeSuffixes.lt640;
      } else {
        return context.settings.sizeRangeSuffixes.lt1024;
      }
    }

    function endsWith(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function removeSuffix(str, suffix) {
      return str.substring(0, str.length - suffix.length);
    }

    function getUsedSuffix(str, context) {
      var voidSuffix = false;
      for (var si in context.settings.sizeRangeSuffixes) {
        if (context.settings.sizeRangeSuffixes[si].length === 0) {
          voidSuffix = true;
          continue;
        }
        if (endsWith(str, context.settings.sizeRangeSuffixes[si])) {
          return context.settings.sizeRangeSuffixes[si];
        }
      }

      if (voidSuffix) return "";
      else throw 'unknown suffix for ' + str;
    }

    /* Given an image src, with the width and the height, returns the new image src with the
       best suffix to show the best quality thumbnail. */
    function newSrc(imageSrc, imgWidth, imgHeight, context) {
      var matchRes = imageSrc.match(context.settings.extension);
      var ext = (matchRes != null) ? matchRes[0] : '';
      var newImageSrc = imageSrc.replace(context.settings.extension, '');
      newImageSrc = removeSuffix(newImageSrc, getUsedSuffix(newImageSrc, context));
      newImageSrc += getSuffix(imgWidth, imgHeight, context) + ext;
      return newImageSrc;
    }

    function onEntryMouseEnterForCaption (ev) {
      var $caption = $(ev.currentTarget).find('.caption');
      if (ev.data.settings.cssAnimation) {
        $caption.addClass('caption-visible').removeClass('caption-hidden');
      } else {
        $caption.stop().fadeTo(ev.data.settings.captionSettings.animationDuration,
                               ev.data.settings.captionSettings.visibleOpacity);
      }
    }

    function onEntryMouseLeaveForCaption (ev) {
      var $caption = $(ev.currentTarget).find('.caption');
      if (ev.data.settings.cssAnimation) {
        $caption.removeClass('caption-visible').removeClass('caption-hidden');
      } else {
        $caption.stop().fadeTo(ev.data.settings.captionSettings.animationDuration,
                               ev.data.settings.captionSettings.nonVisibleOpacity);
      }
    }

    function showImg($entry, callback, context) {
      if (context.settings.cssAnimation) {
        $entry.addClass('entry-visible');
        callback();
      } else {
        $entry.stop().fadeTo(context.settings.imagesAnimationDuration, 1.0, callback);
      }
    }

    function hideImgImmediately($entry, context) {
      if (context.settings.cssAnimation) {
        $entry.removeClass('entry-visible');
      } else {
        $entry.stop().fadeTo(0, 0);
      }
    }

    function imgFromEntry($entry) {
      var $img = $entry.find('> img');
      if ($img.length === 0) $img = $entry.find('> a > img');
      return $img;
    }

    function displayEntry($entry, x, y, imgWidth, imgHeight, rowHeight, context) {
      var $image = imgFromEntry($entry);
      $image.css('width', imgWidth);
      $image.css('height', imgHeight);
      //if ($entry.get(0) === $image.parent().get(0)) { // this creates an error in link_around_img test
        $image.css('margin-left', - imgWidth / 2);
        $image.css('margin-top', - imgHeight / 2);
      //}
      $entry.width(imgWidth);
      $entry.height(rowHeight);
      $entry.css('top', y);
      $entry.css('left', x);

      //DEBUG// console.log('displayEntry (w: ' + $image.width() + ' h: ' + $image.height());

      // Image reloading for an high quality of thumbnails
      var imageSrc = $image.attr('src');
      var newImageSrc = newSrc(imageSrc, imgWidth, imgHeight, context);

      $image.one('error', function () {
        //DEBUG// console.log('revert the original image');
        $image.attr('src', $image.data('jg.originalSrc')); //revert to the original thumbnail, we got it.
      });

      function loadNewImage() {
        if (imageSrc !== newImageSrc) { //load the new image after the fadeIn
          $image.attr('src', newImageSrc);
        }
      }

      if ($image.data('jg.loaded') === 'skipped') {
        onImageEvent(imageSrc, function() {
          showImg($entry, loadNewImage, context);
          $image.data('jg.loaded', true);
        });
      } else {
        showImg($entry, loadNewImage, context);
      }

      // Captions ------------------------------
      var captionMouseEvents = $entry.data('jg.captionMouseEvents');
      if (context.settings.captions === true) {
        var $imgCaption = $entry.find('.caption');
        if ($imgCaption.length === 0) { // Create it if it doesn't exists
          var caption = $image.attr('alt');
          if (typeof caption === 'undefined') caption = $entry.attr('title');
          if (typeof caption !== 'undefined') { // Create only we found something
            $imgCaption = $('<div class="caption">' + caption + '</div>');
            $entry.append($imgCaption);
          }
        }

        // Create events (we check again the $imgCaption because it can be still inexistent)
        if ($imgCaption.length !== 0) {
          if (!context.settings.cssAnimation) {
            $imgCaption.stop().fadeTo(context.settings.imagesAnimationDuration,
                                      context.settings.captionSettings.nonVisibleOpacity);
          }
          if (typeof captionMouseEvents === 'undefined') {
            captionMouseEvents = {
              mouseenter: onEntryMouseEnterForCaption,
              mouseleave: onEntryMouseLeaveForCaption
            };
            $entry.on('mouseenter', undefined, context, captionMouseEvents.mouseenter);
            $entry.on('mouseleave', undefined, context, captionMouseEvents.mouseleave);
            $entry.data('jg.captionMouseEvents', captionMouseEvents);
          }
        }
      } else {
        if (typeof captionMouseEvents !== 'undefined') {
          $entry.off('mouseenter', undefined, context, captionMouseEvents.mouseenter);
          $entry.off('mouseleave', undefined, context, captionMouseEvents.mouseleave);
          $entry.removeData('jg.captionMouseEvents');
        }
      }

    }

    function prepareBuildingRow(context, isLastRow) {
      var settings = context.settings;
      var i, $entry, $image, imgAspectRatio, newImgW, newImgH, justify = true;
      var minHeight = 0;
      var availableWidth = context.galleryWidth - 2 * context.border - (
                            (context.buildingRow.entriesBuff.length - 1) * settings.margins);
      var rowHeight = availableWidth / context.buildingRow.aspectRatio;
      var justificable = context.buildingRow.width / availableWidth > settings.justifyThreshold;

      //Skip the last row if we can't justify it and the lastRow == 'hide'
      if (isLastRow && settings.lastRow === 'hide' && !justificable) {
        for (i = 0; i < context.buildingRow.entriesBuff.length; i++) {
          $entry = context.buildingRow.entriesBuff[i];
          if (settings.cssAnimation)
            $entry.removeClass('entry-visible');
          else
            $entry.stop().fadeTo(0, 0);
        }
        return -1;
      }

      // With lastRow = nojustify, justify if is justificable (the images will not become too big)
      if (isLastRow && !justificable && settings.lastRow === 'nojustify') justify = false;

      for (i = 0; i < context.buildingRow.entriesBuff.length; i++) {
        $image = imgFromEntry(context.buildingRow.entriesBuff[i]);
        imgAspectRatio = $image.data('jg.imgw') / $image.data('jg.imgh');

        if (justify) {
          newImgW = (i === context.buildingRow.entriesBuff.length - 1) ? availableWidth
                      : rowHeight * imgAspectRatio;
          newImgH = rowHeight;

          /* With fixedHeight the newImgH must be greater than rowHeight.
          In some cases here this is not satisfied (due to the justification).
          But we comment it, because is better to have a shorter but justified row instead
          to have a cropped image at the end. */
          /*if (settings.fixedHeight && newImgH < settings.rowHeight) {
            newImgW = settings.rowHeight * imgAspectRatio;
            newImgH = settings.rowHeight;
          }*/

        } else {
          newImgW = settings.rowHeight * imgAspectRatio;
          newImgH = settings.rowHeight;
        }

        availableWidth -= Math.round(newImgW);
        $image.data('jg.jimgw', Math.round(newImgW));
        $image.data('jg.jimgh', Math.ceil(newImgH));
        if (i === 0 || minHeight > newImgH) minHeight = newImgH;
      }

      if (settings.fixedHeight && minHeight > settings.rowHeight)
        minHeight = settings.rowHeight;

      return {minHeight: minHeight, justify: justify};
    }

    function rewind(context) {
      context.lastAnalyzedIndex = -1;
      context.buildingRow.entriesBuff = [];
      context.buildingRow.aspectRatio = 0;
      context.buildingRow.width = 0;
      context.offY = context.border;
    }

    function flushRow(context, isLastRow) {
      var settings = context.settings;
      var $entry, $image, minHeight, buildingRowRes, offX = context.border;

      //DEBUG// console.log('flush (isLastRow: ' + isLastRow + ')');

      buildingRowRes = prepareBuildingRow(context, isLastRow);
      minHeight = buildingRowRes.minHeight;
      if (isLastRow && settings.lastRow === 'hide' && minHeight === -1) {
        context.buildingRow.entriesBuff = [];
        context.buildingRow.aspectRatio = 0;
        context.buildingRow.width = 0;
        return;
      }

      if (settings.maxRowHeight > 0 && settings.maxRowHeight < minHeight)
        minHeight = settings.maxRowHeight;
      else if (settings.maxRowHeight === 0 && (1.5 * settings.rowHeight) < minHeight)
        minHeight = 1.5 * settings.rowHeight;

      for (var i = 0; i < context.buildingRow.entriesBuff.length; i++) {
        $entry = context.buildingRow.entriesBuff[i];
        $image = imgFromEntry($entry);
        displayEntry($entry, offX, context.offY, $image.data('jg.jimgw'),
                     $image.data('jg.jimgh'), minHeight, context);
        offX += $image.data('jg.jimgw') + settings.margins;
      }

      //Gallery Height
      context.$gallery.height(context.offY + minHeight + context.border +
        (context.spinner.active ? context.spinner.$el.innerHeight() : 0)
      );

      if (!isLastRow || (minHeight <= context.settings.rowHeight && buildingRowRes.justify)) {
        //Ready for a new row
        context.offY += minHeight + context.settings.margins;

        //DEBUG// console.log('minHeight: ' + minHeight + ' offY: ' + context.offY);

        context.buildingRow.entriesBuff = []; //clear the array creating a new one
        context.buildingRow.aspectRatio = 0;
        context.buildingRow.width = 0;
        context.$gallery.trigger('jg.rowflush');
      }
    }

    function checkWidth(context) {
      context.checkWidthIntervalId = setInterval(function () {
        var galleryWidth = parseInt(context.$gallery.width(), 10);
        if (context.galleryWidth !== galleryWidth) {
          //DEBUG// console.log("resize. old: " + context.galleryWidth + " new: " + galleryWidth);

          context.galleryWidth = galleryWidth;
          rewind(context);

          // Restart to analyze
          startImgAnalyzer(context, true);
        }
      }, context.settings.refreshTime);
    }

    function startLoadingSpinnerAnimation(spinnerContext) {
      clearInterval(spinnerContext.intervalId);
      spinnerContext.intervalId = setInterval(function () {
        if (spinnerContext.phase < spinnerContext.$points.length)
          spinnerContext.$points.eq(spinnerContext.phase).fadeTo(spinnerContext.timeslot, 1);
        else
          spinnerContext.$points.eq(spinnerContext.phase - spinnerContext.$points.length)
                        .fadeTo(spinnerContext.timeslot, 0);
        spinnerContext.phase = (spinnerContext.phase + 1) % (spinnerContext.$points.length * 2);
      }, spinnerContext.timeslot);
    }

    function stopLoadingSpinnerAnimation(spinnerContext) {
      clearInterval(spinnerContext.intervalId);
      spinnerContext.intervalId = null;
    }

    function stopImgAnalyzerStarter(context) {
      context.yield.flushed = 0;
      if (context.imgAnalyzerTimeout !== null) clearTimeout(context.imgAnalyzerTimeout);
    }

    function startImgAnalyzer(context, isForResize) {
      stopImgAnalyzerStarter(context);
      context.imgAnalyzerTimeout = setTimeout(function () {
        analyzeImages(context, isForResize);
      }, 0.001);
      analyzeImages(context, isForResize);
    }

    function analyzeImages(context, isForResize) {

      /* //DEBUG//
      var rnd = parseInt(Math.random() * 10000, 10);
      console.log('analyzeImages ' + rnd + ' start');
      console.log('images status: ');
      for (var i = 0; i < context.entries.length; i++) {
        var $entry = $(context.entries[i]);
        var $image = imgFromEntry($entry);
        console.log(i + ' (alt: ' + $image.attr('alt') + 'loaded: ' + $image.data('jg.loaded') + ')');
      }*/

      /* The first row */
      var settings = context.settings;
      var isLastRow;

      for (var i = context.lastAnalyzedIndex + 1; i < context.entries.length; i++) {
        var $entry = $(context.entries[i]);
        var $image = imgFromEntry($entry);

        if ($image.data('jg.loaded') === true || $image.data('jg.loaded') === 'skipped') {
          isLastRow = i >= context.entries.length - 1;

          var availableWidth = context.galleryWidth - 2 * context.border - (
                               (context.buildingRow.entriesBuff.length - 1) * settings.margins);
          var imgAspectRatio = $image.data('jg.imgw') / $image.data('jg.imgh');
          if (availableWidth / (context.buildingRow.aspectRatio + imgAspectRatio) < settings.rowHeight) {
            flushRow(context, isLastRow);
            if(++context.yield.flushed >= context.yield.every) {
              //DEBUG// console.log("yield");
              startImgAnalyzer(context, isForResize);
              return;
            }
          }

          context.buildingRow.entriesBuff.push($entry);
          context.buildingRow.aspectRatio += imgAspectRatio;
          context.buildingRow.width += imgAspectRatio * settings.rowHeight;
          context.lastAnalyzedIndex = i;

        } else if ($image.data('jg.loaded') !== 'error') {
          return;
        }
      }

      // Last row flush (the row is not full)
      if (context.buildingRow.entriesBuff.length > 0) flushRow(context, true);

      if (context.spinner.active) {
        context.spinner.active = false;
        context.$gallery.height(context.$gallery.height() - context.spinner.$el.innerHeight());
        context.spinner.$el.detach();
        stopLoadingSpinnerAnimation(context.spinner);
      }

      /* Stop, if there is, the timeout to start the analyzeImages.
          This is because an image can be set loaded, and the timeout can be set,
          but this image can be analyzed yet.
      */
      stopImgAnalyzerStarter(context);

      //On complete callback
      if (!isForResize)
        context.$gallery.trigger('jg.complete');
      else
        context.$gallery.trigger('jg.resize');

      //DEBUG// console.log('analyzeImages ' + rnd +  ' end');
    }

    function checkSettings (context) {
      var settings = context.settings;

      function checkSuffixesRange(range) {
        if (typeof settings.sizeRangeSuffixes[range] !== 'string')
          throw 'sizeRangeSuffixes.' + range + ' must be a string';
      }

      function checkOrConvertNumber(parent, settingName) {
        if (typeof parent[settingName] === 'string') {
          parent[settingName] = parseFloat(parent[settingName], 10);
          if (isNaN(parent[settingName])) throw 'invalid number for ' + settingName;
        } else if (typeof parent[settingName] === 'number') {
          if (isNaN(parent[settingName])) throw 'invalid number for ' + settingName;
        } else {
          throw settingName + ' must be a number';
        }
      }

      if (typeof settings.sizeRangeSuffixes !== 'object')
        throw 'sizeRangeSuffixes must be defined and must be an object';

      checkSuffixesRange('lt100');
      checkSuffixesRange('lt240');
      checkSuffixesRange('lt320');
      checkSuffixesRange('lt500');
      checkSuffixesRange('lt640');
      checkSuffixesRange('lt1024');

      checkOrConvertNumber(settings, 'rowHeight');
      checkOrConvertNumber(settings, 'maxRowHeight');

      if (settings.maxRowHeight > 0 &&
          settings.maxRowHeight < settings.rowHeight) {
        settings.maxRowHeight = settings.rowHeight;
      }

      checkOrConvertNumber(settings, 'margins');
      checkOrConvertNumber(settings, 'border');

      if (settings.lastRow !== 'nojustify' &&
          settings.lastRow !== 'justify' &&
          settings.lastRow !== 'hide') {
        throw 'lastRow must be "nojustify", "justify" or "hide"';
      }

      checkOrConvertNumber(settings, 'justifyThreshold');
      if (settings.justifyThreshold < 0 || settings.justifyThreshold > 1)
        throw 'justifyThreshold must be in the interval [0,1]';
      if (typeof settings.cssAnimation !== 'boolean') {
        throw 'cssAnimation must be a boolean';
      }

      checkOrConvertNumber(settings.captionSettings, 'animationDuration');
      checkOrConvertNumber(settings, 'imagesAnimationDuration');

      checkOrConvertNumber(settings.captionSettings, 'visibleOpacity');
      if (settings.captionSettings.visibleOpacity < 0 || settings.captionSettings.visibleOpacity > 1)
        throw 'captionSettings.visibleOpacity must be in the interval [0, 1]';

      checkOrConvertNumber(settings.captionSettings, 'nonVisibleOpacity');
      if (settings.captionSettings.visibleOpacity < 0 || settings.captionSettings.visibleOpacity > 1)
        throw 'captionSettings.nonVisibleOpacity must be in the interval [0, 1]';

      if (typeof settings.fixedHeight !== 'boolean') {
        throw 'fixedHeight must be a boolean';
      }

      if (typeof settings.captions !== 'boolean') {
        throw 'captions must be a boolean';
      }

      checkOrConvertNumber(settings, 'refreshTime');

      if (typeof settings.randomize !== 'boolean') {
        throw 'randomize must be a boolean';
      }

    }

    function onImageEvent(imageSrc, onLoad, onError) {
      if (!onLoad && !onError) {
        return;
      }
      /* Check if the image is loaded or not using another image object.
       We cannot use the 'complete' image property, because some browsers,
       with a 404 set complete = true */
      var memImage = new Image();
      var $memImage = $(memImage);
      if (onLoad) {
        $memImage.one('load', function () {
          $memImage.off('load error');
          onLoad(memImage);
        });
      }
      if (onError) {
        $memImage.one('error', function() {
          $memImage.off('load error');
          onError(memImage);
        });
      }
      memImage.src = imageSrc;
    }

    return this.each(function (index, gallery) {

      var $gallery = $(gallery);
      $gallery.addClass('justified-gallery');

      var context = $gallery.data('jg.context');
      if (typeof context === 'undefined') {

        if (typeof arg !== 'undefined' && arg !== null && typeof arg !== 'object')
          throw 'The argument must be an object';

        // Spinner init
        var $spinner = $('<div class="spinner"><span></span><span></span><span></span></div>');
        var extendedSettings = $.extend({}, defaults, arg);

        var border = extendedSettings.border >= 0 ? extendedSettings.border : extendedSettings.margins;

        //Context init
        context = {
          settings : extendedSettings,
          imgAnalyzerTimeout : null,
          entries : null,
          buildingRow : {
            entriesBuff : [],
            width : 0,
            aspectRatio : 0
          },
          lastAnalyzedIndex : -1,
          yield : {
            every : 2, /* do a flush every context.yield.every flushes (
                  * must be greater than 1, else the analyzeImages will loop */
            flushed : 0 //flushed rows without a yield
          },
          border : border,
          offY : border,
          spinner : {
            active : false,
            phase : 0,
            timeslot : 150,
            $el : $spinner,
            $points : $spinner.find('span'),
            intervalId : null
          },
          checkWidthIntervalId : null,
          galleryWidth :  $gallery.width(),
          $gallery : $gallery
        };

        $gallery.data('jg.context', context);

      } else if (arg === 'norewind') {
        /* Hide the image of the buildingRow to prevent strange effects when the row will be
           re-justified again */
        for (var i = 0; i < context.buildingRow.entriesBuff.length; i++) {
          hideImgImmediately(context.buildingRow.entriesBuff[i], context);
        }
        // In this case we don't rewind, and analyze all the images
      } else {
        context.settings = $.extend({}, context.settings, arg);
        context.border = context.settings.border >= 0 ? context.settings.border : context.settings.margins;
        rewind(context);
      }

      checkSettings(context);

      context.entries = $gallery.find('> a, > div:not(.spinner)').toArray();
      if (context.entries.length === 0) return;

      // Randomize
      if (context.settings.randomize) {
        context.entries.sort(function () { return Math.random() * 2 - 1; });
        $.each(context.entries, function () {
          $(this).appendTo($gallery);
        });
      }

      var imagesToLoad = false;
      var skippedImages = false;
      $.each(context.entries, function (index, entry) {
        var $entry = $(entry);
        var $image = imgFromEntry($entry);

        $entry.addClass('jg-entry');

        if ($image.data('jg.loaded') !== true && $image.data('jg.loaded') !== 'skipped') {

          // Link Rel global overwrite
          if (context.settings.rel !== null) $entry.attr('rel', context.settings.rel);

          // Link Target global overwrite
          if (context.settings.target !== null) $entry.attr('target', context.settings.target);

          // Image src
          var imageSrc = (typeof $image.data('safe-src') !== 'undefined') ?
                            $image.data('safe-src') : $image.attr('src');
          $image.data('jg.originalSrc', imageSrc);
          $image.attr('src', imageSrc);

          var width = parseInt($image.attr('width'), 10);
          var height = parseInt($image.attr('height'), 10);
          if(context.settings.waitThumbnailsLoad !== true && !isNaN(width) && !isNaN(height)) {
            $image.data('jg.imgw', width);
            $image.data('jg.imgh', height);
            $image.data('jg.loaded', 'skipped');
            skippedImages = true;
            startImgAnalyzer(context, false);
            return true;
          }

          $image.data('jg.loaded', false);
          imagesToLoad = true;

          // Spinner start
          if (context.spinner.active === false) {
            context.spinner.active = true;
            $gallery.append(context.spinner.$el);
            $gallery.height(context.offY + context.spinner.$el.innerHeight());
            startLoadingSpinnerAnimation(context.spinner);
          }

          onImageEvent(imageSrc, function imgLoaded (loadImg) {
            //DEBUG// console.log('img load (alt: ' + $image.attr('alt') + ')');
            $image.data('jg.imgw', loadImg.width);
            $image.data('jg.imgh', loadImg.height);
            $image.data('jg.loaded', true);
            startImgAnalyzer(context, false);
          }, function imgLoadError () {
            //DEBUG// console.log('img error (alt: ' + $image.attr('alt') + ')');
            $image.data('jg.loaded', 'error');
            startImgAnalyzer(context, false);
          });

        }

      });

      if (!imagesToLoad && !skippedImages) startImgAnalyzer(context, false);
      checkWidth(context);
    });

  };

}(jQuery));

// header link functionality
$(function() {
    var gallery = $('.gallery p')
    gallery.find('img').each(function(){
        var el = $(this);
        el.wrap(function() {
            return "<a href='" + el.attr('src') + "'></a>";
        }).parent('a')
        .css({'cursor': 'default'})
        .click(function(e){
            console.log($(this));
            e.preventDefault();
            return false;
        });
    });
    // gallery.find('a')

    gallery.justifiedGallery({
        'rowHeight': 150
        , 'captions': false
        , 'lastRow': 'justify'
        , 'margins' : 15
        , 'maxRowHeight': -1
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth : '80%',
            maxHeight : '80%',
            opacity : 0.8,
            transition : 'elastic',
            current : '',
            rel:'group1'
        });
    });

    $('.page-single article').find("h2, h3, h4, h5, h6").each(function(i, el) {
        var $el, icon, id;
        $el = $(el);
        if($el.attr('id')){
            id = $el.attr('id');
        } else {
            id = $el.parent().attr('id');
        }
        if (id) {
          return $el.append($("<a />").addClass("header-link icon-link").attr("href", "#" + id).html(""));
        }
    });
});
