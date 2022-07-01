const listUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.email}</td>
        <td class='centered'>${user.website}</td>
        </tr>`;
    });
    
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});



window.sr = ScrollReveal();



sr.reveal("#navbar", {

  duration: 3000,
  origin: 'bottom'


});

sr.reveal(".header-content-left", {

  duration: 1000,
  origin: 'top', 
  distance: '200px',
  

})
$(document).ready(function() {
  $("#MyModal").modal();
});



//segunda api

var contenido = document.querySelector('#contenido')
  function traer() {
      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
          console.log(data.results['0'])
          contenido.innerHTML = `
          <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
          <p>Nombre: ${data.results['0'].name.last}</p>
          `
      })
  } 

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(formulario);

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        } )
      })



      