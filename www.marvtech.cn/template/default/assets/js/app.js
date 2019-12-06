$(function () {
    $(".xymob-menu-jt").click(function () {
            var i = $(this).siblings(".xymob-sub-menu"),
                e = $(this).parents("li").siblings("li").find(".xymob-sub-menu"),
                n = $(this).parents("li").siblings("li").find(".xymob-menu-jt");
            i.is(":visible") ? ($(this).removeClass("clicked"), i.slideUp()) : ($(this).addClass("clicked"), i.slideDown(), n.removeClass("clicked"), e.slideUp())
        }), $(".demo-menu li").eq(0).addClass("active"), $(".demo-menu li a").each(function () {
            var i = $(this).attr("href"); - 1 !== window.location.href.indexOf(i) && "/" !== i && $(this).parents("li").addClass("active").siblings().removeClass("active")
        }), $.clickToggle(".xymob-navbtn", ".xymob-menu"), $(".xymob-search-btn").add(".xymob-search-close-btn").click(function () {
            $(".xymob-search").toggleClass("clicked")
        }), $(window).scrollTop() > 30 && $(".xy-head").addClass("scroll"), $(window).scroll(function () {
            $(this).scrollTop() > 30 ? $(".xy-head").addClass("scroll") : $(".xy-head").removeClass("scroll")
        }), $.backTop(".xymob-page-backtop", 300), $("input[name='wd']").each(function () {
            var i = $(this).attr("placeholder");
            $(this).focus(function () {
                $(this).attr("placeholder", "")
            }), $(this).blur(function () {
                $(this).attr("placeholder", i)
            })
        }), $('input[type="submit"]').click(function () {
            var i = $(this).siblings("#keyword").val();
            if ("" === i || "请输入搜素关键词" === i) return alert("请输入搜素关键词！"), $("#keyword").focus(), !1
        }), $(".first-nav-btn").click(function () {
            var i = $(this).siblings(".xypg-left-subnav"),
                e = $(this).parents("li"),
                n = $(this).parents("li").siblings("li"),
                s = $(this).parents("li").siblings("li").find(".xypg-left-subnav"),
                a = $(this).parents("li").siblings("li").find(".first-nav-btn");
            if (0 == i.find("li").length) return !1;
            i.is(":visible") ? (i.slideUp(), $(this).removeClass("clicked"), e.removeClass("clicked")) : (i.slideDown(), e.addClass("clicked"), $(this).addClass("clicked"), s.slideUp(), a.removeClass("clicked"), n.removeClass("clicked"))
        }), $(".xymob-page-navbtn").click(function () {
            $(".xymob-menu-click").addClass("click"), $("html,body").addClass("no-scroll")
        }), $(".xymob-left-close-btn").click(function () {
            $(".xymob-menu-click").removeClass("click"), $("html,body").removeClass("no-scroll")
        }), 0 != $(".relate-product-slick").length && $(".relate-product-slick").owlCarousel({
            loop: !0,
            margin: 10,
            dots: !1,
            nav: 0,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 4
                }
            }
        }), $(".paging_num > a").click(function () {
            var i = $(this).index();
            location.hash = i + 1;
            var e = location.hash;
            $(this).parent().siblings(".total").find(".paging").eq(e.slice(1) - 1).css("display", "block").siblings(".paging").css("display", "none"), $(this).addClass("paging_hover").siblings().removeClass("paging_hover")
        }), $.clickToggle(".file-down-title", ".file-down-list"), $(".xypg-left-nav li a[href='" + window.location.href + "']").closest("li").addClass("clicked"), $(".xypg-left-threenav .clicked").parents(".xypg-left-subnav").show(), $(".xypg-left-threenav .clicked").parents(".xypg-left-threenav").show(), $(".xypg-left-subnav .clicked").parents(".xypg-left-subnav").show(),
        function () {
            return "placeholder" in document.createElement("input")
        }() || ($("[placeholder]").each(function () {
            var i = $(this);
            i.wrapAll('<div class="input-box"></div>');
            var e = i.css("padding-left");
            i.parent().append('<span class="placeholder" data-type="placeholder" style="left: ' + e + '">' + i.attr("placeholder") + "</span>"), "" != i.val() ? i.parent().find("span.placeholder").hide() : i.parent().find("span.placeholder").show()
        }).on("focus", function () {
            $(this).parent().find("span.placeholder").hide()
        }).on("blur", function () {
            var i = $(this);
            "" != i.val() ? i.parent().find("span.placeholder").hide() : i.parent().find("span.placeholder").show()
        }), $("span.placeholder").on("click", function () {
            $(this).hide(), $(this).siblings("[placeholder]").trigger("click"), $(this).siblings("[placeholder]").trigger("focus")
        }), $("input[name='checkcode']").css("width", "100%").parents(".input-box").css("display", "inline-block"));
    var i, e;
    i = navigator.userAgent.indexOf("MSIE") >= 0 ? "IE" : navigator.userAgent.indexOf("Firefox") >= 0 ? "FireFox" : navigator.userAgent.indexOf("Opera") >= 0 ? "Opera" : navigator.userAgent.indexOf("Chrome") >= 0 ? "Chrome" : "other", e = "other";
    var n = navigator.userAgent,
        s = "Win32" == navigator.platform || "Windows" == navigator.platform,
        a = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
    (a && (e = "Mac"), "X11" == navigator.platform && !s && !a && (e = "Unix"), String(navigator.platform).indexOf("Linux") > -1 && (e = "Linux"), s) && ((n.indexOf("Windows NT 5.0") > -1 || n.indexOf("Windows 2000") > -1) && (e = "Win2000"), (n.indexOf("Windows NT 5.1") > -1 || n.indexOf("Windows XP") > -1) && (e = "WinXP"), (n.indexOf("Windows NT 5.2") > -1 || n.indexOf("Windows 2003") > -1) && (e = "Win2003"), (n.indexOf("Windows NT 6.0") > -1 || n.indexOf("Windows Vista") > -1) && (e = "WinVista"), (n.indexOf("Windows NT 6.1") > -1 || n.indexOf("Windows 7") > -1) && (e = "Win7"));
    var l;
    l = new XMLHttpRequest, l.open("POST", url + "data/include/visitor.php", !0), l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.send("get=" + location.href + "&browser=" + i + "&os=" + e)
});