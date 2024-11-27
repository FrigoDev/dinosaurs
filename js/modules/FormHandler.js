import Human from "./human.js";

export function handleFormSubmission(formId, callback) {
  const form = document.getElementById(formId);

  form.onsubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const feet = parseInt(document.getElementById("feet").value) || 0;
    const inches = parseInt(document.getElementById("inches").value) || 0;
    const weight = parseInt(document.getElementById("weight").value) || 0;
    const diet = document.getElementById("diet").value;

    if (!name || feet <= 0 || weight <= 0 || !diet) {
      console.error("Please fill all fields correctly.");
      return;
    }

    const human = new Human({
      name,
      weight,
      height: feet * 12 + inches,
      diet,
    });

    callback(human);
    form.parentNode.removeChild(form);
  };
}
