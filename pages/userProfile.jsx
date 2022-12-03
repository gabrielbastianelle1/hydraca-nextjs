import { useEffect } from 'react'
import HomeUser from '../components/homeUser/HomeUser'
import SideBar from '../components/headerUser/SideBar'
import UserProfile from '../components/userProfile/Form'

export default function Index() {
    return (
        <main title="Hydraca">
            <UserProfile />
        </main>
    )
}
