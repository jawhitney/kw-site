angular.module('pieceController', [])

.controller('PieceController', ['$scope', '$routeParams', 'Pieces',
	function($scope, $routeParams, Pieces) {
		$scope.isRetina = window.devicePixelRatio > 1 ? true : false;
		$scope.piece = [];

		Pieces.getPieces('', $routeParams.pieceId).then(function(data) {
			$scope.piece.push(Pieces.parsePiece(data.post));
		});
	}]);
