// 自定义的 every() 函数，
// 参数为 一个数组 和 一个回调函数
// 如果 数组的每个元素执行回调函数后都返回 true， 则返回 true,
// 否则， 返回 false
function every(array, assert) {
    for (var i = 0; i < array.length; i++) {
        if(!assert(array[i])) {
            return false;
        }
    }
    return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false