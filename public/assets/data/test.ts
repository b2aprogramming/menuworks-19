
function buildIngredientFilterGroups(responses) {
    var nutrients = _
        .chain(responses[0].data)
        .sortBy('DisplayOrder')
        .map(function (item) {
            return {
                id: item.Id,
                type: "range",
                name: item.Name,
                shortName: item.ShortName,
                query: 'nutrients'
            };
        })
        .value();

    var allergens = _
        .chain(responses[1].data)
        .map(function (item) {
            return {
                id: item.Id,
                type: "boolean-radio",
                name: item.Name,
                value: "false",
                query: 'allergens'
            };
        })
        .value();

    var deliveryStates = _
        .chain(responses[2].data)
        .map(function (item) {
            return {
                id: item.DeliveryStateId,
                name: item.DeliveryStateName
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();

    var manufacturers = _
        .chain(responses[3].data)
        .map(function (item) {
            return {
                id: item.ManufacturerId,
                name: item.ManufacturerName
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();


    var productionMethods = _
        .chain(responses[4].data)
        .map(function (item) {
            return {
                id: item.ProductionMethodId,
                name: item.ProductionMethodName
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();

    var productionSizes = _
        .chain(responses[5].data)
        .map(function (item) {
            return {
                id: item.ProductionSizeId,
                name: item.ProductionSizeName
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();

    var categories = _
        .chain(responses[6].data)
        .map(function (item) {
            var options = sortAndMapChildren(item.Children);

            return {
                id: item.Id,
                type: "recipe-set",
                name: item.Name,
                shortName: item.ShortName,
                allowMultiple: true,
                condition: false,
                tagHierarchy: true,
                options: options,
                value: options[0],
                query: 'categories'
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();

    var storageLocations = _
        .chain(responses[7].data)
        .map(function (item) {
            return {
                id: item.StorageLocationId,
                name: item.StorageLocationName
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();

    var ingredientSets = sortAndMapChildren(responses[8].data);

    var productAttributes = _
        .chain(responses[9])
        .map(function (item) {
            var options = mapProductAttributeChildren(item);

            return {
                id: item.Id,
                type: "recipe-set",
                name: item.DisplayName,
                shortName: item.Name,
                allowMultiple: true,
                condition: false,
                options: options,
                value: options[0],
                query: 'attributes'
            };
        })
        .sortBy(nameCaseInsensitive)
        .value();

    var generalFilterGroup = {
            id: 1,
            name: "General",
            options: getGeneralForIngredients({
                deliveryStates: deliveryStates,
                manufacturers: manufacturers,
                ingredientSets: ingredientSets,
                productionMethods: productionMethods,
                productionSizes: productionSizes,
                storageLocations: storageLocations,
            }),
            open: false
        },
        nutrientsFilterGroup = {
            id: 2,
            name: "Nutrition",
            options: nutrients,
            open: false
        },
        allergensFilterGroup = {
            id: 3,
            name: "Allergens / Intolerances / Sensitivities",
            options: allergens,
            open: false
        },
        categoriesFilterGroup = {
            id: 4,
            name: "Categories",
            options: categories,
            open: false
        },
        dateRangeFilterGroup = {
            id: 5,
            name: "Date Range",
            options: getDateRanges(),
            open: false
        },
        productAttributesFilterGroup = {
            id: 6,
            name: "Product Attributes",
            options: productAttributes,
            open: false
        };

    var filterGroups = [
        generalFilterGroup,
        nutrientsFilterGroup,
        allergensFilterGroup,
        categoriesFilterGroup,
        dateRangeFilterGroup,
        productAttributesFilterGroup,
    ];

    return filterGroups;
}