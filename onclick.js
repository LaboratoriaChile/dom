// Con evento onclick creado desde html y creando elementos
// Guardo en una variable el elemento de html con id root, donde imprimeré los datos que crearé desde js
const container = document.getElementById("root");
// Creo un elemento ul
let ulText = document.createElement('ul');
// Comienzo con nuestra función del evento onclick
function show(){
  // Guardo en una variable el valor que ingresara el usuario
  let userText = document.getElementById("user_text").value;
  console.log(userText);
  // Recorro el valor que ingreso el usuario
  for(var i = 0; i < userText.length; i++){
    console.log(userText[i]);
    // Creo un elemento li donde imprimiré nos elementos en la posición de lo ingresado por el usuario
    const liText = document.createElement('li');
    // Le doy una clase a mi li creado, para luego darle estilos desde css
    liText.classList.add('texto');
    // Creo un node texto el cual el contenido es la posicion
    let contentLiText = document.createTextNode(userText[i]);
    // Le asigno como padre el contennido al li
    liText.appendChild(contentLiText);
    // Asigno padre a mi li
    ulText.appendChild(liText);
    // Le asigno padre a mi ul, el cual es el container traido desde html
    container.appendChild(ulText);
  }
}