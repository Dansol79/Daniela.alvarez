


form.addEventListener('submit', validar)


// Validacion de datos

function validar(e){
 
    e.preventDefault();
    

    if($('#paciente').val() =='' || $('#apellido').val() =='' || $('#edad').val() =='' || $('#teleono').val() =='' || $('#hora').val() =='' || $('#fecha').val() ==''|| $('#objetivo').val() ==''){
   // Envio mensaje de error
      $('#error1').fadeIn(500).fadeOut(4000);
      // Aparece de nueva la foto x  no hay cita impresa  
      $(`#div${photo.id}`).fadeIn(6000);

      return false;
   }
   if($('#edad').val() < 18){
  
     $('#error2').fadeIn(500).fadeOut(6000);
   //   Aparece foto nuevamente
     $(`#div${photo.id}`).fadeIn(6000);
      return false;
   }else{
     
     $('#success').fadeIn(500).fadeOut(3000);
   //   Datos optimos imprime sita
        imprimirCita();
      //   Desaparece formulario
       $('#contenido').fadeOut(3000);
   }
  
//  Guardar en localStore la informacion
 localS();

 
//   Reiniciar formulario
form.reset();
  }
 
 
 $(document).ready(() =>{
    //  creando un div para mi objeto de img
   $('#contenido2').append(`<div id="div${photo.id}">
                      <image  src=${photo.imagen} class="photos"></image>
                      </div>`);
   // Estilos a img creada
   $('.photos').css({
      'max-width':'100%',
       'width':'675px',
      'height': '100vh',
      'border-radius': '5px',
      'position': 'relative'

   })
   // Evento para el botn que da animacion a img
   $('#btn').on('click', function() {
      $(`#div${photo.id}`).slideUp(1000);
   })

  
 });


    

 