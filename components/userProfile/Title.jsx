import { User } from '../svgs/index'
import 'animate.css'

export default function Title() {
    return (
        <h1 className="title flex items-center justify-center ">
            <p className="text-2xl animate__animated animate__backInDown">
                O meu perfil
            </p>
            <User className="h-12 animate__animated animate__backInDown stroke-colorButton" />
        </h1>
    )
}
