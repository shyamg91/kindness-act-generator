webpackJsonp([0],[,,function(t,e){},function(t,e,n){t.exports={template:n(9)}},function(t,e,n){t.exports={template:n(10)}},function(t,e,n){t.exports={template:n(11)}},function(t,e,n){function o(t,e){var n=this;t.get("app/techs/kindnessMessages.json").then(function(t){var o=Math.floor(5*Math.random())+1;n.kindnessMessage=t.data[o],e.debug(o,t.data[o])})}t.exports={template:n(12),controller:o}},function(t,e){function n(t,e,n){n.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),t.state("app",{url:"/",component:"app"})}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],t.exports=n},,function(t,e){t.exports='<footer class="footer">\n  Build with ♥ by the&nbsp;\n  <a href="https://www.facebook.com/hashtaghappyglobal/posts/460823500780375">\n    #Happy team\n  </a>\n</footer>'},function(t,e){t.exports='<header class="header">\n  <p class="header-title">\n    Hashtag Happy\n  </p>\n</header>'},function(t,e){t.exports='<div class="main-container">\n  <fountain-header></fountain-header>\n  <main class="main">\n    <fountain-title></fountain-title>\n  </main>\n  <fountain-footer></fountain-footer>\n</div>'},function(t,e){t.exports='<div class="title">\n  <h1 class="title-h2">A Gentle Reminder to be kind every day.</h1>\n  <h2 class="title-h1">{{$ctrl.kindnessMessage.message}}</h2>\n  <!--<p>Share the Kindness\n    <a id="tweeter" href="https://twitter.com/intent/tweet?text=Today%20I%E2%80%99m%20going%20to%20be%20kind%20to%20Someone%20Today.%20Who%20will%20you%20be%20%23kind%20to%20#happynz"\n      target="_blank" class="btn twitter"></a>\n      <a href="http://hrefshare.com/338ee" target="_blank" class="btn facebook"> </a>\n  </p>-->\n</div>'},function(t,e,n){var o=n(0);n(1);var a=n(7),i=n(5),s=n(4),r=n(6),p=n(3);n(2),o.module("app",["ui.router"]).config(a).component("app",i).component("fountainHeader",s).component("fountainTitle",r).component("fountainFooter",p)}],[13]);