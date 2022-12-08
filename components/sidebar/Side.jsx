import React from 'react'
import SideItem from './sideItem'
import { Home, Profile, Registar, Registos, Help } from '../svgs/index'

export default function Side() {
    return (
        <>
            <div className="hidden lg:flex">
                <aside className="flex flex-col h-screen p-3 bg-white shadow-xl shadow-blue-700 w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <img className="scale-75 " src="/images/logo.png" />
                        </div>

                        <hr className="my-4 mx-auto w-48 h-px bg-gray-300 rounded border-0 " />

                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Home />
                            <SideItem hrefLink="/user" text="Início" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md    ">
                            <Profile />
                            <SideItem hrefLink="/user/profile" text="Perfil" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Registar />
                            <SideItem
                                hrefLink="/user/registerbolus"
                                text="Registar Bolus"
                            />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Registar />
                            <SideItem hrefLink="" text="Registar Basal" />
                        </div>
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Registos />
                            <SideItem hrefLink="/" text="Visualizar Registos" />
                        </div>
                        <hr className="my-4 mx-auto w-48 h-px bg-gray-300 rounded border-0 " />
                        <div className="flex-1 flex items-center p-2 space-x-3 rounded-md ">
                            <Help />
                            <SideItem hrefLink="/" text="Ajuda " />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}
