'use strict';

angular.module('blogList').
    component('blogList', {
      template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-Click='someClickTest()'>Click Me</button></div>",
      controller: function($scope){
          $scope.title = 'Hi There!'
          $scope.clicks = 0
          $scope.someClickTest = function(){
            console.log('The button was clicked')
            $scope.clicks += 1
            $scope.title = "Clicked " + $scope.clicks + " Times"
          }
      }
    });
