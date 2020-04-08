# my-webpack

### 1. 安装nvm, node, npm
检查是否安装成功
```
nvm list
node -v
npm -v
```


### 2. 安装webpack, webpack-cli

```
mkdir my-webpack // 创建一个空目录
cd my-webpack // 进入项目
npm init -y 生成package.json
npm install webpack webpack-cli --save-dev // 将webpack安装到devDependencies
```
检查是否安装成功
```
./node_modules/.bin/webpack -v
```

### 3. 一个简单的例子
* 1. 编写webpack配置文件：webpack.config.js
* 2. 创建src目录，里面编写简单的代码
* 3. 运行打包：./node_modules/.bin/webpack生成bundle.js
* 4. package.json文件默认可以读取到./bin目录下的文件
在package.json添加scripts通过npm run build进行打包

### 4. webpack基础
webpack构建机制：模块打包器，会把资源都当成模块，这些模块会有依赖关系
* 1. Entry：用来指定webpack的打包入口, 根据入口文件找到依赖，将资源不断地加入依赖图
* 2. Output: 用来指定webpack的打包输出，告诉webpack如何将编译后的文件输出到磁盘
* 3. Loaders: webpack开箱即用只支持JS和JSON两种文件类型，通过Loaders去支持其它文件类型并且把他们转化成有效的模块，并且可以添加到依赖图中
本身是一个函数，接收源文件作为参数，返回转换的结果
* 4. Plugins: 用户bundle文件的优化，资源管理和环境变量注入，作用于整个构建过程
* 5. mode: 用来指定当前的构建环境：productions、development、node

### 5. 资源解析
  * 1. 解析ES6:使用babel-loader
  ```
  npm i @babel/core @babel/preset-env baber-loader -D
  ```
  增加babel的配置文件.babelrc的@babel/preset-env
  webpack.config.js的modules增加babel-loader的配置

  * 2. 解析React JSX
  ```
  npm i react react-dom @babel/preset-react -D
  ```
  .babelrc文件增加babel preset配置@babel/preset-react
  增加search组件search.js
  npm run build 后增加index.html文件，引入search.js可以看到文件被正确打包

  * 3. 解析CSS
  css-loader用于加载.css文件，并且转换成commonjs对象
  style-loader将样式通过<style>标签插入到head中
  ```
  npm i css-loader style-loader -D
  ```
  创建search.css文件写入样式代码
  webpack.config.js的modules增加style-loader和css-loader的配置
  npm run build 后增加index.html文件，引入search.js可以看到文件被正确打包

  * 4. 解析Less和SaSS
  less-loader用于将less转换成css,因为less-loader依赖less,所以less也需要安装
  ```
  npm i less less-loader -D
  ```
  webpack.config.js的modules增加解析less的配置
  SaSS同Less

  * 5. 解析图片和字体
  ```
  npm i file-loader -D
  ```
  webpack.config.js的modules增加解析file-loader的配置
  加入图片npm run build后能正常显示

  url-loader也可以处理图片和字体，可以设置较小资源自动base64

### 6. 文件监听
文件监听是在发现源码发生变化时，自动重新构建出新的输出文件
webpack开启监听模式，有两种方式：
  - 启动webpack命令时，带上--watch参数
  - 在配置webpack.config.js中设置watch: true

### 7. 热更新 webpack-dev-server
WDS不刷新浏览器
WDS不输出文件，而是放在内存中
使用HotModuleReplacementPlugin插件
```
npm i webpack-dev-server -D
```
配置webpack.config.js
```
plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  mode: 'development'
```
配置package.json
```
"scripts": {
    "dev": "webpack-dev-server --open"
  },
```