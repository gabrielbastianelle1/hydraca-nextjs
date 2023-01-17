import { useState, useEffect } from 'react'
import { getAllFood } from '../../services/service.food'
import HeaderList from './HeaderList.jsx'
import { ListItem, ListRow } from './ListComponents'
import Search from './Search'

export default function List() {
    const [foods, setFoods] = useState([])
    const [foodsFiltered, setFoodsFiltered] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        getAllFood()
            .then((response) => setFoods(response.data))
            .catch((error) => console.log(error))
    })

    useEffect(() => {
        setFoodsFiltered(foods.filter((food) => food.name.includes(search)))
    }, [search])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="flex flex-col w-11/12 m-auto lg:h-4/6">
            <Search handleChange={handleChange} />

            <div className="   overflow-x-auto lg:scrollbar-hide">
                <HeaderList foods={foods} className="fixed" />
                <div>
                    {search.length == 0 ? (
                        <>
                            {foods.map((food) => {
                                return (
                                    <ListRow>
                                        <ListItem
                                            name={food.name}
                                            qtd={food.qtd}
                                            Hc={food.Hc}
                                        />
                                    </ListRow>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            {foodsFiltered.map((food) => {
                                return (
                                    <ListRow>
                                        <ListItem
                                            name={food.name}
                                            qtd={food.qtd}
                                            Hc={food.Hc}
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
