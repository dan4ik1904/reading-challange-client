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
import { useNavigate } from "react-router-dom"


const Me = observer(() => {

    const {isAuthenticated, loading, data} = useAuth()
    const { tgID } = useTelegram()

    const nav = useNavigate()

    useEffect(() => {
        Promise.all([
            books.fetchMybooks(tgID),
            users.fetchTopFiveUsers(),
        ])
        
    }, [])

    useEffect(() => {
        if(tgID) users.fetchClassmaets(tgID)
    }, [tgID])

    const logout = () => {
        users.authLogout(tgID)
        .finally(() => {
            nav('/')
        })
    }

    if(loading === true || users.isLoading) return <Loading />

    if(isAuthenticated === false) return <NoAuth />
    return (
        <div className="items">
            {users.isAvtiveLogoutButton ? (
                <div className="title">
                    <h6>Вы точно хотите выйти?</h6>
                    <button onClick={() => logout()}>Выйти</button>
                    <button onClick={() => users.isAvtiveLogoutButton = false}>Отмена</button>
                </div>
            ) : (
                <>
                    {data !== null && <MeInfo me={data} thisMe />}
                    <TopFiveBook title="Топ 5 книг" books={books.myBooks} />
                    {data && <TopFiveUser title="В топ 5 лицея" users={users.topFiveUsers} user={data} />}
                    {users.classmates.length > 0 && data && (
                        <TopFiveUser title="В топ 5 одноклассников" users={users.classmates} user={data} />
                    )}
                </>
            )}
        </div>
    )
})

export default Me