// 動態加入行程
var tl = document.querySelector('#timeline');
$.getJSON('./json/time-line.json', function (data) {
	$.each(data.timeline, function (i, f) {
		tl.innerHTML += `
				<div class="timeline-item">
					<div class="timeline-icon ${f.iconType}">
						<i class="fa ${f.icon}" aria-hidden="true"></i>
					</div>
					<div class="timeline-content ${f.direction}">
						<h2>${f.title}</h2>
						<p>
							${f.content}
						</p>
						<span class="time-stamp">${f.time}</span>
					</div>
				</div>
				`;
	});
});


$(function () {
	var timelineBlocks = $('.timeline-item'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when entering the viewport
	$(window).on('scroll', function () {
		(!window.requestAnimationFrame)
			? setTimeout(function () { showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function () { showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function () {
			($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function () {
			($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');

		});
	}
});