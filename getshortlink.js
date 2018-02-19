var httpheader = /(http:\/\/|https:\/\/)?/i;
var traillingslash = /[\/\s]*$/i;

var kcregex = /ksc\.moe/i;

var kcregex = /www\.kerbcat\.com\/.*\/(?=\d+)/i;

var dreveregex = /dreve\.kerbcat\.com\/s\//i;

var forumregex = /forum\.kerbalspaceprogram\.com\/index\.php\?\/topic\//i;
var forumtrailling = /-[\w-]+/i;
var forumcommentregex = /&do=findComment&comment=(?=\d+)/i;

var kcsl = "http://ksc.moe/";

var getURLType = function(url) {
  return url.match(forumregex)
    ? 3
    : url.match(dreveregex) ? 2 : url.match(kcregex) ? 1 : -1;
};

var parsekcsl = function(inurl) {
  if (inurl == "" || inurl.match(kcregex)) return inurl;
  var result = null;
  // type = getURLType(inurl);
  url = inurl.replace(httpheader, "").replace(traillingslash, "");
  switch (getURLType(inurl)) {
    case 1:
      result = "#p" + url.replace(kcregex, "");
      break;
    case 2:
      result = "#d" + url.replace(dreveregex, "");
      break;
    case 3:
      psurl = url
        .replace(forumregex, "")
        .replace(forumtrailling, "")
        .split(forumcommentregex)
        .join("-");
      result = "#f" + psurl;
      break;
    case -1:
      throw "NotAKerbCatWebsiteException";
      return -1;
      break;
  }
  if (result) {
    result = kcsl + result;
    return result;
  } else {
    throw "InternalParseErrorException";
    return -1;
  }
};

// export default kscl();
