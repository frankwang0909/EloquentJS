
// 自定义的 map 函数，
// 参数为 数组 和 回调函数，
// 返回值为 一个新的数组
function map (array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

// 原始数据
var ancestry = [
    {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
    {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
    {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
    {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
    {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}
]

// 筛选出超过 80 岁的人，组成一个新的数组。
var overEighty = ancestry.filter(function(person) {
    return person.died - person.born > 80;
});

map(overEighty, function(person) {
    return person.name;
});
// ["Philibert Haverbeke", "Clara Aernoudts", "Emile Haverbeke"]


// 等价于 内置的数组方法 map()
overEighty.map(function(person) {
    return person.name;
});
// ["Philibert Haverbeke", "Clara Aernoudts", "Emile Haverbeke"]
