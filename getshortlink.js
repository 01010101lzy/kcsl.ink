var httpheader = /(http:\/\/|https:\/\/)?/i;
var traillingslash = /[\/\s]*$/i;
var kcregex = /www\.kerbcat\.com\/.*\/(?=\d+)/i;
var dreveregex = /dreve\.kerbcat\.com\/s\//i;
var kcsl = "http://ksc.moe/";

function kcsl(inurl) {
  if ((inurl = "")) return "";

  url = inurl.replace(httpheader, "").replace(traillingslash, "");
  var result = null;
  type = url.match(dreveregex) ? 2 : url.match(kcregex) ? 1 : -1;
  switch (type) {
    case 1:
      result = "#p" + url.replace(kcregex, "");
      break;
    case 2:
      result = "#d" + url.replace(dreveregex, "");
      break;
  }
  if (result) {
    result = kcsl + result;
    return result;
  } else {
    throw "Not-A-Kerbcat-Website Exception";
    return -1;
  }
}

export default kscl;
