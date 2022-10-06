/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let form = document.getElementById("formulario");
  let button = document.getElementById("ordenar");
  form.addEventListener("submit", randomCardGenerator);

  // Array de los palos y numeros
  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  // Cuerpo de la pagina
  let input = document.getElementById("exampleInputEmail1");
  let container = document.getElementById("container");

  let ordenar = [];

  // Declaracion de la funcion para imprimir cartas
  function randomCardGenerator(event) {
    event.preventDefault();

    ordenar = [];

    container.innerHTML = "";
    for (let i = 0; i < input.value; i++) {
      let randomPalos = palos[Math.floor(Math.random() * palos.length)];
      let randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];

      container.innerHTML += `
        <div class="card mt-5 mx-4" style="width: 12rem;">
          <!-- Palo de arriba -->
          <div class="d-flex justify-content-start ms-2">
            <h1 id="palo-top"> ${randomPalos} </h1>
          </div>

          <!-- Numero -->
          <div class="my-4 d-flex justify-content-center">
            <h1 id="number"> ${randomNumeros} </h1>
          </div>

          <!-- Palo de abajo -->
          <div class="d-flex justify-content-end me-2">
            <div class="rotar">
              <h1 id="palo-bottom"> ${randomPalos} </h1>
            </div>
          </div>
        </div>`;
      ordenar.push({
        palo: randomPalos,
        numero: randomNumeros
      });
    }
    console.log(ordenar);
    input.value = "";
  }
  const bubbleSort = arr => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    return arr;
  };

  button.addEventListener("click", function() {
    let nuevoArrayOrdenado = bubbleSort(ordenar);
    imprimirOrdenadas(nuevoArrayOrdenado);
    console.log(nuevoArrayOrdenado);
  });

  const imprimirOrdenadas = arr => {
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      container.innerHTML += `
        <div class="card mt-5 mx-4" style="width: 12rem;">
          <!-- Palo de arriba -->
          <div class="d-flex justify-content-start ms-2">
            <h1 id="palo-top"> ${arr[i].palo} </h1>
          </div>

          <!-- Numero -->
          <div class="my-4 d-flex justify-content-center">
            <h1 id="number"> ${arr[i].numero} </h1>
          </div>

          <!-- Palo de abajo -->
          <div class="d-flex justify-content-end me-2">
            <div class="rotar">
              <h1 id="palo-bottom"> ${arr[i].palo} </h1>
            </div>
          </div>
        </div>`;
    }
  };

  input.addEventListener("input", function() {
    if (input.value <= 0) {
      input.value = 1;
    } else if (input.value > 10) {
      input.value = 10;
    }
  });
};
