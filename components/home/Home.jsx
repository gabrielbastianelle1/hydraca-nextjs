import { Girl } from '../svgs/index'
import Welcome from './Welcome'

export default function Home() {
    return (
        <main className="relative h-full grid items-center">
            <Welcome />

            <Girl className="hidden scale-75 lg:block absolute -bottom-16 -right-20" />
        </main>
    )
}
