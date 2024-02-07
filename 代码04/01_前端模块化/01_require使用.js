// 1.根据路径导入自己编写模块
const utils = require("./utils")
console.log(utils.formatDate())

// 2.导入node提供内置模块
const path = require("path")
console.log(path)

//3.名称不是一个路径也不是一个内置模块(现在当前文件夹查找 node_modules 文件夹， 如果没有向上级查找 然后查找why文件夹 向下查找index.js)
const why = require("why")
console.log(why)