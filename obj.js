                                            //ES5
//对象的 创建  
var obj={};
//添加一个 普通属性
var obj={a:0};//继承了全局对象的toString()方法a自动转换为了字符串

                                            //ES6
//对象（object）是 JavaScript 最重要的数据结构。ES6 对它进行了重大升级，本章介绍数据结构本身的改变，
//变量
const foo='bar';
const baz={foo};
baz //{foo:'bar'}
//等同于
const baz={foo:foo};
//函数
function f(x,y){
    return {x,y}
}
//等同于
function f(x,y){
    return {x:x,y:y};
}
f(1,2)//object{x:1,y:2}
//除属性简写，方法也可以简写
const o={
    method(){
        return "Hello";
    }
}
//等同于
const o={
    method:function(){
        return "Hello!";
    }
}

//ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
//举一个实际的例子
let birth='2000/01/01';
const person={
    name:'张三',
    birth,
    //等同于birth:birth
    hello(){console.log('我的名字是',this.name);}
    //等同于hello：function()
};

//简写用于返回值也非常的方便
function getpoint(){
    const x=1;
    const y=10;
    return {x,y};
    //{x:1,y:10}
}
getpoint()
//{x:1,y:10}

//CommonJS 模块输出一组变量，就非常适合简洁写法
let ms ={};
function getItem(key){
    return key in ms? ms[key]:null;
}
function setItem(key,value){
    ms[key]=value;
}
function clear(){
    ms={};
}
moudule.exports={getItem,setItem,clear};
//等同于
moudule.exports={
    getItem:getItem,
    setItem:setItem,
    clear:clear
}
//1 Object.is ()
//ES5比较两个值是否相等，只有两个运算符


//属性表达式
//javascript定义对象的属性，有两种方法
//方法一
obj.foo=true;
//方法二
obj['a'+'bc']=123;

//但是，如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一（标识符）定义属性。
var obj={
      foo:true,
      ABC:123  
};
let propkey='foo';
let obj={
    [propkey]:true,
    ['a'+'bc']:123
};