$('.plenka-modal-decor-btn').click(function () {
	$('.plenka-modal-decor').addClass('active-modal');
});
$('.filter-modal-btn').click(function () {
	$('.filter-modalka').addClass('active-modal');
});
$('.plenka-modal-protection-btn').click(function () {
	$('.plenka-modal-protection').addClass('active-modal');
});
$('.plenka-modal-form-btn').click(function () {
	$('.plenka-form-modal').addClass('active-modal');
});
$('.close-modal').click(function () {
	$('.plenka-modal-decor').removeClass('active-modal');
	$('.plenka-modal-protection').removeClass('active-modal');
	$('.plenka-form-modal').removeClass('active-modal');
	$('.plenka-modal-form-btn').removeClass('active-btn-form');
	$('.filter-modalka').removeClass('active-modal');
	$('#name-skin').val('');
	$('#code-skin').val('');
	$('#category-skin').val('');
	$('#type-skin').val('');
	document.getElementById('name-modal-plenka').innerHTML = '';
	document.getElementById('name-skin-form').innerHTML = '';
	document.getElementById('code-skin-form').innerHTML = '';
	$('.wpcf7-mail-sent-ok').text('');
});
$('.close-background').click(function () {
	$('.plenka-modal-decor').removeClass('active-modal');
	$('.plenka-modal-protection').removeClass('active-modal');
	$('.plenka-form-modal').removeClass('active-modal');
	$('.plenka-modal-form-btn').removeClass('active-btn-form');
	$('.filter-modalka').removeClass('active-modal');
	$('#name-skin').val('');
	$('#code-skin').val('');
	$('#category-skin').val('');
	$('#type-skin').val('');
	document.getElementById('name-modal-plenka').innerHTML = '';
	document.getElementById('name-skin-form').innerHTML = '';
	document.getElementById('code-skin-form').innerHTML = '';
	$('.wpcf7-mail-sent-ok').text('');
});

$('.tab_content').hide();
$('.tab_content:first').show();
$('.tabs li:first').addClass('active');

$('ul.tabs li').click(function () {
	$('.tab_content').fadeOut(200);
	var activeTab = $(this).attr('rel');
	$('#' + activeTab).fadeIn(300);

	$('ul.tabs li').removeClass('active');
	$(this).addClass('active');

	$('.tab_drawer_heading').removeClass('d_active');
	$(".tab_drawer_heading[rel^='" + activeTab + "']").addClass('d_active');
});

$('.tab_drawer_heading').click(function () {
	$('.tab_content').fadeOut(200);
	var d_activeTab = $(this).attr('rel');
	$('#' + d_activeTab).fadeIn(300);

	$('.tab_drawer_heading').removeClass('d_active');
	$(this).addClass('d_active');

	$('ul.tabs li').removeClass('active');
	$("ul.tabs li[rel^='" + d_activeTab + "']").addClass('active');
});

$('ul.tabs li').last().addClass('tab_last');

function sliderbulets() {
	$('#slider')
		.slider({
			value: 1,
			min: 1,
			max: 4,
			step: 1,
			slide: function (event, ui) {
				$number = ui.value;
				if ($number == 1) {
					$('.tonirovka-fon').attr('src', './assets/slider/ppf-1.png');
					$('#name-tonirovka').val('CR 40');
					$('.range-text').html(
						`<p class="ppf-info"> - Komplettfolierung</p>
						 <p class="ppf-info"> - nach Besprechung</p>`
					);
				}
				if ($number == 2) {
					$('.tonirovka-fon').attr('src', './assets/slider/ppf-2.png');
					$('#name-tonirovka').val('CR 50');
					$('.range-text').html(
						`<p class="ppf-info"> - Motorhaube</p>
						 <p class="ppf-info"> - Stossstange vorne</p>
						 <p class="ppf-info"> - Spiegelkappen</p>`
					);
				}
				if ($number == 3) {
					$('.tonirovka-fon').attr('src', './assets/slider/ppf-1.png');
					$('#name-tonirovka').val('CR 60');
					$('.range-text').html(
						`<p class="ppf-info"> - Motorhaube</p>
						 <p class="ppf-info"> - Stossstange vorne</p>
						 <p class="ppf-info"> - Spiegelkappen</p>
						 <p class="ppf-info"> - Kotflugel</p>`
					);
				}
				if ($number == 4) {
					$('.tonirovka-fon').attr('src', './assets/slider/ppf-3.png');
					$('#name-tonirovka').val('CR 70');
					$('.range-text').html(
						`<p class="ppf-info"> - Motorhaube</p>
						<p class="ppf-info"> - Stossstange vorne</p>
						<p class="ppf-info"> - Spiegelkappen</p>
						<p class="ppf-info"> - Kotflugel</p>
						<p class="ppf-info"> - A Pillar</p>
						<p class="ppf-info"> - vorder Dachfront</p>`
					);
				}
			},
		})
		.each(function () {
			var opt = $(this).data().uiSlider.options;
			var vals = opt.max - opt.min;
			for (var i = 0; i <= vals; i++) {
				var el = $(
					'<div class="name-slider-range-col number-col-slider-' +
						(i + 1) +
						'">1</div>'
				).css('left', (i / vals) * 100 + '%');
				$('#slider').append(el);
			}
		});

	$('.number-col-slider-' + 1 + '').html('<i>Frontschutz<br />light</br>');
	$('.number-col-slider-' + 2 + '').html('<i>Frontschutz<br />Standart</br>');
	$('.number-col-slider-' + 3 + '').html('<i>Frontschutz<br />Premium</i>');
	$('.number-col-slider-' + 4 + '').html('<i>Frontschutz<br />Folierung</i>');
}

sliderbulets();
