### 使用vite创建项目

```javascript
npm init vue@latest
```



### 不同方式导入

```javascript
import {} from module
import defaultExport from module

- import {} from 'module' 语法：
  module.js 有以下超期
  
  export const a = 1;
  export const b = 2;

  import { a } from './module.js'
  import { a, b } from './module.js'

- import defaultExport from 'module'
  export default 'hello world'

  import message from './module.js'

  console.log(message)  // 输出 'hello world'

 - 在vue组件中,通常使用第一种方式导入vue本身或其他库的命名导出,而使用第二种方式导入vue的默认导出
   import Vue from 'vue'
   import { Component, Directive } from 'vue-property-decorator'
  
```

