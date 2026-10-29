import { Card } from "./Card.js";

export const get_hands_points = (hands: Card[][]): number => {
    return hands.reduce((total, hand) => {
        const values = hand.map((card) => card.valeur);
        const sortedValues = [...values].sort((a, b) => a - b);
        let hasSuite = true;
        for (let index = 1; index < sortedValues.length; index += 1) {
            const previousValue = sortedValues[index - 1];
            const currentValue = sortedValues[index];
            if (
                previousValue === undefined ||
                currentValue === undefined ||
                currentValue !== previousValue + 1
            ) {
                hasSuite = false;
                break;
            }
        }
        let hasCouleur = true;
        const firstEnseigne = hand[0]?.enseigne;
        for (const card of hand) {
            if (card.enseigne !== firstEnseigne) {
                hasCouleur = false;
                break;
            }
        }
        const hasBrelan = values.some((value) =>
            values.filter((cardValue) => cardValue === value).length === 3
        );

        if (hasCouleur) {
            return total + 45;
        }

        if (hasSuite) {
            return total + 40;
        }

        if (hasBrelan) {
            return total + 30;
        }

        return total + Math.max(...values);
    }, 0);
};