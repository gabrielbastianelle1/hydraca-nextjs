import { useState, useEffect } from 'react'
import { getAllFood } from '../../services/service.food'
import HeaderList from './HeaderList.jsx'
import { ListItem, ListRow } from './ListComponents'

export default function List() {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        getAllFood()
            .then((response) => setFoods(response.data))
            .catch((error) => console.log(error))
    })

    return (
        <div className="w-11/12 m-auto">
            <HeaderList foods={foods} />
            <div>
                {foods.map((food, index) => {
                    return (
                        <ListRow food={food}>
                            <ListItem
                                name={food.name}
                                qtd={food.qtd}
                                Hc={food.Hc}
                            />
                        </ListRow>
                    )
                })}
            </div>
        </div>
    )
}
