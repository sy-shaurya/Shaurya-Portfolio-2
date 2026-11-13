
/* ==========================================
   SHAURYA — CREATIVE DEVELOPER
   Complete JavaScript
========================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}


/* 2. ANIMATED HERO TEXT */

const changingWord = document.getElementById("changingWord");

const heroWords = [
    "DIGITAL",
    "EXPERIENCES",
    "INNOVATION",
    "IDEAS",
    "FUTURE"
];

let wordIndex = 0;

if (changingWord) {
    setInterval(() => {
        changingWord.style.opacity = "0";

        setTimeout(() => {
            wordIndex = (wordIndex + 1) % heroWords.length;
            changingWord.textContent = heroWords[wordIndex];
            changingWord.style.opacity = "1";
        }, 300);

    }, 2200);

    changingWord.style.transition = "opacity .3s ease";
}


/* 3. CURSOR GLOW */

const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", event => {
        cursorGlow.style.left = event.clientX + "px";
        cursorGlow.style.top = event.clientY + "px";
    });
}


/* 4. AI AGENT SIMULATION */

const restartButton = document.getElementById("restartSimulation");

const systemStatus = document.getElementById("systemStatus");
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");
const buildLog = document.getElementById("buildLog");

const agents = [
    {
        name: "ARCHITECT",
        status: document.getElementById("architectStatus"),
        state: document.getElementById("architectState")
    },
    {
        name: "DEVELOPER",
        status: document.getElementById("developerStatus"),
        state: document.getElementById("developerState")
    },
    {
        name: "DESIGNER",
        status: document.getElementById("designStatus"),
        state: document.getElementById("designState")
    },
    {
        name: "QUALITY",
        status: document.getElementById("qaStatus"),
        state: document.getElementById("qaState")
    }
];

const stages = [
    {
        agent: 0,
        message: "Analyzing project requirements...",
        progress: 10,
        log: "ARCHITECT AGENT: Analyzing project requirements."
    },
    {
        agent: 0,
        message: "Creating the website structure...",
        progress: 25,
        log: "ARCHITECT AGENT: Website structure created."
    },
    {
        agent: 2,
        message: "Designing the visual interface...",
        progress: 40,
        log: "DESIGN AGENT: Designing the interface."
    },
    {
        agent: 2,
        message: "Applying colors and animations...",
        progress: 55,
        log: "DESIGN AGENT: Visual styling completed."
    },
    {
        agent: 1,
        message: "Building website components...",
        progress: 70,
        log: "DEVELOPER AGENT: Building components."
    },
    {
        agent: 1,
        message: "Connecting interactive elements...",
        progress: 85,
        log: "DEVELOPER AGENT: Interactions connected."
    },
    {
        agent: 3,
        message: "Checking responsiveness and layout...",
        progress: 95,
        log: "QUALITY AGENT: Running final checks."
    },
    {
        agent: 3,
        message: "All simulation tasks completed!",
        progress: 100,
        log: "SYSTEM: Build simulation completed successfully."
    }
];

let simulationRunning = false;
let simulationTimer = null;

function addLog(message) {
    if (!buildLog) return;

    const entry = document.createElement("p");

    const time = new Date().toLocaleTimeString("en-IN", {
        hour12: false
    });

    const timestamp = document.createElement("span");
    timestamp.textContent = time;

    entry.appendChild(timestamp);
    entry.appendChild(document.createTextNode(" " + message));

    buildLog.appendChild(entry);
    buildLog.scrollTop = buildLog.scrollHeight;
}

function resetAgents() {
    agents.forEach(agent => {
        if (agent.status) {
            agent.status.textContent = "Waiting...";
        }

        if (agent.state) {
            agent.state.textContent = "STANDBY";
            agent.state.style.color = "#777";
        }
    });
}

function startSimulation() {
    if (simulationRunning) return;

    simulationRunning = true;

    if (simulationTimer) {
        clearTimeout(simulationTimer);
    }

    let stageIndex = 0;

    resetAgents();

    if (buildLog) {
        buildLog.innerHTML = "";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (progressValue) {
        progressValue.textContent = "0%";
    }

    if (systemStatus) {
        systemStatus.textContent = "INITIALIZING...";
    }

    addLog("Initializing collaborative agent system...");

    function runNextStage() {
        const stage = stages[stageIndex];

        if (!stage) {
            simulationRunning = false;
            return;
        }

        const activeAgent = agents[stage.agent];

        // Set all agents to standby
        agents.forEach(agent => {
            if (agent.state) {
                agent.state.textContent = "STANDBY";
                agent.state.style.color = "#777";
            }
        });

        // Activate current agent
        if (activeAgent.status) {
            activeAgent.status.textContent = stage.message;
        }

        if (activeAgent.state) {
            activeAgent.state.textContent = "WORKING";
            activeAgent.state.style.color = "#ff5260";
        }

        if (systemStatus) {
            systemStatus.textContent =
                stage.progress === 100 ? "COMPLETED" : "RUNNING";
        }

        if (progressBar) {
            progressBar.style.width = stage.progress + "%";
        }

        if (progressValue) {
            progressValue.textContent = stage.progress + "%";
        }

        addLog(stage.log);

        stageIndex++;

        if (stageIndex < stages.length) {
            simulationTimer = setTimeout(runNextStage, 1600);
        } else {
            if (activeAgent.state) {
                activeAgent.state.textContent = "COMPLETE";
                activeAgent.state.style.color = "#ff5260";
            }

            simulationRunning = false;
            simulationTimer = null;
        }
    }

    runNextStage();
}

if (restartButton) {
    restartButton.addEventListener("click", startSimulation);
}


/* 5. NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
});


/* 6. SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".section-tag, .section-heading, .about-container, .project-card, .agent-dashboard, .skills-grid, .contact-section h2"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity .7s ease, transform .7s ease";
        revealObserver.observe(element);
    });
}


/* 7. INITIAL SYSTEM STATUS */

if (systemStatus) {
    systemStatus.textContent = "SYSTEM READY";
}

if (buildLog) {
    buildLog.innerHTML = "";
    addLog("SHAURYA SYSTEM initialized.");
    addLog("All agents standing by.");
}


/* 8. CONSOLE MESSAGE */

console.log(
    "%c SHAURYA PORTFOLIO ",
    "background:#ff2638;color:white;padding:10px;font-size:16px;font-weight:bold;"
);

console.log("Creative Developer | System Online");
       
        
