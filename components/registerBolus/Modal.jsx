import { CloseButton } from '../svgs'
import Button from '../Button'

export default function Modal({
    modal,
    toggleModal,
    amountInsulinCorrection,
    amountInsulinHc,
    amountInsulinTotal,
    handleSubmit
}) {
    return (
        <div className={`${modal ? 'flex' : 'hidden'} modal`}>
            <h1 className="font-bold self-center p-6 text-3xl uppercase">
                Insulina
            </h1>
            <span
                className="absolute right-10 top-10 cursor-pointer"
                onClick={toggleModal}
            >
                <CloseButton className="w-5 h-5" />
            </span>
            <form className="flex-grow form my-16">
                <div className="item-form">
                    <label htmlFor="">Insulina de correção: </label>
                    <input
                        type="number"
                        className="input"
                        placeholder={amountInsulinCorrection}
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="">Insulina de carboidrato: </label>
                    <input
                        type="number"
                        className="input"
                        placeholder={amountInsulinHc}
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="">Insulina de total: </label>
                    <input
                        type="number"
                        className="input"
                        placeholder={amountInsulinTotal}
                    />
                </div>
            </form>
            <Button onClick={handleSubmit}>Salvar</Button>
        </div>
    )
}
