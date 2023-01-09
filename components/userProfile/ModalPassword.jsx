import { CloseButton } from '../svgs'
import Button from '../Button'

export default function ModalPassword({
    modalPassword,
    toggleModalPassword,
    handleSubmit
}) {
    return (
        <div className={`${modalPassword ? 'flex' : 'hidden'} modal`}>
            <h1 className="font-bold self-center p-6 text-3xl uppercase">
                Alterar senha
            </h1>
            <span
                className="absolute right-10 top-10 cursor-pointer"
                onClick={toggleModalPassword}
            >
                <CloseButton className="w-5 h-5" />
            </span>
            <form className="flex-grow form my-16">
                <div className="item-form">
                    <label htmlFor="">Digite a nova senha: </label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Digite a nova  senha"
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="">Digite a nova senha: </label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Digite a nova  senha"
                    />
                </div>
            </form>
            <Button onClick={handleSubmit}>Salvar</Button>
        </div>
    )
}
