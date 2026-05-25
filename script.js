document.getElementById('rec-form').addEventListener('submit', function(e) {
    // Empêche la page de se recharger
    e.preventDefault();

    // Récupère les données du formulaire
    const nameInput = document.getElementById('rec-name');
    const textInput = document.getElementById('rec-text');

    if (nameInput.value.trim() !== "" && textInput.value.trim() !== "") {

        // 1. Affiche d'abord la Pop-up de confirmation (Tâche 9)
        alert("Merci d'avoir laissé une recommandation !");

        // 2. Crée la nouvelle carte de recommandation (Tâche 7)
        const newCard = document.createElement('div');
        newCard.className = 'rec-card';

        const textPara = document.createElement('p');
        textPara.textContent = `"${textInput.value}"`;

        const nameH4 = document.createElement('h4');
        nameH4.textContent = `- ${nameInput.value}`;

        newCard.appendChild(textPara);
        newCard.appendChild(nameH4);

        // 3. Ajoute la carte à la liste existante
        document.getElementById('recommendations-list').appendChild(newCard);

        // Vide les champs du formulaire pour la suite
        nameInput.value = "";
        textInput.value = "";
    }
});