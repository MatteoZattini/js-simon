let ContenitoreNumero = document.getElementById("Numeri")
let NumeriComputer = []
let NumeriUtente = []


arrayRng()
ContenitoreNumero.innerHTML = NumeriComputer;



function arrayRng () {
    while (NumeriComputer.length <= 5) {
        let numeroRandom = Math.floor(Math.random() * 10) + 1
        NumeriComputer.push(numeroRandom)
    }
    console.log(NumeriComputer)

    return NumeriComputer
}

setTimeout(function(){
    ContenitoreNumero.classList.add("d-none")
    while (NumeriUtente.length <= 5){
        let UserInput = prompt("scegli i tuoi numeri")
        NumeriUtente.push(UserInput)
    }

    console.log(NumeriUtente)
    return NumeriUtente

}, 3000);
