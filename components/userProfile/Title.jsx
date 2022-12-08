import { User } from '../svgs/index'

export default function Title() {
    return (
        <h1 className="title flex items-center justify-center space-x-3">
            <p>Perfil</p>
            <User className="h-20 stroke-colorButton" />
        </h1>
    )
}
