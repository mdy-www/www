//1RegExp构造函数
//先看下ES5中的构造函数怎么个意思
var regex=new RegExp('xyz','i')
//等价于
var reges=/xyz/i;
//还有一种用法
var reg_0=new RegExp(/xyz/i);
//等价于
var reg_0=/xyz/i;
//但是Es5不允许此时使用第二个参数添加修饰符，否则会报错。
var reg_0=new RegExp(/xyz/,'i');
//报错
//ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
new RegExp(/abc/ig, 'i').flags
// "i"
//上面代码中，原有正则对象的修饰符是ig，它会被第二个参数i覆盖。
//还有一些字符串的正则方法。以后在说