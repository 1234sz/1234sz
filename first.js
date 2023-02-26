$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $(this).removeClass('fa-times');
        $('header').removeClass('toggle');
    });
})


$(`a[href*="#"]`).on('click',function(e){
    e.preventDefault()
    $('html,body').animate({
        scrollTop :$($(this).attr('href')).offset().top,
    },
    500,
    'linear'
    )
})


let i=0
setInterval(()=>{
    if(i<19){
        document.getElementById('name').innerHTML += a[i];
        i++
    }
    if(i==19 || i==42){
        document.getElementById('name').innerHTML = "";
        i++
    }
    if(i>42 && i<58){
        document.getElementById('name').innerHTML += a[i];
        i++
    }
    else if(i>19 && i<42){
        document.getElementById('name').innerHTML += a[i];
        i++
    }
},150)