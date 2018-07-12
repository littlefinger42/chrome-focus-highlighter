chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.insertCSS(tab.ib, {
		file: 'src/inject/inject.css'
	});
});