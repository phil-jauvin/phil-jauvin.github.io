var app = angular.module("portfolio",["ng"]);

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

app.directive("beatsModal",function(){

  return{
    templateUrl: "../directives/beats-modal.html",
    restrict:"E"
  }

});
