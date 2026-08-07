//=================================
// HEADER AND SETTING PANEL
//=================================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Settings panel
const settingsButton = document.getElementById("settings-button");
const settingsPanel = document.getElementById("settings-panel");
const closeButton = document.getElementById("close-button");

function openSettings() {
  settingsPanel.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSettings() {
  settingsPanel.classList.remove("open");
  document.body.style.overflow = "";
}

if (settingsButton && settingsPanel && closeButton) {
  settingsButton.addEventListener("click", openSettings);
  closeButton.addEventListener("click", closeSettings);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSettings();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsidePanel = settingsPanel.contains(event.target);
    const clickedSettingsButton = settingsButton.contains(event.target);

    if (
      settingsPanel.classList.contains("open") &&
      !clickedInsidePanel &&
      !clickedSettingsButton
    ) {
      closeSettings();
    }
  });
}

//================================
// SETTINGS PANEL FUNCTIONALITY
//===============================
const lightThemeBtn = document.getElementById("light-theme");
const darkThemeBtn = document.getElementById("dark-theme");

function updateThemeButtons(theme) {
  lightThemeBtn?.classList.toggle("active-theme", theme === "light");
  darkThemeBtn?.classList.toggle("active-theme", theme === "dark");
}

function applyTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");
  localStorage.setItem("theme", theme);
  updateThemeButtons(theme)
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme("light");
}

lightThemeBtn?.addEventListener("click", () => applyTheme("light"));
darkThemeBtn?.addEventListener("click", () => applyTheme("dark"));

