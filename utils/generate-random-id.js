export function generateRandomId(min = 100, max = 999) {
    return Math.random() * (max - min) + min;
}