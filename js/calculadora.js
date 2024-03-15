let app = document.getElementById("app");

let calculadoraContainer = document.createElement("div");
calculadoraContainer.className = "calculadora-container";

let c1 = document.createElement("p");
c1.innerHTML =
  "<strong>1. Selecciona el abono semanal aproximado que tu cliente puede pagar.</strong>";

let c2 = document.createElement("label");
c2.innerHTML = "Actualmente paga $422";

let divider1 = document.createElement("div");
divider1.className = "divider";

let c3 = document.createElement("label");
c3.innerHTML = "Abono semanal mínimo de $844 y máximo de $7.523";

let c4 = document.createElement("span");
c4.innerHTML = "$";

let input = document.createElement("input");
input.id = "abonoSemanalInput";
input.className = "my-input";
input.type = "number";
input.min = 844;
input.max = 7523;
input.value = 844;
input.pattern = "\\d*";

c4.appendChild(input);

let divider2 = document.createElement("div");
divider2.className = "divider";

let c5 = document.createElement("p");
c5.innerHTML = "Pago inicial mínimo de $2.621 y máximo de $8.185";

let c6 = document.createElement("span");
c6.innerHTML = "$";

let input1 = document.createElement("input");
input1.id = "pagoInicialInput";
input1.className = "my-input";
input1.type = "number";
input1.min = 2621;
input1.max = 8185;
input1.value = 2621;
input1.pattern = "\\d*";

c6.appendChild(input1);

let divider3 = document.createElement("div");
divider3.className = "divider";

let c7 = document.createElement("p");
c7.innerHTML =
  "Bonificación de interes moratorios mínimos de $0 y máximo de $923";

let c8 = document.createElement("span");
c8.innerHTML = "$";

let input2 = document.createElement("input");
input2.id = "bonificacionInput";
input2.className = "my-input";
input2.type = "number";
input2.min = 0;
input2.max = 923;
input2.value = 0;
input2.pattern = "\\d*";

c8.appendChild(input2);

let divider4 = document.createElement("div");
divider4.className = "divider";

let buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";

let b1 = document.createElement("button");
b1.href = "#";
b1.className = "button";
b1.textContent = "Cancelar";

let b2 = document.createElement("button");
b2.href = "#";
b2.className = "button";
b2.textContent = "Continuar";
b2.addEventListener("click", calcularAbono);

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
calculadoraContainer.appendChild(buttonContainer);

buttonContainer.appendChild(b1);
buttonContainer.appendChild(b2);

app.appendChild(calculadoraContainer);

// function calcularAbono() {
//     let actualPayment = 422; // Valor fijo proporcionado en el texto
//     let abonoSemanal = parseFloat(document.getElementById("abonoSemanalInput").value);
//     let pagoInicial = parseFloat(document.getElementById("pagoInicialInput").value);
//     let bonificacion = parseFloat(document.getElementById("bonificacionInput").value);

//     // Realizar cálculos aquí con los valores proporcionados
//     // Aquí puedes mostrar los resultados, por ejemplo:
//     let totalPagar = actualPayment + abonoSemanal + pagoInicial - bonificacion;
//     alert("El total a pagar es: $" + totalPagar);
// }

function calcularAbono() {
  let actualPayment = 422; // Valor fijo proporcionado en el texto
  let abonoSemanal = parseFloat(
    document.getElementById("abonoSemanalInput").value
  );
  let pagoInicial = parseFloat(
    document.getElementById("pagoInicialInput").value
  );
  let bonificacion = parseFloat(
    document.getElementById("bonificacionInput").value
  );
  // Realizar cálculos aquí con los valores proporcionados
  let totalPagar = actualPayment + abonoSemanal + pagoInicial - bonificacion;

  // Generar la URL de la siguiente página con el resultado del cálculo en los parámetros de consulta
  let nextPageURL =
    "https://etk-pi.vercel.app/?totalPagar=" + totalPagar.toFixed(2);

  // Redirigir a la siguiente página
  window.location.href = nextPageURL;
}
