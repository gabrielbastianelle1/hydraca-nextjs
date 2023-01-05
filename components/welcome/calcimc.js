export function calcImc(weight, height) {
    let imc = weight / (height * height)
    imc = toFixedIfNecessary(imc, 5)
    return imc
}

export function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp)
}
