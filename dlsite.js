(function() {
  'use strict';
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getWorkInfo') {
      var code = window.location.href.match(/(RJ[0-9]+)/)[1];
      sendResponse({
        rjcode: code,
        title: getDLSiteWorkTitle()
      });
    }
  });
})();
