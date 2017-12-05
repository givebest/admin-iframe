requirejs.config({
  urlArgs: 'v=' + Date.now(),
  baseUrl: '../js/lib',
  paths: {
    jquery: 'jquery.min',
    template: 'art-template-web',
    iframeResizer: 'iframeResizer.min',
    common: '../common'
  }
});
