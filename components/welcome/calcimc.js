export function calcImc(weight, height) {
    let imc = (weight / (height * height)) * 10000
    imc = toFixedIfNecessary(imc, 2)
    return imc
}

export function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp)
}
