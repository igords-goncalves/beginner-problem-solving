function formatCurrency(value) {
    const currency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
    return currency;
}
console.log(formatCurrency(34.6));

module.exports = formatCurrency;
