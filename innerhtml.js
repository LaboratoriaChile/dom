// innerHTML con addEventListener
// Guardo en una variable el elemento de boton que luego utilizare en addEventListener
const btnShow = document.getElementById("show");
// Guardo en una variable el elemento li traido desde HTML
const ulText = document.getElementById("list")

btnShow.addEventListener('click', () => {
  // Guardo en una variable los datos que ingresará el usuario
  let userText = document.getElementById("user_text").value;
  console.log(userText);
  // Recorro el dato ingresado por el usuario
  for(var i = 0; i < userText.length; i++){
    console.log(userText[i]);
    // Le digo que se imprima en la etiqueta ul y que por cada iteración agregue un li
    ulText.innerHTML += `<li class="texto"> ${userText[i] } </li>` 
  }
})