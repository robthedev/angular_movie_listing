var app = angular.module("moviesApp", ["firebase"]);

app.controller("MoviesCtrl", function($scope, $firebaseArray) {
	var ref = new Firebase("https://movies-55772.firebaseio.com/");
	var movies = ref.child("movies");

	$scope.movies = $firebaseArray(movies);


	$scope.addMovie = function() {
		$scope.movies.$add({
			title: $scope.newMovieTitle,
			rating: $scope.newMovieRating,
			genre: $scope.newMovieGenre
		}).then(function(movies){
			$scope.movies.forEach(function(elem) {
				console.log(elem.genre);
				showMovies(elem.genre, elem.title, elem.rating);
			});
			
			//console.log(_cate.path.u['1']);
			console.log($scope.movies);
		});
	};

}); 

function showMovies (genre, title, rating) {
	var _divs = $('div');


		$( "div" ).each(function() {

			if ($(this).attr("class") == genre) {
				$( this ).append('<p>' +  title + '</p>');
				$( this ).append('<p>' +  rating + '</p>');
			}

		  
		});

alert('ran');

	
}

