var clock;
(function (clock) {
    var output = '';
    var firstRun = true;
    var romanNumerals = [
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
        'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
        'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX',
        'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL',
        'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L',
        'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX'
    ];
    setInterval(function () {
        isTenSeconds(moment());
        everySecond(moment());
    }, 1000);
    function everySecond(time) {
        var seconds = time.seconds();
        console.log(roman(seconds));
    }
    function isTenSeconds(time) {
        var seconds = time.seconds();
        if (firstRun) {
            firstRun = false;
            output = Array(Math.floor((seconds / 10) + 1)).join('x');
        }
        if (seconds % 10 === 0 && seconds !== 0) {
            output = Array((seconds / 10) + 1).join('x');
        }
        else if (seconds === 0) {
            output = '';
        }
        console.log("Seconds " + seconds + ": " + output);
    }
    ;
    function roman(second) {
        return romanNumerals[second];
    }
})(clock || (clock = {}));
//# sourceMappingURL=script.js.map