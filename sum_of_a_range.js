
// 接受两个参数（数字），
// 返回一个包含两个参数之间的所有数字（包括这两个参数）的数组
function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

range(5, 10)
//  [5, 6, 7, 8, 9, 10]


// version 2: 改进版，新增第三个可选的参数 step，默认为1，
// 如果设置了该参数， 数组的元素的间隔为 step.
function range(start, end, step) {
    if(!step) {
        step = 1;
    }
    var arr = [];
    if (step > 0) {
        for (var i = start; i <= end; i = i + step) {
            arr.push(i);
        }
    } else {
        for (var i = start; i >= end; i = i + step) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// 计算（元素为数字的）数组的总和
function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
         total += array[i];
    }
    return total;
}
