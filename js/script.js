jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .menu, body').toggleClass('active');
	})
	$('.slider-left').slick(
		{
			slidesToShow: 1,
			slidesToScroll: 1,

		}
	);
	$('.slider-right').slick(
		{
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1060,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 875,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768.1,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		}
	);

	$('.slider-right.double').slick('unslick');
	$('.slider-right.double').slick(
		{
			slidesToShow: 3,

			slidesToScroll: 1,
			rows: 2,
			responsive: [
				{
					breakpoint: 1060,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 875,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 768.1,
					settings: {
						slidesToShow: 2,
					}
				},

				{
					breakpoint: 497,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		}
	);
	$('.header__categories-button').on('click', function (e) {
		$(this).toggleClass('active');
		$('.content__categories').toggleClass('active');
	})
})

