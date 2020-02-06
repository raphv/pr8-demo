$(function() {
	$("a[href^='https://']").click(function() {
		if (
			typeof cordova !== "undefined"
			&& typeof cordova.InAppBrowser  !== "undefined"
		) {
			cordova.InAppBrowser.open(this.href,'_system');
			return false;
		}
	});
});