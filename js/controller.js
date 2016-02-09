var app = angular.module("MyFirstapp", []);

app.controller("FirstController", function($scope){
	$scope.nombre = "Luis";
	$scope.newcomment = {};
	$scope.comentarios = [
	{
		comentario: "Buen Tutorial",
		username: "Luis"
	},
	{
		comentario: "Buen Tutorial",
		username: "Alfredo"
	}
	];
	$scope.addComment = function(){
		$scope.comentarios.push($scope.newcomment);
		$scope.newcomment = {};
	};
});

app.controller("jsonplaceholder", function($scope, $http){
	$scope.posts = {};
	$scope.newPost = {};
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			$scope.posts = data;
			console.log(data);
		})
		.error(function(err){

		});
	$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: 	$scope.newPost.title,
			body: 	$scope.newPost.body,
			UserId: 1
		})
		.success(function(data,status,headers,config){
			$scope.posts.push($scope.newPost);
			$scope.newPost = {};	
		})
		.error(function(error,status,headers,config){
			console.log(error);
		});
	};

});

