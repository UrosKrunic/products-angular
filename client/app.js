angular.module('musicalInstruments', ['ngRoute'])
	.config(function ($routeProvider) {
			
		$routeProvider.when('/', {
        	templateUrl: 'views/table.html',
        	controller: 'productsCtrl'
        });

		$routeProvider.when('/edit', {
        	templateUrl: 'views/edit.html',
        	controller: 'editCtrl'
        });

        $routeProvider.otherwise({
        	templateUrl: 'index.html',
        	controller: 'productsCtrl' 
		});
    })
    

   

	
