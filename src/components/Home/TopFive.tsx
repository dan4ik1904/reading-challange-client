import { observer } from 'mobx-react-lite'
import './Home.css'
import { useEffect } from 'react'
import users from '../../stores/users'


const TopFive = observer(() => {

    const getPLace = (place: number) => {
        if(place === 1) {
            return (
                <>1</>
            )
        }else if(place === 2) {
            return (
                <>2</>
            )
        }else if(place === 3) {
            return (
                <>3</>
            )
        }else if(place === 4) {
            return (
                <>4</>
            )
        }else if(place === 5) {
            return (
                <>5</>
            )
        }
    }

    useEffect(() => {
        users.fetchTopUsers()
    }, [])
    return (
    <div className="home__item">
        <div className="top__users">
            {users.users ? (
                <>{users.users.slice(0, 5).map((user, key) => (
                    <div className="top__user">
                        <div className="place">
                            {getPLace(key + 1)}
                        </div>
                        <div className="name">
                            <span>{user.fullName}</span>
                        </div>
                        <div className="info">
                            <div className="books">
                                <span>{user.booksCount}</span>
                            </div>
                            <div className="pages">
                                <span>{user.pagesCount}</span>
                            </div>
                        </div>
                    </div>
                ))}</>
            ) : (
                <>Loading</>
            )}
        </div>
    </div>
    )
})

export default TopFive