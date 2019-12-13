//迭代器并非javascript的特性，而是一种概念，需要我们自己实现
//先做一个循环
let numbers=[1,2,3];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
//1
//2
//3
//再写一个迭代器
function makeIterator(array){
    var nextIndex=0
    return{
        next:function(){
            return nextIndex<arraylength ?
            {value:array[nextIndex++],done:false}:
            {done:true}
        }
    }
}
let it =makeIterator([1,2,3]);
console.log(it.next());//{value:1,done:false}