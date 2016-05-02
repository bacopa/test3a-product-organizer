"use strict";


var app = angular.module("productsApp");

app.service("ProductsServices", function () {


	this.getProducts = function() {
		return [

		{
			name: "pillow",
			description: "green and white polkadot pillow",
			category: "bedroom",
			price: "9.99",
			img: "http://www.parentalguide.org/images/products/Sweet%20Potato/Detail/42517.jpg"
		},

		{
			name: "towel",
			description: "kitchen dish towel",
			category: "kitchen",
			price: "2.99",
			img: "http://s7d9.scene7.com/is/image/BedBathandBeyond/4190013248071m?$478$"
		},

		{
			name: "heels",
			description: "sparkly",
			category: "shoes",
			price: "89.99",
			img: "http://road2beauty.com/wp-content/uploads/2014/07/Red-High-Heels-high-heels-35867224-500-500.jpg"
		}

	];
	}

})