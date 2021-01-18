// cope 需要用到的模块
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');



/*
*   因为 Buffer 在 Node 中使用非常频繁，所以 Buffer 被直接内置到 global 中，
*   而不需要要像 path 一样用 require 引入
* */


/*
*  alloc: 创建并初始化一个 Buffer 数据
* */
const buf1 = Buffer.alloc(10,1)
console.log(buf1)

/*
*  allocUnsafe: 创建一个长度为 10 ，未初始化的 Buffer
* */
const buf2 = Buffer.allocUnsafe(10)
console.log(buf2)

/*
*  from: 使用 0 – 255 范围内的字节数组 array 来分配一个新的 Buffer。 超出该范围的数组条目会被截断以适合它
* */
const buf3 = Buffer.from([1,2,3])
const buf4 = Buffer.from('test')
console.log(buf3)
console.log(buf4)

/*
*   byteLength： 返回编码后的字符串的字节长度,默认编码为 utf-8
* */
console.log(Buffer.byteLength('test1'))

/*
*   isBuffer: 判断传入的参数是不是一个 Buffer
* */
console.log(Buffer.isBuffer({}))
console.log(Buffer.isBuffer(buf4))

/*
*   concat: 接受一个数组，将数组中的 Buffer 实例合并成一个新的 Buffer 并返回
* */
const buf5 = Buffer.concat([buf3,buf4])
console.log(buf5)

/*
*   length: 返回 Buffer 占用的字节数
*           Buffer 的大小在创建时就已经确定了
* */
console.log(buf5.length)


/*
*   toString: 将编码后的 Buffer 字符串转换成字符
* */
const buf6 = Buffer.from('Hello Buffer')
console.log(buf6.toString())

/*
*   fill: 填充
* */
const buf7 = Buffer.allocUnsafe(10)
console.log(buf7)
console.log(buf7.fill(10,2,6))

/*
*   equals: 判断两个 Buffer 的值是否相等
* */
const buf8 = Buffer.from('abc')
const buf9 = Buffer.from('abc')
console.log(buf6.equals(buf7))
console.log(buf8.equals(buf9))

/*
*   indexOf: 查找符合条件的字符编码,找到就返回字符编码的下标，未找到返回 -1
* */
console.log(buf9.indexOf('bc'))
console.log(buf9.indexOf('dd'))

/*
*   copy: 拷贝 buf 中某个区域的数据到 target 中的某个区域，即使 target 的内存区域与 buf 的重叠
* */

const buf = Buffer.from('中文字符串!')

for(let i =0; i<buf.length;i+=5){
    const target = Buffer.allocUnsafe(5)
    buf.copy(target,0,i)
    console.log(target.toString())
}
console.log('使用 string_decoder 保证不出现乱码')
for(let i =0; i<buf.length;i+=5){
    const target = Buffer.allocUnsafe(5)
    buf.copy(target,0,i)
    console.log(decoder.write(target))
}
