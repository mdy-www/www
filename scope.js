                                                                                     //javscript_scope
//let 实际上未为javscript新增了块级作用域
function f1(){
    let n=5;
    if(true){
        let n=10;
    }
    console.log(n); //5 从该例使表明外层代码不受内层代码的影响，如果使用都使用var定义变量n,最后输出的值才是10
}
//作用域的嵌套
{{{{
    {let insane='Hello World'}
    console.log(insane) //报错 外层zuo'yo作用域无法读取内层作用域的变量
}}}}
//块级作用域与函数声明
//考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
// 块级作用域内部的函数声明语句，建议不要使用
{
    let a = 'secret';
    function f() {
      return a;
    }
  }
  
  // 块级作用域内部，优先使用函数表达式
  {
    let a = 'secret';
    let f = function () {
      return a;
    };
  }
  //另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

  // 第一种写法，报错
  if (true) let x = 1;
  
  // 第二种写法，不报错
  if (true) {
    let x = 1;
  }
