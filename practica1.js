class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        throw new Error('Agregar todas las variables');
      }
  
      if (this.products.some(p => p.code === product.code)) {
        throw new Error('El codigo ya existe');
      }
  
      product.id = this.nextId++;
      this.products.push(product);
    }
    getProducts() {
        return this.products;
      }
      getProductById (id) {
        const product = this.products.find(product => product.id === id);
        if (product){
            return product
        } else {
            console.error("Not found")
        }
      }
  }

  

  
  