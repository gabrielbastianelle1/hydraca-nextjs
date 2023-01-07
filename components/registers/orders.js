export function orderByDate({ registers }) {
    let sorted = registers.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
    return sorted
}

export function orderByInsulin({ registers }) {
    let sorted = registers.sort((a, b) => {
        return a.amountInsulinTotal - b.amountInsulinTotal
    })
    return sorted
}
