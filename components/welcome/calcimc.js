export function calcImc(weight, height) {
    let imc = (weight / (height * height)) * 10000
    imc = toFixedIfNecessary(imc, 3)
    return imc
}

export function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp)
}
