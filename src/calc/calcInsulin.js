function calcInsulinHc(amountHc, carbRatio) {
    return amountHc / carbRatio
}

function calcInsulinCorrection(amountGlucose, sensitivity) {
    return amountGlucose / sensitivity
}

function calcTotalInsulin(amountHc, carbRatio, amountGlucose, sensitivity) {
    let amountInsulinHc = calcInsulinHc(amountHc, carbRatio)
    let amountInsulinCorrection = calcInsulinCorrection(
        amountGlucose,
        sensitivity
    )
    let amountInsulinTotal = amountInsulinHc + amountInsulinCorrection

    return {
        amountInsulinTotal,
        amountInsulinHc,
        amountInsulinCorrection
    }
}

module.exports = {
    calcTotalInsulin
}
