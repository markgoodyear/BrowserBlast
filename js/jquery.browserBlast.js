/*------------------------------------------------------------

	browserBlast v1.0.0
	Author: Mark Goodyear - http://www.markgoodyear.com
	Git: https://github.com/markgoodyear/browserblast
	Email: hello@markgoodyear.com
	Twitter: @markgdyr

------------------------------------------------------------*/

;(function ($) {

	$.browserBlast = function (options) {

		//Default settings
		var defaults = {
			devMode: false,
			supportedIE: "8",
			customCSS: false,
			fixed: true,
			linkColor: '#56a119',
			linkHover: '#333',
			linkUnderline: true,
			bannerHeight: '40',
			background: '#FAF4AF',
			textColor: '#333',
			fontSize: '12px',
			fontFamily: 'sans-serif',
			borderSize: '2',
			borderStyle: 'solid',
			borderColor: '#D4C790',
			warningID: 'unsupported',
			message: "Hey! Your browser is unsupported. Please <a href='http://browsehappy.com' target='_blank'>upgrade</a> for the best experience."
		};

		var o = $.extend(defaults, options);

		// Setup
		function warningSetup() {

			// HTML for warning
			var warningHTML = "<div id='" + o.warningID + "'>" + o.message + "</div>";
			
			// Setup warningID as var for easy access
			var divID = "#" + o.warningID;

			$("body").append(warningHTML);

			// Default theme
			if (o.customCSS === false) {
				$(divID).css({
					top: '0',
					left: '0',
					width: '100%',
					fontSize: o.fontSize,
					'font-family': o.fontFamily,
					textAlign: 'center',
					color: o.txtColor,
					backgroundColor: o.background,
					"border-bottom": o.borderSize + 'px',
					"border-bottom-style": o.borderStyle,
					"border-bottom-color": o.borderColor,
					height: o.bannerHeight + 'px',
					lineHeight: o.bannerHeight + 'px',
					zIndex: 999999
				});

				// Set body offset so no content is hidden
				var warningOffset = (+o.bannerHeight) + (+o.borderSize);
				$("body").css({marginTop: warningOffset});

				// Set positioning
				$(divID).css( (o.fixed === true) ? {position: "fixed"} : {position: "absolute"});

				// Set link underline
				$(divID + " a").css( (o.linkUnderline === true) ? {'text-decoration': 'underline'} : {'text-decoration': 'none'});

				// Link color
				$(divID + " a").css({color: o.linkColor});

				// Link hover
				$(divID + " a").hover(function () {
					$(this).css({color: o.linkHover});
				}, function () {
					$(this).css({color: o.linkColor});
				});
			}
		}

		// For IE
		if ($.browser.msie  && parseInt($.browser.version, 10) < o.supportedIE && o.devMode === false ) {
			warningSetup();
		}

		// Dev mode
		else if (o.devMode === true) {
			warningSetup();
		}

	}; // End browserBlast function
}(jQuery));