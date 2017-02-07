/**
 * Created by 风可削 on 2016/10/7.
 */
$(function(){
    //scroll news
    var scrnews=$(".cont_banner_slide");
    //获取序号元素
    var liNum=$(".slider-item");
    console.log(liNum)
    var newst=setInterval(scro,3500);
    scrnews.hover(function(){
        clearInterval(newst);

    },function(){
        newst=setInterval(scro,3500);
    })
    //点击右方向按钮
    $('.btn_lr_slide_left').bind('click',function(){

        //将第一张图片切换到后面
        scrnews.children("img:first").appendTo(scrnews);
    });
    //点击左方向按钮
    $('.btn_lr_slide_right').bind('click',function(){
        clearInterval(newst);
        //将第一张图片切换到前面
        scrnews.children("img:last").prependTo(scrnews);
    });

    var i=0;
    function scro(){
        scrnews.animate({left:-230},1500,function(){
            $(this).children("img:first").appendTo(this);

        })
        //序号变化
        // liNum.removeClass('active2');
        // liNum.eq(i).addClass('active2');
        // i++;
        // if(i>3){
        // 	i=0;
        //}
    }
})