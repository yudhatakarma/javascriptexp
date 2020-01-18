// Onchange Kategori Kursus
function goTo(url){
	window.location = url;
}


// Tawk JS
 var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/5e0d935827773e0d832b7856/default';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
})();

// Flashdata Sweet Alert
const flashdata = $('.flash-data').data('flashdata');
if(flashdata){
    Swal.fire({
        title: 'Data Berhasil ' + flashdata,
        text: '',
        type: 'success'
    });
}

// Disable Button Action
$(function() {
    $('input[type="submit"]').prop('disabled', true);
    $('#check').on('input', function(e) {
        if(this.value.length >= 6) {
            $('input[type="submit"]').prop('disabled', false);
        } else {
            $('input[type="submit"]').prop('disabled', true);
        }
    });
     $('#masuk').on('input', function(e) {
        if(this.value.length >= 6) {
            $('input[type="submit"]').prop('disabled', false);
        } else {
            $('input[type="submit"]').prop('disabled', true);
        }
    });
    $('#password').on('input', function(e) {
        if(this.value.length >= 6) {
            $('input[type="submit"]').prop('disabled', false);
        } else {
            $('input[type="submit"]').prop('disabled', true);
        }
    });
});

// Swiper Slide 
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 0,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},
	autoplay: {
	delay: 4000,
	disableOnInteraction: false,
	},
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	breakpoints: {
	1024: {
	  slidesPerView: 3,
	  spaceBetween: 0,
	},
	768: {
	  slidesPerView: 2,
	  spaceBetween: 0,
	},
	640: {
	  slidesPerView: 1,
	  spaceBetween: 0,
	},
	320: {
	  slidesPerView: 1,
	  spaceBetween: 0,
	}
	}
	});

