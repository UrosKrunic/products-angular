angular.module('musicalInstruments')
	.controller('productsCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
   		
   		var refresh = function () {
   			$http.get('/products').success(function (data) {
   				$rootScope.products = data;
   				$scope.product = '';
   			});
   		};

   		refresh();

   		$scope.addProduct = function () {
   			$http.post('/products', $scope.product).success(function (data) {
   				refresh();
   			});
   		};

   		$scope.remove = function (id) {
   			$http.delete('/products/' + id).success(function (data) {
   				refresh()
   			});
   		};

   		$scope.edit = function (product) {
            $rootScope.product = product;
         };
   		
	}]);
	