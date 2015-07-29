'use strict';

/**
 * @ngdoc function
 * @name greenbitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the greenbitApp
 */
angular.module('greenbitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
