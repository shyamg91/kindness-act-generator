module.exports = {
  template: require('./title.html'),
  controller: kindnessController
};

function kindnessController($http, $log) {
  $log.debug('Kindness');
  var vm = this;

  $http
    .get('./app/techs/kindnessMessages.json')
    .then(function (response) {
      $log.debug('here', response);
      var random = Math.floor(Math.random() * 5) + 1;
      vm.kindnessMessage = response.data[random];
      $log.debug(random, response.data[random]);
    }, function (err) {
      $log.debug('err', err);
    });
}
