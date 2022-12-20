import { useState, useEffect } from 'react'
import { getAllRegisters } from '../../services/service.user'
import HeaderList from './HeaderList'
import { ListItem, ListRow } from './ListComponents'

export default function List() {
    const [registers, setRegisters] = useState([])

    useEffect(() => {
        getAllRegisters()
            .then((response) => setRegisters(response.data))
            .catch((error) => console.log(error))
    })

    return (
        <div className="w-11/12 m-auto lg:h-3/6 lg:overflow-y-scroll">
            <HeaderList registers={registers} setRegisters={setRegisters} />
            <div>
                {registers.map((register, index) => {
                    return (
                        <ListRow register={register}>
                            <ListItem
                                date={register.date}
                                amountGlucose={register.amountGlucose}
                                typeInsulin={register.typeInsulin}
                                sensitivity={register.sensitivity}
                                amountInsulinTotal={register.amountInsulinTotal}
                                therapy={register.therapy}
                            />
                        </ListRow>
                    )
                })}
            </div>
        </div>
    )
}
