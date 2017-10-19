# *Eloquent JavaScript* 读书笔记及代码片段


## 简介：

[Eloquent JavaScript](http://eloquentjavascript.net/index.html]) 是 由 Marijn Haverbeke 编写的 JavaScript 编程入门书籍。

## 第一章：基本数据类型

作者 Marijn Haverbeke 将 JavaScript 的值归为以下 6 种基本类型：

- 1.numbers: 数字
- 2.strings： 字符串
- 3.Booleans：布尔值
- 4.objects：对象
- 5.functions：函数
- 6.undefined values： `null` 和 `undefined`


[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)上的分类更加合理些：

- 1.Primitives 原始值 
    - 1.1 Boolean
    - 1.2 Null
    - 1.3 Undefined
    - 1.4 Number
    - 1.5 String
    - 1.6 Symbol： ES6 新增数据类型
- 2.Ojbect 对象：包括 普通的对象、数组、函数等



## 第三章：函数 


### 练习

1.编写一个 min() 函数，比较两个数字，返回其中较小的那个数字。 

见 [min.js](./min.js)

2.用递归的方式实现 isEven() 函数，如果参数为偶数，返回 true；奇数则返回 false。

见 [isEven.js](./isEven.js)

3.编写一个函数 countChar()，计算某个字符串 str 中所包含的指定字符 char 的个数。

见 [countChar.js](./countChar.js)



## 第五章：高阶函数 

[手动实现了几个数组相关的高阶函数](./higher_order_functions.md)

JavaScript(ES5) 内置 以下数组的方法，手动实现类似功能的高阶函数，有助于加深对这些数组方法的理解：

1.forEach()

2.map()

3.filter()

4.reduce()

5.some()

6.every()





