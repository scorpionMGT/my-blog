---
title: vscode plugin 开发流程
date: 2022-07-02
tags:
 - vscode
categories: 
 - vscode 
---

## vscode plugin vscode 插件开发，打包构建流程

详细文档参考 <https://code.visualstudio.com/api>,
vscode 插件市场 <https://marketplace.visualstudio.com/vscode>

vscode项目最开始就考虑到了插件的思想，从ui到编辑体验等几乎每个环节都可以通过插件实现增强。

## 开始构建人生中的第一个vscode插件

``` js
npm install -g yo generator-code
```

生成的目录结构

[![jJU4vn.png](https://s1.ax1x.com/2022/07/04/jJU4vn.png)](https://imgtu.com/i/jJU4vn)

调试插件可以通过 vscode 的运行和调试工具来测试

[![jJakPe.png](https://s1.ax1x.com/2022/07/04/jJakPe.png)](https://imgtu.com/i/jJakPe)

之后需要安装 vsce  用来publish extensions

``` js
npm install -g vsce

vsce package 
// 生成对应的myExtension.vsix 

vsce publish
// 用来发布对应的myExtension.vsix 到 vs code  marketplace

vsce --help
// 查询 vsce 命令行
```

发布到 vs code marketplace 需要有一个 <https://dev.azure.com/> 账号，并创建一个Personal access tokens:

[![token1.png](
https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token1.png)](
https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token1.png)

![token创建过程](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token2.png)

具体的token 创建过程可以参考 <https://code.visualstudio.com/api/working-with-extensions/publishing-extension>

创建一个 publisher
a publisher 是可以发布到vscode plugin marketplace 的认证id, 每个extension 都需要一个publisher字段 在 package.json 文件中
通过<https://marketplace.visualstudio.com/manage/publishers/maoguotao> 创建一个publisher 

[![jJDSA0.png](https://s1.ax1x.com/2022/07/04/jJDSA0.png)](https://imgtu.com/i/jJDSA0)

然后通过

```js
vsce login <publisher name>
// 登陆 vscode marketplace 
vsce publish
// 发布到 vscode marketplace

``` 


