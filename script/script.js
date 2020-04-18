
let rootElem = $('.root');

let width =rootElem.width();
let height =rootElem.height();

$('.screen').width(width);
$('.screen').height(height);

$('.screen .slides li').width(width);
$('.screen .slides li').height(height);

let slideCnt = $('.screen .slides li').length;
$('.screen .slides').width(width*slideCnt);

let x = 0;
const SPEED =500;

$('.btnRight').on('click', function () {
    if (x === slideCnt-1){
        return
    }
    $('.screen .slides').animate({'left': `-${++x*width}px`
    }, SPEED);
    $('.circle').removeClass('active');
    $('.circle').eq(x).addClass('active');
});

$('.btnLeft').on('click', function () {
    if (x === 0){
        return
    }
    $('.screen .slides').animate({'left': `-${--x*width}px`,
    }, SPEED);
    $('.circle').removeClass('active');
    $('.circle').eq(x).addClass('active');
});

$('.circle').on('click', function () {
    let cur = $(this);
    let index = $('.circle').index(cur);
    x = index;
    $('.circle').removeClass('active');
    $(this).addClass('active');
    $('.screen .slides').animate({'left': `-${x*width}px`,
    }, SPEED);
});
