'use strict';

(function ($, plugin) {
	if ($) { // Global jQuery
		plugin.fn = (plugin.isStatic ? $ : $.fn)[plugin.name] = plugin.factory($);
	}

	if (typeof exports !== 'undefined' && plugin.fn) { // CommonJS
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = plugin.fn;
		}

		exports[plugin.name] = plugin.fn;
	} else if (typeof define === 'function' && define.amd) { // AMD
		define(['jquery'], function ($) {
			var fn = (plugin.isStatic ? $ : $.fn)[plugin.name] = plugin.factory($);
			return fn;
		});
	} else if (!$) {
		/*
			jQuery isn't defined and user is
			trying to use plugin directly without
			CommonJS or AMD support
		*/
		throw 'jQuery not defined.';
	}
})(window.$, {
	'name' : 'backboneHijax',
	'isStatic' : true,
	'factory' : function ($) {
		return function (router) {
			return $(document).on('click', 'a[href]:not([data-bypass])', function (e) {
				var href = $(this).attr('href'),
					url = href.replace(/^\//,'').replace('\#\!\/','');

				if (href.charAt(0) === '/') {
					router.navigate(url, {'trigger' : true});
				    e.preventDefault();
				    return false;
				}
			});
		};
	}
});