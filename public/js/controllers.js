"use strict";

var app = angular.module("productsApp");

app.controller("homeCtrl", function ($scope, $state, ProductsServices) {

	$scope.productsList = ProductsServices.getProducts();


})

app.controller("detailCtrl", function ($scope, $stateParams, ProductsServices) {

	var productIndex = $stateParams.productIndex;
	// $scope.productName = $stateParams.productName;


	$scope.productsList = ProductsServices.getProducts();

	console.log($scope.productsList)
	console.log(productIndex)
	$scope.product = $scope.productsList[productIndex];

})