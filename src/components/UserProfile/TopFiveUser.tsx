import { observer } from 'mobx-react-lite'
import { FaBook } from "react-icons/fa6";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { IUser } from '../../types/user.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    users: IUser[] | null[],
    title: string,
    user: IUser
}

const TopFiveUser = observer(({ users, title, user }: IProps) => {

    if(!users) return <></>

    const nav = useNavigate()

    const topUsers = [...users].slice(0, 5);
    const userInTop = topUsers.some(topUser => topUser?.id === user.id);

    if (!userInTop) {
        topUsers[4] = { ...user, id: user.id }; // Just copy existing props, no place is needed
    }

    return (
        <div className="home__item">
            <div className="title">{title}</div>
            <div className="top__users">
                {topUsers.map((userEl, index) => (
                    <div key={userEl?.id || index} style={{cursor: 'pointer'}} className={`top__user ${userEl?.id === user.id ? 'me' : ''}`} onClick={() => nav(`/users/${userEl?.id}`)}>
                        <div className="place">
                           {userEl?.id === user.id && !userInTop ? '...' : index + 1} {/* Conditionally render place */}
                        </div>
                        <div className="name"><span>{userEl?.fullName}</span></div>
                        <div className="info__user">
                            <div className="books">
                                <span>{userEl?.booksCount}</span><FaBook />
                            </div>
                            <div className="pages">
                                <span>{userEl?.pagesCount}</span><BiSolidSpreadsheet />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ... */}
        </div>
    );
});

export default TopFiveUser