angular.module('designController', ['infinite-scroll'])

.controller('DesignController', ['$scope', 'Pieces',
	function($scope, Pieces) {
	    $scope.isRetina = window.devicePixelRatio > 1 ? true : false;
	    $scope.predicate = 'date';
	    $scope.reverse = true;
		$scope.pieces = [];
		$scope.hasPieces = false;

		Pieces.getPieces('design').then(function(data) {
			data.posts.forEach(function(p) {
				var piece = Pieces.parsePiece(p);

				$scope.pieces.push(piece);
			});

			if ($scope.pieces.length > 0) $scope.hasPieces = true;
		});
	}]);
