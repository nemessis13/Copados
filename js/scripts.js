let dado1 = ["Dado1-ellas.svg",
    "Dado1-ellos.svg",
    "Dado1-nadie.svg",
    "Dado1-reto.svg",
    "Dado1-todos.svg",
    "Dado1-tu.svg",
 ];

let dado2 = ["Dado2-1trago.svg",
    "Dado2-2tragos.svg",
    "Dado2-bailar.svg",
    "Dado2-cantar.svg",
    "Dado2-mediotrago.svg",
    "Dado2-NoseToma.svg",
 ];


 let dado = document.querySelectorAll("img");

function roll(){
    dado.forEach(function(die){
        die.classList.add("shake");

    }); 
    setTimeout(function(){
        dado.forEach(function(die){
            die.classList.remove("shake");

        });

        let dieOnevalue = Math.floor(Math.random()*6);
        let dieTwovalue = Math.floor(Math.random()*6);

        console.log(dieOnevalue,dieTwovalue);

        document.querySelector("#dado_1").setAttribute
        ("src", dado1[dieOnevalue]);

        document.querySelector("#dado_2").setAttribute
        ("src", dado2[dieTwovalue]);



    },
    1000
    );
}
