import { React, useState, useContext } from 'react'

export default function HeaderList({ foods }) {
    return (
        <div className="sticky top-0 px-6 py-3  grid grid-cols-2  lg:grid-cols-3  bg-headerList text-white font-bold p-2 rounded-lg px-10">
            <p>Nome</p>
            <p className="hidden lg:block">Quantidade por 100gr</p>
            <p className="hidden lg:block">Hidratos de Carbono</p>
            <p className="lg:hidden">Hidratos de Carbono por 100gr</p>
        </div>
    )
}
