export const totalPrice=(productos,cantidad)=>{
    let suma=0
    productos.forEach(producto => suma+=producto.precioUnitario*cantidad      
    );
    
    return suma
}