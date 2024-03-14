
let app = document.getElementById('app');


let whatsappContainer = document.createElement('div');
whatsappContainer.className = 'whatsapp-container';

let profileContainer = document.createElement('div');
profileContainer.className = 'profile-container';

let img = document.createElement('img');
img.src = '../img/fotoprueba.png';
//img.alt = 'Foto de perfil';
img.className = 'profile-picture';

//agrego la camara
let input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*';
input.className = 'file-input';

input.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
    }
});

let icon = document.createElement('i');
icon.className = 'fas fa-camera';

icon.addEventListener('click', function() {
    input.click();
});

let imgContainer = document.createElement('div'); 
imgContainer.className = 'img-container'; 


let p1 = document.createElement('p');
p1.innerHTML = '<strong>Nombres y Apellidos</strong>';

let p2 = document.createElement('p');
p2.innerHTML = '<strong>1-1-4542-45682</strong>';
p2.style.color = 'blue';

let divider1 = document.createElement('div');
divider1.className = 'divider';

let p3 = document.createElement('p');
p3.innerHTML = '<strong>Pago sugerido:</strong>';
p3.className = 'left';

let label1 = document.createElement('label');
label1.innerHTML = '$100';
label1.style.color = 'red';
label1.style.fontSize = '1.2em';
label1.style.fontWeight = 'bold';
label1.style.marginLeft = '175px';
p3.appendChild(label1);

let p4 = document.createElement('label');
p4.innerHTML = '<strong>Semanas de Atraso</strong>';
let label2 = document.createElement('label');
label2.innerHTML = '7';
label2.style.color = 'red';
label2.style.fontWeight = 'bold';
label2.className = 'left';
label2.style.marginLeft = '175px';    

p4.appendChild(label2);

let p5 = document.createElement('a');
p5.href = 'ruta/a/detalles'; // Reemplaza esto con la ruta a tus detalles
p5.innerHTML = '<br>Detalles del crédito';
p5.style.color = 'blue'; // Cambia el color del texto a azul
p5.style.textDecoration = 'none'; // Elimina el subrayado
p5.style.marginLeft = '200px'; // Añade un margen a la izquierda

let divider2 = document.createElement('div');
divider2.className = 'divider';

let p6 = document.createElement('p');
p6.innerHTML = '<strong>Periodicidad del cliente:</strong><br>Semanal';

let divider3 = document.createElement('div');
divider3.className = 'divider';

let p7 = document.createElement('p');
p7.innerHTML = '<strong>Domicilio:</strong><br> Dirección completa';
p7.style.marginLeft = '-70px';

let p8 = document.createElement('p');
p8.innerHTML = '<strong>Referencia del Domicilio:</strong><br> Referencia aquí';



let divider4 = document.createElement('div');
divider4.className = 'divider';

let buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';


let a1 = document.createElement('a');
a1.href = '#';
a1.className = 'button';
a1.textContent = '¿Cómo llegar?';

let a2 = document.createElement('a');
a2.href = '#';
a2.className = 'button';
a2.textContent = 'Visitar';

imgContainer.appendChild(img);
imgContainer.appendChild(input);
imgContainer.appendChild(icon);

whatsappContainer.appendChild(img);
whatsappContainer.appendChild(imgContainer);
whatsappContainer.appendChild(p1);
whatsappContainer.appendChild(p2);
whatsappContainer.appendChild(divider1);
whatsappContainer.appendChild(p3);
whatsappContainer.appendChild(p4);
whatsappContainer.appendChild(p5);
whatsappContainer.appendChild(divider2);
whatsappContainer.appendChild(p6);
whatsappContainer.appendChild(divider3);
whatsappContainer.appendChild(p7);
whatsappContainer.appendChild(p8);
whatsappContainer.appendChild(divider4);
whatsappContainer.appendChild(a1);
whatsappContainer.appendChild(a2);
whatsappContainer.appendChild(buttonContainer);
buttonContainer.appendChild(a1);
buttonContainer.appendChild(a2);
app.appendChild(whatsappContainer);