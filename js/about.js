requirejs(['./requirejs.config'], function (config) {
  require(['jquery', 'template', 'common'], function ($, template, common) {
    $(function () {

      // iframe 自适应高度内容页
      common.iframeContent();

      var data = {
        title: 'atr-template Demo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec.'
      }

      var html = template('tpl-about', data);
      $('#aboutContent').html(html);

    });
  });
});
