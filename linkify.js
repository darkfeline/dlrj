(function() {
  'use strict';

  jQuery.noConflict();

  function linkify(query) {
    query.each(function() {
      this.innerHTML = this.innerHTML.replace(
          /(RJ[0-9]{6})(?!<\/a>|" rel=)/gi,
        `
<a href="http://www.dlsite.com/maniax/work/=/product_id/$1" rel="noreferrer">$1</a>
<small>
[<a href="http://hvdb.me/Dashboard/WorkDetails/$1" rel="noreferrer">HVDB</a>]
</small>
`);
    });
  }

  waitForKeyElements("blockquote.postMessage", linkify);
})();
