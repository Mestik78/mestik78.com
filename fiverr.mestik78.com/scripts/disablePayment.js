var host = window.location.host
var subdomain = host.split('.')[0]

var payButton = document.getElementById("buyButton")

if (subdomain == "fiverr") {
    payButton.className += " hide"
}