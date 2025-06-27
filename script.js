const allQuestions = {
  land: [
    {
      q: "Which is the fastest land animal?",
      options: ["Lion", "Cheetah", "Tiger", "Panther"],
      answer: "Cheetah"
    },
    {
      q: "What is a group of lions called?",
      options: ["Herd", "Flock", "Pride", "Swarm"],
      answer: "Pride"
    },
    {
      q: "Which animal sleeps while standing?",
      options: ["Elephant", "Horse", "Giraffe", "Zebra"],
      answer: "Horse"
    },
    {
      q: "What is the national animal of India?",
      options: ["Peacock", "Lion", "Tiger", "Elephant"],
      answer: "Tiger"
    }
  ],
  water: [
    {
      q: "Which is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
      answer: "Blue Whale"
    },
    {
      q: "Which animal can live both in water and on land?",
      options: ["Crocodile", "Seal", "Frog", "Otter"],
      answer: "Frog"
    },
    {
      q: "Which animal has the strongest bite force?",
      options: ["Tiger", "Grizzly Bear", "Hippopotamus", "Crocodile"],
      answer: "Crocodile"
    }
  ],
  birds: [
    {
      q: "Which bird is known for mimicking sounds?",
      options: ["Parrot", "Peacock", "Swan", "Ostrich"],
      answer: "Parrot"
    },
    {
      q: "Which bird is the largest in the world?",
      options: ["Emu", "Albatross", "Eagle", "Ostrich"],
      answer: "Ostrich"
    },
    {
      q: "What color is a polar bear’s skin under its fur?",
      options: ["White", "Pink", "Black", "Grey"],
      answer: "Black"
    }
  ]
};

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;

document.getElementById("start-btn").addEventListener("click", () => {
  const category = document.getElementById("category-select").value;
  if (!category) {
    alert("Please select a category!");
    return;
  }
  selectedQuestions = [...allQuestions[category]];
  currentQuestion = 0;
  score = 0;
  document.getElementById("score").innerText = "";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  showQuestion();
});

function showQuestion() {
  if (selectedQuestions.length === 0) return;
  const q = selectedQuestions[currentQuestion];
  document.getElementById("question").innerText = q.q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      currentQuestion++;
      if (currentQuestion < selectedQuestions.length) {
        showQuestion();
      } else {
        showScore();
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function showScore() {
  document.getElementById("question").innerText = "🎉 Quiz Completed!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").innerText = Your Score: ${score} / ${selectedQuestions.length};
  document.getElementById("restart-btn").style.display = "inline-block";
}

document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  document.getElementById("score").innerText = "";
  document.getElementById("restart-btn").style.display = "none";
  showQuestion();
});

// --- API: Animal Fact ---
function loadFact() {
  fetch("https://some-random-api.ml/animal/dog")
    .then(res => res.json())
    .then(data => {
      document.getElementById("fact").innerText = data.fact || "Couldn't fetch fact.";
    })
    .catch(() => {
      document.getElementById("fact").innerText = "Error loading fact.";
    });
}

// --- Zoo Fun Facts ---
const zooFunFacts = [
  "A giraffe's neck has the same number of bones as a human — just longer!",
  "Elephants are the only animals that can't jump.",
  "Some penguins propose with pebbles — literally offering a rock to their mate!",
  "Crocodiles can go through 4,000 teeth in a lifetime.",
  "A group of flamingos is called a 'flamboyance'.",
  "Tigers have striped skin — not just fur!",
  "Otters hold hands while sleeping so they don’t drift apart.",
  "Parrots can live over 80 years in captivity.",
  "Koalas sleep up to 22 hours a day!"
];

function showFunFact() {
  const randomFact = zooFunFacts[Math.floor(Math.random() * zooFunFacts.length)];
  document.getElementById("fact").innerText = randomFact;
}
