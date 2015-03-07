angular.module('paintingsController', ['infinite-scroll'])

.controller('PaintingsController', ['$scope', 'Pieces',
	function($scope, Pieces) {
		$scope.type = [];
	    $scope.series = [];
	    $scope.filter = {};
	    $scope.rowOffCanvasClass = 'row-offcanvas row-offcanvas-right';
	    $scope.hideMobileFilter = true;
	    $scope.isRetina = window.devicePixelRatio > 1 ? true : false;
	    $scope.predicate = 'date';
	    $scope.reverse = true;
		$scope.pieces = [];
		$scope.hasPieces = false;

		Pieces.getPieces('').then(function(data) {
			data.posts.forEach(function(p) {
			// data.forEach(function(p) {
				var piece = Pieces.parsePiece(p);
				// var piece = p;

				$scope.pieces.push(piece);
				
				if (piece.type) {
					piece.type.forEach(function(t) {
						if ($scope.type.indexOf(t) === -1) $scope.type.push(t);
					});
				}

				if (piece.series) {
					piece.series.forEach(function(s) {
						if ($scope.series.indexOf(s) === -1) $scope.series.push(s);
					});
				}
			});

			if ($scope.pieces.length > 0) $scope.hasPieces = true;
		});

		$scope.toggleFilter = function() {
			var buttonClass = 'row-offcanvas row-offcanvas-right';

			if ($scope.hideMobileFilter) {
				$scope.rowOffCanvasClass = buttonClass + ' active';
				$scope.hideMobileFilter = false;
			} else {
				$scope.rowOffCanvasClass = buttonClass;
				$scope.hideMobileFilter = true;
			}
		};

		$scope.filterByProperties = function (piece) {
	        var matches = true;

	        for (var prop in $scope.filter) {
	            if (noSubFilter($scope.filter[prop])) continue;

	            if (piece[prop].length === 0) {
	            	matches = false;
	            	continue;
	            }

	            if (piece[prop].length > 0) {
		            if (!$scope.filter[prop][piece[prop]]) {
		                if (!angular.isArray(piece[prop])) {
		                    matches = false;
		                    break;
		                } else {
		                    for (var key in piece[prop]) {
		                        if ($scope.filter[prop][piece[prop][key]]) {
		                            matches = true;
		                            break;
		                        } else {
		                            matches = false;
		                        }
		                    }
		                }
		            }
		        }
	        }        

	        return matches;
	    };

	    $scope.nextPageDisabledClass = function() {
	        if ($scope.filtered && $scope.pieces) {
	            return $scope.filtered.length < $scope.itemsPerPage ? 'ng-hide' : '';
	        }
	    };
	    
	    function noSubFilter(subFilterObj) {
	        for (var key in subFilterObj) {
	            if (subFilterObj[key]) return false;
	        }
	        return true;
	    }
	}]);
