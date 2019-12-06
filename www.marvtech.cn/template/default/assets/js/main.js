//banner1 - 多图
function bb1(){
     var nav_num = '';
     var obj_li = $(".bb li");
     var count  = obj_li.length;
     obj_li.first().css("display","block");
     obj_li.each(function(){
         var index = $(this).index() + 1;
         nav_num += '<li><a href="javascript:void(0)">' + index + '</a></li>';
     });
    $(".banner").append('<ul class="num">' + nav_num + '</ul>');
    $(".num li").first().addClass("num_hover");
    $(".num li").hover(function(){
        sw = $(".num li").index(this);
        myShow(sw);
    });
    function myShow(i){
        $(".num li").eq(i).addClass("num_hover").siblings().removeClass("num_hover");
        obj_li.eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
    }
    var myTime = 0;
    //滑入停止动画，滑出开始动画
    $(".bb").hover(function(){
        if(myTime){
           clearInterval(myTime);
        }
    },function(){
        myTime = setInterval(function(){
        myShow(sw);
        sw++;
        if(sw == count){
            sw=0;
        }
        } , 3000);
    });
    //自动开始
    var sw = 0;
    myTime = setInterval(function(){
       myShow(sw);
       sw++;
       if(sw == count){
           sw=0;
       }
    } , 2000);
}
//滚动
function scroll(){
    //产品滚动
    var speed = 30; //数字越大速度越慢
    var tab = document.getElementById("demo");
    var tab1 = document.getElementById("demo1");
    var tab2 = document.getElementById("demo2");
    var liwidth=tab1.getElementsByTagName("li");
    var liwidths=liwidth[0].offsetWidth;
    var length=$("#demo1 li").length;
    var mleft=parseInt($("#demo1 li:eq(0)").css("marginLeft"));
    var mright=parseInt($("#demo1 li:eq(0)").css("marginRight"));
    var totalwidth=(liwidths+mleft+mright)*length*2+300;
    $("#indemo").width(totalwidth);
    tab2.innerHTML = tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth - tab.scrollLeft <= 0)
            tab.scrollLeft -= tab1.offsetWidth;
        else{
            tab.scrollLeft++;
        }
    }
    var MyMar = setInterval(Marquee,speed);

    tab.onmouseover = function(){
        clearInterval(MyMar);
    };
    tab.onmouseout = function(){
        MyMar = setInterval(Marquee,speed);
    };
}

//滚动
function scroll2(){
    //产品滚动
    var speed = 30; //数字越大速度越慢
    var tab = document.getElementById("m_demo");
    var tab1 = document.getElementById("m_demo1");
    var tab2 = document.getElementById("m_demo2");
    var liwidth=tab1.getElementsByTagName("li");
    var liwidths=liwidth[0].offsetWidth;
    var length=$("#m_demo1 li").length;
    var mleft=parseInt($("#m_demo1 li:eq(0)").css("marginLeft"));
    var mright=parseInt($("#m_demo1 li:eq(0)").css("marginRight"));
    var totalwidth=(liwidths+mleft+mright)*length*2+300;
    $("#m_indemo").width(totalwidth);
    tab2.innerHTML = tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth - tab.scrollLeft <= 0)
            tab.scrollLeft -= tab1.offsetWidth;
        else{
            tab.scrollLeft++;
        }
    }
    var MyMar = setInterval(Marquee,speed);

    tab.onmouseover = function(){
        clearInterval(MyMar);
    };
    tab.onmouseout = function(){
        MyMar = setInterval(Marquee,speed);
    };
}
