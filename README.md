# mall_test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<br/>将mock文件夹中的dumall-goods和dumall-users文件导入mongo数据库.数据库名为mall_test，集合名分别为dumall_goods和dumall_users.<br/>
<pre>| -<span style="color: #000000"> build
</span>| -<span style="color: #000000"> config
</span>| - mock     --<span style="color: #000000"> 数据库文件
</span>| - resource --<span style="color: #000000"> 静态资源文件
</span>| - server   --<span style="color: #000000"> express框架后端文件
    </span>| -<span style="color: #000000"> models  
        </span>| - goods.js  --<span style="color: #000000"> 商品数据模型
        </span>| - users.js  --<span style="color: #000000"> 用户数据模型
    </span>| -<span style="color: #000000"> routes
        </span>| - goods.js  --<span style="color: #000000"> 商品相关接口
        </span>| - users.js  --<span style="color: #000000"> 用户相关接口
</span>| -<span style="color: #000000"> src
    </span>| - assets      --<span style="color: #000000"> 样式文件
    </span>| -<span style="color: #000000"> components
        </span>| - Modal.vue      --<span style="color: #000000"> 模态框组件
        </span>| - NavHeader.vue  --<span style="color: #000000"> 头部组件
        </span>| - NavBread.vue   --<span style="color: #000000"> 面包屑组件
        </span>| - NavFooter.vue  --<span style="color: #000000"> 底部组件
    </span>| - router --<span style="color: #000000"> 路由配置文件
    </span>| - util   --<span style="color: #000000"> 公用方法文件
    </span>| -<span style="color: #000000"> views
        </span>| - GoodsList.vue    --<span style="color: #000000"> 商品列表页组件
        </span>| - Cart.vue         --<span style="color: #000000"> 购物车列表组件
        </span>| - Address.vue      --<span style="color: #000000"> 地址列表页组件
        </span>| - OrderConfirm.vue --<span style="color: #000000"> 订单确认页面
        </span>| - OrderSuccess.vue --<span style="color: #000000"> 订单成功页面
    </span>| -<span style="color: #000000"> App.vue
    </span>| -<span style="color: #000000"> main.js
</span>| - static   --<span style="color: #000000"> 项目所用图片，图标
</span>|</pre>
