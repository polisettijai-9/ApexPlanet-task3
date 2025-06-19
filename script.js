const animalData = {
  lion: {
    name: "Lion",
    description: "Lions are powerful carnivores known as the kings of the jungle.",
    habitat: "Savannahs and grasslands",
    diet: "Carnivore"
  },
  elephant: {
    name: "Elephant",
    description: "Elephants are the largest land animals with strong social bonds.",
    habitat: "Forests and grasslands",
    diet: "Herbivore"
  },
  zebra: {
    name: "Zebra",
    description: "Zebras are striped herbivores known for their unique black-and-white patterns and strong social behavior.",
    habitat: "Savannas and Grasslands of Africa",
    diet: "Herbivore"
  },
  hippo: {
    name: "Hippo",
    description: "Hippos are large water-loving mammals that spend most of their time submerged.",
    habitat: "Rivers and lakes in Africa",
    diet: "Herbivore"
  },
  seal: {
    name: "Seal",
    description: "Seals are marine mammals that live between land and sea, known for their agility in water.",
    habitat: "Cold coastal waters",
    diet: "Carnivore"
  },
  crocodile: {
    name: "Crocodile",
    description: "Crocodiles are powerful aquatic reptiles known for their strong jaws, stealth, and ancient lineage.",
    habitat: "Rivers, lakes, wetlands, and mangrove swamps",
    diet: "Carnivore"
  },
  peacock: {
    name: "Peacock",
    description: "Peacocks are colorful birds known for their iridescent tail feathers and dances.",
    habitat: "Forests and open grasslands",
    diet: "Omnivore"
  },
  parrot: {
    name: "Parrot",
    description: "Parrots are intelligent, vocal birds with vibrant feathers and playful behavior.",
    habitat: "Tropical and subtropical regions",
    diet: "Omnivore"
  },
  owl: {
    name: "Owl",
    description: "Owls are nocturnal birds of prey known for their wisdom and silent flight.",
    habitat: "Forests and urban areas",
    diet: "Carnivore"
  }
};

function showInfo(animal) {
  const data = animalData[animal];
  document.getElementById("animalName").textContent = data.name;
  document.getElementById("animalDescription").textContent = data.description;

  document.getElementById("habitatPlace").textContent = data.habitat;
  document.getElementById("habitatDiet").textContent = data.diet;
  document.getElementById("habitatFact").textContent = "Use your senses and imagination to explore more about them at the zoo!";

  document.getElementById("habitatModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("habitatModal").style.display = "none";
}

function filterAnimals() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    const name = img.getAttribute("data-name").toLowerCase();
    img.style.display = name.includes(input) ? "inline-block" : "none";
  });
}
