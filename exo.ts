// Nouvelle manière de garantir la portée des variables
// export 

// créer un nouveau fichier 09-exo.ts
// Ce fichier contient une variable de type objet 
// nom : formation 
// propriétés suivantes 
    // durée = 2
    // unité = "mois"
    // sujet = javascript
    // matières = ["node","ajax","typescript"]
// Faire en sorte que la variable formation ne puisse pas être modifiée par un autre script 
// afficher dans la console la phrase suivante 
// la formation en javascript dure 2 mois et dispose de 3 matières 
// transpiler ce script en js et l'éxecuter dans le shell 


(function(){
    const formation = {
        duree :2,
        unite : "mois",
        sujet : "javascript",
        matieres : ["node","ajax","typescript"]
    }
    const phrase = `la formation en ${formation.sujet} dure ${formation.duree} ${formation.unite} et dispose de ${formation.matieres.length} matières` ;
    console.log(phrase);
})()

// tsc 09-exo.ts && node 09-exo.js

