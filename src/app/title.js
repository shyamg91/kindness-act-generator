module.exports = {
  template: require('./title.html'),
  controller: kindnessController
};

function kindnessController($http, $log, $timeout) {
  $log.debug('Kindness');
  var vm = this;
  vm.getAct = function () {
    vm.fadeOut = true;
    vm.fadeIn = false;
    $timeout(function () {
      $http
        .get('./app/techs/kindnessMessages.json')
        .then(function (response) {
          $log.debug('here', response);
          vm.fadeIn = true;
          vm.fadeOut = false;
          var random = Math.floor(Math.random() * 5) + 1;
          vm.kindnessMessage = response.data[random];
          vm.url = 'https://twitter.com/intent/tweet?text=I did a random act of kindness today. ' + vm.kindnessMessage.message + '%20%23happyworld';
          $log.debug(random, response.data[random]);
        }, function (err) {
          $log.debug('err', err);
        });
    }, 1000);
  };
  vm.getAct();
  vm.newAct = function () {
    vm.getAct();
  };
}
