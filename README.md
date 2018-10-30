# mp-lui

> A Mpvue project

基于MpVue框架以及iview、lui库搭建的小程序UI组件库。


* iview小程序项目地址：[iview-weapp](https://github.com/TalkingData/iview-weapp)

* mp-weui小程序项目地址：[mp-weui](https://github.com/youngluo/mp-weui)


## Build Setup

小程序项目路径：`../mp-lui/dist`

``` bash
# install dependencies
npm install

npm run dev

# build for production with minification
npm run build
```

## 开发进度

### 表单
- [x] Button（基于小程序原生组件）
- [x] Checkbox
- [x] Radio
- [x] Slider
- [x] Switch
- [ ] Uploader

### 基础组件
- [x] Avatar
- [x] Badge
- [x] Card
- [x] Col
- [x] Row
- [x] Drawer
- [ ] Gallery
- [x] Grid
- [x] Icons（小程序原生组件）
- [x] Notice-Bar
- [x] Panel
- [x] Progress
- [ ] Footer

### 操作反馈
- [x] Actionsheet
- [x] Alert
- [x] Spin
- [ ] Dialog
- [ ] Msg
- [x] Picker
- [ ] Toast

### 导航相关
- [ ] Navbar
- [x] Tabbar（建议采用小程序原生的tabbar，通过设置app.json来实现）
- [x] Tabs（建议采用小程序原生的tabbar，通过设置app.json来实现）

### 搜索相关
- [ ] Searchbar



## 问题

1. 在进行`iActionSheet`组件开发时，使用`iButton`组件，并对其进行循环渲染，`iButton`组件中含有`slot`。经过`mpvue`的编译后发现，并未对循环中不同的`slot`做编译，导致所有`slot`的编译仅有一个，从而导致了渲染bug。因此，在`iActionSheet`组件中目前使用小程序`Button`组件，`mpvue`中已经有组件循环 slot内容分发问题的issue，需要进一步观察从而进行优化

2. 在进行`Grid`组件开发时，`GridGroup`仅作为外层包裹，但如果对`Grid`进行循环渲染，则页面无显示，还是`slot`的支持度不够的问题

3. 进行`Notice-bar`组件开发时，发现原生小程序的动画无法被识别编译

4. 进行`Tabbar`组件开发时，`TabbarItem`中是由`Badge`组件包裹的，然后`Tabbar`包裹`TabbarItem`组件，但此时`props`中传递的`title`无法被渲染出来，`mpvue`超过三层以上的组件嵌套导致编译出现紊乱，因此将badge组件拆成原生实现了

5. MpVue组件中的`props`避免使用`key`关键字，会导致页面渲染异常

6. 在使用`cell`组件时，内部有`content`和`footer`两个`slot`，然后在`slot`中加入其它组件时，页面无法正常渲染，只能保留一个`slot`才能生效

7. 在调用mpvue组件时，再向`slot`中加入结构，`data`或`prop`的数据无法传入

8. 组件中使用了小程序原生组件`picker-view`后，如果在页面中使用此组件并且该页面开启了下拉刷新，会产生一个bug，当在`picker-view`中下拉时，会导致页面下拉刷新，小程序官方已发现此bug，修复中。

9. 循环中，`key`中不能为字符串，否则编译报错

10. 嵌套循环中，需要给v-for不同的index名称，否则mpvue编译报错