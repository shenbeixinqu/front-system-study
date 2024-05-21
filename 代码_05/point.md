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

### useRouter与useRoute

```javascript
useRouter与useRoute是Vue Router4中的两个组合式API

-useRouter
  useRouter提供了Vue Router实例的访问,允许执行路由操作,如导航到不同的路由、获取当前的路由信息。
  
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goHome = () => {
      router.push('/home')
  }
  
-useRoute
  useRoute提供对当前激活的路由的访问, 允许获取当前路由的参数、查询、名称等信息
      params: 路由参数对象
      query: 查询参数对象
      hash：路由的hash部分
      matched: 一个包含当前路由的所有匹配的路由记录的数据
  
 import { useRoute } from 'vue-router'

 const route = useRoute()
 
 // 访问路由参数
 const params = route.params
 
 --  使用场景
   useRouter 在组件中执行路由跳转 获取当前路由实例或需要访问路由实例的其他属性和方法时使用
   useRoute 需要访问当前路由的详细信息 如路由参数 查询参数时使用
```

