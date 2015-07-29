'use strict';

/**
 * @ngdoc function
 * @name greenbitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the greenbitApp
 */
angular.module('greenbitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
