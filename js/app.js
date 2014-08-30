
var usuarios;
function GetCtrlAjax($scope, $http) {
    $http({method: 'GET', url: 'http://54.200.77.121/artist'}).success(function(data)
    {
        usuarios = data.response;
        $scope.usuarios = data.response;
    });
}

angular.module('app', ['ui.bootstrap']);
function CarouselCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/break.jpg'
    },
    {
      image: 'images/food.jpg'
    },
    {
      image: 'images/helpme.jpg'
    },
    {
      image: 'images/ledtv.jpg'
    },
    {
      image: 'images/animal.jpg'
    }
  ];
}



var app = angular.module('myApp', []);
app.controller('FormCtrl', function ($scope, $http) {
    
    var formData = {
        name: "default",        
        genre: "default",        
        profile_image: "default",
        background_image: "default"
    };

    $scope.save = function() {
        formData = $scope.form;
        //console.log ("ver " + formData);
    };

    $scope.submitForm = function(evt) {        
		console.log("posting data....");
        formData = $scope.form;
        //console.log(formData);
        $http({
			//url : 'ajax/addData.php',
			url : 'http://54.200.77.121/artist',
			method: "POST",	
			data :	$.param(formData),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(function(data){
			console.log(data);
		});
    };

});