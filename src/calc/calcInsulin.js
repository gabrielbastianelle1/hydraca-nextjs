function calcInsulinFood(amountHc, carbRatio) {
    return amountHc / carbRatio
}

function calcInsulinCorrection(amountGlucose, correctionFactor) {
    return amountGlucose / correctionFactor
}

function calcTotalInsulin(
    amountHc,
    carbRatio,
    amountGlucose,
    correctionFactor
) {
    return (
        calcInsulinCorrection(amountHc, carbRatio) +
        calcInsulinFood(amountGlucose, correctionFactor)
    )
}

module.exports = {
    calcTotalInsulin
}
