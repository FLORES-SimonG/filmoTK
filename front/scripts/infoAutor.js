//! ESTIMADO PROFESOR/A, ESTE ARCHIVO JAVASCRIPT NO FUE UTILIZADO EN LA ACTIVIDAD, PERO LO DEJO PARA QUE PUEDA REVISARLO SI DESEA.
//! HE COMENTADO TODO YA QUE LA ACTIVIDAD SE SOLICITABA SOLAMENTE PÁGINAS ESTÁTICAS,
//! SIN EMBARGO, DEJO EL CÓDIGO PARA QUE PUEDAN VERLO Y REVISARLO.
//! ESTO ES LA COPIA DEL TRABAJO DEL MÓDULO N°1. SI DESEAN VERLO, PUEDEN DESCOMENTARLO Y REVISARLO, PERO HABRÍA QUE TAMBIÉN
//! DESCOMENTAR EL CÓDIGO DEL HTML Y ADICIONAR ALGUNAS ETIQUETAS YA QUE LOS ELIMINÉ POR COMODIDAD Y PRESENTACIÓN. 


// class Activity {
//   constructor({ id, title, description, imgUrl }) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.imgUrl = imgUrl;
//   }
// }

// class Repository {
//   constructor() {
//     this.activities = [];
//   }

//   getAllActivities() {
//     return this.activities;
//   }

//   createActivity(object) {
//     const activity = new Activity(object);
//     this.activities.push(activity);
//   }

//   deleteActivity(id) {
//     this.activities = this.activities.filter(activity => activity.id !== id);
//   }
// }

// // Funciones de UI
// function createCard(activity) {
//   const { id, title, description, imgUrl } = activity;
//   const card = document.createElement("div");
//   card.innerHTML = `
//     <h4>${title}</h4>
//     <img src="${imgUrl}" alt="Imagen de actividad" style="width:100px; height:100px;">
//     <p>${description}</p>
//   `;
//   card.addEventListener("click", () => {
//     repository.deleteActivity(id);
//     renderActivities();
//   });
//   return card;
// }

// function renderActivities() {
//   const activitiesContainer = document.getElementById("envioActividad");
//   activitiesContainer.innerHTML = ""; // Limpiar el contenedor
//   const activities = repository.getAllActivities();
//   activities.forEach(activity => {
//     const activityCard = createCard(activity);
//     activitiesContainer.appendChild(activityCard);
//   });
// }

// function handleSubmit(e) {
//   e.preventDefault();
//   const titleInput = document.querySelector(".nombreJS");
//   const descriptionInput = document.querySelector(".descripcionJS");
//   const imgUrlInput = document.querySelector(".urlJS");
//   const id = Date.now();

//   if (!titleInput.value || !descriptionInput.value || !imgUrlInput.value) {
//     alert("COMPLETA LOS DATOS");
//     return;
//   }

//   const activityObject = {
//     id,
//     title: titleInput.value,
//     description: descriptionInput.value,
//     imgUrl: imgUrlInput.value,
//   };

//   repository.createActivity(activityObject);
//   renderActivities();
//   e.target.reset(); // Limpiar el formulario
// }

// function initializeFormListener() {
//   const form = document.querySelector(".form");
//   form.addEventListener("submit", handleSubmit);
// }

// // Instancia del repositorio
// const repository = new Repository();

// // Inicialización
// function initialize() {
//   initializeFormListener();
//   renderActivities(); // Para mostrar actividades existentes al cargar la página
// }

// initialize();



// class Activity {
//     constructor({ id, title, description, imgUrl }) {
//       this.id = id;
//       this.title = title;
//       this.description = description;
//       this.imgUrl = imgUrl;
//     }
//   }
  
//   class Repository {
//     constructor() {
//       this.activities = [];
//     }
//     getAllActivities() {
//       return this.activities;
//     }
  
//     createActivity(object) {
//       const activity = new Activity(object);
//       this.activities.push(activity);
//     }
  
//     deleteActivity(id) {
//       this.activities = this.activities.filter((x) => x.id !== id);
//     }
//   }
  
//   const repositorio = new Repository();
  
//   const callBack = (e) => {
//     e.preventDefault();
//     const titulo = formulario.querySelector(".nombreJS");
//     const comentario = formulario.querySelector(".descripcionJS");
//     const url = formulario.querySelector(".urlJS");
//     const idNumber = Date.now();
//     const obj = {
//       id: idNumber,
//       title: titulo.value,
//       description: comentario.value,
//       imgUrl: url.value,
//     };
  
//     if (
//       titulo.value.length == 0 ||
//       comentario.value.length == 0 ||
//       url.value.length == 0
//     ) {
//       alert("COMPLETA LOS DATOS");
//     } else {
//       repositorio.createActivity(obj);
//       mostrarCartas();
//       formulario.reset();
//     }
//   };
  
//   const mostrarCartas = () => {
//     const carta = document.getElementById("envioActividad");
//     carta.innerHTML = "";
//     const actividadesParciales = repositorio.getAllActivities();
//     const conjuntoTarjetas = actividadesParciales.map((actividad) => {
//       return crearCarta(actividad);
//     });
//     conjuntoTarjetas.forEach((tarjeta) => carta.appendChild(tarjeta));
//   };
  
//   const crearCarta = (actividad) => {
//     const { id, title, description, imgUrl } = actividad;
//     const lista = document.createElement("div");
//     let tituloRender = document.createElement("h4");
//     tituloRender.textContent = title;
//     let imagenRender = document.createElement("img");
//     imagenRender.src = imgUrl;
//     imagenRender.setAttribute("alt", "Imagen");
  
//     let parrafoRender = document.createElement("p");
//     parrafoRender.textContent = description;
//     lista.appendChild(tituloRender);
//     lista.appendChild(imagenRender);
//     lista.appendChild(parrafoRender);
  
//     lista.addEventListener("click", () => {
//       lista.remove();
  
//       repositorio.deleteActivity(id);
//     });
  
//     return lista;
//   };
  
//   const formulario = document.querySelector(".form");
  
//   formulario.addEventListener("submit", callBack);
  
//   const botonCreador = document.getElementById("botonCreador");
//   const nombreElemento = document.createElement("h6");
//   const divDeveloper = document.getElementById("envioDeveloper");
  
//   // Establecer estilos iniciales
//   nombreElemento.style.margin = "8px";
//   nombreElemento.style.padding = "4px";
//   nombreElemento.style.textAlign = "center";
//   nombreElemento.style.backgroundColor = "firebrick";
//   nombreElemento.style.borderRadius = "25px";
//   nombreElemento.style.color = "whitesmoke";
//   nombreElemento.style.border = "2px solid whitesmoke";
  
//   botonCreador.addEventListener("click", function (e) {
//     e.preventDefault();
//     renderDev();
//   });
  
//   function renderDev() {
//     const nombreCreador = document.getElementById("inputCreador");
//     const nombre = nombreCreador.value;
  
//     // Asignar el nombre
//     nombreElemento.textContent = nombre;
  
//     // Limpiar el nombreCreador
//     nombreCreador.value = "";
  
//     // Agregar el elemento al divDeveloper
//     divDeveloper.innerHTML = "";
//     divDeveloper.appendChild(nombreElemento);
//   }
  