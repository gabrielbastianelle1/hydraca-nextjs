export default function Form() {
    return (
        <form className="flex-grow form grid-cols-2 grid-rows-4">
            <div>
                <label htmlFor="amountGlucose">Nível de Glicose: </label>
                <input className="input" type="text" />
            </div>
        </form>
    )
}
