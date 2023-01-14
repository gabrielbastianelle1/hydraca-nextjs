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
        <div className="w-12/13 m-auto lg:h-3/6  overflow-x-auto">
            <Search handleChange={handleChange} />

            <div className="w-11/12 m-auto">
                <HeaderList foods={foods} />
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
