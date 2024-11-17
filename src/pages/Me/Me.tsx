import { observer } from "mobx-react-lite"
import { useEffect } from 'react'
import NoAuth from "../../components/Auth/NoAuth"
import Loading from "../../components/Loading/Loading"
import MeInfo from "../../components/Me/MeInfo"
import useAuth from "../../hooks/useAuth"
import books from "../../stores/books"
import useTelegram from "../../hooks/useTelegram"
import TopFiveBook from "../../components/UserProfile/TopFiveBook"
import TopFiveUser from "../../components/UserProfile/TopFiveUser"
import users from "../../stores/users"


const Me = observer(() => {

    const {isAuthenticated, loading, data} = useAuth()
    const { tgID } = useTelegram()

    useEffect(() => {
        Promise.all([
            books.fetchMybooks(tgID),
            users.fetchTopUsers(1, 5),
            users.fetchClassmaets(tgID)
        ])
        
    }, [])

    if(loading === true || users.isLoading) return <Loading />

    if(isAuthenticated === false) return <NoAuth />
    return (
        <div className="items">
            {
                data !== null &&  (
                    <><MeInfo me={data} thisMe/></>
                )
            }
            <TopFiveBook title="Топ 5 книг" books={books.myBooks} />
            {data && <TopFiveUser title="В топ 5 лицея" users={users.users} user={data} />}
            {users && users.classmates && users.classmates.length > 0 && data && <TopFiveUser title="В топ 5 одноклассников" users={users.classmates} user={data} />}
            
        </div>
    )
})

export default Me