var crsr = document.querySelector('#cursor');
var blurs = document.querySelector('#cursor-blur')
document.addEventListener('mousemove',function(dets){
    crsr.style.left= dets.x + 30+ "px";
    crsr.style.top= dets.y + "px";
    blurs.style.left = dets.x -140 + "px";
    blurs.style.top = dets.y -140 + "px";

})


gsap.to("#nav",{
    // y : 30,
    backgroundColor :'#000',
    duration: 0.5,
    height: '110px',
    scrollTrigger: {
        trigger :"#nav",
        scroller: 'body',
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub :1
    }
})


gsap.to("#main",
    {
        backgroundColor :'#000',
        scrollTrigger :{
            trigger : "#main",
            scroller : 'body',
            start : "top -10%",
            end : "top -80%",
            scrub : 2
        }

    }

)

var h4all = document.querySelectorAll('#nav h4');
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = 'transparent';
})

elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid  #95C11E";
    crsr.style.backgroundColor = '#95C11E';
})

})

gsap.from("#about-us  img , #about-us-in",{
    y:90,
    duration: 1,
    opacity: 0,
    stagger:0.4,
    scrollTrigger:{
        trigger : "#about-us",
        scroller : "body",
        // markers:true,
        start: "top 60%",
        end : "top 55%",
        scrub: 2
    }
})

gsap.from(".card",{
    // y:90,
    scale : 0.8,
    duration: 1,
    opacity: 0,
    scrollTrigger:{
        trigger : ".card",
        scroller : "body",
        // markers:true,
        start: "top 70%",
        end : "top 55%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    // y:90,
    y : -30,
    x : -40,


    scrollTrigger:{
        trigger : "#colon1",
        scroller : "body",
        // markers:true,
        start: "top 50%",
        end : "top 45%",
        scrub: 2
    }
})

gsap.from("#colon2",{
    // y:90,
    y : 70,
    x : -50,


    scrollTrigger:{
        trigger : "#colon2",
        scroller : "body",
        // markers:true,
        start: "top 50%",
        end : "top 45%",
        scrub: 2
    }
})


gsap.from('#page-4 h1',{
    y : 50,
    scrollTrigger:{
        trigger : "#page-4",
        scroller :'body',
        start :'top 80%',
        end :'top 75%',
        scrub :3


    }
})