$(function () {

    //下拉选择选项
    var btn = $("#btn");
    var nav = $("#nav");
    btn.bind('click', function () {
        //alert('我被电击了！');
        var this_ = $(this);
        if (this_.is('.btnV')) {
            this_.addClass("btnS").removeClass("btnV");
            nav.slideDown(500, function () {
                //点击ul内的li关闭ul，同时btn的文本内容替换为点击的文本
                var liList = nav.find("li");
                liList.click(function () {
                    var thiss = $(this);
                    //console.log(thiss.html());
                    var liText = thiss.text();
                    btn.text(liText).addClass("btnV").removeClass("btnS");
                    nav.slideUp(500);
                });
            });
        } else {
            this_.addClass("btnV").removeClass("btnS");
            nav.slideUp(500);
        }
    });


    //点击右滑出菜单
    function fromeRight(){
        var allMain = $("#allMain");
        var listMenuV = $("#listMenuV");
        var rightMenu = $("#rightMenu");
        var foot = $("footer");
        listMenuV.bind("click", function () {
            var this_ = $(this);
            var rightLi = rightMenu.find("li");
            //console.log(rightLi);
            if (this_.is(".listMenuV")) {
                this_.addClass("listMenuS").removeClass("listMenuV");
                //右侧菜单滑出
                hideShow(true);
                //点击列表关闭菜单
                rightLi.click(function () {
                    hideShow(false);
                });
            } else {
                hideShow(false);
            }
        });
        //显示隐藏右侧菜单
        function hideShow(shsl) {
            if (shsl) {
                rightMenu.show(0, function () {
                    allMain.animate({ left: "-69%" }, 300);
                    rightMenu.animate({ left: "31%", }, 300);
                    $("window").scrollTop(0);
                    $("body").eq(0).css("overflow", "hidden");
                    $("body").bind("touchmove", function (event) {
                        event.preventDefault();
                    },false);
                });
                foot.animate({ opacity: "0" }, 300);
            } else {
                listMenuV.addClass("listMenuV").removeClass("listMenuS");
                allMain.animate({ left: "0%" }, 300);
                rightMenu.animate({ left: "100%" }, 300);
                rightMenu.hide(300);
                foot.animate({ opacity: "1" }, 300);
                $("body").unbind("touchmove");
                $("body").eq(0).css("overflow", "auto");
            }
        }
    }
    fromeRight();
    
    
});


