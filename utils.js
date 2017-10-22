function DLSiteWorkURL(rjcode) {
  return `http://www.dlsite.com/maniax/work/=/product_id/${rjcode}`;
}

function DLSiteAnnounceURL(rjcode) {
  return `http://www.dlsite.com/maniax/announce/=/product_id/${rjcode}`;
}

function hvdbURL(code) {
  return `http://hvdb.me/Dashboard/WorkDetails/${code}`;
}

function addLinkbar(code) {
  jQuery('body').prepend(`
<div style="padding:0.5em;background-color:lightgray;font-size:large;">
<a href="${DLSiteAnnounceURL('RJ' + code)}" rel="noreferrer">DLSite</a>
<a href="${hvdbURL(code)}" rel="noreferrer">HVDB</a>
</div>
`);
}
