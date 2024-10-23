const insert = document.getElementById("insert");
let infoPopup = null; // Initialise infoPopup à null

window.addEventListener("keydown", (event) => {
  // Met à jour l'affichage des keycodes
  insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Space" : event.key} 
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>

    <div class="key">
      ${event.location}
      <small>event.location</small>
    </div>
  `;

  // Vérifie s'il existe déjà un pop-up, si oui on le retire
  if (infoPopup !== null) {
    // Ajout de la vérification si infoPopup existe
    infoPopup.remove();
  }

  // Création et affichage du pop-up d'information
  infoPopup = document.createElement("div");
  infoPopup.classList.add("popup");
  infoPopup.textContent = getLocationInfo(event.location);

  document.body.appendChild(infoPopup);

  // Supprime le pop-up après 5 secondes
  setTimeout(() => {
    if (infoPopup !== null) {
      // Ajout de la vérification si infoPopup existe avant de le retirer
      infoPopup.remove();
      infoPopup = null;
    }
  }, 5000);
});

// Fonction pour donner des informations sur event.location
function getLocationInfo(location) {
  switch (location) {
    case 0:
      return "Touche standard du clavier.";
    case 1:
      return "Touche gauche (Shift gauche ou Ctrl gauche).";
    case 2:
      return "Touche droite (Shift droite ou Ctrl droite).";
    case 3:
      return "Touche du pavé numérique/Numpad.";
    default:
      return "Localisation inconnue.";
  }
}

/* Script.js */
