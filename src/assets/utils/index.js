// funcion que me va a permitir sumar los productos del checkout side menu

export const precioTotal=(productos,cantidad)=>{
    let suma=0
    productos.forEach(producto =>suma+=producto.precio*parseInt(cantidad))
    return suma        

}