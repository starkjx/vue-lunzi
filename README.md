#  轮子 一个Vue组件
作者 starkxj

[![Build Status](https://travis-ci.org/starkjx/vue-lunzi.svg?branch=master)](https://travis-ci.org/starkjx/vue-lunzi)

## 介绍
这是我在学习Vue中的一个UI框架

## 开始使用
1.添加CSS样式
    使用本框架前，请在css中开启border-box
    ```
    *{border-sizing: border-box;}
    *::before{box-sizing:border-box;}
    *::after{box-sizing:border-box;}
      
    ```
    //你还需要设置默认颜色变量
    
    ```
    html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
2. 安装lunzi
 ```
npm i --save lunzi-demo
```
3. 引入lunzi
```
import {Button, ButtonGroup, Icon} from 'lunzi-demo'
import 'lunzi-demo/dist/index.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'g-button': Button
  }
}
```
4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_1074845_qlfs8tmvv5r.js"></script>
```
5. 
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
