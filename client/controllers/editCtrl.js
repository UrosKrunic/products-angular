angular.module('musicalInstruments')
	.controller('editCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {
		$scope.product = $rootScope.product;

		$scope.save = function () {
			$http.put('/products/' + $scope.product._id, $scope.product).success(function (response) {
				$rootScope.product = '';
				$location.path('/');
			});
		};
	}]);