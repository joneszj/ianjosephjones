$(document).ready(function(){
    var timeout = 2500;
    $("html").animate({ opacity: 1}, timeout);
    $('nav').slideDown(timeout);
    openNav(timeout);
    $(window).resize(function(){
        openNav(timeout);
    });
    $(".show").click(function(){
        $(".menu-items").slideToggle();
        if ($('html,body').css("overflow") == "hidden") {
            $('html,body').css("overflow","")
        } else {
            $('html,body').css("overflow","hidden")
        }
    });
    $('.menu-items li').click(function(){
        if (window.innerWidth <= 816) {
            $(".menu-items").slideUp();
        }
    })
    setInterval(bouncy,10)
});

function openNav(timeout){
    if (window.innerWidth >= 816) {
        $('html,body').css("overflow","");
        $('.menu-items').show();
        $('.menu-items li').fadeIn(timeout * 1.5).css("display","inline-block");
        setTimeout(function(){
            $('footer, footer *').fadeIn(timeout * 1.5).css("display","inline-block");
        },2000)
    }
}

function bouncy(){
    if($(window).scrollTop() + $(window).height() >= getDocHeight() - 100) {
        $("#scrollDown").fadeOut();
    }
    else {
        $("#scrollDown").fadeIn();
    }
}

function getDocHeight() {
   var D = document;
   return Math.max(
       D.body.scrollHeight, D.documentElement.scrollHeight,
       D.body.offsetHeight, D.documentElement.offsetHeight,
       D.body.clientHeight, D.documentElement.clientHeight
   );
}
    var app = angular.module('ijj', ['ngRoute', 'ngAnimate']);

        app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/view/home.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : '/view/about.html',
                controller  : 'mainController'
            })
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
            })
            .when('/blog', {
                templateUrl : '/view/blog.html',
                controller  : 'mainController'
            })                             
            .otherwise('/');
            $locationProvider.html5Mode(true);
    });


    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {

    });