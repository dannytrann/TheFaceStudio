'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'smoothScroll'
]);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'section1.html',
                controller: 'MainController'
            });
    }]);
app.controller('MainController', function($scope){
});
app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
        $scope.gotoBottom = function () {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('bottom');

            // call $anchorScroll()
            $anchorScroll();
        };
    }]);
app.controller('ServiceController',[ '$http',function ($http) {
    var services = this;
    var icon= false;
    services.services = [];
    $http.get('assets/services.json').success(function(data){
        services.services = data;
    });
    this.services = services.services;

    this.getServiceDesc = function(tab){
        if (tab == 1 )
            return this.services[0].description;
        else
            return this.services[1].description;
    }
}]);
var testTicket = {
    name : "",
    body : "",
    location : ""
};
app.controller('TestimonialController', ['$http',function($http){
    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });
    var testimonials = this;
    testimonials.testimonials = [];
    $http.get('assets/comments.json').success(function(data){
        testimonials.testimonials = data;
        console.log(data);
    });
    this.testimonials = testimonials.testimonials;
    this.openModal = function(id){
        console.log(id);
        $(document).ready(function(){
            $(id).openModal();
        });
    };

}]);

app.controller('ContactController', function(){
    this.submit = function(email){
        console.log(email.firstname);
    };
})
app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    }
});
app.controller('GalleryController', ['$http', function(){

}]);
