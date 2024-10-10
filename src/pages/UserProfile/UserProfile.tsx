import { observer } from "mobx-react-lite"
import NoAuth from "../../components/Auth/NoAuth"
import Loading from "../../components/Loading/Loading"
import MeInfo from "../../components/Me/MeInfo"
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"
// import { useParams } from "react-router-dom"
import users from "../../stores/users"


const Me = observer(() => {

    const {isAuthenticated, loading, data} = useAuth()

    // const params = useParams()
    // const userId = params.id

    useEffect(() => {
        users.fetchAllUsers()
    })

    if(loading === true) return <Loading />

    if(isAuthenticated === false) return <NoAuth />
    return (
        <>
            {
                data !== null &&  (
                    <><MeInfo me={data}/></>
                )
            }
            
        </>
    )
})

export default Me