module.exports = {
  title: '玉玄道报名系统',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   * showSettings用来设置是否显示控制面板，设置为false则不显示
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   * tagsView是我们打开某个页面是否有页面标签
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   * fixedHeader是内容页面向下滑动时头部是否固定，false是不固定， true是固定
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   * sidebarLogo控制菜单栏上方是否显示图标
   */
  sidebarLogo: true,

  /**
   * @type {boolean} true | false
   * @description Whether support pinyin search in headerSearch
   * Bundle size minified 47.3kb,minified + gzipped 63kb
   */
  supportPinyinSearch: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
