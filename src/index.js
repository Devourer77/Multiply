module.exports = function multiply(first, second) {
    var firstS = first.split('').reverse();
    var secondS = second.split('').reverse();

    var Result = [];

    for (var i = 0; i < firstS.length; i++) {
        for (var a = 0; a < secondS.length; a++) {
            var m = firstS[i] * secondS[a];
            Result[i + a] = (Result[i + a]) ? Result[i + a] + m : m;
        }
    }

    for (var i = 0; i < Result.length; i++) {
        var numb = Result[i] % 10;
        var namA = Math.floor(Result[i] / 10);
        Result[i] = numb;

        if (Result[i + 1])
            Result[i + 1] += namA;
        else if (namA != 0)
            Result[i + 1] = namA;
    }


    return Result.reverse().join('');
};
