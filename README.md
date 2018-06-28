# mp-lui

> A Mpvue project

基于MpVue框架以及iview、lui库搭建的小程序UI组件库。



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
- [ ] Field（待优化）
- [x] Radio
- [ ] Slider
- [s] Switch
- [ ] Uploader

### 基础组件
- [x] Avatar
- [x] Badge
- [x] Card
- [x] Col
- [x] Row
- [x] Drawer
- [ ] Footer
- [ ] Gallery（小程序原生组件）
- [x] Grid
- [x] Icons（小程序原生组件）
- [x] Notice-Bar
- [ ] Loadmore
- [x] Panel
- [ ] Preview
- [x] Progress

### 操作反馈
- [x] Actionsheet
- [x] Alert
- [x] Spin
- [ ] Dialog
- [ ] Msg
- [ ] Picker
- [ ] Toast

### 导航相关
- [ ] Navbar
- [x] Tabbar（建议采用小程序原生的tabbar，通过设置app.json来实现）
- [x] Tabs（建议采用小程序原生的tabbar，通过设置app.json来实现）

### 搜索相关
- [ ] Searchbar（待优化）



## 问题

1. 在进行iActionSheet组件开发时，使用iButton组件，并对其进行循环渲染，iButton组件中含有slot。经过mpvue的编译后发现，并未对循环中不同的slot做编译，导致所有slot的编译仅有一个，从而导致了渲染bug。因此，在iActionSheet组件中目前使用小程序Button组件，mpvue中已经有组件循环 slot内容分发问题的issue，需要进一步观察从而进行优化

2. 在进行Grid组件开发时，GridGroup仅作为外层包裹，但如果对Grid进行循环渲染，则页面无显示，还是slot的支持度不够的问题

3. 进行Notice-bar组件开发时，发现原生小程序的动画无法被识别编译

4. 进行Tabbar组件开发时，TabbarItem中是由Badge组件包裹的，然后Tabbar包裹TabbarItem组件，但此时`props`中传递的`title`无法被渲染出来，mpvue超过三层以上的组件嵌套导致编译出现紊乱，因此将badge组件拆成原生实现了

5. MpVue组件中的`props`避免使用`key`关键字，会导致页面渲染异常