//================================
// LANGUAGE SWITCHING
//===============================
const translations = {
  en: {
    // navigation
    navHome: "Home",
    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    downloadCv: "Download CV",


    // setting panel
    settingsTitle: "Settings",
    languageLabel: "Language",
    themeLabel: "Theme",



    // home section
    heroSubtitle: "Junior Full-Stack Developer • IT Support Specialist",
    heroSubLang: "English • German • Italian",
    heroDescription: "Turning ideas into clean, accessible and user-focused digital solutions.",
    viewProjects: "View projects",
   
    // about section
    aboutTitle: "About Me",
    aboutIntro:`
    I'm a Junior Full-Stack Developer with a background in visual arts
              and a passion for creating elegant, accessible and user-focused
              digital experiences. My Journey combines creativity,
              problem-solving and a growing technical skill set in web
              development and IT Support.`,
    aboutReadMore:"Read More",
    aboutParagraph1:`
    After completing my Full-Stack Web Development training at
                  Code Factory Vienna, I have been building responsive
                  interfaces, experimenting with interactive UI animations and
                  strengthening my understanding of modern frontend and backend
                  technologies.`,
    aboutParagraph2:`
    I enjoy transforming ideas into clean and maintainable
                  solutions, paying attention not only to functionality but also
                  to visual harmony, usability and detail. My artistic
                  background helps me approach development with a strong sense
                  of composition, color and user experience.`,
    aboutCurrentFocus: "Current Focus",
    focusLabel: "Focus",
    focusContent: "Frontend • UI/UX • Responsive Design",
    learningLabel:"Currently Learning",
    learningContent: "Power Platform • German C1",
    goalLabel:"Goal",
    goalContent: "Contribute to meaningful digital products and continue growing as a web developer.",
    
 

    // projects section
    projectsTitle: "Projects",
    // * issue #6
    projectIssueLabel6: "Issue #06",
    projectTitle6: "Developer Portfolio",
    projectStack6: "HTML • CSS • JavaScript",
    projectExpandedTitle6: "Developer Portfolio",
    projectDescription6: "Personal portfolio built from scratch using semantic HTML, modern CSS and vanilla JavaScript.",
    projectChallenges: "Challenges & solutions",
    projectChallengesParagraph6: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore modi repudiandae placeat eum repellendus?",
    liveDemo: "Live Demo",


    // * issue #5
    projectIssueLabel5: "Issue #05",
    projectTitle5: "",
    projectStack5: "",
    projectExpandedTitle5: "",
    projectDescription5: "",
    projectChallengesParagraph5: "",

    
    // * issue #4
    projectIssueLabel4: "Issue #04",
    projectTitle4: "",
    projectStack4: "",
    projectExpandedTitle4: "",
    projectDescription4: "",
    projectChallengesParagraph4: "",

    
    // * issue #3
    projectIssueLabel3: "Issue #03",
    projectTitle3: "",
    projectStack3: "",
    projectExpandedTitle3: "",
    projectDescription3: "",
    projectChallengesParagraph3: "",

    
    // * issue #2
    projectIssueLabel2: "Issue #02",
    projectTitle2: "",
    projectStack2: "",
    projectExpandedTitle2: "",
    projectDescription2: "",
    projectChallengesParagraph2: "",

    
    // * issue #1
    projectIssueLabel1: "Issue #01",
    projectTitle1: "",
    projectStack1: "",
    projectExpandedTitle1: "",
    projectDescription1: "",
    projectChallengesParagraph1: "",

    // skills section
    skillsTitle: "Skills",
    frontendTitle: "Frontend",
    frontendSkill: "Responsive Web Design",
    backendTitle:"Backend",
    backendSkill: "REST APIs",
    databasesTitle:"Databases",
    toolsTitle: "Tools",
    skillHint: "Click to reveal technologies",

    // contact section
    contactTitle: "Contact",
    contactText: "I'm currently open to opportunities as a Junior Web Developer,Full-Stack Developer or IT Support Specialist. If you'd like to collaborate, discuss a project or simply connect, I'd be happy to hear from you.",

    // footer
    footerRights:"© 2026 Maria Misa Owusu. All rights reserved.",
    backToTop: "Back to top",

  },

  de: {
    // navigation
    navHome: "Startseite",
    navProjects: "Projekte",
    navSkills: "Fähigkeiten",
    navAbout: "Über mich",
    navContact: "Kontakt",
    downloadCv: "Lebenslauf herunterladen",


    // setting panel
    settingsTitle: "Einstellungen",
    languageLabel: "Sprache",
    themeLabel: "Design",


    // home section
    heroSubtitle: "Junior Full-Stack-Entwicklerin • IT-Support-Spezialistin",
    heroSubLang: "Deutsch • Italienisch • Englisch",
    heroDescription: "Ich verwandle Ideen in saubere, barrierefreie und benutzerorientierte digitale Lösungen.",
    viewProjects: "Projekte anzeigen",



    // about section
    aboutTitle: "Über mich",
    aboutIntro:"Ich bin Junior Full-Stack Developer mit einem Hintergrund in visueller Kunst und einer Leidenschaft für elegante, barrierefreie und benutzerorientierte digitale Erlebnisse. Mein Weg verbindet Kreativität, Problemlösung und ein stetig wachsendes technisches Know-how in Webentwicklung und IT-Support.",
    aboutReadMore:"Mehr Lesen",
    aboutParagraph1:"Nach meiner Ausbildung zur Full-Stack-Webentwicklerin bei Code Factory Vienna ich responsive Benutzeroberflächen entwickelt, mit interaktiven UI-Animation experimentiert und mein Verständnis moderner Frontend- und Backend-Technologien vertieft.",
    aboutParagraph2:"Es macht mir Freude, Ideen in saubere und wartbare Lösungen umzusetzen und dabei nicht nur auf Funktionalität, sondern auch auf visuelle Harmonie, Benutzerfreundlichkeit und Details zu achten. Mein künstlerischer Hintergrund hilft mir dabei, Entwicklung mit einem ausgeprägten Gespür für Komposition, Farbe und User Experience anzugehen.",
    aboutCurrentFocus: "Aktueller Fokus",
    focusLabel: "Fokus",
    focusContent: "Frontend • UI/UX • Responsives Webdesign",
    learningLabel:"Derzeit lerne ich",
    learningContent: "Power Platform • Deutsch C1",
    goalLabel:"Ziel",
    goalContent: "An sinnvollen digitalen Produkten mitwirken und mich kontinuerlich als Webentwicklerin weiterentwickeln.",

    // projects section
    projectsTitle: "Projekte",
    // * issue #6
    projectIssueLabel6: "Ausgabe Nr. 06",
    projectTitle6: "",
    projectStack6: "HTML • CSS • JavaScript",
    projectExpandedTitle6: "Developer Portfolio",
    projectDescription6: "",
    projectChallenges: "Herausforderungen & Lösungen",
    projectChallengesParagraph6: "",
    liveDemo: "Live-Demo",


    // * issue #5
    projectIssueLabel5: "Ausgabe Nr. 05",
    projectTitle5: "",
    projectStack5: "",
    projectExpandedTitle5: "",
    projectDescription5: "",
    projectChallengesParagraph5: "",

    
    // * issue #4
    projectIssueLabel4: "Ausgabe Nr. 04",
    projectTitle4: "",
    projectStack4: "",
    projectExpandedTitle4: "",
    projectDescription4: "",
    projectChallengesParagraph4: "",

    
    // * issue #3
    projectIssueLabel3: "Ausgabe Nr. 03",
    projectTitle3: "",
    projectStack3: "",
    projectExpandedTitle3: "",
    projectDescription3: "",
    projectChallengesParagraph3: "",

    
    // * issue #2
    projectIssueLabel2: "Ausgabe Nr. 02",
    projectTitle2: "",
    projectStack2: "",
    projectExpandedTitle2: "",
    projectDescription2: "",
    projectChallengesParagraph2: "",

    
    // * issue #1
    projectIssueLabel1: "Ausgabe Nr. 01",
    projectTitle1: "",
    projectStack1: "",
    projectExpandedTitle1: "",
    projectDescription1: "",
    projectChallengesParagraph1: "",

    // skills section
    skillsTitle: "Fähigkeiten",
    frontendTitle: "Frontend",
    frontendSkill: "Responsives Webdesign",
    backendTitle:"Backend",
    backendSkill: "REST-APIs",
    databasesTitle:"Datenbanken",
    toolsTitle: "Tools",
    skillHint: "Klicken, um die Technologien anzuzeigen",

    // contact section
    contactTitle: "Kontakt",
    contactText: "Derzeit bin ich offen für berufliche Möglichkeiten als Junior Webentwicklerin, Full-Stack-Entwicklerin oder IT-Support-Spezialistin. Wenn Sie zusammenarbeiten, ein Projekt besprechen oder einfach Kontakt aufnehmen möchten, freue ich mich über Ihre Nachricht.",

    // footer
    footerRights:"© 2026 Maria Misa Owusu. Alle Rechte vorbehalten.",
    backToTop: "↑ Nach oben",
  },

  it: {
    // navigation
    navHome: "Home",
    navProjects: "Progetti",
    navSkills: "Competenze",
    navAbout: "Chi sono",
    navContact: "Contatti",
    downloadCv: "Scarica il CV",


    // setting panel
    settingsTitle: "Impostazioni",
    languageLabel: "Linguaggio",
    themeLabel: "Tema",


    // home section
    heroSubtitle: "Sviluppatrice Full-Stack Junior • Specialista di Supporto IT",
    heroSubLang: "Italiano • Tedesco • Inglese",
    heroDescription: "Trasformo idee in soluzioni digitali pulite, accessibili e orientate all'utente.",
    viewProjects: "Visualizza i progetti",

    
    // about section
    aboutTitle: "Chi sono",
    aboutIntro:"Sono una Junior Full-Stack Developer con un background nelle arti visive e una passione per la creazione di esperienze digitali eleganti, accessibili e orientate all'utente. Il mio percorso unisce creatività, problem solving e competenze tecniche in continua crescita nel campo dello sviluppo web e del supporto IT.",
    aboutReadMore:"Leggi di più",
    aboutParagraph1:"Dopo aver completato la mia formazione in Full-Stack Web Development presso Code Factory Vienna, ho iniziato a sviluppare interfacce responsive, sperimentare animazioni UI interattive e approfondire la mia conoscenza delle moderne tecnologie frontend e backend.",
    aboutParagraph2:"Mi piace trasformare le idee in soluzioni pulite e facilmente manutenibili, prestando attenzione non solo alla funzionalità, ma anche all'armonia visiva, all'usabilità e ai dettagli. Il mio background artistico mi aiuta ad affrontare lo sviluppo con una forte sensibilità per la composizione, il colore e l'esperienza utente.",
    aboutCurrentFocus: "Focus attuale",
    focusLabel: "Focus",
    focusContent: "Frontend • UI/UX •  Web Design Responsive",
    learningLabel:"Sto imparando",
    learningContent: "Power Platform • Tedesco C1",
    goalLabel:"Obiettivo",
    goalContent: "Contribuire a prodotti digitali significativi e continuare a crescere come sviluppatrice web.",

    // projects section
    projectsTitle: "Progetti",
    // * issue #6
    projectIssueLabel6: "Edizione n. 06",
    projectTitle6: "",
    projectStack6: "HTML • CSS • JavaScript",
    projectExpandedTitle6: "Developer Portfolio",
    projectDescription6: "",
    projectChallenges: "Sfide e soluzioni",
    projectChallengesParagraph6: "",
    liveDemo: "Demo live",


    // * issue #5
    projectIssueLabel5: "Edizione n. 05",
    projectTitle5: "",
    projectStack5: "",
    projectExpandedTitle5: "",
    projectDescription5: "",
    projectChallengesParagraph5: "",

    
    // * issue #4
    projectIssueLabel4: "Edizione n. 04",
    projectTitle4: "",
    projectStack4: "",
    projectExpandedTitle4: "",
    projectDescription4: "",
    projectChallengesParagraph4: "",

    
    // * issue #3
    projectIssueLabel3: "Edizione n. 03",
    projectTitle3: "",
    projectStack3: "",
    projectExpandedTitle3: "",
    projectDescription3: "",
    projectChallengesParagraph3: "",

    
    // * issue #2
    projectIssueLabel2: "Edizione n. 02",
    projectTitle2: "",
    projectStack2: "",
    projectExpandedTitle2: "",
    projectDescription2: "",
    projectChallengesParagraph2: "",

    
    // * issue #1
    projectIssueLabel1: "Edizione n. 01",
    projectTitle1: "",
    projectStack1: "",
    projectExpandedTitle1: "",
    projectDescription1: "",
    projectChallengesParagraph1: "",

    // skills section
    skillsTitle: "Competenze",
    frontendTitle: "Frontend",
    frontendSkill: "Web Design Responsive",
    backendTitle:"Backend",
    backendSkill: "API REST",
    databasesTitle:"Database",
    toolsTitle: "Strumenti",
    skillHint: "Clicca per visualizzare le tecnologie",

    // contact section
    contactTitle: "Contatti",
    contactText: "Attualmente sono disponibile per opportunità professionali come Sviluppatrice Web Junior, Sviluppatrice Full-Stack o Specialista di Supporto IT. Se desideri collaborare, discutere un progetto o semplicemente entrare in contatto, sarò felice di ricevere un tuo messaggio.",

    // footer
    footerRights:"© 2026 Maria Misa Owusu. Tutti i diritti riservati.",
    backToTop: "↑ Torna all'inizio",
  },
};

