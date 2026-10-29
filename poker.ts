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
        let hasEnseigne = true;
        const firstEnseigne = hand[0]?.enseigne;
        for (const card of hand) {
            if (card.enseigne !== firstEnseigne) {
                hasEnseigne = false;
                break;
            }
        }
        const valueCounts = new Map<number, number>();
        for (const value of values) {
            valueCounts.set(value, (valueCounts.get(value) ?? 0) + 1);
        }
        const counts = [...valueCounts.values()];
        const hasFull = counts.includes(3) && counts.includes(2);
        const hasBrelan = values.some((value) =>
            values.filter((cardValue) => cardValue === value).length === 3
        );

        if (hasEnseigne) {
            return total + 45;
        }

        if (hasSuite) {
            return total + 40;
        }

        if (hasFull) {
            return total + 50;
        }

        if (hasBrelan) {
            return total + 30;
        }

        return total + Math.max(...values);
    }, 0);
};