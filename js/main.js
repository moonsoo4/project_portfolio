function followCursor() {
    const mousePos = {
        x: 0,
        y: 0
    };

    $(window).on("mousemove", function(event){
        // console.log(event);
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;

        $(".followCursor").css({
            left: mousePos.x,
            top: mousePos.y
        })
    });

};

followCursor();



const $aniTitle = $("section .aniTitle");
const $aniItems = $("section .aniItem");
const $aniLeft = $("section .aniLeft");
const $aniRight = $("section .aniRight");


console.log($aniTitle);
// const $titleH3 = $("section h3");
// const $titleH4 = $("section h4");

// console.log($titleH4);

// const $important = $(".important").find("li");
// console.log($important);

// const $concept = $("section").find(".conceptArea div");

const $textArea = $(".selfIntroPage").find(".introTxt")

let scrollH = $(window).scrollTop();
let totalH = $("body").innerHeight();
let winH = $(window).innerHeight();


function scrollAni() {
    for (let i = 0; i < $aniTitle.length; i++) {
        if (scrollH + winH > $aniTitle.eq(i).offset().top) {
            $aniTitle.eq(i).addClass("on");
        } else {
            $aniTitle.eq(i).removeClass("on");
        }
    }

    
    for (let i = 0; i < $aniItems.length; i++) {
        if (scrollH + winH > $aniItems.eq(i).offset().top) {
            $aniItems.eq(i).addClass("on");
        } else {
            $aniItems.eq(i).removeClass("on");
        }
    }


    for( let i = 0; i < $aniLeft.length; i++ ) {
        if ( scrollH + winH > $aniLeft.eq(i).offset().top ) {
            $aniLeft.eq(i).addClass("on");
        } else {
            $aniLeft.eq(i).removeClass("on");
        }
    }

    for ( let i = 0; i < $aniRight.length; i++ ){
        if ( scrollH + winH > $aniRight.eq(i).offset().top ){
            $aniRight.eq(i).addClass("on");
        } else {
            $aniRight.eq(i).removeClass("on");
        }
    }

}






// textArea는 한 부분이라 굳이 eq를 쓸 필요는 없을거 같은데..
$(window).on("scroll", function() {
    scrollH = $(window).scrollTop();
    totalH = $("body").innerHeight();
 
    scrollAni();
});

$(window).on("resize", function() {
    scrollH = $(window).scrollTop();
    totalH = $("body").innerHeight();
    winH = $(window).innerheight();

    scrollAni();
});

scrollAni();
