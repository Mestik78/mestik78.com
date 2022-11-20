var host = window.location.host
var subdomain = host.split('.')[0]

if (subdomain == "fiverr") {
    var payButton = document.getElementById("buyButton")
    payButton.className += " hide"

    var discordButton = document.getElementById("discordButton")
    discordButton.className += " hide"
}