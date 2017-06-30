'use strict';

angular.module('blogList').
    component('blogList', {
      //template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-Click='someClickTest()'>Click Me</button></div>",
      templateUrl: "/templates/blog-list.html",
      controller: function($scope){
          var blogItems = [
            {title: "Some title", id: 1, description: "This is a Book"},
            {title: "Otro Titulo", id: 2, description: "Este es un libro"},
            {title: "Autre Livre", id: 3, description: "Celui ci, un autre livre"},
            {title: "Bookinteng", id: 4, description: "A bookentag in austamen"},
          ]

          $scope.items = blogItems

          $scope.title = 'Hi There!'
          $scope.clicks = 0
          $scope.someClickTest = function(){
            console.log('The button was clicked')
            $scope.clicks += 1
            $scope.title = "Clicked " + $scope.clicks + " Times"
          }
      }
    });