function updateLanguageButtons(lang){
  document.querySelectorAll("#lang-en, #lang-de, #lang-it").forEach((btn) => btn.classList.remove("active-language"));

  document.getElementById(`lang-${lang}`)?.classList.add("active-language");
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang]?.[key]) {
      element.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("language", lang);
  updateLanguageButtons(lang);
}

const savedLanguage = 
localStorage.getItem("language") || "en";
applyLanguage(savedLanguage);

document.getElementById("lang-en")?.addEventListener("click", () => {
  applyLanguage("en");
});

document.getElementById("lang-de")?.addEventListener("click", () => {
  applyLanguage("de");
});

document.getElementById("lang-it")?.addEventListener("click", () => {
  applyLanguage("it");
});

//=================================
// PROJECT SECTION
//=================================
const projectPreviews = document.querySelectorAll(".project-preview");
const closeButtons = document.querySelectorAll(".close-project");

const HIDE_THRESHOLD = 430;
const EXPAND_SETTLE_DURATION = 620;
const SHRINK_DURATION = 490;
const COVER_FLIP_DURATION = 600;
const SIBLING_SLIDE_DURATION = 560;

function isAnimating(card) {
  return card.dataset.animating === "true";
}

function slideSiblings(mutate) {
  const cards = document.querySelectorAll(".project-card");
  const firstRects = new Map();
  cards.forEach((card) => firstRects.set(card, card.getBoundingClientRect()));

  mutate();

  cards.forEach((card) => {
    const first = firstRects.get(card);
    const last = card.getBoundingClientRect();
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;

    if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;

    card.style.transition = "none";
    card.style.setProperty(
      "--card-offset",
      `translate(${deltaX}px, ${deltaY}px)`,
    );

    card.getBoundingClientRect();

    requestAnimationFrame(() => {
      card.style.transition = `transform ${SIBLING_SLIDE_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
      card.style.setProperty("--card-offset", "translate(0, 0)");
    });

    card.addEventListener("transitionend", function handler(event) {
      if (event.propertyName !== "transform") return;
      card.style.transition = "";
      card.style.removeProperty("--card-offset");
      card.removeEventListener("transitionend", handler);
    });
  });
}

function openCard(card) {
  if (isAnimating(card) || card.classList.contains("open")) return;
  card.dataset.animating = "true";

  document.querySelectorAll(".project-card.open").forEach((opened) => {
    if (opened !== card) closeCard(opened);
  });

  card.classList.add("flipping");

  setTimeout(() => {
    slideSiblings(() => {
      card.classList.add("open");
    });
    requestAnimationFrame(() => {
      card.classList.remove("flipping");
    });
  }, HIDE_THRESHOLD);

  setTimeout(() => {
    card.dataset.animating = "false";
    card.style.zIndex = "";
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }, HIDE_THRESHOLD + EXPAND_SETTLE_DURATION);
}

function closeCard(card) {
  if (isAnimating(card) || !card.classList.contains("open")) return;
  card.dataset.animating = "true";
  card.style.zIndex = "50";
  card.classList.add("closing");

  setTimeout(() => {
    slideSiblings(() => {
      card.classList.remove("open");
      card.classList.remove("closing");
    });
  }, SHRINK_DURATION);

  setTimeout(() => {
    card.dataset.animating = "false";
    card.style.zIndex = "";
  }, SHRINK_DURATION + COVER_FLIP_DURATION);
}

projectPreviews.forEach((preview) => {
  preview.addEventListener("click", () => {
    const card = preview.closest(".project-card");
    if (card.classList.contains("open")) {
      closeCard(card);
    } else {
      openCard(card);
    }
  });

  preview.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      preview.click();
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    closeCard(button.closest(".project-card"));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".project-card.open").forEach(closeCard);
  }
});

projectPreviews.forEach((preview) => {
  preview.insertAdjacentHTML(
    "afterbegin",
    '<span class= "project-page-extra" aria-hidden="true"></span>',
  );
});

//===============================================================
// SKILLS SECTION: ANIMATION IN ENTRANCE + CLICK-TO-FLIP + HINT)
//===============================================================
const skillsGrid = document.querySelector(".skills-grid");
const skillCards = document.querySelectorAll(".skill-card");

if (skillsGrid) {
  if ("IntersectionObserver" in window) {
    try {
      const fanObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              skillsGrid.classList.add("fanned");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      fanObserver.observe(skillsGrid);
    } catch (err) {
      skillsGrid.classList.add("fanned");
    }
  } else {
    skillsGrid.classList.add("fanned");
  }
}

const HINT_DELAY = 3000;

skillCards.forEach((card) => {
  let hintTimer = setTimeout(() => {
    if (!card.classList.contains("flipped")) {
      card.classList.add("show-hint");
    }
  }, HINT_DELAY);
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    card.classList.remove("show-hint");
    clearTimeout(hintTimer);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});
