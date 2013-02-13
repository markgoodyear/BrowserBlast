/*------------------------------------------------------------

	browserBlast v2.0.0
	Author: Mark Goodyear - http://www.markgoodyear.com
	Git: https://github.com/markgoodyear/browserblast
	Email: hello@markgoodyear.com
	Twitter: @markgdyr

------------------------------------------------------------*/

;var browserBlast = function (options) {

	"use strict";

	var o = options || {},
		devMode = o.devMode || false,
        supportedIE = o.supportedIE || '8',
		message = o.message || "Hey! Your browser is unsupported. Please <a href='http://browsehappy.com' target='_blank'>upgrade</a> for the best experience.";

	function warningSetup(options) {
		var elem = document.createElement('div');
		elem.id = "browserblast";
		elem.style.zIndex = "2147483647";
		elem.innerHTML = message;
		document.body.appendChild(elem);
        document.documentElement.className+=' unsupported-browser'
	}

	function getIEVersion() {
		var rv = -1;
		if (navigator.appName === 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	}

    var version = getIEVersion();

	if (version > -1 && version < supportedIE + ".0" || devMode === true)  {
		warningSetup();
	}

};