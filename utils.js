function linkifyRJ(string) {
  return string.replace(
      /(RJ[0-9]{6})(?!<\/a>|" rel=)/gi,
    `<a href="${DLSiteWorkURL('$1')}" rel="noreferrer">$1</a>`);
}

function DLSiteWorkURL(rjcode) {
  return `http://www.dlsite.com/maniax/work/=/product_id/${rjcode}`;
}

function DLSiteAnnounceURL(rjcode) {
  return `http://www.dlsite.com/maniax/announce/=/product_id/${rjcode}`;
}

function hvdbURL(code) {
  return `https://hvdb.me/Dashboard/WorkDetails/${code}`;
}

function addLinkbar(code, extra='') {
  jQuery('body').prepend(`
<div style="padding:0.5em;background-color:lightgray;font-size:large;">
<a href="${DLSiteWorkURL('RJ' + code)}" rel="noreferrer">DLSite</a>
(<a href="${DLSiteAnnounceURL('RJ' + code)}" rel="noreferrer">announce</a>)
<a href="${hvdbURL(code)}" rel="noreferrer">HVDB</a>
${extra}
</div>
`);
}

function addLinkbarWithNyaa(code, title) {
  addLinkbar(code, `
<a href="https://sukebei.nyaa.si/?q=${encodeURIComponent(title)}">sukebei</a>
`)
}

/* For DLSite */
function getWorkTitle() {
  var elem = jQuery('#work_name').find('a').clone();
  elem.children().remove();
  return elem.text().trim();
}
