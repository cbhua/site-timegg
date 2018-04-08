$(function(){
    $('#downbox').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ebebeb'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        loopBottom:true,
        'navigation': true,

        afterLoad: function (anchorLink, index) {
            if(index == 3){
                $('.section3').find('.graduation3').delay(300).animate({
                    opacity:0
                }, 5000, 'easeOutExpo');
            } // Anime of page3
        },

        onLeave: function(index, direction) {
            if(index == 3){
                $('.section3').find('.graduation3').delay(400).animate({
                    opacity:1
                }, 0, 'easeOutExpo');
            } // Anime of page3
        }
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
});
