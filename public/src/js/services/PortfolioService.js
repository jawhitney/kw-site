angular.module('portfolioService', [])

.factory('Pieces', ['$q', '$http',
	function($q, $http) {
		return {
			getPieces: function(category, pieceId) {
				var defer = $q.defer(),
					url = 'http://jonathanwhitney.net/kw/?json=';
					// url = 'dist/json/data.json';

				if (pieceId) {
					url += 'get_post&post_id=' + pieceId;
				} else if (category !== '') {
					url += 'get_category_posts&slug=' + category;
				} else {
					url += 'get_posts';
				}

				url = 'dist/json/kw-data.json';

				// url += '&callback=JSON_CALLBACK';

				// JSON from CMS
				$http.get(url, { cache: "true" }).success(function(data) {
					defer.resolve(data);
				});

				// JSONP from CMS: testing localhost
				// $http.jsonp(url, { cache: "true" }).success(function(data) {
				// 	defer.resolve(data);
				// });

				return defer.promise;
			},
			parsePiece: function(p) {
				var post = {};

				post.id = p.id;
				post.title = p.title;
				post.date = p.date;
				post.type = []; 
				p.categories.forEach(function(c) {
					post.type.push(c.title);
				});
				post.series = [];
				p.tags.forEach(function(t) {
					post.series.push(t.title);
				});
				post.medium = p.custom_fields.medium[0];
				post.width = p.custom_fields.width[0];
				post.height = p.custom_fields.height[0];
				post.description = p.custom_fields.description[0];
				post.images = {};
				p.attachments.forEach(function(a) {
					if (a.id.toString() === p.custom_fields.thumbnail[0]) {
						post.images.thumbnail = a.url;
					}
					if (a.id.toString() === p.custom_fields.thumbnail_retina[0]) {
						post.images.thumbnailRetina = a.url;
					}
					if (a.id.toString() === p.custom_fields.full[0]) {
						post.images.full = a.url;
					}
					if (a.id.toString() === p.custom_fields.full_retina[0]) {
						post.images.fullRetina = a.url;
					}
				});

				return post;
			}
		};
	}]);
