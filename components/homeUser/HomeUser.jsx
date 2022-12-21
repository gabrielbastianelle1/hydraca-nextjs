import { React } from 'react'

export default function User() {
    return (
        <div className="flex-grow grid grid-cols-2 grid-rows-2 items-center">
            <div className="box-content  sm:h-32   sm:w-60 bg-blue-900 rounded-lg justify-self-center">
                <h1 className="font-semibold text-slate-50 mt-4 mr-10 ml-2">
                    Não se esqueaça de registar os dados da glicose de hoje!
                </h1>
            </div>
            <div>dois</div>
            <div>tres</div>
            <div>
                <img
                    className="hidden w-72 lg:block absolute bottom-0 right-0"
                    src="/images/4435922.jpg"
                />
            </div>
        </div>
    )
}
