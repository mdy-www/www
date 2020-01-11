//模板字符串
//举个例子
//jquery的方法
$('#result').append(
    'there are <b>'+basked.count+'</b>'+
    'items in your basket, '+
    'em'+basket.onSale+
    '</em> are on sale'
)
//上面的这种写法相当的方便，Es6引用了模板字符串解决这个问题
$('#result').append(`
    There are <b>${basket.count}</b> items
    in your basket,<em>${basket.onSale}</em>
    are on sale!
`)
//说明一下
//模板字符串是增强版的字符串，用反引号（`）标识，它可以当做普通子串shi'yon使用，也可以用来定义多行字符串，或者在字符串中嵌套变量大概就是这些功能
//普通字符串
`In javascript '\n' is a line-feed`
//多行字符串
`In javascript this is 
not legal
`
//"In javascript this is 
// not legal"
//字符串中嵌入变量
let name='Bob',time="today";
`Hello ${name},how are you ${time}?`
//"Hello Bob,how are you today"
//上面代码都是使用的模板字符串，都是反引号表示，如果在模板中需要使用反引号则前面要用反斜杠转义
let greeting=`\`hello\`world`
//如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出中
$("#list").html(
    `<ul>
        <li>first</li>
        <li>second</li>
    </ul>
    `
);
//面代码中，所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。
//如果不想要这个换行的话可以使用.trim()消除
$("#list").html(
    `<ul>
        <li>first</li>
        <li>second</li>
    </ul>
    `.trim()
    );
//模板字符串中嵌入变量，需要将变量名写在${}之中。
function authorize(user,action){
    if(!user.hasprivilege(action)){
        throw new Error(
            //传统写法为
            //'User '
            //+ user.name
            //+ 'is not authorized to do'
            //+ action
            //+ '.'
            //ES6写法
            `User ${user.name} is not authorized to do ${action}.`
        )
    }
}
//大括号内部可以放入任意的javscript表达式，可以进行计算，以及引用对象属性
let x=1;
let y=2;
`${x}+${y}=${x+y}`
//"1+2=3"
`${x}+${y*2}=${x+y*2}`
//"1+4=5"
let obj={x:1,y:2};
`${obj.x+obj.y}`
//3
//模板字符串还可以调用函数
function fn(){
    return "Hello World"
}
`foo ${fn()} bar`
//"foo Hello World bar"
//由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。
`Hello ${'World'}`
//"Hello World"
//模板字符串还能嵌套
//？？？？？？？？？？？？？？？？？？？？？？


//模板编译
//上面代码在模板字符串之中，放置了一个常规模板。该模板使用<%...%>放置 JavaScript 代码，使用<%= ... %>输出 JavaScript 表达式。
//先感受一下
let template=`
<ul>
<% for(let i=0;i<dara.supplies.length;i++) {%>
    <li><%=data.supplies[i]%></li>
<%}%>
</ul>
`;
//???????????????????????????