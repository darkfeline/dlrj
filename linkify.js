(function() {
  'use strict';

  jQuery.noConflict();

  waitForKeyElements("blockquote.postMessage", function(query) {
    query.each(function() {
      this.innerHTML = linkifyRJ(this.innerHTML);
    });
  });
})();
