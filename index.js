let result = {
  productList: [],
};

let url =
  "https://www.armazempb.com.br/ccstoreui/v1/products?totalResults=true&totalExpandedResults=true&catalogId=cloudCatalog&limit=60&offset=0&categoryId=eletrodomestico&includeChildren=true&storePriceListGroupId=reais";

fetch(url)
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
