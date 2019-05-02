
基于create-react-app的react项目。

> 不弹出CRA的默认配置，而是覆盖原有配置。

1、CRA自带模块热更新。
2、引用antd组件库。
3、引入mobx、mobx-react模块，且使用装饰器语法。


> CRA+antd+mobx基本环境配置

## 1、create-react-app

> 语法根据CRA版本会有迭代，具体看文档。
> 使用CRA创建react的web项目。
> 自带模块热更新。

[GitHub - facebook/create-react-app: Set up a modern web app by running one command.](https://github.com/facebook/create-react-app)

``` js
npx create-react-app my-app

cd my-app

npm start
```

## 2、antd

[Ant Design - A UI Design Language](https://ant.design/docs/react/use-with-create-react-app-cn)

> 在CRA创建的项目中，引入antd组件库。且开启按需加载组件的功能。

``` js
npm install react-app-rewired customize-cra 
```

> 将package.json文件中的脚本配置替换掉：
``` js
// package.json
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
}
```

> 在根目录下，新建`config-overrides.js`文件，用于覆盖配置。
``` js
// package.json
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

> 覆写配置，按需引入antd组件
``` js
npm install babel-plugin-import

// package.json
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
 );
```

## 3、mobx

> 在CRA创建的项目中，引入mobx、mobx-react模块。且开启装饰器语法的功能。
> 注：步骤3依赖步骤2中的react-app-rewired customize-cra模块与相应配置。

``` js
npm install mobx mobx-react --save

// package.json
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

