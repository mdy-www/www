                                                                              // variate  ES5_variate VS ES6_variate

 {
    let a=10;//ES6 中有了块级概念let只在当前的代码块内有效 
    var b=1; 
}
a // ReferenceError:a is not defined 
b//1

//for循环的计数器，就适合使用let命令
for(let i=0;i<10;i++){

}
console.log(i); //referenceError:i is not defined
var a=[];
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i)
    }
}
a[6]()//6
//变量是i声明的。当前的块级作用域中i只在本轮循环有效所以每一次循环的i其实都是一个新的变量，所以最后输出的就是6
//另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for(let i=0;i<3;i++){
    let i='abc'
    console.log(i)
}
//abc
//abc
//abc
//上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

//不存在变量的提升
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
//使用var的话会发生b变量的提升，即脚本开始运行的时候，变量foo就已经存在了，但是赋值留在了原地，输出undefined但是let不存在这种现象。

//块级作用域中的变量
var tmp=123;
if(true){
    tmp='abc';
    let tmp;
}
console.log(tmp);//ReferenceError:tmp is not defined
//上面的代码。存在全局变量tmp,但是块级作用域内let又声明了一个局部块级变量tmp,导致后者绑定这个块级作用域，所以在let声明变量之前，对tmp赋值会报错。


// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
//上面代码报错，块级内的作用域引起的，使用let声明变量时，只要变量还没有声明完成前使用，就会报错。

//不允许重复声明即let不予许在相同作用域内，重复声明同一个变量
// 报错
function func() {
    let a = 10;
    var a = 1;
  }
  
  // 报错
  function func() {
    let a = 10;
    let a = 1;
  }
 // 因此，不能在函数内部重新声明参数。
  
  function func(arg) {
    let arg;
  }
  func() // 报错
  
  function func(arg) {
    {
      let arg;
    }
  }
  func() // 不报错
