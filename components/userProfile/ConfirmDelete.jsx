import { CloseButton } from '../svgs'
import Button from '../Button'

export default function ConfirmDelete({
    confirmDelte,
    toggleConfirmDelete,
    handleSubmit
}) {
    return (
        <div className={`${confirmDelte ? 'flex' : 'hidden'} modal`}>
            <h1 className="font-bold self-center p-6 text-3xl uppercase">
                Insulina
            </h1>
            <span
                className="absolute right-10 top-10 cursor-pointer"
                onClick={toggleConfirmDelete}
            >
                <CloseButton className="w-5 h-5" />
            </span>
            <form className="flex-grow form my-16">
                <div className="item-form">
                    <label htmlFor="">Pretende eliminar a conta?</label>
                </div>
            </form>
            <Button onClick={handleSubmit}>Salvar</Button>
        </div>
    )
}
