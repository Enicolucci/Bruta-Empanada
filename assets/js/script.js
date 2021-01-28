//scripts personalizados

 $(document).ready(function() {
            // Owl Carrousel Slider
            $("#banner-section .owl-carousel").owlCarousel({
                dots: true,
                nav: true,
                items: 1,
                loop: true,
                autoplay: true
            });
        });



document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});


