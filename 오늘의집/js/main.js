$(function(){
    $(".gnb .menu > ul > li").mouseover(function(){
        $(".gnb .menu > ul > li > ul").stop().fadeIn(300);
        $("header").addClass("on");
    });
    
    $(".gnb .menu > ul > li").mouseout(function(){
        $(".gnb .menu > ul > li > ul").stop().fadeOut(300);
        $("header").removeClass("on");
    });
});





$(".bestArea #bestSlider").slick({
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (".best .directArea .prevBtn"),
    nextArrow: (".best .directArea .nextBtn")
})

$("#recommendSlider").slick({
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (".userRecommend .directArea .prevBtn"),
    nextArrow: (".userRecommend .directArea .nextBtn")
})

$("#categorySlider").slick({
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (".category .directArea .prevBtn"),
    nextArrow: (".category .directArea .nextBtn")
})


function changeImage(number) {
    if (number === 0){
        $(".accordionImg").html(`<img src="images/review/1.png">`);
    } else if (number === 1){
        $(".accordionImg").html(`<img src="images/review/2.png">`);
    } else if (number === 2) {
        $(".accordionImg").html(`<img src="images/review/3.png">`);
    } else {
        $(".accordionImg").html(`<img src="images/review/4.png">`);
    }
}

function showList(target) {
    target.find(".desc").slideToggle();
    target.siblings().find(".desc").slideUp();
    target.find(".title").toggleClass("active");
    target.siblings().find(".title").removeClass("active");
}

$(".accordionList li .title").on("click", function(){
    const $li = $(this).closest("li");
    const index = $li.index();
    showList($li);
    changeImage(index);
});