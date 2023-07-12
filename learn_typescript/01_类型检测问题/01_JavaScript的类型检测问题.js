// 在被调用时，没有做任何参数的校验
// 1.没有对类型进行校验
// 2.没有对是否传入参数进行校验
function foo(msg) {
    console.log(msg.length);
}
foo('Hello, ')
foo('World!')

foo() // 报错

console.log('这里是不会走的');