export default function HeaderList({ registers }) {
    const onClickDate = () => {
        console.log('cliquei')
    }

    const onClickInsulin = () => {
        console.log('cliquei')
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-14 bg-headerList text-white font-bold p-2 rounded-lg px-10">
            <p className="cursor-pointer" onClick={onClickDate}>
                Data
            </p>
            <p className="hidden lg:block">Glicose</p>
            <p>Tipo insulina</p>
            <p className="hidden lg:block" onClick={onClickInsulin}>
                Insulina
            </p>
            <p className="hidden lg:block">Terapia</p>
        </div>
    )
}
