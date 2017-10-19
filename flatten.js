
// 利用数组的 reduce 和 concat 方法，
// 定义一个将二维数组拉平为一维数组的函数。

function flatten(array) {
   return array.reduce(function(flat,current) {
       return flat.concat(current);
    });
}


var arr = [[1, 2, 3], [4, 5], [6]];

flatten(arr);
// [1, 2, 3, 4, 5, 6]
