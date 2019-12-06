$(function(){
    // 导航按钮点击
    $(".nav-btn").click(function(){
        $('.mob-nav').addClass('active')
    });
    $(".close-btn").click(function(){
        $('.mob-nav').removeClass('active')
    });

    $(".search-btn").click(function(){
        $(".search").slideToggle();
    });

    // 首页banner
    if($('.mob-banner').length != 0) {
        $(".mob-banner").slick({
            dots: true,
            arrows: false
        })
    };

    //  搜索value值隐藏
    $("#keyword").focus(function () {
        var _val = $(this).val();
        if(_val === '请输入搜索关键词') {
            $(this).val('');
        }
    });

    // 搜索框判断
    $("input[name='wd']").each(function () {
        var _plac = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder','');
        });
        $(this).blur(function () {
            $(this).attr('placeholder', _plac);
        });
    });

    $('input[type="submit"]').click(function () {
        var _val = $(this).siblings("#keyword").val();
        if(_val === '' || _val ==='请输入搜素关键词') {
            alert('请输入搜素关键词！');
            $("#keyword").focus();
            return false;
        }
    });

    // 内页二级分类效果
    $(".first-sort .first-a").click(function () {
        var _box = $(this).siblings('.sub-sort');
        if(_box.length != 0) {
            if(_box.is(":visible")) {
                _box.slideUp();
            }else{
                _box.slideDown();
            }
            return false;
        }
    });
    $(".first-sort .sub-a").click(function () {
        var _boxs = $(this).siblings('.three-sort');
        if(_boxs.length != 0) {
            if(_boxs.is(":visible")) {
                _boxs.slideUp();
            }else{
                _boxs.slideDown();
            }
            return false;
        }
    });

    // 内页侧边导航点击出现特效
    $(".open-btn").click(function () {
        $(".page-sort").addClass('open');
    });
    $(".page-sort-btn").click(function () {
        $(".page-sort").removeClass('open');
    });

    // 详细页分页点击效果
    $(".paging_num > a").click(function(){
        var index= $(this).index();
        location.hash = index+1;
        var hash = location.hash;
        $(this).parent().siblings('.total').find('.paging').eq(hash.slice(1)-1).css("display","block").siblings('.paging').css("display","none");
        $(this).addClass("paging_hover").siblings().removeClass("paging_hover");
    });

    $(".footer a[href='"+window.location.href+"']").parents("li").addClass('active')

});