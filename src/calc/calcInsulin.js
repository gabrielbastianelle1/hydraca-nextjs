function calcInsulinFood(amountHc, carbRatio) {
    console.log(amountHc, carbRatio)
    return amountHc / carbRatio
}

function calcInsulinCorrection(amountGlucose, sensitivity) {
    return amountGlucose / sensitivity
}

function calcTotalInsulin(amountHc, carbRatio, amountGlucose, sensitivity) {
    return (
        calcInsulinCorrection(amountHc, carbRatio) +
        calcInsulinFood(amountGlucose, sensitivity)
    )
}

module.exports = {
    calcTotalInsulin
}
