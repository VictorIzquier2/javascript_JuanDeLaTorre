

// querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 elemento
// heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
// console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
// enlaces[0].textContent = 'Nuevo texto para enlace';
// enlaces[0].target = '_blank';
// enlaces[0].href = 'https://www.google.com';
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace =  document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Nuevo Enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

console.log(1);

window.addEventListener('load',()=> {
  console.log(2);
});

window.onload = ()=>{
  console.log(3);
};

document.addEventListener('DOMContentLoaded', ()=> {
  console.log(4);
})

console.log(5)

window.onscroll = ()=>{
  console.log('scrolling...');
}

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', (e)=> {
//   e.preventDefault();
//   console.log('enviando formulario...')
// })

// Eventos de los Inputs y textarea

const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

const leerFormulario = (e)=>{
  datos[e.target.id] = e.target.value
  console.log(datos);
};

nombre.addEventListener('input', leerFormulario);
email.addEventListener('input', leerFormulario);
mensaje.addEventListener('input', leerFormulario);

// Evento submit
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validar formulario
  const {nombre, email, mensaje} = datos;

  if(nombre == '' || email  == '' || mensaje == ''){
    MostrarAlerta('Todos los campos son obligatorios', 'error');
    return;
  }
  MostrarAlerta('Formulario enviado correctamente');
  
  // Enviar formulario
});

const MostrarAlerta = (mensaje, error= null)=> {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if(error){
    alerta.classList.add('error');
  }else{
    alerta.classList.add('correcto')
  }
  
  formulario.appendChild(alerta);

  setTimeout(()=> {
    alerta.remove();
  }, 2000)
}




