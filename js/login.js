requirejs(['./requirejs.config'], function (config) {
  require(['jquery', 'common'], function ($, common) {
    $(function () {

      // iframe 自适应高度内容页
      common.iframeContent();

      $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        window.location.href = 'admin.html';
      })

    });
  });
});
