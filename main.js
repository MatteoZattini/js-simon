let ContenitoreNumero = document.getElementById("Numeri")
let NumeriComputer = []
let NumeriUtente = []


arrayRng()
ContenitoreNumero.innerHTML = NumeriComputer;

setTimeout(function(){
    ContenitoreNumero.classList.add("d-none")
    while (NumeriUtente.length <= 5){
        let UserInput = prompt("scegli i tuoi numeri")
        NumeriUtente.push(parseInt(UserInput))
    }
    console.log(NumeriUtente)
    
    // if(NumeriComputer.toString === NumeriUtente.toString) {
    //     alert("hai vinto")
    // } else {
    //     alert("hai perso")
    // }
    const compareArrays = (a, b) =>
        a.length === b.length &&
        a.every((element, index) => element === b[index]);
      
      console.log(compareArrays(NumeriComputer, NumeriUtente));

    
}, 3000);

  









function arrayRng () {
    while (NumeriComputer.length <= 5) {
        let numeroRandom = Math.floor(Math.random() * 10) + 1
        NumeriComputer.push(numeroRandom)
    }
    console.log(NumeriComputer)

    return NumeriComputer
}

