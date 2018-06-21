# mp-lui

> A Mpvue project

基于MpVue框架以及iview、lui库搭建的小程序UI组件库。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 开发进度

### 表单
- [x] Button（基于小程序原生组件）
- [x] Checkbox
- [ ] Field（待优化）
- [ ] Radio
- [ ] Slider
- [ ] Switch
- [ ] Uploader

### 基础组件
- [x] Avatar
- [x] Badge
- [x] Card
- [ ] Footer
- [ ] Gallery（小程序原生组件）
- [ ] Grid（待优化）
- [x] Icons（小程序原生组件）
- [ ] List（待优化）
- [ ] Loadmore
- [x] Panel
- [ ] Preview
- [ ] Progress

### 操作反馈
- [x] Actionsheet
- [x] Alert
- [ ] Dialog
- [ ] Msg
- [ ] Picker
- [ ] Toast

### 导航相关
- [ ] Navbar
- [ ] Tabbar（建议采用小程序原生的tabbar，通过设置app.json来实现）

### 搜索相关
- [ ] Searchbar（待优化）



## 问题

1. 在进行iActionSheet组件开发时，使用iButton组件，并对其进行循环渲染，iButton组件中含有slot。经过mpvue的编译后发现，并未对循环中不同的slot做编译，导致所有slot的编译仅有一个，从而导致了渲染bug。因此，在iActionSheet组件中目前使用小程序Button组件，mpvue中已经有组件循环 slot内容分发问题的issue，需要进一步观察从而进行优化