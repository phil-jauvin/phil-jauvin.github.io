var app = angular.module("portfolio",["ng"]);


app.controller("FormController",function(){


  $scope.tits = true;

});

app.directive("flatstrModal",function(){

  return{
    templateUrl: "../directives/flatstr-modal.html",
    restrict:"E"
  }

});

app.directive("kayakModal",function(){

  return{
    templateUrl: "../directives/kayak-modal.html",
    restrict:"E"
  }

});
