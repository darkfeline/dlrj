(function() {
  'use strict';
  var code = window.location.href.match(/WorkDetails\/([0-9]+)/)[1];
  code = ('0000' + code).slice(-6)  // Pad preceding zeros
  code = 'RJ' + code
  addLinkbarWithNyaa(code, getHVDBWorkTitle());
})();
