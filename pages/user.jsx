import HomeUser from '../components/homeUser/HomeUser'
import LayoutUser from '../components/layoutUser/LayoutUser'

export default function Index() {
    return (
        <LayoutUser title="user">
            <HomeUser />
        </LayoutUser>
    )
}
