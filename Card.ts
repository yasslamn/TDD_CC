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
    DEUX = 2,
    TROIS = 3,
    QUATRE = 4,
    CINQ = 5,
    SIX = 6,
    SEPT = 7,
    HUIT = 8,
    NEUF = 9,
    DIX = 10,
    VALET = 11,
    DAME = 12,
    ROI = 13,
    AS = 14
}

export class Card {
    constructor(public enseigne: ENSEIGNE, public valeur: VALEUR) {
    }
}