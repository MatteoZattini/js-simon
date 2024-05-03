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

    for (let i = 0; i < NumeriComputer.length; i++) {
        if(!NumeriUtente.includes(NumeriComputer[i])){
            console.log("non sono uguali")
            alert("non sono uguali")
            break
        } else {
            console.log("sono uguali")
            alert("sono uguali")
            break
        }
    }
    
    // compare(NumeriComputer, NumeriUtente)
    
}, 3000);

// function compare (array1, array2) {
//     for (let i = 0; i <= array1.length; i++) {
//         if(!array2.includes(array1[i])){
//             console.log("non sono uguali")
//         }
//         console.log("sono uguali")
//     }
// }


function arrayRng () {
    while (NumeriComputer.length <= 5) {
        let numeroRandom = Math.floor(Math.random() * 10) + 1
        NumeriComputer.push(numeroRandom)
    }
    console.log(NumeriComputer)

    return NumeriComputer
}

