/*global $, window,*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#F7600E',
        cursorborder: 'none'
        
    });
    
    // Change Header Height
    
    $('.header').height($(window).height());
    
    // Scroll To Features
    
    $('.header .arrow i').click(function () {
       
        $('html, body').animate({
           
            scrollTop: $('.features').offset().top
            
        }, 700);
        
    });
    
    // Show Hidden Items
    
    $('.show-more').click(function () {
       
        $('.our-work .box').fadeIn();
        
    });
    
    // Check Testimonials
    
    var leftArrow = $('.testimonials .fa-chevron-left'),
        rightArrow = $('.testimonials .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
            
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
            
        }
        
    }
    
    checkClients();
    
    $('.testimonials i').click(function () {
       
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testimonials .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
        } else if ($(this).hasClass('fa-chevron-left')) {
            
            $('.testimonials .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
        }
        
    });
    
});