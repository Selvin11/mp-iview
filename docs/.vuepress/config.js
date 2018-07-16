module.exports = {
  base: '/mp-lui/',
  title: 'Lui',
  description: '基于 Mpvue 和 Weui 的微信小程序 UI 库',
  head: [
    ['meta', { name: 'keywords', content: 'mpvue,weui,Lui' }],
    ['link', { rel: 'icon', href: `/favicon.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }], // pwa
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }], // 设置书签时显示的图标
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'Selvin11/mp-lui', // 顶部右侧Github地址
    docsDir: 'docs', // 指定仓库的文档目录
    docsBranch: 'master',
    editLinkText: '帮助我们改善此页面！',
    sidebarDepth: 1,
    nav: [
      { text: '组件', link: '/components/agree' } // 顶部右侧菜单
    ],
    sidebar: {
      '/components/': [{
        title: '表单组件',
        collapsable: false,
        children: [
          // 'agree',
          'button',
          'checklist',
          'field',
          'radio',
          'slider',
          'switch',
          'uploader'
        ]}, {
        title: '基础组件',
        collapsable: false,
        children: [
          'avatar',
          'badge',
          'cell',
          'card',
          'footer',
          'grid',
          'loadmore',
          'navbar',
          'panel',
          'preview',
          'progress',
          'search'
        ]}, {
        title: '操作反馈',
        collapsable: false,
        children: [
          'actionsheet',
          'alert',
          'dialog',
          'message',
          'picker',
          'toast'
        ]}
      ]
    }
  }
}
