angular.module("MyFirstapp")

.controller("FirstController", function($scope){
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
})

.controller("jsonplaceholder", function($scope, $http){
	$scope.posts = [];
	$scope.newPost = {};
	$scope.loading = true;
	$scope.nombre = "Prueba de rootScope hijo";
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			$scope.posts = data;
			$scope.loading = false;
			console.log(data);
		})
		.error(function(err){
			$scope.loading = false;
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

})

.controller("LocalStorage", function($scope, localStorageService){
	$scope.htmlstring = "<p>Hola Mundo</p>";
	$scope.mi_html = {};
	$scope.mi_html.title = "Hola";
	$scope.mi_html.body = "Hola Mundo";
	$scope.costo = 2;
	if(localStorageService.get("angular-todolist")){
		$scope.activities = localStorageService.get("angular-todolist");
	}else
	{
		$scope.activities = [];
	}	
	$scope.newActiv = {};
	$scope.$watchCollection('activities', function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.activities);
	});
	$scope.addActv = function(){
		$scope.activities.push($scope.newActiv);
		$scope.newActiv = {};		
	};
	$scope.clean = function(){
		$scope.activities = [];		
	};
})

.filter("removeHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	};
})

.run(function($rootScope){
	$rootScope.nombre = "Prueba de rootScope padre";
})

.controller("ChildController", function(){

})
