                                                           //this top-level object
//顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。在ES5之中，顶层对象的属性与全局变量是等价的。
window.a=1
console.log(a)//1
a=2;
window.a//2
//在上述代码中，顶层对象的属性赋值与全局变量的赋值是一件事。

let b=1;
window.b //undefined

//javascript 与语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里是不统一的
//浏览器里面，顶层对象是window,但是Node和web Worker没有window.
//浏览器和web Worker里面，self也指向顶层对象，但是node没有self、
//Node里面，顶层对象是global,但是其他环境都不支持。