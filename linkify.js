(function() {
  'use strict';

  jQuery.noConflict();

  function linkifyRJ(string) {
    return string.replace(
      /RJ([0-9]{6,8})(?!<\/a>|" rel=)/gi,
      `<a href="${DLSiteWorkURL('RJ$1')}" rel="noreferrer">RJ$1</a>`);
  }

  waitForKeyElements("blockquote.postMessage", function(query) {
    query.each(function() {
      this.innerHTML = linkifyRJ(this.innerHTML);
    });
  });
})();
