let app = document.getElementById('app');

let calculadoraContainer = document.createElement('div');
calculadoraContainer.className = 'calculadora-container';

let c1 = document.createElement('p');
c1.innerHTML = '<strong>1. Selecciona el abono semanal aproximado que tu cliente puede pagar.</strong>';

let c2 = document.createElement('label');
c2.innerHTML = 'Actualmente paga $422';

let divider1 = document.createElement('div');
divider1.className = 'divider';

let c3 = document.createElement('label');
c3.innerHTML = 'Abono semanal mínimo de $844 y máximo de $7,523';

let c4 = document.createElement('span');
c4.innerHTML = '$<input class="my-input" type="number" value="844">';

let divider2 = document.createElement('div');
divider2.className = 'divider';

let c5 = document.createElement('p');
c5.innerHTML = 'Pago inicial mínimo de $2.621 y máximo de $8.185';

let c6 = document.createElement('span');
c6.innerHTML = '$<input class="my-input" type="number" value="2.621">';

let divider3 = document.createElement('div');
divider3.className = 'divider';

let c7 = document.createElement('p');
c7.innerHTML = 'Bonificación de interes moratorios mínimos de $00 y máximo de $923';

let c8 = document.createElement('span');
c8.innerHTML = '$<input class="my-input" type="number" value="923">';

let divider4 = document.createElement('div');
divider4.className = 'divider';

let buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';

let b1 = document.createElement('button');
b1.href = '#';
b1.className = 'button';
b1.textContent = 'Cancelar';

let b2 = document.createElement('button');
b2.href = '#';
b2.className = 'button';
b2.textContent = 'Continuar';

calculadoraContainer.appendChild(c1);
calculadoraContainer.appendChild(c2);
calculadoraContainer.appendChild(divider1);
calculadoraContainer.appendChild(c3);
calculadoraContainer.appendChild(c4);
calculadoraContainer.appendChild(divider2);
calculadoraContainer.appendChild(c5);
calculadoraContainer.appendChild(c6);
calculadoraContainer.appendChild(divider3);
calculadoraContainer.appendChild(c7);
calculadoraContainer.appendChild(c8);
calculadoraContainer.appendChild(divider4);
calculadoraContainer.appendChild(b1);
calculadoraContainer.appendChild(b2);
buttonContainer.appendChild(b1);
buttonContainer.appendChild(b2);

app.appendChild(calculadoraContainer);
calculadoraContainer.appendChild(buttonContainer);