import { useState, useEffect } from 'react'
import { getAllRegisters } from '../../services/service.user'
import HeaderList from './HeaderList'
import { ListItem, ListRow } from './ListComponents'
import Search from './Search'

export default function List() {
    const [registers, setRegisters] = useState([])
    const [registersSorted, setRegistersSorted] = useState(undefined)
    const [order, setOrder] = useState('asc')
    const [registerFiltered, setRegistersFiltered] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        getAllRegisters()
            .then((response) => setRegisters(response.data))
            .catch((error) => console.log(error))
    })

    useEffect(() => {
        setRegistersFiltered(
            registers.filter((register) =>
                register.typeInsulin.includes(search)
            )
        )
    }, [search])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className=" flex flex-col w-11/12 m-auto lg:h-3/6">
            <Search handleChange={handleChange} />
            <div className="relative lg:overflow-y-scroll">
                <HeaderList
                    registers={registers}
                    order={order}
                    setOrder={setOrder}
                    setRegistersSorted={setRegistersSorted}
                />
                <div>
                    {registersSorted == undefined ? (
                        <>
                            {registers.map((register, index) => {
                                return (
                                    <ListRow register={register}>
                                        <ListItem
                                            date={register.date}
                                            amountGlucose={
                                                register.amountGlucose
                                            }
                                            typeInsulin={register.typeInsulin}
                                            sensitivity={register.sensitivity}
                                            amountInsulinTotal={
                                                register.amountInsulinTotal
                                            }
                                            therapy={register.therapy}
                                        />
                                    </ListRow>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            {registersSorted.map((register, index) => {
                                return (
                                    <ListRow register={register}>
                                        <ListItem
                                            date={register.date}
                                            amountGlucose={
                                                register.amountGlucose
                                            }
                                            typeInsulin={register.typeInsulin}
                                            sensitivity={register.sensitivity}
                                            amountInsulinTotal={
                                                register.amountInsulinTotal
                                            }
                                            therapy={register.therapy}
                                        />
                                    </ListRow>
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
