import { React, useState, useContext } from 'react'

export default function Table() {
    return (
        <div className="px-20 overflow-x-auto relative pt-32 sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            <p></p>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Quantidade
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Hidratos de carbono
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Larry
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Wild
                    </td>
                </tbody>
            </table>
        </div>
    )
}
