requirejs(['./requirejs.config'], function (config) {
  require(['jquery', 'common'], function ($, common) {
    $(function () {

      // iframe 自适应高度内容页
      common.iframeContent();

      $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $.ajax({
          type: 'POST',
          url: '/api/contact/',
          data: {
            email: $('#exampleInputEmail1').val(),
            password: $('#exampleInputPassword1').val()
          },
          success: function () {
            console.log('success')
          },
          error: function () {
            console.log('error')
          }
        })

      });

    });
  });
});
