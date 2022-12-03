import UserProfile from '../components/userProfile/Form'
import LayoutUser from '../components/layoutUser/LayoutUser'

export default function Index() {
    return (
        <LayoutUser title="profile">
            <UserProfile />
        </LayoutUser>
    )
}
