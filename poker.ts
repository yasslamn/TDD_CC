import { Card } from "./Card.js";

export const get_hands_points = (hands: Card[][]): number => {
    return hands.reduce((total, hand) => {
        const highestCard = Math.max(...hand.map((card) => card.valeur));
        return total + highestCard;
    }, 0);
};