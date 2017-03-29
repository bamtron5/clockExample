setInterval(function () {
    isTenSeconds(moment());
}, 1000);
function isTenSeconds(time) {
    var curTime = time.seconds();
    if (curTime === 10) {
        document.getElementById('alarm').innerHTML
            = "<h1>Wake up, it's " + curTime + " seconds</h1>";
    }
}
;
//# sourceMappingURL=script.js.map