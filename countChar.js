// 返回 某个字符串 中所包含的字符 'B' 的个数
function countBs(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'B') {
            num += 1;
        }
    }
    return num;
}

console.log(countBs("BBC"));
// → 2



// 返回 某个字符串 中所包含的指定字符的个数
function countChar(str, char) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            num += 1;
        }
    }
    return num;
}

console.log(countChar("kakkerlak", "k"));
// → 4