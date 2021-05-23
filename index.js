let result = {
  productList: [],
};

let archive = "codebeautify.json";
fetch(archive)
  .then(async (response) => response.json())
  .then(async (data) => {
    result.category = data.category.displayName;
    for (let i = 0; i < data.items.length; i++) {
      result.productList.push({
        name: data.items[i].displayName,
        id: data.items[i].id,
        brand: data.items[i].brand,
        price: data.items[i].salePrice ?? data.items[i].listPrice,
        photos: data.items[i].mediumImageURLs,
      });
    }
  });
