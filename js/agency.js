/* global $, alert, console, window */


$(function () {
    "use strict";
    
    
     
    
    var myHeader = $("header");
    var navBarLinks = $("nav ul li > a.nav-link");
    var scrollDownButton = $(".scrolldown");
    var allAncors = $("a");
    var navBar = $("header nav");
    
    
    // fire WOW.js
    var wow = new WOW();
    
    wow.init();
    
    
    
    function activateSectionLink() {
        
        var self = $(this);
        
        self.parent("li").addClass("active").siblings("li").removeClass("active");

    }
    
    
    // sync active nav link with window scrolling
    function syncNavLink() {
        
        var navBarHeigth = $(navBar).outerHeight();
        
        $(navBarLinks).each(function () {
            
            if ($(window).scrollTop() >= $($(this).data("target")).offset().top - navBarHeigth) {
                
                $(this).parent("li").addClass("active").siblings("li").removeClass("active");
            
            }
        });
        
        
    }
    syncNavLink();

    
    
    // prevent default of all ancor tags
    $(allAncors).click(function (e) {
        e.preventDefault();
    });
    
    
    
    // assign height of header to window height
    $(myHeader).height($(window).height());
    
    
    
    // activate section link when click it 
    
    $(navBarLinks).on("click", activateSectionLink);
    $(navBarLinks).on("click", function () {
        
        $("body, html").animate({
            
            scrollTop: $($(this).data("target")).offset().top - 75
            
        }, 500);
        
    });
    
    
    $(scrollDownButton).click(function () {
        
        $("body, html").animate({
            
            scrollTop: $($(this).data("target")).offset().top - 76
            
        }, 500);
        
    });
    
    
    
    // activate owlcarousal Plugin
    $("section#project > div.owl").owlCarousel({
        dots: false,
        loop: true
    });
    
    
    
    
    // when scroll window 
    
    $(window).scroll(function () {
        
        syncNavLink();
        
        if ($(this).scrollTop() > 90) {
            
            $(navBar).css({
                "background-color": "#c1c1c1",
                "paddingTop": "15px",
                "paddingBottom": "15px"
                
            }).removeClass("sticky-top").addClass("fixed-top");

            
        } else {
            
            $(navBar).css({
                "background-color": "transparent",
                "paddingTop": "20px",
                "paddingBottom": "20px"
            }).removeClass("fixed-top").addClass("sticky-top");
            
            $(myHeader).css("height", $(window).height());
        }
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Validate form

    (function () {
      window.addEventListener('load', function() {
          
        var forms = $('.needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
    
    
    
    
    
    
    
    
    
});













