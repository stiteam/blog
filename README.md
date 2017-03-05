# STI team blog

STI team是360企业安全集团天眼产品事业部NGSOC项目组的前端团队，主要研究方向为数据可视化，所使用的主要技术栈为SVG/Canvas/WebGL/HighCharts/D3.js/Three.js/Vue

本博客为STI team的官方博客，使用了Express/Vue/ES6/LESS/Gulp

### 安装

开发使用本博客的步骤：

1. `git clone https://github.com/stiteam/blog.git`
2. 打开终端，进入`blog`文件夹，执行`npm install`安装express所需依赖
3. 进入`public`目录，执行`npm install`安装Gulp构建工具的依赖和项目依赖
4. 在`public`目录下，执行`gulp`命令编译`es6`文件夹里的源文件，生成编译后的文件在`amd`文件夹中
5. 在`blog`路径下执行`npm start`
6. 在浏览器中打开`localhost:3000`即可