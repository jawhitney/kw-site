var app = angular.module('kwApp', [
	'ngRoute',
	'paintingsController',
	'pieceController',
	'designController',
	'portfolioService'
]);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
	    $routeProvider
		    .when('/', {
		        templateUrl: 'views/home.html'
		    })

		    .when('/about', {
		        templateUrl: 'views/about.html'
		    })

		    .when('/resume-cv', {
		        templateUrl: 'views/resume-cv.html'
		    })

		    .when('/portfolio', {
		        templateUrl: 'views/portfolio.html',
		        controller: 'PaintingsController'
		    })

		    .when('/murals', {
		        templateUrl: 'views/murals.html'
		    })

		    .when('/live-paintings', {
		        templateUrl: 'views/live-paintings.html'
		    })

		    .when('/design', {
		        templateUrl: 'views/design.html',
		        controller: 'DesignController'
		    })

		    .when('/purchase', {
		        templateUrl: 'views/purchase.html'
		    })

		    .when('/contact', {
		        templateUrl: 'views/contact.html'
		    })

		    .when('/piece/:pieceId', {
		        templateUrl: 'views/piece.html',
		        controller: 'PieceController'
		    });

        $locationProvider.html5Mode(true);
	}]);
