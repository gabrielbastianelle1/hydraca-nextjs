export function orderByDate({ registers }) {}

export function orderByInsulin({ registers }) {
    let sorted = registers.sort((a, b) => {
        return a.amountInsulinTotal - b.amountInsulinTotal
    })
    return sorted
}
