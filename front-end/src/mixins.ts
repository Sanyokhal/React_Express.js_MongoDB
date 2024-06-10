export function formatPrice(currency: string, delta: number): string {
    if (currency === 'uah') {
        return `${delta} ₴`
    } else if (currency === "usd") {
        return `$ ${delta}`
    } else if (currency === "eur") {
        return `${delta} €`
    } else {
        console.error("Валюта не підтримується")
        return '';
    }
}
