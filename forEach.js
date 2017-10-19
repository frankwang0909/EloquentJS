
// 自定义的 forEach() 函数
function forEach(array, action) {
    for( var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// → Wampeter
// → Foma
// → Granfalloon

// 等价于内置的数组方法 forEach()

["Wampeter", "Foma", "Granfalloon"].forEach(function(item){
    console.log(item);
});


var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});

// 等价于
numbers.forEach(function(number){
    sum += number;
});


console.log(sum);
// → 15
