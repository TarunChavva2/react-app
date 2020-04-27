class ProductModel {
    constructor(productModel) {
        this.productId = productModel.id;
        this.availableSizes = productModel.availableSizes;
        this.currencyFormat = productModel.currencyFormat;
        this.currencyId = productModel.currencyId;
        this.description = productModel.description;
        this.installmentsCount = productModel.installments;
        this.isFreeShipping = productModel.isFreeShipping;
        this.price = productModel.price;
        this.printStyle = productModel.style;
        this.title = productModel.title;
        this.imageURL = productModel.image
    }
}

export default ProductModel;