let NumeriComputer = []
let ContenitoreNumero = document.getElementById("Numeri")


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
    
}, 3000);