class Product {

    constructor(name = null, price = null, quantity = null){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getProductValues() {
        return {...this};
    }
}