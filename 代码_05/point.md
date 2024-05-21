### 使用vite创建项目

```vue
npm init vue@latest
```



### 不同方式导入

```vue
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
  
```

