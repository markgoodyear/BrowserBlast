# BrowserBlast


## Overview

BrowserBlast is a lightweight and fully customisable script to display a warning for users of IE7 and below to let them know their browser isn’t supported anymore.

### Demo

<http://markgoodyear.com/labs/browserblast/>

### Article
<http://markgoodyear.com/2013/02/browserblast-2-relaunch/>


## How to use

Include the `browserBlast.min.js` file in your document and place the following into the head of your document to initiate the plugin. Make sure you've also included jQuery.

	
	<script type="text/javascript" src="browserBlast.min.js"></script>
		<script>
    		browserBlast();
	</script>



### Settings
	browserBlast({
    	devMode: false, // Show warning on all browsers for testing
    	supportedIE: '8', // Supported IE version, warning will display on older browsers
    	message: 'Hey! Your browser is unsupported. Please <a href='http://		browsehappy.com' target='_blank'>upgrade</a> for the best experience.' // Set custom message
	});

## Support
If you have any issues, feedback or suggestions, please log an issue on <a target="_blank" href="https://github.com/markgoodyear/browserblast">Github</a> or find me on Twitter: <a href="http://twitter.com/markgdyr">@markgdyr</a>.


## Version history
- 2.0.0 - Vanilla JS release, no jQuery dependancies
- 1.0.0 - Initial release