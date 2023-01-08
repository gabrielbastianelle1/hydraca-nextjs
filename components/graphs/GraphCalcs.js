import { getAllRegisters } from '../../services/service.user'

export function getDataToDoughnutGraph() {
    return new Promise(async (resolve, reject) => {
        try {
            let registers = await getAllRegisters()
            let totalBolus = 0
            let totalBasal = 0
            let imc = 0

            registers.data.forEach((element) => {
                if (element.typeInsulin === 'Basal') {
                    totalBasal = totalBasal + 1
                } else {
                    totalBolus = totalBolus + 1
                }
                imc = imc + 1
            })

            resolve({ totalBasal, totalBolus, imc })
        } catch (error) {
            reject(error)
        }
    })
}

export function getDataToBarGraph(totalToShow) {
    return new Promise(async (resolve, reject) => {
        try {
            let registers = await getAllRegisters()
            let totalRegisters = registers.data.length
            let totalAmountGlucose = 0
            let avarageGlucose = 0
            let lastRegisters = []
            let maximumDatesToShowInGraph = totalToShow

            if (totalRegisters <= maximumDatesToShowInGraph) {
                lastRegisters = [...registers.data]
            } else {
                lastRegisters = registers.data.slice(-maximumDatesToShowInGraph)
            }

            registers.data.forEach((element) => {
                totalAmountGlucose = element.amountGlucose + totalAmountGlucose
                avarageGlucose = totalAmountGlucose / totalRegisters
                element.avarageGlucose = avarageGlucose
            })

            resolve({ lastRegisters })
        } catch (error) {
            reject(error)
        }
    })
}

export function getDataToHorizontalGraph() {
    return new Promise(async (resolve, reject) => {
        try {
            let registers = await getAllRegisters()
            let imc = 0

            registers.data.forEach((element) => {
                imc = imc + 1
            })

            resolve({ imc })
        } catch (error) {
            reject(error)
        }
    })
}
