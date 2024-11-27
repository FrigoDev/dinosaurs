export default class Dino {
  constructor({ species, weight, height, diet, where, when, facts, roar }) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.facts = facts || [];
    this.roar = roar;
  }

  isPigeon() {
    return this.species.toLowerCase() === "pigeon";
  }

  getWeightComparison(human) {
    if (!human || !human.weight) return "Human weight data is unavailable.";
    const weightRatio = (this.weight / human.weight).toFixed(2);
    return `${this.species} weighed approximately ${weightRatio} times as much as ${human.name}.`;
  }

  getHeightComparison(human) {
    if (!human || !human.height) return "Human height data is unavailable.";
    const heightRatio = (this.height / human.height).toFixed(2);
    return `${this.species} was approximately ${heightRatio} times as tall as ${human.name}.`;
  }

  getDietComparison(human) {
    if (!human || !human.diet) return "Human diet data is unavailable.";
    const dietComparison =
      this.diet.toLowerCase() === human.diet.toLowerCase()
        ? `${this.species} and ${human.name} shared the same diet (${human.diet}).`
        : `${this.species} was a ${this.diet}, whereas ${human.name} is a ${human.diet}.`;
    return dietComparison;
  }

  getDynamicFactsWithHuman(human) {
    return [
      this.getWeightComparison(human),
      this.getHeightComparison(human),
      this.getDietComparison(human),
    ];
  }

  getAllFacts(human) {
    if (this.isPigeon()) {
      return this.facts;
    }
    const dynamicFacts = this.getDynamicFactsWithHuman(human);
    return [...this.facts, ...dynamicFacts];
  }

  playRoar() {
    if (this.roar) {
      const audio = new Audio(this.roar);
      audio.play().catch((err) => console.error("Error playing roar:", err));
    } else {
      alert(`${this.species} has no roar sound.`);
    }
  }
}
