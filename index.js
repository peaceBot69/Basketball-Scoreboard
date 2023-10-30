let home = 0
let guest = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")


function ftp_home() {
    home += 1
    homeEl.textContent = home
}
function ntp_home() {
    home += 2
    homeEl.textContent = home 
}
function ttp_home() {
    home += 3
    homeEl.textContent = home 
}

function ftp_guest() {
    guest += 1
    guestEl.textContent = guest
}
function ntp_guest() {
    guest += 2
    guestEl.textContent = guest
}
function ttp_guest() {
    guest += 3
    guestEl.textContent = guest
}