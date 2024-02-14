class CarritoCompra {
  constructor() {
    this.productos = [];
  }
  getAllProductos() {
    return this.productos;
  }

  agregarProducto(producto) {
    const articulo = new Articulo(producto);
    this.productos.push(articulo);
  }

  calcularTotal() {
    let valorInicialAcumulador = 0;
    
    for (let i=0; i<this.productos.length;i++){
        valorInicialAcumulador+=this.productos[i].precio;
    }
    let valorSinDescuento=valorInicialAcumulador;
    return valorSinDescuento;
  }

  aplicarDescuento(porcentaje=0) {
    let valorConDescuento=0;
    if(porcentaje>100){
      return "El descuento debe ser entre 0% y 100%";
    }
    valorConDescuento= this.calcularTotal()*(1-(Math.abs(porcentaje)/100));   
    return valorConDescuento ;
  }
}



class Articulo {
  constructor({ title, precio}) {
    
    this.title = title;
    this.precio = precio;
    
  }
}

const carritoDeCompras = new CarritoCompra();

module.exports = CarritoCompra;

// let prueba = {
//     title: 'perro',
//     precio: 100,
//     descuento: 10
// }
// let prueba2 = {
//     title: 'gato',
//     precio: 1000,
//     descuento: 10
// }
// let prueba3 = {
//     title: 'zebra',
//     precio: 500,
//     descuento: 10
// }
// let prueba4 = {
//     title: 'lagarto',
//     precio: 400,
//     descuento: 10
// }

// carritoDeCompras.agregarProducto(prueba);
// carritoDeCompras.agregarProducto(prueba2);
// carritoDeCompras.agregarProducto(prueba3);
// carritoDeCompras.agregarProducto(prueba4);

// console.log(carritoDeCompras.getAllProductos());

// console.log(carritoDeCompras.calcularTotal())
// console.log(carritoDeCompras.aplicarDescuento())