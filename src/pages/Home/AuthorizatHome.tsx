import { FC, useEffect } from "react"
import InfoLitsey from "../../components/Home/InfoListsey"
import TopFive from "../../components/Home/TopFive"
import users from "../../stores/users"
import useTelegram from "../../hooks/useTelegram"


const AuthorizatHome: FC = () => {

    const { tgID } = useTelegram()

    useEffect(() => {
        const fetch = async() => {
            await users.fetchTopUsers()    
            await users.fetchClassmaets(tgID)
        }
        fetch()
    }, [])

    return (
        <>
            <InfoLitsey />
            {users.users ? (
                <TopFive title="Топ лицея" users={users.users}/>    
            ) : (
                <>loading...</>
            ) }
            {users.classmates ? (
                <TopFive title={"Топ класса"} users={users.classmates}/>    
            ) : (
                <></>
            )}
        </>
    )
}

export default AuthorizatHome