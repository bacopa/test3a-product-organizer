"use strict";

var app = angular.module("productsApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "/partials/home.html",
		controller: "homeCtrl"
	})
	.state("detail", {
		url: "/detail/:productIndex",
		templateUrl: "/partials/detail.html",
		controller: "detailCtrl"
	})
	$urlRouterProvider.otherwise("/");

})