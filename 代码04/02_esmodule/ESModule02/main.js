// 导入方式一
// import { name, age, sayHello } from "./foo.js"

// 导入方式二
// import { name as fname } from "./foo.js"

// console.log(name)
// console.log(age)
// console.log(sayHello())


// 导入方式三 导入时可以给整个模块起别名
import * as foo from "./foo.js"

console.log(foo.name)
console.log(foo.age)
foo.sayHello()
