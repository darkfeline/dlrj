(function() {
  'use strict';

  jQuery.noConflict();

  function linkify(query) {
    query.each(function() {
      this.innerHTML = this.innerHTML.replace(
          /RJ([0-9]{6})(?!<\/a>|" rel=)/gi,
        '<a href="http://www.dlsite.com/maniax/work/=/product_id/RJ$1" rel="noreferrer">RJ$1</a>');
    });
  }

  waitForKeyElements("blockquote.postMessage", linkify);
})();
