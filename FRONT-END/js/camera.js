
class Camera {
    constructor(product) {
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.price = product.price;
        this.id = product._id;
        this.description = product.description;
        this.lenses= product.lenses;
    }
    
}

