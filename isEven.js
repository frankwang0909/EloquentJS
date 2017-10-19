function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
         return false;
    }
}

// 用递归地方式实现 isEven 函数
// Zero is even， One is odd.
// For any other number N, its evenness is the same as N - 2.
function isEven(n) {
    if( n === 0) {
        return true;
    } else if( n === 1) {
        return false;
    } else if( n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}