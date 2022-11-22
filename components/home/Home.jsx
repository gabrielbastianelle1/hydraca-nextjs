import { Girl } from '../svgs/index'
import Welcome from './Welcome'

export default function Home() {
    return (
        <div className="relative flex-grow flex items-center justify-center">
            <Welcome />

            <Girl className="hidden scale-75 lg:block absolute -bottom-16 -right-20" />
        </div>
    )
}
