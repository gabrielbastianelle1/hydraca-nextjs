import { useState, useEffect } from 'react'
import { getAllFood } from '../../services/service.food'
import HeaderList from './HeaderList.jsx'
import { ListItem, ListRow } from './ListComponents'

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
        <div className="w-12/13 m-auto lg:h-3/6  overflow-x-auto lg:scrollbar-hide">
            <div className=" lg:grid lg:grid-cols-1  lg:mb-16 ">
                <div className=" flex static lg:absolute pb-5 pl-10 right-14 lg:right-28 lg:gap-y-2 lg:mb-8">
                    <span className=" hidden lg:aboslute lg:inset-y-0 lg:left-0 lg:flex lg:items-center lg:pl-2">
                        <button type="submit" class="p-1 focus:outline-none ">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                class="w-6 h-6"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        className="w-64 bg-gray-50 border placeholder-grey-800 focus:ring-blue-500 border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                        type="text"
                        placeholder="Pesquisar por nome"
                    />
                </div>
            </div>

            <div className="w-11/12 m-auto ">
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
