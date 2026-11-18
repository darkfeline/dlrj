(function() {
  'use strict';
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (!tabs || !tabs[0]) {
      return;
    }
    chrome.tabs.sendMessage(tabs[0].id, {action: 'getWorkInfo'}, function(response) {
      if (chrome.runtime.lastError || !response) {
        return;
      }
      addLinkbarWithNyaa(response.rjcode, response.title);
    });
  });
})();
