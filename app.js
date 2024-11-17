
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
let human = {}; // Will store user data

// Use IIFE to get human data from form
const getHumanData = () => {
    return (function() {
        // Capture data from the form fields
        const name = document.getElementById('name').value;
        const feet = parseInt(document.getElementById('feet').value || 0, 10);
        const inches = parseInt(document.getElementById('inches').value || 0, 10);
        const weight = parseInt(document.getElementById('weight').value || 0, 10);
        const diet = document.getElementById('diet').value.toLowerCase();

        // Calculate height in inches
        const height = feet * 12 + inches;

        // Return the constructed human object
        return {
            name,
            height,
            weight,
            diet
        };
    })();
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
document.getElementById('btn').addEventListener('click', () => {
    human = getHumanData();
    console.log("Human Data:", human);
});

