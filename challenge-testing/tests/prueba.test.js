const { carritoDeCompras } = require("./index");

// describe('una prueba de test que pasan siempre',()=>{
//     it('este test debe pasar siempre', ()=>{
//         expect(true).toBe(true);
//     });
// });

describe("Prueba de Método", () => {
    carritoDeCompras.agregarProducto({precio: 100});
    
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
