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
			max: 5,
			step: 1,
			slide: function (event, ui) {
				$number = ui.value;
				if ($number == 1) {
					$('.name-range').html('CR 40');
					$('.tonirovka-back').css('opacity', '0.39');
					$('.name-tonirovka-form').html('CR 40');
					$('#name-tonirovka').val('CR 40');
					$('.range-text').html(
						"<div class='row-3-range'><i class='number-range'>39%</i><p class='p-rang'>Пропускаемость света</p></div> <div class='row-3-range'><i class='number-range'>60%</i><br><p class='p-rang'>Отражает солнечную энергию</p></div> <div class='row-3-range'><i class='number-range'>97%</i><br><p class='p-rang'>Отражает УФ-лучи</p></div>"
					);
				}
				if ($number == 2) {
					$('.name-range').html('CR 50');
					$('.tonirovka-back').css('opacity', '0.5');
					$('.name-tonirovka-form').html('CR 50');
					$('#name-tonirovka').val('CR 50');
					$('.range-text').html(
						"<div class='row-3-range'><i class='number-range'>50%</i><p class='p-rang'>Пропускаемость света</p></div> <div class='row-3-range'><i class='number-range'>56%</i><br><p class='p-rang'>Отражает солнечную энергию</p></div> <div class='row-3-range'><i class='number-range'>97%</i><br><p class='p-rang'>Отражает УФ-лучи</p></div>"
					);
				}
				if ($number == 3) {
					$('.name-range').html('CR 60');
					$('.tonirovka-back').css('opacity', '0.6');
					$('.name-tonirovka-form').html('CR 60');
					$('#name-tonirovka').val('CR 60');
					$('.range-text').html(
						"<div class='row-3-range'><i class='number-range'>60%</i><p class='p-rang'>Пропускаемость света</p></div> <div class='row-3-range'><i class='number-range'>53%</i><br><p class='p-rang'>Отражает солнечную энергию</p></div> <div class='row-3-range'><i class='number-range'>97%</i><br><p class='p-rang'>Отражает УФ-лучи</p></div>"
					);
				}
				if ($number == 4) {
					$('.name-range').html('CR 70');
					$('.tonirovka-back').css('opacity', '0.69');
					$('.name-tonirovka-form').html('CR 70');
					$('#name-tonirovka').val('CR 70');
					$('.range-text').html(
						"<div class='row-3-range'><i class='number-range'>69%</i><p class='p-rang'>Пропускаемость света</p></div> <div class='row-3-range'><i class='number-range'>50%</i><br><p class='p-rang'>Отражает солнечную энергию</p></div> <div class='row-3-range'><i class='number-range'>97%</i><br><p class='p-rang'>Отражает УФ-лучи</p></div>"
					);
				}
				if ($number == 5) {
					$('.name-range').html('CR 90');
					$('.tonirovka-back').css('opacity', '0.86');
					$('.name-tonirovka-form').html('CR 90');
					$('#name-tonirovka').val('CR 90');
					$('.range-text').html(
						"<div class='row-3-range'><i class='number-range'>86%</i><p class='p-rang'>Пропускаемость света</p></div> <div class='row-3-range'><i class='number-range'>34%</i><br><p class='p-rang'>Отражает солнечную энергию</p></div> <div class='row-3-range'><i class='number-range'>90%</i><br><p class='p-rang'>Отражает УФ-лучи</p></div>"
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

	$('.number-col-slider-' + 1 + '').html('<i>CR 40</i>');
	$('.number-col-slider-' + 2 + '').html('<i>CR 50</i>');
	$('.number-col-slider-' + 3 + '').html('<i>CR 60</i>');
	$('.number-col-slider-' + 4 + '').html('<i>CR 70</i>');
	$('.number-col-slider-' + 5 + '').html('<i>CR 90</i>');

	$('#name-tonirovka').val('CR 40');
}
sliderbulets();

function slidersec() {
	$('#slidersec')
		.slider({
			value: 1,
			min: 1,
			max: 3,
			step: 1,
			slide: function (event, ui) {
				$number = ui.value;
			},
		})
		.each(function () {
			var opt = $(this).data().uiSlider.options;
			var vals = opt.max - opt.min;
			for (var i = 0; i <= vals; i++) {
				var el = $(
					'<div class="name-slider-range-col number-col-slidersec-' +
						(i + 1) +
						'">1</div>'
				).css('left', (i / vals) * 100 + '%');
				$('#slidersec').append(el);
			}
		});
}
slidersec();
