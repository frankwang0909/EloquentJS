function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
}

reduce([1, 2, 3, 4], function(a, b){
    return a+ b;
}, 0);
// 10


// 等价于 内置的数组方法 reduce()
[1, 2, 3, 4].reduce( function(a, b){
    return a+ b;
}, 0);
// 10

