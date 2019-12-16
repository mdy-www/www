//es6之前不能直接为函数参数指定默认值，只能cai'y采用变通的方法
function log(x,y){
    y=y||'World';
    console.log(x,y)
}
log('Hello','china') //Hello china
log('Hello',' ') //Hello World 无法的显示出来
//上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。

//为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。

if (typeof y === 'undefined') {
  y = 'World';
}
//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

//参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}

//使用参数默认值时，函数不能有同名参数。
// 不报错
function foo(x, x, y) {
  // ...
}

// 报错
function foo(x, x, y = 1) {
  // ...
}
// SyntaxError: Duplicate parameter name not allowed in this context

//另外，一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101

///函数的 length 属性
//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
//上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了 3 个参数，其中有一个参数c指定了默认值，因此length属性等于3减去1，最后得到2。

//这是因为length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，后文的 rest 参数也不会计入length属性。

(function(...args) {}).length // 0
//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1

//作用域
var x=1;
function f(x,y=x){
    console.log(y)
}
f(2)//2
//上述中参数的默认值等于变量x而不是全局变量x所以输出是2

let x=1;
function f(y=x){
    let x=2;
    console.log(y);
}
f()//1
//引用了外部的全局变量x,函数调用时，函数体内部的局部变量影响不到默认值变量x
function f(y=x){
    let x=2;
    console.log(y);
}
f()//ReferenceError: x is not defined
//此时全局变量不存在就会报错。

var x=1;
function foo(x=x)

//箭头函数
//基本用法
var f=v=>v
//等同于
function f(v){
    return v

}
//如果箭头函数不需要参数或者多个参数，就使用一个圆括号代表参数部分
var f=()=>5
function (){
    return 5
}
var sum=(num1,num2)=>num1+num2
function sun(num1,num2){
    return num1+num2
}
//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来
var sum=(num1,num2)=>{return num1+num2;}
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加括号，否则会报错
let getTempItem=id=>{id:id,name:"Temp"};//报错
let getTempItem=id=>({id:id,name:"Temp"});
// 使用注意点
// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

//先说下第一点this对象的指向是可变的，但是在箭头函数中它是固定的
function foo(){
    setTimeout(()=>{
        console.log('id:',this.id)
    },100);
}