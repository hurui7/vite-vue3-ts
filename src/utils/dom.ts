import _ from 'lodash'


// 以1920px 底图为准开发页面
export const setDomFontSize = (): void => {
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  let fontsize = (width <= 1200 ? 1200 : width) / 100 + 'px';
  (document.getElementsByTagName('html')[0].style as any)['font-size'] = fontsize;
}

// let setDomFontSizeDebounce = _.debounce(setDomFontSize, 10)
window.addEventListener('resize', setDomFontSize); // 浏览器加入收缩监听防抖，重新计算rem配置