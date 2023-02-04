function getParams() {
    var params = {};
    location.search.slice(1).split("&").forEach(function(pair) {
        pair = pair.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params
}

function getUpperFolder() {
    return window.location.href.split("/")[3].toLowerCase()
}