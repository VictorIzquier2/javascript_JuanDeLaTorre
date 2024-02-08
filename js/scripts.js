

const boton = document.querySelector('#boton');

boton.addEventListener('click', ()=> {
  Notification.requestPermission()
    .then(resultado => console.log(`El resultado es: ${resultado}`))
    .catch(error => console.error(`Hubo un error: ${error}`))
})


// if(Notification.permission == 'granted'){
//   new Notification('Esta es una notificación', {
//     icon: 'img/ccj.png',
//     body: 'Codigo con Juan, los mejores tutoriales'
//   })
// }

// Async / await

// function descargarNuevosClientes(){
//   return new Promise( resolve =>{
//     console.log('Descargando clientes... espere...');

//     setTimeout(() => {
//       resolve('Los clientes fueron descargados')
//     }, 3000);

//   });
// }

// function descargarUltimosPedidos(){
//   return new Promise( resolve =>{
//     console.log('Descargando pedidos... espere...');

//     setTimeout(() => {
//       resolve('Los pedidos fueron descargados')
//     }, 5000);

//   });
// }


// async function app(){
//   try{
//     const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
//     console.log(resultado[0]);
//     console.log(resultado[1]);
//   }catch(error) {
//     console.log(error);
//   }
// }

// app();

// console.log('Este código no se bloquea');

// const TIEMPO = 3000;
// setTimeout(()=>{
//   console.log('set timeout... ' + TIEMPO/1000 + 's')
// }, TIEMPO)

const archivo = '../empleados.json' 

// function obtenerEmpleados(archivo){
//   fetch(archivo)
//     .then(respuesta => {
//        return respuesta.json()
//         .then(resultado => {
//           console.log(resultado);
//         });
//     });
// }

async function obtenerEmpleados(archivo){
  const respuesta = await fetch(archivo);
  console.log(respuesta);
  const resultadoJSON = await respuesta.json();
  const {empleados} = resultadoJSON;
  
  empleados.forEach(empleado => {
    console.log(empleado);
  });

}

obtenerEmpleados(archivo);
