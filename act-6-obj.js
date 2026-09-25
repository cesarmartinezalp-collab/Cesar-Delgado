//Datos y metodos de un objeto
//ficha de menu
// los datos son distintos a proposito. compara la forma, no el contenido
const producto = {
    id: "p-0'7",
    nombre:"Agua de jamaica",
    precio:15,
    categoria:"bebida",
    disponible:true,

    //Metodos
    resumen(){
        return this.nombre + "- $ " + this.precio + "(" + this.categoria + ")"
    },

    estaDisponible(){
        return this.disponible;
    }
};


console.log("Paso 1 - Imprimiendo el producto");
console.log(producto);

// Paso 2 - Tres formas de leer
console.log("-----Paso 2 -----");
const campo = "nombre";
console.log(producto.nombre);
console.log(producto["nombre"]);
console.log(producto[campo]);


console.log("----Paso 3 ----");
console.log(producto.resumen());
console.log(producto.estaDisponible());

// ----- PASO 4 El usuario -----
const usuario = {
    id:"i-03",
    nombre:"Juan Perez",
    correo:"juandelatorre@cbtis258.edu.mx",
    telefono:81340928,
    rol:"alumno"
};



//----- PASO 5 -----
const pedido = {
    folio:"PR-0118",
    cliente: usuario,
    producto: producto,
    cantidad: 3,
    estado:"pendiente"
}


console.log("----PASO 5----")
console.log(pedido.cliente.nombre);
console.log(pedido.producto.precio);
console.log(pedido.cliente.telefono);

// Paso 6 - Desestrecturacion
console.log("------PASO 6 ------");
const {nombre, precio} = producto;
console.log(nombre, precio);

const {cantidad, nota = "sin nota"} = pedido;
console.log(cantidad, nota);
console.log("CESAr jovan martinez delgado")