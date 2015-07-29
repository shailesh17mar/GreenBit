angular.module('starter.controllers', ['chart.js','firebase'])

.factory("FirebaseClient", function() {
  var ref = new Firebase("https://greenbit.firebaseio.com/");
  return ref;
})

.controller('HomeCtrl', function($scope, FirebaseClient, $firebaseArray) {

  $scope.tweet =  function(){
    var firebaseObject = FirebaseClient.child('Tweet');
    FirebaseClient.update({Tweet :'Happy planting: temperature: '+ $scope.reading.temperature + ' light: '+ $scope.reading.light + ' moisture: '+ $scope.reading.moisture});
  };  

  var logs = $firebaseArray(FirebaseClient.child('/logs'))
  logs.$loaded()
  .then(function(x) {
      var key = logs.$keyAt(0);
      $scope.reading = logs.$getRecord(key);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });



})

.controller('UserCtrl', function($scope, $rootScope, $ionicUser) {
  /**
   * Identifies a new user with the Ionic User service (read the docs at http://docs.ionic.io/identify/). This should be
   * called before any other registrations take place.
   **/
  $scope.identifyUser = function() {
    console.log('Ionic User: Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID()
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      message: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      alert('Successfully identified user ' + user.name + '\n ID ' + user.user_id);
    });
  };
})

.controller('PushCtrl', function($scope, FirebaseClient, $firebaseArray) {

  $scope.images = $firebaseArray(FirebaseClient.child('snaps'));
  $scope.takePicture = function(){
    //send request for new picture 
  }

})

.controller('AnalyticsCtrl', function($scope, $firebaseArray) {
  var logs = $firebaseArray(FirebaseClient.child('/logs'))
  logs.$loaded()
  .then(function(x) {
      var key = logs.$keyAt(0);
      $scope.reading = logs.$getRecord(key);
  $scope.labels = ["0", "5", "10", "15", "20"];
  $scope.data = [[28, 48, 40, 19, 86, 27, 90] ];
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

})

.controller('DeployCtrl', function($scope, FirebaseClient, $firebaseArray) {
  
  $scope.heat=78;
  $scope.water=44;
  $scope.light=21;
  $scope.plants = $firebaseArray(FirebaseClient.child('plants'));

  $scope.getPlantSettings =  function(plant){
    var settings = $scope.plants.$getRecord('Tomato');
    settings.splice('|');
  };

  $scope.applyCurrentSettings = function(){

  };

  $scope.reset = function(){

  };

});
