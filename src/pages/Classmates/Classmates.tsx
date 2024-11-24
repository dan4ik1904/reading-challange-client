import { observer } from "mobx-react-lite"
import users from "../../stores/users"
import Loading from "../../components/Loading/Loading"
import UserTopCard from "../../components/Top/UserTopCard"
import { useEffect } from "react"
import useTelegram from "../../hooks/useTelegram"
import NoAuth from "../../components/Auth/NoAuth"
import useAuth from "../../hooks/useAuth"


const Classmates = observer(() => {

    const { tgID } = useTelegram()
    const { isAuthenticated, loading } = useAuth()

    useEffect(() => {
        if(tgID) users.fetchClassmaets(tgID)
    }, [tgID])

    if(users.isLoading === true) return <Loading />

    if(isAuthenticated === false && loading === false) return <NoAuth />
    return (
        <div className="items users">
            {users.classmates && (
                <>
                    {users.classmates.map(user => (
                        <><UserTopCard user={user}/></>
                    ))}
                </>
            )}
        </div>
    )
})

export default Classmates