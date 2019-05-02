const {override, fixBabelImports, disableEsLint, addDecoratorsLegacy} = require('customize-cra');

module.exports = override(
    // 按需加载antd组件
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // 开启mobx的装饰器语法
    disableEsLint(),
    addDecoratorsLegacy(),
);