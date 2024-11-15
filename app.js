
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic


//Create Dinosaur class
class Dinosaur {
    constructor(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
}

//Create Human class
class Human {
    constructor(name, weight, height, diet) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
    }
}

function compareWeight(dino, human) {
    if(dino.weight > human.weight) {
        return `Mi dieta está funcionando... al menos comparada con la de un ${dino.species}.`;
    } else if(dino.weight < human.weight) {
        return `Soy tan pesado que podria aplastar a un ${dino.species} con solo mirarlo.`
    } else {
        return `Soy un ${dino.species} disfrazado de humano. ¡O al revés!`
    }
}

function compareHeight(dino, human) {
    if(dino.height > human.height) {
        return `Soy un enano comparado con ${dino.species}.`
    } else if(dino.height < human.height) {
        return `Soy tan alto que podria tocar el cielo... ¡y la cabeza de un${dino.species}.`
    } else {
        return `¡Coincidencia! Tú y ${dino.species} son de la misma altura.`
    }
}

function compareDiet(dino, human) {
    if(dino.diet == human.diet) {
        return `¡Ambos son ${dino.diet}! ¡Coincidencia no lo creo!`;
    } else {
        return `Tu eres ${human.diet}, mientras que ${dino.species} era ${dino.diet}.`;
    }
}

function generateInfoCard(entity) {
    if(entity instanceof Dinosaur) {
        return `
          **${entity.species}**
          * Peso: ${entity.weight} Kg
          * Altura: ${entity.height} cm
          * Dieta: ${entity.where}
          * Época: ${entity.when}
          * Dato curioso: ${entity.fact}  
        `;
    } else if(entity instanceof Human) {
        return `
          **${entity.name}**
          * Peso: ${entity.weight} Kg
          * Altura: ${entity.height} cm
          * Dieta: ${entity.diet}
        `;
    }
}