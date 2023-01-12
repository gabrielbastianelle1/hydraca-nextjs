export function orderByGlucose({ registers, order }) {
    let sorted = registers.sort((a, b) => {
        if (order == 'asc') {
            return a.amountGlucose - b.amountGlucose
        }
        return b.amountGlucose - a.amountGlucose
    })

    return sorted
}

export function orderByInsulin({ registers, order }) {
    let sorted = registers.sort((a, b) => {
        if (order == 'asc') {
            return a.amountInsulinTotal - b.amountInsulinTotal
        }
        return b.amountInsulinTotal - a.amountInsulinTotal
    })

    return sorted
}
