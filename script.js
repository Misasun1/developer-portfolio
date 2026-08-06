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
        { threshold: 0.2 },
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
