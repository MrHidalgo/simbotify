/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const loaderAnimation = () => {
		const tl = new TimelineMax({
			repeat: -1,
			yoyo: true,
		});

		tl.set(document.getElementById('loader-spin__circle'), {
			'transformOrigin': 'center'
		});

		tl.to(document.getElementById('loader-spin__line-1'), 1, {x: -10, ease: Power1.easeInOut})
			.to(document.getElementById('loader-spin__line-2'), 1, {x: -5, ease: Power1.easeInOut}, '-=1');

		tl.to(document.getElementById('loader-spin__line-3'), 1, {x: 5, ease: Power1.easeInOut}, '-=1')
			.to(document.getElementById('loader-spin__line-4'), 1, {x: 10, ease: Power1.easeInOut}, '-=1');

		tl.to(document.getElementById('loader-spin__line-5'), 1, {x: 10, ease: Power1.easeInOut}, '-=1')
			.to(document.getElementById('loader-spin__line-6'), 1, {x: 5, ease: Power1.easeInOut}, '-=1')
			.to(document.getElementById('loader-spin__line-7'), 1, {x: 10, ease: Power1.easeInOut}, '-=1');

		tl.to(document.getElementById('loader-spin__line-8'), 1, {x: -10, ease: Power1.easeInOut}, '-=1')
			.to(document.getElementById('loader-spin__line-9'), 1, {x: -5, ease: Power1.easeInOut}, '-=1');

		tl.to(document.getElementById('loader-spin__circle'), 1, {x: -10, scale: 0.8, ease: Power1.easeInOut}, '-=1')
			.to(document.getElementById('loader-spin__arrow'), 1, {x: -10, ease: Power1.easeInOut}, '-=1');

		// tl.staggerTo(document.querySelectorAll('#loader-text span'), 0.5, {opacity: 1})
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		loaderAnimation();
		// ==========================================
	};
	initNative();
})();
