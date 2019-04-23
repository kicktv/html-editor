$.ajax({url: "https://www.duderent.com/loadbalancer?" + 24999,
dataType: "text",
type: "GET",
success: function(data) {
ea = data.split('=')[1];
setupVideo();}
});
function getUrlVars(){var vars={};
var parts=window.location.href.replace(/[?$]+([^=$]+)=([^$]*)/gi,
function(m,key,value)
{vars[key]=value});return vars}
var id=getUrlVars()["id"];  
$.get("https://jsonp.afeld.me/?url=http://www.247bay.tv/hmbedplayer/" + id + "/2/980/460",
function(e){p=e.split('var hlsUrl = "https://" + ea + "')[1],
url=p.split('";')[0],
src=JSON.parse('{ "l":"'+url+'"}'),
document.getElementById("ap");
ap.src = "http://www.html-editor.tk/bein/url.html?src=" + ('https://'+ea+src.l);
});
