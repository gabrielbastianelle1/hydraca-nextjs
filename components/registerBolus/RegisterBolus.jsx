import Form from './Form'
import Title from './Title'
import { GirlRegistar } from '../svgs/index'

export default function RegisterBolus() {
    return (
        <main className="flex-grow relative">
            <Title />
            <Form />
            <GirlRegistar className="hidden scale-50 lg:block absolute -bottom-16 -right-14" />
        </main>
    )
}
