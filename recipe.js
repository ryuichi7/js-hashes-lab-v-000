'use strict';

function addIngredient(recipe,ingredient,quantity) {
	recipe[ingredient] = quantity;
	return recipe;
};

function removeIngredient(recipe, ingredient) {
	delete recipe[ingredient];
	return recipe;
};

function updateIngredient(recipe,ingredient,quantity) {
	recipe[ingredient] = quantity;
	return recipe;
};

function readRecipe(recipe) {
	if (Object.keys(recipe).length === 0) {
		console.log("This recipe has no ingredients!");
	} else {
		for (var key in recipe) {
			console.log("this recipe calls for " + recipe[key] + " of " + key);
		};
	};
};
