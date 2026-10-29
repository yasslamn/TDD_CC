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
})});