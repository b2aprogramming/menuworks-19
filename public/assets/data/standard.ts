
var favoritesFacet = {
    name: "Favorites",
    values: [
        { id: 1, name: "My Favorites", showEmpty: true, list: [-1] }
    ]
},
suppliedDishFacet = {
    name: "Supplied Dish",
    values: [
        { id: 1, name: "Ingredient", showEmpty: true },
        { id: 2, name: "Recipe" },
        { id: 3, name: "Supplied Dish", showEmpty: true }
    ]
},
allergensFacet = {
    name: "Allergens / Intolerances / Sensitivities (Does Not Contain)",
    values: []
},
dietaryPreferencesFacet = {
    name: "Dietary Preferences",
    values: [
        { id: 5187, name: "Vegan", list: [5187], showEmpty: true },
        { id: 5186, name: "Vegetarian", list: [5186], showEmpty: true },
        { id: 6753, name: "Avoiding Gluten", list: [6753], showEmpty: true },
    ]
},
inventoryCategoryFacet = {
    name: "Inventory Category",
    values: []
},
manufacturersFacet = {
    name: "Manufacturer",
    values: []
},
supplierCategoryFacet = {
    name: "Supplier Category",
    values: []
},
productAttributesFacet = {
    name: "Product Attributes",
    values: []
},
facets = [
    favoritesFacet,
    suppliedDishFacet,
    // allergensFacet,
    dietaryPreferencesFacet,
    inventoryCategoryFacet,
    manufacturersFacet,
    supplierCategoryFacet,
    productAttributesFacet
];