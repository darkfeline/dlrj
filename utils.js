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

function unikonURL(rjcode) {
  return `https://asmr.unikon.art/work/${rjcode}`;
}

function addLinkbar(rjcode, extra='') {
  jQuery('body').prepend(`
<div style="padding:0.5em;background-color:lightgray;font-size:large;white-space:nowrap;">
<a href="${DLSiteWorkURL(rjcode)}" target="_blank" rel="noreferrer">DLSite</a>
(<a href="${DLSiteAnnounceURL(rjcode)}" target="_blank" rel="noreferrer">announce</a>)
<a href="${hvdbURL(rjcode)}" target="_blank" rel="noreferrer">HVDB</a>
<a href="${asmrURL(rjcode)}" target="_blank" rel="noreferrer">ASMR</a>
<a href="${unikonURL(rjcode)}" target="_blank" rel="noreferrer">unikon</a>
${extra}
</div>
`);
}

function addLinkbarWithNyaa(rjcode, title) {
  addLinkbar(rjcode, `
<a href="https://sukebei.nyaa.si/?q=${encodeURIComponent(title)}" target="_blank" rel="noreferrer">sukebei</a>
`)
}

function getDLSiteWorkTitle() {
  var elem = jQuery('#work_name');
  return elem.text().trim();
}

function getHVDBWorkTitle() {
  return jQuery('label[for="Name"]').next('div').find('label#circleLabel').text().trim();
}
