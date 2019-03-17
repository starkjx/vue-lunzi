module.exports = {
  title: 'lunzi UI',
  description: '一个小小的UI库',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          './components/button',
          './components/layout',
          './components/tabs',
          './components/input',
          './components/popover',
          './components/grid',
          './components/collapse',
        ]
      }
    ]
  }
}