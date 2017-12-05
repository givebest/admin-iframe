requirejs(['./requirejs.config'], function (config) {
  require(['jquery', 'common'], function ($, common) {
    $(function () {

      // 需要登陆校验
      common.goLogin();

      // iframe 自适应高度内容页
      common.iframeContent();

    });
  });
});
