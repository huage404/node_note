// 引入 path 模块

const path = require('path')

const filePath = './path.js'

/*
*   normalize: 将一个路径字符串转换为标准的路径字符串
* */
console.log('将一个路径字符串转换为标准的路径字符串',path.normalize('abc///bcd//cde'))      // abc/bcd/cde


/*
*   join: 将两个路径字符串拼接成一个标准的路径字符串
* */
console.log('将两个路径字符串拼接成一个标准的路径字符串',path.join('abc','bcd'))     // abc/bcd


/*
*   resolve: 将一个相对路径转换成绝对路径
* */
console.log('将一个相对路径转换成绝对路径',path.resolve('./path.js'))     // user/path.js


/*
*   baseName: 获取路径字符串中文件的文件名
* */
console.log('获取文件名',path.basename('abc/bcd/efg.md'))    // efg.md


/*
*   extname: 获取路径字符串中文件的拓展名
* */
console.log('获取拓展名',path.extname('abc/bcd/efg.md'))     // .md


/*
*   dirname: 获取路径字符串中，文件相对与执行文件的相对路径
* */
console.log('获取文件路径',path.dirname('./path.js'))     // .


/*
*   parse: 将一个路径字符串转换成一个路径对象
*   路径对象： { root, dir, base, ext, name }
* */
const pathString = './path.js'
const pathObj = path.parse(pathString)

console.log('转换成路径对象', pathObj)


/*
*   format: 将一个路径对象转换成一个标准的路径字符串
* */
console.log('转换成路径字符串', path.format(pathObj))


/*
*   sep: 返回当前操作系统的路径片段分隔符
* */
console.log('sep',path.sep)     // /


/*
*   delimiter： 返回当前操作系统的路径定界符
* */
console.log(path.delimiter)


/*
*   win32: 提供对特定于 Windows 的 path 方法的实现的访问
* */
console.log(path.win32.delimiter)

/*
*   posix: 提供了 path 方法针对 POSIX 的实现
*   拓展：posix 全称 可移植操作系统接口 ，是一个操作系统为应用程序提供的接口的标准，很多操作系统都支持这个标准
* */
console.log(path.posix.delimiter)

