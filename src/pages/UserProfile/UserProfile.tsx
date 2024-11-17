import { observer } from "mobx-react-lite"
import Loading from "../../components/Loading/Loading"
import MeInfo from "../../components/Me/MeInfo"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import users from "../../stores/users"
import books from "../../stores/books"
import TopFiveBook from "../../components/UserProfile/TopFiveBook"
import TopFiveUser from "../../components/UserProfile/TopFiveUser"


const UserProfile = observer(() => {

    // const {isAuthenticated, loading, data} = useAuth()

    const params = useParams()
    const userId = params.userId

    useEffect(() => {
        if(userId) {
            Promise.all([
            users.fetchUser(userId),
            books.fetchBooksUser(userId),
            users.fetchTopUsers(1, 5)
            ])
        }
        
        
    }, [])

    if(users.isLoading === true) return <Loading />
    if(!users.oneUser) return <></>
    return (
        <div className="items">
            <MeInfo me={users.oneUser}/>
            <TopFiveBook title="Топ 5 книг" books={books.userBooks} />
            <TopFiveUser title="В топ 5 лицея" user={users.oneUser} users={users.users} />
        </div>
    )
})

export default UserProfile