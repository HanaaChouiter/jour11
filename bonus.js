var prompt = require("prompt");
var randomWordFR = require('random-word-fr');

prompt.start();



prompt.get({ name: "q", description: "Quel est le mot mystère ?" }, function (err, res) {
   
    var motMystere = randomWordFR()
    console.log(motMystere)

    var maxTentaive = 10
    var mauvaisesLettres = []
    

    while (mauvaisesLettres.length < maxTentaive){
        for (var i=0; i < motMystere.length; i++){
            if(motMystere[i]===res.q){
                console.log(res.q)
            }else{
                
                console.log(maxTentaive)
            }
        }
    }
})