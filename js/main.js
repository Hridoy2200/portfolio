//  Preloader
jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// dropdown 
document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
  
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function(everysubmenu){
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
      })
    });
  
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
  
          }
      });
    })
  }
  // end if innerWidth
  }); 
  // DOMContentLoaded  end
  
  // Portfolio Filter
	$('.filter-btn').click(function () {
		const data_attr = $(this).attr('data-filter');

		if (data_attr == 'all') {
			$('.portfo-box').show('1000')
		} else {
			$('.portfo-box').not('.'+data_attr).hide('1000');
			$('.portfo-box').filter('.'+data_attr).show('1000');
		}
	});

	$('.filter-btn').click(function () {
		$(this).addClass('filter-active').siblings().removeClass('filter-active');
  });
  

  $('.blog-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 20000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        },
        {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }
      ],
  });

  $('.blog-slider2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 20000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        },
        {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }
      ],
  });
  
  $('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    prevArrow: $('.arrow-prev-testimonial'),
    nextArrow: $('.arrow-next-testimonial'),
  });

$(".number").counterUp({
  time: 400
});