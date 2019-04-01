// Få tak i Url parameter
var url_string = window.location.href;
var url = new URL(url_string);
var pid = url.searchParams.get("pid");
console.log(pid);
