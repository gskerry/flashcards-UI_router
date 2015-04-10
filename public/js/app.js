var app = angular.module('FlashCards', ['ui.router']);

app.config(function($stateProvider){
    $stateProvider
        .state('cards', {
            url: "/cards",
            templateUrl: 'templates/flashcards.html',
            controller: 'MainController'
        })
        .state('waddup',{
            url: "/waddup",
            template: '<h1>WADDDUP</h1>'
        })


})
