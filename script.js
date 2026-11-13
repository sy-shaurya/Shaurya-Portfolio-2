
/* =========================================
   SHAURYA — CREATIVE DEVELOPER
   Main JavaScript
========================================= */

// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
}


// 2. HERO TEXT ANIMATION
const heroWords = [
    "Creative Developer.",
    "Digital Creator.",
    "Future Innovator.",
    "Problem Solver."
];

const heroText = document.getElementById("heroWord");

let wordIndex = 0;

if (heroText) {
    setInterval(() => {
        heroText.classList.add("word-changing");

        setTimeout(() => {
            wordIndex = (wordIndex + 1) % heroWords.length;
            heroText.textContent = heroWords[wordIndex];
            heroText.classList.remove("word-changing");
        }, 300);

    }, 2500);
}


// 3. CURSOR GLOW EFFECT
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", event => {
        cursorGlow.style.left = event.clientX + "px";
        cursorGlow.style.top = event.clientY + "px";
    });
}


// 4. AI AGENT SIMULATION
const startButton = document.getElementById("restartSimulation");
const progressBar = document.getElementById("simulationProgress");
const simulationStatus = document.getElementById("simulationStatus");
const simulationLog = document.getElementById("simulationLog");

const simulationStages = [
    {
        name: "Planning",
        message: "ARCHITECT: Planning the website structure...",
        progress: 15
    },
    {
        name: "Designing",
        message: "DESIGNER: Creating the visual interface...",
        progress: 35
    },
    {
        name: "Developing",
        message: "DEVELOPER: Building website components...",
        progress: 60
    },
    {
        name: "Testing",
        message: "QA AGENT: Checking layout and responsiveness...",
        progress: 85
    },
    {
        name: "Complete",
        message: "SYSTEM: Website simulation completed successfully.",
        progress: 100
    }
];

let simulationRunning = false;

function startSimulation() {
    if (simulationRunning) return;

    simulationRunning = true;

    let stageIndex = 0;

    if (simulationLog) {
        simulationLog.innerHTML = "";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (simulationStatus) {
        simulationStatus.textContent = "INITIALIZING...";
    }

    function runStage() {
        const stage = simulationStages[stageIndex];

        if (!stage) {
            simulationRunning = false;
            return;
        }

        if (simulationStatus) {
            simulationStatus.textContent = stage.name.toUpperCase();
        }

        if (progressBar) {
            progressBar.style.width = stage.progress + "%";
        }

        if (simulationLog) {
            const logItem = document.createElement("div");
            logItem.className = "log-entry";
            logItem.textContent = "> " + stage.message;
            simulationLog.appendChild(logItem);
            simulationLog.scrollTop = simulationLog.scrollHeight;
        }

        stageIndex++;

        if (stageIndex < simulationStages.length) {
            setTimeout(runStage, 1800);
        } else {
            simulationRunning = false;
        }
    }

    runStage();
}

if (startButton) {
    startButton.addEventListener("click", startSimulation);
}


// 5. SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".reveal, .project-card, .skill-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}


// 6. CURRENT YEAR IN FOOTER
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 7. NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
});


// 8. INITIALIZE SIMULATION
window.addEventListener("load", () => {
    if (simulationStatus) {
        simulationStatus.textContent = "SYSTEM READY";
    }
});

console.log("SHAURYA PORTFOLIO — SYSTEM ONLINE");
