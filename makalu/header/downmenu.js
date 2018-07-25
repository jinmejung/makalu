$(document).ready(function(){
            /* header */
            $('.gnb .down_menu.store').mouseenter(function(){
                $('.down_menu.store ul').stop().animate({height:160},300)
            }).mouseleave(function(){
                $('.down_menu.store ul').stop().animate({height:0},300)
            })
            $('.gnb .down_menu.community').mouseenter(function(){
                $('.down_menu.community ul').stop().animate({height:160},300)
            }).mouseleave(function(){
                $('.down_menu.community ul').stop().animate({height:0},300)
            })
            
        })