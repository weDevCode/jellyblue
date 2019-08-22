/*! JS Document */
/*! Made with love by Team weDevCode - Leader Tien Minh Vy, All Right Reserved */
/*! ### Copyright © 2019 by weDevCode - All Right Reserved ### */
/*! Thanks for purchase our projects :) */
/*! We'll support as much as we can ^_^ */
/*!                ________              _________            .___       ___________ */
/*! __  _  __ ____ \______ \   _______  _\_   ___ \  ____   __| _/____   \__    ___/___ _____    _____ */
/*! \ \/ \/ // __ \ |    |  \_/ __ \  \/ /    \  \/ /  _ \ / __ |/ __ \    |    |_/ __ \\__  \  /     \ */
/*!  \     /\  ___/ |    `   \  ___/\   /\     \___(  <_> ) /_/ \  ___/    |    |\  ___/ / __ \|  Y Y  \ */
/*!   \/\_/  \___  >_______  /\___  >\_/  \______  /\____/\____ |\___  >   |____| \___  >____  /__|_|  / */
/*!              \/        \/     \/             \/            \/    \/               \/     \/      \/ */
/*! ### Social Contact ### */
/*! ==> To get newest Information, please subscribe one of our social profiles below: */
/*! Facebook Fanpage: https://tinyurl.com/wedevcode-facebook */
/*! Twitter: https://tinyurl.com/wedevcode-twitter */
/*! Discord: N/A (Comming soon) */
/*! Envato: https://themeforest.net/user/wedevcode */
/*! Reddit: https://tinyurl.com/wedevcode-reddit */
/*! ==> If you want to support us, you can register to our membership page to get special offer below: N/A (Comming soon) */

// Document Ready
$(document).ready(function () {
    // Assignment
    slide = $('.slide');
    slideToContent = 1;
    limitContent = 4;
    slideWhich = 0;
    // Smooth Scroll
    function smoothScroll() {
        // If a tag onclick
        $('a').click(function (e) {
            // If hash not null 
            if (this.hash !== '') {
                // Stop event
                $('html, body').stop();
                // Prevent default event
                e.preventDefault();
                // Store hash
                let hash = this.hash
                // Animate scroll event
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function (){
                    // change location hash
                    window.location.hash = hash
                })
            }        
        });
    }
    
    // Mobile button nav onclick
    function mbtnOnClick(){
        let status = 1;
        $('.mnav').click(function() {
            $('.mobile-menu').stop();
            if (status == 1) {
                $('.mobile-menu').animate({
                    left: '0%',
                }, 400)
                status = 2;
            } else if (status == 2) {
                $('.mobile-menu').animate({
                    left: '-50%',
                }, 400)
                status = 1;
            }
        });
        $('body').click(function (e) {
            if (!$(e.target).is('.mobile-menu, .mnav i, .mnav')) {
                $('.mobile-menu').animate({
                    left: '-50%',
                }, 400)
                status = 1;
            }
        })
    }
    // Responsive for Javascript
    function responsiveForJS() {
        // Check window width
        // Auto Slide
        function autoSlide(width) {
            slideWhich = width * slideToContent;
            slide.css({'transform': `translateX(${slideWhich}px)`, 'transition': '1s'});
            slideToContent+=1;
            if (slideToContent > limitContent) {
                slideToContent = 0;
                slideWhich = width * slideToContent;
                slide.css({'transition':'0s','transform': `translateX(${slideWhich}px)`});
                slideToContent = 1;
            }
        }
        setInterval(function (){
            let windowWidth = $(window).width();
            if (windowWidth >= 1200){
                autoSlide(-745);
            }else if (windowWidth < 1200 && windowWidth >= 1024) {
                autoSlide(-628);
            } else if (windowWidth < 1023 && windowWidth >= 768) {
                autoSlide(-535);
            } else if (windowWidth < 767 && windowWidth >= 480) {
                autoSlide(-420);
            } else if (windowWidth < 479 && windowWidth >= 426) {
                autoSlide(-315);
            } else if (windowWidth < 425 && windowWidth >= 321) {
                autoSlide(-315);
            } 
        }, 5000)
    }
    
    // Function Execute Place
    mbtnOnClick();
    smoothScroll();
    responsiveForJS();
});