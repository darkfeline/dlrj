function DLSiteWorkURL(rjcode) {
  return `http://www.dlsite.com/maniax/work/=/product_id/${rjcode}`;
}

function DLSiteAnnounceURL(rjcode) {
  return `http://www.dlsite.com/maniax/announce/=/product_id/${rjcode}`;
}

function hvdbURL(code) {
  return `https://hvdb.me/Dashboard/WorkDetails/${code}`;
}

function asmrURL(rjcode) {
  return `https://asmr.one/work/${rjcode}`;
}

function addLinkbar(rjcode, extra='') {
  jQuery('body').prepend(`
<div style="padding:0.5em;background-color:lightgray;font-size:large;">
<a href="${DLSiteWorkURL(rjcode)}" rel="noreferrer">DLSite</a>
(<a href="${DLSiteAnnounceURL(rjcode)}" rel="noreferrer">announce</a>)
<a href="${hvdbURL(rjcode)}" rel="noreferrer">HVDB</a>
<a href="${asmrURL(rjcode)}" rel="noreferrer">ASMR</a>
${extra}
</div>
`);
}

function addLinkbarWithNyaa(rjcode, title) {
  addLinkbar(rjcode, `
<a href="https://sukebei.nyaa.si/?q=${encodeURIComponent(title)}">sukebei</a>
`)
}

function getDLSiteWorkTitle() {
  var elem = jQuery('#work_name').find('a').clone();
  elem.children().remove();
  return elem.text().trim();
}

function getHVDBWorkTitle() {
  return jQuery('label[for="Name"]').next('div').find('label#circleLabel').text().trim();
}
