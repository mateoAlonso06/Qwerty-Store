"use strict";
// Precargamos el DOM
document.addEventListener("DOMContentLoaded", function() {
    inicializarTabla();
    vaciar();
  });

let objetosCarrito = [
    {
      
    },
  ];
  
  // Llamado a botones y ag //
  document.querySelector("#btn-agregar1").addEventListener("click", agregar1);
  document.querySelector("#btn-agregar3").addEventListener("click", agregar3);
  document.querySelector("#btn-vaciar").addEventListener("click", vaciar);
  
  // Funcion para mostrar la tabla
  function tabla(nuevaPc) {
    let tablaVentaPc = document.querySelector("#tablaVender");
  
    let fila = tablaVentaPc.insertRow(-1);
  
    let celda = fila.insertCell(0);
  
    celda.innerHTML = nuevaPc.gama;
  
    celda = fila.insertCell(1);
  
    celda.innerHTML = nuevaPc.perifericos;
  }
  
  // Inicializacion de la Tabla 
  function inicializarTabla() {
    for (let i = 0; i < objetosCarrito.length; i++) {
      tabla(objetosCarrito[i]);
    }
  }
  
  // Vaciar Tabla 
  function vaciar() {
    let tablaVentaPc = document.querySelector("#tablaVender");
  
  // Eliminar todas las filas, excepto la primera (encabezado)
    while (tablaVentaPc.rows.length > 1) {
      tablaVentaPc.deleteRow(1);
    }
  
  // Vaciar la lista objetosCarrito
    objetosCarrito = [];
  }
  // Se llama a la funcion incializarTabla 
  inicializarTabla();
  
  // Traer los valores del input y crea las variables
  function agregar1() {
    let gama = document.querySelector("#gama").value;
    let perifericos = document.querySelector("#perifericos").value;
  
    let nuevaCompra = {
      gama: gama,
      perifericos: perifericos,
    };
  
    objetosCarrito.push(nuevaCompra); // agrega un nuevo elemento al JSON
    tabla(nuevaCompra);
  }
  //Repite el proceso anterior, con la diferencia de la ultima condicion para agregar 3 elementos//
  function agregar3 (){
    let gama = document.querySelector("#gama").value;
    let perifericos = document.querySelector("#perifericos").value;
    
    let nuevaCompra = {
        gama: gama,
        perifericos: perifericos,
      }; 
  //Se crea una iteracion que incremente hasta 3 y agregue esa cantidad de elementos//
  for(let i = 0; i < 3; i++){
    objetosCarrito.push(nuevaCompra);
    tabla(nuevaCompra);
    
  }
}
  