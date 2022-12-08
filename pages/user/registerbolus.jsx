import RegisterBolus from '../../components/registerBolus/RegisterBolus'
import LayoutUser from '../../components/layoutUser/LayoutUser'

export default function Index() {
    return (
        <LayoutUser title="bolus">
            <RegisterBolus />
        </LayoutUser>
    )
}
