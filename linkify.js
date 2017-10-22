(function() {
  'use strict';

  jQuery.noConflict();

  function linkify(query) {
    query.each(function() {
      this.innerHTML = this.innerHTML.replace(
          /(RJ[0-9]{6})(?!<\/a>|" rel=)/gi,
        `<a href="${DLSiteAnnounceURL('$1')}" rel="noreferrer">$1</a>`);
    });
  }

  waitForKeyElements("blockquote.postMessage", linkify);
})();
