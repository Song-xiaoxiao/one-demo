const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/home', createProxyMiddleware({
      target: 'https://home-api.pinduoduo.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/api', createProxyMiddleware({
      target: 'http://api.bdplus.cn/',
      changeOrigin: true,
    })
  );
};
// 此文件结合axios
// 把远程的接口通过"http://localhost:3000"直接在本地访问
// 就是跨域的一种方式