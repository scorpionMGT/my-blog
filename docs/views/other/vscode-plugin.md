---
title: vscode plugin 开发流程
date: 2022-07-02
tags:
 - vscode
categories: 
 - vscode 
---

# vscode plugin vscode 插件开发，打包构建流程

详细文档参考 <https://code.visualstudio.com/api>,
vscode 插件市场 <https://marketplace.visualstudio.com/vscode>

vscode项目最开始就考虑到了插件的思想，从ui到编辑体验等几乎每个环节都可以通过插件实现增强。

## 开始构建人生中的第一个vscode插件

``` js
npm install -g yo generator-code
```

