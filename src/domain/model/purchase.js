export class Purchase {
    constructor( owner = null, product = null, value = null ) {

        this.owner = owner;
        this.product = product;
        this.value = value;
    }

    getPurchaseValues() {
        return {...this};
    }
}