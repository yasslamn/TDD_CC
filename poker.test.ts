import { describe, it, expect } from "vitest";
import { Card, ENSEIGNE, VALEUR } from "./Card.js";
import { get_hands_points } from "./poker.js";

describe("Poker", () => {
  it("scores the highest card when there is no combination", () => {
    const hand = [
      new Card(ENSEIGNE.TREFLE, VALEUR.TROIS),
      new Card(ENSEIGNE.CARREAU, VALEUR.HUIT),
      new Card(ENSEIGNE.COEUR, VALEUR.DIX),
      new Card(ENSEIGNE.PIQUE, VALEUR.DAME),
      new Card(ENSEIGNE.TREFLE, VALEUR.ROI),
    ];

    expect(get_hands_points([hand])).toBe(13);
  });

  it("scores a brelan with 30 points", () => {
    const hand = [
      new Card(ENSEIGNE.COEUR, VALEUR.SEPT),
      new Card(ENSEIGNE.PIQUE, VALEUR.SEPT),
      new Card(ENSEIGNE.CARREAU, VALEUR.SEPT),
      new Card(ENSEIGNE.TREFLE, VALEUR.ROI),
      new Card(ENSEIGNE.COEUR, VALEUR.DEUX),
    ];

    expect(get_hands_points([hand])).toBe(30);
  });

  it("scores a suite with 40 points", () => {
    const hand = [
      new Card(ENSEIGNE.COEUR, VALEUR.DEUX),
      new Card(ENSEIGNE.PIQUE, VALEUR.TROIS),
      new Card(ENSEIGNE.CARREAU, VALEUR.QUATRE),
      new Card(ENSEIGNE.TREFLE, VALEUR.CINQ),
      new Card(ENSEIGNE.COEUR, VALEUR.SIX),
    ];

    expect(get_hands_points([hand])).toBe(40);
  });

  it("scores a couleur with 45 points", () => {
    const hand = [
      new Card(ENSEIGNE.COEUR, VALEUR.DEUX),
      new Card(ENSEIGNE.COEUR, VALEUR.SIX),
      new Card(ENSEIGNE.COEUR, VALEUR.HUIT),
      new Card(ENSEIGNE.COEUR, VALEUR.DAME),
      new Card(ENSEIGNE.COEUR, VALEUR.AS),
    ];

    expect(get_hands_points([hand])).toBe(45);
  });
});
