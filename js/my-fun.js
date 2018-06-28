/*Carousel */
$('.Carousel .item').each(function(){
var next = $(this).next();
if (!next.length) {
next = $(this).siblings(':first');}
next.children(':first-child').clone().appendTo($(this));
if (next.next().length>0) {
next.next().children(':first-child').clone().appendTo($(this));}
else {
$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
}
},0.5);
//logo tang dan
var a = 1;
var b = a === 0 ? 1 : a;

$('#lines2').animateNumber(
    {
        number: 100,
    },
    1000
)
$('#lines1').animateNumber(
    {
        number: 300,
    },
    1000
)
$('#lines3').animateNumber(
    {
        number: 92,
    },
    1000
)
$('#lines4').animateNumber(
    {
        number: 90,
    },
    1000
)
//video
$('.video2').click(function () {
    $('.video-a').css('display','none');
    $('.video-id').css('display','block');
})
//
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
