requirejs(['./requirejs.config'], function (config) {
  console.log(config, 'config');
  require(['jquery', 'template', 'iframeResizer', 'common'], function ($, template, iFrameResize, common) {
    $(function () {

      var $adminSide = $('#adminSide'),
        $adminIframe = $('#admin-iframe'),
        nowTime = Date.now();

      // iframe 自适应高度
      common.iframeAdmin(iFrameResize);



      function sideNav () {
        $adminSide.on('click', 'a.list-group-item', function () {
          var $this = $(this);
          $this.addClass('active').siblings().removeClass('active');
        });
      }

      // 路由，记录页面
      function routers () {

        var linkList = $adminSide.find('a.list-group-item'),
          routes = {},
          creatKeyFn = function (v) {
            return function () {
              $adminIframe.attr('src', v + '?v=' + nowTime);
            }
          };

        linkList.each(function (i) {
          var $this = $(this),
            href= $this.attr('href'),
            key = href.replace('#',''),
            value = creatKeyFn(key);
          routes[key] = value
        });

        requirejs(['director.min'], function () {
          var router = Router(routes);
          router.init();
        });
      }

      function init () {
        sideNav();
        routers();
      }

      init();

    });
  });
});
