define(function () {
  /**
   * iframe 自适应高度 admin 页
   * @param {*} iFrameResize
   * @param {*} opts
   */
  function iframeAdmin (iFrameResize, opts) {
    iFrameResize(opts);
  }

  /**
   * iframe 自适应高度内容页
   * @return {[type]} [description]
   */
  function iframeContent () {
    requirejs(['iframeResizer.contentWindow.min'], function(){});
  }

  function goLogin () {
    window.top.location.href = 'login.html'
  }

  return {
    iframeAdmin: iframeAdmin,
    iframeContent: iframeContent,
    goLogin: goLogin
  }
});
