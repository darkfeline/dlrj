chrome.runtime.onInstalled.addListener(function() {
  chrome.action.disable();
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'www.dlsite.com',
              pathPrefix: '/maniax/',
              urlContains: '/=/product_id/'
            }
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'hvdb.me',
              pathPrefix: '/Dashboard/WorkDetails/'
            }
          })
        ],
        actions: [new chrome.declarativeContent.ShowAction()]
      }
    ]);
  });
});
