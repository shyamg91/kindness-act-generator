webpackJsonp([0],[,,function(module,exports){},function(module,exports,__webpack_require__){module.exports={template:__webpack_require__(9)}},function(module,exports,__webpack_require__){module.exports={template:__webpack_require__(10)}},function(module,exports,__webpack_require__){module.exports={template:__webpack_require__(11)}},function(module,exports,__webpack_require__){function kindnessController($http,$log){$log.debug("Kindness");var vm=this;$http.get("./app/techs/kindnessMessages.json").then(function(response){$log.debug("here",response);var random=Math.floor(5*Math.random())+1;vm.kindnessMessage=response.data[random],$log.debug(random,response.data[random])},function(err){$log.debug("err",err)})}module.exports={template:__webpack_require__(12),controller:kindnessController}},function(module,exports){function routesConfig($stateProvider,$urlRouterProvider,$locationProvider){$locationProvider.html5Mode(!0).hashPrefix("!"),$urlRouterProvider.otherwise("/"),$stateProvider.state("app",{url:"/",component:"app"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],module.exports=routesConfig},,function(module,exports){module.exports='<footer class="footer">\n  Built with ♥ by the&nbsp;\n  <a href="https://www.facebook.com/hashtaghappyglobal/posts/460823500780375">\n    #Happy team\n  </a>\n</footer>'},function(module,exports){module.exports='<header class="header">\n  <p class="header-title">\n    Hashtag Happy\n  </p>\n</header>'},function(module,exports){module.exports='<div class="main-container">\n  <fountain-header></fountain-header>\n  <main class="main">\n    <fountain-title></fountain-title>\n  </main>\n  <fountain-footer></fountain-footer>\n</div>'},function(module,exports){module.exports='<div class="title">\n  <h1 class="title-h2">A Gentle Reminder to be kind every day.</h1>\n  <h2 class="title-h1">{{$ctrl.kindnessMessage.message}}</h2>\n  <!--<p>Share the Kindness\n    <a id="tweeter" href="https://twitter.com/intent/tweet?text=Today%20I%E2%80%99m%20going%20to%20be%20kind%20to%20Someone%20Today.%20Who%20will%20you%20be%20%23kind%20to%20#happynz"\n      target="_blank" class="btn twitter"></a>\n      <a href="http://hrefshare.com/338ee" target="_blank" class="btn facebook"> </a>\n  </p>-->\n</div>'},function(module,exports,__webpack_require__){var angular=__webpack_require__(0);__webpack_require__(1);var routesConfig=__webpack_require__(7),main=__webpack_require__(5),header=__webpack_require__(4),title=__webpack_require__(6),footer=__webpack_require__(3);__webpack_require__(2),angular.module("app",["ui.router"]).config(routesConfig).component("app",main).component("fountainHeader",header).component("fountainTitle",title).component("fountainFooter",footer)}],[13]);