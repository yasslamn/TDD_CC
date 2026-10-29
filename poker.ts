import { Card } from "./Card.js";

export const get_hands_points = (hands: Card[][]): number => {
    return hands.reduce((total, hand) => {
        const values = hand.map((card) => card.valeur);
        const hasBrelan = values.some((value) =>
            values.filter((cardValue) => cardValue === value).length === 3
        );

        if (hasBrelan) {
            return total + 30;
        }

        return total + Math.max(...values);
    }, 0);
};