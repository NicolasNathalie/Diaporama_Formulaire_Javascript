let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let adresse = document.getElementById('adresse');
let codePostal = document.getElementById('code');
let ville = document.getElementById('ville');
let pays = document.getElementById('pays');
let date = document.getElementById('date');
let produits = document.getElementById('produits');
let prixProduit = 10;
let carte = document.getElementById('carte');
let prixTotal = 0;
let subTotal = 0;
let TPS = 9.975;
let TVQ = 5;



/* Gestionnaire d'événement pour le submit du formulaire */
document.getElementById("inscription").addEventListener('submit', valider);
document.getElementById("produits").addEventListener('keypress', calculer);
document.getElementById("produits").addEventListener('change', calculer);

/* Fonction qui calculer les champs du produit*/
function calculer(e) {
  subTotal = produits.value * prixProduit;  
  montantTPS = subTotal * TPS / 100;
  montantTVQ = subTotal * TVQ / 100;
  prixTotal = subTotal + montantTPS + montantTVQ;
  document.getElementById("subTotal").innerHTML = subTotal.toFixed(2) + '$';
  document.getElementById("TPS").innerHTML = montantTPS.toFixed(2) + '$<br>';
  document.getElementById("TVQ").innerHTML = montantTVQ.toFixed(2) + '$<br>';
  document.getElementById("total").innerHTML = prixTotal.toFixed(2) + '$<br>'; 
}
  

  /* Fonction qui vérifie les champs du formulaire*/
function valider(e){
    document.getElementById("errorFirst").textContent = "";
    document.getElementById("errorName").textContent = "";
    document.getElementById("errorAdress").textContent = "";
    document.getElementById("errorCode").textContent = "";
    document.getElementById("errorStreet").textContent = "";
    document.getElementById("errorCountry").textContent = "";
    document.getElementById("errorDate").textContent = "";
    document.getElementById("errorProduct").textContent = "";
    document.getElementById("errorNumber").textContent = "";


  /* Variable qui permettra de savoir s'il y a eu une erreur dans la validation
 des différents champs.*/ 
    let error = false;

 

 /* Vérification si le champ nom est vide
 trim() permet de supprimer les espaces en début et fin de chaîne*/

 if (prenom.value.trim() === "") {
    document.getElementById("errorFirst").textContent = "Le champs prénom ne peut pas être vide";
    error = true;
  }
 
  if (nom.value.trim() === "") {
    document.getElementById("errorName").textContent = "Le champs nom ne peut pas être vide";
    error = true;
  }
  if (adresse.value.trim() === "") {
    document.getElementById("errorAdress").textContent = "Le champs adresse ne peut pas être vide";
    error = true;
  }
  if (codePostal.value.trim() === "" ) {
    document.getElementById("errorCode").textContent = "Le champs code postal ne peut pas être vide";
    error = true;
  } 
  let postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
  if(!postalCodeRegex.test(codePostal.value)){
    document.getElementById("errorCode").textContent = "Le champs code postal doit avoir le format G0G0G0";
    error = true;
  }
  
  if (ville.value.trim() === "") {
    document.getElementById("errorStreet").textContent = "Le champs ville ne peut pas être vide";
    error = true;
  }
  
   if (pays.value === "0") {
    document.getElementById("errorCountry").textContent = "Veuillez choisir un pays";
    error = true;
  }
 
  if (date.value.trim() === "") {
    document.getElementById("errorDate").textContent = "Date de livraison obligatoire";
    error = true;
  }
  else if(new Date(date.value) <= Date.now()){
    document.getElementById("errorDate").textContent = "La date doit être supérieure à la date d'aujourd'hui";
    error = true;
  }
  
  if (produits.value.trim() === "") {
    document.getElementById("errorProduct").textContent = "Le champs produit ne peut pas être vide";
    error = true;
  }else if (produits.value <= 1){
    document.getElementById("errorProduct").textContent = "Le champs produit doit être supérieur à 1";
    error = true;
  }
  
  let carteRegex = /^(5258|4540)[0-9]{12}$/;
  if(!carteRegex.test(carte.value)){
    document.getElementById("errorNumber").textContent = "La carte doit commencer par 5258 ou 4540 et/ou comporte 16 chiffres";
    error = true;
  }
  if (carte.value.trim() === "") {
    document.getElementById("errorNumber").textContent = "Le champs carte de crédit ne peut pas être vide";
    error = true;
  }
  // Si aucune erreur n'a été détectée, on envoie le formulaire, ou on affiche un message
  // error sera à false si aucune erreur n'a été détectée
  if (!error) {
  

    // Envoi du formulaire
    document.getElementById("inscription").submit();
    // Affiche un message
    document.getElementById("message").textContent = "Merci pour votre commande";
  }  
  e.preventDefault();
}