## 手动实现几个数组相关的高阶函数

1.forEach()
```javascript
function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}
```


2.filter()
```javascript
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if(test(array[i])){
            passed.push(array[i]);
        }
    }
    return passed;
}
```


3.map()
```javascript
function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}
```


4.reduce()
```javascript
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
}
```

5.some()
```javascript
function some(array, assert) {
    for (var i = 0; i < array.length; i++) {
        if (assert(array[i])) {
            return true;
        }
    }
    return false;
}
```

6.every()
```javascript
function every(array, assert) {
    for (var i = 0; i < array.length; i++) {
        if(!assert(array[i])) {
            return false;
        }
    }
    return true;
}
```

7.将二维数组拉平为一维数组 flatten()
```javascript
function flatten(array) {
    return array.reduce(flat, current) {
        return flat.concat(current);
    }
}
```