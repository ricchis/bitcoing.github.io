var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.showSuccess = false;
  $scope.registerFormSubmitted = false;
  
  $scope.submitRegisterForm = function(user) {
    console.log('in function submitRegisterForm()', user);
    $scope.registerFormSubmitted = true;

    //Simulate form submission
    $timeout(function() {
      $scope.showSuccess = true;
    }, 500);
  };
  
}]);