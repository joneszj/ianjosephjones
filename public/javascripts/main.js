$(document).ready(function(){
    var timeout = 2500;
    $("html").animate({ opacity: 1}, timeout);
    $('nav').slideDown(timeout);
    $('footer').slideDown(timeout);
    $('.menu-items li').fadeIn(timeout * 1.5).css("display","inline-block");
});

// script.js

    // create the module and name it app
    var app = angular.module('ijj', ['ngRoute']);

        app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : '/view/home.html',
                controller  : 'mainController'
            })
            // route for the about page
            .when('/about', {
                templateUrl : '/view/about.html',
                controller  : 'mainController'
            })
            // route for the contact page
            .when('/portfolio', {
                templateUrl : '/view/portfolio.html',
                controller  : 'mainController'
            })
            .when('/experience', {
                templateUrl : '/view/experience.html',
                controller  : 'mainController'
            })
            .when('/appraise', {
                templateUrl : '/view/appraise.html',
                controller  : 'mainController'
            })
            .when('/inquire', {
                templateUrl : '/view/inquire.html',
                controller  : 'mainController'
            });                                    
            //.otherwise('/');
            $locationProvider.html5Mode(true);
    });


    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {

    });