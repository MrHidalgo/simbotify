"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

	svg4everybody();
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

	/**
   * @description
  */
	WebFont.load({
		google: {
			families: ['Roboto:100,300,400,500,700,900']
		}
	});

	/**
   * @description
  */
	// const WebFontConfig = {
	//   custom: {
	//     families: [
	//       'Lato:n1,n3,n4,n5,n6,n7,n9'
	//     ]
	//   }
	// };
};
/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var loaderAnimation = function loaderAnimation() {
		var tl = new TimelineMax({
			repeat: -1,
			yoyo: true
		});

		tl.set(document.getElementById('loader-spin__circle'), {
			'transformOrigin': 'center'
		});

		tl.to(document.getElementById('loader-spin__line-1'), 1, { x: -10, ease: Power1.easeInOut }).to(document.getElementById('loader-spin__line-2'), 1, { x: -5, ease: Power1.easeInOut }, '-=1');

		tl.to(document.getElementById('loader-spin__line-3'), 1, { x: 5, ease: Power1.easeInOut }, '-=1').to(document.getElementById('loader-spin__line-4'), 1, { x: 10, ease: Power1.easeInOut }, '-=1');

		tl.to(document.getElementById('loader-spin__line-5'), 1, { x: 10, ease: Power1.easeInOut }, '-=1').to(document.getElementById('loader-spin__line-6'), 1, { x: 5, ease: Power1.easeInOut }, '-=1').to(document.getElementById('loader-spin__line-7'), 1, { x: 10, ease: Power1.easeInOut }, '-=1');

		tl.to(document.getElementById('loader-spin__line-8'), 1, { x: -10, ease: Power1.easeInOut }, '-=1').to(document.getElementById('loader-spin__line-9'), 1, { x: -5, ease: Power1.easeInOut }, '-=1');

		tl.to(document.getElementById('loader-spin__circle'), 1, { x: -10, scale: 0.8, ease: Power1.easeInOut }, '-=1').to(document.getElementById('loader-spin__arrow'), 1, { x: -10, ease: Power1.easeInOut }, '-=1');

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
	var initNative = function initNative() {
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