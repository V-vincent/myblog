/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/11/07/frontmatter-in-vuepress-2/index.html",
    "revision": "fcdf3bd6a9a69bb28b5d89669df5a6f8"
  },
  {
    "url": "2018/11/07/frontmatter-in-vuepress-3/index.html",
    "revision": "2367668fdd8a259775db0b646b575311"
  },
  {
    "url": "2018/11/07/frontmatter-in-vuepress/index.html",
    "revision": "d941c0c5b8da0530a5cab5f01f522195"
  },
  {
    "url": "2019/02/26/markdown-slot-2/index.html",
    "revision": "240e6ca13065b955020633edf26972ea"
  },
  {
    "url": "2019/02/26/markdown-slot-3/index.html",
    "revision": "0bc14f9085f4a5c85a9693a90d06fc22"
  },
  {
    "url": "2019/02/26/markdown-slot-4/index.html",
    "revision": "82d36ace19e91c21cc00ba8aaaca58c6"
  },
  {
    "url": "2019/02/26/markdown-slot/index.html",
    "revision": "34ef9ad8881a5fdd264a439e2177e157"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme-2/index.html",
    "revision": "a53c9b5820c84bf142aea0a742247db5"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme-3/index.html",
    "revision": "880825c54c130e4dd88e10cdd35665d1"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme-4/index.html",
    "revision": "5b6493609a6748bf000da6fa7ed41507"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme/index.html",
    "revision": "b09d4c7a60042da44badae20182d1bc8"
  },
  {
    "url": "2019/10/20/js的数据类型/index.html",
    "revision": "852e0e34ed51c9af6160eac5b019d90c"
  },
  {
    "url": "2019/11/04/关于js的闭包/index.html",
    "revision": "c6da6512d154bcc06fb4c6b2500f25f2"
  },
  {
    "url": "2019/11/17/extend/index.html",
    "revision": "bf5ad4f30b2866af985cf40eaeb65957"
  },
  {
    "url": "2020/04/01/yarn报错解决方案/index.html",
    "revision": "2b51cf84170bd99afcd4645b80a99618"
  },
  {
    "url": "2020/04/03/call、apply、bind/index.html",
    "revision": "1f4afa7996ab7d8f76459b54844fda35"
  },
  {
    "url": "assets/css/0.styles.dd9d7970.css",
    "revision": "4e17b592534ac430bc52268801e47242"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.073910de.js",
    "revision": "af15c0278232d83e6461ea9b608deae2"
  },
  {
    "url": "assets/js/10.4cb1d48d.js",
    "revision": "106c89f7c9164a7054be86b6c5923c8a"
  },
  {
    "url": "assets/js/11.ad39a9fc.js",
    "revision": "28c4b862ce7388e98b8c595005ef931a"
  },
  {
    "url": "assets/js/12.684ffb55.js",
    "revision": "27c7f6763642da477926ad59236008d1"
  },
  {
    "url": "assets/js/13.3a11a44b.js",
    "revision": "42efdf8baa86c373ce58c8896d61c6e3"
  },
  {
    "url": "assets/js/14.9cc0e5fe.js",
    "revision": "956f2b72ba9fc25509d424d0b714cb32"
  },
  {
    "url": "assets/js/15.387151fa.js",
    "revision": "a04d042c5dc6a7c2ea7fa22fc84c0f5e"
  },
  {
    "url": "assets/js/16.eb6e8bc6.js",
    "revision": "1e5786f50ae509eb18539c3df3cf7e45"
  },
  {
    "url": "assets/js/17.757f9475.js",
    "revision": "6aff99326d6460d4d01446c30d0b63af"
  },
  {
    "url": "assets/js/18.a6f20bba.js",
    "revision": "be7d6973e5f29f21d0cbf575fefcdb2f"
  },
  {
    "url": "assets/js/19.8e2828ac.js",
    "revision": "947ad14dcfca3ea29829d352f1c96377"
  },
  {
    "url": "assets/js/20.a81a96e5.js",
    "revision": "ada4e2702f7d73979e52e59d6433d8df"
  },
  {
    "url": "assets/js/21.7beb04db.js",
    "revision": "92f75658baea67fd6c35f1793c2f8ef9"
  },
  {
    "url": "assets/js/22.01ed1aae.js",
    "revision": "b5794e8e27cfd54a3d8156f2477a4f99"
  },
  {
    "url": "assets/js/23.09250ece.js",
    "revision": "895935a587b3104212bdbfc5bb9d26fd"
  },
  {
    "url": "assets/js/24.eeec923f.js",
    "revision": "122a84086286b9aa4f185b84f3dad704"
  },
  {
    "url": "assets/js/25.bb086ebb.js",
    "revision": "e5a83468b8fd4f57668b27550db7ff9d"
  },
  {
    "url": "assets/js/26.d1f34003.js",
    "revision": "bee802df60eaa7f460555af3d5660088"
  },
  {
    "url": "assets/js/27.c7f50ff6.js",
    "revision": "7a6ebc965d3f1a76819563691d1ad1e6"
  },
  {
    "url": "assets/js/28.b3bca096.js",
    "revision": "b4d62013cf1ba8004a4d8f2edbf07daf"
  },
  {
    "url": "assets/js/29.00ce02aa.js",
    "revision": "20889272d9e4c8379d245eb8d4c9c56b"
  },
  {
    "url": "assets/js/30.4056a230.js",
    "revision": "14adc6ebea4d88f2779e841e5ca6f135"
  },
  {
    "url": "assets/js/31.fb099817.js",
    "revision": "b0636a9ca536633c6e6186e46b5ba3fe"
  },
  {
    "url": "assets/js/32.b3025c62.js",
    "revision": "eda03c49c94eb68a8e1098ea71aca150"
  },
  {
    "url": "assets/js/33.6e13ecf9.js",
    "revision": "133b42a026ee8c9b9fac3e31dede8731"
  },
  {
    "url": "assets/js/4.bab555e0.js",
    "revision": "f4d0d7258f9efd9a36824b1c5f7b8f29"
  },
  {
    "url": "assets/js/5.402d12b6.js",
    "revision": "62ad062141671936588a261c7558acaf"
  },
  {
    "url": "assets/js/6.8aeec6a8.js",
    "revision": "49d64440451619e0c55f26666d4a8ffb"
  },
  {
    "url": "assets/js/7.f5417a25.js",
    "revision": "ab2b2a000ac3c5da69c3dd3d1bae1ab6"
  },
  {
    "url": "assets/js/8.ed784ff5.js",
    "revision": "46a1f6ed4eea315ab2c612d86d29116b"
  },
  {
    "url": "assets/js/9.8e610ef4.js",
    "revision": "e809b8af61e801802a2854fc395edf77"
  },
  {
    "url": "assets/js/app.865d6af3.js",
    "revision": "70592426f449665eabfca5060bf5f9a8"
  },
  {
    "url": "assets/js/vuejs-paginate.2120ba31.js",
    "revision": "bf297800ca216c3d3b94a202be4d1d8b"
  },
  {
    "url": "index.html",
    "revision": "ec30126dbecb329ce8c94db300b8ab5a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "page/2/index.html",
    "revision": "8e92390dd83f0850585f56a213feaec2"
  },
  {
    "url": "page/3/index.html",
    "revision": "bcbee0ea4b3de55f1e54b5619f541e07"
  },
  {
    "url": "page/4/index.html",
    "revision": "a36b32ded02a0378225de346e00b34e2"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "c353dec06b4dce922607816a383168d1"
  },
  {
    "url": "tag/frontmatter/index.html",
    "revision": "00efa2c2bb037dd2bcbbe2c6f3265a6e"
  },
  {
    "url": "tag/index.html",
    "revision": "8d708f08eaea945f167818e257388dc3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "4d453783b60f01dfba4603a66f09281d"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "b452f99a07e37d0affa68b5ff8b3e943"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "d73785fea33a5b01006465d3bcca046a"
  },
  {
    "url": "tag/theme/index.html",
    "revision": "39fceac9d29a7b4faf68a96ae7b237a0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7d7268ed5aa81ab6c822933571ebea5d"
  },
  {
    "url": "tag/vuepress/page/2/index.html",
    "revision": "e32d86c6fed3fc867ec4cfb1c113e3be"
  },
  {
    "url": "tag/vuepress/page/3/index.html",
    "revision": "cf8edab8b4d7b9420fdb6797de39a035"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "be5bbb6ba075b9215af9c790bcd6ab22"
  },
  {
    "url": "tag/源码分析/index.html",
    "revision": "81ff332c428790a2e9678bbaedb63692"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
