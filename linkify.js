(function() {
  'use strict';

  jQuery.noConflict();

  function linkifyRJ(string) {
    return string.replace(
        /(RJ[0-9]{6})(?!<\/a>|" rel=)/gi,
      `<a href="${DLSiteWorkURL('$1')}" rel="noreferrer">$1</a>`);
  }

  waitForKeyElements("blockquote.postMessage", function(query) {
    query.each(function() {
      this.innerHTML = linkifyRJ(this.innerHTML);
    });
  });
})();
