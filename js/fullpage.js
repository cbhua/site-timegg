$(function(){
    $('#downbox').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ebebeb'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        loopBottom:true,
        'navigation': true,
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
});
