
// Create Dino Constructor
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

     // Method for weight comparison
    compareWeight(humanWeight) {
        if (this.weight > humanWeight) {
            return `Mi dieta está funcionando... al menos comparada con la de un ${this.species}. ¡Me supera por ${this.weight - humanWeight} libras más!`;
        } else if (this.weight < humanWeight) {
            return `Soy tan pesado que podria aplastar a un ${this.species} con solo mirarlo.`;
        } else {
            return `Soy un ${this.species} disfrazado de humano. ¡O al revés!`;
        }
    }

    // Method for height comparison
    compareHeight(humanHeight) {
        if (this.height > humanHeight) {
            return `Soy un enano comparado con ${this.species} me saca ${this.height - humanHeight} pulgadas.`;
        } else if (this.height < humanHeight) {
            return `Soy tan alto que podria tocar el cielo... ¡y la cabeza de un ${this.species}!`;
        } else {
            return `¡Coincidencia! Tú y ${this.species} son de la misma altura.`;
        }
    }

    // Method for diet comparison 
    compareDiet(humanDiet) {
        if (this.diet === humanDiet) {
            return `¡Tú y el ${this.species} tienen una dieta similar: ${this.diet}!¡Coincidencia no lo creo!`;
        } else {
            return `${this.species} era un ${this.diet}, mientras que tú eres ${humanDiet}.`;
        }
    }
}

// Load Dino Data from dino.json
const loadDinoData = async () => {
    try {
        const response = await fetch('dino.json');
        const data = await response.json();
        return data.Dinos.map(dino => 
            new Dinosaur(
                dino.species,
                dino.weight,
                dino.height,
                dino.diet,
                dino.where,
                dino.when,
                dino.fact
            )
        );
    } catch (error) {
        console.error("Error loading dino data:", error);
    }
};

loadDinoData().then(dinos => console.log(dinos));


    // Create Dino Objects


// Create Human Object
let human = {}; // Will store user data

// Use IIFE to get human data from form
const getHumanData = () => {

    // Capture data from the form fields
    const name = document.getElementById('name').value.trim();
    const feet = parseInt(document.getElementById('feet').value || 0, 10);
    const inches = parseInt(document.getElementById('inches').value || 0, 10);
    const weight = parseInt(document.getElementById('weight').value || 0, 10);
    const diet = document.getElementById('diet').value.toLowerCase();

    // Validate that all fields are valid
    if (!name) {
        alert("Por favor, ingresa tu nombre.");
        return null;
    }
    if (feet <= 0 && inches <= 0) {
        alert("Por favor, ingresa una altura válida.");
        return null;
    }
    if (weight <= 0) {
        alert("Por favor, ingresa un peso válido.");
        return null;
    }

    // Calculate height in inches
    const height = feet * 12 + inches;

    // Return the constructed human object
    return {
        name,
        height,
        weight,
        diet
    };
};


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
document.getElementById('btn').addEventListener('click', async () => {
    human = getHumanData();
    console.log("Human Data:", human);

    const dinos = await loadDinoData();
    dinos.forEach(dino => {
        console.log(dino.compareWeight(human.weight));
        console.log(dino.compareHeight(human.height));
        console.log(dino.compareDiet(human.diet));
    });
});

