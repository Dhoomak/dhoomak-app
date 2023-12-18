export function generateRandomId(min = 10000, max = 99999) {
    return Math.round(Math.random() * (max - min) + min);
}