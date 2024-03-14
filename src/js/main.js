// Import Base file
// import 'virtual:svg-icons-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/style.css';
import '@/assets/scss/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import * as bootstrap from 'bootstrap'
// import { Modal } from 'bootstrap';

$(function () {
    setTimeout(function () {
        $('#preloader').addClass('hidden');
        // $('body').removeClass('overflow-hidden');
        
        reveal();
        
        if(window.innerWidth < 768) {
            reveal('.card-controller');
        }
    }, 1000);

    // init bootstrap modals
    // Array.from(document.querySelectorAll('.custom-modal')).forEach(modalNode => {
    //     new Modal(modalNode)
    // })

    if($('#particles-js').length) {
        particlesJS.load('particles-js', 'vendor/particles/particles.json');
    }

    // if($('#particles-loader').length) {
    //     particlesJS.load('particles-loader', 'vendor/particles/particles.json');
    // }
    

    // navbar menu navigation
    $('#openMenu').on('click', function () {
        $('#navbarMenu').addClass('active');
        $('.navbar-menu__overlay').addClass('active');
    })

    $('#closeMenu, .navbar-menu__overlay').on('click', function () {
        $('#navbarMenu').removeClass('active');
        $('.navbar-menu__overlay').removeClass('active');
    })

    function reveal(elementClass = '.reveal') {
        const reveals = document.querySelectorAll(elementClass);

        for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < window.innerHeight - elementVisible) {
            reveals[i].classList.add("slide-up");
        }
        }
    }

    function makeNavbarFixed () {
        if (window.scrollY < 100) {
            $('.navbar__inner').removeClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-logo-src'));
            return;
        }

        if (window.scrollY < 100) {
            $('.navbar__inner').removeClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-logo-src'));
        } else {
            $('.navbar__inner').addClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-colored-logo-src'));
        }
    }

    window.addEventListener("scroll", function () {
        reveal();
        makeNavbarFixed();

        if(window.innerWidth < 768) {
            reveal('.card-controller');
        }
    });

    makeNavbarFixed();

    if($('.about-slider').length) {
        new Swiper(".about-slider", {
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 0,
            // centeredSlides: true,
            // loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: ".about-slider__pagination",
                clickable: true,
            },
        });
    }

    if($('.partners-slider').length) {
        new Swiper('.partners-slider', {
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 10,
            breakpoints: {
                '@0.75': {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
                '@1.50': {
                  slidesPerView: 8,
                  spaceBetween: 50,
                },
            }
        });
    }

    if($('.services-slider').length) {
        new Swiper(".services-slider", {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 15,
            // centeredSlides: true,
            // loop: true,
            pagination: {
                el: ".services-slider__pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".services-slider__next",
                prevEl: ".services-slider__prev",
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                '@1.00': {
                  slidesPerView: 3,
                },
                '@1.50': {
                  slidesPerView: 4,
                },
            }
        });
    }

    if($('.tarnsport-slider').length) {
        new Swiper(".tarnsport-slider", {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 15,
            // centeredSlides: true,
            // loop: true,
            pagination: {
                el: ".services-slider__pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".services-slider__next",
                prevEl: ".services-slider__prev",
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                '@1.00': {
                  slidesPerView: 2,
                },
                // '@1.50': {
                //   slidesPerView: 4,
                // },
            }
        });
    }

    if($('.projects-slider').length) {
        new Swiper(".projects-slider", {
            modules: [Pagination],
            slidesPerView: 2,
            // centeredSlides: true,
            spaceBetween: 10,
            // loop: true,
            pagination: {
                el: ".projects-slider__pagination",
                clickable: true,
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                '@1.00': {
                  slidesPerView: 4,
                },
                '@1.25': {
                    slidesPerView: 5,
                  },
                '@1.50': {
                  slidesPerView: 6,
                },
            }
        });
    }

    if($('.projects-grid-slider').length) {
        const slider = new Swiper(".projects-grid-slider", {
            modules: [Pagination],
            slidesPerView: 2,
            // centeredSlides: true,
            spaceBetween: 10,
            // loop: true,
            pagination: {
                el: ".projects-slider__pagination",
                clickable: true,
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                '@1.00': {
                  slidesPerView: 4,
                },
                '@1.25': {
                    slidesPerView: 5,
                  },
                '@1.50': {
                  slidesPerView: 6,
                },
            },
        });

    }

    if($('.raqamaya-services-slider').length) {
        
        // $('.raqamaya-services-slider').slick({
        //     dots: true,
        //     infinite: true,
        //     speed: 300,
        //     slidesToShow: 2,
        //     centerMode: true,
        //     variableWidth: true,
        //     rtl: document.dir == 'rtl',
        //     responsive: [
        //         {
        //           breakpoint: 1024,
        //           settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //           }
        //         },
        //         {
        //           breakpoint: 600,
        //           settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //           }
        //         },
        //         {
        //           breakpoint: 480,
        //           settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //           }
        //         }
        //         // You can unslick at a given breakpoint now by adding:
        //         // settings: "unslick"
        //         // instead of a settings object
        //       ]
        // });
        new Swiper(".raqamaya-services-slider", {
            modules: [Pagination],
            slidesPerView: 2,
            // centeredSlides: true,
            spaceBetween: 10,
            // loop: true,
            pagination: {
                el: ".raqamaya-services-slider .services-slider__pagination",
                clickable: true,
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                '@1.00': {
                  slidesPerView: 3,
                },
                '@1.25': {
                    slidesPerView: 3,
                  },
                '@1.50': {
                  slidesPerView: 4,
                },
            }
        });
    }

    // smooth scrolling
    $(".scroll-link").on("click", function (event) {
        const target = $(this).attr("data-href");

        if(!$(target).length) return true;

        event.preventDefault();

        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $("html, body").animate({
            scrollTop: ($(target).offset().top - 75)
        }, 300);
    });

    $('.services-slider .service-card__content').each(function (index, item) {
        $(this).css({ 
            'bottom': `-${$(this).find('.service-card__footer').height()}px`,
        })
    });


    $('.serviceCardBtn').on('click', function () {
        $('.serviceCardBtn').removeClass('active');
        $('.service-details-container').removeClass('active');
        $(this).addClass('active');
        $(`.service-details-container[data-index="${$(this).attr('data-target')}"]`).addClass('active');
    });

   
    $('.projects-grid__slider .btn').on('click', function () {
        $('.projects-grid__slider .btn').removeClass('active');
        $(this).addClass('active');
    });

    // // click outside = close mobile menu
    // $(window).on('click', function() {
    //     $('.dropdown-menu').removeClass('opacity-100 translate-y-0');
    //     $('.dropdown-menu').addClass('invisible opacity-0 translate-y-1');
    //     $('.dropdown-menu-controller').find('svg').removeClass('rotate-180');
    // });
    
    // $('.dropdown-menu-container').on('click', function(event){
    //     event.stopPropagation();
    // });

    // $('.scroll-down').on('click', function() {
    //     $('html, body').animate({
    //     scrollTop: ($($(this).data('scroll-target')).offset().top - 50)
    //     }, 1000);
    // });

    // $(window).on('resize', function () {
    //     if(window.innerWidth > 767) {
    //         if($('.card-controller').length) {
    //             $('.card-controller').removeClass('slide-up');
    //         }
    //     } else {
    //         reveal('.card-controller');
    //     }
    // });
});

