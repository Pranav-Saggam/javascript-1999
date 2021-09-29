
function average(a) {
    var s= 0;
    for (let value of a) {
        s += value;
    }
    return s / a.length;
};

var a1 = [3,4,5,6,10]
console.log(average(a1))

function average1(average) {
    return average(a1);
}

console.log(average1(average))

