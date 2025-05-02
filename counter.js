

let contador = 0;

const numberElemt= document.getElementById("number").querySelector("p");

/*boton de restar */

numberElemt.textContent = contador;

document.getElementById("Restar").addEventListener("click", () =>{
    contador--;
    numberElemt.textContent=contador;
});

/*boton de reiniciar*/

document.getElementById("Reiniciar").addEventListener("click", () =>{
    contador = 0;
    numberElemt.textContent = contador;
});

/*boton de sumar */

document.getElementById("Sumar").addEventListener("click", () =>{
    contador ++;
    numberElemt.textContent=contador;
});