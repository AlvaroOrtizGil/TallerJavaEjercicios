





let carrito = [];
function agregarProducto(nombre, precio, cantidad) {

let producto = {nombre, precio, cantidad}


// producto.nombre=prompt("Introduce El nombre del Producto");
// producto.precio=prompt("Introduce el precio");
// producto.cantidad=prompt("Introduce la cantidad");
//añadir valores entrada en array
carrito.push(producto);
}
function mostrarCarrito() {
    carrito.forEach((producto) => console.log(producto.nombre));
}
function calcularTotal() {
let total = 0;
carrito.forEach(producto => {
total+=producto.cantidad*producto.precio;
});
console.log(`Total del carrito: ${total}`);
}



//Probar Programa
agregarProducto("Manzana",2,4);
agregarProducto("Platano",2,5);
mostrarCarrito();
calcularTotal(carrito);


