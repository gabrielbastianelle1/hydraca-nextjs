import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import SideItem from './SideItem'
import { Home, Profile, Registar, Registos, Help } from '../svgs/index'

export default function Side() {
    return (
        <>
            <MenuIcon className="h-12 ml-auto mr-10 stroke-slate-600 cursor-pointer   lg:hidden " />
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
                            <Home />
                            <SideItem hrefLink="/user" text="Início" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Profile />
                            <SideItem hrefLink="/userProfile" text="Perfil" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Registar />
                            <SideItem hrefLink="/" text="Registar Bolus" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Registos />
                            <SideItem hrefLink="/" text="Visualizar Registos" />
                        </div>
                        <hr class="my-4 mx-auto w-48 h-px bg-gray-300 rounded border-0 " />
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Help />
                            <SideItem hrefLink="/" text="Ajuda " />
                        </div>
                    </div>
                </side>
            </div>
        </>
    )
}
