# 说明
1. 这个项目，是基于create-react-app的一个demo项目。 
2. 在使用CRA脚手架初始化后，不弹出默认配置，而是通过覆盖原有配置来引入其他功能。
3. 出发点是网上没有一个详细的文档，说明在使用CRA时，如果开启mobx的装饰器语法（注解语法）。

# demo项目功能
1. CRA自带了模块热更新。
2. 引用antd组件库。
3. 引入mobx、mobx-react模块，且开启装饰器语法。

# CRA + Ant Design + Mobx
## 1、CRA: create-react-app

**说明：** 
1. CRA的最新使用，请参考react的官方文档：[GitHub - facebook/create-react-app: Set up a modern web app by running one command.](https://github.com/facebook/create-react-app) 。

**代码：**
CRA初始化项目：
``` js
npx create-react-app my-app

cd my-app

// 启动验证
npm start  
```

## 2、Ant Design

**说明：**
1. Ant Design官网：[Ant Design - A UI Design Language](https://ant.design/docs/react/use-with-create-react-app-cn) 。

**代码：**
1. 引入antd组件库，且开启按需加载组件的功能。
``` js
npm install antd react-app-rewired customize-cra 
```

2. 将`package.json` 文件中的脚本配置替换掉。
``` js
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
}
```

3. 在demo项目的根目录下，新建`config-overrides.js` 文件，用于覆盖配置。
``` js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

4. 覆写配置，按需引入antd组件。
``` js
npm install babel-plugin-import

// 修改config-overrides.js文件
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
 );
```

## 3、mobx、mobx-react

**说明：**
1. 下面代码中的配置，依赖上面引入的`react-app-rewired` 、`customize-cra` 模块。 

**代码：**
``` js
npm install mobx mobx-react --save

// 修改config-overrides.js文件
const { override, fixBabelImports, disableEsLint, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
   
   // 禁用es语法检查
   disableEsLint(),
  
   // 启用装饰器语法
   addDecoratorsLegacy(),
 );
```
