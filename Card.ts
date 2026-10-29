/*
Je préfère écrire en full anglais mais je suis vrm nulle en jeu de cartes 
donc je garde exceptionnellement les noms de cartes en français sinon je vais me perdre >:(
*/

export enum ENSEIGNE {
    COEUR = "Coeur",
    CARREAU = "Carreau",
    TREFLE = "Trefle",
    PIQUE = "Pique"
}

export enum VALEUR {
    DEUX = "Deux",
    TROIS = "Trois",
    QUATRE = "Quatre",
    CINQ = "Cinq",
    SIX = "Six",
    SEPT = "Sept",
    HUIT = "Huit",
    NEUF = "Neuf",
    DIX = "Dix",
    VALET = "Valet",
    DAME = "Dame",
    ROI = "Roi",
    AS = "As"
}

export class Card {
    constructor(public enseigne: ENSEIGNE, public valeur: VALEUR) {
    }
}