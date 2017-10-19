// 自定义的 some() 函数 
// 参数为 数组 和 回调函数
// 如果数组中只要有一个元素执行回调函数后返回 true， 则返回 true；
// 否则，返回 false。
function some(array, assert){
    for (var i = 0; i < array.length; i++) {
        if(assert(array[i])) {
            return true;
        }
    }
    return false;
}


console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false