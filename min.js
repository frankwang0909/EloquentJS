// 比较两个数，返回较小的那个
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
