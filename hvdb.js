(function() {
  'use strict';
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getWorkInfo') {
      var code = window.location.href.match(/WorkDetails\/(?:RJ)?([0-9]+)/)[1];
      // Pad preceding zeros
      switch (code.length) {
      case 8:
        // 8 digit beginning with '01'
        break;
      case 7:
        // 8 digit beginning with '01'
        code = '0' + code;
        break;
      default:
        // 6 digit format
        code = ('0000' + code).slice(-6);
        break;
      }
      code = 'RJ' + code;
      sendResponse({
        rjcode: code,
        title: getHVDBWorkTitle()
      });
    }
  });
})();
