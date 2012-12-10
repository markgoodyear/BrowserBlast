# BrowserBlast


## Overview

BrowserBlast is a lightweight and fully customisable jQuery plugin to display a warning for users of IE7 and below to let them know their browser isn’t supported anymore.

### Demo

<http://markgoodyear.com/labs/browserblast/>


### Download

<https://github.com/markgoodyear/browserblast>

### Article
<http://markgoodyear.com/2012/12/moving-past-ie7-with-browserblast-plugin>


## How to use

Include the `jquery.browserBlast.min.js` file in your document and place the following into the head of your document to initiate the plugin. Make sure you've also included jQuery.

	
	<script>
	$(function () {
		$.browserBlast({
			// Settings here
		});
	});
	</script>



###Options

Option 			| Default			| Usage
:---			|:---				|:---
devMode			|`'false'`			|Set `true` to display banner on all browsers
supportedIE		|`'8'`				|Set which version of IE you support
customCSS		|`false` 			|Set `true` to use custom CSS
fixed			|`true`				|Set `false` to toggle fixed or non-fixed banner
linkColor		|`'#56a119'`		|Set link color
linkHover		|`'#333'`			|Set link hover color
linkUnderline	|`'true'`			|Use `false` for no underline
bannerHeight	|`'40'`				|Banner height in px
background		|`'#FAF4AF'`		|Background colour of the bar
textColor		|`'#333'`			|Text color
fontSize		|`'12px'`			|Font size of the message
fontFamily		|`'sans-serif'`		|`sans` / `sans-serif`, or define a css font-stack
borderSize		|`'2'`				|Border size in px
borderStyle		|`'solid'`			|Style of the border, `solid`, `dotted`, `dashed`
borderColor		|`'#D4C790'`		|Color of the border
warningID		|`'unsupported'`	|Set the selector ID for the banner


#### Custom message

You can set a custom message with the `message` option to overide the default message:

	message: "Stop using IE!"


## Support
If you have any issues, feedback or suggestions, please send an email to hello[at]markgoodyear.com or find me on Twitter <a href="http://twitter.com/markgdyr">@markgdyr</a>.


## Version history

- 1.0.0 - Initial release