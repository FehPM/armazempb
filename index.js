let productList = {
  hostURL: "http://www.armazempb.com.br",
  products: [],
  category: "",
};

class ViewModel {
  constructor(productList) {
    this.category = ko.observable(productList.category);
    this.products = ko.observableArray(productList.products);
  }
}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    productList.category = data.category.displayName;
    data.items.forEach((product) => {
      newProduct = {
        name: product.displayName,
        brand: product.brand,
        listPrice: product.listPrice.toFixed(2),
        currPrice: (product.salePrice ?? product.listPrice).toFixed(2),
        isOnSale: product.salePrice ? true : false,
        photo: productList.hostURL + product.mediumImageURLs[0],
        url: productList.hostURL + product.route,
      };

      productList.products.push(newProduct);
    });
    ko.applyBindings(new ViewModel(productList));
  });
