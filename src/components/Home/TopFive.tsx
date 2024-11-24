import { observer } from 'mobx-react-lite'
import './Home.css'
import { FaBook } from "react-icons/fa6";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { IUser } from '../../types/user.interface';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface IProps {
    users: IUser[] | null[],
    title: string
}

const TopFive = observer(({ users, title }: IProps) => {

    const nav = useNavigate()

    const { data } = useAuth()

    return (
    <div className="home__item">
        <div className="title">
            {title}
        </div>
        <div className="top__users">
            {users ? (
                <>{users.slice(0, 5).map((user, key) => (
                    <div className={user?.id == data?.id ? "top__user me" : 'top__user'} style={{cursor: 'pointer'}} onClick={() => nav(`/users/${user?.id}`)}>
                        <div className="place">
                            {key+1}
                        </div>
                        <div className="name">
                            <span>{user?.fullName}</span>
                        </div>
                        <div className="info__user">
                            <div className="books">
                                <span>{user?.booksCount}</span>
                                <FaBook fontSize={'20px'} />
                            </div>
                            <div className="pages">
                                <span style={{flexWrap: 'nowrap'}}>{user?.pagesCount}</span>
                                <BiSolidSpreadsheet fontSize={'20px'} /> 
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