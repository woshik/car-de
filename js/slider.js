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
					$('.tonirovka-name').html('WERKSTÖNUNG');
					$('.tonirovka-back').css('opacity', '0.4');
					$('.range-text').html(
						`<div class="row-3-range">
							<i class="number-range">0%</i><br />
							<p class="p-rang">
								Hitzeschutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">0%</i><br />
							<p class="p-rang">
								UV Schutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">0%</i><br />
							<p class="p-rang">
								Blendschutz
							</p>
						</div>`
					);
				}
				if ($number == 2) {
					$('.tonirovka-name').html('Black Glas - NERO 14');
					$('.tonirovka-back').css('opacity', '0.5');
					$('.range-text').html(
						`<div class="row-3-range">
							<i class="number-range">75%</i><br />
							<p class="p-rang">
								Hitzeschutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">99%</i><br />
							<p class="p-rang">
								UV Schutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">86%</i><br />
							<p class="p-rang">
								Blendschutz
							</p>
						</div>`
					);
				}
				if ($number == 3) {
					$('.tonirovka-name').html('Black Glass - NERO 04');
					$('.tonirovka-back').css('opacity', '0.6');
					$('.range-text').html(
						`<div class="row-3-range">
							<i class="number-range">85%</i><br />
							<p class="p-rang">
								Hitzeschutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">99%</i><br />
							<p class="p-rang">
								UV Schutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">96%</i><br />
							<p class="p-rang">
								Blendschutz
							</p>
						</div>`
					);
				}
				if ($number == 4) {
					$('.tonirovka-name').html('Black Glass - HP Nero 15');
					$('.tonirovka-back').css('opacity', '0.7');
					$('.range-text').html(
						`<div class="row-3-range">
							<i class="number-range">99%</i><br />
							<p class="p-rang">
								Hitzeschutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">99%</i><br />
							<p class="p-rang">
								UV Schutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">85%</i><br />
							<p class="p-rang">
								Blendschutz
							</p>
						</div>`
					);
				}
				if ($number == 5) {
					$('.tonirovka-name').html('Black Glass - HP 05');
					$('.tonirovka-back').css('opacity', '1');
					$('.range-text').html(
						`<div class="row-3-range">
							<i class="number-range">99%</i><br />
							<p class="p-rang">
								Hitzeschutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">99%</i><br />
							<p class="p-rang">
								UV Schutz
							</p>
						</div>
						<div class="row-3-range">
							<i class="number-range">95%</i><br />
							<p class="p-rang">
								Blendschutz
							</p>
						</div>`
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

	$('.number-col-slider-' + 1 + '').html('<i>ohne Folie</i>');
	$('.number-col-slider-' + 2 + '').html('<i>NR 14</i>');
	$('.number-col-slider-' + 3 + '').html('<i>NR 04</i>');
	$('.number-col-slider-' + 4 + '').html('<i>HP 15</i>');
	$('.number-col-slider-' + 5 + '').html('<i>HP 05</i>');
}
sliderbulets();
