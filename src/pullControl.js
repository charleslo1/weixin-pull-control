
// touch事件 Y轴起始位置
var startY = 0

/**
 * touchstart 事件处理函数
 * @param  {Object} event 事件对象
 */
function touchstartHanlder (event) {
  var touch = event.touches[0]
  startY = touch.pageY
}

/**
 * touchmove 事件处理函数
 * @param  {Object} event 事件对象
 */
function touchmoveHanlder (event) {
  var touch = event.touches[0]

  if (document.body.scrollTop === 0 && (touch.pageY > startY)) {
    event.preventDefault()
  }
}

/**
 * 下拉控制对象
 * @type {Object}
 */
var pullControl = {
  /**
   * 禁用下拉
   */
  disable: function () {
    window.addEventListener('touchstart', touchstartHanlder)
    window.addEventListener('touchmove', touchmoveHanlder)
  },

  /**
   * 启用下拉
   */
  enable: function () {
    window.removeEventListener('touchstart', touchstartHanlder)
    window.removeEventListener('touchmove', touchmoveHanlder)
  }
}

module.exports = pullControl
