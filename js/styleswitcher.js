/**	STYLE SWITCHER
*************************************************** **/
jQuery(document).ready(function() {
	"use strict";
		$('.yellow-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/yellow.png');
			}
		});
		$('.blueviolet-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/blueviolet.png');
			}
		});
		$('.green-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/green.png');
			}
		});
		$('.orange-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/orange.png');
			}
		});
		$('.blue-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/blue.png');
			}
		});
		$('.goldenrod-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/goldenrod.png');
			}
		});
		$('.red-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/red.png');
			}
		});
		$('.magenta-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/magenta.png');
			}
		});
		$('.yellowgreen-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/yellowgreen.png');
			}
		});
		$('.purple-color').on({
			'click': function(){
				$('.menu-bg').attr('src','img/menu/purple.png');
			}
		});
    jQuery("#hideSwitcher, #showSwitcher").click(function () {

        if (jQuery("#showSwitcher").is(":visible")) {

			var _identifier = "#showSwitcher";
            jQuery("#switcher").animate({"margin-left": "0px"}, 500).show();
			createCookie("switcher_visible", 'true', 365);

        } else {

			var _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({"margin-left": "0"}, 500);
			createCookie("switcher_visible", 'false', 365);

        }

		jQuery(_identifier).animate({"margin-left": "-500px"}, 500, function () {
			jQuery(this).hide();
		});

    });
                      
});

function setActiveStyleSheet(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title) { a.disabled = false; }
		}
	}

	// DARK SKIN
	var color_skin = readCookie('color_skin');
	if(color_skin == 'dark') {
		jQuery("#css_dark_skin").remove();
		jQuery("head").append('<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />');
		jQuery("#is_dark").trigger('click');
		jQuery("a.logo img").attr('src', 'assets/images/logo_dark.png');
	}
}

function getActiveStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) { return a.getAttribute("title"); }
	}

	return null;
}

function getPreferredStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) { 
			return a.getAttribute("title"); 
		}
	}

	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else {
		expires = "";
	}	document.cookie = name+"="+value+expires+";";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];

		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}

		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}

	return null;
}


/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
	@ON LOAD
**/
window.onload = function(e) {
	
	var switcher_visible = 'false';

	// COLOR SCHEME
	var cookie = readCookie("style");
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);

	// SWITCHER OPEN|CLOSED
	if(switcher_visible != 'false') {
		jQuery("#showSwitcher").trigger('click');
	}

	// DARK OR LIGHT
	var is_dark = readCookie('is_dark');
	if(is_boxed == 'true') {
		jQuery('body').removeClass('dark');
		jQuery('body').addClass('dark');
		jQuery("#is_dark").trigger('click');
	}

	// BOXED or WIDE
	var is_boxed = readCookie('is_boxed');
	if(is_boxed == 'true') {
		jQuery('body').removeClass('boxed');
		jQuery('body').addClass('boxed');
		jQuery("#is_boxed").trigger('click');
	}
	
}


/**
	COLOR SKIN [light|dark]
**/
jQuery("input.dark_switch").bind("click", function() {
	var boxed_switch = jQuery(this).attr('value');

	if(boxed_switch == 'dark') {
		jQuery("body").removeClass('light');
		jQuery("body").addClass('dark');
		createCookie("is_dark", 'true', 365);
	} else {
		jQuery("body").removeClass('dark');
		jQuery("body").addClass('light');
		createCookie("is_dark", '', -1);
		jQuery('body').removeClass('transparent');
	}
});





/**
	LAYOUT STYLE [wide|boxed]
**/
jQuery("input.boxed_switch").bind("click", function() {
	var boxed_switch = jQuery(this).attr('value');

	if(boxed_switch == 'boxed') {
		jQuery("body").removeClass('boxed');
		jQuery("body").addClass('boxed');
		createCookie("is_boxed", 'true', 365);
	} else {
		jQuery("body").removeClass('boxed');
		createCookie("is_boxed", '', -1);
		jQuery('body').removeClass('transparent');
	}
});



/**
	SEPARATOR STYLE [Normal|Skew|Reversed Skew|Double Diagonal|Big Triangle]
**/
jQuery("input.separator_switch").bind("click", function() {
	var separator_switch = jQuery(this).attr('value');

	if(separator_switch == 'sep-1') {
		jQuery("body").removeClass('separator-2');
		jQuery("body").removeClass('separator-3');
		jQuery("body").removeClass('separator-4');
		jQuery("body").removeClass('separator-5');
		jQuery("body").removeClass('separator-6');
		jQuery("body").addClass('separator-1');
		createCookie("sep-1", 'true', 365);
	}
	
	else if (separator_switch == 'sep-2') {
		jQuery("body").removeClass('separator-1');
		jQuery("body").removeClass('separator-3');
		jQuery("body").removeClass('separator-4');
		jQuery("body").removeClass('separator-5');
		jQuery("body").removeClass('separator-6');
		jQuery("body").addClass('separator-2');
		createCookie("sep-2", 'true', 365);
	}
	
	else if (separator_switch == 'sep-3') {
		jQuery("body").removeClass('separator-2');
		jQuery("body").removeClass('separator-1');
		jQuery("body").removeClass('separator-4');
		jQuery("body").removeClass('separator-5');
		jQuery("body").removeClass('separator-6');
		jQuery("body").addClass('separator-3');
		createCookie("sep-3", 'true', 365);
	}
	
	else if (separator_switch == 'sep-4') {
		jQuery("body").removeClass('separator-2');
		jQuery("body").removeClass('separator-3');
		jQuery("body").removeClass('separator-1');
		jQuery("body").removeClass('separator-5');
		jQuery("body").removeClass('separator-6');
		jQuery("body").addClass('separator-4');
		createCookie("sep-4", 'true', 365);
	}
	
	else if (separator_switch == 'sep-5') {
		jQuery("body").removeClass('separator-2');
		jQuery("body").removeClass('separator-3');
		jQuery("body").removeClass('separator-1');
		jQuery("body").removeClass('separator-4');
		jQuery("body").removeClass('separator-6');
		jQuery("body").addClass('separator-5');
		createCookie("sep-5", 'true', 365);
	}
	
	else {
		jQuery("body").removeClass('separator-2');
		jQuery("body").removeClass('separator-3');
		jQuery("body").removeClass('separator-1');
		jQuery("body").removeClass('separator-4');
		jQuery("body").removeClass('separator-5');
		jQuery("body").addClass('separator-6');
		createCookie("sep-6", 'true', 365);
	}
});