
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
