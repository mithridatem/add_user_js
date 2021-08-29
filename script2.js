//variable tableau qui va stocker les utilisateurs
let tab = [];
//variable compteur
let cpt = 0;
//récupération des élèments html
let resultat = document.getElementById("resultat");
let nbrCompte = document.getElementById("nbrCompte");
let error = document.getElementById("error");
//variable qui va contenir le contenu du tableau
let liste ="";
//fonction qui ajoute un compte et actualise l'interface web
function ajouter(){
    //récupération des valeurs dans les champs de formulaire
    let name = document.querySelector("#name").value;
    let firstName = document.querySelector("#firstName").value;
    let login = document.querySelector("#login").value;
    let mdp = document.querySelector("#mdp").value;
    //test si les 4 champs (name, firstName, login et mdp sont complétés)
    if(name != "" && firstName != "" && login != "" && mdp != ""){
        //insertion des données des champs de formulaire à la suite du tableau (à la fin du tableau)
        tab.push([name, firstName, login, mdp]);
        //affichage des comptes utilisateurs ajoutés (incrémentation de la liste resultat (chaîne string resutat))     
        refreshTab();
        //incrémentation du compteur index du tableau
        cpt++;
        //test affichage du nombre de comptes utilisateurs créés
        //si le compteur est égal à 1
        if(cpt == 1){
            nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " compte utilisateur";
        }
        //si le compteur est supérieur à 1
        else{
            nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " comptes utilisateurs";
        }
        //suppression du message d'erreur
        error.innerHTML = "";
    }
    //si les 4 champs ne sont pas remplis affichage d'un message d'erreur
    else{
        //remplissage du paragraphe error avec un message d'erreur
        error.innerHTML = "Veuillez compléter tous les champs de formulaires !!!";
        //remise à zéro du paragraphe error au bout de 3 secondes
        setTimeout(function(){ error.innerHTML ="";}, 3000);
    }         
}
//fonction suppression d'un enregistrement du tableau par son index
function supElementTab(e){
    //Affichage du compte supprimé
    error.innerHTML = "le compte "+ tab[e][0]+" "+ tab[e][1] + " "+"à était supprimé";
    //remise à zéro du paragraphe error au bout de 3 secondes
    setTimeout(function(){ error.innerHTML ="";}, 3000);
    //suppression du compte (supprime l'élément du tableau)
    tab.splice(e,1);
    //décrémentation du nombre de comptes dans le compteur cpt
    cpt--;
    //test si le compteur cpt est à 0 
    if(cpt == 0){
        nbrCompte.innerHTML=  "Il n'y à aucun compte utilisateur";
    }
    //si le compteur cpt est supérieur à 0
    else{
        nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " comptes utilisateurs";
    }
    //éxécution de la méthode refreshTab()    
    refreshTab();   
}
//fonction qui rempli le paragraphe résultat avec le contenu du tableau et actualise l'interface web
function refreshTab(){
    //création d'une variable qui va contenir les tableaux
    liste = "";
    //test si le tableau contient 1 seul enregistrement
    for(let i = 0; i< tab.length; i++){
        //remplissage de la liste avec le contenu du tableau 
        //+ méthode supElementTab() au niveau du clic sur l'image delete.png
        liste += "<p id='user'>-Nom = " + tab[i][0] + ", Prénom = "+ tab[i][1] + ", Login = " 
        + tab[i][2] +", Mot de passe = " + tab[i][3]+" <img id='delete' src='delete.png' onClick="+
        "supElementTab("+i+")><img id='edit' src='edit.png' onClick="+
        "openModal("+i+")></p>";             
    }
    //remplissage de resultat avec le contenu de la liste
    resultat.innerHTML = liste;
}
/* Modal */
//Variable qui récupére le modal
let modal = document.getElementById("myModal");
//Récupération du <span> pour fermer le modal
let span = document.getElementsByClassName("close")[0];
//fonction fermeture du modal quand l'utilisateur clic sur le <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}
//fonction qui ouvre le modal
function openModal(e){
    modal.style.display = "block";
    //récupération du paragraphe 
    let btUpdate = document.getElementById("btUpdate");
    //injection du bouton dans le paragraphe
    btUpdate.innerHTML = "<input type='button' value='Modifier' onclick='updateUser("+e+")'></input>";
}
//fonction qui va mettre à jour un utilisateur par son index (index du tableau) depuis le modal
function updateUser(e){    
    //récupération des valeurs du compte utilisateur
    let nameModal = document.getElementById("name1").value;
    let firstNameModal = document.getElementById("firstName1").value;
    let loginModal = document.getElementById("login1").value;
    let mdpModal = document.getElementById("mdp1").value;
    //insertion des données des champs de formulaire au niveau de l'index(e)
    tab[e][0]= nameModal;
    tab[e][1]= firstNameModal;
    tab[e][2]= loginModal;
    tab[e][3]= mdpModal;
    //refresh de l'interface
    refreshTab();
    //fermeture du modal
    modal.style.display = "none";
    //Affichage du compte modifié
    error.innerHTML = "le compte "+ tab[e][0]+" "+ tab[e][1] + " à était modifié";
    //remise à zéro du paragraphe error au bout de 3 secondes
    setTimeout(function(){ error.innerHTML ="";}, 3000);
}





