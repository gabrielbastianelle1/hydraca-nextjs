import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import SideItem from './SideItem'
export { Home } from '../svgs/index'

export default function Side() {
    return (
        <>
            <MenuIcon className="h-12 ml-auto mr-10 stroke-slate-600 cursor-pointer lg:hidden " />
            <div className="flex">
                <side className="flex flex-col h-screen p-3 bg-white shadow-xl shadow-blue-700 w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <img
                                className="scale-50 lg:scale-75 "
                                src="/images/logo.png"
                            />
                        </div>

                        <hr class="my-4 mx-auto w-48 h-px bg-gray-300 rounded border-0 " />

                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <SideItem hrefLink="/user" text="Início" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <SideItem hrefLink="/user" text="Perfil" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <SideItem hrefLink="/" text="Registar Bolus" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <SideItem hrefLink="/" text="Visualizar Registos" />
                        </div>
                        <hr class="my-4 mx-auto w-48 h-px bg-gray-300 rounded border-0 " />
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <SideItem hrefLink="/" text="Ajuda " />
                        </div>
                    </div>
                </side>
            </div>
        </>
    )
}
