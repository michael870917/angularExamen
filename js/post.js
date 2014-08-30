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
        console.log ("ver " + formData);
    };

    $scope.submitForm = function(evt) {        
		console.log("posting data....");
        formData = $scope.form;
        console.log(formData);
        $http({
			url : 'http://54.200.77.121/artist',
			method: "POST",	
			data :	$.param(formData),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(function(data){
			console.log(data);
		});
    };

});