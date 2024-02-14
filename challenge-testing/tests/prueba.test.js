const CarritoCompra = require("../index.js");
describe('una prueba de test que pasa siempre',()=>{
    it('este test debe pasar siempre para saber si funciona la conexión', ()=>{
        expect(true).toBe(true);
    });
});

describe('Clase CarritoCompra', ()=>{
    const carritoDeCompras = new CarritoCompra();
    it('CarritoCompra es una clase',()=>{
        expect(typeof CarritoCompra).toBe('function');
    })
    it ('CarritoCompra inicia como Array Vacío',()=>{
        expect(Array.isArray(carritoDeCompras.productos)).toBe(true);
        expect(carritoDeCompras.productos).toHaveLength(0);
    })
})


describe("Prueba de Métodos", () => {
    const carritoDeCompras = new CarritoCompra;
    carritoDeCompras.agregarProducto({precio: 100});
    
    it("El método debe dar error al poner un número mayor a 100% de descuento", () => {
        let totalConDescuento = carritoDeCompras.aplicarDescuento(700);
        expect(totalConDescuento).toEqual("El descuento debe ser entre 0% y 100%");
    });
    
    it("El método debe dar el 50% de un producto", () => {
        let totalConDescuento = carritoDeCompras.aplicarDescuento(50);
        expect(totalConDescuento).toEqual(50);
    });
    
    it("El método no debe dar descuento si el usuario no pone porcentaje", () => {     
        
        let totalConDescuento = carritoDeCompras.aplicarDescuento();
        expect(totalConDescuento).toEqual(100);
    });
    it("El método debe dar el 30% de dos productos", () => {
        carritoDeCompras.agregarProducto({
            precio: 1000,
        });
        let totalConDescuento = carritoDeCompras.aplicarDescuento(30);
        expect(totalConDescuento).toEqual(770);
    });
});

