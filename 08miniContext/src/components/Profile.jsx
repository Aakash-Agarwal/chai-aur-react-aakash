import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Please login</div>
    return <div>User logged in using {user.username} username and {user.password} password</div>
}
