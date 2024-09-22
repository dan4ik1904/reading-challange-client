import NoAuth from "../../components/Auth/NoAuth"
import Loading from "../../components/Loading/Loading"
import useAuth from "../../hooks/useAuth"


const Classmates = () => {
    const {isAuthenticated, loading} = useAuth()

    if(loading === true) return <Loading />

    if(isAuthenticated === false) return <NoAuth />
    return (
        <h3>Classmates</h3>
    )

}

export default Classmates