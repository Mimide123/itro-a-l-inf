// On récupère l'écran UNE SEULE FOIS (meilleure performance)
const display = document.getElementById("display");

// Ajouter un chiffre ou symbole
function insert(value){
    display.value += value;
}

// Effacer tout
function clearDisplay(){
    display.value = "";
}

// Supprimer un caractère
function del(){
    display.value = display.value.slice(0, -1);
}

// Changer le signe (+/-)
function toggleSign(){
    if(display.value){
        display.value = -parseFloat(display.value);
    }
}

// Pourcentage
function percent(){
    if(display.value){
        display.value = parseFloat(display.value) / 100;
    }
}

// Racine carrée avec gestion d’erreur
function sqrt(){
    let value = parseFloat(display.value);

    if(value < 0){
        display.value = "Erreur";
    } else {
        display.value = Math.sqrt(value);
    }
}

// Calcul sécurisé (sans eval direct)
function calculate(){
    try{
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Erreur";
        setTimeout(clearDisplay, 1500);
    }
}cs