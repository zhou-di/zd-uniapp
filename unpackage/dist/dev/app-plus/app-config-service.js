
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/me/me","pages/index/index","pages/subPackages/index/wx-api/wx-api","pages/subPackages/index/wxs/wxs"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ff5257","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7A7E83","selectedColor":"#ff5257","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabbar/index/index","iconPath":"static/tabbar/nav_icon_eq_normal.png","selectedIconPath":"static/tabbar/nav_icon_eq_clicked.png","text":"首页"},{"pagePath":"pages/tabbar/me/me","iconPath":"static/tabbar/nav_icon_mine_normal.png","selectedIconPath":"static/tabbar/nav_icon_mine_clicked.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"zd-uniapp","compilerVersion":"2.7.9","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/tabbar/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-ui基础项目"}},{"path":"/pages/subPackages/index/wx-api/wx-api","meta":{},"window":{"enablePullDownRefresh":true,"backgroundTextStyle":"dark","backgroundColor":"#FFFFFF"}},{"path":"/pages/subPackages/index/wxs/wxs","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
