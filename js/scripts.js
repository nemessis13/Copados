let dado1 = ["./img/Dado1-ellas.svg",
    "./img/Dado1-ellos.svg",
    "./img/Dado1-nadie.svg",
    "./img/Dado1-reto.svg",
    "./img/Dado1-todos.svg",
    "./img/Dado1-tu.svg",
 ];

let dado2 = ["./img/Dado2-1trago.svg",
    "./img/Dado2-2tragos.svg",
    "./img/Dado2-bailar.svg",
    "./img/Dado2-cantar.svg",
    "./img/Dado2-mediotrago.svg",
    "./img/Dado2-nosetoma.svg",
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
