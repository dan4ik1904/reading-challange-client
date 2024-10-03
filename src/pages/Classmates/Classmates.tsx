import { observer } from "mobx-react-lite"
import users from "../../stores/users"
import Loading from "../../components/Loading/Loading"


const Classmates = observer(() => {

    if(users.isLoading === true) return <Loading />

    return (
        <>
            {users.classmates && (
                <></>
            )}
        </>
    )
})

export default Classmates