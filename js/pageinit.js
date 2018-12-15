$(function() {
 
    $('.js-openmenu').click(function() {
        $(this).parent().toggleClass('on-1');
    });
 


$(":input").inputmask();
$("#phone").inputmask({"mask": "+7 (999) 999-9999"});
$("#phone1").inputmask({"mask": "+7 (999) 999-9999"});
$("#phone2").inputmask({"mask": "+7 (999) 999-9999"});

$(".sevice__level-1 > li").find(".sevice__level-2").parent().addClass( "arrow" );

//begin brand carousel
function brandCarusel() {
    var checkWidth = $(window).width();
    var infoCaruselBox = $('.js-brand-owlcarousel');

    if (checkWidth < 747) {
        infoCaruselBox.addClass('owl-carousel').owlCarousel({
            margin: 0,  
            nav: true,
            dots: true,
            responsive: {
                0: {               
                    items: 1
                }
            }
        });
    }
    else {
        if (infoCaruselBox.data('owlCarousel') != 'undefined') {
            infoCaruselBox.trigger('destroy.owl.carousel').removeClass('owl-carousel');
        }
    }
};
$(document).ready(brandCarusel);
$(window).resize(brandCarusel);
//end brand carousel

//start sidebar

$('.js-sidebar-show').click(function(event){
             event.preventDefault();

            if(!$(this).hasClass('active')) {
               
                showSidebar();

            } else {
              hideSidebar();
            }
        });


 

    function showSidebar() {

        $('.js-sidebar').addClass('l-sidebar--open');
        $('.js-sidebar-block').addClass('l-sidebar-block--open');
            $('.menu__toggle').addClass('active');
            $('.b-sandwich').addClass('js-sidebar-hide');
            $('.b-sandwich').removeClass('js-sidebar-show');



        var tempWidth,
            tempWidthNew,
            scrollWidth;

        // scroll width compensation
        tempWidth = $('body').outerWidth(true);
        $('body').addClass('g-ov-h');
        tempWidthNew = $('body').outerWidth(true);
        scrollWidth = tempWidthNew - tempWidth;
        $('body').css({ 'padding-right' : scrollWidth } );
        $('.b-fixed-head').css({ 'right' : scrollWidth })

    }

    function hideSidebar() {
        console.log('111222');

        $('.js-sidebar').removeClass('l-sidebar--open');
        $('.js-sidebar-block').removeClass('l-sidebar-block--open');
        $('.menu__toggle').removeClass('active');
            $('.menu__toggle').removeClass('js-sidebar-hide');
        $('.menu__toggle').addClass('js-sidebar-show');


        // scroll width compensation
        $('body').removeClass('g-ov-h');
        $('body').css({ 'padding-right' : 0 });
        $('.b-fixed-head').css({ 'right' : 0 })
    }

    // меню в сайдбаре
    $('.js-sidebarmenu-achor').on('click', function(event) {
        event.preventDefault();
        var $menuItem = $(this).parent('.js-sidebarmenu-achor-wrap').parent('.js-sidebarmenu-item');
        var $menuNextLvl = $(this).parents('.js-sidebarmenu-achor-wrap').next('.js-sidebarmenu-content');

        $menuItem.toggleClass('sidebar-menu__item--open');
        $menuNextLvl.stop(true, false).slideToggle('400')
    });
//end siderbar
});

$(function(){
 
    var head_block = $('.b-sevice');
 
    if ( !head_block.size() )
        return;
 
    var topMenuHeight = head_block.outerHeight(),
        topMenuPos = head_block.offset().top;
 
    $('.search__open').on('click', function() {
        $(this).parents('.b-search_head').addClass('b-search_head_full');
        $('.search__btn').show();
        $(this).hide();
    }); 
    $('.search__close').on('click', function() {
        $(this).parents('.b-search_head').removeClass('b-search_head_full');
        $('.search__btn').hide();
        $('.search__open').show();
    });

    var placeholder_mini_form = $(".js_mini_form_search input:first").prop('placeholder');

    $(".js_mini_form_search")
        .on('mouseenter focus', '.js_hide_placeholder',
            function(){
                $(this).prop('placeholder', '');
            }
        )
        .on('mouseleave blur',  '.js_hide_placeholder',
            function(){
                $(this).prop('placeholder', placeholder_mini_form);
            }
        );




});