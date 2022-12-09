import { User } from '../svgs/index'

export default function Title() {
    return (
        <h1 className="title flex items-center justify-center ">
            <p className="text-2xl">O meu perfil</p>
            <User className="h-12 stroke-colorButton" />
        </h1>
    )
}
