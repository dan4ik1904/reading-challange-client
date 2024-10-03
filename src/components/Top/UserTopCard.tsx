import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../types/user.interface";
import '../Item.css'
import { MdMenuBook } from "react-icons/md";

interface IProps {
    user: IUser
}

const UserTopCard: FC<IProps> = ({user}) => {

    const navigate = useNavigate()

    const link = () => {
        navigate(`/users/${user.id}`)
    }

    return (
            <div className="item" onClick={link}>
                <div className="item__info__main">
                    <h3>{user.fullName}</h3>
                    <h4>{user.className}</h4>
                </div>
                <div className="item__info">
                    <span>
                        <span className="highlight">{user.booksCount}</span> книг
                    </span>
                    <span>
                        <span className="highlight">{user.pagesCount}</span> <MdMenuBook color="white" fontSize={'22px'} />
                    </span>
                </div>
            </div>
    );
}

export default UserTopCard