var app = angular.module('FlashCards', ['ui.router']);

app.config(function($stateProvider){
    $stateProvider
       
        .state('cards', {
            url: "/cards",
            templateUrl: 'templates/flashcards.html',
            controller: 'MainController'
        })

        .state('cards.category', {
            url: "/:category",
            templateUrl: 'templates/categorycards.html',
            controller: function($stateParams){
                $stateParams
            }

        })

        .state('waddup',{
            url: "/waddup",
            template: '<h1>WADDDUP</h1>'
        })


})
